/******/ (function(modules) { // webpackBootstrap
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
	
	var _text = _interopRequireDefault(__webpack_require__(1));
	
	var _vert = _interopRequireDefault(__webpack_require__(7));
	
	var _frag = _interopRequireDefault(__webpack_require__(8));
	
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
	      this.shader = new PIXI.Shader(gl, _vert["default"], _frag["default"]);
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
	
	PIXI.WebGLRenderer.registerPlugin('AwesomeTextRenderer', AwesomeTextRenderer);
	Object.assign(PIXI.extras, {
	  AwesomeText: _text["default"]
	});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;
	
	var _quadIndices = _interopRequireDefault(__webpack_require__(2));
	
	var _layout = _interopRequireDefault(__webpack_require__(6));
	
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
	      this.indices = (0, _quadIndices["default"])({
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
	}(PIXI.mesh.Mesh);
	
	AwesomeText.scale = 1.0;
	var _default = AwesomeText;
	exports["default"] = _default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	var dtype = __webpack_require__(3)
	var anArray = __webpack_require__(4)
	var isBuffer = __webpack_require__(5)
	
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
/* 3 */
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
/* 4 */
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
/* 5 */
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


/***/ }),
/* 6 */
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
	}();
	
	var _default = TextLayout;
	exports["default"] = _default;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute float aSdfSize;\n\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\nuniform mat3 transform;\n\n\nvarying vec2  tc0;\nvarying float doffset;\nvarying float sdf_texel;\n\n\nvoid main(void) {\n\n    //TODO MAKE ATTRIBUTE\n    float sdf_size = aSdfSize;\n\n    //TODO MAKE UNIFORMS\n    float sdf_tex_size = 1024.0;\n\n\n    tc0 = aTextureCoord;\n    doffset = 1.0 / sdf_size;       // Distance field delta for one screen pixel\n    sdf_texel = 1.0 / sdf_tex_size;\n\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition , 1.0)).xy, 0.0, 1.0);\n\n}\n"

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nuniform sampler2D uSampler;\nuniform float hint_amount;\nuniform float subpixel_amount;\n\nuniform vec3 bg_color;\nuniform vec3 font_color;\n\nvarying vec2  tc0;\nvarying float doffset;\nvarying float sdf_texel;\n\n\n/*\n *  Subpixel coverage calculation\n *\n *  v - edge slope    -1.0 to 1.0          triplet\n *  a - pixel coverage 0.0 to 1.0          coverage\n *\n *      |<- glyph edge                      R  G  B\n *  +---+---+                             +--+--+--+\n *  |   |XXX| v = 1.0 (edge facing west)  |  |xx|XX|\n *  |   |XXX| a = 0.5 (50% coverage)      |  |xx|XX|\n *  |   |XXX|                             |  |xx|XX|\n *  +---+---+                             +--+--+--+\n *    pixel                                0  50 100\n *\n *\n *        R   G   B\n *\n *   1.0        +--+   <- top (abs( v ))\n *              |\n *       -+-----+--+-- <- ceil: 100% coverage\n *        |     |XX|\n *   0.0  |  +--+XX|\n *        |  |xx|XX|\n *       -+--+--+--+-- <- floor: 0% coverage\n *           |\n *  -1.0  +--+         <-  -abs(v)\n *        |\n *        |\n *        |\n *  -2.0  +            <- bottom: -abs(v)-1.0\n */\n\nvec3 subpixel( float v, float a ) {\n    float vt      = 0.6 * v; // 1.0 will make your eyes bleed\n    vec3  rgb_max = vec3( -vt, 0.0, vt );\n    float top     = abs( vt );\n    float bottom  = -top - 1.0;\n    float cfloor  = mix( top, bottom, a );\n    vec3  res     = clamp( rgb_max - vec3( cfloor ), 0.0, 1.0 );\n    return res;\n}\n\nvoid main2() {\n    gl_FragColor = texture2D(uSampler, tc0);\n}\n\nvoid main(void) {\n\n    // Sampling the texture, L pattern\n    float sdf       = texture2D( uSampler, tc0 ).r;\n    float sdf_north = texture2D( uSampler, tc0 + vec2( 0.0, sdf_texel ) ).r;\n    float sdf_east  = texture2D( uSampler, tc0 + vec2( sdf_texel, 0.0 ) ).r;\n\n    // Estimating stroke direction by the distance field gradient vector\n    vec2  sgrad     = vec2( sdf_east - sdf, sdf_north - sdf );\n    float sgrad_len = max( length( sgrad ), 1.0 / 128.0 );\n    vec2  grad      = sgrad / vec2( sgrad_len );\n    float vgrad = abs( grad.y ); // 0.0 - vertical stroke, 1.0 - horizontal one\n\n    float horz_scale  = 1.1; // Blurring vertical strokes along the X axis a bit\n    float vert_scale  = 0.6; // While adding some contrast to the horizontal strokes\n    float hdoffset    = mix( doffset * horz_scale, doffset * vert_scale, vgrad );\n    float res_doffset = mix( doffset, hdoffset, hint_amount );\n\n    float alpha       = smoothstep( 0.5 - res_doffset, 0.5 + res_doffset, sdf );\n\n    // Additional contrast\n    alpha             = pow( alpha, 1.0 + 0.2 * vgrad * hint_amount );\n\n    // Unfortunately there is no support for ARB_blend_func_extended in WebGL.\n    // Fortunately the background is filled with a solid color so we can do\n    // the blending inside the shader.\n\n    // Discarding pixels beyond a threshold to minimise possible artifacts.\n    if ( alpha < 20.0 / 256.0 ) discard;\n\n    vec3 channels = subpixel( grad.x * 0.5 * subpixel_amount, alpha ) + 0.1;\n\n    // For subpixel rendering we have to blend each color channel separately\n    vec3 res = mix( bg_color, font_color, channels );\n    gl_FragColor = vec4( res, 1.0 );\n}\n\n\n"

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMGMyZjNhMGFiYWFkY2U3OWJlOGYiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90ZXh0LmpzIiwid2VicGFjazovLy8uL34vcXVhZC1pbmRpY2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZHR5cGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbi1hcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3ZlcnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9mcmFnLmdsc2wiXSwibmFtZXMiOlsiZ2xDb3JlIiwiUElYSSIsIkF3ZXNvbWVUZXh0UmVuZGVyZXIiLCJyZW5kZXJlciIsInNoYWRlciIsImdsIiwiZ2V0RXh0ZW5zaW9uIiwiU2hhZGVyIiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJhd2Vzb21lVGV4dCIsInN0eWxlSUQiLCJzdHlsZSIsInVwZGF0ZSIsInRleHR1cmUiLCJnbERhdGEiLCJfZ2xEYXRhcyIsIkNPTlRFWFRfVUlEIiwiYmluZFZhbyIsImJ1aWxkR2xEYXRhIiwidmFvIiwiZGlydHkiLCJ1dkJ1ZmZlciIsInVwbG9hZCIsInV2cyIsImluZGV4RGlydHkiLCJpbmRleEJ1ZmZlciIsImluZGljZXMiLCJ2ZXJ0ZXhCdWZmZXIiLCJ2ZXJ0aWNlcyIsImJpbmRTaGFkZXIiLCJzdGF0ZSIsInNldEJsZW5kTW9kZSIsImJsZW5kTW9kZSIsInVuaWZvcm1zIiwidVNhbXBsZXIiLCJiaW5kVGV4dHVyZSIsInRyYW5zbGF0aW9uTWF0cml4Iiwid29ybGRUcmFuc2Zvcm0iLCJ0b0FycmF5IiwiaGludF9hbW91bnQiLCJzdWJwaXhlbF9hbW91bnQiLCJmb250X2NvbG9yIiwidXRpbHMiLCJoZXgycmdiIiwiZmlsbCIsInJlcGxhY2UiLCJiZ19jb2xvciIsImJhY2tncm91bmRDb2xvciIsImRyYXdNb2RlIiwiVFJJQU5HTEVTIiwiZHJhdyIsImxlbmd0aCIsIkdMQnVmZmVyIiwiY3JlYXRlVmVydGV4QnVmZmVyIiwiU1RSRUFNX0RSQVciLCJzZGZCdWZmZXIiLCJzZGZTaXplcyIsIlNUQVRJQ19EUkFXIiwiY3JlYXRlSW5kZXhCdWZmZXIiLCJWZXJ0ZXhBcnJheU9iamVjdCIsImFkZEluZGV4IiwiYWRkQXR0cmlidXRlIiwiYXR0cmlidXRlcyIsImFWZXJ0ZXhQb3NpdGlvbiIsIkZMT0FUIiwiYVRleHR1cmVDb29yZCIsImFTZGZTaXplIiwiT2JqZWN0UmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwicmVnaXN0ZXJQbHVnaW4iLCJPYmplY3QiLCJhc3NpZ24iLCJleHRyYXMiLCJBd2Vzb21lVGV4dCIsInRleHQiLCJmb250IiwiVGV4dFN0eWxlIiwiX3RleHQiLCJfZm9udCIsIl90ZXh0dXJlIiwicGx1Z2luTmFtZSIsImxheW91dCIsIlRleHRMYXlvdXQiLCJmb250U2l6ZSIsIndyYXBXb3JkcyIsImJyZWFrV29yZHMiLCJ3cmFwcGVyV2lkdGgiLCJ3b3JkV3JhcFdpZHRoIiwiYWxpZ24iLCJsaW5lSGVpZ2h0IiwibWV0cmljcyIsImZvbnRNZXRyaWNzIiwiRmxvYXQzMkFycmF5IiwibGV0dGVyc0NvdW50IiwiYXJyYXlQb3NpdGlvbnMiLCJ2ZXJ0ZXgiLCJzZGYiLCJ3b3Jkc01ldHJpY3MiLCJmb3JFYWNoIiwid29yZCIsIndyaXRlU3RyaW5nIiwieCIsInkiLCJjbG9ja3dpc2UiLCJ0eXBlIiwiY291bnQiLCJzdHJpbmciLCJmb250X21ldHJpY3MiLCJwb3MiLCJwcmV2X2NoYXIiLCJjcG9zIiwieF9tYXgiLCJzY2FsZSIsImNhcF9zY2FsZSIsInN0cl9wb3MiLCJzY2hhciIsImxpbmVfaGVpZ2h0Iiwic3BhY2VfYWR2YW5jZSIsImZvbnRfY2hhciIsImNoYXJzIiwia2VybiIsInJlY3QiLCJjaGFyUmVjdCIsInBvc2l0aW9ucyIsIm1hcCIsInV2Iiwic3RyaW5nX3BvcyIsInBpeGVsX3NpemUiLCJtb3JlX2xpbmVfZ2FwIiwiY2FwX2hlaWdodCIsImxvd19zY2FsZSIsIk1hdGgiLCJyb3VuZCIsInhfaGVpZ2h0IiwiYXNjZW50IiwiZGVzY2VudCIsImxpbmVfZ2FwIiwibG93Y2FzZSIsImZsYWdzIiwiYmFzZWxpbmUiLCJnIiwiYm90dG9tIiwiaXkiLCJ0b3AiLCJyb3dfaGVpZ2h0IiwibGVmdCIsImJlYXJpbmdfeCIsIml4IiwicmlnaHQiLCJwIiwibmV3X3Bvc194IiwiYWR2YW5jZV94Iiwic2RmX3NpemUiLCJ2YWx1ZSIsIm1lc2giLCJNZXNoIiwiY29uZmlnIiwic3BsaXQiLCJzdGFydFkiLCJjYWxjdWxhdGVXb3Jkc1Bvc2l0aW9ucyIsIm1vcmVMaW5lR2FwIiwiZm9udEFzY2VudCIsImNhcFNjYWxlIiwibG93U2NhbGUiLCJsb3dDYXNlIiwid2lkdGgiLCJoZWlnaHQiLCJjaGFyIiwid29yZHMiLCJzdGFydFgiLCJ3b3JkU2l6ZSIsImdldFN0cmluZ1NpemUiLCJwdXNoIiwibGluZXNDb3VudCIsImkiLCJ3b3Jkc09uTGluZSIsImZpbHRlciIsImxhc3RXb3JkIiwiZnJlZVNwYWNlIiwibGVmdE9mZnNldCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU1BLE1BQU0sR0FBR0MsSUFBSSxDQUFDRCxNQUFwQjs7S0FFTUUsbUI7Ozs7O0FBRUosZ0NBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFBQTs7QUFDcEIsOEZBQU1B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R0FBOEcsS0FBSyxHOzs7Ozs7QUNBOXJCLGlFQUFnRSw0QkFBNEIsZ0NBQWdDLDBCQUEwQiwwQkFBMEIsc0JBQXNCLHdCQUF3QiwwQkFBMEIsdzhCQUF3OEIsOEJBQThCLDRFQUE0RSxnQ0FBZ0MsaUNBQWlDLDRDQUE0QyxrRUFBa0UsaUJBQWlCLEdBQUcsa0JBQWtCLDhDQUE4QyxHQUFHLHFCQUFxQiwrRkFBK0YsOEVBQThFLDhFQUE4RSw0SUFBNEksNERBQTRELGtEQUFrRCxrQ0FBa0MsK0VBQStFLGtGQUFrRiwySUFBMkksZ0VBQWdFLG9GQUFvRixzR0FBc0csZ1VBQWdVLGdGQUFnRix1SUFBdUksc0NBQXNDLEdBQUcsTyIsImZpbGUiOiJwaXhpLWF3ZXNvbWUtdGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDBjMmYzYTBhYmFhZGNlNzliZThmIiwiaW1wb3J0IEF3ZXNvbWVUZXh0IGZyb20gJy4vdGV4dCdcclxuaW1wb3J0IHZlcnRleFNoYWRlciBmcm9tICcuL3NoYWRlcnMvdmVydC5nbHNsJztcclxuaW1wb3J0IGZyYWdtZW50U2hhZGVyIGZyb20gJy4vc2hhZGVycy9mcmFnLmdsc2wnO1xyXG5cclxuY29uc3QgZ2xDb3JlID0gUElYSS5nbENvcmU7XHJcblxyXG5jbGFzcyBBd2Vzb21lVGV4dFJlbmRlcmVyIGV4dGVuZHMgUElYSS5PYmplY3RSZW5kZXJlciB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XHJcbiAgICBzdXBlcihyZW5kZXJlcik7XHJcbiAgICB0aGlzLnNoYWRlciA9IG51bGw7XHJcblxyXG4gIH1cclxuXHJcbiAgb25Db250ZXh0Q2hhbmdlKCkge1xyXG4gICAgY29uc3QgZ2wgPSB0aGlzLnJlbmRlcmVyLmdsO1xyXG4gICAgZ2wuZ2V0RXh0ZW5zaW9uKFwiT0VTX3N0YW5kYXJkX2Rlcml2YXRpdmVzXCIpO1xyXG4gICAgdGhpcy5zaGFkZXIgPSBuZXcgUElYSS5TaGFkZXIoZ2wsIHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKGF3ZXNvbWVUZXh0KSB7XHJcblxyXG4gICAgaWYgKGF3ZXNvbWVUZXh0LnN0eWxlSUQgIT09IGF3ZXNvbWVUZXh0LnN0eWxlLnN0eWxlSUQpIHtcclxuICAgICAgYXdlc29tZVRleHQudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyO1xyXG4gICAgY29uc3QgZ2wgPSByZW5kZXJlci5nbDtcclxuICAgIGNvbnN0IHRleHR1cmUgPSBhd2Vzb21lVGV4dC50ZXh0dXJlO1xyXG5cclxuICAgIGxldCBnbERhdGEgPSBhd2Vzb21lVGV4dC5fZ2xEYXRhc1tyZW5kZXJlci5DT05URVhUX1VJRF07XHJcblxyXG4gICAgaWYgKCFnbERhdGEpIHtcclxuICAgICAgcmVuZGVyZXIuYmluZFZhbyhudWxsKTtcclxuICAgICAgZ2xEYXRhID0gdGhpcy5idWlsZEdsRGF0YShhd2Vzb21lVGV4dCwgZ2wpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcmVyLmJpbmRWYW8oZ2xEYXRhLnZhbyk7XHJcblxyXG4gICAgaWYgKGF3ZXNvbWVUZXh0LmRpcnR5ICE9PSBnbERhdGEuZGlydHkpIHtcclxuICAgICAgZ2xEYXRhLmRpcnR5ID0gYXdlc29tZVRleHQuZGlydHk7XHJcbiAgICAgIGdsRGF0YS51dkJ1ZmZlci51cGxvYWQoYXdlc29tZVRleHQudXZzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoYXdlc29tZVRleHQuaW5kZXhEaXJ0eSAhPT0gZ2xEYXRhLmluZGV4RGlydHkpIHtcclxuICAgICAgZ2xEYXRhLmluZGV4RGlydHkgPSBhd2Vzb21lVGV4dC5pbmRleERpcnR5O1xyXG4gICAgICBnbERhdGEuaW5kZXhCdWZmZXIudXBsb2FkKGF3ZXNvbWVUZXh0LmluZGljZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdsRGF0YS52ZXJ0ZXhCdWZmZXIudXBsb2FkKGF3ZXNvbWVUZXh0LnZlcnRpY2VzKTtcclxuICAgIHJlbmRlcmVyLmJpbmRTaGFkZXIoZ2xEYXRhLnNoYWRlcik7XHJcblxyXG4gICAgcmVuZGVyZXIuc3RhdGUuc2V0QmxlbmRNb2RlKGF3ZXNvbWVUZXh0LmJsZW5kTW9kZSk7XHJcblxyXG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy51U2FtcGxlciA9IHJlbmRlcmVyLmJpbmRUZXh0dXJlKHRleHR1cmUpO1xyXG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy50cmFuc2xhdGlvbk1hdHJpeCA9IGF3ZXNvbWVUZXh0LndvcmxkVHJhbnNmb3JtLnRvQXJyYXkodHJ1ZSk7XHJcblxyXG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5oaW50X2Ftb3VudCA9IDEuMDtcclxuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuc3VicGl4ZWxfYW1vdW50ID0gMS4wO1xyXG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5mb250X2NvbG9yID0gUElYSS51dGlscy5oZXgycmdiKGF3ZXNvbWVUZXh0LnN0eWxlLmZpbGwucmVwbGFjZShcIiNcIiwgXCIweFwiKSk7XHJcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmJnX2NvbG9yID0gUElYSS51dGlscy5oZXgycmdiKGF3ZXNvbWVUZXh0LmJhY2tncm91bmRDb2xvci5yZXBsYWNlKFwiI1wiLCBcIjB4XCIpKTtcclxuXHJcbiAgICBjb25zdCBkcmF3TW9kZSA9IGF3ZXNvbWVUZXh0LmRyYXdNb2RlID0gZ2wuVFJJQU5HTEVTO1xyXG4gICAgZ2xEYXRhLnZhby5kcmF3KGRyYXdNb2RlLCBhd2Vzb21lVGV4dC5pbmRpY2VzLmxlbmd0aCwgMCk7XHJcbiAgfVxyXG5cclxuICBidWlsZEdsRGF0YShhd2Vzb21lVGV4dCwgZ2wpIHtcclxuXHJcbiAgICBjb25zdCBnbERhdGEgPSB7XHJcbiAgICAgIHNoYWRlcjogdGhpcy5zaGFkZXIsXHJcbiAgICAgIHZlcnRleEJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgYXdlc29tZVRleHQudmVydGljZXMsIGdsLlNUUkVBTV9EUkFXKSxcclxuICAgICAgdXZCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoZ2wsIGF3ZXNvbWVUZXh0LnV2cywgZ2wuU1RSRUFNX0RSQVcpLFxyXG4gICAgICBzZGZCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoZ2wsIGF3ZXNvbWVUZXh0LnNkZlNpemVzLCBnbC5TVEFUSUNfRFJBVyksXHJcbiAgICAgIGluZGV4QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlSW5kZXhCdWZmZXIoZ2wsIGF3ZXNvbWVUZXh0LmluZGljZXMsIGdsLlNUQVRJQ19EUkFXKSxcclxuICAgICAgLy8gYnVpbGQgdGhlIHZhbyBvYmplY3QgdGhhdCB3aWxsIHJlbmRlci4uXHJcbiAgICAgIHZhbzogbnVsbCxcclxuICAgICAgZGlydHk6IGF3ZXNvbWVUZXh0LmRpcnR5LFxyXG4gICAgICBpbmRleERpcnR5OiBhd2Vzb21lVGV4dC5pbmRleERpcnR5LFxyXG4gICAgfTtcclxuXHJcbiAgICBnbERhdGEudmFvID0gbmV3IGdsQ29yZS5WZXJ0ZXhBcnJheU9iamVjdChnbClcclxuICAgICAgLmFkZEluZGV4KGdsRGF0YS5pbmRleEJ1ZmZlcilcclxuICAgICAgLmFkZEF0dHJpYnV0ZShnbERhdGEudmVydGV4QnVmZmVyLCBnbERhdGEuc2hhZGVyLmF0dHJpYnV0ZXMuYVZlcnRleFBvc2l0aW9uLCBnbC5GTE9BVCwgZmFsc2UsIDIgKiA0LCAwKVxyXG4gICAgICAuYWRkQXR0cmlidXRlKGdsRGF0YS51dkJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFUZXh0dXJlQ29vcmQsIGdsLkZMT0FULCBmYWxzZSwgMiAqIDQsIDApXHJcbiAgICAgIC5hZGRBdHRyaWJ1dGUoZ2xEYXRhLnNkZkJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFTZGZTaXplLCBnbC5GTE9BVCwgZmFsc2UsIDQsIDApO1xyXG5cclxuICAgIHJldHVybiBnbERhdGFcclxuICB9XHJcblxyXG59XHJcblxyXG5QSVhJLldlYkdMUmVuZGVyZXIucmVnaXN0ZXJQbHVnaW4oJ0F3ZXNvbWVUZXh0UmVuZGVyZXInLCBBd2Vzb21lVGV4dFJlbmRlcmVyKTtcclxuXHJcbk9iamVjdC5hc3NpZ24oUElYSS5leHRyYXMsIHtcclxuICBBd2Vzb21lVGV4dDogQXdlc29tZVRleHRcclxufSk7XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgY3JlYXRlSW5kaWNlcyBmcm9tICdxdWFkLWluZGljZXMnXHJcbmltcG9ydCBUZXh0TGF5b3V0IGZyb20gJy4vbGF5b3V0J1xyXG5cclxuY2xhc3MgQXdlc29tZVRleHQgZXh0ZW5kcyBQSVhJLm1lc2guTWVzaCB7XHJcblxyXG4gIGNvbnN0cnVjdG9yKHRleHQsIHN0eWxlLCBmb250KSB7XHJcbiAgICBzdXBlcihmb250LnRleHR1cmUpO1xyXG5cclxuICAgIHRoaXMuc3R5bGUgPSBuZXcgUElYSS5UZXh0U3R5bGUoc3R5bGUpO1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBzdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB0aGlzLl90ZXh0ID0gdGV4dDtcclxuICAgIHRoaXMuX2ZvbnQgPSBmb250LmZvbnQ7XHJcblxyXG4gICAgLy9UT0RPIHNlcGFyYXRlIGZvbnQgYW5kIHRleHR1cmVcclxuICAgIHRoaXMuX3RleHR1cmUgPSBmb250LnRleHR1cmU7XHJcbiAgICB0aGlzLnBsdWdpbk5hbWUgPSAnQXdlc29tZVRleHRSZW5kZXJlcic7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcblxyXG4gICAgdGhpcy5sYXlvdXQgPSBuZXcgVGV4dExheW91dCh0aGlzLnRleHQsIHRoaXMuZm9udCwge1xyXG4gICAgICBmb250U2l6ZTogdGhpcy5zdHlsZS5mb250U2l6ZSxcclxuICAgICAgd3JhcFdvcmRzOiB0aGlzLnN0eWxlLmJyZWFrV29yZHMsXHJcbiAgICAgIHdyYXBwZXJXaWR0aDogdGhpcy5zdHlsZS53b3JkV3JhcFdpZHRoLFxyXG4gICAgICBhbGlnbjogdGhpcy5zdHlsZS5hbGlnbixcclxuICAgICAgbGluZUhlaWdodDogdGhpcy5zdHlsZS5saW5lSGVpZ2h0LFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5mb250TWV0cmljcyggdGhpcy5mb250LCB0aGlzLnN0eWxlLmZvbnRTaXplLCB0aGlzLnN0eWxlLmZvbnRTaXplICogMC4yICk7XHJcbiAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0ICogMik7XHJcbiAgICB0aGlzLnV2cyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5sYXlvdXQubGV0dGVyc0NvdW50ICogNCAqIDIpO1xyXG4gICAgdGhpcy5zZGZTaXplcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5sYXlvdXQubGV0dGVyc0NvdW50ICogNCk7XHJcblxyXG4gICAgdGhpcy5hcnJheVBvc2l0aW9ucyA9IHsgdmVydGV4OiAwLCB1dnM6IDAsIHNkZjogMCB9O1xyXG5cclxuICAgIHRoaXMubGF5b3V0LndvcmRzTWV0cmljcy5mb3JFYWNoICh3b3JkID0+IHtcclxuICAgICAgdGhpcy53cml0ZVN0cmluZyh3b3JkLndvcmQsIHRoaXMuZm9udCwgdGhpcy5tZXRyaWNzLCBbd29yZC54LCB3b3JkLnldKTtcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuaW5kaWNlcyA9IGNyZWF0ZUluZGljZXMoe1xyXG4gICAgICBjbG9ja3dpc2U6IHRydWUsXHJcbiAgICAgIHR5cGU6ICd1aW50MTYnLFxyXG4gICAgICBjb3VudDogdGhpcy5sYXlvdXQubGV0dGVyc0NvdW50XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnN0eWxlSUQgPSB0aGlzLnN0eWxlLnN0eWxlSUQ7XHJcbiAgICB0aGlzLmRpcnR5Kys7XHJcbiAgICB0aGlzLmluZGV4RGlydHkrKztcclxuICB9XHJcblxyXG4gIGdldCB0ZXh0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XHJcbiAgfVxyXG5cclxuICBzZXQgdGV4dCh2YWx1ZSkge1xyXG4gICAgdGhpcy5fdGV4dCA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldCB0ZXh0dXJlKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RleHR1cmU7XHJcbiAgfVxyXG5cclxuICBnZXQgZm9udCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9mb250XHJcbiAgfVxyXG5cclxuICB3cml0ZVN0cmluZyggc3RyaW5nLCBmb250LCBmb250X21ldHJpY3MsIHBvcykge1xyXG4gICAgbGV0IHByZXZfY2hhciA9IFwiIFwiOyAgLy8gVXNlZCB0byBjYWxjdWxhdGUga2VybmluZ1xyXG4gICAgbGV0IGNwb3MgICAgICA9IHBvczsgIC8vIEN1cnJlbnQgcGVuIHBvc2l0aW9uXHJcbiAgICBsZXQgeF9tYXggICAgID0gMC4wOyAgLy8gTWF4IHdpZHRoIC0gdXNlZCBmb3IgYm91bmRpbmcgYm94XHJcbiAgICBsZXQgc2NhbGUgICAgID0gZm9udF9tZXRyaWNzLmNhcF9zY2FsZTtcclxuXHJcbiAgICBsZXQgc3RyX3BvcyA9IDA7XHJcblxyXG4gICAgZm9yKDs7KSB7XHJcbiAgICAgIGlmICggc3RyX3BvcyA9PT0gc3RyaW5nLmxlbmd0aCApIGJyZWFrO1xyXG5cclxuICAgICAgdmFyIHNjaGFyID0gc3RyaW5nWyBzdHJfcG9zIF07XHJcbiAgICAgIHN0cl9wb3MrKztcclxuXHJcbiAgICAgIGlmICggc2NoYXIgPT09IFwiXFxuXCIgKSB7XHJcbiAgICAgICAgaWYgKCBjcG9zWzBdID4geF9tYXggKSB4X21heCA9IGNwb3NbMF07IC8vIEV4cGFuZGluZyB0aGUgYm91bmRpbmcgcmVjdFxyXG4gICAgICAgIGNwb3NbMF0gID0gcG9zWzBdO1xyXG4gICAgICAgIGNwb3NbMV0gLT0gZm9udF9tZXRyaWNzLmxpbmVfaGVpZ2h0O1xyXG4gICAgICAgIHByZXZfY2hhciA9IFwiIFwiO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIHNjaGFyID09PSBcIiBcIiApIHtcclxuICAgICAgICAvL3NjaGFyID0gXCJfXCJcclxuICAgICAgICBjcG9zWzBdICs9IGZvbnQuc3BhY2VfYWR2YW5jZSAqIHNjYWxlO1xyXG4gICAgICAgIHByZXZfY2hhciA9IFwiIFwiO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgZm9udF9jaGFyID0gZm9udC5jaGFyc1sgc2NoYXIgXTtcclxuICAgICAgaWYgKCAhZm9udF9jaGFyICkgeyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdWJzdGl0dXRpbmcgdW5hdmFpbGFibGUgY2hhcmFjdGVycyB3aXRoICc/J1xyXG4gICAgICAgIHNjaGFyID0gXCI/XCI7XHJcbiAgICAgICAgZm9udF9jaGFyID0gZm9udC5jaGFyc1sgXCI/XCIgXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGtlcm4gPSBmb250Lmtlcm5bIHByZXZfY2hhciArIHNjaGFyIF07XHJcbiAgICAgIGlmICggIWtlcm4gKSBrZXJuID0gMC4wO1xyXG5cclxuICAgICAgLy8gY2FsY3VsYXRpbmcgdGhlIGdseXBoIHJlY3RhbmdsZSBhbmQgY29weWluZyBpdCB0byB0aGUgdmVydGV4IGFycmF5XHJcbiAgICAgIHZhciByZWN0ID0gdGhpcy5jaGFyUmVjdCggY3BvcywgZm9udCwgZm9udF9tZXRyaWNzLCBmb250X2NoYXIsIGtlcm4gKTtcclxuXHJcbiAgICAgIHJlY3QucG9zaXRpb25zLm1hcCgocG9zKSA9PiB0aGlzLnZlcnRpY2VzWyB0aGlzLmFycmF5UG9zaXRpb25zLnZlcnRleCsrIF0gPSBwb3MgKTtcclxuICAgICAgcmVjdC51dnMubWFwKCh1dikgPT4gdGhpcy51dnNbIHRoaXMuYXJyYXlQb3NpdGlvbnMudXZzKysgXSA9IHV2ICk7XHJcbiAgICAgIHJlY3Quc2RmU2l6ZXMubWFwKChzZGYpID0+IHRoaXMuc2RmU2l6ZXNbIHRoaXMuYXJyYXlQb3NpdGlvbnMuc2RmKysgXSA9IHNkZiApO1xyXG5cclxuICAgICAgcHJldl9jaGFyID0gc2NoYXI7XHJcbiAgICAgIGNwb3MgPSByZWN0LnBvcztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWN0IDogWyBwb3NbMF0sIHBvc1sxXSwgeF9tYXggLSBwb3NbMF0sIHBvc1sxXSAtIGNwb3NbMV0gKyBmb250X21ldHJpY3MubGluZV9oZWlnaHQgXSxcclxuICAgICAgc3RyaW5nX3BvcyA6IHN0cl9wb3MsXHJcbiAgICAgIC8vYXJyYXlfcG9zIDogYXJyYXlfcG9zXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZm9udE1ldHJpY3MoIGZvbnQsIHBpeGVsX3NpemUsIG1vcmVfbGluZV9nYXAgPSAwLjAgKSB7XHJcbiAgICAvLyBXZSB1c2Ugc2VwYXJhdGUgc2NhbGUgZm9yIHRoZSBsb3cgY2FzZSBjaGFyYWN0ZXJzXHJcbiAgICAvLyBzbyB0aGF0IHgtaGVpZ2h0IGZpdHMgdGhlIHBpeGVsIGdyaWQuXHJcbiAgICAvLyBPdGhlciBjaGFyYWN0ZXJzIHVzZSBjYXAtaGVpZ2h0IHRvIGZpdCB0byB0aGUgcGl4ZWxzXHJcbiAgICB2YXIgY2FwX3NjYWxlICAgPSBwaXhlbF9zaXplIC8gZm9udC5jYXBfaGVpZ2h0O1xyXG4gICAgdmFyIGxvd19zY2FsZSAgID0gTWF0aC5yb3VuZCggZm9udC54X2hlaWdodCAqIGNhcF9zY2FsZSApIC8gZm9udC54X2hlaWdodDtcclxuXHJcbiAgICAvLyBBc2NlbnQgc2hvdWxkIGJlIGEgd2hvbGUgbnVtYmVyIHNpbmNlIGl0J3MgdXNlZCB0byBjYWxjdWxhdGUgdGhlIGJhc2VsaW5lXHJcbiAgICAvLyBwb3NpdGlvbiB3aGljaCBzaG91bGQgbGllIGF0IHRoZSBwaXhlbCBib3VuZGFyeVxyXG4gICAgdmFyIGFzY2VudCAgICAgID0gTWF0aC5yb3VuZCggZm9udC5hc2NlbnQgKiBjYXBfc2NhbGUgKTtcclxuXHJcbiAgICAvLyBTYW1lIGZvciB0aGUgbGluZSBoZWlnaHRcclxuICAgIHZhciBsaW5lX2hlaWdodCA9IE1hdGgucm91bmQoIGNhcF9zY2FsZSAqICggZm9udC5hc2NlbnQgKyBmb250LmRlc2NlbnQgKyBmb250LmxpbmVfZ2FwICkgKyBtb3JlX2xpbmVfZ2FwICk7XHJcblxyXG5cclxuICAgIHJldHVybiB7IGNhcF9zY2FsZSAgIDogY2FwX3NjYWxlLFxyXG4gICAgICBsb3dfc2NhbGUgICA6IGxvd19zY2FsZSxcclxuICAgICAgcGl4ZWxfc2l6ZSAgOiBwaXhlbF9zaXplLFxyXG4gICAgICBhc2NlbnQgICAgICA6IGFzY2VudCxcclxuICAgICAgbGluZV9oZWlnaHQgOiBsaW5lX2hlaWdodFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNoYXJSZWN0KCBwb3MsIGZvbnQsIGZvbnRfbWV0cmljcywgZm9udF9jaGFyLCBrZXJuID0gMC4wICkge1xyXG5cclxuICAgIC8vIExvdyBjYXNlIGNoYXJhY3RlcnMgaGF2ZSBmaXJzdCBiaXQgc2V0IGluICdmbGFncydcclxuICAgIHZhciBsb3djYXNlID0gKCBmb250X2NoYXIuZmxhZ3MgJiAxICkgPT09IDE7XHJcblxyXG4gICAgLy8gUGVuIHBvc2l0aW9uIGlzIGF0IHRoZSB0b3Agb2YgdGhlIGxpbmUsIFkgZ29lcyB1cFxyXG4gICAgdmFyIGJhc2VsaW5lID0gcG9zWzFdIC0gZm9udF9tZXRyaWNzLmFzY2VudDtcclxuXHJcbiAgICAvLyBMb3cgY2FzZSBjaGFycyB1c2UgdGhlaXIgb3duIHNjYWxlXHJcbiAgICB2YXIgc2NhbGUgPSBsb3djYXNlID8gZm9udF9tZXRyaWNzLmxvd19zY2FsZSA6IGZvbnRfbWV0cmljcy5jYXBfc2NhbGU7XHJcblxyXG4gICAgLy9zY2FsZSA9IGZvbnRfbWV0cmljcy5sb3dfc2NhbGU7XHJcblxyXG4gICAgLy9zY2FsZSArPSAyMDtcclxuXHJcbiAgICAvLyBMYXlpbmcgb3V0IHRoZSBnbHlwaCByZWN0YW5nbGVcclxuICAgIHZhciBnICAgICAgPSBmb250X2NoYXIucmVjdDtcclxuICAgIHZhciBib3R0b20gPSBiYXNlbGluZSAtIHNjYWxlICogKCBmb250LmRlc2NlbnQgKyBmb250Lml5ICk7XHJcbiAgICB2YXIgdG9wICAgID0gYm90dG9tICAgKyBzY2FsZSAqICggZm9udC5yb3dfaGVpZ2h0ICk7XHJcbiAgICB2YXIgbGVmdCAgID0gcG9zWzBdICAgKyBzY2FsZSAqICggZm9udF9jaGFyLmJlYXJpbmdfeCArIGtlcm4gLSBmb250Lml4ICk7XHJcbiAgICB2YXIgcmlnaHQgID0gbGVmdCAgICAgKyBzY2FsZSAqICggZ1syXSAtIGdbMF0gKTtcclxuICAgIHZhciBwID0gWyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20gXTtcclxuXHJcbiAgICAvLyBBZHZhbmNpbmcgcGVuIHBvc2l0aW9uXHJcbiAgICB2YXIgbmV3X3Bvc194ID0gcG9zWzBdICsgc2NhbGUgKiAoIGZvbnRfY2hhci5hZHZhbmNlX3ggKTtcclxuXHJcbiAgICAvLyBTaWduZWQgZGlzdGFuY2UgZmllbGQgc2l6ZSBpbiBzY3JlZW4gcGl4ZWxzXHJcbiAgICB2YXIgc2RmX3NpemUgID0gMi4wICogZm9udC5peSAqIHNjYWxlO1xyXG5cclxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcclxuICAgICAgcFswXSwgcFszXSwgLy8gbGVmdCBib3R0b20sXHJcbiAgICAgIHBbMl0sIHBbM10sIC8vIHJpZ2h0IGJvdHRvbSxcclxuICAgICAgcFsyXSwgcFsxXSwgLy8gcmlnaHQgdG9wXHJcbiAgICAgIHBbMF0sIHBbMV0sIC8vIGxlZnQgdG9wXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IHV2cyA9IFtcclxuICAgICAgZ1swXSwgZ1sxXSwgLy8gbGVmdCB0b3BcclxuICAgICAgZ1syXSwgZ1sxXSwgLy8gcmlnaHQgdG9wXHJcbiAgICAgIGdbMl0sIGdbM10sIC8vIHJpZ2h0IGJvdHRvbSxcclxuICAgICAgZ1swXSwgZ1szXSwgLy8gbGVmdCBib3R0b20sXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IHNkZlNpemVzID0gW1xyXG4gICAgICBzZGZfc2l6ZSxcclxuICAgICAgc2RmX3NpemUsXHJcbiAgICAgIHNkZl9zaXplLFxyXG4gICAgICBzZGZfc2l6ZSxcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcG9zaXRpb25zLFxyXG4gICAgICB1dnMsXHJcbiAgICAgIHNkZlNpemVzLFxyXG4gICAgICBwb3M6IFsgbmV3X3Bvc194LCBwb3NbMV0gXVxyXG4gICAgfTtcclxuXHJcbiAgICAvL3JldHVybiB7IHZlcnRpY2VzIDogdmVydGljZXMsIHBvcyA6IFsgbmV3X3Bvc194LCBwb3NbMV0gXSB9O1xyXG4gIH1cclxuXHJcblxyXG59XHJcblxyXG5Bd2Vzb21lVGV4dC5zY2FsZSA9IDEuMDtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF3ZXNvbWVUZXh0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGV4dC5qcyIsInZhciBkdHlwZSA9IHJlcXVpcmUoJ2R0eXBlJylcbnZhciBhbkFycmF5ID0gcmVxdWlyZSgnYW4tYXJyYXknKVxudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJylcblxudmFyIENXID0gWzAsIDIsIDNdXG52YXIgQ0NXID0gWzIsIDEsIDNdXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlUXVhZEVsZW1lbnRzKGFycmF5LCBvcHQpIHtcbiAgICAvL2lmIHVzZXIgZGlkbid0IHNwZWNpZnkgYW4gb3V0cHV0IGFycmF5XG4gICAgaWYgKCFhcnJheSB8fCAhKGFuQXJyYXkoYXJyYXkpIHx8IGlzQnVmZmVyKGFycmF5KSkpIHtcbiAgICAgICAgb3B0ID0gYXJyYXkgfHwge31cbiAgICAgICAgYXJyYXkgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHQgPT09ICdudW1iZXInKSAvL2JhY2t3YXJkcy1jb21wYXRpYmxlXG4gICAgICAgIG9wdCA9IHsgY291bnQ6IG9wdCB9XG4gICAgZWxzZVxuICAgICAgICBvcHQgPSBvcHQgfHwge31cblxuICAgIHZhciB0eXBlID0gdHlwZW9mIG9wdC50eXBlID09PSAnc3RyaW5nJyA/IG9wdC50eXBlIDogJ3VpbnQxNidcbiAgICB2YXIgY291bnQgPSB0eXBlb2Ygb3B0LmNvdW50ID09PSAnbnVtYmVyJyA/IG9wdC5jb3VudCA6IDFcbiAgICB2YXIgc3RhcnQgPSAob3B0LnN0YXJ0IHx8IDApIFxuXG4gICAgdmFyIGRpciA9IG9wdC5jbG9ja3dpc2UgIT09IGZhbHNlID8gQ1cgOiBDQ1csXG4gICAgICAgIGEgPSBkaXJbMF0sIFxuICAgICAgICBiID0gZGlyWzFdLFxuICAgICAgICBjID0gZGlyWzJdXG5cbiAgICB2YXIgbnVtSW5kaWNlcyA9IGNvdW50ICogNlxuXG4gICAgdmFyIGluZGljZXMgPSBhcnJheSB8fCBuZXcgKGR0eXBlKHR5cGUpKShudW1JbmRpY2VzKVxuICAgIGZvciAodmFyIGkgPSAwLCBqID0gMDsgaSA8IG51bUluZGljZXM7IGkgKz0gNiwgaiArPSA0KSB7XG4gICAgICAgIHZhciB4ID0gaSArIHN0YXJ0XG4gICAgICAgIGluZGljZXNbeCArIDBdID0gaiArIDBcbiAgICAgICAgaW5kaWNlc1t4ICsgMV0gPSBqICsgMVxuICAgICAgICBpbmRpY2VzW3ggKyAyXSA9IGogKyAyXG4gICAgICAgIGluZGljZXNbeCArIDNdID0gaiArIGFcbiAgICAgICAgaW5kaWNlc1t4ICsgNF0gPSBqICsgYlxuICAgICAgICBpbmRpY2VzW3ggKyA1XSA9IGogKyBjXG4gICAgfVxuICAgIHJldHVybiBpbmRpY2VzXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGR0eXBlKSB7XG4gIHN3aXRjaCAoZHR5cGUpIHtcbiAgICBjYXNlICdpbnQ4JzpcbiAgICAgIHJldHVybiBJbnQ4QXJyYXlcbiAgICBjYXNlICdpbnQxNic6XG4gICAgICByZXR1cm4gSW50MTZBcnJheVxuICAgIGNhc2UgJ2ludDMyJzpcbiAgICAgIHJldHVybiBJbnQzMkFycmF5XG4gICAgY2FzZSAndWludDgnOlxuICAgICAgcmV0dXJuIFVpbnQ4QXJyYXlcbiAgICBjYXNlICd1aW50MTYnOlxuICAgICAgcmV0dXJuIFVpbnQxNkFycmF5XG4gICAgY2FzZSAndWludDMyJzpcbiAgICAgIHJldHVybiBVaW50MzJBcnJheVxuICAgIGNhc2UgJ2Zsb2F0MzInOlxuICAgICAgcmV0dXJuIEZsb2F0MzJBcnJheVxuICAgIGNhc2UgJ2Zsb2F0NjQnOlxuICAgICAgcmV0dXJuIEZsb2F0NjRBcnJheVxuICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIHJldHVybiBBcnJheVxuICAgIGNhc2UgJ3VpbnQ4X2NsYW1wZWQnOlxuICAgICAgcmV0dXJuIFVpbnQ4Q2xhbXBlZEFycmF5XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kdHlwZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuQXJyYXlcblxuZnVuY3Rpb24gYW5BcnJheShhcnIpIHtcbiAgcmV0dXJuIChcbiAgICAgICBhcnIuQllURVNfUEVSX0VMRU1FTlRcbiAgICAmJiBzdHIuY2FsbChhcnIuYnVmZmVyKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJ1xuICAgIHx8IEFycmF5LmlzQXJyYXkoYXJyKVxuICApXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYW4tYXJyYXkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtYnVmZmVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG5jbGFzcyBUZXh0TGF5b3V0IHtcclxuXHJcbiAgdGV4dCA9IFwiXCI7XHJcbiAgZm9udCA9IG51bGw7XHJcbiAgbWV0cmljcyA9IG51bGw7XHJcbiAgZm9udFNpemUgPSAyMDtcclxuICBhbGlnbiA9IFwibGVmdFwiO1xyXG4gIHN0YXJ0WCA9IDA7XHJcbiAgc3RhcnRZID0gMDtcclxuICB3cmFwcGVyV2lkdGggPSAxMDA7XHJcbiAgd3JhcFdvcmRzID0gZmFsc2U7XHJcbiAgd29yZHNNZXRyaWNzID0gW107XHJcbiAgbGV0dGVyc0NvdW50ID0gMDtcclxuICBoZWlnaHQgPSAwO1xyXG4gIGxpbmVzQ291bnQgPSAwO1xyXG4gIGxpbmVIZWlnaHQgPSAwO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IodGV4dCwgZm9udCwgY29uZmlnKSB7XHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy5mb250ID0gZm9udDtcclxuICAgIHRoaXMuZm9udFNpemUgPSBjb25maWcuZm9udFNpemU7XHJcbiAgICB0aGlzLndyYXBXb3JkcyA9IGNvbmZpZy53cmFwV29yZHM7XHJcbiAgICB0aGlzLndyYXBwZXJXaWR0aCA9IGNvbmZpZy53cmFwcGVyV2lkdGg7XHJcbiAgICB0aGlzLmxpbmVIZWlnaHQgPSBjb25maWcubGluZUhlaWdodDtcclxuICAgIHRoaXMuYWxpZ24gPSBjb25maWcuYWxpZ247XHJcbiAgICB0aGlzLmxldHRlcnNDb3VudCA9IHRoaXMudGV4dC5zcGxpdChcIlwiKS5sZW5ndGg7XHJcbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLmZvbnRNZXRyaWNzKGZvbnQsIDAuMCk7XHJcbiAgICB0aGlzLnN0YXJ0WSA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xyXG4gICAgdGhpcy5jYWxjdWxhdGVXb3Jkc1Bvc2l0aW9ucygpO1xyXG4gIH1cclxuXHJcbiAgZm9udE1ldHJpY3MoZm9udFNpemUsIG1vcmVMaW5lR2FwID0gMC4wKSB7XHJcblxyXG4gICAgY29uc3Qge2NhcF9oZWlnaHQsIHhfaGVpZ2h0LCBhc2NlbnQ6IGZvbnRBc2NlbnQgLCBkZXNjZW50LCBsaW5lX2dhcH0gPSB0aGlzLmZvbnQ7XHJcblxyXG4gICAgY29uc3QgY2FwU2NhbGUgPSB0aGlzLmZvbnRTaXplIC8gY2FwX2hlaWdodDtcclxuICAgIGNvbnN0IGxvd1NjYWxlID0gTWF0aC5yb3VuZCggeF9oZWlnaHQgKiBjYXBTY2FsZSApIC8geF9oZWlnaHQ7XHJcbiAgICBjb25zdCBhc2NlbnQgPSBNYXRoLnJvdW5kKCBmb250QXNjZW50ICogY2FwU2NhbGUgKTtcclxuICAgIGxldCBsaW5lSGVpZ2h0ID0gTWF0aC5yb3VuZCggY2FwU2NhbGUgKiAoIGZvbnRBc2NlbnQgKyBkZXNjZW50ICsgbGluZV9nYXAgKSArIG1vcmVMaW5lR2FwICk7XHJcblxyXG4gICAgaWYgKHRoaXMubGluZUhlaWdodCA+IDApXHJcbiAgICAgIGxpbmVIZWlnaHQgPSB0aGlzLmxpbmVIZWlnaHQ7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMubGluZUhlaWdodCA9IGxpbmVIZWlnaHQ7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2FwU2NhbGUgICA6IGNhcFNjYWxlLFxyXG4gICAgICBsb3dTY2FsZSAgIDogbG93U2NhbGUsXHJcbiAgICAgIGFzY2VudCAgICAgIDogYXNjZW50LFxyXG4gICAgICBsaW5lSGVpZ2h0IDogbGluZUhlaWdodFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNoYXJSZWN0KCBwb3MsIGZvbnRfY2hhciwga2VybiA9IDAuMCApIHtcclxuXHJcbiAgICBjb25zdCB7YXNjZW50LCBsb3dTY2FsZSwgY2FwU2NhbGV9ID0gdGhpcy5tZXRyaWNzO1xyXG5cclxuICAgIGNvbnN0IHsgZGVzY2VudCwgcm93X2hlaWdodCwgaXksIGl4IH0gPSB0aGlzLmZvbnQ7XHJcblxyXG4gICAgY29uc3Qge2ZsYWdzLCBiZWFyaW5nX3gsIGFkdmFuY2VfeCwgcmVjdCB9ID0gZm9udF9jaGFyO1xyXG5cclxuICAgIC8vIExvdyBjYXNlIGNoYXJhY3RlcnMgaGF2ZSBmaXJzdCBiaXQgc2V0IGluICdmbGFncydcclxuICAgIHZhciBsb3dDYXNlID0gKCBmbGFncyAmIDEgKSA9PT0gMTtcclxuXHJcbiAgICAvLyBQZW4gcG9zaXRpb24gaXMgYXQgdGhlIHRvcCBvZiB0aGUgbGluZSwgWSBnb2VzIHVwXHJcbiAgICB2YXIgYmFzZWxpbmUgPSBwb3NbMV0gLSBhc2NlbnQ7XHJcblxyXG4gICAgLy8gTG93IGNhc2UgY2hhcnMgdXNlIHRoZWlyIG93biBzY2FsZVxyXG4gICAgdmFyIHNjYWxlID0gbG93Q2FzZSA/IGxvd1NjYWxlIDogY2FwU2NhbGU7XHJcblxyXG5cclxuICAgIC8vIExheWluZyBvdXQgdGhlIGdseXBoIHJlY3RhbmdsZVxyXG4gICAgdmFyIGcgICAgICA9IHJlY3Q7XHJcbiAgICB2YXIgYm90dG9tID0gYmFzZWxpbmUgLSBzY2FsZSAqICggZGVzY2VudCArIGl5ICk7XHJcbiAgICB2YXIgdG9wICAgID0gYm90dG9tICAgKyBzY2FsZSAqICggcm93X2hlaWdodCApO1xyXG4gICAgdmFyIGxlZnQgICA9IHBvc1swXSAgICsgc2NhbGUgKiAoIGJlYXJpbmdfeCArIGtlcm4gLSBpeCApO1xyXG4gICAgdmFyIHJpZ2h0ICA9IGxlZnQgICAgICsgc2NhbGUgKiAoIGdbMl0gLSBnWzBdICk7XHJcbiAgICB2YXIgcCA9IFsgbGVmdCwgdG9wLCByaWdodCwgYm90dG9tIF07XHJcblxyXG4gICAgLy8gQWR2YW5jaW5nIHBlbiBwb3NpdGlvblxyXG4gICAgdmFyIG5ld19wb3NfeCA9IHBvc1swXSArIHNjYWxlICogKCBhZHZhbmNlX3ggKTtcclxuXHJcbiAgICAvLyBTaWduZWQgZGlzdGFuY2UgZmllbGQgc2l6ZSBpbiBzY3JlZW4gcGl4ZWxzXHJcbiAgICB2YXIgc2RmX3NpemUgID0gMi4wICogaXkgKiBzY2FsZTtcclxuXHJcbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbXHJcbiAgICAgIHBbMF0sIHBbM10sIC8vIGxlZnQgYm90dG9tLFxyXG4gICAgICBwWzJdLCBwWzNdLCAvLyByaWdodCBib3R0b20sXHJcbiAgICAgIHBbMl0sIHBbMV0sIC8vIHJpZ2h0IHRvcFxyXG4gICAgICBwWzBdLCBwWzFdLCAvLyBsZWZ0IHRvcFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCB1dnMgPSBbXHJcbiAgICAgIGdbMF0sIGdbMV0sIC8vIGxlZnQgdG9wXHJcbiAgICAgIGdbMl0sIGdbMV0sIC8vIHJpZ2h0IHRvcFxyXG4gICAgICBnWzJdLCBnWzNdLCAvLyByaWdodCBib3R0b20sXHJcbiAgICAgIGdbMF0sIGdbM10sIC8vIGxlZnQgYm90dG9tLFxyXG4gICAgXTtcclxuXHJcbiAgICBjb25zdCBzZGZTaXplcyA9IFtcclxuICAgICAgc2RmX3NpemUsXHJcbiAgICAgIHNkZl9zaXplLFxyXG4gICAgICBzZGZfc2l6ZSxcclxuICAgICAgc2RmX3NpemUsXHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBvc2l0aW9ucyxcclxuICAgICAgdXZzLFxyXG4gICAgICBzZGZTaXplcyxcclxuICAgICAgcG9zOiBbIG5ld19wb3NfeCwgcG9zWzFdIF1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXRTdHJpbmdTaXplKHN0cmluZykge1xyXG5cclxuICAgIGxldCB3aWR0aCA9IDA7XHJcbiAgICBsZXQgaGVpZ2h0ID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XHJcblxyXG4gICAgY29uc3QgY2hhcnMgPSBbLi4uc3RyaW5nXTtcclxuXHJcbiAgICAvLyBJdGVyYXRlIHRob3VnaHQgdGhlIGNoYXJzLCBjYWxjdWxhdGUgcG9zaXRpb25cclxuICAgIGNoYXJzLmZvckVhY2goY2hhciA9PiB7XHJcbiAgICAgIGxldCBmb250X2NoYXIgPSB0aGlzLmZvbnQuY2hhcnNbIGNoYXIgXTtcclxuXHJcbiAgICAgIGlmIChjaGFyID09PSBcIiBcIikge1xyXG4gICAgICAgIHdpZHRoICs9IHRoaXMuZm9udC5zcGFjZV9hZHZhbmNlICogdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfVxyXG5cclxuICAgICAgLy8gR2V0IGNoYXIgbWV0cmljc1xyXG4gICAgICBsZXQgY2hhclJlY3QgPSB0aGlzLmNoYXJSZWN0KFt3aWR0aCwwXSwgZm9udF9jaGFyLCAwLjIpO1xyXG4gICAgICB3aWR0aCA9IGNoYXJSZWN0LnBvc1swXTtcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4ge3dpZHRoLCBoZWlnaHR9O1xyXG5cclxuICB9XHJcblxyXG4gIGNhbGN1bGF0ZVdvcmRzUG9zaXRpb25zKCkge1xyXG5cclxuICAgIGNvbnN0IHdvcmRzID0gdGhpcy50ZXh0LnNwbGl0KFwiIFwiKTtcclxuICAgIHRoaXMud29yZHNNZXRyaWNzID0gW107XHJcblxyXG4gICAgLy8gSW5pdGlhbCBwb3NpdGlvblxyXG4gICAgbGV0IHggPSB0aGlzLnN0YXJ0WDtcclxuICAgIGxldCB5ID0gdGhpcy5zdGFydFk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHdvcmRzIHBvc2l0aW9ucyBvbiBsaW5lc1xyXG4gICAgd29yZHMuZm9yRWFjaCh3b3JkID0+IHtcclxuICAgICAgY29uc3Qgd29yZFNpemUgPSB0aGlzLmdldFN0cmluZ1NpemUod29yZCk7XHJcbiAgICAgIGlmICh4ICsgd29yZFNpemUud2lkdGggPiB0aGlzLnN0YXJ0WCArIHRoaXMud3JhcHBlcldpZHRoICYmIHRoaXMud3JhcFdvcmRzKSB7XHJcbiAgICAgICAgeCA9IHRoaXMuc3RhcnRYO1xyXG4gICAgICAgIHkgKz0gd29yZFNpemUuaGVpZ2h0O1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMud29yZHNNZXRyaWNzLnB1c2goey4uLndvcmRTaXplLCB4LCB5LCB3b3JkfSk7XHJcbiAgICAgIHggKz0gd29yZFNpemUud2lkdGggKyB0aGlzLmZvbnQuc3BhY2VfYWR2YW5jZSAqIHRoaXMubWV0cmljcy5jYXBTY2FsZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBsaW5lcyBjb3VudFxyXG4gICAgdGhpcy5saW5lc0NvdW50ID0gKHkgLSB0aGlzLnN0YXJ0WSkgLyB0aGlzLm1ldHJpY3MubGluZUhlaWdodCArIDE7XHJcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMubGluZXNDb3VudCAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xyXG5cclxuXHJcbiAgICAvLyBDaGFuZ2UgYWxpZ24gVE9ETyBvcHRpbWlzZVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpbmVzQ291bnQ7ICsraSkge1xyXG4gICAgICBjb25zdCB3b3Jkc09uTGluZSA9IHRoaXMud29yZHNNZXRyaWNzLmZpbHRlcih3b3JkID0+IHdvcmQueSA9PT0gdGhpcy5zdGFydFkgKyAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSlcclxuXHJcbiAgICAgIGNvbnN0IGxhc3RXb3JkID0gd29yZHNPbkxpbmVbd29yZHNPbkxpbmUubGVuZ3RoIC0gMV07XHJcbiAgICAgIGNvbnN0IGZyZWVTcGFjZSA9ICh0aGlzLnN0YXJ0WCArIHRoaXMud3JhcHBlcldpZHRoKSAtIChsYXN0V29yZC54ICsgbGFzdFdvcmQud2lkdGgpO1xyXG5cclxuICAgICAgbGV0IGxlZnRPZmZzZXQgPSAwO1xyXG5cclxuICAgICAgc3dpdGNoICh0aGlzLmFsaWduKSB7XHJcbiAgICAgICAgY2FzZSBcImNlbnRlclwiOlxyXG4gICAgICAgICAgbGVmdE9mZnNldCA9IGZyZWVTcGFjZSAvIDI7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFwicmlnaHRcIjpcclxuICAgICAgICAgIGxlZnRPZmZzZXQgPSBmcmVlU3BhY2U7XHJcbiAgICAgICAgICBicmVhaztcclxuICAgICAgfVxyXG4gICAgICB0aGlzLndvcmRzTWV0cmljcy5mb3JFYWNoKHdvcmQgPT4ge1xyXG4gICAgICAgIGlmICh3b3JkLnkgPT09IHRoaXMuc3RhcnRZICsgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCkpIHtcclxuICAgICAgICAgIHdvcmQueCArPSBsZWZ0T2Zmc2V0O1xyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHRMYXlvdXQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sYXlvdXQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG5hdHRyaWJ1dGUgdmVjMiBhVmVydGV4UG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzIgYVRleHR1cmVDb29yZDtcXG5hdHRyaWJ1dGUgZmxvYXQgYVNkZlNpemU7XFxuXFxudW5pZm9ybSBtYXQzIHRyYW5zbGF0aW9uTWF0cml4O1xcbnVuaWZvcm0gbWF0MyBwcm9qZWN0aW9uTWF0cml4O1xcbnVuaWZvcm0gbWF0MyB0cmFuc2Zvcm07XFxuXFxuXFxudmFyeWluZyB2ZWMyICB0YzA7XFxudmFyeWluZyBmbG9hdCBkb2Zmc2V0O1xcbnZhcnlpbmcgZmxvYXQgc2RmX3RleGVsO1xcblxcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuXFxuICAgIC8vVE9ETyBNQUtFIEFUVFJJQlVURVxcbiAgICBmbG9hdCBzZGZfc2l6ZSA9IGFTZGZTaXplO1xcblxcbiAgICAvL1RPRE8gTUFLRSBVTklGT1JNU1xcbiAgICBmbG9hdCBzZGZfdGV4X3NpemUgPSAxMDI0LjA7XFxuXFxuXFxuICAgIHRjMCA9IGFUZXh0dXJlQ29vcmQ7XFxuICAgIGRvZmZzZXQgPSAxLjAgLyBzZGZfc2l6ZTsgICAgICAgLy8gRGlzdGFuY2UgZmllbGQgZGVsdGEgZm9yIG9uZSBzY3JlZW4gcGl4ZWxcXG4gICAgc2RmX3RleGVsID0gMS4wIC8gc2RmX3RleF9zaXplO1xcblxcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQoKHByb2plY3Rpb25NYXRyaXggKiB0cmFuc2xhdGlvbk1hdHJpeCAqIHZlYzMoYVZlcnRleFBvc2l0aW9uICwgMS4wKSkueHksIDAuMCwgMS4wKTtcXG5cXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL3ZlcnQuZ2xzbFxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG51bmlmb3JtIHNhbXBsZXIyRCB1U2FtcGxlcjtcXG51bmlmb3JtIGZsb2F0IGhpbnRfYW1vdW50O1xcbnVuaWZvcm0gZmxvYXQgc3VicGl4ZWxfYW1vdW50O1xcblxcbnVuaWZvcm0gdmVjMyBiZ19jb2xvcjtcXG51bmlmb3JtIHZlYzMgZm9udF9jb2xvcjtcXG5cXG52YXJ5aW5nIHZlYzIgIHRjMDtcXG52YXJ5aW5nIGZsb2F0IGRvZmZzZXQ7XFxudmFyeWluZyBmbG9hdCBzZGZfdGV4ZWw7XFxuXFxuXFxuLypcXG4gKiAgU3VicGl4ZWwgY292ZXJhZ2UgY2FsY3VsYXRpb25cXG4gKlxcbiAqICB2IC0gZWRnZSBzbG9wZSAgICAtMS4wIHRvIDEuMCAgICAgICAgICB0cmlwbGV0XFxuICogIGEgLSBwaXhlbCBjb3ZlcmFnZSAwLjAgdG8gMS4wICAgICAgICAgIGNvdmVyYWdlXFxuICpcXG4gKiAgICAgIHw8LSBnbHlwaCBlZGdlICAgICAgICAgICAgICAgICAgICAgIFIgIEcgIEJcXG4gKiAgKy0tLSstLS0rICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0rLS0rLS0rXFxuICogIHwgICB8WFhYfCB2ID0gMS4wIChlZGdlIGZhY2luZyB3ZXN0KSAgfCAgfHh4fFhYfFxcbiAqICB8ICAgfFhYWHwgYSA9IDAuNSAoNTAlIGNvdmVyYWdlKSAgICAgIHwgIHx4eHxYWHxcXG4gKiAgfCAgIHxYWFh8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB8eHh8WFh8XFxuICogICstLS0rLS0tKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tKy0tKy0tK1xcbiAqICAgIHBpeGVsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwICA1MCAxMDBcXG4gKlxcbiAqXFxuICogICAgICAgIFIgICBHICAgQlxcbiAqXFxuICogICAxLjAgICAgICAgICstLSsgICA8LSB0b3AgKGFicyggdiApKVxcbiAqICAgICAgICAgICAgICB8XFxuICogICAgICAgLSstLS0tLSstLSstLSA8LSBjZWlsOiAxMDAlIGNvdmVyYWdlXFxuICogICAgICAgIHwgICAgIHxYWHxcXG4gKiAgIDAuMCAgfCAgKy0tK1hYfFxcbiAqICAgICAgICB8ICB8eHh8WFh8XFxuICogICAgICAgLSstLSstLSstLSstLSA8LSBmbG9vcjogMCUgY292ZXJhZ2VcXG4gKiAgICAgICAgICAgfFxcbiAqICAtMS4wICArLS0rICAgICAgICAgPC0gIC1hYnModilcXG4gKiAgICAgICAgfFxcbiAqICAgICAgICB8XFxuICogICAgICAgIHxcXG4gKiAgLTIuMCAgKyAgICAgICAgICAgIDwtIGJvdHRvbTogLWFicyh2KS0xLjBcXG4gKi9cXG5cXG52ZWMzIHN1YnBpeGVsKCBmbG9hdCB2LCBmbG9hdCBhICkge1xcbiAgICBmbG9hdCB2dCAgICAgID0gMC42ICogdjsgLy8gMS4wIHdpbGwgbWFrZSB5b3VyIGV5ZXMgYmxlZWRcXG4gICAgdmVjMyAgcmdiX21heCA9IHZlYzMoIC12dCwgMC4wLCB2dCApO1xcbiAgICBmbG9hdCB0b3AgICAgID0gYWJzKCB2dCApO1xcbiAgICBmbG9hdCBib3R0b20gID0gLXRvcCAtIDEuMDtcXG4gICAgZmxvYXQgY2Zsb29yICA9IG1peCggdG9wLCBib3R0b20sIGEgKTtcXG4gICAgdmVjMyAgcmVzICAgICA9IGNsYW1wKCByZ2JfbWF4IC0gdmVjMyggY2Zsb29yICksIDAuMCwgMS4wICk7XFxuICAgIHJldHVybiByZXM7XFxufVxcblxcbnZvaWQgbWFpbjIoKSB7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh1U2FtcGxlciwgdGMwKTtcXG59XFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG5cXG4gICAgLy8gU2FtcGxpbmcgdGhlIHRleHR1cmUsIEwgcGF0dGVyblxcbiAgICBmbG9hdCBzZGYgICAgICAgPSB0ZXh0dXJlMkQoIHVTYW1wbGVyLCB0YzAgKS5yO1xcbiAgICBmbG9hdCBzZGZfbm9ydGggPSB0ZXh0dXJlMkQoIHVTYW1wbGVyLCB0YzAgKyB2ZWMyKCAwLjAsIHNkZl90ZXhlbCApICkucjtcXG4gICAgZmxvYXQgc2RmX2Vhc3QgID0gdGV4dHVyZTJEKCB1U2FtcGxlciwgdGMwICsgdmVjMiggc2RmX3RleGVsLCAwLjAgKSApLnI7XFxuXFxuICAgIC8vIEVzdGltYXRpbmcgc3Ryb2tlIGRpcmVjdGlvbiBieSB0aGUgZGlzdGFuY2UgZmllbGQgZ3JhZGllbnQgdmVjdG9yXFxuICAgIHZlYzIgIHNncmFkICAgICA9IHZlYzIoIHNkZl9lYXN0IC0gc2RmLCBzZGZfbm9ydGggLSBzZGYgKTtcXG4gICAgZmxvYXQgc2dyYWRfbGVuID0gbWF4KCBsZW5ndGgoIHNncmFkICksIDEuMCAvIDEyOC4wICk7XFxuICAgIHZlYzIgIGdyYWQgICAgICA9IHNncmFkIC8gdmVjMiggc2dyYWRfbGVuICk7XFxuICAgIGZsb2F0IHZncmFkID0gYWJzKCBncmFkLnkgKTsgLy8gMC4wIC0gdmVydGljYWwgc3Ryb2tlLCAxLjAgLSBob3Jpem9udGFsIG9uZVxcblxcbiAgICBmbG9hdCBob3J6X3NjYWxlICA9IDEuMTsgLy8gQmx1cnJpbmcgdmVydGljYWwgc3Ryb2tlcyBhbG9uZyB0aGUgWCBheGlzIGEgYml0XFxuICAgIGZsb2F0IHZlcnRfc2NhbGUgID0gMC42OyAvLyBXaGlsZSBhZGRpbmcgc29tZSBjb250cmFzdCB0byB0aGUgaG9yaXpvbnRhbCBzdHJva2VzXFxuICAgIGZsb2F0IGhkb2Zmc2V0ICAgID0gbWl4KCBkb2Zmc2V0ICogaG9yel9zY2FsZSwgZG9mZnNldCAqIHZlcnRfc2NhbGUsIHZncmFkICk7XFxuICAgIGZsb2F0IHJlc19kb2Zmc2V0ID0gbWl4KCBkb2Zmc2V0LCBoZG9mZnNldCwgaGludF9hbW91bnQgKTtcXG5cXG4gICAgZmxvYXQgYWxwaGEgICAgICAgPSBzbW9vdGhzdGVwKCAwLjUgLSByZXNfZG9mZnNldCwgMC41ICsgcmVzX2RvZmZzZXQsIHNkZiApO1xcblxcbiAgICAvLyBBZGRpdGlvbmFsIGNvbnRyYXN0XFxuICAgIGFscGhhICAgICAgICAgICAgID0gcG93KCBhbHBoYSwgMS4wICsgMC4yICogdmdyYWQgKiBoaW50X2Ftb3VudCApO1xcblxcbiAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIHN1cHBvcnQgZm9yIEFSQl9ibGVuZF9mdW5jX2V4dGVuZGVkIGluIFdlYkdMLlxcbiAgICAvLyBGb3J0dW5hdGVseSB0aGUgYmFja2dyb3VuZCBpcyBmaWxsZWQgd2l0aCBhIHNvbGlkIGNvbG9yIHNvIHdlIGNhbiBkb1xcbiAgICAvLyB0aGUgYmxlbmRpbmcgaW5zaWRlIHRoZSBzaGFkZXIuXFxuXFxuICAgIC8vIERpc2NhcmRpbmcgcGl4ZWxzIGJleW9uZCBhIHRocmVzaG9sZCB0byBtaW5pbWlzZSBwb3NzaWJsZSBhcnRpZmFjdHMuXFxuICAgIGlmICggYWxwaGEgPCAyMC4wIC8gMjU2LjAgKSBkaXNjYXJkO1xcblxcbiAgICB2ZWMzIGNoYW5uZWxzID0gc3VicGl4ZWwoIGdyYWQueCAqIDAuNSAqIHN1YnBpeGVsX2Ftb3VudCwgYWxwaGEgKSArIDAuMTtcXG5cXG4gICAgLy8gRm9yIHN1YnBpeGVsIHJlbmRlcmluZyB3ZSBoYXZlIHRvIGJsZW5kIGVhY2ggY29sb3IgY2hhbm5lbCBzZXBhcmF0ZWx5XFxuICAgIHZlYzMgcmVzID0gbWl4KCBiZ19jb2xvciwgZm9udF9jb2xvciwgY2hhbm5lbHMgKTtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCggcmVzLCAxLjAgKTtcXG59XFxuXFxuXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL2ZyYWcuZ2xzbFxuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9