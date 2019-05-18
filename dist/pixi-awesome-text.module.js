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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkMDZjOTY0YzVjNWMwOWQ1MjQxOSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2R0eXBlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYW4tYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvdmVydC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvZnJhZy5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3NlbGVjdC92ZXJ0Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvc2VsZWN0L2ZyYWcuZ2xzbCJdLCJuYW1lcyI6WyJPYmplY3QiLCJhc3NpZ24iLCJQSVhJIiwiZXh0cmFzIiwiQXdlc29tZVRleHQiLCJUZXh0IiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJzZWxlY3RWZXJ0ZXh0U2hhZGVyIiwic2VsZWN0RnJhZ21lbnRTaGFkZXIiLCJnbENvcmUiLCJBd2Vzb21lVGV4dFJlbmRlcmVyIiwicmVuZGVyZXIiLCJ0ZXh0U2hhZGVyIiwic2VsZWN0U2hhZGVyIiwiZ2wiLCJnZXRFeHRlbnNpb24iLCJTaGFkZXIiLCJzb3VyY2UiLCJnbERhdGEiLCJfZ2xEYXRhcyIsImNvbnRleHRUZXh0IiwiYmluZFZhbyIsImJ1aWxkVGV4dEdsRGF0YSIsInZhbyIsImRpcnR5IiwidXZCdWZmZXIiLCJ1cGxvYWQiLCJ1dnMiLCJpbmRleERpcnR5IiwiaW5kZXhCdWZmZXIiLCJpbmRpY2VzIiwidmVydGV4QnVmZmVyIiwidmVydGljZXMiLCJiaW5kU2hhZGVyIiwic2hhZGVyIiwic3RhdGUiLCJzZXRCbGVuZE1vZGUiLCJibGVuZE1vZGUiLCJ1bmlmb3JtcyIsInVTYW1wbGVyIiwiYmluZFRleHR1cmUiLCJ0ZXh0dXJlIiwidHJhbnNsYXRpb25NYXRyaXgiLCJ3b3JsZFRyYW5zZm9ybSIsInRvQXJyYXkiLCJoaW50X2Ftb3VudCIsInNkZk11bHRpcGxpZXIiLCJzY2FsZSIsInN1YnBpeGVsX2Ftb3VudCIsImZvbnRfY29sb3IiLCJ1dGlscyIsImhleDJyZ2IiLCJzdHlsZSIsImZpbGwiLCJyZXBsYWNlIiwiYmdfY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkcmF3TW9kZSIsIlRSSUFOR0xFUyIsImRyYXciLCJsZW5ndGgiLCJjb250ZXh0U2VsZWN0Iiwic2VsZWN0IiwiYnVpbGRTZWxlY3RHbERhdGEiLCJzZWxlY3RDb2xvciIsInN0eWxlSUQiLCJ1cGRhdGUiLCJzdGF0ZXMiLCJlZGl0YWJsZSIsInNlbGVjdGluZyIsInJlbmRlclNlbGVjdCIsInJlbmRlclRleHQiLCJHTEJ1ZmZlciIsImNyZWF0ZVZlcnRleEJ1ZmZlciIsIlNUUkVBTV9EUkFXIiwic2RmQnVmZmVyIiwic2RmU2l6ZXMiLCJTVEFUSUNfRFJBVyIsImNyZWF0ZUluZGV4QnVmZmVyIiwiVmVydGV4QXJyYXlPYmplY3QiLCJhZGRJbmRleCIsImFkZEF0dHJpYnV0ZSIsImF0dHJpYnV0ZXMiLCJhVmVydGV4UG9zaXRpb24iLCJGTE9BVCIsImFUZXh0dXJlQ29vcmQiLCJhU2RmU2l6ZSIsIk9iamVjdFJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsInJlZ2lzdGVyUGx1Z2luIiwiY3JlYXRlSW5kaWNlcyIsInRleHQiLCJmb250IiwicmVndWxhciIsIlRleHRTdHlsZSIsIl90ZXh0IiwiX2ZvbnQiLCJfdGV4dHVyZSIsImludGVyYWN0aXZlIiwiYnV0dG9uTW9kZSIsImxheW91dCIsIlRleHRMYXlvdXQiLCJmb250U2l6ZSIsIndyYXBXb3JkcyIsImJyZWFrV29yZHMiLCJ3cmFwcGVyV2lkdGgiLCJ3b3JkV3JhcFdpZHRoIiwiYWxpZ24iLCJsaW5lSGVpZ2h0IiwiU2VsZWN0IiwiaW5wdXQiLCJJbnB1dCIsInNldFN0YXRlIiwibWV0cmljcyIsImZvbnRNZXRyaWNzIiwiRmxvYXQzMkFycmF5IiwibGV0dGVyc0NvdW50IiwiYXJyYXlQb3NpdGlvbnMiLCJ2ZXJ0ZXgiLCJzZGYiLCJ3b3Jkc01ldHJpY3MiLCJmb3JFYWNoIiwid29yZCIsIndyaXRlU3RyaW5nIiwieCIsInkiLCJjbG9ja3dpc2UiLCJ0eXBlIiwiY291bnQiLCJuZXdTdGF0ZSIsInZhbHVlcyIsInNldFJlZ3VsYXJTdGF0ZSIsInNldEVkaXRhYmxlU3RhdGUiLCJjdXJyZW50RWRpdGluZ0VsZW1lbnQiLCJvZmYiLCJlbmFibGVkIiwib24iLCJlIiwiY2xpY2tzQ291bnQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsInNldFJhbmdlIiwiaW5wdXRFbGVtZW50IiwiZm9jdXMiLCJvbk1vdXNlRG93biIsInNob3ciLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsImluZGV4Iiwic3RyaW5nIiwic3Vic3RyIiwibmV3VGV4dCIsInNwbGl0Iiwic3BsaWNlIiwiam9pbiIsImZvbnRfbWV0cmljcyIsInBvcyIsInByZXZfY2hhciIsImNwb3MiLCJ4X21heCIsImNhcFNjYWxlIiwic3RyX3BvcyIsInNjaGFyIiwiZm9udF9jaGFyIiwiY2hhcnMiLCJrZXJuIiwicmVjdCIsImNoYXJSZWN0IiwicG9zaXRpb25zIiwibWFwIiwidXYiLCJzdHJpbmdfcG9zIiwibW9yZUxpbmVHYXAiLCJjYXBfaGVpZ2h0IiwieF9oZWlnaHQiLCJmb250QXNjZW50IiwiYXNjZW50IiwiZGVzY2VudCIsImxpbmVfZ2FwIiwibG93U2NhbGUiLCJNYXRoIiwicm91bmQiLCJsb3djYXNlIiwiZmxhZ3MiLCJiYXNlbGluZSIsImciLCJib3R0b20iLCJpeSIsInRvcCIsInJvd19oZWlnaHQiLCJsZWZ0IiwiYmVhcmluZ194IiwiaXgiLCJyaWdodCIsInAiLCJuZXdfcG9zX3giLCJhZHZhbmNlX3giLCJzZGZfc2l6ZSIsInZhbHVlIiwibWVzaCIsIk1lc2giLCJvd25lciIsImNvbmZpZyIsInN0YXJ0WSIsImNhbGN1bGF0ZVdvcmRzUG9zaXRpb25zIiwiZ2x5cGhzIiwiZ2V0R2x5cGhzIiwid2lkdGgiLCJoZWlnaHQiLCJjaGFyIiwid29yZHMiLCJpIiwic3RhcnRYIiwid29yZFNpemUiLCJnZXRTdHJpbmdTaXplIiwicHVzaCIsImxpbmVzQ291bnQiLCJ3b3Jkc09uTGluZSIsImZpbHRlciIsImxhc3RXb3JkIiwiZnJlZVNwYWNlIiwibGVmdE9mZnNldCIsImxldHRlciIsInBvc2l0aW9uIiwicmFuZ2UiLCJidWlsZFZlcnRpY2VzIiwic3RhcnQiLCJlbmQiLCJtaW4iLCJhcHBseSIsIm1heCIsImxldHRlckNvdW50IiwiZmlyc3RMZXR0ZXIiLCJsYXN0TGV0dGVyIiwic3RhcnRMaW5lTGV0dGVyIiwiZW5kTGluZUxldHRlciIsIm9mZnNldCIsInNlbGVjdGluZ0xpbmUiLCJmbG9vciIsInNlbGVjdGluZ0xpbmVZIiwibGFzdEdseXBoT25MaW5lIiwiZmlyc3RHbHlwaE9uTGluZSIsImdseXBoIiwiZXZlbnQiLCJkYXRhIiwiYnV0dG9uIiwiZ2xvYmFsIiwiY2xvc2VzdExldHRlciIsImdldENsb3Nlc3RHbHlwaCIsImluZGV4T2YiLCJnbHlwaEluZGV4IiwiX2dseXBoSW5kZXgiLCJfZW5hYmxlZCIsImVuYWJsZSIsImRpc2FibGUiLCJjcmVhdGVGaWVsZCIsImRpc3BsYXkiLCJkb2N1bWVudCIsImJvZHkiLCJhcHBlbmQiLCJjb250YWlucyIsInJlbW92ZUNoaWxkIiwib3BhY2l0eSIsImNyZWF0ZUVsZW1lbnQiLCJ0cmFuc2Zvcm0iLCJzbGljZSIsImNvbG9yIiwiYm9yZGVyIiwiY29udGFpbiIsInpJbmRleCIsInBvaW50ZXJFdmVudHMiLCJvdXRsaW5lIiwidHJhbnNmb3JtT3JpZ2luIiwicGFkZGluZyIsImFkZEV2ZW50Iiwib25JbnB1dCIsIm9uS2V5ZG93biIsImdseXBoTWV0cmljcyIsImxhc3RHbHlwaCIsInNlbGVjdGVkR2x5cGgiLCJzZXRQb3NpdGlvbiIsInJlbW92ZUluZGV4IiwicmVtb3ZlTGVuZ3RoIiwiYWJzIiwicmVtb3ZlU3RyaW5nIiwidGFyZ2V0IiwiaW5zZXJ0U3RyaW5nIiwia2V5IiwiY3RybEtleSIsImNhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOztBQUNBOztBQUNBOzs7O0FBRUFBLE9BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxJQUFJLENBQUNDLE1BQW5CLEVBQTJCO0FBQ3pCQyxjQUFXLEVBQUVDO0FBRFksRUFBM0I7O0FBSUEsS0FBSSxPQUFPSCxJQUFQLEtBQWdCLFdBQXBCLEVBQWlDO0FBQy9CLE9BQUlBLElBQUksQ0FBQ0MsTUFBVCxFQUFpQjtBQUNmRCxTQUFJLENBQUNDLE1BQUwsQ0FBWUMsV0FBWixHQUEwQkMsZ0JBQTFCO0FBQ0QsSUFGRCxNQUVPO0FBQ0xILFNBQUksQ0FBQ0MsTUFBTCxHQUFjO0FBQUVDLGtCQUFXLEVBQUVDO0FBQWYsTUFBZDtBQUNEO0FBQ0Y7QUFRRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQSxLQUFNQyxZQUFZLEdBQUcsbUJBQU8sQ0FBQyxFQUFELENBQTVCOztBQUNBLEtBQU1DLGNBQWMsR0FBRyxtQkFBTyxDQUFDLEVBQUQsQ0FBOUI7O0FBRUEsS0FBTUMsbUJBQW1CLEdBQUcsbUJBQU8sQ0FBQyxFQUFELENBQW5DOztBQUNBLEtBQU1DLG9CQUFvQixHQUFHLG1CQUFPLENBQUMsRUFBRCxDQUFwQzs7QUFFQSxLQUFNQyxNQUFNLEdBQUdSLElBQUksQ0FBQ1EsTUFBcEI7O0tBRU1DLG1COzs7OztBQVFKLGdDQUFZQyxRQUFaLEVBQXNCO0FBQUE7O0FBQUE7O0FBQ3BCLDhGQUFNQSxRQUFOOztBQURvQixtRUFIUixRQUdROztBQUVwQixXQUFLQyxVQUFMLEdBQWtCLElBQWxCO0FBQ0EsV0FBS0MsWUFBTCxHQUFvQixJQUFwQjtBQUhvQjtBQUtyQjs7Ozt1Q0FFaUI7QUFDaEIsV0FBTUMsRUFBRSxHQUFHLEtBQUtILFFBQUwsQ0FBY0csRUFBekI7QUFDQUEsU0FBRSxDQUFDQyxZQUFILENBQWdCLDBCQUFoQjtBQUNBLFlBQUtILFVBQUwsR0FBa0IsSUFBSVgsSUFBSSxDQUFDZSxNQUFULENBQWdCRixFQUFoQixFQUFvQlQsWUFBcEIsRUFBa0NDLGNBQWxDLENBQWxCO0FBQ0EsWUFBS08sWUFBTCxHQUFvQixJQUFJWixJQUFJLENBQUNlLE1BQVQsQ0FBZ0JGLEVBQWhCLEVBQW9CUCxtQkFBcEIsRUFBeUNDLG9CQUF6QyxDQUFwQjtBQUNEOzs7Z0NBRVVTLE0sRUFBUTtBQUVqQixXQUFJQyxNQUFNLEdBQUdELE1BQU0sQ0FBQ0UsUUFBUCxDQUFnQlQsbUJBQW1CLENBQUNVLFdBQXBDLENBQWI7O0FBRUEsV0FBSSxDQUFDRixNQUFMLEVBQWE7QUFDWCxjQUFLUCxRQUFMLENBQWNVLE9BQWQsQ0FBc0IsSUFBdEI7QUFDQUgsZUFBTSxHQUFHLEtBQUtJLGVBQUwsQ0FBcUJMLE1BQXJCLEVBQTZCLEtBQUtOLFFBQUwsQ0FBY0csRUFBM0MsQ0FBVDtBQUNBRyxlQUFNLENBQUNFLFFBQVAsQ0FBZ0JULG1CQUFtQixDQUFDVSxXQUFwQyxJQUFtREYsTUFBbkQ7QUFDRDs7QUFFRCxZQUFLUCxRQUFMLENBQWNVLE9BQWQsQ0FBc0JILE1BQU0sQ0FBQ0ssR0FBN0I7O0FBRUEsV0FBSU4sTUFBTSxDQUFDTyxLQUFYLEVBQWtCO0FBQ2hCUCxlQUFNLENBQUNPLEtBQVAsR0FBZSxLQUFmO0FBQ0FOLGVBQU0sQ0FBQ08sUUFBUCxDQUFnQkMsTUFBaEIsQ0FBdUJULE1BQU0sQ0FBQ1UsR0FBOUI7QUFDRDs7QUFFRCxXQUFJVixNQUFNLENBQUNXLFVBQVgsRUFBdUI7QUFDckJYLGVBQU0sQ0FBQ1csVUFBUCxHQUFvQixLQUFwQjtBQUNBVixlQUFNLENBQUNXLFdBQVAsQ0FBbUJILE1BQW5CLENBQTBCVCxNQUFNLENBQUNhLE9BQWpDO0FBQ0Q7O0FBRURaLGFBQU0sQ0FBQ2EsWUFBUCxDQUFvQkwsTUFBcEIsQ0FBMkJULE1BQU0sQ0FBQ2UsUUFBbEM7QUFDQSxZQUFLckIsUUFBTCxDQUFjc0IsVUFBZCxDQUF5QmYsTUFBTSxDQUFDZ0IsTUFBaEM7QUFFQSxZQUFLdkIsUUFBTCxDQUFjd0IsS0FBZCxDQUFvQkMsWUFBcEIsQ0FBaUNuQixNQUFNLENBQUNvQixTQUF4QztBQUVBbkIsYUFBTSxDQUFDZ0IsTUFBUCxDQUFjSSxRQUFkLENBQXVCQyxRQUF2QixHQUFrQyxLQUFLNUIsUUFBTCxDQUFjNkIsV0FBZCxDQUEwQnZCLE1BQU0sQ0FBQ3dCLE9BQWpDLENBQWxDO0FBQ0F2QixhQUFNLENBQUNnQixNQUFQLENBQWNJLFFBQWQsQ0FBdUJJLGlCQUF2QixHQUEyQ3pCLE1BQU0sQ0FBQzBCLGNBQVAsQ0FBc0JDLE9BQXRCLENBQThCLElBQTlCLENBQTNDO0FBRUExQixhQUFNLENBQUNnQixNQUFQLENBQWNJLFFBQWQsQ0FBdUJPLFdBQXZCLEdBQXFDLEdBQXJDO0FBQ0EzQixhQUFNLENBQUNnQixNQUFQLENBQWNJLFFBQWQsQ0FBdUJRLGFBQXZCLEdBQXVDM0MsaUJBQVk0QyxLQUFuRDtBQUNBN0IsYUFBTSxDQUFDZ0IsTUFBUCxDQUFjSSxRQUFkLENBQXVCVSxlQUF2QixHQUF5QyxHQUF6QztBQUNBOUIsYUFBTSxDQUFDZ0IsTUFBUCxDQUFjSSxRQUFkLENBQXVCVyxVQUF2QixHQUFvQ2hELElBQUksQ0FBQ2lELEtBQUwsQ0FBV0MsT0FBWCxDQUFtQmxDLE1BQU0sQ0FBQ21DLEtBQVAsQ0FBYUMsSUFBYixDQUFrQkMsT0FBbEIsQ0FBMEIsR0FBMUIsRUFBK0IsSUFBL0IsQ0FBbkIsQ0FBcEM7QUFDQXBDLGFBQU0sQ0FBQ2dCLE1BQVAsQ0FBY0ksUUFBZCxDQUF1QmlCLFFBQXZCLEdBQWtDdEQsSUFBSSxDQUFDaUQsS0FBTCxDQUFXQyxPQUFYLENBQW1CbEMsTUFBTSxDQUFDdUMsZUFBUCxDQUF1QkYsT0FBdkIsQ0FBK0IsR0FBL0IsRUFBb0MsSUFBcEMsQ0FBbkIsQ0FBbEM7QUFFQSxXQUFNRyxRQUFRLEdBQUd4QyxNQUFNLENBQUN3QyxRQUFQLEdBQWtCLEtBQUs5QyxRQUFMLENBQWNHLEVBQWQsQ0FBaUI0QyxTQUFwRDtBQUNBeEMsYUFBTSxDQUFDSyxHQUFQLENBQVdvQyxJQUFYLENBQWdCRixRQUFoQixFQUEwQnhDLE1BQU0sQ0FBQ2EsT0FBUCxDQUFlOEIsTUFBekMsRUFBaUQsQ0FBakQ7QUFFRDs7O2tDQUVZM0MsTSxFQUFRO0FBQ25CLFdBQUlDLE1BQU0sR0FBR0QsTUFBTSxDQUFDRSxRQUFQLENBQWdCVCxtQkFBbUIsQ0FBQ21ELGFBQXBDLENBQWI7O0FBRUEsV0FBSSxDQUFDM0MsTUFBRCxJQUFXRCxNQUFNLENBQUM2QyxNQUFQLENBQWN0QyxLQUE3QixFQUFvQztBQUNsQyxjQUFLYixRQUFMLENBQWNVLE9BQWQsQ0FBc0IsSUFBdEI7QUFDQUgsZUFBTSxHQUFHLEtBQUs2QyxpQkFBTCxDQUF1QjlDLE1BQXZCLEVBQStCLEtBQUtOLFFBQUwsQ0FBY0csRUFBN0MsQ0FBVDtBQUNBRyxlQUFNLENBQUNFLFFBQVAsQ0FBZ0JULG1CQUFtQixDQUFDbUQsYUFBcEMsSUFBcUQzQyxNQUFyRDtBQUNBRCxlQUFNLENBQUM2QyxNQUFQLENBQWN0QyxLQUFkLEdBQXNCLEtBQXRCO0FBQ0Q7O0FBRUQsWUFBS2IsUUFBTCxDQUFjVSxPQUFkLENBQXNCSCxNQUFNLENBQUNLLEdBQTdCOztBQUVBLFdBQUlOLE1BQU0sQ0FBQzZDLE1BQVAsQ0FBY2xDLFVBQWxCLEVBQThCO0FBQzVCWCxlQUFNLENBQUM2QyxNQUFQLENBQWNsQyxVQUFkLEdBQTJCLEtBQTNCO0FBQ0FWLGVBQU0sQ0FBQ1csV0FBUCxDQUFtQkgsTUFBbkIsQ0FBMEJULE1BQU0sQ0FBQzZDLE1BQVAsQ0FBY2hDLE9BQXhDO0FBQ0Q7O0FBRURaLGFBQU0sQ0FBQ2EsWUFBUCxDQUFvQkwsTUFBcEIsQ0FBMkJULE1BQU0sQ0FBQzZDLE1BQVAsQ0FBYzlCLFFBQXpDO0FBQ0EsWUFBS3JCLFFBQUwsQ0FBY3NCLFVBQWQsQ0FBeUJmLE1BQU0sQ0FBQ2dCLE1BQWhDO0FBRUEsWUFBS3ZCLFFBQUwsQ0FBY3dCLEtBQWQsQ0FBb0JDLFlBQXBCLENBQWlDLEVBQWpDO0FBQ0FsQixhQUFNLENBQUNnQixNQUFQLENBQWNJLFFBQWQsQ0FBdUJJLGlCQUF2QixHQUEyQ3pCLE1BQU0sQ0FBQzBCLGNBQVAsQ0FBc0JDLE9BQXRCLENBQThCLElBQTlCLENBQTNDO0FBQ0ExQixhQUFNLENBQUNnQixNQUFQLENBQWNJLFFBQWQsQ0FBdUJpQixRQUF2QixHQUFrQ3RELElBQUksQ0FBQ2lELEtBQUwsQ0FBV0MsT0FBWCxDQUFtQixLQUFLYSxXQUF4QixDQUFsQztBQUVBLFdBQU1QLFFBQVEsR0FBR3hDLE1BQU0sQ0FBQ3dDLFFBQVAsR0FBa0IsS0FBSzlDLFFBQUwsQ0FBY0csRUFBZCxDQUFpQjRDLFNBQXBEO0FBQ0F4QyxhQUFNLENBQUNLLEdBQVAsQ0FBV29DLElBQVgsQ0FBZ0JGLFFBQWhCLEVBQTBCeEMsTUFBTSxDQUFDNkMsTUFBUCxDQUFjaEMsT0FBZCxDQUFzQjhCLE1BQWhELEVBQXdELENBQXhEO0FBQ0Q7Ozs0QkFFTTNDLE0sRUFBUTtBQUViLFdBQUlBLE1BQU0sQ0FBQ2dELE9BQVAsS0FBbUJoRCxNQUFNLENBQUNtQyxLQUFQLENBQWFhLE9BQXBDLEVBQTZDO0FBQzNDaEQsZUFBTSxDQUFDaUQsTUFBUDtBQUNEOztBQUVELFdBQUlqRCxNQUFNLENBQUNrQixLQUFQLEtBQWlCaEMsaUJBQVlnRSxNQUFaLENBQW1CQyxRQUFwQyxJQUFnRG5ELE1BQU0sQ0FBQ2tCLEtBQVAsS0FBaUJoQyxpQkFBWWdFLE1BQVosQ0FBbUJFLFNBQXhGLEVBQW1HO0FBQ2pHLGNBQUtDLFlBQUwsQ0FBa0JyRCxNQUFsQjtBQUNEOztBQUNELFlBQUtzRCxVQUFMLENBQWdCdEQsTUFBaEI7QUFDRDs7O3FDQUVlQSxNLEVBQVFILEUsRUFBSTtBQUUxQixXQUFNSSxNQUFNLEdBQUc7QUFDYmdCLGVBQU0sRUFBRSxLQUFLdEIsVUFEQTtBQUVibUIscUJBQVksRUFBRXRCLE1BQU0sQ0FBQytELFFBQVAsQ0FBZ0JDLGtCQUFoQixDQUFtQzNELEVBQW5DLEVBQXVDRyxNQUFNLENBQUNlLFFBQTlDLEVBQXdEbEIsRUFBRSxDQUFDNEQsV0FBM0QsQ0FGRDtBQUdiakQsaUJBQVEsRUFBRWhCLE1BQU0sQ0FBQytELFFBQVAsQ0FBZ0JDLGtCQUFoQixDQUFtQzNELEVBQW5DLEVBQXVDRyxNQUFNLENBQUNVLEdBQTlDLEVBQW1EYixFQUFFLENBQUM0RCxXQUF0RCxDQUhHO0FBSWJDLGtCQUFTLEVBQUVsRSxNQUFNLENBQUMrRCxRQUFQLENBQWdCQyxrQkFBaEIsQ0FBbUMzRCxFQUFuQyxFQUF1Q0csTUFBTSxDQUFDMkQsUUFBOUMsRUFBd0Q5RCxFQUFFLENBQUMrRCxXQUEzRCxDQUpFO0FBS2JoRCxvQkFBVyxFQUFFcEIsTUFBTSxDQUFDK0QsUUFBUCxDQUFnQk0saUJBQWhCLENBQWtDaEUsRUFBbEMsRUFBc0NHLE1BQU0sQ0FBQ2EsT0FBN0MsRUFBc0RoQixFQUFFLENBQUMrRCxXQUF6RCxDQUxBO0FBTWI7QUFDQXRELFlBQUcsRUFBRSxJQVBRO0FBUWJDLGNBQUssRUFBRVAsTUFBTSxDQUFDTyxLQVJEO0FBU2JJLG1CQUFVLEVBQUVYLE1BQU0sQ0FBQ1c7QUFUTixRQUFmO0FBWUFWLGFBQU0sQ0FBQ0ssR0FBUCxHQUFhLElBQUlkLE1BQU0sQ0FBQ3NFLGlCQUFYLENBQTZCakUsRUFBN0IsRUFDVmtFLFFBRFUsQ0FDRDlELE1BQU0sQ0FBQ1csV0FETixFQUVWb0QsWUFGVSxDQUVHL0QsTUFBTSxDQUFDYSxZQUZWLEVBRXdCYixNQUFNLENBQUNnQixNQUFQLENBQWNnRCxVQUFkLENBQXlCQyxlQUZqRCxFQUVrRXJFLEVBQUUsQ0FBQ3NFLEtBRnJFLEVBRTRFLEtBRjVFLEVBRW1GLElBQUksQ0FGdkYsRUFFMEYsQ0FGMUYsRUFHVkgsWUFIVSxDQUdHL0QsTUFBTSxDQUFDTyxRQUhWLEVBR29CUCxNQUFNLENBQUNnQixNQUFQLENBQWNnRCxVQUFkLENBQXlCRyxhQUg3QyxFQUc0RHZFLEVBQUUsQ0FBQ3NFLEtBSC9ELEVBR3NFLEtBSHRFLEVBRzZFLElBQUksQ0FIakYsRUFHb0YsQ0FIcEYsRUFJVkgsWUFKVSxDQUlHL0QsTUFBTSxDQUFDeUQsU0FKVixFQUlxQnpELE1BQU0sQ0FBQ2dCLE1BQVAsQ0FBY2dELFVBQWQsQ0FBeUJJLFFBSjlDLEVBSXdEeEUsRUFBRSxDQUFDc0UsS0FKM0QsRUFJa0UsS0FKbEUsRUFJeUUsQ0FKekUsRUFJNEUsQ0FKNUUsQ0FBYjtBQU1BLGNBQU9sRSxNQUFQO0FBQ0Q7Ozt1Q0FFaUJELE0sRUFBUUgsRSxFQUFJO0FBQzVCLFdBQU1JLE1BQU0sR0FBRztBQUNiZ0IsZUFBTSxFQUFFLEtBQUtyQixZQURBO0FBRWJrQixxQkFBWSxFQUFFdEIsTUFBTSxDQUFDK0QsUUFBUCxDQUFnQkMsa0JBQWhCLENBQW1DM0QsRUFBbkMsRUFBdUNHLE1BQU0sQ0FBQzZDLE1BQVAsQ0FBYzlCLFFBQXJELEVBQStEbEIsRUFBRSxDQUFDNEQsV0FBbEUsQ0FGRDtBQUdiN0Msb0JBQVcsRUFBRXBCLE1BQU0sQ0FBQytELFFBQVAsQ0FBZ0JNLGlCQUFoQixDQUFrQ2hFLEVBQWxDLEVBQXNDRyxNQUFNLENBQUM2QyxNQUFQLENBQWNoQyxPQUFwRCxFQUE2RGhCLEVBQUUsQ0FBQytELFdBQWhFLENBSEE7QUFJYnRELFlBQUcsRUFBRTtBQUpRLFFBQWY7QUFPQUwsYUFBTSxDQUFDSyxHQUFQLEdBQWEsSUFBSWQsTUFBTSxDQUFDc0UsaUJBQVgsQ0FBNkJqRSxFQUE3QixFQUNWa0UsUUFEVSxDQUNEOUQsTUFBTSxDQUFDVyxXQUROLEVBRVZvRCxZQUZVLENBRUcvRCxNQUFNLENBQUNhLFlBRlYsRUFFd0JiLE1BQU0sQ0FBQ2dCLE1BQVAsQ0FBY2dELFVBQWQsQ0FBeUJDLGVBRmpELEVBRWtFckUsRUFBRSxDQUFDc0UsS0FGckUsRUFFNEUsS0FGNUUsRUFFbUYsSUFBSSxDQUZ2RixFQUUwRixDQUYxRixDQUFiO0FBSUEsY0FBT2xFLE1BQVA7QUFDRDs7OztHQTNJK0JqQixJQUFJLENBQUNzRixjOztpQkFBakM3RSxtQixpQkFFaUIsQzs7aUJBRmpCQSxtQixtQkFHbUIsQzs7QUE0SXpCVCxLQUFJLENBQUN1RixhQUFMLENBQW1CQyxjQUFuQixDQUFrQyxxQkFBbEMsRUFBeUQvRSxtQkFBekQ7Z0JBRWVBLG1COzs7Ozs7Ozs7Ozs7OztBQzFKZjs7QUFDQTs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSEEsS0FBTWdGLGFBQWEsR0FBRyxtQkFBTyxDQUFDLENBQUQsQ0FBN0I7O0tBS012RixXOzs7OztBQWNKLHdCQUFZd0YsSUFBWixFQUFrQnZDLEtBQWxCLEVBQXlCd0MsSUFBekIsRUFBK0I7QUFBQTs7QUFBQTs7QUFDN0Isc0ZBQU1BLElBQUksQ0FBQ25ELE9BQVg7O0FBRDZCLGtFQVBsQixxQkFPa0I7O0FBQUEsNkRBTnZCdEMsV0FBVyxDQUFDZ0UsTUFBWixDQUFtQjBCLE9BTUk7O0FBQUEsbUVBTGpCLENBS2lCOztBQUFBLG9FQUpoQixJQUlnQjs7QUFBQSw2REFIdkIsSUFHdUI7O0FBQUEsOERBRnRCLElBRXNCOztBQUc3QixXQUFLekMsS0FBTCxHQUFhLElBQUluRCxJQUFJLENBQUM2RixTQUFULENBQW1CMUMsS0FBbkIsQ0FBYjtBQUNBLFdBQUtJLGVBQUwsR0FBdUJKLEtBQUssQ0FBQ0ksZUFBN0I7QUFDQSxXQUFLdUMsS0FBTCxHQUFhSixJQUFiO0FBQ0EsV0FBS0ssS0FBTCxHQUFhSixJQUFJLENBQUNBLElBQWxCO0FBQ0EsV0FBS0ssUUFBTCxHQUFnQkwsSUFBSSxDQUFDbkQsT0FBckI7QUFFQSxXQUFLeUQsV0FBTCxHQUFtQixJQUFuQjtBQUNBLFdBQUtDLFVBQUwsR0FBa0IsSUFBbEIsQ0FWNkIsQ0FZN0I7O0FBQ0EsV0FBS0MsTUFBTCxHQUFjLElBQUlDLGtCQUFKLGdDQUFxQjtBQUNqQ0MsZUFBUSxFQUFFLE1BQUtsRCxLQUFMLENBQVdrRCxRQURZO0FBRWpDQyxnQkFBUyxFQUFFLE1BQUtuRCxLQUFMLENBQVdvRCxVQUZXO0FBR2pDQyxtQkFBWSxFQUFFLE1BQUtyRCxLQUFMLENBQVdzRCxhQUhRO0FBSWpDQyxZQUFLLEVBQUUsTUFBS3ZELEtBQUwsQ0FBV3VELEtBSmU7QUFLakNDLGlCQUFVLEVBQUUsTUFBS3hELEtBQUwsQ0FBV3dEO0FBTFUsTUFBckIsQ0FBZCxDQWI2QixDQXFCN0I7O0FBQ0EsV0FBSzlDLE1BQUwsR0FBYyxJQUFJK0Msa0JBQUosK0JBQWQsQ0F0QjZCLENBd0I3Qjs7QUFDQSxXQUFLQyxLQUFMLEdBQWEsSUFBSUMsaUJBQUosK0JBQWI7O0FBRUEsV0FBS0MsUUFBTCxDQUFjN0csV0FBVyxDQUFDZ0UsTUFBWixDQUFtQjBCLE9BQWpDOztBQTNCNkI7QUE0QjlCOzs7OzhCQUVRO0FBQUE7O0FBQ1AsWUFBS29CLE9BQUwsR0FBZSxLQUFLQyxXQUFMLENBQWlCLEtBQUs5RCxLQUFMLENBQVdrRCxRQUE1QixDQUFmO0FBRUEsWUFBS0YsTUFBTCxDQUFZbEMsTUFBWjtBQUNBLFlBQUtKLE1BQUwsQ0FBWUksTUFBWjtBQUNBLFlBQUs0QyxLQUFMLENBQVc1QyxNQUFYLEdBTE8sQ0FPUDs7QUFDQSxZQUFLbEMsUUFBTCxHQUFnQixJQUFJbUYsWUFBSixDQUFpQixLQUFLZixNQUFMLENBQVlnQixZQUFaLEdBQTJCLENBQTNCLEdBQStCLENBQWhELENBQWhCO0FBQ0EsWUFBS3pGLEdBQUwsR0FBVyxJQUFJd0YsWUFBSixDQUFpQixLQUFLZixNQUFMLENBQVlnQixZQUFaLEdBQTJCLENBQTNCLEdBQStCLENBQWhELENBQVg7QUFDQSxZQUFLeEMsUUFBTCxHQUFnQixJQUFJdUMsWUFBSixDQUFpQixLQUFLZixNQUFMLENBQVlnQixZQUFaLEdBQTJCLENBQTVDLENBQWhCO0FBQ0EsWUFBS0MsY0FBTCxHQUFzQjtBQUFFQyxlQUFNLEVBQUUsQ0FBVjtBQUFhM0YsWUFBRyxFQUFFLENBQWxCO0FBQXFCNEYsWUFBRyxFQUFFO0FBQTFCLFFBQXRCLENBWE8sQ0FhUDs7QUFDQSxZQUFLbkIsTUFBTCxDQUFZb0IsWUFBWixDQUF5QkMsT0FBekIsQ0FBa0MsVUFBQUMsSUFBSSxFQUFJO0FBQ3hDLGVBQUksQ0FBQ0MsV0FBTCxDQUFpQkQsSUFBSSxDQUFDQSxJQUF0QixFQUE0QixNQUFJLENBQUM5QixJQUFqQyxFQUF1QyxNQUFJLENBQUNxQixPQUE1QyxFQUFxRCxDQUFDUyxJQUFJLENBQUNFLENBQU4sRUFBU0YsSUFBSSxDQUFDRyxDQUFkLENBQXJEO0FBQ0QsUUFGRCxFQWRPLENBa0JQOztBQUNBLFlBQUsvRixPQUFMLEdBQWU0RCxhQUFhLENBQUM7QUFDM0JvQyxrQkFBUyxFQUFFLElBRGdCO0FBRTNCQyxhQUFJLEVBQUUsUUFGcUI7QUFHM0JDLGNBQUssRUFBRSxLQUFLNUIsTUFBTCxDQUFZZ0I7QUFIUSxRQUFELENBQTVCO0FBTUEsWUFBS25ELE9BQUwsR0FBZSxLQUFLYixLQUFMLENBQVdhLE9BQTFCO0FBQ0EsWUFBS3pDLEtBQUwsR0FBYSxJQUFiO0FBQ0EsWUFBS0ksVUFBTCxHQUFrQixJQUFsQjtBQUNBLFlBQUtULFFBQUwsR0FBZ0IsRUFBaEI7QUFDRDs7OzhCQUVROEcsUSxFQUFVO0FBQUEsV0FFVDlELE1BRlMsR0FFRWhFLFdBRkYsQ0FFVGdFLE1BRlM7QUFJakIsV0FBSSxDQUFDOEQsUUFBRCxJQUFhbEksTUFBTSxDQUFDbUksTUFBUCxDQUFjL0QsTUFBZCxDQUFqQixFQUF3Qzs7QUFFeEMsZUFBUThELFFBQVI7QUFDRSxjQUFLOUQsTUFBTSxDQUFDMEIsT0FBWjtBQUNFLGdCQUFLc0MsZUFBTDtBQUNBOztBQUNGLGNBQUtoRSxNQUFNLENBQUNDLFFBQVo7QUFDRSxlQUFJLEtBQUtqQyxLQUFMLEtBQWVoQyxXQUFXLENBQUNnRSxNQUFaLENBQW1CMEIsT0FBdEMsRUFBK0M7QUFDN0Msa0JBQUt1QyxnQkFBTDtBQUNEOztBQUNEO0FBUko7O0FBV0EsWUFBS2pHLEtBQUwsR0FBYThGLFFBQWI7QUFDRDs7O3VDQVdpQjtBQUFBOztBQUVoQjlILGtCQUFXLENBQUNrSSxxQkFBWixHQUFvQyxJQUFwQztBQUVBLFlBQUtDLEdBQUwsQ0FBUyxXQUFUO0FBQ0EsWUFBS0EsR0FBTCxDQUFTLFdBQVQ7QUFDQSxZQUFLQSxHQUFMLENBQVMsU0FBVDtBQUNBLFlBQUtBLEdBQUwsQ0FBUyxnQkFBVDtBQUVBLFlBQUt4QixLQUFMLENBQVd5QixPQUFYLEdBQXFCLEtBQXJCO0FBR0EsWUFBS0MsRUFBTCxDQUFRLE9BQVIsRUFBaUIsVUFBQUMsQ0FBQyxFQUFJO0FBQ3BCLGFBQUksTUFBSSxDQUFDQyxXQUFMLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCLGlCQUFJLENBQUNBLFdBQUwsR0FBbUIsQ0FBbkI7O0FBQ0EsaUJBQUksQ0FBQzFCLFFBQUwsQ0FBYzdHLFdBQVcsQ0FBQ2dFLE1BQVosQ0FBbUJDLFFBQWpDO0FBQ0Q7O0FBRUQsYUFBSSxNQUFJLENBQUNzRSxXQUFMLEtBQXFCLENBQXpCLEVBQTRCO0FBQzFCLGlCQUFJLENBQUNBLFdBQUw7QUFDQUMsaUJBQU0sQ0FBQ0MsVUFBUCxDQUFrQixZQUFNO0FBQ3RCLG1CQUFJLENBQUNGLFdBQUwsR0FBbUIsQ0FBbkI7QUFDRCxZQUZELEVBRUcsR0FGSDtBQUdEO0FBQ0YsUUFaRDtBQWNEOzs7d0NBRWtCO0FBQUE7O0FBRWpCO0FBQ0EsV0FBSXZJLFdBQVcsQ0FBQ2tJLHFCQUFaLElBQXFDLElBQXpDLEVBQStDO0FBQzdDbEksb0JBQVcsQ0FBQ2tJLHFCQUFaLENBQWtDckIsUUFBbEMsQ0FBMkM3RyxXQUFXLENBQUNnRSxNQUFaLENBQW1CMEIsT0FBOUQ7QUFDRDs7QUFDRDFGLGtCQUFXLENBQUNrSSxxQkFBWixHQUFvQyxJQUFwQyxDQU5pQixDQVFqQjs7QUFDQSxZQUFLQyxHQUFMLENBQVMsT0FBVDtBQUVBLFlBQUt4QixLQUFMLENBQVd5QixPQUFYLEdBQXFCLElBQXJCO0FBQ0EsWUFBS3pCLEtBQUwsQ0FBVytCLElBQVgsR0FaaUIsQ0FjakI7O0FBQ0EsWUFBSy9FLE1BQUwsQ0FBWWdGLFFBQVosQ0FBcUIsQ0FBckIsRUFBdUIsS0FBS25ELElBQUwsQ0FBVS9CLE1BQVYsR0FBbUIsQ0FBMUM7QUFDQSxZQUFLa0QsS0FBTCxDQUFXaUMsWUFBWCxDQUF3QkMsS0FBeEI7QUFFQSxZQUFLUixFQUFMLENBQVEsV0FBUixFQUFxQixVQUFBQyxDQUFDLEVBQUk7QUFDeEIsZUFBSSxDQUFDekIsUUFBTCxDQUFjN0csV0FBVyxDQUFDZ0UsTUFBWixDQUFtQkUsU0FBakM7O0FBQ0EsZUFBSSxDQUFDUCxNQUFMLENBQVltRixXQUFaLENBQXdCUixDQUF4Qjs7QUFDQSxlQUFJLENBQUMzQixLQUFMLENBQVdvQyxJQUFYOztBQUNBLGVBQUksQ0FBQ3BDLEtBQUwsQ0FBVzVDLE1BQVgsQ0FBa0J1RSxDQUFsQjtBQUNELFFBTEQ7QUFPQSxZQUFLRCxFQUFMLENBQVEsV0FBUixFQUFxQixVQUFBQyxDQUFDLEVBQUk7QUFDeEIsYUFBSSxNQUFJLENBQUN0RyxLQUFMLEtBQWVoQyxXQUFXLENBQUNnRSxNQUFaLENBQW1CRSxTQUF0QyxFQUFpRDtBQUMvQyxpQkFBSSxDQUFDUCxNQUFMLENBQVlxRixXQUFaLENBQXdCVixDQUF4Qjs7QUFDQSxpQkFBSSxDQUFDM0IsS0FBTCxDQUFXK0IsSUFBWDtBQUNEO0FBQ0YsUUFMRDtBQU9BLFlBQUtMLEVBQUwsQ0FBUSxTQUFSLEVBQW1CLFVBQUFDLENBQUMsRUFBSTtBQUN0QixlQUFJLENBQUN6QixRQUFMLENBQWM3RyxXQUFXLENBQUNnRSxNQUFaLENBQW1CQyxRQUFqQzs7QUFDQSxlQUFJLENBQUNOLE1BQUwsQ0FBWXNGLFNBQVosQ0FBc0JYLENBQXRCO0FBQ0QsUUFIRDtBQUtBLFlBQUtELEVBQUwsQ0FBUSxnQkFBUixFQUEwQixVQUFBQyxDQUFDLEVBQUk7QUFDN0IsZUFBSSxDQUFDekIsUUFBTCxDQUFjN0csV0FBVyxDQUFDZ0UsTUFBWixDQUFtQkMsUUFBakM7O0FBQ0EsZUFBSSxDQUFDTixNQUFMLENBQVlzRixTQUFaLENBQXNCWCxDQUF0QjtBQUNELFFBSEQ7QUFLRDs7O2tDQUVZWSxLLEVBQU9DLE0sRUFBUTtBQUMxQixZQUFLM0QsSUFBTCxHQUFZLEtBQUtBLElBQUwsQ0FBVTRELE1BQVYsQ0FBaUIsQ0FBakIsRUFBb0JGLEtBQXBCLElBQTZCQyxNQUE3QixHQUFzQyxLQUFLM0QsSUFBTCxDQUFVNEQsTUFBVixDQUFpQkYsS0FBakIsQ0FBbEQ7QUFDRDs7O2tDQUVZQSxLLEVBQU96RixNLEVBQVE7QUFDMUIsV0FBSTRGLE9BQU8sR0FBRyxLQUFLN0QsSUFBTCxDQUFVOEQsS0FBVixDQUFnQixFQUFoQixDQUFkO0FBQ0FELGNBQU8sQ0FBQ0UsTUFBUixDQUFlTCxLQUFmLEVBQXNCekYsTUFBTSxHQUFHLENBQS9CO0FBQ0EsWUFBSytCLElBQUwsR0FBWTZELE9BQU8sQ0FBQ0csSUFBUixDQUFhLEVBQWIsQ0FBWjtBQUNEOzs7aUNBVVlMLE0sRUFBUTFELEksRUFBTWdFLFksRUFBY0MsRyxFQUFLO0FBQUE7O0FBQzVDLFdBQUlDLFNBQVMsR0FBRyxHQUFoQixDQUQ0QyxDQUN0Qjs7QUFDdEIsV0FBSUMsSUFBSSxHQUFRRixHQUFoQixDQUY0QyxDQUV0Qjs7QUFDdEIsV0FBSUcsS0FBSyxHQUFPLEdBQWhCLENBSDRDLENBR3RCOztBQUN0QixXQUFJakgsS0FBSyxHQUFPNkcsWUFBWSxDQUFDSyxRQUE3QjtBQUVBLFdBQUlDLE9BQU8sR0FBRyxDQUFkOztBQUVBLGdCQUFRO0FBQ04sYUFBS0EsT0FBTyxLQUFLWixNQUFNLENBQUMxRixNQUF4QixFQUFpQztBQUVqQyxhQUFJdUcsS0FBSyxHQUFHYixNQUFNLENBQUVZLE9BQUYsQ0FBbEI7QUFDQUEsZ0JBQU87O0FBRVAsYUFBS0MsS0FBSyxLQUFLLElBQWYsRUFBc0I7QUFDcEIsZUFBS0osSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVQyxLQUFmLEVBQXVCQSxLQUFLLEdBQUdELElBQUksQ0FBQyxDQUFELENBQVosQ0FESCxDQUNvQjs7QUFDeENBLGVBQUksQ0FBQyxDQUFELENBQUosR0FBV0YsR0FBRyxDQUFDLENBQUQsQ0FBZDtBQUNBRSxlQUFJLENBQUMsQ0FBRCxDQUFKLElBQVdILFlBQVksQ0FBQ2hELFVBQXhCO0FBQ0FrRCxvQkFBUyxHQUFHLEdBQVo7QUFDQTtBQUNEOztBQUVELGFBQUtLLEtBQUssS0FBSyxHQUFmLEVBQXFCLENBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7O0FBRUQsYUFBSUMsU0FBUyxHQUFHeEUsSUFBSSxDQUFDeUUsS0FBTCxDQUFZRixLQUFaLENBQWhCOztBQUNBLGFBQUssQ0FBQ0MsU0FBTixFQUFrQjtBQUEwQjtBQUMxQ0QsZ0JBQUssR0FBRyxHQUFSO0FBQ0FDLG9CQUFTLEdBQUd4RSxJQUFJLENBQUN5RSxLQUFMLENBQVksR0FBWixDQUFaO0FBQ0Q7O0FBRUQsYUFBSUMsSUFBSSxHQUFHMUUsSUFBSSxDQUFDMEUsSUFBTCxDQUFXUixTQUFTLEdBQUdLLEtBQXZCLENBQVg7QUFDQSxhQUFLLENBQUNHLElBQU4sRUFBYUEsSUFBSSxHQUFHLEdBQVAsQ0E1QlAsQ0E4Qk47O0FBQ0EsYUFBSUMsSUFBSSxHQUFHLEtBQUtDLFFBQUwsQ0FBZVQsSUFBZixFQUFxQm5FLElBQXJCLEVBQTJCZ0UsWUFBM0IsRUFBeUNRLFNBQXpDLEVBQW9ERSxJQUFwRCxDQUFYO0FBRUFDLGFBQUksQ0FBQ0UsU0FBTCxDQUFlQyxHQUFmLENBQW1CLFVBQUNiLEdBQUQ7QUFBQSxrQkFBUyxNQUFJLENBQUM3SCxRQUFMLENBQWUsTUFBSSxDQUFDcUYsY0FBTCxDQUFvQkMsTUFBcEIsRUFBZixJQUFnRHVDLEdBQXpEO0FBQUEsVUFBbkI7QUFDQVUsYUFBSSxDQUFDNUksR0FBTCxDQUFTK0ksR0FBVCxDQUFhLFVBQUNDLEVBQUQ7QUFBQSxrQkFBUSxNQUFJLENBQUNoSixHQUFMLENBQVUsTUFBSSxDQUFDMEYsY0FBTCxDQUFvQjFGLEdBQXBCLEVBQVYsSUFBd0NnSixFQUFoRDtBQUFBLFVBQWI7QUFDQUosYUFBSSxDQUFDM0YsUUFBTCxDQUFjOEYsR0FBZCxDQUFrQixVQUFDbkQsR0FBRDtBQUFBLGtCQUFTLE1BQUksQ0FBQzNDLFFBQUwsQ0FBZSxNQUFJLENBQUN5QyxjQUFMLENBQW9CRSxHQUFwQixFQUFmLElBQTZDQSxHQUF0RDtBQUFBLFVBQWxCO0FBRUF1QyxrQkFBUyxHQUFHSyxLQUFaO0FBQ0FKLGFBQUksR0FBR1EsSUFBSSxDQUFDVixHQUFaO0FBQ0Q7O0FBRUQsY0FBTztBQUNMVSxhQUFJLEVBQUcsQ0FBRVYsR0FBRyxDQUFDLENBQUQsQ0FBTCxFQUFVQSxHQUFHLENBQUMsQ0FBRCxDQUFiLEVBQWtCRyxLQUFLLEdBQUdILEdBQUcsQ0FBQyxDQUFELENBQTdCLEVBQWtDQSxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVNFLElBQUksQ0FBQyxDQUFELENBQWIsR0FBbUJILFlBQVksQ0FBQ2hELFVBQWxFLENBREY7QUFFTGdFLG1CQUFVLEVBQUdWLE9BRlIsQ0FHTDs7QUFISyxRQUFQO0FBTUQ7OztpQ0FFVzVELFEsRUFBNkI7QUFBQSxXQUFuQnVFLFdBQW1CLHVFQUFMLEdBQUs7QUFBQSx3QkFFZ0MsS0FBS2pGLElBRnJDO0FBQUEsV0FFaENrRixVQUZnQyxjQUVoQ0EsVUFGZ0M7QUFBQSxXQUVwQkMsUUFGb0IsY0FFcEJBLFFBRm9CO0FBQUEsV0FFRkMsVUFGRSxjQUVWQyxNQUZVO0FBQUEsV0FFV0MsT0FGWCxjQUVXQSxPQUZYO0FBQUEsV0FFb0JDLFFBRnBCLGNBRW9CQSxRQUZwQjtBQUl2QyxXQUFNbEIsUUFBUSxHQUFHLEtBQUs3RyxLQUFMLENBQVdrRCxRQUFYLEdBQXNCd0UsVUFBdkM7QUFDQSxXQUFNTSxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFZUCxRQUFRLEdBQUdkLFFBQXZCLElBQW9DYyxRQUFyRDtBQUNBLFdBQU1FLE1BQU0sR0FBR0ksSUFBSSxDQUFDQyxLQUFMLENBQVlOLFVBQVUsR0FBR2YsUUFBekIsQ0FBZjtBQUNBLFdBQUlyRCxVQUFVLEdBQUd5RSxJQUFJLENBQUNDLEtBQUwsQ0FBWXJCLFFBQVEsSUFBS2UsVUFBVSxHQUFHRSxPQUFiLEdBQXVCQyxRQUE1QixDQUFSLEdBQWlETixXQUE3RCxDQUFqQjtBQUVBLFdBQUksS0FBS3pILEtBQUwsQ0FBV3dELFVBQVgsR0FBd0IsQ0FBNUIsRUFDRUEsVUFBVSxHQUFHLEtBQUt4RCxLQUFMLENBQVd3RCxVQUF4QixDQURGLEtBR0UsS0FBS3hELEtBQUwsQ0FBV3dELFVBQVgsR0FBd0JBLFVBQXhCO0FBRUYsY0FBTztBQUNMcUQsaUJBQVEsRUFBS0EsUUFEUjtBQUVMbUIsaUJBQVEsRUFBS0EsUUFGUjtBQUdMSCxlQUFNLEVBQVFBLE1BSFQ7QUFJTHJFLG1CQUFVLEVBQUdBO0FBSlIsUUFBUDtBQU1EOzs7OEJBRVNpRCxHLEVBQUtqRSxJLEVBQU1nRSxZLEVBQWNRLFMsRUFBd0I7QUFBQSxXQUFiRSxJQUFhLHVFQUFOLEdBQU07QUFFekQ7QUFDQSxXQUFJaUIsT0FBTyxHQUFHLENBQUVuQixTQUFTLENBQUNvQixLQUFWLEdBQWtCLENBQXBCLE1BQTRCLENBQTFDLENBSHlELENBS3pEOztBQUNBLFdBQUlDLFFBQVEsR0FBRzVCLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU0QsWUFBWSxDQUFDcUIsTUFBckMsQ0FOeUQsQ0FRekQ7O0FBQ0EsV0FBSWxJLEtBQUssR0FBR3dJLE9BQU8sR0FBRzNCLFlBQVksQ0FBQ3dCLFFBQWhCLEdBQTJCeEIsWUFBWSxDQUFDSyxRQUEzRCxDQVR5RCxDQVd6RDs7QUFDQSxXQUFJeUIsQ0FBQyxHQUFRdEIsU0FBUyxDQUFDRyxJQUF2QjtBQUNBLFdBQUlvQixNQUFNLEdBQUdGLFFBQVEsR0FBRzFJLEtBQUssSUFBSzZDLElBQUksQ0FBQ3NGLE9BQUwsR0FBZXRGLElBQUksQ0FBQ2dHLEVBQXpCLENBQTdCO0FBQ0EsV0FBSUMsR0FBRyxHQUFNRixNQUFNLEdBQUs1SSxLQUFLLEdBQUs2QyxJQUFJLENBQUNrRyxVQUF2QztBQUNBLFdBQUlDLElBQUksR0FBS2xDLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBVzlHLEtBQUssSUFBS3FILFNBQVMsQ0FBQzRCLFNBQVYsR0FBc0IxQixJQUF0QixHQUE2QjFFLElBQUksQ0FBQ3FHLEVBQXZDLENBQTdCO0FBQ0EsV0FBSUMsS0FBSyxHQUFJSCxJQUFJLEdBQU9oSixLQUFLLElBQUsySSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU9BLENBQUMsQ0FBQyxDQUFELENBQWIsQ0FBN0I7QUFDQSxXQUFJUyxDQUFDLEdBQUcsQ0FBRUosSUFBRixFQUFRRixHQUFSLEVBQWFLLEtBQWIsRUFBb0JQLE1BQXBCLENBQVIsQ0FqQnlELENBbUJ6RDs7QUFDQSxXQUFJUyxTQUFTLEdBQUd2QyxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVM5RyxLQUFLLEdBQUtxSCxTQUFTLENBQUNpQyxTQUE3QyxDQXBCeUQsQ0FzQnpEOztBQUNBLFdBQUlDLFFBQVEsR0FBSSxNQUFNMUcsSUFBSSxDQUFDZ0csRUFBWCxHQUFnQjdJLEtBQWhDO0FBRUEsV0FBTTBILFNBQVMsR0FBRyxDQUNoQjBCLENBQUMsQ0FBQyxDQUFELENBRGUsRUFDVkEsQ0FBQyxDQUFDLENBQUQsQ0FEUyxFQUNKO0FBQ1pBLFFBQUMsQ0FBQyxDQUFELENBRmUsRUFFVkEsQ0FBQyxDQUFDLENBQUQsQ0FGUyxFQUVKO0FBQ1pBLFFBQUMsQ0FBQyxDQUFELENBSGUsRUFHVkEsQ0FBQyxDQUFDLENBQUQsQ0FIUyxFQUdKO0FBQ1pBLFFBQUMsQ0FBQyxDQUFELENBSmUsRUFJVkEsQ0FBQyxDQUFDLENBQUQsQ0FKUyxDQUFsQjtBQU9BLFdBQU14SyxHQUFHLEdBQUcsQ0FDVitKLENBQUMsQ0FBQyxDQUFELENBRFMsRUFDSkEsQ0FBQyxDQUFDLENBQUQsQ0FERyxFQUNFO0FBQ1pBLFFBQUMsQ0FBQyxDQUFELENBRlMsRUFFSkEsQ0FBQyxDQUFDLENBQUQsQ0FGRyxFQUVFO0FBQ1pBLFFBQUMsQ0FBQyxDQUFELENBSFMsRUFHSkEsQ0FBQyxDQUFDLENBQUQsQ0FIRyxFQUdFO0FBQ1pBLFFBQUMsQ0FBQyxDQUFELENBSlMsRUFJSkEsQ0FBQyxDQUFDLENBQUQsQ0FKRyxDQUFaO0FBT0EsV0FBTTlHLFFBQVEsR0FBRyxDQUNmMEgsUUFEZSxFQUVmQSxRQUZlLEVBR2ZBLFFBSGUsRUFJZkEsUUFKZSxDQUFqQjtBQU9BLGNBQU87QUFDTDdCLGtCQUFTLEVBQVRBLFNBREs7QUFFTDlJLFlBQUcsRUFBSEEsR0FGSztBQUdMaUQsaUJBQVEsRUFBUkEsUUFISztBQUlMaUYsWUFBRyxFQUFFLENBQUV1QyxTQUFGLEVBQWF2QyxHQUFHLENBQUMsQ0FBRCxDQUFoQjtBQUpBLFFBQVAsQ0E5Q3lELENBcUR6RDtBQUNEOzs7eUJBeE9VO0FBQ1QsY0FBTyxLQUFLOUQsS0FBWjtBQUNELE07dUJBRVF3RyxLLEVBQU87QUFDZCxZQUFLeEcsS0FBTCxHQUFhd0csS0FBYjtBQUNBLFlBQUtySSxNQUFMO0FBQ0Q7Ozt5QkFvRmE7QUFDWixjQUFPLEtBQUsrQixRQUFaO0FBQ0Q7Ozt5QkFFVTtBQUNULGNBQU8sS0FBS0QsS0FBWjtBQUNEOzs7O0dBaE11Qi9GLElBQUksQ0FBQ3VNLElBQUwsQ0FBVUMsSTs7aUJBQTlCdE0sVyxXQUVXLEc7O2lCQUZYQSxXLFlBR1k7QUFBQzBGLFVBQU8sRUFBRSxDQUFWO0FBQWF6QixXQUFRLEVBQUUsQ0FBdkI7QUFBMEJDLFlBQVMsRUFBRTtBQUFyQyxFOztpQkFIWmxFLFcsMkJBSzJCLEk7O2dCQXNVbEJBLFc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDL1VUa0csVTs7O0FBb0JKLHVCQUFZcUcsS0FBWixFQUFtQkMsTUFBbkIsRUFBMkI7QUFBQTs7QUFBQSxtQ0FsQnBCLEVBa0JvQjs7QUFBQSxtQ0FqQnBCLElBaUJvQjs7QUFBQSxzQ0FoQmpCLElBZ0JpQjs7QUFBQSx1Q0FmaEIsRUFlZ0I7O0FBQUEsb0NBZG5CLE1BY21COztBQUFBLHFDQWJsQixDQWFrQjs7QUFBQSxxQ0FabEIsQ0FZa0I7O0FBQUEsMkNBWFosR0FXWTs7QUFBQSx3Q0FWZixLQVVlOztBQUFBLDJDQVRaLEVBU1k7O0FBQUEsMkNBUlosQ0FRWTs7QUFBQSxxQ0FQbEIsQ0FPa0I7O0FBQUEseUNBTmQsQ0FNYzs7QUFBQSx5Q0FMZCxDQUtjOztBQUFBLHFDQUpsQixFQUlrQjs7QUFBQSxvQ0FIbkIsSUFHbUI7O0FBRXpCLFVBQUtELEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUsvRyxJQUFMLEdBQVkrRyxLQUFLLENBQUMvRyxJQUFsQjtBQUNBLFVBQUtDLElBQUwsR0FBWThHLEtBQUssQ0FBQzlHLElBQWxCO0FBQ0EsVUFBS1UsUUFBTCxHQUFnQnFHLE1BQU0sQ0FBQ3JHLFFBQXZCO0FBQ0EsVUFBS0MsU0FBTCxHQUFpQm9HLE1BQU0sQ0FBQ3BHLFNBQXhCO0FBQ0EsVUFBS0UsWUFBTCxHQUFvQmtHLE1BQU0sQ0FBQ2xHLFlBQTNCO0FBQ0EsVUFBS0csVUFBTCxHQUFrQitGLE1BQU0sQ0FBQy9GLFVBQXpCO0FBQ0EsVUFBS0QsS0FBTCxHQUFhZ0csTUFBTSxDQUFDaEcsS0FBcEI7QUFDQSxVQUFLekMsTUFBTDtBQUVEOzs7OzhCQUVRO0FBQUE7O0FBQ1AsWUFBS3lCLElBQUwsR0FBWSxLQUFLK0csS0FBTCxDQUFXL0csSUFBdkI7QUFDQSxZQUFLQyxJQUFMLEdBQVksS0FBSzhHLEtBQUwsQ0FBVzlHLElBQXZCO0FBRUEsWUFBS3dCLFlBQUwsR0FBb0IsS0FBS3pCLElBQUwsQ0FBVThELEtBQVYsQ0FBZ0IsRUFBaEIsRUFBb0I3RixNQUF4QztBQUNBLFlBQUtxRCxPQUFMLEdBQWUsS0FBS0MsV0FBTCxDQUFpQixLQUFLdEIsSUFBdEIsRUFBNEIsR0FBNUIsQ0FBZjtBQUNBLFlBQUtnSCxNQUFMLEdBQWMsS0FBSzNGLE9BQUwsQ0FBYUwsVUFBM0I7QUFDQSxZQUFLaUcsdUJBQUw7QUFFQSxZQUFLQyxNQUFMLEdBQWMsRUFBZDtBQUVBLFlBQUt0RixZQUFMLENBQWtCQyxPQUFsQixDQUEyQixVQUFBQyxJQUFJLEVBQUk7QUFDakMsY0FBSSxDQUFDcUYsU0FBTCxDQUFlckYsSUFBSSxDQUFDQSxJQUFwQixFQUEwQixDQUFDQSxJQUFJLENBQUNFLENBQU4sRUFBU0YsSUFBSSxDQUFDRyxDQUFkLENBQTFCO0FBQ0QsUUFGRDtBQUdEOzs7aUNBRVd2QixRLEVBQTZCO0FBQUEsV0FBbkJ1RSxXQUFtQix1RUFBTCxHQUFLO0FBQUEsd0JBRWdDLEtBQUtqRixJQUZyQztBQUFBLFdBRWhDa0YsVUFGZ0MsY0FFaENBLFVBRmdDO0FBQUEsV0FFcEJDLFFBRm9CLGNBRXBCQSxRQUZvQjtBQUFBLFdBRUZDLFVBRkUsY0FFVkMsTUFGVTtBQUFBLFdBRVdDLE9BRlgsY0FFV0EsT0FGWDtBQUFBLFdBRW9CQyxRQUZwQixjQUVvQkEsUUFGcEI7QUFJdkMsV0FBTWxCLFFBQVEsR0FBRyxLQUFLM0QsUUFBTCxHQUFnQndFLFVBQWpDO0FBQ0EsV0FBTU0sUUFBUSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBWVAsUUFBUSxHQUFHZCxRQUF2QixJQUFvQ2MsUUFBckQ7QUFDQSxXQUFNRSxNQUFNLEdBQUdJLElBQUksQ0FBQ0MsS0FBTCxDQUFZTixVQUFVLEdBQUdmLFFBQXpCLENBQWY7QUFDQSxXQUFJckQsVUFBVSxHQUFHeUUsSUFBSSxDQUFDQyxLQUFMLENBQVlyQixRQUFRLElBQUtlLFVBQVUsR0FBR0UsT0FBYixHQUF1QkMsUUFBNUIsQ0FBUixHQUFpRE4sV0FBN0QsQ0FBakI7QUFFQSxXQUFJLEtBQUtqRSxVQUFMLEdBQWtCLENBQXRCLEVBQ0VBLFVBQVUsR0FBRyxLQUFLQSxVQUFsQixDQURGLEtBR0UsS0FBS0EsVUFBTCxHQUFrQkEsVUFBbEI7QUFFRixjQUFPO0FBQ0xxRCxpQkFBUSxFQUFLQSxRQURSO0FBRUxtQixpQkFBUSxFQUFLQSxRQUZSO0FBR0xILGVBQU0sRUFBUUEsTUFIVDtBQUlMckUsbUJBQVUsRUFBR0E7QUFKUixRQUFQO0FBTUQ7Ozs4QkFFU2lELEcsRUFBS08sUyxFQUF3QjtBQUFBLFdBQWJFLElBQWEsdUVBQU4sR0FBTTtBQUVyQztBQUNBLFdBQUlpQixPQUFPLEdBQUcsQ0FBRW5CLFNBQVMsQ0FBQ29CLEtBQVYsR0FBa0IsQ0FBcEIsTUFBNEIsQ0FBMUMsQ0FIcUMsQ0FLckM7O0FBQ0EsV0FBSUMsUUFBUSxHQUFHNUIsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTLEtBQUs1QyxPQUFMLENBQWFnRSxNQUFyQyxDQU5xQyxDQVFyQzs7QUFDQSxXQUFJbEksS0FBSyxHQUFHd0ksT0FBTyxHQUFHLEtBQUt0RSxPQUFMLENBQWFtRSxRQUFoQixHQUEyQixLQUFLbkUsT0FBTCxDQUFhZ0QsUUFBM0QsQ0FUcUMsQ0FXckM7O0FBQ0EsV0FBSXlCLENBQUMsR0FBUXRCLFNBQVMsQ0FBQ0csSUFBdkI7QUFDQSxXQUFJb0IsTUFBTSxHQUFHRixRQUFRLEdBQUcxSSxLQUFLLElBQUssS0FBSzZDLElBQUwsQ0FBVXNGLE9BQVYsR0FBb0IsS0FBS3RGLElBQUwsQ0FBVWdHLEVBQW5DLENBQTdCO0FBQ0EsV0FBSUMsR0FBRyxHQUFNRixNQUFNLEdBQUs1SSxLQUFLLEdBQUssS0FBSzZDLElBQUwsQ0FBVWtHLFVBQTVDO0FBQ0EsV0FBSUMsSUFBSSxHQUFLbEMsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFXOUcsS0FBSyxJQUFLcUgsU0FBUyxDQUFDNEIsU0FBVixHQUFzQjFCLElBQXRCLEdBQTZCLEtBQUsxRSxJQUFMLENBQVVxRyxFQUE1QyxDQUE3QjtBQUNBLFdBQUlDLEtBQUssR0FBSUgsSUFBSSxHQUFPaEosS0FBSyxJQUFLMkksQ0FBQyxDQUFDLENBQUQsQ0FBRCxHQUFPQSxDQUFDLENBQUMsQ0FBRCxDQUFiLENBQTdCO0FBQ0EsV0FBSVMsQ0FBQyxHQUFHLENBQUVKLElBQUYsRUFBUUYsR0FBUixFQUFhSyxLQUFiLEVBQW9CUCxNQUFwQixDQUFSLENBakJxQyxDQW1CckM7O0FBQ0EsV0FBSVMsU0FBUyxHQUFHdkMsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTOUcsS0FBSyxHQUFLcUgsU0FBUyxDQUFDaUMsU0FBN0M7QUFFQSxXQUFNNUIsU0FBUyxHQUFHLENBQ2hCMEIsQ0FBQyxDQUFDLENBQUQsQ0FEZSxFQUNWQSxDQUFDLENBQUMsQ0FBRCxDQURTLEVBQ0o7QUFDWkEsUUFBQyxDQUFDLENBQUQsQ0FGZSxFQUVWQSxDQUFDLENBQUMsQ0FBRCxDQUZTLEVBRUo7QUFDWkEsUUFBQyxDQUFDLENBQUQsQ0FIZSxFQUdWQSxDQUFDLENBQUMsQ0FBRCxDQUhTLEVBR0o7QUFDWkEsUUFBQyxDQUFDLENBQUQsQ0FKZSxFQUlWQSxDQUFDLENBQUMsQ0FBRCxDQUpTLENBQWxCO0FBT0EsY0FBTztBQUNMMUIsa0JBQVMsRUFBVEEsU0FESztBQUVMWixZQUFHLEVBQUUsQ0FBRXVDLFNBQUYsRUFBYXZDLEdBQUcsQ0FBQyxDQUFELENBQWhCLENBRkE7QUFHTDVDLGdCQUFPLEVBQUU7QUFBQ1csWUFBQyxFQUFFaUMsR0FBRyxDQUFDLENBQUQsQ0FBUDtBQUFZaEMsWUFBQyxFQUFFZ0MsR0FBRyxDQUFDLENBQUQsQ0FBbEI7QUFBdUJtRCxnQkFBSyxFQUFFakssS0FBSyxHQUFHcUgsU0FBUyxDQUFDaUM7QUFBaEQ7QUFISixRQUFQO0FBS0Q7OzttQ0FFYS9DLE0sRUFBUTtBQUFBOztBQUVwQixXQUFJMEQsS0FBSyxHQUFHLENBQVo7QUFDQSxXQUFJQyxNQUFNLEdBQUcsS0FBS2hHLE9BQUwsQ0FBYUwsVUFBMUI7O0FBRUEsV0FBTXlELEtBQUssc0JBQU9mLE1BQVAsQ0FBWCxDQUxvQixDQU9wQjs7O0FBQ0FlLFlBQUssQ0FBQzVDLE9BQU4sQ0FBYyxVQUFBeUYsS0FBSSxFQUFJO0FBQ3BCLGFBQUk5QyxTQUFTLEdBQUcsTUFBSSxDQUFDeEUsSUFBTCxDQUFVeUUsS0FBVixDQUFpQjZDLEtBQWpCLENBQWhCO0FBRUE7Ozs7QUFLQTs7QUFDQSxhQUFJMUMsUUFBUSxHQUFHLE1BQUksQ0FBQ0EsUUFBTCxDQUFjLENBQUN3QyxLQUFELEVBQU8sQ0FBUCxDQUFkLEVBQXlCNUMsU0FBekIsRUFBb0MsR0FBcEMsQ0FBZjs7QUFDQTRDLGNBQUssR0FBR3hDLFFBQVEsQ0FBQ1gsR0FBVCxDQUFhLENBQWIsQ0FBUjtBQUVELFFBWkQ7QUFjQSxjQUFPO0FBQUNtRCxjQUFLLEVBQUxBLEtBQUQ7QUFBUUMsZUFBTSxFQUFOQTtBQUFSLFFBQVA7QUFFRDs7OytDQUV5QjtBQUFBOztBQUV4QixXQUFNRSxLQUFLLEdBQUcsS0FBS3hILElBQUwsQ0FBVThELEtBQVYsQ0FBZ0IsR0FBaEIsQ0FBZDs7QUFFQSxZQUFLLElBQUkyRCxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxLQUFLLENBQUN2SixNQUFOLEdBQWUsQ0FBbkMsRUFBc0N3SixDQUFDLEVBQXZDLEVBQTJDO0FBQ3pDRCxjQUFLLENBQUNDLENBQUQsQ0FBTCxHQUFXRCxLQUFLLENBQUNDLENBQUQsQ0FBTCxHQUFXLEdBQXRCO0FBQ0Q7O0FBRUQsWUFBSzVGLFlBQUwsR0FBb0IsRUFBcEIsQ0FSd0IsQ0FVeEI7O0FBQ0EsV0FBSUksQ0FBQyxHQUFHLEtBQUt5RixNQUFiO0FBQ0EsV0FBSXhGLENBQUMsR0FBRyxLQUFLK0UsTUFBYixDQVp3QixDQWN4Qjs7QUFDQU8sWUFBSyxDQUFDMUYsT0FBTixDQUFjLFVBQUFDLElBQUksRUFBSTtBQUNwQixhQUFNNEYsUUFBUSxHQUFHLE1BQUksQ0FBQ0MsYUFBTCxDQUFtQjdGLElBQW5CLENBQWpCOztBQUNBLGFBQUlFLENBQUMsR0FBRzBGLFFBQVEsQ0FBQ04sS0FBYixHQUFxQixNQUFJLENBQUNLLE1BQUwsR0FBYyxNQUFJLENBQUM1RyxZQUF4QyxJQUF3RCxNQUFJLENBQUNGLFNBQWpFLEVBQTRFO0FBQzFFcUIsWUFBQyxHQUFHLE1BQUksQ0FBQ3lGLE1BQVQ7QUFDQXhGLFlBQUMsSUFBSXlGLFFBQVEsQ0FBQ0wsTUFBZDtBQUNEOztBQUVELGVBQUksQ0FBQ3pGLFlBQUwsQ0FBa0JnRyxJQUFsQixjQUEyQkYsUUFBM0I7QUFBcUMxRixZQUFDLEVBQURBLENBQXJDO0FBQXdDQyxZQUFDLEVBQURBLENBQXhDO0FBQTJDSCxlQUFJLEVBQUpBO0FBQTNDLGFBUG9CLENBU3BCOzs7QUFDQUUsVUFBQyxJQUFJMEYsUUFBUSxDQUFDTixLQUFkO0FBQ0QsUUFYRCxFQWZ3QixDQTRCeEI7O0FBQ0EsWUFBS1MsVUFBTCxHQUFrQixDQUFDNUYsQ0FBQyxHQUFHLEtBQUsrRSxNQUFWLElBQW9CLEtBQUszRixPQUFMLENBQWFMLFVBQWpDLEdBQThDLENBQWhFO0FBQ0EsWUFBS3FHLE1BQUwsR0FBYyxLQUFLUSxVQUFMLEdBQWtCLEtBQUt4RyxPQUFMLENBQWFMLFVBQTdDLENBOUJ3QixDQWdDeEI7O0FBaEN3QixrQ0FpQ2Z3RyxFQWpDZTtBQWtDdEIsYUFBTU0sV0FBVyxHQUFHLE1BQUksQ0FBQ2xHLFlBQUwsQ0FBa0JtRyxNQUFsQixDQUF5QixVQUFBakcsSUFBSTtBQUFBLGtCQUFJQSxJQUFJLENBQUNHLENBQUwsS0FBVyxNQUFJLENBQUMrRSxNQUFMLEdBQWVRLEVBQUMsR0FBRyxNQUFJLENBQUNuRyxPQUFMLENBQWFMLFVBQS9DO0FBQUEsVUFBN0IsQ0FBcEI7O0FBRUEsYUFBTWdILFFBQVEsR0FBR0YsV0FBVyxDQUFDQSxXQUFXLENBQUM5SixNQUFaLEdBQXFCLENBQXRCLENBQTVCOztBQUVBLGFBQUlnSyxRQUFKLEVBQWM7QUFDWixlQUFNQyxTQUFTLEdBQUksTUFBSSxDQUFDUixNQUFMLEdBQWMsTUFBSSxDQUFDNUcsWUFBcEIsSUFBcUNtSCxRQUFRLENBQUNoRyxDQUFULEdBQWFnRyxRQUFRLENBQUNaLEtBQTNELENBQWxCO0FBRUEsZUFBSWMsVUFBVSxHQUFHLENBQWpCOztBQUVBLG1CQUFRLE1BQUksQ0FBQ25ILEtBQWI7QUFDRSxrQkFBSyxRQUFMO0FBQ0VtSCx5QkFBVSxHQUFHRCxTQUFTLEdBQUcsQ0FBekI7QUFDQTs7QUFDRixrQkFBSyxPQUFMO0FBQ0VDLHlCQUFVLEdBQUdELFNBQWI7QUFDQTtBQU5KOztBQVFBLGlCQUFJLENBQUNyRyxZQUFMLENBQWtCQyxPQUFsQixDQUEwQixVQUFBQyxJQUFJLEVBQUk7QUFDaEMsaUJBQUlBLElBQUksQ0FBQ0csQ0FBTCxLQUFXLE1BQUksQ0FBQytFLE1BQUwsR0FBZVEsRUFBQyxHQUFHLE1BQUksQ0FBQ25HLE9BQUwsQ0FBYUwsVUFBL0MsRUFBNEQ7QUFDMURjLG1CQUFJLENBQUNFLENBQUwsSUFBVWtHLFVBQVY7QUFDRDtBQUNGLFlBSkQ7QUFLRDtBQXhEcUI7O0FBaUN4QixZQUFLLElBQUlWLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUcsS0FBS0ssVUFBekIsRUFBcUMsRUFBRUwsRUFBdkMsRUFBMEM7QUFBQSxlQUFqQ0EsRUFBaUM7QUF3QnpDO0FBQ0Y7OzsrQkFFVTlELE0sRUFBUU8sRyxFQUFLO0FBQ3RCLFdBQUlDLFNBQVMsR0FBRyxHQUFoQixDQURzQixDQUNBOztBQUN0QixXQUFJQyxJQUFJLEdBQVFGLEdBQWhCLENBRnNCLENBRUE7O0FBQ3RCLFdBQUlHLEtBQUssR0FBTyxHQUFoQixDQUhzQixDQUdBOztBQUN0QixXQUFJakgsS0FBSyxHQUFPLEtBQUtrRSxPQUFMLENBQWFnRCxRQUE3QjtBQUVBLFdBQUlDLE9BQU8sR0FBRyxDQUFkOztBQUVBLGdCQUFRO0FBQ04sYUFBS0EsT0FBTyxLQUFLWixNQUFNLENBQUMxRixNQUF4QixFQUFpQztBQUVqQyxhQUFJdUcsS0FBSyxHQUFHYixNQUFNLENBQUVZLE9BQUYsQ0FBbEI7QUFDQUEsZ0JBQU87O0FBRVAsYUFBS0MsS0FBSyxLQUFLLElBQWYsRUFBc0I7QUFDcEIsZUFBS0osSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVQyxLQUFmLEVBQXVCQSxLQUFLLEdBQUdELElBQUksQ0FBQyxDQUFELENBQVosQ0FESCxDQUNvQjs7QUFDeENBLGVBQUksQ0FBQyxDQUFELENBQUosR0FBV0YsR0FBRyxDQUFDLENBQUQsQ0FBZDtBQUNBRSxlQUFJLENBQUMsQ0FBRCxDQUFKLElBQVcsS0FBSzlDLE9BQUwsQ0FBYUwsVUFBeEI7QUFDQWtELG9CQUFTLEdBQUcsR0FBWjtBQUNBO0FBQ0Q7O0FBRUQsYUFBS0ssS0FBSyxLQUFLLEdBQWYsRUFBcUI7QUFDbkI7QUFDQTtBQUNBTCxvQkFBUyxHQUFHLEdBQVosQ0FIbUIsQ0FJbkI7QUFDRDs7QUFFRCxhQUFJTSxTQUFTLEdBQUcsS0FBS3hFLElBQUwsQ0FBVXlFLEtBQVYsQ0FBaUJGLEtBQWpCLENBQWhCOztBQUNBLGFBQUssQ0FBQ0MsU0FBTixFQUFrQjtBQUEwQjtBQUMxQ0QsZ0JBQUssR0FBRyxHQUFSO0FBQ0FDLG9CQUFTLEdBQUcsS0FBS3hFLElBQUwsQ0FBVXlFLEtBQVYsQ0FBaUIsR0FBakIsQ0FBWjtBQUNEOztBQUVELGFBQUlDLElBQUksR0FBRyxLQUFLMUUsSUFBTCxDQUFVMEUsSUFBVixDQUFnQlIsU0FBUyxHQUFHSyxLQUE1QixDQUFYO0FBQ0EsYUFBSyxDQUFDRyxJQUFOLEVBQWFBLElBQUksR0FBRyxHQUFQLENBNUJQLENBOEJOOztBQUNBLGFBQUlDLElBQUksR0FBRyxLQUFLQyxRQUFMLENBQWVULElBQWYsRUFBcUJLLFNBQXJCLEVBQWdDRSxJQUFoQyxDQUFYO0FBRUFSLGtCQUFTLEdBQUdLLEtBQVo7QUFDQUosYUFBSSxHQUFHUSxJQUFJLENBQUNWLEdBQVo7QUFFQSxjQUFLaUQsTUFBTCxDQUFZVSxJQUFaLENBQWlCO0FBQ2ZPLGlCQUFNLEVBQUU1RCxLQURPO0FBRWZuSSxtQkFBUSxFQUFFdUksSUFBSSxDQUFDRSxTQUZBO0FBR2Z1RCxtQkFBUSxFQUFFekQsSUFBSSxDQUFDVixHQUhBO0FBSWY1QyxrQkFBTyxFQUFFc0QsSUFBSSxDQUFDdEQ7QUFKQyxVQUFqQjtBQU1EO0FBQ0Y7Ozs7OztnQkFJWVosVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFQZixLQUFNWCxhQUFhLEdBQUcsbUJBQU8sQ0FBQyxDQUFELENBQTdCOztLQUVNbUIsTTs7O0FBU0osbUJBQVk2RixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0NBUFgsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQU9XOztBQUFBLHNDQU5ULElBTVM7O0FBQUEscUNBTFYsSUFLVTs7QUFBQSxvQ0FKWCxLQUlXOztBQUFBLDBDQUhMLEtBR0s7O0FBQUEsb0NBRlgsSUFFVzs7QUFDakIsVUFBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS3pGLE9BQUwsR0FBZXlGLEtBQUssQ0FBQ3pGLE9BQXJCO0FBQ0EsVUFBS2IsTUFBTCxHQUFjc0csS0FBSyxDQUFDdEcsTUFBcEI7QUFDRDs7Ozs4QkFFUTtBQUNQLFlBQUthLE9BQUwsR0FBZSxLQUFLeUYsS0FBTCxDQUFXekYsT0FBMUI7QUFDQSxZQUFLYixNQUFMLEdBQWMsS0FBS3NHLEtBQUwsQ0FBV3RHLE1BQXpCLENBRk8sQ0FJUDs7QUFDQSxZQUFLcEUsUUFBTCxHQUFnQixJQUFJbUYsWUFBSixDQUFpQixLQUFLZixNQUFMLENBQVlxSCxVQUFaLEdBQXlCLENBQXpCLEdBQTZCLENBQTlDLENBQWhCO0FBRUEsV0FBSSxLQUFLUSxLQUFMLENBQVcsQ0FBWCxNQUFrQixJQUF0QixFQUNBLEtBQUtDLGFBQUw7QUFFQSxZQUFLcE0sT0FBTCxHQUFlNEQsYUFBYSxDQUFDO0FBQzNCb0Msa0JBQVMsRUFBRSxJQURnQjtBQUUzQkMsYUFBSSxFQUFFLFFBRnFCO0FBRzNCQyxjQUFLLEVBQUMsS0FBSzVCLE1BQUwsQ0FBWXFIO0FBSFMsUUFBRCxDQUE1QjtBQU1BLFlBQUtqTSxLQUFMLEdBQWEsSUFBYjtBQUNBLFlBQUtLLFdBQUwsR0FBbUIsSUFBbkI7QUFDRDs7O2dDQUVrQztBQUFBLFdBQTFCc00sS0FBMEIsdUVBQWxCLElBQWtCO0FBQUEsV0FBWkMsR0FBWSx1RUFBTixJQUFNO0FBQUEsV0FFMUJ0QixNQUYwQixHQUVoQixLQUFLSixLQUFMLENBQVd0RyxNQUZLLENBRTFCMEcsTUFGMEI7QUFJakMsV0FBSXFCLEtBQUssS0FBSyxJQUFkLEVBQW9CQSxLQUFLLEdBQUcsS0FBS0YsS0FBTCxDQUFXLENBQVgsQ0FBUjtBQUNwQixXQUFJRyxHQUFHLEtBQUssSUFBWixFQUFrQkEsR0FBRyxHQUFHLEtBQUtILEtBQUwsQ0FBVyxDQUFYLENBQU47QUFFbEIsV0FBSUUsS0FBSyxHQUFHLENBQVosRUFBZUEsS0FBSyxHQUFHLENBQVI7QUFDZixXQUFJQyxHQUFHLEdBQUcsQ0FBVixFQUFhQSxHQUFHLEdBQUcsQ0FBTjtBQUViLFdBQUlELEtBQUssR0FBR3JCLE1BQU0sQ0FBQ2xKLE1BQVAsR0FBZSxDQUEzQixFQUE2QnVLLEtBQUssR0FBR3JCLE1BQU0sQ0FBQ2xKLE1BQVAsR0FBZ0IsQ0FBeEI7QUFDN0IsV0FBSXdLLEdBQUcsR0FBR3RCLE1BQU0sQ0FBQ2xKLE1BQVAsR0FBZ0IsQ0FBMUIsRUFBNkJ3SyxHQUFHLEdBQUd0QixNQUFNLENBQUNsSixNQUFQLEdBQWdCLENBQXRCO0FBRTdCLFdBQUl3SyxHQUFHLEtBQUssS0FBWixFQUFtQkEsR0FBRyxHQUFHLElBQU47QUFFbkIsWUFBS0gsS0FBTCxHQUFhLENBQUNFLEtBQUQsRUFBUUMsR0FBUixDQUFiO0FBQ0EsWUFBS2xLLE1BQUw7QUFDRDs7O3FDQUVlO0FBQUE7O0FBRWQ7QUFDQSxXQUFJaUssS0FBSyxHQUFHLEtBQUsvSCxNQUFMLENBQVkwRyxNQUFaLENBQW1CekIsSUFBSSxDQUFDZ0QsR0FBTCxDQUFTQyxLQUFULENBQWUsSUFBZixFQUFvQixLQUFLTCxLQUF6QixDQUFuQixDQUFaO0FBQ0EsV0FBSUcsR0FBRyxHQUFHLEtBQUtoSSxNQUFMLENBQVkwRyxNQUFaLENBQW1CekIsSUFBSSxDQUFDa0QsR0FBTCxDQUFTRCxLQUFULENBQWUsSUFBZixFQUFvQixLQUFLTCxLQUF6QixDQUFuQixDQUFWLENBSmMsQ0FPZDs7QUFQYyxrQ0FRTGIsQ0FSSztBQVNaLGFBQUlvQixXQUFXLEdBQUcsQ0FBbEIsQ0FUWSxDQVNTOztBQUNyQixhQUFJQyxXQUFXLEdBQUcsSUFBbEIsQ0FWWSxDQVVZOztBQUN4QixhQUFJQyxVQUFVLEdBQUcsSUFBakIsQ0FYWSxDQVdXOztBQUl2QixhQUFJdEIsQ0FBQyxHQUFHLEtBQUksQ0FBQ25HLE9BQUwsQ0FBYUwsVUFBakIsR0FBOEIsS0FBSSxDQUFDSyxPQUFMLENBQWFMLFVBQTNDLEdBQXdEdUgsS0FBSyxDQUFDSCxRQUFOLENBQWUsQ0FBZixDQUE1RCxFQUErRTtBQUMvRSxhQUFJWixDQUFDLEdBQUcsS0FBSSxDQUFDbkcsT0FBTCxDQUFhTCxVQUFqQixHQUE4QixLQUFJLENBQUNLLE9BQUwsQ0FBYUwsVUFBM0MsR0FBd0R3SCxHQUFHLENBQUNKLFFBQUosQ0FBYSxDQUFiLENBQTVELEVBQTZFLGtCQWhCakUsQ0FrQlo7O0FBQ0EsY0FBSSxDQUFDNUgsTUFBTCxDQUFZb0IsWUFBWixDQUF5QmtELEdBQXpCLENBQTZCLFVBQUFoRCxJQUFJLEVBQUk7QUFFbkMsZUFBSUEsSUFBSSxDQUFDRyxDQUFMLEtBQVcsS0FBSSxDQUFDekIsTUFBTCxDQUFZd0csTUFBWixHQUFzQlEsQ0FBQyxHQUFHLEtBQUksQ0FBQ25HLE9BQUwsQ0FBYUwsVUFBdEQsRUFBbUU7QUFDakUsaUJBQUk2SCxXQUFXLEtBQUssSUFBcEIsRUFBMEJBLFdBQVcsR0FBR0QsV0FBZDtBQUMxQkUsdUJBQVUsR0FBR0YsV0FBVyxHQUFHOUcsSUFBSSxDQUFDQSxJQUFMLENBQVU5RCxNQUF4QixHQUFpQyxDQUE5QztBQUNEOztBQUVENEssc0JBQVcsSUFBSTlHLElBQUksQ0FBQ0EsSUFBTCxDQUFVOUQsTUFBekI7QUFDRCxVQVJELEVBbkJZLENBNkJaOzs7QUFDQSxhQUFJK0ssZUFBZSxHQUFHLEtBQUksQ0FBQ3ZJLE1BQUwsQ0FBWTBHLE1BQVosQ0FBbUIyQixXQUFuQixDQUF0QjtBQUNBLGFBQUlHLGFBQWEsR0FBRyxLQUFJLENBQUN4SSxNQUFMLENBQVkwRyxNQUFaLENBQW1CNEIsVUFBbkIsQ0FBcEIsQ0EvQlksQ0FtQ1o7O0FBQ0EsYUFBSVAsS0FBSyxDQUFDSCxRQUFOLENBQWUsQ0FBZixNQUF1QlcsZUFBZSxDQUFDWCxRQUFoQixDQUF5QixDQUF6QixDQUEzQixFQUF3RFcsZUFBZSxHQUFHUixLQUFsQjtBQUN4RCxhQUFJQyxHQUFHLENBQUNKLFFBQUosQ0FBYSxDQUFiLE1BQW9CWSxhQUFhLENBQUNaLFFBQWQsQ0FBdUIsQ0FBdkIsQ0FBeEIsRUFBbURZLGFBQWEsR0FBR1IsR0FBaEIsQ0FyQ3ZDLENBdUNaOztBQUNBLGFBQU1TLE1BQU0sR0FBRyxDQUFDLEtBQUksQ0FBQzVILE9BQUwsQ0FBYUwsVUFBYixHQUEwQixLQUFJLENBQUNLLE9BQUwsQ0FBYWdFLE1BQXhDLElBQWtELENBQWpFLENBeENZLENBMENaOztBQUNBLGNBQUksQ0FBQ2pKLFFBQUwsQ0FBZW9MLENBQUMsR0FBRyxDQUFuQixJQUF5QnVCLGVBQWUsQ0FBQzNNLFFBQWhCLENBQXlCLENBQXpCLENBQXpCO0FBQ0EsY0FBSSxDQUFDQSxRQUFMLENBQWVvTCxDQUFDLEdBQUcsQ0FBTCxHQUFVLENBQXhCLElBQTZCdUIsZUFBZSxDQUFDM00sUUFBaEIsQ0FBeUIsQ0FBekIsSUFBOEI2TSxNQUEzRDtBQUVBLGNBQUksQ0FBQzdNLFFBQUwsQ0FBZW9MLENBQUMsR0FBRyxDQUFMLEdBQVUsQ0FBeEIsSUFBNkJ3QixhQUFhLENBQUM1TSxRQUFkLENBQXVCLENBQXZCLENBQTdCO0FBQ0EsY0FBSSxDQUFDQSxRQUFMLENBQWVvTCxDQUFDLEdBQUcsQ0FBTCxHQUFVLENBQXhCLElBQTZCd0IsYUFBYSxDQUFDNU0sUUFBZCxDQUF1QixDQUF2QixJQUE4QjZNLE1BQTNEO0FBRUEsY0FBSSxDQUFDN00sUUFBTCxDQUFlb0wsQ0FBQyxHQUFHLENBQUwsR0FBVSxDQUF4QixJQUE2QndCLGFBQWEsQ0FBQzVNLFFBQWQsQ0FBdUIsQ0FBdkIsQ0FBN0I7QUFDQSxjQUFJLENBQUNBLFFBQUwsQ0FBZW9MLENBQUMsR0FBRyxDQUFMLEdBQVUsQ0FBeEIsSUFBNkJ3QixhQUFhLENBQUM1TSxRQUFkLENBQXVCLENBQXZCLElBQTZCNk0sTUFBMUQ7QUFFQSxjQUFJLENBQUM3TSxRQUFMLENBQWVvTCxDQUFDLEdBQUcsQ0FBTCxHQUFVLENBQXhCLElBQTZCdUIsZUFBZSxDQUFDM00sUUFBaEIsQ0FBeUIsQ0FBekIsQ0FBN0I7QUFDQSxjQUFJLENBQUNBLFFBQUwsQ0FBZW9MLENBQUMsR0FBRyxDQUFMLEdBQVUsQ0FBeEIsSUFBNkJ1QixlQUFlLENBQUMzTSxRQUFoQixDQUF5QixDQUF6QixJQUErQjZNLE1BQTVEO0FBckRZOztBQVFkLFlBQUssSUFBSXpCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS2hILE1BQUwsQ0FBWXFILFVBQWhDLEVBQTRDLEVBQUVMLENBQTlDLEVBQWlEO0FBQUEsMEJBQXhDQSxDQUF3Qzs7QUFBQSxrQ0FROEI7QUF1QzlFO0FBRUY7OztxQ0FFZXhGLEMsRUFBR0MsQyxFQUFHO0FBQUEsV0FFWmlGLE1BRlksR0FFRCxLQUFLSixLQUFMLENBQVd0RyxNQUZWLENBRVowRyxNQUZZO0FBSXBCLFdBQU1sRyxVQUFVLEdBQUcsS0FBS0ssT0FBTCxDQUFhTCxVQUFoQztBQUNBLFdBQU1rSSxhQUFhLEdBQUd6RCxJQUFJLENBQUMwRCxLQUFMLENBQVdsSCxDQUFDLEdBQUcsS0FBS1osT0FBTCxDQUFhTCxVQUE1QixDQUF0QjtBQUNBLFdBQU1vSSxjQUFjLEdBQUdGLGFBQWEsR0FBR2xJLFVBQXZDO0FBQ0EsV0FBSXFJLGVBQWUsR0FBR25DLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDbEosTUFBUCxHQUFnQixDQUFqQixDQUE1QjtBQUNBLFdBQUlzTCxnQkFBZ0IsR0FBRyxJQUF2Qjs7QUFFQSxZQUFLLElBQUk5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixNQUFNLENBQUNsSixNQUEzQixFQUFvQyxFQUFFd0osQ0FBdEMsRUFBeUM7QUFFdkMsYUFBSStCLEtBQUssR0FBR3JDLE1BQU0sQ0FBQ00sQ0FBRCxDQUFsQjs7QUFFQSxhQUFJK0IsS0FBSyxDQUFDbEksT0FBTixDQUFjWSxDQUFkLEtBQW9CbUgsY0FBYyxHQUFHcEksVUFBekMsRUFBcUQ7QUFFbkRxSSwwQkFBZSxHQUFHRSxLQUFsQjs7QUFFQSxlQUFJdkgsQ0FBQyxHQUFHdUgsS0FBSyxDQUFDbEksT0FBTixDQUFjVyxDQUFkLEdBQWtCdUgsS0FBSyxDQUFDbEksT0FBTixDQUFjK0YsS0FBZCxHQUFzQixDQUFoRCxFQUFtRDtBQUVqRCxpQkFBSUksQ0FBQyxLQUFLLENBQVYsRUFBYSxPQUFPLENBQUMsQ0FBUjtBQUNiLG9CQUFPTixNQUFNLENBQUNNLENBQUMsR0FBRyxDQUFMLENBQWI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsY0FBTzZCLGVBQVA7QUFFRDs7O2lDQUVXRyxLLEVBQU87QUFFakI7QUFDQSxXQUFJQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsTUFBWCxLQUFzQixDQUExQixFQUE2QjtBQUU3QixXQUFJdEIsUUFBUSxHQUFHb0IsS0FBSyxDQUFDQyxJQUFOLENBQVdFLE1BQTFCO0FBRUF2QixlQUFRLENBQUNwRyxDQUFULElBQWMsS0FBSzhFLEtBQUwsQ0FBV3NCLFFBQVgsQ0FBb0JwRyxDQUFsQztBQUNBb0csZUFBUSxDQUFDbkcsQ0FBVCxJQUFjLEtBQUs2RSxLQUFMLENBQVdzQixRQUFYLENBQW9CbkcsQ0FBbEM7QUFFQW1HLGVBQVEsQ0FBQ3BHLENBQVQsR0FBYW9HLFFBQVEsQ0FBQ3BHLENBQVQsR0FBYyxLQUFLOEUsS0FBTCxDQUFXM0osS0FBWCxDQUFpQjZFLENBQTVDO0FBQ0FvRyxlQUFRLENBQUNuRyxDQUFULEdBQWFtRyxRQUFRLENBQUNuRyxDQUFULEdBQWEsS0FBSzZFLEtBQUwsQ0FBVzNKLEtBQVgsQ0FBaUI4RSxDQUEzQztBQUVBLFdBQU0ySCxhQUFhLEdBQUcsS0FBS0MsZUFBTCxDQUFxQnpCLFFBQVEsQ0FBQ3BHLENBQTlCLEVBQWtDb0csUUFBUSxDQUFDbkcsQ0FBM0MsQ0FBdEI7QUFDQSxXQUFJd0IsS0FBSyxHQUFHLEtBQUtxRCxLQUFMLENBQVd0RyxNQUFYLENBQWtCMEcsTUFBbEIsQ0FBeUI0QyxPQUF6QixDQUFpQ0YsYUFBakMsQ0FBWjtBQUVBLFlBQUsxRyxRQUFMLENBQWNPLEtBQUssR0FBRyxDQUF0QixFQUF5QixLQUF6QjtBQUNEOzs7aUNBRVcrRixLLEVBQU87QUFFakIsV0FBSXBCLFFBQVEsR0FBR29CLEtBQUssQ0FBQ0MsSUFBTixDQUFXRSxNQUExQjtBQUVBdkIsZUFBUSxDQUFDcEcsQ0FBVCxJQUFjLEtBQUs4RSxLQUFMLENBQVdzQixRQUFYLENBQW9CcEcsQ0FBbEM7QUFDQW9HLGVBQVEsQ0FBQ25HLENBQVQsSUFBYyxLQUFLNkUsS0FBTCxDQUFXc0IsUUFBWCxDQUFvQm5HLENBQWxDO0FBRUFtRyxlQUFRLENBQUNwRyxDQUFULEdBQWFvRyxRQUFRLENBQUNwRyxDQUFULEdBQWEsS0FBSzhFLEtBQUwsQ0FBVzNKLEtBQVgsQ0FBaUI2RSxDQUEzQztBQUNBb0csZUFBUSxDQUFDbkcsQ0FBVCxHQUFhbUcsUUFBUSxDQUFDbkcsQ0FBVCxHQUFhLEtBQUs2RSxLQUFMLENBQVczSixLQUFYLENBQWlCOEUsQ0FBM0M7QUFFQSxXQUFNMkgsYUFBYSxHQUFHLEtBQUtDLGVBQUwsQ0FBcUJ6QixRQUFRLENBQUNwRyxDQUE5QixFQUFtQ29HLFFBQVEsQ0FBQ25HLENBQTVDLENBQXRCO0FBQ0EsV0FBSXdCLEtBQUssR0FBRyxLQUFLcUQsS0FBTCxDQUFXdEcsTUFBWCxDQUFrQjBHLE1BQWxCLENBQXlCNEMsT0FBekIsQ0FBaUNGLGFBQWpDLENBQVo7QUFFQSxZQUFLMUcsUUFBTCxDQUFjLElBQWQsRUFBb0JPLEtBQUssR0FBRyxDQUE1QjtBQUNEOzs7K0JBRVMrRixLLEVBQU87QUFFZjtBQUNBLFdBQUlBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxNQUFYLEtBQXNCLENBQTFCLEVBQTZCO0FBRTdCLFdBQUl0QixRQUFRLEdBQUdvQixLQUFLLENBQUNDLElBQU4sQ0FBV0UsTUFBMUI7QUFFQXZCLGVBQVEsQ0FBQ3BHLENBQVQsSUFBYyxLQUFLOEUsS0FBTCxDQUFXc0IsUUFBWCxDQUFvQnBHLENBQWxDO0FBQ0FvRyxlQUFRLENBQUNuRyxDQUFULElBQWMsS0FBSzZFLEtBQUwsQ0FBV3NCLFFBQVgsQ0FBb0JuRyxDQUFsQztBQUVBbUcsZUFBUSxDQUFDcEcsQ0FBVCxHQUFhb0csUUFBUSxDQUFDcEcsQ0FBVCxHQUFhLEtBQUs4RSxLQUFMLENBQVczSixLQUFYLENBQWlCNkUsQ0FBM0M7QUFDQW9HLGVBQVEsQ0FBQ25HLENBQVQsR0FBYW1HLFFBQVEsQ0FBQ25HLENBQVQsR0FBYSxLQUFLNkUsS0FBTCxDQUFXM0osS0FBWCxDQUFpQjhFLENBQTNDO0FBRUEsV0FBTTJILGFBQWEsR0FBRyxLQUFLQyxlQUFMLENBQXFCekIsUUFBUSxDQUFDcEcsQ0FBOUIsRUFBa0NvRyxRQUFRLENBQUNuRyxDQUEzQyxDQUF0QixDQWJlLENBZWY7O0FBQ0EsV0FBSTJILGFBQWEsS0FBSyxDQUFDLENBQXZCLEVBQTBCO0FBQ3hCLGNBQUs5QyxLQUFMLENBQVc1RixLQUFYLENBQWlCNkksVUFBakIsR0FBOEJILGFBQTlCO0FBQ0QsUUFGRCxNQUVPO0FBQ0wsY0FBSzlDLEtBQUwsQ0FBVzVGLEtBQVgsQ0FBaUI2SSxVQUFqQixHQUE4QixLQUFLakQsS0FBTCxDQUFXdEcsTUFBWCxDQUFrQjBHLE1BQWxCLENBQXlCNEMsT0FBekIsQ0FBaUNGLGFBQWpDLENBQTlCO0FBQ0Q7QUFDRjs7Ozs7O2dCQUlZM0ksTTs7Ozs7OztBQzdNZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMkJBQTBCLGdCQUFnQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdkJBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tDbEJNRSxLOzs7Ozt1QkFPV3dGLEssRUFBTztBQUNwQixZQUFLcUQsV0FBTCxHQUFtQnJELEtBQW5CO0FBRUEsV0FBSSxLQUFLcUQsV0FBTCxHQUFtQixDQUFDLENBQXhCLEVBQ0UsS0FBS0EsV0FBTCxHQUFtQixDQUFDLENBQXBCO0FBRUYsV0FBSSxLQUFLQSxXQUFMLEdBQW1CLEtBQUtsRCxLQUFMLENBQVd0RyxNQUFYLENBQWtCMEcsTUFBbEIsQ0FBeUJsSixNQUFoRCxFQUNFLEtBQUtnTSxXQUFMLEdBQW1CLEtBQUtsRCxLQUFMLENBQVd0RyxNQUFYLENBQWtCMEcsTUFBbEIsQ0FBeUJsSixNQUE1QztBQUVGLFlBQUtNLE1BQUw7QUFDRCxNO3lCQUVnQjtBQUNmLGNBQU8sS0FBSzBMLFdBQVo7QUFDRDs7O3VCQUVXckQsSyxFQUFPO0FBQ2pCLFlBQUtzRCxRQUFMLEdBQWdCdEQsS0FBaEI7O0FBQ0EsV0FBSSxLQUFLc0QsUUFBVCxFQUFtQjtBQUNqQixjQUFLQyxNQUFMO0FBQ0QsUUFGRCxNQUVPO0FBQ0wsY0FBS0MsT0FBTDtBQUNEO0FBQ0YsTTt5QkFFYTtBQUNaLGNBQU8sS0FBS0YsUUFBWjtBQUNEOzs7QUFFRCxrQkFBWW5ELEtBQVosRUFBbUI7QUFBQTs7QUFBQSx1Q0FsQ1IsS0FrQ1E7O0FBQUEsb0NBakNYLElBaUNXOztBQUFBLDBDQS9CTCxDQUFDLENBK0JJOztBQUNqQixVQUFLQSxLQUFMLEdBQWFBLEtBQWI7QUFDQSxVQUFLekYsT0FBTCxHQUFleUYsS0FBSyxDQUFDekYsT0FBckI7QUFDQSxVQUFLYixNQUFMLEdBQWNzRyxLQUFLLENBQUN0RyxNQUFwQjtBQUVBLFVBQUs0SixXQUFMO0FBQ0EsVUFBS0QsT0FBTDtBQUNEOzs7OzhCQUVRO0FBQ1AsWUFBS2hILFlBQUwsQ0FBa0IzRixLQUFsQixDQUF3QjZNLE9BQXhCLEdBQWtDLE9BQWxDO0FBQ0FDLGVBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxNQUFkLENBQXFCLEtBQUtySCxZQUExQjtBQUNEOzs7K0JBRVM7QUFDUixZQUFLQSxZQUFMLENBQWtCM0YsS0FBbEIsQ0FBd0I2TSxPQUF4QixHQUFrQyxNQUFsQztBQUVBLFdBQUlDLFFBQVEsQ0FBQ0MsSUFBVCxDQUFjRSxRQUFkLENBQXVCLEtBQUt0SCxZQUE1QixDQUFKLEVBQ0VtSCxRQUFRLENBQUNDLElBQVQsQ0FBY0csV0FBZCxDQUEwQixLQUFLdkgsWUFBL0I7QUFDSDs7OzRCQUVNO0FBQ0wsWUFBS0EsWUFBTCxDQUFrQjNGLEtBQWxCLENBQXdCbU4sT0FBeEIsR0FBa0MsR0FBbEM7QUFDRDs7OzRCQUVNO0FBQ0wsWUFBS3hILFlBQUwsQ0FBa0IzRixLQUFsQixDQUF3Qm1OLE9BQXhCLEdBQWtDLEdBQWxDO0FBQ0Q7OzttQ0FFYTtBQUFBOztBQUNaLFlBQUt4SCxZQUFMLEdBQW9CbUgsUUFBUSxDQUFDTSxhQUFULENBQXVCLE9BQXZCLENBQXBCO0FBSUEsV0FBTUMsU0FBUyxHQUFHMVEsTUFBTSxDQUFDbUksTUFBUCxDQUFjLEtBQUt3RSxLQUFMLENBQVcrRCxTQUFYLENBQXFCOU4sY0FBbkMsRUFBbUQrTixLQUFuRCxDQUF5RCxDQUF6RCxFQUE0RCxDQUE1RCxDQUFsQjtBQUVBLFlBQUszSCxZQUFMLENBQWtCM0YsS0FBbEIsQ0FBd0JJLGVBQXhCLEdBQTBDLGFBQTFDLENBUFksQ0FRWjs7QUFFQSxZQUFLdUYsWUFBTCxDQUFrQjNGLEtBQWxCLENBQXdCdU4sS0FBeEIsR0FBZ0MsYUFBaEM7QUFDQSxZQUFLNUgsWUFBTCxDQUFrQjNGLEtBQWxCLENBQXdCd04sTUFBeEIsR0FBaUMsTUFBakM7QUFDQSxZQUFLN0gsWUFBTCxDQUFrQjNGLEtBQWxCLENBQXdCNEssUUFBeEIsR0FBbUMsT0FBbkM7QUFDQSxZQUFLakYsWUFBTCxDQUFrQjNGLEtBQWxCLENBQXdCeU4sT0FBeEIsR0FBa0MsUUFBbEM7QUFDQSxZQUFLOUgsWUFBTCxDQUFrQjNGLEtBQWxCLENBQXdCME4sTUFBeEIsR0FBaUMsQ0FBakM7QUFDQSxZQUFLL0gsWUFBTCxDQUFrQjNGLEtBQWxCLENBQXdCMk4sYUFBeEIsR0FBd0MsTUFBeEM7QUFDQSxZQUFLaEksWUFBTCxDQUFrQjNGLEtBQWxCLENBQXdCNE4sT0FBeEIsR0FBa0MsTUFBbEM7QUFDQSxZQUFLakksWUFBTCxDQUFrQjNGLEtBQWxCLENBQXdCdU4sS0FBeEIsR0FBZ0MsS0FBS2pFLEtBQUwsQ0FBV3RKLEtBQVgsQ0FBaUJDLElBQWpEO0FBQ0EsWUFBSzBGLFlBQUwsQ0FBa0IzRixLQUFsQixDQUF3QjZOLGVBQXhCLEdBQXlDLFVBQXpDO0FBQ0EsWUFBS2xJLFlBQUwsQ0FBa0IzRixLQUFsQixDQUF3QnFOLFNBQXhCLG9CQUE4Q0EsU0FBUyxDQUFDOUcsSUFBVixDQUFlLElBQWYsQ0FBOUM7QUFDQSxZQUFLWixZQUFMLENBQWtCM0YsS0FBbEIsQ0FBd0I4TixPQUF4QixHQUFrQyxHQUFsQztBQUVBLFlBQUtDLFFBQUwsQ0FBYyxNQUFkLEVBQXNCLFVBQUMvQixLQUFEO0FBQUEsZ0JBQVcsS0FBSSxDQUFDckcsWUFBTCxDQUFrQkMsS0FBbEIsRUFBWDtBQUFBLFFBQXRCO0FBQ0EsWUFBS21JLFFBQUwsQ0FBYyxPQUFkLEVBQXVCLFVBQUMvQixLQUFEO0FBQUEsZ0JBQVcsS0FBSSxDQUFDZ0MsT0FBTCxDQUFhaEMsS0FBYixDQUFYO0FBQUEsUUFBdkI7QUFDQSxZQUFLK0IsUUFBTCxDQUFjLFNBQWQsRUFBeUIsVUFBQy9CLEtBQUQ7QUFBQSxnQkFBVyxLQUFJLENBQUNpQyxTQUFMLENBQWVqQyxLQUFmLENBQVg7QUFBQSxRQUF6QjtBQUNEOzs7OEJBRVE7QUFFUCxZQUFLbkksT0FBTCxHQUFlLEtBQUt5RixLQUFMLENBQVd6RixPQUExQjtBQUNBLFlBQUtiLE1BQUwsR0FBYyxLQUFLc0csS0FBTCxDQUFXdEcsTUFBekI7QUFITyxXQUtBMEcsTUFMQSxHQUtVLEtBQUtKLEtBQUwsQ0FBV3RHLE1BTHJCLENBS0EwRyxNQUxBOztBQU9QLFdBQUksS0FBSzZDLFVBQUwsSUFBbUI3QyxNQUFNLENBQUNsSixNQUE5QixFQUFzQztBQUNwQyxjQUFLK0wsVUFBTCxHQUFrQjdDLE1BQU0sQ0FBQ2xKLE1BQVAsR0FBZ0IsQ0FBbEM7QUFDRCxRQVRNLENBV1A7OztBQUNBLFdBQUkwTixZQUFZLEdBQUc7QUFDakIxSixVQUFDLEVBQUUsS0FBSzhFLEtBQUwsQ0FBV3NCLFFBQVgsQ0FBb0JwRyxDQUROO0FBRWpCQyxVQUFDLEVBQUUsS0FBSzZFLEtBQUwsQ0FBV3NCLFFBQVgsQ0FBb0JuRztBQUZOLFFBQW5CLENBWk8sQ0FpQlA7O0FBQ0EsV0FBSSxLQUFLNkUsS0FBTCxDQUFXdEcsTUFBWCxDQUFrQjBHLE1BQWxCLENBQXlCbEosTUFBekIsS0FBb0MsQ0FBQyxDQUF6QyxFQUE0QyxDQUUxQztBQUNELFFBSEQsTUFHTSxJQUFJLEtBQUsrTCxVQUFMLEtBQW9CN0MsTUFBTSxDQUFDbEosTUFBL0IsRUFBdUM7QUFFM0MsYUFBTTJOLFNBQVMsR0FBR3pFLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDbEosTUFBUCxHQUFnQixDQUFqQixDQUF4QjtBQUVBME4scUJBQVksQ0FBQzFKLENBQWIsSUFBa0IySixTQUFTLENBQUN0SyxPQUFWLENBQWtCVyxDQUFsQixHQUFzQjJKLFNBQVMsQ0FBQ3RLLE9BQVYsQ0FBa0IrRixLQUExRDtBQUNBc0UscUJBQVksQ0FBQ3pKLENBQWIsSUFBa0IwSixTQUFTLENBQUN0SyxPQUFWLENBQWtCWSxDQUFwQyxDQUwyQyxDQU8zQztBQUNELFFBUkssTUFRQyxJQUFJLEtBQUs4SCxVQUFMLEtBQW9CLENBQUMsQ0FBekIsRUFBNEI7QUFDakMsYUFBTTZCLGFBQWEsR0FBRzFFLE1BQU0sQ0FBQyxLQUFLNkMsVUFBTixDQUE1QjtBQUVBMkIscUJBQVksQ0FBQzFKLENBQWIsSUFBa0I0SixhQUFhLENBQUN2SyxPQUFkLENBQXNCVyxDQUF0QixHQUEwQjRKLGFBQWEsQ0FBQ3ZLLE9BQWQsQ0FBc0IrRixLQUFsRTtBQUNBc0UscUJBQVksQ0FBQ3pKLENBQWIsSUFBa0IySixhQUFhLENBQUN2SyxPQUFkLENBQXNCWSxDQUF4QztBQUNELFFBTE0sTUFLQTtBQUVMeUoscUJBQVksQ0FBQ3pKLENBQWIsSUFBa0IsS0FBSzZFLEtBQUwsQ0FBV3RKLEtBQVgsQ0FBaUJ3RCxVQUFuQztBQUNEOztBQUVELFdBQU02SixTQUFTLEdBQUcxUSxNQUFNLENBQUNtSSxNQUFQLENBQWMsS0FBS3dFLEtBQUwsQ0FBVytELFNBQVgsQ0FBcUI5TixjQUFuQyxFQUFtRCtOLEtBQW5ELENBQXlELENBQXpELEVBQTRELENBQTVELENBQWxCO0FBQ0EsWUFBSzNILFlBQUwsQ0FBa0IzRixLQUFsQixDQUF3QnFOLFNBQXhCLG9CQUE4Q0EsU0FBUyxDQUFDOUcsSUFBVixDQUFlLElBQWYsQ0FBOUM7QUFDQSxZQUFLWixZQUFMLENBQWtCM0YsS0FBbEIsQ0FBd0I2SixNQUF4QixHQUFpQyxLQUFLaEcsT0FBTCxDQUFhTCxVQUFiLEdBQTBCLElBQTNEO0FBQ0EsWUFBS21DLFlBQUwsQ0FBa0IzRixLQUFsQixDQUF3QmtELFFBQXhCLEdBQW1DLEtBQUtXLE9BQUwsQ0FBYUwsVUFBYixHQUEwQixJQUE3RDtBQUVBLFlBQUs2SyxXQUFMLENBQWlCSCxZQUFZLENBQUMxSixDQUE5QixFQUFrQzBKLFlBQVksQ0FBQ3pKLENBQS9DLEVBNUNPLENBOENQOztBQUNBLFlBQUtrQixZQUFMLENBQWtCQyxLQUFsQjtBQUNEOzs7NkJBRU9vRyxLLEVBQU87QUFBQSxXQUVMbkIsS0FGSyxHQUVLLEtBQUt2QixLQUFMLENBQVc1SSxNQUZoQixDQUVMbUssS0FGSyxFQUliOztBQUNBLFdBQUlBLEtBQUssQ0FBQyxDQUFELENBQUwsS0FBYUEsS0FBSyxDQUFDLENBQUQsQ0FBbEIsSUFBeUJBLEtBQUssQ0FBQyxDQUFELENBQUwsS0FBYSxJQUExQyxFQUFnRDtBQUM5QyxjQUFLMEIsVUFBTCxHQUFrQnRFLElBQUksQ0FBQ2dELEdBQUwsQ0FBU0osS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXLENBQXBCLEVBQXVCQSxLQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcsQ0FBbEMsQ0FBbEI7QUFDQSxhQUFNeUQsV0FBVyxHQUFHckcsSUFBSSxDQUFDZ0QsR0FBTCxDQUFTQyxLQUFULENBQWUsSUFBZixFQUFxQkwsS0FBckIsQ0FBcEI7QUFDQSxhQUFNMEQsWUFBWSxHQUFHdEcsSUFBSSxDQUFDdUcsR0FBTCxDQUFTM0QsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXQSxLQUFLLENBQUMsQ0FBRCxDQUF6QixDQUFyQjtBQUNBLGNBQUt2QixLQUFMLENBQVc1SSxNQUFYLENBQWtCZ0YsUUFBbEIsQ0FBMkIsQ0FBM0IsRUFBNkIsS0FBN0I7QUFDQSxjQUFLNEQsS0FBTCxDQUFXbUYsWUFBWCxDQUF3QkgsV0FBeEIsRUFBcUNDLFlBQXJDO0FBQ0EsY0FBS3pJLElBQUw7QUFDRDs7QUFFRGtHLFlBQUssQ0FBQzBDLE1BQU4sQ0FBYXZGLEtBQWIsR0FBcUIsRUFBckI7QUFFQSxXQUFJNkMsS0FBSyxDQUFDQyxJQUFOLEtBQWUsSUFBbkIsRUFBeUIsT0FoQlosQ0FrQmI7O0FBQ0EsV0FBSSxLQUFLM0MsS0FBTCxDQUFXdEcsTUFBWCxDQUFrQjBHLE1BQWxCLENBQXlCbEosTUFBekIsS0FBb0MsQ0FBeEMsRUFBMkM7QUFDekMsY0FBSzhJLEtBQUwsQ0FBVy9HLElBQVgsR0FBa0J5SixLQUFLLENBQUNDLElBQXhCO0FBQ0EsY0FBS00sVUFBTCxHQUFrQixDQUFsQixDQUZ5QyxDQUkzQztBQUNDLFFBTEQsTUFLTyxJQUFJLEtBQUtBLFVBQUwsS0FBb0IsS0FBS2pELEtBQUwsQ0FBV3RHLE1BQVgsQ0FBa0IwRyxNQUFsQixDQUF5QmxKLE1BQXpCLEdBQWtDLENBQTFELEVBQTZEO0FBQ2xFLGNBQUs4SSxLQUFMLENBQVcvRyxJQUFYLElBQW1CeUosS0FBSyxDQUFDQyxJQUF6QjtBQUNBLGNBQUtNLFVBQUwsR0FGa0UsQ0FJcEU7QUFDQyxRQUxNLE1BS0E7QUFDTCxjQUFLakQsS0FBTCxDQUFXcUYsWUFBWCxDQUF3QixFQUFFLEtBQUtwQyxVQUEvQixFQUEyQ1AsS0FBSyxDQUFDQyxJQUFqRCxFQURLLENBRUw7QUFDRDs7QUFDRCxZQUFLM0MsS0FBTCxDQUFXNUksTUFBWCxDQUFrQmdGLFFBQWxCLENBQTJCLENBQTNCLEVBQThCLEtBQTlCO0FBRUQ7OzsrQkFFU3NHLEssRUFBTztBQUdmLGVBQVFBLEtBQUssQ0FBQzRDLEdBQWQ7QUFDRSxjQUFLLFdBQUw7QUFDRSxnQkFBS3RGLEtBQUwsQ0FBVzVJLE1BQVgsQ0FBa0JnRixRQUFsQixDQUEyQixDQUEzQixFQUE4QixLQUE5QjtBQUNBLGdCQUFLSSxJQUFMO0FBQ0EsZ0JBQUt5RyxVQUFMO0FBQ0E7O0FBRUYsY0FBSyxZQUFMO0FBQ0UsZ0JBQUtqRCxLQUFMLENBQVc1SSxNQUFYLENBQWtCZ0YsUUFBbEIsQ0FBMkIsQ0FBM0IsRUFBOEIsS0FBOUI7QUFDQSxnQkFBS0ksSUFBTDtBQUNBLGdCQUFLeUcsVUFBTDtBQUVBOztBQUVGLGNBQUssV0FBTDtBQUNBLGNBQUssUUFBTDtBQUFBLGVBQ1MxQixLQURULEdBQ2tCLEtBQUt2QixLQUFMLENBQVc1SSxNQUQ3QixDQUNTbUssS0FEVDs7QUFFRSxlQUFJQSxLQUFLLENBQUMsQ0FBRCxDQUFMLEtBQWEsSUFBakIsRUFBdUI7QUFDckIsa0JBQUswQixVQUFMLEdBQWtCdEUsSUFBSSxDQUFDZ0QsR0FBTCxDQUFTSixLQUFLLENBQUMsQ0FBRCxDQUFkLEVBQW1CQSxLQUFLLENBQUMsQ0FBRCxDQUF4QixDQUFsQjtBQUNBLGlCQUFNeUQsV0FBVyxHQUFHckcsSUFBSSxDQUFDZ0QsR0FBTCxDQUFTQyxLQUFULENBQWUsSUFBZixFQUFxQkwsS0FBckIsQ0FBcEI7QUFDQSxpQkFBTTBELFlBQVksR0FBR3RHLElBQUksQ0FBQ3VHLEdBQUwsQ0FBUzNELEtBQUssQ0FBQyxDQUFELENBQUwsR0FBV0EsS0FBSyxDQUFDLENBQUQsQ0FBekIsQ0FBckI7QUFDQSxrQkFBS3ZCLEtBQUwsQ0FBVzVJLE1BQVgsQ0FBa0JnRixRQUFsQixDQUEyQixDQUEzQixFQUE2QixLQUE3QjtBQUNBLGtCQUFLNEQsS0FBTCxDQUFXbUYsWUFBWCxDQUF3QkgsV0FBeEIsRUFBcUNDLFlBQXJDO0FBQ0Esa0JBQUt6SSxJQUFMO0FBQ0QsWUFQRCxNQVFLO0FBQ0gsaUJBQUlrRyxLQUFLLENBQUM0QyxHQUFOLEtBQWMsV0FBbEIsRUFDRSxLQUFLdEYsS0FBTCxDQUFXbUYsWUFBWCxDQUF3QixLQUFLbEMsVUFBTCxFQUF4QixFQUEyQyxDQUEzQztBQUNIOztBQUVEO0FBRUY7O0FBQ0EsY0FBSyxHQUFMO0FBQ0UsZUFBSVAsS0FBSyxDQUFDNkMsT0FBVixFQUFtQjtBQUNqQixrQkFBS3ZGLEtBQUwsQ0FBVzVJLE1BQVgsQ0FBa0JnRixRQUFsQixDQUEyQixDQUEzQixFQUE2QixLQUFLNEQsS0FBTCxDQUFXL0csSUFBWCxDQUFnQi9CLE1BQWhCLEdBQXlCLENBQXREO0FBQ0Q7O0FBcENMOztBQXVDQSxZQUFLbUYsWUFBTCxDQUFrQndELEtBQWxCLEdBQTBCLEdBQTFCO0FBQ0EsWUFBS3hELFlBQUwsQ0FBa0J3RCxLQUFsQixHQUEwQixFQUExQjtBQUVEOzs7aUNBRVczRSxDLEVBQUdDLEMsRUFBRztBQUNoQixXQUFJakIsVUFBVSxHQUFHLEtBQUtLLE9BQUwsQ0FBYUwsVUFBYixHQUEwQixLQUFLOEYsS0FBTCxDQUFXM0osS0FBWCxDQUFpQjhFLENBQTVEO0FBRUFBLFFBQUMsSUFBSSxLQUFLNkUsS0FBTCxDQUFXM0osS0FBWCxDQUFpQjhFLENBQXRCO0FBQ0FELFFBQUMsSUFBSSxLQUFLOEUsS0FBTCxDQUFXM0osS0FBWCxDQUFpQjZFLENBQXRCO0FBRUFDLFFBQUMsSUFBSWpCLFVBQUw7QUFFQWlCLFFBQUMsSUFBSSxLQUFLNkUsS0FBTCxDQUFXc0IsUUFBWCxDQUFvQm5HLENBQXBCLEdBQXdCLEtBQUs2RSxLQUFMLENBQVczSixLQUFYLENBQWlCOEUsQ0FBOUM7QUFDQUQsUUFBQyxJQUFJLEtBQUs4RSxLQUFMLENBQVdzQixRQUFYLENBQW9CcEcsQ0FBcEIsR0FBd0IsS0FBSzhFLEtBQUwsQ0FBVzNKLEtBQVgsQ0FBaUI2RSxDQUE5QztBQUVBLFlBQUttQixZQUFMLENBQWtCM0YsS0FBbEIsQ0FBd0IySSxJQUF4QixhQUFrQ25FLENBQWxDO0FBQ0EsWUFBS21CLFlBQUwsQ0FBa0IzRixLQUFsQixDQUF3QnlJLEdBQXhCLGFBQWlDaEUsQ0FBakM7QUFFQSxZQUFLa0IsWUFBTCxDQUFrQndELEtBQWxCLEdBQTBCLEdBQTFCO0FBQ0EsWUFBS3hELFlBQUwsQ0FBa0J3RCxLQUFsQixHQUEwQixFQUExQjtBQUNEOzs7OEJBRVE2QyxLLEVBQU84QyxRLEVBQVU7QUFBQTs7QUFDeEIsWUFBS25KLFlBQUwsQ0FBa0JvSixnQkFBbEIsQ0FBbUMvQyxLQUFuQyxFQUEwQyxVQUFDQSxLQUFELEVBQVc7QUFDbkQsYUFBSSxNQUFJLENBQUNTLFFBQVQsRUFBbUI7QUFDakJxQyxtQkFBUSxDQUFDOUMsS0FBRCxDQUFSO0FBQ0Q7QUFDRixRQUpEO0FBS0Q7Ozs7OztnQkFJWXJJLEs7Ozs7Ozs7QUNoUWYscUVBQW9FLCtCQUErQiwyQkFBMkIsbUNBQW1DLGdDQUFnQyw4QkFBOEIsc0JBQXNCLHdCQUF3QiwwQkFBMEIseUJBQXlCLDZFQUE2RSw4REFBOEQsOEJBQThCLCtCQUErQix3RkFBd0YsOEdBQThHLEtBQUssRzs7Ozs7O0FDQW50QixpRUFBZ0UsNEJBQTRCLGdDQUFnQywwQkFBMEIsMEJBQTBCLHNCQUFzQix3QkFBd0IsMEJBQTBCLHc4QkFBdzhCLDhCQUE4Qiw0RUFBNEUsZ0NBQWdDLGlDQUFpQyw0Q0FBNEMsa0VBQWtFLGlCQUFpQixHQUFHLGtCQUFrQiw4Q0FBOEMsR0FBRyxxQkFBcUIsK0ZBQStGLDhFQUE4RSw4RUFBOEUsNElBQTRJLDREQUE0RCxrREFBa0Qsa0NBQWtDLCtFQUErRSxrRkFBa0YsMklBQTJJLGdFQUFnRSxvRkFBb0Ysc0dBQXNHLGdVQUFnVSxnRkFBZ0YsdUlBQXVJLHNDQUFzQyxHQUFHLE87Ozs7OztBQ0Fsc0cscUVBQW9FLG1DQUFtQyxnQ0FBZ0MscUJBQXFCLDhHQUE4RyxLQUFLLEc7Ozs7OztBQ0EvUSw0REFBMkQsb0JBQW9CLGlCQUFpQix5Q0FBeUMsNkNBQTZDLEdBQUcsTyIsImZpbGUiOiJwaXhpLWF3ZXNvbWUtdGV4dC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJBd2Vzb21lVGV4dFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJBd2Vzb21lVGV4dFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCBkMDZjOTY0YzVjNWMwOWQ1MjQxOSIsImltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi9yZW5kZXJlclwiO1xyXG5pbXBvcnQgVGV4dCBmcm9tIFwiLi90ZXh0XCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vbGF5b3V0XCI7XHJcblxyXG5PYmplY3QuYXNzaWduKFBJWEkuZXh0cmFzLCB7XHJcbiAgQXdlc29tZVRleHQ6IFRleHRcclxufSk7XHJcblxyXG5pZiAodHlwZW9mIFBJWEkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgaWYgKFBJWEkuZXh0cmFzKSB7XHJcbiAgICBQSVhJLmV4dHJhcy5Bd2Vzb21lVGV4dCA9IFRleHQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIFBJWEkuZXh0cmFzID0geyBBd2Vzb21lVGV4dDogVGV4dH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIFRleHQsXHJcbiAgUmVuZGVyZXIsXHJcbiAgTGF5b3V0XHJcbn1cclxuXHJcbi8qXHJcblxyXG5peCAgICAgICAgICAgID0gc2RmX3NpemUgLyB0ZXhfd2lkdGhcclxuaXkgICAgICAgICAgICA9IHNkZl9zaXplIC8gdGV4X2hlaWdodFxyXG5yb3dfaGVpZ2h0ICAgID0gKHJvd19oZWlnaHQgKyAyICogc2RmX3NpemUpIC8gdGV4X2hlaWdodDtcclxuYXNwZWN0ICAgICAgICA9IHRleF93aWR0aCAvIHRleF9oZWlnaHQ7XHJcbmFzY2VudCAgICAgICAgPSBmb250LT5hc2NlbnQgKiBzY2FsZVlcclxuZGVzY2VudCAgICAgICA9IGZhYnNmKGZvbnQtPmRlc2NlbnQgKiBzY2FsZVkpXHJcbmxpbmVfZ2FwICAgICAgPSBmb250LT5saW5lX2dhcCAqIHNjYWxlIFlcclxuY2FwX2hlaWdodCAgICA9IGd4Y2FwLm1heC55ICogc2NhbGVZXHJcbnhfaGVpZ2h0ICAgICAgPSBneC5tYXgueSAqIHNjYWxlWVxyXG5zcGFjZV9hZHZhbmNlID0gZ3NwYWNlLmFkdmFuY2Vfd2lkdGggKiBzY2FsZVhcclxuXHJcblxyXG5zY2FsZXkgPSByb3dfaGVpZ2h0IC8gdGV4X2hlaWdodCAvICggZm9udC0+Z2x5cGhfbWF4LnkgLSBmb250LT5nbHlwaF9taW4ueSApO1xyXG5zY2FsZXggPSByb3dfaGVpZ2h0IC8gdGV4X3dpZHRoIC8gKCBmb250LT5nbHlwaF9tYXgueSAtIGZvbnQtPmdseXBoX21pbi55ICk7XHJcbmdzcGFjZSA9IGZvbnQtPmdseXBoc1sgZm9udC0+Z2x5cGhfaWR4KCAnICcgKSBdO1xyXG5neCAgICAgPSBmb250LT5nbHlwaHNbIGZvbnQtPmdseXBoX2lkeCggJ3gnICkgXVxyXG5neGNhcCAgPSBmb250LT5nbHlwaHNbIGZvbnQtPmdseXBoX2lkeCggJ1gnICkgXVxyXG5cclxuXHJcbnNkZl9zaXplID0gMTBcclxuXHJcbiovXHJcblxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0IEF3ZXNvbWVUZXh0IGZyb20gXCIuL3RleHRcIjtcclxuXHJcbmNvbnN0IHZlcnRleFNoYWRlciA9IHJlcXVpcmUoXCIuL3NoYWRlcnMvdGV4dC92ZXJ0Lmdsc2xcIik7XHJcbmNvbnN0IGZyYWdtZW50U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy90ZXh0L2ZyYWcuZ2xzbFwiKTtcclxuXHJcbmNvbnN0IHNlbGVjdFZlcnRleHRTaGFkZXIgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3NlbGVjdC92ZXJ0Lmdsc2xcIik7XHJcbmNvbnN0IHNlbGVjdEZyYWdtZW50U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy9zZWxlY3QvZnJhZy5nbHNsXCIpO1xyXG5cclxuY29uc3QgZ2xDb3JlID0gUElYSS5nbENvcmU7XHJcblxyXG5jbGFzcyBBd2Vzb21lVGV4dFJlbmRlcmVyIGV4dGVuZHMgUElYSS5PYmplY3RSZW5kZXJlciB7XHJcblxyXG4gIHN0YXRpYyBjb250ZXh0VGV4dCA9IDA7XHJcbiAgc3RhdGljIGNvbnRleHRTZWxlY3QgPSAxO1xyXG5cclxuICBzZWxlY3RDb2xvciA9IDB4RkZCM0MzO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3IocmVuZGVyZXIpIHtcclxuICAgIHN1cGVyKHJlbmRlcmVyKTtcclxuICAgIHRoaXMudGV4dFNoYWRlciA9IG51bGw7XHJcbiAgICB0aGlzLnNlbGVjdFNoYWRlciA9IG51bGw7XHJcblxyXG4gIH1cclxuXHJcbiAgb25Db250ZXh0Q2hhbmdlKCkge1xyXG4gICAgY29uc3QgZ2wgPSB0aGlzLnJlbmRlcmVyLmdsO1xyXG4gICAgZ2wuZ2V0RXh0ZW5zaW9uKFwiT0VTX3N0YW5kYXJkX2Rlcml2YXRpdmVzXCIpO1xyXG4gICAgdGhpcy50ZXh0U2hhZGVyID0gbmV3IFBJWEkuU2hhZGVyKGdsLCB2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcclxuICAgIHRoaXMuc2VsZWN0U2hhZGVyID0gbmV3IFBJWEkuU2hhZGVyKGdsLCBzZWxlY3RWZXJ0ZXh0U2hhZGVyLCBzZWxlY3RGcmFnbWVudFNoYWRlcik7XHJcbiAgfVxyXG5cclxuICByZW5kZXJUZXh0KHNvdXJjZSkge1xyXG5cclxuICAgIGxldCBnbERhdGEgPSBzb3VyY2UuX2dsRGF0YXNbQXdlc29tZVRleHRSZW5kZXJlci5jb250ZXh0VGV4dF07XHJcblxyXG4gICAgaWYgKCFnbERhdGEpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5iaW5kVmFvKG51bGwpO1xyXG4gICAgICBnbERhdGEgPSB0aGlzLmJ1aWxkVGV4dEdsRGF0YShzb3VyY2UsIHRoaXMucmVuZGVyZXIuZ2wpO1xyXG4gICAgICBzb3VyY2UuX2dsRGF0YXNbQXdlc29tZVRleHRSZW5kZXJlci5jb250ZXh0VGV4dF0gPSBnbERhdGE7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5iaW5kVmFvKGdsRGF0YS52YW8pO1xyXG5cclxuICAgIGlmIChzb3VyY2UuZGlydHkpIHtcclxuICAgICAgc291cmNlLmRpcnR5ID0gZmFsc2U7XHJcbiAgICAgIGdsRGF0YS51dkJ1ZmZlci51cGxvYWQoc291cmNlLnV2cyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNvdXJjZS5pbmRleERpcnR5KSB7XHJcbiAgICAgIHNvdXJjZS5pbmRleERpcnR5ID0gZmFsc2U7XHJcbiAgICAgIGdsRGF0YS5pbmRleEJ1ZmZlci51cGxvYWQoc291cmNlLmluZGljZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdsRGF0YS52ZXJ0ZXhCdWZmZXIudXBsb2FkKHNvdXJjZS52ZXJ0aWNlcyk7XHJcbiAgICB0aGlzLnJlbmRlcmVyLmJpbmRTaGFkZXIoZ2xEYXRhLnNoYWRlcik7XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5zdGF0ZS5zZXRCbGVuZE1vZGUoc291cmNlLmJsZW5kTW9kZSk7XHJcblxyXG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy51U2FtcGxlciA9IHRoaXMucmVuZGVyZXIuYmluZFRleHR1cmUoc291cmNlLnRleHR1cmUpO1xyXG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy50cmFuc2xhdGlvbk1hdHJpeCA9IHNvdXJjZS53b3JsZFRyYW5zZm9ybS50b0FycmF5KHRydWUpO1xyXG5cclxuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuaGludF9hbW91bnQgPSAxLjA7XHJcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnNkZk11bHRpcGxpZXIgPSBBd2Vzb21lVGV4dC5zY2FsZTtcclxuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuc3VicGl4ZWxfYW1vdW50ID0gMS4wO1xyXG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5mb250X2NvbG9yID0gUElYSS51dGlscy5oZXgycmdiKHNvdXJjZS5zdHlsZS5maWxsLnJlcGxhY2UoXCIjXCIsIFwiMHhcIikpO1xyXG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5iZ19jb2xvciA9IFBJWEkudXRpbHMuaGV4MnJnYihzb3VyY2UuYmFja2dyb3VuZENvbG9yLnJlcGxhY2UoXCIjXCIsIFwiMHhcIikpO1xyXG5cclxuICAgIGNvbnN0IGRyYXdNb2RlID0gc291cmNlLmRyYXdNb2RlID0gdGhpcy5yZW5kZXJlci5nbC5UUklBTkdMRVM7XHJcbiAgICBnbERhdGEudmFvLmRyYXcoZHJhd01vZGUsIHNvdXJjZS5pbmRpY2VzLmxlbmd0aCwgMCk7XHJcblxyXG4gIH1cclxuXHJcbiAgcmVuZGVyU2VsZWN0KHNvdXJjZSkge1xyXG4gICAgbGV0IGdsRGF0YSA9IHNvdXJjZS5fZ2xEYXRhc1tBd2Vzb21lVGV4dFJlbmRlcmVyLmNvbnRleHRTZWxlY3RdO1xyXG5cclxuICAgIGlmICghZ2xEYXRhIHx8IHNvdXJjZS5zZWxlY3QuZGlydHkpIHtcclxuICAgICAgdGhpcy5yZW5kZXJlci5iaW5kVmFvKG51bGwpO1xyXG4gICAgICBnbERhdGEgPSB0aGlzLmJ1aWxkU2VsZWN0R2xEYXRhKHNvdXJjZSwgdGhpcy5yZW5kZXJlci5nbCk7XHJcbiAgICAgIHNvdXJjZS5fZ2xEYXRhc1tBd2Vzb21lVGV4dFJlbmRlcmVyLmNvbnRleHRTZWxlY3RdID0gZ2xEYXRhO1xyXG4gICAgICBzb3VyY2Uuc2VsZWN0LmRpcnR5ID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5yZW5kZXJlci5iaW5kVmFvKGdsRGF0YS52YW8pO1xyXG5cclxuICAgIGlmIChzb3VyY2Uuc2VsZWN0LmluZGV4RGlydHkpIHtcclxuICAgICAgc291cmNlLnNlbGVjdC5pbmRleERpcnR5ID0gZmFsc2U7XHJcbiAgICAgIGdsRGF0YS5pbmRleEJ1ZmZlci51cGxvYWQoc291cmNlLnNlbGVjdC5pbmRpY2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBnbERhdGEudmVydGV4QnVmZmVyLnVwbG9hZChzb3VyY2Uuc2VsZWN0LnZlcnRpY2VzKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYmluZFNoYWRlcihnbERhdGEuc2hhZGVyKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLnN0YXRlLnNldEJsZW5kTW9kZSgxNyk7XHJcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnRyYW5zbGF0aW9uTWF0cml4ID0gc291cmNlLndvcmxkVHJhbnNmb3JtLnRvQXJyYXkodHJ1ZSk7XHJcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmJnX2NvbG9yID0gUElYSS51dGlscy5oZXgycmdiKHRoaXMuc2VsZWN0Q29sb3IpO1xyXG5cclxuICAgIGNvbnN0IGRyYXdNb2RlID0gc291cmNlLmRyYXdNb2RlID0gdGhpcy5yZW5kZXJlci5nbC5UUklBTkdMRVM7XHJcbiAgICBnbERhdGEudmFvLmRyYXcoZHJhd01vZGUsIHNvdXJjZS5zZWxlY3QuaW5kaWNlcy5sZW5ndGgsIDApO1xyXG4gIH1cclxuXHJcbiAgcmVuZGVyKHNvdXJjZSkge1xyXG5cclxuICAgIGlmIChzb3VyY2Uuc3R5bGVJRCAhPT0gc291cmNlLnN0eWxlLnN0eWxlSUQpIHtcclxuICAgICAgc291cmNlLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChzb3VyY2Uuc3RhdGUgPT09IEF3ZXNvbWVUZXh0LnN0YXRlcy5lZGl0YWJsZSB8fCBzb3VyY2Uuc3RhdGUgPT09IEF3ZXNvbWVUZXh0LnN0YXRlcy5zZWxlY3RpbmcpIHtcclxuICAgICAgdGhpcy5yZW5kZXJTZWxlY3Qoc291cmNlKTtcclxuICAgIH1cclxuICAgIHRoaXMucmVuZGVyVGV4dChzb3VyY2UpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRUZXh0R2xEYXRhKHNvdXJjZSwgZ2wpIHtcclxuXHJcbiAgICBjb25zdCBnbERhdGEgPSB7XHJcbiAgICAgIHNoYWRlcjogdGhpcy50ZXh0U2hhZGVyLFxyXG4gICAgICB2ZXJ0ZXhCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoZ2wsIHNvdXJjZS52ZXJ0aWNlcywgZ2wuU1RSRUFNX0RSQVcpLFxyXG4gICAgICB1dkJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgc291cmNlLnV2cywgZ2wuU1RSRUFNX0RSQVcpLFxyXG4gICAgICBzZGZCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoZ2wsIHNvdXJjZS5zZGZTaXplcywgZ2wuU1RBVElDX0RSQVcpLFxyXG4gICAgICBpbmRleEJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZUluZGV4QnVmZmVyKGdsLCBzb3VyY2UuaW5kaWNlcywgZ2wuU1RBVElDX0RSQVcpLFxyXG4gICAgICAvLyBidWlsZCB0aGUgdmFvIG9iamVjdCB0aGF0IHdpbGwgcmVuZGVyLi5cclxuICAgICAgdmFvOiBudWxsLFxyXG4gICAgICBkaXJ0eTogc291cmNlLmRpcnR5LFxyXG4gICAgICBpbmRleERpcnR5OiBzb3VyY2UuaW5kZXhEaXJ0eSxcclxuICAgIH07XHJcblxyXG4gICAgZ2xEYXRhLnZhbyA9IG5ldyBnbENvcmUuVmVydGV4QXJyYXlPYmplY3QoZ2wpXHJcbiAgICAgIC5hZGRJbmRleChnbERhdGEuaW5kZXhCdWZmZXIpXHJcbiAgICAgIC5hZGRBdHRyaWJ1dGUoZ2xEYXRhLnZlcnRleEJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFWZXJ0ZXhQb3NpdGlvbiwgZ2wuRkxPQVQsIGZhbHNlLCAyICogNCwgMClcclxuICAgICAgLmFkZEF0dHJpYnV0ZShnbERhdGEudXZCdWZmZXIsIGdsRGF0YS5zaGFkZXIuYXR0cmlidXRlcy5hVGV4dHVyZUNvb3JkLCBnbC5GTE9BVCwgZmFsc2UsIDIgKiA0LCAwKVxyXG4gICAgICAuYWRkQXR0cmlidXRlKGdsRGF0YS5zZGZCdWZmZXIsIGdsRGF0YS5zaGFkZXIuYXR0cmlidXRlcy5hU2RmU2l6ZSwgZ2wuRkxPQVQsIGZhbHNlLCA0LCAwKTtcclxuXHJcbiAgICByZXR1cm4gZ2xEYXRhXHJcbiAgfVxyXG5cclxuICBidWlsZFNlbGVjdEdsRGF0YShzb3VyY2UsIGdsKSB7XHJcbiAgICBjb25zdCBnbERhdGEgPSB7XHJcbiAgICAgIHNoYWRlcjogdGhpcy5zZWxlY3RTaGFkZXIsXHJcbiAgICAgIHZlcnRleEJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgc291cmNlLnNlbGVjdC52ZXJ0aWNlcywgZ2wuU1RSRUFNX0RSQVcpLFxyXG4gICAgICBpbmRleEJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZUluZGV4QnVmZmVyKGdsLCBzb3VyY2Uuc2VsZWN0LmluZGljZXMsIGdsLlNUQVRJQ19EUkFXKSxcclxuICAgICAgdmFvOiBudWxsXHJcbiAgICB9O1xyXG5cclxuICAgIGdsRGF0YS52YW8gPSBuZXcgZ2xDb3JlLlZlcnRleEFycmF5T2JqZWN0KGdsKVxyXG4gICAgICAuYWRkSW5kZXgoZ2xEYXRhLmluZGV4QnVmZmVyKVxyXG4gICAgICAuYWRkQXR0cmlidXRlKGdsRGF0YS52ZXJ0ZXhCdWZmZXIsIGdsRGF0YS5zaGFkZXIuYXR0cmlidXRlcy5hVmVydGV4UG9zaXRpb24sIGdsLkZMT0FULCBmYWxzZSwgMiAqIDQsIDApXHJcblxyXG4gICAgcmV0dXJuIGdsRGF0YVxyXG4gIH1cclxuXHJcbn1cclxuXHJcblBJWEkuV2ViR0xSZW5kZXJlci5yZWdpc3RlclBsdWdpbignQXdlc29tZVRleHRSZW5kZXJlcicsIEF3ZXNvbWVUZXh0UmVuZGVyZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXdlc29tZVRleHRSZW5kZXJlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyZXIuanMiLCJjb25zdCBjcmVhdGVJbmRpY2VzID0gcmVxdWlyZShcInF1YWQtaW5kaWNlc1wiKVxyXG5pbXBvcnQgVGV4dExheW91dCBmcm9tICcuL2xheW91dCc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9zZWxlY3QnXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0J1xyXG5cclxuY2xhc3MgQXdlc29tZVRleHQgZXh0ZW5kcyBQSVhJLm1lc2guTWVzaCB7XHJcblxyXG4gIHN0YXRpYyBzY2FsZSA9IDEuMDtcclxuICBzdGF0aWMgc3RhdGVzID0ge3JlZ3VsYXI6IDAsIGVkaXRhYmxlOiAxLCBzZWxlY3Rpbmc6IDJ9O1xyXG5cclxuICBzdGF0aWMgY3VycmVudEVkaXRpbmdFbGVtZW50ID0gbnVsbDtcclxuXHJcbiAgcGx1Z2luTmFtZSA9ICdBd2Vzb21lVGV4dFJlbmRlcmVyJztcclxuICBzdGF0ZSA9IEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyO1xyXG4gIGNsaWNrc0NvdW50ID0gMDtcclxuICBpbnB1dEVsZW1lbnQgPSBudWxsO1xyXG4gIGlucHV0ID0gbnVsbDtcclxuICBzZWxlY3QgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0ZXh0LCBzdHlsZSwgZm9udCkge1xyXG4gICAgc3VwZXIoZm9udC50ZXh0dXJlKTtcclxuXHJcbiAgICB0aGlzLnN0eWxlID0gbmV3IFBJWEkuVGV4dFN0eWxlKHN0eWxlKTtcclxuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gc3R5bGUuYmFja2dyb3VuZENvbG9yO1xyXG4gICAgdGhpcy5fdGV4dCA9IHRleHQ7XHJcbiAgICB0aGlzLl9mb250ID0gZm9udC5mb250O1xyXG4gICAgdGhpcy5fdGV4dHVyZSA9IGZvbnQudGV4dHVyZTtcclxuXHJcbiAgICB0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgIHRoaXMuYnV0dG9uTW9kZSA9IHRydWU7XHJcblxyXG4gICAgLy8gQ2FsY3VhbHRlIGxheW91dFxyXG4gICAgdGhpcy5sYXlvdXQgPSBuZXcgVGV4dExheW91dCh0aGlzLCB7XHJcbiAgICAgIGZvbnRTaXplOiB0aGlzLnN0eWxlLmZvbnRTaXplLFxyXG4gICAgICB3cmFwV29yZHM6IHRoaXMuc3R5bGUuYnJlYWtXb3JkcyxcclxuICAgICAgd3JhcHBlcldpZHRoOiB0aGlzLnN0eWxlLndvcmRXcmFwV2lkdGgsXHJcbiAgICAgIGFsaWduOiB0aGlzLnN0eWxlLmFsaWduLFxyXG4gICAgICBsaW5lSGVpZ2h0OiB0aGlzLnN0eWxlLmxpbmVIZWlnaHQsXHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyAgU2VsZWN0IHBsdWdpblxyXG4gICAgdGhpcy5zZWxlY3QgPSBuZXcgU2VsZWN0KHRoaXMpO1xyXG5cclxuICAgIC8vIElucHV0IHBsdWdpblxyXG4gICAgdGhpcy5pbnB1dCA9IG5ldyBJbnB1dCh0aGlzKTtcclxuXHJcbiAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyKTtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMuZm9udE1ldHJpY3ModGhpcy5zdHlsZS5mb250U2l6ZSk7XHJcblxyXG4gICAgdGhpcy5sYXlvdXQudXBkYXRlKCk7XHJcbiAgICB0aGlzLnNlbGVjdC51cGRhdGUoKTtcclxuICAgIHRoaXMuaW5wdXQudXBkYXRlKCk7XHJcblxyXG4gICAgLy8gQXJyYXlzIGZvciB2ZXJ0aWNlcywgdXZzIGFuZCBzZGZcclxuICAgIHRoaXMudmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubGF5b3V0LmxldHRlcnNDb3VudCAqIDQgKiAyKTtcclxuICAgIHRoaXMudXZzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0ICogMik7XHJcbiAgICB0aGlzLnNkZlNpemVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0KTtcclxuICAgIHRoaXMuYXJyYXlQb3NpdGlvbnMgPSB7IHZlcnRleDogMCwgdXZzOiAwLCBzZGY6IDAgfTtcclxuXHJcbiAgICAvLyBGaWxsIGFycmF5cyB3b3JkIGJ5IHdvcmRcclxuICAgIHRoaXMubGF5b3V0LndvcmRzTWV0cmljcy5mb3JFYWNoICh3b3JkID0+IHtcclxuICAgICAgdGhpcy53cml0ZVN0cmluZyh3b3JkLndvcmQsIHRoaXMuZm9udCwgdGhpcy5tZXRyaWNzLCBbd29yZC54LCB3b3JkLnldKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFByZXBhcmUgaW5kaWNlc1xyXG4gICAgdGhpcy5pbmRpY2VzID0gY3JlYXRlSW5kaWNlcyh7XHJcbiAgICAgIGNsb2Nrd2lzZTogdHJ1ZSxcclxuICAgICAgdHlwZTogJ3VpbnQxNicsXHJcbiAgICAgIGNvdW50OiB0aGlzLmxheW91dC5sZXR0ZXJzQ291bnRcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc3R5bGVJRCA9IHRoaXMuc3R5bGUuc3R5bGVJRDtcclxuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgdGhpcy5pbmRleERpcnR5ID0gdHJ1ZTtcclxuICAgIHRoaXMuX2dsRGF0YXMgPSBbXTtcclxuICB9XHJcblxyXG4gIHNldFN0YXRlKG5ld1N0YXRlKSB7XHJcblxyXG4gICAgY29uc3QgeyBzdGF0ZXMgfSA9IEF3ZXNvbWVUZXh0O1xyXG5cclxuICAgIGlmICghbmV3U3RhdGUgaW4gT2JqZWN0LnZhbHVlcyhzdGF0ZXMpKSByZXR1cm47XHJcblxyXG4gICAgc3dpdGNoIChuZXdTdGF0ZSkge1xyXG4gICAgICBjYXNlIHN0YXRlcy5yZWd1bGFyOlxyXG4gICAgICAgIHRoaXMuc2V0UmVndWxhclN0YXRlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2Ugc3RhdGVzLmVkaXRhYmxlOlxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBBd2Vzb21lVGV4dC5zdGF0ZXMucmVndWxhcikge1xyXG4gICAgICAgICAgdGhpcy5zZXRFZGl0YWJsZVN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RhdGUgPSBuZXdTdGF0ZTtcclxuICB9XHJcblxyXG4gIGdldCB0ZXh0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XHJcbiAgfVxyXG5cclxuICBzZXQgdGV4dCh2YWx1ZSkge1xyXG4gICAgdGhpcy5fdGV4dCA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIHNldFJlZ3VsYXJTdGF0ZSgpIHtcclxuXHJcbiAgICBBd2Vzb21lVGV4dC5jdXJyZW50RWRpdGluZ0VsZW1lbnQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMub2ZmKFwibW91c2Vkb3duXCIpO1xyXG4gICAgdGhpcy5vZmYoXCJtb3VzZW1vdmVcIik7XHJcbiAgICB0aGlzLm9mZihcIm1vdXNldXBcIik7XHJcbiAgICB0aGlzLm9mZihcIm1vdXNldXBvdXRzaWRlXCIpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQuZW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuXHJcbiAgICB0aGlzLm9uKFwiY2xpY2tcIiwgZSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLmNsaWNrc0NvdW50ID09PSAxKSB7XHJcbiAgICAgICAgdGhpcy5jbGlja3NDb3VudCA9IDA7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShBd2Vzb21lVGV4dC5zdGF0ZXMuZWRpdGFibGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5jbGlja3NDb3VudCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuY2xpY2tzQ291bnQrKztcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNsaWNrc0NvdW50ID0gMDtcclxuICAgICAgICB9LCAzMDApXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gIH1cclxuXHJcbiAgc2V0RWRpdGFibGVTdGF0ZSgpIHtcclxuXHJcbiAgICAvLyBEaXNhYmxlIHByZXZpb3VzbHkgZW5hYmxlZCBmaWVsZFxyXG4gICAgaWYgKEF3ZXNvbWVUZXh0LmN1cnJlbnRFZGl0aW5nRWxlbWVudCAhPSBudWxsKSB7XHJcbiAgICAgIEF3ZXNvbWVUZXh0LmN1cnJlbnRFZGl0aW5nRWxlbWVudC5zZXRTdGF0ZShBd2Vzb21lVGV4dC5zdGF0ZXMucmVndWxhcik7XHJcbiAgICB9XHJcbiAgICBBd2Vzb21lVGV4dC5jdXJyZW50RWRpdGluZ0VsZW1lbnQgPSB0aGlzO1xyXG5cclxuICAgIC8vIERpc2FibGUgdW5uZWNlc3NhcnkgZXZlbnRzXHJcbiAgICB0aGlzLm9mZihcImNsaWNrXCIpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB0aGlzLmlucHV0LmhpZGUoKTtcclxuXHJcbiAgICAvLyBTZWxlY3QgYWxsIGNoYXJhY3RlcnNcclxuICAgIHRoaXMuc2VsZWN0LnNldFJhbmdlKDAsdGhpcy50ZXh0Lmxlbmd0aCAtIDEpO1xyXG4gICAgdGhpcy5pbnB1dC5pbnB1dEVsZW1lbnQuZm9jdXMoKTtcclxuXHJcbiAgICB0aGlzLm9uKFwibW91c2Vkb3duXCIsIGUgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5zZWxlY3RpbmcpO1xyXG4gICAgICB0aGlzLnNlbGVjdC5vbk1vdXNlRG93bihlKTtcclxuICAgICAgdGhpcy5pbnB1dC5zaG93KCk7XHJcbiAgICAgIHRoaXMuaW5wdXQudXBkYXRlKGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vbihcIm1vdXNlbW92ZVwiLCBlID0+IHtcclxuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IEF3ZXNvbWVUZXh0LnN0YXRlcy5zZWxlY3RpbmcpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdC5vbk1vdXNlTW92ZShlKTtcclxuICAgICAgICB0aGlzLmlucHV0LmhpZGUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vbihcIm1vdXNldXBcIiwgZSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLmVkaXRhYmxlKTtcclxuICAgICAgdGhpcy5zZWxlY3Qub25Nb3VzZVVwKGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5vbihcIm1vdXNldXBvdXRzaWRlXCIsIGUgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5lZGl0YWJsZSk7XHJcbiAgICAgIHRoaXMuc2VsZWN0Lm9uTW91c2VVcChlKTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGluc2VydFN0cmluZyhpbmRleCwgc3RyaW5nKSB7XHJcbiAgICB0aGlzLnRleHQgPSB0aGlzLnRleHQuc3Vic3RyKDAsIGluZGV4KSArIHN0cmluZyArIHRoaXMudGV4dC5zdWJzdHIoaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU3RyaW5nKGluZGV4LCBsZW5ndGgpIHtcclxuICAgIGxldCBuZXdUZXh0ID0gdGhpcy50ZXh0LnNwbGl0KFwiXCIpO1xyXG4gICAgbmV3VGV4dC5zcGxpY2UoaW5kZXgsIGxlbmd0aCArIDEpO1xyXG4gICAgdGhpcy50ZXh0ID0gbmV3VGV4dC5qb2luKFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgZ2V0IHRleHR1cmUoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGV4dHVyZTtcclxuICB9XHJcblxyXG4gIGdldCBmb250KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2ZvbnRcclxuICB9XHJcblxyXG4gIHdyaXRlU3RyaW5nKCBzdHJpbmcsIGZvbnQsIGZvbnRfbWV0cmljcywgcG9zKSB7XHJcbiAgICBsZXQgcHJldl9jaGFyID0gXCIgXCI7ICAvLyBVc2VkIHRvIGNhbGN1bGF0ZSBrZXJuaW5nXHJcbiAgICBsZXQgY3BvcyAgICAgID0gcG9zOyAgLy8gQ3VycmVudCBwZW4gcG9zaXRpb25cclxuICAgIGxldCB4X21heCAgICAgPSAwLjA7ICAvLyBNYXggd2lkdGggLSB1c2VkIGZvciBib3VuZGluZyBib3hcclxuICAgIGxldCBzY2FsZSAgICAgPSBmb250X21ldHJpY3MuY2FwU2NhbGU7XHJcblxyXG4gICAgbGV0IHN0cl9wb3MgPSAwO1xyXG5cclxuICAgIGZvcig7Oykge1xyXG4gICAgICBpZiAoIHN0cl9wb3MgPT09IHN0cmluZy5sZW5ndGggKSBicmVhaztcclxuXHJcbiAgICAgIHZhciBzY2hhciA9IHN0cmluZ1sgc3RyX3BvcyBdO1xyXG4gICAgICBzdHJfcG9zKys7XHJcblxyXG4gICAgICBpZiAoIHNjaGFyID09PSBcIlxcblwiICkge1xyXG4gICAgICAgIGlmICggY3Bvc1swXSA+IHhfbWF4ICkgeF9tYXggPSBjcG9zWzBdOyAvLyBFeHBhbmRpbmcgdGhlIGJvdW5kaW5nIHJlY3RcclxuICAgICAgICBjcG9zWzBdICA9IHBvc1swXTtcclxuICAgICAgICBjcG9zWzFdIC09IGZvbnRfbWV0cmljcy5saW5lSGVpZ2h0O1xyXG4gICAgICAgIHByZXZfY2hhciA9IFwiIFwiO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIHNjaGFyID09PSBcIiBcIiApIHtcclxuICAgICAgICAvL3NjaGFyID0gXCJfXCJcclxuICAgICAgICAvL2Nwb3NbMF0gKz0gZm9udC5zcGFjZV9hZHZhbmNlICogc2NhbGU7XHJcbiAgICAgICAgLy9wcmV2X2NoYXIgPSBcIiBcIjtcclxuICAgICAgICAvL2NvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgZm9udF9jaGFyID0gZm9udC5jaGFyc1sgc2NoYXIgXTtcclxuICAgICAgaWYgKCAhZm9udF9jaGFyICkgeyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdWJzdGl0dXRpbmcgdW5hdmFpbGFibGUgY2hhcmFjdGVycyB3aXRoICc/J1xyXG4gICAgICAgIHNjaGFyID0gXCI/XCI7XHJcbiAgICAgICAgZm9udF9jaGFyID0gZm9udC5jaGFyc1sgXCI/XCIgXTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGtlcm4gPSBmb250Lmtlcm5bIHByZXZfY2hhciArIHNjaGFyIF07XHJcbiAgICAgIGlmICggIWtlcm4gKSBrZXJuID0gMC4wO1xyXG5cclxuICAgICAgLy8gY2FsY3VsYXRpbmcgdGhlIGdseXBoIHJlY3RhbmdsZSBhbmQgY29weWluZyBpdCB0byB0aGUgdmVydGV4IGFycmF5XHJcbiAgICAgIHZhciByZWN0ID0gdGhpcy5jaGFyUmVjdCggY3BvcywgZm9udCwgZm9udF9tZXRyaWNzLCBmb250X2NoYXIsIGtlcm4gKTtcclxuXHJcbiAgICAgIHJlY3QucG9zaXRpb25zLm1hcCgocG9zKSA9PiB0aGlzLnZlcnRpY2VzWyB0aGlzLmFycmF5UG9zaXRpb25zLnZlcnRleCsrIF0gPSBwb3MgKTtcclxuICAgICAgcmVjdC51dnMubWFwKCh1dikgPT4gdGhpcy51dnNbIHRoaXMuYXJyYXlQb3NpdGlvbnMudXZzKysgXSA9IHV2ICk7XHJcbiAgICAgIHJlY3Quc2RmU2l6ZXMubWFwKChzZGYpID0+IHRoaXMuc2RmU2l6ZXNbIHRoaXMuYXJyYXlQb3NpdGlvbnMuc2RmKysgXSA9IHNkZiApO1xyXG5cclxuICAgICAgcHJldl9jaGFyID0gc2NoYXI7XHJcbiAgICAgIGNwb3MgPSByZWN0LnBvcztcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICByZWN0IDogWyBwb3NbMF0sIHBvc1sxXSwgeF9tYXggLSBwb3NbMF0sIHBvc1sxXSAtIGNwb3NbMV0gKyBmb250X21ldHJpY3MubGluZUhlaWdodCBdLFxyXG4gICAgICBzdHJpbmdfcG9zIDogc3RyX3BvcyxcclxuICAgICAgLy9hcnJheV9wb3MgOiBhcnJheV9wb3NcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBmb250TWV0cmljcyhmb250U2l6ZSwgbW9yZUxpbmVHYXAgPSAwLjIpIHtcclxuXHJcbiAgICBjb25zdCB7Y2FwX2hlaWdodCwgeF9oZWlnaHQsIGFzY2VudDogZm9udEFzY2VudCAsIGRlc2NlbnQsIGxpbmVfZ2FwfSA9IHRoaXMuZm9udDtcclxuXHJcbiAgICBjb25zdCBjYXBTY2FsZSA9IHRoaXMuc3R5bGUuZm9udFNpemUgLyBjYXBfaGVpZ2h0O1xyXG4gICAgY29uc3QgbG93U2NhbGUgPSBNYXRoLnJvdW5kKCB4X2hlaWdodCAqIGNhcFNjYWxlICkgLyB4X2hlaWdodDtcclxuICAgIGNvbnN0IGFzY2VudCA9IE1hdGgucm91bmQoIGZvbnRBc2NlbnQgKiBjYXBTY2FsZSApO1xyXG4gICAgbGV0IGxpbmVIZWlnaHQgPSBNYXRoLnJvdW5kKCBjYXBTY2FsZSAqICggZm9udEFzY2VudCArIGRlc2NlbnQgKyBsaW5lX2dhcCApICsgbW9yZUxpbmVHYXApO1xyXG5cclxuICAgIGlmICh0aGlzLnN0eWxlLmxpbmVIZWlnaHQgPiAwKVxyXG4gICAgICBsaW5lSGVpZ2h0ID0gdGhpcy5zdHlsZS5saW5lSGVpZ2h0O1xyXG4gICAgZWxzZVxyXG4gICAgICB0aGlzLnN0eWxlLmxpbmVIZWlnaHQgPSBsaW5lSGVpZ2h0O1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGNhcFNjYWxlICAgOiBjYXBTY2FsZSxcclxuICAgICAgbG93U2NhbGUgICA6IGxvd1NjYWxlLFxyXG4gICAgICBhc2NlbnQgICAgICA6IGFzY2VudCxcclxuICAgICAgbGluZUhlaWdodCA6IGxpbmVIZWlnaHRcclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBjaGFyUmVjdCggcG9zLCBmb250LCBmb250X21ldHJpY3MsIGZvbnRfY2hhciwga2VybiA9IDAuMCApIHtcclxuXHJcbiAgICAvLyBMb3cgY2FzZSBjaGFyYWN0ZXJzIGhhdmUgZmlyc3QgYml0IHNldCBpbiAnZmxhZ3MnXHJcbiAgICB2YXIgbG93Y2FzZSA9ICggZm9udF9jaGFyLmZsYWdzICYgMSApID09PSAxO1xyXG5cclxuICAgIC8vIFBlbiBwb3NpdGlvbiBpcyBhdCB0aGUgdG9wIG9mIHRoZSBsaW5lLCBZIGdvZXMgdXBcclxuICAgIHZhciBiYXNlbGluZSA9IHBvc1sxXSAtIGZvbnRfbWV0cmljcy5hc2NlbnQ7XHJcblxyXG4gICAgLy8gTG93IGNhc2UgY2hhcnMgdXNlIHRoZWlyIG93biBzY2FsZVxyXG4gICAgdmFyIHNjYWxlID0gbG93Y2FzZSA/IGZvbnRfbWV0cmljcy5sb3dTY2FsZSA6IGZvbnRfbWV0cmljcy5jYXBTY2FsZTtcclxuXHJcbiAgICAvLyBMYXlpbmcgb3V0IHRoZSBnbHlwaCByZWN0YW5nbGVcclxuICAgIHZhciBnICAgICAgPSBmb250X2NoYXIucmVjdDtcclxuICAgIHZhciBib3R0b20gPSBiYXNlbGluZSAtIHNjYWxlICogKCBmb250LmRlc2NlbnQgKyBmb250Lml5ICk7XHJcbiAgICB2YXIgdG9wICAgID0gYm90dG9tICAgKyBzY2FsZSAqICggZm9udC5yb3dfaGVpZ2h0ICk7XHJcbiAgICB2YXIgbGVmdCAgID0gcG9zWzBdICAgKyBzY2FsZSAqICggZm9udF9jaGFyLmJlYXJpbmdfeCArIGtlcm4gLSBmb250Lml4ICk7XHJcbiAgICB2YXIgcmlnaHQgID0gbGVmdCAgICAgKyBzY2FsZSAqICggZ1syXSAtIGdbMF0gKTtcclxuICAgIHZhciBwID0gWyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20gXTtcclxuXHJcbiAgICAvLyBBZHZhbmNpbmcgcGVuIHBvc2l0aW9uXHJcbiAgICB2YXIgbmV3X3Bvc194ID0gcG9zWzBdICsgc2NhbGUgKiAoIGZvbnRfY2hhci5hZHZhbmNlX3ggKTtcclxuXHJcbiAgICAvLyBTaWduZWQgZGlzdGFuY2UgZmllbGQgc2l6ZSBpbiBzY3JlZW4gcGl4ZWxzXHJcbiAgICB2YXIgc2RmX3NpemUgID0gMi4wICogZm9udC5peSAqIHNjYWxlO1xyXG5cclxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcclxuICAgICAgcFswXSwgcFszXSwgLy8gbGVmdCBib3R0b20sXHJcbiAgICAgIHBbMl0sIHBbM10sIC8vIHJpZ2h0IGJvdHRvbSxcclxuICAgICAgcFsyXSwgcFsxXSwgLy8gcmlnaHQgdG9wXHJcbiAgICAgIHBbMF0sIHBbMV0sIC8vIGxlZnQgdG9wXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IHV2cyA9IFtcclxuICAgICAgZ1swXSwgZ1sxXSwgLy8gbGVmdCB0b3BcclxuICAgICAgZ1syXSwgZ1sxXSwgLy8gcmlnaHQgdG9wXHJcbiAgICAgIGdbMl0sIGdbM10sIC8vIHJpZ2h0IGJvdHRvbSxcclxuICAgICAgZ1swXSwgZ1szXSwgLy8gbGVmdCBib3R0b20sXHJcbiAgICBdO1xyXG5cclxuICAgIGNvbnN0IHNkZlNpemVzID0gW1xyXG4gICAgICBzZGZfc2l6ZSxcclxuICAgICAgc2RmX3NpemUsXHJcbiAgICAgIHNkZl9zaXplLFxyXG4gICAgICBzZGZfc2l6ZSxcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcG9zaXRpb25zLFxyXG4gICAgICB1dnMsXHJcbiAgICAgIHNkZlNpemVzLFxyXG4gICAgICBwb3M6IFsgbmV3X3Bvc194LCBwb3NbMV0gXVxyXG4gICAgfTtcclxuXHJcbiAgICAvL3JldHVybiB7IHZlcnRpY2VzIDogdmVydGljZXMsIHBvcyA6IFsgbmV3X3Bvc194LCBwb3NbMV0gXSB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF3ZXNvbWVUZXh0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGV4dC5qcyIsIlxyXG5jbGFzcyBUZXh0TGF5b3V0IHtcclxuXHJcbiAgdGV4dCA9IFwiXCI7XHJcbiAgZm9udCA9IG51bGw7XHJcbiAgbWV0cmljcyA9IG51bGw7XHJcbiAgZm9udFNpemUgPSAyMDtcclxuICBhbGlnbiA9IFwibGVmdFwiO1xyXG4gIHN0YXJ0WCA9IDA7XHJcbiAgc3RhcnRZID0gMDtcclxuICB3cmFwcGVyV2lkdGggPSAxMDA7XHJcbiAgd3JhcFdvcmRzID0gZmFsc2U7XHJcbiAgd29yZHNNZXRyaWNzID0gW107XHJcbiAgbGV0dGVyc0NvdW50ID0gMDtcclxuICBoZWlnaHQgPSAwO1xyXG4gIGxpbmVzQ291bnQgPSAwO1xyXG4gIGxpbmVIZWlnaHQgPSAwO1xyXG4gIGdseXBocyA9IFtdO1xyXG4gIG93bmVyID0gbnVsbDtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKG93bmVyLCBjb25maWcpIHtcclxuXHJcbiAgICB0aGlzLm93bmVyID0gb3duZXI7XHJcbiAgICB0aGlzLnRleHQgPSBvd25lci50ZXh0O1xyXG4gICAgdGhpcy5mb250ID0gb3duZXIuZm9udDtcclxuICAgIHRoaXMuZm9udFNpemUgPSBjb25maWcuZm9udFNpemU7XHJcbiAgICB0aGlzLndyYXBXb3JkcyA9IGNvbmZpZy53cmFwV29yZHM7XHJcbiAgICB0aGlzLndyYXBwZXJXaWR0aCA9IGNvbmZpZy53cmFwcGVyV2lkdGg7XHJcbiAgICB0aGlzLmxpbmVIZWlnaHQgPSBjb25maWcubGluZUhlaWdodDtcclxuICAgIHRoaXMuYWxpZ24gPSBjb25maWcuYWxpZ247XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG5cclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMudGV4dCA9IHRoaXMub3duZXIudGV4dDtcclxuICAgIHRoaXMuZm9udCA9IHRoaXMub3duZXIuZm9udDtcclxuXHJcbiAgICB0aGlzLmxldHRlcnNDb3VudCA9IHRoaXMudGV4dC5zcGxpdChcIlwiKS5sZW5ndGg7XHJcbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLmZvbnRNZXRyaWNzKHRoaXMuZm9udCwgMC4wKTtcclxuICAgIHRoaXMuc3RhcnRZID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XHJcbiAgICB0aGlzLmNhbGN1bGF0ZVdvcmRzUG9zaXRpb25zKCk7XHJcblxyXG4gICAgdGhpcy5nbHlwaHMgPSBbXTtcclxuXHJcbiAgICB0aGlzLndvcmRzTWV0cmljcy5mb3JFYWNoICh3b3JkID0+IHtcclxuICAgICAgdGhpcy5nZXRHbHlwaHMod29yZC53b3JkLCBbd29yZC54LCB3b3JkLnldKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgZm9udE1ldHJpY3MoZm9udFNpemUsIG1vcmVMaW5lR2FwID0gMC4yKSB7XHJcblxyXG4gICAgY29uc3Qge2NhcF9oZWlnaHQsIHhfaGVpZ2h0LCBhc2NlbnQ6IGZvbnRBc2NlbnQgLCBkZXNjZW50LCBsaW5lX2dhcH0gPSB0aGlzLmZvbnQ7XHJcblxyXG4gICAgY29uc3QgY2FwU2NhbGUgPSB0aGlzLmZvbnRTaXplIC8gY2FwX2hlaWdodDtcclxuICAgIGNvbnN0IGxvd1NjYWxlID0gTWF0aC5yb3VuZCggeF9oZWlnaHQgKiBjYXBTY2FsZSApIC8geF9oZWlnaHQ7XHJcbiAgICBjb25zdCBhc2NlbnQgPSBNYXRoLnJvdW5kKCBmb250QXNjZW50ICogY2FwU2NhbGUgKTtcclxuICAgIGxldCBsaW5lSGVpZ2h0ID0gTWF0aC5yb3VuZCggY2FwU2NhbGUgKiAoIGZvbnRBc2NlbnQgKyBkZXNjZW50ICsgbGluZV9nYXAgKSArIG1vcmVMaW5lR2FwICk7XHJcblxyXG4gICAgaWYgKHRoaXMubGluZUhlaWdodCA+IDApXHJcbiAgICAgIGxpbmVIZWlnaHQgPSB0aGlzLmxpbmVIZWlnaHQ7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMubGluZUhlaWdodCA9IGxpbmVIZWlnaHQ7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2FwU2NhbGUgICA6IGNhcFNjYWxlLFxyXG4gICAgICBsb3dTY2FsZSAgIDogbG93U2NhbGUsXHJcbiAgICAgIGFzY2VudCAgICAgIDogYXNjZW50LFxyXG4gICAgICBsaW5lSGVpZ2h0IDogbGluZUhlaWdodFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNoYXJSZWN0KCBwb3MsIGZvbnRfY2hhciwga2VybiA9IDAuMCApIHtcclxuXHJcbiAgICAvLyBMb3cgY2FzZSBjaGFyYWN0ZXJzIGhhdmUgZmlyc3QgYml0IHNldCBpbiAnZmxhZ3MnXHJcbiAgICB2YXIgbG93Y2FzZSA9ICggZm9udF9jaGFyLmZsYWdzICYgMSApID09PSAxO1xyXG5cclxuICAgIC8vIFBlbiBwb3NpdGlvbiBpcyBhdCB0aGUgdG9wIG9mIHRoZSBsaW5lLCBZIGdvZXMgdXBcclxuICAgIHZhciBiYXNlbGluZSA9IHBvc1sxXSAtIHRoaXMubWV0cmljcy5hc2NlbnQ7XHJcblxyXG4gICAgLy8gTG93IGNhc2UgY2hhcnMgdXNlIHRoZWlyIG93biBzY2FsZVxyXG4gICAgdmFyIHNjYWxlID0gbG93Y2FzZSA/IHRoaXMubWV0cmljcy5sb3dTY2FsZSA6IHRoaXMubWV0cmljcy5jYXBTY2FsZTtcclxuXHJcbiAgICAvLyBMYXlpbmcgb3V0IHRoZSBnbHlwaCByZWN0YW5nbGVcclxuICAgIHZhciBnICAgICAgPSBmb250X2NoYXIucmVjdDtcclxuICAgIHZhciBib3R0b20gPSBiYXNlbGluZSAtIHNjYWxlICogKCB0aGlzLmZvbnQuZGVzY2VudCArIHRoaXMuZm9udC5peSApO1xyXG4gICAgdmFyIHRvcCAgICA9IGJvdHRvbSAgICsgc2NhbGUgKiAoIHRoaXMuZm9udC5yb3dfaGVpZ2h0ICk7XHJcbiAgICB2YXIgbGVmdCAgID0gcG9zWzBdICAgKyBzY2FsZSAqICggZm9udF9jaGFyLmJlYXJpbmdfeCArIGtlcm4gLSB0aGlzLmZvbnQuaXggKTtcclxuICAgIHZhciByaWdodCAgPSBsZWZ0ICAgICArIHNjYWxlICogKCBnWzJdIC0gZ1swXSApO1xyXG4gICAgdmFyIHAgPSBbIGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSBdO1xyXG5cclxuICAgIC8vIEFkdmFuY2luZyBwZW4gcG9zaXRpb25cclxuICAgIHZhciBuZXdfcG9zX3ggPSBwb3NbMF0gKyBzY2FsZSAqICggZm9udF9jaGFyLmFkdmFuY2VfeCApO1xyXG5cclxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcclxuICAgICAgcFswXSwgcFszXSwgLy8gbGVmdCBib3R0b20sXHJcbiAgICAgIHBbMl0sIHBbM10sIC8vIHJpZ2h0IGJvdHRvbSxcclxuICAgICAgcFsyXSwgcFsxXSwgLy8gcmlnaHQgdG9wXHJcbiAgICAgIHBbMF0sIHBbMV0sIC8vIGxlZnQgdG9wXHJcbiAgICBdO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHBvc2l0aW9ucyxcclxuICAgICAgcG9zOiBbIG5ld19wb3NfeCwgcG9zWzFdIF0sXHJcbiAgICAgIG1ldHJpY3M6IHt4OiBwb3NbMF0sIHk6IHBvc1sxXSwgd2lkdGg6IHNjYWxlICogZm9udF9jaGFyLmFkdmFuY2VfeCB9XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgZ2V0U3RyaW5nU2l6ZShzdHJpbmcpIHtcclxuXHJcbiAgICBsZXQgd2lkdGggPSAwO1xyXG4gICAgbGV0IGhlaWdodCA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xyXG5cclxuICAgIGNvbnN0IGNoYXJzID0gWy4uLnN0cmluZ107XHJcblxyXG4gICAgLy8gSXRlcmF0ZSB0aG91Z2h0IHRoZSBjaGFycywgY2FsY3VsYXRlIHBvc2l0aW9uXHJcbiAgICBjaGFycy5mb3JFYWNoKGNoYXIgPT4ge1xyXG4gICAgICBsZXQgZm9udF9jaGFyID0gdGhpcy5mb250LmNoYXJzWyBjaGFyIF07XHJcblxyXG4gICAgICAvKmlmIChjaGFyID09PSBcIiBcIikge1xyXG4gICAgICAgIHdpZHRoICs9IHRoaXMuZm9udC5zcGFjZV9hZHZhbmNlICogdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgICAgfSovXHJcblxyXG4gICAgICAvLyBHZXQgY2hhciBtZXRyaWNzXHJcbiAgICAgIGxldCBjaGFyUmVjdCA9IHRoaXMuY2hhclJlY3QoW3dpZHRoLDBdLCBmb250X2NoYXIsIDAuMik7XHJcbiAgICAgIHdpZHRoID0gY2hhclJlY3QucG9zWzBdO1xyXG5cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7d2lkdGgsIGhlaWdodH07XHJcblxyXG4gIH1cclxuXHJcbiAgY2FsY3VsYXRlV29yZHNQb3NpdGlvbnMoKSB7XHJcblxyXG4gICAgY29uc3Qgd29yZHMgPSB0aGlzLnRleHQuc3BsaXQoXCIgXCIpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgIHdvcmRzW2ldID0gd29yZHNbaV0gKyBcIiBcIjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLndvcmRzTWV0cmljcyA9IFtdO1xyXG5cclxuICAgIC8vIEluaXRpYWwgcG9zaXRpb25cclxuICAgIGxldCB4ID0gdGhpcy5zdGFydFg7XHJcbiAgICBsZXQgeSA9IHRoaXMuc3RhcnRZO1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSB3b3JkcyBwb3NpdGlvbnMgb24gbGluZXNcclxuICAgIHdvcmRzLmZvckVhY2god29yZCA9PiB7XHJcbiAgICAgIGNvbnN0IHdvcmRTaXplID0gdGhpcy5nZXRTdHJpbmdTaXplKHdvcmQpO1xyXG4gICAgICBpZiAoeCArIHdvcmRTaXplLndpZHRoID4gdGhpcy5zdGFydFggKyB0aGlzLndyYXBwZXJXaWR0aCAmJiB0aGlzLndyYXBXb3Jkcykge1xyXG4gICAgICAgIHggPSB0aGlzLnN0YXJ0WDtcclxuICAgICAgICB5ICs9IHdvcmRTaXplLmhlaWdodDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy53b3Jkc01ldHJpY3MucHVzaCh7Li4ud29yZFNpemUsIHgsIHksIHdvcmR9KTtcclxuXHJcbiAgICAgIC8veCArPSB3b3JkU2l6ZS53aWR0aCArIHRoaXMuZm9udC5zcGFjZV9hZHZhbmNlICogdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xyXG4gICAgICB4ICs9IHdvcmRTaXplLndpZHRoO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIGxpbmVzIGNvdW50XHJcbiAgICB0aGlzLmxpbmVzQ291bnQgPSAoeSAtIHRoaXMuc3RhcnRZKSAvIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgMTtcclxuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5saW5lc0NvdW50ICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XHJcblxyXG4gICAgLy8gQ2hhbmdlIGFsaWduIFRPRE8gb3B0aW1pc2VcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saW5lc0NvdW50OyArK2kpIHtcclxuICAgICAgY29uc3Qgd29yZHNPbkxpbmUgPSB0aGlzLndvcmRzTWV0cmljcy5maWx0ZXIod29yZCA9PiB3b3JkLnkgPT09IHRoaXMuc3RhcnRZICsgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCkpXHJcblxyXG4gICAgICBjb25zdCBsYXN0V29yZCA9IHdvcmRzT25MaW5lW3dvcmRzT25MaW5lLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgaWYgKGxhc3RXb3JkKSB7XHJcbiAgICAgICAgY29uc3QgZnJlZVNwYWNlID0gKHRoaXMuc3RhcnRYICsgdGhpcy53cmFwcGVyV2lkdGgpIC0gKGxhc3RXb3JkLnggKyBsYXN0V29yZC53aWR0aCk7XHJcblxyXG4gICAgICAgIGxldCBsZWZ0T2Zmc2V0ID0gMDtcclxuXHJcbiAgICAgICAgc3dpdGNoICh0aGlzLmFsaWduKSB7XHJcbiAgICAgICAgICBjYXNlIFwiY2VudGVyXCI6XHJcbiAgICAgICAgICAgIGxlZnRPZmZzZXQgPSBmcmVlU3BhY2UgLyAyO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxyXG4gICAgICAgICAgICBsZWZ0T2Zmc2V0ID0gZnJlZVNwYWNlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy53b3Jkc01ldHJpY3MuZm9yRWFjaCh3b3JkID0+IHtcclxuICAgICAgICAgIGlmICh3b3JkLnkgPT09IHRoaXMuc3RhcnRZICsgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCkpIHtcclxuICAgICAgICAgICAgd29yZC54ICs9IGxlZnRPZmZzZXQ7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0R2x5cGhzKCBzdHJpbmcsIHBvcykge1xyXG4gICAgbGV0IHByZXZfY2hhciA9IFwiIFwiOyAgLy8gVXNlZCB0byBjYWxjdWxhdGUga2VybmluZ1xyXG4gICAgbGV0IGNwb3MgICAgICA9IHBvczsgIC8vIEN1cnJlbnQgcGVuIHBvc2l0aW9uXHJcbiAgICBsZXQgeF9tYXggICAgID0gMC4wOyAgLy8gTWF4IHdpZHRoIC0gdXNlZCBmb3IgYm91bmRpbmcgYm94XHJcbiAgICBsZXQgc2NhbGUgICAgID0gdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xyXG5cclxuICAgIGxldCBzdHJfcG9zID0gMDtcclxuXHJcbiAgICBmb3IoOzspIHtcclxuICAgICAgaWYgKCBzdHJfcG9zID09PSBzdHJpbmcubGVuZ3RoICkgYnJlYWs7XHJcblxyXG4gICAgICB2YXIgc2NoYXIgPSBzdHJpbmdbIHN0cl9wb3MgXTtcclxuICAgICAgc3RyX3BvcysrO1xyXG5cclxuICAgICAgaWYgKCBzY2hhciA9PT0gXCJcXG5cIiApIHtcclxuICAgICAgICBpZiAoIGNwb3NbMF0gPiB4X21heCApIHhfbWF4ID0gY3Bvc1swXTsgLy8gRXhwYW5kaW5nIHRoZSBib3VuZGluZyByZWN0XHJcbiAgICAgICAgY3Bvc1swXSAgPSBwb3NbMF07XHJcbiAgICAgICAgY3Bvc1sxXSAtPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcclxuICAgICAgICBwcmV2X2NoYXIgPSBcIiBcIjtcclxuICAgICAgICBjb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKCBzY2hhciA9PT0gXCIgXCIgKSB7XHJcbiAgICAgICAgLy9zY2hhciA9IFwiX1wiXHJcbiAgICAgICAgLy9jcG9zWzBdICs9IHRoaXMuZm9udC5zcGFjZV9hZHZhbmNlICogc2NhbGU7XHJcbiAgICAgICAgcHJldl9jaGFyID0gXCIgXCI7XHJcbiAgICAgICAgLy9jb250aW51ZTtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIGZvbnRfY2hhciA9IHRoaXMuZm9udC5jaGFyc1sgc2NoYXIgXTtcclxuICAgICAgaWYgKCAhZm9udF9jaGFyICkgeyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdWJzdGl0dXRpbmcgdW5hdmFpbGFibGUgY2hhcmFjdGVycyB3aXRoICc/J1xyXG4gICAgICAgIHNjaGFyID0gXCI/XCI7XHJcbiAgICAgICAgZm9udF9jaGFyID0gdGhpcy5mb250LmNoYXJzWyBcIj9cIiBdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIga2VybiA9IHRoaXMuZm9udC5rZXJuWyBwcmV2X2NoYXIgKyBzY2hhciBdO1xyXG4gICAgICBpZiAoICFrZXJuICkga2VybiA9IDAuMDtcclxuXHJcbiAgICAgIC8vIGNhbGN1bGF0aW5nIHRoZSBnbHlwaCByZWN0YW5nbGUgYW5kIGNvcHlpbmcgaXQgdG8gdGhlIHZlcnRleCBhcnJheVxyXG4gICAgICB2YXIgcmVjdCA9IHRoaXMuY2hhclJlY3QoIGNwb3MsIGZvbnRfY2hhciwga2VybiApO1xyXG5cclxuICAgICAgcHJldl9jaGFyID0gc2NoYXI7XHJcbiAgICAgIGNwb3MgPSByZWN0LnBvcztcclxuXHJcbiAgICAgIHRoaXMuZ2x5cGhzLnB1c2goe1xyXG4gICAgICAgIGxldHRlcjogc2NoYXIsXHJcbiAgICAgICAgdmVydGljZXM6IHJlY3QucG9zaXRpb25zLFxyXG4gICAgICAgIHBvc2l0aW9uOiByZWN0LnBvcyxcclxuICAgICAgICBtZXRyaWNzOiByZWN0Lm1ldHJpY3NcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dExheW91dDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xheW91dC5qcyIsImNvbnN0IGNyZWF0ZUluZGljZXMgPSByZXF1aXJlKFwicXVhZC1pbmRpY2VzXCIpXHJcblxyXG5jbGFzcyBTZWxlY3Qge1xyXG5cclxuICByYW5nZSA9IFswLDBdO1xyXG4gIG1ldHJpY3MgPSBudWxsO1xyXG4gIGxheW91dCA9IG51bGw7XHJcbiAgZGlydHkgPSBmYWxzZTtcclxuICBpbmRleEJ1ZmZlciA9IGZhbHNlO1xyXG4gIG93bmVyID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3Iob3duZXIpIHtcclxuICAgIHRoaXMub3duZXIgPSBvd25lcjtcclxuICAgIHRoaXMubWV0cmljcyA9IG93bmVyLm1ldHJpY3M7XHJcbiAgICB0aGlzLmxheW91dCA9IG93bmVyLmxheW91dDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMub3duZXIubWV0cmljcztcclxuICAgIHRoaXMubGF5b3V0ID0gdGhpcy5vd25lci5sYXlvdXQ7XHJcblxyXG4gICAgLy8gVmVydGljZXMgYXJyYXkgZm9yIGFsbCBzZWxlY3RlZCBsaW5lc1xyXG4gICAgdGhpcy52ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5sYXlvdXQubGluZXNDb3VudCAqIDQgKiAyKTtcclxuXHJcbiAgICBpZiAodGhpcy5yYW5nZVsxXSAhPT0gbnVsbClcclxuICAgIHRoaXMuYnVpbGRWZXJ0aWNlcygpO1xyXG5cclxuICAgIHRoaXMuaW5kaWNlcyA9IGNyZWF0ZUluZGljZXMoe1xyXG4gICAgICBjbG9ja3dpc2U6IHRydWUsXHJcbiAgICAgIHR5cGU6ICd1aW50MTYnLFxyXG4gICAgICBjb3VudDp0aGlzLmxheW91dC5saW5lc0NvdW50XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgIHRoaXMuaW5kZXhCdWZmZXIgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2V0UmFuZ2Uoc3RhcnQgPSBudWxsLCBlbmQgPSBudWxsKSB7XHJcblxyXG4gICAgY29uc3Qge2dseXBoc30gPSB0aGlzLm93bmVyLmxheW91dDtcclxuXHJcbiAgICBpZiAoc3RhcnQgPT09IG51bGwpIHN0YXJ0ID0gdGhpcy5yYW5nZVswXTtcclxuICAgIGlmIChlbmQgPT09IG51bGwpIGVuZCA9IHRoaXMucmFuZ2VbMV07XHJcblxyXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwO1xyXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDA7XHJcblxyXG4gICAgaWYgKHN0YXJ0ID4gZ2x5cGhzLmxlbmd0aCAtMSlzdGFydCA9IGdseXBocy5sZW5ndGggLSAxO1xyXG4gICAgaWYgKGVuZCA+IGdseXBocy5sZW5ndGggLSAxKSBlbmQgPSBnbHlwaHMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICBpZiAoZW5kID09PSBmYWxzZSkgZW5kID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnJhbmdlID0gW3N0YXJ0LCBlbmRdO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkVmVydGljZXMoKSB7XHJcblxyXG4gICAgLy8gU2VsZWN0IHJhbmdlXHJcbiAgICBsZXQgc3RhcnQgPSB0aGlzLmxheW91dC5nbHlwaHNbTWF0aC5taW4uYXBwbHkobnVsbCx0aGlzLnJhbmdlKV07XHJcbiAgICBsZXQgZW5kID0gdGhpcy5sYXlvdXQuZ2x5cGhzW01hdGgubWF4LmFwcGx5KG51bGwsdGhpcy5yYW5nZSldO1xyXG5cclxuXHJcbiAgICAvLyBJdGVyYXRlIHRob3VnaHQgYWxsIGxpbmVzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGF5b3V0LmxpbmVzQ291bnQ7ICsraSkge1xyXG4gICAgICBsZXQgbGV0dGVyQ291bnQgPSAwOyAvLyBsZXR0ZXJzIHBhc3NlZFxyXG4gICAgICBsZXQgZmlyc3RMZXR0ZXIgPSBudWxsOyAvLyBmaXJzdCBsZXR0ZXIgb24gdGhpcyBsaW5lXHJcbiAgICAgIGxldCBsYXN0TGV0dGVyID0gbnVsbDsgLy8gbGFzdCBsZXR0ZXIgb24gdGhpcyBsaW5lXHJcblxyXG5cclxuXHJcbiAgICAgIGlmIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyB0aGlzLm1ldHJpY3MubGluZUhlaWdodCA8IHN0YXJ0LnBvc2l0aW9uWzFdKSBjb250aW51ZTtcclxuICAgICAgaWYgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCArIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ID4gZW5kLnBvc2l0aW9uWzFdKSBjb250aW51ZTtcclxuXHJcbiAgICAgIC8vIFRha2UgZXZlcnkgd29yZCwgaWYgaXQncyBsYXN0IG9yIGZpcnN0IG9uIGxpbmUgLSBjaGFuZ2UgYm91bmRzIGxldHRlcnNcclxuICAgICAgdGhpcy5sYXlvdXQud29yZHNNZXRyaWNzLm1hcCh3b3JkID0+IHtcclxuXHJcbiAgICAgICAgaWYgKHdvcmQueSA9PT0gdGhpcy5sYXlvdXQuc3RhcnRZICsgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCkpIHtcclxuICAgICAgICAgIGlmIChmaXJzdExldHRlciA9PT0gbnVsbCkgZmlyc3RMZXR0ZXIgPSBsZXR0ZXJDb3VudDtcclxuICAgICAgICAgIGxhc3RMZXR0ZXIgPSBsZXR0ZXJDb3VudCArIHdvcmQud29yZC5sZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0dGVyQ291bnQgKz0gd29yZC53b3JkLmxlbmd0aDtcclxuICAgICAgfSk7XHJcblxyXG4gICAgICAvLyBCb3VuZHMgbGV0dGVycyBmb3IgY3VycmVudCBsaW5lXHJcbiAgICAgIGxldCBzdGFydExpbmVMZXR0ZXIgPSB0aGlzLmxheW91dC5nbHlwaHNbZmlyc3RMZXR0ZXJdO1xyXG4gICAgICBsZXQgZW5kTGluZUxldHRlciA9IHRoaXMubGF5b3V0LmdseXBoc1tsYXN0TGV0dGVyXTtcclxuXHJcblxyXG5cclxuICAgICAgLy8gSWYgdGhlIHN0YXJ0IG9yIGVuZCByYW5nZSBpcyBvbiB0aGlzIGxpbmUsIGNoYW5nZSBib3VuZHMgZm9yIHRoZW1cclxuICAgICAgaWYgKHN0YXJ0LnBvc2l0aW9uWzFdID09PSAgc3RhcnRMaW5lTGV0dGVyLnBvc2l0aW9uWzFdKSBzdGFydExpbmVMZXR0ZXIgPSBzdGFydDtcclxuICAgICAgaWYgKGVuZC5wb3NpdGlvblsxXSA9PT0gZW5kTGluZUxldHRlci5wb3NpdGlvblsxXSkgZW5kTGluZUxldHRlciA9IGVuZDtcclxuXHJcbiAgICAgIC8vIFdlIHVzZSBvZmZzZXQgdG8gYXZvaWQgc2VsZWN0cyBvdmVybGFwcGluZ1xyXG4gICAgICBjb25zdCBvZmZzZXQgPSAodGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgLSB0aGlzLm1ldHJpY3MuYXNjZW50KSAvIDI7XHJcblxyXG4gICAgICAvLyBBZGQgcG9zaXRpb25zIHRvIGFycmF5XHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KV0gPSBzdGFydExpbmVMZXR0ZXIudmVydGljZXNbMF07XHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDFdID0gc3RhcnRMaW5lTGV0dGVyLnZlcnRpY2VzWzFdICsgb2Zmc2V0O1xyXG5cclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgMl0gPSBlbmRMaW5lTGV0dGVyLnZlcnRpY2VzWzJdO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyAzXSA9IGVuZExpbmVMZXR0ZXIudmVydGljZXNbM10gICArIG9mZnNldDtcclxuXHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDRdID0gZW5kTGluZUxldHRlci52ZXJ0aWNlc1s0XTtcclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgNV0gPSBlbmRMaW5lTGV0dGVyLnZlcnRpY2VzWzVdICAtIG9mZnNldDtcclxuXHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDZdID0gc3RhcnRMaW5lTGV0dGVyLnZlcnRpY2VzWzZdO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyA3XSA9IHN0YXJ0TGluZUxldHRlci52ZXJ0aWNlc1s3XSAgLSBvZmZzZXQ7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGdldENsb3Nlc3RHbHlwaCh4LCB5KSB7XHJcblxyXG4gICAgY29uc3QgeyBnbHlwaHMgfSA9IHRoaXMub3duZXIubGF5b3V0O1xyXG5cclxuICAgIGNvbnN0IGxpbmVIZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcclxuICAgIGNvbnN0IHNlbGVjdGluZ0xpbmUgPSBNYXRoLmZsb29yKHkgLyB0aGlzLm1ldHJpY3MubGluZUhlaWdodCk7XHJcbiAgICBjb25zdCBzZWxlY3RpbmdMaW5lWSA9IHNlbGVjdGluZ0xpbmUgKiBsaW5lSGVpZ2h0O1xyXG4gICAgbGV0IGxhc3RHbHlwaE9uTGluZSA9IGdseXBoc1tnbHlwaHMubGVuZ3RoIC0gMV07XHJcbiAgICBsZXQgZmlyc3RHbHlwaE9uTGluZSA9IG51bGw7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnbHlwaHMubGVuZ3RoIDsgKytpKSB7XHJcblxyXG4gICAgICBsZXQgZ2x5cGggPSBnbHlwaHNbaV07XHJcblxyXG4gICAgICBpZiAoZ2x5cGgubWV0cmljcy55ID09PSBzZWxlY3RpbmdMaW5lWSArIGxpbmVIZWlnaHQpIHtcclxuXHJcbiAgICAgICAgbGFzdEdseXBoT25MaW5lID0gZ2x5cGg7XHJcblxyXG4gICAgICAgIGlmICh4IDwgZ2x5cGgubWV0cmljcy54ICsgZ2x5cGgubWV0cmljcy53aWR0aCAvIDIpIHtcclxuXHJcbiAgICAgICAgICBpZiAoaSA9PT0gMCkgcmV0dXJuIC0xO1xyXG4gICAgICAgICAgcmV0dXJuIGdseXBoc1tpIC0gMV07XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGxhc3RHbHlwaE9uTGluZTtcclxuXHJcbiAgfVxyXG5cclxuICBvbk1vdXNlRG93bihldmVudCkge1xyXG5cclxuICAgIC8vIE9ubHkgbGVmdCBtb3VzZSBidXR0b25cclxuICAgIGlmIChldmVudC5kYXRhLmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBwb3NpdGlvbiA9IGV2ZW50LmRhdGEuZ2xvYmFsO1xyXG5cclxuICAgIHBvc2l0aW9uLnggLT0gdGhpcy5vd25lci5wb3NpdGlvbi54O1xyXG4gICAgcG9zaXRpb24ueSAtPSB0aGlzLm93bmVyLnBvc2l0aW9uLnk7XHJcblxyXG4gICAgcG9zaXRpb24ueCA9IHBvc2l0aW9uLnggLyAgdGhpcy5vd25lci5zY2FsZS54O1xyXG4gICAgcG9zaXRpb24ueSA9IHBvc2l0aW9uLnkgLyB0aGlzLm93bmVyLnNjYWxlLnk7XHJcblxyXG4gICAgY29uc3QgY2xvc2VzdExldHRlciA9IHRoaXMuZ2V0Q2xvc2VzdEdseXBoKHBvc2l0aW9uLnggLCBwb3NpdGlvbi55KTtcclxuICAgIGxldCBpbmRleCA9IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5pbmRleE9mKGNsb3Nlc3RMZXR0ZXIpO1xyXG5cclxuICAgIHRoaXMuc2V0UmFuZ2UoaW5kZXggKyAxLCBmYWxzZSApO1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcclxuXHJcbiAgICBsZXQgcG9zaXRpb24gPSBldmVudC5kYXRhLmdsb2JhbDtcclxuXHJcbiAgICBwb3NpdGlvbi54IC09IHRoaXMub3duZXIucG9zaXRpb24ueDtcclxuICAgIHBvc2l0aW9uLnkgLT0gdGhpcy5vd25lci5wb3NpdGlvbi55O1xyXG5cclxuICAgIHBvc2l0aW9uLnggPSBwb3NpdGlvbi54IC8gdGhpcy5vd25lci5zY2FsZS54O1xyXG4gICAgcG9zaXRpb24ueSA9IHBvc2l0aW9uLnkgLyB0aGlzLm93bmVyLnNjYWxlLnk7XHJcblxyXG4gICAgY29uc3QgY2xvc2VzdExldHRlciA9IHRoaXMuZ2V0Q2xvc2VzdEdseXBoKHBvc2l0aW9uLnggICwgcG9zaXRpb24ueSk7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLm93bmVyLmxheW91dC5nbHlwaHMuaW5kZXhPZihjbG9zZXN0TGV0dGVyKTtcclxuXHJcbiAgICB0aGlzLnNldFJhbmdlKG51bGwsIGluZGV4ICsgMSk7XHJcbiAgfVxyXG5cclxuICBvbk1vdXNlVXAoZXZlbnQpIHtcclxuXHJcbiAgICAvLyBPbmx5IGxlZnQgbW91c2UgYnV0dG9uXHJcbiAgICBpZiAoZXZlbnQuZGF0YS5idXR0b24gIT09IDApIHJldHVybjtcclxuXHJcbiAgICBsZXQgcG9zaXRpb24gPSBldmVudC5kYXRhLmdsb2JhbDtcclxuXHJcbiAgICBwb3NpdGlvbi54IC09IHRoaXMub3duZXIucG9zaXRpb24ueDtcclxuICAgIHBvc2l0aW9uLnkgLT0gdGhpcy5vd25lci5wb3NpdGlvbi55O1xyXG5cclxuICAgIHBvc2l0aW9uLnggPSBwb3NpdGlvbi54IC8gdGhpcy5vd25lci5zY2FsZS54O1xyXG4gICAgcG9zaXRpb24ueSA9IHBvc2l0aW9uLnkgLyB0aGlzLm93bmVyLnNjYWxlLnk7XHJcblxyXG4gICAgY29uc3QgY2xvc2VzdExldHRlciA9IHRoaXMuZ2V0Q2xvc2VzdEdseXBoKHBvc2l0aW9uLnggLCBwb3NpdGlvbi55KTtcclxuXHJcbiAgICAvLyAtMSBtZWFucyB0aGF0IHdlIGF0IHRoZSBzdGFydCBvZiB0aGUgbGluZVxyXG4gICAgaWYgKGNsb3Nlc3RMZXR0ZXIgPT09IC0xKSB7XHJcbiAgICAgIHRoaXMub3duZXIuaW5wdXQuZ2x5cGhJbmRleCA9IGNsb3Nlc3RMZXR0ZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm93bmVyLmlucHV0LmdseXBoSW5kZXggPSB0aGlzLm93bmVyLmxheW91dC5nbHlwaHMuaW5kZXhPZihjbG9zZXN0TGV0dGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Q7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZWxlY3QuanMiLCJ2YXIgZHR5cGUgPSByZXF1aXJlKCdkdHlwZScpXG52YXIgYW5BcnJheSA9IHJlcXVpcmUoJ2FuLWFycmF5JylcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpXG5cbnZhciBDVyA9IFswLCAyLCAzXVxudmFyIENDVyA9IFsyLCAxLCAzXVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZVF1YWRFbGVtZW50cyhhcnJheSwgb3B0KSB7XG4gICAgLy9pZiB1c2VyIGRpZG4ndCBzcGVjaWZ5IGFuIG91dHB1dCBhcnJheVxuICAgIGlmICghYXJyYXkgfHwgIShhbkFycmF5KGFycmF5KSB8fCBpc0J1ZmZlcihhcnJheSkpKSB7XG4gICAgICAgIG9wdCA9IGFycmF5IHx8IHt9XG4gICAgICAgIGFycmF5ID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0ID09PSAnbnVtYmVyJykgLy9iYWNrd2FyZHMtY29tcGF0aWJsZVxuICAgICAgICBvcHQgPSB7IGNvdW50OiBvcHQgfVxuICAgIGVsc2VcbiAgICAgICAgb3B0ID0gb3B0IHx8IHt9XG5cbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBvcHQudHlwZSA9PT0gJ3N0cmluZycgPyBvcHQudHlwZSA6ICd1aW50MTYnXG4gICAgdmFyIGNvdW50ID0gdHlwZW9mIG9wdC5jb3VudCA9PT0gJ251bWJlcicgPyBvcHQuY291bnQgOiAxXG4gICAgdmFyIHN0YXJ0ID0gKG9wdC5zdGFydCB8fCAwKSBcblxuICAgIHZhciBkaXIgPSBvcHQuY2xvY2t3aXNlICE9PSBmYWxzZSA/IENXIDogQ0NXLFxuICAgICAgICBhID0gZGlyWzBdLCBcbiAgICAgICAgYiA9IGRpclsxXSxcbiAgICAgICAgYyA9IGRpclsyXVxuXG4gICAgdmFyIG51bUluZGljZXMgPSBjb3VudCAqIDZcblxuICAgIHZhciBpbmRpY2VzID0gYXJyYXkgfHwgbmV3IChkdHlwZSh0eXBlKSkobnVtSW5kaWNlcylcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IDA7IGkgPCBudW1JbmRpY2VzOyBpICs9IDYsIGogKz0gNCkge1xuICAgICAgICB2YXIgeCA9IGkgKyBzdGFydFxuICAgICAgICBpbmRpY2VzW3ggKyAwXSA9IGogKyAwXG4gICAgICAgIGluZGljZXNbeCArIDFdID0gaiArIDFcbiAgICAgICAgaW5kaWNlc1t4ICsgMl0gPSBqICsgMlxuICAgICAgICBpbmRpY2VzW3ggKyAzXSA9IGogKyBhXG4gICAgICAgIGluZGljZXNbeCArIDRdID0gaiArIGJcbiAgICAgICAgaW5kaWNlc1t4ICsgNV0gPSBqICsgY1xuICAgIH1cbiAgICByZXR1cm4gaW5kaWNlc1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9xdWFkLWluZGljZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkdHlwZSkge1xuICBzd2l0Y2ggKGR0eXBlKSB7XG4gICAgY2FzZSAnaW50OCc6XG4gICAgICByZXR1cm4gSW50OEFycmF5XG4gICAgY2FzZSAnaW50MTYnOlxuICAgICAgcmV0dXJuIEludDE2QXJyYXlcbiAgICBjYXNlICdpbnQzMic6XG4gICAgICByZXR1cm4gSW50MzJBcnJheVxuICAgIGNhc2UgJ3VpbnQ4JzpcbiAgICAgIHJldHVybiBVaW50OEFycmF5XG4gICAgY2FzZSAndWludDE2JzpcbiAgICAgIHJldHVybiBVaW50MTZBcnJheVxuICAgIGNhc2UgJ3VpbnQzMic6XG4gICAgICByZXR1cm4gVWludDMyQXJyYXlcbiAgICBjYXNlICdmbG9hdDMyJzpcbiAgICAgIHJldHVybiBGbG9hdDMyQXJyYXlcbiAgICBjYXNlICdmbG9hdDY0JzpcbiAgICAgIHJldHVybiBGbG9hdDY0QXJyYXlcbiAgICBjYXNlICdhcnJheSc6XG4gICAgICByZXR1cm4gQXJyYXlcbiAgICBjYXNlICd1aW50OF9jbGFtcGVkJzpcbiAgICAgIHJldHVybiBVaW50OENsYW1wZWRBcnJheVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZHR5cGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHN0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxubW9kdWxlLmV4cG9ydHMgPSBhbkFycmF5XG5cbmZ1bmN0aW9uIGFuQXJyYXkoYXJyKSB7XG4gIHJldHVybiAoXG4gICAgICAgYXJyLkJZVEVTX1BFUl9FTEVNRU5UXG4gICAgJiYgc3RyLmNhbGwoYXJyLmJ1ZmZlcikgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSdcbiAgICB8fCBBcnJheS5pc0FycmF5KGFycilcbiAgKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuLWFycmF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxuLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cblxuLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS5cbmZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzLWJ1ZmZlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcclxuXHJcbmNsYXNzIElucHV0IHtcclxuXHJcbiAgX2VuYWJsZWQgPSBmYWxzZTtcclxuICBvd25lciA9IG51bGw7XHJcblxyXG4gIF9nbHlwaEluZGV4ID0gLTE7XHJcblxyXG4gIHNldCBnbHlwaEluZGV4KHZhbHVlKSB7XHJcbiAgICB0aGlzLl9nbHlwaEluZGV4ID0gdmFsdWU7XHJcblxyXG4gICAgaWYgKHRoaXMuX2dseXBoSW5kZXggPCAtMSlcclxuICAgICAgdGhpcy5fZ2x5cGhJbmRleCA9IC0xO1xyXG5cclxuICAgIGlmICh0aGlzLl9nbHlwaEluZGV4ID4gdGhpcy5vd25lci5sYXlvdXQuZ2x5cGhzLmxlbmd0aClcclxuICAgICAgdGhpcy5fZ2x5cGhJbmRleCA9IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5sZW5ndGg7XHJcblxyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBnbHlwaEluZGV4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dseXBoSW5kZXg7XHJcbiAgfVxyXG5cclxuICBzZXQgZW5hYmxlZCh2YWx1ZSkge1xyXG4gICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcclxuICAgICAgdGhpcy5lbmFibGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGVuYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3Iob3duZXIpIHtcclxuICAgIHRoaXMub3duZXIgPSBvd25lcjtcclxuICAgIHRoaXMubWV0cmljcyA9IG93bmVyLm1ldHJpY3M7XHJcbiAgICB0aGlzLmxheW91dCA9IG93bmVyLmxheW91dDtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZUZpZWxkKCk7XHJcbiAgICB0aGlzLmRpc2FibGUoKTtcclxuICB9XHJcblxyXG4gIGVuYWJsZSgpIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5pbnB1dEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZSgpIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy5pbnB1dEVsZW1lbnQpKVxyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuaW5wdXRFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGhpZGUoKSB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gIH1cclxuXHJcbiAgc2hvdygpIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVGaWVsZCgpIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG5cclxuXHJcblxyXG4gICAgY29uc3QgdHJhbnNmb3JtID0gT2JqZWN0LnZhbHVlcyh0aGlzLm93bmVyLnRyYW5zZm9ybS53b3JsZFRyYW5zZm9ybSkuc2xpY2UoMCwgNik7XHJcblxyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgIC8vdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwwLDAsMC4zKSc7XHJcblxyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuY29sb3IgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5jb250YWluID0gJ3N0cmljdCc7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS56SW5kZXggPSAyO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuY29sb3IgPSB0aGlzLm93bmVyLnN0eWxlLmZpbGw7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW49IFwibGVmdCB0b3BcIjtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBtYXRyaXgoJHt0cmFuc2Zvcm0uam9pbihcIiwgXCIpfSlgO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUucGFkZGluZyA9IFwiMFwiO1xyXG5cclxuICAgIHRoaXMuYWRkRXZlbnQoXCJibHVyXCIsIChldmVudCkgPT4gdGhpcy5pbnB1dEVsZW1lbnQuZm9jdXMoKSk7XHJcbiAgICB0aGlzLmFkZEV2ZW50KFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB0aGlzLm9uSW5wdXQoZXZlbnQpKTtcclxuICAgIHRoaXMuYWRkRXZlbnQoXCJrZXlkb3duXCIsIChldmVudCkgPT4gdGhpcy5vbktleWRvd24oZXZlbnQpKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG5cclxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMub3duZXIubWV0cmljcztcclxuICAgIHRoaXMubGF5b3V0ID0gdGhpcy5vd25lci5sYXlvdXQ7XHJcblxyXG4gICAgY29uc3Qge2dseXBoc30gPSB0aGlzLm93bmVyLmxheW91dDtcclxuXHJcbiAgICBpZiAodGhpcy5nbHlwaEluZGV4ID49IGdseXBocy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5nbHlwaEluZGV4ID0gZ2x5cGhzLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVmYXVsdCBjYXJldCBwbGFjZSAtIHN0YXJ0IG9mIHRoZSBpbnB1dCBmaWVsZCBUT0RPIGltcGxlbWVudCBhbGlnblxyXG4gICAgbGV0IGdseXBoTWV0cmljcyA9IHtcclxuICAgICAgeDogdGhpcy5vd25lci5wb3NpdGlvbi54LFxyXG4gICAgICB5OiB0aGlzLm93bmVyLnBvc2l0aW9uLnlcclxuICAgIH07XHJcblxyXG4gICAgLy8gaWYgc3RyaW5nIGlzIGVtcHR5LCBwdXQgY2FyZXQgYXQgdGhlIGJlZ2lubmluZ1xyXG4gICAgaWYgKHRoaXMub3duZXIubGF5b3V0LmdseXBocy5sZW5ndGggPT09IC0xKSB7XHJcblxyXG4gICAgICAvLyBpZiB3ZSBvbiB0aGUgbGFzdCBnbHlwaCwgcGxhY2UgY2FyZXQgYWZ0ZXIgaXRcclxuICAgIH1lbHNlIGlmICh0aGlzLmdseXBoSW5kZXggPT09IGdseXBocy5sZW5ndGgpIHtcclxuXHJcbiAgICAgIGNvbnN0IGxhc3RHbHlwaCA9IGdseXBoc1tnbHlwaHMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICBnbHlwaE1ldHJpY3MueCArPSBsYXN0R2x5cGgubWV0cmljcy54ICsgbGFzdEdseXBoLm1ldHJpY3Mud2lkdGg7XHJcbiAgICAgIGdseXBoTWV0cmljcy55ICs9IGxhc3RHbHlwaC5tZXRyaWNzLnk7XHJcblxyXG4gICAgICAvLyBpZiBjYXJldCBpbiB0aGUgbWlkZGxlIG9mIHRoZSB0ZXh0XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ2x5cGhJbmRleCAhPT0gLTEpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRHbHlwaCA9IGdseXBoc1t0aGlzLmdseXBoSW5kZXhdO1xyXG5cclxuICAgICAgZ2x5cGhNZXRyaWNzLnggKz0gc2VsZWN0ZWRHbHlwaC5tZXRyaWNzLnggKyBzZWxlY3RlZEdseXBoLm1ldHJpY3Mud2lkdGg7XHJcbiAgICAgIGdseXBoTWV0cmljcy55ICs9IHNlbGVjdGVkR2x5cGgubWV0cmljcy55O1xyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIGdseXBoTWV0cmljcy55ICs9IHRoaXMub3duZXIuc3R5bGUubGluZUhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBPYmplY3QudmFsdWVzKHRoaXMub3duZXIudHJhbnNmb3JtLndvcmxkVHJhbnNmb3JtKS5zbGljZSgwLCA2KTtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBtYXRyaXgoJHt0cmFuc2Zvcm0uam9pbihcIiwgXCIpfSlgO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyBcInB4XCI7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgXCJweFwiO1xyXG5cclxuICAgIHRoaXMuc2V0UG9zaXRpb24oZ2x5cGhNZXRyaWNzLnggLCBnbHlwaE1ldHJpY3MueSk7XHJcblxyXG4gICAgLy90aGlzLnNldFNjYWxlKHRoaXMub3duZXIuc2NhbGUueCwgdGhpcy5vd25lci5zY2FsZS55KTtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBvbklucHV0KGV2ZW50KSB7XHJcblxyXG4gICAgY29uc3QgeyByYW5nZSB9ID0gdGhpcy5vd25lci5zZWxlY3Q7XHJcblxyXG4gICAgLy8gSWYgdXNlciBzZWxlY3RlZCBzb21lIHRleHQsIHJlbW92ZSBpdFxyXG4gICAgaWYgKHJhbmdlWzBdICE9PSByYW5nZVsxXSAmJiByYW5nZVsxXSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmdseXBoSW5kZXggPSBNYXRoLm1pbihyYW5nZVswXSAtIDEsIHJhbmdlWzFdIC0gMSk7XHJcbiAgICAgIGNvbnN0IHJlbW92ZUluZGV4ID0gTWF0aC5taW4uYXBwbHkobnVsbCwgcmFuZ2UpO1xyXG4gICAgICBjb25zdCByZW1vdmVMZW5ndGggPSBNYXRoLmFicyhyYW5nZVswXSAtIHJhbmdlWzFdKTtcclxuICAgICAgdGhpcy5vd25lci5zZWxlY3Quc2V0UmFuZ2UoMCxmYWxzZSk7XHJcbiAgICAgIHRoaXMub3duZXIucmVtb3ZlU3RyaW5nKHJlbW92ZUluZGV4LCByZW1vdmVMZW5ndGgpO1xyXG4gICAgICB0aGlzLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgIGlmIChldmVudC5kYXRhID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgLy8gSWYgdGV4dCBpcyBlbXB0eSBub3dcclxuICAgIGlmICh0aGlzLm93bmVyLmxheW91dC5nbHlwaHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMub3duZXIudGV4dCA9IGV2ZW50LmRhdGE7XHJcbiAgICAgIHRoaXMuZ2x5cGhJbmRleCA9IDE7XHJcblxyXG4gICAgLy8gSWYgY2FyZXQgaXMgYXQgdGhlIGVuZCBvZiB0aGUgdGV4dFxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmdseXBoSW5kZXggPT09IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHRoaXMub3duZXIudGV4dCArPSBldmVudC5kYXRhO1xyXG4gICAgICB0aGlzLmdseXBoSW5kZXgrKztcclxuXHJcbiAgICAvLyBJZiB3ZSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBsaW5lXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm93bmVyLmluc2VydFN0cmluZygrK3RoaXMuZ2x5cGhJbmRleCwgZXZlbnQuZGF0YSk7XHJcbiAgICAgIC8vdGhpcy5nbHlwaEluZGV4Kys7XHJcbiAgICB9XHJcbiAgICB0aGlzLm93bmVyLnNlbGVjdC5zZXRSYW5nZSgwLCBmYWxzZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgb25LZXlkb3duKGV2ZW50KSB7XHJcblxyXG5cclxuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcclxuICAgICAgICB0aGlzLm93bmVyLnNlbGVjdC5zZXRSYW5nZSgwLCBmYWxzZSk7XHJcbiAgICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICAgICAgdGhpcy5nbHlwaEluZGV4LS07XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxyXG4gICAgICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKDAsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICB0aGlzLmdseXBoSW5kZXgrKztcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwiQmFja3NwYWNlXCI6XHJcbiAgICAgIGNhc2UgXCJEZWxldGVcIjpcclxuICAgICAgICBjb25zdCB7cmFuZ2V9ID0gdGhpcy5vd25lci5zZWxlY3Q7XHJcbiAgICAgICAgaWYgKHJhbmdlWzFdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICB0aGlzLmdseXBoSW5kZXggPSBNYXRoLm1pbihyYW5nZVswXSwgcmFuZ2VbMV0pO1xyXG4gICAgICAgICAgY29uc3QgcmVtb3ZlSW5kZXggPSBNYXRoLm1pbi5hcHBseShudWxsLCByYW5nZSk7XHJcbiAgICAgICAgICBjb25zdCByZW1vdmVMZW5ndGggPSBNYXRoLmFicyhyYW5nZVswXSAtIHJhbmdlWzFdKTtcclxuICAgICAgICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKDAsZmFsc2UpO1xyXG4gICAgICAgICAgdGhpcy5vd25lci5yZW1vdmVTdHJpbmcocmVtb3ZlSW5kZXgsIHJlbW92ZUxlbmd0aCk7XHJcbiAgICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkJhY2tzcGFjZVwiKVxyXG4gICAgICAgICAgICB0aGlzLm93bmVyLnJlbW92ZVN0cmluZyh0aGlzLmdseXBoSW5kZXgtLSwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIFNlbGVjdCBhbGxcclxuICAgICAgY2FzZSBcImFcIjpcclxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xyXG4gICAgICAgICAgdGhpcy5vd25lci5zZWxlY3Quc2V0UmFuZ2UoMCx0aGlzLm93bmVyLnRleHQubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gXCIgXCI7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XHJcblxyXG4gIH1cclxuXHJcbiAgc2V0UG9zaXRpb24oeCwgeSkge1xyXG4gICAgbGV0IGxpbmVIZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodCAqIHRoaXMub3duZXIuc2NhbGUueTtcclxuXHJcbiAgICB5ICo9IHRoaXMub3duZXIuc2NhbGUueTtcclxuICAgIHggKj0gdGhpcy5vd25lci5zY2FsZS54O1xyXG5cclxuICAgIHkgLT0gbGluZUhlaWdodDtcclxuXHJcbiAgICB5IC09IHRoaXMub3duZXIucG9zaXRpb24ueSAqIHRoaXMub3duZXIuc2NhbGUueTtcclxuICAgIHggLT0gdGhpcy5vd25lci5wb3NpdGlvbi54ICogdGhpcy5vd25lci5zY2FsZS54O1xyXG5cclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRvcCA9IGAke3l9cHhgO1xyXG5cclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gXCIgXCI7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XHJcbiAgfVxyXG5cclxuICBhZGRFdmVudChldmVudCwgY2FsbGJhY2spIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5fZW5hYmxlZCkge1xyXG4gICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbnB1dC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjMiBhVGV4dHVyZUNvb3JkO1xcbmF0dHJpYnV0ZSBmbG9hdCBhU2RmU2l6ZTtcXG5cXG51bmlmb3JtIG1hdDMgdHJhbnNsYXRpb25NYXRyaXg7XFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb25NYXRyaXg7XFxudW5pZm9ybSBmbG9hdCBzZGZNdWx0aXBsaWVyO1xcblxcbnZhcnlpbmcgdmVjMiAgdGMwO1xcbnZhcnlpbmcgZmxvYXQgZG9mZnNldDtcXG52YXJ5aW5nIGZsb2F0IHNkZl90ZXhlbDtcXG5cXG5cXG5cXG52b2lkIG1haW4odm9pZCkge1xcblxcbiAgICAvL1RPRE8gTUFLRSBBVFRSSUJVVEVcXG4gICAgZmxvYXQgc2RmX3NpemUgPSBhU2RmU2l6ZSAqIHNkZk11bHRpcGxpZXI7XFxuXFxuICAgIC8vVE9ETyBNQUtFIFVOSUZPUk1TXFxuICAgIGZsb2F0IHNkZl90ZXhfc2l6ZSA9IDEwMjQuMDtcXG5cXG5cXG4gICAgdGMwID0gYVRleHR1cmVDb29yZDtcXG4gICAgZG9mZnNldCA9IDEuMCAvIHNkZl9zaXplOyAgICAgICAvLyBEaXN0YW5jZSBmaWVsZCBkZWx0YSBmb3Igb25lIHNjcmVlbiBwaXhlbFxcbiAgICBzZGZfdGV4ZWwgPSAxLjAgLyBzZGZfdGV4X3NpemU7XFxuXFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNCgocHJvamVjdGlvbk1hdHJpeCAqIHRyYW5zbGF0aW9uTWF0cml4ICogdmVjMyhhVmVydGV4UG9zaXRpb24gLCAxLjApKS54eSwgMC4wLCAxLjApO1xcblxcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvdGV4dC92ZXJ0Lmdsc2xcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbnVuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyO1xcbnVuaWZvcm0gZmxvYXQgaGludF9hbW91bnQ7XFxudW5pZm9ybSBmbG9hdCBzdWJwaXhlbF9hbW91bnQ7XFxuXFxudW5pZm9ybSB2ZWMzIGJnX2NvbG9yO1xcbnVuaWZvcm0gdmVjMyBmb250X2NvbG9yO1xcblxcbnZhcnlpbmcgdmVjMiAgdGMwO1xcbnZhcnlpbmcgZmxvYXQgZG9mZnNldDtcXG52YXJ5aW5nIGZsb2F0IHNkZl90ZXhlbDtcXG5cXG5cXG4vKlxcbiAqICBTdWJwaXhlbCBjb3ZlcmFnZSBjYWxjdWxhdGlvblxcbiAqXFxuICogIHYgLSBlZGdlIHNsb3BlICAgIC0xLjAgdG8gMS4wICAgICAgICAgIHRyaXBsZXRcXG4gKiAgYSAtIHBpeGVsIGNvdmVyYWdlIDAuMCB0byAxLjAgICAgICAgICAgY292ZXJhZ2VcXG4gKlxcbiAqICAgICAgfDwtIGdseXBoIGVkZ2UgICAgICAgICAgICAgICAgICAgICAgUiAgRyAgQlxcbiAqICArLS0tKy0tLSsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLSstLSstLStcXG4gKiAgfCAgIHxYWFh8IHYgPSAxLjAgKGVkZ2UgZmFjaW5nIHdlc3QpICB8ICB8eHh8WFh8XFxuICogIHwgICB8WFhYfCBhID0gMC41ICg1MCUgY292ZXJhZ2UpICAgICAgfCAgfHh4fFhYfFxcbiAqICB8ICAgfFhYWHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHx4eHxYWHxcXG4gKiAgKy0tLSstLS0rICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0rLS0rLS0rXFxuICogICAgcGl4ZWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgIDUwIDEwMFxcbiAqXFxuICpcXG4gKiAgICAgICAgUiAgIEcgICBCXFxuICpcXG4gKiAgIDEuMCAgICAgICAgKy0tKyAgIDwtIHRvcCAoYWJzKCB2ICkpXFxuICogICAgICAgICAgICAgIHxcXG4gKiAgICAgICAtKy0tLS0tKy0tKy0tIDwtIGNlaWw6IDEwMCUgY292ZXJhZ2VcXG4gKiAgICAgICAgfCAgICAgfFhYfFxcbiAqICAgMC4wICB8ICArLS0rWFh8XFxuICogICAgICAgIHwgIHx4eHxYWHxcXG4gKiAgICAgICAtKy0tKy0tKy0tKy0tIDwtIGZsb29yOiAwJSBjb3ZlcmFnZVxcbiAqICAgICAgICAgICB8XFxuICogIC0xLjAgICstLSsgICAgICAgICA8LSAgLWFicyh2KVxcbiAqICAgICAgICB8XFxuICogICAgICAgIHxcXG4gKiAgICAgICAgfFxcbiAqICAtMi4wICArICAgICAgICAgICAgPC0gYm90dG9tOiAtYWJzKHYpLTEuMFxcbiAqL1xcblxcbnZlYzMgc3VicGl4ZWwoIGZsb2F0IHYsIGZsb2F0IGEgKSB7XFxuICAgIGZsb2F0IHZ0ICAgICAgPSAwLjYgKiB2OyAvLyAxLjAgd2lsbCBtYWtlIHlvdXIgZXllcyBibGVlZFxcbiAgICB2ZWMzICByZ2JfbWF4ID0gdmVjMyggLXZ0LCAwLjAsIHZ0ICk7XFxuICAgIGZsb2F0IHRvcCAgICAgPSBhYnMoIHZ0ICk7XFxuICAgIGZsb2F0IGJvdHRvbSAgPSAtdG9wIC0gMS4wO1xcbiAgICBmbG9hdCBjZmxvb3IgID0gbWl4KCB0b3AsIGJvdHRvbSwgYSApO1xcbiAgICB2ZWMzICByZXMgICAgID0gY2xhbXAoIHJnYl9tYXggLSB2ZWMzKCBjZmxvb3IgKSwgMC4wLCAxLjAgKTtcXG4gICAgcmV0dXJuIHJlcztcXG59XFxuXFxudm9pZCBtYWluMigpIHtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHVTYW1wbGVyLCB0YzApO1xcbn1cXG5cXG52b2lkIG1haW4odm9pZCkge1xcblxcbiAgICAvLyBTYW1wbGluZyB0aGUgdGV4dHVyZSwgTCBwYXR0ZXJuXFxuICAgIGZsb2F0IHNkZiAgICAgICA9IHRleHR1cmUyRCggdVNhbXBsZXIsIHRjMCApLnI7XFxuICAgIGZsb2F0IHNkZl9ub3J0aCA9IHRleHR1cmUyRCggdVNhbXBsZXIsIHRjMCArIHZlYzIoIDAuMCwgc2RmX3RleGVsICkgKS5yO1xcbiAgICBmbG9hdCBzZGZfZWFzdCAgPSB0ZXh0dXJlMkQoIHVTYW1wbGVyLCB0YzAgKyB2ZWMyKCBzZGZfdGV4ZWwsIDAuMCApICkucjtcXG5cXG4gICAgLy8gRXN0aW1hdGluZyBzdHJva2UgZGlyZWN0aW9uIGJ5IHRoZSBkaXN0YW5jZSBmaWVsZCBncmFkaWVudCB2ZWN0b3JcXG4gICAgdmVjMiAgc2dyYWQgICAgID0gdmVjMiggc2RmX2Vhc3QgLSBzZGYsIHNkZl9ub3J0aCAtIHNkZiApO1xcbiAgICBmbG9hdCBzZ3JhZF9sZW4gPSBtYXgoIGxlbmd0aCggc2dyYWQgKSwgMS4wIC8gMTI4LjAgKTtcXG4gICAgdmVjMiAgZ3JhZCAgICAgID0gc2dyYWQgLyB2ZWMyKCBzZ3JhZF9sZW4gKTtcXG4gICAgZmxvYXQgdmdyYWQgPSBhYnMoIGdyYWQueSApOyAvLyAwLjAgLSB2ZXJ0aWNhbCBzdHJva2UsIDEuMCAtIGhvcml6b250YWwgb25lXFxuXFxuICAgIGZsb2F0IGhvcnpfc2NhbGUgID0gMS4xOyAvLyBCbHVycmluZyB2ZXJ0aWNhbCBzdHJva2VzIGFsb25nIHRoZSBYIGF4aXMgYSBiaXRcXG4gICAgZmxvYXQgdmVydF9zY2FsZSAgPSAwLjY7IC8vIFdoaWxlIGFkZGluZyBzb21lIGNvbnRyYXN0IHRvIHRoZSBob3Jpem9udGFsIHN0cm9rZXNcXG4gICAgZmxvYXQgaGRvZmZzZXQgICAgPSBtaXgoIGRvZmZzZXQgKiBob3J6X3NjYWxlLCBkb2Zmc2V0ICogdmVydF9zY2FsZSwgdmdyYWQgKTtcXG4gICAgZmxvYXQgcmVzX2RvZmZzZXQgPSBtaXgoIGRvZmZzZXQsIGhkb2Zmc2V0LCBoaW50X2Ftb3VudCApO1xcblxcbiAgICBmbG9hdCBhbHBoYSAgICAgICA9IHNtb290aHN0ZXAoIDAuNSAtIHJlc19kb2Zmc2V0LCAwLjUgKyByZXNfZG9mZnNldCwgc2RmICk7XFxuXFxuICAgIC8vIEFkZGl0aW9uYWwgY29udHJhc3RcXG4gICAgYWxwaGEgICAgICAgICAgICAgPSBwb3coIGFscGhhLCAxLjAgKyAwLjIgKiB2Z3JhZCAqIGhpbnRfYW1vdW50ICk7XFxuXFxuICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gc3VwcG9ydCBmb3IgQVJCX2JsZW5kX2Z1bmNfZXh0ZW5kZWQgaW4gV2ViR0wuXFxuICAgIC8vIEZvcnR1bmF0ZWx5IHRoZSBiYWNrZ3JvdW5kIGlzIGZpbGxlZCB3aXRoIGEgc29saWQgY29sb3Igc28gd2UgY2FuIGRvXFxuICAgIC8vIHRoZSBibGVuZGluZyBpbnNpZGUgdGhlIHNoYWRlci5cXG5cXG4gICAgLy8gRGlzY2FyZGluZyBwaXhlbHMgYmV5b25kIGEgdGhyZXNob2xkIHRvIG1pbmltaXNlIHBvc3NpYmxlIGFydGlmYWN0cy5cXG4gICAgaWYgKCBhbHBoYSA8IDIwLjAgLyAyNTYuMCApIGRpc2NhcmQ7XFxuXFxuICAgIHZlYzMgY2hhbm5lbHMgPSBzdWJwaXhlbCggZ3JhZC54ICogMC41ICogc3VicGl4ZWxfYW1vdW50LCBhbHBoYSApICsgMC4xO1xcblxcbiAgICAvLyBGb3Igc3VicGl4ZWwgcmVuZGVyaW5nIHdlIGhhdmUgdG8gYmxlbmQgZWFjaCBjb2xvciBjaGFubmVsIHNlcGFyYXRlbHlcXG4gICAgdmVjMyByZXMgPSBtaXgoIGJnX2NvbG9yLCBmb250X2NvbG9yLCBjaGFubmVscyApO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KCByZXMsIDEuMCApO1xcbn1cXG5cXG5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvdGV4dC9mcmFnLmdsc2xcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjtcXG5cXG51bmlmb3JtIG1hdDMgdHJhbnNsYXRpb25NYXRyaXg7XFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb25NYXRyaXg7XFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG5cXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KChwcm9qZWN0aW9uTWF0cml4ICogdHJhbnNsYXRpb25NYXRyaXggKiB2ZWMzKGFWZXJ0ZXhQb3NpdGlvbiAsIDEuMCkpLnh5LCAwLjAsIDEuMCk7XFxuXFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy9zZWxlY3QvdmVydC5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG51bmlmb3JtIHZlYzMgYmdfY29sb3I7XFxudmFyeWluZyB2ZWMyICB0YzA7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGJnX2NvbG9yLDAuNDUpO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDEuMCwgMS4wLCAxLjAsMC4yKTtcXG59XFxuXFxuXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL3NlbGVjdC9mcmFnLmdsc2xcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=