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

	module.exports = "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute float aSdfSize;\n\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\nuniform mat3 transform;\n\n\nvarying vec2  tc0;\nvarying float doffset;\nvarying float sdf_texel;\n\n\nvoid main(void) {\n\n    //TODO MAKE ATTRIBUTE\n    float sdf_size = aSdfSize;\n\n    //TODO MAKE UNIFORMS\n    float sdf_tex_size = 1024.0;\n\n\n    tc0 = aTextureCoord;\n    doffset = 1.0 / sdf_size;       // Distance field delta for one screen pixel\n    sdf_texel = 1.0 / sdf_tex_size;\n\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition , 1.0)).xy, 0.0, 1.0);\n\n}\n"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwNDViNWVkNGFkMTI0OWFjZTk5ZiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3ZlcnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9mcmFnLmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2R0eXBlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYW4tYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1idWZmZXIvaW5kZXguanMiXSwibmFtZXMiOlsiT2JqZWN0IiwiYXNzaWduIiwiUElYSSIsImV4dHJhcyIsIkF3ZXNvbWVUZXh0IiwiVGV4dCIsInZlcnRleFNoYWRlciIsImZyYWdtZW50U2hhZGVyIiwiZ2xDb3JlIiwiQXdlc29tZVRleHRSZW5kZXJlciIsInJlbmRlcmVyIiwic2hhZGVyIiwiZ2wiLCJnZXRFeHRlbnNpb24iLCJTaGFkZXIiLCJhd2Vzb21lVGV4dCIsInN0eWxlSUQiLCJzdHlsZSIsInVwZGF0ZSIsInRleHR1cmUiLCJnbERhdGEiLCJfZ2xEYXRhcyIsIkNPTlRFWFRfVUlEIiwiYmluZFZhbyIsImJ1aWxkR2xEYXRhIiwidmFvIiwiZGlydHkiLCJ1dkJ1ZmZlciIsInVwbG9hZCIsInV2cyIsImluZGV4RGlydHkiLCJpbmRleEJ1ZmZlciIsImluZGljZXMiLCJ2ZXJ0ZXhCdWZmZXIiLCJ2ZXJ0aWNlcyIsImJpbmRTaGFkZXIiLCJzdGF0ZSIsInNldEJsZW5kTW9kZSIsImJsZW5kTW9kZSIsInVuaWZvcm1zIiwidVNhbXBsZXIiLCJiaW5kVGV4dHVyZSIsInRyYW5zbGF0aW9uTWF0cml4Iiwid29ybGRUcmFuc2Zvcm0iLCJ0b0FycmF5IiwiaGludF9hbW91bnQiLCJzdWJwaXhlbF9hbW91bnQiLCJmb250X2NvbG9yIiwidXRpbHMiLCJoZXgycmdiIiwiZmlsbCIsInJlcGxhY2UiLCJiZ19jb2xvciIsImJhY2tncm91bmRDb2xvciIsImRyYXdNb2RlIiwiVFJJQU5HTEVTIiwiZHJhdyIsImxlbmd0aCIsIkdMQnVmZmVyIiwiY3JlYXRlVmVydGV4QnVmZmVyIiwiU1RSRUFNX0RSQVciLCJzZGZCdWZmZXIiLCJzZGZTaXplcyIsIlNUQVRJQ19EUkFXIiwiY3JlYXRlSW5kZXhCdWZmZXIiLCJWZXJ0ZXhBcnJheU9iamVjdCIsImFkZEluZGV4IiwiYWRkQXR0cmlidXRlIiwiYXR0cmlidXRlcyIsImFWZXJ0ZXhQb3NpdGlvbiIsIkZMT0FUIiwiYVRleHR1cmVDb29yZCIsImFTZGZTaXplIiwiT2JqZWN0UmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwicmVnaXN0ZXJQbHVnaW4iLCJjcmVhdGVJbmRpY2VzIiwidGV4dCIsImZvbnQiLCJUZXh0U3R5bGUiLCJfdGV4dCIsIl9mb250IiwiX3RleHR1cmUiLCJwbHVnaW5OYW1lIiwibGF5b3V0IiwiVGV4dExheW91dCIsImZvbnRTaXplIiwid3JhcFdvcmRzIiwiYnJlYWtXb3JkcyIsIndyYXBwZXJXaWR0aCIsIndvcmRXcmFwV2lkdGgiLCJhbGlnbiIsImxpbmVIZWlnaHQiLCJtZXRyaWNzIiwiZm9udE1ldHJpY3MiLCJGbG9hdDMyQXJyYXkiLCJsZXR0ZXJzQ291bnQiLCJhcnJheVBvc2l0aW9ucyIsInZlcnRleCIsInNkZiIsIndvcmRzTWV0cmljcyIsImZvckVhY2giLCJ3b3JkIiwid3JpdGVTdHJpbmciLCJ4IiwieSIsImNsb2Nrd2lzZSIsInR5cGUiLCJjb3VudCIsInN0cmluZyIsImZvbnRfbWV0cmljcyIsInBvcyIsInByZXZfY2hhciIsImNwb3MiLCJ4X21heCIsInNjYWxlIiwiY2FwX3NjYWxlIiwic3RyX3BvcyIsInNjaGFyIiwibGluZV9oZWlnaHQiLCJzcGFjZV9hZHZhbmNlIiwiZm9udF9jaGFyIiwiY2hhcnMiLCJrZXJuIiwicmVjdCIsImNoYXJSZWN0IiwicG9zaXRpb25zIiwibWFwIiwidXYiLCJzdHJpbmdfcG9zIiwicGl4ZWxfc2l6ZSIsIm1vcmVfbGluZV9nYXAiLCJjYXBfaGVpZ2h0IiwibG93X3NjYWxlIiwiTWF0aCIsInJvdW5kIiwieF9oZWlnaHQiLCJhc2NlbnQiLCJkZXNjZW50IiwibGluZV9nYXAiLCJsb3djYXNlIiwiZmxhZ3MiLCJiYXNlbGluZSIsImciLCJib3R0b20iLCJpeSIsInRvcCIsInJvd19oZWlnaHQiLCJsZWZ0IiwiYmVhcmluZ194IiwiaXgiLCJyaWdodCIsInAiLCJuZXdfcG9zX3giLCJhZHZhbmNlX3giLCJzZGZfc2l6ZSIsInZhbHVlIiwibWVzaCIsIk1lc2giLCJjb25maWciLCJzcGxpdCIsInN0YXJ0WSIsImNhbGN1bGF0ZVdvcmRzUG9zaXRpb25zIiwibW9yZUxpbmVHYXAiLCJmb250QXNjZW50IiwiY2FwU2NhbGUiLCJsb3dTY2FsZSIsImxvd0Nhc2UiLCJ3aWR0aCIsImhlaWdodCIsImNoYXIiLCJ3b3JkcyIsInN0YXJ0WCIsIndvcmRTaXplIiwiZ2V0U3RyaW5nU2l6ZSIsInB1c2giLCJsaW5lc0NvdW50IiwiaSIsIndvcmRzT25MaW5lIiwiZmlsdGVyIiwibGFzdFdvcmQiLCJmcmVlU3BhY2UiLCJsZWZ0T2Zmc2V0Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtB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Q29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJBd2Vzb21lVGV4dFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJBd2Vzb21lVGV4dFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwNDViNWVkNGFkMTI0OWFjZTk5ZiIsImltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi9yZW5kZXJlclwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4vdGV4dFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi9sYXlvdXRcIjtcblxuT2JqZWN0LmFzc2lnbihQSVhJLmV4dHJhcywge1xuICBBd2Vzb21lVGV4dDogVGV4dFxufSk7XG5cbmlmICh0eXBlb2YgUElYSSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgaWYgKFBJWEkuZXh0cmFzKSB7XG4gICAgUElYSS5leHRyYXMuQXdlc29tZVRleHQgPSBUZXh0O1xuICB9IGVsc2Uge1xuICAgIFBJWEkuZXh0cmFzID0geyBBd2Vzb21lVGV4dDogVGV4dH07XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgVGV4dCxcbiAgUmVuZGVyZXIsXG4gIExheW91dFxufVxuXG5cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJjb25zdCB2ZXJ0ZXhTaGFkZXIgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3ZlcnQuZ2xzbFwiKTtcbmNvbnN0IGZyYWdtZW50U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy9mcmFnLmdsc2xcIik7XG5cbmNvbnN0IGdsQ29yZSA9IFBJWEkuZ2xDb3JlO1xuXG5jbGFzcyBBd2Vzb21lVGV4dFJlbmRlcmVyIGV4dGVuZHMgUElYSS5PYmplY3RSZW5kZXJlciB7XG5cbiAgc3RhdGljIHNjYWxlID0gMS4wXG5cbiAgY29uc3RydWN0b3IocmVuZGVyZXIpIHtcbiAgICBzdXBlcihyZW5kZXJlcik7XG4gICAgdGhpcy5zaGFkZXIgPSBudWxsO1xuXG4gIH1cblxuICBvbkNvbnRleHRDaGFuZ2UoKSB7XG4gICAgY29uc3QgZ2wgPSB0aGlzLnJlbmRlcmVyLmdsO1xuICAgIGdsLmdldEV4dGVuc2lvbihcIk9FU19zdGFuZGFyZF9kZXJpdmF0aXZlc1wiKTtcbiAgICB0aGlzLnNoYWRlciA9IG5ldyBQSVhJLlNoYWRlcihnbCwgdmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XG4gIH1cblxuICByZW5kZXIoYXdlc29tZVRleHQpIHtcblxuICAgIGlmIChhd2Vzb21lVGV4dC5zdHlsZUlEICE9PSBhd2Vzb21lVGV4dC5zdHlsZS5zdHlsZUlEKSB7XG4gICAgICBhd2Vzb21lVGV4dC51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCByZW5kZXJlciA9IHRoaXMucmVuZGVyZXI7XG4gICAgY29uc3QgZ2wgPSByZW5kZXJlci5nbDtcbiAgICBjb25zdCB0ZXh0dXJlID0gYXdlc29tZVRleHQudGV4dHVyZTtcblxuICAgIGxldCBnbERhdGEgPSBhd2Vzb21lVGV4dC5fZ2xEYXRhc1tyZW5kZXJlci5DT05URVhUX1VJRF07XG5cbiAgICBpZiAoIWdsRGF0YSkge1xuICAgICAgcmVuZGVyZXIuYmluZFZhbyhudWxsKTtcbiAgICAgIGdsRGF0YSA9IHRoaXMuYnVpbGRHbERhdGEoYXdlc29tZVRleHQsIGdsKTtcbiAgICB9XG5cbiAgICByZW5kZXJlci5iaW5kVmFvKGdsRGF0YS52YW8pO1xuXG4gICAgaWYgKGF3ZXNvbWVUZXh0LmRpcnR5ICE9PSBnbERhdGEuZGlydHkpIHtcbiAgICAgIGdsRGF0YS5kaXJ0eSA9IGF3ZXNvbWVUZXh0LmRpcnR5O1xuICAgICAgZ2xEYXRhLnV2QnVmZmVyLnVwbG9hZChhd2Vzb21lVGV4dC51dnMpO1xuICAgIH1cblxuICAgIGlmIChhd2Vzb21lVGV4dC5pbmRleERpcnR5ICE9PSBnbERhdGEuaW5kZXhEaXJ0eSkge1xuICAgICAgZ2xEYXRhLmluZGV4RGlydHkgPSBhd2Vzb21lVGV4dC5pbmRleERpcnR5O1xuICAgICAgZ2xEYXRhLmluZGV4QnVmZmVyLnVwbG9hZChhd2Vzb21lVGV4dC5pbmRpY2VzKTtcbiAgICB9XG5cbiAgICBnbERhdGEudmVydGV4QnVmZmVyLnVwbG9hZChhd2Vzb21lVGV4dC52ZXJ0aWNlcyk7XG4gICAgcmVuZGVyZXIuYmluZFNoYWRlcihnbERhdGEuc2hhZGVyKTtcblxuICAgIHJlbmRlcmVyLnN0YXRlLnNldEJsZW5kTW9kZShhd2Vzb21lVGV4dC5ibGVuZE1vZGUpO1xuXG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy51U2FtcGxlciA9IHJlbmRlcmVyLmJpbmRUZXh0dXJlKHRleHR1cmUpO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMudHJhbnNsYXRpb25NYXRyaXggPSBhd2Vzb21lVGV4dC53b3JsZFRyYW5zZm9ybS50b0FycmF5KHRydWUpO1xuXG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5oaW50X2Ftb3VudCA9IDEuMDtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnN1YnBpeGVsX2Ftb3VudCA9IDEuMDtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmZvbnRfY29sb3IgPSBQSVhJLnV0aWxzLmhleDJyZ2IoYXdlc29tZVRleHQuc3R5bGUuZmlsbC5yZXBsYWNlKFwiI1wiLCBcIjB4XCIpKTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmJnX2NvbG9yID0gUElYSS51dGlscy5oZXgycmdiKGF3ZXNvbWVUZXh0LmJhY2tncm91bmRDb2xvci5yZXBsYWNlKFwiI1wiLCBcIjB4XCIpKTtcblxuICAgIGNvbnN0IGRyYXdNb2RlID0gYXdlc29tZVRleHQuZHJhd01vZGUgPSBnbC5UUklBTkdMRVM7XG4gICAgZ2xEYXRhLnZhby5kcmF3KGRyYXdNb2RlLCBhd2Vzb21lVGV4dC5pbmRpY2VzLmxlbmd0aCwgMCk7XG4gIH1cblxuICBidWlsZEdsRGF0YShhd2Vzb21lVGV4dCwgZ2wpIHtcblxuICAgIGNvbnN0IGdsRGF0YSA9IHtcbiAgICAgIHNoYWRlcjogdGhpcy5zaGFkZXIsXG4gICAgICB2ZXJ0ZXhCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoZ2wsIGF3ZXNvbWVUZXh0LnZlcnRpY2VzLCBnbC5TVFJFQU1fRFJBVyksXG4gICAgICB1dkJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgYXdlc29tZVRleHQudXZzLCBnbC5TVFJFQU1fRFJBVyksXG4gICAgICBzZGZCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoZ2wsIGF3ZXNvbWVUZXh0LnNkZlNpemVzLCBnbC5TVEFUSUNfRFJBVyksXG4gICAgICBpbmRleEJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZUluZGV4QnVmZmVyKGdsLCBhd2Vzb21lVGV4dC5pbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyksXG4gICAgICAvLyBidWlsZCB0aGUgdmFvIG9iamVjdCB0aGF0IHdpbGwgcmVuZGVyLi5cbiAgICAgIHZhbzogbnVsbCxcbiAgICAgIGRpcnR5OiBhd2Vzb21lVGV4dC5kaXJ0eSxcbiAgICAgIGluZGV4RGlydHk6IGF3ZXNvbWVUZXh0LmluZGV4RGlydHksXG4gICAgfTtcblxuICAgIGdsRGF0YS52YW8gPSBuZXcgZ2xDb3JlLlZlcnRleEFycmF5T2JqZWN0KGdsKVxuICAgICAgLmFkZEluZGV4KGdsRGF0YS5pbmRleEJ1ZmZlcilcbiAgICAgIC5hZGRBdHRyaWJ1dGUoZ2xEYXRhLnZlcnRleEJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFWZXJ0ZXhQb3NpdGlvbiwgZ2wuRkxPQVQsIGZhbHNlLCAyICogNCwgMClcbiAgICAgIC5hZGRBdHRyaWJ1dGUoZ2xEYXRhLnV2QnVmZmVyLCBnbERhdGEuc2hhZGVyLmF0dHJpYnV0ZXMuYVRleHR1cmVDb29yZCwgZ2wuRkxPQVQsIGZhbHNlLCAyICogNCwgMClcbiAgICAgIC5hZGRBdHRyaWJ1dGUoZ2xEYXRhLnNkZkJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFTZGZTaXplLCBnbC5GTE9BVCwgZmFsc2UsIDQsIDApO1xuXG4gICAgcmV0dXJuIGdsRGF0YVxuICB9XG5cbn1cblxuUElYSS5XZWJHTFJlbmRlcmVyLnJlZ2lzdGVyUGx1Z2luKCdBd2Vzb21lVGV4dFJlbmRlcmVyJywgQXdlc29tZVRleHRSZW5kZXJlcik7XG5cbmV4cG9ydCBkZWZhdWx0IEF3ZXNvbWVUZXh0UmVuZGVyZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXJlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjMiBhVGV4dHVyZUNvb3JkO1xcbmF0dHJpYnV0ZSBmbG9hdCBhU2RmU2l6ZTtcXG5cXG51bmlmb3JtIG1hdDMgdHJhbnNsYXRpb25NYXRyaXg7XFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb25NYXRyaXg7XFxudW5pZm9ybSBtYXQzIHRyYW5zZm9ybTtcXG5cXG5cXG52YXJ5aW5nIHZlYzIgIHRjMDtcXG52YXJ5aW5nIGZsb2F0IGRvZmZzZXQ7XFxudmFyeWluZyBmbG9hdCBzZGZfdGV4ZWw7XFxuXFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG5cXG4gICAgLy9UT0RPIE1BS0UgQVRUUklCVVRFXFxuICAgIGZsb2F0IHNkZl9zaXplID0gYVNkZlNpemU7XFxuXFxuICAgIC8vVE9ETyBNQUtFIFVOSUZPUk1TXFxuICAgIGZsb2F0IHNkZl90ZXhfc2l6ZSA9IDEwMjQuMDtcXG5cXG5cXG4gICAgdGMwID0gYVRleHR1cmVDb29yZDtcXG4gICAgZG9mZnNldCA9IDEuMCAvIHNkZl9zaXplOyAgICAgICAvLyBEaXN0YW5jZSBmaWVsZCBkZWx0YSBmb3Igb25lIHNjcmVlbiBwaXhlbFxcbiAgICBzZGZfdGV4ZWwgPSAxLjAgLyBzZGZfdGV4X3NpemU7XFxuXFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNCgocHJvamVjdGlvbk1hdHJpeCAqIHRyYW5zbGF0aW9uTWF0cml4ICogdmVjMyhhVmVydGV4UG9zaXRpb24gLCAxLjApKS54eSwgMC4wLCAxLjApO1xcblxcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvdmVydC5nbHNsXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbnVuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyO1xcbnVuaWZvcm0gZmxvYXQgaGludF9hbW91bnQ7XFxudW5pZm9ybSBmbG9hdCBzdWJwaXhlbF9hbW91bnQ7XFxuXFxudW5pZm9ybSB2ZWMzIGJnX2NvbG9yO1xcbnVuaWZvcm0gdmVjMyBmb250X2NvbG9yO1xcblxcbnZhcnlpbmcgdmVjMiAgdGMwO1xcbnZhcnlpbmcgZmxvYXQgZG9mZnNldDtcXG52YXJ5aW5nIGZsb2F0IHNkZl90ZXhlbDtcXG5cXG5cXG4vKlxcbiAqICBTdWJwaXhlbCBjb3ZlcmFnZSBjYWxjdWxhdGlvblxcbiAqXFxuICogIHYgLSBlZGdlIHNsb3BlICAgIC0xLjAgdG8gMS4wICAgICAgICAgIHRyaXBsZXRcXG4gKiAgYSAtIHBpeGVsIGNvdmVyYWdlIDAuMCB0byAxLjAgICAgICAgICAgY292ZXJhZ2VcXG4gKlxcbiAqICAgICAgfDwtIGdseXBoIGVkZ2UgICAgICAgICAgICAgICAgICAgICAgUiAgRyAgQlxcbiAqICArLS0tKy0tLSsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLSstLSstLStcXG4gKiAgfCAgIHxYWFh8IHYgPSAxLjAgKGVkZ2UgZmFjaW5nIHdlc3QpICB8ICB8eHh8WFh8XFxuICogIHwgICB8WFhYfCBhID0gMC41ICg1MCUgY292ZXJhZ2UpICAgICAgfCAgfHh4fFhYfFxcbiAqICB8ICAgfFhYWHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHx4eHxYWHxcXG4gKiAgKy0tLSstLS0rICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0rLS0rLS0rXFxuICogICAgcGl4ZWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgIDUwIDEwMFxcbiAqXFxuICpcXG4gKiAgICAgICAgUiAgIEcgICBCXFxuICpcXG4gKiAgIDEuMCAgICAgICAgKy0tKyAgIDwtIHRvcCAoYWJzKCB2ICkpXFxuICogICAgICAgICAgICAgIHxcXG4gKiAgICAgICAtKy0tLS0tKy0tKy0tIDwtIGNlaWw6IDEwMCUgY292ZXJhZ2VcXG4gKiAgICAgICAgfCAgICAgfFhYfFxcbiAqICAgMC4wICB8ICArLS0rWFh8XFxuICogICAgICAgIHwgIHx4eHxYWHxcXG4gKiAgICAgICAtKy0tKy0tKy0tKy0tIDwtIGZsb29yOiAwJSBjb3ZlcmFnZVxcbiAqICAgICAgICAgICB8XFxuICogIC0xLjAgICstLSsgICAgICAgICA8LSAgLWFicyh2KVxcbiAqICAgICAgICB8XFxuICogICAgICAgIHxcXG4gKiAgICAgICAgfFxcbiAqICAtMi4wICArICAgICAgICAgICAgPC0gYm90dG9tOiAtYWJzKHYpLTEuMFxcbiAqL1xcblxcbnZlYzMgc3VicGl4ZWwoIGZsb2F0IHYsIGZsb2F0IGEgKSB7XFxuICAgIGZsb2F0IHZ0ICAgICAgPSAwLjYgKiB2OyAvLyAxLjAgd2lsbCBtYWtlIHlvdXIgZXllcyBibGVlZFxcbiAgICB2ZWMzICByZ2JfbWF4ID0gdmVjMyggLXZ0LCAwLjAsIHZ0ICk7XFxuICAgIGZsb2F0IHRvcCAgICAgPSBhYnMoIHZ0ICk7XFxuICAgIGZsb2F0IGJvdHRvbSAgPSAtdG9wIC0gMS4wO1xcbiAgICBmbG9hdCBjZmxvb3IgID0gbWl4KCB0b3AsIGJvdHRvbSwgYSApO1xcbiAgICB2ZWMzICByZXMgICAgID0gY2xhbXAoIHJnYl9tYXggLSB2ZWMzKCBjZmxvb3IgKSwgMC4wLCAxLjAgKTtcXG4gICAgcmV0dXJuIHJlcztcXG59XFxuXFxudm9pZCBtYWluMigpIHtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHVTYW1wbGVyLCB0YzApO1xcbn1cXG5cXG52b2lkIG1haW4odm9pZCkge1xcblxcbiAgICAvLyBTYW1wbGluZyB0aGUgdGV4dHVyZSwgTCBwYXR0ZXJuXFxuICAgIGZsb2F0IHNkZiAgICAgICA9IHRleHR1cmUyRCggdVNhbXBsZXIsIHRjMCApLnI7XFxuICAgIGZsb2F0IHNkZl9ub3J0aCA9IHRleHR1cmUyRCggdVNhbXBsZXIsIHRjMCArIHZlYzIoIDAuMCwgc2RmX3RleGVsICkgKS5yO1xcbiAgICBmbG9hdCBzZGZfZWFzdCAgPSB0ZXh0dXJlMkQoIHVTYW1wbGVyLCB0YzAgKyB2ZWMyKCBzZGZfdGV4ZWwsIDAuMCApICkucjtcXG5cXG4gICAgLy8gRXN0aW1hdGluZyBzdHJva2UgZGlyZWN0aW9uIGJ5IHRoZSBkaXN0YW5jZSBmaWVsZCBncmFkaWVudCB2ZWN0b3JcXG4gICAgdmVjMiAgc2dyYWQgICAgID0gdmVjMiggc2RmX2Vhc3QgLSBzZGYsIHNkZl9ub3J0aCAtIHNkZiApO1xcbiAgICBmbG9hdCBzZ3JhZF9sZW4gPSBtYXgoIGxlbmd0aCggc2dyYWQgKSwgMS4wIC8gMTI4LjAgKTtcXG4gICAgdmVjMiAgZ3JhZCAgICAgID0gc2dyYWQgLyB2ZWMyKCBzZ3JhZF9sZW4gKTtcXG4gICAgZmxvYXQgdmdyYWQgPSBhYnMoIGdyYWQueSApOyAvLyAwLjAgLSB2ZXJ0aWNhbCBzdHJva2UsIDEuMCAtIGhvcml6b250YWwgb25lXFxuXFxuICAgIGZsb2F0IGhvcnpfc2NhbGUgID0gMS4xOyAvLyBCbHVycmluZyB2ZXJ0aWNhbCBzdHJva2VzIGFsb25nIHRoZSBYIGF4aXMgYSBiaXRcXG4gICAgZmxvYXQgdmVydF9zY2FsZSAgPSAwLjY7IC8vIFdoaWxlIGFkZGluZyBzb21lIGNvbnRyYXN0IHRvIHRoZSBob3Jpem9udGFsIHN0cm9rZXNcXG4gICAgZmxvYXQgaGRvZmZzZXQgICAgPSBtaXgoIGRvZmZzZXQgKiBob3J6X3NjYWxlLCBkb2Zmc2V0ICogdmVydF9zY2FsZSwgdmdyYWQgKTtcXG4gICAgZmxvYXQgcmVzX2RvZmZzZXQgPSBtaXgoIGRvZmZzZXQsIGhkb2Zmc2V0LCBoaW50X2Ftb3VudCApO1xcblxcbiAgICBmbG9hdCBhbHBoYSAgICAgICA9IHNtb290aHN0ZXAoIDAuNSAtIHJlc19kb2Zmc2V0LCAwLjUgKyByZXNfZG9mZnNldCwgc2RmICk7XFxuXFxuICAgIC8vIEFkZGl0aW9uYWwgY29udHJhc3RcXG4gICAgYWxwaGEgICAgICAgICAgICAgPSBwb3coIGFscGhhLCAxLjAgKyAwLjIgKiB2Z3JhZCAqIGhpbnRfYW1vdW50ICk7XFxuXFxuICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gc3VwcG9ydCBmb3IgQVJCX2JsZW5kX2Z1bmNfZXh0ZW5kZWQgaW4gV2ViR0wuXFxuICAgIC8vIEZvcnR1bmF0ZWx5IHRoZSBiYWNrZ3JvdW5kIGlzIGZpbGxlZCB3aXRoIGEgc29saWQgY29sb3Igc28gd2UgY2FuIGRvXFxuICAgIC8vIHRoZSBibGVuZGluZyBpbnNpZGUgdGhlIHNoYWRlci5cXG5cXG4gICAgLy8gRGlzY2FyZGluZyBwaXhlbHMgYmV5b25kIGEgdGhyZXNob2xkIHRvIG1pbmltaXNlIHBvc3NpYmxlIGFydGlmYWN0cy5cXG4gICAgaWYgKCBhbHBoYSA8IDIwLjAgLyAyNTYuMCApIGRpc2NhcmQ7XFxuXFxuICAgIHZlYzMgY2hhbm5lbHMgPSBzdWJwaXhlbCggZ3JhZC54ICogMC41ICogc3VicGl4ZWxfYW1vdW50LCBhbHBoYSApICsgMC4xO1xcblxcbiAgICAvLyBGb3Igc3VicGl4ZWwgcmVuZGVyaW5nIHdlIGhhdmUgdG8gYmxlbmQgZWFjaCBjb2xvciBjaGFubmVsIHNlcGFyYXRlbHlcXG4gICAgdmVjMyByZXMgPSBtaXgoIGJnX2NvbG9yLCBmb250X2NvbG9yLCBjaGFubmVscyApO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KCByZXMsIDEuMCApO1xcbn1cXG5cXG5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvZnJhZy5nbHNsXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNvbnN0IGNyZWF0ZUluZGljZXMgPSByZXF1aXJlKFwicXVhZC1pbmRpY2VzXCIpXG5pbXBvcnQgVGV4dExheW91dCBmcm9tICcuL2xheW91dCc7XG5cbmNsYXNzIEF3ZXNvbWVUZXh0IGV4dGVuZHMgUElYSS5tZXNoLk1lc2gge1xuXG4gIHN0YXRpYyBzY2FsZSA9IDEuMDtcblxuICBjb25zdHJ1Y3Rvcih0ZXh0LCBzdHlsZSwgZm9udCkge1xuICAgIHN1cGVyKGZvbnQudGV4dHVyZSk7XG5cbiAgICB0aGlzLnN0eWxlID0gbmV3IFBJWEkuVGV4dFN0eWxlKHN0eWxlKTtcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IHN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICB0aGlzLl90ZXh0ID0gdGV4dDtcbiAgICB0aGlzLl9mb250ID0gZm9udC5mb250O1xuXG4gICAgLy9UT0RPIHNlcGFyYXRlIGZvbnQgYW5kIHRleHR1cmVcbiAgICB0aGlzLl90ZXh0dXJlID0gZm9udC50ZXh0dXJlO1xuICAgIHRoaXMucGx1Z2luTmFtZSA9ICdBd2Vzb21lVGV4dFJlbmRlcmVyJztcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcblxuICAgIHRoaXMubGF5b3V0ID0gbmV3IFRleHRMYXlvdXQodGhpcy50ZXh0LCB0aGlzLmZvbnQsIHtcbiAgICAgIGZvbnRTaXplOiB0aGlzLnN0eWxlLmZvbnRTaXplLFxuICAgICAgd3JhcFdvcmRzOiB0aGlzLnN0eWxlLmJyZWFrV29yZHMsXG4gICAgICB3cmFwcGVyV2lkdGg6IHRoaXMuc3R5bGUud29yZFdyYXBXaWR0aCxcbiAgICAgIGFsaWduOiB0aGlzLnN0eWxlLmFsaWduLFxuICAgICAgbGluZUhlaWdodDogdGhpcy5zdHlsZS5saW5lSGVpZ2h0LFxuICAgIH0pO1xuXG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5mb250TWV0cmljcyggdGhpcy5mb250LCB0aGlzLnN0eWxlLmZvbnRTaXplLCB0aGlzLnN0eWxlLmZvbnRTaXplICogMC4yICk7XG4gICAgdGhpcy52ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5sYXlvdXQubGV0dGVyc0NvdW50ICogNCAqIDIpO1xuICAgIHRoaXMudXZzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0ICogMik7XG4gICAgdGhpcy5zZGZTaXplcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5sYXlvdXQubGV0dGVyc0NvdW50ICogNCk7XG5cbiAgICB0aGlzLmFycmF5UG9zaXRpb25zID0geyB2ZXJ0ZXg6IDAsIHV2czogMCwgc2RmOiAwIH07XG5cbiAgICB0aGlzLmxheW91dC53b3Jkc01ldHJpY3MuZm9yRWFjaCAod29yZCA9PiB7XG4gICAgICB0aGlzLndyaXRlU3RyaW5nKHdvcmQud29yZCwgdGhpcy5mb250LCB0aGlzLm1ldHJpY3MsIFt3b3JkLngsIHdvcmQueV0pO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pbmRpY2VzID0gY3JlYXRlSW5kaWNlcyh7XG4gICAgICBjbG9ja3dpc2U6IHRydWUsXG4gICAgICB0eXBlOiAndWludDE2JyxcbiAgICAgIGNvdW50OiB0aGlzLmxheW91dC5sZXR0ZXJzQ291bnRcbiAgICB9KTtcblxuICAgIHRoaXMuc3R5bGVJRCA9IHRoaXMuc3R5bGUuc3R5bGVJRDtcbiAgICB0aGlzLmRpcnR5Kys7XG4gICAgdGhpcy5pbmRleERpcnR5Kys7XG4gIH1cblxuICBnZXQgdGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgfVxuXG4gIHNldCB0ZXh0KHZhbHVlKSB7XG4gICAgdGhpcy5fdGV4dCA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBnZXQgdGV4dHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dHVyZTtcbiAgfVxuXG4gIGdldCBmb250KCkge1xuICAgIHJldHVybiB0aGlzLl9mb250XG4gIH1cblxuICB3cml0ZVN0cmluZyggc3RyaW5nLCBmb250LCBmb250X21ldHJpY3MsIHBvcykge1xuICAgIGxldCBwcmV2X2NoYXIgPSBcIiBcIjsgIC8vIFVzZWQgdG8gY2FsY3VsYXRlIGtlcm5pbmdcbiAgICBsZXQgY3BvcyAgICAgID0gcG9zOyAgLy8gQ3VycmVudCBwZW4gcG9zaXRpb25cbiAgICBsZXQgeF9tYXggICAgID0gMC4wOyAgLy8gTWF4IHdpZHRoIC0gdXNlZCBmb3IgYm91bmRpbmcgYm94XG4gICAgbGV0IHNjYWxlICAgICA9IGZvbnRfbWV0cmljcy5jYXBfc2NhbGU7XG5cbiAgICBsZXQgc3RyX3BvcyA9IDA7XG5cbiAgICBmb3IoOzspIHtcbiAgICAgIGlmICggc3RyX3BvcyA9PT0gc3RyaW5nLmxlbmd0aCApIGJyZWFrO1xuXG4gICAgICB2YXIgc2NoYXIgPSBzdHJpbmdbIHN0cl9wb3MgXTtcbiAgICAgIHN0cl9wb3MrKztcblxuICAgICAgaWYgKCBzY2hhciA9PT0gXCJcXG5cIiApIHtcbiAgICAgICAgaWYgKCBjcG9zWzBdID4geF9tYXggKSB4X21heCA9IGNwb3NbMF07IC8vIEV4cGFuZGluZyB0aGUgYm91bmRpbmcgcmVjdFxuICAgICAgICBjcG9zWzBdICA9IHBvc1swXTtcbiAgICAgICAgY3Bvc1sxXSAtPSBmb250X21ldHJpY3MubGluZV9oZWlnaHQ7XG4gICAgICAgIHByZXZfY2hhciA9IFwiIFwiO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCBzY2hhciA9PT0gXCIgXCIgKSB7XG4gICAgICAgIC8vc2NoYXIgPSBcIl9cIlxuICAgICAgICBjcG9zWzBdICs9IGZvbnQuc3BhY2VfYWR2YW5jZSAqIHNjYWxlO1xuICAgICAgICBwcmV2X2NoYXIgPSBcIiBcIjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBmb250X2NoYXIgPSBmb250LmNoYXJzWyBzY2hhciBdO1xuICAgICAgaWYgKCAhZm9udF9jaGFyICkgeyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdWJzdGl0dXRpbmcgdW5hdmFpbGFibGUgY2hhcmFjdGVycyB3aXRoICc/J1xuICAgICAgICBzY2hhciA9IFwiP1wiO1xuICAgICAgICBmb250X2NoYXIgPSBmb250LmNoYXJzWyBcIj9cIiBdO1xuICAgICAgfVxuXG4gICAgICB2YXIga2VybiA9IGZvbnQua2VyblsgcHJldl9jaGFyICsgc2NoYXIgXTtcbiAgICAgIGlmICggIWtlcm4gKSBrZXJuID0gMC4wO1xuXG4gICAgICAvLyBjYWxjdWxhdGluZyB0aGUgZ2x5cGggcmVjdGFuZ2xlIGFuZCBjb3B5aW5nIGl0IHRvIHRoZSB2ZXJ0ZXggYXJyYXlcbiAgICAgIHZhciByZWN0ID0gdGhpcy5jaGFyUmVjdCggY3BvcywgZm9udCwgZm9udF9tZXRyaWNzLCBmb250X2NoYXIsIGtlcm4gKTtcblxuICAgICAgcmVjdC5wb3NpdGlvbnMubWFwKChwb3MpID0+IHRoaXMudmVydGljZXNbIHRoaXMuYXJyYXlQb3NpdGlvbnMudmVydGV4KysgXSA9IHBvcyApO1xuICAgICAgcmVjdC51dnMubWFwKCh1dikgPT4gdGhpcy51dnNbIHRoaXMuYXJyYXlQb3NpdGlvbnMudXZzKysgXSA9IHV2ICk7XG4gICAgICByZWN0LnNkZlNpemVzLm1hcCgoc2RmKSA9PiB0aGlzLnNkZlNpemVzWyB0aGlzLmFycmF5UG9zaXRpb25zLnNkZisrIF0gPSBzZGYgKTtcblxuICAgICAgcHJldl9jaGFyID0gc2NoYXI7XG4gICAgICBjcG9zID0gcmVjdC5wb3M7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlY3QgOiBbIHBvc1swXSwgcG9zWzFdLCB4X21heCAtIHBvc1swXSwgcG9zWzFdIC0gY3Bvc1sxXSArIGZvbnRfbWV0cmljcy5saW5lX2hlaWdodCBdLFxuICAgICAgc3RyaW5nX3BvcyA6IHN0cl9wb3MsXG4gICAgICAvL2FycmF5X3BvcyA6IGFycmF5X3Bvc1xuICAgIH1cblxuICB9XG5cbiAgZm9udE1ldHJpY3MoIGZvbnQsIHBpeGVsX3NpemUsIG1vcmVfbGluZV9nYXAgPSAwLjAgKSB7XG4gICAgLy8gV2UgdXNlIHNlcGFyYXRlIHNjYWxlIGZvciB0aGUgbG93IGNhc2UgY2hhcmFjdGVyc1xuICAgIC8vIHNvIHRoYXQgeC1oZWlnaHQgZml0cyB0aGUgcGl4ZWwgZ3JpZC5cbiAgICAvLyBPdGhlciBjaGFyYWN0ZXJzIHVzZSBjYXAtaGVpZ2h0IHRvIGZpdCB0byB0aGUgcGl4ZWxzXG4gICAgdmFyIGNhcF9zY2FsZSAgID0gcGl4ZWxfc2l6ZSAvIGZvbnQuY2FwX2hlaWdodDtcbiAgICB2YXIgbG93X3NjYWxlICAgPSBNYXRoLnJvdW5kKCBmb250LnhfaGVpZ2h0ICogY2FwX3NjYWxlICkgLyBmb250LnhfaGVpZ2h0O1xuXG4gICAgLy8gQXNjZW50IHNob3VsZCBiZSBhIHdob2xlIG51bWJlciBzaW5jZSBpdCdzIHVzZWQgdG8gY2FsY3VsYXRlIHRoZSBiYXNlbGluZVxuICAgIC8vIHBvc2l0aW9uIHdoaWNoIHNob3VsZCBsaWUgYXQgdGhlIHBpeGVsIGJvdW5kYXJ5XG4gICAgdmFyIGFzY2VudCAgICAgID0gTWF0aC5yb3VuZCggZm9udC5hc2NlbnQgKiBjYXBfc2NhbGUgKTtcblxuICAgIC8vIFNhbWUgZm9yIHRoZSBsaW5lIGhlaWdodFxuICAgIHZhciBsaW5lX2hlaWdodCA9IE1hdGgucm91bmQoIGNhcF9zY2FsZSAqICggZm9udC5hc2NlbnQgKyBmb250LmRlc2NlbnQgKyBmb250LmxpbmVfZ2FwICkgKyBtb3JlX2xpbmVfZ2FwICk7XG5cblxuICAgIHJldHVybiB7IGNhcF9zY2FsZSAgIDogY2FwX3NjYWxlLFxuICAgICAgbG93X3NjYWxlICAgOiBsb3dfc2NhbGUsXG4gICAgICBwaXhlbF9zaXplICA6IHBpeGVsX3NpemUsXG4gICAgICBhc2NlbnQgICAgICA6IGFzY2VudCxcbiAgICAgIGxpbmVfaGVpZ2h0IDogbGluZV9oZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgY2hhclJlY3QoIHBvcywgZm9udCwgZm9udF9tZXRyaWNzLCBmb250X2NoYXIsIGtlcm4gPSAwLjAgKSB7XG5cbiAgICAvLyBMb3cgY2FzZSBjaGFyYWN0ZXJzIGhhdmUgZmlyc3QgYml0IHNldCBpbiAnZmxhZ3MnXG4gICAgdmFyIGxvd2Nhc2UgPSAoIGZvbnRfY2hhci5mbGFncyAmIDEgKSA9PT0gMTtcblxuICAgIC8vIFBlbiBwb3NpdGlvbiBpcyBhdCB0aGUgdG9wIG9mIHRoZSBsaW5lLCBZIGdvZXMgdXBcbiAgICB2YXIgYmFzZWxpbmUgPSBwb3NbMV0gLSBmb250X21ldHJpY3MuYXNjZW50O1xuXG4gICAgLy8gTG93IGNhc2UgY2hhcnMgdXNlIHRoZWlyIG93biBzY2FsZVxuICAgIHZhciBzY2FsZSA9IGxvd2Nhc2UgPyBmb250X21ldHJpY3MubG93X3NjYWxlIDogZm9udF9tZXRyaWNzLmNhcF9zY2FsZTtcblxuICAgIC8vc2NhbGUgPSBmb250X21ldHJpY3MubG93X3NjYWxlO1xuXG4gICAgLy9zY2FsZSArPSAyMDtcblxuICAgIC8vIExheWluZyBvdXQgdGhlIGdseXBoIHJlY3RhbmdsZVxuICAgIHZhciBnICAgICAgPSBmb250X2NoYXIucmVjdDtcbiAgICB2YXIgYm90dG9tID0gYmFzZWxpbmUgLSBzY2FsZSAqICggZm9udC5kZXNjZW50ICsgZm9udC5peSApO1xuICAgIHZhciB0b3AgICAgPSBib3R0b20gICArIHNjYWxlICogKCBmb250LnJvd19oZWlnaHQgKTtcbiAgICB2YXIgbGVmdCAgID0gcG9zWzBdICAgKyBzY2FsZSAqICggZm9udF9jaGFyLmJlYXJpbmdfeCArIGtlcm4gLSBmb250Lml4ICk7XG4gICAgdmFyIHJpZ2h0ICA9IGxlZnQgICAgICsgc2NhbGUgKiAoIGdbMl0gLSBnWzBdICk7XG4gICAgdmFyIHAgPSBbIGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSBdO1xuXG4gICAgLy8gQWR2YW5jaW5nIHBlbiBwb3NpdGlvblxuICAgIHZhciBuZXdfcG9zX3ggPSBwb3NbMF0gKyBzY2FsZSAqICggZm9udF9jaGFyLmFkdmFuY2VfeCApO1xuXG4gICAgLy8gU2lnbmVkIGRpc3RhbmNlIGZpZWxkIHNpemUgaW4gc2NyZWVuIHBpeGVsc1xuICAgIHZhciBzZGZfc2l6ZSAgPSAyLjAgKiBmb250Lml5ICogc2NhbGU7XG5cbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbXG4gICAgICBwWzBdLCBwWzNdLCAvLyBsZWZ0IGJvdHRvbSxcbiAgICAgIHBbMl0sIHBbM10sIC8vIHJpZ2h0IGJvdHRvbSxcbiAgICAgIHBbMl0sIHBbMV0sIC8vIHJpZ2h0IHRvcFxuICAgICAgcFswXSwgcFsxXSwgLy8gbGVmdCB0b3BcbiAgICBdO1xuXG4gICAgY29uc3QgdXZzID0gW1xuICAgICAgZ1swXSwgZ1sxXSwgLy8gbGVmdCB0b3BcbiAgICAgIGdbMl0sIGdbMV0sIC8vIHJpZ2h0IHRvcFxuICAgICAgZ1syXSwgZ1szXSwgLy8gcmlnaHQgYm90dG9tLFxuICAgICAgZ1swXSwgZ1szXSwgLy8gbGVmdCBib3R0b20sXG4gICAgXTtcblxuICAgIGNvbnN0IHNkZlNpemVzID0gW1xuICAgICAgc2RmX3NpemUsXG4gICAgICBzZGZfc2l6ZSxcbiAgICAgIHNkZl9zaXplLFxuICAgICAgc2RmX3NpemUsXG4gICAgXTtcblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbnMsXG4gICAgICB1dnMsXG4gICAgICBzZGZTaXplcyxcbiAgICAgIHBvczogWyBuZXdfcG9zX3gsIHBvc1sxXSBdXG4gICAgfTtcblxuICAgIC8vcmV0dXJuIHsgdmVydGljZXMgOiB2ZXJ0aWNlcywgcG9zIDogWyBuZXdfcG9zX3gsIHBvc1sxXSBdIH07XG4gIH1cblxuXG59XG5cblxuXG4vL21vZHVsZS5leHBvcnRzID0gQXdlc29tZVRleHQ7XG5cbmV4cG9ydCBkZWZhdWx0IEF3ZXNvbWVUZXh0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RleHQuanMiLCJcbmNsYXNzIFRleHRMYXlvdXQge1xuXG4gIHRleHQgPSBcIlwiO1xuICBmb250ID0gbnVsbDtcbiAgbWV0cmljcyA9IG51bGw7XG4gIGZvbnRTaXplID0gMjA7XG4gIGFsaWduID0gXCJsZWZ0XCI7XG4gIHN0YXJ0WCA9IDA7XG4gIHN0YXJ0WSA9IDA7XG4gIHdyYXBwZXJXaWR0aCA9IDEwMDtcbiAgd3JhcFdvcmRzID0gZmFsc2U7XG4gIHdvcmRzTWV0cmljcyA9IFtdO1xuICBsZXR0ZXJzQ291bnQgPSAwO1xuICBoZWlnaHQgPSAwO1xuICBsaW5lc0NvdW50ID0gMDtcbiAgbGluZUhlaWdodCA9IDA7XG5cblxuICBjb25zdHJ1Y3Rvcih0ZXh0LCBmb250LCBjb25maWcpIHtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMuZm9udCA9IGZvbnQ7XG4gICAgdGhpcy5mb250U2l6ZSA9IGNvbmZpZy5mb250U2l6ZTtcbiAgICB0aGlzLndyYXBXb3JkcyA9IGNvbmZpZy53cmFwV29yZHM7XG4gICAgdGhpcy53cmFwcGVyV2lkdGggPSBjb25maWcud3JhcHBlcldpZHRoO1xuICAgIHRoaXMubGluZUhlaWdodCA9IGNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIHRoaXMuYWxpZ24gPSBjb25maWcuYWxpZ247XG4gICAgdGhpcy5sZXR0ZXJzQ291bnQgPSB0aGlzLnRleHQuc3BsaXQoXCJcIikubGVuZ3RoO1xuICAgIHRoaXMubWV0cmljcyA9IHRoaXMuZm9udE1ldHJpY3MoZm9udCwgMC4wKTtcbiAgICB0aGlzLnN0YXJ0WSA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xuICAgIHRoaXMuY2FsY3VsYXRlV29yZHNQb3NpdGlvbnMoKTtcbiAgfVxuXG4gIGZvbnRNZXRyaWNzKGZvbnRTaXplLCBtb3JlTGluZUdhcCA9IDAuMCkge1xuXG4gICAgY29uc3Qge2NhcF9oZWlnaHQsIHhfaGVpZ2h0LCBhc2NlbnQ6IGZvbnRBc2NlbnQgLCBkZXNjZW50LCBsaW5lX2dhcH0gPSB0aGlzLmZvbnQ7XG5cbiAgICBjb25zdCBjYXBTY2FsZSA9IHRoaXMuZm9udFNpemUgLyBjYXBfaGVpZ2h0O1xuICAgIGNvbnN0IGxvd1NjYWxlID0gTWF0aC5yb3VuZCggeF9oZWlnaHQgKiBjYXBTY2FsZSApIC8geF9oZWlnaHQ7XG4gICAgY29uc3QgYXNjZW50ID0gTWF0aC5yb3VuZCggZm9udEFzY2VudCAqIGNhcFNjYWxlICk7XG4gICAgbGV0IGxpbmVIZWlnaHQgPSBNYXRoLnJvdW5kKCBjYXBTY2FsZSAqICggZm9udEFzY2VudCArIGRlc2NlbnQgKyBsaW5lX2dhcCApICsgbW9yZUxpbmVHYXAgKTtcblxuICAgIGlmICh0aGlzLmxpbmVIZWlnaHQgPiAwKVxuICAgICAgbGluZUhlaWdodCA9IHRoaXMubGluZUhlaWdodDtcbiAgICBlbHNlXG4gICAgICB0aGlzLmxpbmVIZWlnaHQgPSBsaW5lSGVpZ2h0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcFNjYWxlICAgOiBjYXBTY2FsZSxcbiAgICAgIGxvd1NjYWxlICAgOiBsb3dTY2FsZSxcbiAgICAgIGFzY2VudCAgICAgIDogYXNjZW50LFxuICAgICAgbGluZUhlaWdodCA6IGxpbmVIZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgY2hhclJlY3QoIHBvcywgZm9udF9jaGFyLCBrZXJuID0gMC4wICkge1xuXG4gICAgY29uc3Qge2FzY2VudCwgbG93U2NhbGUsIGNhcFNjYWxlfSA9IHRoaXMubWV0cmljcztcblxuICAgIGNvbnN0IHsgZGVzY2VudCwgcm93X2hlaWdodCwgaXksIGl4IH0gPSB0aGlzLmZvbnQ7XG5cbiAgICBjb25zdCB7ZmxhZ3MsIGJlYXJpbmdfeCwgYWR2YW5jZV94LCByZWN0IH0gPSBmb250X2NoYXI7XG5cbiAgICAvLyBMb3cgY2FzZSBjaGFyYWN0ZXJzIGhhdmUgZmlyc3QgYml0IHNldCBpbiAnZmxhZ3MnXG4gICAgdmFyIGxvd0Nhc2UgPSAoIGZsYWdzICYgMSApID09PSAxO1xuXG4gICAgLy8gUGVuIHBvc2l0aW9uIGlzIGF0IHRoZSB0b3Agb2YgdGhlIGxpbmUsIFkgZ29lcyB1cFxuICAgIHZhciBiYXNlbGluZSA9IHBvc1sxXSAtIGFzY2VudDtcblxuICAgIC8vIExvdyBjYXNlIGNoYXJzIHVzZSB0aGVpciBvd24gc2NhbGVcbiAgICB2YXIgc2NhbGUgPSBsb3dDYXNlID8gbG93U2NhbGUgOiBjYXBTY2FsZTtcblxuXG4gICAgLy8gTGF5aW5nIG91dCB0aGUgZ2x5cGggcmVjdGFuZ2xlXG4gICAgdmFyIGcgICAgICA9IHJlY3Q7XG4gICAgdmFyIGJvdHRvbSA9IGJhc2VsaW5lIC0gc2NhbGUgKiAoIGRlc2NlbnQgKyBpeSApO1xuICAgIHZhciB0b3AgICAgPSBib3R0b20gICArIHNjYWxlICogKCByb3dfaGVpZ2h0ICk7XG4gICAgdmFyIGxlZnQgICA9IHBvc1swXSAgICsgc2NhbGUgKiAoIGJlYXJpbmdfeCArIGtlcm4gLSBpeCApO1xuICAgIHZhciByaWdodCAgPSBsZWZ0ICAgICArIHNjYWxlICogKCBnWzJdIC0gZ1swXSApO1xuICAgIHZhciBwID0gWyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20gXTtcblxuICAgIC8vIEFkdmFuY2luZyBwZW4gcG9zaXRpb25cbiAgICB2YXIgbmV3X3Bvc194ID0gcG9zWzBdICsgc2NhbGUgKiAoIGFkdmFuY2VfeCApO1xuXG4gICAgLy8gU2lnbmVkIGRpc3RhbmNlIGZpZWxkIHNpemUgaW4gc2NyZWVuIHBpeGVsc1xuICAgIHZhciBzZGZfc2l6ZSAgPSAyLjAgKiBpeSAqIHNjYWxlO1xuXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xuICAgICAgcFswXSwgcFszXSwgLy8gbGVmdCBib3R0b20sXG4gICAgICBwWzJdLCBwWzNdLCAvLyByaWdodCBib3R0b20sXG4gICAgICBwWzJdLCBwWzFdLCAvLyByaWdodCB0b3BcbiAgICAgIHBbMF0sIHBbMV0sIC8vIGxlZnQgdG9wXG4gICAgXTtcblxuICAgIGNvbnN0IHV2cyA9IFtcbiAgICAgIGdbMF0sIGdbMV0sIC8vIGxlZnQgdG9wXG4gICAgICBnWzJdLCBnWzFdLCAvLyByaWdodCB0b3BcbiAgICAgIGdbMl0sIGdbM10sIC8vIHJpZ2h0IGJvdHRvbSxcbiAgICAgIGdbMF0sIGdbM10sIC8vIGxlZnQgYm90dG9tLFxuICAgIF07XG5cbiAgICBjb25zdCBzZGZTaXplcyA9IFtcbiAgICAgIHNkZl9zaXplLFxuICAgICAgc2RmX3NpemUsXG4gICAgICBzZGZfc2l6ZSxcbiAgICAgIHNkZl9zaXplLFxuICAgIF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb25zLFxuICAgICAgdXZzLFxuICAgICAgc2RmU2l6ZXMsXG4gICAgICBwb3M6IFsgbmV3X3Bvc194LCBwb3NbMV0gXVxuICAgIH07XG4gIH1cblxuICBnZXRTdHJpbmdTaXplKHN0cmluZykge1xuXG4gICAgbGV0IHdpZHRoID0gMDtcbiAgICBsZXQgaGVpZ2h0ID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XG5cbiAgICBjb25zdCBjaGFycyA9IFsuLi5zdHJpbmddO1xuXG4gICAgLy8gSXRlcmF0ZSB0aG91Z2h0IHRoZSBjaGFycywgY2FsY3VsYXRlIHBvc2l0aW9uXG4gICAgY2hhcnMuZm9yRWFjaChjaGFyID0+IHtcbiAgICAgIGxldCBmb250X2NoYXIgPSB0aGlzLmZvbnQuY2hhcnNbIGNoYXIgXTtcblxuICAgICAgaWYgKGNoYXIgPT09IFwiIFwiKSB7XG4gICAgICAgIHdpZHRoICs9IHRoaXMuZm9udC5zcGFjZV9hZHZhbmNlICogdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIEdldCBjaGFyIG1ldHJpY3NcbiAgICAgIGxldCBjaGFyUmVjdCA9IHRoaXMuY2hhclJlY3QoW3dpZHRoLDBdLCBmb250X2NoYXIsIDAuMik7XG4gICAgICB3aWR0aCA9IGNoYXJSZWN0LnBvc1swXTtcblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHt3aWR0aCwgaGVpZ2h0fTtcblxuICB9XG5cbiAgY2FsY3VsYXRlV29yZHNQb3NpdGlvbnMoKSB7XG5cbiAgICBjb25zdCB3b3JkcyA9IHRoaXMudGV4dC5zcGxpdChcIiBcIik7XG4gICAgdGhpcy53b3Jkc01ldHJpY3MgPSBbXTtcblxuICAgIC8vIEluaXRpYWwgcG9zaXRpb25cbiAgICBsZXQgeCA9IHRoaXMuc3RhcnRYO1xuICAgIGxldCB5ID0gdGhpcy5zdGFydFk7XG5cbiAgICAvLyBDYWxjdWxhdGUgd29yZHMgcG9zaXRpb25zIG9uIGxpbmVzXG4gICAgd29yZHMuZm9yRWFjaCh3b3JkID0+IHtcbiAgICAgIGNvbnN0IHdvcmRTaXplID0gdGhpcy5nZXRTdHJpbmdTaXplKHdvcmQpO1xuICAgICAgaWYgKHggKyB3b3JkU2l6ZS53aWR0aCA+IHRoaXMuc3RhcnRYICsgdGhpcy53cmFwcGVyV2lkdGggJiYgdGhpcy53cmFwV29yZHMpIHtcbiAgICAgICAgeCA9IHRoaXMuc3RhcnRYO1xuICAgICAgICB5ICs9IHdvcmRTaXplLmhlaWdodDtcbiAgICAgIH1cbiAgICAgIHRoaXMud29yZHNNZXRyaWNzLnB1c2goey4uLndvcmRTaXplLCB4LCB5LCB3b3JkfSk7XG4gICAgICB4ICs9IHdvcmRTaXplLndpZHRoICsgdGhpcy5mb250LnNwYWNlX2FkdmFuY2UgKiB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XG4gICAgfSk7XG5cbiAgICAvLyBDYWxjdWxhdGUgbGluZXMgY291bnRcbiAgICB0aGlzLmxpbmVzQ291bnQgPSAoeSAtIHRoaXMuc3RhcnRZKSAvIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgMTtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMubGluZXNDb3VudCAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xuXG5cbiAgICAvLyBDaGFuZ2UgYWxpZ24gVE9ETyBvcHRpbWlzZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saW5lc0NvdW50OyArK2kpIHtcbiAgICAgIGNvbnN0IHdvcmRzT25MaW5lID0gdGhpcy53b3Jkc01ldHJpY3MuZmlsdGVyKHdvcmQgPT4gd29yZC55ID09PSB0aGlzLnN0YXJ0WSArIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQpKVxuXG4gICAgICBjb25zdCBsYXN0V29yZCA9IHdvcmRzT25MaW5lW3dvcmRzT25MaW5lLmxlbmd0aCAtIDFdO1xuICAgICAgY29uc3QgZnJlZVNwYWNlID0gKHRoaXMuc3RhcnRYICsgdGhpcy53cmFwcGVyV2lkdGgpIC0gKGxhc3RXb3JkLnggKyBsYXN0V29yZC53aWR0aCk7XG5cbiAgICAgIGxldCBsZWZ0T2Zmc2V0ID0gMDtcblxuICAgICAgc3dpdGNoICh0aGlzLmFsaWduKSB7XG4gICAgICAgIGNhc2UgXCJjZW50ZXJcIjpcbiAgICAgICAgICBsZWZ0T2Zmc2V0ID0gZnJlZVNwYWNlIC8gMjtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgbGVmdE9mZnNldCA9IGZyZWVTcGFjZTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRoaXMud29yZHNNZXRyaWNzLmZvckVhY2god29yZCA9PiB7XG4gICAgICAgIGlmICh3b3JkLnkgPT09IHRoaXMuc3RhcnRZICsgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCkpIHtcbiAgICAgICAgICB3b3JkLnggKz0gbGVmdE9mZnNldDtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgfVxuXG59XG5cbi8vbW9kdWxlLmV4cG9ydHMgPSBUZXh0TGF5b3V0O1xuXG5leHBvcnQgZGVmYXVsdCBUZXh0TGF5b3V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xheW91dC5qcyIsInZhciBkdHlwZSA9IHJlcXVpcmUoJ2R0eXBlJylcbnZhciBhbkFycmF5ID0gcmVxdWlyZSgnYW4tYXJyYXknKVxudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJylcblxudmFyIENXID0gWzAsIDIsIDNdXG52YXIgQ0NXID0gWzIsIDEsIDNdXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlUXVhZEVsZW1lbnRzKGFycmF5LCBvcHQpIHtcbiAgICAvL2lmIHVzZXIgZGlkbid0IHNwZWNpZnkgYW4gb3V0cHV0IGFycmF5XG4gICAgaWYgKCFhcnJheSB8fCAhKGFuQXJyYXkoYXJyYXkpIHx8IGlzQnVmZmVyKGFycmF5KSkpIHtcbiAgICAgICAgb3B0ID0gYXJyYXkgfHwge31cbiAgICAgICAgYXJyYXkgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHQgPT09ICdudW1iZXInKSAvL2JhY2t3YXJkcy1jb21wYXRpYmxlXG4gICAgICAgIG9wdCA9IHsgY291bnQ6IG9wdCB9XG4gICAgZWxzZVxuICAgICAgICBvcHQgPSBvcHQgfHwge31cblxuICAgIHZhciB0eXBlID0gdHlwZW9mIG9wdC50eXBlID09PSAnc3RyaW5nJyA/IG9wdC50eXBlIDogJ3VpbnQxNidcbiAgICB2YXIgY291bnQgPSB0eXBlb2Ygb3B0LmNvdW50ID09PSAnbnVtYmVyJyA/IG9wdC5jb3VudCA6IDFcbiAgICB2YXIgc3RhcnQgPSAob3B0LnN0YXJ0IHx8IDApIFxuXG4gICAgdmFyIGRpciA9IG9wdC5jbG9ja3dpc2UgIT09IGZhbHNlID8gQ1cgOiBDQ1csXG4gICAgICAgIGEgPSBkaXJbMF0sIFxuICAgICAgICBiID0gZGlyWzFdLFxuICAgICAgICBjID0gZGlyWzJdXG5cbiAgICB2YXIgbnVtSW5kaWNlcyA9IGNvdW50ICogNlxuXG4gICAgdmFyIGluZGljZXMgPSBhcnJheSB8fCBuZXcgKGR0eXBlKHR5cGUpKShudW1JbmRpY2VzKVxuICAgIGZvciAodmFyIGkgPSAwLCBqID0gMDsgaSA8IG51bUluZGljZXM7IGkgKz0gNiwgaiArPSA0KSB7XG4gICAgICAgIHZhciB4ID0gaSArIHN0YXJ0XG4gICAgICAgIGluZGljZXNbeCArIDBdID0gaiArIDBcbiAgICAgICAgaW5kaWNlc1t4ICsgMV0gPSBqICsgMVxuICAgICAgICBpbmRpY2VzW3ggKyAyXSA9IGogKyAyXG4gICAgICAgIGluZGljZXNbeCArIDNdID0gaiArIGFcbiAgICAgICAgaW5kaWNlc1t4ICsgNF0gPSBqICsgYlxuICAgICAgICBpbmRpY2VzW3ggKyA1XSA9IGogKyBjXG4gICAgfVxuICAgIHJldHVybiBpbmRpY2VzXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGR0eXBlKSB7XG4gIHN3aXRjaCAoZHR5cGUpIHtcbiAgICBjYXNlICdpbnQ4JzpcbiAgICAgIHJldHVybiBJbnQ4QXJyYXlcbiAgICBjYXNlICdpbnQxNic6XG4gICAgICByZXR1cm4gSW50MTZBcnJheVxuICAgIGNhc2UgJ2ludDMyJzpcbiAgICAgIHJldHVybiBJbnQzMkFycmF5XG4gICAgY2FzZSAndWludDgnOlxuICAgICAgcmV0dXJuIFVpbnQ4QXJyYXlcbiAgICBjYXNlICd1aW50MTYnOlxuICAgICAgcmV0dXJuIFVpbnQxNkFycmF5XG4gICAgY2FzZSAndWludDMyJzpcbiAgICAgIHJldHVybiBVaW50MzJBcnJheVxuICAgIGNhc2UgJ2Zsb2F0MzInOlxuICAgICAgcmV0dXJuIEZsb2F0MzJBcnJheVxuICAgIGNhc2UgJ2Zsb2F0NjQnOlxuICAgICAgcmV0dXJuIEZsb2F0NjRBcnJheVxuICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIHJldHVybiBBcnJheVxuICAgIGNhc2UgJ3VpbnQ4X2NsYW1wZWQnOlxuICAgICAgcmV0dXJuIFVpbnQ4Q2xhbXBlZEFycmF5XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kdHlwZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuQXJyYXlcblxuZnVuY3Rpb24gYW5BcnJheShhcnIpIHtcbiAgcmV0dXJuIChcbiAgICAgICBhcnIuQllURVNfUEVSX0VMRU1FTlRcbiAgICAmJiBzdHIuY2FsbChhcnIuYnVmZmVyKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJ1xuICAgIHx8IEFycmF5LmlzQXJyYXkoYXJyKVxuICApXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYW4tYXJyYXkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtYnVmZmVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=