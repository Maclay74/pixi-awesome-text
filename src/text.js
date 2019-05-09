//import { mesh } from 'pixi.js'
import createLayout from 'layout-bmfont-text'
import createIndices from 'quad-indices'

class AwesomeText extends PIXI.mesh.Mesh {

  constructor(text, style, font) {
    super(font.texture);

    this.style = new PIXI.TextStyle(style);
    this.backgroundColor = style.backgroundColor
    this._text = text;
    this._font = font.glyphs;
    this._texture = font.texture;
    this.pluginName = 'AwesomeTextRenderer';

    this.sdf_size = style.sdfSize || 1.0;
  }

  update() {

    this.layout = createLayout({
      text: this._text,
      font: this._font,
      align: this.style.align,
      fontSize: this.style.fontSize,
      fill: this.style.fill,
      fontWeight: this.style.fontWeight,
      width: this.style.wordWrapWidth,
      wordWrapWidth: this.style.wordWrapWidth,
      lineHeight: this.style.lineHeight
    });


    const textureSize = {
      width: this._font.common.scaleW,
      height: this._font.common.scaleH
    };

    this.visibleGlyphs = this.layout.glyphs.filter(glyph => {
      return glyph.data.width * glyph.data.height > 0;
    });

    this.vertices = this.getVertices(this.visibleGlyphs);

    this.uvs = this.getUvs(this.visibleGlyphs, textureSize);

    this.indices = createIndices({
      clockwise: true,
      type: 'uint16',
      count: this.visibleGlyphs.length
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

  /**
   * Get vertices positions for glyphs
   * @param glyphs
   * @returns {Float32Array}
   */
  getVertices(glyphs) {

    const vertices = new Float32Array(glyphs.length * 4 * 2);

    let i = 0;
    glyphs.forEach( glyph => {

      const  bitmap = glyph.data;

      const x = glyph.position[0] + bitmap.xoffset;
      const y = glyph.position[1] + bitmap.yoffset;

      // bottom left
      vertices[i++] = x;
      vertices[i++] = y;

      // top left
      vertices[i++] = x;
      vertices[i++] = y + bitmap.height;

      // top right
      vertices[i++] = x + bitmap.width;
      vertices[i++] = y + bitmap.height;

      // bottom right
      vertices[i++] = x + bitmap.width;
      vertices[i++] = y;
    });

    return vertices;
  }

  /**
   * Return uv coordinates for glyphs
   * @param glyphs
   * @param textureSize
   * @returns {Float32Array}
   */
  getUvs(glyphs, textureSize) {
    const uvs = new Float32Array(glyphs.length * 4 * 2);

    let i = 0;

    glyphs.forEach (glyph => {
      const bitmap = glyph.data;

      const bitmapWidth = bitmap.x + bitmap.width;
      const bitmapHeight = bitmap.y + bitmap.height;

      const u0 = bitmap.x / textureSize.width;
      const v1 = bitmap.y / textureSize.height;
      const u1 = bitmapWidth / textureSize.width;
      const v0 = bitmapHeight / textureSize.height;

      // bottom left
      uvs[i++] = u0;
      uvs[i++] = v1;

      // top left
      uvs[i++] = u0;
      uvs[i++] = v0;

      // top right
      uvs[i++] = u1;
      uvs[i++] = v0;

      // bottom right
      uvs[i++] = u1;
      uvs[i++] = v1;
    });

    return uvs;

  }

}

AwesomeText.scale = 1.0;

export default AwesomeText;




