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
	      var renderer = this.renderer;
	      var gl = renderer.gl;
	      var texture = awesomeText.texture;
	      var font = awesomeText.font;
	      var fontSize = awesomeText.style.fontSize;
	      var glData = awesomeText._glDatas[renderer.CONTEXT_UID]; //awesomeText.update();
	
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
	
	function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }
	
	function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }
	
	function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }
	
	function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }
	
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
	        align: this.style.align
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
	    key: "getStringSize",
	    value: function getStringSize(string) {
	      var _this4 = this;
	
	      var width = 0;
	      var height = this.metrics.line_height;
	
	      var chars = _toConsumableArray(string);
	
	      chars.forEach(function (_char) {
	        var font_char = _this4.font.chars[_char];
	
	        if (_char === " ") {
	          width += _this4.font.space_advance * _this4.metrics.cap_scale;
	          return;
	        }
	
	        var charRect = _this4.charRect([width, 0], _this4.font, _this4.metrics, font_char, 0.2);
	
	        width = charRect.pos[0];
	      });
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
	
	    this.text = text;
	    this.font = font;
	    this.fontSize = config.fontSize;
	    this.wrapWords = config.wrapWords;
	    this.wrapperWidth = config.wrapperWidth;
	    this.align = config.align;
	    this.lettersCount = this.text.split("").length;
	    this.metrics = this.fontMetrics(font, 0.2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYWI4ZDhkOGE0NzJhMThhMDRlODAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy90ZXh0LmpzIiwid2VicGFjazovLy8uL34vcXVhZC1pbmRpY2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZHR5cGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbi1hcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3ZlcnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9mcmFnLmdsc2wiXSwibmFtZXMiOlsiZ2xDb3JlIiwiUElYSSIsIkF3ZXNvbWVUZXh0UmVuZGVyZXIiLCJyZW5kZXJlciIsInNoYWRlciIsImdsIiwiZ2V0RXh0ZW5zaW9uIiwiU2hhZGVyIiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJhd2Vzb21lVGV4dCIsInRleHR1cmUiLCJmb250IiwiZm9udFNpemUiLCJzdHlsZSIsImdsRGF0YSIsIl9nbERhdGFzIiwiQ09OVEVYVF9VSUQiLCJiaW5kVmFvIiwiYnVpbGRHbERhdGEiLCJ2YW8iLCJkaXJ0eSIsInV2QnVmZmVyIiwidXBsb2FkIiwidXZzIiwiaW5kZXhEaXJ0eSIsImluZGV4QnVmZmVyIiwiaW5kaWNlcyIsInZlcnRleEJ1ZmZlciIsInZlcnRpY2VzIiwiYmluZFNoYWRlciIsInN0YXRlIiwic2V0QmxlbmRNb2RlIiwiYmxlbmRNb2RlIiwidW5pZm9ybXMiLCJ1U2FtcGxlciIsImJpbmRUZXh0dXJlIiwidHJhbnNsYXRpb25NYXRyaXgiLCJ3b3JsZFRyYW5zZm9ybSIsInRvQXJyYXkiLCJoaW50X2Ftb3VudCIsInN1YnBpeGVsX2Ftb3VudCIsImZvbnRfY29sb3IiLCJ1dGlscyIsImhleDJyZ2IiLCJmaWxsIiwicmVwbGFjZSIsImJnX2NvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiZHJhd01vZGUiLCJUUklBTkdMRVMiLCJkcmF3IiwibGVuZ3RoIiwiR0xCdWZmZXIiLCJjcmVhdGVWZXJ0ZXhCdWZmZXIiLCJTVFJFQU1fRFJBVyIsInNkZkJ1ZmZlciIsInNkZlNpemVzIiwiU1RBVElDX0RSQVciLCJjcmVhdGVJbmRleEJ1ZmZlciIsIlZlcnRleEFycmF5T2JqZWN0IiwiYWRkSW5kZXgiLCJhZGRBdHRyaWJ1dGUiLCJhdHRyaWJ1dGVzIiwiYVZlcnRleFBvc2l0aW9uIiwiRkxPQVQiLCJhVGV4dHVyZUNvb3JkIiwiYVNkZlNpemUiLCJPYmplY3RSZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJyZWdpc3RlclBsdWdpbiIsIk9iamVjdCIsImFzc2lnbiIsImV4dHJhcyIsIkF3ZXNvbWVUZXh0IiwidGV4dCIsIlRleHRTdHlsZSIsIl90ZXh0IiwiX2ZvbnQiLCJfdGV4dHVyZSIsInBsdWdpbk5hbWUiLCJsYXlvdXQiLCJUZXh0TGF5b3V0Iiwid3JhcFdvcmRzIiwiYnJlYWtXb3JkcyIsIndyYXBwZXJXaWR0aCIsIndvcmRXcmFwV2lkdGgiLCJhbGlnbiIsIm1ldHJpY3MiLCJmb250TWV0cmljcyIsIkZsb2F0MzJBcnJheSIsImxldHRlcnNDb3VudCIsImFycmF5UG9zaXRpb25zIiwidmVydGV4Iiwic2RmIiwid29yZHNNZXRyaWNzIiwiZm9yRWFjaCIsIndvcmQiLCJ3cml0ZVN0cmluZyIsIngiLCJ5IiwiY2xvY2t3aXNlIiwidHlwZSIsImNvdW50Iiwic3R5bGVJRCIsInN0cmluZyIsImZvbnRfbWV0cmljcyIsInBvcyIsInByZXZfY2hhciIsImNwb3MiLCJ4X21heCIsInNjYWxlIiwiY2FwX3NjYWxlIiwic3RyX3BvcyIsInNjaGFyIiwibGluZV9oZWlnaHQiLCJzcGFjZV9hZHZhbmNlIiwiZm9udF9jaGFyIiwiY2hhcnMiLCJrZXJuIiwicmVjdCIsImNoYXJSZWN0IiwicG9zaXRpb25zIiwibWFwIiwidXYiLCJzdHJpbmdfcG9zIiwicGl4ZWxfc2l6ZSIsIm1vcmVfbGluZV9nYXAiLCJjYXBfaGVpZ2h0IiwibG93X3NjYWxlIiwiTWF0aCIsInJvdW5kIiwieF9oZWlnaHQiLCJhc2NlbnQiLCJkZXNjZW50IiwibGluZV9nYXAiLCJsb3djYXNlIiwiZmxhZ3MiLCJiYXNlbGluZSIsImciLCJib3R0b20iLCJpeSIsInRvcCIsInJvd19oZWlnaHQiLCJsZWZ0IiwiYmVhcmluZ194IiwiaXgiLCJyaWdodCIsInAiLCJuZXdfcG9zX3giLCJhZHZhbmNlX3giLCJzZGZfc2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiY2hhciIsInZhbHVlIiwidXBkYXRlIiwibWVzaCIsIk1lc2giLCJjb25maWciLCJzcGxpdCIsInN0YXJ0WSIsImxpbmVIZWlnaHQiLCJjYWxjdWxhdGVXb3Jkc1Bvc2l0aW9ucyIsIm1vcmVMaW5lR2FwIiwiZm9udEFzY2VudCIsImNhcFNjYWxlIiwibG93U2NhbGUiLCJsb3dDYXNlIiwid29yZHMiLCJzdGFydFgiLCJ3b3JkU2l6ZSIsImdldFN0cmluZ1NpemUiLCJwdXNoIiwibGluZXNDb3VudCIsImkiLCJ3b3Jkc09uTGluZSIsImZpbHRlciIsImxhc3RXb3JkIiwiZnJlZVNwYWNlIiwibGVmdE9mZnNldCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7OztBQ3RDQTs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU1BLE1BQU0sR0FBR0MsSUFBSSxDQUFDRCxNQUFwQjs7S0FFTUUsbUI7Ozs7O0FBRUosZ0NBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFBQTs7QUFDcEIsOEZBQU1B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QyxlQUFJQSxJQUFJLENBQUNHLENBQUwsS0FBVyxNQUFJLENBQUM2RCxNQUFMLEdBQWVjLENBQUMsR0FBRyxNQUFJLENBQUN2RixPQUFMLENBQWEwRSxVQUEvQyxFQUE0RDtBQUMxRGpFLGlCQUFJLENBQUNFLENBQUwsSUFBVWlGLFVBQVY7QUFDRDtBQUNGLFVBSkQ7QUExQ3NCOztBQTBCeEIsWUFBSyxJQUFJTCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtELFVBQXpCLEVBQXFDLEVBQUVDLENBQXZDLEVBQTBDO0FBQUEsZUFBakNBLENBQWlDO0FBcUJ6QztBQUVGOzs7Ozs7Z0JBS1k3RixVOzs7Ozs7O0FDL0xmLHFFQUFvRSwrQkFBK0IsMkJBQTJCLG1DQUFtQyxnQ0FBZ0MseUJBQXlCLHdCQUF3Qix3QkFBd0IsMEJBQTBCLHVCQUF1Qiw2REFBNkQsOERBQThELDhCQUE4QiwrQkFBK0Isd0ZBQXdGLDhHQUE4RyxLQUFLLEc7Ozs7OztBQ0E5ckIsaUVBQWdFLDRCQUE0QixnQ0FBZ0MsMEJBQTBCLDBCQUEwQixzQkFBc0Isd0JBQXdCLDBCQUEwQix3OEJBQXc4Qiw4QkFBOEIsNEVBQTRFLGdDQUFnQyxpQ0FBaUMsNENBQTRDLGtFQUFrRSxpQkFBaUIsR0FBRyxrQkFBa0IsOENBQThDLEdBQUcscUJBQXFCLCtGQUErRiw4RUFBOEUsOEVBQThFLDRJQUE0SSw0REFBNEQsa0RBQWtELGtDQUFrQywrRUFBK0Usa0ZBQWtGLDJJQUEySSxnRUFBZ0Usb0ZBQW9GLHNHQUFzRyxnVUFBZ1UsZ0ZBQWdGLHVJQUF1SSxzQ0FBc0MsR0FBRyxPIiwiZmlsZSI6InBpeGktYXdlc29tZS10ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYWI4ZDhkOGE0NzJhMThhMDRlODAiLCJpbXBvcnQgQXdlc29tZVRleHQgZnJvbSAnLi90ZXh0J1xuaW1wb3J0IHZlcnRleFNoYWRlciBmcm9tICcuL3NoYWRlcnMvdmVydC5nbHNsJztcbmltcG9ydCBmcmFnbWVudFNoYWRlciBmcm9tICcuL3NoYWRlcnMvZnJhZy5nbHNsJztcblxuY29uc3QgZ2xDb3JlID0gUElYSS5nbENvcmU7XG5cbmNsYXNzIEF3ZXNvbWVUZXh0UmVuZGVyZXIgZXh0ZW5kcyBQSVhJLk9iamVjdFJlbmRlcmVyIHtcblxuICBjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xuICAgIHN1cGVyKHJlbmRlcmVyKTtcbiAgICB0aGlzLnNoYWRlciA9IG51bGw7XG5cbiAgfVxuXG4gIG9uQ29udGV4dENoYW5nZSgpIHtcbiAgICBjb25zdCBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG4gICAgZ2wuZ2V0RXh0ZW5zaW9uKFwiT0VTX3N0YW5kYXJkX2Rlcml2YXRpdmVzXCIpO1xuICAgIHRoaXMuc2hhZGVyID0gbmV3IFBJWEkuU2hhZGVyKGdsLCB2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcbiAgfVxuXG4gIHJlbmRlcihhd2Vzb21lVGV4dCkge1xuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyO1xuICAgIGNvbnN0IGdsID0gcmVuZGVyZXIuZ2w7XG4gICAgY29uc3QgdGV4dHVyZSA9IGF3ZXNvbWVUZXh0LnRleHR1cmU7XG4gICAgY29uc3QgZm9udCA9IGF3ZXNvbWVUZXh0LmZvbnQ7XG5cbiAgICBjb25zdCBmb250U2l6ZSA9IGF3ZXNvbWVUZXh0LnN0eWxlLmZvbnRTaXplO1xuXG4gICAgbGV0IGdsRGF0YSA9IGF3ZXNvbWVUZXh0Ll9nbERhdGFzW3JlbmRlcmVyLkNPTlRFWFRfVUlEXTtcblxuICAgIC8vYXdlc29tZVRleHQudXBkYXRlKCk7XG5cbiAgICBpZiAoIWdsRGF0YSkge1xuICAgICAgcmVuZGVyZXIuYmluZFZhbyhudWxsKTtcbiAgICAgIGdsRGF0YSA9IHRoaXMuYnVpbGRHbERhdGEoYXdlc29tZVRleHQsIGdsKTtcbiAgICB9XG5cbiAgICByZW5kZXJlci5iaW5kVmFvKGdsRGF0YS52YW8pO1xuXG4gICAgaWYgKGF3ZXNvbWVUZXh0LmRpcnR5ICE9PSBnbERhdGEuZGlydHkpIHtcbiAgICAgIGdsRGF0YS5kaXJ0eSA9IGF3ZXNvbWVUZXh0LmRpcnR5O1xuICAgICAgZ2xEYXRhLnV2QnVmZmVyLnVwbG9hZChhd2Vzb21lVGV4dC51dnMpO1xuICAgIH1cblxuICAgIGlmIChhd2Vzb21lVGV4dC5pbmRleERpcnR5ICE9PSBnbERhdGEuaW5kZXhEaXJ0eSkge1xuICAgICAgZ2xEYXRhLmluZGV4RGlydHkgPSBhd2Vzb21lVGV4dC5pbmRleERpcnR5O1xuICAgICAgZ2xEYXRhLmluZGV4QnVmZmVyLnVwbG9hZChhd2Vzb21lVGV4dC5pbmRpY2VzKTtcbiAgICB9XG5cbiAgICBnbERhdGEudmVydGV4QnVmZmVyLnVwbG9hZChhd2Vzb21lVGV4dC52ZXJ0aWNlcyk7XG4gICAgcmVuZGVyZXIuYmluZFNoYWRlcihnbERhdGEuc2hhZGVyKTtcblxuICAgIHJlbmRlcmVyLnN0YXRlLnNldEJsZW5kTW9kZShhd2Vzb21lVGV4dC5ibGVuZE1vZGUpO1xuXG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy51U2FtcGxlciA9IHJlbmRlcmVyLmJpbmRUZXh0dXJlKHRleHR1cmUpO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMudHJhbnNsYXRpb25NYXRyaXggPSBhd2Vzb21lVGV4dC53b3JsZFRyYW5zZm9ybS50b0FycmF5KHRydWUpO1xuXG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5oaW50X2Ftb3VudCA9IDEuMDtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnN1YnBpeGVsX2Ftb3VudCA9IDEuMDtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmZvbnRfY29sb3IgPSBQSVhJLnV0aWxzLmhleDJyZ2IoYXdlc29tZVRleHQuc3R5bGUuZmlsbC5yZXBsYWNlKFwiI1wiLCBcIjB4XCIpKTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmJnX2NvbG9yID0gUElYSS51dGlscy5oZXgycmdiKGF3ZXNvbWVUZXh0LmJhY2tncm91bmRDb2xvci5yZXBsYWNlKFwiI1wiLCBcIjB4XCIpKTtcblxuICAgIGNvbnN0IGRyYXdNb2RlID0gYXdlc29tZVRleHQuZHJhd01vZGUgPSBnbC5UUklBTkdMRVM7XG4gICAgZ2xEYXRhLnZhby5kcmF3KGRyYXdNb2RlLCBhd2Vzb21lVGV4dC5pbmRpY2VzLmxlbmd0aCwgMCk7XG4gIH1cblxuICBidWlsZEdsRGF0YShhd2Vzb21lVGV4dCwgZ2wpIHtcblxuICAgIGNvbnN0IGdsRGF0YSA9IHtcbiAgICAgIHNoYWRlcjogdGhpcy5zaGFkZXIsXG4gICAgICB2ZXJ0ZXhCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoZ2wsIGF3ZXNvbWVUZXh0LnZlcnRpY2VzLCBnbC5TVFJFQU1fRFJBVyksXG4gICAgICB1dkJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgYXdlc29tZVRleHQudXZzLCBnbC5TVFJFQU1fRFJBVyksXG4gICAgICBzZGZCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoZ2wsIGF3ZXNvbWVUZXh0LnNkZlNpemVzLCBnbC5TVEFUSUNfRFJBVyksXG4gICAgICBpbmRleEJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZUluZGV4QnVmZmVyKGdsLCBhd2Vzb21lVGV4dC5pbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyksXG4gICAgICAvLyBidWlsZCB0aGUgdmFvIG9iamVjdCB0aGF0IHdpbGwgcmVuZGVyLi5cbiAgICAgIHZhbzogbnVsbCxcbiAgICAgIGRpcnR5OiBhd2Vzb21lVGV4dC5kaXJ0eSxcbiAgICAgIGluZGV4RGlydHk6IGF3ZXNvbWVUZXh0LmluZGV4RGlydHksXG4gICAgfTtcblxuXG5cbiAgICBnbERhdGEudmFvID0gbmV3IGdsQ29yZS5WZXJ0ZXhBcnJheU9iamVjdChnbClcbiAgICAgIC5hZGRJbmRleChnbERhdGEuaW5kZXhCdWZmZXIpXG4gICAgICAuYWRkQXR0cmlidXRlKGdsRGF0YS52ZXJ0ZXhCdWZmZXIsIGdsRGF0YS5zaGFkZXIuYXR0cmlidXRlcy5hVmVydGV4UG9zaXRpb24sIGdsLkZMT0FULCBmYWxzZSwgMiAqIDQsIDApXG4gICAgICAuYWRkQXR0cmlidXRlKGdsRGF0YS51dkJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFUZXh0dXJlQ29vcmQsIGdsLkZMT0FULCBmYWxzZSwgMiAqIDQsIDApXG4gICAgICAuYWRkQXR0cmlidXRlKGdsRGF0YS5zZGZCdWZmZXIsIGdsRGF0YS5zaGFkZXIuYXR0cmlidXRlcy5hU2RmU2l6ZSwgZ2wuRkxPQVQsIGZhbHNlLCA0LCAwKTtcblxuICAgIHJldHVybiBnbERhdGFcbiAgfVxuXG5cbn1cblxuUElYSS5XZWJHTFJlbmRlcmVyLnJlZ2lzdGVyUGx1Z2luKCdBd2Vzb21lVGV4dFJlbmRlcmVyJywgQXdlc29tZVRleHRSZW5kZXJlcik7XG5cbk9iamVjdC5hc3NpZ24oUElYSS5leHRyYXMsIHtcbiAgQXdlc29tZVRleHQ6IEF3ZXNvbWVUZXh0XG5cbn0pO1xuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgY3JlYXRlSW5kaWNlcyBmcm9tICdxdWFkLWluZGljZXMnXG5pbXBvcnQgVGV4dExheW91dCBmcm9tICcuL2xheW91dCdcblxuY2xhc3MgQXdlc29tZVRleHQgZXh0ZW5kcyBQSVhJLm1lc2guTWVzaCB7XG5cbiAgY29uc3RydWN0b3IodGV4dCwgc3R5bGUsIGZvbnQpIHtcbiAgICBzdXBlcihmb250LnRleHR1cmUpO1xuXG4gICAgdGhpcy5zdHlsZSA9IG5ldyBQSVhJLlRleHRTdHlsZShzdHlsZSk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBzdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgdGhpcy5fdGV4dCA9IHRleHQ7XG4gICAgdGhpcy5fZm9udCA9IGZvbnQuZm9udDtcblxuICAgIC8vVE9ETyBzZXBhcmF0ZSBmb250IGFuZCB0ZXh0dXJlXG4gICAgdGhpcy5fdGV4dHVyZSA9IGZvbnQudGV4dHVyZTtcbiAgICB0aGlzLnBsdWdpbk5hbWUgPSAnQXdlc29tZVRleHRSZW5kZXJlcic7XG5cblxuICB9XG5cbiAgdXBkYXRlKCkge1xuXG4gICAgdGhpcy5sYXlvdXQgPSBuZXcgVGV4dExheW91dCh0aGlzLnRleHQsIHRoaXMuZm9udCwge1xuICAgICAgZm9udFNpemU6IHRoaXMuc3R5bGUuZm9udFNpemUsXG4gICAgICB3cmFwV29yZHM6IHRoaXMuc3R5bGUuYnJlYWtXb3JkcyxcbiAgICAgIHdyYXBwZXJXaWR0aDogdGhpcy5zdHlsZS53b3JkV3JhcFdpZHRoLFxuICAgICAgYWxpZ246IHRoaXMuc3R5bGUuYWxpZ24sXG4gICAgfSk7XG5cbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLmZvbnRNZXRyaWNzKCB0aGlzLmZvbnQsIHRoaXMuc3R5bGUuZm9udFNpemUsIHRoaXMuc3R5bGUuZm9udFNpemUgKiAwLjIgKTtcbiAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0ICogMik7XG4gICAgdGhpcy51dnMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubGF5b3V0LmxldHRlcnNDb3VudCAqIDQgKiAyKTtcbiAgICB0aGlzLnNkZlNpemVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0KTtcblxuICAgIHRoaXMuYXJyYXlQb3NpdGlvbnMgPSB7IHZlcnRleDogMCwgdXZzOiAwLCBzZGY6IDAgfTtcblxuICAgIHRoaXMubGF5b3V0LndvcmRzTWV0cmljcy5mb3JFYWNoICh3b3JkID0+IHtcbiAgICAgIHRoaXMud3JpdGVTdHJpbmcod29yZC53b3JkLCB0aGlzLmZvbnQsIHRoaXMubWV0cmljcywgW3dvcmQueCwgd29yZC55XSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmluZGljZXMgPSBjcmVhdGVJbmRpY2VzKHtcbiAgICAgIGNsb2Nrd2lzZTogdHJ1ZSxcbiAgICAgIHR5cGU6ICd1aW50MTYnLFxuICAgICAgY291bnQ6IHRoaXMubGF5b3V0LmxldHRlcnNDb3VudFxuICAgIH0pO1xuXG4gICAgdGhpcy5zdHlsZUlEID0gdGhpcy5zdHlsZS5zdHlsZUlEO1xuICAgIHRoaXMuZGlydHkrKztcbiAgICB0aGlzLmluZGV4RGlydHkrKztcbiAgfVxuXG4gIGdldCB0ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICB9XG5cbiAgc2V0IHRleHQodmFsdWUpIHtcbiAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGdldCB0ZXh0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLl90ZXh0dXJlO1xuICB9XG5cbiAgZ2V0IGZvbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvbnRcbiAgfVxuXG4gIHdyaXRlU3RyaW5nKCBzdHJpbmcsIGZvbnQsIGZvbnRfbWV0cmljcywgcG9zKSB7XG4gICAgbGV0IHByZXZfY2hhciA9IFwiIFwiOyAgLy8gVXNlZCB0byBjYWxjdWxhdGUga2VybmluZ1xuICAgIGxldCBjcG9zICAgICAgPSBwb3M7ICAvLyBDdXJyZW50IHBlbiBwb3NpdGlvblxuICAgIGxldCB4X21heCAgICAgPSAwLjA7ICAvLyBNYXggd2lkdGggLSB1c2VkIGZvciBib3VuZGluZyBib3hcbiAgICBsZXQgc2NhbGUgICAgID0gZm9udF9tZXRyaWNzLmNhcF9zY2FsZTtcblxuICAgIGxldCBzdHJfcG9zID0gMDtcblxuICAgIGZvcig7Oykge1xuICAgICAgaWYgKCBzdHJfcG9zID09PSBzdHJpbmcubGVuZ3RoICkgYnJlYWs7XG5cbiAgICAgIHZhciBzY2hhciA9IHN0cmluZ1sgc3RyX3BvcyBdO1xuICAgICAgc3RyX3BvcysrO1xuXG4gICAgICBpZiAoIHNjaGFyID09PSBcIlxcblwiICkge1xuICAgICAgICBpZiAoIGNwb3NbMF0gPiB4X21heCApIHhfbWF4ID0gY3Bvc1swXTsgLy8gRXhwYW5kaW5nIHRoZSBib3VuZGluZyByZWN0XG4gICAgICAgIGNwb3NbMF0gID0gcG9zWzBdO1xuICAgICAgICBjcG9zWzFdIC09IGZvbnRfbWV0cmljcy5saW5lX2hlaWdodDtcbiAgICAgICAgcHJldl9jaGFyID0gXCIgXCI7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIHNjaGFyID09PSBcIiBcIiApIHtcbiAgICAgICAgLy9zY2hhciA9IFwiX1wiXG4gICAgICAgIGNwb3NbMF0gKz0gZm9udC5zcGFjZV9hZHZhbmNlICogc2NhbGU7XG4gICAgICAgIHByZXZfY2hhciA9IFwiIFwiO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZvbnRfY2hhciA9IGZvbnQuY2hhcnNbIHNjaGFyIF07XG4gICAgICBpZiAoICFmb250X2NoYXIgKSB7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1YnN0aXR1dGluZyB1bmF2YWlsYWJsZSBjaGFyYWN0ZXJzIHdpdGggJz8nXG4gICAgICAgIHNjaGFyID0gXCI/XCI7XG4gICAgICAgIGZvbnRfY2hhciA9IGZvbnQuY2hhcnNbIFwiP1wiIF07XG4gICAgICB9XG5cbiAgICAgIHZhciBrZXJuID0gZm9udC5rZXJuWyBwcmV2X2NoYXIgKyBzY2hhciBdO1xuICAgICAgaWYgKCAha2VybiApIGtlcm4gPSAwLjA7XG5cbiAgICAgIC8vIGNhbGN1bGF0aW5nIHRoZSBnbHlwaCByZWN0YW5nbGUgYW5kIGNvcHlpbmcgaXQgdG8gdGhlIHZlcnRleCBhcnJheVxuICAgICAgdmFyIHJlY3QgPSB0aGlzLmNoYXJSZWN0KCBjcG9zLCBmb250LCBmb250X21ldHJpY3MsIGZvbnRfY2hhciwga2VybiApO1xuXG4gICAgICByZWN0LnBvc2l0aW9ucy5tYXAoKHBvcykgPT4gdGhpcy52ZXJ0aWNlc1sgdGhpcy5hcnJheVBvc2l0aW9ucy52ZXJ0ZXgrKyBdID0gcG9zICk7XG4gICAgICByZWN0LnV2cy5tYXAoKHV2KSA9PiB0aGlzLnV2c1sgdGhpcy5hcnJheVBvc2l0aW9ucy51dnMrKyBdID0gdXYgKTtcbiAgICAgIHJlY3Quc2RmU2l6ZXMubWFwKChzZGYpID0+IHRoaXMuc2RmU2l6ZXNbIHRoaXMuYXJyYXlQb3NpdGlvbnMuc2RmKysgXSA9IHNkZiApO1xuXG4gICAgICBwcmV2X2NoYXIgPSBzY2hhcjtcbiAgICAgIGNwb3MgPSByZWN0LnBvcztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVjdCA6IFsgcG9zWzBdLCBwb3NbMV0sIHhfbWF4IC0gcG9zWzBdLCBwb3NbMV0gLSBjcG9zWzFdICsgZm9udF9tZXRyaWNzLmxpbmVfaGVpZ2h0IF0sXG4gICAgICBzdHJpbmdfcG9zIDogc3RyX3BvcyxcbiAgICAgIC8vYXJyYXlfcG9zIDogYXJyYXlfcG9zXG4gICAgfVxuXG4gIH1cblxuICBmb250TWV0cmljcyggZm9udCwgcGl4ZWxfc2l6ZSwgbW9yZV9saW5lX2dhcCA9IDAuMCApIHtcbiAgICAvLyBXZSB1c2Ugc2VwYXJhdGUgc2NhbGUgZm9yIHRoZSBsb3cgY2FzZSBjaGFyYWN0ZXJzXG4gICAgLy8gc28gdGhhdCB4LWhlaWdodCBmaXRzIHRoZSBwaXhlbCBncmlkLlxuICAgIC8vIE90aGVyIGNoYXJhY3RlcnMgdXNlIGNhcC1oZWlnaHQgdG8gZml0IHRvIHRoZSBwaXhlbHNcbiAgICB2YXIgY2FwX3NjYWxlICAgPSBwaXhlbF9zaXplIC8gZm9udC5jYXBfaGVpZ2h0O1xuICAgIHZhciBsb3dfc2NhbGUgICA9IE1hdGgucm91bmQoIGZvbnQueF9oZWlnaHQgKiBjYXBfc2NhbGUgKSAvIGZvbnQueF9oZWlnaHQ7XG5cbiAgICAvLyBBc2NlbnQgc2hvdWxkIGJlIGEgd2hvbGUgbnVtYmVyIHNpbmNlIGl0J3MgdXNlZCB0byBjYWxjdWxhdGUgdGhlIGJhc2VsaW5lXG4gICAgLy8gcG9zaXRpb24gd2hpY2ggc2hvdWxkIGxpZSBhdCB0aGUgcGl4ZWwgYm91bmRhcnlcbiAgICB2YXIgYXNjZW50ICAgICAgPSBNYXRoLnJvdW5kKCBmb250LmFzY2VudCAqIGNhcF9zY2FsZSApO1xuXG4gICAgLy8gU2FtZSBmb3IgdGhlIGxpbmUgaGVpZ2h0XG4gICAgdmFyIGxpbmVfaGVpZ2h0ID0gTWF0aC5yb3VuZCggY2FwX3NjYWxlICogKCBmb250LmFzY2VudCArIGZvbnQuZGVzY2VudCArIGZvbnQubGluZV9nYXAgKSArIG1vcmVfbGluZV9nYXAgKTtcblxuXG4gICAgcmV0dXJuIHsgY2FwX3NjYWxlICAgOiBjYXBfc2NhbGUsXG4gICAgICBsb3dfc2NhbGUgICA6IGxvd19zY2FsZSxcbiAgICAgIHBpeGVsX3NpemUgIDogcGl4ZWxfc2l6ZSxcbiAgICAgIGFzY2VudCAgICAgIDogYXNjZW50LFxuICAgICAgbGluZV9oZWlnaHQgOiBsaW5lX2hlaWdodFxuICAgIH07XG4gIH1cblxuICBjaGFyUmVjdCggcG9zLCBmb250LCBmb250X21ldHJpY3MsIGZvbnRfY2hhciwga2VybiA9IDAuMCApIHtcblxuICAgIC8vIExvdyBjYXNlIGNoYXJhY3RlcnMgaGF2ZSBmaXJzdCBiaXQgc2V0IGluICdmbGFncydcbiAgICB2YXIgbG93Y2FzZSA9ICggZm9udF9jaGFyLmZsYWdzICYgMSApID09PSAxO1xuXG4gICAgLy8gUGVuIHBvc2l0aW9uIGlzIGF0IHRoZSB0b3Agb2YgdGhlIGxpbmUsIFkgZ29lcyB1cFxuICAgIHZhciBiYXNlbGluZSA9IHBvc1sxXSAtIGZvbnRfbWV0cmljcy5hc2NlbnQ7XG5cbiAgICAvLyBMb3cgY2FzZSBjaGFycyB1c2UgdGhlaXIgb3duIHNjYWxlXG4gICAgdmFyIHNjYWxlID0gbG93Y2FzZSA/IGZvbnRfbWV0cmljcy5sb3dfc2NhbGUgOiBmb250X21ldHJpY3MuY2FwX3NjYWxlO1xuXG4gICAgLy9zY2FsZSA9IGZvbnRfbWV0cmljcy5sb3dfc2NhbGU7XG5cbiAgICAvL3NjYWxlICs9IDIwO1xuXG4gICAgLy8gTGF5aW5nIG91dCB0aGUgZ2x5cGggcmVjdGFuZ2xlXG4gICAgdmFyIGcgICAgICA9IGZvbnRfY2hhci5yZWN0O1xuICAgIHZhciBib3R0b20gPSBiYXNlbGluZSAtIHNjYWxlICogKCBmb250LmRlc2NlbnQgKyBmb250Lml5ICk7XG4gICAgdmFyIHRvcCAgICA9IGJvdHRvbSAgICsgc2NhbGUgKiAoIGZvbnQucm93X2hlaWdodCApO1xuICAgIHZhciBsZWZ0ICAgPSBwb3NbMF0gICArIHNjYWxlICogKCBmb250X2NoYXIuYmVhcmluZ194ICsga2VybiAtIGZvbnQuaXggKTtcbiAgICB2YXIgcmlnaHQgID0gbGVmdCAgICAgKyBzY2FsZSAqICggZ1syXSAtIGdbMF0gKTtcbiAgICB2YXIgcCA9IFsgbGVmdCwgdG9wLCByaWdodCwgYm90dG9tIF07XG5cbiAgICAvLyBBZHZhbmNpbmcgcGVuIHBvc2l0aW9uXG4gICAgdmFyIG5ld19wb3NfeCA9IHBvc1swXSArIHNjYWxlICogKCBmb250X2NoYXIuYWR2YW5jZV94ICk7XG5cbiAgICAvLyBTaWduZWQgZGlzdGFuY2UgZmllbGQgc2l6ZSBpbiBzY3JlZW4gcGl4ZWxzXG4gICAgdmFyIHNkZl9zaXplICA9IDIuMCAqIGZvbnQuaXkgKiBzY2FsZTtcblxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgICAgIHBbMF0sIHBbM10sIC8vIGxlZnQgYm90dG9tLFxuICAgICAgcFsyXSwgcFszXSwgLy8gcmlnaHQgYm90dG9tLFxuICAgICAgcFsyXSwgcFsxXSwgLy8gcmlnaHQgdG9wXG4gICAgICBwWzBdLCBwWzFdLCAvLyBsZWZ0IHRvcFxuICAgIF07XG5cbiAgICBjb25zdCB1dnMgPSBbXG4gICAgICBnWzBdLCBnWzFdLCAvLyBsZWZ0IHRvcFxuICAgICAgZ1syXSwgZ1sxXSwgLy8gcmlnaHQgdG9wXG4gICAgICBnWzJdLCBnWzNdLCAvLyByaWdodCBib3R0b20sXG4gICAgICBnWzBdLCBnWzNdLCAvLyBsZWZ0IGJvdHRvbSxcbiAgICBdO1xuXG4gICAgY29uc3Qgc2RmU2l6ZXMgPSBbXG4gICAgICBzZGZfc2l6ZSxcbiAgICAgIHNkZl9zaXplLFxuICAgICAgc2RmX3NpemUsXG4gICAgICBzZGZfc2l6ZSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9ucyxcbiAgICAgIHV2cyxcbiAgICAgIHNkZlNpemVzLFxuICAgICAgcG9zOiBbIG5ld19wb3NfeCwgcG9zWzFdIF1cbiAgICB9O1xuXG4gICAgLy9yZXR1cm4geyB2ZXJ0aWNlcyA6IHZlcnRpY2VzLCBwb3MgOiBbIG5ld19wb3NfeCwgcG9zWzFdIF0gfTtcbiAgfVxuXG4gIGdldFN0cmluZ1NpemUoc3RyaW5nKSB7XG5cbiAgICBsZXQgd2lkdGggPSAwO1xuICAgIGxldCBoZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZV9oZWlnaHQ7XG5cbiAgICBjb25zdCBjaGFycyA9IFsuLi5zdHJpbmddO1xuXG4gICAgY2hhcnMuZm9yRWFjaChjaGFyID0+IHtcbiAgICAgIGxldCBmb250X2NoYXIgPSB0aGlzLmZvbnQuY2hhcnNbIGNoYXIgXTtcblxuICAgICAgaWYgKGNoYXIgPT09IFwiIFwiKSB7XG4gICAgICAgIHdpZHRoICs9IHRoaXMuZm9udC5zcGFjZV9hZHZhbmNlICogdGhpcy5tZXRyaWNzLmNhcF9zY2FsZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBsZXQgY2hhclJlY3QgPSB0aGlzLmNoYXJSZWN0KFt3aWR0aCwwXSwgdGhpcy5mb250LCB0aGlzLm1ldHJpY3MsIGZvbnRfY2hhciwgMC4yKTtcbiAgICAgIHdpZHRoID0gY2hhclJlY3QucG9zWzBdO1xuICAgIH0pO1xuXG4gIH1cblxufVxuXG5Bd2Vzb21lVGV4dC5zY2FsZSA9IDEuMDtcblxuZXhwb3J0IGRlZmF1bHQgQXdlc29tZVRleHQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGV4dC5qcyIsInZhciBkdHlwZSA9IHJlcXVpcmUoJ2R0eXBlJylcbnZhciBhbkFycmF5ID0gcmVxdWlyZSgnYW4tYXJyYXknKVxudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJylcblxudmFyIENXID0gWzAsIDIsIDNdXG52YXIgQ0NXID0gWzIsIDEsIDNdXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlUXVhZEVsZW1lbnRzKGFycmF5LCBvcHQpIHtcbiAgICAvL2lmIHVzZXIgZGlkbid0IHNwZWNpZnkgYW4gb3V0cHV0IGFycmF5XG4gICAgaWYgKCFhcnJheSB8fCAhKGFuQXJyYXkoYXJyYXkpIHx8IGlzQnVmZmVyKGFycmF5KSkpIHtcbiAgICAgICAgb3B0ID0gYXJyYXkgfHwge31cbiAgICAgICAgYXJyYXkgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHQgPT09ICdudW1iZXInKSAvL2JhY2t3YXJkcy1jb21wYXRpYmxlXG4gICAgICAgIG9wdCA9IHsgY291bnQ6IG9wdCB9XG4gICAgZWxzZVxuICAgICAgICBvcHQgPSBvcHQgfHwge31cblxuICAgIHZhciB0eXBlID0gdHlwZW9mIG9wdC50eXBlID09PSAnc3RyaW5nJyA/IG9wdC50eXBlIDogJ3VpbnQxNidcbiAgICB2YXIgY291bnQgPSB0eXBlb2Ygb3B0LmNvdW50ID09PSAnbnVtYmVyJyA/IG9wdC5jb3VudCA6IDFcbiAgICB2YXIgc3RhcnQgPSAob3B0LnN0YXJ0IHx8IDApIFxuXG4gICAgdmFyIGRpciA9IG9wdC5jbG9ja3dpc2UgIT09IGZhbHNlID8gQ1cgOiBDQ1csXG4gICAgICAgIGEgPSBkaXJbMF0sIFxuICAgICAgICBiID0gZGlyWzFdLFxuICAgICAgICBjID0gZGlyWzJdXG5cbiAgICB2YXIgbnVtSW5kaWNlcyA9IGNvdW50ICogNlxuXG4gICAgdmFyIGluZGljZXMgPSBhcnJheSB8fCBuZXcgKGR0eXBlKHR5cGUpKShudW1JbmRpY2VzKVxuICAgIGZvciAodmFyIGkgPSAwLCBqID0gMDsgaSA8IG51bUluZGljZXM7IGkgKz0gNiwgaiArPSA0KSB7XG4gICAgICAgIHZhciB4ID0gaSArIHN0YXJ0XG4gICAgICAgIGluZGljZXNbeCArIDBdID0gaiArIDBcbiAgICAgICAgaW5kaWNlc1t4ICsgMV0gPSBqICsgMVxuICAgICAgICBpbmRpY2VzW3ggKyAyXSA9IGogKyAyXG4gICAgICAgIGluZGljZXNbeCArIDNdID0gaiArIGFcbiAgICAgICAgaW5kaWNlc1t4ICsgNF0gPSBqICsgYlxuICAgICAgICBpbmRpY2VzW3ggKyA1XSA9IGogKyBjXG4gICAgfVxuICAgIHJldHVybiBpbmRpY2VzXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGR0eXBlKSB7XG4gIHN3aXRjaCAoZHR5cGUpIHtcbiAgICBjYXNlICdpbnQ4JzpcbiAgICAgIHJldHVybiBJbnQ4QXJyYXlcbiAgICBjYXNlICdpbnQxNic6XG4gICAgICByZXR1cm4gSW50MTZBcnJheVxuICAgIGNhc2UgJ2ludDMyJzpcbiAgICAgIHJldHVybiBJbnQzMkFycmF5XG4gICAgY2FzZSAndWludDgnOlxuICAgICAgcmV0dXJuIFVpbnQ4QXJyYXlcbiAgICBjYXNlICd1aW50MTYnOlxuICAgICAgcmV0dXJuIFVpbnQxNkFycmF5XG4gICAgY2FzZSAndWludDMyJzpcbiAgICAgIHJldHVybiBVaW50MzJBcnJheVxuICAgIGNhc2UgJ2Zsb2F0MzInOlxuICAgICAgcmV0dXJuIEZsb2F0MzJBcnJheVxuICAgIGNhc2UgJ2Zsb2F0NjQnOlxuICAgICAgcmV0dXJuIEZsb2F0NjRBcnJheVxuICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIHJldHVybiBBcnJheVxuICAgIGNhc2UgJ3VpbnQ4X2NsYW1wZWQnOlxuICAgICAgcmV0dXJuIFVpbnQ4Q2xhbXBlZEFycmF5XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kdHlwZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuQXJyYXlcblxuZnVuY3Rpb24gYW5BcnJheShhcnIpIHtcbiAgcmV0dXJuIChcbiAgICAgICBhcnIuQllURVNfUEVSX0VMRU1FTlRcbiAgICAmJiBzdHIuY2FsbChhcnIuYnVmZmVyKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJ1xuICAgIHx8IEFycmF5LmlzQXJyYXkoYXJyKVxuICApXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYW4tYXJyYXkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtYnVmZmVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG5jbGFzcyBUZXh0TGF5b3V0IHtcclxuXHJcbiAgdGV4dCA9IFwiXCI7XHJcbiAgZm9udCA9IG51bGw7XHJcbiAgbWV0cmljcyA9IG51bGw7XHJcbiAgZm9udFNpemUgPSAyMDtcclxuICBhbGlnbiA9IFwibGVmdFwiO1xyXG4gIHN0YXJ0WCA9IDA7XHJcbiAgc3RhcnRZID0gMDtcclxuICB3cmFwcGVyV2lkdGggPSAxMDA7XHJcbiAgd3JhcFdvcmRzID0gZmFsc2U7XHJcbiAgd29yZHNNZXRyaWNzID0gW107XHJcbiAgbGV0dGVyc0NvdW50ID0gMDtcclxuICBoZWlnaHQgPSAwO1xyXG4gIGxpbmVzQ291bnQgPSAwO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IodGV4dCwgZm9udCwgY29uZmlnKSB7XHJcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xyXG4gICAgdGhpcy5mb250ID0gZm9udDtcclxuICAgIHRoaXMuZm9udFNpemUgPSBjb25maWcuZm9udFNpemU7XHJcbiAgICB0aGlzLndyYXBXb3JkcyA9IGNvbmZpZy53cmFwV29yZHM7XHJcbiAgICB0aGlzLndyYXBwZXJXaWR0aCA9IGNvbmZpZy53cmFwcGVyV2lkdGg7XHJcbiAgICB0aGlzLmFsaWduID0gY29uZmlnLmFsaWduO1xyXG4gICAgdGhpcy5sZXR0ZXJzQ291bnQgPSB0aGlzLnRleHQuc3BsaXQoXCJcIikubGVuZ3RoO1xyXG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5mb250TWV0cmljcyhmb250LCAwLjIpO1xyXG5cclxuICAgIHRoaXMuc3RhcnRZID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZVdvcmRzUG9zaXRpb25zKCk7XHJcbiAgfVxyXG5cclxuICBmb250TWV0cmljcyhmb250U2l6ZSwgbW9yZUxpbmVHYXAgPSAwLjApIHtcclxuXHJcbiAgICBjb25zdCB7Y2FwX2hlaWdodCwgeF9oZWlnaHQsIGFzY2VudDogZm9udEFzY2VudCAsIGRlc2NlbnQsIGxpbmVfZ2FwfSA9IHRoaXMuZm9udDtcclxuXHJcbiAgICBjb25zdCBjYXBTY2FsZSA9IHRoaXMuZm9udFNpemUgLyBjYXBfaGVpZ2h0O1xyXG4gICAgY29uc3QgbG93U2NhbGUgPSBNYXRoLnJvdW5kKCB4X2hlaWdodCAqIGNhcFNjYWxlICkgLyB4X2hlaWdodDtcclxuICAgIGNvbnN0IGFzY2VudCA9IE1hdGgucm91bmQoIGZvbnRBc2NlbnQgKiBjYXBTY2FsZSApO1xyXG4gICAgY29uc3QgbGluZUhlaWdodCA9IE1hdGgucm91bmQoIGNhcFNjYWxlICogKCBmb250QXNjZW50ICsgZGVzY2VudCArIGxpbmVfZ2FwICkgKyBtb3JlTGluZUdhcCApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNhcFNjYWxlICAgOiBjYXBTY2FsZSxcclxuICAgICAgbG93U2NhbGUgICA6IGxvd1NjYWxlLFxyXG4gICAgICBhc2NlbnQgICAgICA6IGFzY2VudCxcclxuICAgICAgbGluZUhlaWdodCA6IGxpbmVIZWlnaHRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjaGFyUmVjdCggcG9zLCBmb250X2NoYXIsIGtlcm4gPSAwLjAgKSB7XHJcblxyXG4gICAgY29uc3Qge2FzY2VudCwgbG93U2NhbGUsIGNhcFNjYWxlfSA9IHRoaXMubWV0cmljcztcclxuXHJcblxyXG4gICAgY29uc3QgeyBkZXNjZW50LCByb3dfaGVpZ2h0LCBpeSwgaXggfSA9IHRoaXMuZm9udDtcclxuXHJcbiAgICBjb25zdCB7ZmxhZ3MsIGJlYXJpbmdfeCwgYWR2YW5jZV94LCByZWN0IH0gPSBmb250X2NoYXI7XHJcblxyXG4gICAgLy8gTG93IGNhc2UgY2hhcmFjdGVycyBoYXZlIGZpcnN0IGJpdCBzZXQgaW4gJ2ZsYWdzJ1xyXG4gICAgdmFyIGxvd0Nhc2UgPSAoIGZsYWdzICYgMSApID09PSAxO1xyXG5cclxuICAgIC8vIFBlbiBwb3NpdGlvbiBpcyBhdCB0aGUgdG9wIG9mIHRoZSBsaW5lLCBZIGdvZXMgdXBcclxuICAgIHZhciBiYXNlbGluZSA9IHBvc1sxXSAtIGFzY2VudDtcclxuXHJcbiAgICAvLyBMb3cgY2FzZSBjaGFycyB1c2UgdGhlaXIgb3duIHNjYWxlXHJcbiAgICB2YXIgc2NhbGUgPSBsb3dDYXNlID8gbG93U2NhbGUgOiBjYXBTY2FsZTtcclxuXHJcblxyXG4gICAgLy8gTGF5aW5nIG91dCB0aGUgZ2x5cGggcmVjdGFuZ2xlXHJcbiAgICB2YXIgZyAgICAgID0gcmVjdDtcclxuICAgIHZhciBib3R0b20gPSBiYXNlbGluZSAtIHNjYWxlICogKCBkZXNjZW50ICsgaXkgKTtcclxuICAgIHZhciB0b3AgICAgPSBib3R0b20gICArIHNjYWxlICogKCByb3dfaGVpZ2h0ICk7XHJcbiAgICB2YXIgbGVmdCAgID0gcG9zWzBdICAgKyBzY2FsZSAqICggYmVhcmluZ194ICsga2VybiAtIGl4ICk7XHJcbiAgICB2YXIgcmlnaHQgID0gbGVmdCAgICAgKyBzY2FsZSAqICggZ1syXSAtIGdbMF0gKTtcclxuICAgIHZhciBwID0gWyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20gXTtcclxuXHJcbiAgICAvLyBBZHZhbmNpbmcgcGVuIHBvc2l0aW9uXHJcbiAgICB2YXIgbmV3X3Bvc194ID0gcG9zWzBdICsgc2NhbGUgKiAoIGFkdmFuY2VfeCApO1xyXG5cclxuICAgIC8vIFNpZ25lZCBkaXN0YW5jZSBmaWVsZCBzaXplIGluIHNjcmVlbiBwaXhlbHNcclxuICAgIHZhciBzZGZfc2l6ZSAgPSAyLjAgKiBpeSAqIHNjYWxlO1xyXG5cclxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcclxuICAgICAgcFswXSwgcFszXSwgLy8gbGVmdCBib3R0b20sXHJcbiAgICAgIHBbMl0sIHBbM10sIC8vIHJpZ2h0IGJvdHRvbSxcclxuICAgICAgcFsyXSwgcFsxXSwgLy8gcmlnaHQgdG9wXHJcbiAgICAgIHBbMF0sIHBbMV0sIC8vIGxlZnQgdG9wXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IHV2cyA9IFtcclxuICAgICAgZ1swXSwgZ1sxXSwgLy8gbGVmdCB0b3BcclxuICAgICAgZ1syXSwgZ1sxXSwgLy8gcmlnaHQgdG9wXHJcbiAgICAgIGdbMl0sIGdbM10sIC8vIHJpZ2h0IGJvdHRvbSxcclxuICAgICAgZ1swXSwgZ1szXSwgLy8gbGVmdCBib3R0b20sXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IHNkZlNpemVzID0gW1xyXG4gICAgICBzZGZfc2l6ZSxcclxuICAgICAgc2RmX3NpemUsXHJcbiAgICAgIHNkZl9zaXplLFxyXG4gICAgICBzZGZfc2l6ZSxcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcG9zaXRpb25zLFxyXG4gICAgICB1dnMsXHJcbiAgICAgIHNkZlNpemVzLFxyXG4gICAgICBwb3M6IFsgbmV3X3Bvc194LCBwb3NbMV0gXVxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGdldFN0cmluZ1NpemUoc3RyaW5nKSB7XHJcblxyXG4gICAgbGV0IHdpZHRoID0gMDtcclxuICAgIGxldCBoZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcclxuXHJcbiAgICBjb25zdCBjaGFycyA9IFsuLi5zdHJpbmddO1xyXG5cclxuICAgIC8vIEl0ZXJhdGUgdGhvdWdodCB0aGUgY2hhcnMsIGNhbGN1bGF0ZSBwb3NpdGlvblxyXG4gICAgY2hhcnMuZm9yRWFjaChjaGFyID0+IHtcclxuICAgICAgbGV0IGZvbnRfY2hhciA9IHRoaXMuZm9udC5jaGFyc1sgY2hhciBdO1xyXG5cclxuICAgICAgaWYgKGNoYXIgPT09IFwiIFwiKSB7XHJcbiAgICAgICAgd2lkdGggKz0gdGhpcy5mb250LnNwYWNlX2FkdmFuY2UgKiB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAvLyBHZXQgY2hhciBtZXRyaWNzXHJcbiAgICAgIGxldCBjaGFyUmVjdCA9IHRoaXMuY2hhclJlY3QoW3dpZHRoLDBdLCBmb250X2NoYXIsIDAuMik7XHJcbiAgICAgIHdpZHRoID0gY2hhclJlY3QucG9zWzBdO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7d2lkdGgsIGhlaWdodH07XHJcblxyXG4gIH1cclxuXHJcbiAgY2FsY3VsYXRlV29yZHNQb3NpdGlvbnMoKSB7XHJcblxyXG4gICAgY29uc3Qgd29yZHMgPSB0aGlzLnRleHQuc3BsaXQoXCIgXCIpO1xyXG4gICAgdGhpcy53b3Jkc01ldHJpY3MgPSBbXTtcclxuXHJcbiAgICAvLyBJbml0aWFsIHBvc2l0aW9uXHJcbiAgICBsZXQgeCA9IHRoaXMuc3RhcnRYO1xyXG4gICAgbGV0IHkgPSB0aGlzLnN0YXJ0WTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgd29yZHMgcG9zaXRpb25zIG9uIGxpbmVzXHJcbiAgICB3b3Jkcy5mb3JFYWNoKHdvcmQgPT4ge1xyXG4gICAgICBjb25zdCB3b3JkU2l6ZSA9IHRoaXMuZ2V0U3RyaW5nU2l6ZSh3b3JkKTtcclxuICAgICAgaWYgKHggKyB3b3JkU2l6ZS53aWR0aCA+IHRoaXMuc3RhcnRYICsgdGhpcy53cmFwcGVyV2lkdGggJiYgdGhpcy53cmFwV29yZHMpIHtcclxuICAgICAgICB4ID0gdGhpcy5zdGFydFg7XHJcbiAgICAgICAgeSArPSB3b3JkU2l6ZS5oZWlnaHQ7XHJcbiAgICAgIH1cclxuICAgICAgdGhpcy53b3Jkc01ldHJpY3MucHVzaCh7Li4ud29yZFNpemUsIHgsIHksIHdvcmR9KTtcclxuICAgICAgeCArPSB3b3JkU2l6ZS53aWR0aCArIHRoaXMuZm9udC5zcGFjZV9hZHZhbmNlICogdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIGxpbmVzIGNvdW50XHJcbiAgICB0aGlzLmxpbmVzQ291bnQgPSAoeSAtIHRoaXMuc3RhcnRZKSAvIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgMTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5saW5lc0NvdW50ICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XHJcblxyXG5cclxuICAgIC8vIENoYW5nZSBhbGlnbiBUT0RPIG9wdGltaXNlXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGluZXNDb3VudDsgKytpKSB7XHJcbiAgICAgIGNvbnN0IHdvcmRzT25MaW5lID0gdGhpcy53b3Jkc01ldHJpY3MuZmlsdGVyKHdvcmQgPT4gd29yZC55ID09PSB0aGlzLnN0YXJ0WSArIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQpKVxyXG5cclxuICAgICAgY29uc3QgbGFzdFdvcmQgPSB3b3Jkc09uTGluZVt3b3Jkc09uTGluZS5sZW5ndGggLSAxXTtcclxuICAgICAgY29uc3QgZnJlZVNwYWNlID0gKHRoaXMuc3RhcnRYICsgdGhpcy53cmFwcGVyV2lkdGgpIC0gKGxhc3RXb3JkLnggKyBsYXN0V29yZC53aWR0aCk7XHJcblxyXG4gICAgICBsZXQgbGVmdE9mZnNldCA9IDA7XHJcblxyXG4gICAgICBzd2l0Y2ggKHRoaXMuYWxpZ24pIHtcclxuICAgICAgICBjYXNlIFwiY2VudGVyXCI6XHJcbiAgICAgICAgICBsZWZ0T2Zmc2V0ID0gZnJlZVNwYWNlIC8gMjtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGNhc2UgXCJyaWdodFwiOlxyXG4gICAgICAgICAgbGVmdE9mZnNldCA9IGZyZWVTcGFjZTtcclxuICAgICAgICAgIGJyZWFrO1xyXG4gICAgICB9XHJcbiAgICAgIHRoaXMud29yZHNNZXRyaWNzLmZvckVhY2god29yZCA9PiB7XHJcbiAgICAgICAgaWYgKHdvcmQueSA9PT0gdGhpcy5zdGFydFkgKyAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSkge1xyXG4gICAgICAgICAgd29yZC54ICs9IGxlZnRPZmZzZXQ7XHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dExheW91dDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xheW91dC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjMiBhVGV4dHVyZUNvb3JkO1xcbmF0dHJpYnV0ZSBmbG9hdCBhU2RmU2l6ZTtcXG5cXG51bmlmb3JtIG1hdDMgdHJhbnNsYXRpb25NYXRyaXg7XFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb25NYXRyaXg7XFxudW5pZm9ybSBtYXQzIHRyYW5zZm9ybTtcXG5cXG5cXG52YXJ5aW5nIHZlYzIgIHRjMDtcXG52YXJ5aW5nIGZsb2F0IGRvZmZzZXQ7XFxudmFyeWluZyBmbG9hdCBzZGZfdGV4ZWw7XFxuXFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG5cXG4gICAgLy9UT0RPIE1BS0UgQVRUUklCVVRFXFxuICAgIGZsb2F0IHNkZl9zaXplID0gYVNkZlNpemU7XFxuXFxuICAgIC8vVE9ETyBNQUtFIFVOSUZPUk1TXFxuICAgIGZsb2F0IHNkZl90ZXhfc2l6ZSA9IDEwMjQuMDtcXG5cXG5cXG4gICAgdGMwID0gYVRleHR1cmVDb29yZDtcXG4gICAgZG9mZnNldCA9IDEuMCAvIHNkZl9zaXplOyAgICAgICAvLyBEaXN0YW5jZSBmaWVsZCBkZWx0YSBmb3Igb25lIHNjcmVlbiBwaXhlbFxcbiAgICBzZGZfdGV4ZWwgPSAxLjAgLyBzZGZfdGV4X3NpemU7XFxuXFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNCgocHJvamVjdGlvbk1hdHJpeCAqIHRyYW5zbGF0aW9uTWF0cml4ICogdmVjMyhhVmVydGV4UG9zaXRpb24gLCAxLjApKS54eSwgMC4wLCAxLjApO1xcblxcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvdmVydC5nbHNsXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbnVuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyO1xcbnVuaWZvcm0gZmxvYXQgaGludF9hbW91bnQ7XFxudW5pZm9ybSBmbG9hdCBzdWJwaXhlbF9hbW91bnQ7XFxuXFxudW5pZm9ybSB2ZWMzIGJnX2NvbG9yO1xcbnVuaWZvcm0gdmVjMyBmb250X2NvbG9yO1xcblxcbnZhcnlpbmcgdmVjMiAgdGMwO1xcbnZhcnlpbmcgZmxvYXQgZG9mZnNldDtcXG52YXJ5aW5nIGZsb2F0IHNkZl90ZXhlbDtcXG5cXG5cXG4vKlxcbiAqICBTdWJwaXhlbCBjb3ZlcmFnZSBjYWxjdWxhdGlvblxcbiAqXFxuICogIHYgLSBlZGdlIHNsb3BlICAgIC0xLjAgdG8gMS4wICAgICAgICAgIHRyaXBsZXRcXG4gKiAgYSAtIHBpeGVsIGNvdmVyYWdlIDAuMCB0byAxLjAgICAgICAgICAgY292ZXJhZ2VcXG4gKlxcbiAqICAgICAgfDwtIGdseXBoIGVkZ2UgICAgICAgICAgICAgICAgICAgICAgUiAgRyAgQlxcbiAqICArLS0tKy0tLSsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLSstLSstLStcXG4gKiAgfCAgIHxYWFh8IHYgPSAxLjAgKGVkZ2UgZmFjaW5nIHdlc3QpICB8ICB8eHh8WFh8XFxuICogIHwgICB8WFhYfCBhID0gMC41ICg1MCUgY292ZXJhZ2UpICAgICAgfCAgfHh4fFhYfFxcbiAqICB8ICAgfFhYWHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHx4eHxYWHxcXG4gKiAgKy0tLSstLS0rICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0rLS0rLS0rXFxuICogICAgcGl4ZWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgIDUwIDEwMFxcbiAqXFxuICpcXG4gKiAgICAgICAgUiAgIEcgICBCXFxuICpcXG4gKiAgIDEuMCAgICAgICAgKy0tKyAgIDwtIHRvcCAoYWJzKCB2ICkpXFxuICogICAgICAgICAgICAgIHxcXG4gKiAgICAgICAtKy0tLS0tKy0tKy0tIDwtIGNlaWw6IDEwMCUgY292ZXJhZ2VcXG4gKiAgICAgICAgfCAgICAgfFhYfFxcbiAqICAgMC4wICB8ICArLS0rWFh8XFxuICogICAgICAgIHwgIHx4eHxYWHxcXG4gKiAgICAgICAtKy0tKy0tKy0tKy0tIDwtIGZsb29yOiAwJSBjb3ZlcmFnZVxcbiAqICAgICAgICAgICB8XFxuICogIC0xLjAgICstLSsgICAgICAgICA8LSAgLWFicyh2KVxcbiAqICAgICAgICB8XFxuICogICAgICAgIHxcXG4gKiAgICAgICAgfFxcbiAqICAtMi4wICArICAgICAgICAgICAgPC0gYm90dG9tOiAtYWJzKHYpLTEuMFxcbiAqL1xcblxcbnZlYzMgc3VicGl4ZWwoIGZsb2F0IHYsIGZsb2F0IGEgKSB7XFxuICAgIGZsb2F0IHZ0ICAgICAgPSAwLjYgKiB2OyAvLyAxLjAgd2lsbCBtYWtlIHlvdXIgZXllcyBibGVlZFxcbiAgICB2ZWMzICByZ2JfbWF4ID0gdmVjMyggLXZ0LCAwLjAsIHZ0ICk7XFxuICAgIGZsb2F0IHRvcCAgICAgPSBhYnMoIHZ0ICk7XFxuICAgIGZsb2F0IGJvdHRvbSAgPSAtdG9wIC0gMS4wO1xcbiAgICBmbG9hdCBjZmxvb3IgID0gbWl4KCB0b3AsIGJvdHRvbSwgYSApO1xcbiAgICB2ZWMzICByZXMgICAgID0gY2xhbXAoIHJnYl9tYXggLSB2ZWMzKCBjZmxvb3IgKSwgMC4wLCAxLjAgKTtcXG4gICAgcmV0dXJuIHJlcztcXG59XFxuXFxudm9pZCBtYWluMigpIHtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHVTYW1wbGVyLCB0YzApO1xcbn1cXG5cXG52b2lkIG1haW4odm9pZCkge1xcblxcbiAgICAvLyBTYW1wbGluZyB0aGUgdGV4dHVyZSwgTCBwYXR0ZXJuXFxuICAgIGZsb2F0IHNkZiAgICAgICA9IHRleHR1cmUyRCggdVNhbXBsZXIsIHRjMCApLnI7XFxuICAgIGZsb2F0IHNkZl9ub3J0aCA9IHRleHR1cmUyRCggdVNhbXBsZXIsIHRjMCArIHZlYzIoIDAuMCwgc2RmX3RleGVsICkgKS5yO1xcbiAgICBmbG9hdCBzZGZfZWFzdCAgPSB0ZXh0dXJlMkQoIHVTYW1wbGVyLCB0YzAgKyB2ZWMyKCBzZGZfdGV4ZWwsIDAuMCApICkucjtcXG5cXG4gICAgLy8gRXN0aW1hdGluZyBzdHJva2UgZGlyZWN0aW9uIGJ5IHRoZSBkaXN0YW5jZSBmaWVsZCBncmFkaWVudCB2ZWN0b3JcXG4gICAgdmVjMiAgc2dyYWQgICAgID0gdmVjMiggc2RmX2Vhc3QgLSBzZGYsIHNkZl9ub3J0aCAtIHNkZiApO1xcbiAgICBmbG9hdCBzZ3JhZF9sZW4gPSBtYXgoIGxlbmd0aCggc2dyYWQgKSwgMS4wIC8gMTI4LjAgKTtcXG4gICAgdmVjMiAgZ3JhZCAgICAgID0gc2dyYWQgLyB2ZWMyKCBzZ3JhZF9sZW4gKTtcXG4gICAgZmxvYXQgdmdyYWQgPSBhYnMoIGdyYWQueSApOyAvLyAwLjAgLSB2ZXJ0aWNhbCBzdHJva2UsIDEuMCAtIGhvcml6b250YWwgb25lXFxuXFxuICAgIGZsb2F0IGhvcnpfc2NhbGUgID0gMS4xOyAvLyBCbHVycmluZyB2ZXJ0aWNhbCBzdHJva2VzIGFsb25nIHRoZSBYIGF4aXMgYSBiaXRcXG4gICAgZmxvYXQgdmVydF9zY2FsZSAgPSAwLjY7IC8vIFdoaWxlIGFkZGluZyBzb21lIGNvbnRyYXN0IHRvIHRoZSBob3Jpem9udGFsIHN0cm9rZXNcXG4gICAgZmxvYXQgaGRvZmZzZXQgICAgPSBtaXgoIGRvZmZzZXQgKiBob3J6X3NjYWxlLCBkb2Zmc2V0ICogdmVydF9zY2FsZSwgdmdyYWQgKTtcXG4gICAgZmxvYXQgcmVzX2RvZmZzZXQgPSBtaXgoIGRvZmZzZXQsIGhkb2Zmc2V0LCBoaW50X2Ftb3VudCApO1xcblxcbiAgICBmbG9hdCBhbHBoYSAgICAgICA9IHNtb290aHN0ZXAoIDAuNSAtIHJlc19kb2Zmc2V0LCAwLjUgKyByZXNfZG9mZnNldCwgc2RmICk7XFxuXFxuICAgIC8vIEFkZGl0aW9uYWwgY29udHJhc3RcXG4gICAgYWxwaGEgICAgICAgICAgICAgPSBwb3coIGFscGhhLCAxLjAgKyAwLjIgKiB2Z3JhZCAqIGhpbnRfYW1vdW50ICk7XFxuXFxuICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gc3VwcG9ydCBmb3IgQVJCX2JsZW5kX2Z1bmNfZXh0ZW5kZWQgaW4gV2ViR0wuXFxuICAgIC8vIEZvcnR1bmF0ZWx5IHRoZSBiYWNrZ3JvdW5kIGlzIGZpbGxlZCB3aXRoIGEgc29saWQgY29sb3Igc28gd2UgY2FuIGRvXFxuICAgIC8vIHRoZSBibGVuZGluZyBpbnNpZGUgdGhlIHNoYWRlci5cXG5cXG4gICAgLy8gRGlzY2FyZGluZyBwaXhlbHMgYmV5b25kIGEgdGhyZXNob2xkIHRvIG1pbmltaXNlIHBvc3NpYmxlIGFydGlmYWN0cy5cXG4gICAgaWYgKCBhbHBoYSA8IDIwLjAgLyAyNTYuMCApIGRpc2NhcmQ7XFxuXFxuICAgIHZlYzMgY2hhbm5lbHMgPSBzdWJwaXhlbCggZ3JhZC54ICogMC41ICogc3VicGl4ZWxfYW1vdW50LCBhbHBoYSApICsgMC4xO1xcblxcbiAgICAvLyBGb3Igc3VicGl4ZWwgcmVuZGVyaW5nIHdlIGhhdmUgdG8gYmxlbmQgZWFjaCBjb2xvciBjaGFubmVsIHNlcGFyYXRlbHlcXG4gICAgdmVjMyByZXMgPSBtaXgoIGJnX2NvbG9yLCBmb250X2NvbG9yLCBjaGFubmVscyApO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KCByZXMsIDEuMCApO1xcbn1cXG5cXG5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvZnJhZy5nbHNsXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=