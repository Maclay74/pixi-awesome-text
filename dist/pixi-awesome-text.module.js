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
	
	var vertexShader = __webpack_require__(10);
	
	var fragmentShader = __webpack_require__(11);
	
	var selectVertextShader = __webpack_require__(12);
	
	var selectFragmentShader = __webpack_require__(13);
	
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
	
	var _input = _interopRequireDefault(__webpack_require__(9));
	
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
	
	    _defineProperty(_assertThisInitialized(_this), "inputElement", null);
	
	    _defineProperty(_assertThisInitialized(_this), "input", null);
	
	    _defineProperty(_assertThisInitialized(_this), "select", null);
	
	    _this.style = new PIXI.TextStyle(style);
	    _this.backgroundColor = style.backgroundColor;
	    _this._text = text;
	    _this._font = font.font;
	    _this._texture = font.texture;
	    _this.interactive = true;
	    _this.buttonMode = true; // Calcualte layout
	
	    _this.layout = new _layout["default"](_assertThisInitialized(_this), {
	      fontSize: _this.style.fontSize,
	      wrapWords: _this.style.breakWords,
	      wrapperWidth: _this.style.wordWrapWidth,
	      align: _this.style.align,
	      lineHeight: _this.style.lineHeight
	    }); //  Select plugin
	
	    _this.select = new _select["default"](_assertThisInitialized(_this)); // Input plugin
	
	    _this.input = new _input["default"](_assertThisInitialized(_this));
	
	    _this.setState(AwesomeText.states.regular);
	
	    return _this;
	  }
	
	  _createClass(AwesomeText, [{
	    key: "update",
	    value: function update() {
	      var _this2 = this;
	
	      this.metrics = this.fontMetrics(this.style.fontSize);
	      this.layout.update();
	      this.select.update();
	      this.input.update(); // Arrays for vertices, uvs and sdf
	
	      this.vertices = new Float32Array(this.layout.lettersCount * 4 * 2);
	      this.uvs = new Float32Array(this.layout.lettersCount * 4 * 2);
	      this.sdfSizes = new Float32Array(this.layout.lettersCount * 4);
	      this.arrayPositions = {
	        vertex: 0,
	        uvs: 0,
	        sdf: 0
	      }; // Fill arrays word by word
	
	      this.layout.wordsMetrics.forEach(function (word) {
	        _this2.writeString(word.word, _this2.font, _this2.metrics, [word.x, word.y]);
	      }); // Prepare indices
	
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
	      this.input.enabled = false;
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
	
	      // Disable previously enabled field
	      if (AwesomeText.currentEditingElement != null) {
	        AwesomeText.currentEditingElement.setState(AwesomeText.states.regular);
	      }
	
	      AwesomeText.currentEditingElement = this; // Disable unnecessary events
	
	      this.off("click");
	      this.input.enabled = true;
	      this.input.hide(); // Select all characters
	
	      this.select.setRange(0, this.text.length - 1);
	      this.input.inputElement.focus();
	      this.on("mousedown", function (e) {
	        _this4.setState(AwesomeText.states.selecting);
	
	        _this4.select.onMouseDown(e);
	
	        _this4.input.show();
	
	        _this4.input.update(e);
	      });
	      this.on("mousemove", function (e) {
	        if (_this4.state === AwesomeText.states.selecting) {
	          _this4.select.onMouseMove(e);
	
	          _this4.input.hide();
	        }
	      });
	      this.on("mouseup", function (e) {
	        _this4.setState(AwesomeText.states.editable);
	
	        _this4.select.onMouseUp(e);
	      });
	      this.on("mouseupoutside", function (e) {
	        _this4.setState(AwesomeText.states.editable);
	
	        _this4.select.onMouseUp(e);
	      });
	    }
	  }, {
	    key: "insertString",
	    value: function insertString(index, string) {
	      this.text = this.text.substr(0, index) + string + this.text.substr(index);
	    }
	  }, {
	    key: "removeString",
	    value: function removeString(index, length) {
	      var newText = this.text.split("");
	      newText.splice(index, length + 1);
	      this.text = newText.join("");
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
	  function TextLayout(owner, config) {
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
	
	    _defineProperty(this, "owner", null);
	
	    this.owner = owner;
	    this.text = owner.text;
	    this.font = owner.font;
	    this.fontSize = config.fontSize;
	    this.wrapWords = config.wrapWords;
	    this.wrapperWidth = config.wrapperWidth;
	    this.lineHeight = config.lineHeight;
	    this.align = config.align;
	    this.update();
	  }
	
	  _createClass(TextLayout, [{
	    key: "update",
	    value: function update() {
	      var _this = this;
	
	      this.text = this.owner.text;
	      this.font = this.owner.font;
	      this.lettersCount = this.text.split("").length;
	      this.metrics = this.fontMetrics(this.font, 0.0);
	      this.startY = this.metrics.lineHeight;
	      this.calculateWordsPositions();
	      this.glyphs = [];
	      this.wordsMetrics.forEach(function (word) {
	        _this.getGlyphs(word.word, [word.x, word.y]);
	      });
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
	  function Select(owner) {
	    _classCallCheck(this, Select);
	
	    _defineProperty(this, "range", [0, 0]);
	
	    _defineProperty(this, "metrics", null);
	
	    _defineProperty(this, "layout", null);
	
	    _defineProperty(this, "dirty", false);
	
	    _defineProperty(this, "indexBuffer", false);
	
	    _defineProperty(this, "owner", null);
	
	    this.owner = owner;
	    this.metrics = owner.metrics;
	    this.layout = owner.layout;
	  }
	
	  _createClass(Select, [{
	    key: "update",
	    value: function update() {
	      this.metrics = this.owner.metrics;
	      this.layout = this.owner.layout; // Vertices array for all selected lines
	
	      this.vertices = new Float32Array(this.layout.linesCount * 4 * 2);
	      if (this.range[1] !== null) this.buildVertices();
	      this.indices = createIndices({
	        clockwise: true,
	        type: 'uint16',
	        count: this.layout.linesCount
	      });
	      this.dirty = true;
	      this.indexBuffer = true;
	    }
	  }, {
	    key: "setRange",
	    value: function setRange() {
	      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var glyphs = this.owner.layout.glyphs;
	      if (start === null) start = this.range[0];
	      if (end === null) end = this.range[1];
	      if (start < 0) start = 0;
	      if (end < 0) end = 0;
	      if (start > glyphs.length - 1) start = glyphs.length - 1;
	      if (end > glyphs.length - 1) end = glyphs.length - 1;
	      if (end === false) end = null;
	      this.range = [start, end];
	      this.update();
	    }
	  }, {
	    key: "buildVertices",
	    value: function buildVertices() {
	      var _this = this;
	
	      this.metrics = this.owner.layout.metrics; // Select range
	
	      var start = this.layout.glyphs[Math.min.apply(null, this.range)];
	      var end = this.layout.glyphs[Math.max.apply(null, this.range)]; // Iterate thought all lines
	
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
	      var glyphs = this.owner.layout.glyphs;
	      var lineHeight = this.metrics.lineHeight;
	      var selectingLine = Math.floor(y / this.metrics.lineHeight);
	      var selectingLineY = selectingLine * lineHeight;
	      var lastGlyphOnLine = glyphs[glyphs.length - 1];
	      var firstGlyphOnLine = null;
	
	      for (var i = 0; i < glyphs.length; ++i) {
	        var glyph = glyphs[i];
	
	        if (glyph.metrics.y === selectingLineY + lineHeight) {
	          lastGlyphOnLine = glyph;
	
	          if (x < glyph.metrics.x + glyph.metrics.width / 2) {
	            if (i === 0) return -1;
	            return glyphs[i - 1];
	          }
	        }
	      }
	
	      return lastGlyphOnLine;
	    }
	  }, {
	    key: "onMouseDown",
	    value: function onMouseDown(event) {
	      // Only left mouse button
	      if (event.data.button !== 0) return;
	      var position = event.data.global;
	      position.x -= this.owner.position.x;
	      position.y -= this.owner.position.y;
	      position.x = position.x / this.owner.scale.x;
	      position.y = position.y / this.owner.scale.y;
	      var closestLetter = this.getClosestGlyph(position.x, position.y);
	      var index = this.owner.layout.glyphs.indexOf(closestLetter);
	      this.setRange(index + 1, false);
	    }
	  }, {
	    key: "onMouseMove",
	    value: function onMouseMove(event) {
	      var position = event.data.global;
	      position.x -= this.owner.position.x;
	      position.y -= this.owner.position.y;
	      position.x = position.x / this.owner.scale.x;
	      position.y = position.y / this.owner.scale.y;
	      var closestLetter = this.getClosestGlyph(position.x, position.y);
	      var index = this.owner.layout.glyphs.indexOf(closestLetter);
	      this.setRange(null, index + 1);
	    }
	  }, {
	    key: "onMouseUp",
	    value: function onMouseUp(event) {
	      // Only left mouse button
	      if (event.data.button !== 0) return;
	      var position = event.data.global;
	      position.x -= this.owner.position.x;
	      position.y -= this.owner.position.y;
	      position.x = position.x / this.owner.scale.x;
	      position.y = position.y / this.owner.scale.y;
	      var closestLetter = this.getClosestGlyph(position.x, position.y); // -1 means that we at the start of the line
	
	      if (closestLetter === -1) {
	        this.owner.input.glyphIndex = closestLetter;
	      } else {
	        this.owner.input.glyphIndex = this.owner.layout.glyphs.indexOf(closestLetter);
	      }
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

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;
	
	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
	
	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var Input =
	/*#__PURE__*/
	function () {
	  _createClass(Input, [{
	    key: "glyphIndex",
	    set: function set(value) {
	      this._glyphIndex = value;
	      if (this._glyphIndex < -1) this._glyphIndex = -1;
	      if (this._glyphIndex > this.owner.layout.glyphs.length) this._glyphIndex = this.owner.layout.glyphs.length;
	      this.update();
	    },
	    get: function get() {
	      return this._glyphIndex;
	    }
	  }, {
	    key: "enabled",
	    set: function set(value) {
	      this._enabled = value;
	
	      if (this._enabled) {
	        this.enable();
	      } else {
	        this.disable();
	      }
	    },
	    get: function get() {
	      return this._enabled;
	    }
	  }]);
	
	  function Input(owner) {
	    _classCallCheck(this, Input);
	
	    _defineProperty(this, "_enabled", false);
	
	    _defineProperty(this, "owner", null);
	
	    _defineProperty(this, "_glyphIndex", -1);
	
	    this.owner = owner;
	    this.metrics = owner.metrics;
	    this.layout = owner.layout;
	    this.canvas = document.getElementsByTagName("canvas")[0];
	    this.createField();
	    this.disable();
	  }
	
	  _createClass(Input, [{
	    key: "enable",
	    value: function enable() {
	      this.inputElement.style.display = 'block';
	      document.body.append(this.inputElement);
	    }
	  }, {
	    key: "disable",
	    value: function disable() {
	      this.inputElement.style.display = 'none';
	      if (document.body.contains(this.inputElement)) document.body.removeChild(this.inputElement);
	    }
	  }, {
	    key: "hide",
	    value: function hide() {
	      this.inputElement.style.opacity = '0';
	    }
	  }, {
	    key: "show",
	    value: function show() {
	      this.inputElement.style.opacity = '1';
	    }
	  }, {
	    key: "createField",
	    value: function createField() {
	      var _this = this;
	
	      this.inputElement = document.createElement("input");
	      var transform = Object.values(this.owner.transform.worldTransform).slice(0, 6);
	      this.inputElement.style.backgroundColor = 'transparent'; //this.inputElement.style.backgroundColor = 'rgba(0,0,0,0.3)';
	
	      this.inputElement.style.color = 'transparent';
	      this.inputElement.style.border = "none";
	      this.inputElement.style.position = 'fixed';
	      this.inputElement.style.contain = 'strict';
	      this.inputElement.style.zIndex = 2;
	      this.inputElement.style.pointerEvents = "none";
	      this.inputElement.style.outline = "none";
	      this.inputElement.style.color = this.owner.style.fill;
	      this.inputElement.style.transformOrigin = "left top";
	      this.inputElement.style.transform = "matrix(".concat(transform.join(", "), ")");
	      this.inputElement.style.padding = "0";
	      this.addEvent("blur", function (event) {
	        return _this.inputElement.focus();
	      });
	      this.addEvent("input", function (event) {
	        return _this.onInput(event);
	      });
	      this.addEvent("keydown", function (event) {
	        return _this.onKeydown(event);
	      });
	    }
	  }, {
	    key: "update",
	    value: function update() {
	      this.metrics = this.owner.metrics;
	      this.layout = this.owner.layout;
	      var glyphs = this.owner.layout.glyphs;
	
	      if (this.glyphIndex >= glyphs.length) {
	        this.glyphIndex = glyphs.length - 1;
	      } // Default caret place - start of the input field TODO implement align
	
	
	      var glyphMetrics = {
	        x: this.owner.position.x,
	        y: this.owner.position.y
	      }; // if string is empty, put caret at the beginning
	
	      if (this.owner.layout.glyphs.length === -1) {// if we on the last glyph, place caret after it
	      } else if (this.glyphIndex === glyphs.length) {
	        var lastGlyph = glyphs[glyphs.length - 1];
	        glyphMetrics.x += lastGlyph.metrics.x + lastGlyph.metrics.width;
	        glyphMetrics.y += lastGlyph.metrics.y; // if caret in the middle of the text
	      } else if (this.glyphIndex !== -1) {
	        var selectedGlyph = glyphs[this.glyphIndex];
	        glyphMetrics.x += selectedGlyph.metrics.x + selectedGlyph.metrics.width;
	        glyphMetrics.y += selectedGlyph.metrics.y;
	      } else {
	        glyphMetrics.y += this.owner.style.lineHeight;
	      }
	
	      var transform = Object.values(this.owner.transform.worldTransform).slice(0, 6);
	      this.inputElement.style.transform = "matrix(".concat(transform.join(", "), ")");
	      this.inputElement.style.height = this.metrics.lineHeight + "px";
	      this.inputElement.style.fontSize = this.metrics.lineHeight + "px";
	      this.setPosition(glyphMetrics.x, glyphMetrics.y);
	      this.inputElement.focus();
	    }
	  }, {
	    key: "onInput",
	    value: function onInput(event) {
	      var range = this.owner.select.range; // If user selected some text, remove it
	
	      if (range[0] !== range[1] && range[1] !== null) {
	        this.glyphIndex = Math.min(range[0] - 1, range[1] - 1);
	        var removeIndex = Math.min.apply(null, range);
	        var removeLength = Math.abs(range[0] - range[1]);
	        this.owner.select.setRange(0, false);
	        this.owner.removeString(removeIndex, removeLength);
	        this.show();
	      }
	
	      event.target.value = "";
	      if (event.data === null) return; // If text is empty now
	
	      if (this.owner.layout.glyphs.length === 0) {
	        this.owner.text = event.data;
	        this.glyphIndex = 1; // If caret is at the end of the text
	      } else if (this.glyphIndex === this.owner.layout.glyphs.length - 1) {
	        this.owner.text += event.data;
	        this.glyphIndex++; // If we in the middle of the line
	      } else {
	        this.owner.insertString(++this.glyphIndex, event.data); //this.glyphIndex++;
	      }
	
	      this.owner.select.setRange(0, false);
	    }
	  }, {
	    key: "onKeydown",
	    value: function onKeydown(event) {
	      switch (event.key) {
	        case "ArrowLeft":
	          this.owner.select.setRange(0, false);
	          this.show();
	          this.glyphIndex--;
	          break;
	
	        case "ArrowRight":
	          this.owner.select.setRange(0, false);
	          this.show();
	          this.glyphIndex++;
	          break;
	
	        case "Backspace":
	        case "Delete":
	          var range = this.owner.select.range;
	
	          if (range[1] !== null) {
	            this.glyphIndex = Math.min(range[0], range[1]);
	            var removeIndex = Math.min.apply(null, range);
	            var removeLength = Math.abs(range[0] - range[1]);
	            this.owner.select.setRange(0, false);
	            this.owner.removeString(removeIndex, removeLength);
	            this.show();
	          } else {
	            if (event.key === "Backspace") this.owner.removeString(this.glyphIndex--, 0);
	          }
	
	          break;
	        // Select all
	
	        case "a":
	          if (event.ctrlKey) {
	            this.owner.select.setRange(0, this.owner.text.length - 1);
	          }
	
	      }
	
	      this.inputElement.value = " ";
	      this.inputElement.value = "";
	    }
	  }, {
	    key: "setPosition",
	    value: function setPosition(x, y) {
	      var _this$owner$transform = this.owner.transform.worldTransform,
	          scaleX = _this$owner$transform.a,
	          scaleY = _this$owner$transform.d;
	      var _this$owner$position = this.owner.position,
	          localX = _this$owner$position.x,
	          localY = _this$owner$position.y;
	      var lineHeight = this.metrics.lineHeight * scaleY;
	      y *= scaleY;
	      x *= scaleX;
	      y -= lineHeight;
	      y -= localY * scaleY;
	      x -= localX * scaleX;
	      this.inputElement.style.left = "".concat(x, "px");
	      this.inputElement.style.top = "".concat(y, "px");
	      this.inputElement.value = " ";
	      this.inputElement.value = "";
	      var transform = Object.values(this.getTransform()).slice(0, 6);
	      this.inputElement.style.transform = "matrix(".concat(transform.join(", "), ")");
	    }
	  }, {
	    key: "getTransform",
	    value: function getTransform() {
	      var ownerTransform = this.owner.transform.worldTransform;
	      var canvasRect = this.canvas.getBoundingClientRect();
	      return _extends({}, ownerTransform, {
	        tx: ownerTransform.tx + canvasRect.x,
	        ty: ownerTransform.ty + canvasRect.y
	      });
	    }
	  }, {
	    key: "addEvent",
	    value: function addEvent(event, callback) {
	      var _this2 = this;
	
	      this.inputElement.addEventListener(event, function (event) {
	        if (_this2._enabled) {
	          callback(event);
	        }
	      });
	    }
	  }]);
	
	  return Input;
	}();
	
	var _default = Input;
	exports["default"] = _default;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute float aSdfSize;\n\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\nuniform float sdfMultiplier;\n\nvarying vec2  tc0;\nvarying float doffset;\nvarying float sdf_texel;\n\n\n\nvoid main(void) {\n\n    //TODO MAKE ATTRIBUTE\n    float sdf_size = aSdfSize * sdfMultiplier;\n\n    //TODO MAKE UNIFORMS\n    float sdf_tex_size = 1024.0;\n\n\n    tc0 = aTextureCoord;\n    doffset = 1.0 / sdf_size;       // Distance field delta for one screen pixel\n    sdf_texel = 1.0 / sdf_tex_size;\n\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition , 1.0)).xy, 0.0, 1.0);\n\n}\n"

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nuniform sampler2D uSampler;\nuniform float hint_amount;\nuniform float subpixel_amount;\n\nuniform vec3 bg_color;\nuniform vec3 font_color;\n\nvarying vec2  tc0;\nvarying float doffset;\nvarying float sdf_texel;\n\n\n/*\n *  Subpixel coverage calculation\n *\n *  v - edge slope    -1.0 to 1.0          triplet\n *  a - pixel coverage 0.0 to 1.0          coverage\n *\n *      |<- glyph edge                      R  G  B\n *  +---+---+                             +--+--+--+\n *  |   |XXX| v = 1.0 (edge facing west)  |  |xx|XX|\n *  |   |XXX| a = 0.5 (50% coverage)      |  |xx|XX|\n *  |   |XXX|                             |  |xx|XX|\n *  +---+---+                             +--+--+--+\n *    pixel                                0  50 100\n *\n *\n *        R   G   B\n *\n *   1.0        +--+   <- top (abs( v ))\n *              |\n *       -+-----+--+-- <- ceil: 100% coverage\n *        |     |XX|\n *   0.0  |  +--+XX|\n *        |  |xx|XX|\n *       -+--+--+--+-- <- floor: 0% coverage\n *           |\n *  -1.0  +--+         <-  -abs(v)\n *        |\n *        |\n *        |\n *  -2.0  +            <- bottom: -abs(v)-1.0\n */\n\nvec3 subpixel( float v, float a ) {\n    float vt      = 0.6 * v; // 1.0 will make your eyes bleed\n    vec3  rgb_max = vec3( -vt, 0.0, vt );\n    float top     = abs( vt );\n    float bottom  = -top - 1.0;\n    float cfloor  = mix( top, bottom, a );\n    vec3  res     = clamp( rgb_max - vec3( cfloor ), 0.0, 1.0 );\n    return res;\n}\n\nvoid main2() {\n    gl_FragColor = texture2D(uSampler, tc0);\n}\n\nvoid main(void) {\n\n    // Sampling the texture, L pattern\n    float sdf       = texture2D( uSampler, tc0 ).r;\n    float sdf_north = texture2D( uSampler, tc0 + vec2( 0.0, sdf_texel ) ).r;\n    float sdf_east  = texture2D( uSampler, tc0 + vec2( sdf_texel, 0.0 ) ).r;\n\n    // Estimating stroke direction by the distance field gradient vector\n    vec2  sgrad     = vec2( sdf_east - sdf, sdf_north - sdf );\n    float sgrad_len = max( length( sgrad ), 1.0 / 128.0 );\n    vec2  grad      = sgrad / vec2( sgrad_len );\n    float vgrad = abs( grad.y ); // 0.0 - vertical stroke, 1.0 - horizontal one\n\n    float horz_scale  = 1.1; // Blurring vertical strokes along the X axis a bit\n    float vert_scale  = 0.6; // While adding some contrast to the horizontal strokes\n    float hdoffset    = mix( doffset * horz_scale, doffset * vert_scale, vgrad );\n    float res_doffset = mix( doffset, hdoffset, hint_amount );\n\n    float alpha       = smoothstep( 0.5 - res_doffset, 0.5 + res_doffset, sdf );\n\n    // Additional contrast\n    alpha             = pow( alpha, 1.0 + 0.2 * vgrad * hint_amount );\n\n    // Unfortunately there is no support for ARB_blend_func_extended in WebGL.\n    // Fortunately the background is filled with a solid color so we can do\n    // the blending inside the shader.\n\n    // Discarding pixels beyond a threshold to minimise possible artifacts.\n    if ( alpha < 20.0 / 256.0 ) discard;\n\n    vec3 channels = subpixel( grad.x * 0.5 * subpixel_amount, alpha ) + 0.1;\n\n    // For subpixel rendering we have to blend each color channel separately\n    vec3 res = mix( bg_color, font_color, channels );\n    gl_FragColor = vec4( res, 1.0 );\n}\n\n\n"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\n\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\n\nvoid main(void) {\n\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition , 1.0)).xy, 0.0, 1.0);\n\n}\n"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nuniform vec3 bg_color;\nvarying vec2  tc0;\n\nvoid main() {\n    gl_FragColor = vec4(bg_color,0.45);\n    gl_FragColor = vec4(1.0, 1.0, 1.0,0.2);\n}\n\n\n"

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBiNTBiOTdmOTJlYjYyY2JlNzQ4NiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2R0eXBlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYW4tYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvdmVydC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvZnJhZy5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3NlbGVjdC92ZXJ0Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvc2VsZWN0L2ZyYWcuZ2xzbCJdLCJuYW1lcyI6WyJPYmplY3QiLCJhc3NpZ24iLCJQSVhJIiwiZXh0cmFzIiwiQXdlc29tZVRleHQiLCJUZXh0IiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJzZWxlY3RWZXJ0ZXh0U2hhZGVyIiwic2VsZWN0RnJhZ21lbnRTaGFkZXIiLCJnbENvcmUiLCJBd2Vzb21lVGV4dFJlbmRlcmVyIiwicmVuZGVyZXIiLCJ0ZXh0U2hhZGVyIiwic2VsZWN0U2hhZGVyIiwiZ2wiLCJnZXRFeHRlbnNpb24iLCJTaGFkZXIiLCJzb3VyY2UiLCJnbERhdGEiLCJfZ2xEYXRhcyIsImNvbnRleHRUZXh0IiwiYmluZFZhbyIsImJ1aWxkVGV4dEdsRGF0YSIsInZhbyIsImRpcnR5IiwidXZCdWZmZXIiLCJ1cGxvYWQiLCJ1dnMiLCJpbmRleERpcnR5IiwiaW5kZXhCdWZmZXIiLCJpbmRpY2VzIiwidmVydGV4QnVmZmVyIiwidmVydGljZXMiLCJiaW5kU2hhZGVyIiwic2hhZGVyIiwic3RhdGUiLCJzZXRCbGVuZE1vZGUiLCJibGVuZE1vZGUiLCJ1bmlmb3JtcyIsInVTYW1wbGVyIiwiYmluZFRleHR1cmUiLCJ0ZXh0dXJlIiwidHJhbnNsYXRpb25NYXRyaXgiLCJ3b3JsZFRyYW5zZm9ybSIsInRvQXJyYXkiLCJoaW50X2Ftb3VudCIsInNkZk11bHRpcGxpZXIiLCJzY2FsZSIsInN1YnBpeGVsX2Ftb3VudCIsImZvbnRfY29sb3IiLCJ1dGlscyIsImhleDJyZ2IiLCJzdHlsZSIsImZpbGwiLCJyZXBsYWNlIiwiYmdfY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkcmF3TW9kZSIsIlRSSUFOR0xFUyIsImRyYXciLCJsZW5ndGgiLCJjb250ZXh0U2VsZWN0Iiwic2VsZWN0IiwiYnVpbGRTZWxlY3RHbERhdGEiLCJzZWxlY3RDb2xvciIsInN0eWxlSUQiLCJ1cGRhdGUiLCJzdGF0ZXMiLCJlZGl0YWJsZSIsInNlbGVjdGluZyIsInJlbmRlclNlbGVjdCIsInJlbmRlclRleHQiLCJHTEJ1ZmZlciIsImNyZWF0ZVZlcnRleEJ1ZmZlciIsIlNUUkVBTV9EUkFXIiwic2RmQnVmZmVyIiwic2RmU2l6ZXMiLCJTVEFUSUNfRFJBVyIsImNyZWF0ZUluZGV4QnVmZmVyIiwiVmVydGV4QXJyYXlPYmplY3QiLCJhZGRJbmRleCIsImFkZEF0dHJpYnV0ZSIsImF0dHJpYnV0ZXMiLCJhVmVydGV4UG9zaXRpb24iLCJGTE9BVCIsImFUZXh0dXJlQ29vcmQiLCJhU2RmU2l6ZSIsIk9iamVjdFJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsInJlZ2lzdGVyUGx1Z2luIiwiY3JlYXRlSW5kaWNlcyIsInRleHQiLCJmb250IiwicmVndWxhciIsIlRleHRTdHlsZSIsIl90ZXh0IiwiX2ZvbnQiLCJfdGV4dHVyZSIsImludGVyYWN0aXZlIiwiYnV0dG9uTW9kZSIsImxheW91dCIsIlRleHRMYXlvdXQiLCJmb250U2l6ZSIsIndyYXBXb3JkcyIsImJyZWFrV29yZHMiLCJ3cmFwcGVyV2lkdGgiLCJ3b3JkV3JhcFdpZHRoIiwiYWxpZ24iLCJsaW5lSGVpZ2h0IiwiU2VsZWN0IiwiaW5wdXQiLCJJbnB1dCIsInNldFN0YXRlIiwibWV0cmljcyIsImZvbnRNZXRyaWNzIiwiRmxvYXQzMkFycmF5IiwibGV0dGVyc0NvdW50IiwiYXJyYXlQb3NpdGlvbnMiLCJ2ZXJ0ZXgiLCJzZGYiLCJ3b3Jkc01ldHJpY3MiLCJmb3JFYWNoIiwid29yZCIsIndyaXRlU3RyaW5nIiwieCIsInkiLCJjbG9ja3dpc2UiLCJ0eXBlIiwiY291bnQiLCJuZXdTdGF0ZSIsInZhbHVlcyIsInNldFJlZ3VsYXJTdGF0ZSIsInNldEVkaXRhYmxlU3RhdGUiLCJjdXJyZW50RWRpdGluZ0VsZW1lbnQiLCJvZmYiLCJlbmFibGVkIiwib24iLCJlIiwiY2xpY2tzQ291bnQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsInNldFJhbmdlIiwiaW5wdXRFbGVtZW50IiwiZm9jdXMiLCJvbk1vdXNlRG93biIsInNob3ciLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsImluZGV4Iiwic3RyaW5nIiwic3Vic3RyIiwibmV3VGV4dCIsInNwbGl0Iiwic3BsaWNlIiwiam9pbiIsImZvbnRfbWV0cmljcyIsInBvcyIsInByZXZfY2hhciIsImNwb3MiLCJ4X21heCIsImNhcFNjYWxlIiwic3RyX3BvcyIsInNjaGFyIiwiZm9udF9jaGFyIiwiY2hhcnMiLCJrZXJuIiwicmVjdCIsImNoYXJSZWN0IiwicG9zaXRpb25zIiwibWFwIiwidXYiLCJzdHJpbmdfcG9zIiwibW9yZUxpbmVHYXAiLCJjYXBfaGVpZ2h0IiwieF9oZWlnaHQiLCJmb250QXNjZW50IiwiYXNjZW50IiwiZGVzY2VudCIsImxpbmVfZ2FwIiwibG93U2NhbGUiLCJNYXRoIiwicm91bmQiLCJsb3djYXNlIiwiZmxhZ3MiLCJiYXNlbGluZSIsImciLCJib3R0b20iLCJpeSIsInRvcCIsInJvd19oZWlnaHQiLCJsZWZ0IiwiYmVhcmluZ194IiwiaXgiLCJyaWdodCIsInAiLCJuZXdfcG9zX3giLCJhZHZhbmNlX3giLCJzZGZfc2l6ZSIsInZhbHVlIiwibWVzaCIsIk1lc2giLCJvd25lciIsImNvbmZpZyIsInN0YXJ0WSIsImNhbGN1bGF0ZVdvcmRzUG9zaXRpb25zIiwiZ2x5cGhzIiwiZ2V0R2x5cGhzIiwid2lkdGgiLCJoZWlnaHQiLCJjaGFyIiwid29yZHMiLCJpIiwic3RhcnRYIiwid29yZFNpemUiLCJnZXRTdHJpbmdTaXplIiwicHVzaCIsImxpbmVzQ291bnQiLCJ3b3Jkc09uTGluZSIsImZpbHRlciIsImxhc3RXb3JkIiwiZnJlZVNwYWNlIiwibGVmdE9mZnNldCIsImxldHRlciIsInBvc2l0aW9uIiwicmFuZ2UiLCJidWlsZFZlcnRpY2VzIiwic3RhcnQiLCJlbmQiLCJtaW4iLCJhcHBseSIsIm1heCIsImxldHRlckNvdW50IiwiZmlyc3RMZXR0ZXIiLCJsYXN0TGV0dGVyIiwic3RhcnRMaW5lTGV0dGVyIiwiZW5kTGluZUxldHRlciIsIm9mZnNldCIsInNlbGVjdGluZ0xpbmUiLCJmbG9vciIsInNlbGVjdGluZ0xpbmVZIiwibGFzdEdseXBoT25MaW5lIiwiZmlyc3RHbHlwaE9uTGluZSIsImdseXBoIiwiZXZlbnQiLCJkYXRhIiwiYnV0dG9uIiwiZ2xvYmFsIiwiY2xvc2VzdExldHRlciIsImdldENsb3Nlc3RHbHlwaCIsImluZGV4T2YiLCJnbHlwaEluZGV4IiwiX2dseXBoSW5kZXgiLCJfZW5hYmxlZCIsImVuYWJsZSIsImRpc2FibGUiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY3JlYXRlRmllbGQiLCJkaXNwbGF5IiwiYm9keSIsImFwcGVuZCIsImNvbnRhaW5zIiwicmVtb3ZlQ2hpbGQiLCJvcGFjaXR5IiwiY3JlYXRlRWxlbWVudCIsInRyYW5zZm9ybSIsInNsaWNlIiwiY29sb3IiLCJib3JkZXIiLCJjb250YWluIiwiekluZGV4IiwicG9pbnRlckV2ZW50cyIsIm91dGxpbmUiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJwYWRkaW5nIiwiYWRkRXZlbnQiLCJvbklucHV0Iiwib25LZXlkb3duIiwiZ2x5cGhNZXRyaWNzIiwibGFzdEdseXBoIiwic2VsZWN0ZWRHbHlwaCIsInNldFBvc2l0aW9uIiwicmVtb3ZlSW5kZXgiLCJyZW1vdmVMZW5ndGgiLCJhYnMiLCJyZW1vdmVTdHJpbmciLCJ0YXJnZXQiLCJpbnNlcnRTdHJpbmciLCJrZXkiLCJjdHJsS2V5Iiwic2NhbGVYIiwiYSIsInNjYWxlWSIsImQiLCJsb2NhbFgiLCJsb2NhbFkiLCJnZXRUcmFuc2Zvcm0iLCJvd25lclRyYW5zZm9ybSIsImNhbnZhc1JlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0eCIsInR5IiwiY2FsbGJhY2siLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQUEsT0FBTSxDQUFDQyxNQUFQLENBQWNDLElBQUksQ0FBQ0MsTUFBbkIsRUFBMkI7QUFDekJDLGNBQVcsRUFBRUM7QUFEWSxFQUEzQjs7QUFJQSxLQUFJLE9BQU9ILElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDL0IsT0FBSUEsSUFBSSxDQUFDQyxN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QW9FLG1DQUFtQyxnQ0FBZ0MscUJBQXFCLDhHQUE4RyxLQUFLLEc7Ozs7OztBQ0EvUSw0REFBMkQsb0JBQW9CLGlCQUFpQix5Q0FBeUMsNkNBQTZDLEdBQUcsTyIsImZpbGUiOiJwaXhpLWF3ZXNvbWUtdGV4dC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJBd2Vzb21lVGV4dFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJBd2Vzb21lVGV4dFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBiNTBiOTdmOTJlYjYyY2JlNzQ4NiIsImltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi9yZW5kZXJlclwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4vdGV4dFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi9sYXlvdXRcIjtcblxuT2JqZWN0LmFzc2lnbihQSVhJLmV4dHJhcywge1xuICBBd2Vzb21lVGV4dDogVGV4dFxufSk7XG5cbmlmICh0eXBlb2YgUElYSSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgaWYgKFBJWEkuZXh0cmFzKSB7XG4gICAgUElYSS5leHRyYXMuQXdlc29tZVRleHQgPSBUZXh0O1xuICB9IGVsc2Uge1xuICAgIFBJWEkuZXh0cmFzID0geyBBd2Vzb21lVGV4dDogVGV4dH07XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgVGV4dCxcbiAgUmVuZGVyZXIsXG4gIExheW91dFxufVxuXG4vKlxuXG5peCAgICAgICAgICAgID0gc2RmX3NpemUgLyB0ZXhfd2lkdGhcbml5ICAgICAgICAgICAgPSBzZGZfc2l6ZSAvIHRleF9oZWlnaHRcbnJvd19oZWlnaHQgICAgPSAocm93X2hlaWdodCArIDIgKiBzZGZfc2l6ZSkgLyB0ZXhfaGVpZ2h0O1xuYXNwZWN0ICAgICAgICA9IHRleF93aWR0aCAvIHRleF9oZWlnaHQ7XG5hc2NlbnQgICAgICAgID0gZm9udC0+YXNjZW50ICogc2NhbGVZXG5kZXNjZW50ICAgICAgID0gZmFic2YoZm9udC0+ZGVzY2VudCAqIHNjYWxlWSlcbmxpbmVfZ2FwICAgICAgPSBmb250LT5saW5lX2dhcCAqIHNjYWxlIFlcbmNhcF9oZWlnaHQgICAgPSBneGNhcC5tYXgueSAqIHNjYWxlWVxueF9oZWlnaHQgICAgICA9IGd4Lm1heC55ICogc2NhbGVZXG5zcGFjZV9hZHZhbmNlID0gZ3NwYWNlLmFkdmFuY2Vfd2lkdGggKiBzY2FsZVhcblxuXG5zY2FsZXkgPSByb3dfaGVpZ2h0IC8gdGV4X2hlaWdodCAvICggZm9udC0+Z2x5cGhfbWF4LnkgLSBmb250LT5nbHlwaF9taW4ueSApO1xuc2NhbGV4ID0gcm93X2hlaWdodCAvIHRleF93aWR0aCAvICggZm9udC0+Z2x5cGhfbWF4LnkgLSBmb250LT5nbHlwaF9taW4ueSApO1xuZ3NwYWNlID0gZm9udC0+Z2x5cGhzWyBmb250LT5nbHlwaF9pZHgoICcgJyApIF07XG5neCAgICAgPSBmb250LT5nbHlwaHNbIGZvbnQtPmdseXBoX2lkeCggJ3gnICkgXVxuZ3hjYXAgID0gZm9udC0+Z2x5cGhzWyBmb250LT5nbHlwaF9pZHgoICdYJyApIF1cblxuXG5zZGZfc2l6ZSA9IDEwXG5cbiovXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0IEF3ZXNvbWVUZXh0IGZyb20gXCIuL3RleHRcIjtcblxuY29uc3QgdmVydGV4U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy90ZXh0L3ZlcnQuZ2xzbFwiKTtcbmNvbnN0IGZyYWdtZW50U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy90ZXh0L2ZyYWcuZ2xzbFwiKTtcblxuY29uc3Qgc2VsZWN0VmVydGV4dFNoYWRlciA9IHJlcXVpcmUoXCIuL3NoYWRlcnMvc2VsZWN0L3ZlcnQuZ2xzbFwiKTtcbmNvbnN0IHNlbGVjdEZyYWdtZW50U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy9zZWxlY3QvZnJhZy5nbHNsXCIpO1xuXG5jb25zdCBnbENvcmUgPSBQSVhJLmdsQ29yZTtcblxuY2xhc3MgQXdlc29tZVRleHRSZW5kZXJlciBleHRlbmRzIFBJWEkuT2JqZWN0UmVuZGVyZXIge1xuXG4gIHN0YXRpYyBjb250ZXh0VGV4dCA9IDA7XG4gIHN0YXRpYyBjb250ZXh0U2VsZWN0ID0gMTtcblxuICBzZWxlY3RDb2xvciA9IDB4RkZCM0MzO1xuXG5cbiAgY29uc3RydWN0b3IocmVuZGVyZXIpIHtcbiAgICBzdXBlcihyZW5kZXJlcik7XG4gICAgdGhpcy50ZXh0U2hhZGVyID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdFNoYWRlciA9IG51bGw7XG5cbiAgfVxuXG4gIG9uQ29udGV4dENoYW5nZSgpIHtcbiAgICBjb25zdCBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG4gICAgZ2wuZ2V0RXh0ZW5zaW9uKFwiT0VTX3N0YW5kYXJkX2Rlcml2YXRpdmVzXCIpO1xuICAgIHRoaXMudGV4dFNoYWRlciA9IG5ldyBQSVhJLlNoYWRlcihnbCwgdmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XG4gICAgdGhpcy5zZWxlY3RTaGFkZXIgPSBuZXcgUElYSS5TaGFkZXIoZ2wsIHNlbGVjdFZlcnRleHRTaGFkZXIsIHNlbGVjdEZyYWdtZW50U2hhZGVyKTtcbiAgfVxuXG4gIHJlbmRlclRleHQoc291cmNlKSB7XG5cbiAgICBsZXQgZ2xEYXRhID0gc291cmNlLl9nbERhdGFzW0F3ZXNvbWVUZXh0UmVuZGVyZXIuY29udGV4dFRleHRdO1xuXG4gICAgaWYgKCFnbERhdGEpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYmluZFZhbyhudWxsKTtcbiAgICAgIGdsRGF0YSA9IHRoaXMuYnVpbGRUZXh0R2xEYXRhKHNvdXJjZSwgdGhpcy5yZW5kZXJlci5nbCk7XG4gICAgICBzb3VyY2UuX2dsRGF0YXNbQXdlc29tZVRleHRSZW5kZXJlci5jb250ZXh0VGV4dF0gPSBnbERhdGE7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlci5iaW5kVmFvKGdsRGF0YS52YW8pO1xuXG4gICAgaWYgKHNvdXJjZS5kaXJ0eSkge1xuICAgICAgc291cmNlLmRpcnR5ID0gZmFsc2U7XG4gICAgICBnbERhdGEudXZCdWZmZXIudXBsb2FkKHNvdXJjZS51dnMpO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UuaW5kZXhEaXJ0eSkge1xuICAgICAgc291cmNlLmluZGV4RGlydHkgPSBmYWxzZTtcbiAgICAgIGdsRGF0YS5pbmRleEJ1ZmZlci51cGxvYWQoc291cmNlLmluZGljZXMpO1xuICAgIH1cblxuICAgIGdsRGF0YS52ZXJ0ZXhCdWZmZXIudXBsb2FkKHNvdXJjZS52ZXJ0aWNlcyk7XG4gICAgdGhpcy5yZW5kZXJlci5iaW5kU2hhZGVyKGdsRGF0YS5zaGFkZXIpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zdGF0ZS5zZXRCbGVuZE1vZGUoc291cmNlLmJsZW5kTW9kZSk7XG5cbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnVTYW1wbGVyID0gdGhpcy5yZW5kZXJlci5iaW5kVGV4dHVyZShzb3VyY2UudGV4dHVyZSk7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy50cmFuc2xhdGlvbk1hdHJpeCA9IHNvdXJjZS53b3JsZFRyYW5zZm9ybS50b0FycmF5KHRydWUpO1xuXG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5oaW50X2Ftb3VudCA9IDEuMDtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnNkZk11bHRpcGxpZXIgPSBBd2Vzb21lVGV4dC5zY2FsZTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnN1YnBpeGVsX2Ftb3VudCA9IDEuMDtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmZvbnRfY29sb3IgPSBQSVhJLnV0aWxzLmhleDJyZ2Ioc291cmNlLnN0eWxlLmZpbGwucmVwbGFjZShcIiNcIiwgXCIweFwiKSk7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5iZ19jb2xvciA9IFBJWEkudXRpbHMuaGV4MnJnYihzb3VyY2UuYmFja2dyb3VuZENvbG9yLnJlcGxhY2UoXCIjXCIsIFwiMHhcIikpO1xuXG4gICAgY29uc3QgZHJhd01vZGUgPSBzb3VyY2UuZHJhd01vZGUgPSB0aGlzLnJlbmRlcmVyLmdsLlRSSUFOR0xFUztcbiAgICBnbERhdGEudmFvLmRyYXcoZHJhd01vZGUsIHNvdXJjZS5pbmRpY2VzLmxlbmd0aCwgMCk7XG5cbiAgfVxuXG4gIHJlbmRlclNlbGVjdChzb3VyY2UpIHtcbiAgICBsZXQgZ2xEYXRhID0gc291cmNlLl9nbERhdGFzW0F3ZXNvbWVUZXh0UmVuZGVyZXIuY29udGV4dFNlbGVjdF07XG5cbiAgICBpZiAoIWdsRGF0YSB8fCBzb3VyY2Uuc2VsZWN0LmRpcnR5KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmJpbmRWYW8obnVsbCk7XG4gICAgICBnbERhdGEgPSB0aGlzLmJ1aWxkU2VsZWN0R2xEYXRhKHNvdXJjZSwgdGhpcy5yZW5kZXJlci5nbCk7XG4gICAgICBzb3VyY2UuX2dsRGF0YXNbQXdlc29tZVRleHRSZW5kZXJlci5jb250ZXh0U2VsZWN0XSA9IGdsRGF0YTtcbiAgICAgIHNvdXJjZS5zZWxlY3QuZGlydHkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyLmJpbmRWYW8oZ2xEYXRhLnZhbyk7XG5cbiAgICBpZiAoc291cmNlLnNlbGVjdC5pbmRleERpcnR5KSB7XG4gICAgICBzb3VyY2Uuc2VsZWN0LmluZGV4RGlydHkgPSBmYWxzZTtcbiAgICAgIGdsRGF0YS5pbmRleEJ1ZmZlci51cGxvYWQoc291cmNlLnNlbGVjdC5pbmRpY2VzKTtcbiAgICB9XG5cbiAgICBnbERhdGEudmVydGV4QnVmZmVyLnVwbG9hZChzb3VyY2Uuc2VsZWN0LnZlcnRpY2VzKTtcbiAgICB0aGlzLnJlbmRlcmVyLmJpbmRTaGFkZXIoZ2xEYXRhLnNoYWRlcik7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnN0YXRlLnNldEJsZW5kTW9kZSgxNyk7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy50cmFuc2xhdGlvbk1hdHJpeCA9IHNvdXJjZS53b3JsZFRyYW5zZm9ybS50b0FycmF5KHRydWUpO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuYmdfY29sb3IgPSBQSVhJLnV0aWxzLmhleDJyZ2IodGhpcy5zZWxlY3RDb2xvcik7XG5cbiAgICBjb25zdCBkcmF3TW9kZSA9IHNvdXJjZS5kcmF3TW9kZSA9IHRoaXMucmVuZGVyZXIuZ2wuVFJJQU5HTEVTO1xuICAgIGdsRGF0YS52YW8uZHJhdyhkcmF3TW9kZSwgc291cmNlLnNlbGVjdC5pbmRpY2VzLmxlbmd0aCwgMCk7XG4gIH1cblxuICByZW5kZXIoc291cmNlKSB7XG5cbiAgICBpZiAoc291cmNlLnN0eWxlSUQgIT09IHNvdXJjZS5zdHlsZS5zdHlsZUlEKSB7XG4gICAgICBzb3VyY2UudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZS5zdGF0ZSA9PT0gQXdlc29tZVRleHQuc3RhdGVzLmVkaXRhYmxlIHx8IHNvdXJjZS5zdGF0ZSA9PT0gQXdlc29tZVRleHQuc3RhdGVzLnNlbGVjdGluZykge1xuICAgICAgdGhpcy5yZW5kZXJTZWxlY3Qoc291cmNlKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJUZXh0KHNvdXJjZSk7XG4gIH1cblxuICBidWlsZFRleHRHbERhdGEoc291cmNlLCBnbCkge1xuXG4gICAgY29uc3QgZ2xEYXRhID0ge1xuICAgICAgc2hhZGVyOiB0aGlzLnRleHRTaGFkZXIsXG4gICAgICB2ZXJ0ZXhCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoZ2wsIHNvdXJjZS52ZXJ0aWNlcywgZ2wuU1RSRUFNX0RSQVcpLFxuICAgICAgdXZCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoZ2wsIHNvdXJjZS51dnMsIGdsLlNUUkVBTV9EUkFXKSxcbiAgICAgIHNkZkJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgc291cmNlLnNkZlNpemVzLCBnbC5TVEFUSUNfRFJBVyksXG4gICAgICBpbmRleEJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZUluZGV4QnVmZmVyKGdsLCBzb3VyY2UuaW5kaWNlcywgZ2wuU1RBVElDX0RSQVcpLFxuICAgICAgLy8gYnVpbGQgdGhlIHZhbyBvYmplY3QgdGhhdCB3aWxsIHJlbmRlci4uXG4gICAgICB2YW86IG51bGwsXG4gICAgICBkaXJ0eTogc291cmNlLmRpcnR5LFxuICAgICAgaW5kZXhEaXJ0eTogc291cmNlLmluZGV4RGlydHksXG4gICAgfTtcblxuICAgIGdsRGF0YS52YW8gPSBuZXcgZ2xDb3JlLlZlcnRleEFycmF5T2JqZWN0KGdsKVxuICAgICAgLmFkZEluZGV4KGdsRGF0YS5pbmRleEJ1ZmZlcilcbiAgICAgIC5hZGRBdHRyaWJ1dGUoZ2xEYXRhLnZlcnRleEJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFWZXJ0ZXhQb3NpdGlvbiwgZ2wuRkxPQVQsIGZhbHNlLCAyICogNCwgMClcbiAgICAgIC5hZGRBdHRyaWJ1dGUoZ2xEYXRhLnV2QnVmZmVyLCBnbERhdGEuc2hhZGVyLmF0dHJpYnV0ZXMuYVRleHR1cmVDb29yZCwgZ2wuRkxPQVQsIGZhbHNlLCAyICogNCwgMClcbiAgICAgIC5hZGRBdHRyaWJ1dGUoZ2xEYXRhLnNkZkJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFTZGZTaXplLCBnbC5GTE9BVCwgZmFsc2UsIDQsIDApO1xuXG4gICAgcmV0dXJuIGdsRGF0YVxuICB9XG5cbiAgYnVpbGRTZWxlY3RHbERhdGEoc291cmNlLCBnbCkge1xuICAgIGNvbnN0IGdsRGF0YSA9IHtcbiAgICAgIHNoYWRlcjogdGhpcy5zZWxlY3RTaGFkZXIsXG4gICAgICB2ZXJ0ZXhCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoZ2wsIHNvdXJjZS5zZWxlY3QudmVydGljZXMsIGdsLlNUUkVBTV9EUkFXKSxcbiAgICAgIGluZGV4QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlSW5kZXhCdWZmZXIoZ2wsIHNvdXJjZS5zZWxlY3QuaW5kaWNlcywgZ2wuU1RBVElDX0RSQVcpLFxuICAgICAgdmFvOiBudWxsXG4gICAgfTtcblxuICAgIGdsRGF0YS52YW8gPSBuZXcgZ2xDb3JlLlZlcnRleEFycmF5T2JqZWN0KGdsKVxuICAgICAgLmFkZEluZGV4KGdsRGF0YS5pbmRleEJ1ZmZlcilcbiAgICAgIC5hZGRBdHRyaWJ1dGUoZ2xEYXRhLnZlcnRleEJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFWZXJ0ZXhQb3NpdGlvbiwgZ2wuRkxPQVQsIGZhbHNlLCAyICogNCwgMClcblxuICAgIHJldHVybiBnbERhdGFcbiAgfVxuXG59XG5cblBJWEkuV2ViR0xSZW5kZXJlci5yZWdpc3RlclBsdWdpbignQXdlc29tZVRleHRSZW5kZXJlcicsIEF3ZXNvbWVUZXh0UmVuZGVyZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBBd2Vzb21lVGV4dFJlbmRlcmVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyZXIuanMiLCJjb25zdCBjcmVhdGVJbmRpY2VzID0gcmVxdWlyZShcInF1YWQtaW5kaWNlc1wiKVxuaW1wb3J0IFRleHRMYXlvdXQgZnJvbSAnLi9sYXlvdXQnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL3NlbGVjdCdcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0J1xuXG5jbGFzcyBBd2Vzb21lVGV4dCBleHRlbmRzIFBJWEkubWVzaC5NZXNoIHtcblxuICBzdGF0aWMgc2NhbGUgPSAxLjA7XG4gIHN0YXRpYyBzdGF0ZXMgPSB7cmVndWxhcjogMCwgZWRpdGFibGU6IDEsIHNlbGVjdGluZzogMn07XG5cbiAgc3RhdGljIGN1cnJlbnRFZGl0aW5nRWxlbWVudCA9IG51bGw7XG5cbiAgcGx1Z2luTmFtZSA9ICdBd2Vzb21lVGV4dFJlbmRlcmVyJztcbiAgc3RhdGUgPSBBd2Vzb21lVGV4dC5zdGF0ZXMucmVndWxhcjtcbiAgY2xpY2tzQ291bnQgPSAwO1xuICBpbnB1dEVsZW1lbnQgPSBudWxsO1xuICBpbnB1dCA9IG51bGw7XG4gIHNlbGVjdCA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IodGV4dCwgc3R5bGUsIGZvbnQpIHtcbiAgICBzdXBlcihmb250LnRleHR1cmUpO1xuXG4gICAgdGhpcy5zdHlsZSA9IG5ldyBQSVhJLlRleHRTdHlsZShzdHlsZSk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBzdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgdGhpcy5fdGV4dCA9IHRleHQ7XG4gICAgdGhpcy5fZm9udCA9IGZvbnQuZm9udDtcbiAgICB0aGlzLl90ZXh0dXJlID0gZm9udC50ZXh0dXJlO1xuXG4gICAgdGhpcy5pbnRlcmFjdGl2ZSA9IHRydWU7XG4gICAgdGhpcy5idXR0b25Nb2RlID0gdHJ1ZTtcblxuICAgIC8vIENhbGN1YWx0ZSBsYXlvdXRcbiAgICB0aGlzLmxheW91dCA9IG5ldyBUZXh0TGF5b3V0KHRoaXMsIHtcbiAgICAgIGZvbnRTaXplOiB0aGlzLnN0eWxlLmZvbnRTaXplLFxuICAgICAgd3JhcFdvcmRzOiB0aGlzLnN0eWxlLmJyZWFrV29yZHMsXG4gICAgICB3cmFwcGVyV2lkdGg6IHRoaXMuc3R5bGUud29yZFdyYXBXaWR0aCxcbiAgICAgIGFsaWduOiB0aGlzLnN0eWxlLmFsaWduLFxuICAgICAgbGluZUhlaWdodDogdGhpcy5zdHlsZS5saW5lSGVpZ2h0LFxuICAgIH0pO1xuXG4gICAgLy8gIFNlbGVjdCBwbHVnaW5cbiAgICB0aGlzLnNlbGVjdCA9IG5ldyBTZWxlY3QodGhpcyk7XG5cbiAgICAvLyBJbnB1dCBwbHVnaW5cbiAgICB0aGlzLmlucHV0ID0gbmV3IElucHV0KHRoaXMpO1xuXG4gICAgdGhpcy5zZXRTdGF0ZShBd2Vzb21lVGV4dC5zdGF0ZXMucmVndWxhcik7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5mb250TWV0cmljcyh0aGlzLnN0eWxlLmZvbnRTaXplKTtcblxuICAgIHRoaXMubGF5b3V0LnVwZGF0ZSgpO1xuICAgIHRoaXMuc2VsZWN0LnVwZGF0ZSgpO1xuICAgIHRoaXMuaW5wdXQudXBkYXRlKCk7XG5cbiAgICAvLyBBcnJheXMgZm9yIHZlcnRpY2VzLCB1dnMgYW5kIHNkZlxuICAgIHRoaXMudmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubGF5b3V0LmxldHRlcnNDb3VudCAqIDQgKiAyKTtcbiAgICB0aGlzLnV2cyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5sYXlvdXQubGV0dGVyc0NvdW50ICogNCAqIDIpO1xuICAgIHRoaXMuc2RmU2l6ZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubGF5b3V0LmxldHRlcnNDb3VudCAqIDQpO1xuICAgIHRoaXMuYXJyYXlQb3NpdGlvbnMgPSB7IHZlcnRleDogMCwgdXZzOiAwLCBzZGY6IDAgfTtcblxuICAgIC8vIEZpbGwgYXJyYXlzIHdvcmQgYnkgd29yZFxuICAgIHRoaXMubGF5b3V0LndvcmRzTWV0cmljcy5mb3JFYWNoICh3b3JkID0+IHtcbiAgICAgIHRoaXMud3JpdGVTdHJpbmcod29yZC53b3JkLCB0aGlzLmZvbnQsIHRoaXMubWV0cmljcywgW3dvcmQueCwgd29yZC55XSk7XG4gICAgfSk7XG5cbiAgICAvLyBQcmVwYXJlIGluZGljZXNcbiAgICB0aGlzLmluZGljZXMgPSBjcmVhdGVJbmRpY2VzKHtcbiAgICAgIGNsb2Nrd2lzZTogdHJ1ZSxcbiAgICAgIHR5cGU6ICd1aW50MTYnLFxuICAgICAgY291bnQ6IHRoaXMubGF5b3V0LmxldHRlcnNDb3VudFxuICAgIH0pO1xuXG4gICAgdGhpcy5zdHlsZUlEID0gdGhpcy5zdHlsZS5zdHlsZUlEO1xuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgIHRoaXMuaW5kZXhEaXJ0eSA9IHRydWU7XG4gICAgdGhpcy5fZ2xEYXRhcyA9IFtdO1xuICB9XG5cbiAgc2V0U3RhdGUobmV3U3RhdGUpIHtcblxuICAgIGNvbnN0IHsgc3RhdGVzIH0gPSBBd2Vzb21lVGV4dDtcblxuICAgIGlmICghbmV3U3RhdGUgaW4gT2JqZWN0LnZhbHVlcyhzdGF0ZXMpKSByZXR1cm47XG5cbiAgICBzd2l0Y2ggKG5ld1N0YXRlKSB7XG4gICAgICBjYXNlIHN0YXRlcy5yZWd1bGFyOlxuICAgICAgICB0aGlzLnNldFJlZ3VsYXJTdGF0ZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc3RhdGVzLmVkaXRhYmxlOlxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQXdlc29tZVRleHQuc3RhdGVzLnJlZ3VsYXIpIHtcbiAgICAgICAgICB0aGlzLnNldEVkaXRhYmxlU3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0gbmV3U3RhdGU7XG4gIH1cblxuICBnZXQgdGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgfVxuXG4gIHNldCB0ZXh0KHZhbHVlKSB7XG4gICAgdGhpcy5fdGV4dCA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBzZXRSZWd1bGFyU3RhdGUoKSB7XG5cbiAgICBBd2Vzb21lVGV4dC5jdXJyZW50RWRpdGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gICAgdGhpcy5vZmYoXCJtb3VzZWRvd25cIik7XG4gICAgdGhpcy5vZmYoXCJtb3VzZW1vdmVcIik7XG4gICAgdGhpcy5vZmYoXCJtb3VzZXVwXCIpO1xuICAgIHRoaXMub2ZmKFwibW91c2V1cG91dHNpZGVcIik7XG5cbiAgICB0aGlzLmlucHV0LmVuYWJsZWQgPSBmYWxzZTtcblxuXG4gICAgdGhpcy5vbihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgaWYgKHRoaXMuY2xpY2tzQ291bnQgPT09IDEpIHtcbiAgICAgICAgdGhpcy5jbGlja3NDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLmVkaXRhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY2xpY2tzQ291bnQgPT09IDApIHtcbiAgICAgICAgdGhpcy5jbGlja3NDb3VudCsrO1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jbGlja3NDb3VudCA9IDA7XG4gICAgICAgIH0sIDMwMClcbiAgICAgIH1cbiAgICB9KVxuXG4gIH1cblxuICBzZXRFZGl0YWJsZVN0YXRlKCkge1xuXG4gICAgLy8gRGlzYWJsZSBwcmV2aW91c2x5IGVuYWJsZWQgZmllbGRcbiAgICBpZiAoQXdlc29tZVRleHQuY3VycmVudEVkaXRpbmdFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgIEF3ZXNvbWVUZXh0LmN1cnJlbnRFZGl0aW5nRWxlbWVudC5zZXRTdGF0ZShBd2Vzb21lVGV4dC5zdGF0ZXMucmVndWxhcik7XG4gICAgfVxuICAgIEF3ZXNvbWVUZXh0LmN1cnJlbnRFZGl0aW5nRWxlbWVudCA9IHRoaXM7XG5cbiAgICAvLyBEaXNhYmxlIHVubmVjZXNzYXJ5IGV2ZW50c1xuICAgIHRoaXMub2ZmKFwiY2xpY2tcIik7XG5cbiAgICB0aGlzLmlucHV0LmVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuaW5wdXQuaGlkZSgpO1xuXG4gICAgLy8gU2VsZWN0IGFsbCBjaGFyYWN0ZXJzXG4gICAgdGhpcy5zZWxlY3Quc2V0UmFuZ2UoMCx0aGlzLnRleHQubGVuZ3RoIC0gMSk7XG4gICAgdGhpcy5pbnB1dC5pbnB1dEVsZW1lbnQuZm9jdXMoKTtcblxuICAgIHRoaXMub24oXCJtb3VzZWRvd25cIiwgZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5zZWxlY3RpbmcpO1xuICAgICAgdGhpcy5zZWxlY3Qub25Nb3VzZURvd24oZSk7XG4gICAgICB0aGlzLmlucHV0LnNob3coKTtcbiAgICAgIHRoaXMuaW5wdXQudXBkYXRlKGUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbihcIm1vdXNlbW92ZVwiLCBlID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlID09PSBBd2Vzb21lVGV4dC5zdGF0ZXMuc2VsZWN0aW5nKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0Lm9uTW91c2VNb3ZlKGUpO1xuICAgICAgICB0aGlzLmlucHV0LmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub24oXCJtb3VzZXVwXCIsIGUgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZShBd2Vzb21lVGV4dC5zdGF0ZXMuZWRpdGFibGUpO1xuICAgICAgdGhpcy5zZWxlY3Qub25Nb3VzZVVwKGUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbihcIm1vdXNldXBvdXRzaWRlXCIsIGUgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZShBd2Vzb21lVGV4dC5zdGF0ZXMuZWRpdGFibGUpO1xuICAgICAgdGhpcy5zZWxlY3Qub25Nb3VzZVVwKGUpO1xuICAgIH0pO1xuXG4gIH1cblxuICBpbnNlcnRTdHJpbmcoaW5kZXgsIHN0cmluZykge1xuICAgIHRoaXMudGV4dCA9IHRoaXMudGV4dC5zdWJzdHIoMCwgaW5kZXgpICsgc3RyaW5nICsgdGhpcy50ZXh0LnN1YnN0cihpbmRleCk7XG4gIH1cblxuICByZW1vdmVTdHJpbmcoaW5kZXgsIGxlbmd0aCkge1xuICAgIGxldCBuZXdUZXh0ID0gdGhpcy50ZXh0LnNwbGl0KFwiXCIpO1xuICAgIG5ld1RleHQuc3BsaWNlKGluZGV4LCBsZW5ndGggKyAxKTtcbiAgICB0aGlzLnRleHQgPSBuZXdUZXh0LmpvaW4oXCJcIik7XG4gIH1cblxuICBnZXQgdGV4dHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dHVyZTtcbiAgfVxuXG4gIGdldCBmb250KCkge1xuICAgIHJldHVybiB0aGlzLl9mb250XG4gIH1cblxuICB3cml0ZVN0cmluZyggc3RyaW5nLCBmb250LCBmb250X21ldHJpY3MsIHBvcykge1xuICAgIGxldCBwcmV2X2NoYXIgPSBcIiBcIjsgIC8vIFVzZWQgdG8gY2FsY3VsYXRlIGtlcm5pbmdcbiAgICBsZXQgY3BvcyAgICAgID0gcG9zOyAgLy8gQ3VycmVudCBwZW4gcG9zaXRpb25cbiAgICBsZXQgeF9tYXggICAgID0gMC4wOyAgLy8gTWF4IHdpZHRoIC0gdXNlZCBmb3IgYm91bmRpbmcgYm94XG4gICAgbGV0IHNjYWxlICAgICA9IGZvbnRfbWV0cmljcy5jYXBTY2FsZTtcblxuICAgIGxldCBzdHJfcG9zID0gMDtcblxuICAgIGZvcig7Oykge1xuICAgICAgaWYgKCBzdHJfcG9zID09PSBzdHJpbmcubGVuZ3RoICkgYnJlYWs7XG5cbiAgICAgIHZhciBzY2hhciA9IHN0cmluZ1sgc3RyX3BvcyBdO1xuICAgICAgc3RyX3BvcysrO1xuXG4gICAgICBpZiAoIHNjaGFyID09PSBcIlxcblwiICkge1xuICAgICAgICBpZiAoIGNwb3NbMF0gPiB4X21heCApIHhfbWF4ID0gY3Bvc1swXTsgLy8gRXhwYW5kaW5nIHRoZSBib3VuZGluZyByZWN0XG4gICAgICAgIGNwb3NbMF0gID0gcG9zWzBdO1xuICAgICAgICBjcG9zWzFdIC09IGZvbnRfbWV0cmljcy5saW5lSGVpZ2h0O1xuICAgICAgICBwcmV2X2NoYXIgPSBcIiBcIjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICggc2NoYXIgPT09IFwiIFwiICkge1xuICAgICAgICAvL3NjaGFyID0gXCJfXCJcbiAgICAgICAgLy9jcG9zWzBdICs9IGZvbnQuc3BhY2VfYWR2YW5jZSAqIHNjYWxlO1xuICAgICAgICAvL3ByZXZfY2hhciA9IFwiIFwiO1xuICAgICAgICAvL2NvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgZm9udF9jaGFyID0gZm9udC5jaGFyc1sgc2NoYXIgXTtcbiAgICAgIGlmICggIWZvbnRfY2hhciApIHsgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3Vic3RpdHV0aW5nIHVuYXZhaWxhYmxlIGNoYXJhY3RlcnMgd2l0aCAnPydcbiAgICAgICAgc2NoYXIgPSBcIj9cIjtcbiAgICAgICAgZm9udF9jaGFyID0gZm9udC5jaGFyc1sgXCI/XCIgXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGtlcm4gPSBmb250Lmtlcm5bIHByZXZfY2hhciArIHNjaGFyIF07XG4gICAgICBpZiAoICFrZXJuICkga2VybiA9IDAuMDtcblxuICAgICAgLy8gY2FsY3VsYXRpbmcgdGhlIGdseXBoIHJlY3RhbmdsZSBhbmQgY29weWluZyBpdCB0byB0aGUgdmVydGV4IGFycmF5XG4gICAgICB2YXIgcmVjdCA9IHRoaXMuY2hhclJlY3QoIGNwb3MsIGZvbnQsIGZvbnRfbWV0cmljcywgZm9udF9jaGFyLCBrZXJuICk7XG5cbiAgICAgIHJlY3QucG9zaXRpb25zLm1hcCgocG9zKSA9PiB0aGlzLnZlcnRpY2VzWyB0aGlzLmFycmF5UG9zaXRpb25zLnZlcnRleCsrIF0gPSBwb3MgKTtcbiAgICAgIHJlY3QudXZzLm1hcCgodXYpID0+IHRoaXMudXZzWyB0aGlzLmFycmF5UG9zaXRpb25zLnV2cysrIF0gPSB1diApO1xuICAgICAgcmVjdC5zZGZTaXplcy5tYXAoKHNkZikgPT4gdGhpcy5zZGZTaXplc1sgdGhpcy5hcnJheVBvc2l0aW9ucy5zZGYrKyBdID0gc2RmICk7XG5cbiAgICAgIHByZXZfY2hhciA9IHNjaGFyO1xuICAgICAgY3BvcyA9IHJlY3QucG9zO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByZWN0IDogWyBwb3NbMF0sIHBvc1sxXSwgeF9tYXggLSBwb3NbMF0sIHBvc1sxXSAtIGNwb3NbMV0gKyBmb250X21ldHJpY3MubGluZUhlaWdodCBdLFxuICAgICAgc3RyaW5nX3BvcyA6IHN0cl9wb3MsXG4gICAgICAvL2FycmF5X3BvcyA6IGFycmF5X3Bvc1xuICAgIH1cblxuICB9XG5cbiAgZm9udE1ldHJpY3MoZm9udFNpemUsIG1vcmVMaW5lR2FwID0gMC4yKSB7XG5cbiAgICBjb25zdCB7Y2FwX2hlaWdodCwgeF9oZWlnaHQsIGFzY2VudDogZm9udEFzY2VudCAsIGRlc2NlbnQsIGxpbmVfZ2FwfSA9IHRoaXMuZm9udDtcblxuICAgIGNvbnN0IGNhcFNjYWxlID0gdGhpcy5zdHlsZS5mb250U2l6ZSAvIGNhcF9oZWlnaHQ7XG4gICAgY29uc3QgbG93U2NhbGUgPSBNYXRoLnJvdW5kKCB4X2hlaWdodCAqIGNhcFNjYWxlICkgLyB4X2hlaWdodDtcbiAgICBjb25zdCBhc2NlbnQgPSBNYXRoLnJvdW5kKCBmb250QXNjZW50ICogY2FwU2NhbGUgKTtcbiAgICBsZXQgbGluZUhlaWdodCA9IE1hdGgucm91bmQoIGNhcFNjYWxlICogKCBmb250QXNjZW50ICsgZGVzY2VudCArIGxpbmVfZ2FwICkgKyBtb3JlTGluZUdhcCk7XG5cbiAgICBpZiAodGhpcy5zdHlsZS5saW5lSGVpZ2h0ID4gMClcbiAgICAgIGxpbmVIZWlnaHQgPSB0aGlzLnN0eWxlLmxpbmVIZWlnaHQ7XG4gICAgZWxzZVxuICAgICAgdGhpcy5zdHlsZS5saW5lSGVpZ2h0ID0gbGluZUhlaWdodDtcblxuICAgIHJldHVybiB7XG4gICAgICBjYXBTY2FsZSAgIDogY2FwU2NhbGUsXG4gICAgICBsb3dTY2FsZSAgIDogbG93U2NhbGUsXG4gICAgICBhc2NlbnQgICAgICA6IGFzY2VudCxcbiAgICAgIGxpbmVIZWlnaHQgOiBsaW5lSGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIGNoYXJSZWN0KCBwb3MsIGZvbnQsIGZvbnRfbWV0cmljcywgZm9udF9jaGFyLCBrZXJuID0gMC4wICkge1xuXG4gICAgLy8gTG93IGNhc2UgY2hhcmFjdGVycyBoYXZlIGZpcnN0IGJpdCBzZXQgaW4gJ2ZsYWdzJ1xuICAgIHZhciBsb3djYXNlID0gKCBmb250X2NoYXIuZmxhZ3MgJiAxICkgPT09IDE7XG5cbiAgICAvLyBQZW4gcG9zaXRpb24gaXMgYXQgdGhlIHRvcCBvZiB0aGUgbGluZSwgWSBnb2VzIHVwXG4gICAgdmFyIGJhc2VsaW5lID0gcG9zWzFdIC0gZm9udF9tZXRyaWNzLmFzY2VudDtcblxuICAgIC8vIExvdyBjYXNlIGNoYXJzIHVzZSB0aGVpciBvd24gc2NhbGVcbiAgICB2YXIgc2NhbGUgPSBsb3djYXNlID8gZm9udF9tZXRyaWNzLmxvd1NjYWxlIDogZm9udF9tZXRyaWNzLmNhcFNjYWxlO1xuXG4gICAgLy8gTGF5aW5nIG91dCB0aGUgZ2x5cGggcmVjdGFuZ2xlXG4gICAgdmFyIGcgICAgICA9IGZvbnRfY2hhci5yZWN0O1xuICAgIHZhciBib3R0b20gPSBiYXNlbGluZSAtIHNjYWxlICogKCBmb250LmRlc2NlbnQgKyBmb250Lml5ICk7XG4gICAgdmFyIHRvcCAgICA9IGJvdHRvbSAgICsgc2NhbGUgKiAoIGZvbnQucm93X2hlaWdodCApO1xuICAgIHZhciBsZWZ0ICAgPSBwb3NbMF0gICArIHNjYWxlICogKCBmb250X2NoYXIuYmVhcmluZ194ICsga2VybiAtIGZvbnQuaXggKTtcbiAgICB2YXIgcmlnaHQgID0gbGVmdCAgICAgKyBzY2FsZSAqICggZ1syXSAtIGdbMF0gKTtcbiAgICB2YXIgcCA9IFsgbGVmdCwgdG9wLCByaWdodCwgYm90dG9tIF07XG5cbiAgICAvLyBBZHZhbmNpbmcgcGVuIHBvc2l0aW9uXG4gICAgdmFyIG5ld19wb3NfeCA9IHBvc1swXSArIHNjYWxlICogKCBmb250X2NoYXIuYWR2YW5jZV94ICk7XG5cbiAgICAvLyBTaWduZWQgZGlzdGFuY2UgZmllbGQgc2l6ZSBpbiBzY3JlZW4gcGl4ZWxzXG4gICAgdmFyIHNkZl9zaXplICA9IDIuMCAqIGZvbnQuaXkgKiBzY2FsZTtcblxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgICAgIHBbMF0sIHBbM10sIC8vIGxlZnQgYm90dG9tLFxuICAgICAgcFsyXSwgcFszXSwgLy8gcmlnaHQgYm90dG9tLFxuICAgICAgcFsyXSwgcFsxXSwgLy8gcmlnaHQgdG9wXG4gICAgICBwWzBdLCBwWzFdLCAvLyBsZWZ0IHRvcFxuICAgIF07XG5cbiAgICBjb25zdCB1dnMgPSBbXG4gICAgICBnWzBdLCBnWzFdLCAvLyBsZWZ0IHRvcFxuICAgICAgZ1syXSwgZ1sxXSwgLy8gcmlnaHQgdG9wXG4gICAgICBnWzJdLCBnWzNdLCAvLyByaWdodCBib3R0b20sXG4gICAgICBnWzBdLCBnWzNdLCAvLyBsZWZ0IGJvdHRvbSxcbiAgICBdO1xuXG4gICAgY29uc3Qgc2RmU2l6ZXMgPSBbXG4gICAgICBzZGZfc2l6ZSxcbiAgICAgIHNkZl9zaXplLFxuICAgICAgc2RmX3NpemUsXG4gICAgICBzZGZfc2l6ZSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9ucyxcbiAgICAgIHV2cyxcbiAgICAgIHNkZlNpemVzLFxuICAgICAgcG9zOiBbIG5ld19wb3NfeCwgcG9zWzFdIF1cbiAgICB9O1xuXG4gICAgLy9yZXR1cm4geyB2ZXJ0aWNlcyA6IHZlcnRpY2VzLCBwb3MgOiBbIG5ld19wb3NfeCwgcG9zWzFdIF0gfTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEF3ZXNvbWVUZXh0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RleHQuanMiLCJcbmNsYXNzIFRleHRMYXlvdXQge1xuXG4gIHRleHQgPSBcIlwiO1xuICBmb250ID0gbnVsbDtcbiAgbWV0cmljcyA9IG51bGw7XG4gIGZvbnRTaXplID0gMjA7XG4gIGFsaWduID0gXCJsZWZ0XCI7XG4gIHN0YXJ0WCA9IDA7XG4gIHN0YXJ0WSA9IDA7XG4gIHdyYXBwZXJXaWR0aCA9IDEwMDtcbiAgd3JhcFdvcmRzID0gZmFsc2U7XG4gIHdvcmRzTWV0cmljcyA9IFtdO1xuICBsZXR0ZXJzQ291bnQgPSAwO1xuICBoZWlnaHQgPSAwO1xuICBsaW5lc0NvdW50ID0gMDtcbiAgbGluZUhlaWdodCA9IDA7XG4gIGdseXBocyA9IFtdO1xuICBvd25lciA9IG51bGw7XG5cblxuICBjb25zdHJ1Y3Rvcihvd25lciwgY29uZmlnKSB7XG5cbiAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgdGhpcy50ZXh0ID0gb3duZXIudGV4dDtcbiAgICB0aGlzLmZvbnQgPSBvd25lci5mb250O1xuICAgIHRoaXMuZm9udFNpemUgPSBjb25maWcuZm9udFNpemU7XG4gICAgdGhpcy53cmFwV29yZHMgPSBjb25maWcud3JhcFdvcmRzO1xuICAgIHRoaXMud3JhcHBlcldpZHRoID0gY29uZmlnLndyYXBwZXJXaWR0aDtcbiAgICB0aGlzLmxpbmVIZWlnaHQgPSBjb25maWcubGluZUhlaWdodDtcbiAgICB0aGlzLmFsaWduID0gY29uZmlnLmFsaWduO1xuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnRleHQgPSB0aGlzLm93bmVyLnRleHQ7XG4gICAgdGhpcy5mb250ID0gdGhpcy5vd25lci5mb250O1xuXG4gICAgdGhpcy5sZXR0ZXJzQ291bnQgPSB0aGlzLnRleHQuc3BsaXQoXCJcIikubGVuZ3RoO1xuICAgIHRoaXMubWV0cmljcyA9IHRoaXMuZm9udE1ldHJpY3ModGhpcy5mb250LCAwLjApO1xuICAgIHRoaXMuc3RhcnRZID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XG4gICAgdGhpcy5jYWxjdWxhdGVXb3Jkc1Bvc2l0aW9ucygpO1xuXG4gICAgdGhpcy5nbHlwaHMgPSBbXTtcblxuICAgIHRoaXMud29yZHNNZXRyaWNzLmZvckVhY2ggKHdvcmQgPT4ge1xuICAgICAgdGhpcy5nZXRHbHlwaHMod29yZC53b3JkLCBbd29yZC54LCB3b3JkLnldKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvbnRNZXRyaWNzKGZvbnRTaXplLCBtb3JlTGluZUdhcCA9IDAuMikge1xuXG4gICAgY29uc3Qge2NhcF9oZWlnaHQsIHhfaGVpZ2h0LCBhc2NlbnQ6IGZvbnRBc2NlbnQgLCBkZXNjZW50LCBsaW5lX2dhcH0gPSB0aGlzLmZvbnQ7XG5cbiAgICBjb25zdCBjYXBTY2FsZSA9IHRoaXMuZm9udFNpemUgLyBjYXBfaGVpZ2h0O1xuICAgIGNvbnN0IGxvd1NjYWxlID0gTWF0aC5yb3VuZCggeF9oZWlnaHQgKiBjYXBTY2FsZSApIC8geF9oZWlnaHQ7XG4gICAgY29uc3QgYXNjZW50ID0gTWF0aC5yb3VuZCggZm9udEFzY2VudCAqIGNhcFNjYWxlICk7XG4gICAgbGV0IGxpbmVIZWlnaHQgPSBNYXRoLnJvdW5kKCBjYXBTY2FsZSAqICggZm9udEFzY2VudCArIGRlc2NlbnQgKyBsaW5lX2dhcCApICsgbW9yZUxpbmVHYXAgKTtcblxuICAgIGlmICh0aGlzLmxpbmVIZWlnaHQgPiAwKVxuICAgICAgbGluZUhlaWdodCA9IHRoaXMubGluZUhlaWdodDtcbiAgICBlbHNlXG4gICAgICB0aGlzLmxpbmVIZWlnaHQgPSBsaW5lSGVpZ2h0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcFNjYWxlICAgOiBjYXBTY2FsZSxcbiAgICAgIGxvd1NjYWxlICAgOiBsb3dTY2FsZSxcbiAgICAgIGFzY2VudCAgICAgIDogYXNjZW50LFxuICAgICAgbGluZUhlaWdodCA6IGxpbmVIZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgY2hhclJlY3QoIHBvcywgZm9udF9jaGFyLCBrZXJuID0gMC4wICkge1xuXG4gICAgLy8gTG93IGNhc2UgY2hhcmFjdGVycyBoYXZlIGZpcnN0IGJpdCBzZXQgaW4gJ2ZsYWdzJ1xuICAgIHZhciBsb3djYXNlID0gKCBmb250X2NoYXIuZmxhZ3MgJiAxICkgPT09IDE7XG5cbiAgICAvLyBQZW4gcG9zaXRpb24gaXMgYXQgdGhlIHRvcCBvZiB0aGUgbGluZSwgWSBnb2VzIHVwXG4gICAgdmFyIGJhc2VsaW5lID0gcG9zWzFdIC0gdGhpcy5tZXRyaWNzLmFzY2VudDtcblxuICAgIC8vIExvdyBjYXNlIGNoYXJzIHVzZSB0aGVpciBvd24gc2NhbGVcbiAgICB2YXIgc2NhbGUgPSBsb3djYXNlID8gdGhpcy5tZXRyaWNzLmxvd1NjYWxlIDogdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xuXG4gICAgLy8gTGF5aW5nIG91dCB0aGUgZ2x5cGggcmVjdGFuZ2xlXG4gICAgdmFyIGcgICAgICA9IGZvbnRfY2hhci5yZWN0O1xuICAgIHZhciBib3R0b20gPSBiYXNlbGluZSAtIHNjYWxlICogKCB0aGlzLmZvbnQuZGVzY2VudCArIHRoaXMuZm9udC5peSApO1xuICAgIHZhciB0b3AgICAgPSBib3R0b20gICArIHNjYWxlICogKCB0aGlzLmZvbnQucm93X2hlaWdodCApO1xuICAgIHZhciBsZWZ0ICAgPSBwb3NbMF0gICArIHNjYWxlICogKCBmb250X2NoYXIuYmVhcmluZ194ICsga2VybiAtIHRoaXMuZm9udC5peCApO1xuICAgIHZhciByaWdodCAgPSBsZWZ0ICAgICArIHNjYWxlICogKCBnWzJdIC0gZ1swXSApO1xuICAgIHZhciBwID0gWyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20gXTtcblxuICAgIC8vIEFkdmFuY2luZyBwZW4gcG9zaXRpb25cbiAgICB2YXIgbmV3X3Bvc194ID0gcG9zWzBdICsgc2NhbGUgKiAoIGZvbnRfY2hhci5hZHZhbmNlX3ggKTtcblxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgICAgIHBbMF0sIHBbM10sIC8vIGxlZnQgYm90dG9tLFxuICAgICAgcFsyXSwgcFszXSwgLy8gcmlnaHQgYm90dG9tLFxuICAgICAgcFsyXSwgcFsxXSwgLy8gcmlnaHQgdG9wXG4gICAgICBwWzBdLCBwWzFdLCAvLyBsZWZ0IHRvcFxuICAgIF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb25zLFxuICAgICAgcG9zOiBbIG5ld19wb3NfeCwgcG9zWzFdIF0sXG4gICAgICBtZXRyaWNzOiB7eDogcG9zWzBdLCB5OiBwb3NbMV0sIHdpZHRoOiBzY2FsZSAqIGZvbnRfY2hhci5hZHZhbmNlX3ggfVxuICAgIH07XG4gIH1cblxuICBnZXRTdHJpbmdTaXplKHN0cmluZykge1xuXG4gICAgbGV0IHdpZHRoID0gMDtcbiAgICBsZXQgaGVpZ2h0ID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XG5cbiAgICBjb25zdCBjaGFycyA9IFsuLi5zdHJpbmddO1xuXG4gICAgLy8gSXRlcmF0ZSB0aG91Z2h0IHRoZSBjaGFycywgY2FsY3VsYXRlIHBvc2l0aW9uXG4gICAgY2hhcnMuZm9yRWFjaChjaGFyID0+IHtcbiAgICAgIGxldCBmb250X2NoYXIgPSB0aGlzLmZvbnQuY2hhcnNbIGNoYXIgXTtcblxuICAgICAgLyppZiAoY2hhciA9PT0gXCIgXCIpIHtcbiAgICAgICAgd2lkdGggKz0gdGhpcy5mb250LnNwYWNlX2FkdmFuY2UgKiB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0qL1xuXG4gICAgICAvLyBHZXQgY2hhciBtZXRyaWNzXG4gICAgICBsZXQgY2hhclJlY3QgPSB0aGlzLmNoYXJSZWN0KFt3aWR0aCwwXSwgZm9udF9jaGFyLCAwLjIpO1xuICAgICAgd2lkdGggPSBjaGFyUmVjdC5wb3NbMF07XG5cbiAgICB9KTtcblxuICAgIHJldHVybiB7d2lkdGgsIGhlaWdodH07XG5cbiAgfVxuXG4gIGNhbGN1bGF0ZVdvcmRzUG9zaXRpb25zKCkge1xuXG4gICAgY29uc3Qgd29yZHMgPSB0aGlzLnRleHQuc3BsaXQoXCIgXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIHdvcmRzW2ldID0gd29yZHNbaV0gKyBcIiBcIjtcbiAgICB9XG5cbiAgICB0aGlzLndvcmRzTWV0cmljcyA9IFtdO1xuXG4gICAgLy8gSW5pdGlhbCBwb3NpdGlvblxuICAgIGxldCB4ID0gdGhpcy5zdGFydFg7XG4gICAgbGV0IHkgPSB0aGlzLnN0YXJ0WTtcblxuICAgIC8vIENhbGN1bGF0ZSB3b3JkcyBwb3NpdGlvbnMgb24gbGluZXNcbiAgICB3b3Jkcy5mb3JFYWNoKHdvcmQgPT4ge1xuICAgICAgY29uc3Qgd29yZFNpemUgPSB0aGlzLmdldFN0cmluZ1NpemUod29yZCk7XG4gICAgICBpZiAoeCArIHdvcmRTaXplLndpZHRoID4gdGhpcy5zdGFydFggKyB0aGlzLndyYXBwZXJXaWR0aCAmJiB0aGlzLndyYXBXb3Jkcykge1xuICAgICAgICB4ID0gdGhpcy5zdGFydFg7XG4gICAgICAgIHkgKz0gd29yZFNpemUuaGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICB0aGlzLndvcmRzTWV0cmljcy5wdXNoKHsuLi53b3JkU2l6ZSwgeCwgeSwgd29yZH0pO1xuXG4gICAgICAvL3ggKz0gd29yZFNpemUud2lkdGggKyB0aGlzLmZvbnQuc3BhY2VfYWR2YW5jZSAqIHRoaXMubWV0cmljcy5jYXBTY2FsZTtcbiAgICAgIHggKz0gd29yZFNpemUud2lkdGg7XG4gICAgfSk7XG5cbiAgICAvLyBDYWxjdWxhdGUgbGluZXMgY291bnRcbiAgICB0aGlzLmxpbmVzQ291bnQgPSAoeSAtIHRoaXMuc3RhcnRZKSAvIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgMTtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMubGluZXNDb3VudCAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xuXG4gICAgLy8gQ2hhbmdlIGFsaWduIFRPRE8gb3B0aW1pc2VcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGluZXNDb3VudDsgKytpKSB7XG4gICAgICBjb25zdCB3b3Jkc09uTGluZSA9IHRoaXMud29yZHNNZXRyaWNzLmZpbHRlcih3b3JkID0+IHdvcmQueSA9PT0gdGhpcy5zdGFydFkgKyAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSlcblxuICAgICAgY29uc3QgbGFzdFdvcmQgPSB3b3Jkc09uTGluZVt3b3Jkc09uTGluZS5sZW5ndGggLSAxXTtcblxuICAgICAgaWYgKGxhc3RXb3JkKSB7XG4gICAgICAgIGNvbnN0IGZyZWVTcGFjZSA9ICh0aGlzLnN0YXJ0WCArIHRoaXMud3JhcHBlcldpZHRoKSAtIChsYXN0V29yZC54ICsgbGFzdFdvcmQud2lkdGgpO1xuXG4gICAgICAgIGxldCBsZWZ0T2Zmc2V0ID0gMDtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMuYWxpZ24pIHtcbiAgICAgICAgICBjYXNlIFwiY2VudGVyXCI6XG4gICAgICAgICAgICBsZWZ0T2Zmc2V0ID0gZnJlZVNwYWNlIC8gMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgbGVmdE9mZnNldCA9IGZyZWVTcGFjZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud29yZHNNZXRyaWNzLmZvckVhY2god29yZCA9PiB7XG4gICAgICAgICAgaWYgKHdvcmQueSA9PT0gdGhpcy5zdGFydFkgKyAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSkge1xuICAgICAgICAgICAgd29yZC54ICs9IGxlZnRPZmZzZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEdseXBocyggc3RyaW5nLCBwb3MpIHtcbiAgICBsZXQgcHJldl9jaGFyID0gXCIgXCI7ICAvLyBVc2VkIHRvIGNhbGN1bGF0ZSBrZXJuaW5nXG4gICAgbGV0IGNwb3MgICAgICA9IHBvczsgIC8vIEN1cnJlbnQgcGVuIHBvc2l0aW9uXG4gICAgbGV0IHhfbWF4ICAgICA9IDAuMDsgIC8vIE1heCB3aWR0aCAtIHVzZWQgZm9yIGJvdW5kaW5nIGJveFxuICAgIGxldCBzY2FsZSAgICAgPSB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XG5cbiAgICBsZXQgc3RyX3BvcyA9IDA7XG5cbiAgICBmb3IoOzspIHtcbiAgICAgIGlmICggc3RyX3BvcyA9PT0gc3RyaW5nLmxlbmd0aCApIGJyZWFrO1xuXG4gICAgICB2YXIgc2NoYXIgPSBzdHJpbmdbIHN0cl9wb3MgXTtcbiAgICAgIHN0cl9wb3MrKztcblxuICAgICAgaWYgKCBzY2hhciA9PT0gXCJcXG5cIiApIHtcbiAgICAgICAgaWYgKCBjcG9zWzBdID4geF9tYXggKSB4X21heCA9IGNwb3NbMF07IC8vIEV4cGFuZGluZyB0aGUgYm91bmRpbmcgcmVjdFxuICAgICAgICBjcG9zWzBdICA9IHBvc1swXTtcbiAgICAgICAgY3Bvc1sxXSAtPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcbiAgICAgICAgcHJldl9jaGFyID0gXCIgXCI7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIHNjaGFyID09PSBcIiBcIiApIHtcbiAgICAgICAgLy9zY2hhciA9IFwiX1wiXG4gICAgICAgIC8vY3Bvc1swXSArPSB0aGlzLmZvbnQuc3BhY2VfYWR2YW5jZSAqIHNjYWxlO1xuICAgICAgICBwcmV2X2NoYXIgPSBcIiBcIjtcbiAgICAgICAgLy9jb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZvbnRfY2hhciA9IHRoaXMuZm9udC5jaGFyc1sgc2NoYXIgXTtcbiAgICAgIGlmICggIWZvbnRfY2hhciApIHsgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3Vic3RpdHV0aW5nIHVuYXZhaWxhYmxlIGNoYXJhY3RlcnMgd2l0aCAnPydcbiAgICAgICAgc2NoYXIgPSBcIj9cIjtcbiAgICAgICAgZm9udF9jaGFyID0gdGhpcy5mb250LmNoYXJzWyBcIj9cIiBdO1xuICAgICAgfVxuXG4gICAgICB2YXIga2VybiA9IHRoaXMuZm9udC5rZXJuWyBwcmV2X2NoYXIgKyBzY2hhciBdO1xuICAgICAgaWYgKCAha2VybiApIGtlcm4gPSAwLjA7XG5cbiAgICAgIC8vIGNhbGN1bGF0aW5nIHRoZSBnbHlwaCByZWN0YW5nbGUgYW5kIGNvcHlpbmcgaXQgdG8gdGhlIHZlcnRleCBhcnJheVxuICAgICAgdmFyIHJlY3QgPSB0aGlzLmNoYXJSZWN0KCBjcG9zLCBmb250X2NoYXIsIGtlcm4gKTtcblxuICAgICAgcHJldl9jaGFyID0gc2NoYXI7XG4gICAgICBjcG9zID0gcmVjdC5wb3M7XG5cbiAgICAgIHRoaXMuZ2x5cGhzLnB1c2goe1xuICAgICAgICBsZXR0ZXI6IHNjaGFyLFxuICAgICAgICB2ZXJ0aWNlczogcmVjdC5wb3NpdGlvbnMsXG4gICAgICAgIHBvc2l0aW9uOiByZWN0LnBvcyxcbiAgICAgICAgbWV0cmljczogcmVjdC5tZXRyaWNzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBUZXh0TGF5b3V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xheW91dC5qcyIsImNvbnN0IGNyZWF0ZUluZGljZXMgPSByZXF1aXJlKFwicXVhZC1pbmRpY2VzXCIpXHJcblxyXG5jbGFzcyBTZWxlY3Qge1xyXG5cclxuICByYW5nZSA9IFswLDBdO1xyXG4gIG1ldHJpY3MgPSBudWxsO1xyXG4gIGxheW91dCA9IG51bGw7XHJcbiAgZGlydHkgPSBmYWxzZTtcclxuICBpbmRleEJ1ZmZlciA9IGZhbHNlO1xyXG4gIG93bmVyID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3Iob3duZXIpIHtcclxuICAgIHRoaXMub3duZXIgPSBvd25lcjtcclxuICAgIHRoaXMubWV0cmljcyA9IG93bmVyLm1ldHJpY3M7XHJcbiAgICB0aGlzLmxheW91dCA9IG93bmVyLmxheW91dDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMub3duZXIubWV0cmljcztcclxuICAgIHRoaXMubGF5b3V0ID0gdGhpcy5vd25lci5sYXlvdXQ7XHJcblxyXG4gICAgLy8gVmVydGljZXMgYXJyYXkgZm9yIGFsbCBzZWxlY3RlZCBsaW5lc1xyXG4gICAgdGhpcy52ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5sYXlvdXQubGluZXNDb3VudCAqIDQgKiAyKTtcclxuXHJcbiAgICBpZiAodGhpcy5yYW5nZVsxXSAhPT0gbnVsbClcclxuICAgIHRoaXMuYnVpbGRWZXJ0aWNlcygpO1xyXG5cclxuICAgIHRoaXMuaW5kaWNlcyA9IGNyZWF0ZUluZGljZXMoe1xyXG4gICAgICBjbG9ja3dpc2U6IHRydWUsXHJcbiAgICAgIHR5cGU6ICd1aW50MTYnLFxyXG4gICAgICBjb3VudDp0aGlzLmxheW91dC5saW5lc0NvdW50XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgIHRoaXMuaW5kZXhCdWZmZXIgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2V0UmFuZ2Uoc3RhcnQgPSBudWxsLCBlbmQgPSBudWxsKSB7XHJcblxyXG4gICAgY29uc3Qge2dseXBoc30gPSB0aGlzLm93bmVyLmxheW91dDtcclxuXHJcbiAgICBpZiAoc3RhcnQgPT09IG51bGwpIHN0YXJ0ID0gdGhpcy5yYW5nZVswXTtcclxuICAgIGlmIChlbmQgPT09IG51bGwpIGVuZCA9IHRoaXMucmFuZ2VbMV07XHJcblxyXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwO1xyXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDA7XHJcblxyXG4gICAgaWYgKHN0YXJ0ID4gZ2x5cGhzLmxlbmd0aCAtMSlzdGFydCA9IGdseXBocy5sZW5ndGggLSAxO1xyXG4gICAgaWYgKGVuZCA+IGdseXBocy5sZW5ndGggLSAxKSBlbmQgPSBnbHlwaHMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICBpZiAoZW5kID09PSBmYWxzZSkgZW5kID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnJhbmdlID0gW3N0YXJ0LCBlbmRdO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkVmVydGljZXMoKSB7XHJcblxyXG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5vd25lci5sYXlvdXQubWV0cmljcztcclxuICAgIC8vIFNlbGVjdCByYW5nZVxyXG4gICAgbGV0IHN0YXJ0ID0gdGhpcy5sYXlvdXQuZ2x5cGhzW01hdGgubWluLmFwcGx5KG51bGwsdGhpcy5yYW5nZSldO1xyXG4gICAgbGV0IGVuZCA9IHRoaXMubGF5b3V0LmdseXBoc1tNYXRoLm1heC5hcHBseShudWxsLHRoaXMucmFuZ2UpXTtcclxuXHJcblxyXG4gICAgLy8gSXRlcmF0ZSB0aG91Z2h0IGFsbCBsaW5lc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxheW91dC5saW5lc0NvdW50OyArK2kpIHtcclxuICAgICAgbGV0IGxldHRlckNvdW50ID0gMDsgLy8gbGV0dGVycyBwYXNzZWRcclxuICAgICAgbGV0IGZpcnN0TGV0dGVyID0gbnVsbDsgLy8gZmlyc3QgbGV0dGVyIG9uIHRoaXMgbGluZVxyXG4gICAgICBsZXQgbGFzdExldHRlciA9IG51bGw7IC8vIGxhc3QgbGV0dGVyIG9uIHRoaXMgbGluZVxyXG5cclxuXHJcbiAgICAgIGlmIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyB0aGlzLm1ldHJpY3MubGluZUhlaWdodCA8IHN0YXJ0LnBvc2l0aW9uWzFdKSBjb250aW51ZTtcclxuICAgICAgaWYgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCArIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ID4gZW5kLnBvc2l0aW9uWzFdKSBjb250aW51ZTtcclxuXHJcbiAgICAgIC8vIFRha2UgZXZlcnkgd29yZCwgaWYgaXQncyBsYXN0IG9yIGZpcnN0IG9uIGxpbmUgLSBjaGFuZ2UgYm91bmRzIGxldHRlcnNcclxuICAgICAgdGhpcy5sYXlvdXQud29yZHNNZXRyaWNzLm1hcCh3b3JkID0+IHtcclxuXHJcbiAgICAgICAgaWYgKHdvcmQueSA9PT0gdGhpcy5sYXlvdXQuc3RhcnRZICsgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCkpIHtcclxuICAgICAgICAgIGlmIChmaXJzdExldHRlciA9PT0gbnVsbCkgZmlyc3RMZXR0ZXIgPSBsZXR0ZXJDb3VudDtcclxuICAgICAgICAgIGxhc3RMZXR0ZXIgPSBsZXR0ZXJDb3VudCArIHdvcmQud29yZC5sZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0dGVyQ291bnQgKz0gd29yZC53b3JkLmxlbmd0aDtcclxuICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgIC8vIEJvdW5kcyBsZXR0ZXJzIGZvciBjdXJyZW50IGxpbmVcclxuICAgICAgbGV0IHN0YXJ0TGluZUxldHRlciA9IHRoaXMubGF5b3V0LmdseXBoc1tmaXJzdExldHRlcl07XHJcbiAgICAgIGxldCBlbmRMaW5lTGV0dGVyID0gdGhpcy5sYXlvdXQuZ2x5cGhzW2xhc3RMZXR0ZXJdO1xyXG5cclxuICAgICAgLy8gSWYgdGhlIHN0YXJ0IG9yIGVuZCByYW5nZSBpcyBvbiB0aGlzIGxpbmUsIGNoYW5nZSBib3VuZHMgZm9yIHRoZW1cclxuICAgICAgaWYgKHN0YXJ0LnBvc2l0aW9uWzFdID09PSAgc3RhcnRMaW5lTGV0dGVyLnBvc2l0aW9uWzFdKSBzdGFydExpbmVMZXR0ZXIgPSBzdGFydDtcclxuICAgICAgaWYgKGVuZC5wb3NpdGlvblsxXSA9PT0gZW5kTGluZUxldHRlci5wb3NpdGlvblsxXSkgZW5kTGluZUxldHRlciA9IGVuZDtcclxuXHJcbiAgICAgIC8vIFdlIHVzZSBvZmZzZXQgdG8gYXZvaWQgc2VsZWN0cyBvdmVybGFwcGluZ1xyXG4gICAgICBjb25zdCBvZmZzZXQgPSAodGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgLSB0aGlzLm1ldHJpY3MuYXNjZW50KSAvIDI7XHJcblxyXG4gICAgICAvLyBBZGQgcG9zaXRpb25zIHRvIGFycmF5XHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KV0gPSBzdGFydExpbmVMZXR0ZXIudmVydGljZXNbMF07XHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDFdID0gc3RhcnRMaW5lTGV0dGVyLnZlcnRpY2VzWzFdICsgb2Zmc2V0O1xyXG5cclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgMl0gPSBlbmRMaW5lTGV0dGVyLnZlcnRpY2VzWzJdO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyAzXSA9IGVuZExpbmVMZXR0ZXIudmVydGljZXNbM10gICArIG9mZnNldDtcclxuXHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDRdID0gZW5kTGluZUxldHRlci52ZXJ0aWNlc1s0XTtcclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgNV0gPSBlbmRMaW5lTGV0dGVyLnZlcnRpY2VzWzVdICAtIG9mZnNldDtcclxuXHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDZdID0gc3RhcnRMaW5lTGV0dGVyLnZlcnRpY2VzWzZdO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyA3XSA9IHN0YXJ0TGluZUxldHRlci52ZXJ0aWNlc1s3XSAgLSBvZmZzZXQ7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGdldENsb3Nlc3RHbHlwaCh4LCB5KSB7XHJcblxyXG4gICAgY29uc3QgeyBnbHlwaHMgfSA9IHRoaXMub3duZXIubGF5b3V0O1xyXG5cclxuICAgIGNvbnN0IGxpbmVIZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcclxuICAgIGNvbnN0IHNlbGVjdGluZ0xpbmUgPSBNYXRoLmZsb29yKHkgLyB0aGlzLm1ldHJpY3MubGluZUhlaWdodCk7XHJcbiAgICBjb25zdCBzZWxlY3RpbmdMaW5lWSA9IHNlbGVjdGluZ0xpbmUgKiBsaW5lSGVpZ2h0O1xyXG4gICAgbGV0IGxhc3RHbHlwaE9uTGluZSA9IGdseXBoc1tnbHlwaHMubGVuZ3RoIC0gMV07XHJcbiAgICBsZXQgZmlyc3RHbHlwaE9uTGluZSA9IG51bGw7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnbHlwaHMubGVuZ3RoIDsgKytpKSB7XHJcblxyXG4gICAgICBsZXQgZ2x5cGggPSBnbHlwaHNbaV07XHJcblxyXG4gICAgICBpZiAoZ2x5cGgubWV0cmljcy55ID09PSBzZWxlY3RpbmdMaW5lWSArIGxpbmVIZWlnaHQpIHtcclxuXHJcbiAgICAgICAgbGFzdEdseXBoT25MaW5lID0gZ2x5cGg7XHJcblxyXG4gICAgICAgIGlmICh4IDwgZ2x5cGgubWV0cmljcy54ICsgZ2x5cGgubWV0cmljcy53aWR0aCAvIDIpIHtcclxuXHJcbiAgICAgICAgICBpZiAoaSA9PT0gMCkgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgcmV0dXJuIGdseXBoc1tpIC0gMV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxhc3RHbHlwaE9uTGluZTtcclxuXHJcbiAgfVxyXG5cclxuICBvbk1vdXNlRG93bihldmVudCkge1xyXG5cclxuICAgIC8vIE9ubHkgbGVmdCBtb3VzZSBidXR0b25cclxuICAgIGlmIChldmVudC5kYXRhLmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBwb3NpdGlvbiA9IGV2ZW50LmRhdGEuZ2xvYmFsO1xyXG5cclxuICAgIHBvc2l0aW9uLnggLT0gdGhpcy5vd25lci5wb3NpdGlvbi54O1xyXG4gICAgcG9zaXRpb24ueSAtPSB0aGlzLm93bmVyLnBvc2l0aW9uLnk7XHJcblxyXG4gICAgcG9zaXRpb24ueCA9IHBvc2l0aW9uLnggLyAgdGhpcy5vd25lci5zY2FsZS54O1xyXG4gICAgcG9zaXRpb24ueSA9IHBvc2l0aW9uLnkgLyB0aGlzLm93bmVyLnNjYWxlLnk7XHJcblxyXG4gICAgY29uc3QgY2xvc2VzdExldHRlciA9IHRoaXMuZ2V0Q2xvc2VzdEdseXBoKHBvc2l0aW9uLnggLCBwb3NpdGlvbi55KTtcclxuICAgIGxldCBpbmRleCA9IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5pbmRleE9mKGNsb3Nlc3RMZXR0ZXIpO1xyXG5cclxuICAgIHRoaXMuc2V0UmFuZ2UoaW5kZXggKyAxLCBmYWxzZSApO1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcclxuXHJcbiAgICBsZXQgcG9zaXRpb24gPSBldmVudC5kYXRhLmdsb2JhbDtcclxuXHJcbiAgICBwb3NpdGlvbi54IC09IHRoaXMub3duZXIucG9zaXRpb24ueDtcclxuICAgIHBvc2l0aW9uLnkgLT0gdGhpcy5vd25lci5wb3NpdGlvbi55O1xyXG5cclxuICAgIHBvc2l0aW9uLnggPSBwb3NpdGlvbi54IC8gdGhpcy5vd25lci5zY2FsZS54O1xyXG4gICAgcG9zaXRpb24ueSA9IHBvc2l0aW9uLnkgLyB0aGlzLm93bmVyLnNjYWxlLnk7XHJcblxyXG4gICAgY29uc3QgY2xvc2VzdExldHRlciA9IHRoaXMuZ2V0Q2xvc2VzdEdseXBoKHBvc2l0aW9uLnggICwgcG9zaXRpb24ueSk7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLm93bmVyLmxheW91dC5nbHlwaHMuaW5kZXhPZihjbG9zZXN0TGV0dGVyKTtcclxuXHJcbiAgICB0aGlzLnNldFJhbmdlKG51bGwsIGluZGV4ICsgMSk7XHJcbiAgfVxyXG5cclxuICBvbk1vdXNlVXAoZXZlbnQpIHtcclxuXHJcbiAgICAvLyBPbmx5IGxlZnQgbW91c2UgYnV0dG9uXHJcbiAgICBpZiAoZXZlbnQuZGF0YS5idXR0b24gIT09IDApIHJldHVybjtcclxuXHJcbiAgICBsZXQgcG9zaXRpb24gPSBldmVudC5kYXRhLmdsb2JhbDtcclxuXHJcbiAgICBwb3NpdGlvbi54IC09IHRoaXMub3duZXIucG9zaXRpb24ueDtcclxuICAgIHBvc2l0aW9uLnkgLT0gdGhpcy5vd25lci5wb3NpdGlvbi55O1xyXG5cclxuICAgIHBvc2l0aW9uLnggPSBwb3NpdGlvbi54IC8gdGhpcy5vd25lci5zY2FsZS54O1xyXG4gICAgcG9zaXRpb24ueSA9IHBvc2l0aW9uLnkgLyB0aGlzLm93bmVyLnNjYWxlLnk7XHJcblxyXG4gICAgY29uc3QgY2xvc2VzdExldHRlciA9IHRoaXMuZ2V0Q2xvc2VzdEdseXBoKHBvc2l0aW9uLnggLCBwb3NpdGlvbi55KTtcclxuXHJcbiAgICAvLyAtMSBtZWFucyB0aGF0IHdlIGF0IHRoZSBzdGFydCBvZiB0aGUgbGluZVxyXG4gICAgaWYgKGNsb3Nlc3RMZXR0ZXIgPT09IC0xKSB7XHJcbiAgICAgIHRoaXMub3duZXIuaW5wdXQuZ2x5cGhJbmRleCA9IGNsb3Nlc3RMZXR0ZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm93bmVyLmlucHV0LmdseXBoSW5kZXggPSB0aGlzLm93bmVyLmxheW91dC5nbHlwaHMuaW5kZXhPZihjbG9zZXN0TGV0dGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Q7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZWxlY3QuanMiLCJ2YXIgZHR5cGUgPSByZXF1aXJlKCdkdHlwZScpXG52YXIgYW5BcnJheSA9IHJlcXVpcmUoJ2FuLWFycmF5JylcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpXG5cbnZhciBDVyA9IFswLCAyLCAzXVxudmFyIENDVyA9IFsyLCAxLCAzXVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZVF1YWRFbGVtZW50cyhhcnJheSwgb3B0KSB7XG4gICAgLy9pZiB1c2VyIGRpZG4ndCBzcGVjaWZ5IGFuIG91dHB1dCBhcnJheVxuICAgIGlmICghYXJyYXkgfHwgIShhbkFycmF5KGFycmF5KSB8fCBpc0J1ZmZlcihhcnJheSkpKSB7XG4gICAgICAgIG9wdCA9IGFycmF5IHx8IHt9XG4gICAgICAgIGFycmF5ID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0ID09PSAnbnVtYmVyJykgLy9iYWNrd2FyZHMtY29tcGF0aWJsZVxuICAgICAgICBvcHQgPSB7IGNvdW50OiBvcHQgfVxuICAgIGVsc2VcbiAgICAgICAgb3B0ID0gb3B0IHx8IHt9XG5cbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBvcHQudHlwZSA9PT0gJ3N0cmluZycgPyBvcHQudHlwZSA6ICd1aW50MTYnXG4gICAgdmFyIGNvdW50ID0gdHlwZW9mIG9wdC5jb3VudCA9PT0gJ251bWJlcicgPyBvcHQuY291bnQgOiAxXG4gICAgdmFyIHN0YXJ0ID0gKG9wdC5zdGFydCB8fCAwKSBcblxuICAgIHZhciBkaXIgPSBvcHQuY2xvY2t3aXNlICE9PSBmYWxzZSA/IENXIDogQ0NXLFxuICAgICAgICBhID0gZGlyWzBdLCBcbiAgICAgICAgYiA9IGRpclsxXSxcbiAgICAgICAgYyA9IGRpclsyXVxuXG4gICAgdmFyIG51bUluZGljZXMgPSBjb3VudCAqIDZcblxuICAgIHZhciBpbmRpY2VzID0gYXJyYXkgfHwgbmV3IChkdHlwZSh0eXBlKSkobnVtSW5kaWNlcylcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IDA7IGkgPCBudW1JbmRpY2VzOyBpICs9IDYsIGogKz0gNCkge1xuICAgICAgICB2YXIgeCA9IGkgKyBzdGFydFxuICAgICAgICBpbmRpY2VzW3ggKyAwXSA9IGogKyAwXG4gICAgICAgIGluZGljZXNbeCArIDFdID0gaiArIDFcbiAgICAgICAgaW5kaWNlc1t4ICsgMl0gPSBqICsgMlxuICAgICAgICBpbmRpY2VzW3ggKyAzXSA9IGogKyBhXG4gICAgICAgIGluZGljZXNbeCArIDRdID0gaiArIGJcbiAgICAgICAgaW5kaWNlc1t4ICsgNV0gPSBqICsgY1xuICAgIH1cbiAgICByZXR1cm4gaW5kaWNlc1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9xdWFkLWluZGljZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkdHlwZSkge1xuICBzd2l0Y2ggKGR0eXBlKSB7XG4gICAgY2FzZSAnaW50OCc6XG4gICAgICByZXR1cm4gSW50OEFycmF5XG4gICAgY2FzZSAnaW50MTYnOlxuICAgICAgcmV0dXJuIEludDE2QXJyYXlcbiAgICBjYXNlICdpbnQzMic6XG4gICAgICByZXR1cm4gSW50MzJBcnJheVxuICAgIGNhc2UgJ3VpbnQ4JzpcbiAgICAgIHJldHVybiBVaW50OEFycmF5XG4gICAgY2FzZSAndWludDE2JzpcbiAgICAgIHJldHVybiBVaW50MTZBcnJheVxuICAgIGNhc2UgJ3VpbnQzMic6XG4gICAgICByZXR1cm4gVWludDMyQXJyYXlcbiAgICBjYXNlICdmbG9hdDMyJzpcbiAgICAgIHJldHVybiBGbG9hdDMyQXJyYXlcbiAgICBjYXNlICdmbG9hdDY0JzpcbiAgICAgIHJldHVybiBGbG9hdDY0QXJyYXlcbiAgICBjYXNlICdhcnJheSc6XG4gICAgICByZXR1cm4gQXJyYXlcbiAgICBjYXNlICd1aW50OF9jbGFtcGVkJzpcbiAgICAgIHJldHVybiBVaW50OENsYW1wZWRBcnJheVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZHR5cGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHN0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxubW9kdWxlLmV4cG9ydHMgPSBhbkFycmF5XG5cbmZ1bmN0aW9uIGFuQXJyYXkoYXJyKSB7XG4gIHJldHVybiAoXG4gICAgICAgYXJyLkJZVEVTX1BFUl9FTEVNRU5UXG4gICAgJiYgc3RyLmNhbGwoYXJyLmJ1ZmZlcikgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSdcbiAgICB8fCBBcnJheS5pc0FycmF5KGFycilcbiAgKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuLWFycmF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxuLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cblxuLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS5cbmZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzLWJ1ZmZlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcblxuY2xhc3MgSW5wdXQge1xuXG4gIF9lbmFibGVkID0gZmFsc2U7XG4gIG93bmVyID0gbnVsbDtcblxuICBfZ2x5cGhJbmRleCA9IC0xO1xuXG4gIHNldCBnbHlwaEluZGV4KHZhbHVlKSB7XG4gICAgdGhpcy5fZ2x5cGhJbmRleCA9IHZhbHVlO1xuXG4gICAgaWYgKHRoaXMuX2dseXBoSW5kZXggPCAtMSlcbiAgICAgIHRoaXMuX2dseXBoSW5kZXggPSAtMTtcblxuICAgIGlmICh0aGlzLl9nbHlwaEluZGV4ID4gdGhpcy5vd25lci5sYXlvdXQuZ2x5cGhzLmxlbmd0aClcbiAgICAgIHRoaXMuX2dseXBoSW5kZXggPSB0aGlzLm93bmVyLmxheW91dC5nbHlwaHMubGVuZ3RoO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGdldCBnbHlwaEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl9nbHlwaEluZGV4O1xuICB9XG5cbiAgc2V0IGVuYWJsZWQodmFsdWUpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcbiAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVkXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihvd25lcikge1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLm1ldHJpY3MgPSBvd25lci5tZXRyaWNzO1xuICAgIHRoaXMubGF5b3V0ID0gb3duZXIubGF5b3V0O1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF1cblxuICAgIHRoaXMuY3JlYXRlRmllbGQoKTtcbiAgICB0aGlzLmRpc2FibGUoKTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmlucHV0RWxlbWVudCk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLmlucHV0RWxlbWVudCkpXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuaW5wdXRFbGVtZW50KTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgfVxuXG4gIGNyZWF0ZUZpZWxkKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG5cblxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IE9iamVjdC52YWx1ZXModGhpcy5vd25lci50cmFuc2Zvcm0ud29ybGRUcmFuc2Zvcm0pLnNsaWNlKDAsIDYpO1xuXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAvL3RoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsMCwwLDAuMyknO1xuXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuY29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5jb250YWluID0gJ3N0cmljdCc7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuekluZGV4ID0gMjtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmNvbG9yID0gdGhpcy5vd25lci5zdHlsZS5maWxsO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybU9yaWdpbj0gXCJsZWZ0IHRvcFwiO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBtYXRyaXgoJHt0cmFuc2Zvcm0uam9pbihcIiwgXCIpfSlgO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSBcIjBcIjtcblxuICAgIHRoaXMuYWRkRXZlbnQoXCJibHVyXCIsIChldmVudCkgPT4gdGhpcy5pbnB1dEVsZW1lbnQuZm9jdXMoKSk7XG4gICAgdGhpcy5hZGRFdmVudChcImlucHV0XCIsIChldmVudCkgPT4gdGhpcy5vbklucHV0KGV2ZW50KSk7XG4gICAgdGhpcy5hZGRFdmVudChcImtleWRvd25cIiwgKGV2ZW50KSA9PiB0aGlzLm9uS2V5ZG93bihldmVudCkpXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLm93bmVyLm1ldHJpY3M7XG4gICAgdGhpcy5sYXlvdXQgPSB0aGlzLm93bmVyLmxheW91dDtcblxuICAgIGNvbnN0IHtnbHlwaHN9ID0gdGhpcy5vd25lci5sYXlvdXQ7XG5cbiAgICBpZiAodGhpcy5nbHlwaEluZGV4ID49IGdseXBocy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZ2x5cGhJbmRleCA9IGdseXBocy5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgY2FyZXQgcGxhY2UgLSBzdGFydCBvZiB0aGUgaW5wdXQgZmllbGQgVE9ETyBpbXBsZW1lbnQgYWxpZ25cbiAgICBsZXQgZ2x5cGhNZXRyaWNzID0ge1xuICAgICAgeDogdGhpcy5vd25lci5wb3NpdGlvbi54LFxuICAgICAgeTogdGhpcy5vd25lci5wb3NpdGlvbi55XG4gICAgfTtcblxuICAgIC8vIGlmIHN0cmluZyBpcyBlbXB0eSwgcHV0IGNhcmV0IGF0IHRoZSBiZWdpbm5pbmdcbiAgICBpZiAodGhpcy5vd25lci5sYXlvdXQuZ2x5cGhzLmxlbmd0aCA9PT0gLTEpIHtcblxuICAgICAgLy8gaWYgd2Ugb24gdGhlIGxhc3QgZ2x5cGgsIHBsYWNlIGNhcmV0IGFmdGVyIGl0XG4gICAgfWVsc2UgaWYgKHRoaXMuZ2x5cGhJbmRleCA9PT0gZ2x5cGhzLmxlbmd0aCkge1xuXG4gICAgICBjb25zdCBsYXN0R2x5cGggPSBnbHlwaHNbZ2x5cGhzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBnbHlwaE1ldHJpY3MueCArPSBsYXN0R2x5cGgubWV0cmljcy54ICsgbGFzdEdseXBoLm1ldHJpY3Mud2lkdGg7XG4gICAgICBnbHlwaE1ldHJpY3MueSArPSBsYXN0R2x5cGgubWV0cmljcy55O1xuXG4gICAgICAvLyBpZiBjYXJldCBpbiB0aGUgbWlkZGxlIG9mIHRoZSB0ZXh0XG4gICAgfSBlbHNlIGlmICh0aGlzLmdseXBoSW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZEdseXBoID0gZ2x5cGhzW3RoaXMuZ2x5cGhJbmRleF07XG5cbiAgICAgIGdseXBoTWV0cmljcy54ICs9IHNlbGVjdGVkR2x5cGgubWV0cmljcy54ICsgc2VsZWN0ZWRHbHlwaC5tZXRyaWNzLndpZHRoO1xuICAgICAgZ2x5cGhNZXRyaWNzLnkgKz0gc2VsZWN0ZWRHbHlwaC5tZXRyaWNzLnk7XG4gICAgfSBlbHNlIHtcblxuICAgICAgZ2x5cGhNZXRyaWNzLnkgKz0gdGhpcy5vd25lci5zdHlsZS5saW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IE9iamVjdC52YWx1ZXModGhpcy5vd25lci50cmFuc2Zvcm0ud29ybGRUcmFuc2Zvcm0pLnNsaWNlKDAsIDYpO1xuXG5cbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgbWF0cml4KCR7dHJhbnNmb3JtLmpvaW4oXCIsIFwiKX0pYDtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodCArIFwicHhcIjtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgXCJweFwiO1xuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihnbHlwaE1ldHJpY3MueCAsIGdseXBoTWV0cmljcy55KTtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgb25JbnB1dChldmVudCkge1xuXG4gICAgY29uc3QgeyByYW5nZSB9ID0gdGhpcy5vd25lci5zZWxlY3Q7XG5cbiAgICAvLyBJZiB1c2VyIHNlbGVjdGVkIHNvbWUgdGV4dCwgcmVtb3ZlIGl0XG4gICAgaWYgKHJhbmdlWzBdICE9PSByYW5nZVsxXSAmJiByYW5nZVsxXSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5nbHlwaEluZGV4ID0gTWF0aC5taW4ocmFuZ2VbMF0gLSAxLCByYW5nZVsxXSAtIDEpO1xuICAgICAgY29uc3QgcmVtb3ZlSW5kZXggPSBNYXRoLm1pbi5hcHBseShudWxsLCByYW5nZSk7XG4gICAgICBjb25zdCByZW1vdmVMZW5ndGggPSBNYXRoLmFicyhyYW5nZVswXSAtIHJhbmdlWzFdKTtcbiAgICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKDAsZmFsc2UpO1xuICAgICAgdGhpcy5vd25lci5yZW1vdmVTdHJpbmcocmVtb3ZlSW5kZXgsIHJlbW92ZUxlbmd0aCk7XG4gICAgICB0aGlzLnNob3coKTtcbiAgICB9XG5cbiAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xuXG4gICAgaWYgKGV2ZW50LmRhdGEgPT09IG51bGwpIHJldHVybjtcblxuICAgIC8vIElmIHRleHQgaXMgZW1wdHkgbm93XG4gICAgaWYgKHRoaXMub3duZXIubGF5b3V0LmdseXBocy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMub3duZXIudGV4dCA9IGV2ZW50LmRhdGE7XG4gICAgICB0aGlzLmdseXBoSW5kZXggPSAxO1xuXG4gICAgLy8gSWYgY2FyZXQgaXMgYXQgdGhlIGVuZCBvZiB0aGUgdGV4dFxuICAgIH0gZWxzZSBpZiAodGhpcy5nbHlwaEluZGV4ID09PSB0aGlzLm93bmVyLmxheW91dC5nbHlwaHMubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5vd25lci50ZXh0ICs9IGV2ZW50LmRhdGE7XG4gICAgICB0aGlzLmdseXBoSW5kZXgrKztcblxuICAgIC8vIElmIHdlIGluIHRoZSBtaWRkbGUgb2YgdGhlIGxpbmVcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vd25lci5pbnNlcnRTdHJpbmcoKyt0aGlzLmdseXBoSW5kZXgsIGV2ZW50LmRhdGEpO1xuICAgICAgLy90aGlzLmdseXBoSW5kZXgrKztcbiAgICB9XG4gICAgdGhpcy5vd25lci5zZWxlY3Quc2V0UmFuZ2UoMCwgZmFsc2UpO1xuXG4gIH1cblxuICBvbktleWRvd24oZXZlbnQpIHtcblxuXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgdGhpcy5vd25lci5zZWxlY3Quc2V0UmFuZ2UoMCwgZmFsc2UpO1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgdGhpcy5nbHlwaEluZGV4LS07XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICB0aGlzLm93bmVyLnNlbGVjdC5zZXRSYW5nZSgwLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB0aGlzLmdseXBoSW5kZXgrKztcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIkJhY2tzcGFjZVwiOlxuICAgICAgY2FzZSBcIkRlbGV0ZVwiOlxuICAgICAgICBjb25zdCB7cmFuZ2V9ID0gdGhpcy5vd25lci5zZWxlY3Q7XG4gICAgICAgIGlmIChyYW5nZVsxXSAhPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuZ2x5cGhJbmRleCA9IE1hdGgubWluKHJhbmdlWzBdLCByYW5nZVsxXSk7XG4gICAgICAgICAgY29uc3QgcmVtb3ZlSW5kZXggPSBNYXRoLm1pbi5hcHBseShudWxsLCByYW5nZSk7XG4gICAgICAgICAgY29uc3QgcmVtb3ZlTGVuZ3RoID0gTWF0aC5hYnMocmFuZ2VbMF0gLSByYW5nZVsxXSk7XG4gICAgICAgICAgdGhpcy5vd25lci5zZWxlY3Quc2V0UmFuZ2UoMCxmYWxzZSk7XG4gICAgICAgICAgdGhpcy5vd25lci5yZW1vdmVTdHJpbmcocmVtb3ZlSW5kZXgsIHJlbW92ZUxlbmd0aCk7XG4gICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJCYWNrc3BhY2VcIilcbiAgICAgICAgICAgIHRoaXMub3duZXIucmVtb3ZlU3RyaW5nKHRoaXMuZ2x5cGhJbmRleC0tLCAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBTZWxlY3QgYWxsXG4gICAgICBjYXNlIFwiYVwiOlxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xuICAgICAgICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKDAsdGhpcy5vd25lci50ZXh0Lmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBcIiBcIjtcbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cbiAgfVxuXG4gIHNldFBvc2l0aW9uKHgsIHkpIHtcblxuICAgIGNvbnN0IHthIDogc2NhbGVYLCBkOiBzY2FsZVl9ID0gdGhpcy5vd25lci50cmFuc2Zvcm0ud29ybGRUcmFuc2Zvcm07XG4gICAgY29uc3Qge3ggOiBsb2NhbFgsIHk6IGxvY2FsWSB9ID0gdGhpcy5vd25lci5wb3NpdGlvbjtcblxuICAgIGxldCBsaW5lSGVpZ2h0ID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKiBzY2FsZVk7XG5cbiAgICB5ICo9IHNjYWxlWTtcbiAgICB4ICo9IHNjYWxlWDtcblxuICAgIHkgLT0gbGluZUhlaWdodDtcblxuICAgIHkgLT0gbG9jYWxZICogc2NhbGVZO1xuICAgIHggLT0gbG9jYWxYICogc2NhbGVYO1xuXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3h9cHhgO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRvcCA9IGAke3l9cHhgO1xuXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBcIiBcIjtcbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBPYmplY3QudmFsdWVzKHRoaXMuZ2V0VHJhbnNmb3JtKCkpLnNsaWNlKDAsIDYpO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBtYXRyaXgoJHt0cmFuc2Zvcm0uam9pbihcIiwgXCIpfSlgO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIGNvbnN0IG93bmVyVHJhbnNmb3JtID0gdGhpcy5vd25lci50cmFuc2Zvcm0ud29ybGRUcmFuc2Zvcm07XG4gICAgbGV0IGNhbnZhc1JlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gey4uLm93bmVyVHJhbnNmb3JtLCB0eDogb3duZXJUcmFuc2Zvcm0udHggKyBjYW52YXNSZWN0LngsIHR5OiBvd25lclRyYW5zZm9ybS50eSArIGNhbnZhc1JlY3QueX07XG4gIH1cblxuICBhZGRFdmVudChldmVudCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLl9lbmFibGVkKSB7XG4gICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IElucHV0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2lucHV0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxuYXR0cmlidXRlIHZlYzIgYVZlcnRleFBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWMyIGFUZXh0dXJlQ29vcmQ7XFxuYXR0cmlidXRlIGZsb2F0IGFTZGZTaXplO1xcblxcbnVuaWZvcm0gbWF0MyB0cmFuc2xhdGlvbk1hdHJpeDtcXG51bmlmb3JtIG1hdDMgcHJvamVjdGlvbk1hdHJpeDtcXG51bmlmb3JtIGZsb2F0IHNkZk11bHRpcGxpZXI7XFxuXFxudmFyeWluZyB2ZWMyICB0YzA7XFxudmFyeWluZyBmbG9hdCBkb2Zmc2V0O1xcbnZhcnlpbmcgZmxvYXQgc2RmX3RleGVsO1xcblxcblxcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuXFxuICAgIC8vVE9ETyBNQUtFIEFUVFJJQlVURVxcbiAgICBmbG9hdCBzZGZfc2l6ZSA9IGFTZGZTaXplICogc2RmTXVsdGlwbGllcjtcXG5cXG4gICAgLy9UT0RPIE1BS0UgVU5JRk9STVNcXG4gICAgZmxvYXQgc2RmX3RleF9zaXplID0gMTAyNC4wO1xcblxcblxcbiAgICB0YzAgPSBhVGV4dHVyZUNvb3JkO1xcbiAgICBkb2Zmc2V0ID0gMS4wIC8gc2RmX3NpemU7ICAgICAgIC8vIERpc3RhbmNlIGZpZWxkIGRlbHRhIGZvciBvbmUgc2NyZWVuIHBpeGVsXFxuICAgIHNkZl90ZXhlbCA9IDEuMCAvIHNkZl90ZXhfc2l6ZTtcXG5cXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KChwcm9qZWN0aW9uTWF0cml4ICogdHJhbnNsYXRpb25NYXRyaXggKiB2ZWMzKGFWZXJ0ZXhQb3NpdGlvbiAsIDEuMCkpLnh5LCAwLjAsIDEuMCk7XFxuXFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy90ZXh0L3ZlcnQuZ2xzbFxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxudW5pZm9ybSBzYW1wbGVyMkQgdVNhbXBsZXI7XFxudW5pZm9ybSBmbG9hdCBoaW50X2Ftb3VudDtcXG51bmlmb3JtIGZsb2F0IHN1YnBpeGVsX2Ftb3VudDtcXG5cXG51bmlmb3JtIHZlYzMgYmdfY29sb3I7XFxudW5pZm9ybSB2ZWMzIGZvbnRfY29sb3I7XFxuXFxudmFyeWluZyB2ZWMyICB0YzA7XFxudmFyeWluZyBmbG9hdCBkb2Zmc2V0O1xcbnZhcnlpbmcgZmxvYXQgc2RmX3RleGVsO1xcblxcblxcbi8qXFxuICogIFN1YnBpeGVsIGNvdmVyYWdlIGNhbGN1bGF0aW9uXFxuICpcXG4gKiAgdiAtIGVkZ2Ugc2xvcGUgICAgLTEuMCB0byAxLjAgICAgICAgICAgdHJpcGxldFxcbiAqICBhIC0gcGl4ZWwgY292ZXJhZ2UgMC4wIHRvIDEuMCAgICAgICAgICBjb3ZlcmFnZVxcbiAqXFxuICogICAgICB8PC0gZ2x5cGggZWRnZSAgICAgICAgICAgICAgICAgICAgICBSICBHICBCXFxuICogICstLS0rLS0tKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tKy0tKy0tK1xcbiAqICB8ICAgfFhYWHwgdiA9IDEuMCAoZWRnZSBmYWNpbmcgd2VzdCkgIHwgIHx4eHxYWHxcXG4gKiAgfCAgIHxYWFh8IGEgPSAwLjUgKDUwJSBjb3ZlcmFnZSkgICAgICB8ICB8eHh8WFh8XFxuICogIHwgICB8WFhYfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgfHh4fFhYfFxcbiAqICArLS0tKy0tLSsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLSstLSstLStcXG4gKiAgICBwaXhlbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCAgNTAgMTAwXFxuICpcXG4gKlxcbiAqICAgICAgICBSICAgRyAgIEJcXG4gKlxcbiAqICAgMS4wICAgICAgICArLS0rICAgPC0gdG9wIChhYnMoIHYgKSlcXG4gKiAgICAgICAgICAgICAgfFxcbiAqICAgICAgIC0rLS0tLS0rLS0rLS0gPC0gY2VpbDogMTAwJSBjb3ZlcmFnZVxcbiAqICAgICAgICB8ICAgICB8WFh8XFxuICogICAwLjAgIHwgICstLStYWHxcXG4gKiAgICAgICAgfCAgfHh4fFhYfFxcbiAqICAgICAgIC0rLS0rLS0rLS0rLS0gPC0gZmxvb3I6IDAlIGNvdmVyYWdlXFxuICogICAgICAgICAgIHxcXG4gKiAgLTEuMCAgKy0tKyAgICAgICAgIDwtICAtYWJzKHYpXFxuICogICAgICAgIHxcXG4gKiAgICAgICAgfFxcbiAqICAgICAgICB8XFxuICogIC0yLjAgICsgICAgICAgICAgICA8LSBib3R0b206IC1hYnModiktMS4wXFxuICovXFxuXFxudmVjMyBzdWJwaXhlbCggZmxvYXQgdiwgZmxvYXQgYSApIHtcXG4gICAgZmxvYXQgdnQgICAgICA9IDAuNiAqIHY7IC8vIDEuMCB3aWxsIG1ha2UgeW91ciBleWVzIGJsZWVkXFxuICAgIHZlYzMgIHJnYl9tYXggPSB2ZWMzKCAtdnQsIDAuMCwgdnQgKTtcXG4gICAgZmxvYXQgdG9wICAgICA9IGFicyggdnQgKTtcXG4gICAgZmxvYXQgYm90dG9tICA9IC10b3AgLSAxLjA7XFxuICAgIGZsb2F0IGNmbG9vciAgPSBtaXgoIHRvcCwgYm90dG9tLCBhICk7XFxuICAgIHZlYzMgIHJlcyAgICAgPSBjbGFtcCggcmdiX21heCAtIHZlYzMoIGNmbG9vciApLCAwLjAsIDEuMCApO1xcbiAgICByZXR1cm4gcmVzO1xcbn1cXG5cXG52b2lkIG1haW4yKCkge1xcbiAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodVNhbXBsZXIsIHRjMCk7XFxufVxcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuXFxuICAgIC8vIFNhbXBsaW5nIHRoZSB0ZXh0dXJlLCBMIHBhdHRlcm5cXG4gICAgZmxvYXQgc2RmICAgICAgID0gdGV4dHVyZTJEKCB1U2FtcGxlciwgdGMwICkucjtcXG4gICAgZmxvYXQgc2RmX25vcnRoID0gdGV4dHVyZTJEKCB1U2FtcGxlciwgdGMwICsgdmVjMiggMC4wLCBzZGZfdGV4ZWwgKSApLnI7XFxuICAgIGZsb2F0IHNkZl9lYXN0ICA9IHRleHR1cmUyRCggdVNhbXBsZXIsIHRjMCArIHZlYzIoIHNkZl90ZXhlbCwgMC4wICkgKS5yO1xcblxcbiAgICAvLyBFc3RpbWF0aW5nIHN0cm9rZSBkaXJlY3Rpb24gYnkgdGhlIGRpc3RhbmNlIGZpZWxkIGdyYWRpZW50IHZlY3RvclxcbiAgICB2ZWMyICBzZ3JhZCAgICAgPSB2ZWMyKCBzZGZfZWFzdCAtIHNkZiwgc2RmX25vcnRoIC0gc2RmICk7XFxuICAgIGZsb2F0IHNncmFkX2xlbiA9IG1heCggbGVuZ3RoKCBzZ3JhZCApLCAxLjAgLyAxMjguMCApO1xcbiAgICB2ZWMyICBncmFkICAgICAgPSBzZ3JhZCAvIHZlYzIoIHNncmFkX2xlbiApO1xcbiAgICBmbG9hdCB2Z3JhZCA9IGFicyggZ3JhZC55ICk7IC8vIDAuMCAtIHZlcnRpY2FsIHN0cm9rZSwgMS4wIC0gaG9yaXpvbnRhbCBvbmVcXG5cXG4gICAgZmxvYXQgaG9yel9zY2FsZSAgPSAxLjE7IC8vIEJsdXJyaW5nIHZlcnRpY2FsIHN0cm9rZXMgYWxvbmcgdGhlIFggYXhpcyBhIGJpdFxcbiAgICBmbG9hdCB2ZXJ0X3NjYWxlICA9IDAuNjsgLy8gV2hpbGUgYWRkaW5nIHNvbWUgY29udHJhc3QgdG8gdGhlIGhvcml6b250YWwgc3Ryb2tlc1xcbiAgICBmbG9hdCBoZG9mZnNldCAgICA9IG1peCggZG9mZnNldCAqIGhvcnpfc2NhbGUsIGRvZmZzZXQgKiB2ZXJ0X3NjYWxlLCB2Z3JhZCApO1xcbiAgICBmbG9hdCByZXNfZG9mZnNldCA9IG1peCggZG9mZnNldCwgaGRvZmZzZXQsIGhpbnRfYW1vdW50ICk7XFxuXFxuICAgIGZsb2F0IGFscGhhICAgICAgID0gc21vb3Roc3RlcCggMC41IC0gcmVzX2RvZmZzZXQsIDAuNSArIHJlc19kb2Zmc2V0LCBzZGYgKTtcXG5cXG4gICAgLy8gQWRkaXRpb25hbCBjb250cmFzdFxcbiAgICBhbHBoYSAgICAgICAgICAgICA9IHBvdyggYWxwaGEsIDEuMCArIDAuMiAqIHZncmFkICogaGludF9hbW91bnQgKTtcXG5cXG4gICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBzdXBwb3J0IGZvciBBUkJfYmxlbmRfZnVuY19leHRlbmRlZCBpbiBXZWJHTC5cXG4gICAgLy8gRm9ydHVuYXRlbHkgdGhlIGJhY2tncm91bmQgaXMgZmlsbGVkIHdpdGggYSBzb2xpZCBjb2xvciBzbyB3ZSBjYW4gZG9cXG4gICAgLy8gdGhlIGJsZW5kaW5nIGluc2lkZSB0aGUgc2hhZGVyLlxcblxcbiAgICAvLyBEaXNjYXJkaW5nIHBpeGVscyBiZXlvbmQgYSB0aHJlc2hvbGQgdG8gbWluaW1pc2UgcG9zc2libGUgYXJ0aWZhY3RzLlxcbiAgICBpZiAoIGFscGhhIDwgMjAuMCAvIDI1Ni4wICkgZGlzY2FyZDtcXG5cXG4gICAgdmVjMyBjaGFubmVscyA9IHN1YnBpeGVsKCBncmFkLnggKiAwLjUgKiBzdWJwaXhlbF9hbW91bnQsIGFscGhhICkgKyAwLjE7XFxuXFxuICAgIC8vIEZvciBzdWJwaXhlbCByZW5kZXJpbmcgd2UgaGF2ZSB0byBibGVuZCBlYWNoIGNvbG9yIGNoYW5uZWwgc2VwYXJhdGVseVxcbiAgICB2ZWMzIHJlcyA9IG1peCggYmdfY29sb3IsIGZvbnRfY29sb3IsIGNoYW5uZWxzICk7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoIHJlcywgMS4wICk7XFxufVxcblxcblxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy90ZXh0L2ZyYWcuZ2xzbFxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxuYXR0cmlidXRlIHZlYzIgYVZlcnRleFBvc2l0aW9uO1xcblxcbnVuaWZvcm0gbWF0MyB0cmFuc2xhdGlvbk1hdHJpeDtcXG51bmlmb3JtIG1hdDMgcHJvamVjdGlvbk1hdHJpeDtcXG5cXG52b2lkIG1haW4odm9pZCkge1xcblxcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQoKHByb2plY3Rpb25NYXRyaXggKiB0cmFuc2xhdGlvbk1hdHJpeCAqIHZlYzMoYVZlcnRleFBvc2l0aW9uICwgMS4wKSkueHksIDAuMCwgMS4wKTtcXG5cXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL3NlbGVjdC92ZXJ0Lmdsc2xcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbnVuaWZvcm0gdmVjMyBiZ19jb2xvcjtcXG52YXJ5aW5nIHZlYzIgIHRjMDtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoYmdfY29sb3IsMC40NSk7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMS4wLCAxLjAsIDEuMCwwLjIpO1xcbn1cXG5cXG5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvc2VsZWN0L2ZyYWcuZ2xzbFxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==