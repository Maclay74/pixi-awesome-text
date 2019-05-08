import AwesomeText from './text'
import vertexShader from './shaders/vert.glsl';
import fragmentShader from './shaders/frag.glsl';
import loadFont from 'load-bmfont'


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

    const renderer = this.renderer;
    const gl = renderer.gl;
    const texture = awesomeText._texture;
    const font = awesomeText._font;

    if (!texture || !texture.valid || !font) {
      return;
    }

    if (awesomeText.styleID !== awesomeText.style.styleID) {
      awesomeText.updateText();
    }

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

    console.log(PIXI.utils.hex2rgb(awesomeText.style.fill));

    glData.shader.uniforms.uSampler = renderer.bindTexture(texture);
    glData.shader.uniforms.translationMatrix = awesomeText.worldTransform.toArray(true);
    glData.shader.uniforms.u_fontInfoSize = awesomeText.style.fontSize / font.info.size;
    glData.shader.uniforms.u_alpha = awesomeText.worldAlpha;
    glData.shader.uniforms.u_color = PIXI.utils.hex2rgb(awesomeText.style.fill.replace("#", "0x"));
    glData.shader.uniforms.u_fontSize = awesomeText.style.fontSize;
    glData.shader.uniforms.u_weight = awesomeText.style.weight;

    // NEW PARAMS
    glData.shader.uniforms.sdf_size = awesomeText.sdf_size;
    glData.shader.uniforms.sdf_tex_size = font.common.scaleW;

    const drawMode = awesomeText.drawMode = gl.TRIANGLES;
    glData.vao.draw(drawMode, awesomeText.indices.length, 0);

  }

  buildGlData(awesomeText, gl) {
    const glData = {
      shader: this.shader,
      vertexBuffer: glCore.GLBuffer.createVertexBuffer(gl, awesomeText.vertices, gl.STREAM_DRAW),
      uvBuffer: glCore.GLBuffer.createVertexBuffer(gl, awesomeText.uvs, gl.STREAM_DRAW),
      indexBuffer: glCore.GLBuffer.createIndexBuffer(gl, awesomeText.indices, gl.STATIC_DRAW),
      // build the vao object that will render..
      vao: null,
      dirty: awesomeText.dirty,
      indexDirty: awesomeText.indexDirty,
    };

    glData.vao = new glCore.VertexArrayObject(gl)
      .addIndex(glData.indexBuffer)
      .addAttribute(glData.vertexBuffer, glData.shader.attributes.aVertexPosition, gl.FLOAT, false, 2 * 4, 0)
      .addAttribute(glData.uvBuffer, glData.shader.attributes.aTextureCoord, gl.FLOAT, false, 2 * 4, 0);

    return glData
  }

}

PIXI.WebGLRenderer.registerPlugin('AwesomeTextRenderer', AwesomeTextRenderer);

Object.assign(PIXI.extras, {
  AwesomeText: AwesomeText,
  loadFont: loadFont
});

