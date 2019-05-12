import AwesomeText from './text'
import vertexShader from './shaders/vert.glsl';
import fragmentShader from './shaders/frag.glsl';

const glCore = PIXI.glCore;

class AwesomeTextRenderer extends PIXI.ObjectRenderer {

  constructor(renderer) {
    super(renderer);
    this.shader = null;

  }

  onContextChange() {
    const gl = this.renderer.gl;
    gl.getExtension("OES_standard_derivatives");
    this.shader = new PIXI.Shader(gl, vertexShader, fragmentShader);
  }

  render(awesomeText) {

    if (awesomeText.styleID !== awesomeText.style.styleID) {
      awesomeText.update();
    }

    const renderer = this.renderer;
    const gl = renderer.gl;
    const texture = awesomeText.texture;

    let glData = awesomeText._glDatas[renderer.CONTEXT_UID];

    if (!glData) {
      renderer.bindVao(null);
      glData = this.buildGlData(awesomeText, gl);
    }

    renderer.bindVao(glData.vao);

    if (awesomeText.dirty !== glData.dirty) {
      glData.dirty = awesomeText.dirty;
      glData.uvBuffer.upload(awesomeText.uvs);
    }

    if (awesomeText.indexDirty !== glData.indexDirty) {
      glData.indexDirty = awesomeText.indexDirty;
      glData.indexBuffer.upload(awesomeText.indices);
    }

    glData.vertexBuffer.upload(awesomeText.vertices);
    renderer.bindShader(glData.shader);

    renderer.state.setBlendMode(awesomeText.blendMode);

    glData.shader.uniforms.uSampler = renderer.bindTexture(texture);
    glData.shader.uniforms.translationMatrix = awesomeText.worldTransform.toArray(true);

    glData.shader.uniforms.hint_amount = 1.0;
    glData.shader.uniforms.subpixel_amount = 1.0;
    glData.shader.uniforms.font_color = PIXI.utils.hex2rgb(awesomeText.style.fill.replace("#", "0x"));
    glData.shader.uniforms.bg_color = PIXI.utils.hex2rgb(awesomeText.backgroundColor.replace("#", "0x"));

    const drawMode = awesomeText.drawMode = gl.TRIANGLES;
    glData.vao.draw(drawMode, awesomeText.indices.length, 0);
  }

  buildGlData(awesomeText, gl) {

    const glData = {
      shader: this.shader,
      vertexBuffer: glCore.GLBuffer.createVertexBuffer(gl, awesomeText.vertices, gl.STREAM_DRAW),
      uvBuffer: glCore.GLBuffer.createVertexBuffer(gl, awesomeText.uvs, gl.STREAM_DRAW),
      sdfBuffer: glCore.GLBuffer.createVertexBuffer(gl, awesomeText.sdfSizes, gl.STATIC_DRAW),
      indexBuffer: glCore.GLBuffer.createIndexBuffer(gl, awesomeText.indices, gl.STATIC_DRAW),
      // build the vao object that will render..
      vao: null,
      dirty: awesomeText.dirty,
      indexDirty: awesomeText.indexDirty,
    };

    glData.vao = new glCore.VertexArrayObject(gl)
      .addIndex(glData.indexBuffer)
      .addAttribute(glData.vertexBuffer, glData.shader.attributes.aVertexPosition, gl.FLOAT, false, 2 * 4, 0)
      .addAttribute(glData.uvBuffer, glData.shader.attributes.aTextureCoord, gl.FLOAT, false, 2 * 4, 0)
      .addAttribute(glData.sdfBuffer, glData.shader.attributes.aSdfSize, gl.FLOAT, false, 4, 0);

    return glData
  }

}

PIXI.WebGLRenderer.registerPlugin('AwesomeTextRenderer', AwesomeTextRenderer);

Object.assign(PIXI.extras, {
  AwesomeText: AwesomeText
});

