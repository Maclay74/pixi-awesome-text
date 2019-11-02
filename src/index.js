const createIndices = require("quad-indices")
import TextLayout from './layout';
import Select from "./select";
import Input from "./input";

const vertexShader = require("./shaders/text/vert.glsl");
const fragmentShader = require("./shaders/text/frag.glsl");

class Text {

  static scale = 1.0;
  static states = {regular: 0, editable: 1, selecting: 2};
  static currentEditingElement = null;

  state = Text.states.regular;
  clicksCount = 0;

  config = {
    editable: false,
    uppercase: false,
    lowercase: false,
    antialiasing: true,
    backgroundColor: "#000000"
  };

  constructor(text, style, config) {

    // Basic params
    this.style = new PIXI.TextStyle(style);
    this.config = {...this.config, ...config};
    this.backgroundColor = this.config.backgroundColor;
    this._text = text; // Content
    this._font = config.font; // Font information
    this._texture = config.texture; // Texture with glyphs

    this.layout = this.createLayout(this.style);

    // Create structure
    this.container = new PIXI.Container();
    this.container.awesomeText = this;

    // If field is editable, prepare it
    if (this.config.editable) {
      this.container.interactive = true;
      this.container.buttonMode = true;

      this.select = new Select(this);
      this.input = new Input(this);
      this.setState(Text.states.regular);
    }

    this.update();

    return this.container;
  }

  createLayout = ({fontSize = 13, breakWords : wrapWords  = false, wordWrapWidth : wrapperWidth = 400, align = "left", lineHeight = 17}) => new TextLayout(this, {
    fontSize,
    wrapWords,
    wrapperWidth,
    align,
    lineHeight,
  });

  createGeometry() {

    // Arrays for vertices, uvs and sdf
    this.vertices = new Float32Array(this.layout.lettersCount * 4 * 2);
    this.uvs = new Float32Array(this.layout.lettersCount * 4 * 2);
    this.sdfSizes = new Float32Array(this.layout.lettersCount * 4);
    this.arrayPositions = { vertex: 0, uvs: 0, sdf: 0 };

    // Fill arrays word by word
    this.layout.wordsMetrics.forEach (word => {
      this.writeString(word.word, this.font, this.metrics, [word.x, word.y]);
    });

    // Prepare indices
    this.indices = createIndices({
      clockwise: true,
      type: 'uint16',
      count: this.layout.lettersCount
    });

    // Fill up the geometry
    return new PIXI.Geometry()
        .addAttribute('aVertexPosition', // the attribute name
            this.vertices, // x, y
            2) // the size of the attribute

        .addAttribute('aTextureCoord', // the attribute name
            this.uvs, // u, v
            2) // the size of the attribute

        .addAttribute('aSdfSize', // the attribute name
            this.sdfSizes, // u, v
            1) // the size of the attribute
        .addIndex(this.indices)
  }

  createMesh({geometry = new PIXI.Geometry(), vert = "", frag = ""}) {
    // Pass uniforms to the shader
    const uniforms = {
      uSampler: this._texture,
      hint_amount: this.config.antialiasing * 1,
      sdfMultiplier: Text.scale,
      subpixel_amount: this.config.antialiasing * 1,
      font_color: PIXI.utils.hex2rgb(this.style.fill.replace("#", "0x")),
      bg_color: PIXI.utils.hex2rgb(this.backgroundColor.replace("#", "0x"))
    };

    if (!this.textShader) {
      this.textShader = PIXI.Shader.from(vert, frag, uniforms);
    }

    return new PIXI.Mesh(geometry, this.textShader);
  }

  update() {
    this.metrics = this.fontMetrics(this.style.fontSize, 0.0);
    this.layout.update();

    if (this.config.editable) {
      this.select.update();
      this.input.update();
    }

    if (this.textGeometry)
      this.textGeometry.destroy();

    if (this.textMesh)
      this.container.removeChild(this.textMesh)

    // Create text geometry (vertices, uvs, etc)
    this.textGeometry = this.createGeometry();

    // Create text mesh
    this.textMesh = this.createMesh({
      geometry : this.textGeometry,
      vert: vertexShader,
      frag: fragmentShader
    });

    this.container.addChild(this.textMesh);
  }

  get texture() {
    return this._texture;
  }

  get font() {
    return this._font
  }

  get text() {
    return this._text;
  }

  set text(value) {
    this._text = value;
    this.update();
  }

  setState(newState) {

    if (newState === Text.states.editable || newState === Text.states.selecting) {
      this.select.enabled = true;
    } else {
      this.select.enabled = false;
    }

    if (!this.config.editable) {
      return;
    }

    const { states } = Text;

    if (!newState in Object.values(states)) return;

    switch (newState) {
      case states.regular:
        this.setRegularState();
        break;
      case states.editable:
        if (this.state === Text.states.regular) {
          this.setEditableState();
        }
        break;
    }

    this.state = newState;
  }

  setRegularState() {

    Text.currentEditingElement = null;

    this.container.off("mousedown");
    this.container.off("mousemove");
    this.container.off("mouseup");
    this.container.off("mouseupoutside");

    this.input.enabled = false;

    this.container.on("click", e => {
      if (this.clicksCount === 1) {
        this.clicksCount = 0;
        this.setState(Text.states.editable);
      }

      if (this.clicksCount === 0) {
        this.clicksCount++;
        window.setTimeout(() => {
          this.clicksCount = 0;
        }, 300)
      }
    })

  }

