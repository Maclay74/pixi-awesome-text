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
	
	      // Select range
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
	    this.createField();
	    this.disable();
	  }
	
	  _createClass(Input, [{
	    key: "enable",
	    value: function enable() {
	      this.inputElement.style.display = 'block';
	    }
	  }, {
	    key: "disable",
	    value: function disable() {
	      this.inputElement.style.display = 'none';
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
	      document.body.append(this.inputElement);
	      this.inputElement.style.backgroundColor = 'transparent'; //this.inputElement.style.backgroundColor = 'rgba(0,0,0,0.3)';
	
	      var transform = Object.values(this.owner.transform.worldTransform).slice(0, 6);
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
	        console.log("start of the text");
	        glyphMetrics.y += this.owner.style.lineHeight;
	      }
	
	      var transform = Object.values(this.owner.transform.worldTransform).slice(0, 6);
	      this.inputElement.style.transform = "matrix(".concat(transform.join(", "), ")");
	      this.inputElement.style.height = this.metrics.lineHeight + "px";
	      this.inputElement.style.fontSize = this.metrics.lineHeight + "px";
	      this.setPosition(glyphMetrics.x, glyphMetrics.y); //this.setScale(this.owner.scale.x, this.owner.scale.y);
	
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
	      } else {//this.glyphIndex++;
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
	      var lineHeight = this.metrics.lineHeight * this.owner.scale.y;
	      y *= this.owner.scale.y;
	      x *= this.owner.scale.x;
	      y -= lineHeight;
	      y -= this.owner.position.y * this.owner.scale.y;
	      x -= this.owner.position.x * this.owner.scale.x;
	      this.inputElement.style.left = "".concat(x, "px");
	      this.inputElement.style.top = "".concat(y, "px");
	      this.inputElement.value = " ";
	      this.inputElement.value = "";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA5MGIzZDhmZmQzNjU2YWJlMGEwOSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2R0eXBlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYW4tYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvdmVydC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvZnJhZy5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3NlbGVjdC92ZXJ0Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvc2VsZWN0L2ZyYWcuZ2xzbCJdLCJuYW1lcyI6WyJPYmplY3QiLCJhc3NpZ24iLCJQSVhJIiwiZXh0cmFzIiwiQXdlc29tZVRleHQiLCJUZXh0IiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJzZWxlY3RWZXJ0ZXh0U2hhZGVyIiwic2VsZWN0RnJhZ21lbnRTaGFkZXIiLCJnbENvcmUiLCJBd2Vzb21lVGV4dFJlbmRlcmVyIiwicmVuZGVyZXIiLCJ0ZXh0U2hhZGVyIiwic2VsZWN0U2hhZGVyIiwiZ2wiLCJnZXRFeHRlbnNpb24iLCJTaGFkZXIiLCJzb3VyY2UiLCJnbERhdGEiLCJfZ2xEYXRhcyIsImNvbnRleHRUZXh0IiwiYmluZFZhbyIsImJ1aWxkVGV4dEdsRGF0YSIsInZhbyIsImRpcnR5IiwidXZCdWZmZXIiLCJ1cGxvYWQiLCJ1dnMiLCJpbmRleERpcnR5IiwiaW5kZXhCdWZmZXIiLCJpbmRpY2VzIiwidmVydGV4QnVmZmVyIiwidmVydGljZXMiLCJiaW5kU2hhZGVyIiwic2hhZGVyIiwic3RhdGUiLCJzZXRCbGVuZE1vZGUiLCJibGVuZE1vZGUiLCJ1bmlmb3JtcyIsInVTYW1wbGVyIiwiYmluZFRleHR1cmUiLCJ0ZXh0dXJlIiwidHJhbnNsYXRpb25NYXRyaXgiLCJ3b3JsZFRyYW5zZm9ybSIsInRvQXJyYXkiLCJoaW50X2Ftb3VudCIsInNkZk11bHRpcGxpZXIiLCJzY2FsZSIsInN1YnBpeGVsX2Ftb3VudCIsImZvbnRfY29sb3IiLCJ1dGlscyIsImhleDJyZ2IiLCJzdHlsZSIsImZpbGwiLCJyZXBsYWNlIiwiYmdfY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkcmF3TW9kZSIsIlRSSUFOR0xFUyIsImRyYXciLCJsZW5ndGgiLCJjb250ZXh0U2VsZWN0Iiwic2VsZWN0IiwiYnVpbGRTZWxlY3RHbERhdGEiLCJzZWxlY3RDb2xvciIsInN0eWxlSUQiLCJ1cGRhdGUiLCJzdGF0ZXMiLCJlZGl0YWJsZSIsInNlbGVjdGluZyIsInJlbmRlclNlbGVjdCIsInJlbmRlclRleHQiLCJHTEJ1ZmZlciIsImNyZWF0ZVZlcnRleEJ1ZmZlciIsIlNUUkVBTV9EUkFXIiwic2RmQnVmZmVyIiwic2RmU2l6ZXMiLCJTVEFUSUNfRFJBVyIsImNyZWF0ZUluZGV4QnVmZmVyIiwiVmVydGV4QXJyYXlPYmplY3QiLCJhZGRJbmRleCIsImFkZEF0dHJpYnV0ZSIsImF0dHJpYnV0ZXMiLCJhVmVydGV4UG9zaXRpb24iLCJGTE9BVCIsImFUZXh0dXJlQ29vcmQiLCJhU2RmU2l6ZSIsIk9iamVjdFJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsInJlZ2lzdGVyUGx1Z2luIiwiY3JlYXRlSW5kaWNlcyIsInRleHQiLCJmb250IiwicmVndWxhciIsIlRleHRTdHlsZSIsIl90ZXh0IiwiX2ZvbnQiLCJfdGV4dHVyZSIsImludGVyYWN0aXZlIiwiYnV0dG9uTW9kZSIsImxheW91dCIsIlRleHRMYXlvdXQiLCJmb250U2l6ZSIsIndyYXBXb3JkcyIsImJyZWFrV29yZHMiLCJ3cmFwcGVyV2lkdGgiLCJ3b3JkV3JhcFdpZHRoIiwiYWxpZ24iLCJsaW5lSGVpZ2h0IiwiU2VsZWN0IiwiaW5wdXQiLCJJbnB1dCIsInNldFN0YXRlIiwibWV0cmljcyIsImZvbnRNZXRyaWNzIiwiRmxvYXQzMkFycmF5IiwibGV0dGVyc0NvdW50IiwiYXJyYXlQb3NpdGlvbnMiLCJ2ZXJ0ZXgiLCJzZGYiLCJ3b3Jkc01ldHJpY3MiLCJmb3JFYWNoIiwid29yZCIsIndyaXRlU3RyaW5nIiwieCIsInkiLCJjbG9ja3dpc2UiLCJ0eXBlIiwiY291bnQiLCJuZXdTdGF0ZSIsInZhbHVlcyIsInNldFJlZ3VsYXJTdGF0ZSIsInNldEVkaXRhYmxlU3RhdGUiLCJjdXJyZW50RWRpdGluZ0VsZW1lbnQiLCJvZmYiLCJlbmFibGVkIiwib24iLCJlIiwiY2xpY2tzQ291bnQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsInNldFJhbmdlIiwiaW5wdXRFbGVtZW50IiwiZm9jdXMiLCJvbk1vdXNlRG93biIsInNob3ciLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsImluZGV4Iiwic3RyaW5nIiwic3Vic3RyIiwibmV3VGV4dCIsInNwbGl0Iiwic3BsaWNlIiwiam9pbiIsImZvbnRfbWV0cmljcyIsInBvcyIsInByZXZfY2hhciIsImNwb3MiLCJ4X21heCIsImNhcFNjYWxlIiwic3RyX3BvcyIsInNjaGFyIiwiZm9udF9jaGFyIiwiY2hhcnMiLCJrZXJuIiwicmVjdCIsImNoYXJSZWN0IiwicG9zaXRpb25zIiwibWFwIiwidXYiLCJzdHJpbmdfcG9zIiwibW9yZUxpbmVHYXAiLCJjYXBfaGVpZ2h0IiwieF9oZWlnaHQiLCJmb250QXNjZW50IiwiYXNjZW50IiwiZGVzY2VudCIsImxpbmVfZ2FwIiwibG93U2NhbGUiLCJNYXRoIiwicm91bmQiLCJsb3djYXNlIiwiZmxhZ3MiLCJiYXNlbGluZSIsImciLCJib3R0b20iLCJpeSIsInRvcCIsInJvd19oZWlnaHQiLCJsZWZ0IiwiYmVhcmluZ194IiwiaXgiLCJyaWdodCIsInAiLCJuZXdfcG9zX3giLCJhZHZhbmNlX3giLCJzZGZfc2l6ZSIsInZhbHVlIiwibWVzaCIsIk1lc2giLCJvd25lciIsImNvbmZpZyIsInN0YXJ0WSIsImNhbGN1bGF0ZVdvcmRzUG9zaXRpb25zIiwiZ2x5cGhzIiwiZ2V0R2x5cGhzIiwid2lkdGgiLCJoZWlnaHQiLCJjaGFyIiwid29yZHMiLCJpIiwic3RhcnRYIiwid29yZFNpemUiLCJnZXRTdHJpbmdTaXplIiwicHVzaCIsImxpbmVzQ291bnQiLCJ3b3Jkc09uTGluZSIsImZpbHRlciIsImxhc3RXb3JkIiwiZnJlZVNwYWNlIiwibGVmdE9mZnNldCIsImxldHRlciIsInBvc2l0aW9uIiwicmFuZ2UiLCJidWlsZFZlcnRpY2VzIiwic3RhcnQiLCJlbmQiLCJtaW4iLCJhcHBseSIsIm1heCIsImxldHRlckNvdW50IiwiZmlyc3RMZXR0ZXIiLCJsYXN0TGV0dGVyIiwic3RhcnRMaW5lTGV0dGVyIiwiZW5kTGluZUxldHRlciIsIm9mZnNldCIsInNlbGVjdGluZ0xpbmUiLCJmbG9vciIsInNlbGVjdGluZ0xpbmVZIiwibGFzdEdseXBoT25MaW5lIiwiZmlyc3RHbHlwaE9uTGluZSIsImdseXBoIiwiZXZlbnQiLCJkYXRhIiwiYnV0dG9uIiwiZ2xvYmFsIiwiY2xvc2VzdExldHRlciIsImdldENsb3Nlc3RHbHlwaCIsImluZGV4T2YiLCJnbHlwaEluZGV4IiwiX2dseXBoSW5kZXgiLCJfZW5hYmxlZCIsImVuYWJsZSIsImRpc2FibGUiLCJjcmVhdGVGaWVsZCIsImRpc3BsYXkiLCJvcGFjaXR5IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiYm9keSIsImFwcGVuZCIsInRyYW5zZm9ybSIsInNsaWNlIiwiY29sb3IiLCJib3JkZXIiLCJjb250YWluIiwiekluZGV4IiwicG9pbnRlckV2ZW50cyIsIm91dGxpbmUiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJwYWRkaW5nIiwiYWRkRXZlbnQiLCJvbklucHV0Iiwib25LZXlkb3duIiwiZ2x5cGhNZXRyaWNzIiwibGFzdEdseXBoIiwic2VsZWN0ZWRHbHlwaCIsImNvbnNvbGUiLCJsb2ciLCJzZXRQb3NpdGlvbiIsInJlbW92ZUluZGV4IiwicmVtb3ZlTGVuZ3RoIiwiYWJzIiwicmVtb3ZlU3RyaW5nIiwidGFyZ2V0IiwiaW5zZXJ0U3RyaW5nIiwia2V5IiwiY3RybEtleSIsImNhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOztBQUNBOztBQUNBOzs7O0FBRUFBLE9BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxJQUFJLENBQUNDLE1BQW5CLEVBQTJCO0FBQ3pCQyxjQUFXLEVBQUVDO0FBRFksRUFBM0I7O0FBSUEsS0FBSSxPQUFPSCxJQUFQLEtBQWdCLFdBQXBCLEVBQWlDO0FBQy9CLE9BQUlBLElBQUksQ0FBQ0MsTUFBVCxFQUFpQjtBQUNmRCxTQUFJLENBQUNDLE1BQUwsQ0FBWUMsV0FBWixHQUEwQkMsZ0JBQTFCO0FBQ0QsSUFGRCxNQUVPO0FBQ0xILFNBQUksQ0FBQ0MsTUFBTCxHQUFjO0FBQUVDLGtCQUFXLEVBQUVDO0FBQWYsTUFBZDtBQUNEO0FBQ0Y7QUFRRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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REFBNEQsa0RBQWtELGtDQUFrQywrRUFBK0Usa0ZBQWtGLDJJQUEySSxnRUFBZ0Usb0ZBQW9GLHNHQUFzRyxnVUFBZ1UsZ0ZBQWdGLHVJQUF1SSxzQ0FBc0MsR0FBRyxPOzs7Ozs7QUNBbHNHLHFFQUFvRSxtQ0FBbUMsZ0NBQWdDLHFCQUFxQiw4R0FBOEcsS0FBSyxHOzs7Ozs7QUNBL1EsNERBQTJELG9CQUFvQixpQkFBaUIseUNBQXlDLDZDQUE2QyxHQUFHLE8iLCJmaWxlIjoicGl4aS1hd2Vzb21lLXRleHQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQXdlc29tZVRleHRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQXdlc29tZVRleHRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTBiM2Q4ZmZkMzY1NmFiZTBhMDkiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4vcmVuZGVyZXJcIjtcbmltcG9ydCBUZXh0IGZyb20gXCIuL3RleHRcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vbGF5b3V0XCI7XG5cbk9iamVjdC5hc3NpZ24oUElYSS5leHRyYXMsIHtcbiAgQXdlc29tZVRleHQ6IFRleHRcbn0pO1xuXG5pZiAodHlwZW9mIFBJWEkgIT09ICd1bmRlZmluZWQnKSB7XG4gIGlmIChQSVhJLmV4dHJhcykge1xuICAgIFBJWEkuZXh0cmFzLkF3ZXNvbWVUZXh0ID0gVGV4dDtcbiAgfSBlbHNlIHtcbiAgICBQSVhJLmV4dHJhcyA9IHsgQXdlc29tZVRleHQ6IFRleHR9O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIFRleHQsXG4gIFJlbmRlcmVyLFxuICBMYXlvdXRcbn1cblxuLypcblxuaXggICAgICAgICAgICA9IHNkZl9zaXplIC8gdGV4X3dpZHRoXG5peSAgICAgICAgICAgID0gc2RmX3NpemUgLyB0ZXhfaGVpZ2h0XG5yb3dfaGVpZ2h0ICAgID0gKHJvd19oZWlnaHQgKyAyICogc2RmX3NpemUpIC8gdGV4X2hlaWdodDtcbmFzcGVjdCAgICAgICAgPSB0ZXhfd2lkdGggLyB0ZXhfaGVpZ2h0O1xuYXNjZW50ICAgICAgICA9IGZvbnQtPmFzY2VudCAqIHNjYWxlWVxuZGVzY2VudCAgICAgICA9IGZhYnNmKGZvbnQtPmRlc2NlbnQgKiBzY2FsZVkpXG5saW5lX2dhcCAgICAgID0gZm9udC0+bGluZV9nYXAgKiBzY2FsZSBZXG5jYXBfaGVpZ2h0ICAgID0gZ3hjYXAubWF4LnkgKiBzY2FsZVlcbnhfaGVpZ2h0ICAgICAgPSBneC5tYXgueSAqIHNjYWxlWVxuc3BhY2VfYWR2YW5jZSA9IGdzcGFjZS5hZHZhbmNlX3dpZHRoICogc2NhbGVYXG5cblxuc2NhbGV5ID0gcm93X2hlaWdodCAvIHRleF9oZWlnaHQgLyAoIGZvbnQtPmdseXBoX21heC55IC0gZm9udC0+Z2x5cGhfbWluLnkgKTtcbnNjYWxleCA9IHJvd19oZWlnaHQgLyB0ZXhfd2lkdGggLyAoIGZvbnQtPmdseXBoX21heC55IC0gZm9udC0+Z2x5cGhfbWluLnkgKTtcbmdzcGFjZSA9IGZvbnQtPmdseXBoc1sgZm9udC0+Z2x5cGhfaWR4KCAnICcgKSBdO1xuZ3ggICAgID0gZm9udC0+Z2x5cGhzWyBmb250LT5nbHlwaF9pZHgoICd4JyApIF1cbmd4Y2FwICA9IGZvbnQtPmdseXBoc1sgZm9udC0+Z2x5cGhfaWR4KCAnWCcgKSBdXG5cblxuc2RmX3NpemUgPSAxMFxuXG4qL1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCBBd2Vzb21lVGV4dCBmcm9tIFwiLi90ZXh0XCI7XG5cbmNvbnN0IHZlcnRleFNoYWRlciA9IHJlcXVpcmUoXCIuL3NoYWRlcnMvdGV4dC92ZXJ0Lmdsc2xcIik7XG5jb25zdCBmcmFnbWVudFNoYWRlciA9IHJlcXVpcmUoXCIuL3NoYWRlcnMvdGV4dC9mcmFnLmdsc2xcIik7XG5cbmNvbnN0IHNlbGVjdFZlcnRleHRTaGFkZXIgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3NlbGVjdC92ZXJ0Lmdsc2xcIik7XG5jb25zdCBzZWxlY3RGcmFnbWVudFNoYWRlciA9IHJlcXVpcmUoXCIuL3NoYWRlcnMvc2VsZWN0L2ZyYWcuZ2xzbFwiKTtcblxuY29uc3QgZ2xDb3JlID0gUElYSS5nbENvcmU7XG5cbmNsYXNzIEF3ZXNvbWVUZXh0UmVuZGVyZXIgZXh0ZW5kcyBQSVhJLk9iamVjdFJlbmRlcmVyIHtcblxuICBzdGF0aWMgY29udGV4dFRleHQgPSAwO1xuICBzdGF0aWMgY29udGV4dFNlbGVjdCA9IDE7XG5cbiAgc2VsZWN0Q29sb3IgPSAweEZGQjNDMztcblxuXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XG4gICAgc3VwZXIocmVuZGVyZXIpO1xuICAgIHRoaXMudGV4dFNoYWRlciA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RTaGFkZXIgPSBudWxsO1xuXG4gIH1cblxuICBvbkNvbnRleHRDaGFuZ2UoKSB7XG4gICAgY29uc3QgZ2wgPSB0aGlzLnJlbmRlcmVyLmdsO1xuICAgIGdsLmdldEV4dGVuc2lvbihcIk9FU19zdGFuZGFyZF9kZXJpdmF0aXZlc1wiKTtcbiAgICB0aGlzLnRleHRTaGFkZXIgPSBuZXcgUElYSS5TaGFkZXIoZ2wsIHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xuICAgIHRoaXMuc2VsZWN0U2hhZGVyID0gbmV3IFBJWEkuU2hhZGVyKGdsLCBzZWxlY3RWZXJ0ZXh0U2hhZGVyLCBzZWxlY3RGcmFnbWVudFNoYWRlcik7XG4gIH1cblxuICByZW5kZXJUZXh0KHNvdXJjZSkge1xuXG4gICAgbGV0IGdsRGF0YSA9IHNvdXJjZS5fZ2xEYXRhc1tBd2Vzb21lVGV4dFJlbmRlcmVyLmNvbnRleHRUZXh0XTtcblxuICAgIGlmICghZ2xEYXRhKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmJpbmRWYW8obnVsbCk7XG4gICAgICBnbERhdGEgPSB0aGlzLmJ1aWxkVGV4dEdsRGF0YShzb3VyY2UsIHRoaXMucmVuZGVyZXIuZ2wpO1xuICAgICAgc291cmNlLl9nbERhdGFzW0F3ZXNvbWVUZXh0UmVuZGVyZXIuY29udGV4dFRleHRdID0gZ2xEYXRhO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIuYmluZFZhbyhnbERhdGEudmFvKTtcblxuICAgIGlmIChzb3VyY2UuZGlydHkpIHtcbiAgICAgIHNvdXJjZS5kaXJ0eSA9IGZhbHNlO1xuICAgICAgZ2xEYXRhLnV2QnVmZmVyLnVwbG9hZChzb3VyY2UudXZzKTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlLmluZGV4RGlydHkpIHtcbiAgICAgIHNvdXJjZS5pbmRleERpcnR5ID0gZmFsc2U7XG4gICAgICBnbERhdGEuaW5kZXhCdWZmZXIudXBsb2FkKHNvdXJjZS5pbmRpY2VzKTtcbiAgICB9XG5cbiAgICBnbERhdGEudmVydGV4QnVmZmVyLnVwbG9hZChzb3VyY2UudmVydGljZXMpO1xuICAgIHRoaXMucmVuZGVyZXIuYmluZFNoYWRlcihnbERhdGEuc2hhZGVyKTtcblxuICAgIHRoaXMucmVuZGVyZXIuc3RhdGUuc2V0QmxlbmRNb2RlKHNvdXJjZS5ibGVuZE1vZGUpO1xuXG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy51U2FtcGxlciA9IHRoaXMucmVuZGVyZXIuYmluZFRleHR1cmUoc291cmNlLnRleHR1cmUpO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMudHJhbnNsYXRpb25NYXRyaXggPSBzb3VyY2Uud29ybGRUcmFuc2Zvcm0udG9BcnJheSh0cnVlKTtcblxuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuaGludF9hbW91bnQgPSAxLjA7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5zZGZNdWx0aXBsaWVyID0gQXdlc29tZVRleHQuc2NhbGU7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5zdWJwaXhlbF9hbW91bnQgPSAxLjA7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5mb250X2NvbG9yID0gUElYSS51dGlscy5oZXgycmdiKHNvdXJjZS5zdHlsZS5maWxsLnJlcGxhY2UoXCIjXCIsIFwiMHhcIikpO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuYmdfY29sb3IgPSBQSVhJLnV0aWxzLmhleDJyZ2Ioc291cmNlLmJhY2tncm91bmRDb2xvci5yZXBsYWNlKFwiI1wiLCBcIjB4XCIpKTtcblxuICAgIGNvbnN0IGRyYXdNb2RlID0gc291cmNlLmRyYXdNb2RlID0gdGhpcy5yZW5kZXJlci5nbC5UUklBTkdMRVM7XG4gICAgZ2xEYXRhLnZhby5kcmF3KGRyYXdNb2RlLCBzb3VyY2UuaW5kaWNlcy5sZW5ndGgsIDApO1xuXG4gIH1cblxuICByZW5kZXJTZWxlY3Qoc291cmNlKSB7XG4gICAgbGV0IGdsRGF0YSA9IHNvdXJjZS5fZ2xEYXRhc1tBd2Vzb21lVGV4dFJlbmRlcmVyLmNvbnRleHRTZWxlY3RdO1xuXG4gICAgaWYgKCFnbERhdGEgfHwgc291cmNlLnNlbGVjdC5kaXJ0eSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5iaW5kVmFvKG51bGwpO1xuICAgICAgZ2xEYXRhID0gdGhpcy5idWlsZFNlbGVjdEdsRGF0YShzb3VyY2UsIHRoaXMucmVuZGVyZXIuZ2wpO1xuICAgICAgc291cmNlLl9nbERhdGFzW0F3ZXNvbWVUZXh0UmVuZGVyZXIuY29udGV4dFNlbGVjdF0gPSBnbERhdGE7XG4gICAgICBzb3VyY2Uuc2VsZWN0LmRpcnR5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlci5iaW5kVmFvKGdsRGF0YS52YW8pO1xuXG4gICAgaWYgKHNvdXJjZS5zZWxlY3QuaW5kZXhEaXJ0eSkge1xuICAgICAgc291cmNlLnNlbGVjdC5pbmRleERpcnR5ID0gZmFsc2U7XG4gICAgICBnbERhdGEuaW5kZXhCdWZmZXIudXBsb2FkKHNvdXJjZS5zZWxlY3QuaW5kaWNlcyk7XG4gICAgfVxuXG4gICAgZ2xEYXRhLnZlcnRleEJ1ZmZlci51cGxvYWQoc291cmNlLnNlbGVjdC52ZXJ0aWNlcyk7XG4gICAgdGhpcy5yZW5kZXJlci5iaW5kU2hhZGVyKGdsRGF0YS5zaGFkZXIpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zdGF0ZS5zZXRCbGVuZE1vZGUoMTcpO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMudHJhbnNsYXRpb25NYXRyaXggPSBzb3VyY2Uud29ybGRUcmFuc2Zvcm0udG9BcnJheSh0cnVlKTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmJnX2NvbG9yID0gUElYSS51dGlscy5oZXgycmdiKHRoaXMuc2VsZWN0Q29sb3IpO1xuXG4gICAgY29uc3QgZHJhd01vZGUgPSBzb3VyY2UuZHJhd01vZGUgPSB0aGlzLnJlbmRlcmVyLmdsLlRSSUFOR0xFUztcbiAgICBnbERhdGEudmFvLmRyYXcoZHJhd01vZGUsIHNvdXJjZS5zZWxlY3QuaW5kaWNlcy5sZW5ndGgsIDApO1xuICB9XG5cbiAgcmVuZGVyKHNvdXJjZSkge1xuXG4gICAgaWYgKHNvdXJjZS5zdHlsZUlEICE9PSBzb3VyY2Uuc3R5bGUuc3R5bGVJRCkge1xuICAgICAgc291cmNlLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2Uuc3RhdGUgPT09IEF3ZXNvbWVUZXh0LnN0YXRlcy5lZGl0YWJsZSB8fCBzb3VyY2Uuc3RhdGUgPT09IEF3ZXNvbWVUZXh0LnN0YXRlcy5zZWxlY3RpbmcpIHtcbiAgICAgIHRoaXMucmVuZGVyU2VsZWN0KHNvdXJjZSk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyVGV4dChzb3VyY2UpO1xuICB9XG5cbiAgYnVpbGRUZXh0R2xEYXRhKHNvdXJjZSwgZ2wpIHtcblxuICAgIGNvbnN0IGdsRGF0YSA9IHtcbiAgICAgIHNoYWRlcjogdGhpcy50ZXh0U2hhZGVyLFxuICAgICAgdmVydGV4QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlVmVydGV4QnVmZmVyKGdsLCBzb3VyY2UudmVydGljZXMsIGdsLlNUUkVBTV9EUkFXKSxcbiAgICAgIHV2QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlVmVydGV4QnVmZmVyKGdsLCBzb3VyY2UudXZzLCBnbC5TVFJFQU1fRFJBVyksXG4gICAgICBzZGZCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoZ2wsIHNvdXJjZS5zZGZTaXplcywgZ2wuU1RBVElDX0RSQVcpLFxuICAgICAgaW5kZXhCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVJbmRleEJ1ZmZlcihnbCwgc291cmNlLmluZGljZXMsIGdsLlNUQVRJQ19EUkFXKSxcbiAgICAgIC8vIGJ1aWxkIHRoZSB2YW8gb2JqZWN0IHRoYXQgd2lsbCByZW5kZXIuLlxuICAgICAgdmFvOiBudWxsLFxuICAgICAgZGlydHk6IHNvdXJjZS5kaXJ0eSxcbiAgICAgIGluZGV4RGlydHk6IHNvdXJjZS5pbmRleERpcnR5LFxuICAgIH07XG5cbiAgICBnbERhdGEudmFvID0gbmV3IGdsQ29yZS5WZXJ0ZXhBcnJheU9iamVjdChnbClcbiAgICAgIC5hZGRJbmRleChnbERhdGEuaW5kZXhCdWZmZXIpXG4gICAgICAuYWRkQXR0cmlidXRlKGdsRGF0YS52ZXJ0ZXhCdWZmZXIsIGdsRGF0YS5zaGFkZXIuYXR0cmlidXRlcy5hVmVydGV4UG9zaXRpb24sIGdsLkZMT0FULCBmYWxzZSwgMiAqIDQsIDApXG4gICAgICAuYWRkQXR0cmlidXRlKGdsRGF0YS51dkJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFUZXh0dXJlQ29vcmQsIGdsLkZMT0FULCBmYWxzZSwgMiAqIDQsIDApXG4gICAgICAuYWRkQXR0cmlidXRlKGdsRGF0YS5zZGZCdWZmZXIsIGdsRGF0YS5zaGFkZXIuYXR0cmlidXRlcy5hU2RmU2l6ZSwgZ2wuRkxPQVQsIGZhbHNlLCA0LCAwKTtcblxuICAgIHJldHVybiBnbERhdGFcbiAgfVxuXG4gIGJ1aWxkU2VsZWN0R2xEYXRhKHNvdXJjZSwgZ2wpIHtcbiAgICBjb25zdCBnbERhdGEgPSB7XG4gICAgICBzaGFkZXI6IHRoaXMuc2VsZWN0U2hhZGVyLFxuICAgICAgdmVydGV4QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlVmVydGV4QnVmZmVyKGdsLCBzb3VyY2Uuc2VsZWN0LnZlcnRpY2VzLCBnbC5TVFJFQU1fRFJBVyksXG4gICAgICBpbmRleEJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZUluZGV4QnVmZmVyKGdsLCBzb3VyY2Uuc2VsZWN0LmluZGljZXMsIGdsLlNUQVRJQ19EUkFXKSxcbiAgICAgIHZhbzogbnVsbFxuICAgIH07XG5cbiAgICBnbERhdGEudmFvID0gbmV3IGdsQ29yZS5WZXJ0ZXhBcnJheU9iamVjdChnbClcbiAgICAgIC5hZGRJbmRleChnbERhdGEuaW5kZXhCdWZmZXIpXG4gICAgICAuYWRkQXR0cmlidXRlKGdsRGF0YS52ZXJ0ZXhCdWZmZXIsIGdsRGF0YS5zaGFkZXIuYXR0cmlidXRlcy5hVmVydGV4UG9zaXRpb24sIGdsLkZMT0FULCBmYWxzZSwgMiAqIDQsIDApXG5cbiAgICByZXR1cm4gZ2xEYXRhXG4gIH1cblxufVxuXG5QSVhJLldlYkdMUmVuZGVyZXIucmVnaXN0ZXJQbHVnaW4oJ0F3ZXNvbWVUZXh0UmVuZGVyZXInLCBBd2Vzb21lVGV4dFJlbmRlcmVyKTtcblxuZXhwb3J0IGRlZmF1bHQgQXdlc29tZVRleHRSZW5kZXJlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlcmVyLmpzIiwiY29uc3QgY3JlYXRlSW5kaWNlcyA9IHJlcXVpcmUoXCJxdWFkLWluZGljZXNcIilcbmltcG9ydCBUZXh0TGF5b3V0IGZyb20gJy4vbGF5b3V0JztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9zZWxlY3QnXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCdcblxuY2xhc3MgQXdlc29tZVRleHQgZXh0ZW5kcyBQSVhJLm1lc2guTWVzaCB7XG5cbiAgc3RhdGljIHNjYWxlID0gMS4wO1xuICBzdGF0aWMgc3RhdGVzID0ge3JlZ3VsYXI6IDAsIGVkaXRhYmxlOiAxLCBzZWxlY3Rpbmc6IDJ9O1xuXG4gIHN0YXRpYyBjdXJyZW50RWRpdGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gIHBsdWdpbk5hbWUgPSAnQXdlc29tZVRleHRSZW5kZXJlcic7XG4gIHN0YXRlID0gQXdlc29tZVRleHQuc3RhdGVzLnJlZ3VsYXI7XG4gIGNsaWNrc0NvdW50ID0gMDtcbiAgaW5wdXRFbGVtZW50ID0gbnVsbDtcbiAgaW5wdXQgPSBudWxsO1xuICBzZWxlY3QgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKHRleHQsIHN0eWxlLCBmb250KSB7XG4gICAgc3VwZXIoZm9udC50ZXh0dXJlKTtcblxuICAgIHRoaXMuc3R5bGUgPSBuZXcgUElYSS5UZXh0U3R5bGUoc3R5bGUpO1xuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICAgIHRoaXMuX3RleHQgPSB0ZXh0O1xuICAgIHRoaXMuX2ZvbnQgPSBmb250LmZvbnQ7XG4gICAgdGhpcy5fdGV4dHVyZSA9IGZvbnQudGV4dHVyZTtcblxuICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgIHRoaXMuYnV0dG9uTW9kZSA9IHRydWU7XG5cbiAgICAvLyBDYWxjdWFsdGUgbGF5b3V0XG4gICAgdGhpcy5sYXlvdXQgPSBuZXcgVGV4dExheW91dCh0aGlzLCB7XG4gICAgICBmb250U2l6ZTogdGhpcy5zdHlsZS5mb250U2l6ZSxcbiAgICAgIHdyYXBXb3JkczogdGhpcy5zdHlsZS5icmVha1dvcmRzLFxuICAgICAgd3JhcHBlcldpZHRoOiB0aGlzLnN0eWxlLndvcmRXcmFwV2lkdGgsXG4gICAgICBhbGlnbjogdGhpcy5zdHlsZS5hbGlnbixcbiAgICAgIGxpbmVIZWlnaHQ6IHRoaXMuc3R5bGUubGluZUhlaWdodCxcbiAgICB9KTtcblxuICAgIC8vICBTZWxlY3QgcGx1Z2luXG4gICAgdGhpcy5zZWxlY3QgPSBuZXcgU2VsZWN0KHRoaXMpO1xuXG4gICAgLy8gSW5wdXQgcGx1Z2luXG4gICAgdGhpcy5pbnB1dCA9IG5ldyBJbnB1dCh0aGlzKTtcblxuICAgIHRoaXMuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLnJlZ3VsYXIpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMubWV0cmljcyA9IHRoaXMuZm9udE1ldHJpY3ModGhpcy5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICB0aGlzLmxheW91dC51cGRhdGUoKTtcbiAgICB0aGlzLnNlbGVjdC51cGRhdGUoKTtcbiAgICB0aGlzLmlucHV0LnVwZGF0ZSgpO1xuXG4gICAgLy8gQXJyYXlzIGZvciB2ZXJ0aWNlcywgdXZzIGFuZCBzZGZcbiAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0ICogMik7XG4gICAgdGhpcy51dnMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubGF5b3V0LmxldHRlcnNDb3VudCAqIDQgKiAyKTtcbiAgICB0aGlzLnNkZlNpemVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0KTtcbiAgICB0aGlzLmFycmF5UG9zaXRpb25zID0geyB2ZXJ0ZXg6IDAsIHV2czogMCwgc2RmOiAwIH07XG5cbiAgICAvLyBGaWxsIGFycmF5cyB3b3JkIGJ5IHdvcmRcbiAgICB0aGlzLmxheW91dC53b3Jkc01ldHJpY3MuZm9yRWFjaCAod29yZCA9PiB7XG4gICAgICB0aGlzLndyaXRlU3RyaW5nKHdvcmQud29yZCwgdGhpcy5mb250LCB0aGlzLm1ldHJpY3MsIFt3b3JkLngsIHdvcmQueV0pO1xuICAgIH0pO1xuXG4gICAgLy8gUHJlcGFyZSBpbmRpY2VzXG4gICAgdGhpcy5pbmRpY2VzID0gY3JlYXRlSW5kaWNlcyh7XG4gICAgICBjbG9ja3dpc2U6IHRydWUsXG4gICAgICB0eXBlOiAndWludDE2JyxcbiAgICAgIGNvdW50OiB0aGlzLmxheW91dC5sZXR0ZXJzQ291bnRcbiAgICB9KTtcblxuICAgIHRoaXMuc3R5bGVJRCA9IHRoaXMuc3R5bGUuc3R5bGVJRDtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB0aGlzLmluZGV4RGlydHkgPSB0cnVlO1xuICAgIHRoaXMuX2dsRGF0YXMgPSBbXTtcbiAgfVxuXG4gIHNldFN0YXRlKG5ld1N0YXRlKSB7XG5cbiAgICBjb25zdCB7IHN0YXRlcyB9ID0gQXdlc29tZVRleHQ7XG5cbiAgICBpZiAoIW5ld1N0YXRlIGluIE9iamVjdC52YWx1ZXMoc3RhdGVzKSkgcmV0dXJuO1xuXG4gICAgc3dpdGNoIChuZXdTdGF0ZSkge1xuICAgICAgY2FzZSBzdGF0ZXMucmVndWxhcjpcbiAgICAgICAgdGhpcy5zZXRSZWd1bGFyU3RhdGUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHN0YXRlcy5lZGl0YWJsZTpcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyKSB7XG4gICAgICAgICAgdGhpcy5zZXRFZGl0YWJsZVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IG5ld1N0YXRlO1xuICB9XG5cbiAgZ2V0IHRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cblxuICBzZXQgdGV4dCh2YWx1ZSkge1xuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc2V0UmVndWxhclN0YXRlKCkge1xuXG4gICAgQXdlc29tZVRleHQuY3VycmVudEVkaXRpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgIHRoaXMub2ZmKFwibW91c2Vkb3duXCIpO1xuICAgIHRoaXMub2ZmKFwibW91c2Vtb3ZlXCIpO1xuICAgIHRoaXMub2ZmKFwibW91c2V1cFwiKTtcbiAgICB0aGlzLm9mZihcIm1vdXNldXBvdXRzaWRlXCIpO1xuXG4gICAgdGhpcy5pbnB1dC5lbmFibGVkID0gZmFsc2U7XG5cblxuICAgIHRoaXMub24oXCJjbGlja1wiLCBlID0+IHtcbiAgICAgIGlmICh0aGlzLmNsaWNrc0NvdW50ID09PSAxKSB7XG4gICAgICAgIHRoaXMuY2xpY2tzQ291bnQgPSAwO1xuICAgICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5lZGl0YWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNsaWNrc0NvdW50ID09PSAwKSB7XG4gICAgICAgIHRoaXMuY2xpY2tzQ291bnQrKztcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2xpY2tzQ291bnQgPSAwO1xuICAgICAgICB9LCAzMDApXG4gICAgICB9XG4gICAgfSlcblxuICB9XG5cbiAgc2V0RWRpdGFibGVTdGF0ZSgpIHtcblxuICAgIC8vIERpc2FibGUgcHJldmlvdXNseSBlbmFibGVkIGZpZWxkXG4gICAgaWYgKEF3ZXNvbWVUZXh0LmN1cnJlbnRFZGl0aW5nRWxlbWVudCAhPSBudWxsKSB7XG4gICAgICBBd2Vzb21lVGV4dC5jdXJyZW50RWRpdGluZ0VsZW1lbnQuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLnJlZ3VsYXIpO1xuICAgIH1cbiAgICBBd2Vzb21lVGV4dC5jdXJyZW50RWRpdGluZ0VsZW1lbnQgPSB0aGlzO1xuXG4gICAgLy8gRGlzYWJsZSB1bm5lY2Vzc2FyeSBldmVudHNcbiAgICB0aGlzLm9mZihcImNsaWNrXCIpO1xuXG4gICAgdGhpcy5pbnB1dC5lbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmlucHV0LmhpZGUoKTtcblxuICAgIC8vIFNlbGVjdCBhbGwgY2hhcmFjdGVyc1xuICAgIHRoaXMuc2VsZWN0LnNldFJhbmdlKDAsdGhpcy50ZXh0Lmxlbmd0aCAtIDEpO1xuICAgIHRoaXMuaW5wdXQuaW5wdXRFbGVtZW50LmZvY3VzKCk7XG5cbiAgICB0aGlzLm9uKFwibW91c2Vkb3duXCIsIGUgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZShBd2Vzb21lVGV4dC5zdGF0ZXMuc2VsZWN0aW5nKTtcbiAgICAgIHRoaXMuc2VsZWN0Lm9uTW91c2VEb3duKGUpO1xuICAgICAgdGhpcy5pbnB1dC5zaG93KCk7XG4gICAgICB0aGlzLmlucHV0LnVwZGF0ZShlKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oXCJtb3VzZW1vdmVcIiwgZSA9PiB7XG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQXdlc29tZVRleHQuc3RhdGVzLnNlbGVjdGluZykge1xuICAgICAgICB0aGlzLnNlbGVjdC5vbk1vdXNlTW92ZShlKTtcbiAgICAgICAgdGhpcy5pbnB1dC5oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKFwibW91c2V1cFwiLCBlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLmVkaXRhYmxlKTtcbiAgICAgIHRoaXMuc2VsZWN0Lm9uTW91c2VVcChlKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oXCJtb3VzZXVwb3V0c2lkZVwiLCBlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLmVkaXRhYmxlKTtcbiAgICAgIHRoaXMuc2VsZWN0Lm9uTW91c2VVcChlKTtcbiAgICB9KTtcblxuICB9XG5cbiAgaW5zZXJ0U3RyaW5nKGluZGV4LCBzdHJpbmcpIHtcbiAgICB0aGlzLnRleHQgPSB0aGlzLnRleHQuc3Vic3RyKDAsIGluZGV4KSArIHN0cmluZyArIHRoaXMudGV4dC5zdWJzdHIoaW5kZXgpO1xuICB9XG5cbiAgcmVtb3ZlU3RyaW5nKGluZGV4LCBsZW5ndGgpIHtcbiAgICBsZXQgbmV3VGV4dCA9IHRoaXMudGV4dC5zcGxpdChcIlwiKTtcbiAgICBuZXdUZXh0LnNwbGljZShpbmRleCwgbGVuZ3RoICsgMSk7XG4gICAgdGhpcy50ZXh0ID0gbmV3VGV4dC5qb2luKFwiXCIpO1xuICB9XG5cbiAgZ2V0IHRleHR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHR1cmU7XG4gIH1cblxuICBnZXQgZm9udCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9udFxuICB9XG5cbiAgd3JpdGVTdHJpbmcoIHN0cmluZywgZm9udCwgZm9udF9tZXRyaWNzLCBwb3MpIHtcbiAgICBsZXQgcHJldl9jaGFyID0gXCIgXCI7ICAvLyBVc2VkIHRvIGNhbGN1bGF0ZSBrZXJuaW5nXG4gICAgbGV0IGNwb3MgICAgICA9IHBvczsgIC8vIEN1cnJlbnQgcGVuIHBvc2l0aW9uXG4gICAgbGV0IHhfbWF4ICAgICA9IDAuMDsgIC8vIE1heCB3aWR0aCAtIHVzZWQgZm9yIGJvdW5kaW5nIGJveFxuICAgIGxldCBzY2FsZSAgICAgPSBmb250X21ldHJpY3MuY2FwU2NhbGU7XG5cbiAgICBsZXQgc3RyX3BvcyA9IDA7XG5cbiAgICBmb3IoOzspIHtcbiAgICAgIGlmICggc3RyX3BvcyA9PT0gc3RyaW5nLmxlbmd0aCApIGJyZWFrO1xuXG4gICAgICB2YXIgc2NoYXIgPSBzdHJpbmdbIHN0cl9wb3MgXTtcbiAgICAgIHN0cl9wb3MrKztcblxuICAgICAgaWYgKCBzY2hhciA9PT0gXCJcXG5cIiApIHtcbiAgICAgICAgaWYgKCBjcG9zWzBdID4geF9tYXggKSB4X21heCA9IGNwb3NbMF07IC8vIEV4cGFuZGluZyB0aGUgYm91bmRpbmcgcmVjdFxuICAgICAgICBjcG9zWzBdICA9IHBvc1swXTtcbiAgICAgICAgY3Bvc1sxXSAtPSBmb250X21ldHJpY3MubGluZUhlaWdodDtcbiAgICAgICAgcHJldl9jaGFyID0gXCIgXCI7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIHNjaGFyID09PSBcIiBcIiApIHtcbiAgICAgICAgLy9zY2hhciA9IFwiX1wiXG4gICAgICAgIC8vY3Bvc1swXSArPSBmb250LnNwYWNlX2FkdmFuY2UgKiBzY2FsZTtcbiAgICAgICAgLy9wcmV2X2NoYXIgPSBcIiBcIjtcbiAgICAgICAgLy9jb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZvbnRfY2hhciA9IGZvbnQuY2hhcnNbIHNjaGFyIF07XG4gICAgICBpZiAoICFmb250X2NoYXIgKSB7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1YnN0aXR1dGluZyB1bmF2YWlsYWJsZSBjaGFyYWN0ZXJzIHdpdGggJz8nXG4gICAgICAgIHNjaGFyID0gXCI/XCI7XG4gICAgICAgIGZvbnRfY2hhciA9IGZvbnQuY2hhcnNbIFwiP1wiIF07XG4gICAgICB9XG5cbiAgICAgIHZhciBrZXJuID0gZm9udC5rZXJuWyBwcmV2X2NoYXIgKyBzY2hhciBdO1xuICAgICAgaWYgKCAha2VybiApIGtlcm4gPSAwLjA7XG5cbiAgICAgIC8vIGNhbGN1bGF0aW5nIHRoZSBnbHlwaCByZWN0YW5nbGUgYW5kIGNvcHlpbmcgaXQgdG8gdGhlIHZlcnRleCBhcnJheVxuICAgICAgdmFyIHJlY3QgPSB0aGlzLmNoYXJSZWN0KCBjcG9zLCBmb250LCBmb250X21ldHJpY3MsIGZvbnRfY2hhciwga2VybiApO1xuXG4gICAgICByZWN0LnBvc2l0aW9ucy5tYXAoKHBvcykgPT4gdGhpcy52ZXJ0aWNlc1sgdGhpcy5hcnJheVBvc2l0aW9ucy52ZXJ0ZXgrKyBdID0gcG9zICk7XG4gICAgICByZWN0LnV2cy5tYXAoKHV2KSA9PiB0aGlzLnV2c1sgdGhpcy5hcnJheVBvc2l0aW9ucy51dnMrKyBdID0gdXYgKTtcbiAgICAgIHJlY3Quc2RmU2l6ZXMubWFwKChzZGYpID0+IHRoaXMuc2RmU2l6ZXNbIHRoaXMuYXJyYXlQb3NpdGlvbnMuc2RmKysgXSA9IHNkZiApO1xuXG4gICAgICBwcmV2X2NoYXIgPSBzY2hhcjtcbiAgICAgIGNwb3MgPSByZWN0LnBvcztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVjdCA6IFsgcG9zWzBdLCBwb3NbMV0sIHhfbWF4IC0gcG9zWzBdLCBwb3NbMV0gLSBjcG9zWzFdICsgZm9udF9tZXRyaWNzLmxpbmVIZWlnaHQgXSxcbiAgICAgIHN0cmluZ19wb3MgOiBzdHJfcG9zLFxuICAgICAgLy9hcnJheV9wb3MgOiBhcnJheV9wb3NcbiAgICB9XG5cbiAgfVxuXG4gIGZvbnRNZXRyaWNzKGZvbnRTaXplLCBtb3JlTGluZUdhcCA9IDAuMikge1xuXG4gICAgY29uc3Qge2NhcF9oZWlnaHQsIHhfaGVpZ2h0LCBhc2NlbnQ6IGZvbnRBc2NlbnQgLCBkZXNjZW50LCBsaW5lX2dhcH0gPSB0aGlzLmZvbnQ7XG5cbiAgICBjb25zdCBjYXBTY2FsZSA9IHRoaXMuc3R5bGUuZm9udFNpemUgLyBjYXBfaGVpZ2h0O1xuICAgIGNvbnN0IGxvd1NjYWxlID0gTWF0aC5yb3VuZCggeF9oZWlnaHQgKiBjYXBTY2FsZSApIC8geF9oZWlnaHQ7XG4gICAgY29uc3QgYXNjZW50ID0gTWF0aC5yb3VuZCggZm9udEFzY2VudCAqIGNhcFNjYWxlICk7XG4gICAgbGV0IGxpbmVIZWlnaHQgPSBNYXRoLnJvdW5kKCBjYXBTY2FsZSAqICggZm9udEFzY2VudCArIGRlc2NlbnQgKyBsaW5lX2dhcCApICsgbW9yZUxpbmVHYXApO1xuXG4gICAgaWYgKHRoaXMuc3R5bGUubGluZUhlaWdodCA+IDApXG4gICAgICBsaW5lSGVpZ2h0ID0gdGhpcy5zdHlsZS5saW5lSGVpZ2h0O1xuICAgIGVsc2VcbiAgICAgIHRoaXMuc3R5bGUubGluZUhlaWdodCA9IGxpbmVIZWlnaHQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY2FwU2NhbGUgICA6IGNhcFNjYWxlLFxuICAgICAgbG93U2NhbGUgICA6IGxvd1NjYWxlLFxuICAgICAgYXNjZW50ICAgICAgOiBhc2NlbnQsXG4gICAgICBsaW5lSGVpZ2h0IDogbGluZUhlaWdodFxuICAgIH07XG4gIH1cblxuICBjaGFyUmVjdCggcG9zLCBmb250LCBmb250X21ldHJpY3MsIGZvbnRfY2hhciwga2VybiA9IDAuMCApIHtcblxuICAgIC8vIExvdyBjYXNlIGNoYXJhY3RlcnMgaGF2ZSBmaXJzdCBiaXQgc2V0IGluICdmbGFncydcbiAgICB2YXIgbG93Y2FzZSA9ICggZm9udF9jaGFyLmZsYWdzICYgMSApID09PSAxO1xuXG4gICAgLy8gUGVuIHBvc2l0aW9uIGlzIGF0IHRoZSB0b3Agb2YgdGhlIGxpbmUsIFkgZ29lcyB1cFxuICAgIHZhciBiYXNlbGluZSA9IHBvc1sxXSAtIGZvbnRfbWV0cmljcy5hc2NlbnQ7XG5cbiAgICAvLyBMb3cgY2FzZSBjaGFycyB1c2UgdGhlaXIgb3duIHNjYWxlXG4gICAgdmFyIHNjYWxlID0gbG93Y2FzZSA/IGZvbnRfbWV0cmljcy5sb3dTY2FsZSA6IGZvbnRfbWV0cmljcy5jYXBTY2FsZTtcblxuICAgIC8vIExheWluZyBvdXQgdGhlIGdseXBoIHJlY3RhbmdsZVxuICAgIHZhciBnICAgICAgPSBmb250X2NoYXIucmVjdDtcbiAgICB2YXIgYm90dG9tID0gYmFzZWxpbmUgLSBzY2FsZSAqICggZm9udC5kZXNjZW50ICsgZm9udC5peSApO1xuICAgIHZhciB0b3AgICAgPSBib3R0b20gICArIHNjYWxlICogKCBmb250LnJvd19oZWlnaHQgKTtcbiAgICB2YXIgbGVmdCAgID0gcG9zWzBdICAgKyBzY2FsZSAqICggZm9udF9jaGFyLmJlYXJpbmdfeCArIGtlcm4gLSBmb250Lml4ICk7XG4gICAgdmFyIHJpZ2h0ICA9IGxlZnQgICAgICsgc2NhbGUgKiAoIGdbMl0gLSBnWzBdICk7XG4gICAgdmFyIHAgPSBbIGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSBdO1xuXG4gICAgLy8gQWR2YW5jaW5nIHBlbiBwb3NpdGlvblxuICAgIHZhciBuZXdfcG9zX3ggPSBwb3NbMF0gKyBzY2FsZSAqICggZm9udF9jaGFyLmFkdmFuY2VfeCApO1xuXG4gICAgLy8gU2lnbmVkIGRpc3RhbmNlIGZpZWxkIHNpemUgaW4gc2NyZWVuIHBpeGVsc1xuICAgIHZhciBzZGZfc2l6ZSAgPSAyLjAgKiBmb250Lml5ICogc2NhbGU7XG5cbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbXG4gICAgICBwWzBdLCBwWzNdLCAvLyBsZWZ0IGJvdHRvbSxcbiAgICAgIHBbMl0sIHBbM10sIC8vIHJpZ2h0IGJvdHRvbSxcbiAgICAgIHBbMl0sIHBbMV0sIC8vIHJpZ2h0IHRvcFxuICAgICAgcFswXSwgcFsxXSwgLy8gbGVmdCB0b3BcbiAgICBdO1xuXG4gICAgY29uc3QgdXZzID0gW1xuICAgICAgZ1swXSwgZ1sxXSwgLy8gbGVmdCB0b3BcbiAgICAgIGdbMl0sIGdbMV0sIC8vIHJpZ2h0IHRvcFxuICAgICAgZ1syXSwgZ1szXSwgLy8gcmlnaHQgYm90dG9tLFxuICAgICAgZ1swXSwgZ1szXSwgLy8gbGVmdCBib3R0b20sXG4gICAgXTtcblxuICAgIGNvbnN0IHNkZlNpemVzID0gW1xuICAgICAgc2RmX3NpemUsXG4gICAgICBzZGZfc2l6ZSxcbiAgICAgIHNkZl9zaXplLFxuICAgICAgc2RmX3NpemUsXG4gICAgXTtcblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbnMsXG4gICAgICB1dnMsXG4gICAgICBzZGZTaXplcyxcbiAgICAgIHBvczogWyBuZXdfcG9zX3gsIHBvc1sxXSBdXG4gICAgfTtcblxuICAgIC8vcmV0dXJuIHsgdmVydGljZXMgOiB2ZXJ0aWNlcywgcG9zIDogWyBuZXdfcG9zX3gsIHBvc1sxXSBdIH07XG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBBd2Vzb21lVGV4dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZXh0LmpzIiwiXG5jbGFzcyBUZXh0TGF5b3V0IHtcblxuICB0ZXh0ID0gXCJcIjtcbiAgZm9udCA9IG51bGw7XG4gIG1ldHJpY3MgPSBudWxsO1xuICBmb250U2l6ZSA9IDIwO1xuICBhbGlnbiA9IFwibGVmdFwiO1xuICBzdGFydFggPSAwO1xuICBzdGFydFkgPSAwO1xuICB3cmFwcGVyV2lkdGggPSAxMDA7XG4gIHdyYXBXb3JkcyA9IGZhbHNlO1xuICB3b3Jkc01ldHJpY3MgPSBbXTtcbiAgbGV0dGVyc0NvdW50ID0gMDtcbiAgaGVpZ2h0ID0gMDtcbiAgbGluZXNDb3VudCA9IDA7XG4gIGxpbmVIZWlnaHQgPSAwO1xuICBnbHlwaHMgPSBbXTtcbiAgb3duZXIgPSBudWxsO1xuXG5cbiAgY29uc3RydWN0b3Iob3duZXIsIGNvbmZpZykge1xuXG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgIHRoaXMudGV4dCA9IG93bmVyLnRleHQ7XG4gICAgdGhpcy5mb250ID0gb3duZXIuZm9udDtcbiAgICB0aGlzLmZvbnRTaXplID0gY29uZmlnLmZvbnRTaXplO1xuICAgIHRoaXMud3JhcFdvcmRzID0gY29uZmlnLndyYXBXb3JkcztcbiAgICB0aGlzLndyYXBwZXJXaWR0aCA9IGNvbmZpZy53cmFwcGVyV2lkdGg7XG4gICAgdGhpcy5saW5lSGVpZ2h0ID0gY29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgdGhpcy5hbGlnbiA9IGNvbmZpZy5hbGlnbjtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy50ZXh0ID0gdGhpcy5vd25lci50ZXh0O1xuICAgIHRoaXMuZm9udCA9IHRoaXMub3duZXIuZm9udDtcblxuICAgIHRoaXMubGV0dGVyc0NvdW50ID0gdGhpcy50ZXh0LnNwbGl0KFwiXCIpLmxlbmd0aDtcbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLmZvbnRNZXRyaWNzKHRoaXMuZm9udCwgMC4wKTtcbiAgICB0aGlzLnN0YXJ0WSA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xuICAgIHRoaXMuY2FsY3VsYXRlV29yZHNQb3NpdGlvbnMoKTtcblxuICAgIHRoaXMuZ2x5cGhzID0gW107XG5cbiAgICB0aGlzLndvcmRzTWV0cmljcy5mb3JFYWNoICh3b3JkID0+IHtcbiAgICAgIHRoaXMuZ2V0R2x5cGhzKHdvcmQud29yZCwgW3dvcmQueCwgd29yZC55XSk7XG4gICAgfSk7XG4gIH1cblxuICBmb250TWV0cmljcyhmb250U2l6ZSwgbW9yZUxpbmVHYXAgPSAwLjIpIHtcblxuICAgIGNvbnN0IHtjYXBfaGVpZ2h0LCB4X2hlaWdodCwgYXNjZW50OiBmb250QXNjZW50ICwgZGVzY2VudCwgbGluZV9nYXB9ID0gdGhpcy5mb250O1xuXG4gICAgY29uc3QgY2FwU2NhbGUgPSB0aGlzLmZvbnRTaXplIC8gY2FwX2hlaWdodDtcbiAgICBjb25zdCBsb3dTY2FsZSA9IE1hdGgucm91bmQoIHhfaGVpZ2h0ICogY2FwU2NhbGUgKSAvIHhfaGVpZ2h0O1xuICAgIGNvbnN0IGFzY2VudCA9IE1hdGgucm91bmQoIGZvbnRBc2NlbnQgKiBjYXBTY2FsZSApO1xuICAgIGxldCBsaW5lSGVpZ2h0ID0gTWF0aC5yb3VuZCggY2FwU2NhbGUgKiAoIGZvbnRBc2NlbnQgKyBkZXNjZW50ICsgbGluZV9nYXAgKSArIG1vcmVMaW5lR2FwICk7XG5cbiAgICBpZiAodGhpcy5saW5lSGVpZ2h0ID4gMClcbiAgICAgIGxpbmVIZWlnaHQgPSB0aGlzLmxpbmVIZWlnaHQ7XG4gICAgZWxzZVxuICAgICAgdGhpcy5saW5lSGVpZ2h0ID0gbGluZUhlaWdodDtcblxuICAgIHJldHVybiB7XG4gICAgICBjYXBTY2FsZSAgIDogY2FwU2NhbGUsXG4gICAgICBsb3dTY2FsZSAgIDogbG93U2NhbGUsXG4gICAgICBhc2NlbnQgICAgICA6IGFzY2VudCxcbiAgICAgIGxpbmVIZWlnaHQgOiBsaW5lSGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIGNoYXJSZWN0KCBwb3MsIGZvbnRfY2hhciwga2VybiA9IDAuMCApIHtcblxuICAgIC8vIExvdyBjYXNlIGNoYXJhY3RlcnMgaGF2ZSBmaXJzdCBiaXQgc2V0IGluICdmbGFncydcbiAgICB2YXIgbG93Y2FzZSA9ICggZm9udF9jaGFyLmZsYWdzICYgMSApID09PSAxO1xuXG4gICAgLy8gUGVuIHBvc2l0aW9uIGlzIGF0IHRoZSB0b3Agb2YgdGhlIGxpbmUsIFkgZ29lcyB1cFxuICAgIHZhciBiYXNlbGluZSA9IHBvc1sxXSAtIHRoaXMubWV0cmljcy5hc2NlbnQ7XG5cbiAgICAvLyBMb3cgY2FzZSBjaGFycyB1c2UgdGhlaXIgb3duIHNjYWxlXG4gICAgdmFyIHNjYWxlID0gbG93Y2FzZSA/IHRoaXMubWV0cmljcy5sb3dTY2FsZSA6IHRoaXMubWV0cmljcy5jYXBTY2FsZTtcblxuICAgIC8vIExheWluZyBvdXQgdGhlIGdseXBoIHJlY3RhbmdsZVxuICAgIHZhciBnICAgICAgPSBmb250X2NoYXIucmVjdDtcbiAgICB2YXIgYm90dG9tID0gYmFzZWxpbmUgLSBzY2FsZSAqICggdGhpcy5mb250LmRlc2NlbnQgKyB0aGlzLmZvbnQuaXkgKTtcbiAgICB2YXIgdG9wICAgID0gYm90dG9tICAgKyBzY2FsZSAqICggdGhpcy5mb250LnJvd19oZWlnaHQgKTtcbiAgICB2YXIgbGVmdCAgID0gcG9zWzBdICAgKyBzY2FsZSAqICggZm9udF9jaGFyLmJlYXJpbmdfeCArIGtlcm4gLSB0aGlzLmZvbnQuaXggKTtcbiAgICB2YXIgcmlnaHQgID0gbGVmdCAgICAgKyBzY2FsZSAqICggZ1syXSAtIGdbMF0gKTtcbiAgICB2YXIgcCA9IFsgbGVmdCwgdG9wLCByaWdodCwgYm90dG9tIF07XG5cbiAgICAvLyBBZHZhbmNpbmcgcGVuIHBvc2l0aW9uXG4gICAgdmFyIG5ld19wb3NfeCA9IHBvc1swXSArIHNjYWxlICogKCBmb250X2NoYXIuYWR2YW5jZV94ICk7XG5cbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbXG4gICAgICBwWzBdLCBwWzNdLCAvLyBsZWZ0IGJvdHRvbSxcbiAgICAgIHBbMl0sIHBbM10sIC8vIHJpZ2h0IGJvdHRvbSxcbiAgICAgIHBbMl0sIHBbMV0sIC8vIHJpZ2h0IHRvcFxuICAgICAgcFswXSwgcFsxXSwgLy8gbGVmdCB0b3BcbiAgICBdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9ucyxcbiAgICAgIHBvczogWyBuZXdfcG9zX3gsIHBvc1sxXSBdLFxuICAgICAgbWV0cmljczoge3g6IHBvc1swXSwgeTogcG9zWzFdLCB3aWR0aDogc2NhbGUgKiBmb250X2NoYXIuYWR2YW5jZV94IH1cbiAgICB9O1xuICB9XG5cbiAgZ2V0U3RyaW5nU2l6ZShzdHJpbmcpIHtcblxuICAgIGxldCB3aWR0aCA9IDA7XG4gICAgbGV0IGhlaWdodCA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xuXG4gICAgY29uc3QgY2hhcnMgPSBbLi4uc3RyaW5nXTtcblxuICAgIC8vIEl0ZXJhdGUgdGhvdWdodCB0aGUgY2hhcnMsIGNhbGN1bGF0ZSBwb3NpdGlvblxuICAgIGNoYXJzLmZvckVhY2goY2hhciA9PiB7XG4gICAgICBsZXQgZm9udF9jaGFyID0gdGhpcy5mb250LmNoYXJzWyBjaGFyIF07XG5cbiAgICAgIC8qaWYgKGNoYXIgPT09IFwiIFwiKSB7XG4gICAgICAgIHdpZHRoICs9IHRoaXMuZm9udC5zcGFjZV9hZHZhbmNlICogdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9Ki9cblxuICAgICAgLy8gR2V0IGNoYXIgbWV0cmljc1xuICAgICAgbGV0IGNoYXJSZWN0ID0gdGhpcy5jaGFyUmVjdChbd2lkdGgsMF0sIGZvbnRfY2hhciwgMC4yKTtcbiAgICAgIHdpZHRoID0gY2hhclJlY3QucG9zWzBdO1xuXG4gICAgfSk7XG5cbiAgICByZXR1cm4ge3dpZHRoLCBoZWlnaHR9O1xuXG4gIH1cblxuICBjYWxjdWxhdGVXb3Jkc1Bvc2l0aW9ucygpIHtcblxuICAgIGNvbnN0IHdvcmRzID0gdGhpcy50ZXh0LnNwbGl0KFwiIFwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICB3b3Jkc1tpXSA9IHdvcmRzW2ldICsgXCIgXCI7XG4gICAgfVxuXG4gICAgdGhpcy53b3Jkc01ldHJpY3MgPSBbXTtcblxuICAgIC8vIEluaXRpYWwgcG9zaXRpb25cbiAgICBsZXQgeCA9IHRoaXMuc3RhcnRYO1xuICAgIGxldCB5ID0gdGhpcy5zdGFydFk7XG5cbiAgICAvLyBDYWxjdWxhdGUgd29yZHMgcG9zaXRpb25zIG9uIGxpbmVzXG4gICAgd29yZHMuZm9yRWFjaCh3b3JkID0+IHtcbiAgICAgIGNvbnN0IHdvcmRTaXplID0gdGhpcy5nZXRTdHJpbmdTaXplKHdvcmQpO1xuICAgICAgaWYgKHggKyB3b3JkU2l6ZS53aWR0aCA+IHRoaXMuc3RhcnRYICsgdGhpcy53cmFwcGVyV2lkdGggJiYgdGhpcy53cmFwV29yZHMpIHtcbiAgICAgICAgeCA9IHRoaXMuc3RhcnRYO1xuICAgICAgICB5ICs9IHdvcmRTaXplLmhlaWdodDtcbiAgICAgIH1cblxuICAgICAgdGhpcy53b3Jkc01ldHJpY3MucHVzaCh7Li4ud29yZFNpemUsIHgsIHksIHdvcmR9KTtcblxuICAgICAgLy94ICs9IHdvcmRTaXplLndpZHRoICsgdGhpcy5mb250LnNwYWNlX2FkdmFuY2UgKiB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XG4gICAgICB4ICs9IHdvcmRTaXplLndpZHRoO1xuICAgIH0pO1xuXG4gICAgLy8gQ2FsY3VsYXRlIGxpbmVzIGNvdW50XG4gICAgdGhpcy5saW5lc0NvdW50ID0gKHkgLSB0aGlzLnN0YXJ0WSkgLyB0aGlzLm1ldHJpY3MubGluZUhlaWdodCArIDE7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmxpbmVzQ291bnQgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcblxuICAgIC8vIENoYW5nZSBhbGlnbiBUT0RPIG9wdGltaXNlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpbmVzQ291bnQ7ICsraSkge1xuICAgICAgY29uc3Qgd29yZHNPbkxpbmUgPSB0aGlzLndvcmRzTWV0cmljcy5maWx0ZXIod29yZCA9PiB3b3JkLnkgPT09IHRoaXMuc3RhcnRZICsgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCkpXG5cbiAgICAgIGNvbnN0IGxhc3RXb3JkID0gd29yZHNPbkxpbmVbd29yZHNPbkxpbmUubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmIChsYXN0V29yZCkge1xuICAgICAgICBjb25zdCBmcmVlU3BhY2UgPSAodGhpcy5zdGFydFggKyB0aGlzLndyYXBwZXJXaWR0aCkgLSAobGFzdFdvcmQueCArIGxhc3RXb3JkLndpZHRoKTtcblxuICAgICAgICBsZXQgbGVmdE9mZnNldCA9IDA7XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLmFsaWduKSB7XG4gICAgICAgICAgY2FzZSBcImNlbnRlclwiOlxuICAgICAgICAgICAgbGVmdE9mZnNldCA9IGZyZWVTcGFjZSAvIDI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgIGxlZnRPZmZzZXQgPSBmcmVlU3BhY2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndvcmRzTWV0cmljcy5mb3JFYWNoKHdvcmQgPT4ge1xuICAgICAgICAgIGlmICh3b3JkLnkgPT09IHRoaXMuc3RhcnRZICsgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCkpIHtcbiAgICAgICAgICAgIHdvcmQueCArPSBsZWZ0T2Zmc2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRHbHlwaHMoIHN0cmluZywgcG9zKSB7XG4gICAgbGV0IHByZXZfY2hhciA9IFwiIFwiOyAgLy8gVXNlZCB0byBjYWxjdWxhdGUga2VybmluZ1xuICAgIGxldCBjcG9zICAgICAgPSBwb3M7ICAvLyBDdXJyZW50IHBlbiBwb3NpdGlvblxuICAgIGxldCB4X21heCAgICAgPSAwLjA7ICAvLyBNYXggd2lkdGggLSB1c2VkIGZvciBib3VuZGluZyBib3hcbiAgICBsZXQgc2NhbGUgICAgID0gdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xuXG4gICAgbGV0IHN0cl9wb3MgPSAwO1xuXG4gICAgZm9yKDs7KSB7XG4gICAgICBpZiAoIHN0cl9wb3MgPT09IHN0cmluZy5sZW5ndGggKSBicmVhaztcblxuICAgICAgdmFyIHNjaGFyID0gc3RyaW5nWyBzdHJfcG9zIF07XG4gICAgICBzdHJfcG9zKys7XG5cbiAgICAgIGlmICggc2NoYXIgPT09IFwiXFxuXCIgKSB7XG4gICAgICAgIGlmICggY3Bvc1swXSA+IHhfbWF4ICkgeF9tYXggPSBjcG9zWzBdOyAvLyBFeHBhbmRpbmcgdGhlIGJvdW5kaW5nIHJlY3RcbiAgICAgICAgY3Bvc1swXSAgPSBwb3NbMF07XG4gICAgICAgIGNwb3NbMV0gLT0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XG4gICAgICAgIHByZXZfY2hhciA9IFwiIFwiO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCBzY2hhciA9PT0gXCIgXCIgKSB7XG4gICAgICAgIC8vc2NoYXIgPSBcIl9cIlxuICAgICAgICAvL2Nwb3NbMF0gKz0gdGhpcy5mb250LnNwYWNlX2FkdmFuY2UgKiBzY2FsZTtcbiAgICAgICAgcHJldl9jaGFyID0gXCIgXCI7XG4gICAgICAgIC8vY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBmb250X2NoYXIgPSB0aGlzLmZvbnQuY2hhcnNbIHNjaGFyIF07XG4gICAgICBpZiAoICFmb250X2NoYXIgKSB7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1YnN0aXR1dGluZyB1bmF2YWlsYWJsZSBjaGFyYWN0ZXJzIHdpdGggJz8nXG4gICAgICAgIHNjaGFyID0gXCI/XCI7XG4gICAgICAgIGZvbnRfY2hhciA9IHRoaXMuZm9udC5jaGFyc1sgXCI/XCIgXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGtlcm4gPSB0aGlzLmZvbnQua2VyblsgcHJldl9jaGFyICsgc2NoYXIgXTtcbiAgICAgIGlmICggIWtlcm4gKSBrZXJuID0gMC4wO1xuXG4gICAgICAvLyBjYWxjdWxhdGluZyB0aGUgZ2x5cGggcmVjdGFuZ2xlIGFuZCBjb3B5aW5nIGl0IHRvIHRoZSB2ZXJ0ZXggYXJyYXlcbiAgICAgIHZhciByZWN0ID0gdGhpcy5jaGFyUmVjdCggY3BvcywgZm9udF9jaGFyLCBrZXJuICk7XG5cbiAgICAgIHByZXZfY2hhciA9IHNjaGFyO1xuICAgICAgY3BvcyA9IHJlY3QucG9zO1xuXG4gICAgICB0aGlzLmdseXBocy5wdXNoKHtcbiAgICAgICAgbGV0dGVyOiBzY2hhcixcbiAgICAgICAgdmVydGljZXM6IHJlY3QucG9zaXRpb25zLFxuICAgICAgICBwb3NpdGlvbjogcmVjdC5wb3MsXG4gICAgICAgIG1ldHJpY3M6IHJlY3QubWV0cmljc1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVGV4dExheW91dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sYXlvdXQuanMiLCJjb25zdCBjcmVhdGVJbmRpY2VzID0gcmVxdWlyZShcInF1YWQtaW5kaWNlc1wiKVxyXG5cclxuY2xhc3MgU2VsZWN0IHtcclxuXHJcbiAgcmFuZ2UgPSBbMCwwXTtcclxuICBtZXRyaWNzID0gbnVsbDtcclxuICBsYXlvdXQgPSBudWxsO1xyXG4gIGRpcnR5ID0gZmFsc2U7XHJcbiAgaW5kZXhCdWZmZXIgPSBmYWxzZTtcclxuICBvd25lciA9IG51bGw7XHJcblxyXG4gIGNvbnN0cnVjdG9yKG93bmVyKSB7XHJcbiAgICB0aGlzLm93bmVyID0gb3duZXI7XHJcbiAgICB0aGlzLm1ldHJpY3MgPSBvd25lci5tZXRyaWNzO1xyXG4gICAgdGhpcy5sYXlvdXQgPSBvd25lci5sYXlvdXQ7XHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLm93bmVyLm1ldHJpY3M7XHJcbiAgICB0aGlzLmxheW91dCA9IHRoaXMub3duZXIubGF5b3V0O1xyXG5cclxuICAgIC8vIFZlcnRpY2VzIGFycmF5IGZvciBhbGwgc2VsZWN0ZWQgbGluZXNcclxuICAgIHRoaXMudmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubGF5b3V0LmxpbmVzQ291bnQgKiA0ICogMik7XHJcblxyXG4gICAgaWYgKHRoaXMucmFuZ2VbMV0gIT09IG51bGwpXHJcbiAgICB0aGlzLmJ1aWxkVmVydGljZXMoKTtcclxuXHJcbiAgICB0aGlzLmluZGljZXMgPSBjcmVhdGVJbmRpY2VzKHtcclxuICAgICAgY2xvY2t3aXNlOiB0cnVlLFxyXG4gICAgICB0eXBlOiAndWludDE2JyxcclxuICAgICAgY291bnQ6dGhpcy5sYXlvdXQubGluZXNDb3VudFxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XHJcbiAgICB0aGlzLmluZGV4QnVmZmVyID0gdHJ1ZTtcclxuICB9XHJcblxyXG4gIHNldFJhbmdlKHN0YXJ0ID0gbnVsbCwgZW5kID0gbnVsbCkge1xyXG5cclxuICAgIGNvbnN0IHtnbHlwaHN9ID0gdGhpcy5vd25lci5sYXlvdXQ7XHJcblxyXG4gICAgaWYgKHN0YXJ0ID09PSBudWxsKSBzdGFydCA9IHRoaXMucmFuZ2VbMF07XHJcbiAgICBpZiAoZW5kID09PSBudWxsKSBlbmQgPSB0aGlzLnJhbmdlWzFdO1xyXG5cclxuICAgIGlmIChzdGFydCA8IDApIHN0YXJ0ID0gMDtcclxuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwO1xyXG5cclxuICAgIGlmIChzdGFydCA+IGdseXBocy5sZW5ndGggLTEpc3RhcnQgPSBnbHlwaHMubGVuZ3RoIC0gMTtcclxuICAgIGlmIChlbmQgPiBnbHlwaHMubGVuZ3RoIC0gMSkgZW5kID0gZ2x5cGhzLmxlbmd0aCAtIDE7XHJcblxyXG4gICAgaWYgKGVuZCA9PT0gZmFsc2UpIGVuZCA9IG51bGw7XHJcblxyXG4gICAgdGhpcy5yYW5nZSA9IFtzdGFydCwgZW5kXTtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBidWlsZFZlcnRpY2VzKCkge1xyXG5cclxuICAgIC8vIFNlbGVjdCByYW5nZVxyXG4gICAgbGV0IHN0YXJ0ID0gdGhpcy5sYXlvdXQuZ2x5cGhzW01hdGgubWluLmFwcGx5KG51bGwsdGhpcy5yYW5nZSldO1xyXG4gICAgbGV0IGVuZCA9IHRoaXMubGF5b3V0LmdseXBoc1tNYXRoLm1heC5hcHBseShudWxsLHRoaXMucmFuZ2UpXTtcclxuXHJcblxyXG4gICAgLy8gSXRlcmF0ZSB0aG91Z2h0IGFsbCBsaW5lc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxheW91dC5saW5lc0NvdW50OyArK2kpIHtcclxuICAgICAgbGV0IGxldHRlckNvdW50ID0gMDsgLy8gbGV0dGVycyBwYXNzZWRcclxuICAgICAgbGV0IGZpcnN0TGV0dGVyID0gbnVsbDsgLy8gZmlyc3QgbGV0dGVyIG9uIHRoaXMgbGluZVxyXG4gICAgICBsZXQgbGFzdExldHRlciA9IG51bGw7IC8vIGxhc3QgbGV0dGVyIG9uIHRoaXMgbGluZVxyXG5cclxuXHJcblxyXG4gICAgICBpZiAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgPCBzdGFydC5wb3NpdGlvblsxXSkgY29udGludWU7XHJcbiAgICAgIGlmIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyB0aGlzLm1ldHJpY3MubGluZUhlaWdodCA+IGVuZC5wb3NpdGlvblsxXSkgY29udGludWU7XHJcblxyXG4gICAgICAvLyBUYWtlIGV2ZXJ5IHdvcmQsIGlmIGl0J3MgbGFzdCBvciBmaXJzdCBvbiBsaW5lIC0gY2hhbmdlIGJvdW5kcyBsZXR0ZXJzXHJcbiAgICAgIHRoaXMubGF5b3V0LndvcmRzTWV0cmljcy5tYXAod29yZCA9PiB7XHJcblxyXG4gICAgICAgIGlmICh3b3JkLnkgPT09IHRoaXMubGF5b3V0LnN0YXJ0WSArIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQpKSB7XHJcbiAgICAgICAgICBpZiAoZmlyc3RMZXR0ZXIgPT09IG51bGwpIGZpcnN0TGV0dGVyID0gbGV0dGVyQ291bnQ7XHJcbiAgICAgICAgICBsYXN0TGV0dGVyID0gbGV0dGVyQ291bnQgKyB3b3JkLndvcmQubGVuZ3RoIC0gMTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldHRlckNvdW50ICs9IHdvcmQud29yZC5sZW5ndGg7XHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgLy8gQm91bmRzIGxldHRlcnMgZm9yIGN1cnJlbnQgbGluZVxyXG4gICAgICBsZXQgc3RhcnRMaW5lTGV0dGVyID0gdGhpcy5sYXlvdXQuZ2x5cGhzW2ZpcnN0TGV0dGVyXTtcclxuICAgICAgbGV0IGVuZExpbmVMZXR0ZXIgPSB0aGlzLmxheW91dC5nbHlwaHNbbGFzdExldHRlcl07XHJcblxyXG5cclxuXHJcbiAgICAgIC8vIElmIHRoZSBzdGFydCBvciBlbmQgcmFuZ2UgaXMgb24gdGhpcyBsaW5lLCBjaGFuZ2UgYm91bmRzIGZvciB0aGVtXHJcbiAgICAgIGlmIChzdGFydC5wb3NpdGlvblsxXSA9PT0gIHN0YXJ0TGluZUxldHRlci5wb3NpdGlvblsxXSkgc3RhcnRMaW5lTGV0dGVyID0gc3RhcnQ7XHJcbiAgICAgIGlmIChlbmQucG9zaXRpb25bMV0gPT09IGVuZExpbmVMZXR0ZXIucG9zaXRpb25bMV0pIGVuZExpbmVMZXR0ZXIgPSBlbmQ7XHJcblxyXG4gICAgICAvLyBXZSB1c2Ugb2Zmc2V0IHRvIGF2b2lkIHNlbGVjdHMgb3ZlcmxhcHBpbmdcclxuICAgICAgY29uc3Qgb2Zmc2V0ID0gKHRoaXMubWV0cmljcy5saW5lSGVpZ2h0IC0gdGhpcy5tZXRyaWNzLmFzY2VudCkgLyAyO1xyXG5cclxuICAgICAgLy8gQWRkIHBvc2l0aW9ucyB0byBhcnJheVxyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCldID0gc3RhcnRMaW5lTGV0dGVyLnZlcnRpY2VzWzBdO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyAxXSA9IHN0YXJ0TGluZUxldHRlci52ZXJ0aWNlc1sxXSArIG9mZnNldDtcclxuXHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDJdID0gZW5kTGluZUxldHRlci52ZXJ0aWNlc1syXTtcclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgM10gPSBlbmRMaW5lTGV0dGVyLnZlcnRpY2VzWzNdICAgKyBvZmZzZXQ7XHJcblxyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyA0XSA9IGVuZExpbmVMZXR0ZXIudmVydGljZXNbNF07XHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDVdID0gZW5kTGluZUxldHRlci52ZXJ0aWNlc1s1XSAgLSBvZmZzZXQ7XHJcblxyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyA2XSA9IHN0YXJ0TGluZUxldHRlci52ZXJ0aWNlc1s2XTtcclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgN10gPSBzdGFydExpbmVMZXR0ZXIudmVydGljZXNbN10gIC0gb2Zmc2V0O1xyXG5cclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBnZXRDbG9zZXN0R2x5cGgoeCwgeSkge1xyXG5cclxuICAgIGNvbnN0IHsgZ2x5cGhzIH0gPSB0aGlzLm93bmVyLmxheW91dDtcclxuXHJcbiAgICBjb25zdCBsaW5lSGVpZ2h0ID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XHJcbiAgICBjb25zdCBzZWxlY3RpbmdMaW5lID0gTWF0aC5mbG9vcih5IC8gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQpO1xyXG4gICAgY29uc3Qgc2VsZWN0aW5nTGluZVkgPSBzZWxlY3RpbmdMaW5lICogbGluZUhlaWdodDtcclxuICAgIGxldCBsYXN0R2x5cGhPbkxpbmUgPSBnbHlwaHNbZ2x5cGhzLmxlbmd0aCAtIDFdO1xyXG4gICAgbGV0IGZpcnN0R2x5cGhPbkxpbmUgPSBudWxsO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2x5cGhzLmxlbmd0aCA7ICsraSkge1xyXG5cclxuICAgICAgbGV0IGdseXBoID0gZ2x5cGhzW2ldO1xyXG5cclxuICAgICAgaWYgKGdseXBoLm1ldHJpY3MueSA9PT0gc2VsZWN0aW5nTGluZVkgKyBsaW5lSGVpZ2h0KSB7XHJcblxyXG4gICAgICAgIGxhc3RHbHlwaE9uTGluZSA9IGdseXBoO1xyXG5cclxuICAgICAgICBpZiAoeCA8IGdseXBoLm1ldHJpY3MueCArIGdseXBoLm1ldHJpY3Mud2lkdGggLyAyKSB7XHJcblxyXG4gICAgICAgICAgaWYgKGkgPT09IDApIHJldHVybiAtMTtcclxuICAgICAgICAgIHJldHVybiBnbHlwaHNbaSAtIDFdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsYXN0R2x5cGhPbkxpbmU7XHJcblxyXG4gIH1cclxuXHJcbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcclxuXHJcbiAgICAvLyBPbmx5IGxlZnQgbW91c2UgYnV0dG9uXHJcbiAgICBpZiAoZXZlbnQuZGF0YS5idXR0b24gIT09IDApIHJldHVybjtcclxuXHJcbiAgICBsZXQgcG9zaXRpb24gPSBldmVudC5kYXRhLmdsb2JhbDtcclxuXHJcbiAgICBwb3NpdGlvbi54IC09IHRoaXMub3duZXIucG9zaXRpb24ueDtcclxuICAgIHBvc2l0aW9uLnkgLT0gdGhpcy5vd25lci5wb3NpdGlvbi55O1xyXG5cclxuICAgIHBvc2l0aW9uLnggPSBwb3NpdGlvbi54IC8gIHRoaXMub3duZXIuc2NhbGUueDtcclxuICAgIHBvc2l0aW9uLnkgPSBwb3NpdGlvbi55IC8gdGhpcy5vd25lci5zY2FsZS55O1xyXG5cclxuICAgIGNvbnN0IGNsb3Nlc3RMZXR0ZXIgPSB0aGlzLmdldENsb3Nlc3RHbHlwaChwb3NpdGlvbi54ICwgcG9zaXRpb24ueSk7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLm93bmVyLmxheW91dC5nbHlwaHMuaW5kZXhPZihjbG9zZXN0TGV0dGVyKTtcclxuXHJcbiAgICB0aGlzLnNldFJhbmdlKGluZGV4ICsgMSwgZmFsc2UgKTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VNb3ZlKGV2ZW50KSB7XHJcblxyXG4gICAgbGV0IHBvc2l0aW9uID0gZXZlbnQuZGF0YS5nbG9iYWw7XHJcblxyXG4gICAgcG9zaXRpb24ueCAtPSB0aGlzLm93bmVyLnBvc2l0aW9uLng7XHJcbiAgICBwb3NpdGlvbi55IC09IHRoaXMub3duZXIucG9zaXRpb24ueTtcclxuXHJcbiAgICBwb3NpdGlvbi54ID0gcG9zaXRpb24ueCAvIHRoaXMub3duZXIuc2NhbGUueDtcclxuICAgIHBvc2l0aW9uLnkgPSBwb3NpdGlvbi55IC8gdGhpcy5vd25lci5zY2FsZS55O1xyXG5cclxuICAgIGNvbnN0IGNsb3Nlc3RMZXR0ZXIgPSB0aGlzLmdldENsb3Nlc3RHbHlwaChwb3NpdGlvbi54ICAsIHBvc2l0aW9uLnkpO1xyXG4gICAgbGV0IGluZGV4ID0gdGhpcy5vd25lci5sYXlvdXQuZ2x5cGhzLmluZGV4T2YoY2xvc2VzdExldHRlcik7XHJcblxyXG4gICAgdGhpcy5zZXRSYW5nZShudWxsLCBpbmRleCArIDEpO1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZVVwKGV2ZW50KSB7XHJcblxyXG4gICAgLy8gT25seSBsZWZ0IG1vdXNlIGJ1dHRvblxyXG4gICAgaWYgKGV2ZW50LmRhdGEuYnV0dG9uICE9PSAwKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHBvc2l0aW9uID0gZXZlbnQuZGF0YS5nbG9iYWw7XHJcblxyXG4gICAgcG9zaXRpb24ueCAtPSB0aGlzLm93bmVyLnBvc2l0aW9uLng7XHJcbiAgICBwb3NpdGlvbi55IC09IHRoaXMub3duZXIucG9zaXRpb24ueTtcclxuXHJcbiAgICBwb3NpdGlvbi54ID0gcG9zaXRpb24ueCAvIHRoaXMub3duZXIuc2NhbGUueDtcclxuICAgIHBvc2l0aW9uLnkgPSBwb3NpdGlvbi55IC8gdGhpcy5vd25lci5zY2FsZS55O1xyXG5cclxuICAgIGNvbnN0IGNsb3Nlc3RMZXR0ZXIgPSB0aGlzLmdldENsb3Nlc3RHbHlwaChwb3NpdGlvbi54ICwgcG9zaXRpb24ueSk7XHJcblxyXG4gICAgLy8gLTEgbWVhbnMgdGhhdCB3ZSBhdCB0aGUgc3RhcnQgb2YgdGhlIGxpbmVcclxuICAgIGlmIChjbG9zZXN0TGV0dGVyID09PSAtMSkge1xyXG4gICAgICB0aGlzLm93bmVyLmlucHV0LmdseXBoSW5kZXggPSBjbG9zZXN0TGV0dGVyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vd25lci5pbnB1dC5nbHlwaEluZGV4ID0gdGhpcy5vd25lci5sYXlvdXQuZ2x5cGhzLmluZGV4T2YoY2xvc2VzdExldHRlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VsZWN0LmpzIiwidmFyIGR0eXBlID0gcmVxdWlyZSgnZHR5cGUnKVxudmFyIGFuQXJyYXkgPSByZXF1aXJlKCdhbi1hcnJheScpXG52YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKVxuXG52YXIgQ1cgPSBbMCwgMiwgM11cbnZhciBDQ1cgPSBbMiwgMSwgM11cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVRdWFkRWxlbWVudHMoYXJyYXksIG9wdCkge1xuICAgIC8vaWYgdXNlciBkaWRuJ3Qgc3BlY2lmeSBhbiBvdXRwdXQgYXJyYXlcbiAgICBpZiAoIWFycmF5IHx8ICEoYW5BcnJheShhcnJheSkgfHwgaXNCdWZmZXIoYXJyYXkpKSkge1xuICAgICAgICBvcHQgPSBhcnJheSB8fCB7fVxuICAgICAgICBhcnJheSA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdCA9PT0gJ251bWJlcicpIC8vYmFja3dhcmRzLWNvbXBhdGlibGVcbiAgICAgICAgb3B0ID0geyBjb3VudDogb3B0IH1cbiAgICBlbHNlXG4gICAgICAgIG9wdCA9IG9wdCB8fCB7fVxuXG4gICAgdmFyIHR5cGUgPSB0eXBlb2Ygb3B0LnR5cGUgPT09ICdzdHJpbmcnID8gb3B0LnR5cGUgOiAndWludDE2J1xuICAgIHZhciBjb3VudCA9IHR5cGVvZiBvcHQuY291bnQgPT09ICdudW1iZXInID8gb3B0LmNvdW50IDogMVxuICAgIHZhciBzdGFydCA9IChvcHQuc3RhcnQgfHwgMCkgXG5cbiAgICB2YXIgZGlyID0gb3B0LmNsb2Nrd2lzZSAhPT0gZmFsc2UgPyBDVyA6IENDVyxcbiAgICAgICAgYSA9IGRpclswXSwgXG4gICAgICAgIGIgPSBkaXJbMV0sXG4gICAgICAgIGMgPSBkaXJbMl1cblxuICAgIHZhciBudW1JbmRpY2VzID0gY291bnQgKiA2XG5cbiAgICB2YXIgaW5kaWNlcyA9IGFycmF5IHx8IG5ldyAoZHR5cGUodHlwZSkpKG51bUluZGljZXMpXG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSAwOyBpIDwgbnVtSW5kaWNlczsgaSArPSA2LCBqICs9IDQpIHtcbiAgICAgICAgdmFyIHggPSBpICsgc3RhcnRcbiAgICAgICAgaW5kaWNlc1t4ICsgMF0gPSBqICsgMFxuICAgICAgICBpbmRpY2VzW3ggKyAxXSA9IGogKyAxXG4gICAgICAgIGluZGljZXNbeCArIDJdID0gaiArIDJcbiAgICAgICAgaW5kaWNlc1t4ICsgM10gPSBqICsgYVxuICAgICAgICBpbmRpY2VzW3ggKyA0XSA9IGogKyBiXG4gICAgICAgIGluZGljZXNbeCArIDVdID0gaiArIGNcbiAgICB9XG4gICAgcmV0dXJuIGluZGljZXNcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcXVhZC1pbmRpY2VzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZHR5cGUpIHtcbiAgc3dpdGNoIChkdHlwZSkge1xuICAgIGNhc2UgJ2ludDgnOlxuICAgICAgcmV0dXJuIEludDhBcnJheVxuICAgIGNhc2UgJ2ludDE2JzpcbiAgICAgIHJldHVybiBJbnQxNkFycmF5XG4gICAgY2FzZSAnaW50MzInOlxuICAgICAgcmV0dXJuIEludDMyQXJyYXlcbiAgICBjYXNlICd1aW50OCc6XG4gICAgICByZXR1cm4gVWludDhBcnJheVxuICAgIGNhc2UgJ3VpbnQxNic6XG4gICAgICByZXR1cm4gVWludDE2QXJyYXlcbiAgICBjYXNlICd1aW50MzInOlxuICAgICAgcmV0dXJuIFVpbnQzMkFycmF5XG4gICAgY2FzZSAnZmxvYXQzMic6XG4gICAgICByZXR1cm4gRmxvYXQzMkFycmF5XG4gICAgY2FzZSAnZmxvYXQ2NCc6XG4gICAgICByZXR1cm4gRmxvYXQ2NEFycmF5XG4gICAgY2FzZSAnYXJyYXknOlxuICAgICAgcmV0dXJuIEFycmF5XG4gICAgY2FzZSAndWludDhfY2xhbXBlZCc6XG4gICAgICByZXR1cm4gVWludDhDbGFtcGVkQXJyYXlcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2R0eXBlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbm1vZHVsZS5leHBvcnRzID0gYW5BcnJheVxuXG5mdW5jdGlvbiBhbkFycmF5KGFycikge1xuICByZXR1cm4gKFxuICAgICAgIGFyci5CWVRFU19QRVJfRUxFTUVOVFxuICAgICYmIHN0ci5jYWxsKGFyci5idWZmZXIpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nXG4gICAgfHwgQXJyYXkuaXNBcnJheShhcnIpXG4gIClcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hbi1hcnJheS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1idWZmZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXHJcblxyXG5jbGFzcyBJbnB1dCB7XHJcblxyXG4gIF9lbmFibGVkID0gZmFsc2U7XHJcbiAgb3duZXIgPSBudWxsO1xyXG5cclxuICBfZ2x5cGhJbmRleCA9IC0xO1xyXG5cclxuICBzZXQgZ2x5cGhJbmRleCh2YWx1ZSkge1xyXG4gICAgdGhpcy5fZ2x5cGhJbmRleCA9IHZhbHVlO1xyXG5cclxuICAgIGlmICh0aGlzLl9nbHlwaEluZGV4IDwgLTEpXHJcbiAgICAgIHRoaXMuX2dseXBoSW5kZXggPSAtMTtcclxuXHJcbiAgICBpZiAodGhpcy5fZ2x5cGhJbmRleCA+IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5sZW5ndGgpXHJcbiAgICAgIHRoaXMuX2dseXBoSW5kZXggPSB0aGlzLm93bmVyLmxheW91dC5nbHlwaHMubGVuZ3RoO1xyXG5cclxuICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBnZXQgZ2x5cGhJbmRleCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9nbHlwaEluZGV4O1xyXG4gIH1cclxuXHJcbiAgc2V0IGVuYWJsZWQodmFsdWUpIHtcclxuICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcclxuICAgIGlmICh0aGlzLl9lbmFibGVkKSB7XHJcbiAgICAgIHRoaXMuZW5hYmxlKCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLmRpc2FibGUoKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGdldCBlbmFibGVkKCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZWRcclxuICB9XHJcblxyXG4gIGNvbnN0cnVjdG9yKG93bmVyKSB7XHJcbiAgICB0aGlzLm93bmVyID0gb3duZXI7XHJcbiAgICB0aGlzLm1ldHJpY3MgPSBvd25lci5tZXRyaWNzO1xyXG4gICAgdGhpcy5sYXlvdXQgPSBvd25lci5sYXlvdXQ7XHJcblxyXG4gICAgdGhpcy5jcmVhdGVGaWVsZCgpO1xyXG4gICAgdGhpcy5kaXNhYmxlKCk7XHJcbiAgfVxyXG5cclxuICBlbmFibGUoKSB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcclxuICB9XHJcblxyXG4gIGRpc2FibGUoKSB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgfVxyXG5cclxuICBzaG93KCkge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICB9XHJcblxyXG4gIGNyZWF0ZUZpZWxkKCkge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmlucHV0RWxlbWVudCk7XHJcblxyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgIC8vdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwwLDAsMC4zKSc7XHJcblxyXG4gICAgY29uc3QgdHJhbnNmb3JtID0gT2JqZWN0LnZhbHVlcyh0aGlzLm93bmVyLnRyYW5zZm9ybS53b3JsZFRyYW5zZm9ybSkuc2xpY2UoMCwgNik7XHJcblxyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuY29sb3IgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5jb250YWluID0gJ3N0cmljdCc7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS56SW5kZXggPSAyO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuY29sb3IgPSB0aGlzLm93bmVyLnN0eWxlLmZpbGw7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW49IFwibGVmdCB0b3BcIjtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBtYXRyaXgoJHt0cmFuc2Zvcm0uam9pbihcIiwgXCIpfSlgO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUucGFkZGluZyA9IFwiMFwiO1xyXG5cclxuICAgIHRoaXMuYWRkRXZlbnQoXCJibHVyXCIsIChldmVudCkgPT4gdGhpcy5pbnB1dEVsZW1lbnQuZm9jdXMoKSk7XHJcbiAgICB0aGlzLmFkZEV2ZW50KFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB0aGlzLm9uSW5wdXQoZXZlbnQpKTtcclxuICAgIHRoaXMuYWRkRXZlbnQoXCJrZXlkb3duXCIsIChldmVudCkgPT4gdGhpcy5vbktleWRvd24oZXZlbnQpKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG5cclxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMub3duZXIubWV0cmljcztcclxuICAgIHRoaXMubGF5b3V0ID0gdGhpcy5vd25lci5sYXlvdXQ7XHJcblxyXG4gICAgY29uc3Qge2dseXBoc30gPSB0aGlzLm93bmVyLmxheW91dDtcclxuXHJcbiAgICBpZiAodGhpcy5nbHlwaEluZGV4ID49IGdseXBocy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5nbHlwaEluZGV4ID0gZ2x5cGhzLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVmYXVsdCBjYXJldCBwbGFjZSAtIHN0YXJ0IG9mIHRoZSBpbnB1dCBmaWVsZCBUT0RPIGltcGxlbWVudCBhbGlnblxyXG4gICAgbGV0IGdseXBoTWV0cmljcyA9IHtcclxuICAgICAgeDogdGhpcy5vd25lci5wb3NpdGlvbi54LFxyXG4gICAgICB5OiB0aGlzLm93bmVyLnBvc2l0aW9uLnlcclxuICAgIH07XHJcblxyXG4gICAgLy8gaWYgc3RyaW5nIGlzIGVtcHR5LCBwdXQgY2FyZXQgYXQgdGhlIGJlZ2lubmluZ1xyXG4gICAgaWYgKHRoaXMub3duZXIubGF5b3V0LmdseXBocy5sZW5ndGggPT09IC0xKSB7XHJcblxyXG4gICAgICAvLyBpZiB3ZSBvbiB0aGUgbGFzdCBnbHlwaCwgcGxhY2UgY2FyZXQgYWZ0ZXIgaXRcclxuICAgIH1lbHNlIGlmICh0aGlzLmdseXBoSW5kZXggPT09IGdseXBocy5sZW5ndGgpIHtcclxuXHJcbiAgICAgIGNvbnN0IGxhc3RHbHlwaCA9IGdseXBoc1tnbHlwaHMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICBnbHlwaE1ldHJpY3MueCArPSBsYXN0R2x5cGgubWV0cmljcy54ICsgbGFzdEdseXBoLm1ldHJpY3Mud2lkdGg7XHJcbiAgICAgIGdseXBoTWV0cmljcy55ICs9IGxhc3RHbHlwaC5tZXRyaWNzLnk7XHJcblxyXG4gICAgICAvLyBpZiBjYXJldCBpbiB0aGUgbWlkZGxlIG9mIHRoZSB0ZXh0XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ2x5cGhJbmRleCAhPT0gLTEpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRHbHlwaCA9IGdseXBoc1t0aGlzLmdseXBoSW5kZXhdO1xyXG5cclxuICAgICAgZ2x5cGhNZXRyaWNzLnggKz0gc2VsZWN0ZWRHbHlwaC5tZXRyaWNzLnggKyBzZWxlY3RlZEdseXBoLm1ldHJpY3Mud2lkdGg7XHJcbiAgICAgIGdseXBoTWV0cmljcy55ICs9IHNlbGVjdGVkR2x5cGgubWV0cmljcy55O1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgY29uc29sZS5sb2coXCJzdGFydCBvZiB0aGUgdGV4dFwiKVxyXG5cclxuICAgICAgZ2x5cGhNZXRyaWNzLnkgKz0gdGhpcy5vd25lci5zdHlsZS5saW5lSGVpZ2h0O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IE9iamVjdC52YWx1ZXModGhpcy5vd25lci50cmFuc2Zvcm0ud29ybGRUcmFuc2Zvcm0pLnNsaWNlKDAsIDYpO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYG1hdHJpeCgke3RyYW5zZm9ybS5qb2luKFwiLCBcIil9KWA7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodCArIFwicHhcIjtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyBcInB4XCI7XHJcblxyXG4gICAgdGhpcy5zZXRQb3NpdGlvbihnbHlwaE1ldHJpY3MueCAsIGdseXBoTWV0cmljcy55KTtcclxuXHJcbiAgICAvL3RoaXMuc2V0U2NhbGUodGhpcy5vd25lci5zY2FsZS54LCB0aGlzLm93bmVyLnNjYWxlLnkpO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIG9uSW5wdXQoZXZlbnQpIHtcclxuXHJcbiAgICBjb25zdCB7IHJhbmdlIH0gPSB0aGlzLm93bmVyLnNlbGVjdDtcclxuXHJcbiAgICAvLyBJZiB1c2VyIHNlbGVjdGVkIHNvbWUgdGV4dCwgcmVtb3ZlIGl0XHJcbiAgICBpZiAocmFuZ2VbMF0gIT09IHJhbmdlWzFdICYmIHJhbmdlWzFdICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMuZ2x5cGhJbmRleCA9IE1hdGgubWluKHJhbmdlWzBdIC0gMSwgcmFuZ2VbMV0gLSAxKTtcclxuICAgICAgY29uc3QgcmVtb3ZlSW5kZXggPSBNYXRoLm1pbi5hcHBseShudWxsLCByYW5nZSk7XHJcbiAgICAgIGNvbnN0IHJlbW92ZUxlbmd0aCA9IE1hdGguYWJzKHJhbmdlWzBdIC0gcmFuZ2VbMV0pO1xyXG4gICAgICB0aGlzLm93bmVyLnNlbGVjdC5zZXRSYW5nZSgwLGZhbHNlKTtcclxuICAgICAgdGhpcy5vd25lci5yZW1vdmVTdHJpbmcocmVtb3ZlSW5kZXgsIHJlbW92ZUxlbmd0aCk7XHJcbiAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgLy90aGlzLmdseXBoSW5kZXgrKztcclxuICAgIH1cclxuXHJcbiAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgIGlmIChldmVudC5kYXRhID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgLy8gSWYgdGV4dCBpcyBlbXB0eSBub3dcclxuICAgIGlmICh0aGlzLm93bmVyLmxheW91dC5nbHlwaHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMub3duZXIudGV4dCA9IGV2ZW50LmRhdGE7XHJcbiAgICAgIHRoaXMuZ2x5cGhJbmRleCA9IDE7XHJcblxyXG4gICAgLy8gSWYgY2FyZXQgaXMgYXQgdGhlIGVuZCBvZiB0aGUgdGV4dFxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmdseXBoSW5kZXggPT09IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHRoaXMub3duZXIudGV4dCArPSBldmVudC5kYXRhO1xyXG4gICAgICB0aGlzLmdseXBoSW5kZXgrKztcclxuXHJcbiAgICAvLyBJZiB3ZSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBsaW5lXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm93bmVyLmluc2VydFN0cmluZygrK3RoaXMuZ2x5cGhJbmRleCwgZXZlbnQuZGF0YSk7XHJcbiAgICAgIC8vdGhpcy5nbHlwaEluZGV4Kys7XHJcbiAgICB9XHJcbiAgICB0aGlzLm93bmVyLnNlbGVjdC5zZXRSYW5nZSgwLCBmYWxzZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgb25LZXlkb3duKGV2ZW50KSB7XHJcblxyXG5cclxuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcclxuICAgICAgICB0aGlzLm93bmVyLnNlbGVjdC5zZXRSYW5nZSgwLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5nbHlwaEluZGV4LS07XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxyXG4gICAgICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKDAsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICB0aGlzLmdseXBoSW5kZXgrKztcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwiQmFja3NwYWNlXCI6XHJcbiAgICAgIGNhc2UgXCJEZWxldGVcIjpcclxuICAgICAgICBjb25zdCB7cmFuZ2V9ID0gdGhpcy5vd25lci5zZWxlY3Q7XHJcbiAgICAgICAgaWYgKHJhbmdlWzFdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICB0aGlzLmdseXBoSW5kZXggPSBNYXRoLm1pbihyYW5nZVswXSwgcmFuZ2VbMV0pO1xyXG4gICAgICAgICAgY29uc3QgcmVtb3ZlSW5kZXggPSBNYXRoLm1pbi5hcHBseShudWxsLCByYW5nZSk7XHJcbiAgICAgICAgICBjb25zdCByZW1vdmVMZW5ndGggPSBNYXRoLmFicyhyYW5nZVswXSAtIHJhbmdlWzFdKTtcclxuICAgICAgICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKDAsZmFsc2UpO1xyXG4gICAgICAgICAgdGhpcy5vd25lci5yZW1vdmVTdHJpbmcocmVtb3ZlSW5kZXgsIHJlbW92ZUxlbmd0aCk7XHJcbiAgICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkJhY2tzcGFjZVwiKVxyXG4gICAgICAgICAgICB0aGlzLm93bmVyLnJlbW92ZVN0cmluZyh0aGlzLmdseXBoSW5kZXgtLSwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIFNlbGVjdCBhbGxcclxuICAgICAgY2FzZSBcImFcIjpcclxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xyXG4gICAgICAgICAgdGhpcy5vd25lci5zZWxlY3Quc2V0UmFuZ2UoMCx0aGlzLm93bmVyLnRleHQubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gXCIgXCI7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0UG9zaXRpb24oeCwgeSkge1xyXG4gICAgbGV0IGxpbmVIZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodCAqIHRoaXMub3duZXIuc2NhbGUueTtcclxuXHJcbiAgICB5ICo9IHRoaXMub3duZXIuc2NhbGUueTtcclxuICAgIHggKj0gdGhpcy5vd25lci5zY2FsZS54O1xyXG5cclxuICAgIHkgLT0gbGluZUhlaWdodDtcclxuXHJcbiAgICB5IC09IHRoaXMub3duZXIucG9zaXRpb24ueSAqIHRoaXMub3duZXIuc2NhbGUueTtcclxuICAgIHggLT0gdGhpcy5vd25lci5wb3NpdGlvbi54ICogdGhpcy5vd25lci5zY2FsZS54O1xyXG5cclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRvcCA9IGAke3l9cHhgO1xyXG5cclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gXCIgXCI7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICBhZGRFdmVudChldmVudCwgY2FsbGJhY2spIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5fZW5hYmxlZCkge1xyXG4gICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbnB1dC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjMiBhVGV4dHVyZUNvb3JkO1xcbmF0dHJpYnV0ZSBmbG9hdCBhU2RmU2l6ZTtcXG5cXG51bmlmb3JtIG1hdDMgdHJhbnNsYXRpb25NYXRyaXg7XFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb25NYXRyaXg7XFxudW5pZm9ybSBmbG9hdCBzZGZNdWx0aXBsaWVyO1xcblxcbnZhcnlpbmcgdmVjMiAgdGMwO1xcbnZhcnlpbmcgZmxvYXQgZG9mZnNldDtcXG52YXJ5aW5nIGZsb2F0IHNkZl90ZXhlbDtcXG5cXG5cXG5cXG52b2lkIG1haW4odm9pZCkge1xcblxcbiAgICAvL1RPRE8gTUFLRSBBVFRSSUJVVEVcXG4gICAgZmxvYXQgc2RmX3NpemUgPSBhU2RmU2l6ZSAqIHNkZk11bHRpcGxpZXI7XFxuXFxuICAgIC8vVE9ETyBNQUtFIFVOSUZPUk1TXFxuICAgIGZsb2F0IHNkZl90ZXhfc2l6ZSA9IDEwMjQuMDtcXG5cXG5cXG4gICAgdGMwID0gYVRleHR1cmVDb29yZDtcXG4gICAgZG9mZnNldCA9IDEuMCAvIHNkZl9zaXplOyAgICAgICAvLyBEaXN0YW5jZSBmaWVsZCBkZWx0YSBmb3Igb25lIHNjcmVlbiBwaXhlbFxcbiAgICBzZGZfdGV4ZWwgPSAxLjAgLyBzZGZfdGV4X3NpemU7XFxuXFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNCgocHJvamVjdGlvbk1hdHJpeCAqIHRyYW5zbGF0aW9uTWF0cml4ICogdmVjMyhhVmVydGV4UG9zaXRpb24gLCAxLjApKS54eSwgMC4wLCAxLjApO1xcblxcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvdGV4dC92ZXJ0Lmdsc2xcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbnVuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyO1xcbnVuaWZvcm0gZmxvYXQgaGludF9hbW91bnQ7XFxudW5pZm9ybSBmbG9hdCBzdWJwaXhlbF9hbW91bnQ7XFxuXFxudW5pZm9ybSB2ZWMzIGJnX2NvbG9yO1xcbnVuaWZvcm0gdmVjMyBmb250X2NvbG9yO1xcblxcbnZhcnlpbmcgdmVjMiAgdGMwO1xcbnZhcnlpbmcgZmxvYXQgZG9mZnNldDtcXG52YXJ5aW5nIGZsb2F0IHNkZl90ZXhlbDtcXG5cXG5cXG4vKlxcbiAqICBTdWJwaXhlbCBjb3ZlcmFnZSBjYWxjdWxhdGlvblxcbiAqXFxuICogIHYgLSBlZGdlIHNsb3BlICAgIC0xLjAgdG8gMS4wICAgICAgICAgIHRyaXBsZXRcXG4gKiAgYSAtIHBpeGVsIGNvdmVyYWdlIDAuMCB0byAxLjAgICAgICAgICAgY292ZXJhZ2VcXG4gKlxcbiAqICAgICAgfDwtIGdseXBoIGVkZ2UgICAgICAgICAgICAgICAgICAgICAgUiAgRyAgQlxcbiAqICArLS0tKy0tLSsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLSstLSstLStcXG4gKiAgfCAgIHxYWFh8IHYgPSAxLjAgKGVkZ2UgZmFjaW5nIHdlc3QpICB8ICB8eHh8WFh8XFxuICogIHwgICB8WFhYfCBhID0gMC41ICg1MCUgY292ZXJhZ2UpICAgICAgfCAgfHh4fFhYfFxcbiAqICB8ICAgfFhYWHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHx4eHxYWHxcXG4gKiAgKy0tLSstLS0rICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0rLS0rLS0rXFxuICogICAgcGl4ZWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgIDUwIDEwMFxcbiAqXFxuICpcXG4gKiAgICAgICAgUiAgIEcgICBCXFxuICpcXG4gKiAgIDEuMCAgICAgICAgKy0tKyAgIDwtIHRvcCAoYWJzKCB2ICkpXFxuICogICAgICAgICAgICAgIHxcXG4gKiAgICAgICAtKy0tLS0tKy0tKy0tIDwtIGNlaWw6IDEwMCUgY292ZXJhZ2VcXG4gKiAgICAgICAgfCAgICAgfFhYfFxcbiAqICAgMC4wICB8ICArLS0rWFh8XFxuICogICAgICAgIHwgIHx4eHxYWHxcXG4gKiAgICAgICAtKy0tKy0tKy0tKy0tIDwtIGZsb29yOiAwJSBjb3ZlcmFnZVxcbiAqICAgICAgICAgICB8XFxuICogIC0xLjAgICstLSsgICAgICAgICA8LSAgLWFicyh2KVxcbiAqICAgICAgICB8XFxuICogICAgICAgIHxcXG4gKiAgICAgICAgfFxcbiAqICAtMi4wICArICAgICAgICAgICAgPC0gYm90dG9tOiAtYWJzKHYpLTEuMFxcbiAqL1xcblxcbnZlYzMgc3VicGl4ZWwoIGZsb2F0IHYsIGZsb2F0IGEgKSB7XFxuICAgIGZsb2F0IHZ0ICAgICAgPSAwLjYgKiB2OyAvLyAxLjAgd2lsbCBtYWtlIHlvdXIgZXllcyBibGVlZFxcbiAgICB2ZWMzICByZ2JfbWF4ID0gdmVjMyggLXZ0LCAwLjAsIHZ0ICk7XFxuICAgIGZsb2F0IHRvcCAgICAgPSBhYnMoIHZ0ICk7XFxuICAgIGZsb2F0IGJvdHRvbSAgPSAtdG9wIC0gMS4wO1xcbiAgICBmbG9hdCBjZmxvb3IgID0gbWl4KCB0b3AsIGJvdHRvbSwgYSApO1xcbiAgICB2ZWMzICByZXMgICAgID0gY2xhbXAoIHJnYl9tYXggLSB2ZWMzKCBjZmxvb3IgKSwgMC4wLCAxLjAgKTtcXG4gICAgcmV0dXJuIHJlcztcXG59XFxuXFxudm9pZCBtYWluMigpIHtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHVTYW1wbGVyLCB0YzApO1xcbn1cXG5cXG52b2lkIG1haW4odm9pZCkge1xcblxcbiAgICAvLyBTYW1wbGluZyB0aGUgdGV4dHVyZSwgTCBwYXR0ZXJuXFxuICAgIGZsb2F0IHNkZiAgICAgICA9IHRleHR1cmUyRCggdVNhbXBsZXIsIHRjMCApLnI7XFxuICAgIGZsb2F0IHNkZl9ub3J0aCA9IHRleHR1cmUyRCggdVNhbXBsZXIsIHRjMCArIHZlYzIoIDAuMCwgc2RmX3RleGVsICkgKS5yO1xcbiAgICBmbG9hdCBzZGZfZWFzdCAgPSB0ZXh0dXJlMkQoIHVTYW1wbGVyLCB0YzAgKyB2ZWMyKCBzZGZfdGV4ZWwsIDAuMCApICkucjtcXG5cXG4gICAgLy8gRXN0aW1hdGluZyBzdHJva2UgZGlyZWN0aW9uIGJ5IHRoZSBkaXN0YW5jZSBmaWVsZCBncmFkaWVudCB2ZWN0b3JcXG4gICAgdmVjMiAgc2dyYWQgICAgID0gdmVjMiggc2RmX2Vhc3QgLSBzZGYsIHNkZl9ub3J0aCAtIHNkZiApO1xcbiAgICBmbG9hdCBzZ3JhZF9sZW4gPSBtYXgoIGxlbmd0aCggc2dyYWQgKSwgMS4wIC8gMTI4LjAgKTtcXG4gICAgdmVjMiAgZ3JhZCAgICAgID0gc2dyYWQgLyB2ZWMyKCBzZ3JhZF9sZW4gKTtcXG4gICAgZmxvYXQgdmdyYWQgPSBhYnMoIGdyYWQueSApOyAvLyAwLjAgLSB2ZXJ0aWNhbCBzdHJva2UsIDEuMCAtIGhvcml6b250YWwgb25lXFxuXFxuICAgIGZsb2F0IGhvcnpfc2NhbGUgID0gMS4xOyAvLyBCbHVycmluZyB2ZXJ0aWNhbCBzdHJva2VzIGFsb25nIHRoZSBYIGF4aXMgYSBiaXRcXG4gICAgZmxvYXQgdmVydF9zY2FsZSAgPSAwLjY7IC8vIFdoaWxlIGFkZGluZyBzb21lIGNvbnRyYXN0IHRvIHRoZSBob3Jpem9udGFsIHN0cm9rZXNcXG4gICAgZmxvYXQgaGRvZmZzZXQgICAgPSBtaXgoIGRvZmZzZXQgKiBob3J6X3NjYWxlLCBkb2Zmc2V0ICogdmVydF9zY2FsZSwgdmdyYWQgKTtcXG4gICAgZmxvYXQgcmVzX2RvZmZzZXQgPSBtaXgoIGRvZmZzZXQsIGhkb2Zmc2V0LCBoaW50X2Ftb3VudCApO1xcblxcbiAgICBmbG9hdCBhbHBoYSAgICAgICA9IHNtb290aHN0ZXAoIDAuNSAtIHJlc19kb2Zmc2V0LCAwLjUgKyByZXNfZG9mZnNldCwgc2RmICk7XFxuXFxuICAgIC8vIEFkZGl0aW9uYWwgY29udHJhc3RcXG4gICAgYWxwaGEgICAgICAgICAgICAgPSBwb3coIGFscGhhLCAxLjAgKyAwLjIgKiB2Z3JhZCAqIGhpbnRfYW1vdW50ICk7XFxuXFxuICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gc3VwcG9ydCBmb3IgQVJCX2JsZW5kX2Z1bmNfZXh0ZW5kZWQgaW4gV2ViR0wuXFxuICAgIC8vIEZvcnR1bmF0ZWx5IHRoZSBiYWNrZ3JvdW5kIGlzIGZpbGxlZCB3aXRoIGEgc29saWQgY29sb3Igc28gd2UgY2FuIGRvXFxuICAgIC8vIHRoZSBibGVuZGluZyBpbnNpZGUgdGhlIHNoYWRlci5cXG5cXG4gICAgLy8gRGlzY2FyZGluZyBwaXhlbHMgYmV5b25kIGEgdGhyZXNob2xkIHRvIG1pbmltaXNlIHBvc3NpYmxlIGFydGlmYWN0cy5cXG4gICAgaWYgKCBhbHBoYSA8IDIwLjAgLyAyNTYuMCApIGRpc2NhcmQ7XFxuXFxuICAgIHZlYzMgY2hhbm5lbHMgPSBzdWJwaXhlbCggZ3JhZC54ICogMC41ICogc3VicGl4ZWxfYW1vdW50LCBhbHBoYSApICsgMC4xO1xcblxcbiAgICAvLyBGb3Igc3VicGl4ZWwgcmVuZGVyaW5nIHdlIGhhdmUgdG8gYmxlbmQgZWFjaCBjb2xvciBjaGFubmVsIHNlcGFyYXRlbHlcXG4gICAgdmVjMyByZXMgPSBtaXgoIGJnX2NvbG9yLCBmb250X2NvbG9yLCBjaGFubmVscyApO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KCByZXMsIDEuMCApO1xcbn1cXG5cXG5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvdGV4dC9mcmFnLmdsc2xcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjtcXG5cXG51bmlmb3JtIG1hdDMgdHJhbnNsYXRpb25NYXRyaXg7XFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb25NYXRyaXg7XFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG5cXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KChwcm9qZWN0aW9uTWF0cml4ICogdHJhbnNsYXRpb25NYXRyaXggKiB2ZWMzKGFWZXJ0ZXhQb3NpdGlvbiAsIDEuMCkpLnh5LCAwLjAsIDEuMCk7XFxuXFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy9zZWxlY3QvdmVydC5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG51bmlmb3JtIHZlYzMgYmdfY29sb3I7XFxudmFyeWluZyB2ZWMyICB0YzA7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGJnX2NvbG9yLDAuNDUpO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDEuMCwgMS4wLCAxLjAsMC4yKTtcXG59XFxuXFxuXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL3NlbGVjdC9mcmFnLmdsc2xcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=