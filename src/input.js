

class Input {

  _enabled = false;
  owner = null;

  _glyphIndex = -1;

  set glyphIndex(value) {
    this._glyphIndex = value;

    if (this._glyphIndex < -1)
      this._glyphIndex = -1;

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
    this.canvas = document.getElementsByTagName("canvas")[0]

    this.createField();
    this.disable();
  }

  enable() {
    this.inputElement.style.display = 'block';
    document.body.append(this.inputElement);
  }

  disable() {
    this.inputElement.style.display = 'none';

    if (document.body.contains(this.inputElement))
      document.body.removeChild(this.inputElement);
  }

  hide() {
    this.inputElement.style.opacity = '0';
  }

  show() {
    this.inputElement.style.opacity = '1';
  }

  createField() {
    this.inputElement = document.createElement("input");



    const transform = Object.values(this.owner.transform.worldTransform).slice(0, 6);

    this.inputElement.style.backgroundColor = 'transparent';
    //this.inputElement.style.backgroundColor = 'rgba(0,0,0,0.3)';

    this.inputElement.style.color = 'transparent';
    this.inputElement.style.border = "none";
    this.inputElement.style.position = 'fixed';
    this.inputElement.style.contain = 'strict';
    this.inputElement.style.zIndex = 2;
    this.inputElement.style.pointerEvents = "none";
    this.inputElement.style.outline = "none";
    this.inputElement.style.color = this.owner.style.fill;
    this.inputElement.style.transformOrigin= "left top";
    this.inputElement.style.transform = `matrix(${transform.join(", ")})`;
    this.inputElement.style.padding = "0";

    this.addEvent("blur", (event) => this.inputElement.focus());
    this.addEvent("input", (event) => this.onInput(event));
    this.addEvent("keydown", (event) => this.onKeydown(event))
  }

  update() {

    this.metrics = this.owner.metrics;
    this.layout = this.owner.layout;

    const {glyphs} = this.owner.layout;

    if (this.glyphIndex >= glyphs.length) {
      this.glyphIndex = glyphs.length - 1;
    }

    // Default caret place - start of the input field TODO implement align
    let glyphMetrics = {
      x: this.owner.position.x,
      y: this.owner.position.y
    };

    // if string is empty, put caret at the beginning
    if (this.owner.layout.glyphs.length === -1) {

      // if we on the last glyph, place caret after it
    }else if (this.glyphIndex === glyphs.length) {

      const lastGlyph = glyphs[glyphs.length - 1];

      glyphMetrics.x += lastGlyph.metrics.x + lastGlyph.metrics.width;
      glyphMetrics.y += lastGlyph.metrics.y;

      // if caret in the middle of the text
    } else if (this.glyphIndex !== -1) {
      const selectedGlyph = glyphs[this.glyphIndex];

      glyphMetrics.x += selectedGlyph.metrics.x + selectedGlyph.metrics.width;
      glyphMetrics.y += selectedGlyph.metrics.y;
    } else {

      glyphMetrics.y += this.owner.style.lineHeight;
    }

    const transform = Object.values(this.owner.transform.worldTransform).slice(0, 6);


    this.inputElement.style.transform = `matrix(${transform.join(", ")})`;
    this.inputElement.style.height = this.metrics.lineHeight + "px";
    this.inputElement.style.fontSize = this.metrics.lineHeight + "px";

    this.setPosition(glyphMetrics.x , glyphMetrics.y);
    this.inputElement.focus();
  }

  onInput(event) {

    const { range } = this.owner.select;

    // If user selected some text, remove it
    if (range[0] !== range[1] && range[1] !== null) {
      this.glyphIndex = Math.min(range[0] - 1, range[1] - 1);
      const removeIndex = Math.min.apply(null, range);
      const removeLength = Math.abs(range[0] - range[1]);
      this.owner.select.setRange(0,false);
      this.owner.removeString(removeIndex, removeLength);
      this.show();
    }

    event.target.value = "";

    if (event.data === null) return;

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
      this.owner.insertString(++this.glyphIndex, event.data);
      //this.glyphIndex++;
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
      case "Delete":
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
          if (event.key === "Backspace")
            this.owner.removeString(this.glyphIndex--, 0);
        }

        break;

      // Select all
      case "a":
        if (event.ctrlKey) {
          this.owner.select.setRange(0,this.owner.text.length - 1);
        }
    }

    this.inputElement.value = " ";
    this.inputElement.value = "";

  }

  setPosition(x, y) {

    const {a : scaleX, d: scaleY} = this.owner.transform.worldTransform;
    const {x : localX, y: localY } = this.owner.position;

    let lineHeight = this.metrics.lineHeight * scaleY;

    y *= scaleY;
    x *= scaleX;

    y -= lineHeight;

    y -= localY * scaleY;
    x -= localX * scaleX;

    this.inputElement.style.left = `${x}px`;
    this.inputElement.style.top = `${y}px`;

    this.inputElement.value = " ";
    this.inputElement.value = "";

    const transform = Object.values(this.getTransform()).slice(0, 6);
    this.inputElement.style.transform = `matrix(${transform.join(", ")})`;
  }

  getTransform() {
    const ownerTransform = this.owner.transform.worldTransform;
    let canvasRect = this.canvas.getBoundingClientRect();
    return {...ownerTransform, tx: ownerTransform.tx + canvasRect.x, ty: ownerTransform.ty + canvasRect.y};
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
