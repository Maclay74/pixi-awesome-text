attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;

uniform mat3 translationMatrix;
uniform mat3 projectionMatrix;
uniform float u_fontInfoSize;
uniform float u_fontSize;

uniform float sdf_size;
uniform float sdf_tex_size;

varying vec2 vTextureCoord;
varying float doffset;
varying float sdf_texel;

void main2(void)
{
    vTextureCoord = aTextureCoord;
    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition * u_fontInfoSize, 1.0)).xy, 0.0, 1.0);
}

void main(void) {

    vTextureCoord = aTextureCoord;
    doffset = clamp(0.0, 0.6, sdf_size / u_fontInfoSize / 2.5);

    sdf_texel = 1.0 / sdf_tex_size;

    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition * u_fontInfoSize, 1.0)).xy, 0.0, 1.0);
}


