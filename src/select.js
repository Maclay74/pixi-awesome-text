const createIndices = require("quad-indices")

class Select {

  range = [0,0];
  metrics = null;
  layout = null;
  dirty = false;
  indexBuffer = false;



  constructor(metrics, layout) {

    this.metrics = metrics;
    this.layout = layout;
    this.update();
  }

  update() {
    //if (this.range[0] > text.layout.glyphs.length) this.range[0] = text.layout.glyphs.length -1;
    //if (this.range[1] > text.layout.glyphs.length) this.range[1] = text.layout.glyphs.length -1;

    // vertices array for all selected lines
    this.vertices = new Float32Array(this.layout.linesCount * 4 * 2);

    // Reverse range if we need it
    //if (this.range[0] > this.range[1]) {
    //  this.range = [this.range[1], this.range[0]];
    //}

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

  buildVertices() {

    // Select range
    let start = this.layout.glyphs[this.range[0]];
    let end = this.layout.glyphs[this.range[1]];

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

    let closestGlyph = null;
    let closestGlyphDist = null;

    this.layout.glyphs.forEach(glyph => {
      const distance = Math.sqrt(Math.pow((glyph.metrics.x + glyph.metrics.width) - x, 2) + Math.pow(glyph.metrics.y - y, 2))

      if (closestGlyph == null) {
        closestGlyph = glyph;
        closestGlyphDist = distance;
      } else {
        if (closestGlyphDist > distance) {
          closestGlyph = glyph;
          closestGlyphDist = distance;
        }
      }

    });

    return closestGlyph;

  }

}

export default Select;
