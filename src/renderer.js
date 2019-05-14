import AwesomeText from "./text";

const vertexShader = require("./shaders/text/vert.glsl");
const fragmentShader = require("./shaders/text/frag.glsl");

const selectVertextShader = require("./shaders/select/vert.glsl");
const selectFragmentShader = require("./shaders/select/frag.glsl");

const glCore = PIXI.glCore;

class AwesomeTextRenderer extends PIXI.ObjectRenderer {

  static contextText = 0;
  static contextSelect = 1;

  selectColor = 0xFFB3C3;


  constructor(renderer) {
    super(renderer);
    this.textShader = null;
    this.selectShader = null;

  }

  onContextChange() {
    const gl = this.renderer.gl;
    gl.getExtension("OES_standard_derivatives");
    this.textShader = new PIXI.Shader(gl, vertexShader, fragmentShader);
    this.selectShader = new PIXI.Shader(gl, selectVertextShader, selectFragmentShader);
  }

  renderText(source) {

    let glData = source._glDatas[AwesomeTextRenderer.contextText];

    if (!glData) {
      this.renderer.bindVao(null);
      glData = this.buildTextGlData(source, this.renderer.gl);
      source._glDatas[AwesomeTextRenderer.contextText] = glData;
    }

    this.renderer.bindVao(glData.vao);

    if (source.dirty) {
      source.dirty = false;
      glData.uvBuffer.upload(source.uvs);
    }

    if (source.indexDirty) {
      source.indexDirty = false;
      glData.indexBuffer.upload(source.indices);
    }

    glData.vertexBuffer.upload(source.vertices);
    this.renderer.bindShader(glData.shader);

    this.renderer.state.setBlendMode(source.blendMode);

    glData.shader.uniforms.uSampler = this.renderer.bindTexture(source.texture);
    glData.shader.uniforms.translationMatrix = source.worldTransform.toArray(true);

    glData.shader.uniforms.hint_amount = 1.0;
    glData.shader.uniforms.sdfMultiplier = AwesomeText.scale;
    glData.shader.uniforms.subpixel_amount = 1.0;
    glData.shader.uniforms.font_color = PIXI.utils.hex2rgb(source.style.fill.replace("#", "0x"));
    glData.shader.uniforms.bg_color = PIXI.utils.hex2rgb(source.backgroundColor.replace("#", "0x"));

    const drawMode = source.drawMode = this.renderer.gl.TRIANGLES;
    glData.vao.draw(drawMode, source.indices.length, 0);

  }

  renderSelect(source) {
    let glData = source._glDatas[AwesomeTextRenderer.contextSelect];

    if (!glData || source.select.dirty) {
      this.renderer.bindVao(null);
      glData = this.buildSelectGlData(source, this.renderer.gl);
      source._glDatas[AwesomeTextRenderer.contextSelect] = glData;
      source.select.dirty = false;
    }

    this.renderer.bindVao(glData.vao);

    if (source.select.indexDirty) {
      source.select.indexDirty = false;
      glData.indexBuffer.upload(source.select.indices);
    }

    glData.vertexBuffer.upload(source.select.vertices);
    this.renderer.bindShader(glData.shader);

    this.renderer.state.setBlendMode(17);
    glData.shader.uniforms.translationMatrix = source.worldTransform.toArray(true);
    glData.shader.uniforms.bg_color = PIXI.utils.hex2rgb(this.selectColor);

    const drawMode = source.drawMode = this.renderer.gl.TRIANGLES;
    glData.vao.draw(drawMode, source.select.indices.length, 0);
  }

  render(source) {

    if (source.styleID !== source.style.styleID) {
      source.update();
    }

    if (source.state === AwesomeText.states.editable || source.state === AwesomeText.states.selecting) {
      this.renderSelect(source);
    }
    this.renderText(source);
  }

  buildTextGlData(source, gl) {

    const glData = {
      shader: this.textShader,
      vertexBuffer: glCore.GLBuffer.createVertexBuffer(gl, source.vertices, gl.STREAM_DRAW),
      uvBuffer: glCore.GLBuffer.createVertexBuffer(gl, source.uvs, gl.STREAM_DRAW),
      sdfBuffer: glCore.GLBuffer.createVertexBuffer(gl, source.sdfSizes, gl.STATIC_DRAW),
      indexBuffer: glCore.GLBuffer.createIndexBuffer(gl, source.indices, gl.STATIC_DRAW),
      // build the vao object that will render..
      vao: null,
      dirty: source.dirty,
      indexDirty: source.indexDirty,
    };

    glData.vao = new glCore.VertexArrayObject(gl)
      .addIndex(glData.indexBuffer)
      .addAttribute(glData.vertexBuffer, glData.shader.attributes.aVertexPosition, gl.FLOAT, false, 2 * 4, 0)
      .addAttribute(glData.uvBuffer, glData.shader.attributes.aTextureCoord, gl.FLOAT, false, 2 * 4, 0)
      .addAttribute(glData.sdfBuffer, glData.shader.attributes.aSdfSize, gl.FLOAT, false, 4, 0);

    return glData
  }

  buildSelectGlData(source, gl) {
    const glData = {
      shader: this.selectShader,
      vertexBuffer: glCore.GLBuffer.createVertexBuffer(gl, source.select.vertices, gl.STREAM_DRAW),
      indexBuffer: glCore.GLBuffer.createIndexBuffer(gl, source.select.indices, gl.STATIC_DRAW),
      vao: null
    };

    glData.vao = new glCore.VertexArrayObject(gl)
      .addIndex(glData.indexBuffer)
      .addAttribute(glData.vertexBuffer, glData.shader.attributes.aVertexPosition, gl.FLOAT, false, 2 * 4, 0)

    return glData
  }

}

PIXI.WebGLRenderer.registerPlugin('AwesomeTextRenderer', AwesomeTextRenderer);

export default AwesomeTextRenderer
