uniform vec3 bg_color;
uniform float enabled;
varying vec2  tc0;

void main() {
    //gl_FragColor = vec4(bg_color,0.45);
    gl_FragColor = vec4(1.0, 1.0, 1.0, 0.2 * enabled);
}


