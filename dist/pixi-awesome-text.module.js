(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["AwesomeText"] = factory();
	else
		root["AwesomeText"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	Object.defineProperty(exports, "Renderer", {
	  enumerable: true,
	  get: function get() {
	    return _renderer["default"];
	  }
	});
	Object.defineProperty(exports, "Text", {
	  enumerable: true,
	  get: function get() {
	    return _text["default"];
	  }
	});
	Object.defineProperty(exports, "Layout", {
	  enumerable: true,
	  get: function get() {
	    return _layout["default"];
	  }
	});
	
	var _renderer = _interopRequireDefault(__webpack_require__(1));
	
	var _text = _interopRequireDefault(__webpack_require__(4));
	
	var _layout = _interopRequireDefault(__webpack_require__(5));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	Object.assign(PIXI.extras, {
	  AwesomeText: _text["default"]
	});
	
	if (typeof PIXI !== 'undefined') {
	  if (PIXI.extras) {
	    PIXI.extras.AwesomeText = _text["default"];
	  } else {
	    PIXI.extras = {
	      AwesomeText: _text["default"]
	    };
	  }
	}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;
	
	var _text = _interopRequireDefault(__webpack_require__(4));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
	
	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
	
	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
	
	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
	
	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
	
	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var vertexShader = __webpack_require__(2);
	
	var fragmentShader = __webpack_require__(3);
	
	var glCore = PIXI.glCore;
	
	var AwesomeTextRenderer =
	/*#__PURE__*/
	function (_PIXI$ObjectRenderer) {
	  _inherits(AwesomeTextRenderer, _PIXI$ObjectRenderer);
	
	  function AwesomeTextRenderer(renderer) {
	    var _this;
	
	    _classCallCheck(this, AwesomeTextRenderer);
	
	    _this = _possibleConstructorReturn(this, _getPrototypeOf(AwesomeTextRenderer).call(this, renderer));
	    _this.shader = null;
	    return _this;
	  }
	
	  _createClass(AwesomeTextRenderer, [{
	    key: "onContextChange",
	    value: function onContextChange() {
	      var gl = this.renderer.gl;
	      gl.getExtension("OES_standard_derivatives");
	      this.shader = new PIXI.Shader(gl, vertexShader, fragmentShader);
	    }
	  }, {
	    key: "render",
	    value: function render(awesomeText) {
	      if (awesomeText.styleID !== awesomeText.style.styleID) {
	        awesomeText.update();
	      }
	
	      var renderer = this.renderer;
	      var gl = renderer.gl;
	      var texture = awesomeText.texture;
	      var glData = awesomeText._glDatas[renderer.CONTEXT_UID];
	
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
	      glData.shader.uniforms.sdfMultiplier = _text["default"].scale;
	      glData.shader.uniforms.subpixel_amount = 1.0;
	      glData.shader.uniforms.font_color = PIXI.utils.hex2rgb(awesomeText.style.fill.replace("#", "0x"));
	      glData.shader.uniforms.bg_color = PIXI.utils.hex2rgb(awesomeText.backgroundColor.replace("#", "0x"));
	      var drawMode = awesomeText.drawMode = gl.TRIANGLES;
	      glData.vao.draw(drawMode, awesomeText.indices.length, 0);
	    }
	  }, {
	    key: "buildGlData",
	    value: function buildGlData(awesomeText, gl) {
	      var glData = {
	        shader: this.shader,
	        vertexBuffer: glCore.GLBuffer.createVertexBuffer(gl, awesomeText.vertices, gl.STREAM_DRAW),
	        uvBuffer: glCore.GLBuffer.createVertexBuffer(gl, awesomeText.uvs, gl.STREAM_DRAW),
	        sdfBuffer: glCore.GLBuffer.createVertexBuffer(gl, awesomeText.sdfSizes, gl.STATIC_DRAW),
	        indexBuffer: glCore.GLBuffer.createIndexBuffer(gl, awesomeText.indices, gl.STATIC_DRAW),
	        // build the vao object that will render..
	        vao: null,
	        dirty: awesomeText.dirty,
	        indexDirty: awesomeText.indexDirty
	      };
	      glData.vao = new glCore.VertexArrayObject(gl).addIndex(glData.indexBuffer).addAttribute(glData.vertexBuffer, glData.shader.attributes.aVertexPosition, gl.FLOAT, false, 2 * 4, 0).addAttribute(glData.uvBuffer, glData.shader.attributes.aTextureCoord, gl.FLOAT, false, 2 * 4, 0).addAttribute(glData.sdfBuffer, glData.shader.attributes.aSdfSize, gl.FLOAT, false, 4, 0);
	      return glData;
	    }
	  }]);
	
	  return AwesomeTextRenderer;
	}(PIXI.ObjectRenderer);
	
	_defineProperty(AwesomeTextRenderer, "scale", 1.0);
	
	PIXI.WebGLRenderer.registerPlugin('AwesomeTextRenderer', AwesomeTextRenderer);
	var _default = AwesomeTextRenderer;
	exports["default"] = _default;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute float aSdfSize;\n\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\nuniform float sdfMultiplier;\n\nvarying vec2  tc0;\nvarying float doffset;\nvarying float sdf_texel;\n\n\n\nvoid main(void) {\n\n    //TODO MAKE ATTRIBUTE\n    float sdf_size = aSdfSize * sdfMultiplier;\n\n    //TODO MAKE UNIFORMS\n    float sdf_tex_size = 1024.0;\n\n\n    tc0 = aTextureCoord;\n    doffset = 1.0 / sdf_size;       // Distance field delta for one screen pixel\n    sdf_texel = 1.0 / sdf_tex_size;\n\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition , 1.0)).xy, 0.0, 1.0);\n\n}\n"

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nuniform sampler2D uSampler;\nuniform float hint_amount;\nuniform float subpixel_amount;\n\nuniform vec3 bg_color;\nuniform vec3 font_color;\n\nvarying vec2  tc0;\nvarying float doffset;\nvarying float sdf_texel;\n\n\n/*\n *  Subpixel coverage calculation\n *\n *  v - edge slope    -1.0 to 1.0          triplet\n *  a - pixel coverage 0.0 to 1.0          coverage\n *\n *      |<- glyph edge                      R  G  B\n *  +---+---+                             +--+--+--+\n *  |   |XXX| v = 1.0 (edge facing west)  |  |xx|XX|\n *  |   |XXX| a = 0.5 (50% coverage)      |  |xx|XX|\n *  |   |XXX|                             |  |xx|XX|\n *  +---+---+                             +--+--+--+\n *    pixel                                0  50 100\n *\n *\n *        R   G   B\n *\n *   1.0        +--+   <- top (abs( v ))\n *              |\n *       -+-----+--+-- <- ceil: 100% coverage\n *        |     |XX|\n *   0.0  |  +--+XX|\n *        |  |xx|XX|\n *       -+--+--+--+-- <- floor: 0% coverage\n *           |\n *  -1.0  +--+         <-  -abs(v)\n *        |\n *        |\n *        |\n *  -2.0  +            <- bottom: -abs(v)-1.0\n */\n\nvec3 subpixel( float v, float a ) {\n    float vt      = 0.6 * v; // 1.0 will make your eyes bleed\n    vec3  rgb_max = vec3( -vt, 0.0, vt );\n    float top     = abs( vt );\n    float bottom  = -top - 1.0;\n    float cfloor  = mix( top, bottom, a );\n    vec3  res     = clamp( rgb_max - vec3( cfloor ), 0.0, 1.0 );\n    return res;\n}\n\nvoid main2() {\n    gl_FragColor = texture2D(uSampler, tc0);\n}\n\nvoid main(void) {\n\n    // Sampling the texture, L pattern\n    float sdf       = texture2D( uSampler, tc0 ).r;\n    float sdf_north = texture2D( uSampler, tc0 + vec2( 0.0, sdf_texel ) ).r;\n    float sdf_east  = texture2D( uSampler, tc0 + vec2( sdf_texel, 0.0 ) ).r;\n\n    // Estimating stroke direction by the distance field gradient vector\n    vec2  sgrad     = vec2( sdf_east - sdf, sdf_north - sdf );\n    float sgrad_len = max( length( sgrad ), 1.0 / 128.0 );\n    vec2  grad      = sgrad / vec2( sgrad_len );\n    float vgrad = abs( grad.y ); // 0.0 - vertical stroke, 1.0 - horizontal one\n\n    float horz_scale  = 1.1; // Blurring vertical strokes along the X axis a bit\n    float vert_scale  = 0.6; // While adding some contrast to the horizontal strokes\n    float hdoffset    = mix( doffset * horz_scale, doffset * vert_scale, vgrad );\n    float res_doffset = mix( doffset, hdoffset, hint_amount );\n\n    float alpha       = smoothstep( 0.5 - res_doffset, 0.5 + res_doffset, sdf );\n\n    // Additional contrast\n    alpha             = pow( alpha, 1.0 + 0.2 * vgrad * hint_amount );\n\n    // Unfortunately there is no support for ARB_blend_func_extended in WebGL.\n    // Fortunately the background is filled with a solid color so we can do\n    // the blending inside the shader.\n\n    // Discarding pixels beyond a threshold to minimise possible artifacts.\n    if ( alpha < 20.0 / 256.0 ) discard;\n\n    vec3 channels = subpixel( grad.x * 0.5 * subpixel_amount, alpha ) + 0.1;\n\n    // For subpixel rendering we have to blend each color channel separately\n    vec3 res = mix( bg_color, font_color, channels );\n    gl_FragColor = vec4( res, 1.0 );\n}\n\n\n"

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;
	
	var _layout = _interopRequireDefault(__webpack_require__(5));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
	
	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
	
	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
	
	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
	
	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
	
	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var createIndices = __webpack_require__(6);
	
	var AwesomeText =
	/*#__PURE__*/
	function (_PIXI$mesh$Mesh) {
	  _inherits(AwesomeText, _PIXI$mesh$Mesh);
	
	  function AwesomeText(text, style, font) {
	    var _this;
	
	    _classCallCheck(this, AwesomeText);
	
	    _this = _possibleConstructorReturn(this, _getPrototypeOf(AwesomeText).call(this, font.texture));
	    _this.style = new PIXI.TextStyle(style);
	    _this.backgroundColor = style.backgroundColor;
	    _this._text = text;
	    _this._font = font.font; //TODO separate font and texture
	
	    _this._texture = font.texture;
	    _this.pluginName = 'AwesomeTextRenderer';
	    return _this;
	  }
	
	  _createClass(AwesomeText, [{
	    key: "update",
	    value: function update() {
	      var _this2 = this;
	
	      this.layout = new _layout["default"](this.text, this.font, {
	        fontSize: this.style.fontSize,
	        wrapWords: this.style.breakWords,
	        wrapperWidth: this.style.wordWrapWidth,
	        align: this.style.align,
	        lineHeight: this.style.lineHeight
	      });
	      this.metrics = this.fontMetrics(this.font, this.style.fontSize, this.style.fontSize * 0.2);
	      this.vertices = new Float32Array(this.layout.lettersCount * 4 * 2);
	      this.uvs = new Float32Array(this.layout.lettersCount * 4 * 2);
	      this.sdfSizes = new Float32Array(this.layout.lettersCount * 4);
	      this.arrayPositions = {
	        vertex: 0,
	        uvs: 0,
	        sdf: 0
	      };
	      this.layout.wordsMetrics.forEach(function (word) {
	        _this2.writeString(word.word, _this2.font, _this2.metrics, [word.x, word.y]);
	      });
	      this.indices = createIndices({
	        clockwise: true,
	        type: 'uint16',
	        count: this.layout.lettersCount
	      });
	      this.styleID = this.style.styleID;
	      this.dirty++;
	      this.indexDirty++;
	    }
	  }, {
	    key: "writeString",
	    value: function writeString(string, font, font_metrics, pos) {
	      var _this3 = this;
	
	      var prev_char = " "; // Used to calculate kerning
	
	      var cpos = pos; // Current pen position
	
	      var x_max = 0.0; // Max width - used for bounding box
	
	      var scale = font_metrics.cap_scale;
	      var str_pos = 0;
	
	      for (;;) {
	        if (str_pos === string.length) break;
	        var schar = string[str_pos];
	        str_pos++;
	
	        if (schar === "\n") {
	          if (cpos[0] > x_max) x_max = cpos[0]; // Expanding the bounding rect
	
	          cpos[0] = pos[0];
	          cpos[1] -= font_metrics.line_height;
	          prev_char = " ";
	          continue;
	        }
	
	        if (schar === " ") {
	          //schar = "_"
	          cpos[0] += font.space_advance * scale;
	          prev_char = " ";
	          continue;
	        }
	
	        var font_char = font.chars[schar];
	
	        if (!font_char) {
	          // Substituting unavailable characters with '?'
	          schar = "?";
	          font_char = font.chars["?"];
	        }
	
	        var kern = font.kern[prev_char + schar];
	        if (!kern) kern = 0.0; // calculating the glyph rectangle and copying it to the vertex array
	
	        var rect = this.charRect(cpos, font, font_metrics, font_char, kern);
	        rect.positions.map(function (pos) {
	          return _this3.vertices[_this3.arrayPositions.vertex++] = pos;
	        });
	        rect.uvs.map(function (uv) {
	          return _this3.uvs[_this3.arrayPositions.uvs++] = uv;
	        });
	        rect.sdfSizes.map(function (sdf) {
	          return _this3.sdfSizes[_this3.arrayPositions.sdf++] = sdf;
	        });
	        prev_char = schar;
	        cpos = rect.pos;
	      }
	
	      return {
	        rect: [pos[0], pos[1], x_max - pos[0], pos[1] - cpos[1] + font_metrics.line_height],
	        string_pos: str_pos //array_pos : array_pos
	
	      };
	    }
	  }, {
	    key: "fontMetrics",
	    value: function fontMetrics(font, pixel_size) {
	      var more_line_gap = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.0;
	      // We use separate scale for the low case characters
	      // so that x-height fits the pixel grid.
	      // Other characters use cap-height to fit to the pixels
	      var cap_scale = pixel_size / font.cap_height;
	      var low_scale = Math.round(font.x_height * cap_scale) / font.x_height; // Ascent should be a whole number since it's used to calculate the baseline
	      // position which should lie at the pixel boundary
	
	      var ascent = Math.round(font.ascent * cap_scale); // Same for the line height
	
	      var line_height = Math.round(cap_scale * (font.ascent + font.descent + font.line_gap) + more_line_gap);
	      return {
	        cap_scale: cap_scale,
	        low_scale: low_scale,
	        pixel_size: pixel_size,
	        ascent: ascent,
	        line_height: line_height
	      };
	    }
	  }, {
	    key: "charRect",
	    value: function charRect(pos, font, font_metrics, font_char) {
	      var kern = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.0;
	      // Low case characters have first bit set in 'flags'
	      var lowcase = (font_char.flags & 1) === 1; // Pen position is at the top of the line, Y goes up
	
	      var baseline = pos[1] - font_metrics.ascent; // Low case chars use their own scale
	
	      var scale = lowcase ? font_metrics.low_scale : font_metrics.cap_scale; //scale = font_metrics.low_scale;
	      //scale += 20;
	      // Laying out the glyph rectangle
	
	      var g = font_char.rect;
	      var bottom = baseline - scale * (font.descent + font.iy);
	      var top = bottom + scale * font.row_height;
	      var left = pos[0] + scale * (font_char.bearing_x + kern - font.ix);
	      var right = left + scale * (g[2] - g[0]);
	      var p = [left, top, right, bottom]; // Advancing pen position
	
	      var new_pos_x = pos[0] + scale * font_char.advance_x; // Signed distance field size in screen pixels
	
	      var sdf_size = 2.0 * font.iy * scale;
	      var positions = [p[0], p[3], // left bottom,
	      p[2], p[3], // right bottom,
	      p[2], p[1], // right top
	      p[0], p[1]];
	      var uvs = [g[0], g[1], // left top
	      g[2], g[1], // right top
	      g[2], g[3], // right bottom,
	      g[0], g[3]];
	      var sdfSizes = [sdf_size, sdf_size, sdf_size, sdf_size];
	      return {
	        positions: positions,
	        uvs: uvs,
	        sdfSizes: sdfSizes,
	        pos: [new_pos_x, pos[1]]
	      }; //return { vertices : vertices, pos : [ new_pos_x, pos[1] ] };
	    }
	  }, {
	    key: "text",
	    get: function get() {
	      return this._text;
	    },
	    set: function set(value) {
	      this._text = value;
	      this.update();
	    }
	  }, {
	    key: "texture",
	    get: function get() {
	      return this._texture;
	    }
	  }, {
	    key: "font",
	    get: function get() {
	      return this._font;
	    }
	  }]);
	
	  return AwesomeText;
	}(PIXI.mesh.Mesh); //module.exports = AwesomeText;
	
	
	_defineProperty(AwesomeText, "scale", 1.0);
	
	var _default = AwesomeText;
	exports["default"] = _default;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;
	
	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
	
	function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }
	
	function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }
	
	function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }
	
	function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
	
	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var TextLayout =
	/*#__PURE__*/
	function () {
	  function TextLayout(text, font, config) {
	    _classCallCheck(this, TextLayout);
	
	    _defineProperty(this, "text", "");
	
	    _defineProperty(this, "font", null);
	
	    _defineProperty(this, "metrics", null);
	
	    _defineProperty(this, "fontSize", 20);
	
	    _defineProperty(this, "align", "left");
	
	    _defineProperty(this, "startX", 0);
	
	    _defineProperty(this, "startY", 0);
	
	    _defineProperty(this, "wrapperWidth", 100);
	
	    _defineProperty(this, "wrapWords", false);
	
	    _defineProperty(this, "wordsMetrics", []);
	
	    _defineProperty(this, "lettersCount", 0);
	
	    _defineProperty(this, "height", 0);
	
	    _defineProperty(this, "linesCount", 0);
	
	    _defineProperty(this, "lineHeight", 0);
	
	    this.text = text;
	    this.font = font;
	    this.fontSize = config.fontSize;
	    this.wrapWords = config.wrapWords;
	    this.wrapperWidth = config.wrapperWidth;
	    this.lineHeight = config.lineHeight;
	    this.align = config.align;
	    this.lettersCount = this.text.split("").length;
	    this.metrics = this.fontMetrics(font, 0.0);
	    this.startY = this.metrics.lineHeight;
	    this.calculateWordsPositions();
	  }
	
	  _createClass(TextLayout, [{
	    key: "fontMetrics",
	    value: function fontMetrics(fontSize) {
	      var moreLineGap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.0;
	      var _this$font = this.font,
	          cap_height = _this$font.cap_height,
	          x_height = _this$font.x_height,
	          fontAscent = _this$font.ascent,
	          descent = _this$font.descent,
	          line_gap = _this$font.line_gap;
	      var capScale = this.fontSize / cap_height;
	      var lowScale = Math.round(x_height * capScale) / x_height;
	      var ascent = Math.round(fontAscent * capScale);
	      var lineHeight = Math.round(capScale * (fontAscent + descent + line_gap) + moreLineGap);
	      if (this.lineHeight > 0) lineHeight = this.lineHeight;else this.lineHeight = lineHeight;
	      return {
	        capScale: capScale,
	        lowScale: lowScale,
	        ascent: ascent,
	        lineHeight: lineHeight
	      };
	    }
	  }, {
	    key: "charRect",
	    value: function charRect(pos, font_char) {
	      var kern = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0.0;
	      var _this$metrics = this.metrics,
	          ascent = _this$metrics.ascent,
	          lowScale = _this$metrics.lowScale,
	          capScale = _this$metrics.capScale;
	      var _this$font2 = this.font,
	          descent = _this$font2.descent,
	          row_height = _this$font2.row_height,
	          iy = _this$font2.iy,
	          ix = _this$font2.ix;
	      var flags = font_char.flags,
	          bearing_x = font_char.bearing_x,
	          advance_x = font_char.advance_x,
	          rect = font_char.rect; // Low case characters have first bit set in 'flags'
	
	      var lowCase = (flags & 1) === 1; // Pen position is at the top of the line, Y goes up
	
	      var baseline = pos[1] - ascent; // Low case chars use their own scale
	
	      var scale = lowCase ? lowScale : capScale; // Laying out the glyph rectangle
	
	      var g = rect;
	      var bottom = baseline - scale * (descent + iy);
	      var top = bottom + scale * row_height;
	      var left = pos[0] + scale * (bearing_x + kern - ix);
	      var right = left + scale * (g[2] - g[0]);
	      var p = [left, top, right, bottom]; // Advancing pen position
	
	      var new_pos_x = pos[0] + scale * advance_x; // Signed distance field size in screen pixels
	
	      var sdf_size = 2.0 * iy * scale;
	      var positions = [p[0], p[3], // left bottom,
	      p[2], p[3], // right bottom,
	      p[2], p[1], // right top
	      p[0], p[1]];
	      var uvs = [g[0], g[1], // left top
	      g[2], g[1], // right top
	      g[2], g[3], // right bottom,
	      g[0], g[3]];
	      var sdfSizes = [sdf_size, sdf_size, sdf_size, sdf_size];
	      return {
	        positions: positions,
	        uvs: uvs,
	        sdfSizes: sdfSizes,
	        pos: [new_pos_x, pos[1]]
	      };
	    }
	  }, {
	    key: "getStringSize",
	    value: function getStringSize(string) {
	      var _this = this;
	
	      var width = 0;
	      var height = this.metrics.lineHeight;
	
	      var chars = _toConsumableArray(string); // Iterate thought the chars, calculate position
	
	
	      chars.forEach(function (_char) {
	        var font_char = _this.font.chars[_char];
	
	        if (_char === " ") {
	          width += _this.font.space_advance * _this.metrics.capScale;
	          return;
	        } // Get char metrics
	
	
	        var charRect = _this.charRect([width, 0], font_char, 0.2);
	
	        width = charRect.pos[0];
	      });
	      return {
	        width: width,
	        height: height
	      };
	    }
	  }, {
	    key: "calculateWordsPositions",
	    value: function calculateWordsPositions() {
	      var _this2 = this;
	
	      var words = this.text.split(" ");
	      this.wordsMetrics = []; // Initial position
	
	      var x = this.startX;
	      var y = this.startY; // Calculate words positions on lines
	
	      words.forEach(function (word) {
	        var wordSize = _this2.getStringSize(word);
	
	        if (x + wordSize.width > _this2.startX + _this2.wrapperWidth && _this2.wrapWords) {
	          x = _this2.startX;
	          y += wordSize.height;
	        }
	
	        _this2.wordsMetrics.push(_extends({}, wordSize, {
	          x: x,
	          y: y,
	          word: word
	        }));
	
	        x += wordSize.width + _this2.font.space_advance * _this2.metrics.capScale;
	      }); // Calculate lines count
	
	      this.linesCount = (y - this.startY) / this.metrics.lineHeight + 1;
	      this.height = this.linesCount * this.metrics.lineHeight; // Change align TODO optimise
	
	      var _loop = function _loop(i) {
	        var wordsOnLine = _this2.wordsMetrics.filter(function (word) {
	          return word.y === _this2.startY + i * _this2.metrics.lineHeight;
	        });
	
	        var lastWord = wordsOnLine[wordsOnLine.length - 1];
	
	        if (lastWord) {
	          var freeSpace = _this2.startX + _this2.wrapperWidth - (lastWord.x + lastWord.width);
	          var leftOffset = 0;
	
	          switch (_this2.align) {
	            case "center":
	              leftOffset = freeSpace / 2;
	              break;
	
	            case "right":
	              leftOffset = freeSpace;
	              break;
	          }
	
	          _this2.wordsMetrics.forEach(function (word) {
	            if (word.y === _this2.startY + i * _this2.metrics.lineHeight) {
	              word.x += leftOffset;
	            }
	          });
	        }
	      };
	
	      for (var i = 0; i < this.linesCount; ++i) {
	        _loop(i);
	      }
	    }
	  }]);
	
	  return TextLayout;
	}(); //module.exports = TextLayout;
	
	
	var _default = TextLayout;
	exports["default"] = _default;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

	var dtype = __webpack_require__(7)
	var anArray = __webpack_require__(8)
	var isBuffer = __webpack_require__(9)
	
	var CW = [0, 2, 3]
	var CCW = [2, 1, 3]
	
	module.exports = function createQuadElements(array, opt) {
	    //if user didn't specify an output array
	    if (!array || !(anArray(array) || isBuffer(array))) {
	        opt = array || {}
	        array = null
	    }
	
	    if (typeof opt === 'number') //backwards-compatible
	        opt = { count: opt }
	    else
	        opt = opt || {}
	
	    var type = typeof opt.type === 'string' ? opt.type : 'uint16'
	    var count = typeof opt.count === 'number' ? opt.count : 1
	    var start = (opt.start || 0) 
	
	    var dir = opt.clockwise !== false ? CW : CCW,
	        a = dir[0], 
	        b = dir[1],
	        c = dir[2]
	
	    var numIndices = count * 6
	
	    var indices = array || new (dtype(type))(numIndices)
	    for (var i = 0, j = 0; i < numIndices; i += 6, j += 4) {
	        var x = i + start
	        indices[x + 0] = j + 0
	        indices[x + 1] = j + 1
	        indices[x + 2] = j + 2
	        indices[x + 3] = j + a
	        indices[x + 4] = j + b
	        indices[x + 5] = j + c
	    }
	    return indices
	}

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = function(dtype) {
	  switch (dtype) {
	    case 'int8':
	      return Int8Array
	    case 'int16':
	      return Int16Array
	    case 'int32':
	      return Int32Array
	    case 'uint8':
	      return Uint8Array
	    case 'uint16':
	      return Uint16Array
	    case 'uint32':
	      return Uint32Array
	    case 'float32':
	      return Float32Array
	    case 'float64':
	      return Float64Array
	    case 'array':
	      return Array
	    case 'uint8_clamped':
	      return Uint8ClampedArray
	  }
	}


/***/ }),
/* 8 */
/***/ (function(module, exports) {

	var str = Object.prototype.toString
	
	module.exports = anArray
	
	function anArray(arr) {
	  return (
	       arr.BYTES_PER_ELEMENT
	    && str.call(arr.buffer) === '[object ArrayBuffer]'
	    || Array.isArray(arr)
	  )
	}


/***/ }),
/* 9 */
/***/ (function(module, exports) {

	/*!
	 * Determine if an object is a Buffer
	 *
	 * @author   Feross Aboukhadijeh <https://feross.org>
	 * @license  MIT
	 */
	
	// The _isBuffer check is for Safari 5-7 support, because it's missing
	// Object.prototype.constructor. Remove this eventually
	module.exports = function (obj) {
	  return obj != null && (isBuffer(obj) || isSlowBuffer(obj) || !!obj._isBuffer)
	}
	
	function isBuffer (obj) {
	  return !!obj.constructor && typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj)
	}
	
	// For Node v0.10 support. Remove this eventually.
	function isSlowBuffer (obj) {
	  return typeof obj.readFloatLE === 'function' && typeof obj.slice === 'function' && isBuffer(obj.slice(0, 0))
	}


/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5NmMxYjkyYWNmMTczNzEzNDIzOCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3ZlcnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9mcmFnLmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2R0eXBlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYW4tYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1idWZmZXIvaW5kZXguanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiYXNzaWduIiwiUElYSSIsImV4dHJhcyIsIkF3ZXNvbWVUZXh0IiwiVGV4dCIsInZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwiZ2xDb3JlIiwiQXdlc29tZVRleHRSZW5kZXJlciIsInJlbmRlcmVyIiwic2hhZGVyIiwiZ2wiLCJnZXRFeHRlbnNpb24iLCJTaGFkZXIiLCJhd2Vzb21lVGV4dCIsInN0eWxlSUQiLCJzdHlsZSIsInVwZGF0ZSIsInRleHR1cmUiLCJnbERhdGEiLCJfZ2xEYXRhcyIsIkNPTlRFWFRfVUlEIiwiYmluZFZhbyIsImJ1aWxkR2xEYXRhIiwidmFvIiwiZGlydHkiLCJ1dkJ1ZmZlciIsInVwbG9hZCIsInV2cyIsImluZGV4RGlydHkiLCJpbmRleEJ1ZmZlciIsImluZGljZXMiLCJ2ZXJ0ZXhCdWZmZXIiLCJ2ZXJ0aWNlcyIsImJpbmRTaGFkZXIiLCJzdGF0ZSIsInNldEJsZW5kTW9kZSIsImJsZW5kTW9kZSIsInVuaWZvcm1zIiwidVNhbXBsZXIiLCJiaW5kVGV4dHVyZSIsInRyYW5zbGF0aW9uTWF0cml4Iiwid29ybGRUcmFuc2Zvcm0iLCJ0b0FycmF5IiwiaGludF9hbW91bnQiLCJzZGZNdWx0aXBsaWVyIiwic2NhbGUiLCJzdWJwaXhlbF9hbW91bnQiLCJmb250X2NvbG9yIiwidXRpbHMiLCJoZXgycmdiIiwiZmlsbCIsInJlcGxhY2UiLCJiZ19jb2xvciIsImJhY2tncm91bmRDb2xvciIsImRyYXdNb2RlIiwiVFJJQU5HTEVTIiwiZHJhdyIsImxlbmd0aCIsIkdMQnVmZmVyIiwiY3JlYXRlVmVydGV4QnVmZmVyIiwiU1RSRUFNX0RSQVciLCJzZGZCdWZmZXIiLCJzZGZTaXplcyIsIlNUQVRJQ19EUkFXIiwiY3JlYXRlSW5kZXhCdWZmZXIiLCJWZXJ0ZXhBcnJheU9iamVjdCIsImFkZEluZGV4IiwiYWRkQXR0cmlidXRlIiwiYXR0cmlidXRlcyIsImFWZXJ0ZXhQb3NpdGlvbiIsIkZMT0FUIiwiYVRleHR1cmVDb29yZCIsImFTZGZTaXplIiwiT2JqZWN0UmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwicmVnaXN0ZXJQbHVnaW4iLCJjcmVhdGVJbmRpY2VzIiwidGV4dCIsImZvbnQiLCJUZXh0U3R5bGUiLCJfdGV4dCIsIl9mb250IiwiX3RleHR1cmUiLCJwbHVnaW5OYW1lIiwibGF5b3V0IiwiVGV4dExheW91dCIsImZvbnRTaXplIiwid3JhcFdvcmRzIiwiYnJlYWtXb3JkcyIsIndyYXBwZXJXaWR0aCIsIndvcmRXcmFwV2lkdGgiLCJhbGlnbiIsImxpbmVIZWlnaHQiLCJtZXRyaWNzIiwiZm9udE1ldHJpY3MiLCJGbG9hdDMyQXJyYXkiLCJsZXR0ZXJzQ291bnQiLCJhcnJheVBvc2l0aW9ucyIsInZlcnRleCIsInNkZiIsIndvcmRzTWV0cmljcyIsImZvckVhY2giLCJ3b3JkIiwid3JpdGVTdHJpbmciLCJ4IiwieSIsImNsb2Nrd2lzZSIsInR5cGUiLCJjb3VudCIsInN0cmluZyIsImZvbnRfbWV0cmljcyIsInBvcyIsInByZXZfY2hhciIsImNwb3MiLCJ4X21heCIsImNhcF9zY2FsZSIsInN0cl9wb3MiLCJzY2hhciIsImxpbmVfaGVpZ2h0Iiwic3BhY2VfYWR2YW5jZSIsImZvbnRfY2hhciIsImNoYXJzIiwia2VybiIsInJlY3QiLCJjaGFyUmVjdCIsInBvc2l0aW9ucyIsIm1hcCIsInV2Iiwic3RyaW5nX3BvcyIsInBpeGVsX3NpemUiLCJtb3JlX2xpbmVfZ2FwIiwiY2FwX2hlaWdodCIsImxvd19zY2FsZSIsIk1hdGgiLCJyb3VuZCIsInhfaGVpZ2h0IiwiYXNjZW50IiwiZGVzY2VudCIsImxpbmVfZ2FwIiwibG93Y2FzZSIsImZsYWdzIiwiYmFzZWxpbmUiLCJnIiwiYm90dG9tIiwiaXkiLCJ0b3AiLCJyb3dfaGVpZ2h0IiwibGVmdCIsImJlYXJpbmdfeCIsIml4IiwicmlnaHQiLCJwIiwibmV3X3Bvc194IiwiYWR2YW5jZV94Iiwic2RmX3NpemUiLCJ2YWx1ZSIsIm1lc2giLCJNZXNoIiwiY29uZmlnIiwic3BsaXQiLCJzdGFydFkiLCJjYWxjdWxhdGVXb3Jkc1Bvc2l0aW9ucyIsIm1vcmVMaW5lR2FwIiwiZm9udEFzY2VudCIsImNhcFNjYWxlIiwibG93U2NhbGUiLCJsb3dDYXNlIiwid2lkdGgiLCJoZWlnaHQiLCJjaGFyIiwid29yZHMiLCJzdGFydFgiLCJ3b3JkU2l6ZSIsImdldFN0cmluZ1NpemUiLCJwdXNoIiwibGluZXNDb3VudCIsImkiLCJ3b3Jkc09uTGluZSIsImZpbHRlciIsImxhc3RXb3JkIiwiZnJlZVNwYWNlIiwibGVmdE9mZnNldCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InBpeGktYXdlc29tZS10ZXh0Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkF3ZXNvbWVUZXh0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkF3ZXNvbWVUZXh0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDk2YzFiOTJhY2YxNzM3MTM0MjM4IiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL3JlbmRlcmVyXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi90ZXh0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2xheW91dFwiO1xuXG5PYmplY3QuYXNzaWduKFBJWEkuZXh0cmFzLCB7XG4gIEF3ZXNvbWVUZXh0OiBUZXh0XG59KTtcblxuaWYgKHR5cGVvZiBQSVhJICE9PSAndW5kZWZpbmVkJykge1xuICBpZiAoUElYSS5leHRyYXMpIHtcbiAgICBQSVhJLmV4dHJhcy5Bd2Vzb21lVGV4dCA9IFRleHQ7XG4gIH0gZWxzZSB7XG4gICAgUElYSS5leHRyYXMgPSB7IEF3ZXNvbWVUZXh0OiBUZXh0fTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBUZXh0LFxuICBSZW5kZXJlcixcbiAgTGF5b3V0XG59XG5cblxuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCBBd2Vzb21lVGV4dCBmcm9tIFwiLi90ZXh0XCI7XG5cbmNvbnN0IHZlcnRleFNoYWRlciA9IHJlcXVpcmUoXCIuL3NoYWRlcnMvdmVydC5nbHNsXCIpO1xuY29uc3QgZnJhZ21lbnRTaGFkZXIgPSByZXF1aXJlKFwiLi9zaGFkZXJzL2ZyYWcuZ2xzbFwiKTtcblxuY29uc3QgZ2xDb3JlID0gUElYSS5nbENvcmU7XG5cbmNsYXNzIEF3ZXNvbWVUZXh0UmVuZGVyZXIgZXh0ZW5kcyBQSVhJLk9iamVjdFJlbmRlcmVyIHtcblxuICBzdGF0aWMgc2NhbGUgPSAxLjBcblxuICBjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xuICAgIHN1cGVyKHJlbmRlcmVyKTtcbiAgICB0aGlzLnNoYWRlciA9IG51bGw7XG5cbiAgfVxuXG4gIG9uQ29udGV4dENoYW5nZSgpIHtcbiAgICBjb25zdCBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG4gICAgZ2wuZ2V0RXh0ZW5zaW9uKFwiT0VTX3N0YW5kYXJkX2Rlcml2YXRpdmVzXCIpO1xuICAgIHRoaXMuc2hhZGVyID0gbmV3IFBJWEkuU2hhZGVyKGdsLCB2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcbiAgfVxuXG4gIHJlbmRlcihhd2Vzb21lVGV4dCkge1xuXG4gICAgaWYgKGF3ZXNvbWVUZXh0LnN0eWxlSUQgIT09IGF3ZXNvbWVUZXh0LnN0eWxlLnN0eWxlSUQpIHtcbiAgICAgIGF3ZXNvbWVUZXh0LnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlbmRlcmVyID0gdGhpcy5yZW5kZXJlcjtcbiAgICBjb25zdCBnbCA9IHJlbmRlcmVyLmdsO1xuICAgIGNvbnN0IHRleHR1cmUgPSBhd2Vzb21lVGV4dC50ZXh0dXJlO1xuXG4gICAgbGV0IGdsRGF0YSA9IGF3ZXNvbWVUZXh0Ll9nbERhdGFzW3JlbmRlcmVyLkNPTlRFWFRfVUlEXTtcblxuICAgIGlmICghZ2xEYXRhKSB7XG4gICAgICByZW5kZXJlci5iaW5kVmFvKG51bGwpO1xuICAgICAgZ2xEYXRhID0gdGhpcy5idWlsZEdsRGF0YShhd2Vzb21lVGV4dCwgZ2wpO1xuICAgIH1cblxuICAgIHJlbmRlcmVyLmJpbmRWYW8oZ2xEYXRhLnZhbyk7XG5cbiAgICBpZiAoYXdlc29tZVRleHQuZGlydHkgIT09IGdsRGF0YS5kaXJ0eSkge1xuICAgICAgZ2xEYXRhLmRpcnR5ID0gYXdlc29tZVRleHQuZGlydHk7XG4gICAgICBnbERhdGEudXZCdWZmZXIudXBsb2FkKGF3ZXNvbWVUZXh0LnV2cyk7XG4gICAgfVxuXG4gICAgaWYgKGF3ZXNvbWVUZXh0LmluZGV4RGlydHkgIT09IGdsRGF0YS5pbmRleERpcnR5KSB7XG4gICAgICBnbERhdGEuaW5kZXhEaXJ0eSA9IGF3ZXNvbWVUZXh0LmluZGV4RGlydHk7XG4gICAgICBnbERhdGEuaW5kZXhCdWZmZXIudXBsb2FkKGF3ZXNvbWVUZXh0LmluZGljZXMpO1xuICAgIH1cblxuICAgIGdsRGF0YS52ZXJ0ZXhCdWZmZXIudXBsb2FkKGF3ZXNvbWVUZXh0LnZlcnRpY2VzKTtcbiAgICByZW5kZXJlci5iaW5kU2hhZGVyKGdsRGF0YS5zaGFkZXIpO1xuXG4gICAgcmVuZGVyZXIuc3RhdGUuc2V0QmxlbmRNb2RlKGF3ZXNvbWVUZXh0LmJsZW5kTW9kZSk7XG5cbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnVTYW1wbGVyID0gcmVuZGVyZXIuYmluZFRleHR1cmUodGV4dHVyZSk7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy50cmFuc2xhdGlvbk1hdHJpeCA9IGF3ZXNvbWVUZXh0LndvcmxkVHJhbnNmb3JtLnRvQXJyYXkodHJ1ZSk7XG5cbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmhpbnRfYW1vdW50ID0gMS4wO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuc2RmTXVsdGlwbGllciA9IEF3ZXNvbWVUZXh0LnNjYWxlO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuc3VicGl4ZWxfYW1vdW50ID0gMS4wO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuZm9udF9jb2xvciA9IFBJWEkudXRpbHMuaGV4MnJnYihhd2Vzb21lVGV4dC5zdHlsZS5maWxsLnJlcGxhY2UoXCIjXCIsIFwiMHhcIikpO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuYmdfY29sb3IgPSBQSVhJLnV0aWxzLmhleDJyZ2IoYXdlc29tZVRleHQuYmFja2dyb3VuZENvbG9yLnJlcGxhY2UoXCIjXCIsIFwiMHhcIikpO1xuXG4gICAgY29uc3QgZHJhd01vZGUgPSBhd2Vzb21lVGV4dC5kcmF3TW9kZSA9IGdsLlRSSUFOR0xFUztcbiAgICBnbERhdGEudmFvLmRyYXcoZHJhd01vZGUsIGF3ZXNvbWVUZXh0LmluZGljZXMubGVuZ3RoLCAwKTtcbiAgfVxuXG4gIGJ1aWxkR2xEYXRhKGF3ZXNvbWVUZXh0LCBnbCkge1xuXG4gICAgY29uc3QgZ2xEYXRhID0ge1xuICAgICAgc2hhZGVyOiB0aGlzLnNoYWRlcixcbiAgICAgIHZlcnRleEJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgYXdlc29tZVRleHQudmVydGljZXMsIGdsLlNUUkVBTV9EUkFXKSxcbiAgICAgIHV2QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlVmVydGV4QnVmZmVyKGdsLCBhd2Vzb21lVGV4dC51dnMsIGdsLlNUUkVBTV9EUkFXKSxcbiAgICAgIHNkZkJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgYXdlc29tZVRleHQuc2RmU2l6ZXMsIGdsLlNUQVRJQ19EUkFXKSxcbiAgICAgIGluZGV4QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlSW5kZXhCdWZmZXIoZ2wsIGF3ZXNvbWVUZXh0LmluZGljZXMsIGdsLlNUQVRJQ19EUkFXKSxcbiAgICAgIC8vIGJ1aWxkIHRoZSB2YW8gb2JqZWN0IHRoYXQgd2lsbCByZW5kZXIuLlxuICAgICAgdmFvOiBudWxsLFxuICAgICAgZGlydHk6IGF3ZXNvbWVUZXh0LmRpcnR5LFxuICAgICAgaW5kZXhEaXJ0eTogYXdlc29tZVRleHQuaW5kZXhEaXJ0eSxcbiAgICB9O1xuXG4gICAgZ2xEYXRhLnZhbyA9IG5ldyBnbENvcmUuVmVydGV4QXJyYXlPYmplY3QoZ2wpXG4gICAgICAuYWRkSW5kZXgoZ2xEYXRhLmluZGV4QnVmZmVyKVxuICAgICAgLmFkZEF0dHJpYnV0ZShnbERhdGEudmVydGV4QnVmZmVyLCBnbERhdGEuc2hhZGVyLmF0dHJpYnV0ZXMuYVZlcnRleFBvc2l0aW9uLCBnbC5GTE9BVCwgZmFsc2UsIDIgKiA0LCAwKVxuICAgICAgLmFkZEF0dHJpYnV0ZShnbERhdGEudXZCdWZmZXIsIGdsRGF0YS5zaGFkZXIuYXR0cmlidXRlcy5hVGV4dHVyZUNvb3JkLCBnbC5GTE9BVCwgZmFsc2UsIDIgKiA0LCAwKVxuICAgICAgLmFkZEF0dHJpYnV0ZShnbERhdGEuc2RmQnVmZmVyLCBnbERhdGEuc2hhZGVyLmF0dHJpYnV0ZXMuYVNkZlNpemUsIGdsLkZMT0FULCBmYWxzZSwgNCwgMCk7XG5cbiAgICByZXR1cm4gZ2xEYXRhXG4gIH1cblxufVxuXG5QSVhJLldlYkdMUmVuZGVyZXIucmVnaXN0ZXJQbHVnaW4oJ0F3ZXNvbWVUZXh0UmVuZGVyZXInLCBBd2Vzb21lVGV4dFJlbmRlcmVyKTtcblxuZXhwb3J0IGRlZmF1bHQgQXdlc29tZVRleHRSZW5kZXJlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlcmVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxuYXR0cmlidXRlIHZlYzIgYVZlcnRleFBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWMyIGFUZXh0dXJlQ29vcmQ7XFxuYXR0cmlidXRlIGZsb2F0IGFTZGZTaXplO1xcblxcbnVuaWZvcm0gbWF0MyB0cmFuc2xhdGlvbk1hdHJpeDtcXG51bmlmb3JtIG1hdDMgcHJvamVjdGlvbk1hdHJpeDtcXG51bmlmb3JtIGZsb2F0IHNkZk11bHRpcGxpZXI7XFxuXFxudmFyeWluZyB2ZWMyICB0YzA7XFxudmFyeWluZyBmbG9hdCBkb2Zmc2V0O1xcbnZhcnlpbmcgZmxvYXQgc2RmX3RleGVsO1xcblxcblxcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuXFxuICAgIC8vVE9ETyBNQUtFIEFUVFJJQlVURVxcbiAgICBmbG9hdCBzZGZfc2l6ZSA9IGFTZGZTaXplICogc2RmTXVsdGlwbGllcjtcXG5cXG4gICAgLy9UT0RPIE1BS0UgVU5JRk9STVNcXG4gICAgZmxvYXQgc2RmX3RleF9zaXplID0gMTAyNC4wO1xcblxcblxcbiAgICB0YzAgPSBhVGV4dHVyZUNvb3JkO1xcbiAgICBkb2Zmc2V0ID0gMS4wIC8gc2RmX3NpemU7ICAgICAgIC8vIERpc3RhbmNlIGZpZWxkIGRlbHRhIGZvciBvbmUgc2NyZWVuIHBpeGVsXFxuICAgIHNkZl90ZXhlbCA9IDEuMCAvIHNkZl90ZXhfc2l6ZTtcXG5cXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KChwcm9qZWN0aW9uTWF0cml4ICogdHJhbnNsYXRpb25NYXRyaXggKiB2ZWMzKGFWZXJ0ZXhQb3NpdGlvbiAsIDEuMCkpLnh5LCAwLjAsIDEuMCk7XFxuXFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy92ZXJ0Lmdsc2xcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxudW5pZm9ybSBzYW1wbGVyMkQgdVNhbXBsZXI7XFxudW5pZm9ybSBmbG9hdCBoaW50X2Ftb3VudDtcXG51bmlmb3JtIGZsb2F0IHN1YnBpeGVsX2Ftb3VudDtcXG5cXG51bmlmb3JtIHZlYzMgYmdfY29sb3I7XFxudW5pZm9ybSB2ZWMzIGZvbnRfY29sb3I7XFxuXFxudmFyeWluZyB2ZWMyICB0YzA7XFxudmFyeWluZyBmbG9hdCBkb2Zmc2V0O1xcbnZhcnlpbmcgZmxvYXQgc2RmX3RleGVsO1xcblxcblxcbi8qXFxuICogIFN1YnBpeGVsIGNvdmVyYWdlIGNhbGN1bGF0aW9uXFxuICpcXG4gKiAgdiAtIGVkZ2Ugc2xvcGUgICAgLTEuMCB0byAxLjAgICAgICAgICAgdHJpcGxldFxcbiAqICBhIC0gcGl4ZWwgY292ZXJhZ2UgMC4wIHRvIDEuMCAgICAgICAgICBjb3ZlcmFnZVxcbiAqXFxuICogICAgICB8PC0gZ2x5cGggZWRnZSAgICAgICAgICAgICAgICAgICAgICBSICBHICBCXFxuICogICstLS0rLS0tKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tKy0tKy0tK1xcbiAqICB8ICAgfFhYWHwgdiA9IDEuMCAoZWRnZSBmYWNpbmcgd2VzdCkgIHwgIHx4eHxYWHxcXG4gKiAgfCAgIHxYWFh8IGEgPSAwLjUgKDUwJSBjb3ZlcmFnZSkgICAgICB8ICB8eHh8WFh8XFxuICogIHwgICB8WFhYfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgfHh4fFhYfFxcbiAqICArLS0tKy0tLSsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLSstLSstLStcXG4gKiAgICBwaXhlbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCAgNTAgMTAwXFxuICpcXG4gKlxcbiAqICAgICAgICBSICAgRyAgIEJcXG4gKlxcbiAqICAgMS4wICAgICAgICArLS0rICAgPC0gdG9wIChhYnMoIHYgKSlcXG4gKiAgICAgICAgICAgICAgfFxcbiAqICAgICAgIC0rLS0tLS0rLS0rLS0gPC0gY2VpbDogMTAwJSBjb3ZlcmFnZVxcbiAqICAgICAgICB8ICAgICB8WFh8XFxuICogICAwLjAgIHwgICstLStYWHxcXG4gKiAgICAgICAgfCAgfHh4fFhYfFxcbiAqICAgICAgIC0rLS0rLS0rLS0rLS0gPC0gZmxvb3I6IDAlIGNvdmVyYWdlXFxuICogICAgICAgICAgIHxcXG4gKiAgLTEuMCAgKy0tKyAgICAgICAgIDwtICAtYWJzKHYpXFxuICogICAgICAgIHxcXG4gKiAgICAgICAgfFxcbiAqICAgICAgICB8XFxuICogIC0yLjAgICsgICAgICAgICAgICA8LSBib3R0b206IC1hYnModiktMS4wXFxuICovXFxuXFxudmVjMyBzdWJwaXhlbCggZmxvYXQgdiwgZmxvYXQgYSApIHtcXG4gICAgZmxvYXQgdnQgICAgICA9IDAuNiAqIHY7IC8vIDEuMCB3aWxsIG1ha2UgeW91ciBleWVzIGJsZWVkXFxuICAgIHZlYzMgIHJnYl9tYXggPSB2ZWMzKCAtdnQsIDAuMCwgdnQgKTtcXG4gICAgZmxvYXQgdG9wICAgICA9IGFicyggdnQgKTtcXG4gICAgZmxvYXQgYm90dG9tICA9IC10b3AgLSAxLjA7XFxuICAgIGZsb2F0IGNmbG9vciAgPSBtaXgoIHRvcCwgYm90dG9tLCBhICk7XFxuICAgIHZlYzMgIHJlcyAgICAgPSBjbGFtcCggcmdiX21heCAtIHZlYzMoIGNmbG9vciApLCAwLjAsIDEuMCApO1xcbiAgICByZXR1cm4gcmVzO1xcbn1cXG5cXG52b2lkIG1haW4yKCkge1xcbiAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodVNhbXBsZXIsIHRjMCk7XFxufVxcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuXFxuICAgIC8vIFNhbXBsaW5nIHRoZSB0ZXh0dXJlLCBMIHBhdHRlcm5cXG4gICAgZmxvYXQgc2RmICAgICAgID0gdGV4dHVyZTJEKCB1U2FtcGxlciwgdGMwICkucjtcXG4gICAgZmxvYXQgc2RmX25vcnRoID0gdGV4dHVyZTJEKCB1U2FtcGxlciwgdGMwICsgdmVjMiggMC4wLCBzZGZfdGV4ZWwgKSApLnI7XFxuICAgIGZsb2F0IHNkZl9lYXN0ICA9IHRleHR1cmUyRCggdVNhbXBsZXIsIHRjMCArIHZlYzIoIHNkZl90ZXhlbCwgMC4wICkgKS5yO1xcblxcbiAgICAvLyBFc3RpbWF0aW5nIHN0cm9rZSBkaXJlY3Rpb24gYnkgdGhlIGRpc3RhbmNlIGZpZWxkIGdyYWRpZW50IHZlY3RvclxcbiAgICB2ZWMyICBzZ3JhZCAgICAgPSB2ZWMyKCBzZGZfZWFzdCAtIHNkZiwgc2RmX25vcnRoIC0gc2RmICk7XFxuICAgIGZsb2F0IHNncmFkX2xlbiA9IG1heCggbGVuZ3RoKCBzZ3JhZCApLCAxLjAgLyAxMjguMCApO1xcbiAgICB2ZWMyICBncmFkICAgICAgPSBzZ3JhZCAvIHZlYzIoIHNncmFkX2xlbiApO1xcbiAgICBmbG9hdCB2Z3JhZCA9IGFicyggZ3JhZC55ICk7IC8vIDAuMCAtIHZlcnRpY2FsIHN0cm9rZSwgMS4wIC0gaG9yaXpvbnRhbCBvbmVcXG5cXG4gICAgZmxvYXQgaG9yel9zY2FsZSAgPSAxLjE7IC8vIEJsdXJyaW5nIHZlcnRpY2FsIHN0cm9rZXMgYWxvbmcgdGhlIFggYXhpcyBhIGJpdFxcbiAgICBmbG9hdCB2ZXJ0X3NjYWxlICA9IDAuNjsgLy8gV2hpbGUgYWRkaW5nIHNvbWUgY29udHJhc3QgdG8gdGhlIGhvcml6b250YWwgc3Ryb2tlc1xcbiAgICBmbG9hdCBoZG9mZnNldCAgICA9IG1peCggZG9mZnNldCAqIGhvcnpfc2NhbGUsIGRvZmZzZXQgKiB2ZXJ0X3NjYWxlLCB2Z3JhZCApO1xcbiAgICBmbG9hdCByZXNfZG9mZnNldCA9IG1peCggZG9mZnNldCwgaGRvZmZzZXQsIGhpbnRfYW1vdW50ICk7XFxuXFxuICAgIGZsb2F0IGFscGhhICAgICAgID0gc21vb3Roc3RlcCggMC41IC0gcmVzX2RvZmZzZXQsIDAuNSArIHJlc19kb2Zmc2V0LCBzZGYgKTtcXG5cXG4gICAgLy8gQWRkaXRpb25hbCBjb250cmFzdFxcbiAgICBhbHBoYSAgICAgICAgICAgICA9IHBvdyggYWxwaGEsIDEuMCArIDAuMiAqIHZncmFkICogaGludF9hbW91bnQgKTtcXG5cXG4gICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBzdXBwb3J0IGZvciBBUkJfYmxlbmRfZnVuY19leHRlbmRlZCBpbiBXZWJHTC5cXG4gICAgLy8gRm9ydHVuYXRlbHkgdGhlIGJhY2tncm91bmQgaXMgZmlsbGVkIHdpdGggYSBzb2xpZCBjb2xvciBzbyB3ZSBjYW4gZG9cXG4gICAgLy8gdGhlIGJsZW5kaW5nIGluc2lkZSB0aGUgc2hhZGVyLlxcblxcbiAgICAvLyBEaXNjYXJkaW5nIHBpeGVscyBiZXlvbmQgYSB0aHJlc2hvbGQgdG8gbWluaW1pc2UgcG9zc2libGUgYXJ0aWZhY3RzLlxcbiAgICBpZiAoIGFscGhhIDwgMjAuMCAvIDI1Ni4wICkgZGlzY2FyZDtcXG5cXG4gICAgdmVjMyBjaGFubmVscyA9IHN1YnBpeGVsKCBncmFkLnggKiAwLjUgKiBzdWJwaXhlbF9hbW91bnQsIGFscGhhICkgKyAwLjE7XFxuXFxuICAgIC8vIEZvciBzdWJwaXhlbCByZW5kZXJpbmcgd2UgaGF2ZSB0byBibGVuZCBlYWNoIGNvbG9yIGNoYW5uZWwgc2VwYXJhdGVseVxcbiAgICB2ZWMzIHJlcyA9IG1peCggYmdfY29sb3IsIGZvbnRfY29sb3IsIGNoYW5uZWxzICk7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoIHJlcywgMS4wICk7XFxufVxcblxcblxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy9mcmFnLmdsc2xcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiY29uc3QgY3JlYXRlSW5kaWNlcyA9IHJlcXVpcmUoXCJxdWFkLWluZGljZXNcIilcbmltcG9ydCBUZXh0TGF5b3V0IGZyb20gJy4vbGF5b3V0JztcblxuY2xhc3MgQXdlc29tZVRleHQgZXh0ZW5kcyBQSVhJLm1lc2guTWVzaCB7XG5cbiAgc3RhdGljIHNjYWxlID0gMS4wO1xuXG4gIGNvbnN0cnVjdG9yKHRleHQsIHN0eWxlLCBmb250KSB7XG4gICAgc3VwZXIoZm9udC50ZXh0dXJlKTtcblxuICAgIHRoaXMuc3R5bGUgPSBuZXcgUElYSS5UZXh0U3R5bGUoc3R5bGUpO1xuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICAgIHRoaXMuX3RleHQgPSB0ZXh0O1xuICAgIHRoaXMuX2ZvbnQgPSBmb250LmZvbnQ7XG5cbiAgICAvL1RPRE8gc2VwYXJhdGUgZm9udCBhbmQgdGV4dHVyZVxuICAgIHRoaXMuX3RleHR1cmUgPSBmb250LnRleHR1cmU7XG4gICAgdGhpcy5wbHVnaW5OYW1lID0gJ0F3ZXNvbWVUZXh0UmVuZGVyZXInO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuXG4gICAgdGhpcy5sYXlvdXQgPSBuZXcgVGV4dExheW91dCh0aGlzLnRleHQsIHRoaXMuZm9udCwge1xuICAgICAgZm9udFNpemU6IHRoaXMuc3R5bGUuZm9udFNpemUsXG4gICAgICB3cmFwV29yZHM6IHRoaXMuc3R5bGUuYnJlYWtXb3JkcyxcbiAgICAgIHdyYXBwZXJXaWR0aDogdGhpcy5zdHlsZS53b3JkV3JhcFdpZHRoLFxuICAgICAgYWxpZ246IHRoaXMuc3R5bGUuYWxpZ24sXG4gICAgICBsaW5lSGVpZ2h0OiB0aGlzLnN0eWxlLmxpbmVIZWlnaHQsXG4gICAgfSk7XG5cbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLmZvbnRNZXRyaWNzKCB0aGlzLmZvbnQsIHRoaXMuc3R5bGUuZm9udFNpemUsIHRoaXMuc3R5bGUuZm9udFNpemUgKiAwLjIgKTtcbiAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0ICogMik7XG4gICAgdGhpcy51dnMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubGF5b3V0LmxldHRlcnNDb3VudCAqIDQgKiAyKTtcbiAgICB0aGlzLnNkZlNpemVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0KTtcblxuICAgIHRoaXMuYXJyYXlQb3NpdGlvbnMgPSB7IHZlcnRleDogMCwgdXZzOiAwLCBzZGY6IDAgfTtcblxuICAgIHRoaXMubGF5b3V0LndvcmRzTWV0cmljcy5mb3JFYWNoICh3b3JkID0+IHtcbiAgICAgIHRoaXMud3JpdGVTdHJpbmcod29yZC53b3JkLCB0aGlzLmZvbnQsIHRoaXMubWV0cmljcywgW3dvcmQueCwgd29yZC55XSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmluZGljZXMgPSBjcmVhdGVJbmRpY2VzKHtcbiAgICAgIGNsb2Nrd2lzZTogdHJ1ZSxcbiAgICAgIHR5cGU6ICd1aW50MTYnLFxuICAgICAgY291bnQ6IHRoaXMubGF5b3V0LmxldHRlcnNDb3VudFxuICAgIH0pO1xuXG4gICAgdGhpcy5zdHlsZUlEID0gdGhpcy5zdHlsZS5zdHlsZUlEO1xuICAgIHRoaXMuZGlydHkrKztcbiAgICB0aGlzLmluZGV4RGlydHkrKztcbiAgfVxuXG4gIGdldCB0ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICB9XG5cbiAgc2V0IHRleHQodmFsdWUpIHtcbiAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGdldCB0ZXh0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLl90ZXh0dXJlO1xuICB9XG5cbiAgZ2V0IGZvbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvbnRcbiAgfVxuXG4gIHdyaXRlU3RyaW5nKCBzdHJpbmcsIGZvbnQsIGZvbnRfbWV0cmljcywgcG9zKSB7XG4gICAgbGV0IHByZXZfY2hhciA9IFwiIFwiOyAgLy8gVXNlZCB0byBjYWxjdWxhdGUga2VybmluZ1xuICAgIGxldCBjcG9zICAgICAgPSBwb3M7ICAvLyBDdXJyZW50IHBlbiBwb3NpdGlvblxuICAgIGxldCB4X21heCAgICAgPSAwLjA7ICAvLyBNYXggd2lkdGggLSB1c2VkIGZvciBib3VuZGluZyBib3hcbiAgICBsZXQgc2NhbGUgICAgID0gZm9udF9tZXRyaWNzLmNhcF9zY2FsZTtcblxuICAgIGxldCBzdHJfcG9zID0gMDtcblxuICAgIGZvcig7Oykge1xuICAgICAgaWYgKCBzdHJfcG9zID09PSBzdHJpbmcubGVuZ3RoICkgYnJlYWs7XG5cbiAgICAgIHZhciBzY2hhciA9IHN0cmluZ1sgc3RyX3BvcyBdO1xuICAgICAgc3RyX3BvcysrO1xuXG4gICAgICBpZiAoIHNjaGFyID09PSBcIlxcblwiICkge1xuICAgICAgICBpZiAoIGNwb3NbMF0gPiB4X21heCApIHhfbWF4ID0gY3Bvc1swXTsgLy8gRXhwYW5kaW5nIHRoZSBib3VuZGluZyByZWN0XG4gICAgICAgIGNwb3NbMF0gID0gcG9zWzBdO1xuICAgICAgICBjcG9zWzFdIC09IGZvbnRfbWV0cmljcy5saW5lX2hlaWdodDtcbiAgICAgICAgcHJldl9jaGFyID0gXCIgXCI7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIHNjaGFyID09PSBcIiBcIiApIHtcbiAgICAgICAgLy9zY2hhciA9IFwiX1wiXG4gICAgICAgIGNwb3NbMF0gKz0gZm9udC5zcGFjZV9hZHZhbmNlICogc2NhbGU7XG4gICAgICAgIHByZXZfY2hhciA9IFwiIFwiO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZvbnRfY2hhciA9IGZvbnQuY2hhcnNbIHNjaGFyIF07XG4gICAgICBpZiAoICFmb250X2NoYXIgKSB7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1YnN0aXR1dGluZyB1bmF2YWlsYWJsZSBjaGFyYWN0ZXJzIHdpdGggJz8nXG4gICAgICAgIHNjaGFyID0gXCI/XCI7XG4gICAgICAgIGZvbnRfY2hhciA9IGZvbnQuY2hhcnNbIFwiP1wiIF07XG4gICAgICB9XG5cbiAgICAgIHZhciBrZXJuID0gZm9udC5rZXJuWyBwcmV2X2NoYXIgKyBzY2hhciBdO1xuICAgICAgaWYgKCAha2VybiApIGtlcm4gPSAwLjA7XG5cbiAgICAgIC8vIGNhbGN1bGF0aW5nIHRoZSBnbHlwaCByZWN0YW5nbGUgYW5kIGNvcHlpbmcgaXQgdG8gdGhlIHZlcnRleCBhcnJheVxuICAgICAgdmFyIHJlY3QgPSB0aGlzLmNoYXJSZWN0KCBjcG9zLCBmb250LCBmb250X21ldHJpY3MsIGZvbnRfY2hhciwga2VybiApO1xuXG4gICAgICByZWN0LnBvc2l0aW9ucy5tYXAoKHBvcykgPT4gdGhpcy52ZXJ0aWNlc1sgdGhpcy5hcnJheVBvc2l0aW9ucy52ZXJ0ZXgrKyBdID0gcG9zICk7XG4gICAgICByZWN0LnV2cy5tYXAoKHV2KSA9PiB0aGlzLnV2c1sgdGhpcy5hcnJheVBvc2l0aW9ucy51dnMrKyBdID0gdXYgKTtcbiAgICAgIHJlY3Quc2RmU2l6ZXMubWFwKChzZGYpID0+IHRoaXMuc2RmU2l6ZXNbIHRoaXMuYXJyYXlQb3NpdGlvbnMuc2RmKysgXSA9IHNkZiApO1xuXG4gICAgICBwcmV2X2NoYXIgPSBzY2hhcjtcbiAgICAgIGNwb3MgPSByZWN0LnBvcztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVjdCA6IFsgcG9zWzBdLCBwb3NbMV0sIHhfbWF4IC0gcG9zWzBdLCBwb3NbMV0gLSBjcG9zWzFdICsgZm9udF9tZXRyaWNzLmxpbmVfaGVpZ2h0IF0sXG4gICAgICBzdHJpbmdfcG9zIDogc3RyX3BvcyxcbiAgICAgIC8vYXJyYXlfcG9zIDogYXJyYXlfcG9zXG4gICAgfVxuXG4gIH1cblxuICBmb250TWV0cmljcyggZm9udCwgcGl4ZWxfc2l6ZSwgbW9yZV9saW5lX2dhcCA9IDAuMCApIHtcbiAgICAvLyBXZSB1c2Ugc2VwYXJhdGUgc2NhbGUgZm9yIHRoZSBsb3cgY2FzZSBjaGFyYWN0ZXJzXG4gICAgLy8gc28gdGhhdCB4LWhlaWdodCBmaXRzIHRoZSBwaXhlbCBncmlkLlxuICAgIC8vIE90aGVyIGNoYXJhY3RlcnMgdXNlIGNhcC1oZWlnaHQgdG8gZml0IHRvIHRoZSBwaXhlbHNcbiAgICB2YXIgY2FwX3NjYWxlICAgPSBwaXhlbF9zaXplIC8gZm9udC5jYXBfaGVpZ2h0O1xuICAgIHZhciBsb3dfc2NhbGUgICA9IE1hdGgucm91bmQoIGZvbnQueF9oZWlnaHQgKiBjYXBfc2NhbGUgKSAvIGZvbnQueF9oZWlnaHQ7XG5cbiAgICAvLyBBc2NlbnQgc2hvdWxkIGJlIGEgd2hvbGUgbnVtYmVyIHNpbmNlIGl0J3MgdXNlZCB0byBjYWxjdWxhdGUgdGhlIGJhc2VsaW5lXG4gICAgLy8gcG9zaXRpb24gd2hpY2ggc2hvdWxkIGxpZSBhdCB0aGUgcGl4ZWwgYm91bmRhcnlcbiAgICB2YXIgYXNjZW50ICAgICAgPSBNYXRoLnJvdW5kKCBmb250LmFzY2VudCAqIGNhcF9zY2FsZSApO1xuXG4gICAgLy8gU2FtZSBmb3IgdGhlIGxpbmUgaGVpZ2h0XG4gICAgdmFyIGxpbmVfaGVpZ2h0ID0gTWF0aC5yb3VuZCggY2FwX3NjYWxlICogKCBmb250LmFzY2VudCArIGZvbnQuZGVzY2VudCArIGZvbnQubGluZV9nYXAgKSArIG1vcmVfbGluZV9nYXAgKTtcblxuXG4gICAgcmV0dXJuIHsgY2FwX3NjYWxlICAgOiBjYXBfc2NhbGUsXG4gICAgICBsb3dfc2NhbGUgICA6IGxvd19zY2FsZSxcbiAgICAgIHBpeGVsX3NpemUgIDogcGl4ZWxfc2l6ZSxcbiAgICAgIGFzY2VudCAgICAgIDogYXNjZW50LFxuICAgICAgbGluZV9oZWlnaHQgOiBsaW5lX2hlaWdodFxuICAgIH07XG4gIH1cblxuICBjaGFyUmVjdCggcG9zLCBmb250LCBmb250X21ldHJpY3MsIGZvbnRfY2hhciwga2VybiA9IDAuMCApIHtcblxuICAgIC8vIExvdyBjYXNlIGNoYXJhY3RlcnMgaGF2ZSBmaXJzdCBiaXQgc2V0IGluICdmbGFncydcbiAgICB2YXIgbG93Y2FzZSA9ICggZm9udF9jaGFyLmZsYWdzICYgMSApID09PSAxO1xuXG4gICAgLy8gUGVuIHBvc2l0aW9uIGlzIGF0IHRoZSB0b3Agb2YgdGhlIGxpbmUsIFkgZ29lcyB1cFxuICAgIHZhciBiYXNlbGluZSA9IHBvc1sxXSAtIGZvbnRfbWV0cmljcy5hc2NlbnQ7XG5cbiAgICAvLyBMb3cgY2FzZSBjaGFycyB1c2UgdGhlaXIgb3duIHNjYWxlXG4gICAgdmFyIHNjYWxlID0gbG93Y2FzZSA/IGZvbnRfbWV0cmljcy5sb3dfc2NhbGUgOiBmb250X21ldHJpY3MuY2FwX3NjYWxlO1xuXG4gICAgLy9zY2FsZSA9IGZvbnRfbWV0cmljcy5sb3dfc2NhbGU7XG5cbiAgICAvL3NjYWxlICs9IDIwO1xuXG4gICAgLy8gTGF5aW5nIG91dCB0aGUgZ2x5cGggcmVjdGFuZ2xlXG4gICAgdmFyIGcgICAgICA9IGZvbnRfY2hhci5yZWN0O1xuICAgIHZhciBib3R0b20gPSBiYXNlbGluZSAtIHNjYWxlICogKCBmb250LmRlc2NlbnQgKyBmb250Lml5ICk7XG4gICAgdmFyIHRvcCAgICA9IGJvdHRvbSAgICsgc2NhbGUgKiAoIGZvbnQucm93X2hlaWdodCApO1xuICAgIHZhciBsZWZ0ICAgPSBwb3NbMF0gICArIHNjYWxlICogKCBmb250X2NoYXIuYmVhcmluZ194ICsga2VybiAtIGZvbnQuaXggKTtcbiAgICB2YXIgcmlnaHQgID0gbGVmdCAgICAgKyBzY2FsZSAqICggZ1syXSAtIGdbMF0gKTtcbiAgICB2YXIgcCA9IFsgbGVmdCwgdG9wLCByaWdodCwgYm90dG9tIF07XG5cbiAgICAvLyBBZHZhbmNpbmcgcGVuIHBvc2l0aW9uXG4gICAgdmFyIG5ld19wb3NfeCA9IHBvc1swXSArIHNjYWxlICogKCBmb250X2NoYXIuYWR2YW5jZV94ICk7XG5cbiAgICAvLyBTaWduZWQgZGlzdGFuY2UgZmllbGQgc2l6ZSBpbiBzY3JlZW4gcGl4ZWxzXG4gICAgdmFyIHNkZl9zaXplICA9IDIuMCAqIGZvbnQuaXkgKiBzY2FsZTtcblxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgICAgIHBbMF0sIHBbM10sIC8vIGxlZnQgYm90dG9tLFxuICAgICAgcFsyXSwgcFszXSwgLy8gcmlnaHQgYm90dG9tLFxuICAgICAgcFsyXSwgcFsxXSwgLy8gcmlnaHQgdG9wXG4gICAgICBwWzBdLCBwWzFdLCAvLyBsZWZ0IHRvcFxuICAgIF07XG5cbiAgICBjb25zdCB1dnMgPSBbXG4gICAgICBnWzBdLCBnWzFdLCAvLyBsZWZ0IHRvcFxuICAgICAgZ1syXSwgZ1sxXSwgLy8gcmlnaHQgdG9wXG4gICAgICBnWzJdLCBnWzNdLCAvLyByaWdodCBib3R0b20sXG4gICAgICBnWzBdLCBnWzNdLCAvLyBsZWZ0IGJvdHRvbSxcbiAgICBdO1xuXG4gICAgY29uc3Qgc2RmU2l6ZXMgPSBbXG4gICAgICBzZGZfc2l6ZSxcbiAgICAgIHNkZl9zaXplLFxuICAgICAgc2RmX3NpemUsXG4gICAgICBzZGZfc2l6ZSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9ucyxcbiAgICAgIHV2cyxcbiAgICAgIHNkZlNpemVzLFxuICAgICAgcG9zOiBbIG5ld19wb3NfeCwgcG9zWzFdIF1cbiAgICB9O1xuXG4gICAgLy9yZXR1cm4geyB2ZXJ0aWNlcyA6IHZlcnRpY2VzLCBwb3MgOiBbIG5ld19wb3NfeCwgcG9zWzFdIF0gfTtcbiAgfVxuXG5cbn1cblxuXG5cbi8vbW9kdWxlLmV4cG9ydHMgPSBBd2Vzb21lVGV4dDtcblxuZXhwb3J0IGRlZmF1bHQgQXdlc29tZVRleHQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGV4dC5qcyIsIlxuY2xhc3MgVGV4dExheW91dCB7XG5cbiAgdGV4dCA9IFwiXCI7XG4gIGZvbnQgPSBudWxsO1xuICBtZXRyaWNzID0gbnVsbDtcbiAgZm9udFNpemUgPSAyMDtcbiAgYWxpZ24gPSBcImxlZnRcIjtcbiAgc3RhcnRYID0gMDtcbiAgc3RhcnRZID0gMDtcbiAgd3JhcHBlcldpZHRoID0gMTAwO1xuICB3cmFwV29yZHMgPSBmYWxzZTtcbiAgd29yZHNNZXRyaWNzID0gW107XG4gIGxldHRlcnNDb3VudCA9IDA7XG4gIGhlaWdodCA9IDA7XG4gIGxpbmVzQ291bnQgPSAwO1xuICBsaW5lSGVpZ2h0ID0gMDtcblxuXG4gIGNvbnN0cnVjdG9yKHRleHQsIGZvbnQsIGNvbmZpZykge1xuICAgIHRoaXMudGV4dCA9IHRleHQ7XG4gICAgdGhpcy5mb250ID0gZm9udDtcbiAgICB0aGlzLmZvbnRTaXplID0gY29uZmlnLmZvbnRTaXplO1xuICAgIHRoaXMud3JhcFdvcmRzID0gY29uZmlnLndyYXBXb3JkcztcbiAgICB0aGlzLndyYXBwZXJXaWR0aCA9IGNvbmZpZy53cmFwcGVyV2lkdGg7XG4gICAgdGhpcy5saW5lSGVpZ2h0ID0gY29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgdGhpcy5hbGlnbiA9IGNvbmZpZy5hbGlnbjtcbiAgICB0aGlzLmxldHRlcnNDb3VudCA9IHRoaXMudGV4dC5zcGxpdChcIlwiKS5sZW5ndGg7XG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5mb250TWV0cmljcyhmb250LCAwLjApO1xuICAgIHRoaXMuc3RhcnRZID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XG4gICAgdGhpcy5jYWxjdWxhdGVXb3Jkc1Bvc2l0aW9ucygpO1xuICB9XG5cbiAgZm9udE1ldHJpY3MoZm9udFNpemUsIG1vcmVMaW5lR2FwID0gMC4wKSB7XG5cbiAgICBjb25zdCB7Y2FwX2hlaWdodCwgeF9oZWlnaHQsIGFzY2VudDogZm9udEFzY2VudCAsIGRlc2NlbnQsIGxpbmVfZ2FwfSA9IHRoaXMuZm9udDtcblxuICAgIGNvbnN0IGNhcFNjYWxlID0gdGhpcy5mb250U2l6ZSAvIGNhcF9oZWlnaHQ7XG4gICAgY29uc3QgbG93U2NhbGUgPSBNYXRoLnJvdW5kKCB4X2hlaWdodCAqIGNhcFNjYWxlICkgLyB4X2hlaWdodDtcbiAgICBjb25zdCBhc2NlbnQgPSBNYXRoLnJvdW5kKCBmb250QXNjZW50ICogY2FwU2NhbGUgKTtcbiAgICBsZXQgbGluZUhlaWdodCA9IE1hdGgucm91bmQoIGNhcFNjYWxlICogKCBmb250QXNjZW50ICsgZGVzY2VudCArIGxpbmVfZ2FwICkgKyBtb3JlTGluZUdhcCApO1xuXG4gICAgaWYgKHRoaXMubGluZUhlaWdodCA+IDApXG4gICAgICBsaW5lSGVpZ2h0ID0gdGhpcy5saW5lSGVpZ2h0O1xuICAgIGVsc2VcbiAgICAgIHRoaXMubGluZUhlaWdodCA9IGxpbmVIZWlnaHQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY2FwU2NhbGUgICA6IGNhcFNjYWxlLFxuICAgICAgbG93U2NhbGUgICA6IGxvd1NjYWxlLFxuICAgICAgYXNjZW50ICAgICAgOiBhc2NlbnQsXG4gICAgICBsaW5lSGVpZ2h0IDogbGluZUhlaWdodFxuICAgIH07XG4gIH1cblxuICBjaGFyUmVjdCggcG9zLCBmb250X2NoYXIsIGtlcm4gPSAwLjAgKSB7XG5cbiAgICBjb25zdCB7YXNjZW50LCBsb3dTY2FsZSwgY2FwU2NhbGV9ID0gdGhpcy5tZXRyaWNzO1xuXG4gICAgY29uc3QgeyBkZXNjZW50LCByb3dfaGVpZ2h0LCBpeSwgaXggfSA9IHRoaXMuZm9udDtcblxuICAgIGNvbnN0IHtmbGFncywgYmVhcmluZ194LCBhZHZhbmNlX3gsIHJlY3QgfSA9IGZvbnRfY2hhcjtcblxuICAgIC8vIExvdyBjYXNlIGNoYXJhY3RlcnMgaGF2ZSBmaXJzdCBiaXQgc2V0IGluICdmbGFncydcbiAgICB2YXIgbG93Q2FzZSA9ICggZmxhZ3MgJiAxICkgPT09IDE7XG5cbiAgICAvLyBQZW4gcG9zaXRpb24gaXMgYXQgdGhlIHRvcCBvZiB0aGUgbGluZSwgWSBnb2VzIHVwXG4gICAgdmFyIGJhc2VsaW5lID0gcG9zWzFdIC0gYXNjZW50O1xuXG4gICAgLy8gTG93IGNhc2UgY2hhcnMgdXNlIHRoZWlyIG93biBzY2FsZVxuICAgIHZhciBzY2FsZSA9IGxvd0Nhc2UgPyBsb3dTY2FsZSA6IGNhcFNjYWxlO1xuXG5cbiAgICAvLyBMYXlpbmcgb3V0IHRoZSBnbHlwaCByZWN0YW5nbGVcbiAgICB2YXIgZyAgICAgID0gcmVjdDtcbiAgICB2YXIgYm90dG9tID0gYmFzZWxpbmUgLSBzY2FsZSAqICggZGVzY2VudCArIGl5ICk7XG4gICAgdmFyIHRvcCAgICA9IGJvdHRvbSAgICsgc2NhbGUgKiAoIHJvd19oZWlnaHQgKTtcbiAgICB2YXIgbGVmdCAgID0gcG9zWzBdICAgKyBzY2FsZSAqICggYmVhcmluZ194ICsga2VybiAtIGl4ICk7XG4gICAgdmFyIHJpZ2h0ICA9IGxlZnQgICAgICsgc2NhbGUgKiAoIGdbMl0gLSBnWzBdICk7XG4gICAgdmFyIHAgPSBbIGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSBdO1xuXG4gICAgLy8gQWR2YW5jaW5nIHBlbiBwb3NpdGlvblxuICAgIHZhciBuZXdfcG9zX3ggPSBwb3NbMF0gKyBzY2FsZSAqICggYWR2YW5jZV94ICk7XG5cbiAgICAvLyBTaWduZWQgZGlzdGFuY2UgZmllbGQgc2l6ZSBpbiBzY3JlZW4gcGl4ZWxzXG4gICAgdmFyIHNkZl9zaXplICA9IDIuMCAqIGl5ICogc2NhbGU7XG5cbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbXG4gICAgICBwWzBdLCBwWzNdLCAvLyBsZWZ0IGJvdHRvbSxcbiAgICAgIHBbMl0sIHBbM10sIC8vIHJpZ2h0IGJvdHRvbSxcbiAgICAgIHBbMl0sIHBbMV0sIC8vIHJpZ2h0IHRvcFxuICAgICAgcFswXSwgcFsxXSwgLy8gbGVmdCB0b3BcbiAgICBdO1xuXG4gICAgY29uc3QgdXZzID0gW1xuICAgICAgZ1swXSwgZ1sxXSwgLy8gbGVmdCB0b3BcbiAgICAgIGdbMl0sIGdbMV0sIC8vIHJpZ2h0IHRvcFxuICAgICAgZ1syXSwgZ1szXSwgLy8gcmlnaHQgYm90dG9tLFxuICAgICAgZ1swXSwgZ1szXSwgLy8gbGVmdCBib3R0b20sXG4gICAgXTtcblxuICAgIGNvbnN0IHNkZlNpemVzID0gW1xuICAgICAgc2RmX3NpemUsXG4gICAgICBzZGZfc2l6ZSxcbiAgICAgIHNkZl9zaXplLFxuICAgICAgc2RmX3NpemUsXG4gICAgXTtcblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbnMsXG4gICAgICB1dnMsXG4gICAgICBzZGZTaXplcyxcbiAgICAgIHBvczogWyBuZXdfcG9zX3gsIHBvc1sxXSBdXG4gICAgfTtcbiAgfVxuXG4gIGdldFN0cmluZ1NpemUoc3RyaW5nKSB7XG5cbiAgICBsZXQgd2lkdGggPSAwO1xuICAgIGxldCBoZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcblxuICAgIGNvbnN0IGNoYXJzID0gWy4uLnN0cmluZ107XG5cbiAgICAvLyBJdGVyYXRlIHRob3VnaHQgdGhlIGNoYXJzLCBjYWxjdWxhdGUgcG9zaXRpb25cbiAgICBjaGFycy5mb3JFYWNoKGNoYXIgPT4ge1xuICAgICAgbGV0IGZvbnRfY2hhciA9IHRoaXMuZm9udC5jaGFyc1sgY2hhciBdO1xuXG4gICAgICBpZiAoY2hhciA9PT0gXCIgXCIpIHtcbiAgICAgICAgd2lkdGggKz0gdGhpcy5mb250LnNwYWNlX2FkdmFuY2UgKiB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gR2V0IGNoYXIgbWV0cmljc1xuICAgICAgbGV0IGNoYXJSZWN0ID0gdGhpcy5jaGFyUmVjdChbd2lkdGgsMF0sIGZvbnRfY2hhciwgMC4yKTtcbiAgICAgIHdpZHRoID0gY2hhclJlY3QucG9zWzBdO1xuXG4gICAgfSk7XG5cbiAgICByZXR1cm4ge3dpZHRoLCBoZWlnaHR9O1xuXG4gIH1cblxuICBjYWxjdWxhdGVXb3Jkc1Bvc2l0aW9ucygpIHtcblxuICAgIGNvbnN0IHdvcmRzID0gdGhpcy50ZXh0LnNwbGl0KFwiIFwiKTtcbiAgICB0aGlzLndvcmRzTWV0cmljcyA9IFtdO1xuXG4gICAgLy8gSW5pdGlhbCBwb3NpdGlvblxuICAgIGxldCB4ID0gdGhpcy5zdGFydFg7XG4gICAgbGV0IHkgPSB0aGlzLnN0YXJ0WTtcblxuXG4gICAgLy8gQ2FsY3VsYXRlIHdvcmRzIHBvc2l0aW9ucyBvbiBsaW5lc1xuICAgIHdvcmRzLmZvckVhY2god29yZCA9PiB7XG4gICAgICBjb25zdCB3b3JkU2l6ZSA9IHRoaXMuZ2V0U3RyaW5nU2l6ZSh3b3JkKTtcbiAgICAgIGlmICh4ICsgd29yZFNpemUud2lkdGggPiB0aGlzLnN0YXJ0WCArIHRoaXMud3JhcHBlcldpZHRoICYmIHRoaXMud3JhcFdvcmRzKSB7XG4gICAgICAgIHggPSB0aGlzLnN0YXJ0WDtcbiAgICAgICAgeSArPSB3b3JkU2l6ZS5oZWlnaHQ7XG4gICAgICB9XG4gICAgICB0aGlzLndvcmRzTWV0cmljcy5wdXNoKHsuLi53b3JkU2l6ZSwgeCwgeSwgd29yZH0pO1xuICAgICAgeCArPSB3b3JkU2l6ZS53aWR0aCArIHRoaXMuZm9udC5zcGFjZV9hZHZhbmNlICogdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xuICAgIH0pO1xuXG4gICAgLy8gQ2FsY3VsYXRlIGxpbmVzIGNvdW50XG4gICAgdGhpcy5saW5lc0NvdW50ID0gKHkgLSB0aGlzLnN0YXJ0WSkgLyB0aGlzLm1ldHJpY3MubGluZUhlaWdodCArIDE7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmxpbmVzQ291bnQgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcblxuXG4gICAgLy8gQ2hhbmdlIGFsaWduIFRPRE8gb3B0aW1pc2VcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGluZXNDb3VudDsgKytpKSB7XG4gICAgICBjb25zdCB3b3Jkc09uTGluZSA9IHRoaXMud29yZHNNZXRyaWNzLmZpbHRlcih3b3JkID0+IHdvcmQueSA9PT0gdGhpcy5zdGFydFkgKyAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSlcblxuICAgICAgY29uc3QgbGFzdFdvcmQgPSB3b3Jkc09uTGluZVt3b3Jkc09uTGluZS5sZW5ndGggLSAxXTtcblxuICAgICAgaWYgKGxhc3RXb3JkKSB7XG4gICAgICAgIGNvbnN0IGZyZWVTcGFjZSA9ICh0aGlzLnN0YXJ0WCArIHRoaXMud3JhcHBlcldpZHRoKSAtIChsYXN0V29yZC54ICsgbGFzdFdvcmQud2lkdGgpO1xuXG4gICAgICAgIGxldCBsZWZ0T2Zmc2V0ID0gMDtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMuYWxpZ24pIHtcbiAgICAgICAgICBjYXNlIFwiY2VudGVyXCI6XG4gICAgICAgICAgICBsZWZ0T2Zmc2V0ID0gZnJlZVNwYWNlIC8gMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgbGVmdE9mZnNldCA9IGZyZWVTcGFjZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud29yZHNNZXRyaWNzLmZvckVhY2god29yZCA9PiB7XG4gICAgICAgICAgaWYgKHdvcmQueSA9PT0gdGhpcy5zdGFydFkgKyAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSkge1xuICAgICAgICAgICAgd29yZC54ICs9IGxlZnRPZmZzZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgfVxuXG4gIH1cblxufVxuXG4vL21vZHVsZS5leHBvcnRzID0gVGV4dExheW91dDtcblxuZXhwb3J0IGRlZmF1bHQgVGV4dExheW91dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sYXlvdXQuanMiLCJ2YXIgZHR5cGUgPSByZXF1aXJlKCdkdHlwZScpXG52YXIgYW5BcnJheSA9IHJlcXVpcmUoJ2FuLWFycmF5JylcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpXG5cbnZhciBDVyA9IFswLCAyLCAzXVxudmFyIENDVyA9IFsyLCAxLCAzXVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZVF1YWRFbGVtZW50cyhhcnJheSwgb3B0KSB7XG4gICAgLy9pZiB1c2VyIGRpZG4ndCBzcGVjaWZ5IGFuIG91dHB1dCBhcnJheVxuICAgIGlmICghYXJyYXkgfHwgIShhbkFycmF5KGFycmF5KSB8fCBpc0J1ZmZlcihhcnJheSkpKSB7XG4gICAgICAgIG9wdCA9IGFycmF5IHx8IHt9XG4gICAgICAgIGFycmF5ID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0ID09PSAnbnVtYmVyJykgLy9iYWNrd2FyZHMtY29tcGF0aWJsZVxuICAgICAgICBvcHQgPSB7IGNvdW50OiBvcHQgfVxuICAgIGVsc2VcbiAgICAgICAgb3B0ID0gb3B0IHx8IHt9XG5cbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBvcHQudHlwZSA9PT0gJ3N0cmluZycgPyBvcHQudHlwZSA6ICd1aW50MTYnXG4gICAgdmFyIGNvdW50ID0gdHlwZW9mIG9wdC5jb3VudCA9PT0gJ251bWJlcicgPyBvcHQuY291bnQgOiAxXG4gICAgdmFyIHN0YXJ0ID0gKG9wdC5zdGFydCB8fCAwKSBcblxuICAgIHZhciBkaXIgPSBvcHQuY2xvY2t3aXNlICE9PSBmYWxzZSA/IENXIDogQ0NXLFxuICAgICAgICBhID0gZGlyWzBdLCBcbiAgICAgICAgYiA9IGRpclsxXSxcbiAgICAgICAgYyA9IGRpclsyXVxuXG4gICAgdmFyIG51bUluZGljZXMgPSBjb3VudCAqIDZcblxuICAgIHZhciBpbmRpY2VzID0gYXJyYXkgfHwgbmV3IChkdHlwZSh0eXBlKSkobnVtSW5kaWNlcylcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IDA7IGkgPCBudW1JbmRpY2VzOyBpICs9IDYsIGogKz0gNCkge1xuICAgICAgICB2YXIgeCA9IGkgKyBzdGFydFxuICAgICAgICBpbmRpY2VzW3ggKyAwXSA9IGogKyAwXG4gICAgICAgIGluZGljZXNbeCArIDFdID0gaiArIDFcbiAgICAgICAgaW5kaWNlc1t4ICsgMl0gPSBqICsgMlxuICAgICAgICBpbmRpY2VzW3ggKyAzXSA9IGogKyBhXG4gICAgICAgIGluZGljZXNbeCArIDRdID0gaiArIGJcbiAgICAgICAgaW5kaWNlc1t4ICsgNV0gPSBqICsgY1xuICAgIH1cbiAgICByZXR1cm4gaW5kaWNlc1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9xdWFkLWluZGljZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkdHlwZSkge1xuICBzd2l0Y2ggKGR0eXBlKSB7XG4gICAgY2FzZSAnaW50OCc6XG4gICAgICByZXR1cm4gSW50OEFycmF5XG4gICAgY2FzZSAnaW50MTYnOlxuICAgICAgcmV0dXJuIEludDE2QXJyYXlcbiAgICBjYXNlICdpbnQzMic6XG4gICAgICByZXR1cm4gSW50MzJBcnJheVxuICAgIGNhc2UgJ3VpbnQ4JzpcbiAgICAgIHJldHVybiBVaW50OEFycmF5XG4gICAgY2FzZSAndWludDE2JzpcbiAgICAgIHJldHVybiBVaW50MTZBcnJheVxuICAgIGNhc2UgJ3VpbnQzMic6XG4gICAgICByZXR1cm4gVWludDMyQXJyYXlcbiAgICBjYXNlICdmbG9hdDMyJzpcbiAgICAgIHJldHVybiBGbG9hdDMyQXJyYXlcbiAgICBjYXNlICdmbG9hdDY0JzpcbiAgICAgIHJldHVybiBGbG9hdDY0QXJyYXlcbiAgICBjYXNlICdhcnJheSc6XG4gICAgICByZXR1cm4gQXJyYXlcbiAgICBjYXNlICd1aW50OF9jbGFtcGVkJzpcbiAgICAgIHJldHVybiBVaW50OENsYW1wZWRBcnJheVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZHR5cGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHN0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxubW9kdWxlLmV4cG9ydHMgPSBhbkFycmF5XG5cbmZ1bmN0aW9uIGFuQXJyYXkoYXJyKSB7XG4gIHJldHVybiAoXG4gICAgICAgYXJyLkJZVEVTX1BFUl9FTEVNRU5UXG4gICAgJiYgc3RyLmNhbGwoYXJyLmJ1ZmZlcikgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSdcbiAgICB8fCBBcnJheS5pc0FycmF5KGFycilcbiAgKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuLWFycmF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxuLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cblxuLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS5cbmZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzLWJ1ZmZlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9