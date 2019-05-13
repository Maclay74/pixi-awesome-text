
class TextLayout {

  text = "";
  font = null;
  metrics = null;
  fontSize = 20;
  align = "left";
  startX = 0;
  startY = 0;
  wrapperWidth = 100;
  wrapWords = false;
  wordsMetrics = [];
  lettersCount = 0;
  height = 0;
  linesCount = 0;
  lineHeight = 0;


  constructor(text, font, config) {
    this.text = text;
    this.font = font;
    this.fontSize = config.fontSize;
    this.wrapWords = config.wrapWords;
    this.wrapperWidth = config.wrapperWidth;
    this.lineHeight = config.lineHeight;
    this.align = config.align;
    this.lettersCount = this.text.split("").length;
    this.metrics = this.fontMetrics(font, 0.0);
    this.startY = this.metrics.lineHeight;
    this.calculateWordsPositions();
  }

  fontMetrics(fontSize, moreLineGap = 0.0) {

    const {cap_height, x_height, ascent: fontAscent , descent, line_gap} = this.font;

    const capScale = this.fontSize / cap_height;
    const lowScale = Math.round( x_height * capScale ) / x_height;
    const ascent = Math.round( fontAscent * capScale );
    let lineHeight = Math.round( capScale * ( fontAscent + descent + line_gap ) + moreLineGap );

    if (this.lineHeight > 0)
      lineHeight = this.lineHeight;
    else
      this.lineHeight = lineHeight;

    return {
      capScale   : capScale,
      lowScale   : lowScale,
      ascent      : ascent,
      lineHeight : lineHeight
    };
  }

  charRect( pos, font_char, kern = 0.0 ) {

    const {ascent, lowScale, capScale} = this.metrics;

    const { descent, row_height, iy, ix } = this.font;

    const {flags, bearing_x, advance_x, rect } = font_char;

    // Low case characters have first bit set in 'flags'
    var lowCase = ( flags & 1 ) === 1;

    // Pen position is at the top of the line, Y goes up
    var baseline = pos[1] - ascent;

    // Low case chars use their own scale
    var scale = lowCase ? lowScale : capScale;


    // Laying out the glyph rectangle
    var g      = rect;
    var bottom = baseline - scale * ( descent + iy );
    var top    = bottom   + scale * ( row_height );
    var left   = pos[0]   + scale * ( bearing_x + kern - ix );
    var right  = left     + scale * ( g[2] - g[0] );
    var p = [ left, top, right, bottom ];

    // Advancing pen position
    var new_pos_x = pos[0] + scale * ( advance_x );

    // Signed distance field size in screen pixels
    var sdf_size  = 2.0 * iy * scale;

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
  }

  getStringSize(string) {

    let width = 0;
    let height = this.metrics.lineHeight;

    const chars = [...string];

    // Iterate thought the chars, calculate position
    chars.forEach(char => {
      let font_char = this.font.chars[ char ];

      if (char === " ") {
        width += this.font.space_advance * this.metrics.capScale;
        return;
      }

      // Get char metrics
      let charRect = this.charRect([width,0], font_char, 0.2);
      width = charRect.pos[0];

    });

    return {width, height};

  }

  calculateWordsPositions() {

    const words = this.text.split(" ");
    this.wordsMetrics = [];

    // Initial position
    let x = this.startX;
    let y = this.startY;

    // Calculate words positions on lines
    words.forEach(word => {
      const wordSize = this.getStringSize(word);
      if (x + wordSize.width > this.startX + this.wrapperWidth && this.wrapWords) {
        x = this.startX;
        y += wordSize.height;
      }
      this.wordsMetrics.push({...wordSize, x, y, word});
      x += wordSize.width + this.font.space_advance * this.metrics.capScale;
    });

    // Calculate lines count
    this.linesCount = (y - this.startY) / this.metrics.lineHeight + 1;
    this.height = this.linesCount * this.metrics.lineHeight;


    // Change align TODO optimise
    for (let i = 0; i < this.linesCount; ++i) {
      const wordsOnLine = this.wordsMetrics.filter(word => word.y === this.startY + (i * this.metrics.lineHeight))

      const lastWord = wordsOnLine[wordsOnLine.length - 1];
      const freeSpace = (this.startX + this.wrapperWidth) - (lastWord.x + lastWord.width);

      let leftOffset = 0;

      switch (this.align) {
        case "center":
          leftOffset = freeSpace / 2;
          break;
        case "right":
          leftOffset = freeSpace;
          break;
      }
      this.wordsMetrics.forEach(word => {
        if (word.y === this.startY + (i * this.metrics.lineHeight)) {
          word.x += leftOffset;
        }
      })
    }

  }

}

//module.exports = TextLayout;

export default TextLayout;