  setEditableState() {

    // Disable previously enabled field
    if (Text.currentEditingElement != null) {
      Text.currentEditingElement.setState(Text.states.regular);
    }
    Text.currentEditingElement = this;

    // Disable unnecessary events
    this.container.off("click");

    this.input.enabled = true;
    this.input.hide();

    // Select all characters
    this.select.setRange(0,this.text.length - 1);
    this.input.inputElement.focus();

    this.container.on("mousedown", e => {
      this.setState(Text.states.selecting);
      this.select.onMouseDown(e);
      this.input.show();
      this.input.update(e);
    });

    this.container.on("mousemove", e => {
      const {movementX, movementY} = e.data.originalEvent;
      if (movementX === 0 && movementY === 0) return;

      if (this.state === Text.states.selecting) {
        this.select.onMouseMove(e);
        this.input.hide();
      }
    });

    this.container.on("mouseup", e => {
      this.setState(Text.states.editable);
      this.select.onMouseUp(e);
    });

    this.container.on("mouseupoutside", e => {
      this.setState(Text.states.editable);
      this.select.onMouseUp(e);
    });

  }

  insertString(index, string) {
    this.text = this.text.substr(0, index) + string + this.text.substr(index);
  }

  removeString(index, length) {
    let newText = this.text.split("");
    newText.splice(index, length + 1);
    this.text = newText.join("");
  }

  writeString( string, font, font_metrics, pos) {
    let prev_char = " ";  // Used to calculate kerning
    let cpos      = pos;  // Current pen position
    let x_max     = 0.0;  // Max width - used for bounding box
    let scale     = font_metrics.capScale;

    let str_pos = 0;

    for(;;) {
      if ( str_pos === string.length ) break;

      var schar = string[ str_pos ];
      str_pos++;

      if ( schar === "\n" ) {
        if ( cpos[0] > x_max ) x_max = cpos[0]; // Expanding the bounding rect
        cpos[0]  = pos[0];
        cpos[1] -= font_metrics.lineHeight;
        prev_char = " ";
        continue;
      }

      if ( schar === " " ) {
        //schar = "_"
        //cpos[0] += font.space_advance * scale;
        //prev_char = " ";
        //continue;
      }

      var font_char = font.chars[ schar ];
      if ( !font_char ) {                         // Substituting unavailable characters with '?'
        schar = "?";
        font_char = font.chars[ "?" ];
      }

      var kern = font.kern[ prev_char + schar ];
      if ( !kern ) kern = 0.0;

      // calculating the glyph rectangle and copying it to the vertex array
      var rect = this.charRect( cpos, font, font_metrics, font_char, kern );

      rect.positions.map((pos) => this.vertices[ this.arrayPositions.vertex++ ] = pos );
      rect.uvs.map((uv) => this.uvs[ this.arrayPositions.uvs++ ] = uv );
      rect.sdfSizes.map((sdf) => this.sdfSizes[ this.arrayPositions.sdf++ ] = sdf );

      prev_char = schar;
      cpos = rect.pos;
    }

    return {
      rect : [ pos[0], pos[1], x_max - pos[0], pos[1] - cpos[1] + font_metrics.lineHeight ],
      string_pos : str_pos,
      //array_pos : array_pos
    }

  }

  fontMetrics(fontSize, moreLineGap = 0.2) {

    const {cap_height, x_height, ascent: fontAscent , descent, line_gap} = this.font;

    const capScale = this.style.fontSize / cap_height;
    const lowScale = Math.round( x_height * capScale ) / x_height;
    const ascent = Math.round( fontAscent * capScale );
    let lineHeight = Math.round( capScale * ( fontAscent + descent + line_gap ) + moreLineGap);

    if (this.style.lineHeight > 0)
      lineHeight = this.style.lineHeight;
    else
      this.style.lineHeight = lineHeight;

    return {
      capScale   : capScale,
      lowScale   : lowScale,
      ascent      : ascent,
      lineHeight : lineHeight
    };
  }

  charRect( pos, font, font_metrics, font_char, kern = 0.0 ) {

    // Low case characters have first bit set in 'flags'
    var lowcase = ( font_char.flags & 1 ) === 1;

    // Pen position is at the top of the line, Y goes up
    var baseline = pos[1] - font_metrics.ascent;

    // Low case chars use their own scale
    var scale = lowcase ? font_metrics.lowScale : font_metrics.capScale;

    // Laying out the glyph rectangle
    var g      = font_char.rect;
    var bottom = baseline - scale * ( font.descent + font.iy );
    var top    = bottom   + scale * ( font.row_height );
    var left   = pos[0]   + scale * ( font_char.bearing_x + kern - font.ix );
    var right  = left     + scale * ( g[2] - g[0] );
    var p = [ left, top, right, bottom ];

    // Advancing pen position
    var new_pos_x = pos[0] + scale * ( font_char.advance_x );

    // Signed distance field size in screen pixels
    var sdf_size  = 2.0 * font.iy * scale;

    const positions = [
      p[0], p[3], // left bottom,
      p[2], p[3], // right bottom,
      p[2], p[1], // right top
      p[0], p[1], // left top
    ];

    const uvs = [
      g[0], g[1], // left top
      g[2], g[1], // right top
      g[2], g[3], // right bottom,
      g[0], g[3], // left bottom,
    ];

    const sdfSizes = [
      sdf_size,
      sdf_size,
      sdf_size,
      sdf_size,
    ];

    return {
      positions,
      uvs,
      sdfSizes,
      pos: [ new_pos_x, pos[1] ]
    };

    //return { vertices : vertices, pos : [ new_pos_x, pos[1] ] };
  }

}

export default Text;
