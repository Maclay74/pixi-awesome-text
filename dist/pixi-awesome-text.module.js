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
	
	var _text = _interopRequireDefault(__webpack_require__(2));
	
	var _layout = _interopRequireDefault(__webpack_require__(3));
	
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
	/*
	
	ix            = sdf_size / tex_width
	iy            = sdf_size / tex_height
	row_height    = (row_height + 2 * sdf_size) / tex_height;
	aspect        = tex_width / tex_height;
	ascent        = font->ascent * scaleY
	descent       = fabsf(font->descent * scaleY)
	line_gap      = font->line_gap * scale Y
	cap_height    = gxcap.max.y * scaleY
	x_height      = gx.max.y * scaleY
	space_advance = gspace.advance_width * scaleX


	scaley = row_height / tex_height / ( font->glyph_max.y - font->glyph_min.y );
	scalex = row_height / tex_width / ( font->glyph_max.y - font->glyph_min.y );
	gspace = font->glyphs[ font->glyph_idx( ' ' ) ];
	gx     = font->glyphs[ font->glyph_idx( 'x' ) ]
	gxcap  = font->glyphs[ font->glyph_idx( 'X' ) ]


	sdf_size = 10

	*/

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;
	
	var _text = _interopRequireDefault(__webpack_require__(2));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
	
	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
	
	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
	
	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
	
	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
	
	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var vertexShader = __webpack_require__(9);
	
	var fragmentShader = __webpack_require__(10);
	
	var selectVertextShader = __webpack_require__(11);
	
	var selectFragmentShader = __webpack_require__(12);
	
	var glCore = PIXI.glCore;
	
	var AwesomeTextRenderer =
	/*#__PURE__*/
	function (_PIXI$ObjectRenderer) {
	  _inherits(AwesomeTextRenderer, _PIXI$ObjectRenderer);
	
	  function AwesomeTextRenderer(renderer) {
	    var _this;
	
	    _classCallCheck(this, AwesomeTextRenderer);
	
	    _this = _possibleConstructorReturn(this, _getPrototypeOf(AwesomeTextRenderer).call(this, renderer));
	
	    _defineProperty(_assertThisInitialized(_this), "selectColor", 0xFFB3C3);
	
	    _this.textShader = null;
	    _this.selectShader = null;
	    return _this;
	  }
	
	  _createClass(AwesomeTextRenderer, [{
	    key: "onContextChange",
	    value: function onContextChange() {
	      var gl = this.renderer.gl;
	      gl.getExtension("OES_standard_derivatives");
	      this.textShader = new PIXI.Shader(gl, vertexShader, fragmentShader);
	      this.selectShader = new PIXI.Shader(gl, selectVertextShader, selectFragmentShader);
	    }
	  }, {
	    key: "renderText",
	    value: function renderText(source) {
	      var glData = source._glDatas[AwesomeTextRenderer.contextText];
	
	      if (!glData) {
	        this.renderer.bindVao(null);
	        glData = this.buildTextGlData(source, this.renderer.gl);
	        source._glDatas[AwesomeTextRenderer.contextText] = glData;
	      }
	
	      this.renderer.bindVao(glData.vao);
	
	      if (source.dirty) {
	        source.dirty = false;
	        glData.uvBuffer.upload(source.uvs);
	      }
	
	      if (source.indexDirty) {
	        source.indexDirty = false;
	        glData.indexBuffer.upload(source.indices);
	      }
	
	      glData.vertexBuffer.upload(source.vertices);
	      this.renderer.bindShader(glData.shader);
	      this.renderer.state.setBlendMode(source.blendMode);
	      glData.shader.uniforms.uSampler = this.renderer.bindTexture(source.texture);
	      glData.shader.uniforms.translationMatrix = source.worldTransform.toArray(true);
	      glData.shader.uniforms.hint_amount = 1.0;
	      glData.shader.uniforms.sdfMultiplier = _text["default"].scale;
	      glData.shader.uniforms.subpixel_amount = 1.0;
	      glData.shader.uniforms.font_color = PIXI.utils.hex2rgb(source.style.fill.replace("#", "0x"));
	      glData.shader.uniforms.bg_color = PIXI.utils.hex2rgb(source.backgroundColor.replace("#", "0x"));
	      var drawMode = source.drawMode = this.renderer.gl.TRIANGLES;
	      glData.vao.draw(drawMode, source.indices.length, 0);
	    }
	  }, {
	    key: "renderSelect",
	    value: function renderSelect(source) {
	      var glData = source._glDatas[AwesomeTextRenderer.contextSelect];
	
	      if (!glData || source.select.dirty) {
	        this.renderer.bindVao(null);
	        glData = this.buildSelectGlData(source, this.renderer.gl);
	        source._glDatas[AwesomeTextRenderer.contextSelect] = glData;
	        source.select.dirty = false;
	      }
	
	      this.renderer.bindVao(glData.vao);
	
	      if (source.select.indexDirty) {
	        source.select.indexDirty = false;
	        glData.indexBuffer.upload(source.select.indices);
	      }
	
	      glData.vertexBuffer.upload(source.select.vertices);
	      this.renderer.bindShader(glData.shader);
	      this.renderer.state.setBlendMode(17);
	      glData.shader.uniforms.translationMatrix = source.worldTransform.toArray(true);
	      glData.shader.uniforms.bg_color = PIXI.utils.hex2rgb(this.selectColor);
	      var drawMode = source.drawMode = this.renderer.gl.TRIANGLES;
	      glData.vao.draw(drawMode, source.select.indices.length, 0);
	    }
	  }, {
	    key: "render",
	    value: function render(source) {
	      if (source.styleID !== source.style.styleID) {
	        source.update();
	      }
	
	      if (source.state === _text["default"].states.editable || source.state === _text["default"].states.selecting) {
	        this.renderSelect(source);
	      }
	
	      this.renderText(source);
	    }
	  }, {
	    key: "buildTextGlData",
	    value: function buildTextGlData(source, gl) {
	      var glData = {
	        shader: this.textShader,
	        vertexBuffer: glCore.GLBuffer.createVertexBuffer(gl, source.vertices, gl.STREAM_DRAW),
	        uvBuffer: glCore.GLBuffer.createVertexBuffer(gl, source.uvs, gl.STREAM_DRAW),
	        sdfBuffer: glCore.GLBuffer.createVertexBuffer(gl, source.sdfSizes, gl.STATIC_DRAW),
	        indexBuffer: glCore.GLBuffer.createIndexBuffer(gl, source.indices, gl.STATIC_DRAW),
	        // build the vao object that will render..
	        vao: null,
	        dirty: source.dirty,
	        indexDirty: source.indexDirty
	      };
	      glData.vao = new glCore.VertexArrayObject(gl).addIndex(glData.indexBuffer).addAttribute(glData.vertexBuffer, glData.shader.attributes.aVertexPosition, gl.FLOAT, false, 2 * 4, 0).addAttribute(glData.uvBuffer, glData.shader.attributes.aTextureCoord, gl.FLOAT, false, 2 * 4, 0).addAttribute(glData.sdfBuffer, glData.shader.attributes.aSdfSize, gl.FLOAT, false, 4, 0);
	      return glData;
	    }
	  }, {
	    key: "buildSelectGlData",
	    value: function buildSelectGlData(source, gl) {
	      var glData = {
	        shader: this.selectShader,
	        vertexBuffer: glCore.GLBuffer.createVertexBuffer(gl, source.select.vertices, gl.STREAM_DRAW),
	        indexBuffer: glCore.GLBuffer.createIndexBuffer(gl, source.select.indices, gl.STATIC_DRAW),
	        vao: null
	      };
	      glData.vao = new glCore.VertexArrayObject(gl).addIndex(glData.indexBuffer).addAttribute(glData.vertexBuffer, glData.shader.attributes.aVertexPosition, gl.FLOAT, false, 2 * 4, 0);
	      return glData;
	    }
	  }]);
	
	  return AwesomeTextRenderer;
	}(PIXI.ObjectRenderer);
	
	_defineProperty(AwesomeTextRenderer, "contextText", 0);
	
	_defineProperty(AwesomeTextRenderer, "contextSelect", 1);
	
	PIXI.WebGLRenderer.registerPlugin('AwesomeTextRenderer', AwesomeTextRenderer);
	var _default = AwesomeTextRenderer;
	exports["default"] = _default;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;
	
	var _layout = _interopRequireDefault(__webpack_require__(3));
	
	var _select = _interopRequireDefault(__webpack_require__(4));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
	
	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
	
	function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }
	
	function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }
	
	function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }
	
	function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var createIndices = __webpack_require__(5);
	
	var AwesomeText =
	/*#__PURE__*/
	function (_PIXI$mesh$Mesh) {
	  _inherits(AwesomeText, _PIXI$mesh$Mesh);
	
	  function AwesomeText(text, style, font) {
	    var _this;
	
	    _classCallCheck(this, AwesomeText);
	
	    _this = _possibleConstructorReturn(this, _getPrototypeOf(AwesomeText).call(this, font.texture));
	
	    _defineProperty(_assertThisInitialized(_this), "pluginName", 'AwesomeTextRenderer');
	
	    _defineProperty(_assertThisInitialized(_this), "state", AwesomeText.states.regular);
	
	    _defineProperty(_assertThisInitialized(_this), "clicksCount", 0);
	
	    _this.style = new PIXI.TextStyle(style);
	    _this.backgroundColor = style.backgroundColor;
	    _this._text = text;
	    _this._font = font.font;
	    _this._texture = font.texture;
	    _this.interactive = true;
	    _this.buttonMode = true;
	
	    _this.setState(AwesomeText.states.regular);
	
	    return _this;
	  }
	
	  _createClass(AwesomeText, [{
	    key: "update",
	    value: function update() {
	      var _this2 = this;
	
	      this.metrics = this.fontMetrics(this.style.fontSize);
	      this.layout = new _layout["default"](this.text, this.font, {
	        fontSize: this.style.fontSize,
	        wrapWords: this.style.breakWords,
	        wrapperWidth: this.style.wordWrapWidth,
	        align: this.style.align,
	        lineHeight: this.style.lineHeight
	      });
	      this.vertices = new Float32Array(this.layout.lettersCount * 4 * 2);
	      this.uvs = new Float32Array(this.layout.lettersCount * 4 * 2);
	      this.sdfSizes = new Float32Array(this.layout.lettersCount * 4);
	      this.arrayPositions = {
	        vertex: 0,
	        uvs: 0,
	        sdf: 0
	      };
	      this.select = new _select["default"](this.metrics, this.layout);
	      this.layout.wordsMetrics.forEach(function (word) {
	        _this2.writeString(word.word, _this2.font, _this2.metrics, [word.x, word.y]);
	      });
	      this.indices = createIndices({
	        clockwise: true,
	        type: 'uint16',
	        count: this.layout.lettersCount
	      });
	      this.styleID = this.style.styleID;
	      this.dirty = true;
	      this.indexDirty = true;
	      this._glDatas = [];
	    }
	  }, {
	    key: "setState",
	    value: function setState(newState) {
	      var states = AwesomeText.states;
	      if (!newState in Object.values(states)) return;
	
	      switch (newState) {
	        case states.regular:
	          this.setRegularState();
	          break;
	
	        case states.editable:
	          if (this.state === AwesomeText.states.regular) {
	            this.setEditableState();
	          }
	
	          break;
	      }
	
	      this.state = newState;
	      console.log("new state: " + this.state);
	    }
	  }, {
	    key: "setRange",
	    value: function setRange() {
	      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      if (start === null) start = this.select.range[0];
	      if (end === null) end = this.select.range[1];
	      this.select.range = [start, end];
	      this.select.update();
	    }
	  }, {
	    key: "setRegularState",
	    value: function setRegularState() {
	      var _this3 = this;
	
	      AwesomeText.currentEditingElement = null;
	      this.off("mousedown");
	      this.off("mousemove");
	      this.off("mouseup");
	      this.off("mouseupoutside");
	      this.on("click", function (e) {
	        if (_this3.clicksCount === 1) {
	          _this3.clicksCount = 0;
	
	          _this3.setState(AwesomeText.states.editable);
	        }
	
	        if (_this3.clicksCount === 0) {
	          _this3.clicksCount++;
	          window.setTimeout(function () {
	            _this3.clicksCount = 0;
	          }, 300);
	        }
	      });
	    }
	  }, {
	    key: "setEditableState",
	    value: function setEditableState() {
	      var _this4 = this;
	
	      if (AwesomeText.currentEditingElement != null) {
	        AwesomeText.currentEditingElement.setState(AwesomeText.states.regular);
	      }
	
	      AwesomeText.currentEditingElement = this;
	      this.setRange(0, 0);
	      this.off("click");
	      this.on("mousedown", function (e) {
	        _this4.setState(AwesomeText.states.selecting);
	
	        var position = e.data.global;
	        var closestLetter = text.select.getClosestGlyph(position.x + 12, position.y + text.layout.lineHeight / 2);
	        var index = text.layout.glyphs.indexOf(closestLetter);
	        text.setRange(index, index);
	      });
	      this.on("mousemove", function (e) {
	        if (_this4.state === AwesomeText.states.selecting) {
	          var position = e.data.global;
	          var closestLetter = text.select.getClosestGlyph(position.x, position.y + text.layout.lineHeight / 2);
	          var index = text.layout.glyphs.indexOf(closestLetter);
	          text.setRange(null, index);
	        }
	      });
	      this.on("mouseup", function (e) {
	        _this4.setState(AwesomeText.states.editable);
	      });
	      this.on("mouseupoutside", function (e) {
	        _this4.setState(AwesomeText.states.editable);
	      });
	    }
	  }, {
	    key: "writeString",
	    value: function writeString(string, font, font_metrics, pos) {
	      var _this5 = this;
	
	      var prev_char = " "; // Used to calculate kerning
	
	      var cpos = pos; // Current pen position
	
	      var x_max = 0.0; // Max width - used for bounding box
	
	      var scale = font_metrics.capScale;
	      var str_pos = 0;
	
	      for (;;) {
	        if (str_pos === string.length) break;
	        var schar = string[str_pos];
	        str_pos++;
	
	        if (schar === "\n") {
	          if (cpos[0] > x_max) x_max = cpos[0]; // Expanding the bounding rect
	
	          cpos[0] = pos[0];
	          cpos[1] -= font_metrics.lineHeight;
	          prev_char = " ";
	          continue;
	        }
	
	        if (schar === " ") {//schar = "_"
	          //cpos[0] += font.space_advance * scale;
	          //prev_char = " ";
	          //continue;
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
	          return _this5.vertices[_this5.arrayPositions.vertex++] = pos;
	        });
	        rect.uvs.map(function (uv) {
	          return _this5.uvs[_this5.arrayPositions.uvs++] = uv;
	        });
	        rect.sdfSizes.map(function (sdf) {
	          return _this5.sdfSizes[_this5.arrayPositions.sdf++] = sdf;
	        });
	        prev_char = schar;
	        cpos = rect.pos;
	      }
	
	      return {
	        rect: [pos[0], pos[1], x_max - pos[0], pos[1] - cpos[1] + font_metrics.lineHeight],
	        string_pos: str_pos //array_pos : array_pos
	
	      };
	    }
	  }, {
	    key: "fontMetrics",
	    value: function fontMetrics(fontSize) {
	      var moreLineGap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.2;
	      var _this$font = this.font,
	          cap_height = _this$font.cap_height,
	          x_height = _this$font.x_height,
	          fontAscent = _this$font.ascent,
	          descent = _this$font.descent,
	          line_gap = _this$font.line_gap;
	      var capScale = this.style.fontSize / cap_height;
	      var lowScale = Math.round(x_height * capScale) / x_height;
	      var ascent = Math.round(fontAscent * capScale);
	      var lineHeight = Math.round(capScale * (fontAscent + descent + line_gap) + moreLineGap);
	      if (this.style.lineHeight > 0) lineHeight = this.style.lineHeight;else this.style.lineHeight = lineHeight;
	      return {
	        capScale: capScale,
	        lowScale: lowScale,
	        ascent: ascent,
	        lineHeight: lineHeight
	      };
	    }
	  }, {
	    key: "charRect",
	    value: function charRect(pos, font, font_metrics, font_char) {
	      var kern = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0.0;
	      // Low case characters have first bit set in 'flags'
	      var lowcase = (font_char.flags & 1) === 1; // Pen position is at the top of the line, Y goes up
	
	      var baseline = pos[1] - font_metrics.ascent; // Low case chars use their own scale
	
	      var scale = lowcase ? font_metrics.lowScale : font_metrics.capScale; // Laying out the glyph rectangle
	
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
	
	_defineProperty(AwesomeText, "scale", 1.0);
	
	_defineProperty(AwesomeText, "states", {
	  regular: 0,
	  editable: 1,
	  selecting: 2
	});
	
	_defineProperty(AwesomeText, "currentEditingElement", null);
	
	var _default = AwesomeText;
	exports["default"] = _default;

/***/ }),
/* 3 */
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
	    var _this = this;
	
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
	
	    _defineProperty(this, "glyphs", []);
	
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
	    this.glyphs = [];
	    this.wordsMetrics.forEach(function (word) {
	      _this.getGlyphs(word.word, [word.x, word.y]);
	    });
	  }
	
	  _createClass(TextLayout, [{
	    key: "fontMetrics",
	    value: function fontMetrics(fontSize) {
	      var moreLineGap = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.2;
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
	      // Low case characters have first bit set in 'flags'
	      var lowcase = (font_char.flags & 1) === 1; // Pen position is at the top of the line, Y goes up
	
	      var baseline = pos[1] - this.metrics.ascent; // Low case chars use their own scale
	
	      var scale = lowcase ? this.metrics.lowScale : this.metrics.capScale; // Laying out the glyph rectangle
	
	      var g = font_char.rect;
	      var bottom = baseline - scale * (this.font.descent + this.font.iy);
	      var top = bottom + scale * this.font.row_height;
	      var left = pos[0] + scale * (font_char.bearing_x + kern - this.font.ix);
	      var right = left + scale * (g[2] - g[0]);
	      var p = [left, top, right, bottom]; // Advancing pen position
	
	      var new_pos_x = pos[0] + scale * font_char.advance_x;
	      var positions = [p[0], p[3], // left bottom,
	      p[2], p[3], // right bottom,
	      p[2], p[1], // right top
	      p[0], p[1]];
	      return {
	        positions: positions,
	        pos: [new_pos_x, pos[1]],
	        metrics: {
	          x: pos[0],
	          y: pos[1],
	          width: scale * font_char.advance_x
	        }
	      };
	    }
	  }, {
	    key: "getStringSize",
	    value: function getStringSize(string) {
	      var _this2 = this;
	
	      var width = 0;
	      var height = this.metrics.lineHeight;
	
	      var chars = _toConsumableArray(string); // Iterate thought the chars, calculate position
	
	
	      chars.forEach(function (_char) {
	        var font_char = _this2.font.chars[_char];
	        /*if (char === " ") {
	          width += this.font.space_advance * this.metrics.capScale;
	          return;
	        }*/
	        // Get char metrics
	
	        var charRect = _this2.charRect([width, 0], font_char, 0.2);
	
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
	      var _this3 = this;
	
	      var words = this.text.split(" ");
	
	      for (var i = 0; i < words.length - 1; i++) {
	        words[i] = words[i] + " ";
	      }
	
	      this.wordsMetrics = []; // Initial position
	
	      var x = this.startX;
	      var y = this.startY; // Calculate words positions on lines
	
	      words.forEach(function (word) {
	        var wordSize = _this3.getStringSize(word);
	
	        if (x + wordSize.width > _this3.startX + _this3.wrapperWidth && _this3.wrapWords) {
	          x = _this3.startX;
	          y += wordSize.height;
	        }
	
	        _this3.wordsMetrics.push(_extends({}, wordSize, {
	          x: x,
	          y: y,
	          word: word
	        })); //x += wordSize.width + this.font.space_advance * this.metrics.capScale;
	
	
	        x += wordSize.width;
	      }); // Calculate lines count
	
	      this.linesCount = (y - this.startY) / this.metrics.lineHeight + 1;
	      this.height = this.linesCount * this.metrics.lineHeight; // Change align TODO optimise
	
	      var _loop = function _loop(_i) {
	        var wordsOnLine = _this3.wordsMetrics.filter(function (word) {
	          return word.y === _this3.startY + _i * _this3.metrics.lineHeight;
	        });
	
	        var lastWord = wordsOnLine[wordsOnLine.length - 1];
	
	        if (lastWord) {
	          var freeSpace = _this3.startX + _this3.wrapperWidth - (lastWord.x + lastWord.width);
	          var leftOffset = 0;
	
	          switch (_this3.align) {
	            case "center":
	              leftOffset = freeSpace / 2;
	              break;
	
	            case "right":
	              leftOffset = freeSpace;
	              break;
	          }
	
	          _this3.wordsMetrics.forEach(function (word) {
	            if (word.y === _this3.startY + _i * _this3.metrics.lineHeight) {
	              word.x += leftOffset;
	            }
	          });
	        }
	      };
	
	      for (var _i = 0; _i < this.linesCount; ++_i) {
	        _loop(_i);
	      }
	    }
	  }, {
	    key: "getGlyphs",
	    value: function getGlyphs(string, pos) {
	      var prev_char = " "; // Used to calculate kerning
	
	      var cpos = pos; // Current pen position
	
	      var x_max = 0.0; // Max width - used for bounding box
	
	      var scale = this.metrics.capScale;
	      var str_pos = 0;
	
	      for (;;) {
	        if (str_pos === string.length) break;
	        var schar = string[str_pos];
	        str_pos++;
	
	        if (schar === "\n") {
	          if (cpos[0] > x_max) x_max = cpos[0]; // Expanding the bounding rect
	
	          cpos[0] = pos[0];
	          cpos[1] -= this.metrics.lineHeight;
	          prev_char = " ";
	          continue;
	        }
	
	        if (schar === " ") {
	          //schar = "_"
	          //cpos[0] += this.font.space_advance * scale;
	          prev_char = " "; //continue;
	        }
	
	        var font_char = this.font.chars[schar];
	
	        if (!font_char) {
	          // Substituting unavailable characters with '?'
	          schar = "?";
	          font_char = this.font.chars["?"];
	        }
	
	        var kern = this.font.kern[prev_char + schar];
	        if (!kern) kern = 0.0; // calculating the glyph rectangle and copying it to the vertex array
	
	        var rect = this.charRect(cpos, font_char, kern);
	        prev_char = schar;
	        cpos = rect.pos;
	        this.glyphs.push({
	          letter: schar,
	          vertices: rect.positions,
	          position: rect.pos,
	          metrics: rect.metrics
	        });
	      }
	    }
	  }]);
	
	  return TextLayout;
	}();
	
	var _default = TextLayout;
	exports["default"] = _default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
	
	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var createIndices = __webpack_require__(5);
	
	var Select =
	/*#__PURE__*/
	function () {
	  function Select(metrics, layout) {
	    _classCallCheck(this, Select);
	
	    _defineProperty(this, "range", [0, 0]);
	
	    _defineProperty(this, "metrics", null);
	
	    _defineProperty(this, "layout", null);
	
	    _defineProperty(this, "dirty", false);
	
	    _defineProperty(this, "indexBuffer", false);
	
	    this.metrics = metrics;
	    this.layout = layout;
	    this.update();
	  }
	
	  _createClass(Select, [{
	    key: "update",
	    value: function update() {
	      //if (this.range[0] > text.layout.glyphs.length) this.range[0] = text.layout.glyphs.length -1;
	      //if (this.range[1] > text.layout.glyphs.length) this.range[1] = text.layout.glyphs.length -1;
	      // vertices array for all selected lines
	      this.vertices = new Float32Array(this.layout.linesCount * 4 * 2); // Reverse range if we need it
	      //if (this.range[0] > this.range[1]) {
	      //  this.range = [this.range[1], this.range[0]];
	      //}
	      // If range is greater than 0
	
	      if (this.range[0] !== this.range[1]) {
	        this.buildVertices();
	      }
	
	      this.indices = createIndices({
	        clockwise: true,
	        type: 'uint16',
	        count: this.layout.linesCount
	      });
	      this.dirty = true;
	      this.indexBuffer = true;
	    }
	  }, {
	    key: "buildVertices",
	    value: function buildVertices() {
	      var _this = this;
	
	      // Select range
	      var start = this.layout.glyphs[this.range[0]];
	      var end = this.layout.glyphs[this.range[1]]; // Iterate thought all lines
	
	      var _loop = function _loop(i) {
	        var letterCount = 0; // letters passed
	
	        var firstLetter = null; // first letter on this line
	
	        var lastLetter = null; // last letter on this line
	
	        if (i * _this.metrics.lineHeight + _this.metrics.lineHeight < start.position[1]) return "continue";
	        if (i * _this.metrics.lineHeight + _this.metrics.lineHeight > end.position[1]) return "continue"; // Take every word, if it's last or first on line - change bounds letters
	
	        _this.layout.wordsMetrics.map(function (word) {
	          if (word.y === _this.layout.startY + i * _this.metrics.lineHeight) {
	            if (firstLetter === null) firstLetter = letterCount;
	            lastLetter = letterCount + word.word.length - 1;
	          }
	
	          letterCount += word.word.length;
	        }); // Bounds letters for current line
	
	
	        var startLineLetter = _this.layout.glyphs[firstLetter];
	        var endLineLetter = _this.layout.glyphs[lastLetter]; // If the start or end range is on this line, change bounds for them
	
	        if (start.position[1] === startLineLetter.position[1]) startLineLetter = start;
	        if (end.position[1] === endLineLetter.position[1]) endLineLetter = end; // We use offset to avoid selects overlapping
	
	        var offset = (_this.metrics.lineHeight - _this.metrics.ascent) / 2; // Add positions to array
	
	        _this.vertices[i * 8] = startLineLetter.vertices[0];
	        _this.vertices[i * 8 + 1] = startLineLetter.vertices[1] + offset;
	        _this.vertices[i * 8 + 2] = endLineLetter.vertices[2];
	        _this.vertices[i * 8 + 3] = endLineLetter.vertices[3] + offset;
	        _this.vertices[i * 8 + 4] = endLineLetter.vertices[4];
	        _this.vertices[i * 8 + 5] = endLineLetter.vertices[5] - offset;
	        _this.vertices[i * 8 + 6] = startLineLetter.vertices[6];
	        _this.vertices[i * 8 + 7] = startLineLetter.vertices[7] - offset;
	      };
	
	      for (var i = 0; i < this.layout.linesCount; ++i) {
	        var _ret = _loop(i);
	
	        if (_ret === "continue") continue;
	      }
	    }
	  }, {
	    key: "getClosestGlyph",
	    value: function getClosestGlyph(x, y) {
	      var closestGlyph = null;
	      var closestGlyphDist = null;
	      this.layout.glyphs.forEach(function (glyph) {
	        var distance = Math.sqrt(Math.pow(glyph.metrics.x + glyph.metrics.width - x, 2) + Math.pow(glyph.metrics.y - y, 2));
	
	        if (closestGlyph == null) {
	          closestGlyph = glyph;
	          closestGlyphDist = distance;
	        } else {
	          if (closestGlyphDist > distance) {
	            closestGlyph = glyph;
	            closestGlyphDist = distance;
	          }
	        }
	      });
	      return closestGlyph;
	    }
	  }]);
	
	  return Select;
	}();
	
	var _default = Select;
	exports["default"] = _default;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	var dtype = __webpack_require__(6)
	var anArray = __webpack_require__(7)
	var isBuffer = __webpack_require__(8)
	
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
/* 6 */
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
/* 7 */
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
/* 8 */
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
/* 9 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute float aSdfSize;\n\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\nuniform float sdfMultiplier;\n\nvarying vec2  tc0;\nvarying float doffset;\nvarying float sdf_texel;\n\n\n\nvoid main(void) {\n\n    //TODO MAKE ATTRIBUTE\n    float sdf_size = aSdfSize * sdfMultiplier;\n\n    //TODO MAKE UNIFORMS\n    float sdf_tex_size = 1024.0;\n\n\n    tc0 = aTextureCoord;\n    doffset = 1.0 / sdf_size;       // Distance field delta for one screen pixel\n    sdf_texel = 1.0 / sdf_tex_size;\n\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition , 1.0)).xy, 0.0, 1.0);\n\n}\n"

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nuniform sampler2D uSampler;\nuniform float hint_amount;\nuniform float subpixel_amount;\n\nuniform vec3 bg_color;\nuniform vec3 font_color;\n\nvarying vec2  tc0;\nvarying float doffset;\nvarying float sdf_texel;\n\n\n/*\n *  Subpixel coverage calculation\n *\n *  v - edge slope    -1.0 to 1.0          triplet\n *  a - pixel coverage 0.0 to 1.0          coverage\n *\n *      |<- glyph edge                      R  G  B\n *  +---+---+                             +--+--+--+\n *  |   |XXX| v = 1.0 (edge facing west)  |  |xx|XX|\n *  |   |XXX| a = 0.5 (50% coverage)      |  |xx|XX|\n *  |   |XXX|                             |  |xx|XX|\n *  +---+---+                             +--+--+--+\n *    pixel                                0  50 100\n *\n *\n *        R   G   B\n *\n *   1.0        +--+   <- top (abs( v ))\n *              |\n *       -+-----+--+-- <- ceil: 100% coverage\n *        |     |XX|\n *   0.0  |  +--+XX|\n *        |  |xx|XX|\n *       -+--+--+--+-- <- floor: 0% coverage\n *           |\n *  -1.0  +--+         <-  -abs(v)\n *        |\n *        |\n *        |\n *  -2.0  +            <- bottom: -abs(v)-1.0\n */\n\nvec3 subpixel( float v, float a ) {\n    float vt      = 0.6 * v; // 1.0 will make your eyes bleed\n    vec3  rgb_max = vec3( -vt, 0.0, vt );\n    float top     = abs( vt );\n    float bottom  = -top - 1.0;\n    float cfloor  = mix( top, bottom, a );\n    vec3  res     = clamp( rgb_max - vec3( cfloor ), 0.0, 1.0 );\n    return res;\n}\n\nvoid main2() {\n    gl_FragColor = texture2D(uSampler, tc0);\n}\n\nvoid main(void) {\n\n    // Sampling the texture, L pattern\n    float sdf       = texture2D( uSampler, tc0 ).r;\n    float sdf_north = texture2D( uSampler, tc0 + vec2( 0.0, sdf_texel ) ).r;\n    float sdf_east  = texture2D( uSampler, tc0 + vec2( sdf_texel, 0.0 ) ).r;\n\n    // Estimating stroke direction by the distance field gradient vector\n    vec2  sgrad     = vec2( sdf_east - sdf, sdf_north - sdf );\n    float sgrad_len = max( length( sgrad ), 1.0 / 128.0 );\n    vec2  grad      = sgrad / vec2( sgrad_len );\n    float vgrad = abs( grad.y ); // 0.0 - vertical stroke, 1.0 - horizontal one\n\n    float horz_scale  = 1.1; // Blurring vertical strokes along the X axis a bit\n    float vert_scale  = 0.6; // While adding some contrast to the horizontal strokes\n    float hdoffset    = mix( doffset * horz_scale, doffset * vert_scale, vgrad );\n    float res_doffset = mix( doffset, hdoffset, hint_amount );\n\n    float alpha       = smoothstep( 0.5 - res_doffset, 0.5 + res_doffset, sdf );\n\n    // Additional contrast\n    alpha             = pow( alpha, 1.0 + 0.2 * vgrad * hint_amount );\n\n    // Unfortunately there is no support for ARB_blend_func_extended in WebGL.\n    // Fortunately the background is filled with a solid color so we can do\n    // the blending inside the shader.\n\n    // Discarding pixels beyond a threshold to minimise possible artifacts.\n    if ( alpha < 20.0 / 256.0 ) discard;\n\n    vec3 channels = subpixel( grad.x * 0.5 * subpixel_amount, alpha ) + 0.1;\n\n    // For subpixel rendering we have to blend each color channel separately\n    vec3 res = mix( bg_color, font_color, channels );\n    gl_FragColor = vec4( res, 1.0 );\n}\n\n\n"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\n\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\n\nvoid main(void) {\n\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition , 1.0)).xy, 0.0, 1.0);\n\n}\n"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nuniform vec3 bg_color;\nvarying vec2  tc0;\n\nvoid main() {\n    gl_FragColor = vec4(bg_color,0.45);\n    gl_FragColor = vec4(1.0, 1.0, 1.0,0.2);\n}\n\n\n"

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3NzYxNjA1MWNmOWNmYzQ0YjA3MiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2R0eXBlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYW4tYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvdGV4dC92ZXJ0Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvdGV4dC9mcmFnLmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvc2VsZWN0L3ZlcnQuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9zZWxlY3QvZnJhZy5nbHNsIl0sIm5hbWVzIjpbIk9iamVjdCIsImFzc2lnbiIsIlBJWEkiLCJleHRyYXMiLCJBd2Vzb21lVGV4dCIsIlRleHQiLCJ2ZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsInNlbGVjdFZlcnRleHRTaGFkZXIiLCJzZWxlY3RGcmFnbWVudFNoYWRlciIsImdsQ29yZSIsIkF3ZXNvbWVUZXh0UmVuZGVyZXIiLCJyZW5kZXJlciIsInRleHRTaGFkZXIiLCJzZWxlY3RTaGFkZXIiLCJnbCIsImdldEV4dGVuc2lvbiIsIlNoYWRlciIsInNvdXJjZSIsImdsRGF0YSIsIl9nbERhdGFzIiwiY29udGV4dFRleHQiLCJiaW5kVmFvIiwiYnVpbGRUZXh0R2xEYXRhIiwidmFvIiwiZGlydHkiLCJ1dkJ1ZmZlciIsInVwbG9hZCIsInV2cyIsImluZGV4RGlydHkiLCJpbmRleEJ1ZmZlciIsImluZGljZXMiLCJ2ZXJ0ZXhCdWZmZXIiLCJ2ZXJ0aWNlcyIsImJpbmRTaGFkZXIiLCJzaGFkZXIiLCJzdGF0ZSIsInNldEJsZW5kTW9kZSIsImJsZW5kTW9kZSIsInVuaWZvcm1zIiwidVNhbXBsZXIiLCJiaW5kVGV4dHVyZSIsInRleHR1cmUiLCJ0cmFuc2xhdGlvbk1hdHJpeCIsIndvcmxkVHJhbnNmb3JtIiwidG9BcnJheSIsImhpbnRfYW1vdW50Iiwic2RmTXVsdGlwbGllciIsInNjYWxlIiwic3VicGl4ZWxfYW1vdW50IiwiZm9udF9jb2xvciIsInV0aWxzIiwiaGV4MnJnYiIsInN0eWxlIiwiZmlsbCIsInJlcGxhY2UiLCJiZ19jb2xvciIsImJhY2tncm91bmRDb2xvciIsImRyYXdNb2RlIiwiVFJJQU5HTEVTIiwiZHJhdyIsImxlbmd0aCIsImNvbnRleHRTZWxlY3QiLCJzZWxlY3QiLCJidWlsZFNlbGVjdEdsRGF0YSIsInNlbGVjdENvbG9yIiwic3R5bGVJRCIsInVwZGF0ZSIsInN0YXRlcyIsImVkaXRhYmxlIiwic2VsZWN0aW5nIiwicmVuZGVyU2VsZWN0IiwicmVuZGVyVGV4dCIsIkdMQnVmZmVyIiwiY3JlYXRlVmVydGV4QnVmZmVyIiwiU1RSRUFNX0RSQVciLCJzZGZCdWZmZXIiLCJzZGZTaXplcyIsIlNUQVRJQ19EUkFXIiwiY3JlYXRlSW5kZXhCdWZmZXIiLCJWZXJ0ZXhBcnJheU9iamVjdCIsImFkZEluZGV4IiwiYWRkQXR0cmlidXRlIiwiYXR0cmlidXRlcyIsImFWZXJ0ZXhQb3NpdGlvbiIsIkZMT0FUIiwiYVRleHR1cmVDb29yZCIsImFTZGZTaXplIiwiT2JqZWN0UmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwicmVnaXN0ZXJQbHVnaW4iLCJjcmVhdGVJbmRpY2VzIiwidGV4dCIsImZvbnQiLCJyZWd1bGFyIiwiVGV4dFN0eWxlIiwiX3RleHQiLCJfZm9udCIsIl90ZXh0dXJlIiwiaW50ZXJhY3RpdmUiLCJidXR0b25Nb2RlIiwic2V0U3RhdGUiLCJtZXRyaWNzIiwiZm9udE1ldHJpY3MiLCJmb250U2l6ZSIsImxheW91dCIsIlRleHRMYXlvdXQiLCJ3cmFwV29yZHMiLCJicmVha1dvcmRzIiwid3JhcHBlcldpZHRoIiwid29yZFdyYXBXaWR0aCIsImFsaWduIiwibGluZUhlaWdodCIsIkZsb2F0MzJBcnJheSIsImxldHRlcnNDb3VudCIsImFycmF5UG9zaXRpb25zIiwidmVydGV4Iiwic2RmIiwiU2VsZWN0Iiwid29yZHNNZXRyaWNzIiwiZm9yRWFjaCIsIndvcmQiLCJ3cml0ZVN0cmluZyIsIngiLCJ5IiwiY2xvY2t3aXNlIiwidHlwZSIsImNvdW50IiwibmV3U3RhdGUiLCJ2YWx1ZXMiLCJzZXRSZWd1bGFyU3RhdGUiLCJzZXRFZGl0YWJsZVN0YXRlIiwiY29uc29sZSIsImxvZyIsInN0YXJ0IiwiZW5kIiwicmFuZ2UiLCJjdXJyZW50RWRpdGluZ0VsZW1lbnQiLCJvZmYiLCJvbiIsImUiLCJjbGlja3NDb3VudCIsIndpbmRvdyIsInNldFRpbWVvdXQiLCJzZXRSYW5nZSIsInBvc2l0aW9uIiwiZGF0YSIsImdsb2JhbCIsImNsb3Nlc3RMZXR0ZXIiLCJnZXRDbG9zZXN0R2x5cGgiLCJpbmRleCIsImdseXBocyIsImluZGV4T2YiLCJzdHJpbmciLCJmb250X21ldHJpY3MiLCJwb3MiLCJwcmV2X2NoYXIiLCJjcG9zIiwieF9tYXgiLCJjYXBTY2FsZSIsInN0cl9wb3MiLCJzY2hhciIsImZvbnRfY2hhciIsImNoYXJzIiwia2VybiIsInJlY3QiLCJjaGFyUmVjdCIsInBvc2l0aW9ucyIsIm1hcCIsInV2Iiwic3RyaW5nX3BvcyIsIm1vcmVMaW5lR2FwIiwiY2FwX2hlaWdodCIsInhfaGVpZ2h0IiwiZm9udEFzY2VudCIsImFzY2VudCIsImRlc2NlbnQiLCJsaW5lX2dhcCIsImxvd1NjYWxlIiwiTWF0aCIsInJvdW5kIiwibG93Y2FzZSIsImZsYWdzIiwiYmFzZWxpbmUiLCJnIiwiYm90dG9tIiwiaXkiLCJ0b3AiLCJyb3dfaGVpZ2h0IiwibGVmdCIsImJlYXJpbmdfeCIsIml4IiwicmlnaHQiLCJwIiwibmV3X3Bvc194IiwiYWR2YW5jZV94Iiwic2RmX3NpemUiLCJ2YWx1ZSIsIm1lc2giLCJNZXNoIiwiY29uZmlnIiwic3BsaXQiLCJzdGFydFkiLCJjYWxjdWxhdGVXb3Jkc1Bvc2l0aW9ucyIsImdldEdseXBocyIsIndpZHRoIiwiaGVpZ2h0IiwiY2hhciIsIndvcmRzIiwiaSIsInN0YXJ0WCIsIndvcmRTaXplIiwiZ2V0U3RyaW5nU2l6ZSIsInB1c2giLCJsaW5lc0NvdW50Iiwid29yZHNPbkxpbmUiLCJmaWx0ZXIiLCJsYXN0V29yZCIsImZyZWVTcGFjZSIsImxlZnRPZmZzZXQiLCJsZXR0ZXIiLCJidWlsZFZlcnRpY2VzIiwibGV0dGVyQ291bnQiLCJmaXJzdExldHRlciIsImxhc3RMZXR0ZXIiLCJzdGFydExpbmVMZXR0ZXIiLCJlbmRMaW5lTGV0dGVyIiwib2Zmc2V0IiwiY2xvc2VzdEdseXBoIiwiY2xvc2VzdEdseXBoRGlzdCIsImdseXBoIiwiZGlzdGFuY2UiLCJzcXJ0IiwicG93Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQUEsT0FBTSxDQUFDQyxNQUFQLENBQWNDLElBQUksQ0FBQ0MsTUFBbkIsRUFBMkI7QUFDekJDLGNBQVcsRUFBRUM7QUFEWSxFQUEzQjs7QUFJQSxLQUFJLE9B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LGdDQUFnQywwQkFBMEIsMEJBQTBCLHNCQUFzQix3QkFBd0IsMEJBQTBCLHc4QkFBdzhCLDhCQUE4Qiw0RUFBNEUsZ0NBQWdDLGlDQUFpQyw0Q0FBNEMsa0VBQWtFLGlCQUFpQixHQUFHLGtCQUFrQiw4Q0FBOEMsR0FBRyxxQkFBcUIsK0ZBQStGLDhFQUE4RSw4RUFBOEUsNElBQTRJLDREQUE0RCxrREFBa0Qsa0NBQWtDLCtFQUErRSxrRkFBa0YsMklBQTJJLGdFQUFnRSxvRkFBb0Ysc0dBQXNHLGdVQUFnVSxnRkFBZ0YsdUlBQXVJLHNDQUFzQyxHQUFHLE87Ozs7OztBQ0Fsc0cscUVBQW9FLG1DQUFtQyxnQ0FBZ0MscUJBQXFCLDhHQUE4RyxLQUFLLEc7Ozs7OztBQ0EvUSw0REFBMkQsb0JBQW9CLGlCQUFpQix5Q0FBeUMsNkNBQTZDLEdBQUcsTyIsImZpbGUiOiJwaXhpLWF3ZXNvbWUtdGV4dC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJBd2Vzb21lVGV4dFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJBd2Vzb21lVGV4dFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCA3NzYxNjA1MWNmOWNmYzQ0YjA3MiIsImltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi9yZW5kZXJlclwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4vdGV4dFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi9sYXlvdXRcIjtcblxuT2JqZWN0LmFzc2lnbihQSVhJLmV4dHJhcywge1xuICBBd2Vzb21lVGV4dDogVGV4dFxufSk7XG5cbmlmICh0eXBlb2YgUElYSSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgaWYgKFBJWEkuZXh0cmFzKSB7XG4gICAgUElYSS5leHRyYXMuQXdlc29tZVRleHQgPSBUZXh0O1xuICB9IGVsc2Uge1xuICAgIFBJWEkuZXh0cmFzID0geyBBd2Vzb21lVGV4dDogVGV4dH07XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgVGV4dCxcbiAgUmVuZGVyZXIsXG4gIExheW91dFxufVxuXG4vKlxuXG5peCAgICAgICAgICAgID0gc2RmX3NpemUgLyB0ZXhfd2lkdGhcbml5ICAgICAgICAgICAgPSBzZGZfc2l6ZSAvIHRleF9oZWlnaHRcbnJvd19oZWlnaHQgICAgPSAocm93X2hlaWdodCArIDIgKiBzZGZfc2l6ZSkgLyB0ZXhfaGVpZ2h0O1xuYXNwZWN0ICAgICAgICA9IHRleF93aWR0aCAvIHRleF9oZWlnaHQ7XG5hc2NlbnQgICAgICAgID0gZm9udC0+YXNjZW50ICogc2NhbGVZXG5kZXNjZW50ICAgICAgID0gZmFic2YoZm9udC0+ZGVzY2VudCAqIHNjYWxlWSlcbmxpbmVfZ2FwICAgICAgPSBmb250LT5saW5lX2dhcCAqIHNjYWxlIFlcbmNhcF9oZWlnaHQgICAgPSBneGNhcC5tYXgueSAqIHNjYWxlWVxueF9oZWlnaHQgICAgICA9IGd4Lm1heC55ICogc2NhbGVZXG5zcGFjZV9hZHZhbmNlID0gZ3NwYWNlLmFkdmFuY2Vfd2lkdGggKiBzY2FsZVhcblxuXG5zY2FsZXkgPSByb3dfaGVpZ2h0IC8gdGV4X2hlaWdodCAvICggZm9udC0+Z2x5cGhfbWF4LnkgLSBmb250LT5nbHlwaF9taW4ueSApO1xuc2NhbGV4ID0gcm93X2hlaWdodCAvIHRleF93aWR0aCAvICggZm9udC0+Z2x5cGhfbWF4LnkgLSBmb250LT5nbHlwaF9taW4ueSApO1xuZ3NwYWNlID0gZm9udC0+Z2x5cGhzWyBmb250LT5nbHlwaF9pZHgoICcgJyApIF07XG5neCAgICAgPSBmb250LT5nbHlwaHNbIGZvbnQtPmdseXBoX2lkeCggJ3gnICkgXVxuZ3hjYXAgID0gZm9udC0+Z2x5cGhzWyBmb250LT5nbHlwaF9pZHgoICdYJyApIF1cblxuXG5zZGZfc2l6ZSA9IDEwXG5cbiovXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0IEF3ZXNvbWVUZXh0IGZyb20gXCIuL3RleHRcIjtcblxuY29uc3QgdmVydGV4U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy90ZXh0L3ZlcnQuZ2xzbFwiKTtcbmNvbnN0IGZyYWdtZW50U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy90ZXh0L2ZyYWcuZ2xzbFwiKTtcblxuY29uc3Qgc2VsZWN0VmVydGV4dFNoYWRlciA9IHJlcXVpcmUoXCIuL3NoYWRlcnMvc2VsZWN0L3ZlcnQuZ2xzbFwiKTtcbmNvbnN0IHNlbGVjdEZyYWdtZW50U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy9zZWxlY3QvZnJhZy5nbHNsXCIpO1xuXG5jb25zdCBnbENvcmUgPSBQSVhJLmdsQ29yZTtcblxuY2xhc3MgQXdlc29tZVRleHRSZW5kZXJlciBleHRlbmRzIFBJWEkuT2JqZWN0UmVuZGVyZXIge1xuXG4gIHN0YXRpYyBjb250ZXh0VGV4dCA9IDA7XG4gIHN0YXRpYyBjb250ZXh0U2VsZWN0ID0gMTtcblxuICBzZWxlY3RDb2xvciA9IDB4RkZCM0MzO1xuXG5cbiAgY29uc3RydWN0b3IocmVuZGVyZXIpIHtcbiAgICBzdXBlcihyZW5kZXJlcik7XG4gICAgdGhpcy50ZXh0U2hhZGVyID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdFNoYWRlciA9IG51bGw7XG5cbiAgfVxuXG4gIG9uQ29udGV4dENoYW5nZSgpIHtcbiAgICBjb25zdCBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG4gICAgZ2wuZ2V0RXh0ZW5zaW9uKFwiT0VTX3N0YW5kYXJkX2Rlcml2YXRpdmVzXCIpO1xuICAgIHRoaXMudGV4dFNoYWRlciA9IG5ldyBQSVhJLlNoYWRlcihnbCwgdmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XG4gICAgdGhpcy5zZWxlY3RTaGFkZXIgPSBuZXcgUElYSS5TaGFkZXIoZ2wsIHNlbGVjdFZlcnRleHRTaGFkZXIsIHNlbGVjdEZyYWdtZW50U2hhZGVyKTtcbiAgfVxuXG4gIHJlbmRlclRleHQoc291cmNlKSB7XG5cbiAgICBsZXQgZ2xEYXRhID0gc291cmNlLl9nbERhdGFzW0F3ZXNvbWVUZXh0UmVuZGVyZXIuY29udGV4dFRleHRdO1xuXG4gICAgaWYgKCFnbERhdGEpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYmluZFZhbyhudWxsKTtcbiAgICAgIGdsRGF0YSA9IHRoaXMuYnVpbGRUZXh0R2xEYXRhKHNvdXJjZSwgdGhpcy5yZW5kZXJlci5nbCk7XG4gICAgICBzb3VyY2UuX2dsRGF0YXNbQXdlc29tZVRleHRSZW5kZXJlci5jb250ZXh0VGV4dF0gPSBnbERhdGE7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlci5iaW5kVmFvKGdsRGF0YS52YW8pO1xuXG4gICAgaWYgKHNvdXJjZS5kaXJ0eSkge1xuICAgICAgc291cmNlLmRpcnR5ID0gZmFsc2U7XG4gICAgICBnbERhdGEudXZCdWZmZXIudXBsb2FkKHNvdXJjZS51dnMpO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UuaW5kZXhEaXJ0eSkge1xuICAgICAgc291cmNlLmluZGV4RGlydHkgPSBmYWxzZTtcbiAgICAgIGdsRGF0YS5pbmRleEJ1ZmZlci51cGxvYWQoc291cmNlLmluZGljZXMpO1xuICAgIH1cblxuICAgIGdsRGF0YS52ZXJ0ZXhCdWZmZXIudXBsb2FkKHNvdXJjZS52ZXJ0aWNlcyk7XG4gICAgdGhpcy5yZW5kZXJlci5iaW5kU2hhZGVyKGdsRGF0YS5zaGFkZXIpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zdGF0ZS5zZXRCbGVuZE1vZGUoc291cmNlLmJsZW5kTW9kZSk7XG5cbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnVTYW1wbGVyID0gdGhpcy5yZW5kZXJlci5iaW5kVGV4dHVyZShzb3VyY2UudGV4dHVyZSk7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy50cmFuc2xhdGlvbk1hdHJpeCA9IHNvdXJjZS53b3JsZFRyYW5zZm9ybS50b0FycmF5KHRydWUpO1xuXG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5oaW50X2Ftb3VudCA9IDEuMDtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnNkZk11bHRpcGxpZXIgPSBBd2Vzb21lVGV4dC5zY2FsZTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnN1YnBpeGVsX2Ftb3VudCA9IDEuMDtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmZvbnRfY29sb3IgPSBQSVhJLnV0aWxzLmhleDJyZ2Ioc291cmNlLnN0eWxlLmZpbGwucmVwbGFjZShcIiNcIiwgXCIweFwiKSk7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5iZ19jb2xvciA9IFBJWEkudXRpbHMuaGV4MnJnYihzb3VyY2UuYmFja2dyb3VuZENvbG9yLnJlcGxhY2UoXCIjXCIsIFwiMHhcIikpO1xuXG4gICAgY29uc3QgZHJhd01vZGUgPSBzb3VyY2UuZHJhd01vZGUgPSB0aGlzLnJlbmRlcmVyLmdsLlRSSUFOR0xFUztcbiAgICBnbERhdGEudmFvLmRyYXcoZHJhd01vZGUsIHNvdXJjZS5pbmRpY2VzLmxlbmd0aCwgMCk7XG5cbiAgfVxuXG4gIHJlbmRlclNlbGVjdChzb3VyY2UpIHtcbiAgICBsZXQgZ2xEYXRhID0gc291cmNlLl9nbERhdGFzW0F3ZXNvbWVUZXh0UmVuZGVyZXIuY29udGV4dFNlbGVjdF07XG5cbiAgICBpZiAoIWdsRGF0YSB8fCBzb3VyY2Uuc2VsZWN0LmRpcnR5KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmJpbmRWYW8obnVsbCk7XG4gICAgICBnbERhdGEgPSB0aGlzLmJ1aWxkU2VsZWN0R2xEYXRhKHNvdXJjZSwgdGhpcy5yZW5kZXJlci5nbCk7XG4gICAgICBzb3VyY2UuX2dsRGF0YXNbQXdlc29tZVRleHRSZW5kZXJlci5jb250ZXh0U2VsZWN0XSA9IGdsRGF0YTtcbiAgICAgIHNvdXJjZS5zZWxlY3QuZGlydHkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyLmJpbmRWYW8oZ2xEYXRhLnZhbyk7XG5cbiAgICBpZiAoc291cmNlLnNlbGVjdC5pbmRleERpcnR5KSB7XG4gICAgICBzb3VyY2Uuc2VsZWN0LmluZGV4RGlydHkgPSBmYWxzZTtcbiAgICAgIGdsRGF0YS5pbmRleEJ1ZmZlci51cGxvYWQoc291cmNlLnNlbGVjdC5pbmRpY2VzKTtcbiAgICB9XG5cbiAgICBnbERhdGEudmVydGV4QnVmZmVyLnVwbG9hZChzb3VyY2Uuc2VsZWN0LnZlcnRpY2VzKTtcbiAgICB0aGlzLnJlbmRlcmVyLmJpbmRTaGFkZXIoZ2xEYXRhLnNoYWRlcik7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnN0YXRlLnNldEJsZW5kTW9kZSgxNyk7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy50cmFuc2xhdGlvbk1hdHJpeCA9IHNvdXJjZS53b3JsZFRyYW5zZm9ybS50b0FycmF5KHRydWUpO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuYmdfY29sb3IgPSBQSVhJLnV0aWxzLmhleDJyZ2IodGhpcy5zZWxlY3RDb2xvcik7XG5cbiAgICBjb25zdCBkcmF3TW9kZSA9IHNvdXJjZS5kcmF3TW9kZSA9IHRoaXMucmVuZGVyZXIuZ2wuVFJJQU5HTEVTO1xuICAgIGdsRGF0YS52YW8uZHJhdyhkcmF3TW9kZSwgc291cmNlLnNlbGVjdC5pbmRpY2VzLmxlbmd0aCwgMCk7XG4gIH1cblxuICByZW5kZXIoc291cmNlKSB7XG5cbiAgICBpZiAoc291cmNlLnN0eWxlSUQgIT09IHNvdXJjZS5zdHlsZS5zdHlsZUlEKSB7XG4gICAgICBzb3VyY2UudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZS5zdGF0ZSA9PT0gQXdlc29tZVRleHQuc3RhdGVzLmVkaXRhYmxlIHx8IHNvdXJjZS5zdGF0ZSA9PT0gQXdlc29tZVRleHQuc3RhdGVzLnNlbGVjdGluZykge1xuICAgICAgdGhpcy5yZW5kZXJTZWxlY3Qoc291cmNlKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJUZXh0KHNvdXJjZSk7XG4gIH1cblxuICBidWlsZFRleHRHbERhdGEoc291cmNlLCBnbCkge1xuXG4gICAgY29uc3QgZ2xEYXRhID0ge1xuICAgICAgc2hhZGVyOiB0aGlzLnRleHRTaGFkZXIsXG4gICAgICB2ZXJ0ZXhCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoZ2wsIHNvdXJjZS52ZXJ0aWNlcywgZ2wuU1RSRUFNX0RSQVcpLFxuICAgICAgdXZCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoZ2wsIHNvdXJjZS51dnMsIGdsLlNUUkVBTV9EUkFXKSxcbiAgICAgIHNkZkJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgc291cmNlLnNkZlNpemVzLCBnbC5TVEFUSUNfRFJBVyksXG4gICAgICBpbmRleEJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZUluZGV4QnVmZmVyKGdsLCBzb3VyY2UuaW5kaWNlcywgZ2wuU1RBVElDX0RSQVcpLFxuICAgICAgLy8gYnVpbGQgdGhlIHZhbyBvYmplY3QgdGhhdCB3aWxsIHJlbmRlci4uXG4gICAgICB2YW86IG51bGwsXG4gICAgICBkaXJ0eTogc291cmNlLmRpcnR5LFxuICAgICAgaW5kZXhEaXJ0eTogc291cmNlLmluZGV4RGlydHksXG4gICAgfTtcblxuICAgIGdsRGF0YS52YW8gPSBuZXcgZ2xDb3JlLlZlcnRleEFycmF5T2JqZWN0KGdsKVxuICAgICAgLmFkZEluZGV4KGdsRGF0YS5pbmRleEJ1ZmZlcilcbiAgICAgIC5hZGRBdHRyaWJ1dGUoZ2xEYXRhLnZlcnRleEJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFWZXJ0ZXhQb3NpdGlvbiwgZ2wuRkxPQVQsIGZhbHNlLCAyICogNCwgMClcbiAgICAgIC5hZGRBdHRyaWJ1dGUoZ2xEYXRhLnV2QnVmZmVyLCBnbERhdGEuc2hhZGVyLmF0dHJpYnV0ZXMuYVRleHR1cmVDb29yZCwgZ2wuRkxPQVQsIGZhbHNlLCAyICogNCwgMClcbiAgICAgIC5hZGRBdHRyaWJ1dGUoZ2xEYXRhLnNkZkJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFTZGZTaXplLCBnbC5GTE9BVCwgZmFsc2UsIDQsIDApO1xuXG4gICAgcmV0dXJuIGdsRGF0YVxuICB9XG5cbiAgYnVpbGRTZWxlY3RHbERhdGEoc291cmNlLCBnbCkge1xuICAgIGNvbnN0IGdsRGF0YSA9IHtcbiAgICAgIHNoYWRlcjogdGhpcy5zZWxlY3RTaGFkZXIsXG4gICAgICB2ZXJ0ZXhCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoZ2wsIHNvdXJjZS5zZWxlY3QudmVydGljZXMsIGdsLlNUUkVBTV9EUkFXKSxcbiAgICAgIGluZGV4QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlSW5kZXhCdWZmZXIoZ2wsIHNvdXJjZS5zZWxlY3QuaW5kaWNlcywgZ2wuU1RBVElDX0RSQVcpLFxuICAgICAgdmFvOiBudWxsXG4gICAgfTtcblxuICAgIGdsRGF0YS52YW8gPSBuZXcgZ2xDb3JlLlZlcnRleEFycmF5T2JqZWN0KGdsKVxuICAgICAgLmFkZEluZGV4KGdsRGF0YS5pbmRleEJ1ZmZlcilcbiAgICAgIC5hZGRBdHRyaWJ1dGUoZ2xEYXRhLnZlcnRleEJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFWZXJ0ZXhQb3NpdGlvbiwgZ2wuRkxPQVQsIGZhbHNlLCAyICogNCwgMClcblxuICAgIHJldHVybiBnbERhdGFcbiAgfVxuXG59XG5cblBJWEkuV2ViR0xSZW5kZXJlci5yZWdpc3RlclBsdWdpbignQXdlc29tZVRleHRSZW5kZXJlcicsIEF3ZXNvbWVUZXh0UmVuZGVyZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBBd2Vzb21lVGV4dFJlbmRlcmVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyZXIuanMiLCJjb25zdCBjcmVhdGVJbmRpY2VzID0gcmVxdWlyZShcInF1YWQtaW5kaWNlc1wiKVxuaW1wb3J0IFRleHRMYXlvdXQgZnJvbSAnLi9sYXlvdXQnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL3NlbGVjdCdcblxuY2xhc3MgQXdlc29tZVRleHQgZXh0ZW5kcyBQSVhJLm1lc2guTWVzaCB7XG5cbiAgc3RhdGljIHNjYWxlID0gMS4wO1xuICBzdGF0aWMgc3RhdGVzID0ge3JlZ3VsYXI6IDAsIGVkaXRhYmxlOiAxLCBzZWxlY3Rpbmc6IDJ9XG5cbiAgc3RhdGljIGN1cnJlbnRFZGl0aW5nRWxlbWVudCA9IG51bGw7XG5cbiAgcGx1Z2luTmFtZSA9ICdBd2Vzb21lVGV4dFJlbmRlcmVyJztcbiAgc3RhdGUgPSBBd2Vzb21lVGV4dC5zdGF0ZXMucmVndWxhcjtcbiAgY2xpY2tzQ291bnQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHRleHQsIHN0eWxlLCBmb250KSB7XG4gICAgc3VwZXIoZm9udC50ZXh0dXJlKTtcblxuICAgIHRoaXMuc3R5bGUgPSBuZXcgUElYSS5UZXh0U3R5bGUoc3R5bGUpO1xuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICAgIHRoaXMuX3RleHQgPSB0ZXh0O1xuICAgIHRoaXMuX2ZvbnQgPSBmb250LmZvbnQ7XG4gICAgdGhpcy5fdGV4dHVyZSA9IGZvbnQudGV4dHVyZTtcblxuICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuYnV0dG9uTW9kZSA9IHRydWU7XG5cbiAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLmZvbnRNZXRyaWNzKHRoaXMuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgdGhpcy5sYXlvdXQgPSBuZXcgVGV4dExheW91dCh0aGlzLnRleHQsIHRoaXMuZm9udCwge1xuICAgICAgZm9udFNpemU6IHRoaXMuc3R5bGUuZm9udFNpemUsXG4gICAgICB3cmFwV29yZHM6IHRoaXMuc3R5bGUuYnJlYWtXb3JkcyxcbiAgICAgIHdyYXBwZXJXaWR0aDogdGhpcy5zdHlsZS53b3JkV3JhcFdpZHRoLFxuICAgICAgYWxpZ246IHRoaXMuc3R5bGUuYWxpZ24sXG4gICAgICBsaW5lSGVpZ2h0OiB0aGlzLnN0eWxlLmxpbmVIZWlnaHQsXG4gICAgfSk7XG5cbiAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0ICogMik7XG4gICAgdGhpcy51dnMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubGF5b3V0LmxldHRlcnNDb3VudCAqIDQgKiAyKTtcbiAgICB0aGlzLnNkZlNpemVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0KTtcblxuICAgIHRoaXMuYXJyYXlQb3NpdGlvbnMgPSB7IHZlcnRleDogMCwgdXZzOiAwLCBzZGY6IDAgfTtcblxuICAgIHRoaXMuc2VsZWN0ID0gbmV3IFNlbGVjdCh0aGlzLm1ldHJpY3MsIHRoaXMubGF5b3V0KTtcblxuICAgIHRoaXMubGF5b3V0LndvcmRzTWV0cmljcy5mb3JFYWNoICh3b3JkID0+IHtcbiAgICAgIHRoaXMud3JpdGVTdHJpbmcod29yZC53b3JkLCB0aGlzLmZvbnQsIHRoaXMubWV0cmljcywgW3dvcmQueCwgd29yZC55XSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLmluZGljZXMgPSBjcmVhdGVJbmRpY2VzKHtcbiAgICAgIGNsb2Nrd2lzZTogdHJ1ZSxcbiAgICAgIHR5cGU6ICd1aW50MTYnLFxuICAgICAgY291bnQ6IHRoaXMubGF5b3V0LmxldHRlcnNDb3VudFxuICAgIH0pO1xuXG4gICAgdGhpcy5zdHlsZUlEID0gdGhpcy5zdHlsZS5zdHlsZUlEO1xuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgIHRoaXMuaW5kZXhEaXJ0eSA9IHRydWU7XG4gICAgdGhpcy5fZ2xEYXRhcyA9IFtdO1xuICB9XG5cbiAgc2V0U3RhdGUobmV3U3RhdGUpIHtcblxuICAgIGNvbnN0IHsgc3RhdGVzIH0gPSBBd2Vzb21lVGV4dDtcblxuICAgIGlmICghbmV3U3RhdGUgaW4gT2JqZWN0LnZhbHVlcyhzdGF0ZXMpKSByZXR1cm47XG5cbiAgICBzd2l0Y2ggKG5ld1N0YXRlKSB7XG4gICAgICBjYXNlIHN0YXRlcy5yZWd1bGFyOlxuICAgICAgICB0aGlzLnNldFJlZ3VsYXJTdGF0ZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc3RhdGVzLmVkaXRhYmxlOlxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQXdlc29tZVRleHQuc3RhdGVzLnJlZ3VsYXIpIHtcbiAgICAgICAgICB0aGlzLnNldEVkaXRhYmxlU3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0gbmV3U3RhdGU7XG4gICAgY29uc29sZS5sb2coXCJuZXcgc3RhdGU6IFwiICsgdGhpcy5zdGF0ZSk7XG4gIH1cblxuICBzZXRSYW5nZShzdGFydCA9IG51bGwsIGVuZCA9IG51bGwpIHtcbiAgICBpZiAoc3RhcnQgPT09IG51bGwpIHN0YXJ0ID0gdGhpcy5zZWxlY3QucmFuZ2VbMF07XG4gICAgaWYgKGVuZCA9PT0gbnVsbCkgZW5kID0gdGhpcy5zZWxlY3QucmFuZ2VbMV07XG5cbiAgICB0aGlzLnNlbGVjdC5yYW5nZSA9IFtzdGFydCwgZW5kXTtcblxuICAgIHRoaXMuc2VsZWN0LnVwZGF0ZSgpO1xuICB9XG5cbiAgZ2V0IHRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cblxuICBzZXQgdGV4dCh2YWx1ZSkge1xuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc2V0UmVndWxhclN0YXRlKCkge1xuXG4gICAgQXdlc29tZVRleHQuY3VycmVudEVkaXRpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgIHRoaXMub2ZmKFwibW91c2Vkb3duXCIpO1xuICAgIHRoaXMub2ZmKFwibW91c2Vtb3ZlXCIpO1xuICAgIHRoaXMub2ZmKFwibW91c2V1cFwiKTtcbiAgICB0aGlzLm9mZihcIm1vdXNldXBvdXRzaWRlXCIpO1xuXG4gICAgdGhpcy5vbihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgaWYgKHRoaXMuY2xpY2tzQ291bnQgPT09IDEpIHtcbiAgICAgICAgdGhpcy5jbGlja3NDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLmVkaXRhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY2xpY2tzQ291bnQgPT09IDApIHtcbiAgICAgICAgdGhpcy5jbGlja3NDb3VudCsrO1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jbGlja3NDb3VudCA9IDA7XG4gICAgICAgIH0sIDMwMClcbiAgICAgIH1cbiAgICB9KVxuXG4gIH1cblxuICBzZXRFZGl0YWJsZVN0YXRlKCkge1xuXG4gICAgaWYgKEF3ZXNvbWVUZXh0LmN1cnJlbnRFZGl0aW5nRWxlbWVudCAhPSBudWxsKSB7XG4gICAgICBBd2Vzb21lVGV4dC5jdXJyZW50RWRpdGluZ0VsZW1lbnQuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLnJlZ3VsYXIpO1xuICAgIH1cblxuICAgIEF3ZXNvbWVUZXh0LmN1cnJlbnRFZGl0aW5nRWxlbWVudCA9IHRoaXM7XG4gICAgdGhpcy5zZXRSYW5nZSgwLDApO1xuXG4gICAgdGhpcy5vZmYoXCJjbGlja1wiKTtcblxuICAgIHRoaXMub24oXCJtb3VzZWRvd25cIiwgZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5zZWxlY3RpbmcpO1xuXG4gICAgICBsZXQgcG9zaXRpb24gPSBlLmRhdGEuZ2xvYmFsO1xuXG4gICAgICBjb25zdCBjbG9zZXN0TGV0dGVyID0gdGV4dC5zZWxlY3QuZ2V0Q2xvc2VzdEdseXBoKHBvc2l0aW9uLnggKyAxMiwgcG9zaXRpb24ueSArIHRleHQubGF5b3V0LmxpbmVIZWlnaHQgLyAyKTtcbiAgICAgIGNvbnN0IGluZGV4ID0gdGV4dC5sYXlvdXQuZ2x5cGhzLmluZGV4T2YoY2xvc2VzdExldHRlcik7XG5cbiAgICAgIHRleHQuc2V0UmFuZ2UoaW5kZXgsIGluZGV4KTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oXCJtb3VzZW1vdmVcIiwgZSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQXdlc29tZVRleHQuc3RhdGVzLnNlbGVjdGluZykge1xuICAgICAgICBsZXQgcG9zaXRpb24gPSBlLmRhdGEuZ2xvYmFsO1xuICAgICAgICBjb25zdCBjbG9zZXN0TGV0dGVyID0gdGV4dC5zZWxlY3QuZ2V0Q2xvc2VzdEdseXBoKHBvc2l0aW9uLngsIHBvc2l0aW9uLnkgKyB0ZXh0LmxheW91dC5saW5lSGVpZ2h0IC8gMik7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGV4dC5sYXlvdXQuZ2x5cGhzLmluZGV4T2YoY2xvc2VzdExldHRlcik7XG4gICAgICAgIHRleHQuc2V0UmFuZ2UobnVsbCwgaW5kZXgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vbihcIm1vdXNldXBcIiwgZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5lZGl0YWJsZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKFwibW91c2V1cG91dHNpZGVcIiwgZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5lZGl0YWJsZSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGdldCB0ZXh0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLl90ZXh0dXJlO1xuICB9XG5cbiAgZ2V0IGZvbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvbnRcbiAgfVxuXG4gIHdyaXRlU3RyaW5nKCBzdHJpbmcsIGZvbnQsIGZvbnRfbWV0cmljcywgcG9zKSB7XG4gICAgbGV0IHByZXZfY2hhciA9IFwiIFwiOyAgLy8gVXNlZCB0byBjYWxjdWxhdGUga2VybmluZ1xuICAgIGxldCBjcG9zICAgICAgPSBwb3M7ICAvLyBDdXJyZW50IHBlbiBwb3NpdGlvblxuICAgIGxldCB4X21heCAgICAgPSAwLjA7ICAvLyBNYXggd2lkdGggLSB1c2VkIGZvciBib3VuZGluZyBib3hcbiAgICBsZXQgc2NhbGUgICAgID0gZm9udF9tZXRyaWNzLmNhcFNjYWxlO1xuXG4gICAgbGV0IHN0cl9wb3MgPSAwO1xuXG4gICAgZm9yKDs7KSB7XG4gICAgICBpZiAoIHN0cl9wb3MgPT09IHN0cmluZy5sZW5ndGggKSBicmVhaztcblxuICAgICAgdmFyIHNjaGFyID0gc3RyaW5nWyBzdHJfcG9zIF07XG4gICAgICBzdHJfcG9zKys7XG5cbiAgICAgIGlmICggc2NoYXIgPT09IFwiXFxuXCIgKSB7XG4gICAgICAgIGlmICggY3Bvc1swXSA+IHhfbWF4ICkgeF9tYXggPSBjcG9zWzBdOyAvLyBFeHBhbmRpbmcgdGhlIGJvdW5kaW5nIHJlY3RcbiAgICAgICAgY3Bvc1swXSAgPSBwb3NbMF07XG4gICAgICAgIGNwb3NbMV0gLT0gZm9udF9tZXRyaWNzLmxpbmVIZWlnaHQ7XG4gICAgICAgIHByZXZfY2hhciA9IFwiIFwiO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCBzY2hhciA9PT0gXCIgXCIgKSB7XG4gICAgICAgIC8vc2NoYXIgPSBcIl9cIlxuICAgICAgICAvL2Nwb3NbMF0gKz0gZm9udC5zcGFjZV9hZHZhbmNlICogc2NhbGU7XG4gICAgICAgIC8vcHJldl9jaGFyID0gXCIgXCI7XG4gICAgICAgIC8vY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBmb250X2NoYXIgPSBmb250LmNoYXJzWyBzY2hhciBdO1xuICAgICAgaWYgKCAhZm9udF9jaGFyICkgeyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdWJzdGl0dXRpbmcgdW5hdmFpbGFibGUgY2hhcmFjdGVycyB3aXRoICc/J1xuICAgICAgICBzY2hhciA9IFwiP1wiO1xuICAgICAgICBmb250X2NoYXIgPSBmb250LmNoYXJzWyBcIj9cIiBdO1xuICAgICAgfVxuXG4gICAgICB2YXIga2VybiA9IGZvbnQua2VyblsgcHJldl9jaGFyICsgc2NoYXIgXTtcbiAgICAgIGlmICggIWtlcm4gKSBrZXJuID0gMC4wO1xuXG4gICAgICAvLyBjYWxjdWxhdGluZyB0aGUgZ2x5cGggcmVjdGFuZ2xlIGFuZCBjb3B5aW5nIGl0IHRvIHRoZSB2ZXJ0ZXggYXJyYXlcbiAgICAgIHZhciByZWN0ID0gdGhpcy5jaGFyUmVjdCggY3BvcywgZm9udCwgZm9udF9tZXRyaWNzLCBmb250X2NoYXIsIGtlcm4gKTtcblxuICAgICAgcmVjdC5wb3NpdGlvbnMubWFwKChwb3MpID0+IHRoaXMudmVydGljZXNbIHRoaXMuYXJyYXlQb3NpdGlvbnMudmVydGV4KysgXSA9IHBvcyApO1xuICAgICAgcmVjdC51dnMubWFwKCh1dikgPT4gdGhpcy51dnNbIHRoaXMuYXJyYXlQb3NpdGlvbnMudXZzKysgXSA9IHV2ICk7XG4gICAgICByZWN0LnNkZlNpemVzLm1hcCgoc2RmKSA9PiB0aGlzLnNkZlNpemVzWyB0aGlzLmFycmF5UG9zaXRpb25zLnNkZisrIF0gPSBzZGYgKTtcblxuICAgICAgcHJldl9jaGFyID0gc2NoYXI7XG4gICAgICBjcG9zID0gcmVjdC5wb3M7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlY3QgOiBbIHBvc1swXSwgcG9zWzFdLCB4X21heCAtIHBvc1swXSwgcG9zWzFdIC0gY3Bvc1sxXSArIGZvbnRfbWV0cmljcy5saW5lSGVpZ2h0IF0sXG4gICAgICBzdHJpbmdfcG9zIDogc3RyX3BvcyxcbiAgICAgIC8vYXJyYXlfcG9zIDogYXJyYXlfcG9zXG4gICAgfVxuXG4gIH1cblxuICBmb250TWV0cmljcyhmb250U2l6ZSwgbW9yZUxpbmVHYXAgPSAwLjIpIHtcblxuICAgIGNvbnN0IHtjYXBfaGVpZ2h0LCB4X2hlaWdodCwgYXNjZW50OiBmb250QXNjZW50ICwgZGVzY2VudCwgbGluZV9nYXB9ID0gdGhpcy5mb250O1xuXG4gICAgY29uc3QgY2FwU2NhbGUgPSB0aGlzLnN0eWxlLmZvbnRTaXplIC8gY2FwX2hlaWdodDtcbiAgICBjb25zdCBsb3dTY2FsZSA9IE1hdGgucm91bmQoIHhfaGVpZ2h0ICogY2FwU2NhbGUgKSAvIHhfaGVpZ2h0O1xuICAgIGNvbnN0IGFzY2VudCA9IE1hdGgucm91bmQoIGZvbnRBc2NlbnQgKiBjYXBTY2FsZSApO1xuICAgIGxldCBsaW5lSGVpZ2h0ID0gTWF0aC5yb3VuZCggY2FwU2NhbGUgKiAoIGZvbnRBc2NlbnQgKyBkZXNjZW50ICsgbGluZV9nYXAgKSArIG1vcmVMaW5lR2FwKTtcblxuICAgIGlmICh0aGlzLnN0eWxlLmxpbmVIZWlnaHQgPiAwKVxuICAgICAgbGluZUhlaWdodCA9IHRoaXMuc3R5bGUubGluZUhlaWdodDtcbiAgICBlbHNlXG4gICAgICB0aGlzLnN0eWxlLmxpbmVIZWlnaHQgPSBsaW5lSGVpZ2h0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcFNjYWxlICAgOiBjYXBTY2FsZSxcbiAgICAgIGxvd1NjYWxlICAgOiBsb3dTY2FsZSxcbiAgICAgIGFzY2VudCAgICAgIDogYXNjZW50LFxuICAgICAgbGluZUhlaWdodCA6IGxpbmVIZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgY2hhclJlY3QoIHBvcywgZm9udCwgZm9udF9tZXRyaWNzLCBmb250X2NoYXIsIGtlcm4gPSAwLjAgKSB7XG5cbiAgICAvLyBMb3cgY2FzZSBjaGFyYWN0ZXJzIGhhdmUgZmlyc3QgYml0IHNldCBpbiAnZmxhZ3MnXG4gICAgdmFyIGxvd2Nhc2UgPSAoIGZvbnRfY2hhci5mbGFncyAmIDEgKSA9PT0gMTtcblxuICAgIC8vIFBlbiBwb3NpdGlvbiBpcyBhdCB0aGUgdG9wIG9mIHRoZSBsaW5lLCBZIGdvZXMgdXBcbiAgICB2YXIgYmFzZWxpbmUgPSBwb3NbMV0gLSBmb250X21ldHJpY3MuYXNjZW50O1xuXG4gICAgLy8gTG93IGNhc2UgY2hhcnMgdXNlIHRoZWlyIG93biBzY2FsZVxuICAgIHZhciBzY2FsZSA9IGxvd2Nhc2UgPyBmb250X21ldHJpY3MubG93U2NhbGUgOiBmb250X21ldHJpY3MuY2FwU2NhbGU7XG5cbiAgICAvLyBMYXlpbmcgb3V0IHRoZSBnbHlwaCByZWN0YW5nbGVcbiAgICB2YXIgZyAgICAgID0gZm9udF9jaGFyLnJlY3Q7XG4gICAgdmFyIGJvdHRvbSA9IGJhc2VsaW5lIC0gc2NhbGUgKiAoIGZvbnQuZGVzY2VudCArIGZvbnQuaXkgKTtcbiAgICB2YXIgdG9wICAgID0gYm90dG9tICAgKyBzY2FsZSAqICggZm9udC5yb3dfaGVpZ2h0ICk7XG4gICAgdmFyIGxlZnQgICA9IHBvc1swXSAgICsgc2NhbGUgKiAoIGZvbnRfY2hhci5iZWFyaW5nX3ggKyBrZXJuIC0gZm9udC5peCApO1xuICAgIHZhciByaWdodCAgPSBsZWZ0ICAgICArIHNjYWxlICogKCBnWzJdIC0gZ1swXSApO1xuICAgIHZhciBwID0gWyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20gXTtcblxuICAgIC8vIEFkdmFuY2luZyBwZW4gcG9zaXRpb25cbiAgICB2YXIgbmV3X3Bvc194ID0gcG9zWzBdICsgc2NhbGUgKiAoIGZvbnRfY2hhci5hZHZhbmNlX3ggKTtcblxuICAgIC8vIFNpZ25lZCBkaXN0YW5jZSBmaWVsZCBzaXplIGluIHNjcmVlbiBwaXhlbHNcbiAgICB2YXIgc2RmX3NpemUgID0gMi4wICogZm9udC5peSAqIHNjYWxlO1xuXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xuICAgICAgcFswXSwgcFszXSwgLy8gbGVmdCBib3R0b20sXG4gICAgICBwWzJdLCBwWzNdLCAvLyByaWdodCBib3R0b20sXG4gICAgICBwWzJdLCBwWzFdLCAvLyByaWdodCB0b3BcbiAgICAgIHBbMF0sIHBbMV0sIC8vIGxlZnQgdG9wXG4gICAgXTtcblxuICAgIGNvbnN0IHV2cyA9IFtcbiAgICAgIGdbMF0sIGdbMV0sIC8vIGxlZnQgdG9wXG4gICAgICBnWzJdLCBnWzFdLCAvLyByaWdodCB0b3BcbiAgICAgIGdbMl0sIGdbM10sIC8vIHJpZ2h0IGJvdHRvbSxcbiAgICAgIGdbMF0sIGdbM10sIC8vIGxlZnQgYm90dG9tLFxuICAgIF07XG5cbiAgICBjb25zdCBzZGZTaXplcyA9IFtcbiAgICAgIHNkZl9zaXplLFxuICAgICAgc2RmX3NpemUsXG4gICAgICBzZGZfc2l6ZSxcbiAgICAgIHNkZl9zaXplLFxuICAgIF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb25zLFxuICAgICAgdXZzLFxuICAgICAgc2RmU2l6ZXMsXG4gICAgICBwb3M6IFsgbmV3X3Bvc194LCBwb3NbMV0gXVxuICAgIH07XG5cbiAgICAvL3JldHVybiB7IHZlcnRpY2VzIDogdmVydGljZXMsIHBvcyA6IFsgbmV3X3Bvc194LCBwb3NbMV0gXSB9O1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQXdlc29tZVRleHQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGV4dC5qcyIsIlxuY2xhc3MgVGV4dExheW91dCB7XG5cbiAgdGV4dCA9IFwiXCI7XG4gIGZvbnQgPSBudWxsO1xuICBtZXRyaWNzID0gbnVsbDtcbiAgZm9udFNpemUgPSAyMDtcbiAgYWxpZ24gPSBcImxlZnRcIjtcbiAgc3RhcnRYID0gMDtcbiAgc3RhcnRZID0gMDtcbiAgd3JhcHBlcldpZHRoID0gMTAwO1xuICB3cmFwV29yZHMgPSBmYWxzZTtcbiAgd29yZHNNZXRyaWNzID0gW107XG4gIGxldHRlcnNDb3VudCA9IDA7XG4gIGhlaWdodCA9IDA7XG4gIGxpbmVzQ291bnQgPSAwO1xuICBsaW5lSGVpZ2h0ID0gMDtcbiAgZ2x5cGhzID0gW107XG5cblxuICBjb25zdHJ1Y3Rvcih0ZXh0LCBmb250LCBjb25maWcpIHtcbiAgICB0aGlzLnRleHQgPSB0ZXh0O1xuICAgIHRoaXMuZm9udCA9IGZvbnQ7XG4gICAgdGhpcy5mb250U2l6ZSA9IGNvbmZpZy5mb250U2l6ZTtcbiAgICB0aGlzLndyYXBXb3JkcyA9IGNvbmZpZy53cmFwV29yZHM7XG4gICAgdGhpcy53cmFwcGVyV2lkdGggPSBjb25maWcud3JhcHBlcldpZHRoO1xuICAgIHRoaXMubGluZUhlaWdodCA9IGNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIHRoaXMuYWxpZ24gPSBjb25maWcuYWxpZ247XG4gICAgdGhpcy5sZXR0ZXJzQ291bnQgPSB0aGlzLnRleHQuc3BsaXQoXCJcIikubGVuZ3RoO1xuICAgIHRoaXMubWV0cmljcyA9IHRoaXMuZm9udE1ldHJpY3MoZm9udCwgMC4wKTtcbiAgICB0aGlzLnN0YXJ0WSA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xuICAgIHRoaXMuY2FsY3VsYXRlV29yZHNQb3NpdGlvbnMoKTtcblxuICAgIHRoaXMuZ2x5cGhzID0gW107XG5cbiAgICB0aGlzLndvcmRzTWV0cmljcy5mb3JFYWNoICh3b3JkID0+IHtcbiAgICAgIHRoaXMuZ2V0R2x5cGhzKHdvcmQud29yZCwgW3dvcmQueCwgd29yZC55XSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGZvbnRNZXRyaWNzKGZvbnRTaXplLCBtb3JlTGluZUdhcCA9IDAuMikge1xuXG4gICAgY29uc3Qge2NhcF9oZWlnaHQsIHhfaGVpZ2h0LCBhc2NlbnQ6IGZvbnRBc2NlbnQgLCBkZXNjZW50LCBsaW5lX2dhcH0gPSB0aGlzLmZvbnQ7XG5cbiAgICBjb25zdCBjYXBTY2FsZSA9IHRoaXMuZm9udFNpemUgLyBjYXBfaGVpZ2h0O1xuICAgIGNvbnN0IGxvd1NjYWxlID0gTWF0aC5yb3VuZCggeF9oZWlnaHQgKiBjYXBTY2FsZSApIC8geF9oZWlnaHQ7XG4gICAgY29uc3QgYXNjZW50ID0gTWF0aC5yb3VuZCggZm9udEFzY2VudCAqIGNhcFNjYWxlICk7XG4gICAgbGV0IGxpbmVIZWlnaHQgPSBNYXRoLnJvdW5kKCBjYXBTY2FsZSAqICggZm9udEFzY2VudCArIGRlc2NlbnQgKyBsaW5lX2dhcCApICsgbW9yZUxpbmVHYXAgKTtcblxuICAgIGlmICh0aGlzLmxpbmVIZWlnaHQgPiAwKVxuICAgICAgbGluZUhlaWdodCA9IHRoaXMubGluZUhlaWdodDtcbiAgICBlbHNlXG4gICAgICB0aGlzLmxpbmVIZWlnaHQgPSBsaW5lSGVpZ2h0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcFNjYWxlICAgOiBjYXBTY2FsZSxcbiAgICAgIGxvd1NjYWxlICAgOiBsb3dTY2FsZSxcbiAgICAgIGFzY2VudCAgICAgIDogYXNjZW50LFxuICAgICAgbGluZUhlaWdodCA6IGxpbmVIZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgY2hhclJlY3QoIHBvcywgZm9udF9jaGFyLCBrZXJuID0gMC4wICkge1xuXG4gICAgLy8gTG93IGNhc2UgY2hhcmFjdGVycyBoYXZlIGZpcnN0IGJpdCBzZXQgaW4gJ2ZsYWdzJ1xuICAgIHZhciBsb3djYXNlID0gKCBmb250X2NoYXIuZmxhZ3MgJiAxICkgPT09IDE7XG5cbiAgICAvLyBQZW4gcG9zaXRpb24gaXMgYXQgdGhlIHRvcCBvZiB0aGUgbGluZSwgWSBnb2VzIHVwXG4gICAgdmFyIGJhc2VsaW5lID0gcG9zWzFdIC0gdGhpcy5tZXRyaWNzLmFzY2VudDtcblxuICAgIC8vIExvdyBjYXNlIGNoYXJzIHVzZSB0aGVpciBvd24gc2NhbGVcbiAgICB2YXIgc2NhbGUgPSBsb3djYXNlID8gdGhpcy5tZXRyaWNzLmxvd1NjYWxlIDogdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xuXG4gICAgLy8gTGF5aW5nIG91dCB0aGUgZ2x5cGggcmVjdGFuZ2xlXG4gICAgdmFyIGcgICAgICA9IGZvbnRfY2hhci5yZWN0O1xuICAgIHZhciBib3R0b20gPSBiYXNlbGluZSAtIHNjYWxlICogKCB0aGlzLmZvbnQuZGVzY2VudCArIHRoaXMuZm9udC5peSApO1xuICAgIHZhciB0b3AgICAgPSBib3R0b20gICArIHNjYWxlICogKCB0aGlzLmZvbnQucm93X2hlaWdodCApO1xuICAgIHZhciBsZWZ0ICAgPSBwb3NbMF0gICArIHNjYWxlICogKCBmb250X2NoYXIuYmVhcmluZ194ICsga2VybiAtIHRoaXMuZm9udC5peCApO1xuICAgIHZhciByaWdodCAgPSBsZWZ0ICAgICArIHNjYWxlICogKCBnWzJdIC0gZ1swXSApO1xuICAgIHZhciBwID0gWyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20gXTtcblxuICAgIC8vIEFkdmFuY2luZyBwZW4gcG9zaXRpb25cbiAgICB2YXIgbmV3X3Bvc194ID0gcG9zWzBdICsgc2NhbGUgKiAoIGZvbnRfY2hhci5hZHZhbmNlX3ggKTtcblxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgICAgIHBbMF0sIHBbM10sIC8vIGxlZnQgYm90dG9tLFxuICAgICAgcFsyXSwgcFszXSwgLy8gcmlnaHQgYm90dG9tLFxuICAgICAgcFsyXSwgcFsxXSwgLy8gcmlnaHQgdG9wXG4gICAgICBwWzBdLCBwWzFdLCAvLyBsZWZ0IHRvcFxuICAgIF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb25zLFxuICAgICAgcG9zOiBbIG5ld19wb3NfeCwgcG9zWzFdIF0sXG4gICAgICBtZXRyaWNzOiB7eDogcG9zWzBdLCB5OiBwb3NbMV0sIHdpZHRoOiBzY2FsZSAqIGZvbnRfY2hhci5hZHZhbmNlX3ggfVxuICAgIH07XG4gIH1cblxuICBnZXRTdHJpbmdTaXplKHN0cmluZykge1xuXG4gICAgbGV0IHdpZHRoID0gMDtcbiAgICBsZXQgaGVpZ2h0ID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XG5cbiAgICBjb25zdCBjaGFycyA9IFsuLi5zdHJpbmddO1xuXG4gICAgLy8gSXRlcmF0ZSB0aG91Z2h0IHRoZSBjaGFycywgY2FsY3VsYXRlIHBvc2l0aW9uXG4gICAgY2hhcnMuZm9yRWFjaChjaGFyID0+IHtcbiAgICAgIGxldCBmb250X2NoYXIgPSB0aGlzLmZvbnQuY2hhcnNbIGNoYXIgXTtcblxuICAgICAgLyppZiAoY2hhciA9PT0gXCIgXCIpIHtcbiAgICAgICAgd2lkdGggKz0gdGhpcy5mb250LnNwYWNlX2FkdmFuY2UgKiB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0qL1xuXG4gICAgICAvLyBHZXQgY2hhciBtZXRyaWNzXG4gICAgICBsZXQgY2hhclJlY3QgPSB0aGlzLmNoYXJSZWN0KFt3aWR0aCwwXSwgZm9udF9jaGFyLCAwLjIpO1xuICAgICAgd2lkdGggPSBjaGFyUmVjdC5wb3NbMF07XG5cbiAgICB9KTtcblxuICAgIHJldHVybiB7d2lkdGgsIGhlaWdodH07XG5cbiAgfVxuXG4gIGNhbGN1bGF0ZVdvcmRzUG9zaXRpb25zKCkge1xuXG4gICAgY29uc3Qgd29yZHMgPSB0aGlzLnRleHQuc3BsaXQoXCIgXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIHdvcmRzW2ldID0gd29yZHNbaV0gKyBcIiBcIjtcbiAgICB9XG5cbiAgICB0aGlzLndvcmRzTWV0cmljcyA9IFtdO1xuXG4gICAgLy8gSW5pdGlhbCBwb3NpdGlvblxuICAgIGxldCB4ID0gdGhpcy5zdGFydFg7XG4gICAgbGV0IHkgPSB0aGlzLnN0YXJ0WTtcblxuXG5cbiAgICAvLyBDYWxjdWxhdGUgd29yZHMgcG9zaXRpb25zIG9uIGxpbmVzXG4gICAgd29yZHMuZm9yRWFjaCh3b3JkID0+IHtcbiAgICAgIGNvbnN0IHdvcmRTaXplID0gdGhpcy5nZXRTdHJpbmdTaXplKHdvcmQpO1xuICAgICAgaWYgKHggKyB3b3JkU2l6ZS53aWR0aCA+IHRoaXMuc3RhcnRYICsgdGhpcy53cmFwcGVyV2lkdGggJiYgdGhpcy53cmFwV29yZHMpIHtcbiAgICAgICAgeCA9IHRoaXMuc3RhcnRYO1xuICAgICAgICB5ICs9IHdvcmRTaXplLmhlaWdodDtcbiAgICAgIH1cbiAgICAgIHRoaXMud29yZHNNZXRyaWNzLnB1c2goey4uLndvcmRTaXplLCB4LCB5LCB3b3JkfSk7XG5cbiAgICAgIC8veCArPSB3b3JkU2l6ZS53aWR0aCArIHRoaXMuZm9udC5zcGFjZV9hZHZhbmNlICogdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xuICAgICAgeCArPSB3b3JkU2l6ZS53aWR0aDtcbiAgICB9KTtcblxuICAgIC8vIENhbGN1bGF0ZSBsaW5lcyBjb3VudFxuICAgIHRoaXMubGluZXNDb3VudCA9ICh5IC0gdGhpcy5zdGFydFkpIC8gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyAxO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5saW5lc0NvdW50ICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XG5cbiAgICAvLyBDaGFuZ2UgYWxpZ24gVE9ETyBvcHRpbWlzZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saW5lc0NvdW50OyArK2kpIHtcbiAgICAgIGNvbnN0IHdvcmRzT25MaW5lID0gdGhpcy53b3Jkc01ldHJpY3MuZmlsdGVyKHdvcmQgPT4gd29yZC55ID09PSB0aGlzLnN0YXJ0WSArIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQpKVxuXG4gICAgICBjb25zdCBsYXN0V29yZCA9IHdvcmRzT25MaW5lW3dvcmRzT25MaW5lLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAobGFzdFdvcmQpIHtcbiAgICAgICAgY29uc3QgZnJlZVNwYWNlID0gKHRoaXMuc3RhcnRYICsgdGhpcy53cmFwcGVyV2lkdGgpIC0gKGxhc3RXb3JkLnggKyBsYXN0V29yZC53aWR0aCk7XG5cbiAgICAgICAgbGV0IGxlZnRPZmZzZXQgPSAwO1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5hbGlnbikge1xuICAgICAgICAgIGNhc2UgXCJjZW50ZXJcIjpcbiAgICAgICAgICAgIGxlZnRPZmZzZXQgPSBmcmVlU3BhY2UgLyAyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICBsZWZ0T2Zmc2V0ID0gZnJlZVNwYWNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53b3Jkc01ldHJpY3MuZm9yRWFjaCh3b3JkID0+IHtcbiAgICAgICAgICBpZiAod29yZC55ID09PSB0aGlzLnN0YXJ0WSArIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQpKSB7XG4gICAgICAgICAgICB3b3JkLnggKz0gbGVmdE9mZnNldDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0R2x5cGhzKCBzdHJpbmcsIHBvcykge1xuICAgIGxldCBwcmV2X2NoYXIgPSBcIiBcIjsgIC8vIFVzZWQgdG8gY2FsY3VsYXRlIGtlcm5pbmdcbiAgICBsZXQgY3BvcyAgICAgID0gcG9zOyAgLy8gQ3VycmVudCBwZW4gcG9zaXRpb25cbiAgICBsZXQgeF9tYXggICAgID0gMC4wOyAgLy8gTWF4IHdpZHRoIC0gdXNlZCBmb3IgYm91bmRpbmcgYm94XG4gICAgbGV0IHNjYWxlICAgICA9IHRoaXMubWV0cmljcy5jYXBTY2FsZTtcblxuICAgIGxldCBzdHJfcG9zID0gMDtcblxuICAgIGZvcig7Oykge1xuICAgICAgaWYgKCBzdHJfcG9zID09PSBzdHJpbmcubGVuZ3RoICkgYnJlYWs7XG5cbiAgICAgIHZhciBzY2hhciA9IHN0cmluZ1sgc3RyX3BvcyBdO1xuICAgICAgc3RyX3BvcysrO1xuXG4gICAgICBpZiAoIHNjaGFyID09PSBcIlxcblwiICkge1xuICAgICAgICBpZiAoIGNwb3NbMF0gPiB4X21heCApIHhfbWF4ID0gY3Bvc1swXTsgLy8gRXhwYW5kaW5nIHRoZSBib3VuZGluZyByZWN0XG4gICAgICAgIGNwb3NbMF0gID0gcG9zWzBdO1xuICAgICAgICBjcG9zWzFdIC09IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xuICAgICAgICBwcmV2X2NoYXIgPSBcIiBcIjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICggc2NoYXIgPT09IFwiIFwiICkge1xuICAgICAgICAvL3NjaGFyID0gXCJfXCJcbiAgICAgICAgLy9jcG9zWzBdICs9IHRoaXMuZm9udC5zcGFjZV9hZHZhbmNlICogc2NhbGU7XG4gICAgICAgIHByZXZfY2hhciA9IFwiIFwiO1xuICAgICAgICAvL2NvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgZm9udF9jaGFyID0gdGhpcy5mb250LmNoYXJzWyBzY2hhciBdO1xuICAgICAgaWYgKCAhZm9udF9jaGFyICkgeyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdWJzdGl0dXRpbmcgdW5hdmFpbGFibGUgY2hhcmFjdGVycyB3aXRoICc/J1xuICAgICAgICBzY2hhciA9IFwiP1wiO1xuICAgICAgICBmb250X2NoYXIgPSB0aGlzLmZvbnQuY2hhcnNbIFwiP1wiIF07XG4gICAgICB9XG5cbiAgICAgIHZhciBrZXJuID0gdGhpcy5mb250Lmtlcm5bIHByZXZfY2hhciArIHNjaGFyIF07XG4gICAgICBpZiAoICFrZXJuICkga2VybiA9IDAuMDtcblxuICAgICAgLy8gY2FsY3VsYXRpbmcgdGhlIGdseXBoIHJlY3RhbmdsZSBhbmQgY29weWluZyBpdCB0byB0aGUgdmVydGV4IGFycmF5XG4gICAgICB2YXIgcmVjdCA9IHRoaXMuY2hhclJlY3QoIGNwb3MsIGZvbnRfY2hhciwga2VybiApO1xuXG4gICAgICBwcmV2X2NoYXIgPSBzY2hhcjtcbiAgICAgIGNwb3MgPSByZWN0LnBvcztcblxuICAgICAgdGhpcy5nbHlwaHMucHVzaCh7XG4gICAgICAgIGxldHRlcjogc2NoYXIsXG4gICAgICAgIHZlcnRpY2VzOiByZWN0LnBvc2l0aW9ucyxcbiAgICAgICAgcG9zaXRpb246IHJlY3QucG9zLFxuICAgICAgICBtZXRyaWNzOiByZWN0Lm1ldHJpY3NcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRleHRMYXlvdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGF5b3V0LmpzIiwiY29uc3QgY3JlYXRlSW5kaWNlcyA9IHJlcXVpcmUoXCJxdWFkLWluZGljZXNcIilcclxuXHJcbmNsYXNzIFNlbGVjdCB7XHJcblxyXG4gIHJhbmdlID0gWzAsMF07XHJcbiAgbWV0cmljcyA9IG51bGw7XHJcbiAgbGF5b3V0ID0gbnVsbDtcclxuICBkaXJ0eSA9IGZhbHNlO1xyXG4gIGluZGV4QnVmZmVyID0gZmFsc2U7XHJcblxyXG5cclxuXHJcbiAgY29uc3RydWN0b3IobWV0cmljcywgbGF5b3V0KSB7XHJcblxyXG4gICAgdGhpcy5tZXRyaWNzID0gbWV0cmljcztcclxuICAgIHRoaXMubGF5b3V0ID0gbGF5b3V0O1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIC8vaWYgKHRoaXMucmFuZ2VbMF0gPiB0ZXh0LmxheW91dC5nbHlwaHMubGVuZ3RoKSB0aGlzLnJhbmdlWzBdID0gdGV4dC5sYXlvdXQuZ2x5cGhzLmxlbmd0aCAtMTtcclxuICAgIC8vaWYgKHRoaXMucmFuZ2VbMV0gPiB0ZXh0LmxheW91dC5nbHlwaHMubGVuZ3RoKSB0aGlzLnJhbmdlWzFdID0gdGV4dC5sYXlvdXQuZ2x5cGhzLmxlbmd0aCAtMTtcclxuXHJcbiAgICAvLyB2ZXJ0aWNlcyBhcnJheSBmb3IgYWxsIHNlbGVjdGVkIGxpbmVzXHJcbiAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5saW5lc0NvdW50ICogNCAqIDIpO1xyXG5cclxuICAgIC8vIFJldmVyc2UgcmFuZ2UgaWYgd2UgbmVlZCBpdFxyXG4gICAgLy9pZiAodGhpcy5yYW5nZVswXSA+IHRoaXMucmFuZ2VbMV0pIHtcclxuICAgIC8vICB0aGlzLnJhbmdlID0gW3RoaXMucmFuZ2VbMV0sIHRoaXMucmFuZ2VbMF1dO1xyXG4gICAgLy99XHJcblxyXG4gICAgLy8gSWYgcmFuZ2UgaXMgZ3JlYXRlciB0aGFuIDBcclxuICAgIGlmICh0aGlzLnJhbmdlWzBdICE9PSB0aGlzLnJhbmdlWzFdKSB7XHJcbiAgICAgIHRoaXMuYnVpbGRWZXJ0aWNlcygpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5kaWNlcyA9IGNyZWF0ZUluZGljZXMoe1xyXG4gICAgICBjbG9ja3dpc2U6IHRydWUsXHJcbiAgICAgIHR5cGU6ICd1aW50MTYnLFxyXG4gICAgICBjb3VudDp0aGlzLmxheW91dC5saW5lc0NvdW50XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgIHRoaXMuaW5kZXhCdWZmZXIgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRWZXJ0aWNlcygpIHtcclxuXHJcbiAgICAvLyBTZWxlY3QgcmFuZ2VcclxuICAgIGxldCBzdGFydCA9IHRoaXMubGF5b3V0LmdseXBoc1t0aGlzLnJhbmdlWzBdXTtcclxuICAgIGxldCBlbmQgPSB0aGlzLmxheW91dC5nbHlwaHNbdGhpcy5yYW5nZVsxXV07XHJcblxyXG4gICAgLy8gSXRlcmF0ZSB0aG91Z2h0IGFsbCBsaW5lc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxheW91dC5saW5lc0NvdW50OyArK2kpIHtcclxuICAgICAgbGV0IGxldHRlckNvdW50ID0gMDsgLy8gbGV0dGVycyBwYXNzZWRcclxuICAgICAgbGV0IGZpcnN0TGV0dGVyID0gbnVsbDsgLy8gZmlyc3QgbGV0dGVyIG9uIHRoaXMgbGluZVxyXG4gICAgICBsZXQgbGFzdExldHRlciA9IG51bGw7IC8vIGxhc3QgbGV0dGVyIG9uIHRoaXMgbGluZVxyXG5cclxuICAgICAgaWYgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCArIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0IDwgc3RhcnQucG9zaXRpb25bMV0pIGNvbnRpbnVlO1xyXG4gICAgICBpZiAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgPiBlbmQucG9zaXRpb25bMV0pIGNvbnRpbnVlO1xyXG5cclxuICAgICAgLy8gVGFrZSBldmVyeSB3b3JkLCBpZiBpdCdzIGxhc3Qgb3IgZmlyc3Qgb24gbGluZSAtIGNoYW5nZSBib3VuZHMgbGV0dGVyc1xyXG4gICAgICB0aGlzLmxheW91dC53b3Jkc01ldHJpY3MubWFwKHdvcmQgPT4ge1xyXG5cclxuICAgICAgICBpZiAod29yZC55ID09PSB0aGlzLmxheW91dC5zdGFydFkgKyAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSkge1xyXG4gICAgICAgICAgaWYgKGZpcnN0TGV0dGVyID09PSBudWxsKSBmaXJzdExldHRlciA9IGxldHRlckNvdW50O1xyXG4gICAgICAgICAgbGFzdExldHRlciA9IGxldHRlckNvdW50ICsgd29yZC53b3JkLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXR0ZXJDb3VudCArPSB3b3JkLndvcmQubGVuZ3RoO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEJvdW5kcyBsZXR0ZXJzIGZvciBjdXJyZW50IGxpbmVcclxuICAgICAgbGV0IHN0YXJ0TGluZUxldHRlciA9IHRoaXMubGF5b3V0LmdseXBoc1tmaXJzdExldHRlcl07XHJcbiAgICAgIGxldCBlbmRMaW5lTGV0dGVyID0gdGhpcy5sYXlvdXQuZ2x5cGhzW2xhc3RMZXR0ZXJdO1xyXG5cclxuICAgICAgLy8gSWYgdGhlIHN0YXJ0IG9yIGVuZCByYW5nZSBpcyBvbiB0aGlzIGxpbmUsIGNoYW5nZSBib3VuZHMgZm9yIHRoZW1cclxuICAgICAgaWYgKHN0YXJ0LnBvc2l0aW9uWzFdID09PSAgc3RhcnRMaW5lTGV0dGVyLnBvc2l0aW9uWzFdKSBzdGFydExpbmVMZXR0ZXIgPSBzdGFydDtcclxuICAgICAgaWYgKGVuZC5wb3NpdGlvblsxXSA9PT0gZW5kTGluZUxldHRlci5wb3NpdGlvblsxXSkgZW5kTGluZUxldHRlciA9IGVuZDtcclxuXHJcbiAgICAgIC8vIFdlIHVzZSBvZmZzZXQgdG8gYXZvaWQgc2VsZWN0cyBvdmVybGFwcGluZ1xyXG4gICAgICBjb25zdCBvZmZzZXQgPSAodGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgLSB0aGlzLm1ldHJpY3MuYXNjZW50KSAvIDI7XHJcblxyXG4gICAgICAvLyBBZGQgcG9zaXRpb25zIHRvIGFycmF5XHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KV0gPSBzdGFydExpbmVMZXR0ZXIudmVydGljZXNbMF07XHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDFdID0gc3RhcnRMaW5lTGV0dGVyLnZlcnRpY2VzWzFdICsgb2Zmc2V0O1xyXG5cclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgMl0gPSBlbmRMaW5lTGV0dGVyLnZlcnRpY2VzWzJdO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyAzXSA9IGVuZExpbmVMZXR0ZXIudmVydGljZXNbM10gICArIG9mZnNldDtcclxuXHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDRdID0gZW5kTGluZUxldHRlci52ZXJ0aWNlc1s0XTtcclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgNV0gPSBlbmRMaW5lTGV0dGVyLnZlcnRpY2VzWzVdICAtIG9mZnNldDtcclxuXHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDZdID0gc3RhcnRMaW5lTGV0dGVyLnZlcnRpY2VzWzZdO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyA3XSA9IHN0YXJ0TGluZUxldHRlci52ZXJ0aWNlc1s3XSAgLSBvZmZzZXQ7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGdldENsb3Nlc3RHbHlwaCh4LCB5KSB7XHJcblxyXG4gICAgbGV0IGNsb3Nlc3RHbHlwaCA9IG51bGw7XHJcbiAgICBsZXQgY2xvc2VzdEdseXBoRGlzdCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5sYXlvdXQuZ2x5cGhzLmZvckVhY2goZ2x5cGggPT4ge1xyXG4gICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChNYXRoLnBvdygoZ2x5cGgubWV0cmljcy54ICsgZ2x5cGgubWV0cmljcy53aWR0aCkgLSB4LCAyKSArIE1hdGgucG93KGdseXBoLm1ldHJpY3MueSAtIHksIDIpKVxyXG5cclxuICAgICAgaWYgKGNsb3Nlc3RHbHlwaCA9PSBudWxsKSB7XHJcbiAgICAgICAgY2xvc2VzdEdseXBoID0gZ2x5cGg7XHJcbiAgICAgICAgY2xvc2VzdEdseXBoRGlzdCA9IGRpc3RhbmNlO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmIChjbG9zZXN0R2x5cGhEaXN0ID4gZGlzdGFuY2UpIHtcclxuICAgICAgICAgIGNsb3Nlc3RHbHlwaCA9IGdseXBoO1xyXG4gICAgICAgICAgY2xvc2VzdEdseXBoRGlzdCA9IGRpc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBjbG9zZXN0R2x5cGg7XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlbGVjdC5qcyIsInZhciBkdHlwZSA9IHJlcXVpcmUoJ2R0eXBlJylcbnZhciBhbkFycmF5ID0gcmVxdWlyZSgnYW4tYXJyYXknKVxudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJylcblxudmFyIENXID0gWzAsIDIsIDNdXG52YXIgQ0NXID0gWzIsIDEsIDNdXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlUXVhZEVsZW1lbnRzKGFycmF5LCBvcHQpIHtcbiAgICAvL2lmIHVzZXIgZGlkbid0IHNwZWNpZnkgYW4gb3V0cHV0IGFycmF5XG4gICAgaWYgKCFhcnJheSB8fCAhKGFuQXJyYXkoYXJyYXkpIHx8IGlzQnVmZmVyKGFycmF5KSkpIHtcbiAgICAgICAgb3B0ID0gYXJyYXkgfHwge31cbiAgICAgICAgYXJyYXkgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHQgPT09ICdudW1iZXInKSAvL2JhY2t3YXJkcy1jb21wYXRpYmxlXG4gICAgICAgIG9wdCA9IHsgY291bnQ6IG9wdCB9XG4gICAgZWxzZVxuICAgICAgICBvcHQgPSBvcHQgfHwge31cblxuICAgIHZhciB0eXBlID0gdHlwZW9mIG9wdC50eXBlID09PSAnc3RyaW5nJyA/IG9wdC50eXBlIDogJ3VpbnQxNidcbiAgICB2YXIgY291bnQgPSB0eXBlb2Ygb3B0LmNvdW50ID09PSAnbnVtYmVyJyA/IG9wdC5jb3VudCA6IDFcbiAgICB2YXIgc3RhcnQgPSAob3B0LnN0YXJ0IHx8IDApIFxuXG4gICAgdmFyIGRpciA9IG9wdC5jbG9ja3dpc2UgIT09IGZhbHNlID8gQ1cgOiBDQ1csXG4gICAgICAgIGEgPSBkaXJbMF0sIFxuICAgICAgICBiID0gZGlyWzFdLFxuICAgICAgICBjID0gZGlyWzJdXG5cbiAgICB2YXIgbnVtSW5kaWNlcyA9IGNvdW50ICogNlxuXG4gICAgdmFyIGluZGljZXMgPSBhcnJheSB8fCBuZXcgKGR0eXBlKHR5cGUpKShudW1JbmRpY2VzKVxuICAgIGZvciAodmFyIGkgPSAwLCBqID0gMDsgaSA8IG51bUluZGljZXM7IGkgKz0gNiwgaiArPSA0KSB7XG4gICAgICAgIHZhciB4ID0gaSArIHN0YXJ0XG4gICAgICAgIGluZGljZXNbeCArIDBdID0gaiArIDBcbiAgICAgICAgaW5kaWNlc1t4ICsgMV0gPSBqICsgMVxuICAgICAgICBpbmRpY2VzW3ggKyAyXSA9IGogKyAyXG4gICAgICAgIGluZGljZXNbeCArIDNdID0gaiArIGFcbiAgICAgICAgaW5kaWNlc1t4ICsgNF0gPSBqICsgYlxuICAgICAgICBpbmRpY2VzW3ggKyA1XSA9IGogKyBjXG4gICAgfVxuICAgIHJldHVybiBpbmRpY2VzXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGR0eXBlKSB7XG4gIHN3aXRjaCAoZHR5cGUpIHtcbiAgICBjYXNlICdpbnQ4JzpcbiAgICAgIHJldHVybiBJbnQ4QXJyYXlcbiAgICBjYXNlICdpbnQxNic6XG4gICAgICByZXR1cm4gSW50MTZBcnJheVxuICAgIGNhc2UgJ2ludDMyJzpcbiAgICAgIHJldHVybiBJbnQzMkFycmF5XG4gICAgY2FzZSAndWludDgnOlxuICAgICAgcmV0dXJuIFVpbnQ4QXJyYXlcbiAgICBjYXNlICd1aW50MTYnOlxuICAgICAgcmV0dXJuIFVpbnQxNkFycmF5XG4gICAgY2FzZSAndWludDMyJzpcbiAgICAgIHJldHVybiBVaW50MzJBcnJheVxuICAgIGNhc2UgJ2Zsb2F0MzInOlxuICAgICAgcmV0dXJuIEZsb2F0MzJBcnJheVxuICAgIGNhc2UgJ2Zsb2F0NjQnOlxuICAgICAgcmV0dXJuIEZsb2F0NjRBcnJheVxuICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIHJldHVybiBBcnJheVxuICAgIGNhc2UgJ3VpbnQ4X2NsYW1wZWQnOlxuICAgICAgcmV0dXJuIFVpbnQ4Q2xhbXBlZEFycmF5XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kdHlwZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuQXJyYXlcblxuZnVuY3Rpb24gYW5BcnJheShhcnIpIHtcbiAgcmV0dXJuIChcbiAgICAgICBhcnIuQllURVNfUEVSX0VMRU1FTlRcbiAgICAmJiBzdHIuY2FsbChhcnIuYnVmZmVyKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJ1xuICAgIHx8IEFycmF5LmlzQXJyYXkoYXJyKVxuICApXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYW4tYXJyYXkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtYnVmZmVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjMiBhVGV4dHVyZUNvb3JkO1xcbmF0dHJpYnV0ZSBmbG9hdCBhU2RmU2l6ZTtcXG5cXG51bmlmb3JtIG1hdDMgdHJhbnNsYXRpb25NYXRyaXg7XFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb25NYXRyaXg7XFxudW5pZm9ybSBmbG9hdCBzZGZNdWx0aXBsaWVyO1xcblxcbnZhcnlpbmcgdmVjMiAgdGMwO1xcbnZhcnlpbmcgZmxvYXQgZG9mZnNldDtcXG52YXJ5aW5nIGZsb2F0IHNkZl90ZXhlbDtcXG5cXG5cXG5cXG52b2lkIG1haW4odm9pZCkge1xcblxcbiAgICAvL1RPRE8gTUFLRSBBVFRSSUJVVEVcXG4gICAgZmxvYXQgc2RmX3NpemUgPSBhU2RmU2l6ZSAqIHNkZk11bHRpcGxpZXI7XFxuXFxuICAgIC8vVE9ETyBNQUtFIFVOSUZPUk1TXFxuICAgIGZsb2F0IHNkZl90ZXhfc2l6ZSA9IDEwMjQuMDtcXG5cXG5cXG4gICAgdGMwID0gYVRleHR1cmVDb29yZDtcXG4gICAgZG9mZnNldCA9IDEuMCAvIHNkZl9zaXplOyAgICAgICAvLyBEaXN0YW5jZSBmaWVsZCBkZWx0YSBmb3Igb25lIHNjcmVlbiBwaXhlbFxcbiAgICBzZGZfdGV4ZWwgPSAxLjAgLyBzZGZfdGV4X3NpemU7XFxuXFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNCgocHJvamVjdGlvbk1hdHJpeCAqIHRyYW5zbGF0aW9uTWF0cml4ICogdmVjMyhhVmVydGV4UG9zaXRpb24gLCAxLjApKS54eSwgMC4wLCAxLjApO1xcblxcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvdGV4dC92ZXJ0Lmdsc2xcbi8vIG1vZHVsZSBpZCA9IDlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxudW5pZm9ybSBzYW1wbGVyMkQgdVNhbXBsZXI7XFxudW5pZm9ybSBmbG9hdCBoaW50X2Ftb3VudDtcXG51bmlmb3JtIGZsb2F0IHN1YnBpeGVsX2Ftb3VudDtcXG5cXG51bmlmb3JtIHZlYzMgYmdfY29sb3I7XFxudW5pZm9ybSB2ZWMzIGZvbnRfY29sb3I7XFxuXFxudmFyeWluZyB2ZWMyICB0YzA7XFxudmFyeWluZyBmbG9hdCBkb2Zmc2V0O1xcbnZhcnlpbmcgZmxvYXQgc2RmX3RleGVsO1xcblxcblxcbi8qXFxuICogIFN1YnBpeGVsIGNvdmVyYWdlIGNhbGN1bGF0aW9uXFxuICpcXG4gKiAgdiAtIGVkZ2Ugc2xvcGUgICAgLTEuMCB0byAxLjAgICAgICAgICAgdHJpcGxldFxcbiAqICBhIC0gcGl4ZWwgY292ZXJhZ2UgMC4wIHRvIDEuMCAgICAgICAgICBjb3ZlcmFnZVxcbiAqXFxuICogICAgICB8PC0gZ2x5cGggZWRnZSAgICAgICAgICAgICAgICAgICAgICBSICBHICBCXFxuICogICstLS0rLS0tKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tKy0tKy0tK1xcbiAqICB8ICAgfFhYWHwgdiA9IDEuMCAoZWRnZSBmYWNpbmcgd2VzdCkgIHwgIHx4eHxYWHxcXG4gKiAgfCAgIHxYWFh8IGEgPSAwLjUgKDUwJSBjb3ZlcmFnZSkgICAgICB8ICB8eHh8WFh8XFxuICogIHwgICB8WFhYfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgfHh4fFhYfFxcbiAqICArLS0tKy0tLSsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLSstLSstLStcXG4gKiAgICBwaXhlbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCAgNTAgMTAwXFxuICpcXG4gKlxcbiAqICAgICAgICBSICAgRyAgIEJcXG4gKlxcbiAqICAgMS4wICAgICAgICArLS0rICAgPC0gdG9wIChhYnMoIHYgKSlcXG4gKiAgICAgICAgICAgICAgfFxcbiAqICAgICAgIC0rLS0tLS0rLS0rLS0gPC0gY2VpbDogMTAwJSBjb3ZlcmFnZVxcbiAqICAgICAgICB8ICAgICB8WFh8XFxuICogICAwLjAgIHwgICstLStYWHxcXG4gKiAgICAgICAgfCAgfHh4fFhYfFxcbiAqICAgICAgIC0rLS0rLS0rLS0rLS0gPC0gZmxvb3I6IDAlIGNvdmVyYWdlXFxuICogICAgICAgICAgIHxcXG4gKiAgLTEuMCAgKy0tKyAgICAgICAgIDwtICAtYWJzKHYpXFxuICogICAgICAgIHxcXG4gKiAgICAgICAgfFxcbiAqICAgICAgICB8XFxuICogIC0yLjAgICsgICAgICAgICAgICA8LSBib3R0b206IC1hYnModiktMS4wXFxuICovXFxuXFxudmVjMyBzdWJwaXhlbCggZmxvYXQgdiwgZmxvYXQgYSApIHtcXG4gICAgZmxvYXQgdnQgICAgICA9IDAuNiAqIHY7IC8vIDEuMCB3aWxsIG1ha2UgeW91ciBleWVzIGJsZWVkXFxuICAgIHZlYzMgIHJnYl9tYXggPSB2ZWMzKCAtdnQsIDAuMCwgdnQgKTtcXG4gICAgZmxvYXQgdG9wICAgICA9IGFicyggdnQgKTtcXG4gICAgZmxvYXQgYm90dG9tICA9IC10b3AgLSAxLjA7XFxuICAgIGZsb2F0IGNmbG9vciAgPSBtaXgoIHRvcCwgYm90dG9tLCBhICk7XFxuICAgIHZlYzMgIHJlcyAgICAgPSBjbGFtcCggcmdiX21heCAtIHZlYzMoIGNmbG9vciApLCAwLjAsIDEuMCApO1xcbiAgICByZXR1cm4gcmVzO1xcbn1cXG5cXG52b2lkIG1haW4yKCkge1xcbiAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodVNhbXBsZXIsIHRjMCk7XFxufVxcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuXFxuICAgIC8vIFNhbXBsaW5nIHRoZSB0ZXh0dXJlLCBMIHBhdHRlcm5cXG4gICAgZmxvYXQgc2RmICAgICAgID0gdGV4dHVyZTJEKCB1U2FtcGxlciwgdGMwICkucjtcXG4gICAgZmxvYXQgc2RmX25vcnRoID0gdGV4dHVyZTJEKCB1U2FtcGxlciwgdGMwICsgdmVjMiggMC4wLCBzZGZfdGV4ZWwgKSApLnI7XFxuICAgIGZsb2F0IHNkZl9lYXN0ICA9IHRleHR1cmUyRCggdVNhbXBsZXIsIHRjMCArIHZlYzIoIHNkZl90ZXhlbCwgMC4wICkgKS5yO1xcblxcbiAgICAvLyBFc3RpbWF0aW5nIHN0cm9rZSBkaXJlY3Rpb24gYnkgdGhlIGRpc3RhbmNlIGZpZWxkIGdyYWRpZW50IHZlY3RvclxcbiAgICB2ZWMyICBzZ3JhZCAgICAgPSB2ZWMyKCBzZGZfZWFzdCAtIHNkZiwgc2RmX25vcnRoIC0gc2RmICk7XFxuICAgIGZsb2F0IHNncmFkX2xlbiA9IG1heCggbGVuZ3RoKCBzZ3JhZCApLCAxLjAgLyAxMjguMCApO1xcbiAgICB2ZWMyICBncmFkICAgICAgPSBzZ3JhZCAvIHZlYzIoIHNncmFkX2xlbiApO1xcbiAgICBmbG9hdCB2Z3JhZCA9IGFicyggZ3JhZC55ICk7IC8vIDAuMCAtIHZlcnRpY2FsIHN0cm9rZSwgMS4wIC0gaG9yaXpvbnRhbCBvbmVcXG5cXG4gICAgZmxvYXQgaG9yel9zY2FsZSAgPSAxLjE7IC8vIEJsdXJyaW5nIHZlcnRpY2FsIHN0cm9rZXMgYWxvbmcgdGhlIFggYXhpcyBhIGJpdFxcbiAgICBmbG9hdCB2ZXJ0X3NjYWxlICA9IDAuNjsgLy8gV2hpbGUgYWRkaW5nIHNvbWUgY29udHJhc3QgdG8gdGhlIGhvcml6b250YWwgc3Ryb2tlc1xcbiAgICBmbG9hdCBoZG9mZnNldCAgICA9IG1peCggZG9mZnNldCAqIGhvcnpfc2NhbGUsIGRvZmZzZXQgKiB2ZXJ0X3NjYWxlLCB2Z3JhZCApO1xcbiAgICBmbG9hdCByZXNfZG9mZnNldCA9IG1peCggZG9mZnNldCwgaGRvZmZzZXQsIGhpbnRfYW1vdW50ICk7XFxuXFxuICAgIGZsb2F0IGFscGhhICAgICAgID0gc21vb3Roc3RlcCggMC41IC0gcmVzX2RvZmZzZXQsIDAuNSArIHJlc19kb2Zmc2V0LCBzZGYgKTtcXG5cXG4gICAgLy8gQWRkaXRpb25hbCBjb250cmFzdFxcbiAgICBhbHBoYSAgICAgICAgICAgICA9IHBvdyggYWxwaGEsIDEuMCArIDAuMiAqIHZncmFkICogaGludF9hbW91bnQgKTtcXG5cXG4gICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBzdXBwb3J0IGZvciBBUkJfYmxlbmRfZnVuY19leHRlbmRlZCBpbiBXZWJHTC5cXG4gICAgLy8gRm9ydHVuYXRlbHkgdGhlIGJhY2tncm91bmQgaXMgZmlsbGVkIHdpdGggYSBzb2xpZCBjb2xvciBzbyB3ZSBjYW4gZG9cXG4gICAgLy8gdGhlIGJsZW5kaW5nIGluc2lkZSB0aGUgc2hhZGVyLlxcblxcbiAgICAvLyBEaXNjYXJkaW5nIHBpeGVscyBiZXlvbmQgYSB0aHJlc2hvbGQgdG8gbWluaW1pc2UgcG9zc2libGUgYXJ0aWZhY3RzLlxcbiAgICBpZiAoIGFscGhhIDwgMjAuMCAvIDI1Ni4wICkgZGlzY2FyZDtcXG5cXG4gICAgdmVjMyBjaGFubmVscyA9IHN1YnBpeGVsKCBncmFkLnggKiAwLjUgKiBzdWJwaXhlbF9hbW91bnQsIGFscGhhICkgKyAwLjE7XFxuXFxuICAgIC8vIEZvciBzdWJwaXhlbCByZW5kZXJpbmcgd2UgaGF2ZSB0byBibGVuZCBlYWNoIGNvbG9yIGNoYW5uZWwgc2VwYXJhdGVseVxcbiAgICB2ZWMzIHJlcyA9IG1peCggYmdfY29sb3IsIGZvbnRfY29sb3IsIGNoYW5uZWxzICk7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoIHJlcywgMS4wICk7XFxufVxcblxcblxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy90ZXh0L2ZyYWcuZ2xzbFxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxuYXR0cmlidXRlIHZlYzIgYVZlcnRleFBvc2l0aW9uO1xcblxcbnVuaWZvcm0gbWF0MyB0cmFuc2xhdGlvbk1hdHJpeDtcXG51bmlmb3JtIG1hdDMgcHJvamVjdGlvbk1hdHJpeDtcXG5cXG52b2lkIG1haW4odm9pZCkge1xcblxcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQoKHByb2plY3Rpb25NYXRyaXggKiB0cmFuc2xhdGlvbk1hdHJpeCAqIHZlYzMoYVZlcnRleFBvc2l0aW9uICwgMS4wKSkueHksIDAuMCwgMS4wKTtcXG5cXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL3NlbGVjdC92ZXJ0Lmdsc2xcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbnVuaWZvcm0gdmVjMyBiZ19jb2xvcjtcXG52YXJ5aW5nIHZlYzIgIHRjMDtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoYmdfY29sb3IsMC40NSk7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMS4wLCAxLjAsIDEuMCwwLjIpO1xcbn1cXG5cXG5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvc2VsZWN0L2ZyYWcuZ2xzbFxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==