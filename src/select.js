const createIndices = require("quad-indices")

class Select {

  range = [0,0];
  metrics = null;
  layout = null;
  dirty = false;
  indexBuffer = false;
  owner = null;

  constructor(owner) {
    this.owner = owner;
    this.metrics = owner.metrics;
    this.layout = owner.layout;
  }

  update() {
    this.metrics = this.owner.metrics;
    this.layout = this.owner.layout;

    // Vertices array for all selected lines
    this.vertices = new Float32Array(this.layout.linesCount * 4 * 2);

    if (this.range[1] !== null)
    this.buildVertices();

    this.indices = createIndices({
      clockwise: true,
      type: 'uint16',
      count:this.layout.linesCount
    });

    this.dirty = true;
    this.indexBuffer = true;
  }

  setRange(start = null, end = null) {

    const {glyphs} = this.owner.layout;

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

    const { glyphs } = this.owner.layout;

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

    position.x -= this.owner.position.x;
    position.y -= this.owner.position.y;

    position.x = position.x /  this.owner.scale.x;
    position.y = position.y / this.owner.scale.y;

    const closestLetter = this.getClosestGlyph(position.x , position.y);
    let index = this.owner.layout.glyphs.indexOf(closestLetter);

    this.setRange(index + 1, false );
  }

  onMouseMove(event) {

    let position = event.data.global;

    position.x -= this.owner.position.x;
    position.y -= this.owner.position.y;

    position.x = position.x / this.owner.scale.x;
    position.y = position.y / this.owner.scale.y;

    const closestLetter = this.getClosestGlyph(position.x  , position.y);
    let index = this.owner.layout.glyphs.indexOf(closestLetter);

    this.setRange(null, index + 1);
  }

  onMouseUp(event) {

    // Only left mouse button
    if (event.data.button !== 0) return;

    let position = event.data.global;

    position.x -= this.owner.position.x;
    position.y -= this.owner.position.y;

    position.x = position.x / this.owner.scale.x;
    position.y = position.y / this.owner.scale.y;

    const closestLetter = this.getClosestGlyph(position.x , position.y);

    // -1 means that we at the start of the line
    if (closestLetter === -1) {
      this.owner.input.glyphIndex = closestLetter;
    } else {
      this.owner.input.glyphIndex = this.owner.layout.glyphs.indexOf(closestLetter);
    }
  }

}

export default Select;
