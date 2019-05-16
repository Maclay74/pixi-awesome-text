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
	      this.input.enabled = true; // Select all characters
	
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
	
	      for (var i = 0; i < glyphs.length; ++i) {
	        var glyph = glyphs[i];
	
	        if (glyph.metrics.y === selectingLineY + lineHeight) {
	          lastGlyphOnLine = glyph;
	
	          if (glyph.metrics.x + glyph.metrics.width > x) {
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
	      var closestLetter = this.getClosestGlyph(position.x + 12, position.y);
	      var index = this.owner.layout.glyphs.indexOf(closestLetter);
	      this.setRange(index, false);
	    }
	  }, {
	    key: "onMouseMove",
	    value: function onMouseMove(event) {
	      var position = event.data.global;
	      position.x -= this.owner.position.x;
	      position.y -= this.owner.position.y;
	      position.x = position.x / this.owner.scale.x;
	      position.y = position.y / this.owner.scale.y;
	      var closestLetter = text.select.getClosestGlyph(position.x + 12, position.y);
	      var index = text.layout.glyphs.indexOf(closestLetter);
	      this.setRange(null, index);
	    }
	  }, {
	    key: "onMouseUp",
	    value: function onMouseUp(event) {
	      // Only left mouse button
	      if (event.data.button !== 0) return;
	      var position = event.data.global; //position.x -= this.owner.position.x;
	      //position.y -= this.owner.position.y;
	
	      position.x = position.x / this.owner.scale.x;
	      position.y = position.y / this.owner.scale.y;
	      var closestLetter = text.select.getClosestGlyph(position.x + 12, position.y);
	      this.owner.input.glyphIndex = text.layout.glyphs.indexOf(closestLetter) + 1;
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
	      if (this._glyphIndex < 0) this._glyphIndex = 0;
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
	
	    _defineProperty(this, "_glyphIndex", null);
	
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
	
	      this.inputElement.style.border = "none";
	      this.inputElement.style.position = 'fixed';
	      this.inputElement.style.contain = 'srtict';
	      this.inputElement.style.zIndex = 2;
	      this.inputElement.style.pointerEvents = "none";
	      this.inputElement.style.outline = "none";
	      this.inputElement.style.color = this.owner.style.fill;
	      this.inputElement.style.marginLeft = "0px";
	      this.inputElement.style.transformOrigin = "bottom left";
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
	      var glyphs = this.owner.layout.glyphs; // Default caret place - start of the input field TODO implement align
	
	      var glyphMetrics = {
	        x: 0,
	        y: this.metrics.lineHeight
	      }; // if string is empty, put caret at the beginning
	
	      if (this.owner.layout.glyphs.length === 0) {
	        console.log("emply line"); // if we on the last glyph, place caret after it
	      } else if (this.glyphIndex === glyphs.length) {
	        var lastGlyph = glyphs[glyphs.length - 1];
	        glyphMetrics.x = lastGlyph.metrics.x + lastGlyph.metrics.width;
	        glyphMetrics.y = lastGlyph.metrics.y; // if caret in the middle of the text
	      } else if (this.glyphIndex !== null) {
	        var selectedGlyph = glyphs[this.glyphIndex];
	        glyphMetrics = _extends({}, selectedGlyph.metrics);
	      }
	
	      this.setPosition(glyphMetrics.x, glyphMetrics.y);
	      this.setScale(this.owner.scale.x, this.owner.scale.y);
	      this.inputElement.focus();
	    }
	  }, {
	    key: "onInput",
	    value: function onInput(event) {
	      var range = this.owner.select.range; // If user selected some text, remove it
	
	      if (range[0] !== range[1] && range[1] !== null) {
	        this.glyphIndex = Math.min(range[0], range[1]);
	        var removeIndex = Math.min.apply(null, range);
	        var removeLength = Math.abs(range[0] - range[1]);
	        this.owner.select.setRange(0, false);
	        this.owner.removeString(removeIndex, removeLength);
	        this.show();
	      } else {//this.glyphIndex++;
	      }
	
	      event.target.value = ""; // If text is empty now
	
	      if (this.owner.layout.glyphs.length === 0) {
	        this.owner.text = event.data;
	        this.glyphIndex = 1; // If caret is at the end of the text
	      } else if (this.glyphIndex === this.owner.layout.glyphs.length - 1) {
	        this.owner.text += event.data;
	        this.glyphIndex++; // If we in the middle of the line
	      } else {
	        this.owner.insertString(this.glyphIndex, event.data);
	        this.glyphIndex++;
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
	          var range = this.owner.select.range;
	
	          if (range[1] !== null) {
	            this.glyphIndex = Math.min(range[0], range[1]);
	            var removeIndex = Math.min.apply(null, range);
	            var removeLength = Math.abs(range[0] - range[1]);
	            this.owner.select.setRange(0, false);
	            this.owner.removeString(removeIndex, removeLength);
	            this.show();
	          } else {
	            this.owner.removeString(--this.glyphIndex, 0);
	          }
	
	        //this.glyphIndex--;
	      }
	
	      var newPosition = null;
	      var inputEvent = new Event("selectionchange");
	      console.log(this.inputElement.dispatchEvent(inputEvent)); //console.log(event.key);
	    }
	  }, {
	    key: "setPosition",
	    value: function setPosition(x, y) {
	      console.log(this.owner.scale);
	      x *= this.owner.scale.x;
	      y *= this.owner.scale.y;
	      var top = y - this.metrics.lineHeight;
	      var offset = this.metrics.lineHeight - this.metrics.ascent;
	      top += offset;
	      this.inputElement.style.left = "".concat(x, "px");
	      this.inputElement.style.top = "".concat(top, "px");
	    }
	  }, {
	    key: "setScale",
	    value: function setScale(x, y) {
	      var offset = this.metrics.lineHeight - this.metrics.ascent;
	      var top = y - this.metrics.lineHeight;
	      var lineHeight = this.metrics.lineHeight; //top += offset;
	
	      this.inputElement.style.height = lineHeight + "px";
	      this.inputElement.style.transform = "scale(".concat(x, ")");
	      this.inputElement.style.fontSize = this.metrics.lineHeight * y + "px";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAzNzQ1YmYyNjgwMWY1ODFhYTY1MCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2R0eXBlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYW4tYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvdmVydC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvZnJhZy5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3NlbGVjdC92ZXJ0Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvc2VsZWN0L2ZyYWcuZ2xzbCJdLCJuYW1lcyI6WyJPYmplY3QiLCJhc3NpZ24iLCJQSVhJIiwiZXh0cmFzIiwiQXdlc29tZVRleHQiLCJUZXh0IiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJzZWxlY3RWZXJ0ZXh0U2hhZGVyIiwic2VsZWN0RnJhZ21lbnRTaGFkZXIiLCJnbENvcmUiLCJBd2Vzb21lVGV4dFJlbmRlcmVyIiwicmVuZGVyZXIiLCJ0ZXh0U2hhZGVyIiwic2VsZWN0U2hhZGVyIiwiZ2wiLCJnZXRFeHRlbnNpb24iLCJTaGFkZXIiLCJzb3VyY2UiLCJnbERhdGEiLCJfZ2xEYXRhcyIsImNvbnRleHRUZXh0IiwiYmluZFZhbyIsImJ1aWxkVGV4dEdsRGF0YSIsInZhbyIsImRpcnR5IiwidXZCdWZmZXIiLCJ1cGxvYWQiLCJ1dnMiLCJpbmRleERpcnR5IiwiaW5kZXhCdWZmZXIiLCJpbmRpY2VzIiwidmVydGV4QnVmZmVyIiwidmVydGljZXMiLCJiaW5kU2hhZGVyIiwic2hhZGVyIiwic3RhdGUiLCJzZXRCbGVuZE1vZGUiLCJibGVuZE1vZGUiLCJ1bmlmb3JtcyIsInVTYW1wbGVyIiwiYmluZFRleHR1cmUiLCJ0ZXh0dXJlIiwidHJhbnNsYXRpb25NYXRyaXgiLCJ3b3JsZFRyYW5zZm9ybSIsInRvQXJyYXkiLCJoaW50X2Ftb3VudCIsInNkZk11bHRpcGxpZXIiLCJzY2FsZSIsInN1YnBpeGVsX2Ftb3VudCIsImZvbnRfY29sb3IiLCJ1dGlscyIsImhleDJyZ2IiLCJzdHlsZSIsImZpbGwiLCJyZXBsYWNlIiwiYmdfY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkcmF3TW9kZSIsIlRSSUFOR0xFUyIsImRyYXciLCJsZW5ndGgiLCJjb250ZXh0U2VsZWN0Iiwic2VsZWN0IiwiYnVpbGRTZWxlY3RHbERhdGEiLCJzZWxlY3RDb2xvciIsInN0eWxlSUQiLCJ1cGRhdGUiLCJzdGF0ZXMiLCJlZGl0YWJsZSIsInNlbGVjdGluZyIsInJlbmRlclNlbGVjdCIsInJlbmRlclRleHQiLCJHTEJ1ZmZlciIsImNyZWF0ZVZlcnRleEJ1ZmZlciIsIlNUUkVBTV9EUkFXIiwic2RmQnVmZmVyIiwic2RmU2l6ZXMiLCJTVEFUSUNfRFJBVyIsImNyZWF0ZUluZGV4QnVmZmVyIiwiVmVydGV4QXJyYXlPYmplY3QiLCJhZGRJbmRleCIsImFkZEF0dHJpYnV0ZSIsImF0dHJpYnV0ZXMiLCJhVmVydGV4UG9zaXRpb24iLCJGTE9BVCIsImFUZXh0dXJlQ29vcmQiLCJhU2RmU2l6ZSIsIk9iamVjdFJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsInJlZ2lzdGVyUGx1Z2luIiwiY3JlYXRlSW5kaWNlcyIsInRleHQiLCJmb250IiwicmVndWxhciIsIlRleHRTdHlsZSIsIl90ZXh0IiwiX2ZvbnQiLCJfdGV4dHVyZSIsImludGVyYWN0aXZlIiwiYnV0dG9uTW9kZSIsImxheW91dCIsIlRleHRMYXlvdXQiLCJmb250U2l6ZSIsIndyYXBXb3JkcyIsImJyZWFrV29yZHMiLCJ3cmFwcGVyV2lkdGgiLCJ3b3JkV3JhcFdpZHRoIiwiYWxpZ24iLCJsaW5lSGVpZ2h0IiwiU2VsZWN0IiwiaW5wdXQiLCJJbnB1dCIsInNldFN0YXRlIiwibWV0cmljcyIsImZvbnRNZXRyaWNzIiwiRmxvYXQzMkFycmF5IiwibGV0dGVyc0NvdW50IiwiYXJyYXlQb3NpdGlvbnMiLCJ2ZXJ0ZXgiLCJzZGYiLCJ3b3Jkc01ldHJpY3MiLCJmb3JFYWNoIiwid29yZCIsIndyaXRlU3RyaW5nIiwieCIsInkiLCJjbG9ja3dpc2UiLCJ0eXBlIiwiY291bnQiLCJuZXdTdGF0ZSIsInZhbHVlcyIsInNldFJlZ3VsYXJTdGF0ZSIsInNldEVkaXRhYmxlU3RhdGUiLCJjdXJyZW50RWRpdGluZ0VsZW1lbnQiLCJvZmYiLCJlbmFibGVkIiwib24iLCJlIiwiY2xpY2tzQ291bnQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0Iiwic2V0UmFuZ2UiLCJpbnB1dEVsZW1lbnQiLCJmb2N1cyIsIm9uTW91c2VEb3duIiwic2hvdyIsIm9uTW91c2VNb3ZlIiwiaGlkZSIsIm9uTW91c2VVcCIsImluZGV4Iiwic3RyaW5nIiwic3Vic3RyIiwibmV3VGV4dCIsInNwbGl0Iiwic3BsaWNlIiwiam9pbiIsImZvbnRfbWV0cmljcyIsInBvcyIsInByZXZfY2hhciIsImNwb3MiLCJ4X21heCIsImNhcFNjYWxlIiwic3RyX3BvcyIsInNjaGFyIiwiZm9udF9jaGFyIiwiY2hhcnMiLCJrZXJuIiwicmVjdCIsImNoYXJSZWN0IiwicG9zaXRpb25zIiwibWFwIiwidXYiLCJzdHJpbmdfcG9zIiwibW9yZUxpbmVHYXAiLCJjYXBfaGVpZ2h0IiwieF9oZWlnaHQiLCJmb250QXNjZW50IiwiYXNjZW50IiwiZGVzY2VudCIsImxpbmVfZ2FwIiwibG93U2NhbGUiLCJNYXRoIiwicm91bmQiLCJsb3djYXNlIiwiZmxhZ3MiLCJiYXNlbGluZSIsImciLCJib3R0b20iLCJpeSIsInRvcCIsInJvd19oZWlnaHQiLCJsZWZ0IiwiYmVhcmluZ194IiwiaXgiLCJyaWdodCIsInAiLCJuZXdfcG9zX3giLCJhZHZhbmNlX3giLCJzZGZfc2l6ZSIsInZhbHVlIiwibWVzaCIsIk1lc2giLCJvd25lciIsImNvbmZpZyIsInN0YXJ0WSIsImNhbGN1bGF0ZVdvcmRzUG9zaXRpb25zIiwiZ2x5cGhzIiwiZ2V0R2x5cGhzIiwid2lkdGgiLCJoZWlnaHQiLCJjaGFyIiwid29yZHMiLCJpIiwic3RhcnRYIiwid29yZFNpemUiLCJnZXRTdHJpbmdTaXplIiwicHVzaCIsImxpbmVzQ291bnQiLCJ3b3Jkc09uTGluZSIsImZpbHRlciIsImxhc3RXb3JkIiwiZnJlZVNwYWNlIiwibGVmdE9mZnNldCIsImxldHRlciIsInBvc2l0aW9uIiwicmFuZ2UiLCJidWlsZFZlcnRpY2VzIiwic3RhcnQiLCJlbmQiLCJtaW4iLCJhcHBseSIsIm1heCIsImxldHRlckNvdW50IiwiZmlyc3RMZXR0ZXIiLCJsYXN0TGV0dGVyIiwic3RhcnRMaW5lTGV0dGVyIiwiZW5kTGluZUxldHRlciIsIm9mZnNldCIsInNlbGVjdGluZ0xpbmUiLCJmbG9vciIsInNlbGVjdGluZ0xpbmVZIiwibGFzdEdseXBoT25MaW5lIiwiZ2x5cGgiLCJldmVudCIsImRhdGEiLCJidXR0b24iLCJnbG9iYWwiLCJjbG9zZXN0TGV0dGVyIiwiZ2V0Q2xvc2VzdEdseXBoIiwiaW5kZXhPZiIsImdseXBoSW5kZXgiLCJfZ2x5cGhJbmRleCIsIl9lbmFibGVkIiwiZW5hYmxlIiwiZGlzYWJsZSIsImNyZWF0ZUZpZWxkIiwiZGlzcGxheSIsIm9wYWNpdHkiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJib2R5IiwiYXBwZW5kIiwiYm9yZGVyIiwiY29udGFpbiIsInpJbmRleCIsInBvaW50ZXJFdmVudHMiLCJvdXRsaW5lIiwiY29sb3IiLCJtYXJnaW5MZWZ0IiwidHJhbnNmb3JtT3JpZ2luIiwiYWRkRXZlbnQiLCJvbklucHV0Iiwib25LZXlkb3duIiwiZ2x5cGhNZXRyaWNzIiwiY29uc29sZSIsImxvZyIsImxhc3RHbHlwaCIsInNlbGVjdGVkR2x5cGgiLCJzZXRQb3NpdGlvbiIsInNldFNjYWxlIiwicmVtb3ZlSW5kZXgiLCJyZW1vdmVMZW5ndGgiLCJhYnMiLCJyZW1vdmVTdHJpbmciLCJ0YXJnZXQiLCJpbnNlcnRTdHJpbmciLCJrZXkiLCJuZXdQb3NpdGlvbiIsImlucHV0RXZlbnQiLCJFdmVudCIsImRpc3BhdGNoRXZlbnQiLCJ0cmFuc2Zvcm0iLCJjYWxsYmFjayIsImFkZEV2ZW50TGlzdGVuZXIiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7QUFDQTs7QUFDQTs7OztBQUVBQSxPQUFNLENBQUNDLE1BQVAsQ0FBY0MsSUFBSSxDQUFDQyxNQUFuQixFQUEyQjtBQUN6QkMsY0FBVyxFQUFFQztBQURZLEVBQTNCOztBQUlBLEtBQUksT0FBT0gsSUFBUCxLQUFnQixXQUFwQixFQUFpQztBQUMvQixPQUFJQSxJQUFJLENBQUNDLE1BQVQsRUFBaUI7QUFDZkQsU0FBSSxDQUFDQyxNQUFMLENBQVlDLFdBQVosR0FBMEJDLGdCQUExQjtBQUNELElBRkQsTUFFTztBQUNMSCxTQUFJLENBQUNDLE1BQUwsR0FBYztBQUFFQyxrQkFBVyxFQUFFQztBQUFmLE1BQWQ7QUFDRDtBQUNG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QUF3QmtELFFBQXhCLEdBQW9DLEtBQUtXLE9BQUwsQ0FBYUwsVUFBYixHQUEwQmlCLENBQTNCLEdBQWdDLElBQW5FO0FBQ0Q7Ozs4QkFFUXNILEssRUFBT2lELFEsRUFBVTtBQUFBOztBQUN4QixZQUFLdEosWUFBTCxDQUFrQnVKLGdCQUFsQixDQUFtQ2xELEtBQW5DLEVBQTBDLFVBQUNBLEtBQUQsRUFBVztBQUNuRCxhQUFJLE1BQUksQ0FBQ1MsUUFBVCxFQUFtQjtBQUNqQndDLG1CQUFRLENBQUNqRCxLQUFELENBQVI7QUFDRDtBQUNGLFFBSkQ7QUFLRDs7Ozs7O2dCQUlZcEksSzs7Ozs7OztBQ25QZixxRUFBb0UsK0JBQStCLDJCQUEyQixtQ0FBbUMsZ0NBQWdDLDhCQUE4QixzQkFBc0Isd0JBQXdCLDBCQUEwQix5QkFBeUIsNkVBQTZFLDhEQUE4RCw4QkFBOEIsK0JBQStCLHdGQUF3Riw4R0FBOEcsS0FBSyxHOzs7Ozs7QUNBbnRCLGlFQUFnRSw0QkFBNEIsZ0NBQWdDLDBCQUEwQiwwQkFBMEIsc0JBQXNCLHdCQUF3QiwwQkFBMEIsdzhCQUF3OEIsOEJBQThCLDRFQUE0RSxnQ0FBZ0MsaUNBQWlDLDRDQUE0QyxrRUFBa0UsaUJBQWlCLEdBQUcsa0JBQWtCLDhDQUE4QyxHQUFHLHFCQUFxQiwrRkFBK0YsOEVBQThFLDhFQUE4RSw0SUFBNEksNERBQTRELGtEQUFrRCxrQ0FBa0MsK0VBQStFLGtGQUFrRiwySUFBMkksZ0VBQWdFLG9GQUFvRixzR0FBc0csZ1VBQWdVLGdGQUFnRix1SUFBdUksc0NBQXNDLEdBQUcsTzs7Ozs7O0FDQWxzRyxxRUFBb0UsbUNBQW1DLGdDQUFnQyxxQkFBcUIsOEdBQThHLEtBQUssRzs7Ozs7O0FDQS9RLDREQUEyRCxvQkFBb0IsaUJBQWlCLHlDQUF5Qyw2Q0FBNkMsR0FBRyxPIiwiZmlsZSI6InBpeGktYXdlc29tZS10ZXh0Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkF3ZXNvbWVUZXh0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkF3ZXNvbWVUZXh0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDM3NDViZjI2ODAxZjU4MWFhNjUwIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL3JlbmRlcmVyXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi90ZXh0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2xheW91dFwiO1xuXG5PYmplY3QuYXNzaWduKFBJWEkuZXh0cmFzLCB7XG4gIEF3ZXNvbWVUZXh0OiBUZXh0XG59KTtcblxuaWYgKHR5cGVvZiBQSVhJICE9PSAndW5kZWZpbmVkJykge1xuICBpZiAoUElYSS5leHRyYXMpIHtcbiAgICBQSVhJLmV4dHJhcy5Bd2Vzb21lVGV4dCA9IFRleHQ7XG4gIH0gZWxzZSB7XG4gICAgUElYSS5leHRyYXMgPSB7IEF3ZXNvbWVUZXh0OiBUZXh0fTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBUZXh0LFxuICBSZW5kZXJlcixcbiAgTGF5b3V0XG59XG5cbi8qXG5cbml4ICAgICAgICAgICAgPSBzZGZfc2l6ZSAvIHRleF93aWR0aFxuaXkgICAgICAgICAgICA9IHNkZl9zaXplIC8gdGV4X2hlaWdodFxucm93X2hlaWdodCAgICA9IChyb3dfaGVpZ2h0ICsgMiAqIHNkZl9zaXplKSAvIHRleF9oZWlnaHQ7XG5hc3BlY3QgICAgICAgID0gdGV4X3dpZHRoIC8gdGV4X2hlaWdodDtcbmFzY2VudCAgICAgICAgPSBmb250LT5hc2NlbnQgKiBzY2FsZVlcbmRlc2NlbnQgICAgICAgPSBmYWJzZihmb250LT5kZXNjZW50ICogc2NhbGVZKVxubGluZV9nYXAgICAgICA9IGZvbnQtPmxpbmVfZ2FwICogc2NhbGUgWVxuY2FwX2hlaWdodCAgICA9IGd4Y2FwLm1heC55ICogc2NhbGVZXG54X2hlaWdodCAgICAgID0gZ3gubWF4LnkgKiBzY2FsZVlcbnNwYWNlX2FkdmFuY2UgPSBnc3BhY2UuYWR2YW5jZV93aWR0aCAqIHNjYWxlWFxuXG5cbnNjYWxleSA9IHJvd19oZWlnaHQgLyB0ZXhfaGVpZ2h0IC8gKCBmb250LT5nbHlwaF9tYXgueSAtIGZvbnQtPmdseXBoX21pbi55ICk7XG5zY2FsZXggPSByb3dfaGVpZ2h0IC8gdGV4X3dpZHRoIC8gKCBmb250LT5nbHlwaF9tYXgueSAtIGZvbnQtPmdseXBoX21pbi55ICk7XG5nc3BhY2UgPSBmb250LT5nbHlwaHNbIGZvbnQtPmdseXBoX2lkeCggJyAnICkgXTtcbmd4ICAgICA9IGZvbnQtPmdseXBoc1sgZm9udC0+Z2x5cGhfaWR4KCAneCcgKSBdXG5neGNhcCAgPSBmb250LT5nbHlwaHNbIGZvbnQtPmdseXBoX2lkeCggJ1gnICkgXVxuXG5cbnNkZl9zaXplID0gMTBcblxuKi9cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgQXdlc29tZVRleHQgZnJvbSBcIi4vdGV4dFwiO1xuXG5jb25zdCB2ZXJ0ZXhTaGFkZXIgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3RleHQvdmVydC5nbHNsXCIpO1xuY29uc3QgZnJhZ21lbnRTaGFkZXIgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3RleHQvZnJhZy5nbHNsXCIpO1xuXG5jb25zdCBzZWxlY3RWZXJ0ZXh0U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy9zZWxlY3QvdmVydC5nbHNsXCIpO1xuY29uc3Qgc2VsZWN0RnJhZ21lbnRTaGFkZXIgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3NlbGVjdC9mcmFnLmdsc2xcIik7XG5cbmNvbnN0IGdsQ29yZSA9IFBJWEkuZ2xDb3JlO1xuXG5jbGFzcyBBd2Vzb21lVGV4dFJlbmRlcmVyIGV4dGVuZHMgUElYSS5PYmplY3RSZW5kZXJlciB7XG5cbiAgc3RhdGljIGNvbnRleHRUZXh0ID0gMDtcbiAgc3RhdGljIGNvbnRleHRTZWxlY3QgPSAxO1xuXG4gIHNlbGVjdENvbG9yID0gMHhGRkIzQzM7XG5cblxuICBjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xuICAgIHN1cGVyKHJlbmRlcmVyKTtcbiAgICB0aGlzLnRleHRTaGFkZXIgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0U2hhZGVyID0gbnVsbDtcblxuICB9XG5cbiAgb25Db250ZXh0Q2hhbmdlKCkge1xuICAgIGNvbnN0IGdsID0gdGhpcy5yZW5kZXJlci5nbDtcbiAgICBnbC5nZXRFeHRlbnNpb24oXCJPRVNfc3RhbmRhcmRfZGVyaXZhdGl2ZXNcIik7XG4gICAgdGhpcy50ZXh0U2hhZGVyID0gbmV3IFBJWEkuU2hhZGVyKGdsLCB2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcbiAgICB0aGlzLnNlbGVjdFNoYWRlciA9IG5ldyBQSVhJLlNoYWRlcihnbCwgc2VsZWN0VmVydGV4dFNoYWRlciwgc2VsZWN0RnJhZ21lbnRTaGFkZXIpO1xuICB9XG5cbiAgcmVuZGVyVGV4dChzb3VyY2UpIHtcblxuICAgIGxldCBnbERhdGEgPSBzb3VyY2UuX2dsRGF0YXNbQXdlc29tZVRleHRSZW5kZXJlci5jb250ZXh0VGV4dF07XG5cbiAgICBpZiAoIWdsRGF0YSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5iaW5kVmFvKG51bGwpO1xuICAgICAgZ2xEYXRhID0gdGhpcy5idWlsZFRleHRHbERhdGEoc291cmNlLCB0aGlzLnJlbmRlcmVyLmdsKTtcbiAgICAgIHNvdXJjZS5fZ2xEYXRhc1tBd2Vzb21lVGV4dFJlbmRlcmVyLmNvbnRleHRUZXh0XSA9IGdsRGF0YTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyLmJpbmRWYW8oZ2xEYXRhLnZhbyk7XG5cbiAgICBpZiAoc291cmNlLmRpcnR5KSB7XG4gICAgICBzb3VyY2UuZGlydHkgPSBmYWxzZTtcbiAgICAgIGdsRGF0YS51dkJ1ZmZlci51cGxvYWQoc291cmNlLnV2cyk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZS5pbmRleERpcnR5KSB7XG4gICAgICBzb3VyY2UuaW5kZXhEaXJ0eSA9IGZhbHNlO1xuICAgICAgZ2xEYXRhLmluZGV4QnVmZmVyLnVwbG9hZChzb3VyY2UuaW5kaWNlcyk7XG4gICAgfVxuXG4gICAgZ2xEYXRhLnZlcnRleEJ1ZmZlci51cGxvYWQoc291cmNlLnZlcnRpY2VzKTtcbiAgICB0aGlzLnJlbmRlcmVyLmJpbmRTaGFkZXIoZ2xEYXRhLnNoYWRlcik7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnN0YXRlLnNldEJsZW5kTW9kZShzb3VyY2UuYmxlbmRNb2RlKTtcblxuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMudVNhbXBsZXIgPSB0aGlzLnJlbmRlcmVyLmJpbmRUZXh0dXJlKHNvdXJjZS50ZXh0dXJlKTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnRyYW5zbGF0aW9uTWF0cml4ID0gc291cmNlLndvcmxkVHJhbnNmb3JtLnRvQXJyYXkodHJ1ZSk7XG5cbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmhpbnRfYW1vdW50ID0gMS4wO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuc2RmTXVsdGlwbGllciA9IEF3ZXNvbWVUZXh0LnNjYWxlO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuc3VicGl4ZWxfYW1vdW50ID0gMS4wO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuZm9udF9jb2xvciA9IFBJWEkudXRpbHMuaGV4MnJnYihzb3VyY2Uuc3R5bGUuZmlsbC5yZXBsYWNlKFwiI1wiLCBcIjB4XCIpKTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmJnX2NvbG9yID0gUElYSS51dGlscy5oZXgycmdiKHNvdXJjZS5iYWNrZ3JvdW5kQ29sb3IucmVwbGFjZShcIiNcIiwgXCIweFwiKSk7XG5cbiAgICBjb25zdCBkcmF3TW9kZSA9IHNvdXJjZS5kcmF3TW9kZSA9IHRoaXMucmVuZGVyZXIuZ2wuVFJJQU5HTEVTO1xuICAgIGdsRGF0YS52YW8uZHJhdyhkcmF3TW9kZSwgc291cmNlLmluZGljZXMubGVuZ3RoLCAwKTtcblxuICB9XG5cbiAgcmVuZGVyU2VsZWN0KHNvdXJjZSkge1xuICAgIGxldCBnbERhdGEgPSBzb3VyY2UuX2dsRGF0YXNbQXdlc29tZVRleHRSZW5kZXJlci5jb250ZXh0U2VsZWN0XTtcblxuICAgIGlmICghZ2xEYXRhIHx8IHNvdXJjZS5zZWxlY3QuZGlydHkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYmluZFZhbyhudWxsKTtcbiAgICAgIGdsRGF0YSA9IHRoaXMuYnVpbGRTZWxlY3RHbERhdGEoc291cmNlLCB0aGlzLnJlbmRlcmVyLmdsKTtcbiAgICAgIHNvdXJjZS5fZ2xEYXRhc1tBd2Vzb21lVGV4dFJlbmRlcmVyLmNvbnRleHRTZWxlY3RdID0gZ2xEYXRhO1xuICAgICAgc291cmNlLnNlbGVjdC5kaXJ0eSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIuYmluZFZhbyhnbERhdGEudmFvKTtcblxuICAgIGlmIChzb3VyY2Uuc2VsZWN0LmluZGV4RGlydHkpIHtcbiAgICAgIHNvdXJjZS5zZWxlY3QuaW5kZXhEaXJ0eSA9IGZhbHNlO1xuICAgICAgZ2xEYXRhLmluZGV4QnVmZmVyLnVwbG9hZChzb3VyY2Uuc2VsZWN0LmluZGljZXMpO1xuICAgIH1cblxuICAgIGdsRGF0YS52ZXJ0ZXhCdWZmZXIudXBsb2FkKHNvdXJjZS5zZWxlY3QudmVydGljZXMpO1xuICAgIHRoaXMucmVuZGVyZXIuYmluZFNoYWRlcihnbERhdGEuc2hhZGVyKTtcblxuICAgIHRoaXMucmVuZGVyZXIuc3RhdGUuc2V0QmxlbmRNb2RlKDE3KTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnRyYW5zbGF0aW9uTWF0cml4ID0gc291cmNlLndvcmxkVHJhbnNmb3JtLnRvQXJyYXkodHJ1ZSk7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5iZ19jb2xvciA9IFBJWEkudXRpbHMuaGV4MnJnYih0aGlzLnNlbGVjdENvbG9yKTtcblxuICAgIGNvbnN0IGRyYXdNb2RlID0gc291cmNlLmRyYXdNb2RlID0gdGhpcy5yZW5kZXJlci5nbC5UUklBTkdMRVM7XG4gICAgZ2xEYXRhLnZhby5kcmF3KGRyYXdNb2RlLCBzb3VyY2Uuc2VsZWN0LmluZGljZXMubGVuZ3RoLCAwKTtcbiAgfVxuXG4gIHJlbmRlcihzb3VyY2UpIHtcblxuICAgIGlmIChzb3VyY2Uuc3R5bGVJRCAhPT0gc291cmNlLnN0eWxlLnN0eWxlSUQpIHtcbiAgICAgIHNvdXJjZS51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlLnN0YXRlID09PSBBd2Vzb21lVGV4dC5zdGF0ZXMuZWRpdGFibGUgfHwgc291cmNlLnN0YXRlID09PSBBd2Vzb21lVGV4dC5zdGF0ZXMuc2VsZWN0aW5nKSB7XG4gICAgICB0aGlzLnJlbmRlclNlbGVjdChzb3VyY2UpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlclRleHQoc291cmNlKTtcbiAgfVxuXG4gIGJ1aWxkVGV4dEdsRGF0YShzb3VyY2UsIGdsKSB7XG5cbiAgICBjb25zdCBnbERhdGEgPSB7XG4gICAgICBzaGFkZXI6IHRoaXMudGV4dFNoYWRlcixcbiAgICAgIHZlcnRleEJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgc291cmNlLnZlcnRpY2VzLCBnbC5TVFJFQU1fRFJBVyksXG4gICAgICB1dkJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgc291cmNlLnV2cywgZ2wuU1RSRUFNX0RSQVcpLFxuICAgICAgc2RmQnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlVmVydGV4QnVmZmVyKGdsLCBzb3VyY2Uuc2RmU2l6ZXMsIGdsLlNUQVRJQ19EUkFXKSxcbiAgICAgIGluZGV4QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlSW5kZXhCdWZmZXIoZ2wsIHNvdXJjZS5pbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyksXG4gICAgICAvLyBidWlsZCB0aGUgdmFvIG9iamVjdCB0aGF0IHdpbGwgcmVuZGVyLi5cbiAgICAgIHZhbzogbnVsbCxcbiAgICAgIGRpcnR5OiBzb3VyY2UuZGlydHksXG4gICAgICBpbmRleERpcnR5OiBzb3VyY2UuaW5kZXhEaXJ0eSxcbiAgICB9O1xuXG4gICAgZ2xEYXRhLnZhbyA9IG5ldyBnbENvcmUuVmVydGV4QXJyYXlPYmplY3QoZ2wpXG4gICAgICAuYWRkSW5kZXgoZ2xEYXRhLmluZGV4QnVmZmVyKVxuICAgICAgLmFkZEF0dHJpYnV0ZShnbERhdGEudmVydGV4QnVmZmVyLCBnbERhdGEuc2hhZGVyLmF0dHJpYnV0ZXMuYVZlcnRleFBvc2l0aW9uLCBnbC5GTE9BVCwgZmFsc2UsIDIgKiA0LCAwKVxuICAgICAgLmFkZEF0dHJpYnV0ZShnbERhdGEudXZCdWZmZXIsIGdsRGF0YS5zaGFkZXIuYXR0cmlidXRlcy5hVGV4dHVyZUNvb3JkLCBnbC5GTE9BVCwgZmFsc2UsIDIgKiA0LCAwKVxuICAgICAgLmFkZEF0dHJpYnV0ZShnbERhdGEuc2RmQnVmZmVyLCBnbERhdGEuc2hhZGVyLmF0dHJpYnV0ZXMuYVNkZlNpemUsIGdsLkZMT0FULCBmYWxzZSwgNCwgMCk7XG5cbiAgICByZXR1cm4gZ2xEYXRhXG4gIH1cblxuICBidWlsZFNlbGVjdEdsRGF0YShzb3VyY2UsIGdsKSB7XG4gICAgY29uc3QgZ2xEYXRhID0ge1xuICAgICAgc2hhZGVyOiB0aGlzLnNlbGVjdFNoYWRlcixcbiAgICAgIHZlcnRleEJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgc291cmNlLnNlbGVjdC52ZXJ0aWNlcywgZ2wuU1RSRUFNX0RSQVcpLFxuICAgICAgaW5kZXhCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVJbmRleEJ1ZmZlcihnbCwgc291cmNlLnNlbGVjdC5pbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyksXG4gICAgICB2YW86IG51bGxcbiAgICB9O1xuXG4gICAgZ2xEYXRhLnZhbyA9IG5ldyBnbENvcmUuVmVydGV4QXJyYXlPYmplY3QoZ2wpXG4gICAgICAuYWRkSW5kZXgoZ2xEYXRhLmluZGV4QnVmZmVyKVxuICAgICAgLmFkZEF0dHJpYnV0ZShnbERhdGEudmVydGV4QnVmZmVyLCBnbERhdGEuc2hhZGVyLmF0dHJpYnV0ZXMuYVZlcnRleFBvc2l0aW9uLCBnbC5GTE9BVCwgZmFsc2UsIDIgKiA0LCAwKVxuXG4gICAgcmV0dXJuIGdsRGF0YVxuICB9XG5cbn1cblxuUElYSS5XZWJHTFJlbmRlcmVyLnJlZ2lzdGVyUGx1Z2luKCdBd2Vzb21lVGV4dFJlbmRlcmVyJywgQXdlc29tZVRleHRSZW5kZXJlcik7XG5cbmV4cG9ydCBkZWZhdWx0IEF3ZXNvbWVUZXh0UmVuZGVyZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXJlci5qcyIsImNvbnN0IGNyZWF0ZUluZGljZXMgPSByZXF1aXJlKFwicXVhZC1pbmRpY2VzXCIpXG5pbXBvcnQgVGV4dExheW91dCBmcm9tICcuL2xheW91dCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vc2VsZWN0J1xuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQnXG5cbmNsYXNzIEF3ZXNvbWVUZXh0IGV4dGVuZHMgUElYSS5tZXNoLk1lc2gge1xuXG4gIHN0YXRpYyBzY2FsZSA9IDEuMDtcbiAgc3RhdGljIHN0YXRlcyA9IHtyZWd1bGFyOiAwLCBlZGl0YWJsZTogMSwgc2VsZWN0aW5nOiAyfTtcblxuICBzdGF0aWMgY3VycmVudEVkaXRpbmdFbGVtZW50ID0gbnVsbDtcblxuICBwbHVnaW5OYW1lID0gJ0F3ZXNvbWVUZXh0UmVuZGVyZXInO1xuICBzdGF0ZSA9IEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyO1xuICBjbGlja3NDb3VudCA9IDA7XG4gIGlucHV0RWxlbWVudCA9IG51bGw7XG4gIGlucHV0ID0gbnVsbDtcbiAgc2VsZWN0ID0gbnVsbDtcblxuICBjb25zdHJ1Y3Rvcih0ZXh0LCBzdHlsZSwgZm9udCkge1xuICAgIHN1cGVyKGZvbnQudGV4dHVyZSk7XG5cbiAgICB0aGlzLnN0eWxlID0gbmV3IFBJWEkuVGV4dFN0eWxlKHN0eWxlKTtcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IHN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICB0aGlzLl90ZXh0ID0gdGV4dDtcbiAgICB0aGlzLl9mb250ID0gZm9udC5mb250O1xuICAgIHRoaXMuX3RleHR1cmUgPSBmb250LnRleHR1cmU7XG5cbiAgICB0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcbiAgICB0aGlzLmJ1dHRvbk1vZGUgPSB0cnVlO1xuXG4gICAgLy8gQ2FsY3VhbHRlIGxheW91dFxuICAgIHRoaXMubGF5b3V0ID0gbmV3IFRleHRMYXlvdXQodGhpcywge1xuICAgICAgZm9udFNpemU6IHRoaXMuc3R5bGUuZm9udFNpemUsXG4gICAgICB3cmFwV29yZHM6IHRoaXMuc3R5bGUuYnJlYWtXb3JkcyxcbiAgICAgIHdyYXBwZXJXaWR0aDogdGhpcy5zdHlsZS53b3JkV3JhcFdpZHRoLFxuICAgICAgYWxpZ246IHRoaXMuc3R5bGUuYWxpZ24sXG4gICAgICBsaW5lSGVpZ2h0OiB0aGlzLnN0eWxlLmxpbmVIZWlnaHQsXG4gICAgfSk7XG5cbiAgICAvLyAgU2VsZWN0IHBsdWdpblxuICAgIHRoaXMuc2VsZWN0ID0gbmV3IFNlbGVjdCh0aGlzKTtcblxuICAgIC8vIElucHV0IHBsdWdpblxuICAgIHRoaXMuaW5wdXQgPSBuZXcgSW5wdXQodGhpcyk7XG5cbiAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLmZvbnRNZXRyaWNzKHRoaXMuc3R5bGUuZm9udFNpemUpO1xuXG4gICAgdGhpcy5sYXlvdXQudXBkYXRlKCk7XG4gICAgdGhpcy5zZWxlY3QudXBkYXRlKCk7XG4gICAgdGhpcy5pbnB1dC51cGRhdGUoKTtcblxuICAgIC8vIEFycmF5cyBmb3IgdmVydGljZXMsIHV2cyBhbmQgc2RmXG4gICAgdGhpcy52ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5sYXlvdXQubGV0dGVyc0NvdW50ICogNCAqIDIpO1xuICAgIHRoaXMudXZzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0ICogMik7XG4gICAgdGhpcy5zZGZTaXplcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5sYXlvdXQubGV0dGVyc0NvdW50ICogNCk7XG4gICAgdGhpcy5hcnJheVBvc2l0aW9ucyA9IHsgdmVydGV4OiAwLCB1dnM6IDAsIHNkZjogMCB9O1xuXG4gICAgLy8gRmlsbCBhcnJheXMgd29yZCBieSB3b3JkXG4gICAgdGhpcy5sYXlvdXQud29yZHNNZXRyaWNzLmZvckVhY2ggKHdvcmQgPT4ge1xuICAgICAgdGhpcy53cml0ZVN0cmluZyh3b3JkLndvcmQsIHRoaXMuZm9udCwgdGhpcy5tZXRyaWNzLCBbd29yZC54LCB3b3JkLnldKTtcbiAgICB9KTtcblxuICAgIC8vIFByZXBhcmUgaW5kaWNlc1xuICAgIHRoaXMuaW5kaWNlcyA9IGNyZWF0ZUluZGljZXMoe1xuICAgICAgY2xvY2t3aXNlOiB0cnVlLFxuICAgICAgdHlwZTogJ3VpbnQxNicsXG4gICAgICBjb3VudDogdGhpcy5sYXlvdXQubGV0dGVyc0NvdW50XG4gICAgfSk7XG5cbiAgICB0aGlzLnN0eWxlSUQgPSB0aGlzLnN0eWxlLnN0eWxlSUQ7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgdGhpcy5pbmRleERpcnR5ID0gdHJ1ZTtcbiAgICB0aGlzLl9nbERhdGFzID0gW107XG4gIH1cblxuICBzZXRTdGF0ZShuZXdTdGF0ZSkge1xuXG4gICAgY29uc3QgeyBzdGF0ZXMgfSA9IEF3ZXNvbWVUZXh0O1xuXG4gICAgaWYgKCFuZXdTdGF0ZSBpbiBPYmplY3QudmFsdWVzKHN0YXRlcykpIHJldHVybjtcblxuICAgIHN3aXRjaCAobmV3U3RhdGUpIHtcbiAgICAgIGNhc2Ugc3RhdGVzLnJlZ3VsYXI6XG4gICAgICAgIHRoaXMuc2V0UmVndWxhclN0YXRlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzdGF0ZXMuZWRpdGFibGU6XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBBd2Vzb21lVGV4dC5zdGF0ZXMucmVndWxhcikge1xuICAgICAgICAgIHRoaXMuc2V0RWRpdGFibGVTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSBuZXdTdGF0ZTtcbiAgfVxuXG4gIGdldCB0ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICB9XG5cbiAgc2V0IHRleHQodmFsdWUpIHtcbiAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHNldFJlZ3VsYXJTdGF0ZSgpIHtcblxuICAgIEF3ZXNvbWVUZXh0LmN1cnJlbnRFZGl0aW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICB0aGlzLm9mZihcIm1vdXNlZG93blwiKTtcbiAgICB0aGlzLm9mZihcIm1vdXNlbW92ZVwiKTtcbiAgICB0aGlzLm9mZihcIm1vdXNldXBcIik7XG4gICAgdGhpcy5vZmYoXCJtb3VzZXVwb3V0c2lkZVwiKTtcblxuICAgIHRoaXMuaW5wdXQuZW5hYmxlZCA9IGZhbHNlO1xuXG5cbiAgICB0aGlzLm9uKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICBpZiAodGhpcy5jbGlja3NDb3VudCA9PT0gMSkge1xuICAgICAgICB0aGlzLmNsaWNrc0NvdW50ID0gMDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShBd2Vzb21lVGV4dC5zdGF0ZXMuZWRpdGFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jbGlja3NDb3VudCA9PT0gMCkge1xuICAgICAgICB0aGlzLmNsaWNrc0NvdW50Kys7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNsaWNrc0NvdW50ID0gMDtcbiAgICAgICAgfSwgMzAwKVxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG4gIHNldEVkaXRhYmxlU3RhdGUoKSB7XG5cbiAgICAvLyBEaXNhYmxlIHByZXZpb3VzbHkgZW5hYmxlZCBmaWVsZFxuICAgIGlmIChBd2Vzb21lVGV4dC5jdXJyZW50RWRpdGluZ0VsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgQXdlc29tZVRleHQuY3VycmVudEVkaXRpbmdFbGVtZW50LnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyKTtcbiAgICB9XG4gICAgQXdlc29tZVRleHQuY3VycmVudEVkaXRpbmdFbGVtZW50ID0gdGhpcztcblxuICAgIC8vIERpc2FibGUgdW5uZWNlc3NhcnkgZXZlbnRzXG4gICAgdGhpcy5vZmYoXCJjbGlja1wiKTtcblxuICAgIHRoaXMuaW5wdXQuZW5hYmxlZCA9IHRydWU7XG5cbiAgICAvLyBTZWxlY3QgYWxsIGNoYXJhY3RlcnNcbiAgICB0aGlzLnNlbGVjdC5zZXRSYW5nZSgwLHRoaXMudGV4dC5sZW5ndGggLSAxKTtcbiAgICB0aGlzLmlucHV0LmlucHV0RWxlbWVudC5mb2N1cygpO1xuXG4gICAgdGhpcy5vbihcIm1vdXNlZG93blwiLCBlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLnNlbGVjdGluZyk7XG4gICAgICB0aGlzLnNlbGVjdC5vbk1vdXNlRG93bihlKTtcbiAgICAgIHRoaXMuaW5wdXQuc2hvdygpO1xuICAgICAgdGhpcy5pbnB1dC51cGRhdGUoZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKFwibW91c2Vtb3ZlXCIsIGUgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IEF3ZXNvbWVUZXh0LnN0YXRlcy5zZWxlY3RpbmcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Qub25Nb3VzZU1vdmUoZSk7XG4gICAgICAgIHRoaXMuaW5wdXQuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vbihcIm1vdXNldXBcIiwgZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5lZGl0YWJsZSk7XG4gICAgICB0aGlzLnNlbGVjdC5vbk1vdXNlVXAoZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKFwibW91c2V1cG91dHNpZGVcIiwgZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5lZGl0YWJsZSk7XG4gICAgICB0aGlzLnNlbGVjdC5vbk1vdXNlVXAoZSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGluc2VydFN0cmluZyhpbmRleCwgc3RyaW5nKSB7XG4gICAgdGhpcy50ZXh0ID0gdGhpcy50ZXh0LnN1YnN0cigwLCBpbmRleCkgKyBzdHJpbmcgKyB0aGlzLnRleHQuc3Vic3RyKGluZGV4KTtcbiAgfVxuXG4gIHJlbW92ZVN0cmluZyhpbmRleCwgbGVuZ3RoKSB7XG4gICAgbGV0IG5ld1RleHQgPSB0aGlzLnRleHQuc3BsaXQoXCJcIik7XG4gICAgbmV3VGV4dC5zcGxpY2UoaW5kZXgsIGxlbmd0aCArIDEpO1xuICAgIHRoaXMudGV4dCA9IG5ld1RleHQuam9pbihcIlwiKTtcbiAgfVxuXG4gIGdldCB0ZXh0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLl90ZXh0dXJlO1xuICB9XG5cbiAgZ2V0IGZvbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvbnRcbiAgfVxuXG4gIHdyaXRlU3RyaW5nKCBzdHJpbmcsIGZvbnQsIGZvbnRfbWV0cmljcywgcG9zKSB7XG4gICAgbGV0IHByZXZfY2hhciA9IFwiIFwiOyAgLy8gVXNlZCB0byBjYWxjdWxhdGUga2VybmluZ1xuICAgIGxldCBjcG9zICAgICAgPSBwb3M7ICAvLyBDdXJyZW50IHBlbiBwb3NpdGlvblxuICAgIGxldCB4X21heCAgICAgPSAwLjA7ICAvLyBNYXggd2lkdGggLSB1c2VkIGZvciBib3VuZGluZyBib3hcbiAgICBsZXQgc2NhbGUgICAgID0gZm9udF9tZXRyaWNzLmNhcFNjYWxlO1xuXG4gICAgbGV0IHN0cl9wb3MgPSAwO1xuXG4gICAgZm9yKDs7KSB7XG4gICAgICBpZiAoIHN0cl9wb3MgPT09IHN0cmluZy5sZW5ndGggKSBicmVhaztcblxuICAgICAgdmFyIHNjaGFyID0gc3RyaW5nWyBzdHJfcG9zIF07XG4gICAgICBzdHJfcG9zKys7XG5cbiAgICAgIGlmICggc2NoYXIgPT09IFwiXFxuXCIgKSB7XG4gICAgICAgIGlmICggY3Bvc1swXSA+IHhfbWF4ICkgeF9tYXggPSBjcG9zWzBdOyAvLyBFeHBhbmRpbmcgdGhlIGJvdW5kaW5nIHJlY3RcbiAgICAgICAgY3Bvc1swXSAgPSBwb3NbMF07XG4gICAgICAgIGNwb3NbMV0gLT0gZm9udF9tZXRyaWNzLmxpbmVIZWlnaHQ7XG4gICAgICAgIHByZXZfY2hhciA9IFwiIFwiO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCBzY2hhciA9PT0gXCIgXCIgKSB7XG4gICAgICAgIC8vc2NoYXIgPSBcIl9cIlxuICAgICAgICAvL2Nwb3NbMF0gKz0gZm9udC5zcGFjZV9hZHZhbmNlICogc2NhbGU7XG4gICAgICAgIC8vcHJldl9jaGFyID0gXCIgXCI7XG4gICAgICAgIC8vY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBmb250X2NoYXIgPSBmb250LmNoYXJzWyBzY2hhciBdO1xuICAgICAgaWYgKCAhZm9udF9jaGFyICkgeyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdWJzdGl0dXRpbmcgdW5hdmFpbGFibGUgY2hhcmFjdGVycyB3aXRoICc/J1xuICAgICAgICBzY2hhciA9IFwiP1wiO1xuICAgICAgICBmb250X2NoYXIgPSBmb250LmNoYXJzWyBcIj9cIiBdO1xuICAgICAgfVxuXG4gICAgICB2YXIga2VybiA9IGZvbnQua2VyblsgcHJldl9jaGFyICsgc2NoYXIgXTtcbiAgICAgIGlmICggIWtlcm4gKSBrZXJuID0gMC4wO1xuXG4gICAgICAvLyBjYWxjdWxhdGluZyB0aGUgZ2x5cGggcmVjdGFuZ2xlIGFuZCBjb3B5aW5nIGl0IHRvIHRoZSB2ZXJ0ZXggYXJyYXlcbiAgICAgIHZhciByZWN0ID0gdGhpcy5jaGFyUmVjdCggY3BvcywgZm9udCwgZm9udF9tZXRyaWNzLCBmb250X2NoYXIsIGtlcm4gKTtcblxuICAgICAgcmVjdC5wb3NpdGlvbnMubWFwKChwb3MpID0+IHRoaXMudmVydGljZXNbIHRoaXMuYXJyYXlQb3NpdGlvbnMudmVydGV4KysgXSA9IHBvcyApO1xuICAgICAgcmVjdC51dnMubWFwKCh1dikgPT4gdGhpcy51dnNbIHRoaXMuYXJyYXlQb3NpdGlvbnMudXZzKysgXSA9IHV2ICk7XG4gICAgICByZWN0LnNkZlNpemVzLm1hcCgoc2RmKSA9PiB0aGlzLnNkZlNpemVzWyB0aGlzLmFycmF5UG9zaXRpb25zLnNkZisrIF0gPSBzZGYgKTtcblxuICAgICAgcHJldl9jaGFyID0gc2NoYXI7XG4gICAgICBjcG9zID0gcmVjdC5wb3M7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlY3QgOiBbIHBvc1swXSwgcG9zWzFdLCB4X21heCAtIHBvc1swXSwgcG9zWzFdIC0gY3Bvc1sxXSArIGZvbnRfbWV0cmljcy5saW5lSGVpZ2h0IF0sXG4gICAgICBzdHJpbmdfcG9zIDogc3RyX3BvcyxcbiAgICAgIC8vYXJyYXlfcG9zIDogYXJyYXlfcG9zXG4gICAgfVxuXG4gIH1cblxuICBmb250TWV0cmljcyhmb250U2l6ZSwgbW9yZUxpbmVHYXAgPSAwLjIpIHtcblxuICAgIGNvbnN0IHtjYXBfaGVpZ2h0LCB4X2hlaWdodCwgYXNjZW50OiBmb250QXNjZW50ICwgZGVzY2VudCwgbGluZV9nYXB9ID0gdGhpcy5mb250O1xuXG4gICAgY29uc3QgY2FwU2NhbGUgPSB0aGlzLnN0eWxlLmZvbnRTaXplIC8gY2FwX2hlaWdodDtcbiAgICBjb25zdCBsb3dTY2FsZSA9IE1hdGgucm91bmQoIHhfaGVpZ2h0ICogY2FwU2NhbGUgKSAvIHhfaGVpZ2h0O1xuICAgIGNvbnN0IGFzY2VudCA9IE1hdGgucm91bmQoIGZvbnRBc2NlbnQgKiBjYXBTY2FsZSApO1xuICAgIGxldCBsaW5lSGVpZ2h0ID0gTWF0aC5yb3VuZCggY2FwU2NhbGUgKiAoIGZvbnRBc2NlbnQgKyBkZXNjZW50ICsgbGluZV9nYXAgKSArIG1vcmVMaW5lR2FwKTtcblxuICAgIGlmICh0aGlzLnN0eWxlLmxpbmVIZWlnaHQgPiAwKVxuICAgICAgbGluZUhlaWdodCA9IHRoaXMuc3R5bGUubGluZUhlaWdodDtcbiAgICBlbHNlXG4gICAgICB0aGlzLnN0eWxlLmxpbmVIZWlnaHQgPSBsaW5lSGVpZ2h0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcFNjYWxlICAgOiBjYXBTY2FsZSxcbiAgICAgIGxvd1NjYWxlICAgOiBsb3dTY2FsZSxcbiAgICAgIGFzY2VudCAgICAgIDogYXNjZW50LFxuICAgICAgbGluZUhlaWdodCA6IGxpbmVIZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgY2hhclJlY3QoIHBvcywgZm9udCwgZm9udF9tZXRyaWNzLCBmb250X2NoYXIsIGtlcm4gPSAwLjAgKSB7XG5cbiAgICAvLyBMb3cgY2FzZSBjaGFyYWN0ZXJzIGhhdmUgZmlyc3QgYml0IHNldCBpbiAnZmxhZ3MnXG4gICAgdmFyIGxvd2Nhc2UgPSAoIGZvbnRfY2hhci5mbGFncyAmIDEgKSA9PT0gMTtcblxuICAgIC8vIFBlbiBwb3NpdGlvbiBpcyBhdCB0aGUgdG9wIG9mIHRoZSBsaW5lLCBZIGdvZXMgdXBcbiAgICB2YXIgYmFzZWxpbmUgPSBwb3NbMV0gLSBmb250X21ldHJpY3MuYXNjZW50O1xuXG4gICAgLy8gTG93IGNhc2UgY2hhcnMgdXNlIHRoZWlyIG93biBzY2FsZVxuICAgIHZhciBzY2FsZSA9IGxvd2Nhc2UgPyBmb250X21ldHJpY3MubG93U2NhbGUgOiBmb250X21ldHJpY3MuY2FwU2NhbGU7XG5cbiAgICAvLyBMYXlpbmcgb3V0IHRoZSBnbHlwaCByZWN0YW5nbGVcbiAgICB2YXIgZyAgICAgID0gZm9udF9jaGFyLnJlY3Q7XG4gICAgdmFyIGJvdHRvbSA9IGJhc2VsaW5lIC0gc2NhbGUgKiAoIGZvbnQuZGVzY2VudCArIGZvbnQuaXkgKTtcbiAgICB2YXIgdG9wICAgID0gYm90dG9tICAgKyBzY2FsZSAqICggZm9udC5yb3dfaGVpZ2h0ICk7XG4gICAgdmFyIGxlZnQgICA9IHBvc1swXSAgICsgc2NhbGUgKiAoIGZvbnRfY2hhci5iZWFyaW5nX3ggKyBrZXJuIC0gZm9udC5peCApO1xuICAgIHZhciByaWdodCAgPSBsZWZ0ICAgICArIHNjYWxlICogKCBnWzJdIC0gZ1swXSApO1xuICAgIHZhciBwID0gWyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20gXTtcblxuICAgIC8vIEFkdmFuY2luZyBwZW4gcG9zaXRpb25cbiAgICB2YXIgbmV3X3Bvc194ID0gcG9zWzBdICsgc2NhbGUgKiAoIGZvbnRfY2hhci5hZHZhbmNlX3ggKTtcblxuICAgIC8vIFNpZ25lZCBkaXN0YW5jZSBmaWVsZCBzaXplIGluIHNjcmVlbiBwaXhlbHNcbiAgICB2YXIgc2RmX3NpemUgID0gMi4wICogZm9udC5peSAqIHNjYWxlO1xuXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xuICAgICAgcFswXSwgcFszXSwgLy8gbGVmdCBib3R0b20sXG4gICAgICBwWzJdLCBwWzNdLCAvLyByaWdodCBib3R0b20sXG4gICAgICBwWzJdLCBwWzFdLCAvLyByaWdodCB0b3BcbiAgICAgIHBbMF0sIHBbMV0sIC8vIGxlZnQgdG9wXG4gICAgXTtcblxuICAgIGNvbnN0IHV2cyA9IFtcbiAgICAgIGdbMF0sIGdbMV0sIC8vIGxlZnQgdG9wXG4gICAgICBnWzJdLCBnWzFdLCAvLyByaWdodCB0b3BcbiAgICAgIGdbMl0sIGdbM10sIC8vIHJpZ2h0IGJvdHRvbSxcbiAgICAgIGdbMF0sIGdbM10sIC8vIGxlZnQgYm90dG9tLFxuICAgIF07XG5cbiAgICBjb25zdCBzZGZTaXplcyA9IFtcbiAgICAgIHNkZl9zaXplLFxuICAgICAgc2RmX3NpemUsXG4gICAgICBzZGZfc2l6ZSxcbiAgICAgIHNkZl9zaXplLFxuICAgIF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb25zLFxuICAgICAgdXZzLFxuICAgICAgc2RmU2l6ZXMsXG4gICAgICBwb3M6IFsgbmV3X3Bvc194LCBwb3NbMV0gXVxuICAgIH07XG5cbiAgICAvL3JldHVybiB7IHZlcnRpY2VzIDogdmVydGljZXMsIHBvcyA6IFsgbmV3X3Bvc194LCBwb3NbMV0gXSB9O1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQXdlc29tZVRleHQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGV4dC5qcyIsIlxuY2xhc3MgVGV4dExheW91dCB7XG5cbiAgdGV4dCA9IFwiXCI7XG4gIGZvbnQgPSBudWxsO1xuICBtZXRyaWNzID0gbnVsbDtcbiAgZm9udFNpemUgPSAyMDtcbiAgYWxpZ24gPSBcImxlZnRcIjtcbiAgc3RhcnRYID0gMDtcbiAgc3RhcnRZID0gMDtcbiAgd3JhcHBlcldpZHRoID0gMTAwO1xuICB3cmFwV29yZHMgPSBmYWxzZTtcbiAgd29yZHNNZXRyaWNzID0gW107XG4gIGxldHRlcnNDb3VudCA9IDA7XG4gIGhlaWdodCA9IDA7XG4gIGxpbmVzQ291bnQgPSAwO1xuICBsaW5lSGVpZ2h0ID0gMDtcbiAgZ2x5cGhzID0gW107XG4gIG93bmVyID0gbnVsbDtcblxuXG4gIGNvbnN0cnVjdG9yKG93bmVyLCBjb25maWcpIHtcblxuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLnRleHQgPSBvd25lci50ZXh0O1xuICAgIHRoaXMuZm9udCA9IG93bmVyLmZvbnQ7XG4gICAgdGhpcy5mb250U2l6ZSA9IGNvbmZpZy5mb250U2l6ZTtcbiAgICB0aGlzLndyYXBXb3JkcyA9IGNvbmZpZy53cmFwV29yZHM7XG4gICAgdGhpcy53cmFwcGVyV2lkdGggPSBjb25maWcud3JhcHBlcldpZHRoO1xuICAgIHRoaXMubGluZUhlaWdodCA9IGNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIHRoaXMuYWxpZ24gPSBjb25maWcuYWxpZ247XG4gICAgdGhpcy51cGRhdGUoKTtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudGV4dCA9IHRoaXMub3duZXIudGV4dDtcbiAgICB0aGlzLmZvbnQgPSB0aGlzLm93bmVyLmZvbnQ7XG5cbiAgICB0aGlzLmxldHRlcnNDb3VudCA9IHRoaXMudGV4dC5zcGxpdChcIlwiKS5sZW5ndGg7XG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5mb250TWV0cmljcyh0aGlzLmZvbnQsIDAuMCk7XG4gICAgdGhpcy5zdGFydFkgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcbiAgICB0aGlzLmNhbGN1bGF0ZVdvcmRzUG9zaXRpb25zKCk7XG5cbiAgICB0aGlzLmdseXBocyA9IFtdO1xuXG4gICAgdGhpcy53b3Jkc01ldHJpY3MuZm9yRWFjaCAod29yZCA9PiB7XG4gICAgICB0aGlzLmdldEdseXBocyh3b3JkLndvcmQsIFt3b3JkLngsIHdvcmQueV0pO1xuICAgIH0pO1xuICB9XG5cbiAgZm9udE1ldHJpY3MoZm9udFNpemUsIG1vcmVMaW5lR2FwID0gMC4yKSB7XG5cbiAgICBjb25zdCB7Y2FwX2hlaWdodCwgeF9oZWlnaHQsIGFzY2VudDogZm9udEFzY2VudCAsIGRlc2NlbnQsIGxpbmVfZ2FwfSA9IHRoaXMuZm9udDtcblxuICAgIGNvbnN0IGNhcFNjYWxlID0gdGhpcy5mb250U2l6ZSAvIGNhcF9oZWlnaHQ7XG4gICAgY29uc3QgbG93U2NhbGUgPSBNYXRoLnJvdW5kKCB4X2hlaWdodCAqIGNhcFNjYWxlICkgLyB4X2hlaWdodDtcbiAgICBjb25zdCBhc2NlbnQgPSBNYXRoLnJvdW5kKCBmb250QXNjZW50ICogY2FwU2NhbGUgKTtcbiAgICBsZXQgbGluZUhlaWdodCA9IE1hdGgucm91bmQoIGNhcFNjYWxlICogKCBmb250QXNjZW50ICsgZGVzY2VudCArIGxpbmVfZ2FwICkgKyBtb3JlTGluZUdhcCApO1xuXG4gICAgaWYgKHRoaXMubGluZUhlaWdodCA+IDApXG4gICAgICBsaW5lSGVpZ2h0ID0gdGhpcy5saW5lSGVpZ2h0O1xuICAgIGVsc2VcbiAgICAgIHRoaXMubGluZUhlaWdodCA9IGxpbmVIZWlnaHQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY2FwU2NhbGUgICA6IGNhcFNjYWxlLFxuICAgICAgbG93U2NhbGUgICA6IGxvd1NjYWxlLFxuICAgICAgYXNjZW50ICAgICAgOiBhc2NlbnQsXG4gICAgICBsaW5lSGVpZ2h0IDogbGluZUhlaWdodFxuICAgIH07XG4gIH1cblxuICBjaGFyUmVjdCggcG9zLCBmb250X2NoYXIsIGtlcm4gPSAwLjAgKSB7XG5cbiAgICAvLyBMb3cgY2FzZSBjaGFyYWN0ZXJzIGhhdmUgZmlyc3QgYml0IHNldCBpbiAnZmxhZ3MnXG4gICAgdmFyIGxvd2Nhc2UgPSAoIGZvbnRfY2hhci5mbGFncyAmIDEgKSA9PT0gMTtcblxuICAgIC8vIFBlbiBwb3NpdGlvbiBpcyBhdCB0aGUgdG9wIG9mIHRoZSBsaW5lLCBZIGdvZXMgdXBcbiAgICB2YXIgYmFzZWxpbmUgPSBwb3NbMV0gLSB0aGlzLm1ldHJpY3MuYXNjZW50O1xuXG4gICAgLy8gTG93IGNhc2UgY2hhcnMgdXNlIHRoZWlyIG93biBzY2FsZVxuICAgIHZhciBzY2FsZSA9IGxvd2Nhc2UgPyB0aGlzLm1ldHJpY3MubG93U2NhbGUgOiB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XG5cbiAgICAvLyBMYXlpbmcgb3V0IHRoZSBnbHlwaCByZWN0YW5nbGVcbiAgICB2YXIgZyAgICAgID0gZm9udF9jaGFyLnJlY3Q7XG4gICAgdmFyIGJvdHRvbSA9IGJhc2VsaW5lIC0gc2NhbGUgKiAoIHRoaXMuZm9udC5kZXNjZW50ICsgdGhpcy5mb250Lml5ICk7XG4gICAgdmFyIHRvcCAgICA9IGJvdHRvbSAgICsgc2NhbGUgKiAoIHRoaXMuZm9udC5yb3dfaGVpZ2h0ICk7XG4gICAgdmFyIGxlZnQgICA9IHBvc1swXSAgICsgc2NhbGUgKiAoIGZvbnRfY2hhci5iZWFyaW5nX3ggKyBrZXJuIC0gdGhpcy5mb250Lml4ICk7XG4gICAgdmFyIHJpZ2h0ICA9IGxlZnQgICAgICsgc2NhbGUgKiAoIGdbMl0gLSBnWzBdICk7XG4gICAgdmFyIHAgPSBbIGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSBdO1xuXG4gICAgLy8gQWR2YW5jaW5nIHBlbiBwb3NpdGlvblxuICAgIHZhciBuZXdfcG9zX3ggPSBwb3NbMF0gKyBzY2FsZSAqICggZm9udF9jaGFyLmFkdmFuY2VfeCApO1xuXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xuICAgICAgcFswXSwgcFszXSwgLy8gbGVmdCBib3R0b20sXG4gICAgICBwWzJdLCBwWzNdLCAvLyByaWdodCBib3R0b20sXG4gICAgICBwWzJdLCBwWzFdLCAvLyByaWdodCB0b3BcbiAgICAgIHBbMF0sIHBbMV0sIC8vIGxlZnQgdG9wXG4gICAgXTtcblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbnMsXG4gICAgICBwb3M6IFsgbmV3X3Bvc194LCBwb3NbMV0gXSxcbiAgICAgIG1ldHJpY3M6IHt4OiBwb3NbMF0sIHk6IHBvc1sxXSwgd2lkdGg6IHNjYWxlICogZm9udF9jaGFyLmFkdmFuY2VfeCB9XG4gICAgfTtcbiAgfVxuXG4gIGdldFN0cmluZ1NpemUoc3RyaW5nKSB7XG5cbiAgICBsZXQgd2lkdGggPSAwO1xuICAgIGxldCBoZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcblxuICAgIGNvbnN0IGNoYXJzID0gWy4uLnN0cmluZ107XG5cbiAgICAvLyBJdGVyYXRlIHRob3VnaHQgdGhlIGNoYXJzLCBjYWxjdWxhdGUgcG9zaXRpb25cbiAgICBjaGFycy5mb3JFYWNoKGNoYXIgPT4ge1xuICAgICAgbGV0IGZvbnRfY2hhciA9IHRoaXMuZm9udC5jaGFyc1sgY2hhciBdO1xuXG4gICAgICAvKmlmIChjaGFyID09PSBcIiBcIikge1xuICAgICAgICB3aWR0aCArPSB0aGlzLmZvbnQuc3BhY2VfYWR2YW5jZSAqIHRoaXMubWV0cmljcy5jYXBTY2FsZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSovXG5cbiAgICAgIC8vIEdldCBjaGFyIG1ldHJpY3NcbiAgICAgIGxldCBjaGFyUmVjdCA9IHRoaXMuY2hhclJlY3QoW3dpZHRoLDBdLCBmb250X2NoYXIsIDAuMik7XG4gICAgICB3aWR0aCA9IGNoYXJSZWN0LnBvc1swXTtcblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHt3aWR0aCwgaGVpZ2h0fTtcblxuICB9XG5cbiAgY2FsY3VsYXRlV29yZHNQb3NpdGlvbnMoKSB7XG5cbiAgICBjb25zdCB3b3JkcyA9IHRoaXMudGV4dC5zcGxpdChcIiBcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgd29yZHNbaV0gPSB3b3Jkc1tpXSArIFwiIFwiO1xuICAgIH1cblxuICAgIHRoaXMud29yZHNNZXRyaWNzID0gW107XG5cbiAgICAvLyBJbml0aWFsIHBvc2l0aW9uXG4gICAgbGV0IHggPSB0aGlzLnN0YXJ0WDtcbiAgICBsZXQgeSA9IHRoaXMuc3RhcnRZO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHdvcmRzIHBvc2l0aW9ucyBvbiBsaW5lc1xuICAgIHdvcmRzLmZvckVhY2god29yZCA9PiB7XG4gICAgICBjb25zdCB3b3JkU2l6ZSA9IHRoaXMuZ2V0U3RyaW5nU2l6ZSh3b3JkKTtcbiAgICAgIGlmICh4ICsgd29yZFNpemUud2lkdGggPiB0aGlzLnN0YXJ0WCArIHRoaXMud3JhcHBlcldpZHRoICYmIHRoaXMud3JhcFdvcmRzKSB7XG4gICAgICAgIHggPSB0aGlzLnN0YXJ0WDtcbiAgICAgICAgeSArPSB3b3JkU2l6ZS5oZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMud29yZHNNZXRyaWNzLnB1c2goey4uLndvcmRTaXplLCB4LCB5LCB3b3JkfSk7XG5cbiAgICAgIC8veCArPSB3b3JkU2l6ZS53aWR0aCArIHRoaXMuZm9udC5zcGFjZV9hZHZhbmNlICogdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xuICAgICAgeCArPSB3b3JkU2l6ZS53aWR0aDtcbiAgICB9KTtcblxuICAgIC8vIENhbGN1bGF0ZSBsaW5lcyBjb3VudFxuICAgIHRoaXMubGluZXNDb3VudCA9ICh5IC0gdGhpcy5zdGFydFkpIC8gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyAxO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5saW5lc0NvdW50ICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XG5cbiAgICAvLyBDaGFuZ2UgYWxpZ24gVE9ETyBvcHRpbWlzZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saW5lc0NvdW50OyArK2kpIHtcbiAgICAgIGNvbnN0IHdvcmRzT25MaW5lID0gdGhpcy53b3Jkc01ldHJpY3MuZmlsdGVyKHdvcmQgPT4gd29yZC55ID09PSB0aGlzLnN0YXJ0WSArIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQpKVxuXG4gICAgICBjb25zdCBsYXN0V29yZCA9IHdvcmRzT25MaW5lW3dvcmRzT25MaW5lLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAobGFzdFdvcmQpIHtcbiAgICAgICAgY29uc3QgZnJlZVNwYWNlID0gKHRoaXMuc3RhcnRYICsgdGhpcy53cmFwcGVyV2lkdGgpIC0gKGxhc3RXb3JkLnggKyBsYXN0V29yZC53aWR0aCk7XG5cbiAgICAgICAgbGV0IGxlZnRPZmZzZXQgPSAwO1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5hbGlnbikge1xuICAgICAgICAgIGNhc2UgXCJjZW50ZXJcIjpcbiAgICAgICAgICAgIGxlZnRPZmZzZXQgPSBmcmVlU3BhY2UgLyAyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICBsZWZ0T2Zmc2V0ID0gZnJlZVNwYWNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53b3Jkc01ldHJpY3MuZm9yRWFjaCh3b3JkID0+IHtcbiAgICAgICAgICBpZiAod29yZC55ID09PSB0aGlzLnN0YXJ0WSArIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQpKSB7XG4gICAgICAgICAgICB3b3JkLnggKz0gbGVmdE9mZnNldDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0R2x5cGhzKCBzdHJpbmcsIHBvcykge1xuICAgIGxldCBwcmV2X2NoYXIgPSBcIiBcIjsgIC8vIFVzZWQgdG8gY2FsY3VsYXRlIGtlcm5pbmdcbiAgICBsZXQgY3BvcyAgICAgID0gcG9zOyAgLy8gQ3VycmVudCBwZW4gcG9zaXRpb25cbiAgICBsZXQgeF9tYXggICAgID0gMC4wOyAgLy8gTWF4IHdpZHRoIC0gdXNlZCBmb3IgYm91bmRpbmcgYm94XG4gICAgbGV0IHNjYWxlICAgICA9IHRoaXMubWV0cmljcy5jYXBTY2FsZTtcblxuICAgIGxldCBzdHJfcG9zID0gMDtcblxuICAgIGZvcig7Oykge1xuICAgICAgaWYgKCBzdHJfcG9zID09PSBzdHJpbmcubGVuZ3RoICkgYnJlYWs7XG5cbiAgICAgIHZhciBzY2hhciA9IHN0cmluZ1sgc3RyX3BvcyBdO1xuICAgICAgc3RyX3BvcysrO1xuXG4gICAgICBpZiAoIHNjaGFyID09PSBcIlxcblwiICkge1xuICAgICAgICBpZiAoIGNwb3NbMF0gPiB4X21heCApIHhfbWF4ID0gY3Bvc1swXTsgLy8gRXhwYW5kaW5nIHRoZSBib3VuZGluZyByZWN0XG4gICAgICAgIGNwb3NbMF0gID0gcG9zWzBdO1xuICAgICAgICBjcG9zWzFdIC09IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xuICAgICAgICBwcmV2X2NoYXIgPSBcIiBcIjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICggc2NoYXIgPT09IFwiIFwiICkge1xuICAgICAgICAvL3NjaGFyID0gXCJfXCJcbiAgICAgICAgLy9jcG9zWzBdICs9IHRoaXMuZm9udC5zcGFjZV9hZHZhbmNlICogc2NhbGU7XG4gICAgICAgIHByZXZfY2hhciA9IFwiIFwiO1xuICAgICAgICAvL2NvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgZm9udF9jaGFyID0gdGhpcy5mb250LmNoYXJzWyBzY2hhciBdO1xuICAgICAgaWYgKCAhZm9udF9jaGFyICkgeyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdWJzdGl0dXRpbmcgdW5hdmFpbGFibGUgY2hhcmFjdGVycyB3aXRoICc/J1xuICAgICAgICBzY2hhciA9IFwiP1wiO1xuICAgICAgICBmb250X2NoYXIgPSB0aGlzLmZvbnQuY2hhcnNbIFwiP1wiIF07XG4gICAgICB9XG5cbiAgICAgIHZhciBrZXJuID0gdGhpcy5mb250Lmtlcm5bIHByZXZfY2hhciArIHNjaGFyIF07XG4gICAgICBpZiAoICFrZXJuICkga2VybiA9IDAuMDtcblxuICAgICAgLy8gY2FsY3VsYXRpbmcgdGhlIGdseXBoIHJlY3RhbmdsZSBhbmQgY29weWluZyBpdCB0byB0aGUgdmVydGV4IGFycmF5XG4gICAgICB2YXIgcmVjdCA9IHRoaXMuY2hhclJlY3QoIGNwb3MsIGZvbnRfY2hhciwga2VybiApO1xuXG4gICAgICBwcmV2X2NoYXIgPSBzY2hhcjtcbiAgICAgIGNwb3MgPSByZWN0LnBvcztcblxuICAgICAgdGhpcy5nbHlwaHMucHVzaCh7XG4gICAgICAgIGxldHRlcjogc2NoYXIsXG4gICAgICAgIHZlcnRpY2VzOiByZWN0LnBvc2l0aW9ucyxcbiAgICAgICAgcG9zaXRpb246IHJlY3QucG9zLFxuICAgICAgICBtZXRyaWNzOiByZWN0Lm1ldHJpY3NcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRleHRMYXlvdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGF5b3V0LmpzIiwiY29uc3QgY3JlYXRlSW5kaWNlcyA9IHJlcXVpcmUoXCJxdWFkLWluZGljZXNcIilcclxuXHJcbmNsYXNzIFNlbGVjdCB7XHJcblxyXG4gIHJhbmdlID0gWzAsMF07XHJcbiAgbWV0cmljcyA9IG51bGw7XHJcbiAgbGF5b3V0ID0gbnVsbDtcclxuICBkaXJ0eSA9IGZhbHNlO1xyXG4gIGluZGV4QnVmZmVyID0gZmFsc2U7XHJcbiAgb3duZXIgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihvd25lcikge1xyXG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xyXG4gICAgdGhpcy5tZXRyaWNzID0gb3duZXIubWV0cmljcztcclxuICAgIHRoaXMubGF5b3V0ID0gb3duZXIubGF5b3V0O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5vd25lci5tZXRyaWNzO1xyXG4gICAgdGhpcy5sYXlvdXQgPSB0aGlzLm93bmVyLmxheW91dDtcclxuXHJcbiAgICAvLyBWZXJ0aWNlcyBhcnJheSBmb3IgYWxsIHNlbGVjdGVkIGxpbmVzXHJcbiAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5saW5lc0NvdW50ICogNCAqIDIpO1xyXG5cclxuICAgIGlmICh0aGlzLnJhbmdlWzFdICE9PSBudWxsKVxyXG4gICAgdGhpcy5idWlsZFZlcnRpY2VzKCk7XHJcblxyXG4gICAgdGhpcy5pbmRpY2VzID0gY3JlYXRlSW5kaWNlcyh7XHJcbiAgICAgIGNsb2Nrd2lzZTogdHJ1ZSxcclxuICAgICAgdHlwZTogJ3VpbnQxNicsXHJcbiAgICAgIGNvdW50OnRoaXMubGF5b3V0LmxpbmVzQ291bnRcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgdGhpcy5pbmRleEJ1ZmZlciA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzZXRSYW5nZShzdGFydCA9IG51bGwsIGVuZCA9IG51bGwpIHtcclxuXHJcbiAgICBjb25zdCB7Z2x5cGhzfSA9IHRoaXMub3duZXIubGF5b3V0O1xyXG5cclxuICAgIGlmIChzdGFydCA9PT0gbnVsbCkgc3RhcnQgPSB0aGlzLnJhbmdlWzBdO1xyXG4gICAgaWYgKGVuZCA9PT0gbnVsbCkgZW5kID0gdGhpcy5yYW5nZVsxXTtcclxuXHJcbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDA7XHJcbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMDtcclxuXHJcbiAgICBpZiAoc3RhcnQgPiBnbHlwaHMubGVuZ3RoIC0xKXN0YXJ0ID0gZ2x5cGhzLmxlbmd0aCAtIDE7XHJcbiAgICBpZiAoZW5kID4gZ2x5cGhzLmxlbmd0aCAtIDEpIGVuZCA9IGdseXBocy5sZW5ndGggLSAxO1xyXG5cclxuICAgIGlmIChlbmQgPT09IGZhbHNlKSBlbmQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMucmFuZ2UgPSBbc3RhcnQsIGVuZF07XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRWZXJ0aWNlcygpIHtcclxuXHJcbiAgICAvLyBTZWxlY3QgcmFuZ2VcclxuICAgIGxldCBzdGFydCA9IHRoaXMubGF5b3V0LmdseXBoc1tNYXRoLm1pbi5hcHBseShudWxsLHRoaXMucmFuZ2UpXTtcclxuICAgIGxldCBlbmQgPSB0aGlzLmxheW91dC5nbHlwaHNbTWF0aC5tYXguYXBwbHkobnVsbCx0aGlzLnJhbmdlKV07XHJcblxyXG5cclxuICAgIC8vIEl0ZXJhdGUgdGhvdWdodCBhbGwgbGluZXNcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5sYXlvdXQubGluZXNDb3VudDsgKytpKSB7XHJcbiAgICAgIGxldCBsZXR0ZXJDb3VudCA9IDA7IC8vIGxldHRlcnMgcGFzc2VkXHJcbiAgICAgIGxldCBmaXJzdExldHRlciA9IG51bGw7IC8vIGZpcnN0IGxldHRlciBvbiB0aGlzIGxpbmVcclxuICAgICAgbGV0IGxhc3RMZXR0ZXIgPSBudWxsOyAvLyBsYXN0IGxldHRlciBvbiB0aGlzIGxpbmVcclxuXHJcblxyXG5cclxuICAgICAgaWYgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCArIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0IDwgc3RhcnQucG9zaXRpb25bMV0pIGNvbnRpbnVlO1xyXG4gICAgICBpZiAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgPiBlbmQucG9zaXRpb25bMV0pIGNvbnRpbnVlO1xyXG5cclxuICAgICAgLy8gVGFrZSBldmVyeSB3b3JkLCBpZiBpdCdzIGxhc3Qgb3IgZmlyc3Qgb24gbGluZSAtIGNoYW5nZSBib3VuZHMgbGV0dGVyc1xyXG4gICAgICB0aGlzLmxheW91dC53b3Jkc01ldHJpY3MubWFwKHdvcmQgPT4ge1xyXG5cclxuICAgICAgICBpZiAod29yZC55ID09PSB0aGlzLmxheW91dC5zdGFydFkgKyAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSkge1xyXG4gICAgICAgICAgaWYgKGZpcnN0TGV0dGVyID09PSBudWxsKSBmaXJzdExldHRlciA9IGxldHRlckNvdW50O1xyXG4gICAgICAgICAgbGFzdExldHRlciA9IGxldHRlckNvdW50ICsgd29yZC53b3JkLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXR0ZXJDb3VudCArPSB3b3JkLndvcmQubGVuZ3RoO1xyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIC8vIEJvdW5kcyBsZXR0ZXJzIGZvciBjdXJyZW50IGxpbmVcclxuICAgICAgbGV0IHN0YXJ0TGluZUxldHRlciA9IHRoaXMubGF5b3V0LmdseXBoc1tmaXJzdExldHRlcl07XHJcbiAgICAgIGxldCBlbmRMaW5lTGV0dGVyID0gdGhpcy5sYXlvdXQuZ2x5cGhzW2xhc3RMZXR0ZXJdO1xyXG5cclxuXHJcblxyXG4gICAgICAvLyBJZiB0aGUgc3RhcnQgb3IgZW5kIHJhbmdlIGlzIG9uIHRoaXMgbGluZSwgY2hhbmdlIGJvdW5kcyBmb3IgdGhlbVxyXG4gICAgICBpZiAoc3RhcnQucG9zaXRpb25bMV0gPT09ICBzdGFydExpbmVMZXR0ZXIucG9zaXRpb25bMV0pIHN0YXJ0TGluZUxldHRlciA9IHN0YXJ0O1xyXG4gICAgICBpZiAoZW5kLnBvc2l0aW9uWzFdID09PSBlbmRMaW5lTGV0dGVyLnBvc2l0aW9uWzFdKSBlbmRMaW5lTGV0dGVyID0gZW5kO1xyXG5cclxuICAgICAgLy8gV2UgdXNlIG9mZnNldCB0byBhdm9pZCBzZWxlY3RzIG92ZXJsYXBwaW5nXHJcbiAgICAgIGNvbnN0IG9mZnNldCA9ICh0aGlzLm1ldHJpY3MubGluZUhlaWdodCAtIHRoaXMubWV0cmljcy5hc2NlbnQpIC8gMjtcclxuXHJcbiAgICAgIC8vIEFkZCBwb3NpdGlvbnMgdG8gYXJyYXlcclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpXSA9IHN0YXJ0TGluZUxldHRlci52ZXJ0aWNlc1swXTtcclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgMV0gPSBzdGFydExpbmVMZXR0ZXIudmVydGljZXNbMV0gKyBvZmZzZXQ7XHJcblxyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyAyXSA9IGVuZExpbmVMZXR0ZXIudmVydGljZXNbMl07XHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDNdID0gZW5kTGluZUxldHRlci52ZXJ0aWNlc1szXSAgICsgb2Zmc2V0O1xyXG5cclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgNF0gPSBlbmRMaW5lTGV0dGVyLnZlcnRpY2VzWzRdO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyA1XSA9IGVuZExpbmVMZXR0ZXIudmVydGljZXNbNV0gIC0gb2Zmc2V0O1xyXG5cclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgNl0gPSBzdGFydExpbmVMZXR0ZXIudmVydGljZXNbNl07XHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDddID0gc3RhcnRMaW5lTGV0dGVyLnZlcnRpY2VzWzddICAtIG9mZnNldDtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0Q2xvc2VzdEdseXBoKHgsIHkpIHtcclxuXHJcbiAgICBjb25zdCB7IGdseXBocyB9ID0gdGhpcy5vd25lci5sYXlvdXQ7XHJcblxyXG4gICAgY29uc3QgbGluZUhlaWdodCA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xyXG4gICAgY29uc3Qgc2VsZWN0aW5nTGluZSA9IE1hdGguZmxvb3IoeSAvIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KTtcclxuICAgIGNvbnN0IHNlbGVjdGluZ0xpbmVZID0gc2VsZWN0aW5nTGluZSAqIGxpbmVIZWlnaHQ7XHJcbiAgICBsZXQgbGFzdEdseXBoT25MaW5lID0gZ2x5cGhzW2dseXBocy5sZW5ndGggLSAxXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdseXBocy5sZW5ndGg7ICsraSkge1xyXG5cclxuICAgICAgbGV0IGdseXBoID0gZ2x5cGhzW2ldO1xyXG5cclxuICAgICAgaWYgKGdseXBoLm1ldHJpY3MueSA9PT0gc2VsZWN0aW5nTGluZVkgKyBsaW5lSGVpZ2h0KSB7XHJcbiAgICAgICAgbGFzdEdseXBoT25MaW5lID0gZ2x5cGg7XHJcblxyXG4gICAgICAgIGlmIChnbHlwaC5tZXRyaWNzLnggKyBnbHlwaC5tZXRyaWNzLndpZHRoID4geCkge1xyXG4gICAgICAgICByZXR1cm4gZ2x5cGhzW2kgLSAxXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGFzdEdseXBoT25MaW5lO1xyXG5cclxuICB9XHJcblxyXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XHJcblxyXG4gICAgLy8gT25seSBsZWZ0IG1vdXNlIGJ1dHRvblxyXG4gICAgaWYgKGV2ZW50LmRhdGEuYnV0dG9uICE9PSAwKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHBvc2l0aW9uID0gZXZlbnQuZGF0YS5nbG9iYWw7XHJcblxyXG4gICAgcG9zaXRpb24ueCAtPSB0aGlzLm93bmVyLnBvc2l0aW9uLng7XHJcbiAgICBwb3NpdGlvbi55IC09IHRoaXMub3duZXIucG9zaXRpb24ueTtcclxuXHJcbiAgICBwb3NpdGlvbi54ID0gcG9zaXRpb24ueCAvICB0aGlzLm93bmVyLnNjYWxlLng7XHJcbiAgICBwb3NpdGlvbi55ID0gcG9zaXRpb24ueSAvIHRoaXMub3duZXIuc2NhbGUueTtcclxuXHJcbiAgICBjb25zdCBjbG9zZXN0TGV0dGVyID0gdGhpcy5nZXRDbG9zZXN0R2x5cGgocG9zaXRpb24ueCArIDEyLCBwb3NpdGlvbi55KTtcclxuICAgIGxldCBpbmRleCA9IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5pbmRleE9mKGNsb3Nlc3RMZXR0ZXIpO1xyXG5cclxuICAgIHRoaXMuc2V0UmFuZ2UoaW5kZXggLCBmYWxzZSApO1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcclxuXHJcbiAgICBsZXQgcG9zaXRpb24gPSBldmVudC5kYXRhLmdsb2JhbDtcclxuXHJcbiAgICBwb3NpdGlvbi54IC09IHRoaXMub3duZXIucG9zaXRpb24ueDtcclxuICAgIHBvc2l0aW9uLnkgLT0gdGhpcy5vd25lci5wb3NpdGlvbi55O1xyXG5cclxuICAgIHBvc2l0aW9uLnggPSBwb3NpdGlvbi54IC8gdGhpcy5vd25lci5zY2FsZS54O1xyXG4gICAgcG9zaXRpb24ueSA9IHBvc2l0aW9uLnkgLyB0aGlzLm93bmVyLnNjYWxlLnk7XHJcblxyXG4gICAgY29uc3QgY2xvc2VzdExldHRlciA9IHRleHQuc2VsZWN0LmdldENsb3Nlc3RHbHlwaChwb3NpdGlvbi54ICsgMTIgLCBwb3NpdGlvbi55KTtcclxuICAgIGxldCBpbmRleCA9IHRleHQubGF5b3V0LmdseXBocy5pbmRleE9mKGNsb3Nlc3RMZXR0ZXIpO1xyXG5cclxuICAgIHRoaXMuc2V0UmFuZ2UobnVsbCwgaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZVVwKGV2ZW50KSB7XHJcblxyXG4gICAgLy8gT25seSBsZWZ0IG1vdXNlIGJ1dHRvblxyXG4gICAgaWYgKGV2ZW50LmRhdGEuYnV0dG9uICE9PSAwKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHBvc2l0aW9uID0gZXZlbnQuZGF0YS5nbG9iYWw7XHJcblxyXG4gICAgLy9wb3NpdGlvbi54IC09IHRoaXMub3duZXIucG9zaXRpb24ueDtcclxuICAgIC8vcG9zaXRpb24ueSAtPSB0aGlzLm93bmVyLnBvc2l0aW9uLnk7XHJcblxyXG4gICAgcG9zaXRpb24ueCA9IHBvc2l0aW9uLnggLyB0aGlzLm93bmVyLnNjYWxlLng7XHJcbiAgICBwb3NpdGlvbi55ID0gcG9zaXRpb24ueSAvIHRoaXMub3duZXIuc2NhbGUueTtcclxuXHJcbiAgICBjb25zdCBjbG9zZXN0TGV0dGVyID0gdGV4dC5zZWxlY3QuZ2V0Q2xvc2VzdEdseXBoKHBvc2l0aW9uLnggKyAxMiAsIHBvc2l0aW9uLnkpO1xyXG4gICAgdGhpcy5vd25lci5pbnB1dC5nbHlwaEluZGV4ID0gdGV4dC5sYXlvdXQuZ2x5cGhzLmluZGV4T2YoY2xvc2VzdExldHRlcikgKyAxO1xyXG5cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBTZWxlY3Q7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZWxlY3QuanMiLCJ2YXIgZHR5cGUgPSByZXF1aXJlKCdkdHlwZScpXG52YXIgYW5BcnJheSA9IHJlcXVpcmUoJ2FuLWFycmF5JylcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpXG5cbnZhciBDVyA9IFswLCAyLCAzXVxudmFyIENDVyA9IFsyLCAxLCAzXVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZVF1YWRFbGVtZW50cyhhcnJheSwgb3B0KSB7XG4gICAgLy9pZiB1c2VyIGRpZG4ndCBzcGVjaWZ5IGFuIG91dHB1dCBhcnJheVxuICAgIGlmICghYXJyYXkgfHwgIShhbkFycmF5KGFycmF5KSB8fCBpc0J1ZmZlcihhcnJheSkpKSB7XG4gICAgICAgIG9wdCA9IGFycmF5IHx8IHt9XG4gICAgICAgIGFycmF5ID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0ID09PSAnbnVtYmVyJykgLy9iYWNrd2FyZHMtY29tcGF0aWJsZVxuICAgICAgICBvcHQgPSB7IGNvdW50OiBvcHQgfVxuICAgIGVsc2VcbiAgICAgICAgb3B0ID0gb3B0IHx8IHt9XG5cbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBvcHQudHlwZSA9PT0gJ3N0cmluZycgPyBvcHQudHlwZSA6ICd1aW50MTYnXG4gICAgdmFyIGNvdW50ID0gdHlwZW9mIG9wdC5jb3VudCA9PT0gJ251bWJlcicgPyBvcHQuY291bnQgOiAxXG4gICAgdmFyIHN0YXJ0ID0gKG9wdC5zdGFydCB8fCAwKSBcblxuICAgIHZhciBkaXIgPSBvcHQuY2xvY2t3aXNlICE9PSBmYWxzZSA/IENXIDogQ0NXLFxuICAgICAgICBhID0gZGlyWzBdLCBcbiAgICAgICAgYiA9IGRpclsxXSxcbiAgICAgICAgYyA9IGRpclsyXVxuXG4gICAgdmFyIG51bUluZGljZXMgPSBjb3VudCAqIDZcblxuICAgIHZhciBpbmRpY2VzID0gYXJyYXkgfHwgbmV3IChkdHlwZSh0eXBlKSkobnVtSW5kaWNlcylcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IDA7IGkgPCBudW1JbmRpY2VzOyBpICs9IDYsIGogKz0gNCkge1xuICAgICAgICB2YXIgeCA9IGkgKyBzdGFydFxuICAgICAgICBpbmRpY2VzW3ggKyAwXSA9IGogKyAwXG4gICAgICAgIGluZGljZXNbeCArIDFdID0gaiArIDFcbiAgICAgICAgaW5kaWNlc1t4ICsgMl0gPSBqICsgMlxuICAgICAgICBpbmRpY2VzW3ggKyAzXSA9IGogKyBhXG4gICAgICAgIGluZGljZXNbeCArIDRdID0gaiArIGJcbiAgICAgICAgaW5kaWNlc1t4ICsgNV0gPSBqICsgY1xuICAgIH1cbiAgICByZXR1cm4gaW5kaWNlc1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9xdWFkLWluZGljZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkdHlwZSkge1xuICBzd2l0Y2ggKGR0eXBlKSB7XG4gICAgY2FzZSAnaW50OCc6XG4gICAgICByZXR1cm4gSW50OEFycmF5XG4gICAgY2FzZSAnaW50MTYnOlxuICAgICAgcmV0dXJuIEludDE2QXJyYXlcbiAgICBjYXNlICdpbnQzMic6XG4gICAgICByZXR1cm4gSW50MzJBcnJheVxuICAgIGNhc2UgJ3VpbnQ4JzpcbiAgICAgIHJldHVybiBVaW50OEFycmF5XG4gICAgY2FzZSAndWludDE2JzpcbiAgICAgIHJldHVybiBVaW50MTZBcnJheVxuICAgIGNhc2UgJ3VpbnQzMic6XG4gICAgICByZXR1cm4gVWludDMyQXJyYXlcbiAgICBjYXNlICdmbG9hdDMyJzpcbiAgICAgIHJldHVybiBGbG9hdDMyQXJyYXlcbiAgICBjYXNlICdmbG9hdDY0JzpcbiAgICAgIHJldHVybiBGbG9hdDY0QXJyYXlcbiAgICBjYXNlICdhcnJheSc6XG4gICAgICByZXR1cm4gQXJyYXlcbiAgICBjYXNlICd1aW50OF9jbGFtcGVkJzpcbiAgICAgIHJldHVybiBVaW50OENsYW1wZWRBcnJheVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZHR5cGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHN0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxubW9kdWxlLmV4cG9ydHMgPSBhbkFycmF5XG5cbmZ1bmN0aW9uIGFuQXJyYXkoYXJyKSB7XG4gIHJldHVybiAoXG4gICAgICAgYXJyLkJZVEVTX1BFUl9FTEVNRU5UXG4gICAgJiYgc3RyLmNhbGwoYXJyLmJ1ZmZlcikgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSdcbiAgICB8fCBBcnJheS5pc0FycmF5KGFycilcbiAgKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuLWFycmF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxuLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cblxuLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS5cbmZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzLWJ1ZmZlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcclxuXHJcbmNsYXNzIElucHV0IHtcclxuXHJcbiAgX2VuYWJsZWQgPSBmYWxzZTtcclxuICBvd25lciA9IG51bGw7XHJcblxyXG4gIF9nbHlwaEluZGV4ID0gbnVsbDtcclxuXHJcbiAgc2V0IGdseXBoSW5kZXgodmFsdWUpIHtcclxuICAgIHRoaXMuX2dseXBoSW5kZXggPSB2YWx1ZTtcclxuXHJcbiAgICBpZiAodGhpcy5fZ2x5cGhJbmRleCA8IDApXHJcbiAgICAgIHRoaXMuX2dseXBoSW5kZXggPSAwO1xyXG5cclxuICAgIGlmICh0aGlzLl9nbHlwaEluZGV4ID4gdGhpcy5vd25lci5sYXlvdXQuZ2x5cGhzLmxlbmd0aClcclxuICAgICAgdGhpcy5fZ2x5cGhJbmRleCA9IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5sZW5ndGg7XHJcblxyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBnbHlwaEluZGV4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dseXBoSW5kZXg7XHJcbiAgfVxyXG5cclxuICBzZXQgZW5hYmxlZCh2YWx1ZSkge1xyXG4gICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcclxuICAgICAgdGhpcy5lbmFibGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGVuYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3Iob3duZXIpIHtcclxuICAgIHRoaXMub3duZXIgPSBvd25lcjtcclxuICAgIHRoaXMubWV0cmljcyA9IG93bmVyLm1ldHJpY3M7XHJcbiAgICB0aGlzLmxheW91dCA9IG93bmVyLmxheW91dDtcclxuXHJcbiAgICB0aGlzLmNyZWF0ZUZpZWxkKCk7XHJcbiAgICB0aGlzLmRpc2FibGUoKTtcclxuICB9XHJcblxyXG4gIGVuYWJsZSgpIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZSgpIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgfVxyXG5cclxuICBoaWRlKCkge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICB9XHJcblxyXG4gIHNob3coKSB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlRmllbGQoKSB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuaW5wdXRFbGVtZW50KTtcclxuXHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgLy90aGlzLmlucHV0RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLDAsMCwwLjMpJztcclxuXHJcblxyXG5cclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuY29udGFpbiA9ICdzcnRpY3QnO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuekluZGV4ID0gMjtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmNvbG9yID0gdGhpcy5vd25lci5zdHlsZS5maWxsO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUubWFyZ2luTGVmdCA9IFwiMHB4XCI7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW49IFwiYm90dG9tIGxlZnRcIjtcclxuXHJcblxyXG4gICAgdGhpcy5hZGRFdmVudChcImJsdXJcIiwgKGV2ZW50KSA9PiB0aGlzLmlucHV0RWxlbWVudC5mb2N1cygpKTtcclxuICAgIHRoaXMuYWRkRXZlbnQoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHRoaXMub25JbnB1dChldmVudCkpO1xyXG4gICAgdGhpcy5hZGRFdmVudChcImtleWRvd25cIiwgKGV2ZW50KSA9PiB0aGlzLm9uS2V5ZG93bihldmVudCkpXHJcbiAgfVxyXG5cclxuICB1cGRhdGUoKSB7XHJcblxyXG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5vd25lci5tZXRyaWNzO1xyXG4gICAgdGhpcy5sYXlvdXQgPSB0aGlzLm93bmVyLmxheW91dDtcclxuXHJcbiAgICBjb25zdCB7Z2x5cGhzfSA9IHRoaXMub3duZXIubGF5b3V0O1xyXG5cclxuICAgIC8vIERlZmF1bHQgY2FyZXQgcGxhY2UgLSBzdGFydCBvZiB0aGUgaW5wdXQgZmllbGQgVE9ETyBpbXBsZW1lbnQgYWxpZ25cclxuICAgIGxldCBnbHlwaE1ldHJpY3MgPSB7eDogMCwgeTogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHR9O1xyXG5cclxuICAgIC8vIGlmIHN0cmluZyBpcyBlbXB0eSwgcHV0IGNhcmV0IGF0IHRoZSBiZWdpbm5pbmdcclxuICAgIGlmICh0aGlzLm93bmVyLmxheW91dC5nbHlwaHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKFwiZW1wbHkgbGluZVwiKTtcclxuXHJcblxyXG4gICAgICAvLyBpZiB3ZSBvbiB0aGUgbGFzdCBnbHlwaCwgcGxhY2UgY2FyZXQgYWZ0ZXIgaXRcclxuICAgIH1lbHNlIGlmICh0aGlzLmdseXBoSW5kZXggPT09IGdseXBocy5sZW5ndGgpIHtcclxuICAgICAgY29uc3QgbGFzdEdseXBoID0gZ2x5cGhzW2dseXBocy5sZW5ndGggLSAxXTtcclxuICAgICAgZ2x5cGhNZXRyaWNzLnggPSBsYXN0R2x5cGgubWV0cmljcy54ICsgbGFzdEdseXBoLm1ldHJpY3Mud2lkdGg7XHJcbiAgICAgIGdseXBoTWV0cmljcy55ID0gbGFzdEdseXBoLm1ldHJpY3MueTtcclxuXHJcbiAgICAgIC8vIGlmIGNhcmV0IGluIHRoZSBtaWRkbGUgb2YgdGhlIHRleHRcclxuICAgIH0gZWxzZSBpZiAodGhpcy5nbHlwaEluZGV4ICE9PSBudWxsKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkR2x5cGggPSBnbHlwaHNbdGhpcy5nbHlwaEluZGV4XTtcclxuICAgICAgZ2x5cGhNZXRyaWNzID0gey4uLnNlbGVjdGVkR2x5cGgubWV0cmljc307XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5zZXRQb3NpdGlvbihnbHlwaE1ldHJpY3MueCAsIGdseXBoTWV0cmljcy55KTtcclxuXHJcbiAgICB0aGlzLnNldFNjYWxlKHRoaXMub3duZXIuc2NhbGUueCwgdGhpcy5vd25lci5zY2FsZS55KTtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LmZvY3VzKCk7XHJcbiAgfVxyXG5cclxuICBvbklucHV0KGV2ZW50KSB7XHJcblxyXG4gICAgY29uc3QgeyByYW5nZSB9ID0gdGhpcy5vd25lci5zZWxlY3Q7XHJcblxyXG4gICAgLy8gSWYgdXNlciBzZWxlY3RlZCBzb21lIHRleHQsIHJlbW92ZSBpdFxyXG4gICAgaWYgKHJhbmdlWzBdICE9PSByYW5nZVsxXSAmJiByYW5nZVsxXSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLmdseXBoSW5kZXggPSBNYXRoLm1pbihyYW5nZVswXSwgcmFuZ2VbMV0pO1xyXG4gICAgICBjb25zdCByZW1vdmVJbmRleCA9IE1hdGgubWluLmFwcGx5KG51bGwsIHJhbmdlKTtcclxuICAgICAgY29uc3QgcmVtb3ZlTGVuZ3RoID0gTWF0aC5hYnMocmFuZ2VbMF0gLSByYW5nZVsxXSk7XHJcbiAgICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKDAsZmFsc2UpO1xyXG4gICAgICB0aGlzLm93bmVyLnJlbW92ZVN0cmluZyhyZW1vdmVJbmRleCwgcmVtb3ZlTGVuZ3RoKTtcclxuICAgICAgdGhpcy5zaG93KCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAvL3RoaXMuZ2x5cGhJbmRleCsrO1xyXG4gICAgfVxyXG5cclxuICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgLy8gSWYgdGV4dCBpcyBlbXB0eSBub3dcclxuICAgIGlmICh0aGlzLm93bmVyLmxheW91dC5nbHlwaHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMub3duZXIudGV4dCA9IGV2ZW50LmRhdGE7XHJcbiAgICAgIHRoaXMuZ2x5cGhJbmRleCA9IDE7XHJcblxyXG4gICAgLy8gSWYgY2FyZXQgaXMgYXQgdGhlIGVuZCBvZiB0aGUgdGV4dFxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmdseXBoSW5kZXggPT09IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5sZW5ndGggLSAxKSB7XHJcbiAgICAgIHRoaXMub3duZXIudGV4dCArPSBldmVudC5kYXRhO1xyXG4gICAgICB0aGlzLmdseXBoSW5kZXgrKztcclxuXHJcbiAgICAvLyBJZiB3ZSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBsaW5lXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm93bmVyLmluc2VydFN0cmluZyh0aGlzLmdseXBoSW5kZXgsIGV2ZW50LmRhdGEpO1xyXG4gICAgICB0aGlzLmdseXBoSW5kZXgrKztcclxuICAgIH1cclxuICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKDAsIGZhbHNlKTtcclxuXHJcbiAgfVxyXG5cclxuICBvbktleWRvd24oZXZlbnQpIHtcclxuXHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xyXG4gICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XHJcblxyXG4gICAgICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKDAsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICB0aGlzLmdseXBoSW5kZXgtLTtcclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XHJcblxyXG4gICAgICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKDAsIGZhbHNlKTtcclxuICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICB0aGlzLmdseXBoSW5kZXgrKztcclxuXHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjpcclxuXHJcbiAgICAgICAgY29uc3Qge3JhbmdlfSA9IHRoaXMub3duZXIuc2VsZWN0O1xyXG5cclxuXHJcbiAgICAgICAgaWYgKHJhbmdlWzFdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICB0aGlzLmdseXBoSW5kZXggPSBNYXRoLm1pbihyYW5nZVswXSwgcmFuZ2VbMV0pO1xyXG4gICAgICAgICAgY29uc3QgcmVtb3ZlSW5kZXggPSBNYXRoLm1pbi5hcHBseShudWxsLCByYW5nZSk7XHJcbiAgICAgICAgICBjb25zdCByZW1vdmVMZW5ndGggPSBNYXRoLmFicyhyYW5nZVswXSAtIHJhbmdlWzFdKTtcclxuICAgICAgICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKDAsZmFsc2UpO1xyXG4gICAgICAgICAgdGhpcy5vd25lci5yZW1vdmVTdHJpbmcocmVtb3ZlSW5kZXgsIHJlbW92ZUxlbmd0aCk7XHJcbiAgICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm93bmVyLnJlbW92ZVN0cmluZygtLXRoaXMuZ2x5cGhJbmRleCAsIDApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy90aGlzLmdseXBoSW5kZXgtLTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgbmV3UG9zaXRpb24gPSBudWxsO1xyXG5cclxuICAgIGNvbnN0IGlucHV0RXZlbnQgPSBuZXcgRXZlbnQoXCJzZWxlY3Rpb25jaGFuZ2VcIik7XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5pbnB1dEVsZW1lbnQuZGlzcGF0Y2hFdmVudChpbnB1dEV2ZW50KSk7XHJcbiAgICAvL2NvbnNvbGUubG9nKGV2ZW50LmtleSk7XHJcbiAgfVxyXG5cclxuICBzZXRQb3NpdGlvbih4LCB5KSB7XHJcblxyXG4gICAgY29uc29sZS5sb2codGhpcy5vd25lci5zY2FsZSk7XHJcblxyXG4gICAgeCAqPSB0aGlzLm93bmVyLnNjYWxlLng7XHJcbiAgICB5ICo9IHRoaXMub3duZXIuc2NhbGUueTtcclxuXHJcbiAgICBsZXQgdG9wID0geSAtIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xyXG4gICAgbGV0IG9mZnNldCA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICAtIHRoaXMubWV0cmljcy5hc2NlbnQ7XHJcblxyXG4gICAgdG9wICs9IG9mZnNldDtcclxuXHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7eH1weGA7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS50b3AgPSBgJHt0b3B9cHhgO1xyXG4gIH1cclxuXHJcbiAgc2V0U2NhbGUoeCwgeSkge1xyXG4gICAgY29uc3Qgb2Zmc2V0ID0gKHRoaXMubWV0cmljcy5saW5lSGVpZ2h0IC0gdGhpcy5tZXRyaWNzLmFzY2VudCk7XHJcblxyXG4gICAgbGV0IHRvcCA9IHkgLSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcclxuICAgIGxldCBsaW5lSGVpZ2h0ID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgO1xyXG4gICAgLy90b3AgKz0gb2Zmc2V0O1xyXG5cclxuXHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5oZWlnaHQgPSBsaW5lSGVpZ2h0ICsgXCJweFwiXHJcblxyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYHNjYWxlKCR7eH0pYDtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gKHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICogeSkgKyBcInB4XCJcclxuICB9XHJcblxyXG4gIGFkZEV2ZW50KGV2ZW50LCBjYWxsYmFjaykge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLl9lbmFibGVkKSB7XHJcbiAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2lucHV0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxuYXR0cmlidXRlIHZlYzIgYVZlcnRleFBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWMyIGFUZXh0dXJlQ29vcmQ7XFxuYXR0cmlidXRlIGZsb2F0IGFTZGZTaXplO1xcblxcbnVuaWZvcm0gbWF0MyB0cmFuc2xhdGlvbk1hdHJpeDtcXG51bmlmb3JtIG1hdDMgcHJvamVjdGlvbk1hdHJpeDtcXG51bmlmb3JtIGZsb2F0IHNkZk11bHRpcGxpZXI7XFxuXFxudmFyeWluZyB2ZWMyICB0YzA7XFxudmFyeWluZyBmbG9hdCBkb2Zmc2V0O1xcbnZhcnlpbmcgZmxvYXQgc2RmX3RleGVsO1xcblxcblxcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuXFxuICAgIC8vVE9ETyBNQUtFIEFUVFJJQlVURVxcbiAgICBmbG9hdCBzZGZfc2l6ZSA9IGFTZGZTaXplICogc2RmTXVsdGlwbGllcjtcXG5cXG4gICAgLy9UT0RPIE1BS0UgVU5JRk9STVNcXG4gICAgZmxvYXQgc2RmX3RleF9zaXplID0gMTAyNC4wO1xcblxcblxcbiAgICB0YzAgPSBhVGV4dHVyZUNvb3JkO1xcbiAgICBkb2Zmc2V0ID0gMS4wIC8gc2RmX3NpemU7ICAgICAgIC8vIERpc3RhbmNlIGZpZWxkIGRlbHRhIGZvciBvbmUgc2NyZWVuIHBpeGVsXFxuICAgIHNkZl90ZXhlbCA9IDEuMCAvIHNkZl90ZXhfc2l6ZTtcXG5cXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KChwcm9qZWN0aW9uTWF0cml4ICogdHJhbnNsYXRpb25NYXRyaXggKiB2ZWMzKGFWZXJ0ZXhQb3NpdGlvbiAsIDEuMCkpLnh5LCAwLjAsIDEuMCk7XFxuXFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy90ZXh0L3ZlcnQuZ2xzbFxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxudW5pZm9ybSBzYW1wbGVyMkQgdVNhbXBsZXI7XFxudW5pZm9ybSBmbG9hdCBoaW50X2Ftb3VudDtcXG51bmlmb3JtIGZsb2F0IHN1YnBpeGVsX2Ftb3VudDtcXG5cXG51bmlmb3JtIHZlYzMgYmdfY29sb3I7XFxudW5pZm9ybSB2ZWMzIGZvbnRfY29sb3I7XFxuXFxudmFyeWluZyB2ZWMyICB0YzA7XFxudmFyeWluZyBmbG9hdCBkb2Zmc2V0O1xcbnZhcnlpbmcgZmxvYXQgc2RmX3RleGVsO1xcblxcblxcbi8qXFxuICogIFN1YnBpeGVsIGNvdmVyYWdlIGNhbGN1bGF0aW9uXFxuICpcXG4gKiAgdiAtIGVkZ2Ugc2xvcGUgICAgLTEuMCB0byAxLjAgICAgICAgICAgdHJpcGxldFxcbiAqICBhIC0gcGl4ZWwgY292ZXJhZ2UgMC4wIHRvIDEuMCAgICAgICAgICBjb3ZlcmFnZVxcbiAqXFxuICogICAgICB8PC0gZ2x5cGggZWRnZSAgICAgICAgICAgICAgICAgICAgICBSICBHICBCXFxuICogICstLS0rLS0tKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tKy0tKy0tK1xcbiAqICB8ICAgfFhYWHwgdiA9IDEuMCAoZWRnZSBmYWNpbmcgd2VzdCkgIHwgIHx4eHxYWHxcXG4gKiAgfCAgIHxYWFh8IGEgPSAwLjUgKDUwJSBjb3ZlcmFnZSkgICAgICB8ICB8eHh8WFh8XFxuICogIHwgICB8WFhYfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgfHh4fFhYfFxcbiAqICArLS0tKy0tLSsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLSstLSstLStcXG4gKiAgICBwaXhlbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCAgNTAgMTAwXFxuICpcXG4gKlxcbiAqICAgICAgICBSICAgRyAgIEJcXG4gKlxcbiAqICAgMS4wICAgICAgICArLS0rICAgPC0gdG9wIChhYnMoIHYgKSlcXG4gKiAgICAgICAgICAgICAgfFxcbiAqICAgICAgIC0rLS0tLS0rLS0rLS0gPC0gY2VpbDogMTAwJSBjb3ZlcmFnZVxcbiAqICAgICAgICB8ICAgICB8WFh8XFxuICogICAwLjAgIHwgICstLStYWHxcXG4gKiAgICAgICAgfCAgfHh4fFhYfFxcbiAqICAgICAgIC0rLS0rLS0rLS0rLS0gPC0gZmxvb3I6IDAlIGNvdmVyYWdlXFxuICogICAgICAgICAgIHxcXG4gKiAgLTEuMCAgKy0tKyAgICAgICAgIDwtICAtYWJzKHYpXFxuICogICAgICAgIHxcXG4gKiAgICAgICAgfFxcbiAqICAgICAgICB8XFxuICogIC0yLjAgICsgICAgICAgICAgICA8LSBib3R0b206IC1hYnModiktMS4wXFxuICovXFxuXFxudmVjMyBzdWJwaXhlbCggZmxvYXQgdiwgZmxvYXQgYSApIHtcXG4gICAgZmxvYXQgdnQgICAgICA9IDAuNiAqIHY7IC8vIDEuMCB3aWxsIG1ha2UgeW91ciBleWVzIGJsZWVkXFxuICAgIHZlYzMgIHJnYl9tYXggPSB2ZWMzKCAtdnQsIDAuMCwgdnQgKTtcXG4gICAgZmxvYXQgdG9wICAgICA9IGFicyggdnQgKTtcXG4gICAgZmxvYXQgYm90dG9tICA9IC10b3AgLSAxLjA7XFxuICAgIGZsb2F0IGNmbG9vciAgPSBtaXgoIHRvcCwgYm90dG9tLCBhICk7XFxuICAgIHZlYzMgIHJlcyAgICAgPSBjbGFtcCggcmdiX21heCAtIHZlYzMoIGNmbG9vciApLCAwLjAsIDEuMCApO1xcbiAgICByZXR1cm4gcmVzO1xcbn1cXG5cXG52b2lkIG1haW4yKCkge1xcbiAgICBnbF9GcmFnQ29sb3IgPSB0ZXh0dXJlMkQodVNhbXBsZXIsIHRjMCk7XFxufVxcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuXFxuICAgIC8vIFNhbXBsaW5nIHRoZSB0ZXh0dXJlLCBMIHBhdHRlcm5cXG4gICAgZmxvYXQgc2RmICAgICAgID0gdGV4dHVyZTJEKCB1U2FtcGxlciwgdGMwICkucjtcXG4gICAgZmxvYXQgc2RmX25vcnRoID0gdGV4dHVyZTJEKCB1U2FtcGxlciwgdGMwICsgdmVjMiggMC4wLCBzZGZfdGV4ZWwgKSApLnI7XFxuICAgIGZsb2F0IHNkZl9lYXN0ICA9IHRleHR1cmUyRCggdVNhbXBsZXIsIHRjMCArIHZlYzIoIHNkZl90ZXhlbCwgMC4wICkgKS5yO1xcblxcbiAgICAvLyBFc3RpbWF0aW5nIHN0cm9rZSBkaXJlY3Rpb24gYnkgdGhlIGRpc3RhbmNlIGZpZWxkIGdyYWRpZW50IHZlY3RvclxcbiAgICB2ZWMyICBzZ3JhZCAgICAgPSB2ZWMyKCBzZGZfZWFzdCAtIHNkZiwgc2RmX25vcnRoIC0gc2RmICk7XFxuICAgIGZsb2F0IHNncmFkX2xlbiA9IG1heCggbGVuZ3RoKCBzZ3JhZCApLCAxLjAgLyAxMjguMCApO1xcbiAgICB2ZWMyICBncmFkICAgICAgPSBzZ3JhZCAvIHZlYzIoIHNncmFkX2xlbiApO1xcbiAgICBmbG9hdCB2Z3JhZCA9IGFicyggZ3JhZC55ICk7IC8vIDAuMCAtIHZlcnRpY2FsIHN0cm9rZSwgMS4wIC0gaG9yaXpvbnRhbCBvbmVcXG5cXG4gICAgZmxvYXQgaG9yel9zY2FsZSAgPSAxLjE7IC8vIEJsdXJyaW5nIHZlcnRpY2FsIHN0cm9rZXMgYWxvbmcgdGhlIFggYXhpcyBhIGJpdFxcbiAgICBmbG9hdCB2ZXJ0X3NjYWxlICA9IDAuNjsgLy8gV2hpbGUgYWRkaW5nIHNvbWUgY29udHJhc3QgdG8gdGhlIGhvcml6b250YWwgc3Ryb2tlc1xcbiAgICBmbG9hdCBoZG9mZnNldCAgICA9IG1peCggZG9mZnNldCAqIGhvcnpfc2NhbGUsIGRvZmZzZXQgKiB2ZXJ0X3NjYWxlLCB2Z3JhZCApO1xcbiAgICBmbG9hdCByZXNfZG9mZnNldCA9IG1peCggZG9mZnNldCwgaGRvZmZzZXQsIGhpbnRfYW1vdW50ICk7XFxuXFxuICAgIGZsb2F0IGFscGhhICAgICAgID0gc21vb3Roc3RlcCggMC41IC0gcmVzX2RvZmZzZXQsIDAuNSArIHJlc19kb2Zmc2V0LCBzZGYgKTtcXG5cXG4gICAgLy8gQWRkaXRpb25hbCBjb250cmFzdFxcbiAgICBhbHBoYSAgICAgICAgICAgICA9IHBvdyggYWxwaGEsIDEuMCArIDAuMiAqIHZncmFkICogaGludF9hbW91bnQgKTtcXG5cXG4gICAgLy8gVW5mb3J0dW5hdGVseSB0aGVyZSBpcyBubyBzdXBwb3J0IGZvciBBUkJfYmxlbmRfZnVuY19leHRlbmRlZCBpbiBXZWJHTC5cXG4gICAgLy8gRm9ydHVuYXRlbHkgdGhlIGJhY2tncm91bmQgaXMgZmlsbGVkIHdpdGggYSBzb2xpZCBjb2xvciBzbyB3ZSBjYW4gZG9cXG4gICAgLy8gdGhlIGJsZW5kaW5nIGluc2lkZSB0aGUgc2hhZGVyLlxcblxcbiAgICAvLyBEaXNjYXJkaW5nIHBpeGVscyBiZXlvbmQgYSB0aHJlc2hvbGQgdG8gbWluaW1pc2UgcG9zc2libGUgYXJ0aWZhY3RzLlxcbiAgICBpZiAoIGFscGhhIDwgMjAuMCAvIDI1Ni4wICkgZGlzY2FyZDtcXG5cXG4gICAgdmVjMyBjaGFubmVscyA9IHN1YnBpeGVsKCBncmFkLnggKiAwLjUgKiBzdWJwaXhlbF9hbW91bnQsIGFscGhhICkgKyAwLjE7XFxuXFxuICAgIC8vIEZvciBzdWJwaXhlbCByZW5kZXJpbmcgd2UgaGF2ZSB0byBibGVuZCBlYWNoIGNvbG9yIGNoYW5uZWwgc2VwYXJhdGVseVxcbiAgICB2ZWMzIHJlcyA9IG1peCggYmdfY29sb3IsIGZvbnRfY29sb3IsIGNoYW5uZWxzICk7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoIHJlcywgMS4wICk7XFxufVxcblxcblxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy90ZXh0L2ZyYWcuZ2xzbFxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxuYXR0cmlidXRlIHZlYzIgYVZlcnRleFBvc2l0aW9uO1xcblxcbnVuaWZvcm0gbWF0MyB0cmFuc2xhdGlvbk1hdHJpeDtcXG51bmlmb3JtIG1hdDMgcHJvamVjdGlvbk1hdHJpeDtcXG5cXG52b2lkIG1haW4odm9pZCkge1xcblxcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQoKHByb2plY3Rpb25NYXRyaXggKiB0cmFuc2xhdGlvbk1hdHJpeCAqIHZlYzMoYVZlcnRleFBvc2l0aW9uICwgMS4wKSkueHksIDAuMCwgMS4wKTtcXG5cXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL3NlbGVjdC92ZXJ0Lmdsc2xcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbnVuaWZvcm0gdmVjMyBiZ19jb2xvcjtcXG52YXJ5aW5nIHZlYzIgIHRjMDtcXG5cXG52b2lkIG1haW4oKSB7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoYmdfY29sb3IsMC40NSk7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMS4wLCAxLjAsIDEuMCwwLjIpO1xcbn1cXG5cXG5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvc2VsZWN0L2ZyYWcuZ2xzbFxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==