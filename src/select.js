const createIndices = require("quad-indices")
const vertexShader = require("./shaders/select/vert.glsl");
const fragmentShader = require("./shaders/select/frag.glsl");

class Select {

  range = [0,0];
  metrics = null;
  layout = null;
  dirty = false;
  indexBuffer = false;
  owner = null;
  _enabled = false;

  set enabled(value) {
    this._enabled = value;
    this.update()
  }

  get enabled() {
    return this._enabled
  }

  constructor(owner) {
    this.owner = owner.container;
    this.metrics = owner.metrics;
    this.layout = owner.layout;
  }

  createGeometry() {

    // Arrays for vertices, uvs and sdf
    this.vertices = new Float32Array(this.layout.lettersCount * 4 * 2);

    this.buildVertices();

    // Prepare indices
    this.indices = createIndices({
      clockwise: true,
      type: 'uint16',
      count: this.layout.linesCount
    });

    // Fill up the geometry
    return new PIXI.Geometry()
        .addAttribute('aVertexPosition', // the attribute name
            this.vertices, // x, y
            2) // the size of the attribute
        .addIndex(this.indices)
  }

  createMesh({geometry = new PIXI.Geometry(), vert = "", frag = ""}) {
    // Pass uniforms to the shader

    const uniforms = {
      bg_color: PIXI.utils.hex2rgb(this.owner.awesomeText.backgroundColor.replace("#", "0x")),
    };

    if (!this.shader) {
      this.shader = PIXI.Shader.from(vert, frag, uniforms);
    }

    this.shader.uniforms.enabled = this.enabled ? 1.0 : 0.0

    return new PIXI.Mesh(geometry, this.shader);
  }

  update() {
    this.metrics = this.owner.awesomeText.metrics;
    this.layout = this.owner.awesomeText.layout;

    if (this.mesh)
      this.owner.removeChild(this.mesh);

    if (this.range[1] !== null) {
      const geometry = this.createGeometry();
      this.mesh = this.createMesh({
        geometry,
        vert: vertexShader,
        frag: fragmentShader
      });

      this.mesh.blendMode = PIXI.BLEND_MODES.NORMAL_NPM;

      this.owner.addChild(this.mesh);
    }

  }

  setRange(start = null, end = null) {

    const {glyphs} = this.owner.awesomeText.layout;

    if (start === null) start = this.range[0];
    if (end === null) end = this.range[1];

    if (start < 0) start = 0;
    if (end < 0) end = 0;

    if (start > glyphs.length -1)start = glyphs.length - 1;
    if (end > glyphs.length - 1) end = glyphs.length - 1;

    if (end === false) end = null;

    this.range = [start, end];
    this.update();
  }

  buildVertices() {

    this.metrics = this.owner.awesomeText.layout.metrics;
    // Select range
    let start = this.layout.glyphs[Math.min.apply(null,this.range)];
    let end = this.layout.glyphs[Math.max.apply(null,this.range)];


    // Iterate thought all lines
    for (let i = 0; i < this.layout.linesCount; ++i) {
      let letterCount = 0; // letters passed
      let firstLetter = null; // first letter on this line
      let lastLetter = null; // last letter on this line


      if (i * this.metrics.lineHeight + this.metrics.lineHeight < start.position[1]) continue;
      if (i * this.metrics.lineHeight + this.metrics.lineHeight > end.position[1]) continue;

      // Take every word, if it's last or first on line - change bounds letters
      this.layout.wordsMetrics.map(word => {

        if (word.y === this.layout.startY + (i * this.metrics.lineHeight)) {
          if (firstLetter === null) firstLetter = letterCount;
          lastLetter = letterCount + word.word.length - 1;
        }

        letterCount += word.word.length;
      });



      // Bounds letters for current line
      let startLineLetter = this.layout.glyphs[firstLetter];
      let endLineLetter = this.layout.glyphs[lastLetter];

      // If the start or end range is on this line, change bounds for them
      if (start.position[1] ===  startLineLetter.position[1]) startLineLetter = start;
      if (end.position[1] === endLineLetter.position[1]) endLineLetter = end;

      // We use offset to avoid selects overlapping
      const offset = (this.metrics.lineHeight - this.metrics.ascent) / 2;

      // Add positions to array
      this.vertices[(i * 8)] = startLineLetter.vertices[0];
      this.vertices[(i * 8) + 1] = startLineLetter.vertices[1] + offset;

      this.vertices[(i * 8) + 2] = endLineLetter.vertices[2];
      this.vertices[(i * 8) + 3] = endLineLetter.vertices[3]   + offset;

      this.vertices[(i * 8) + 4] = endLineLetter.vertices[4];
      this.vertices[(i * 8) + 5] = endLineLetter.vertices[5]  - offset;

      this.vertices[(i * 8) + 6] = startLineLetter.vertices[6];
      this.vertices[(i * 8) + 7] = startLineLetter.vertices[7]  - offset;

    }

  }

