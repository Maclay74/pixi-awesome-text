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
    this.update();
  }

  update() {
    this.metrics = this.owner.metrics;
    this.layout = this.owner.layout;

    // vertices array for all selected lines
    this.vertices = new Float32Array(this.layout.linesCount * 4 * 2);

    // If range is greater than 0
    if (this.range[0] !== this.range[1]) {
      this.buildVertices();
    }

    this.indices = createIndices({
      clockwise: true,
      type: 'uint16',
      count:this.layout.linesCount
    });

    this.dirty = true;
    this.indexBuffer = true;
  }

  setRange(start = null, end = null) {
    if (start === null) start = this.range[0];
    if (end === null) end = this.range[1];
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

    // Get selecting line
    // Get words on this line
    // Get letters on this line
    // Get letter which x is more than cursor x

    const { glyphs } = this.owner.layout;

    const lineHeight = this.metrics.lineHeight;
    const selectingLine = Math.floor(y / this.metrics.lineHeight);
    const selectingLineY = selectingLine * lineHeight;
    let lastGlyphOnLine = glyphs[glyphs.length - 1];

    for (let i = 1; i < glyphs.length; ++i) {

      let glyph = glyphs[i];

      if (glyph.metrics.y === selectingLineY + lineHeight) {
        lastGlyphOnLine = glyph;

        if (glyph.metrics.x + glyph.metrics.width> x) {
         return glyphs[i - 1];
        }
      }
    }

    return lastGlyphOnLine;

  }

  onMouseDown(event) {
    let position = event.data.global;

    position.x = position.x /  this.owner.scale.x;
    position.y = position.y / this.owner.scale.y;

    const closestLetter = this.getClosestGlyph(position.x + 12, position.y);
    const index = this.owner.layout.glyphs.indexOf(closestLetter);

    this.setRange(index, index);
  }

  onMouseMove(event) {
    let position = event.data.global;

    position.x = position.x / this.owner.scale.x;
    position.y = position.y / this.owner.scale.y;

    const closestLetter = text.select.getClosestGlyph(position.x + 12 , position.y);
    const index = text.layout.glyphs.indexOf(closestLetter);
    this.setRange(null, index);
  }

}

export default Select;
