const createIndices = require("quad-indices")
const TextLayout = require("./layout")


class AwesomeText extends PIXI.mesh.Mesh {

  constructor(text, style, font) {
    super(font.texture);

    this.style = new PIXI.TextStyle(style);
    this.backgroundColor = style.backgroundColor;
    this._text = text;
    this._font = font.font;

    //TODO separate font and texture
    this._texture = font.texture;
    this.pluginName = 'AwesomeTextRenderer';
  }

  update() {

    this.layout = new TextLayout(this.text, this.font, {
      fontSize: this.style.fontSize,
      wrapWords: this.style.breakWords,
      wrapperWidth: this.style.wordWrapWidth,
      align: this.style.align,
      lineHeight: this.style.lineHeight,
    });

    this.metrics = this.fontMetrics( this.font, this.style.fontSize, this.style.fontSize * 0.2 );
    this.vertices = new Float32Array(this.layout.lettersCount * 4 * 2);
    this.uvs = new Float32Array(this.layout.lettersCount * 4 * 2);
    this.sdfSizes = new Float32Array(this.layout.lettersCount * 4);

    this.arrayPositions = { vertex: 0, uvs: 0, sdf: 0 };

    this.layout.wordsMetrics.forEach (word => {
      this.writeString(word.word, this.font, this.metrics, [word.x, word.y]);
    });

    this.indices = createIndices({
      clockwise: true,
      type: 'uint16',
      count: this.layout.lettersCount
    });

    this.styleID = this.style.styleID;
    this.dirty++;
    this.indexDirty++;
  }

  get text() {
    return this._text;
  }

  set text(value) {
    this._text = value;
    this.update();
  }

  get texture() {
    return this._texture;
  }

  get font() {
    return this._font
  }

  writeString( string, font, font_metrics, pos) {
    let prev_char = " ";  // Used to calculate kerning
    let cpos      = pos;  // Current pen position
    let x_max     = 0.0;  // Max width - used for bounding box
    let scale     = font_metrics.cap_scale;

    let str_pos = 0;

    for(;;) {
      if ( str_pos === string.length ) break;

      var schar = string[ str_pos ];
      str_pos++;

      if ( schar === "\n" ) {
        if ( cpos[0] > x_max ) x_max = cpos[0]; // Expanding the bounding rect
        cpos[0]  = pos[0];
        cpos[1] -= font_metrics.line_height;
        prev_char = " ";
        continue;
      }

      if ( schar === " " ) {
        //schar = "_"
        cpos[0] += font.space_advance * scale;
        prev_char = " ";
        continue;
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
      rect : [ pos[0], pos[1], x_max - pos[0], pos[1] - cpos[1] + font_metrics.line_height ],
      string_pos : str_pos,
      //array_pos : array_pos
    }

  }

  fontMetrics( font, pixel_size, more_line_gap = 0.0 ) {
    // We use separate scale for the low case characters
    // so that x-height fits the pixel grid.
    // Other characters use cap-height to fit to the pixels
    var cap_scale   = pixel_size / font.cap_height;
    var low_scale   = Math.round( font.x_height * cap_scale ) / font.x_height;

    // Ascent should be a whole number since it's used to calculate the baseline
    // position which should lie at the pixel boundary
    var ascent      = Math.round( font.ascent * cap_scale );

    // Same for the line height
    var line_height = Math.round( cap_scale * ( font.ascent + font.descent + font.line_gap ) + more_line_gap );


    return { cap_scale   : cap_scale,
      low_scale   : low_scale,
      pixel_size  : pixel_size,
      ascent      : ascent,
      line_height : line_height
    };
  }

  charRect( pos, font, font_metrics, font_char, kern = 0.0 ) {

    // Low case characters have first bit set in 'flags'
    var lowcase = ( font_char.flags & 1 ) === 1;

    // Pen position is at the top of the line, Y goes up
    var baseline = pos[1] - font_metrics.ascent;

    // Low case chars use their own scale
    var scale = lowcase ? font_metrics.low_scale : font_metrics.cap_scale;

    //scale = font_metrics.low_scale;

    //scale += 20;

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

AwesomeText.scale = 1.0;

export default AwesomeText;
