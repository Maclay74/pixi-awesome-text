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
	
	var AwesomeText = __webpack_require__(1);
	
	var vertexShader = __webpack_require__(7);
	
	var fragmentShader = __webpack_require__(8);
	
	import { ObjectRenderer, glCore } from 'pixi.js'; //const glCore = PIXI.glCore;
	
	var AwesomeTextRenderer =
	/*#__PURE__*/
	function (_ObjectRenderer) {
	  _inherits(AwesomeTextRenderer, _ObjectRenderer);
	
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
	}(ObjectRenderer);
	
	_defineProperty(AwesomeTextRenderer, "scale", 1.0);
	
	PIXI.WebGLRenderer.registerPlugin('AwesomeTextRenderer', AwesomeTextRenderer);
	Object.assign(PIXI.extras, {
	  AwesomeText: AwesomeText
	});
	export default AwesomeText;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
	
	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
	
	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
	
	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
	
	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
	
	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
	
	var createIndices = __webpack_require__(2);
	
	var TextLayout = __webpack_require__(6);
	
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
	
	      this.layout = new TextLayout(this.text, this.font, {
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
	}(PIXI.mesh.Mesh);
	
	AwesomeText.scale = 1.0;
	export default AwesomeText;

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
	
	export default TextLayout;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMTNhNTNlYjdhZDRhZWJlNjc2MWEiLCJ3ZWJwYWNrOi8vLy4vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vdGV4dC5qcyIsIndlYnBhY2s6Ly8vLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2R0eXBlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYW4tYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NoYWRlcnMvdmVydC5nbHNsIiwid2VicGFjazovLy8uL3NoYWRlcnMvZnJhZy5nbHNsIl0sIm5hbWVzIjpbIkF3ZXNvbWVUZXh0IiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJPYmplY3RSZW5kZXJlciIsImdsQ29yZSIsIkF3ZXNvbWVUZXh0UmVuZGVyZXIiLCJyZW5kZXJlciIsInNoYWRlciIsImdsIiwiZ2V0RXh0ZW5zaW9uIiwiUElYSSIsIlNoYWRlciIsImF3ZXNvbWVUZXh0Iiwic3R5bGVJRCIsInN0eWxlIiwidXBkYXRlIiwidGV4dHVyZSIsImdsRGF0YSIsIl9nbERhdGFzIiwiQ09OVEVYVF9VSUQiLCJiaW5kVmFvIiwiYnVpbGRHbERhdGEiLCJ2YW8iLCJkaXJ0eSIsInV2QnVmZmVyIiwidXBsb2FkIiwidXZzIiwiaW5kZXhEaXJ0eSIsImluZGV4QnVmZmVyIiwiaW5kaWNlcyIsInZlcnRleEJ1ZmZlciIsInZlcnRpY2VzIiwiYmluZFNoYWRlciIsInN0YXRlIiwic2V0QmxlbmRNb2RlIiwiYmxlbmRNb2RlIiwidW5pZm9ybXMiLCJ1U2FtcGxlciIsImJpbmRUZXh0dXJlIiwidHJhbnNsYXRpb25NYXRyaXgiLCJ3b3JsZFRyYW5zZm9ybSIsInRvQXJyYXkiLCJoaW50X2Ftb3VudCIsInN1YnBpeGVsX2Ftb3VudCIsImZvbnRfY29sb3IiLCJ1dGlscyIsImhleDJyZ2IiLCJmaWxsIiwicmVwbGFjZSIsImJnX2NvbG9yIiwiYmFja2dyb3VuZENvbG9yIiwiZHJhd01vZGUiLCJUUklBTkdMRVMiLCJkcmF3IiwibGVuZ3RoIiwiR0xCdWZmZXIiLCJjcmVhdGVWZXJ0ZXhCdWZmZXIiLCJTVFJFQU1fRFJBVyIsInNkZkJ1ZmZlciIsInNkZlNpemVzIiwiU1RBVElDX0RSQVciLCJjcmVhdGVJbmRleEJ1ZmZlciIsIlZlcnRleEFycmF5T2JqZWN0IiwiYWRkSW5kZXgiLCJhZGRBdHRyaWJ1dGUiLCJhdHRyaWJ1dGVzIiwiYVZlcnRleFBvc2l0aW9uIiwiRkxPQVQiLCJhVGV4dHVyZUNvb3JkIiwiYVNkZlNpemUiLCJXZWJHTFJlbmRlcmVyIiwicmVnaXN0ZXJQbHVnaW4iLCJPYmplY3QiLCJhc3NpZ24iLCJleHRyYXMiLCJjcmVhdGVJbmRpY2VzIiwiVGV4dExheW91dCIsInRleHQiLCJmb250IiwiVGV4dFN0eWxlIiwiX3RleHQiLCJfZm9udCIsIl90ZXh0dXJlIiwicGx1Z2luTmFtZSIsImxheW91dCIsImZvbnRTaXplIiwid3JhcFdvcmRzIiwiYnJlYWtXb3JkcyIsIndyYXBwZXJXaWR0aCIsIndvcmRXcmFwV2lkdGgiLCJhbGlnbiIsImxpbmVIZWlnaHQiLCJtZXRyaWNzIiwiZm9udE1ldHJpY3MiLCJGbG9hdDMyQXJyYXkiLCJsZXR0ZXJzQ291bnQiLCJhcnJheVBvc2l0aW9ucyIsInZlcnRleCIsInNkZiIsIndvcmRzTWV0cmljcyIsImZvckVhY2giLCJ3b3JkIiwid3JpdGVTdHJpbmciLCJ4IiwieSIsImNsb2Nrd2lzZSIsInR5cGUiLCJjb3VudCIsInN0cmluZyIsImZvbnRfbWV0cmljcyIsInBvcyIsInByZXZfY2hhciIsImNwb3MiLCJ4X21heCIsInNjYWxlIiwiY2FwX3NjYWxlIiwic3RyX3BvcyIsInNjaGFyIiwibGluZV9oZWlnaHQiLCJzcGFjZV9hZHZhbmNlIiwiZm9udF9jaGFyIiwiY2hhcnMiLCJrZXJuIiwicmVjdCIsImNoYXJSZWN0IiwicG9zaXRpb25zIiwibWFwIiwidXYiLCJzdHJpbmdfcG9zIiwicGl4ZWxfc2l6ZSIsIm1vcmVfbGluZV9nYXAiLCJjYXBfaGVpZ2h0IiwibG93X3NjYWxlIiwiTWF0aCIsInJvdW5kIiwieF9oZWlnaHQiLCJhc2NlbnQiLCJkZXNjZW50IiwibGluZV9nYXAiLCJsb3djYXNlIiwiZmxhZ3MiLCJiYXNlbGluZSIsImciLCJib3R0b20iLCJpeSIsInRvcCIsInJvd19oZWlnaHQiLCJsZWZ0IiwiYmVhcmluZ194IiwiaXgiLCJyaWdodCIsInAiLCJuZXdfcG9zX3giLCJhZHZhbmNlX3giLCJzZGZfc2l6ZSIsInZhbHVlIiwibWVzaCIsIk1lc2giLCJjb25maWciLCJzcGxpdCIsInN0YXJ0WSIsImNhbGN1bGF0ZVdvcmRzUG9zaXRpb25zIiwibW9yZUxpbmVHYXAiLCJmb250QXNjZW50IiwiY2FwU2NhbGUiLCJsb3dTY2FsZSIsImxvd0Nhc2UiLCJ3aWR0aCIsImhlaWdodCIsImNoYXIiLCJ3b3JkcyIsInN0YXJ0WCIsIndvcmRTaXplIiwiZ2V0U3RyaW5nU2l6ZSIsInB1c2giLCJsaW5lc0NvdW50IiwiaSIsIndvcmRzT25MaW5lIiwiZmlsdGVyIiwibGFzdFdvcmQiLCJmcmVlU3BhY2UiLCJsZWZ0T2Zmc2V0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBLEtBQU1BLFdBQVcsR0FBRyxtQkFBTyxDQUFDLENBQUQsQ0FBM0I7O0FBQ0EsS0FBTUMsWUFBWSxHQUFHLG1CQUFPLENBQUMsQ0FBRCxDQUE1Qjs7QUFDQSxLQUFNQyxjQUFjLEdBQUcsbUJBQU8sQ0FBQyxDQUFE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QUFnQkEsQ0FBQyxHQUFHLEtBQUtELFVBQXpCLEVBQXFDLEVBQUVDLENBQXZDLEVBQTBDO0FBQUEsZUFBakNBLENBQWlDO0FBcUJ6QztBQUVGOzs7Ozs7QUFLSCxnQkFBZXBHLFVBQWYsQzs7Ozs7O0FDcE1BLHFFQUFvRSwrQkFBK0IsMkJBQTJCLG1DQUFtQyxnQ0FBZ0MseUJBQXlCLHdCQUF3Qix3QkFBd0IsMEJBQTBCLHVCQUF1Qiw2REFBNkQsOERBQThELDhCQUE4QiwrQkFBK0Isd0ZBQXdGLDhHQUE4RyxLQUFLLEc7Ozs7OztBQ0E5ckIsaUVBQWdFLDRCQUE0QixnQ0FBZ0MsMEJBQTBCLDBCQUEwQixzQkFBc0Isd0JBQXdCLDBCQUEwQix3OEJBQXc4Qiw4QkFBOEIsNEVBQTRFLGdDQUFnQyxpQ0FBaUMsNENBQTRDLGtFQUFrRSxpQkFBaUIsR0FBRyxrQkFBa0IsOENBQThDLEdBQUcscUJBQXFCLCtGQUErRiw4RUFBOEUsOEVBQThFLDRJQUE0SSw0REFBNEQsa0RBQWtELGtDQUFrQywrRUFBK0Usa0ZBQWtGLDJJQUEySSxnRUFBZ0Usb0ZBQW9GLHNHQUFzRyxnVUFBZ1UsZ0ZBQWdGLHVJQUF1SSxzQ0FBc0MsR0FBRyxPIiwiZmlsZSI6InBpeGktYXdlc29tZS10ZXh0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMTNhNTNlYjdhZDRhZWJlNjc2MWEiLCJjb25zdCBBd2Vzb21lVGV4dCA9IHJlcXVpcmUoXCIuL3RleHRcIik7XG5jb25zdCB2ZXJ0ZXhTaGFkZXIgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3ZlcnQuZ2xzbFwiKTtcbmNvbnN0IGZyYWdtZW50U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy9mcmFnLmdsc2xcIik7XG5cbmltcG9ydCB7IE9iamVjdFJlbmRlcmVyLCBnbENvcmUgfSBmcm9tICdwaXhpLmpzJ1xuXG4vL2NvbnN0IGdsQ29yZSA9IFBJWEkuZ2xDb3JlO1xuXG5jbGFzcyBBd2Vzb21lVGV4dFJlbmRlcmVyIGV4dGVuZHMgT2JqZWN0UmVuZGVyZXIge1xuXG4gIHN0YXRpYyBzY2FsZSA9IDEuMFxuXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XG4gICAgc3VwZXIocmVuZGVyZXIpO1xuICAgIHRoaXMuc2hhZGVyID0gbnVsbDtcblxuICB9XG5cbiAgb25Db250ZXh0Q2hhbmdlKCkge1xuICAgIGNvbnN0IGdsID0gdGhpcy5yZW5kZXJlci5nbDtcbiAgICBnbC5nZXRFeHRlbnNpb24oXCJPRVNfc3RhbmRhcmRfZGVyaXZhdGl2ZXNcIik7XG4gICAgdGhpcy5zaGFkZXIgPSBuZXcgUElYSS5TaGFkZXIoZ2wsIHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xuICB9XG5cbiAgcmVuZGVyKGF3ZXNvbWVUZXh0KSB7XG5cbiAgICBpZiAoYXdlc29tZVRleHQuc3R5bGVJRCAhPT0gYXdlc29tZVRleHQuc3R5bGUuc3R5bGVJRCkge1xuICAgICAgYXdlc29tZVRleHQudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVuZGVyZXIgPSB0aGlzLnJlbmRlcmVyO1xuICAgIGNvbnN0IGdsID0gcmVuZGVyZXIuZ2w7XG4gICAgY29uc3QgdGV4dHVyZSA9IGF3ZXNvbWVUZXh0LnRleHR1cmU7XG5cbiAgICBsZXQgZ2xEYXRhID0gYXdlc29tZVRleHQuX2dsRGF0YXNbcmVuZGVyZXIuQ09OVEVYVF9VSURdO1xuXG4gICAgaWYgKCFnbERhdGEpIHtcbiAgICAgIHJlbmRlcmVyLmJpbmRWYW8obnVsbCk7XG4gICAgICBnbERhdGEgPSB0aGlzLmJ1aWxkR2xEYXRhKGF3ZXNvbWVUZXh0LCBnbCk7XG4gICAgfVxuXG4gICAgcmVuZGVyZXIuYmluZFZhbyhnbERhdGEudmFvKTtcblxuICAgIGlmIChhd2Vzb21lVGV4dC5kaXJ0eSAhPT0gZ2xEYXRhLmRpcnR5KSB7XG4gICAgICBnbERhdGEuZGlydHkgPSBhd2Vzb21lVGV4dC5kaXJ0eTtcbiAgICAgIGdsRGF0YS51dkJ1ZmZlci51cGxvYWQoYXdlc29tZVRleHQudXZzKTtcbiAgICB9XG5cbiAgICBpZiAoYXdlc29tZVRleHQuaW5kZXhEaXJ0eSAhPT0gZ2xEYXRhLmluZGV4RGlydHkpIHtcbiAgICAgIGdsRGF0YS5pbmRleERpcnR5ID0gYXdlc29tZVRleHQuaW5kZXhEaXJ0eTtcbiAgICAgIGdsRGF0YS5pbmRleEJ1ZmZlci51cGxvYWQoYXdlc29tZVRleHQuaW5kaWNlcyk7XG4gICAgfVxuXG4gICAgZ2xEYXRhLnZlcnRleEJ1ZmZlci51cGxvYWQoYXdlc29tZVRleHQudmVydGljZXMpO1xuICAgIHJlbmRlcmVyLmJpbmRTaGFkZXIoZ2xEYXRhLnNoYWRlcik7XG5cbiAgICByZW5kZXJlci5zdGF0ZS5zZXRCbGVuZE1vZGUoYXdlc29tZVRleHQuYmxlbmRNb2RlKTtcblxuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMudVNhbXBsZXIgPSByZW5kZXJlci5iaW5kVGV4dHVyZSh0ZXh0dXJlKTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnRyYW5zbGF0aW9uTWF0cml4ID0gYXdlc29tZVRleHQud29ybGRUcmFuc2Zvcm0udG9BcnJheSh0cnVlKTtcblxuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuaGludF9hbW91bnQgPSAxLjA7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5zdWJwaXhlbF9hbW91bnQgPSAxLjA7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5mb250X2NvbG9yID0gUElYSS51dGlscy5oZXgycmdiKGF3ZXNvbWVUZXh0LnN0eWxlLmZpbGwucmVwbGFjZShcIiNcIiwgXCIweFwiKSk7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5iZ19jb2xvciA9IFBJWEkudXRpbHMuaGV4MnJnYihhd2Vzb21lVGV4dC5iYWNrZ3JvdW5kQ29sb3IucmVwbGFjZShcIiNcIiwgXCIweFwiKSk7XG5cbiAgICBjb25zdCBkcmF3TW9kZSA9IGF3ZXNvbWVUZXh0LmRyYXdNb2RlID0gZ2wuVFJJQU5HTEVTO1xuICAgIGdsRGF0YS52YW8uZHJhdyhkcmF3TW9kZSwgYXdlc29tZVRleHQuaW5kaWNlcy5sZW5ndGgsIDApO1xuICB9XG5cbiAgYnVpbGRHbERhdGEoYXdlc29tZVRleHQsIGdsKSB7XG5cbiAgICBjb25zdCBnbERhdGEgPSB7XG4gICAgICBzaGFkZXI6IHRoaXMuc2hhZGVyLFxuICAgICAgdmVydGV4QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlVmVydGV4QnVmZmVyKGdsLCBhd2Vzb21lVGV4dC52ZXJ0aWNlcywgZ2wuU1RSRUFNX0RSQVcpLFxuICAgICAgdXZCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoZ2wsIGF3ZXNvbWVUZXh0LnV2cywgZ2wuU1RSRUFNX0RSQVcpLFxuICAgICAgc2RmQnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlVmVydGV4QnVmZmVyKGdsLCBhd2Vzb21lVGV4dC5zZGZTaXplcywgZ2wuU1RBVElDX0RSQVcpLFxuICAgICAgaW5kZXhCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVJbmRleEJ1ZmZlcihnbCwgYXdlc29tZVRleHQuaW5kaWNlcywgZ2wuU1RBVElDX0RSQVcpLFxuICAgICAgLy8gYnVpbGQgdGhlIHZhbyBvYmplY3QgdGhhdCB3aWxsIHJlbmRlci4uXG4gICAgICB2YW86IG51bGwsXG4gICAgICBkaXJ0eTogYXdlc29tZVRleHQuZGlydHksXG4gICAgICBpbmRleERpcnR5OiBhd2Vzb21lVGV4dC5pbmRleERpcnR5LFxuICAgIH07XG5cbiAgICBnbERhdGEudmFvID0gbmV3IGdsQ29yZS5WZXJ0ZXhBcnJheU9iamVjdChnbClcbiAgICAgIC5hZGRJbmRleChnbERhdGEuaW5kZXhCdWZmZXIpXG4gICAgICAuYWRkQXR0cmlidXRlKGdsRGF0YS52ZXJ0ZXhCdWZmZXIsIGdsRGF0YS5zaGFkZXIuYXR0cmlidXRlcy5hVmVydGV4UG9zaXRpb24sIGdsLkZMT0FULCBmYWxzZSwgMiAqIDQsIDApXG4gICAgICAuYWRkQXR0cmlidXRlKGdsRGF0YS51dkJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFUZXh0dXJlQ29vcmQsIGdsLkZMT0FULCBmYWxzZSwgMiAqIDQsIDApXG4gICAgICAuYWRkQXR0cmlidXRlKGdsRGF0YS5zZGZCdWZmZXIsIGdsRGF0YS5zaGFkZXIuYXR0cmlidXRlcy5hU2RmU2l6ZSwgZ2wuRkxPQVQsIGZhbHNlLCA0LCAwKTtcblxuICAgIHJldHVybiBnbERhdGFcbiAgfVxuXG59XG5cblBJWEkuV2ViR0xSZW5kZXJlci5yZWdpc3RlclBsdWdpbignQXdlc29tZVRleHRSZW5kZXJlcicsIEF3ZXNvbWVUZXh0UmVuZGVyZXIpO1xuXG5PYmplY3QuYXNzaWduKFBJWEkuZXh0cmFzLCB7XG4gIEF3ZXNvbWVUZXh0OiBBd2Vzb21lVGV4dFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IEF3ZXNvbWVUZXh0XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9pbmRleC5qcyIsImNvbnN0IGNyZWF0ZUluZGljZXMgPSByZXF1aXJlKFwicXVhZC1pbmRpY2VzXCIpXG5jb25zdCBUZXh0TGF5b3V0ID0gcmVxdWlyZShcIi4vbGF5b3V0XCIpXG5cblxuY2xhc3MgQXdlc29tZVRleHQgZXh0ZW5kcyBQSVhJLm1lc2guTWVzaCB7XG5cbiAgY29uc3RydWN0b3IodGV4dCwgc3R5bGUsIGZvbnQpIHtcbiAgICBzdXBlcihmb250LnRleHR1cmUpO1xuXG4gICAgdGhpcy5zdHlsZSA9IG5ldyBQSVhJLlRleHRTdHlsZShzdHlsZSk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBzdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgdGhpcy5fdGV4dCA9IHRleHQ7XG4gICAgdGhpcy5fZm9udCA9IGZvbnQuZm9udDtcblxuICAgIC8vVE9ETyBzZXBhcmF0ZSBmb250IGFuZCB0ZXh0dXJlXG4gICAgdGhpcy5fdGV4dHVyZSA9IGZvbnQudGV4dHVyZTtcbiAgICB0aGlzLnBsdWdpbk5hbWUgPSAnQXdlc29tZVRleHRSZW5kZXJlcic7XG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgICB0aGlzLmxheW91dCA9IG5ldyBUZXh0TGF5b3V0KHRoaXMudGV4dCwgdGhpcy5mb250LCB7XG4gICAgICBmb250U2l6ZTogdGhpcy5zdHlsZS5mb250U2l6ZSxcbiAgICAgIHdyYXBXb3JkczogdGhpcy5zdHlsZS5icmVha1dvcmRzLFxuICAgICAgd3JhcHBlcldpZHRoOiB0aGlzLnN0eWxlLndvcmRXcmFwV2lkdGgsXG4gICAgICBhbGlnbjogdGhpcy5zdHlsZS5hbGlnbixcbiAgICAgIGxpbmVIZWlnaHQ6IHRoaXMuc3R5bGUubGluZUhlaWdodCxcbiAgICB9KTtcblxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMuZm9udE1ldHJpY3MoIHRoaXMuZm9udCwgdGhpcy5zdHlsZS5mb250U2l6ZSwgdGhpcy5zdHlsZS5mb250U2l6ZSAqIDAuMiApO1xuICAgIHRoaXMudmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubGF5b3V0LmxldHRlcnNDb3VudCAqIDQgKiAyKTtcbiAgICB0aGlzLnV2cyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5sYXlvdXQubGV0dGVyc0NvdW50ICogNCAqIDIpO1xuICAgIHRoaXMuc2RmU2l6ZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubGF5b3V0LmxldHRlcnNDb3VudCAqIDQpO1xuXG4gICAgdGhpcy5hcnJheVBvc2l0aW9ucyA9IHsgdmVydGV4OiAwLCB1dnM6IDAsIHNkZjogMCB9O1xuXG4gICAgdGhpcy5sYXlvdXQud29yZHNNZXRyaWNzLmZvckVhY2ggKHdvcmQgPT4ge1xuICAgICAgdGhpcy53cml0ZVN0cmluZyh3b3JkLndvcmQsIHRoaXMuZm9udCwgdGhpcy5tZXRyaWNzLCBbd29yZC54LCB3b3JkLnldKTtcbiAgICB9KTtcblxuICAgIHRoaXMuaW5kaWNlcyA9IGNyZWF0ZUluZGljZXMoe1xuICAgICAgY2xvY2t3aXNlOiB0cnVlLFxuICAgICAgdHlwZTogJ3VpbnQxNicsXG4gICAgICBjb3VudDogdGhpcy5sYXlvdXQubGV0dGVyc0NvdW50XG4gICAgfSk7XG5cbiAgICB0aGlzLnN0eWxlSUQgPSB0aGlzLnN0eWxlLnN0eWxlSUQ7XG4gICAgdGhpcy5kaXJ0eSsrO1xuICAgIHRoaXMuaW5kZXhEaXJ0eSsrO1xuICB9XG5cbiAgZ2V0IHRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cblxuICBzZXQgdGV4dCh2YWx1ZSkge1xuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgZ2V0IHRleHR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHR1cmU7XG4gIH1cblxuICBnZXQgZm9udCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9udFxuICB9XG5cbiAgd3JpdGVTdHJpbmcoIHN0cmluZywgZm9udCwgZm9udF9tZXRyaWNzLCBwb3MpIHtcbiAgICBsZXQgcHJldl9jaGFyID0gXCIgXCI7ICAvLyBVc2VkIHRvIGNhbGN1bGF0ZSBrZXJuaW5nXG4gICAgbGV0IGNwb3MgICAgICA9IHBvczsgIC8vIEN1cnJlbnQgcGVuIHBvc2l0aW9uXG4gICAgbGV0IHhfbWF4ICAgICA9IDAuMDsgIC8vIE1heCB3aWR0aCAtIHVzZWQgZm9yIGJvdW5kaW5nIGJveFxuICAgIGxldCBzY2FsZSAgICAgPSBmb250X21ldHJpY3MuY2FwX3NjYWxlO1xuXG4gICAgbGV0IHN0cl9wb3MgPSAwO1xuXG4gICAgZm9yKDs7KSB7XG4gICAgICBpZiAoIHN0cl9wb3MgPT09IHN0cmluZy5sZW5ndGggKSBicmVhaztcblxuICAgICAgdmFyIHNjaGFyID0gc3RyaW5nWyBzdHJfcG9zIF07XG4gICAgICBzdHJfcG9zKys7XG5cbiAgICAgIGlmICggc2NoYXIgPT09IFwiXFxuXCIgKSB7XG4gICAgICAgIGlmICggY3Bvc1swXSA+IHhfbWF4ICkgeF9tYXggPSBjcG9zWzBdOyAvLyBFeHBhbmRpbmcgdGhlIGJvdW5kaW5nIHJlY3RcbiAgICAgICAgY3Bvc1swXSAgPSBwb3NbMF07XG4gICAgICAgIGNwb3NbMV0gLT0gZm9udF9tZXRyaWNzLmxpbmVfaGVpZ2h0O1xuICAgICAgICBwcmV2X2NoYXIgPSBcIiBcIjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICggc2NoYXIgPT09IFwiIFwiICkge1xuICAgICAgICAvL3NjaGFyID0gXCJfXCJcbiAgICAgICAgY3Bvc1swXSArPSBmb250LnNwYWNlX2FkdmFuY2UgKiBzY2FsZTtcbiAgICAgICAgcHJldl9jaGFyID0gXCIgXCI7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgZm9udF9jaGFyID0gZm9udC5jaGFyc1sgc2NoYXIgXTtcbiAgICAgIGlmICggIWZvbnRfY2hhciApIHsgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3Vic3RpdHV0aW5nIHVuYXZhaWxhYmxlIGNoYXJhY3RlcnMgd2l0aCAnPydcbiAgICAgICAgc2NoYXIgPSBcIj9cIjtcbiAgICAgICAgZm9udF9jaGFyID0gZm9udC5jaGFyc1sgXCI/XCIgXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGtlcm4gPSBmb250Lmtlcm5bIHByZXZfY2hhciArIHNjaGFyIF07XG4gICAgICBpZiAoICFrZXJuICkga2VybiA9IDAuMDtcblxuICAgICAgLy8gY2FsY3VsYXRpbmcgdGhlIGdseXBoIHJlY3RhbmdsZSBhbmQgY29weWluZyBpdCB0byB0aGUgdmVydGV4IGFycmF5XG4gICAgICB2YXIgcmVjdCA9IHRoaXMuY2hhclJlY3QoIGNwb3MsIGZvbnQsIGZvbnRfbWV0cmljcywgZm9udF9jaGFyLCBrZXJuICk7XG5cbiAgICAgIHJlY3QucG9zaXRpb25zLm1hcCgocG9zKSA9PiB0aGlzLnZlcnRpY2VzWyB0aGlzLmFycmF5UG9zaXRpb25zLnZlcnRleCsrIF0gPSBwb3MgKTtcbiAgICAgIHJlY3QudXZzLm1hcCgodXYpID0+IHRoaXMudXZzWyB0aGlzLmFycmF5UG9zaXRpb25zLnV2cysrIF0gPSB1diApO1xuICAgICAgcmVjdC5zZGZTaXplcy5tYXAoKHNkZikgPT4gdGhpcy5zZGZTaXplc1sgdGhpcy5hcnJheVBvc2l0aW9ucy5zZGYrKyBdID0gc2RmICk7XG5cbiAgICAgIHByZXZfY2hhciA9IHNjaGFyO1xuICAgICAgY3BvcyA9IHJlY3QucG9zO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByZWN0IDogWyBwb3NbMF0sIHBvc1sxXSwgeF9tYXggLSBwb3NbMF0sIHBvc1sxXSAtIGNwb3NbMV0gKyBmb250X21ldHJpY3MubGluZV9oZWlnaHQgXSxcbiAgICAgIHN0cmluZ19wb3MgOiBzdHJfcG9zLFxuICAgICAgLy9hcnJheV9wb3MgOiBhcnJheV9wb3NcbiAgICB9XG5cbiAgfVxuXG4gIGZvbnRNZXRyaWNzKCBmb250LCBwaXhlbF9zaXplLCBtb3JlX2xpbmVfZ2FwID0gMC4wICkge1xuICAgIC8vIFdlIHVzZSBzZXBhcmF0ZSBzY2FsZSBmb3IgdGhlIGxvdyBjYXNlIGNoYXJhY3RlcnNcbiAgICAvLyBzbyB0aGF0IHgtaGVpZ2h0IGZpdHMgdGhlIHBpeGVsIGdyaWQuXG4gICAgLy8gT3RoZXIgY2hhcmFjdGVycyB1c2UgY2FwLWhlaWdodCB0byBmaXQgdG8gdGhlIHBpeGVsc1xuICAgIHZhciBjYXBfc2NhbGUgICA9IHBpeGVsX3NpemUgLyBmb250LmNhcF9oZWlnaHQ7XG4gICAgdmFyIGxvd19zY2FsZSAgID0gTWF0aC5yb3VuZCggZm9udC54X2hlaWdodCAqIGNhcF9zY2FsZSApIC8gZm9udC54X2hlaWdodDtcblxuICAgIC8vIEFzY2VudCBzaG91bGQgYmUgYSB3aG9sZSBudW1iZXIgc2luY2UgaXQncyB1c2VkIHRvIGNhbGN1bGF0ZSB0aGUgYmFzZWxpbmVcbiAgICAvLyBwb3NpdGlvbiB3aGljaCBzaG91bGQgbGllIGF0IHRoZSBwaXhlbCBib3VuZGFyeVxuICAgIHZhciBhc2NlbnQgICAgICA9IE1hdGgucm91bmQoIGZvbnQuYXNjZW50ICogY2FwX3NjYWxlICk7XG5cbiAgICAvLyBTYW1lIGZvciB0aGUgbGluZSBoZWlnaHRcbiAgICB2YXIgbGluZV9oZWlnaHQgPSBNYXRoLnJvdW5kKCBjYXBfc2NhbGUgKiAoIGZvbnQuYXNjZW50ICsgZm9udC5kZXNjZW50ICsgZm9udC5saW5lX2dhcCApICsgbW9yZV9saW5lX2dhcCApO1xuXG5cbiAgICByZXR1cm4geyBjYXBfc2NhbGUgICA6IGNhcF9zY2FsZSxcbiAgICAgIGxvd19zY2FsZSAgIDogbG93X3NjYWxlLFxuICAgICAgcGl4ZWxfc2l6ZSAgOiBwaXhlbF9zaXplLFxuICAgICAgYXNjZW50ICAgICAgOiBhc2NlbnQsXG4gICAgICBsaW5lX2hlaWdodCA6IGxpbmVfaGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIGNoYXJSZWN0KCBwb3MsIGZvbnQsIGZvbnRfbWV0cmljcywgZm9udF9jaGFyLCBrZXJuID0gMC4wICkge1xuXG4gICAgLy8gTG93IGNhc2UgY2hhcmFjdGVycyBoYXZlIGZpcnN0IGJpdCBzZXQgaW4gJ2ZsYWdzJ1xuICAgIHZhciBsb3djYXNlID0gKCBmb250X2NoYXIuZmxhZ3MgJiAxICkgPT09IDE7XG5cbiAgICAvLyBQZW4gcG9zaXRpb24gaXMgYXQgdGhlIHRvcCBvZiB0aGUgbGluZSwgWSBnb2VzIHVwXG4gICAgdmFyIGJhc2VsaW5lID0gcG9zWzFdIC0gZm9udF9tZXRyaWNzLmFzY2VudDtcblxuICAgIC8vIExvdyBjYXNlIGNoYXJzIHVzZSB0aGVpciBvd24gc2NhbGVcbiAgICB2YXIgc2NhbGUgPSBsb3djYXNlID8gZm9udF9tZXRyaWNzLmxvd19zY2FsZSA6IGZvbnRfbWV0cmljcy5jYXBfc2NhbGU7XG5cbiAgICAvL3NjYWxlID0gZm9udF9tZXRyaWNzLmxvd19zY2FsZTtcblxuICAgIC8vc2NhbGUgKz0gMjA7XG5cbiAgICAvLyBMYXlpbmcgb3V0IHRoZSBnbHlwaCByZWN0YW5nbGVcbiAgICB2YXIgZyAgICAgID0gZm9udF9jaGFyLnJlY3Q7XG4gICAgdmFyIGJvdHRvbSA9IGJhc2VsaW5lIC0gc2NhbGUgKiAoIGZvbnQuZGVzY2VudCArIGZvbnQuaXkgKTtcbiAgICB2YXIgdG9wICAgID0gYm90dG9tICAgKyBzY2FsZSAqICggZm9udC5yb3dfaGVpZ2h0ICk7XG4gICAgdmFyIGxlZnQgICA9IHBvc1swXSAgICsgc2NhbGUgKiAoIGZvbnRfY2hhci5iZWFyaW5nX3ggKyBrZXJuIC0gZm9udC5peCApO1xuICAgIHZhciByaWdodCAgPSBsZWZ0ICAgICArIHNjYWxlICogKCBnWzJdIC0gZ1swXSApO1xuICAgIHZhciBwID0gWyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20gXTtcblxuICAgIC8vIEFkdmFuY2luZyBwZW4gcG9zaXRpb25cbiAgICB2YXIgbmV3X3Bvc194ID0gcG9zWzBdICsgc2NhbGUgKiAoIGZvbnRfY2hhci5hZHZhbmNlX3ggKTtcblxuICAgIC8vIFNpZ25lZCBkaXN0YW5jZSBmaWVsZCBzaXplIGluIHNjcmVlbiBwaXhlbHNcbiAgICB2YXIgc2RmX3NpemUgID0gMi4wICogZm9udC5peSAqIHNjYWxlO1xuXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xuICAgICAgcFswXSwgcFszXSwgLy8gbGVmdCBib3R0b20sXG4gICAgICBwWzJdLCBwWzNdLCAvLyByaWdodCBib3R0b20sXG4gICAgICBwWzJdLCBwWzFdLCAvLyByaWdodCB0b3BcbiAgICAgIHBbMF0sIHBbMV0sIC8vIGxlZnQgdG9wXG4gICAgXTtcblxuICAgIGNvbnN0IHV2cyA9IFtcbiAgICAgIGdbMF0sIGdbMV0sIC8vIGxlZnQgdG9wXG4gICAgICBnWzJdLCBnWzFdLCAvLyByaWdodCB0b3BcbiAgICAgIGdbMl0sIGdbM10sIC8vIHJpZ2h0IGJvdHRvbSxcbiAgICAgIGdbMF0sIGdbM10sIC8vIGxlZnQgYm90dG9tLFxuICAgIF07XG5cbiAgICBjb25zdCBzZGZTaXplcyA9IFtcbiAgICAgIHNkZl9zaXplLFxuICAgICAgc2RmX3NpemUsXG4gICAgICBzZGZfc2l6ZSxcbiAgICAgIHNkZl9zaXplLFxuICAgIF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb25zLFxuICAgICAgdXZzLFxuICAgICAgc2RmU2l6ZXMsXG4gICAgICBwb3M6IFsgbmV3X3Bvc194LCBwb3NbMV0gXVxuICAgIH07XG5cbiAgICAvL3JldHVybiB7IHZlcnRpY2VzIDogdmVydGljZXMsIHBvcyA6IFsgbmV3X3Bvc194LCBwb3NbMV0gXSB9O1xuICB9XG5cblxufVxuXG5Bd2Vzb21lVGV4dC5zY2FsZSA9IDEuMDtcblxuZXhwb3J0IGRlZmF1bHQgQXdlc29tZVRleHQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi90ZXh0LmpzIiwidmFyIGR0eXBlID0gcmVxdWlyZSgnZHR5cGUnKVxudmFyIGFuQXJyYXkgPSByZXF1aXJlKCdhbi1hcnJheScpXG52YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKVxuXG52YXIgQ1cgPSBbMCwgMiwgM11cbnZhciBDQ1cgPSBbMiwgMSwgM11cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVRdWFkRWxlbWVudHMoYXJyYXksIG9wdCkge1xuICAgIC8vaWYgdXNlciBkaWRuJ3Qgc3BlY2lmeSBhbiBvdXRwdXQgYXJyYXlcbiAgICBpZiAoIWFycmF5IHx8ICEoYW5BcnJheShhcnJheSkgfHwgaXNCdWZmZXIoYXJyYXkpKSkge1xuICAgICAgICBvcHQgPSBhcnJheSB8fCB7fVxuICAgICAgICBhcnJheSA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdCA9PT0gJ251bWJlcicpIC8vYmFja3dhcmRzLWNvbXBhdGlibGVcbiAgICAgICAgb3B0ID0geyBjb3VudDogb3B0IH1cbiAgICBlbHNlXG4gICAgICAgIG9wdCA9IG9wdCB8fCB7fVxuXG4gICAgdmFyIHR5cGUgPSB0eXBlb2Ygb3B0LnR5cGUgPT09ICdzdHJpbmcnID8gb3B0LnR5cGUgOiAndWludDE2J1xuICAgIHZhciBjb3VudCA9IHR5cGVvZiBvcHQuY291bnQgPT09ICdudW1iZXInID8gb3B0LmNvdW50IDogMVxuICAgIHZhciBzdGFydCA9IChvcHQuc3RhcnQgfHwgMCkgXG5cbiAgICB2YXIgZGlyID0gb3B0LmNsb2Nrd2lzZSAhPT0gZmFsc2UgPyBDVyA6IENDVyxcbiAgICAgICAgYSA9IGRpclswXSwgXG4gICAgICAgIGIgPSBkaXJbMV0sXG4gICAgICAgIGMgPSBkaXJbMl1cblxuICAgIHZhciBudW1JbmRpY2VzID0gY291bnQgKiA2XG5cbiAgICB2YXIgaW5kaWNlcyA9IGFycmF5IHx8IG5ldyAoZHR5cGUodHlwZSkpKG51bUluZGljZXMpXG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSAwOyBpIDwgbnVtSW5kaWNlczsgaSArPSA2LCBqICs9IDQpIHtcbiAgICAgICAgdmFyIHggPSBpICsgc3RhcnRcbiAgICAgICAgaW5kaWNlc1t4ICsgMF0gPSBqICsgMFxuICAgICAgICBpbmRpY2VzW3ggKyAxXSA9IGogKyAxXG4gICAgICAgIGluZGljZXNbeCArIDJdID0gaiArIDJcbiAgICAgICAgaW5kaWNlc1t4ICsgM10gPSBqICsgYVxuICAgICAgICBpbmRpY2VzW3ggKyA0XSA9IGogKyBiXG4gICAgICAgIGluZGljZXNbeCArIDVdID0gaiArIGNcbiAgICB9XG4gICAgcmV0dXJuIGluZGljZXNcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcXVhZC1pbmRpY2VzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZHR5cGUpIHtcbiAgc3dpdGNoIChkdHlwZSkge1xuICAgIGNhc2UgJ2ludDgnOlxuICAgICAgcmV0dXJuIEludDhBcnJheVxuICAgIGNhc2UgJ2ludDE2JzpcbiAgICAgIHJldHVybiBJbnQxNkFycmF5XG4gICAgY2FzZSAnaW50MzInOlxuICAgICAgcmV0dXJuIEludDMyQXJyYXlcbiAgICBjYXNlICd1aW50OCc6XG4gICAgICByZXR1cm4gVWludDhBcnJheVxuICAgIGNhc2UgJ3VpbnQxNic6XG4gICAgICByZXR1cm4gVWludDE2QXJyYXlcbiAgICBjYXNlICd1aW50MzInOlxuICAgICAgcmV0dXJuIFVpbnQzMkFycmF5XG4gICAgY2FzZSAnZmxvYXQzMic6XG4gICAgICByZXR1cm4gRmxvYXQzMkFycmF5XG4gICAgY2FzZSAnZmxvYXQ2NCc6XG4gICAgICByZXR1cm4gRmxvYXQ2NEFycmF5XG4gICAgY2FzZSAnYXJyYXknOlxuICAgICAgcmV0dXJuIEFycmF5XG4gICAgY2FzZSAndWludDhfY2xhbXBlZCc6XG4gICAgICByZXR1cm4gVWludDhDbGFtcGVkQXJyYXlcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2R0eXBlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbm1vZHVsZS5leHBvcnRzID0gYW5BcnJheVxuXG5mdW5jdGlvbiBhbkFycmF5KGFycikge1xuICByZXR1cm4gKFxuICAgICAgIGFyci5CWVRFU19QRVJfRUxFTUVOVFxuICAgICYmIHN0ci5jYWxsKGFyci5idWZmZXIpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nXG4gICAgfHwgQXJyYXkuaXNBcnJheShhcnIpXG4gIClcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hbi1hcnJheS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1idWZmZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5jbGFzcyBUZXh0TGF5b3V0IHtcblxuICB0ZXh0ID0gXCJcIjtcbiAgZm9udCA9IG51bGw7XG4gIG1ldHJpY3MgPSBudWxsO1xuICBmb250U2l6ZSA9IDIwO1xuICBhbGlnbiA9IFwibGVmdFwiO1xuICBzdGFydFggPSAwO1xuICBzdGFydFkgPSAwO1xuICB3cmFwcGVyV2lkdGggPSAxMDA7XG4gIHdyYXBXb3JkcyA9IGZhbHNlO1xuICB3b3Jkc01ldHJpY3MgPSBbXTtcbiAgbGV0dGVyc0NvdW50ID0gMDtcbiAgaGVpZ2h0ID0gMDtcbiAgbGluZXNDb3VudCA9IDA7XG4gIGxpbmVIZWlnaHQgPSAwO1xuXG5cbiAgY29uc3RydWN0b3IodGV4dCwgZm9udCwgY29uZmlnKSB7XG4gICAgdGhpcy50ZXh0ID0gdGV4dDtcbiAgICB0aGlzLmZvbnQgPSBmb250O1xuICAgIHRoaXMuZm9udFNpemUgPSBjb25maWcuZm9udFNpemU7XG4gICAgdGhpcy53cmFwV29yZHMgPSBjb25maWcud3JhcFdvcmRzO1xuICAgIHRoaXMud3JhcHBlcldpZHRoID0gY29uZmlnLndyYXBwZXJXaWR0aDtcbiAgICB0aGlzLmxpbmVIZWlnaHQgPSBjb25maWcubGluZUhlaWdodDtcbiAgICB0aGlzLmFsaWduID0gY29uZmlnLmFsaWduO1xuICAgIHRoaXMubGV0dGVyc0NvdW50ID0gdGhpcy50ZXh0LnNwbGl0KFwiXCIpLmxlbmd0aDtcbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLmZvbnRNZXRyaWNzKGZvbnQsIDAuMCk7XG4gICAgdGhpcy5zdGFydFkgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcbiAgICB0aGlzLmNhbGN1bGF0ZVdvcmRzUG9zaXRpb25zKCk7XG4gIH1cblxuICBmb250TWV0cmljcyhmb250U2l6ZSwgbW9yZUxpbmVHYXAgPSAwLjApIHtcblxuICAgIGNvbnN0IHtjYXBfaGVpZ2h0LCB4X2hlaWdodCwgYXNjZW50OiBmb250QXNjZW50ICwgZGVzY2VudCwgbGluZV9nYXB9ID0gdGhpcy5mb250O1xuXG4gICAgY29uc3QgY2FwU2NhbGUgPSB0aGlzLmZvbnRTaXplIC8gY2FwX2hlaWdodDtcbiAgICBjb25zdCBsb3dTY2FsZSA9IE1hdGgucm91bmQoIHhfaGVpZ2h0ICogY2FwU2NhbGUgKSAvIHhfaGVpZ2h0O1xuICAgIGNvbnN0IGFzY2VudCA9IE1hdGgucm91bmQoIGZvbnRBc2NlbnQgKiBjYXBTY2FsZSApO1xuICAgIGxldCBsaW5lSGVpZ2h0ID0gTWF0aC5yb3VuZCggY2FwU2NhbGUgKiAoIGZvbnRBc2NlbnQgKyBkZXNjZW50ICsgbGluZV9nYXAgKSArIG1vcmVMaW5lR2FwICk7XG5cbiAgICBpZiAodGhpcy5saW5lSGVpZ2h0ID4gMClcbiAgICAgIGxpbmVIZWlnaHQgPSB0aGlzLmxpbmVIZWlnaHQ7XG4gICAgZWxzZVxuICAgICAgdGhpcy5saW5lSGVpZ2h0ID0gbGluZUhlaWdodDtcblxuICAgIHJldHVybiB7XG4gICAgICBjYXBTY2FsZSAgIDogY2FwU2NhbGUsXG4gICAgICBsb3dTY2FsZSAgIDogbG93U2NhbGUsXG4gICAgICBhc2NlbnQgICAgICA6IGFzY2VudCxcbiAgICAgIGxpbmVIZWlnaHQgOiBsaW5lSGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIGNoYXJSZWN0KCBwb3MsIGZvbnRfY2hhciwga2VybiA9IDAuMCApIHtcblxuICAgIGNvbnN0IHthc2NlbnQsIGxvd1NjYWxlLCBjYXBTY2FsZX0gPSB0aGlzLm1ldHJpY3M7XG5cbiAgICBjb25zdCB7IGRlc2NlbnQsIHJvd19oZWlnaHQsIGl5LCBpeCB9ID0gdGhpcy5mb250O1xuXG4gICAgY29uc3Qge2ZsYWdzLCBiZWFyaW5nX3gsIGFkdmFuY2VfeCwgcmVjdCB9ID0gZm9udF9jaGFyO1xuXG4gICAgLy8gTG93IGNhc2UgY2hhcmFjdGVycyBoYXZlIGZpcnN0IGJpdCBzZXQgaW4gJ2ZsYWdzJ1xuICAgIHZhciBsb3dDYXNlID0gKCBmbGFncyAmIDEgKSA9PT0gMTtcblxuICAgIC8vIFBlbiBwb3NpdGlvbiBpcyBhdCB0aGUgdG9wIG9mIHRoZSBsaW5lLCBZIGdvZXMgdXBcbiAgICB2YXIgYmFzZWxpbmUgPSBwb3NbMV0gLSBhc2NlbnQ7XG5cbiAgICAvLyBMb3cgY2FzZSBjaGFycyB1c2UgdGhlaXIgb3duIHNjYWxlXG4gICAgdmFyIHNjYWxlID0gbG93Q2FzZSA/IGxvd1NjYWxlIDogY2FwU2NhbGU7XG5cblxuICAgIC8vIExheWluZyBvdXQgdGhlIGdseXBoIHJlY3RhbmdsZVxuICAgIHZhciBnICAgICAgPSByZWN0O1xuICAgIHZhciBib3R0b20gPSBiYXNlbGluZSAtIHNjYWxlICogKCBkZXNjZW50ICsgaXkgKTtcbiAgICB2YXIgdG9wICAgID0gYm90dG9tICAgKyBzY2FsZSAqICggcm93X2hlaWdodCApO1xuICAgIHZhciBsZWZ0ICAgPSBwb3NbMF0gICArIHNjYWxlICogKCBiZWFyaW5nX3ggKyBrZXJuIC0gaXggKTtcbiAgICB2YXIgcmlnaHQgID0gbGVmdCAgICAgKyBzY2FsZSAqICggZ1syXSAtIGdbMF0gKTtcbiAgICB2YXIgcCA9IFsgbGVmdCwgdG9wLCByaWdodCwgYm90dG9tIF07XG5cbiAgICAvLyBBZHZhbmNpbmcgcGVuIHBvc2l0aW9uXG4gICAgdmFyIG5ld19wb3NfeCA9IHBvc1swXSArIHNjYWxlICogKCBhZHZhbmNlX3ggKTtcblxuICAgIC8vIFNpZ25lZCBkaXN0YW5jZSBmaWVsZCBzaXplIGluIHNjcmVlbiBwaXhlbHNcbiAgICB2YXIgc2RmX3NpemUgID0gMi4wICogaXkgKiBzY2FsZTtcblxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgICAgIHBbMF0sIHBbM10sIC8vIGxlZnQgYm90dG9tLFxuICAgICAgcFsyXSwgcFszXSwgLy8gcmlnaHQgYm90dG9tLFxuICAgICAgcFsyXSwgcFsxXSwgLy8gcmlnaHQgdG9wXG4gICAgICBwWzBdLCBwWzFdLCAvLyBsZWZ0IHRvcFxuICAgIF07XG5cbiAgICBjb25zdCB1dnMgPSBbXG4gICAgICBnWzBdLCBnWzFdLCAvLyBsZWZ0IHRvcFxuICAgICAgZ1syXSwgZ1sxXSwgLy8gcmlnaHQgdG9wXG4gICAgICBnWzJdLCBnWzNdLCAvLyByaWdodCBib3R0b20sXG4gICAgICBnWzBdLCBnWzNdLCAvLyBsZWZ0IGJvdHRvbSxcbiAgICBdO1xuXG4gICAgY29uc3Qgc2RmU2l6ZXMgPSBbXG4gICAgICBzZGZfc2l6ZSxcbiAgICAgIHNkZl9zaXplLFxuICAgICAgc2RmX3NpemUsXG4gICAgICBzZGZfc2l6ZSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9ucyxcbiAgICAgIHV2cyxcbiAgICAgIHNkZlNpemVzLFxuICAgICAgcG9zOiBbIG5ld19wb3NfeCwgcG9zWzFdIF1cbiAgICB9O1xuICB9XG5cbiAgZ2V0U3RyaW5nU2l6ZShzdHJpbmcpIHtcblxuICAgIGxldCB3aWR0aCA9IDA7XG4gICAgbGV0IGhlaWdodCA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xuXG4gICAgY29uc3QgY2hhcnMgPSBbLi4uc3RyaW5nXTtcblxuICAgIC8vIEl0ZXJhdGUgdGhvdWdodCB0aGUgY2hhcnMsIGNhbGN1bGF0ZSBwb3NpdGlvblxuICAgIGNoYXJzLmZvckVhY2goY2hhciA9PiB7XG4gICAgICBsZXQgZm9udF9jaGFyID0gdGhpcy5mb250LmNoYXJzWyBjaGFyIF07XG5cbiAgICAgIGlmIChjaGFyID09PSBcIiBcIikge1xuICAgICAgICB3aWR0aCArPSB0aGlzLmZvbnQuc3BhY2VfYWR2YW5jZSAqIHRoaXMubWV0cmljcy5jYXBTY2FsZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBHZXQgY2hhciBtZXRyaWNzXG4gICAgICBsZXQgY2hhclJlY3QgPSB0aGlzLmNoYXJSZWN0KFt3aWR0aCwwXSwgZm9udF9jaGFyLCAwLjIpO1xuICAgICAgd2lkdGggPSBjaGFyUmVjdC5wb3NbMF07XG5cbiAgICB9KTtcblxuICAgIHJldHVybiB7d2lkdGgsIGhlaWdodH07XG5cbiAgfVxuXG4gIGNhbGN1bGF0ZVdvcmRzUG9zaXRpb25zKCkge1xuXG4gICAgY29uc3Qgd29yZHMgPSB0aGlzLnRleHQuc3BsaXQoXCIgXCIpO1xuICAgIHRoaXMud29yZHNNZXRyaWNzID0gW107XG5cbiAgICAvLyBJbml0aWFsIHBvc2l0aW9uXG4gICAgbGV0IHggPSB0aGlzLnN0YXJ0WDtcbiAgICBsZXQgeSA9IHRoaXMuc3RhcnRZO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHdvcmRzIHBvc2l0aW9ucyBvbiBsaW5lc1xuICAgIHdvcmRzLmZvckVhY2god29yZCA9PiB7XG4gICAgICBjb25zdCB3b3JkU2l6ZSA9IHRoaXMuZ2V0U3RyaW5nU2l6ZSh3b3JkKTtcbiAgICAgIGlmICh4ICsgd29yZFNpemUud2lkdGggPiB0aGlzLnN0YXJ0WCArIHRoaXMud3JhcHBlcldpZHRoICYmIHRoaXMud3JhcFdvcmRzKSB7XG4gICAgICAgIHggPSB0aGlzLnN0YXJ0WDtcbiAgICAgICAgeSArPSB3b3JkU2l6ZS5oZWlnaHQ7XG4gICAgICB9XG4gICAgICB0aGlzLndvcmRzTWV0cmljcy5wdXNoKHsuLi53b3JkU2l6ZSwgeCwgeSwgd29yZH0pO1xuICAgICAgeCArPSB3b3JkU2l6ZS53aWR0aCArIHRoaXMuZm9udC5zcGFjZV9hZHZhbmNlICogdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xuICAgIH0pO1xuXG4gICAgLy8gQ2FsY3VsYXRlIGxpbmVzIGNvdW50XG4gICAgdGhpcy5saW5lc0NvdW50ID0gKHkgLSB0aGlzLnN0YXJ0WSkgLyB0aGlzLm1ldHJpY3MubGluZUhlaWdodCArIDE7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmxpbmVzQ291bnQgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcblxuXG4gICAgLy8gQ2hhbmdlIGFsaWduIFRPRE8gb3B0aW1pc2VcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGluZXNDb3VudDsgKytpKSB7XG4gICAgICBjb25zdCB3b3Jkc09uTGluZSA9IHRoaXMud29yZHNNZXRyaWNzLmZpbHRlcih3b3JkID0+IHdvcmQueSA9PT0gdGhpcy5zdGFydFkgKyAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSlcblxuICAgICAgY29uc3QgbGFzdFdvcmQgPSB3b3Jkc09uTGluZVt3b3Jkc09uTGluZS5sZW5ndGggLSAxXTtcbiAgICAgIGNvbnN0IGZyZWVTcGFjZSA9ICh0aGlzLnN0YXJ0WCArIHRoaXMud3JhcHBlcldpZHRoKSAtIChsYXN0V29yZC54ICsgbGFzdFdvcmQud2lkdGgpO1xuXG4gICAgICBsZXQgbGVmdE9mZnNldCA9IDA7XG5cbiAgICAgIHN3aXRjaCAodGhpcy5hbGlnbikge1xuICAgICAgICBjYXNlIFwiY2VudGVyXCI6XG4gICAgICAgICAgbGVmdE9mZnNldCA9IGZyZWVTcGFjZSAvIDI7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgIGxlZnRPZmZzZXQgPSBmcmVlU3BhY2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0aGlzLndvcmRzTWV0cmljcy5mb3JFYWNoKHdvcmQgPT4ge1xuICAgICAgICBpZiAod29yZC55ID09PSB0aGlzLnN0YXJ0WSArIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQpKSB7XG4gICAgICAgICAgd29yZC54ICs9IGxlZnRPZmZzZXQ7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gIH1cblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRleHRMYXlvdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9sYXlvdXQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG5hdHRyaWJ1dGUgdmVjMiBhVmVydGV4UG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzIgYVRleHR1cmVDb29yZDtcXG5hdHRyaWJ1dGUgZmxvYXQgYVNkZlNpemU7XFxuXFxudW5pZm9ybSBtYXQzIHRyYW5zbGF0aW9uTWF0cml4O1xcbnVuaWZvcm0gbWF0MyBwcm9qZWN0aW9uTWF0cml4O1xcbnVuaWZvcm0gbWF0MyB0cmFuc2Zvcm07XFxuXFxuXFxudmFyeWluZyB2ZWMyICB0YzA7XFxudmFyeWluZyBmbG9hdCBkb2Zmc2V0O1xcbnZhcnlpbmcgZmxvYXQgc2RmX3RleGVsO1xcblxcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuXFxuICAgIC8vVE9ETyBNQUtFIEFUVFJJQlVURVxcbiAgICBmbG9hdCBzZGZfc2l6ZSA9IGFTZGZTaXplO1xcblxcbiAgICAvL1RPRE8gTUFLRSBVTklGT1JNU1xcbiAgICBmbG9hdCBzZGZfdGV4X3NpemUgPSAxMDI0LjA7XFxuXFxuXFxuICAgIHRjMCA9IGFUZXh0dXJlQ29vcmQ7XFxuICAgIGRvZmZzZXQgPSAxLjAgLyBzZGZfc2l6ZTsgICAgICAgLy8gRGlzdGFuY2UgZmllbGQgZGVsdGEgZm9yIG9uZSBzY3JlZW4gcGl4ZWxcXG4gICAgc2RmX3RleGVsID0gMS4wIC8gc2RmX3RleF9zaXplO1xcblxcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQoKHByb2plY3Rpb25NYXRyaXggKiB0cmFuc2xhdGlvbk1hdHJpeCAqIHZlYzMoYVZlcnRleFBvc2l0aW9uICwgMS4wKSkueHksIDAuMCwgMS4wKTtcXG5cXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NoYWRlcnMvdmVydC5nbHNsXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbnVuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyO1xcbnVuaWZvcm0gZmxvYXQgaGludF9hbW91bnQ7XFxudW5pZm9ybSBmbG9hdCBzdWJwaXhlbF9hbW91bnQ7XFxuXFxudW5pZm9ybSB2ZWMzIGJnX2NvbG9yO1xcbnVuaWZvcm0gdmVjMyBmb250X2NvbG9yO1xcblxcbnZhcnlpbmcgdmVjMiAgdGMwO1xcbnZhcnlpbmcgZmxvYXQgZG9mZnNldDtcXG52YXJ5aW5nIGZsb2F0IHNkZl90ZXhlbDtcXG5cXG5cXG4vKlxcbiAqICBTdWJwaXhlbCBjb3ZlcmFnZSBjYWxjdWxhdGlvblxcbiAqXFxuICogIHYgLSBlZGdlIHNsb3BlICAgIC0xLjAgdG8gMS4wICAgICAgICAgIHRyaXBsZXRcXG4gKiAgYSAtIHBpeGVsIGNvdmVyYWdlIDAuMCB0byAxLjAgICAgICAgICAgY292ZXJhZ2VcXG4gKlxcbiAqICAgICAgfDwtIGdseXBoIGVkZ2UgICAgICAgICAgICAgICAgICAgICAgUiAgRyAgQlxcbiAqICArLS0tKy0tLSsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLSstLSstLStcXG4gKiAgfCAgIHxYWFh8IHYgPSAxLjAgKGVkZ2UgZmFjaW5nIHdlc3QpICB8ICB8eHh8WFh8XFxuICogIHwgICB8WFhYfCBhID0gMC41ICg1MCUgY292ZXJhZ2UpICAgICAgfCAgfHh4fFhYfFxcbiAqICB8ICAgfFhYWHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHx4eHxYWHxcXG4gKiAgKy0tLSstLS0rICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0rLS0rLS0rXFxuICogICAgcGl4ZWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgIDUwIDEwMFxcbiAqXFxuICpcXG4gKiAgICAgICAgUiAgIEcgICBCXFxuICpcXG4gKiAgIDEuMCAgICAgICAgKy0tKyAgIDwtIHRvcCAoYWJzKCB2ICkpXFxuICogICAgICAgICAgICAgIHxcXG4gKiAgICAgICAtKy0tLS0tKy0tKy0tIDwtIGNlaWw6IDEwMCUgY292ZXJhZ2VcXG4gKiAgICAgICAgfCAgICAgfFhYfFxcbiAqICAgMC4wICB8ICArLS0rWFh8XFxuICogICAgICAgIHwgIHx4eHxYWHxcXG4gKiAgICAgICAtKy0tKy0tKy0tKy0tIDwtIGZsb29yOiAwJSBjb3ZlcmFnZVxcbiAqICAgICAgICAgICB8XFxuICogIC0xLjAgICstLSsgICAgICAgICA8LSAgLWFicyh2KVxcbiAqICAgICAgICB8XFxuICogICAgICAgIHxcXG4gKiAgICAgICAgfFxcbiAqICAtMi4wICArICAgICAgICAgICAgPC0gYm90dG9tOiAtYWJzKHYpLTEuMFxcbiAqL1xcblxcbnZlYzMgc3VicGl4ZWwoIGZsb2F0IHYsIGZsb2F0IGEgKSB7XFxuICAgIGZsb2F0IHZ0ICAgICAgPSAwLjYgKiB2OyAvLyAxLjAgd2lsbCBtYWtlIHlvdXIgZXllcyBibGVlZFxcbiAgICB2ZWMzICByZ2JfbWF4ID0gdmVjMyggLXZ0LCAwLjAsIHZ0ICk7XFxuICAgIGZsb2F0IHRvcCAgICAgPSBhYnMoIHZ0ICk7XFxuICAgIGZsb2F0IGJvdHRvbSAgPSAtdG9wIC0gMS4wO1xcbiAgICBmbG9hdCBjZmxvb3IgID0gbWl4KCB0b3AsIGJvdHRvbSwgYSApO1xcbiAgICB2ZWMzICByZXMgICAgID0gY2xhbXAoIHJnYl9tYXggLSB2ZWMzKCBjZmxvb3IgKSwgMC4wLCAxLjAgKTtcXG4gICAgcmV0dXJuIHJlcztcXG59XFxuXFxudm9pZCBtYWluMigpIHtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHVTYW1wbGVyLCB0YzApO1xcbn1cXG5cXG52b2lkIG1haW4odm9pZCkge1xcblxcbiAgICAvLyBTYW1wbGluZyB0aGUgdGV4dHVyZSwgTCBwYXR0ZXJuXFxuICAgIGZsb2F0IHNkZiAgICAgICA9IHRleHR1cmUyRCggdVNhbXBsZXIsIHRjMCApLnI7XFxuICAgIGZsb2F0IHNkZl9ub3J0aCA9IHRleHR1cmUyRCggdVNhbXBsZXIsIHRjMCArIHZlYzIoIDAuMCwgc2RmX3RleGVsICkgKS5yO1xcbiAgICBmbG9hdCBzZGZfZWFzdCAgPSB0ZXh0dXJlMkQoIHVTYW1wbGVyLCB0YzAgKyB2ZWMyKCBzZGZfdGV4ZWwsIDAuMCApICkucjtcXG5cXG4gICAgLy8gRXN0aW1hdGluZyBzdHJva2UgZGlyZWN0aW9uIGJ5IHRoZSBkaXN0YW5jZSBmaWVsZCBncmFkaWVudCB2ZWN0b3JcXG4gICAgdmVjMiAgc2dyYWQgICAgID0gdmVjMiggc2RmX2Vhc3QgLSBzZGYsIHNkZl9ub3J0aCAtIHNkZiApO1xcbiAgICBmbG9hdCBzZ3JhZF9sZW4gPSBtYXgoIGxlbmd0aCggc2dyYWQgKSwgMS4wIC8gMTI4LjAgKTtcXG4gICAgdmVjMiAgZ3JhZCAgICAgID0gc2dyYWQgLyB2ZWMyKCBzZ3JhZF9sZW4gKTtcXG4gICAgZmxvYXQgdmdyYWQgPSBhYnMoIGdyYWQueSApOyAvLyAwLjAgLSB2ZXJ0aWNhbCBzdHJva2UsIDEuMCAtIGhvcml6b250YWwgb25lXFxuXFxuICAgIGZsb2F0IGhvcnpfc2NhbGUgID0gMS4xOyAvLyBCbHVycmluZyB2ZXJ0aWNhbCBzdHJva2VzIGFsb25nIHRoZSBYIGF4aXMgYSBiaXRcXG4gICAgZmxvYXQgdmVydF9zY2FsZSAgPSAwLjY7IC8vIFdoaWxlIGFkZGluZyBzb21lIGNvbnRyYXN0IHRvIHRoZSBob3Jpem9udGFsIHN0cm9rZXNcXG4gICAgZmxvYXQgaGRvZmZzZXQgICAgPSBtaXgoIGRvZmZzZXQgKiBob3J6X3NjYWxlLCBkb2Zmc2V0ICogdmVydF9zY2FsZSwgdmdyYWQgKTtcXG4gICAgZmxvYXQgcmVzX2RvZmZzZXQgPSBtaXgoIGRvZmZzZXQsIGhkb2Zmc2V0LCBoaW50X2Ftb3VudCApO1xcblxcbiAgICBmbG9hdCBhbHBoYSAgICAgICA9IHNtb290aHN0ZXAoIDAuNSAtIHJlc19kb2Zmc2V0LCAwLjUgKyByZXNfZG9mZnNldCwgc2RmICk7XFxuXFxuICAgIC8vIEFkZGl0aW9uYWwgY29udHJhc3RcXG4gICAgYWxwaGEgICAgICAgICAgICAgPSBwb3coIGFscGhhLCAxLjAgKyAwLjIgKiB2Z3JhZCAqIGhpbnRfYW1vdW50ICk7XFxuXFxuICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gc3VwcG9ydCBmb3IgQVJCX2JsZW5kX2Z1bmNfZXh0ZW5kZWQgaW4gV2ViR0wuXFxuICAgIC8vIEZvcnR1bmF0ZWx5IHRoZSBiYWNrZ3JvdW5kIGlzIGZpbGxlZCB3aXRoIGEgc29saWQgY29sb3Igc28gd2UgY2FuIGRvXFxuICAgIC8vIHRoZSBibGVuZGluZyBpbnNpZGUgdGhlIHNoYWRlci5cXG5cXG4gICAgLy8gRGlzY2FyZGluZyBwaXhlbHMgYmV5b25kIGEgdGhyZXNob2xkIHRvIG1pbmltaXNlIHBvc3NpYmxlIGFydGlmYWN0cy5cXG4gICAgaWYgKCBhbHBoYSA8IDIwLjAgLyAyNTYuMCApIGRpc2NhcmQ7XFxuXFxuICAgIHZlYzMgY2hhbm5lbHMgPSBzdWJwaXhlbCggZ3JhZC54ICogMC41ICogc3VicGl4ZWxfYW1vdW50LCBhbHBoYSApICsgMC4xO1xcblxcbiAgICAvLyBGb3Igc3VicGl4ZWwgcmVuZGVyaW5nIHdlIGhhdmUgdG8gYmxlbmQgZWFjaCBjb2xvciBjaGFubmVsIHNlcGFyYXRlbHlcXG4gICAgdmVjMyByZXMgPSBtaXgoIGJnX2NvbG9yLCBmb250X2NvbG9yLCBjaGFubmVscyApO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KCByZXMsIDEuMCApO1xcbn1cXG5cXG5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc2hhZGVycy9mcmFnLmdsc2xcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==