  getClosestGlyph(x, y) {
    this.metrics = this.owner.awesomeText.metrics;
    this.layout = this.owner.awesomeText.layout;

    const { glyphs } = this.owner.awesomeText.layout;

    const lineHeight = this.metrics.lineHeight;
    const selectingLine = Math.floor(y / this.metrics.lineHeight);
    const selectingLineY = selectingLine * lineHeight;
    let lastGlyphOnLine = glyphs[glyphs.length - 1];
    let firstGlyphOnLine = null;

    for (let i = 0; i < glyphs.length ; ++i) {

      let glyph = glyphs[i];

      if (glyph.metrics.y === selectingLineY + lineHeight) {
        lastGlyphOnLine = glyph;
        if (x < glyph.metrics.x + glyph.metrics.width / 2) {
          if (i === 0) return -1;

          return glyphs[i - 1];
        }
      }
    }

    return lastGlyphOnLine;

  }

  onMouseDown(event) {
    // Only left mouse button
    if (event.data.button !== 0) return;

    let position = event.data.global;
    position = this.transformPosition(position);

    const closestLetter = this.getClosestGlyph(position.x , position.y);

    let index = this.owner.awesomeText.layout.glyphs.indexOf(closestLetter);

    this.setRange(index + 1, false );
  }

  onMouseMove(event) {
    let position = event.data.global;
    position = this.transformPosition(position);

    const closestLetter = this.getClosestGlyph(position.x  , position.y);
    let index = this.owner.awesomeText.layout.glyphs.indexOf(closestLetter);

    this.setRange(null, index + 1);
  }

  onMouseUp(event) {

    // Only left mouse button
    if (event.data.button !== 0) return;

    let position = event.data.global;
    position = this.transformPosition(position);

    const closestLetter = this.getClosestGlyph(position.x , position.y);


    // -1 means that we at the start of the line
    if (closestLetter === -1) {
      this.owner.awesomeText.input.glyphIndex = closestLetter;
    } else {
      this.owner.awesomeText.input.glyphIndex = this.owner.awesomeText.layout.glyphs.indexOf(closestLetter);
    }
  }

  transformPosition(position) {
    const ownerPosition = this.owner.getGlobalPosition();
    const transform = this.owner.worldTransform;

    position.x -= transform.tx;
    position.y -= transform.ty;

    position.x = position.x / transform.a;
    position.y = position.y / transform.d;

    return position;
  }

  clearSelectedRange() {

    const range = this.range;

    // If user selected some text, remove it
    if (range[1] !== null) {
      this.owner.awesomeText.input.glyphIndex = Math.min(range[0] - 1, range[1] - 1);
      const removeIndex = Math.min.apply(null, range);
      const removeLength = Math.abs(range[0] - range[1]);
      this.owner.awesomeText.select.setRange(0,false);
      this.owner.awesomeText.removeString(removeIndex, removeLength);
      this.owner.awesomeText.input.show();
    }
  }

  expand(direction) {
    this.range[1] += direction;
    this.update();
  }

}

export default Select;
