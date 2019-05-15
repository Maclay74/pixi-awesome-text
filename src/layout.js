
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
  glyphs = [];
  owner = null;


  constructor(owner, config) {

    this.owner = owner;
    this.text = owner.text;
    this.font = owner.font;
    this.fontSize = config.fontSize;
    this.wrapWords = config.wrapWords;
    this.wrapperWidth = config.wrapperWidth;
    this.lineHeight = config.lineHeight;
    this.align = config.align;
    this.update();

  }

  update() {
    this.text = this.owner.text;
    this.font = this.owner.font;

    this.lettersCount = this.text.split("").length;
    this.metrics = this.fontMetrics(this.font, 0.0);
    this.startY = this.metrics.lineHeight;
    this.calculateWordsPositions();

    this.glyphs = [];

    this.wordsMetrics.forEach (word => {
      this.getGlyphs(word.word, [word.x, word.y]);
    });
  }

  fontMetrics(fontSize, moreLineGap = 0.2) {

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

    // Low case characters have first bit set in 'flags'
    var lowcase = ( font_char.flags & 1 ) === 1;

    // Pen position is at the top of the line, Y goes up
    var baseline = pos[1] - this.metrics.ascent;

    // Low case chars use their own scale
    var scale = lowcase ? this.metrics.lowScale : this.metrics.capScale;

    // Laying out the glyph rectangle
    var g      = font_char.rect;
    var bottom = baseline - scale * ( this.font.descent + this.font.iy );
    var top    = bottom   + scale * ( this.font.row_height );
    var left   = pos[0]   + scale * ( font_char.bearing_x + kern - this.font.ix );
    var right  = left     + scale * ( g[2] - g[0] );
    var p = [ left, top, right, bottom ];

    // Advancing pen position
    var new_pos_x = pos[0] + scale * ( font_char.advance_x );

    const positions = [
      p[0], p[3], // left bottom,
      p[2], p[3], // right bottom,
      p[2], p[1], // right top
      p[0], p[1], // left top
    ];

    return {
      positions,
      pos: [ new_pos_x, pos[1] ],
      metrics: {x: pos[0], y: pos[1], width: scale * font_char.advance_x }
    };
  }

  getStringSize(string) {

    let width = 0;
    let height = this.metrics.lineHeight;

    const chars = [...string];

    // Iterate thought the chars, calculate position
    chars.forEach(char => {
      let font_char = this.font.chars[ char ];

      /*if (char === " ") {
        width += this.font.space_advance * this.metrics.capScale;
        return;
      }*/

      // Get char metrics
      let charRect = this.charRect([width,0], font_char, 0.2);
      width = charRect.pos[0];

    });

    return {width, height};

  }

  calculateWordsPositions() {

    const words = this.text.split(" ");

    for (let i = 0; i < words.length - 1; i++) {
      words[i] = words[i] + " ";
    }

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

      //x += wordSize.width + this.font.space_advance * this.metrics.capScale;
      x += wordSize.width;
    });

    // Calculate lines count
    this.linesCount = (y - this.startY) / this.metrics.lineHeight + 1;
    this.height = this.linesCount * this.metrics.lineHeight;

    // Change align TODO optimise
    for (let i = 0; i < this.linesCount; ++i) {
      const wordsOnLine = this.wordsMetrics.filter(word => word.y === this.startY + (i * this.metrics.lineHeight))

      const lastWord = wordsOnLine[wordsOnLine.length - 1];

      if (lastWord) {
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

  getGlyphs( string, pos) {
    let prev_char = " ";  // Used to calculate kerning
    let cpos      = pos;  // Current pen position
    let x_max     = 0.0;  // Max width - used for bounding box
    let scale     = this.metrics.capScale;

    let str_pos = 0;

    for(;;) {
      if ( str_pos === string.length ) break;

      var schar = string[ str_pos ];
      str_pos++;

      if ( schar === "\n" ) {
        if ( cpos[0] > x_max ) x_max = cpos[0]; // Expanding the bounding rect
        cpos[0]  = pos[0];
        cpos[1] -= this.metrics.lineHeight;
        prev_char = " ";
        continue;
      }

      if ( schar === " " ) {
        //schar = "_"
        //cpos[0] += this.font.space_advance * scale;
        prev_char = " ";
        //continue;
      }

      var font_char = this.font.chars[ schar ];
      if ( !font_char ) {                         // Substituting unavailable characters with '?'
        schar = "?";
        font_char = this.font.chars[ "?" ];
      }

      var kern = this.font.kern[ prev_char + schar ];
      if ( !kern ) kern = 0.0;

      // calculating the glyph rectangle and copying it to the vertex array
      var rect = this.charRect( cpos, font_char, kern );

      prev_char = schar;
      cpos = rect.pos;

      this.glyphs.push({
        letter: schar,
        vertices: rect.positions,
        position: rect.pos,
        metrics: rect.metrics
      });
    }
  }
}


export default TextLayout;
