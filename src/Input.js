

class Input {

  _enabled = false;
  owner = null;

  glyphIndex = null;

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
    this.inputElement.style.border = "none";
    this.inputElement.style.position = 'fixed';
    this.inputElement.style.contain = 'srtict';
    this.inputElement.style.zIndex = 2;
    this.inputElement.style.pointerEvents = "none";
    this.inputElement.style.outline = "none";
    this.inputElement.style.color = this.owner.style.fill;
    this.inputElement.style.marginLeft = "10px";

    this.inputElement.addEventListener("blur", () => {
      if (this._enabled) {
        this.inputElement.focus();
      }
    });

    this.inputElement.addEventListener("input", (event) => {
      if (this._enabled) {
        this.onInput(event)
      }
    })
  }

  update(event) {
    this.metrics = this.owner.metrics;
    this.layout = this.owner.layout;

    const selectedGlyph = this.layout.glyphs[this.owner.select.range[1]];

    let position = {x: 0, y: this.metrics.lineHeight};

    if (selectedGlyph) {
      position = {...selectedGlyph.metrics};
    }

    position.x *= this.owner.scale.x;
    position.y *= this.owner.scale.y;

    this.setPosition(position.x , position.y);

    this.setScale(this.owner.scale.x, this.owner.scale.y);
    this.inputElement.focus();
  }

  onInput(event) {

    const { range } = this.owner.select;

    if (range[0] !== range[1]) {

      const removeIndex = Math.min.apply(null, range);
      const removeLength = Math.abs(range[0] - range[1]);

      let newText = this.owner.text.split("");
      newText.splice(removeIndex, removeLength + 1);
      this.owner.select.setRange(removeIndex,removeIndex);
      this.owner.text = newText.join("");
      this.show();
    }

    event.target.value = "";

    this.owner.insertString(this.owner.select.range[0], event.data);

    console.log("set range");
    this.owner.select.setRange(this.owner.select.range[0] + 1, this.owner.select.range[1] + 1)

    const selectedGlyph = this.layout.glyphs[this.owner.select.range[0]];

    let position = {x: 0, y: this.metrics.lineHeight};

    if (selectedGlyph) {
      position = {...selectedGlyph.metrics};
    }

    position.x *= this.owner.scale.x;
    position.y *= this.owner.scale.y;

    this.setPosition(position.x , position.y);
  }

  setPosition(x, y) {

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

}

export default Input;
