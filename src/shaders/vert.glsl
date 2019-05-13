attribute vec2 aVertexPosition;
attribute vec2 aTextureCoord;
attribute float aSdfSize;

uniform mat3 translationMatrix;
uniform mat3 projectionMatrix;
uniform mat3 transform;


varying vec2  tc0;
varying float doffset;
varying float sdf_texel;


void main(void) {

    //TODO MAKE ATTRIBUTE
    float sdf_size = aSdfSize;

    //TODO MAKE UNIFORMS
    float sdf_tex_size = 1024.0;


    tc0 = aTextureCoord;
    doffset = 1.0 / sdf_size;       // Distance field delta for one screen pixel
    sdf_texel = 1.0 / sdf_tex_size;

    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition , 1.0)).xy, 0.0, 1.0);

}
