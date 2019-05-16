

class Input {

  _enabled = false;
  owner = null;

  _glyphIndex = null;

  set glyphIndex(value) {
    this._glyphIndex = value;

    if (this._glyphIndex < 0)
      this._glyphIndex = 0;

    if (this._glyphIndex > this.owner.layout.glyphs.length)
      this._glyphIndex = this.owner.layout.glyphs.length;

    this.update();
  }

  get glyphIndex() {
    return this._glyphIndex;
  }

  set enabled(value) {
    this._enabled = value;
    if (this._enabled) {
      this.enable();
    } else {
      this.disable();
    }
  }

  get enabled() {
    return this._enabled
  }

  constructor(owner) {
    this.owner = owner;
    this.metrics = owner.metrics;
    this.layout = owner.layout;

    this.createField();
    this.disable();
  }

  enable() {
    this.inputElement.style.display = 'block';
  }

  disable() {
    this.inputElement.style.display = 'none';
  }

  hide() {
    this.inputElement.style.opacity = '0';
  }

  show() {
    this.inputElement.style.opacity = '1';
  }

  createField() {
    this.inputElement = document.createElement("input");
    document.body.append(this.inputElement);

    this.inputElement.style.backgroundColor = 'transparent';
    //this.inputElement.style.backgroundColor = 'rgba(0,0,0,0.3)';



    this.inputElement.style.border = "none";
    this.inputElement.style.position = 'fixed';
    this.inputElement.style.contain = 'srtict';
    this.inputElement.style.zIndex = 2;
    this.inputElement.style.pointerEvents = "none";
    this.inputElement.style.outline = "none";
    this.inputElement.style.color = this.owner.style.fill;
    this.inputElement.style.marginLeft = "0px";
    this.inputElement.style.transformOrigin= "bottom left";


    this.addEvent("blur", (event) => this.inputElement.focus());
    this.addEvent("input", (event) => this.onInput(event));
    this.addEvent("keydown", (event) => this.onKeydown(event))
  }

  update() {

    this.metrics = this.owner.metrics;
    this.layout = this.owner.layout;

    const {glyphs} = this.owner.layout;

    // Default caret place - start of the input field TODO implement align
    let glyphMetrics = {x: 0, y: this.metrics.lineHeight};

    // if string is empty, put caret at the beginning
    if (this.owner.layout.glyphs.length === 0) {
      console.log("emply line");


      // if we on the last glyph, place caret after it
    }else if (this.glyphIndex === glyphs.length) {
      const lastGlyph = glyphs[glyphs.length - 1];
      glyphMetrics.x = lastGlyph.metrics.x + lastGlyph.metrics.width;
      glyphMetrics.y = lastGlyph.metrics.y;

      // if caret in the middle of the text
    } else if (this.glyphIndex !== null) {
      const selectedGlyph = glyphs[this.glyphIndex];
      glyphMetrics = {...selectedGlyph.metrics};
    }

    this.setPosition(glyphMetrics.x , glyphMetrics.y);

    this.setScale(this.owner.scale.x, this.owner.scale.y);
    this.inputElement.focus();
  }

  onInput(event) {

    const { range } = this.owner.select;

    // If user selected some text, remove it
    if (range[0] !== range[1] && range[1] !== null) {
      this.glyphIndex = Math.min(range[0], range[1]);
      const removeIndex = Math.min.apply(null, range);
      const removeLength = Math.abs(range[0] - range[1]);
      this.owner.select.setRange(0,false);
      this.owner.removeString(removeIndex, removeLength);
      this.show();
    } else {
      //this.glyphIndex++;
    }

    event.target.value = "";

    // If text is empty now
    if (this.owner.layout.glyphs.length === 0) {
      this.owner.text = event.data;
      this.glyphIndex = 1;

    // If caret is at the end of the text
    } else if (this.glyphIndex === this.owner.layout.glyphs.length - 1) {
      this.owner.text += event.data;
      this.glyphIndex++;

    // If we in the middle of the line
    } else {
      this.owner.insertString(this.glyphIndex, event.data);
      this.glyphIndex++;
    }
    this.owner.select.setRange(0, false);

  }

  onKeydown(event) {

    switch (event.key) {
      case "ArrowLeft":

        this.owner.select.setRange(0, false);
        this.show();
        this.glyphIndex--;
        break;

      case "ArrowRight":

        this.owner.select.setRange(0, false);
        this.show();
        this.glyphIndex++;

        break;
      case "Backspace":

        const {range} = this.owner.select;


        if (range[1] !== null) {
          this.glyphIndex = Math.min(range[0], range[1]);
          const removeIndex = Math.min.apply(null, range);
          const removeLength = Math.abs(range[0] - range[1]);
          this.owner.select.setRange(0,false);
          this.owner.removeString(removeIndex, removeLength);
          this.show();
        }
        else {
          this.owner.removeString(--this.glyphIndex , 0);
        }

        //this.glyphIndex--;
    }

    let newPosition = null;

    const inputEvent = new Event("selectionchange");

    console.log(this.inputElement.dispatchEvent(inputEvent));
    //console.log(event.key);
  }

  setPosition(x, y) {

    console.log(this.owner.scale);

    x *= this.owner.scale.x;
    y *= this.owner.scale.y;

    let top = y - this.metrics.lineHeight;
    let offset = this.metrics.lineHeight  - this.metrics.ascent;

    top += offset;

    this.inputElement.style.left = `${x}px`;
    this.inputElement.style.top = `${top}px`;
  }

  setScale(x, y) {
    const offset = (this.metrics.lineHeight - this.metrics.ascent);

    let top = y - this.metrics.lineHeight;
    let lineHeight = this.metrics.lineHeight ;
    //top += offset;


    this.inputElement.style.height = lineHeight + "px"

    this.inputElement.style.transform = `scale(${x})`;
    this.inputElement.style.fontSize = (this.metrics.lineHeight * y) + "px"
  }

  addEvent(event, callback) {
    this.inputElement.addEventListener(event, (event) => {
      if (this._enabled) {
        callback(event);
      }
    });
  }

}

export default Input;
