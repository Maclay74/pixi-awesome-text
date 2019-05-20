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
	
	    var editable = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
	
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
	    _this.editable = editable; // Calcualte layout
	
	    _this.layout = new _layout["default"](_assertThisInitialized(_this), {
	      fontSize: _this.style.fontSize,
	      wrapWords: _this.style.breakWords,
	      wrapperWidth: _this.style.wordWrapWidth,
	      align: _this.style.align,
	      lineHeight: _this.style.lineHeight
	    });
	
	    if (_this.editable) {
	      _this.interactive = true;
	      _this.buttonMode = true;
	      _this.select = new _select["default"](_assertThisInitialized(_this));
	      _this.input = new _input["default"](_assertThisInitialized(_this));
	
	      _this.setState(AwesomeText.states.regular);
	    }
	
	    return _this;
	  }
	
	  _createClass(AwesomeText, [{
	    key: "update",
	    value: function update() {
	      var _this2 = this;
	
	      this.metrics = this.fontMetrics(this.style.fontSize);
	      this.layout.update();
	
	      if (this.editable) {
	        this.select.update();
	        this.input.update();
	      } // Arrays for vertices, uvs and sdf
	
	
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
	      if (!this.editable) {
	        return;
	      }
	
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3YzgzZWQ4MWU2MzBiZGI5NmJkZiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2R0eXBlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYW4tYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvdmVydC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvZnJhZy5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3NlbGVjdC92ZXJ0Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvc2VsZWN0L2ZyYWcuZ2xzbCJdLCJuYW1lcyI6WyJPYmplY3QiLCJhc3NpZ24iLCJQSVhJIiwiZXh0cmFzIiwiQXdlc29tZVRleHQiLCJUZXh0IiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJzZWxlY3RWZXJ0ZXh0U2hhZGVyIiwic2VsZWN0RnJhZ21lbnRTaGFkZXIiLCJnbENvcmUiLCJBd2Vzb21lVGV4dFJlbmRlcmVyIiwicmVuZGVyZXIiLCJ0ZXh0U2hhZGVyIiwic2VsZWN0U2hhZGVyIiwiZ2wiLCJnZXRFeHRlbnNpb24iLCJTaGFkZXIiLCJzb3VyY2UiLCJnbERhdGEiLCJfZ2xEYXRhcyIsImNvbnRleHRUZXh0IiwiYmluZFZhbyIsImJ1aWxkVGV4dEdsRGF0YSIsInZhbyIsImRpcnR5IiwidXZCdWZmZXIiLCJ1cGxvYWQiLCJ1dnMiLCJpbmRleERpcnR5IiwiaW5kZXhCdWZmZXIiLCJpbmRpY2VzIiwidmVydGV4QnVmZmVyIiwidmVydGljZXMiLCJiaW5kU2hhZGVyIiwic2hhZGVyIiwic3RhdGUiLCJzZXRCbGVuZE1vZGUiLCJibGVuZE1vZGUiLCJ1bmlmb3JtcyIsInVTYW1wbGVyIiwiYmluZFRleHR1cmUiLCJ0ZXh0dXJlIiwidHJhbnNsYXRpb25NYXRyaXgiLCJ3b3JsZFRyYW5zZm9ybSIsInRvQXJyYXkiLCJoaW50X2Ftb3VudCIsInNkZk11bHRpcGxpZXIiLCJzY2FsZSIsInN1YnBpeGVsX2Ftb3VudCIsImZvbnRfY29sb3IiLCJ1dGlscyIsImhleDJyZ2IiLCJzdHlsZSIsImZpbGwiLCJyZXBsYWNlIiwiYmdfY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkcmF3TW9kZSIsIlRSSUFOR0xFUyIsImRyYXciLCJsZW5ndGgiLCJjb250ZXh0U2VsZWN0Iiwic2VsZWN0IiwiYnVpbGRTZWxlY3RHbERhdGEiLCJzZWxlY3RDb2xvciIsInN0eWxlSUQiLCJ1cGRhdGUiLCJzdGF0ZXMiLCJlZGl0YWJsZSIsInNlbGVjdGluZyIsInJlbmRlclNlbGVjdCIsInJlbmRlclRleHQiLCJHTEJ1ZmZlciIsImNyZWF0ZVZlcnRleEJ1ZmZlciIsIlNUUkVBTV9EUkFXIiwic2RmQnVmZmVyIiwic2RmU2l6ZXMiLCJTVEFUSUNfRFJBVyIsImNyZWF0ZUluZGV4QnVmZmVyIiwiVmVydGV4QXJyYXlPYmplY3QiLCJhZGRJbmRleCIsImFkZEF0dHJpYnV0ZSIsImF0dHJpYnV0ZXMiLCJhVmVydGV4UG9zaXRpb24iLCJGTE9BVCIsImFUZXh0dXJlQ29vcmQiLCJhU2RmU2l6ZSIsIk9iamVjdFJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsInJlZ2lzdGVyUGx1Z2luIiwiY3JlYXRlSW5kaWNlcyIsInRleHQiLCJmb250IiwicmVndWxhciIsIlRleHRTdHlsZSIsIl90ZXh0IiwiX2ZvbnQiLCJfdGV4dHVyZSIsImxheW91dCIsIlRleHRMYXlvdXQiLCJmb250U2l6ZSIsIndyYXBXb3JkcyIsImJyZWFrV29yZHMiLCJ3cmFwcGVyV2lkdGgiLCJ3b3JkV3JhcFdpZHRoIiwiYWxpZ24iLCJsaW5lSGVpZ2h0IiwiaW50ZXJhY3RpdmUiLCJidXR0b25Nb2RlIiwiU2VsZWN0IiwiaW5wdXQiLCJJbnB1dCIsInNldFN0YXRlIiwibWV0cmljcyIsImZvbnRNZXRyaWNzIiwiRmxvYXQzMkFycmF5IiwibGV0dGVyc0NvdW50IiwiYXJyYXlQb3NpdGlvbnMiLCJ2ZXJ0ZXgiLCJzZGYiLCJ3b3Jkc01ldHJpY3MiLCJmb3JFYWNoIiwid29yZCIsIndyaXRlU3RyaW5nIiwieCIsInkiLCJjbG9ja3dpc2UiLCJ0eXBlIiwiY291bnQiLCJuZXdTdGF0ZSIsInZhbHVlcyIsInNldFJlZ3VsYXJTdGF0ZSIsInNldEVkaXRhYmxlU3RhdGUiLCJjdXJyZW50RWRpdGluZ0VsZW1lbnQiLCJvZmYiLCJlbmFibGVkIiwib24iLCJlIiwiY2xpY2tzQ291bnQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsInNldFJhbmdlIiwiaW5wdXRFbGVtZW50IiwiZm9jdXMiLCJvbk1vdXNlRG93biIsInNob3ciLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsImluZGV4Iiwic3RyaW5nIiwic3Vic3RyIiwibmV3VGV4dCIsInNwbGl0Iiwic3BsaWNlIiwiam9pbiIsImZvbnRfbWV0cmljcyIsInBvcyIsInByZXZfY2hhciIsImNwb3MiLCJ4X21heCIsImNhcFNjYWxlIiwic3RyX3BvcyIsInNjaGFyIiwiZm9udF9jaGFyIiwiY2hhcnMiLCJrZXJuIiwicmVjdCIsImNoYXJSZWN0IiwicG9zaXRpb25zIiwibWFwIiwidXYiLCJzdHJpbmdfcG9zIiwibW9yZUxpbmVHYXAiLCJjYXBfaGVpZ2h0IiwieF9oZWlnaHQiLCJmb250QXNjZW50IiwiYXNjZW50IiwiZGVzY2VudCIsImxpbmVfZ2FwIiwibG93U2NhbGUiLCJNYXRoIiwicm91bmQiLCJsb3djYXNlIiwiZmxhZ3MiLCJiYXNlbGluZSIsImciLCJib3R0b20iLCJpeSIsInRvcCIsInJvd19oZWlnaHQiLCJsZWZ0IiwiYmVhcmluZ194IiwiaXgiLCJyaWdodCIsInAiLCJuZXdfcG9zX3giLCJhZHZhbmNlX3giLCJzZGZfc2l6ZSIsInZhbHVlIiwibWVzaCIsIk1lc2giLCJvd25lciIsImNvbmZpZyIsInN0YXJ0WSIsImNhbGN1bGF0ZVdvcmRzUG9zaXRpb25zIiwiZ2x5cGhzIiwiZ2V0R2x5cGhzIiwid2lkdGgiLCJoZWlnaHQiLCJjaGFyIiwid29yZHMiLCJpIiwic3RhcnRYIiwid29yZFNpemUiLCJnZXRTdHJpbmdTaXplIiwicHVzaCIsImxpbmVzQ291bnQiLCJ3b3Jkc09uTGluZSIsImZpbHRlciIsImxhc3RXb3JkIiwiZnJlZVNwYWNlIiwibGVmdE9mZnNldCIsImxldHRlciIsInBvc2l0aW9uIiwicmFuZ2UiLCJidWlsZFZlcnRpY2VzIiwic3RhcnQiLCJlbmQiLCJtaW4iLCJhcHBseSIsIm1heCIsImxldHRlckNvdW50IiwiZmlyc3RMZXR0ZXIiLCJsYXN0TGV0dGVyIiwic3RhcnRMaW5lTGV0dGVyIiwiZW5kTGluZUxldHRlciIsIm9mZnNldCIsInNlbGVjdGluZ0xpbmUiLCJmbG9vciIsInNlbGVjdGluZ0xpbmVZIiwibGFzdEdseXBoT25MaW5lIiwiZmlyc3RHbHlwaE9uTGluZSIsImdseXBoIiwiZXZlbnQiLCJkYXRhIiwiYnV0dG9uIiwiZ2xvYmFsIiwiY2xvc2VzdExldHRlciIsImdldENsb3Nlc3RHbHlwaCIsImluZGV4T2YiLCJnbHlwaEluZGV4IiwiX2dseXBoSW5kZXgiLCJfZW5hYmxlZCIsImVuYWJsZSIsImRpc2FibGUiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY3JlYXRlRmllbGQiLCJkaXNwbGF5IiwiYm9keSIsImFwcGVuZCIsImNvbnRhaW5zIiwicmVtb3ZlQ2hpbGQiLCJvcGFjaXR5IiwiY3JlYXRlRWxlbWVudCIsInRyYW5zZm9ybSIsInNsaWNlIiwiY29sb3IiLCJib3JkZXIiLCJjb250YWluIiwiekluZGV4IiwicG9pbnRlckV2ZW50cyIsIm91dGxpbmUiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJwYWRkaW5nIiwiYWRkRXZlbnQiLCJvbklucHV0Iiwib25LZXlkb3duIiwiZ2x5cGhNZXRyaWNzIiwibGFzdEdseXBoIiwic2VsZWN0ZWRHbHlwaCIsInNldFBvc2l0aW9uIiwicmVtb3ZlSW5kZXgiLCJyZW1vdmVMZW5ndGgiLCJhYnMiLCJyZW1vdmVTdHJpbmciLCJ0YXJnZXQiLCJpbnNlcnRTdHJpbmciLCJrZXkiLCJjdHJsS2V5Iiwic2NhbGVYIiwiYSIsInNjYWxlWSIsImQiLCJsb2NhbFgiLCJsb2NhbFkiLCJnZXRUcmFuc2Zvcm0iLCJvd25lclRyYW5zZm9ybSIsImNhbnZhc1JlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0eCIsInR5IiwiY2FsbGJhY2siLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQUEsT0FBTSxDQUFDQyxNQUFQLENBQWNDLElBQUksQ0FBQ0MsTUFBbkIsRUFBMkI7QUFDekJDLGNBQVcsRUFBRUM7QUFEWSxFQUEzQjs7QUFJQSxLQUFJLE9BQU9ILElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDL0IsT0FBSUEsSUFBSSxDQUFDQyxNQUFULEVBQWlCO0FBQ2ZELFNBQUksQ0FBQ0MsTUFBTCxDQUFZQyxXQUFaLEdBQTBCQyxnQkFBMUI7QUFDRCxJQUZELE1BRU87QUFDTEgsU0FBSSxDQUFDQyxNQUFMLEdBQWM7QUFBRUMsa0JBQVcsRUFBRUM7QUFBZixNQUFkO0FBQ0Q7QUFDRjtBQVFEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU1DLFlBQVksR0FBRyxtQkFBTyxDQUFDLEVBQUQsQ0FBNUI7O0FBQ0EsS0FBTUMsY0FBYyxHQUFHLG1CQUFPLENBQUMsRUFBRCxDQUE5Qjs7QUFFQSxLQUFNQyxtQkFBbUIsR0FBRyxtQkFBTyxDQUFDLEVBQUQsQ0FBbkM7O0FBQ0EsS0FBTUMsb0JBQW9CLEdBQUcsbUJBQU8sQ0FBQyxFQUFELENBQXBDOztBQUVBLEtBQU1DLE1BQU0sR0FBR1IsSUFBSSxDQUFDUSxNQUFwQjs7S0FFTUMsbUI7Ozs7O0FBUUosZ0NBQVlDLFFBQVosRUFBc0I7QUFBQTs7QUFBQTs7QUFDcEIsOEZBQU1BLFFBQU47O0FBRG9CLG1FQUhSLFFBR1E7O0FBRXBCLFdBQUtDLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxXQUFLQyxZQUFMLEdBQW9CLElBQXBCO0FBSG9CO0FBS3JCOzs7O3VDQUVpQjtBQUNoQixXQUFNQyxFQUFFLEdBQUcsS0FBS0gsUUFBTCxDQUFjRyxFQUF6QjtBQUNBQSxTQUFFLENBQUNDLFlBQUgsQ0FBZ0IsMEJBQWhCO0FBQ0EsWUFBS0gsVUFBTCxHQUFrQixJQUFJWCxJQUFJLENBQUNlLE1BQVQsQ0FBZ0JGLEVBQWhCLEVBQW9CVCxZQUFwQixFQUFrQ0MsY0FBbEMsQ0FBbEI7QUFDQSxZQUFLTyxZQUFMLEdBQW9CLElBQUlaLElBQUksQ0FBQ2UsTUFBVCxDQUFnQkYsRUFBaEIsRUFBb0JQLG1CQUFwQixFQUF5Q0Msb0JBQXpDLENBQXBCO0FBQ0Q7OztnQ0FFVVMsTSxFQUFRO0FBRWpCLFdBQUlDLE1BQU0sR0FBR0QsTUFBTSxDQUFDRSxRQUFQLENBQWdCVCxtQkFBbUIsQ0FBQ1UsV0FBcEMsQ0FBYjs7QUFFQSxXQUFJLENBQUNGLE1BQUwsRUFBYTtBQUNYLGNBQUtQLFFBQUwsQ0FBY1UsT0FBZCxDQUFzQixJQUF0QjtBQUNBSCxlQUFNLEdBQUcsS0FBS0ksZUFBTCxDQUFxQkwsTUFBckIsRUFBNkIsS0FBS04sUUFBTCxDQUFjRyxFQUEzQyxDQUFUO0FBQ0FHLGVBQU0sQ0FBQ0UsUUFBUCxDQUFnQlQsbUJBQW1CLENBQUNVLFdBQXBDLElBQW1ERixNQUFuRDtBQUNEOztBQUVELFlBQUtQLFFBQUwsQ0FBY1UsT0FBZCxDQUFzQkgsTUFBTSxDQUFDSyxHQUE3Qjs7QUFFQSxXQUFJTixNQUFNLENBQUNPLEtBQVgsRUFBa0I7QUFDaEJQLGVBQU0sQ0FBQ08sS0FBUCxHQUFlLEtBQWY7QUFDQU4sZUFBTSxDQUFDTyxRQUFQLENBQWdCQyxNQUFoQixDQUF1QlQsTUFBTSxDQUFDVSxHQUE5QjtBQUNEOztBQUVELFdBQUlWLE1BQU0sQ0FBQ1csVUFBWCxFQUF1QjtBQUNyQlgsZUFBTSxDQUFDVyxVQUFQLEdBQW9CLEtBQXBCO0FBQ0FWLGVBQU0sQ0FBQ1csV0FBUCxDQUFtQkgsTUFBbkIsQ0FBMEJULE1BQU0sQ0FBQ2EsT0FBakM7QUFDRDs7QUFFRFosYUFBTSxDQUFDYSxZQUFQLENBQW9CTCxNQUFwQixDQUEyQlQsTUFBTSxDQUFDZSxRQUFsQztBQUNBLFlBQUtyQixRQUFMLENBQWNzQixVQUFkLENBQXlCZixNQUFNLENBQUNnQixNQUFoQztBQUVBLFlBQUt2QixRQUFMLENBQWN3QixLQUFkLENBQW9CQyxZQUFwQixDQUFpQ25CLE1BQU0sQ0FBQ29CLFNBQXhDO0FBRUFuQixhQUFNLENBQUNnQixNQUFQLENBQWNJLFFBQWQsQ0FBdUJDLFFBQXZCLEdBQWtDLEtBQUs1QixRQUFMLENBQWM2QixXQUFkLENBQTBCdkIsTUFBTSxDQUFDd0IsT0FBakMsQ0FBbEM7QUFDQXZCLGFBQU0sQ0FBQ2dCLE1BQVAsQ0FBY0ksUUFBZCxDQUF1QkksaUJBQXZCLEdBQTJDekIsTUFBTSxDQUFDMEIsY0FBUCxDQUFzQkMsT0FBdEIsQ0FBOEIsSUFBOUIsQ0FBM0M7QUFFQTFCLGFBQU0sQ0FBQ2dCLE1BQVAsQ0FBY0ksUUFBZCxDQUF1Qk8sV0FBdkIsR0FBcUMsR0FBckM7QUFDQTNCLGFBQU0sQ0FBQ2dCLE1BQVAsQ0FBY0ksUUFBZCxDQUF1QlEsYUFBdkIsR0FBdUMzQyxpQkFBWTRDLEtBQW5EO0FBQ0E3QixhQUFNLENBQUNnQixNQUFQLENBQWNJLFFBQWQsQ0FBdUJVLGVBQXZCLEdBQXlDLEdBQXpDO0FBQ0E5QixhQUFNLENBQUNnQixNQUFQLENBQWNJLFFBQWQsQ0FBdUJXLFVBQXZCLEdBQW9DaEQsSUFBSSxDQUFDaUQsS0FBTCxDQUFXQyxPQUFYLENBQW1CbEMsTUFBTSxDQUFDbUMsS0FBUCxDQUFhQyxJQUFiLENBQWtCQyxPQUFsQixDQUEwQixHQUExQixFQUErQixJQUEvQixDQUFuQixDQUFwQztBQUNBcEMsYUFBTSxDQUFDZ0IsTUFBUCxDQUFjSSxRQUFkLENBQXVCaUIsUUFBdkIsR0FBa0N0RCxJQUFJLENBQUNpRCxLQUFMLENBQVdDLE9BQVgsQ0FBbUJsQyxNQUFNLENBQUN1QyxlQUFQLENBQXVCRixPQUF2QixDQUErQixHQUEvQixFQUFvQyxJQUFwQyxDQUFuQixDQUFsQztBQUVBLFdBQU1HLFFBQVEsR0FBR3hDLE1BQU0sQ0FBQ3dDLFFBQVAsR0FBa0IsS0FBSzlDLFFBQUwsQ0FBY0csRUFBZCxDQUFpQjRDLFNBQXBEO0FBQ0F4QyxhQUFNLENBQUNLLEdBQVAsQ0FBV29DLElBQVgsQ0FBZ0JGLFFBQWhCLEVBQTBCeEMsTUFBTSxDQUFDYSxPQUFQLENBQWU4QixNQUF6QyxFQUFpRCxDQUFqRDtBQUVEOzs7a0NBRVkzQyxNLEVBQVE7QUFDbkIsV0FBSUMsTUFBTSxHQUFHRCxNQUFNLENBQUNFLFFBQVAsQ0FBZ0JULG1CQUFtQixDQUFDbUQsYUFBcEMsQ0FBYjs7QUFFQSxXQUFJLENBQUMzQyxNQUFELElBQVdELE1BQU0sQ0FBQzZDLE1BQVAsQ0FBY3RDLEtBQTdCLEVBQW9DO0FBQ2xDLGNBQUtiLFFBQUwsQ0FBY1UsT0FBZCxDQUFzQixJQUF0QjtBQUNBSCxlQUFNLEdBQUcsS0FBSzZDLGlCQUFMLENBQXVCOUMsTUFBdkIsRUFBK0IsS0FBS04sUUFBTCxDQUFjRyxFQUE3QyxDQUFUO0FBQ0FHLGVBQU0sQ0FBQ0UsUUFBUCxDQUFnQlQsbUJBQW1CLENBQUNtRCxhQUFwQyxJQUFxRDNDLE1BQXJEO0FBQ0FELGVBQU0sQ0FBQzZDLE1BQVAsQ0FBY3RDLEtBQWQsR0FBc0IsS0FBdEI7QUFDRDs7QUFFRCxZQUFLYixRQUFMLENBQWNVLE9BQWQsQ0FBc0JILE1BQU0sQ0FBQ0ssR0FBN0I7O0FBRUEsV0FBSU4sTUFBTSxDQUFDNkMsTUFBUCxDQUFjbEMsVUFBbEIsRUFBOEI7QUFDNUJYLGVBQU0sQ0FBQzZDLE1BQVAsQ0FBY2xDLFVBQWQsR0FBMkIsS0FBM0I7QUFDQVYsZUFBTSxDQUFDVyxXQUFQLENBQW1CSCxNQUFuQixDQUEwQlQsTUFBTSxDQUFDNkMsTUFBUCxDQUFjaEMsT0FBeEM7QUFDRDs7QUFFRFosYUFBTSxDQUFDYSxZQUFQLENBQW9CTCxNQUFwQixDQUEyQlQsTUFBTSxDQUFDNkMsTUFBUCxDQUFjOUIsUUFBekM7QUFDQSxZQUFLckIsUUFBTCxDQUFjc0IsVUFBZCxDQUF5QmYsTUFBTSxDQUFDZ0IsTUFBaEM7QUFFQSxZQUFLdkIsUUFBTCxDQUFjd0IsS0FBZCxDQUFvQkMsWUFBcEIsQ0FBaUMsRUFBakM7QUFDQWxCLGFBQU0sQ0FBQ2dCLE1BQVAsQ0FBY0ksUUFBZCxDQUF1QkksaUJBQXZCLEdBQTJDekIsTUFBTSxDQUFDMEIsY0FBUCxDQUFzQkMsT0FBdEIsQ0FBOEIsSUFBOUIsQ0FBM0M7QUFDQTFCLGFBQU0sQ0FBQ2dCLE1BQVAsQ0FBY0ksUUFBZCxDQUF1QmlCLFFBQXZCLEdBQWtDdEQsSUFBSSxDQUFDaUQsS0FBTCxDQUFXQyxPQUFYLENBQW1CLEtBQUthLFdBQXhCLENBQWxDO0FBRUEsV0FBTVAsUUFBUSxHQUFHeEMsTUFBTSxDQUFDd0MsUUFBUCxHQUFrQixLQUFLOUMsUUFBTCxDQUFjRyxFQUFkLENBQWlCNEMsU0FBcEQ7QUFDQXhDLGFBQU0sQ0FBQ0ssR0FBUCxDQUFXb0MsSUFBWCxDQUFnQkYsUUFBaEIsRUFBMEJ4QyxNQUFNLENBQUM2QyxNQUFQLENBQWNoQyxPQUFkLENBQXNCOEIsTUFBaEQsRUFBd0QsQ0FBeEQ7QUFDRDs7OzRCQUVNM0MsTSxFQUFRO0FBRWIsV0FBSUEsTUFBTSxDQUFDZ0QsT0FBUCxLQUFtQmhELE1BQU0sQ0FBQ21DLEtBQVAsQ0FBYWEsT0FBcEMsRUFBNkM7QUFDM0NoRCxlQUFNLENBQUNpRCxNQUFQO0FBQ0Q7O0FBRUQsV0FBSWpELE1BQU0sQ0FBQ2tCLEtBQVAsS0FBaUJoQyxpQkFBWWdFLE1BQVosQ0FBbUJDLFFBQXBDLElBQWdEbkQsTUFBTSxDQUFDa0IsS0FBUCxLQUFpQmhDLGlCQUFZZ0UsTUFBWixDQUFtQkUsU0FBeEYsRUFBbUc7QUFDakcsY0FBS0MsWUFBTCxDQUFrQnJELE1BQWxCO0FBQ0Q7O0FBQ0QsWUFBS3NELFVBQUwsQ0FBZ0J0RCxNQUFoQjtBQUNEOzs7cUNBRWVBLE0sRUFBUUgsRSxFQUFJO0FBRTFCLFdBQU1JLE1BQU0sR0FBRztBQUNiZ0IsZUFBTSxFQUFFLEtBQUt0QixVQURBO0FBRWJtQixxQkFBWSxFQUFFdEIsTUFBTSxDQUFDK0QsUUFBUCxDQUFnQkMsa0JBQWhCLENBQW1DM0QsRUFBbkMsRUFBdUNHLE1BQU0sQ0FBQ2UsUUFBOUMsRUFBd0RsQixFQUFFLENBQUM0RCxXQUEzRCxDQUZEO0FBR2JqRCxpQkFBUSxFQUFFaEIsTUFBTSxDQUFDK0QsUUFBUCxDQUFnQkMsa0JBQWhCLENBQW1DM0QsRUFBbkMsRUFBdUNHLE1BQU0sQ0FBQ1UsR0FBOUMsRUFBbURiLEVBQUUsQ0FBQzRELFdBQXRELENBSEc7QUFJYkMsa0JBQVMsRUFBRWxFLE1BQU0sQ0FBQytELFFBQVAsQ0FBZ0JDLGtCQUFoQixDQUFtQzNELEVBQW5DLEVBQXVDRyxNQUFNLENBQUMyRCxRQUE5QyxFQUF3RDlELEVBQUUsQ0FBQytELFdBQTNELENBSkU7QUFLYmhELG9CQUFXLEVBQUVwQixNQUFNLENBQUMrRCxRQUFQLENBQWdCTSxpQkFBaEIsQ0FBa0NoRSxFQUFsQyxFQUFzQ0csTUFBTSxDQUFDYSxPQUE3QyxFQUFzRGhCLEVBQUUsQ0FBQytELFdBQXpELENBTEE7QUFNYjtBQUNBdEQsWUFBRyxFQUFFLElBUFE7QUFRYkMsY0FBSyxFQUFFUCxNQUFNLENBQUNPLEtBUkQ7QUFTYkksbUJBQVUsRUFBRVgsTUFBTSxDQUFDVztBQVROLFFBQWY7QUFZQVYsYUFBTSxDQUFDSyxHQUFQLEdBQWEsSUFBSWQsTUFBTSxDQUFDc0UsaUJBQVgsQ0FBNkJqRSxFQUE3QixFQUNWa0UsUUFEVSxDQUNEOUQsTUFBTSxDQUFDVyxXQUROLEVBRVZvRCxZQUZVLENBRUcvRCxNQUFNLENBQUNhLFlBRlYsRUFFd0JiLE1BQU0sQ0FBQ2dCLE1BQVAsQ0FBY2dELFVBQWQsQ0FBeUJDLGVBRmpELEVBRWtFckUsRUFBRSxDQUFDc0UsS0FGckUsRUFFNEUsS0FGNUUsRUFFbUYsSUFBSSxDQUZ2RixFQUUwRixDQUYxRixFQUdWSCxZQUhVLENBR0cvRCxNQUFNLENBQUNPLFFBSFYsRUFHb0JQLE1BQU0sQ0FBQ2dCLE1BQVAsQ0FBY2dELFVBQWQsQ0FBeUJHLGFBSDdDLEVBRzREdkUsRUFBRSxDQUFDc0UsS0FIL0QsRUFHc0UsS0FIdEUsRUFHNkUsSUFBSSxDQUhqRixFQUdvRixDQUhwRixFQUlWSCxZQUpVLENBSUcvRCxNQUFNLENBQUN5RCxTQUpWLEVBSXFCekQsTUFBTSxDQUFDZ0IsTUFBUCxDQUFjZ0QsVUFBZCxDQUF5QkksUUFKOUMsRUFJd0R4RSxFQUFFLENBQUNzRSxLQUozRCxFQUlrRSxLQUpsRSxFQUl5RSxDQUp6RSxFQUk0RSxDQUo1RSxDQUFiO0FBTUEsY0FBT2xFLE1BQVA7QUFDRDs7O3VDQUVpQkQsTSxFQUFRSCxFLEVBQUk7QUFDNUIsV0FBTUksTUFBTSxHQUFHO0FBQ2JnQixlQUFNLEVBQUUsS0FBS3JCLFlBREE7QUFFYmtCLHFCQUFZLEVBQUV0QixNQUFNLENBQUMrRCxRQUFQLENBQWdCQyxrQkFBaEIsQ0FBbUMzRCxFQUFuQyxFQUF1Q0csTUFBTSxDQUFDNkMsTUFBUCxDQUFjOUIsUUFBckQsRUFBK0RsQixFQUFFLENBQUM0RCxXQUFsRSxDQUZEO0FBR2I3QyxvQkFBVyxFQUFFcEIsTUFBTSxDQUFDK0QsUUFBUCxDQUFnQk0saUJBQWhCLENBQWtDaEUsRUFBbEMsRUFBc0NHLE1BQU0sQ0FBQzZDLE1BQVAsQ0FBY2hDLE9BQXBELEVBQTZEaEIsRUFBRSxDQUFDK0QsV0FBaEUsQ0FIQTtBQUlidEQsWUFBRyxFQUFFO0FBSlEsUUFBZjtBQU9BTCxhQUFNLENBQUNLLEdBQVAsR0FBYSxJQUFJZCxNQUFNLENBQUNzRSxpQkFBWCxDQUE2QmpFLEVBQTdCLEVBQ1ZrRSxRQURVLENBQ0Q5RCxNQUFNLENBQUNXLFdBRE4sRUFFVm9ELFlBRlUsQ0FFRy9ELE1BQU0sQ0FBQ2EsWUFGVixFQUV3QmIsTUFBTSxDQUFDZ0IsTUFBUCxDQUFjZ0QsVUFBZCxDQUF5QkMsZUFGakQsRUFFa0VyRSxFQUFFLENBQUNzRSxLQUZyRSxFQUU0RSxLQUY1RSxFQUVtRixJQUFJLENBRnZGLEVBRTBGLENBRjFGLENBQWI7QUFJQSxjQUFPbEUsTUFBUDtBQUNEOzs7O0dBM0krQmpCLElBQUksQ0FBQ3NGLGM7O2lCQUFqQzdFLG1CLGlCQUVpQixDOztpQkFGakJBLG1CLG1CQUdtQixDOztBQTRJekJULEtBQUksQ0FBQ3VGLGFBQUwsQ0FBbUJDLGNBQW5CLENBQWtDLHFCQUFsQyxFQUF5RC9FLG1CQUF6RDtnQkFFZUEsbUI7Ozs7Ozs7Ozs7Ozs7O0FDMUpmOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFIQSxLQUFNZ0YsYUFBYSxHQUFHLG1CQUFPLENBQUMsQ0FBRCxDQUE3Qjs7S0FLTXZGLFc7Ozs7O0FBVUosd0JBQVl3RixJQUFaLEVBQWtCdkMsS0FBbEIsRUFBeUJ3QyxJQUF6QixFQUFpRDtBQUFBOztBQUFBLFNBQWxCeEIsUUFBa0IsdUVBQVAsS0FBTzs7QUFBQTs7QUFDL0Msc0ZBQU13QixJQUFJLENBQUNuRCxPQUFYOztBQUQrQyxrRUFKcEMscUJBSW9DOztBQUFBLDZEQUh6Q3RDLFdBQVcsQ0FBQ2dFLE1BQVosQ0FBbUIwQixPQUdzQjs7QUFBQSxtRUFGbkMsQ0FFbUM7O0FBRy9DLFdBQUt6QyxLQUFMLEdBQWEsSUFBSW5ELElBQUksQ0FBQzZGLFNBQVQsQ0FBbUIxQyxLQUFuQixDQUFiO0FBQ0EsV0FBS0ksZUFBTCxHQUF1QkosS0FBSyxDQUFDSSxlQUE3QjtBQUNBLFdBQUt1QyxLQUFMLEdBQWFKLElBQWI7QUFDQSxXQUFLSyxLQUFMLEdBQWFKLElBQUksQ0FBQ0EsSUFBbEI7QUFDQSxXQUFLSyxRQUFMLEdBQWdCTCxJQUFJLENBQUNuRCxPQUFyQjtBQUNBLFdBQUsyQixRQUFMLEdBQWdCQSxRQUFoQixDQVIrQyxDQVcvQzs7QUFDQSxXQUFLOEIsTUFBTCxHQUFjLElBQUlDLGtCQUFKLGdDQUFxQjtBQUNqQ0MsZUFBUSxFQUFFLE1BQUtoRCxLQUFMLENBQVdnRCxRQURZO0FBRWpDQyxnQkFBUyxFQUFFLE1BQUtqRCxLQUFMLENBQVdrRCxVQUZXO0FBR2pDQyxtQkFBWSxFQUFFLE1BQUtuRCxLQUFMLENBQVdvRCxhQUhRO0FBSWpDQyxZQUFLLEVBQUUsTUFBS3JELEtBQUwsQ0FBV3FELEtBSmU7QUFLakNDLGlCQUFVLEVBQUUsTUFBS3RELEtBQUwsQ0FBV3NEO0FBTFUsTUFBckIsQ0FBZDs7QUFRQSxTQUFJLE1BQUt0QyxRQUFULEVBQW1CO0FBR2pCLGFBQUt1QyxXQUFMLEdBQW1CLElBQW5CO0FBQ0EsYUFBS0MsVUFBTCxHQUFrQixJQUFsQjtBQUVBLGFBQUs5QyxNQUFMLEdBQWMsSUFBSStDLGtCQUFKLCtCQUFkO0FBQ0EsYUFBS0MsS0FBTCxHQUFhLElBQUlDLGlCQUFKLCtCQUFiOztBQUNBLGFBQUtDLFFBQUwsQ0FBYzdHLFdBQVcsQ0FBQ2dFLE1BQVosQ0FBbUIwQixPQUFqQztBQUNEOztBQTdCOEM7QUFnQ2hEOzs7OzhCQUVRO0FBQUE7O0FBQ1AsWUFBS29CLE9BQUwsR0FBZSxLQUFLQyxXQUFMLENBQWlCLEtBQUs5RCxLQUFMLENBQVdnRCxRQUE1QixDQUFmO0FBRUEsWUFBS0YsTUFBTCxDQUFZaEMsTUFBWjs7QUFFQSxXQUFJLEtBQUtFLFFBQVQsRUFBbUI7QUFDakIsY0FBS04sTUFBTCxDQUFZSSxNQUFaO0FBQ0EsY0FBSzRDLEtBQUwsQ0FBVzVDLE1BQVg7QUFDRCxRQVJNLENBVVA7OztBQUNBLFlBQUtsQyxRQUFMLEdBQWdCLElBQUltRixZQUFKLENBQWlCLEtBQUtqQixNQUFMLENBQVlrQixZQUFaLEdBQTJCLENBQTNCLEdBQStCLENBQWhELENBQWhCO0FBQ0EsWUFBS3pGLEdBQUwsR0FBVyxJQUFJd0YsWUFBSixDQUFpQixLQUFLakIsTUFBTCxDQUFZa0IsWUFBWixHQUEyQixDQUEzQixHQUErQixDQUFoRCxDQUFYO0FBQ0EsWUFBS3hDLFFBQUwsR0FBZ0IsSUFBSXVDLFlBQUosQ0FBaUIsS0FBS2pCLE1BQUwsQ0FBWWtCLFlBQVosR0FBMkIsQ0FBNUMsQ0FBaEI7QUFDQSxZQUFLQyxjQUFMLEdBQXNCO0FBQUVDLGVBQU0sRUFBRSxDQUFWO0FBQWEzRixZQUFHLEVBQUUsQ0FBbEI7QUFBcUI0RixZQUFHLEVBQUU7QUFBMUIsUUFBdEIsQ0FkTyxDQWdCUDs7QUFDQSxZQUFLckIsTUFBTCxDQUFZc0IsWUFBWixDQUF5QkMsT0FBekIsQ0FBa0MsVUFBQUMsSUFBSSxFQUFJO0FBQ3hDLGVBQUksQ0FBQ0MsV0FBTCxDQUFpQkQsSUFBSSxDQUFDQSxJQUF0QixFQUE0QixNQUFJLENBQUM5QixJQUFqQyxFQUF1QyxNQUFJLENBQUNxQixPQUE1QyxFQUFxRCxDQUFDUyxJQUFJLENBQUNFLENBQU4sRUFBU0YsSUFBSSxDQUFDRyxDQUFkLENBQXJEO0FBQ0QsUUFGRCxFQWpCTyxDQXFCUDs7QUFDQSxZQUFLL0YsT0FBTCxHQUFlNEQsYUFBYSxDQUFDO0FBQzNCb0Msa0JBQVMsRUFBRSxJQURnQjtBQUUzQkMsYUFBSSxFQUFFLFFBRnFCO0FBRzNCQyxjQUFLLEVBQUUsS0FBSzlCLE1BQUwsQ0FBWWtCO0FBSFEsUUFBRCxDQUE1QjtBQU1BLFlBQUtuRCxPQUFMLEdBQWUsS0FBS2IsS0FBTCxDQUFXYSxPQUExQjtBQUNBLFlBQUt6QyxLQUFMLEdBQWEsSUFBYjtBQUNBLFlBQUtJLFVBQUwsR0FBa0IsSUFBbEI7QUFDQSxZQUFLVCxRQUFMLEdBQWdCLEVBQWhCO0FBQ0Q7Ozs4QkFFUThHLFEsRUFBVTtBQUVqQixXQUFJLENBQUMsS0FBSzdELFFBQVYsRUFBb0I7QUFDbEI7QUFDRDs7QUFKZ0IsV0FNVEQsTUFOUyxHQU1FaEUsV0FORixDQU1UZ0UsTUFOUztBQVFqQixXQUFJLENBQUM4RCxRQUFELElBQWFsSSxNQUFNLENBQUNtSSxNQUFQLENBQWMvRCxNQUFkLENBQWpCLEVBQXdDOztBQUV4QyxlQUFROEQsUUFBUjtBQUNFLGNBQUs5RCxNQUFNLENBQUMwQixPQUFaO0FBQ0UsZ0JBQUtzQyxlQUFMO0FBQ0E7O0FBQ0YsY0FBS2hFLE1BQU0sQ0FBQ0MsUUFBWjtBQUNFLGVBQUksS0FBS2pDLEtBQUwsS0FBZWhDLFdBQVcsQ0FBQ2dFLE1BQVosQ0FBbUIwQixPQUF0QyxFQUErQztBQUM3QyxrQkFBS3VDLGdCQUFMO0FBQ0Q7O0FBQ0Q7QUFSSjs7QUFXQSxZQUFLakcsS0FBTCxHQUFhOEYsUUFBYjtBQUNEOzs7dUNBV2lCO0FBQUE7O0FBRWhCOUgsa0JBQVcsQ0FBQ2tJLHFCQUFaLEdBQW9DLElBQXBDO0FBRUEsWUFBS0MsR0FBTCxDQUFTLFdBQVQ7QUFDQSxZQUFLQSxHQUFMLENBQVMsV0FBVDtBQUNBLFlBQUtBLEdBQUwsQ0FBUyxTQUFUO0FBQ0EsWUFBS0EsR0FBTCxDQUFTLGdCQUFUO0FBRUEsWUFBS3hCLEtBQUwsQ0FBV3lCLE9BQVgsR0FBcUIsS0FBckI7QUFFQSxZQUFLQyxFQUFMLENBQVEsT0FBUixFQUFpQixVQUFBQyxDQUFDLEVBQUk7QUFDcEIsYUFBSSxNQUFJLENBQUNDLFdBQUwsS0FBcUIsQ0FBekIsRUFBNEI7QUFDMUIsaUJBQUksQ0FBQ0EsV0FBTCxHQUFtQixDQUFuQjs7QUFDQSxpQkFBSSxDQUFDMUIsUUFBTCxDQUFjN0csV0FBVyxDQUFDZ0UsTUFBWixDQUFtQkMsUUFBakM7QUFDRDs7QUFFRCxhQUFJLE1BQUksQ0FBQ3NFLFdBQUwsS0FBcUIsQ0FBekIsRUFBNEI7QUFDMUIsaUJBQUksQ0FBQ0EsV0FBTDtBQUNBQyxpQkFBTSxDQUFDQyxVQUFQLENBQWtCLFlBQU07QUFDdEIsbUJBQUksQ0FBQ0YsV0FBTCxHQUFtQixDQUFuQjtBQUNELFlBRkQsRUFFRyxHQUZIO0FBR0Q7QUFDRixRQVpEO0FBY0Q7Ozt3Q0FFa0I7QUFBQTs7QUFFakI7QUFDQSxXQUFJdkksV0FBVyxDQUFDa0kscUJBQVosSUFBcUMsSUFBekMsRUFBK0M7QUFDN0NsSSxvQkFBVyxDQUFDa0kscUJBQVosQ0FBa0NyQixRQUFsQyxDQUEyQzdHLFdBQVcsQ0FBQ2dFLE1BQVosQ0FBbUIwQixPQUE5RDtBQUNEOztBQUNEMUYsa0JBQVcsQ0FBQ2tJLHFCQUFaLEdBQW9DLElBQXBDLENBTmlCLENBUWpCOztBQUNBLFlBQUtDLEdBQUwsQ0FBUyxPQUFUO0FBRUEsWUFBS3hCLEtBQUwsQ0FBV3lCLE9BQVgsR0FBcUIsSUFBckI7QUFDQSxZQUFLekIsS0FBTCxDQUFXK0IsSUFBWCxHQVppQixDQWNqQjs7QUFDQSxZQUFLL0UsTUFBTCxDQUFZZ0YsUUFBWixDQUFxQixDQUFyQixFQUF1QixLQUFLbkQsSUFBTCxDQUFVL0IsTUFBVixHQUFtQixDQUExQztBQUNBLFlBQUtrRCxLQUFMLENBQVdpQyxZQUFYLENBQXdCQyxLQUF4QjtBQUVBLFlBQUtSLEVBQUwsQ0FBUSxXQUFSLEVBQXFCLFVBQUFDLENBQUMsRUFBSTtBQUN4QixlQUFJLENBQUN6QixRQUFMLENBQWM3RyxXQUFXLENBQUNnRSxNQUFaLENBQW1CRSxTQUFqQzs7QUFDQSxlQUFJLENBQUNQLE1BQUwsQ0FBWW1GLFdBQVosQ0FBd0JSLENBQXhCOztBQUNBLGVBQUksQ0FBQzNCLEtBQUwsQ0FBV29DLElBQVg7O0FBQ0EsZUFBSSxDQUFDcEMsS0FBTCxDQUFXNUMsTUFBWCxDQUFrQnVFLENBQWxCO0FBQ0QsUUFMRDtBQU9BLFlBQUtELEVBQUwsQ0FBUSxXQUFSLEVBQXFCLFVBQUFDLENBQUMsRUFBSTtBQUN4QixhQUFJLE1BQUksQ0FBQ3RHLEtBQUwsS0FBZWhDLFdBQVcsQ0FBQ2dFLE1BQVosQ0FBbUJFLFNBQXRDLEVBQWlEO0FBQy9DLGlCQUFJLENBQUNQLE1BQUwsQ0FBWXFGLFdBQVosQ0FBd0JWLENBQXhCOztBQUNBLGlCQUFJLENBQUMzQixLQUFMLENBQVcrQixJQUFYO0FBQ0Q7QUFDRixRQUxEO0FBT0EsWUFBS0wsRUFBTCxDQUFRLFNBQVIsRUFBbUIsVUFBQUMsQ0FBQyxFQUFJO0FBQ3RCLGVBQUksQ0FBQ3pCLFFBQUwsQ0FBYzdHLFdBQVcsQ0FBQ2dFLE1BQVosQ0FBbUJDLFFBQWpDOztBQUNBLGVBQUksQ0FBQ04sTUFBTCxDQUFZc0YsU0FBWixDQUFzQlgsQ0FBdEI7QUFDRCxRQUhEO0FBS0EsWUFBS0QsRUFBTCxDQUFRLGdCQUFSLEVBQTBCLFVBQUFDLENBQUMsRUFBSTtBQUM3QixlQUFJLENBQUN6QixRQUFMLENBQWM3RyxXQUFXLENBQUNnRSxNQUFaLENBQW1CQyxRQUFqQzs7QUFDQSxlQUFJLENBQUNOLE1BQUwsQ0FBWXNGLFNBQVosQ0FBc0JYLENBQXRCO0FBQ0QsUUFIRDtBQUtEOzs7a0NBRVlZLEssRUFBT0MsTSxFQUFRO0FBQzFCLFlBQUszRCxJQUFMLEdBQVksS0FBS0EsSUFBTCxDQUFVNEQsTUFBVixDQUFpQixDQUFqQixFQUFvQkYsS0FBcEIsSUFBNkJDLE1BQTdCLEdBQXNDLEtBQUszRCxJQUFMLENBQVU0RCxNQUFWLENBQWlCRixLQUFqQixDQUFsRDtBQUNEOzs7a0NBRVlBLEssRUFBT3pGLE0sRUFBUTtBQUMxQixXQUFJNEYsT0FBTyxHQUFHLEtBQUs3RCxJQUFMLENBQVU4RCxLQUFWLENBQWdCLEVBQWhCLENBQWQ7QUFDQUQsY0FBTyxDQUFDRSxNQUFSLENBQWVMLEtBQWYsRUFBc0J6RixNQUFNLEdBQUcsQ0FBL0I7QUFDQSxZQUFLK0IsSUFBTCxHQUFZNkQsT0FBTyxDQUFDRyxJQUFSLENBQWEsRUFBYixDQUFaO0FBQ0Q7OztpQ0FVWUwsTSxFQUFRMUQsSSxFQUFNZ0UsWSxFQUFjQyxHLEVBQUs7QUFBQTs7QUFDNUMsV0FBSUMsU0FBUyxHQUFHLEdBQWhCLENBRDRDLENBQ3RCOztBQUN0QixXQUFJQyxJQUFJLEdBQVFGLEdBQWhCLENBRjRDLENBRXRCOztBQUN0QixXQUFJRyxLQUFLLEdBQU8sR0FBaEIsQ0FINEMsQ0FHdEI7O0FBQ3RCLFdBQUlqSCxLQUFLLEdBQU82RyxZQUFZLENBQUNLLFFBQTdCO0FBRUEsV0FBSUMsT0FBTyxHQUFHLENBQWQ7O0FBRUEsZ0JBQVE7QUFDTixhQUFLQSxPQUFPLEtBQUtaLE1BQU0sQ0FBQzFGLE1BQXhCLEVBQWlDO0FBRWpDLGFBQUl1RyxLQUFLLEdBQUdiLE1BQU0sQ0FBRVksT0FBRixDQUFsQjtBQUNBQSxnQkFBTzs7QUFFUCxhQUFLQyxLQUFLLEtBQUssSUFBZixFQUFzQjtBQUNwQixlQUFLSixJQUFJLENBQUMsQ0FBRCxDQUFKLEdBQVVDLEtBQWYsRUFBdUJBLEtBQUssR0FBR0QsSUFBSSxDQUFDLENBQUQsQ0FBWixDQURILENBQ29COztBQUN4Q0EsZUFBSSxDQUFDLENBQUQsQ0FBSixHQUFXRixHQUFHLENBQUMsQ0FBRCxDQUFkO0FBQ0FFLGVBQUksQ0FBQyxDQUFELENBQUosSUFBV0gsWUFBWSxDQUFDbEQsVUFBeEI7QUFDQW9ELG9CQUFTLEdBQUcsR0FBWjtBQUNBO0FBQ0Q7O0FBRUQsYUFBS0ssS0FBSyxLQUFLLEdBQWYsRUFBcUIsQ0FDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7QUFFRCxhQUFJQyxTQUFTLEdBQUd4RSxJQUFJLENBQUN5RSxLQUFMLENBQVlGLEtBQVosQ0FBaEI7O0FBQ0EsYUFBSyxDQUFDQyxTQUFOLEVBQWtCO0FBQTBCO0FBQzFDRCxnQkFBSyxHQUFHLEdBQVI7QUFDQUMsb0JBQVMsR0FBR3hFLElBQUksQ0FBQ3lFLEtBQUwsQ0FBWSxHQUFaLENBQVo7QUFDRDs7QUFFRCxhQUFJQyxJQUFJLEdBQUcxRSxJQUFJLENBQUMwRSxJQUFMLENBQVdSLFNBQVMsR0FBR0ssS0FBdkIsQ0FBWDtBQUNBLGFBQUssQ0FBQ0csSUFBTixFQUFhQSxJQUFJLEdBQUcsR0FBUCxDQTVCUCxDQThCTjs7QUFDQSxhQUFJQyxJQUFJLEdBQUcsS0FBS0MsUUFBTCxDQUFlVCxJQUFmLEVBQXFCbkUsSUFBckIsRUFBMkJnRSxZQUEzQixFQUF5Q1EsU0FBekMsRUFBb0RFLElBQXBELENBQVg7QUFFQUMsYUFBSSxDQUFDRSxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ2IsR0FBRDtBQUFBLGtCQUFTLE1BQUksQ0FBQzdILFFBQUwsQ0FBZSxNQUFJLENBQUNxRixjQUFMLENBQW9CQyxNQUFwQixFQUFmLElBQWdEdUMsR0FBekQ7QUFBQSxVQUFuQjtBQUNBVSxhQUFJLENBQUM1SSxHQUFMLENBQVMrSSxHQUFULENBQWEsVUFBQ0MsRUFBRDtBQUFBLGtCQUFRLE1BQUksQ0FBQ2hKLEdBQUwsQ0FBVSxNQUFJLENBQUMwRixjQUFMLENBQW9CMUYsR0FBcEIsRUFBVixJQUF3Q2dKLEVBQWhEO0FBQUEsVUFBYjtBQUNBSixhQUFJLENBQUMzRixRQUFMLENBQWM4RixHQUFkLENBQWtCLFVBQUNuRCxHQUFEO0FBQUEsa0JBQVMsTUFBSSxDQUFDM0MsUUFBTCxDQUFlLE1BQUksQ0FBQ3lDLGNBQUwsQ0FBb0JFLEdBQXBCLEVBQWYsSUFBNkNBLEdBQXREO0FBQUEsVUFBbEI7QUFFQXVDLGtCQUFTLEdBQUdLLEtBQVo7QUFDQUosYUFBSSxHQUFHUSxJQUFJLENBQUNWLEdBQVo7QUFDRDs7QUFFRCxjQUFPO0FBQ0xVLGFBQUksRUFBRyxDQUFFVixHQUFHLENBQUMsQ0FBRCxDQUFMLEVBQVVBLEdBQUcsQ0FBQyxDQUFELENBQWIsRUFBa0JHLEtBQUssR0FBR0gsR0FBRyxDQUFDLENBQUQsQ0FBN0IsRUFBa0NBLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBU0UsSUFBSSxDQUFDLENBQUQsQ0FBYixHQUFtQkgsWUFBWSxDQUFDbEQsVUFBbEUsQ0FERjtBQUVMa0UsbUJBQVUsRUFBR1YsT0FGUixDQUdMOztBQUhLLFFBQVA7QUFNRDs7O2lDQUVXOUQsUSxFQUE2QjtBQUFBLFdBQW5CeUUsV0FBbUIsdUVBQUwsR0FBSztBQUFBLHdCQUVnQyxLQUFLakYsSUFGckM7QUFBQSxXQUVoQ2tGLFVBRmdDLGNBRWhDQSxVQUZnQztBQUFBLFdBRXBCQyxRQUZvQixjQUVwQkEsUUFGb0I7QUFBQSxXQUVGQyxVQUZFLGNBRVZDLE1BRlU7QUFBQSxXQUVXQyxPQUZYLGNBRVdBLE9BRlg7QUFBQSxXQUVvQkMsUUFGcEIsY0FFb0JBLFFBRnBCO0FBSXZDLFdBQU1sQixRQUFRLEdBQUcsS0FBSzdHLEtBQUwsQ0FBV2dELFFBQVgsR0FBc0IwRSxVQUF2QztBQUNBLFdBQU1NLFFBQVEsR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVlQLFFBQVEsR0FBR2QsUUFBdkIsSUFBb0NjLFFBQXJEO0FBQ0EsV0FBTUUsTUFBTSxHQUFHSSxJQUFJLENBQUNDLEtBQUwsQ0FBWU4sVUFBVSxHQUFHZixRQUF6QixDQUFmO0FBQ0EsV0FBSXZELFVBQVUsR0FBRzJFLElBQUksQ0FBQ0MsS0FBTCxDQUFZckIsUUFBUSxJQUFLZSxVQUFVLEdBQUdFLE9BQWIsR0FBdUJDLFFBQTVCLENBQVIsR0FBaUROLFdBQTdELENBQWpCO0FBRUEsV0FBSSxLQUFLekgsS0FBTCxDQUFXc0QsVUFBWCxHQUF3QixDQUE1QixFQUNFQSxVQUFVLEdBQUcsS0FBS3RELEtBQUwsQ0FBV3NELFVBQXhCLENBREYsS0FHRSxLQUFLdEQsS0FBTCxDQUFXc0QsVUFBWCxHQUF3QkEsVUFBeEI7QUFFRixjQUFPO0FBQ0x1RCxpQkFBUSxFQUFLQSxRQURSO0FBRUxtQixpQkFBUSxFQUFLQSxRQUZSO0FBR0xILGVBQU0sRUFBUUEsTUFIVDtBQUlMdkUsbUJBQVUsRUFBR0E7QUFKUixRQUFQO0FBTUQ7Ozs4QkFFU21ELEcsRUFBS2pFLEksRUFBTWdFLFksRUFBY1EsUyxFQUF3QjtBQUFBLFdBQWJFLElBQWEsdUVBQU4sR0FBTTtBQUV6RDtBQUNBLFdBQUlpQixPQUFPLEdBQUcsQ0FBRW5CLFNBQVMsQ0FBQ29CLEtBQVYsR0FBa0IsQ0FBcEIsTUFBNEIsQ0FBMUMsQ0FIeUQsQ0FLekQ7O0FBQ0EsV0FBSUMsUUFBUSxHQUFHNUIsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFTRCxZQUFZLENBQUNxQixNQUFyQyxDQU55RCxDQVF6RDs7QUFDQSxXQUFJbEksS0FBSyxHQUFHd0ksT0FBTyxHQUFHM0IsWUFBWSxDQUFDd0IsUUFBaEIsR0FBMkJ4QixZQUFZLENBQUNLLFFBQTNELENBVHlELENBV3pEOztBQUNBLFdBQUl5QixDQUFDLEdBQVF0QixTQUFTLENBQUNHLElBQXZCO0FBQ0EsV0FBSW9CLE1BQU0sR0FBR0YsUUFBUSxHQUFHMUksS0FBSyxJQUFLNkMsSUFBSSxDQUFDc0YsT0FBTCxHQUFldEYsSUFBSSxDQUFDZ0csRUFBekIsQ0FBN0I7QUFDQSxXQUFJQyxHQUFHLEdBQU1GLE1BQU0sR0FBSzVJLEtBQUssR0FBSzZDLElBQUksQ0FBQ2tHLFVBQXZDO0FBQ0EsV0FBSUMsSUFBSSxHQUFLbEMsR0FBRyxDQUFDLENBQUQsQ0FBSCxHQUFXOUcsS0FBSyxJQUFLcUgsU0FBUyxDQUFDNEIsU0FBVixHQUFzQjFCLElBQXRCLEdBQTZCMUUsSUFBSSxDQUFDcUcsRUFBdkMsQ0FBN0I7QUFDQSxXQUFJQyxLQUFLLEdBQUlILElBQUksR0FBT2hKLEtBQUssSUFBSzJJLENBQUMsQ0FBQyxDQUFELENBQUQsR0FBT0EsQ0FBQyxDQUFDLENBQUQsQ0FBYixDQUE3QjtBQUNBLFdBQUlTLENBQUMsR0FBRyxDQUFFSixJQUFGLEVBQVFGLEdBQVIsRUFBYUssS0FBYixFQUFvQlAsTUFBcEIsQ0FBUixDQWpCeUQsQ0FtQnpEOztBQUNBLFdBQUlTLFNBQVMsR0FBR3ZDLEdBQUcsQ0FBQyxDQUFELENBQUgsR0FBUzlHLEtBQUssR0FBS3FILFNBQVMsQ0FBQ2lDLFNBQTdDLENBcEJ5RCxDQXNCekQ7O0FBQ0EsV0FBSUMsUUFBUSxHQUFJLE1BQU0xRyxJQUFJLENBQUNnRyxFQUFYLEdBQWdCN0ksS0FBaEM7QUFFQSxXQUFNMEgsU0FBUyxHQUFHLENBQ2hCMEIsQ0FBQyxDQUFDLENBQUQsQ0FEZSxFQUNWQSxDQUFDLENBQUMsQ0FBRCxDQURTLEVBQ0o7QUFDWkEsUUFBQyxDQUFDLENBQUQsQ0FGZSxFQUVWQSxDQUFDLENBQUMsQ0FBRCxDQUZTLEVBRUo7QUFDWkEsUUFBQyxDQUFDLENBQUQsQ0FIZSxFQUdWQSxDQUFDLENBQUMsQ0FBRCxDQUhTLEVBR0o7QUFDWkEsUUFBQyxDQUFDLENBQUQsQ0FKZSxFQUlWQSxDQUFDLENBQUMsQ0FBRCxDQUpTLENBQWxCO0FBT0EsV0FBTXhLLEdBQUcsR0FBRyxDQUNWK0osQ0FBQyxDQUFDLENBQUQsQ0FEUyxFQUNKQSxDQUFDLENBQUMsQ0FBRCxDQURHLEVBQ0U7QUFDWkEsUUFBQyxDQUFDLENBQUQsQ0FGUyxFQUVKQSxDQUFDLENBQUMsQ0FBRCxDQUZHLEVBRUU7QUFDWkEsUUFBQyxDQUFDLENBQUQsQ0FIUyxFQUdKQSxDQUFDLENBQUMsQ0FBRCxDQUhHLEVBR0U7QUFDWkEsUUFBQyxDQUFDLENBQUQsQ0FKUyxFQUlKQSxDQUFDLENBQUMsQ0FBRCxDQUpHLENBQVo7QUFPQSxXQUFNOUcsUUFBUSxHQUFHLENBQ2YwSCxRQURlLEVBRWZBLFFBRmUsRUFHZkEsUUFIZSxFQUlmQSxRQUplLENBQWpCO0FBT0EsY0FBTztBQUNMN0Isa0JBQVMsRUFBVEEsU0FESztBQUVMOUksWUFBRyxFQUFIQSxHQUZLO0FBR0xpRCxpQkFBUSxFQUFSQSxRQUhLO0FBSUxpRixZQUFHLEVBQUUsQ0FBRXVDLFNBQUYsRUFBYXZDLEdBQUcsQ0FBQyxDQUFELENBQWhCO0FBSkEsUUFBUCxDQTlDeUQsQ0FxRHpEO0FBQ0Q7Ozt5QkF2T1U7QUFDVCxjQUFPLEtBQUs5RCxLQUFaO0FBQ0QsTTt1QkFFUXdHLEssRUFBTztBQUNkLFlBQUt4RyxLQUFMLEdBQWF3RyxLQUFiO0FBQ0EsWUFBS3JJLE1BQUw7QUFDRDs7O3lCQW1GYTtBQUNaLGNBQU8sS0FBSytCLFFBQVo7QUFDRDs7O3lCQUVVO0FBQ1QsY0FBTyxLQUFLRCxLQUFaO0FBQ0Q7Ozs7R0F0TXVCL0YsSUFBSSxDQUFDdU0sSUFBTCxDQUFVQyxJOztpQkFBOUJ0TSxXLFdBRVcsRzs7aUJBRlhBLFcsWUFHWTtBQUFDMEYsVUFBTyxFQUFFLENBQVY7QUFBYXpCLFdBQVEsRUFBRSxDQUF2QjtBQUEwQkMsWUFBUyxFQUFFO0FBQXJDLEU7O2lCQUhabEUsVywyQkFJMkIsSTs7Z0JBNlVsQkEsVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NyVlRnRyxVOzs7QUFvQkosdUJBQVl1RyxLQUFaLEVBQW1CQyxNQUFuQixFQUEyQjtBQUFBOztBQUFBLG1DQWxCcEIsRUFrQm9COztBQUFBLG1DQWpCcEIsSUFpQm9COztBQUFBLHNDQWhCakIsSUFnQmlCOztBQUFBLHVDQWZoQixFQWVnQjs7QUFBQSxvQ0FkbkIsTUFjbUI7O0FBQUEscUNBYmxCLENBYWtCOztBQUFBLHFDQVpsQixDQVlrQjs7QUFBQSwyQ0FYWixHQVdZOztBQUFBLHdDQVZmLEtBVWU7O0FBQUEsMkNBVFosRUFTWTs7QUFBQSwyQ0FSWixDQVFZOztBQUFBLHFDQVBsQixDQU9rQjs7QUFBQSx5Q0FOZCxDQU1jOztBQUFBLHlDQUxkLENBS2M7O0FBQUEscUNBSmxCLEVBSWtCOztBQUFBLG9DQUhuQixJQUdtQjs7QUFFekIsVUFBS0QsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBSy9HLElBQUwsR0FBWStHLEtBQUssQ0FBQy9HLElBQWxCO0FBQ0EsVUFBS0MsSUFBTCxHQUFZOEcsS0FBSyxDQUFDOUcsSUFBbEI7QUFDQSxVQUFLUSxRQUFMLEdBQWdCdUcsTUFBTSxDQUFDdkcsUUFBdkI7QUFDQSxVQUFLQyxTQUFMLEdBQWlCc0csTUFBTSxDQUFDdEcsU0FBeEI7QUFDQSxVQUFLRSxZQUFMLEdBQW9Cb0csTUFBTSxDQUFDcEcsWUFBM0I7QUFDQSxVQUFLRyxVQUFMLEdBQWtCaUcsTUFBTSxDQUFDakcsVUFBekI7QUFDQSxVQUFLRCxLQUFMLEdBQWFrRyxNQUFNLENBQUNsRyxLQUFwQjtBQUNBLFVBQUt2QyxNQUFMO0FBRUQ7Ozs7OEJBRVE7QUFBQTs7QUFDUCxZQUFLeUIsSUFBTCxHQUFZLEtBQUsrRyxLQUFMLENBQVcvRyxJQUF2QjtBQUNBLFlBQUtDLElBQUwsR0FBWSxLQUFLOEcsS0FBTCxDQUFXOUcsSUFBdkI7QUFFQSxZQUFLd0IsWUFBTCxHQUFvQixLQUFLekIsSUFBTCxDQUFVOEQsS0FBVixDQUFnQixFQUFoQixFQUFvQjdGLE1BQXhDO0FBQ0EsWUFBS3FELE9BQUwsR0FBZSxLQUFLQyxXQUFMLENBQWlCLEtBQUt0QixJQUF0QixFQUE0QixHQUE1QixDQUFmO0FBQ0EsWUFBS2dILE1BQUwsR0FBYyxLQUFLM0YsT0FBTCxDQUFhUCxVQUEzQjtBQUNBLFlBQUttRyx1QkFBTDtBQUVBLFlBQUtDLE1BQUwsR0FBYyxFQUFkO0FBRUEsWUFBS3RGLFlBQUwsQ0FBa0JDLE9BQWxCLENBQTJCLFVBQUFDLElBQUksRUFBSTtBQUNqQyxjQUFJLENBQUNxRixTQUFMLENBQWVyRixJQUFJLENBQUNBLElBQXBCLEVBQTBCLENBQUNBLElBQUksQ0FBQ0UsQ0FBTixFQUFTRixJQUFJLENBQUNHLENBQWQsQ0FBMUI7QUFDRCxRQUZEO0FBR0Q7OztpQ0FFV3pCLFEsRUFBNkI7QUFBQSxXQUFuQnlFLFdBQW1CLHVFQUFMLEdBQUs7QUFBQSx3QkFFZ0MsS0FBS2pGLElBRnJDO0FBQUEsV0FFaENrRixVQUZnQyxjQUVoQ0EsVUFGZ0M7QUFBQSxXQUVwQkMsUUFGb0IsY0FFcEJBLFFBRm9CO0FBQUEsV0FFRkMsVUFGRSxjQUVWQyxNQUZVO0FBQUEsV0FFV0MsT0FGWCxjQUVXQSxPQUZYO0FBQUEsV0FFb0JDLFFBRnBCLGNBRW9CQSxRQUZwQjtBQUl2QyxXQUFNbEIsUUFBUSxHQUFHLEtBQUs3RCxRQUFMLEdBQWdCMEUsVUFBakM7QUFDQSxXQUFNTSxRQUFRLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFZUCxRQUFRLEdBQUdkLFFBQXZCLElBQW9DYyxRQUFyRDtBQUNBLFdBQU1FLE1BQU0sR0FBR0ksSUFBSSxDQUFDQyxLQUFMLENBQVlOLFVBQVUsR0FBR2YsUUFBekIsQ0FBZjtBQUNBLFdBQUl2RCxVQUFVLEdBQUcyRSxJQUFJLENBQUNDLEtBQUwsQ0FBWXJCLFFBQVEsSUFBS2UsVUFBVSxHQUFHRSxPQUFiLEdBQXVCQyxRQUE1QixDQUFSLEdBQWlETixXQUE3RCxDQUFqQjtBQUVBLFdBQUksS0FBS25FLFVBQUwsR0FBa0IsQ0FBdEIsRUFDRUEsVUFBVSxHQUFHLEtBQUtBLFVBQWxCLENBREYsS0FHRSxLQUFLQSxVQUFMLEdBQWtCQSxVQUFsQjtBQUVGLGNBQU87QUFDTHVELGlCQUFRLEVBQUtBLFFBRFI7QUFFTG1CLGlCQUFRLEVBQUtBLFFBRlI7QUFHTEgsZUFBTSxFQUFRQSxNQUhUO0FBSUx2RSxtQkFBVSxFQUFHQTtBQUpSLFFBQVA7QUFNRDs7OzhCQUVTbUQsRyxFQUFLTyxTLEVBQXdCO0FBQUEsV0FBYkUsSUFBYSx1RUFBTixHQUFNO0FBRXJDO0FBQ0EsV0FBSWlCLE9BQU8sR0FBRyxDQUFFbkIsU0FBUyxDQUFDb0IsS0FBVixHQUFrQixDQUFwQixNQUE0QixDQUExQyxDQUhxQyxDQUtyQzs7QUFDQSxXQUFJQyxRQUFRLEdBQUc1QixHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVMsS0FBSzVDLE9BQUwsQ0FBYWdFLE1BQXJDLENBTnFDLENBUXJDOztBQUNBLFdBQUlsSSxLQUFLLEdBQUd3SSxPQUFPLEdBQUcsS0FBS3RFLE9BQUwsQ0FBYW1FLFFBQWhCLEdBQTJCLEtBQUtuRSxPQUFMLENBQWFnRCxRQUEzRCxDQVRxQyxDQVdyQzs7QUFDQSxXQUFJeUIsQ0FBQyxHQUFRdEIsU0FBUyxDQUFDRyxJQUF2QjtBQUNBLFdBQUlvQixNQUFNLEdBQUdGLFFBQVEsR0FBRzFJLEtBQUssSUFBSyxLQUFLNkMsSUFBTCxDQUFVc0YsT0FBVixHQUFvQixLQUFLdEYsSUFBTCxDQUFVZ0csRUFBbkMsQ0FBN0I7QUFDQSxXQUFJQyxHQUFHLEdBQU1GLE1BQU0sR0FBSzVJLEtBQUssR0FBSyxLQUFLNkMsSUFBTCxDQUFVa0csVUFBNUM7QUFDQSxXQUFJQyxJQUFJLEdBQUtsQyxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVc5RyxLQUFLLElBQUtxSCxTQUFTLENBQUM0QixTQUFWLEdBQXNCMUIsSUFBdEIsR0FBNkIsS0FBSzFFLElBQUwsQ0FBVXFHLEVBQTVDLENBQTdCO0FBQ0EsV0FBSUMsS0FBSyxHQUFJSCxJQUFJLEdBQU9oSixLQUFLLElBQUsySSxDQUFDLENBQUMsQ0FBRCxDQUFELEdBQU9BLENBQUMsQ0FBQyxDQUFELENBQWIsQ0FBN0I7QUFDQSxXQUFJUyxDQUFDLEdBQUcsQ0FBRUosSUFBRixFQUFRRixHQUFSLEVBQWFLLEtBQWIsRUFBb0JQLE1BQXBCLENBQVIsQ0FqQnFDLENBbUJyQzs7QUFDQSxXQUFJUyxTQUFTLEdBQUd2QyxHQUFHLENBQUMsQ0FBRCxDQUFILEdBQVM5RyxLQUFLLEdBQUtxSCxTQUFTLENBQUNpQyxTQUE3QztBQUVBLFdBQU01QixTQUFTLEdBQUcsQ0FDaEIwQixDQUFDLENBQUMsQ0FBRCxDQURlLEVBQ1ZBLENBQUMsQ0FBQyxDQUFELENBRFMsRUFDSjtBQUNaQSxRQUFDLENBQUMsQ0FBRCxDQUZlLEVBRVZBLENBQUMsQ0FBQyxDQUFELENBRlMsRUFFSjtBQUNaQSxRQUFDLENBQUMsQ0FBRCxDQUhlLEVBR1ZBLENBQUMsQ0FBQyxDQUFELENBSFMsRUFHSjtBQUNaQSxRQUFDLENBQUMsQ0FBRCxDQUplLEVBSVZBLENBQUMsQ0FBQyxDQUFELENBSlMsQ0FBbEI7QUFPQSxjQUFPO0FBQ0wxQixrQkFBUyxFQUFUQSxTQURLO0FBRUxaLFlBQUcsRUFBRSxDQUFFdUMsU0FBRixFQUFhdkMsR0FBRyxDQUFDLENBQUQsQ0FBaEIsQ0FGQTtBQUdMNUMsZ0JBQU8sRUFBRTtBQUFDVyxZQUFDLEVBQUVpQyxHQUFHLENBQUMsQ0FBRCxDQUFQO0FBQVloQyxZQUFDLEVBQUVnQyxHQUFHLENBQUMsQ0FBRCxDQUFsQjtBQUF1Qm1ELGdCQUFLLEVBQUVqSyxLQUFLLEdBQUdxSCxTQUFTLENBQUNpQztBQUFoRDtBQUhKLFFBQVA7QUFLRDs7O21DQUVhL0MsTSxFQUFRO0FBQUE7O0FBRXBCLFdBQUkwRCxLQUFLLEdBQUcsQ0FBWjtBQUNBLFdBQUlDLE1BQU0sR0FBRyxLQUFLaEcsT0FBTCxDQUFhUCxVQUExQjs7QUFFQSxXQUFNMkQsS0FBSyxzQkFBT2YsTUFBUCxDQUFYLENBTG9CLENBT3BCOzs7QUFDQWUsWUFBSyxDQUFDNUMsT0FBTixDQUFjLFVBQUF5RixLQUFJLEVBQUk7QUFDcEIsYUFBSTlDLFNBQVMsR0FBRyxNQUFJLENBQUN4RSxJQUFMLENBQVV5RSxLQUFWLENBQWlCNkMsS0FBakIsQ0FBaEI7QUFFQTs7OztBQUtBOztBQUNBLGFBQUkxQyxRQUFRLEdBQUcsTUFBSSxDQUFDQSxRQUFMLENBQWMsQ0FBQ3dDLEtBQUQsRUFBTyxDQUFQLENBQWQsRUFBeUI1QyxTQUF6QixFQUFvQyxHQUFwQyxDQUFmOztBQUNBNEMsY0FBSyxHQUFHeEMsUUFBUSxDQUFDWCxHQUFULENBQWEsQ0FBYixDQUFSO0FBRUQsUUFaRDtBQWNBLGNBQU87QUFBQ21ELGNBQUssRUFBTEEsS0FBRDtBQUFRQyxlQUFNLEVBQU5BO0FBQVIsUUFBUDtBQUVEOzs7K0NBRXlCO0FBQUE7O0FBRXhCLFdBQU1FLEtBQUssR0FBRyxLQUFLeEgsSUFBTCxDQUFVOEQsS0FBVixDQUFnQixHQUFoQixDQUFkOztBQUVBLFlBQUssSUFBSTJELENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELEtBQUssQ0FBQ3ZKLE1BQU4sR0FBZSxDQUFuQyxFQUFzQ3dKLENBQUMsRUFBdkMsRUFBMkM7QUFDekNELGNBQUssQ0FBQ0MsQ0FBRCxDQUFMLEdBQVdELEtBQUssQ0FBQ0MsQ0FBRCxDQUFMLEdBQVcsR0FBdEI7QUFDRDs7QUFFRCxZQUFLNUYsWUFBTCxHQUFvQixFQUFwQixDQVJ3QixDQVV4Qjs7QUFDQSxXQUFJSSxDQUFDLEdBQUcsS0FBS3lGLE1BQWI7QUFDQSxXQUFJeEYsQ0FBQyxHQUFHLEtBQUsrRSxNQUFiLENBWndCLENBY3hCOztBQUNBTyxZQUFLLENBQUMxRixPQUFOLENBQWMsVUFBQUMsSUFBSSxFQUFJO0FBQ3BCLGFBQU00RixRQUFRLEdBQUcsTUFBSSxDQUFDQyxhQUFMLENBQW1CN0YsSUFBbkIsQ0FBakI7O0FBQ0EsYUFBSUUsQ0FBQyxHQUFHMEYsUUFBUSxDQUFDTixLQUFiLEdBQXFCLE1BQUksQ0FBQ0ssTUFBTCxHQUFjLE1BQUksQ0FBQzlHLFlBQXhDLElBQXdELE1BQUksQ0FBQ0YsU0FBakUsRUFBNEU7QUFDMUV1QixZQUFDLEdBQUcsTUFBSSxDQUFDeUYsTUFBVDtBQUNBeEYsWUFBQyxJQUFJeUYsUUFBUSxDQUFDTCxNQUFkO0FBQ0Q7O0FBRUQsZUFBSSxDQUFDekYsWUFBTCxDQUFrQmdHLElBQWxCLGNBQTJCRixRQUEzQjtBQUFxQzFGLFlBQUMsRUFBREEsQ0FBckM7QUFBd0NDLFlBQUMsRUFBREEsQ0FBeEM7QUFBMkNILGVBQUksRUFBSkE7QUFBM0MsYUFQb0IsQ0FTcEI7OztBQUNBRSxVQUFDLElBQUkwRixRQUFRLENBQUNOLEtBQWQ7QUFDRCxRQVhELEVBZndCLENBNEJ4Qjs7QUFDQSxZQUFLUyxVQUFMLEdBQWtCLENBQUM1RixDQUFDLEdBQUcsS0FBSytFLE1BQVYsSUFBb0IsS0FBSzNGLE9BQUwsQ0FBYVAsVUFBakMsR0FBOEMsQ0FBaEU7QUFDQSxZQUFLdUcsTUFBTCxHQUFjLEtBQUtRLFVBQUwsR0FBa0IsS0FBS3hHLE9BQUwsQ0FBYVAsVUFBN0MsQ0E5QndCLENBZ0N4Qjs7QUFoQ3dCLGtDQWlDZjBHLEVBakNlO0FBa0N0QixhQUFNTSxXQUFXLEdBQUcsTUFBSSxDQUFDbEcsWUFBTCxDQUFrQm1HLE1BQWxCLENBQXlCLFVBQUFqRyxJQUFJO0FBQUEsa0JBQUlBLElBQUksQ0FBQ0csQ0FBTCxLQUFXLE1BQUksQ0FBQytFLE1BQUwsR0FBZVEsRUFBQyxHQUFHLE1BQUksQ0FBQ25HLE9BQUwsQ0FBYVAsVUFBL0M7QUFBQSxVQUE3QixDQUFwQjs7QUFFQSxhQUFNa0gsUUFBUSxHQUFHRixXQUFXLENBQUNBLFdBQVcsQ0FBQzlKLE1BQVosR0FBcUIsQ0FBdEIsQ0FBNUI7O0FBRUEsYUFBSWdLLFFBQUosRUFBYztBQUNaLGVBQU1DLFNBQVMsR0FBSSxNQUFJLENBQUNSLE1BQUwsR0FBYyxNQUFJLENBQUM5RyxZQUFwQixJQUFxQ3FILFFBQVEsQ0FBQ2hHLENBQVQsR0FBYWdHLFFBQVEsQ0FBQ1osS0FBM0QsQ0FBbEI7QUFFQSxlQUFJYyxVQUFVLEdBQUcsQ0FBakI7O0FBRUEsbUJBQVEsTUFBSSxDQUFDckgsS0FBYjtBQUNFLGtCQUFLLFFBQUw7QUFDRXFILHlCQUFVLEdBQUdELFNBQVMsR0FBRyxDQUF6QjtBQUNBOztBQUNGLGtCQUFLLE9BQUw7QUFDRUMseUJBQVUsR0FBR0QsU0FBYjtBQUNBO0FBTko7O0FBUUEsaUJBQUksQ0FBQ3JHLFlBQUwsQ0FBa0JDLE9BQWxCLENBQTBCLFVBQUFDLElBQUksRUFBSTtBQUNoQyxpQkFBSUEsSUFBSSxDQUFDRyxDQUFMLEtBQVcsTUFBSSxDQUFDK0UsTUFBTCxHQUFlUSxFQUFDLEdBQUcsTUFBSSxDQUFDbkcsT0FBTCxDQUFhUCxVQUEvQyxFQUE0RDtBQUMxRGdCLG1CQUFJLENBQUNFLENBQUwsSUFBVWtHLFVBQVY7QUFDRDtBQUNGLFlBSkQ7QUFLRDtBQXhEcUI7O0FBaUN4QixZQUFLLElBQUlWLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUcsS0FBS0ssVUFBekIsRUFBcUMsRUFBRUwsRUFBdkMsRUFBMEM7QUFBQSxlQUFqQ0EsRUFBaUM7QUF3QnpDO0FBQ0Y7OzsrQkFFVTlELE0sRUFBUU8sRyxFQUFLO0FBQ3RCLFdBQUlDLFNBQVMsR0FBRyxHQUFoQixDQURzQixDQUNBOztBQUN0QixXQUFJQyxJQUFJLEdBQVFGLEdBQWhCLENBRnNCLENBRUE7O0FBQ3RCLFdBQUlHLEtBQUssR0FBTyxHQUFoQixDQUhzQixDQUdBOztBQUN0QixXQUFJakgsS0FBSyxHQUFPLEtBQUtrRSxPQUFMLENBQWFnRCxRQUE3QjtBQUVBLFdBQUlDLE9BQU8sR0FBRyxDQUFkOztBQUVBLGdCQUFRO0FBQ04sYUFBS0EsT0FBTyxLQUFLWixNQUFNLENBQUMxRixNQUF4QixFQUFpQztBQUVqQyxhQUFJdUcsS0FBSyxHQUFHYixNQUFNLENBQUVZLE9BQUYsQ0FBbEI7QUFDQUEsZ0JBQU87O0FBRVAsYUFBS0MsS0FBSyxLQUFLLElBQWYsRUFBc0I7QUFDcEIsZUFBS0osSUFBSSxDQUFDLENBQUQsQ0FBSixHQUFVQyxLQUFmLEVBQXVCQSxLQUFLLEdBQUdELElBQUksQ0FBQyxDQUFELENBQVosQ0FESCxDQUNvQjs7QUFDeENBLGVBQUksQ0FBQyxDQUFELENBQUosR0FBV0YsR0FBRyxDQUFDLENBQUQsQ0FBZDtBQUNBRSxlQUFJLENBQUMsQ0FBRCxDQUFKLElBQVcsS0FBSzlDLE9BQUwsQ0FBYVAsVUFBeEI7QUFDQW9ELG9CQUFTLEdBQUcsR0FBWjtBQUNBO0FBQ0Q7O0FBRUQsYUFBS0ssS0FBSyxLQUFLLEdBQWYsRUFBcUI7QUFDbkI7QUFDQTtBQUNBTCxvQkFBUyxHQUFHLEdBQVosQ0FIbUIsQ0FJbkI7QUFDRDs7QUFFRCxhQUFJTSxTQUFTLEdBQUcsS0FBS3hFLElBQUwsQ0FBVXlFLEtBQVYsQ0FBaUJGLEtBQWpCLENBQWhCOztBQUNBLGFBQUssQ0FBQ0MsU0FBTixFQUFrQjtBQUEwQjtBQUMxQ0QsZ0JBQUssR0FBRyxHQUFSO0FBQ0FDLG9CQUFTLEdBQUcsS0FBS3hFLElBQUwsQ0FBVXlFLEtBQVYsQ0FBaUIsR0FBakIsQ0FBWjtBQUNEOztBQUVELGFBQUlDLElBQUksR0FBRyxLQUFLMUUsSUFBTCxDQUFVMEUsSUFBVixDQUFnQlIsU0FBUyxHQUFHSyxLQUE1QixDQUFYO0FBQ0EsYUFBSyxDQUFDRyxJQUFOLEVBQWFBLElBQUksR0FBRyxHQUFQLENBNUJQLENBOEJOOztBQUNBLGFBQUlDLElBQUksR0FBRyxLQUFLQyxRQUFMLENBQWVULElBQWYsRUFBcUJLLFNBQXJCLEVBQWdDRSxJQUFoQyxDQUFYO0FBRUFSLGtCQUFTLEdBQUdLLEtBQVo7QUFDQUosYUFBSSxHQUFHUSxJQUFJLENBQUNWLEdBQVo7QUFFQSxjQUFLaUQsTUFBTCxDQUFZVSxJQUFaLENBQWlCO0FBQ2ZPLGlCQUFNLEVBQUU1RCxLQURPO0FBRWZuSSxtQkFBUSxFQUFFdUksSUFBSSxDQUFDRSxTQUZBO0FBR2Z1RCxtQkFBUSxFQUFFekQsSUFBSSxDQUFDVixHQUhBO0FBSWY1QyxrQkFBTyxFQUFFc0QsSUFBSSxDQUFDdEQ7QUFKQyxVQUFqQjtBQU1EO0FBQ0Y7Ozs7OztnQkFJWWQsVTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFQZixLQUFNVCxhQUFhLEdBQUcsbUJBQU8sQ0FBQyxDQUFELENBQTdCOztLQUVNbUIsTTs7O0FBU0osbUJBQVk2RixLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0NBUFgsQ0FBQyxDQUFELEVBQUcsQ0FBSCxDQU9XOztBQUFBLHNDQU5ULElBTVM7O0FBQUEscUNBTFYsSUFLVTs7QUFBQSxvQ0FKWCxLQUlXOztBQUFBLDBDQUhMLEtBR0s7O0FBQUEsb0NBRlgsSUFFVzs7QUFDakIsVUFBS0EsS0FBTCxHQUFhQSxLQUFiO0FBQ0EsVUFBS3pGLE9BQUwsR0FBZXlGLEtBQUssQ0FBQ3pGLE9BQXJCO0FBQ0EsVUFBS2YsTUFBTCxHQUFjd0csS0FBSyxDQUFDeEcsTUFBcEI7QUFDRDs7Ozs4QkFFUTtBQUNQLFlBQUtlLE9BQUwsR0FBZSxLQUFLeUYsS0FBTCxDQUFXekYsT0FBMUI7QUFDQSxZQUFLZixNQUFMLEdBQWMsS0FBS3dHLEtBQUwsQ0FBV3hHLE1BQXpCLENBRk8sQ0FJUDs7QUFDQSxZQUFLbEUsUUFBTCxHQUFnQixJQUFJbUYsWUFBSixDQUFpQixLQUFLakIsTUFBTCxDQUFZdUgsVUFBWixHQUF5QixDQUF6QixHQUE2QixDQUE5QyxDQUFoQjtBQUVBLFdBQUksS0FBS1EsS0FBTCxDQUFXLENBQVgsTUFBa0IsSUFBdEIsRUFDQSxLQUFLQyxhQUFMO0FBRUEsWUFBS3BNLE9BQUwsR0FBZTRELGFBQWEsQ0FBQztBQUMzQm9DLGtCQUFTLEVBQUUsSUFEZ0I7QUFFM0JDLGFBQUksRUFBRSxRQUZxQjtBQUczQkMsY0FBSyxFQUFDLEtBQUs5QixNQUFMLENBQVl1SDtBQUhTLFFBQUQsQ0FBNUI7QUFNQSxZQUFLak0sS0FBTCxHQUFhLElBQWI7QUFDQSxZQUFLSyxXQUFMLEdBQW1CLElBQW5CO0FBQ0Q7OztnQ0FFa0M7QUFBQSxXQUExQnNNLEtBQTBCLHVFQUFsQixJQUFrQjtBQUFBLFdBQVpDLEdBQVksdUVBQU4sSUFBTTtBQUFBLFdBRTFCdEIsTUFGMEIsR0FFaEIsS0FBS0osS0FBTCxDQUFXeEcsTUFGSyxDQUUxQjRHLE1BRjBCO0FBSWpDLFdBQUlxQixLQUFLLEtBQUssSUFBZCxFQUFvQkEsS0FBSyxHQUFHLEtBQUtGLEtBQUwsQ0FBVyxDQUFYLENBQVI7QUFDcEIsV0FBSUcsR0FBRyxLQUFLLElBQVosRUFBa0JBLEdBQUcsR0FBRyxLQUFLSCxLQUFMLENBQVcsQ0FBWCxDQUFOO0FBRWxCLFdBQUlFLEtBQUssR0FBRyxDQUFaLEVBQWVBLEtBQUssR0FBRyxDQUFSO0FBQ2YsV0FBSUMsR0FBRyxHQUFHLENBQVYsRUFBYUEsR0FBRyxHQUFHLENBQU47QUFFYixXQUFJRCxLQUFLLEdBQUdyQixNQUFNLENBQUNsSixNQUFQLEdBQWUsQ0FBM0IsRUFBNkJ1SyxLQUFLLEdBQUdyQixNQUFNLENBQUNsSixNQUFQLEdBQWdCLENBQXhCO0FBQzdCLFdBQUl3SyxHQUFHLEdBQUd0QixNQUFNLENBQUNsSixNQUFQLEdBQWdCLENBQTFCLEVBQTZCd0ssR0FBRyxHQUFHdEIsTUFBTSxDQUFDbEosTUFBUCxHQUFnQixDQUF0QjtBQUU3QixXQUFJd0ssR0FBRyxLQUFLLEtBQVosRUFBbUJBLEdBQUcsR0FBRyxJQUFOO0FBRW5CLFlBQUtILEtBQUwsR0FBYSxDQUFDRSxLQUFELEVBQVFDLEdBQVIsQ0FBYjtBQUNBLFlBQUtsSyxNQUFMO0FBQ0Q7OztxQ0FFZTtBQUFBOztBQUVkLFlBQUsrQyxPQUFMLEdBQWUsS0FBS3lGLEtBQUwsQ0FBV3hHLE1BQVgsQ0FBa0JlLE9BQWpDLENBRmMsQ0FHZDs7QUFDQSxXQUFJa0gsS0FBSyxHQUFHLEtBQUtqSSxNQUFMLENBQVk0RyxNQUFaLENBQW1CekIsSUFBSSxDQUFDZ0QsR0FBTCxDQUFTQyxLQUFULENBQWUsSUFBZixFQUFvQixLQUFLTCxLQUF6QixDQUFuQixDQUFaO0FBQ0EsV0FBSUcsR0FBRyxHQUFHLEtBQUtsSSxNQUFMLENBQVk0RyxNQUFaLENBQW1CekIsSUFBSSxDQUFDa0QsR0FBTCxDQUFTRCxLQUFULENBQWUsSUFBZixFQUFvQixLQUFLTCxLQUF6QixDQUFuQixDQUFWLENBTGMsQ0FRZDs7QUFSYyxrQ0FTTGIsQ0FUSztBQVVaLGFBQUlvQixXQUFXLEdBQUcsQ0FBbEIsQ0FWWSxDQVVTOztBQUNyQixhQUFJQyxXQUFXLEdBQUcsSUFBbEIsQ0FYWSxDQVdZOztBQUN4QixhQUFJQyxVQUFVLEdBQUcsSUFBakIsQ0FaWSxDQVlXOztBQUd2QixhQUFJdEIsQ0FBQyxHQUFHLEtBQUksQ0FBQ25HLE9BQUwsQ0FBYVAsVUFBakIsR0FBOEIsS0FBSSxDQUFDTyxPQUFMLENBQWFQLFVBQTNDLEdBQXdEeUgsS0FBSyxDQUFDSCxRQUFOLENBQWUsQ0FBZixDQUE1RCxFQUErRTtBQUMvRSxhQUFJWixDQUFDLEdBQUcsS0FBSSxDQUFDbkcsT0FBTCxDQUFhUCxVQUFqQixHQUE4QixLQUFJLENBQUNPLE9BQUwsQ0FBYVAsVUFBM0MsR0FBd0QwSCxHQUFHLENBQUNKLFFBQUosQ0FBYSxDQUFiLENBQTVELEVBQTZFLGtCQWhCakUsQ0FrQlo7O0FBQ0EsY0FBSSxDQUFDOUgsTUFBTCxDQUFZc0IsWUFBWixDQUF5QmtELEdBQXpCLENBQTZCLFVBQUFoRCxJQUFJLEVBQUk7QUFFbkMsZUFBSUEsSUFBSSxDQUFDRyxDQUFMLEtBQVcsS0FBSSxDQUFDM0IsTUFBTCxDQUFZMEcsTUFBWixHQUFzQlEsQ0FBQyxHQUFHLEtBQUksQ0FBQ25HLE9BQUwsQ0FBYVAsVUFBdEQsRUFBbUU7QUFDakUsaUJBQUkrSCxXQUFXLEtBQUssSUFBcEIsRUFBMEJBLFdBQVcsR0FBR0QsV0FBZDtBQUMxQkUsdUJBQVUsR0FBR0YsV0FBVyxHQUFHOUcsSUFBSSxDQUFDQSxJQUFMLENBQVU5RCxNQUF4QixHQUFpQyxDQUE5QztBQUNEOztBQUVENEssc0JBQVcsSUFBSTlHLElBQUksQ0FBQ0EsSUFBTCxDQUFVOUQsTUFBekI7QUFDRCxVQVJELEVBbkJZLENBK0JaOzs7QUFDQSxhQUFJK0ssZUFBZSxHQUFHLEtBQUksQ0FBQ3pJLE1BQUwsQ0FBWTRHLE1BQVosQ0FBbUIyQixXQUFuQixDQUF0QjtBQUNBLGFBQUlHLGFBQWEsR0FBRyxLQUFJLENBQUMxSSxNQUFMLENBQVk0RyxNQUFaLENBQW1CNEIsVUFBbkIsQ0FBcEIsQ0FqQ1ksQ0FtQ1o7O0FBQ0EsYUFBSVAsS0FBSyxDQUFDSCxRQUFOLENBQWUsQ0FBZixNQUF1QlcsZUFBZSxDQUFDWCxRQUFoQixDQUF5QixDQUF6QixDQUEzQixFQUF3RFcsZUFBZSxHQUFHUixLQUFsQjtBQUN4RCxhQUFJQyxHQUFHLENBQUNKLFFBQUosQ0FBYSxDQUFiLE1BQW9CWSxhQUFhLENBQUNaLFFBQWQsQ0FBdUIsQ0FBdkIsQ0FBeEIsRUFBbURZLGFBQWEsR0FBR1IsR0FBaEIsQ0FyQ3ZDLENBdUNaOztBQUNBLGFBQU1TLE1BQU0sR0FBRyxDQUFDLEtBQUksQ0FBQzVILE9BQUwsQ0FBYVAsVUFBYixHQUEwQixLQUFJLENBQUNPLE9BQUwsQ0FBYWdFLE1BQXhDLElBQWtELENBQWpFLENBeENZLENBMENaOztBQUNBLGNBQUksQ0FBQ2pKLFFBQUwsQ0FBZW9MLENBQUMsR0FBRyxDQUFuQixJQUF5QnVCLGVBQWUsQ0FBQzNNLFFBQWhCLENBQXlCLENBQXpCLENBQXpCO0FBQ0EsY0FBSSxDQUFDQSxRQUFMLENBQWVvTCxDQUFDLEdBQUcsQ0FBTCxHQUFVLENBQXhCLElBQTZCdUIsZUFBZSxDQUFDM00sUUFBaEIsQ0FBeUIsQ0FBekIsSUFBOEI2TSxNQUEzRDtBQUVBLGNBQUksQ0FBQzdNLFFBQUwsQ0FBZW9MLENBQUMsR0FBRyxDQUFMLEdBQVUsQ0FBeEIsSUFBNkJ3QixhQUFhLENBQUM1TSxRQUFkLENBQXVCLENBQXZCLENBQTdCO0FBQ0EsY0FBSSxDQUFDQSxRQUFMLENBQWVvTCxDQUFDLEdBQUcsQ0FBTCxHQUFVLENBQXhCLElBQTZCd0IsYUFBYSxDQUFDNU0sUUFBZCxDQUF1QixDQUF2QixJQUE4QjZNLE1BQTNEO0FBRUEsY0FBSSxDQUFDN00sUUFBTCxDQUFlb0wsQ0FBQyxHQUFHLENBQUwsR0FBVSxDQUF4QixJQUE2QndCLGFBQWEsQ0FBQzVNLFFBQWQsQ0FBdUIsQ0FBdkIsQ0FBN0I7QUFDQSxjQUFJLENBQUNBLFFBQUwsQ0FBZW9MLENBQUMsR0FBRyxDQUFMLEdBQVUsQ0FBeEIsSUFBNkJ3QixhQUFhLENBQUM1TSxRQUFkLENBQXVCLENBQXZCLElBQTZCNk0sTUFBMUQ7QUFFQSxjQUFJLENBQUM3TSxRQUFMLENBQWVvTCxDQUFDLEdBQUcsQ0FBTCxHQUFVLENBQXhCLElBQTZCdUIsZUFBZSxDQUFDM00sUUFBaEIsQ0FBeUIsQ0FBekIsQ0FBN0I7QUFDQSxjQUFJLENBQUNBLFFBQUwsQ0FBZW9MLENBQUMsR0FBRyxDQUFMLEdBQVUsQ0FBeEIsSUFBNkJ1QixlQUFlLENBQUMzTSxRQUFoQixDQUF5QixDQUF6QixJQUErQjZNLE1BQTVEO0FBckRZOztBQVNkLFlBQUssSUFBSXpCLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS2xILE1BQUwsQ0FBWXVILFVBQWhDLEVBQTRDLEVBQUVMLENBQTlDLEVBQWlEO0FBQUEsMEJBQXhDQSxDQUF3Qzs7QUFBQSxrQ0FPOEI7QUF1QzlFO0FBRUY7OztxQ0FFZXhGLEMsRUFBR0MsQyxFQUFHO0FBQUEsV0FFWmlGLE1BRlksR0FFRCxLQUFLSixLQUFMLENBQVd4RyxNQUZWLENBRVo0RyxNQUZZO0FBSXBCLFdBQU1wRyxVQUFVLEdBQUcsS0FBS08sT0FBTCxDQUFhUCxVQUFoQztBQUNBLFdBQU1vSSxhQUFhLEdBQUd6RCxJQUFJLENBQUMwRCxLQUFMLENBQVdsSCxDQUFDLEdBQUcsS0FBS1osT0FBTCxDQUFhUCxVQUE1QixDQUF0QjtBQUNBLFdBQU1zSSxjQUFjLEdBQUdGLGFBQWEsR0FBR3BJLFVBQXZDO0FBQ0EsV0FBSXVJLGVBQWUsR0FBR25DLE1BQU0sQ0FBQ0EsTUFBTSxDQUFDbEosTUFBUCxHQUFnQixDQUFqQixDQUE1QjtBQUNBLFdBQUlzTCxnQkFBZ0IsR0FBRyxJQUF2Qjs7QUFFQSxZQUFLLElBQUk5QixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTixNQUFNLENBQUNsSixNQUEzQixFQUFvQyxFQUFFd0osQ0FBdEMsRUFBeUM7QUFFdkMsYUFBSStCLEtBQUssR0FBR3JDLE1BQU0sQ0FBQ00sQ0FBRCxDQUFsQjs7QUFFQSxhQUFJK0IsS0FBSyxDQUFDbEksT0FBTixDQUFjWSxDQUFkLEtBQW9CbUgsY0FBYyxHQUFHdEksVUFBekMsRUFBcUQ7QUFFbkR1SSwwQkFBZSxHQUFHRSxLQUFsQjs7QUFFQSxlQUFJdkgsQ0FBQyxHQUFHdUgsS0FBSyxDQUFDbEksT0FBTixDQUFjVyxDQUFkLEdBQWtCdUgsS0FBSyxDQUFDbEksT0FBTixDQUFjK0YsS0FBZCxHQUFzQixDQUFoRCxFQUFtRDtBQUVqRCxpQkFBSUksQ0FBQyxLQUFLLENBQVYsRUFBYSxPQUFPLENBQUMsQ0FBUjtBQUNiLG9CQUFPTixNQUFNLENBQUNNLENBQUMsR0FBRyxDQUFMLENBQWI7QUFDRDtBQUNGO0FBQ0Y7O0FBRUQsY0FBTzZCLGVBQVA7QUFFRDs7O2lDQUVXRyxLLEVBQU87QUFFakI7QUFDQSxXQUFJQSxLQUFLLENBQUNDLElBQU4sQ0FBV0MsTUFBWCxLQUFzQixDQUExQixFQUE2QjtBQUU3QixXQUFJdEIsUUFBUSxHQUFHb0IsS0FBSyxDQUFDQyxJQUFOLENBQVdFLE1BQTFCO0FBRUF2QixlQUFRLENBQUNwRyxDQUFULElBQWMsS0FBSzhFLEtBQUwsQ0FBV3NCLFFBQVgsQ0FBb0JwRyxDQUFsQztBQUNBb0csZUFBUSxDQUFDbkcsQ0FBVCxJQUFjLEtBQUs2RSxLQUFMLENBQVdzQixRQUFYLENBQW9CbkcsQ0FBbEM7QUFFQW1HLGVBQVEsQ0FBQ3BHLENBQVQsR0FBYW9HLFFBQVEsQ0FBQ3BHLENBQVQsR0FBYyxLQUFLOEUsS0FBTCxDQUFXM0osS0FBWCxDQUFpQjZFLENBQTVDO0FBQ0FvRyxlQUFRLENBQUNuRyxDQUFULEdBQWFtRyxRQUFRLENBQUNuRyxDQUFULEdBQWEsS0FBSzZFLEtBQUwsQ0FBVzNKLEtBQVgsQ0FBaUI4RSxDQUEzQztBQUVBLFdBQU0ySCxhQUFhLEdBQUcsS0FBS0MsZUFBTCxDQUFxQnpCLFFBQVEsQ0FBQ3BHLENBQTlCLEVBQWtDb0csUUFBUSxDQUFDbkcsQ0FBM0MsQ0FBdEI7QUFDQSxXQUFJd0IsS0FBSyxHQUFHLEtBQUtxRCxLQUFMLENBQVd4RyxNQUFYLENBQWtCNEcsTUFBbEIsQ0FBeUI0QyxPQUF6QixDQUFpQ0YsYUFBakMsQ0FBWjtBQUVBLFlBQUsxRyxRQUFMLENBQWNPLEtBQUssR0FBRyxDQUF0QixFQUF5QixLQUF6QjtBQUNEOzs7aUNBRVcrRixLLEVBQU87QUFFakIsV0FBSXBCLFFBQVEsR0FBR29CLEtBQUssQ0FBQ0MsSUFBTixDQUFXRSxNQUExQjtBQUVBdkIsZUFBUSxDQUFDcEcsQ0FBVCxJQUFjLEtBQUs4RSxLQUFMLENBQVdzQixRQUFYLENBQW9CcEcsQ0FBbEM7QUFDQW9HLGVBQVEsQ0FBQ25HLENBQVQsSUFBYyxLQUFLNkUsS0FBTCxDQUFXc0IsUUFBWCxDQUFvQm5HLENBQWxDO0FBRUFtRyxlQUFRLENBQUNwRyxDQUFULEdBQWFvRyxRQUFRLENBQUNwRyxDQUFULEdBQWEsS0FBSzhFLEtBQUwsQ0FBVzNKLEtBQVgsQ0FBaUI2RSxDQUEzQztBQUNBb0csZUFBUSxDQUFDbkcsQ0FBVCxHQUFhbUcsUUFBUSxDQUFDbkcsQ0FBVCxHQUFhLEtBQUs2RSxLQUFMLENBQVczSixLQUFYLENBQWlCOEUsQ0FBM0M7QUFFQSxXQUFNMkgsYUFBYSxHQUFHLEtBQUtDLGVBQUwsQ0FBcUJ6QixRQUFRLENBQUNwRyxDQUE5QixFQUFtQ29HLFFBQVEsQ0FBQ25HLENBQTVDLENBQXRCO0FBQ0EsV0FBSXdCLEtBQUssR0FBRyxLQUFLcUQsS0FBTCxDQUFXeEcsTUFBWCxDQUFrQjRHLE1BQWxCLENBQXlCNEMsT0FBekIsQ0FBaUNGLGFBQWpDLENBQVo7QUFFQSxZQUFLMUcsUUFBTCxDQUFjLElBQWQsRUFBb0JPLEtBQUssR0FBRyxDQUE1QjtBQUNEOzs7K0JBRVMrRixLLEVBQU87QUFFZjtBQUNBLFdBQUlBLEtBQUssQ0FBQ0MsSUFBTixDQUFXQyxNQUFYLEtBQXNCLENBQTFCLEVBQTZCO0FBRTdCLFdBQUl0QixRQUFRLEdBQUdvQixLQUFLLENBQUNDLElBQU4sQ0FBV0UsTUFBMUI7QUFFQXZCLGVBQVEsQ0FBQ3BHLENBQVQsSUFBYyxLQUFLOEUsS0FBTCxDQUFXc0IsUUFBWCxDQUFvQnBHLENBQWxDO0FBQ0FvRyxlQUFRLENBQUNuRyxDQUFULElBQWMsS0FBSzZFLEtBQUwsQ0FBV3NCLFFBQVgsQ0FBb0JuRyxDQUFsQztBQUVBbUcsZUFBUSxDQUFDcEcsQ0FBVCxHQUFhb0csUUFBUSxDQUFDcEcsQ0FBVCxHQUFhLEtBQUs4RSxLQUFMLENBQVczSixLQUFYLENBQWlCNkUsQ0FBM0M7QUFDQW9HLGVBQVEsQ0FBQ25HLENBQVQsR0FBYW1HLFFBQVEsQ0FBQ25HLENBQVQsR0FBYSxLQUFLNkUsS0FBTCxDQUFXM0osS0FBWCxDQUFpQjhFLENBQTNDO0FBRUEsV0FBTTJILGFBQWEsR0FBRyxLQUFLQyxlQUFMLENBQXFCekIsUUFBUSxDQUFDcEcsQ0FBOUIsRUFBa0NvRyxRQUFRLENBQUNuRyxDQUEzQyxDQUF0QixDQWJlLENBZWY7O0FBQ0EsV0FBSTJILGFBQWEsS0FBSyxDQUFDLENBQXZCLEVBQTBCO0FBQ3hCLGNBQUs5QyxLQUFMLENBQVc1RixLQUFYLENBQWlCNkksVUFBakIsR0FBOEJILGFBQTlCO0FBQ0QsUUFGRCxNQUVPO0FBQ0wsY0FBSzlDLEtBQUwsQ0FBVzVGLEtBQVgsQ0FBaUI2SSxVQUFqQixHQUE4QixLQUFLakQsS0FBTCxDQUFXeEcsTUFBWCxDQUFrQjRHLE1BQWxCLENBQXlCNEMsT0FBekIsQ0FBaUNGLGFBQWpDLENBQTlCO0FBQ0Q7QUFDRjs7Ozs7O2dCQUlZM0ksTTs7Ozs7OztBQzdNZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZTtBQUNmO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsMkJBQTBCLGdCQUFnQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFOzs7Ozs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDdkJBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7S0NsQk1FLEs7Ozs7O3VCQU9Xd0YsSyxFQUFPO0FBQ3BCLFlBQUtxRCxXQUFMLEdBQW1CckQsS0FBbkI7QUFFQSxXQUFJLEtBQUtxRCxXQUFMLEdBQW1CLENBQUMsQ0FBeEIsRUFDRSxLQUFLQSxXQUFMLEdBQW1CLENBQUMsQ0FBcEI7QUFFRixXQUFJLEtBQUtBLFdBQUwsR0FBbUIsS0FBS2xELEtBQUwsQ0FBV3hHLE1BQVgsQ0FBa0I0RyxNQUFsQixDQUF5QmxKLE1BQWhELEVBQ0UsS0FBS2dNLFdBQUwsR0FBbUIsS0FBS2xELEtBQUwsQ0FBV3hHLE1BQVgsQ0FBa0I0RyxNQUFsQixDQUF5QmxKLE1BQTVDO0FBRUYsWUFBS00sTUFBTDtBQUNELE07eUJBRWdCO0FBQ2YsY0FBTyxLQUFLMEwsV0FBWjtBQUNEOzs7dUJBRVdyRCxLLEVBQU87QUFDakIsWUFBS3NELFFBQUwsR0FBZ0J0RCxLQUFoQjs7QUFDQSxXQUFJLEtBQUtzRCxRQUFULEVBQW1CO0FBQ2pCLGNBQUtDLE1BQUw7QUFDRCxRQUZELE1BRU87QUFDTCxjQUFLQyxPQUFMO0FBQ0Q7QUFDRixNO3lCQUVhO0FBQ1osY0FBTyxLQUFLRixRQUFaO0FBQ0Q7OztBQUVELGtCQUFZbkQsS0FBWixFQUFtQjtBQUFBOztBQUFBLHVDQWxDUixLQWtDUTs7QUFBQSxvQ0FqQ1gsSUFpQ1c7O0FBQUEsMENBL0JMLENBQUMsQ0ErQkk7O0FBQ2pCLFVBQUtBLEtBQUwsR0FBYUEsS0FBYjtBQUNBLFVBQUt6RixPQUFMLEdBQWV5RixLQUFLLENBQUN6RixPQUFyQjtBQUNBLFVBQUtmLE1BQUwsR0FBY3dHLEtBQUssQ0FBQ3hHLE1BQXBCO0FBQ0EsVUFBSzhKLE1BQUwsR0FBY0MsUUFBUSxDQUFDQyxvQkFBVCxDQUE4QixRQUE5QixFQUF3QyxDQUF4QyxDQUFkO0FBRUEsVUFBS0MsV0FBTDtBQUNBLFVBQUtKLE9BQUw7QUFDRDs7Ozs4QkFFUTtBQUNQLFlBQUtoSCxZQUFMLENBQWtCM0YsS0FBbEIsQ0FBd0JnTixPQUF4QixHQUFrQyxPQUFsQztBQUNBSCxlQUFRLENBQUNJLElBQVQsQ0FBY0MsTUFBZCxDQUFxQixLQUFLdkgsWUFBMUI7QUFDRDs7OytCQUVTO0FBQ1IsWUFBS0EsWUFBTCxDQUFrQjNGLEtBQWxCLENBQXdCZ04sT0FBeEIsR0FBa0MsTUFBbEM7QUFFQSxXQUFJSCxRQUFRLENBQUNJLElBQVQsQ0FBY0UsUUFBZCxDQUF1QixLQUFLeEgsWUFBNUIsQ0FBSixFQUNFa0gsUUFBUSxDQUFDSSxJQUFULENBQWNHLFdBQWQsQ0FBMEIsS0FBS3pILFlBQS9CO0FBQ0g7Ozs0QkFFTTtBQUNMLFlBQUtBLFlBQUwsQ0FBa0IzRixLQUFsQixDQUF3QnFOLE9BQXhCLEdBQWtDLEdBQWxDO0FBQ0Q7Ozs0QkFFTTtBQUNMLFlBQUsxSCxZQUFMLENBQWtCM0YsS0FBbEIsQ0FBd0JxTixPQUF4QixHQUFrQyxHQUFsQztBQUNEOzs7bUNBRWE7QUFBQTs7QUFDWixZQUFLMUgsWUFBTCxHQUFvQmtILFFBQVEsQ0FBQ1MsYUFBVCxDQUF1QixPQUF2QixDQUFwQjtBQUlBLFdBQU1DLFNBQVMsR0FBRzVRLE1BQU0sQ0FBQ21JLE1BQVAsQ0FBYyxLQUFLd0UsS0FBTCxDQUFXaUUsU0FBWCxDQUFxQmhPLGNBQW5DLEVBQW1EaU8sS0FBbkQsQ0FBeUQsQ0FBekQsRUFBNEQsQ0FBNUQsQ0FBbEI7QUFFQSxZQUFLN0gsWUFBTCxDQUFrQjNGLEtBQWxCLENBQXdCSSxlQUF4QixHQUEwQyxhQUExQyxDQVBZLENBUVo7O0FBRUEsWUFBS3VGLFlBQUwsQ0FBa0IzRixLQUFsQixDQUF3QnlOLEtBQXhCLEdBQWdDLGFBQWhDO0FBQ0EsWUFBSzlILFlBQUwsQ0FBa0IzRixLQUFsQixDQUF3QjBOLE1BQXhCLEdBQWlDLE1BQWpDO0FBQ0EsWUFBSy9ILFlBQUwsQ0FBa0IzRixLQUFsQixDQUF3QjRLLFFBQXhCLEdBQW1DLE9BQW5DO0FBQ0EsWUFBS2pGLFlBQUwsQ0FBa0IzRixLQUFsQixDQUF3QjJOLE9BQXhCLEdBQWtDLFFBQWxDO0FBQ0EsWUFBS2hJLFlBQUwsQ0FBa0IzRixLQUFsQixDQUF3QjROLE1BQXhCLEdBQWlDLENBQWpDO0FBQ0EsWUFBS2pJLFlBQUwsQ0FBa0IzRixLQUFsQixDQUF3QjZOLGFBQXhCLEdBQXdDLE1BQXhDO0FBQ0EsWUFBS2xJLFlBQUwsQ0FBa0IzRixLQUFsQixDQUF3QjhOLE9BQXhCLEdBQWtDLE1BQWxDO0FBQ0EsWUFBS25JLFlBQUwsQ0FBa0IzRixLQUFsQixDQUF3QnlOLEtBQXhCLEdBQWdDLEtBQUtuRSxLQUFMLENBQVd0SixLQUFYLENBQWlCQyxJQUFqRDtBQUNBLFlBQUswRixZQUFMLENBQWtCM0YsS0FBbEIsQ0FBd0IrTixlQUF4QixHQUF5QyxVQUF6QztBQUNBLFlBQUtwSSxZQUFMLENBQWtCM0YsS0FBbEIsQ0FBd0J1TixTQUF4QixvQkFBOENBLFNBQVMsQ0FBQ2hILElBQVYsQ0FBZSxJQUFmLENBQTlDO0FBQ0EsWUFBS1osWUFBTCxDQUFrQjNGLEtBQWxCLENBQXdCZ08sT0FBeEIsR0FBa0MsR0FBbEM7QUFFQSxZQUFLQyxRQUFMLENBQWMsTUFBZCxFQUFzQixVQUFDakMsS0FBRDtBQUFBLGdCQUFXLEtBQUksQ0FBQ3JHLFlBQUwsQ0FBa0JDLEtBQWxCLEVBQVg7QUFBQSxRQUF0QjtBQUNBLFlBQUtxSSxRQUFMLENBQWMsT0FBZCxFQUF1QixVQUFDakMsS0FBRDtBQUFBLGdCQUFXLEtBQUksQ0FBQ2tDLE9BQUwsQ0FBYWxDLEtBQWIsQ0FBWDtBQUFBLFFBQXZCO0FBQ0EsWUFBS2lDLFFBQUwsQ0FBYyxTQUFkLEVBQXlCLFVBQUNqQyxLQUFEO0FBQUEsZ0JBQVcsS0FBSSxDQUFDbUMsU0FBTCxDQUFlbkMsS0FBZixDQUFYO0FBQUEsUUFBekI7QUFDRDs7OzhCQUVRO0FBRVAsWUFBS25JLE9BQUwsR0FBZSxLQUFLeUYsS0FBTCxDQUFXekYsT0FBMUI7QUFDQSxZQUFLZixNQUFMLEdBQWMsS0FBS3dHLEtBQUwsQ0FBV3hHLE1BQXpCO0FBSE8sV0FLQTRHLE1BTEEsR0FLVSxLQUFLSixLQUFMLENBQVd4RyxNQUxyQixDQUtBNEcsTUFMQTs7QUFPUCxXQUFJLEtBQUs2QyxVQUFMLElBQW1CN0MsTUFBTSxDQUFDbEosTUFBOUIsRUFBc0M7QUFDcEMsY0FBSytMLFVBQUwsR0FBa0I3QyxNQUFNLENBQUNsSixNQUFQLEdBQWdCLENBQWxDO0FBQ0QsUUFUTSxDQVdQOzs7QUFDQSxXQUFJNE4sWUFBWSxHQUFHO0FBQ2pCNUosVUFBQyxFQUFFLEtBQUs4RSxLQUFMLENBQVdzQixRQUFYLENBQW9CcEcsQ0FETjtBQUVqQkMsVUFBQyxFQUFFLEtBQUs2RSxLQUFMLENBQVdzQixRQUFYLENBQW9Cbkc7QUFGTixRQUFuQixDQVpPLENBaUJQOztBQUNBLFdBQUksS0FBSzZFLEtBQUwsQ0FBV3hHLE1BQVgsQ0FBa0I0RyxNQUFsQixDQUF5QmxKLE1BQXpCLEtBQW9DLENBQUMsQ0FBekMsRUFBNEMsQ0FFMUM7QUFDRCxRQUhELE1BR00sSUFBSSxLQUFLK0wsVUFBTCxLQUFvQjdDLE1BQU0sQ0FBQ2xKLE1BQS9CLEVBQXVDO0FBRTNDLGFBQU02TixTQUFTLEdBQUczRSxNQUFNLENBQUNBLE1BQU0sQ0FBQ2xKLE1BQVAsR0FBZ0IsQ0FBakIsQ0FBeEI7QUFFQTROLHFCQUFZLENBQUM1SixDQUFiLElBQWtCNkosU0FBUyxDQUFDeEssT0FBVixDQUFrQlcsQ0FBbEIsR0FBc0I2SixTQUFTLENBQUN4SyxPQUFWLENBQWtCK0YsS0FBMUQ7QUFDQXdFLHFCQUFZLENBQUMzSixDQUFiLElBQWtCNEosU0FBUyxDQUFDeEssT0FBVixDQUFrQlksQ0FBcEMsQ0FMMkMsQ0FPM0M7QUFDRCxRQVJLLE1BUUMsSUFBSSxLQUFLOEgsVUFBTCxLQUFvQixDQUFDLENBQXpCLEVBQTRCO0FBQ2pDLGFBQU0rQixhQUFhLEdBQUc1RSxNQUFNLENBQUMsS0FBSzZDLFVBQU4sQ0FBNUI7QUFFQTZCLHFCQUFZLENBQUM1SixDQUFiLElBQWtCOEosYUFBYSxDQUFDekssT0FBZCxDQUFzQlcsQ0FBdEIsR0FBMEI4SixhQUFhLENBQUN6SyxPQUFkLENBQXNCK0YsS0FBbEU7QUFDQXdFLHFCQUFZLENBQUMzSixDQUFiLElBQWtCNkosYUFBYSxDQUFDekssT0FBZCxDQUFzQlksQ0FBeEM7QUFDRCxRQUxNLE1BS0E7QUFFTDJKLHFCQUFZLENBQUMzSixDQUFiLElBQWtCLEtBQUs2RSxLQUFMLENBQVd0SixLQUFYLENBQWlCc0QsVUFBbkM7QUFDRDs7QUFFRCxXQUFNaUssU0FBUyxHQUFHNVEsTUFBTSxDQUFDbUksTUFBUCxDQUFjLEtBQUt3RSxLQUFMLENBQVdpRSxTQUFYLENBQXFCaE8sY0FBbkMsRUFBbURpTyxLQUFuRCxDQUF5RCxDQUF6RCxFQUE0RCxDQUE1RCxDQUFsQjtBQUdBLFlBQUs3SCxZQUFMLENBQWtCM0YsS0FBbEIsQ0FBd0J1TixTQUF4QixvQkFBOENBLFNBQVMsQ0FBQ2hILElBQVYsQ0FBZSxJQUFmLENBQTlDO0FBQ0EsWUFBS1osWUFBTCxDQUFrQjNGLEtBQWxCLENBQXdCNkosTUFBeEIsR0FBaUMsS0FBS2hHLE9BQUwsQ0FBYVAsVUFBYixHQUEwQixJQUEzRDtBQUNBLFlBQUtxQyxZQUFMLENBQWtCM0YsS0FBbEIsQ0FBd0JnRCxRQUF4QixHQUFtQyxLQUFLYSxPQUFMLENBQWFQLFVBQWIsR0FBMEIsSUFBN0Q7QUFFQSxZQUFLaUwsV0FBTCxDQUFpQkgsWUFBWSxDQUFDNUosQ0FBOUIsRUFBa0M0SixZQUFZLENBQUMzSixDQUEvQztBQUNBLFlBQUtrQixZQUFMLENBQWtCQyxLQUFsQjtBQUNEOzs7NkJBRU9vRyxLLEVBQU87QUFBQSxXQUVMbkIsS0FGSyxHQUVLLEtBQUt2QixLQUFMLENBQVc1SSxNQUZoQixDQUVMbUssS0FGSyxFQUliOztBQUNBLFdBQUlBLEtBQUssQ0FBQyxDQUFELENBQUwsS0FBYUEsS0FBSyxDQUFDLENBQUQsQ0FBbEIsSUFBeUJBLEtBQUssQ0FBQyxDQUFELENBQUwsS0FBYSxJQUExQyxFQUFnRDtBQUM5QyxjQUFLMEIsVUFBTCxHQUFrQnRFLElBQUksQ0FBQ2dELEdBQUwsQ0FBU0osS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXLENBQXBCLEVBQXVCQSxLQUFLLENBQUMsQ0FBRCxDQUFMLEdBQVcsQ0FBbEMsQ0FBbEI7QUFDQSxhQUFNMkQsV0FBVyxHQUFHdkcsSUFBSSxDQUFDZ0QsR0FBTCxDQUFTQyxLQUFULENBQWUsSUFBZixFQUFxQkwsS0FBckIsQ0FBcEI7QUFDQSxhQUFNNEQsWUFBWSxHQUFHeEcsSUFBSSxDQUFDeUcsR0FBTCxDQUFTN0QsS0FBSyxDQUFDLENBQUQsQ0FBTCxHQUFXQSxLQUFLLENBQUMsQ0FBRCxDQUF6QixDQUFyQjtBQUNBLGNBQUt2QixLQUFMLENBQVc1SSxNQUFYLENBQWtCZ0YsUUFBbEIsQ0FBMkIsQ0FBM0IsRUFBNkIsS0FBN0I7QUFDQSxjQUFLNEQsS0FBTCxDQUFXcUYsWUFBWCxDQUF3QkgsV0FBeEIsRUFBcUNDLFlBQXJDO0FBQ0EsY0FBSzNJLElBQUw7QUFDRDs7QUFFRGtHLFlBQUssQ0FBQzRDLE1BQU4sQ0FBYXpGLEtBQWIsR0FBcUIsRUFBckI7QUFFQSxXQUFJNkMsS0FBSyxDQUFDQyxJQUFOLEtBQWUsSUFBbkIsRUFBeUIsT0FoQlosQ0FrQmI7O0FBQ0EsV0FBSSxLQUFLM0MsS0FBTCxDQUFXeEcsTUFBWCxDQUFrQjRHLE1BQWxCLENBQXlCbEosTUFBekIsS0FBb0MsQ0FBeEMsRUFBMkM7QUFDekMsY0FBSzhJLEtBQUwsQ0FBVy9HLElBQVgsR0FBa0J5SixLQUFLLENBQUNDLElBQXhCO0FBQ0EsY0FBS00sVUFBTCxHQUFrQixDQUFsQixDQUZ5QyxDQUkzQztBQUNDLFFBTEQsTUFLTyxJQUFJLEtBQUtBLFVBQUwsS0FBb0IsS0FBS2pELEtBQUwsQ0FBV3hHLE1BQVgsQ0FBa0I0RyxNQUFsQixDQUF5QmxKLE1BQXpCLEdBQWtDLENBQTFELEVBQTZEO0FBQ2xFLGNBQUs4SSxLQUFMLENBQVcvRyxJQUFYLElBQW1CeUosS0FBSyxDQUFDQyxJQUF6QjtBQUNBLGNBQUtNLFVBQUwsR0FGa0UsQ0FJcEU7QUFDQyxRQUxNLE1BS0E7QUFDTCxjQUFLakQsS0FBTCxDQUFXdUYsWUFBWCxDQUF3QixFQUFFLEtBQUt0QyxVQUEvQixFQUEyQ1AsS0FBSyxDQUFDQyxJQUFqRCxFQURLLENBRUw7QUFDRDs7QUFDRCxZQUFLM0MsS0FBTCxDQUFXNUksTUFBWCxDQUFrQmdGLFFBQWxCLENBQTJCLENBQTNCLEVBQThCLEtBQTlCO0FBRUQ7OzsrQkFFU3NHLEssRUFBTztBQUdmLGVBQVFBLEtBQUssQ0FBQzhDLEdBQWQ7QUFDRSxjQUFLLFdBQUw7QUFDRSxnQkFBS3hGLEtBQUwsQ0FBVzVJLE1BQVgsQ0FBa0JnRixRQUFsQixDQUEyQixDQUEzQixFQUE4QixLQUE5QjtBQUNBLGdCQUFLSSxJQUFMO0FBQ0EsZ0JBQUt5RyxVQUFMO0FBQ0E7O0FBRUYsY0FBSyxZQUFMO0FBQ0UsZ0JBQUtqRCxLQUFMLENBQVc1SSxNQUFYLENBQWtCZ0YsUUFBbEIsQ0FBMkIsQ0FBM0IsRUFBOEIsS0FBOUI7QUFDQSxnQkFBS0ksSUFBTDtBQUNBLGdCQUFLeUcsVUFBTDtBQUVBOztBQUVGLGNBQUssV0FBTDtBQUNBLGNBQUssUUFBTDtBQUFBLGVBQ1MxQixLQURULEdBQ2tCLEtBQUt2QixLQUFMLENBQVc1SSxNQUQ3QixDQUNTbUssS0FEVDs7QUFFRSxlQUFJQSxLQUFLLENBQUMsQ0FBRCxDQUFMLEtBQWEsSUFBakIsRUFBdUI7QUFDckIsa0JBQUswQixVQUFMLEdBQWtCdEUsSUFBSSxDQUFDZ0QsR0FBTCxDQUFTSixLQUFLLENBQUMsQ0FBRCxDQUFkLEVBQW1CQSxLQUFLLENBQUMsQ0FBRCxDQUF4QixDQUFsQjtBQUNBLGlCQUFNMkQsV0FBVyxHQUFHdkcsSUFBSSxDQUFDZ0QsR0FBTCxDQUFTQyxLQUFULENBQWUsSUFBZixFQUFxQkwsS0FBckIsQ0FBcEI7QUFDQSxpQkFBTTRELFlBQVksR0FBR3hHLElBQUksQ0FBQ3lHLEdBQUwsQ0FBUzdELEtBQUssQ0FBQyxDQUFELENBQUwsR0FBV0EsS0FBSyxDQUFDLENBQUQsQ0FBekIsQ0FBckI7QUFDQSxrQkFBS3ZCLEtBQUwsQ0FBVzVJLE1BQVgsQ0FBa0JnRixRQUFsQixDQUEyQixDQUEzQixFQUE2QixLQUE3QjtBQUNBLGtCQUFLNEQsS0FBTCxDQUFXcUYsWUFBWCxDQUF3QkgsV0FBeEIsRUFBcUNDLFlBQXJDO0FBQ0Esa0JBQUszSSxJQUFMO0FBQ0QsWUFQRCxNQVFLO0FBQ0gsaUJBQUlrRyxLQUFLLENBQUM4QyxHQUFOLEtBQWMsV0FBbEIsRUFDRSxLQUFLeEYsS0FBTCxDQUFXcUYsWUFBWCxDQUF3QixLQUFLcEMsVUFBTCxFQUF4QixFQUEyQyxDQUEzQztBQUNIOztBQUVEO0FBRUY7O0FBQ0EsY0FBSyxHQUFMO0FBQ0UsZUFBSVAsS0FBSyxDQUFDK0MsT0FBVixFQUFtQjtBQUNqQixrQkFBS3pGLEtBQUwsQ0FBVzVJLE1BQVgsQ0FBa0JnRixRQUFsQixDQUEyQixDQUEzQixFQUE2QixLQUFLNEQsS0FBTCxDQUFXL0csSUFBWCxDQUFnQi9CLE1BQWhCLEdBQXlCLENBQXREO0FBQ0Q7O0FBcENMOztBQXVDQSxZQUFLbUYsWUFBTCxDQUFrQndELEtBQWxCLEdBQTBCLEdBQTFCO0FBQ0EsWUFBS3hELFlBQUwsQ0FBa0J3RCxLQUFsQixHQUEwQixFQUExQjtBQUVEOzs7aUNBRVczRSxDLEVBQUdDLEMsRUFBRztBQUFBLG1DQUVnQixLQUFLNkUsS0FBTCxDQUFXaUUsU0FBWCxDQUFxQmhPLGNBRnJDO0FBQUEsV0FFTHlQLE1BRksseUJBRVRDLENBRlM7QUFBQSxXQUVNQyxNQUZOLHlCQUVHQyxDQUZIO0FBQUEsa0NBR2lCLEtBQUs3RixLQUFMLENBQVdzQixRQUg1QjtBQUFBLFdBR0x3RSxNQUhLLHdCQUdUNUssQ0FIUztBQUFBLFdBR002SyxNQUhOLHdCQUdHNUssQ0FISDtBQUtoQixXQUFJbkIsVUFBVSxHQUFHLEtBQUtPLE9BQUwsQ0FBYVAsVUFBYixHQUEwQjRMLE1BQTNDO0FBRUF6SyxRQUFDLElBQUl5SyxNQUFMO0FBQ0ExSyxRQUFDLElBQUl3SyxNQUFMO0FBRUF2SyxRQUFDLElBQUluQixVQUFMO0FBRUFtQixRQUFDLElBQUk0SyxNQUFNLEdBQUdILE1BQWQ7QUFDQTFLLFFBQUMsSUFBSTRLLE1BQU0sR0FBR0osTUFBZDtBQUVBLFlBQUtySixZQUFMLENBQWtCM0YsS0FBbEIsQ0FBd0IySSxJQUF4QixhQUFrQ25FLENBQWxDO0FBQ0EsWUFBS21CLFlBQUwsQ0FBa0IzRixLQUFsQixDQUF3QnlJLEdBQXhCLGFBQWlDaEUsQ0FBakM7QUFFQSxZQUFLa0IsWUFBTCxDQUFrQndELEtBQWxCLEdBQTBCLEdBQTFCO0FBQ0EsWUFBS3hELFlBQUwsQ0FBa0J3RCxLQUFsQixHQUEwQixFQUExQjtBQUVBLFdBQU1vRSxTQUFTLEdBQUc1USxNQUFNLENBQUNtSSxNQUFQLENBQWMsS0FBS3dLLFlBQUwsRUFBZCxFQUFtQzlCLEtBQW5DLENBQXlDLENBQXpDLEVBQTRDLENBQTVDLENBQWxCO0FBQ0EsWUFBSzdILFlBQUwsQ0FBa0IzRixLQUFsQixDQUF3QnVOLFNBQXhCLG9CQUE4Q0EsU0FBUyxDQUFDaEgsSUFBVixDQUFlLElBQWYsQ0FBOUM7QUFDRDs7O29DQUVjO0FBQ2IsV0FBTWdKLGNBQWMsR0FBRyxLQUFLakcsS0FBTCxDQUFXaUUsU0FBWCxDQUFxQmhPLGNBQTVDO0FBQ0EsV0FBSWlRLFVBQVUsR0FBRyxLQUFLNUMsTUFBTCxDQUFZNkMscUJBQVosRUFBakI7QUFDQSwyQkFBV0YsY0FBWDtBQUEyQkcsV0FBRSxFQUFFSCxjQUFjLENBQUNHLEVBQWYsR0FBb0JGLFVBQVUsQ0FBQ2hMLENBQTlEO0FBQWlFbUwsV0FBRSxFQUFFSixjQUFjLENBQUNJLEVBQWYsR0FBb0JILFVBQVUsQ0FBQy9LO0FBQXBHO0FBQ0Q7Ozs4QkFFUXVILEssRUFBTzRELFEsRUFBVTtBQUFBOztBQUN4QixZQUFLakssWUFBTCxDQUFrQmtLLGdCQUFsQixDQUFtQzdELEtBQW5DLEVBQTBDLFVBQUNBLEtBQUQsRUFBVztBQUNuRCxhQUFJLE1BQUksQ0FBQ1MsUUFBVCxFQUFtQjtBQUNqQm1ELG1CQUFRLENBQUM1RCxLQUFELENBQVI7QUFDRDtBQUNGLFFBSkQ7QUFLRDs7Ozs7O2dCQUlZckksSzs7Ozs7OztBQzlRZixxRUFBb0UsK0JBQStCLDJCQUEyQixtQ0FBbUMsZ0NBQWdDLDhCQUE4QixzQkFBc0Isd0JBQXdCLDBCQUEwQix5QkFBeUIsNkVBQTZFLDhEQUE4RCw4QkFBOEIsK0JBQStCLHdGQUF3Riw4R0FBOEcsS0FBSyxHOzs7Ozs7QUNBbnRCLGlFQUFnRSw0QkFBNEIsZ0NBQWdDLDBCQUEwQiwwQkFBMEIsc0JBQXNCLHdCQUF3QiwwQkFBMEIsdzhCQUF3OEIsOEJBQThCLDRFQUE0RSxnQ0FBZ0MsaUNBQWlDLDRDQUE0QyxrRUFBa0UsaUJBQWlCLEdBQUcsa0JBQWtCLDhDQUE4QyxHQUFHLHFCQUFxQiwrRkFBK0YsOEVBQThFLDhFQUE4RSw0SUFBNEksNERBQTRELGtEQUFrRCxrQ0FBa0MsK0VBQStFLGtGQUFrRiwySUFBMkksZ0VBQWdFLG9GQUFvRixzR0FBc0csZ1VBQWdVLGdGQUFnRix1SUFBdUksc0NBQXNDLEdBQUcsTzs7Ozs7O0FDQWxzRyxxRUFBb0UsbUNBQW1DLGdDQUFnQyxxQkFBcUIsOEdBQThHLEtBQUssRzs7Ozs7O0FDQS9RLDREQUEyRCxvQkFBb0IsaUJBQWlCLHlDQUF5Qyw2Q0FBNkMsR0FBRyxPIiwiZmlsZSI6InBpeGktYXdlc29tZS10ZXh0Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkF3ZXNvbWVUZXh0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkF3ZXNvbWVUZXh0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDdjODNlZDgxZTYzMGJkYjk2YmRmIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL3JlbmRlcmVyXCI7XG5pbXBvcnQgVGV4dCBmcm9tIFwiLi90ZXh0XCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2xheW91dFwiO1xuXG5PYmplY3QuYXNzaWduKFBJWEkuZXh0cmFzLCB7XG4gIEF3ZXNvbWVUZXh0OiBUZXh0XG59KTtcblxuaWYgKHR5cGVvZiBQSVhJICE9PSAndW5kZWZpbmVkJykge1xuICBpZiAoUElYSS5leHRyYXMpIHtcbiAgICBQSVhJLmV4dHJhcy5Bd2Vzb21lVGV4dCA9IFRleHQ7XG4gIH0gZWxzZSB7XG4gICAgUElYSS5leHRyYXMgPSB7IEF3ZXNvbWVUZXh0OiBUZXh0fTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBUZXh0LFxuICBSZW5kZXJlcixcbiAgTGF5b3V0XG59XG5cbi8qXG5cbml4ICAgICAgICAgICAgPSBzZGZfc2l6ZSAvIHRleF93aWR0aFxuaXkgICAgICAgICAgICA9IHNkZl9zaXplIC8gdGV4X2hlaWdodFxucm93X2hlaWdodCAgICA9IChyb3dfaGVpZ2h0ICsgMiAqIHNkZl9zaXplKSAvIHRleF9oZWlnaHQ7XG5hc3BlY3QgICAgICAgID0gdGV4X3dpZHRoIC8gdGV4X2hlaWdodDtcbmFzY2VudCAgICAgICAgPSBmb250LT5hc2NlbnQgKiBzY2FsZVlcbmRlc2NlbnQgICAgICAgPSBmYWJzZihmb250LT5kZXNjZW50ICogc2NhbGVZKVxubGluZV9nYXAgICAgICA9IGZvbnQtPmxpbmVfZ2FwICogc2NhbGUgWVxuY2FwX2hlaWdodCAgICA9IGd4Y2FwLm1heC55ICogc2NhbGVZXG54X2hlaWdodCAgICAgID0gZ3gubWF4LnkgKiBzY2FsZVlcbnNwYWNlX2FkdmFuY2UgPSBnc3BhY2UuYWR2YW5jZV93aWR0aCAqIHNjYWxlWFxuXG5cbnNjYWxleSA9IHJvd19oZWlnaHQgLyB0ZXhfaGVpZ2h0IC8gKCBmb250LT5nbHlwaF9tYXgueSAtIGZvbnQtPmdseXBoX21pbi55ICk7XG5zY2FsZXggPSByb3dfaGVpZ2h0IC8gdGV4X3dpZHRoIC8gKCBmb250LT5nbHlwaF9tYXgueSAtIGZvbnQtPmdseXBoX21pbi55ICk7XG5nc3BhY2UgPSBmb250LT5nbHlwaHNbIGZvbnQtPmdseXBoX2lkeCggJyAnICkgXTtcbmd4ICAgICA9IGZvbnQtPmdseXBoc1sgZm9udC0+Z2x5cGhfaWR4KCAneCcgKSBdXG5neGNhcCAgPSBmb250LT5nbHlwaHNbIGZvbnQtPmdseXBoX2lkeCggJ1gnICkgXVxuXG5cbnNkZl9zaXplID0gMTBcblxuKi9cblxuXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgQXdlc29tZVRleHQgZnJvbSBcIi4vdGV4dFwiO1xuXG5jb25zdCB2ZXJ0ZXhTaGFkZXIgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3RleHQvdmVydC5nbHNsXCIpO1xuY29uc3QgZnJhZ21lbnRTaGFkZXIgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3RleHQvZnJhZy5nbHNsXCIpO1xuXG5jb25zdCBzZWxlY3RWZXJ0ZXh0U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy9zZWxlY3QvdmVydC5nbHNsXCIpO1xuY29uc3Qgc2VsZWN0RnJhZ21lbnRTaGFkZXIgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3NlbGVjdC9mcmFnLmdsc2xcIik7XG5cbmNvbnN0IGdsQ29yZSA9IFBJWEkuZ2xDb3JlO1xuXG5jbGFzcyBBd2Vzb21lVGV4dFJlbmRlcmVyIGV4dGVuZHMgUElYSS5PYmplY3RSZW5kZXJlciB7XG5cbiAgc3RhdGljIGNvbnRleHRUZXh0ID0gMDtcbiAgc3RhdGljIGNvbnRleHRTZWxlY3QgPSAxO1xuXG4gIHNlbGVjdENvbG9yID0gMHhGRkIzQzM7XG5cblxuICBjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xuICAgIHN1cGVyKHJlbmRlcmVyKTtcbiAgICB0aGlzLnRleHRTaGFkZXIgPSBudWxsO1xuICAgIHRoaXMuc2VsZWN0U2hhZGVyID0gbnVsbDtcblxuICB9XG5cbiAgb25Db250ZXh0Q2hhbmdlKCkge1xuICAgIGNvbnN0IGdsID0gdGhpcy5yZW5kZXJlci5nbDtcbiAgICBnbC5nZXRFeHRlbnNpb24oXCJPRVNfc3RhbmRhcmRfZGVyaXZhdGl2ZXNcIik7XG4gICAgdGhpcy50ZXh0U2hhZGVyID0gbmV3IFBJWEkuU2hhZGVyKGdsLCB2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyKTtcbiAgICB0aGlzLnNlbGVjdFNoYWRlciA9IG5ldyBQSVhJLlNoYWRlcihnbCwgc2VsZWN0VmVydGV4dFNoYWRlciwgc2VsZWN0RnJhZ21lbnRTaGFkZXIpO1xuICB9XG5cbiAgcmVuZGVyVGV4dChzb3VyY2UpIHtcblxuICAgIGxldCBnbERhdGEgPSBzb3VyY2UuX2dsRGF0YXNbQXdlc29tZVRleHRSZW5kZXJlci5jb250ZXh0VGV4dF07XG5cbiAgICBpZiAoIWdsRGF0YSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5iaW5kVmFvKG51bGwpO1xuICAgICAgZ2xEYXRhID0gdGhpcy5idWlsZFRleHRHbERhdGEoc291cmNlLCB0aGlzLnJlbmRlcmVyLmdsKTtcbiAgICAgIHNvdXJjZS5fZ2xEYXRhc1tBd2Vzb21lVGV4dFJlbmRlcmVyLmNvbnRleHRUZXh0XSA9IGdsRGF0YTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyLmJpbmRWYW8oZ2xEYXRhLnZhbyk7XG5cbiAgICBpZiAoc291cmNlLmRpcnR5KSB7XG4gICAgICBzb3VyY2UuZGlydHkgPSBmYWxzZTtcbiAgICAgIGdsRGF0YS51dkJ1ZmZlci51cGxvYWQoc291cmNlLnV2cyk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZS5pbmRleERpcnR5KSB7XG4gICAgICBzb3VyY2UuaW5kZXhEaXJ0eSA9IGZhbHNlO1xuICAgICAgZ2xEYXRhLmluZGV4QnVmZmVyLnVwbG9hZChzb3VyY2UuaW5kaWNlcyk7XG4gICAgfVxuXG4gICAgZ2xEYXRhLnZlcnRleEJ1ZmZlci51cGxvYWQoc291cmNlLnZlcnRpY2VzKTtcbiAgICB0aGlzLnJlbmRlcmVyLmJpbmRTaGFkZXIoZ2xEYXRhLnNoYWRlcik7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnN0YXRlLnNldEJsZW5kTW9kZShzb3VyY2UuYmxlbmRNb2RlKTtcblxuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMudVNhbXBsZXIgPSB0aGlzLnJlbmRlcmVyLmJpbmRUZXh0dXJlKHNvdXJjZS50ZXh0dXJlKTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnRyYW5zbGF0aW9uTWF0cml4ID0gc291cmNlLndvcmxkVHJhbnNmb3JtLnRvQXJyYXkodHJ1ZSk7XG5cbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmhpbnRfYW1vdW50ID0gMS4wO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuc2RmTXVsdGlwbGllciA9IEF3ZXNvbWVUZXh0LnNjYWxlO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuc3VicGl4ZWxfYW1vdW50ID0gMS4wO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuZm9udF9jb2xvciA9IFBJWEkudXRpbHMuaGV4MnJnYihzb3VyY2Uuc3R5bGUuZmlsbC5yZXBsYWNlKFwiI1wiLCBcIjB4XCIpKTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmJnX2NvbG9yID0gUElYSS51dGlscy5oZXgycmdiKHNvdXJjZS5iYWNrZ3JvdW5kQ29sb3IucmVwbGFjZShcIiNcIiwgXCIweFwiKSk7XG5cbiAgICBjb25zdCBkcmF3TW9kZSA9IHNvdXJjZS5kcmF3TW9kZSA9IHRoaXMucmVuZGVyZXIuZ2wuVFJJQU5HTEVTO1xuICAgIGdsRGF0YS52YW8uZHJhdyhkcmF3TW9kZSwgc291cmNlLmluZGljZXMubGVuZ3RoLCAwKTtcblxuICB9XG5cbiAgcmVuZGVyU2VsZWN0KHNvdXJjZSkge1xuICAgIGxldCBnbERhdGEgPSBzb3VyY2UuX2dsRGF0YXNbQXdlc29tZVRleHRSZW5kZXJlci5jb250ZXh0U2VsZWN0XTtcblxuICAgIGlmICghZ2xEYXRhIHx8IHNvdXJjZS5zZWxlY3QuZGlydHkpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYmluZFZhbyhudWxsKTtcbiAgICAgIGdsRGF0YSA9IHRoaXMuYnVpbGRTZWxlY3RHbERhdGEoc291cmNlLCB0aGlzLnJlbmRlcmVyLmdsKTtcbiAgICAgIHNvdXJjZS5fZ2xEYXRhc1tBd2Vzb21lVGV4dFJlbmRlcmVyLmNvbnRleHRTZWxlY3RdID0gZ2xEYXRhO1xuICAgICAgc291cmNlLnNlbGVjdC5kaXJ0eSA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIuYmluZFZhbyhnbERhdGEudmFvKTtcblxuICAgIGlmIChzb3VyY2Uuc2VsZWN0LmluZGV4RGlydHkpIHtcbiAgICAgIHNvdXJjZS5zZWxlY3QuaW5kZXhEaXJ0eSA9IGZhbHNlO1xuICAgICAgZ2xEYXRhLmluZGV4QnVmZmVyLnVwbG9hZChzb3VyY2Uuc2VsZWN0LmluZGljZXMpO1xuICAgIH1cblxuICAgIGdsRGF0YS52ZXJ0ZXhCdWZmZXIudXBsb2FkKHNvdXJjZS5zZWxlY3QudmVydGljZXMpO1xuICAgIHRoaXMucmVuZGVyZXIuYmluZFNoYWRlcihnbERhdGEuc2hhZGVyKTtcblxuICAgIHRoaXMucmVuZGVyZXIuc3RhdGUuc2V0QmxlbmRNb2RlKDE3KTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnRyYW5zbGF0aW9uTWF0cml4ID0gc291cmNlLndvcmxkVHJhbnNmb3JtLnRvQXJyYXkodHJ1ZSk7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5iZ19jb2xvciA9IFBJWEkudXRpbHMuaGV4MnJnYih0aGlzLnNlbGVjdENvbG9yKTtcblxuICAgIGNvbnN0IGRyYXdNb2RlID0gc291cmNlLmRyYXdNb2RlID0gdGhpcy5yZW5kZXJlci5nbC5UUklBTkdMRVM7XG4gICAgZ2xEYXRhLnZhby5kcmF3KGRyYXdNb2RlLCBzb3VyY2Uuc2VsZWN0LmluZGljZXMubGVuZ3RoLCAwKTtcbiAgfVxuXG4gIHJlbmRlcihzb3VyY2UpIHtcblxuICAgIGlmIChzb3VyY2Uuc3R5bGVJRCAhPT0gc291cmNlLnN0eWxlLnN0eWxlSUQpIHtcbiAgICAgIHNvdXJjZS51cGRhdGUoKTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlLnN0YXRlID09PSBBd2Vzb21lVGV4dC5zdGF0ZXMuZWRpdGFibGUgfHwgc291cmNlLnN0YXRlID09PSBBd2Vzb21lVGV4dC5zdGF0ZXMuc2VsZWN0aW5nKSB7XG4gICAgICB0aGlzLnJlbmRlclNlbGVjdChzb3VyY2UpO1xuICAgIH1cbiAgICB0aGlzLnJlbmRlclRleHQoc291cmNlKTtcbiAgfVxuXG4gIGJ1aWxkVGV4dEdsRGF0YShzb3VyY2UsIGdsKSB7XG5cbiAgICBjb25zdCBnbERhdGEgPSB7XG4gICAgICBzaGFkZXI6IHRoaXMudGV4dFNoYWRlcixcbiAgICAgIHZlcnRleEJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgc291cmNlLnZlcnRpY2VzLCBnbC5TVFJFQU1fRFJBVyksXG4gICAgICB1dkJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgc291cmNlLnV2cywgZ2wuU1RSRUFNX0RSQVcpLFxuICAgICAgc2RmQnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlVmVydGV4QnVmZmVyKGdsLCBzb3VyY2Uuc2RmU2l6ZXMsIGdsLlNUQVRJQ19EUkFXKSxcbiAgICAgIGluZGV4QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlSW5kZXhCdWZmZXIoZ2wsIHNvdXJjZS5pbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyksXG4gICAgICAvLyBidWlsZCB0aGUgdmFvIG9iamVjdCB0aGF0IHdpbGwgcmVuZGVyLi5cbiAgICAgIHZhbzogbnVsbCxcbiAgICAgIGRpcnR5OiBzb3VyY2UuZGlydHksXG4gICAgICBpbmRleERpcnR5OiBzb3VyY2UuaW5kZXhEaXJ0eSxcbiAgICB9O1xuXG4gICAgZ2xEYXRhLnZhbyA9IG5ldyBnbENvcmUuVmVydGV4QXJyYXlPYmplY3QoZ2wpXG4gICAgICAuYWRkSW5kZXgoZ2xEYXRhLmluZGV4QnVmZmVyKVxuICAgICAgLmFkZEF0dHJpYnV0ZShnbERhdGEudmVydGV4QnVmZmVyLCBnbERhdGEuc2hhZGVyLmF0dHJpYnV0ZXMuYVZlcnRleFBvc2l0aW9uLCBnbC5GTE9BVCwgZmFsc2UsIDIgKiA0LCAwKVxuICAgICAgLmFkZEF0dHJpYnV0ZShnbERhdGEudXZCdWZmZXIsIGdsRGF0YS5zaGFkZXIuYXR0cmlidXRlcy5hVGV4dHVyZUNvb3JkLCBnbC5GTE9BVCwgZmFsc2UsIDIgKiA0LCAwKVxuICAgICAgLmFkZEF0dHJpYnV0ZShnbERhdGEuc2RmQnVmZmVyLCBnbERhdGEuc2hhZGVyLmF0dHJpYnV0ZXMuYVNkZlNpemUsIGdsLkZMT0FULCBmYWxzZSwgNCwgMCk7XG5cbiAgICByZXR1cm4gZ2xEYXRhXG4gIH1cblxuICBidWlsZFNlbGVjdEdsRGF0YShzb3VyY2UsIGdsKSB7XG4gICAgY29uc3QgZ2xEYXRhID0ge1xuICAgICAgc2hhZGVyOiB0aGlzLnNlbGVjdFNoYWRlcixcbiAgICAgIHZlcnRleEJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgc291cmNlLnNlbGVjdC52ZXJ0aWNlcywgZ2wuU1RSRUFNX0RSQVcpLFxuICAgICAgaW5kZXhCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVJbmRleEJ1ZmZlcihnbCwgc291cmNlLnNlbGVjdC5pbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyksXG4gICAgICB2YW86IG51bGxcbiAgICB9O1xuXG4gICAgZ2xEYXRhLnZhbyA9IG5ldyBnbENvcmUuVmVydGV4QXJyYXlPYmplY3QoZ2wpXG4gICAgICAuYWRkSW5kZXgoZ2xEYXRhLmluZGV4QnVmZmVyKVxuICAgICAgLmFkZEF0dHJpYnV0ZShnbERhdGEudmVydGV4QnVmZmVyLCBnbERhdGEuc2hhZGVyLmF0dHJpYnV0ZXMuYVZlcnRleFBvc2l0aW9uLCBnbC5GTE9BVCwgZmFsc2UsIDIgKiA0LCAwKVxuXG4gICAgcmV0dXJuIGdsRGF0YVxuICB9XG5cbn1cblxuUElYSS5XZWJHTFJlbmRlcmVyLnJlZ2lzdGVyUGx1Z2luKCdBd2Vzb21lVGV4dFJlbmRlcmVyJywgQXdlc29tZVRleHRSZW5kZXJlcik7XG5cbmV4cG9ydCBkZWZhdWx0IEF3ZXNvbWVUZXh0UmVuZGVyZXJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9yZW5kZXJlci5qcyIsImNvbnN0IGNyZWF0ZUluZGljZXMgPSByZXF1aXJlKFwicXVhZC1pbmRpY2VzXCIpXG5pbXBvcnQgVGV4dExheW91dCBmcm9tICcuL2xheW91dCc7XG5pbXBvcnQgU2VsZWN0IGZyb20gJy4vc2VsZWN0J1xuaW1wb3J0IElucHV0IGZyb20gJy4vaW5wdXQnXG5cbmNsYXNzIEF3ZXNvbWVUZXh0IGV4dGVuZHMgUElYSS5tZXNoLk1lc2gge1xuXG4gIHN0YXRpYyBzY2FsZSA9IDEuMDtcbiAgc3RhdGljIHN0YXRlcyA9IHtyZWd1bGFyOiAwLCBlZGl0YWJsZTogMSwgc2VsZWN0aW5nOiAyfTtcbiAgc3RhdGljIGN1cnJlbnRFZGl0aW5nRWxlbWVudCA9IG51bGw7XG5cbiAgcGx1Z2luTmFtZSA9ICdBd2Vzb21lVGV4dFJlbmRlcmVyJztcbiAgc3RhdGUgPSBBd2Vzb21lVGV4dC5zdGF0ZXMucmVndWxhcjtcbiAgY2xpY2tzQ291bnQgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKHRleHQsIHN0eWxlLCBmb250LCBlZGl0YWJsZSA9IGZhbHNlKSB7XG4gICAgc3VwZXIoZm9udC50ZXh0dXJlKTtcblxuICAgIHRoaXMuc3R5bGUgPSBuZXcgUElYSS5UZXh0U3R5bGUoc3R5bGUpO1xuICAgIHRoaXMuYmFja2dyb3VuZENvbG9yID0gc3R5bGUuYmFja2dyb3VuZENvbG9yO1xuICAgIHRoaXMuX3RleHQgPSB0ZXh0O1xuICAgIHRoaXMuX2ZvbnQgPSBmb250LmZvbnQ7XG4gICAgdGhpcy5fdGV4dHVyZSA9IGZvbnQudGV4dHVyZTtcbiAgICB0aGlzLmVkaXRhYmxlID0gZWRpdGFibGU7XG5cblxuICAgIC8vIENhbGN1YWx0ZSBsYXlvdXRcbiAgICB0aGlzLmxheW91dCA9IG5ldyBUZXh0TGF5b3V0KHRoaXMsIHtcbiAgICAgIGZvbnRTaXplOiB0aGlzLnN0eWxlLmZvbnRTaXplLFxuICAgICAgd3JhcFdvcmRzOiB0aGlzLnN0eWxlLmJyZWFrV29yZHMsXG4gICAgICB3cmFwcGVyV2lkdGg6IHRoaXMuc3R5bGUud29yZFdyYXBXaWR0aCxcbiAgICAgIGFsaWduOiB0aGlzLnN0eWxlLmFsaWduLFxuICAgICAgbGluZUhlaWdodDogdGhpcy5zdHlsZS5saW5lSGVpZ2h0LFxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuZWRpdGFibGUpIHtcblxuXG4gICAgICB0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuYnV0dG9uTW9kZSA9IHRydWU7XG5cbiAgICAgIHRoaXMuc2VsZWN0ID0gbmV3IFNlbGVjdCh0aGlzKTtcbiAgICAgIHRoaXMuaW5wdXQgPSBuZXcgSW5wdXQodGhpcyk7XG4gICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyKTtcbiAgICB9XG5cblxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMubWV0cmljcyA9IHRoaXMuZm9udE1ldHJpY3ModGhpcy5zdHlsZS5mb250U2l6ZSk7XG5cbiAgICB0aGlzLmxheW91dC51cGRhdGUoKTtcblxuICAgIGlmICh0aGlzLmVkaXRhYmxlKSB7XG4gICAgICB0aGlzLnNlbGVjdC51cGRhdGUoKTtcbiAgICAgIHRoaXMuaW5wdXQudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgLy8gQXJyYXlzIGZvciB2ZXJ0aWNlcywgdXZzIGFuZCBzZGZcbiAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0ICogMik7XG4gICAgdGhpcy51dnMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubGF5b3V0LmxldHRlcnNDb3VudCAqIDQgKiAyKTtcbiAgICB0aGlzLnNkZlNpemVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0KTtcbiAgICB0aGlzLmFycmF5UG9zaXRpb25zID0geyB2ZXJ0ZXg6IDAsIHV2czogMCwgc2RmOiAwIH07XG5cbiAgICAvLyBGaWxsIGFycmF5cyB3b3JkIGJ5IHdvcmRcbiAgICB0aGlzLmxheW91dC53b3Jkc01ldHJpY3MuZm9yRWFjaCAod29yZCA9PiB7XG4gICAgICB0aGlzLndyaXRlU3RyaW5nKHdvcmQud29yZCwgdGhpcy5mb250LCB0aGlzLm1ldHJpY3MsIFt3b3JkLngsIHdvcmQueV0pO1xuICAgIH0pO1xuXG4gICAgLy8gUHJlcGFyZSBpbmRpY2VzXG4gICAgdGhpcy5pbmRpY2VzID0gY3JlYXRlSW5kaWNlcyh7XG4gICAgICBjbG9ja3dpc2U6IHRydWUsXG4gICAgICB0eXBlOiAndWludDE2JyxcbiAgICAgIGNvdW50OiB0aGlzLmxheW91dC5sZXR0ZXJzQ291bnRcbiAgICB9KTtcblxuICAgIHRoaXMuc3R5bGVJRCA9IHRoaXMuc3R5bGUuc3R5bGVJRDtcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcbiAgICB0aGlzLmluZGV4RGlydHkgPSB0cnVlO1xuICAgIHRoaXMuX2dsRGF0YXMgPSBbXTtcbiAgfVxuXG4gIHNldFN0YXRlKG5ld1N0YXRlKSB7XG5cbiAgICBpZiAoIXRoaXMuZWRpdGFibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IHN0YXRlcyB9ID0gQXdlc29tZVRleHQ7XG5cbiAgICBpZiAoIW5ld1N0YXRlIGluIE9iamVjdC52YWx1ZXMoc3RhdGVzKSkgcmV0dXJuO1xuXG4gICAgc3dpdGNoIChuZXdTdGF0ZSkge1xuICAgICAgY2FzZSBzdGF0ZXMucmVndWxhcjpcbiAgICAgICAgdGhpcy5zZXRSZWd1bGFyU3RhdGUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHN0YXRlcy5lZGl0YWJsZTpcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyKSB7XG4gICAgICAgICAgdGhpcy5zZXRFZGl0YWJsZVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IG5ld1N0YXRlO1xuICB9XG5cbiAgZ2V0IHRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cblxuICBzZXQgdGV4dCh2YWx1ZSkge1xuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc2V0UmVndWxhclN0YXRlKCkge1xuXG4gICAgQXdlc29tZVRleHQuY3VycmVudEVkaXRpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgIHRoaXMub2ZmKFwibW91c2Vkb3duXCIpO1xuICAgIHRoaXMub2ZmKFwibW91c2Vtb3ZlXCIpO1xuICAgIHRoaXMub2ZmKFwibW91c2V1cFwiKTtcbiAgICB0aGlzLm9mZihcIm1vdXNldXBvdXRzaWRlXCIpO1xuXG4gICAgdGhpcy5pbnB1dC5lbmFibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLm9uKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICBpZiAodGhpcy5jbGlja3NDb3VudCA9PT0gMSkge1xuICAgICAgICB0aGlzLmNsaWNrc0NvdW50ID0gMDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShBd2Vzb21lVGV4dC5zdGF0ZXMuZWRpdGFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jbGlja3NDb3VudCA9PT0gMCkge1xuICAgICAgICB0aGlzLmNsaWNrc0NvdW50Kys7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNsaWNrc0NvdW50ID0gMDtcbiAgICAgICAgfSwgMzAwKVxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG4gIHNldEVkaXRhYmxlU3RhdGUoKSB7XG5cbiAgICAvLyBEaXNhYmxlIHByZXZpb3VzbHkgZW5hYmxlZCBmaWVsZFxuICAgIGlmIChBd2Vzb21lVGV4dC5jdXJyZW50RWRpdGluZ0VsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgQXdlc29tZVRleHQuY3VycmVudEVkaXRpbmdFbGVtZW50LnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyKTtcbiAgICB9XG4gICAgQXdlc29tZVRleHQuY3VycmVudEVkaXRpbmdFbGVtZW50ID0gdGhpcztcblxuICAgIC8vIERpc2FibGUgdW5uZWNlc3NhcnkgZXZlbnRzXG4gICAgdGhpcy5vZmYoXCJjbGlja1wiKTtcblxuICAgIHRoaXMuaW5wdXQuZW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5pbnB1dC5oaWRlKCk7XG5cbiAgICAvLyBTZWxlY3QgYWxsIGNoYXJhY3RlcnNcbiAgICB0aGlzLnNlbGVjdC5zZXRSYW5nZSgwLHRoaXMudGV4dC5sZW5ndGggLSAxKTtcbiAgICB0aGlzLmlucHV0LmlucHV0RWxlbWVudC5mb2N1cygpO1xuXG4gICAgdGhpcy5vbihcIm1vdXNlZG93blwiLCBlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLnNlbGVjdGluZyk7XG4gICAgICB0aGlzLnNlbGVjdC5vbk1vdXNlRG93bihlKTtcbiAgICAgIHRoaXMuaW5wdXQuc2hvdygpO1xuICAgICAgdGhpcy5pbnB1dC51cGRhdGUoZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKFwibW91c2Vtb3ZlXCIsIGUgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IEF3ZXNvbWVUZXh0LnN0YXRlcy5zZWxlY3RpbmcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Qub25Nb3VzZU1vdmUoZSk7XG4gICAgICAgIHRoaXMuaW5wdXQuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vbihcIm1vdXNldXBcIiwgZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5lZGl0YWJsZSk7XG4gICAgICB0aGlzLnNlbGVjdC5vbk1vdXNlVXAoZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKFwibW91c2V1cG91dHNpZGVcIiwgZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5lZGl0YWJsZSk7XG4gICAgICB0aGlzLnNlbGVjdC5vbk1vdXNlVXAoZSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGluc2VydFN0cmluZyhpbmRleCwgc3RyaW5nKSB7XG4gICAgdGhpcy50ZXh0ID0gdGhpcy50ZXh0LnN1YnN0cigwLCBpbmRleCkgKyBzdHJpbmcgKyB0aGlzLnRleHQuc3Vic3RyKGluZGV4KTtcbiAgfVxuXG4gIHJlbW92ZVN0cmluZyhpbmRleCwgbGVuZ3RoKSB7XG4gICAgbGV0IG5ld1RleHQgPSB0aGlzLnRleHQuc3BsaXQoXCJcIik7XG4gICAgbmV3VGV4dC5zcGxpY2UoaW5kZXgsIGxlbmd0aCArIDEpO1xuICAgIHRoaXMudGV4dCA9IG5ld1RleHQuam9pbihcIlwiKTtcbiAgfVxuXG4gIGdldCB0ZXh0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLl90ZXh0dXJlO1xuICB9XG5cbiAgZ2V0IGZvbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvbnRcbiAgfVxuXG4gIHdyaXRlU3RyaW5nKCBzdHJpbmcsIGZvbnQsIGZvbnRfbWV0cmljcywgcG9zKSB7XG4gICAgbGV0IHByZXZfY2hhciA9IFwiIFwiOyAgLy8gVXNlZCB0byBjYWxjdWxhdGUga2VybmluZ1xuICAgIGxldCBjcG9zICAgICAgPSBwb3M7ICAvLyBDdXJyZW50IHBlbiBwb3NpdGlvblxuICAgIGxldCB4X21heCAgICAgPSAwLjA7ICAvLyBNYXggd2lkdGggLSB1c2VkIGZvciBib3VuZGluZyBib3hcbiAgICBsZXQgc2NhbGUgICAgID0gZm9udF9tZXRyaWNzLmNhcFNjYWxlO1xuXG4gICAgbGV0IHN0cl9wb3MgPSAwO1xuXG4gICAgZm9yKDs7KSB7XG4gICAgICBpZiAoIHN0cl9wb3MgPT09IHN0cmluZy5sZW5ndGggKSBicmVhaztcblxuICAgICAgdmFyIHNjaGFyID0gc3RyaW5nWyBzdHJfcG9zIF07XG4gICAgICBzdHJfcG9zKys7XG5cbiAgICAgIGlmICggc2NoYXIgPT09IFwiXFxuXCIgKSB7XG4gICAgICAgIGlmICggY3Bvc1swXSA+IHhfbWF4ICkgeF9tYXggPSBjcG9zWzBdOyAvLyBFeHBhbmRpbmcgdGhlIGJvdW5kaW5nIHJlY3RcbiAgICAgICAgY3Bvc1swXSAgPSBwb3NbMF07XG4gICAgICAgIGNwb3NbMV0gLT0gZm9udF9tZXRyaWNzLmxpbmVIZWlnaHQ7XG4gICAgICAgIHByZXZfY2hhciA9IFwiIFwiO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCBzY2hhciA9PT0gXCIgXCIgKSB7XG4gICAgICAgIC8vc2NoYXIgPSBcIl9cIlxuICAgICAgICAvL2Nwb3NbMF0gKz0gZm9udC5zcGFjZV9hZHZhbmNlICogc2NhbGU7XG4gICAgICAgIC8vcHJldl9jaGFyID0gXCIgXCI7XG4gICAgICAgIC8vY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBmb250X2NoYXIgPSBmb250LmNoYXJzWyBzY2hhciBdO1xuICAgICAgaWYgKCAhZm9udF9jaGFyICkgeyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdWJzdGl0dXRpbmcgdW5hdmFpbGFibGUgY2hhcmFjdGVycyB3aXRoICc/J1xuICAgICAgICBzY2hhciA9IFwiP1wiO1xuICAgICAgICBmb250X2NoYXIgPSBmb250LmNoYXJzWyBcIj9cIiBdO1xuICAgICAgfVxuXG4gICAgICB2YXIga2VybiA9IGZvbnQua2VyblsgcHJldl9jaGFyICsgc2NoYXIgXTtcbiAgICAgIGlmICggIWtlcm4gKSBrZXJuID0gMC4wO1xuXG4gICAgICAvLyBjYWxjdWxhdGluZyB0aGUgZ2x5cGggcmVjdGFuZ2xlIGFuZCBjb3B5aW5nIGl0IHRvIHRoZSB2ZXJ0ZXggYXJyYXlcbiAgICAgIHZhciByZWN0ID0gdGhpcy5jaGFyUmVjdCggY3BvcywgZm9udCwgZm9udF9tZXRyaWNzLCBmb250X2NoYXIsIGtlcm4gKTtcblxuICAgICAgcmVjdC5wb3NpdGlvbnMubWFwKChwb3MpID0+IHRoaXMudmVydGljZXNbIHRoaXMuYXJyYXlQb3NpdGlvbnMudmVydGV4KysgXSA9IHBvcyApO1xuICAgICAgcmVjdC51dnMubWFwKCh1dikgPT4gdGhpcy51dnNbIHRoaXMuYXJyYXlQb3NpdGlvbnMudXZzKysgXSA9IHV2ICk7XG4gICAgICByZWN0LnNkZlNpemVzLm1hcCgoc2RmKSA9PiB0aGlzLnNkZlNpemVzWyB0aGlzLmFycmF5UG9zaXRpb25zLnNkZisrIF0gPSBzZGYgKTtcblxuICAgICAgcHJldl9jaGFyID0gc2NoYXI7XG4gICAgICBjcG9zID0gcmVjdC5wb3M7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlY3QgOiBbIHBvc1swXSwgcG9zWzFdLCB4X21heCAtIHBvc1swXSwgcG9zWzFdIC0gY3Bvc1sxXSArIGZvbnRfbWV0cmljcy5saW5lSGVpZ2h0IF0sXG4gICAgICBzdHJpbmdfcG9zIDogc3RyX3BvcyxcbiAgICAgIC8vYXJyYXlfcG9zIDogYXJyYXlfcG9zXG4gICAgfVxuXG4gIH1cblxuICBmb250TWV0cmljcyhmb250U2l6ZSwgbW9yZUxpbmVHYXAgPSAwLjIpIHtcblxuICAgIGNvbnN0IHtjYXBfaGVpZ2h0LCB4X2hlaWdodCwgYXNjZW50OiBmb250QXNjZW50ICwgZGVzY2VudCwgbGluZV9nYXB9ID0gdGhpcy5mb250O1xuXG4gICAgY29uc3QgY2FwU2NhbGUgPSB0aGlzLnN0eWxlLmZvbnRTaXplIC8gY2FwX2hlaWdodDtcbiAgICBjb25zdCBsb3dTY2FsZSA9IE1hdGgucm91bmQoIHhfaGVpZ2h0ICogY2FwU2NhbGUgKSAvIHhfaGVpZ2h0O1xuICAgIGNvbnN0IGFzY2VudCA9IE1hdGgucm91bmQoIGZvbnRBc2NlbnQgKiBjYXBTY2FsZSApO1xuICAgIGxldCBsaW5lSGVpZ2h0ID0gTWF0aC5yb3VuZCggY2FwU2NhbGUgKiAoIGZvbnRBc2NlbnQgKyBkZXNjZW50ICsgbGluZV9nYXAgKSArIG1vcmVMaW5lR2FwKTtcblxuICAgIGlmICh0aGlzLnN0eWxlLmxpbmVIZWlnaHQgPiAwKVxuICAgICAgbGluZUhlaWdodCA9IHRoaXMuc3R5bGUubGluZUhlaWdodDtcbiAgICBlbHNlXG4gICAgICB0aGlzLnN0eWxlLmxpbmVIZWlnaHQgPSBsaW5lSGVpZ2h0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcFNjYWxlICAgOiBjYXBTY2FsZSxcbiAgICAgIGxvd1NjYWxlICAgOiBsb3dTY2FsZSxcbiAgICAgIGFzY2VudCAgICAgIDogYXNjZW50LFxuICAgICAgbGluZUhlaWdodCA6IGxpbmVIZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgY2hhclJlY3QoIHBvcywgZm9udCwgZm9udF9tZXRyaWNzLCBmb250X2NoYXIsIGtlcm4gPSAwLjAgKSB7XG5cbiAgICAvLyBMb3cgY2FzZSBjaGFyYWN0ZXJzIGhhdmUgZmlyc3QgYml0IHNldCBpbiAnZmxhZ3MnXG4gICAgdmFyIGxvd2Nhc2UgPSAoIGZvbnRfY2hhci5mbGFncyAmIDEgKSA9PT0gMTtcblxuICAgIC8vIFBlbiBwb3NpdGlvbiBpcyBhdCB0aGUgdG9wIG9mIHRoZSBsaW5lLCBZIGdvZXMgdXBcbiAgICB2YXIgYmFzZWxpbmUgPSBwb3NbMV0gLSBmb250X21ldHJpY3MuYXNjZW50O1xuXG4gICAgLy8gTG93IGNhc2UgY2hhcnMgdXNlIHRoZWlyIG93biBzY2FsZVxuICAgIHZhciBzY2FsZSA9IGxvd2Nhc2UgPyBmb250X21ldHJpY3MubG93U2NhbGUgOiBmb250X21ldHJpY3MuY2FwU2NhbGU7XG5cbiAgICAvLyBMYXlpbmcgb3V0IHRoZSBnbHlwaCByZWN0YW5nbGVcbiAgICB2YXIgZyAgICAgID0gZm9udF9jaGFyLnJlY3Q7XG4gICAgdmFyIGJvdHRvbSA9IGJhc2VsaW5lIC0gc2NhbGUgKiAoIGZvbnQuZGVzY2VudCArIGZvbnQuaXkgKTtcbiAgICB2YXIgdG9wICAgID0gYm90dG9tICAgKyBzY2FsZSAqICggZm9udC5yb3dfaGVpZ2h0ICk7XG4gICAgdmFyIGxlZnQgICA9IHBvc1swXSAgICsgc2NhbGUgKiAoIGZvbnRfY2hhci5iZWFyaW5nX3ggKyBrZXJuIC0gZm9udC5peCApO1xuICAgIHZhciByaWdodCAgPSBsZWZ0ICAgICArIHNjYWxlICogKCBnWzJdIC0gZ1swXSApO1xuICAgIHZhciBwID0gWyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20gXTtcblxuICAgIC8vIEFkdmFuY2luZyBwZW4gcG9zaXRpb25cbiAgICB2YXIgbmV3X3Bvc194ID0gcG9zWzBdICsgc2NhbGUgKiAoIGZvbnRfY2hhci5hZHZhbmNlX3ggKTtcblxuICAgIC8vIFNpZ25lZCBkaXN0YW5jZSBmaWVsZCBzaXplIGluIHNjcmVlbiBwaXhlbHNcbiAgICB2YXIgc2RmX3NpemUgID0gMi4wICogZm9udC5peSAqIHNjYWxlO1xuXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xuICAgICAgcFswXSwgcFszXSwgLy8gbGVmdCBib3R0b20sXG4gICAgICBwWzJdLCBwWzNdLCAvLyByaWdodCBib3R0b20sXG4gICAgICBwWzJdLCBwWzFdLCAvLyByaWdodCB0b3BcbiAgICAgIHBbMF0sIHBbMV0sIC8vIGxlZnQgdG9wXG4gICAgXTtcblxuICAgIGNvbnN0IHV2cyA9IFtcbiAgICAgIGdbMF0sIGdbMV0sIC8vIGxlZnQgdG9wXG4gICAgICBnWzJdLCBnWzFdLCAvLyByaWdodCB0b3BcbiAgICAgIGdbMl0sIGdbM10sIC8vIHJpZ2h0IGJvdHRvbSxcbiAgICAgIGdbMF0sIGdbM10sIC8vIGxlZnQgYm90dG9tLFxuICAgIF07XG5cbiAgICBjb25zdCBzZGZTaXplcyA9IFtcbiAgICAgIHNkZl9zaXplLFxuICAgICAgc2RmX3NpemUsXG4gICAgICBzZGZfc2l6ZSxcbiAgICAgIHNkZl9zaXplLFxuICAgIF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb25zLFxuICAgICAgdXZzLFxuICAgICAgc2RmU2l6ZXMsXG4gICAgICBwb3M6IFsgbmV3X3Bvc194LCBwb3NbMV0gXVxuICAgIH07XG5cbiAgICAvL3JldHVybiB7IHZlcnRpY2VzIDogdmVydGljZXMsIHBvcyA6IFsgbmV3X3Bvc194LCBwb3NbMV0gXSB9O1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQXdlc29tZVRleHQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGV4dC5qcyIsIlxuY2xhc3MgVGV4dExheW91dCB7XG5cbiAgdGV4dCA9IFwiXCI7XG4gIGZvbnQgPSBudWxsO1xuICBtZXRyaWNzID0gbnVsbDtcbiAgZm9udFNpemUgPSAyMDtcbiAgYWxpZ24gPSBcImxlZnRcIjtcbiAgc3RhcnRYID0gMDtcbiAgc3RhcnRZID0gMDtcbiAgd3JhcHBlcldpZHRoID0gMTAwO1xuICB3cmFwV29yZHMgPSBmYWxzZTtcbiAgd29yZHNNZXRyaWNzID0gW107XG4gIGxldHRlcnNDb3VudCA9IDA7XG4gIGhlaWdodCA9IDA7XG4gIGxpbmVzQ291bnQgPSAwO1xuICBsaW5lSGVpZ2h0ID0gMDtcbiAgZ2x5cGhzID0gW107XG4gIG93bmVyID0gbnVsbDtcblxuXG4gIGNvbnN0cnVjdG9yKG93bmVyLCBjb25maWcpIHtcblxuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLnRleHQgPSBvd25lci50ZXh0O1xuICAgIHRoaXMuZm9udCA9IG93bmVyLmZvbnQ7XG4gICAgdGhpcy5mb250U2l6ZSA9IGNvbmZpZy5mb250U2l6ZTtcbiAgICB0aGlzLndyYXBXb3JkcyA9IGNvbmZpZy53cmFwV29yZHM7XG4gICAgdGhpcy53cmFwcGVyV2lkdGggPSBjb25maWcud3JhcHBlcldpZHRoO1xuICAgIHRoaXMubGluZUhlaWdodCA9IGNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIHRoaXMuYWxpZ24gPSBjb25maWcuYWxpZ247XG4gICAgdGhpcy51cGRhdGUoKTtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudGV4dCA9IHRoaXMub3duZXIudGV4dDtcbiAgICB0aGlzLmZvbnQgPSB0aGlzLm93bmVyLmZvbnQ7XG5cbiAgICB0aGlzLmxldHRlcnNDb3VudCA9IHRoaXMudGV4dC5zcGxpdChcIlwiKS5sZW5ndGg7XG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5mb250TWV0cmljcyh0aGlzLmZvbnQsIDAuMCk7XG4gICAgdGhpcy5zdGFydFkgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcbiAgICB0aGlzLmNhbGN1bGF0ZVdvcmRzUG9zaXRpb25zKCk7XG5cbiAgICB0aGlzLmdseXBocyA9IFtdO1xuXG4gICAgdGhpcy53b3Jkc01ldHJpY3MuZm9yRWFjaCAod29yZCA9PiB7XG4gICAgICB0aGlzLmdldEdseXBocyh3b3JkLndvcmQsIFt3b3JkLngsIHdvcmQueV0pO1xuICAgIH0pO1xuICB9XG5cbiAgZm9udE1ldHJpY3MoZm9udFNpemUsIG1vcmVMaW5lR2FwID0gMC4yKSB7XG5cbiAgICBjb25zdCB7Y2FwX2hlaWdodCwgeF9oZWlnaHQsIGFzY2VudDogZm9udEFzY2VudCAsIGRlc2NlbnQsIGxpbmVfZ2FwfSA9IHRoaXMuZm9udDtcblxuICAgIGNvbnN0IGNhcFNjYWxlID0gdGhpcy5mb250U2l6ZSAvIGNhcF9oZWlnaHQ7XG4gICAgY29uc3QgbG93U2NhbGUgPSBNYXRoLnJvdW5kKCB4X2hlaWdodCAqIGNhcFNjYWxlICkgLyB4X2hlaWdodDtcbiAgICBjb25zdCBhc2NlbnQgPSBNYXRoLnJvdW5kKCBmb250QXNjZW50ICogY2FwU2NhbGUgKTtcbiAgICBsZXQgbGluZUhlaWdodCA9IE1hdGgucm91bmQoIGNhcFNjYWxlICogKCBmb250QXNjZW50ICsgZGVzY2VudCArIGxpbmVfZ2FwICkgKyBtb3JlTGluZUdhcCApO1xuXG4gICAgaWYgKHRoaXMubGluZUhlaWdodCA+IDApXG4gICAgICBsaW5lSGVpZ2h0ID0gdGhpcy5saW5lSGVpZ2h0O1xuICAgIGVsc2VcbiAgICAgIHRoaXMubGluZUhlaWdodCA9IGxpbmVIZWlnaHQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY2FwU2NhbGUgICA6IGNhcFNjYWxlLFxuICAgICAgbG93U2NhbGUgICA6IGxvd1NjYWxlLFxuICAgICAgYXNjZW50ICAgICAgOiBhc2NlbnQsXG4gICAgICBsaW5lSGVpZ2h0IDogbGluZUhlaWdodFxuICAgIH07XG4gIH1cblxuICBjaGFyUmVjdCggcG9zLCBmb250X2NoYXIsIGtlcm4gPSAwLjAgKSB7XG5cbiAgICAvLyBMb3cgY2FzZSBjaGFyYWN0ZXJzIGhhdmUgZmlyc3QgYml0IHNldCBpbiAnZmxhZ3MnXG4gICAgdmFyIGxvd2Nhc2UgPSAoIGZvbnRfY2hhci5mbGFncyAmIDEgKSA9PT0gMTtcblxuICAgIC8vIFBlbiBwb3NpdGlvbiBpcyBhdCB0aGUgdG9wIG9mIHRoZSBsaW5lLCBZIGdvZXMgdXBcbiAgICB2YXIgYmFzZWxpbmUgPSBwb3NbMV0gLSB0aGlzLm1ldHJpY3MuYXNjZW50O1xuXG4gICAgLy8gTG93IGNhc2UgY2hhcnMgdXNlIHRoZWlyIG93biBzY2FsZVxuICAgIHZhciBzY2FsZSA9IGxvd2Nhc2UgPyB0aGlzLm1ldHJpY3MubG93U2NhbGUgOiB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XG5cbiAgICAvLyBMYXlpbmcgb3V0IHRoZSBnbHlwaCByZWN0YW5nbGVcbiAgICB2YXIgZyAgICAgID0gZm9udF9jaGFyLnJlY3Q7XG4gICAgdmFyIGJvdHRvbSA9IGJhc2VsaW5lIC0gc2NhbGUgKiAoIHRoaXMuZm9udC5kZXNjZW50ICsgdGhpcy5mb250Lml5ICk7XG4gICAgdmFyIHRvcCAgICA9IGJvdHRvbSAgICsgc2NhbGUgKiAoIHRoaXMuZm9udC5yb3dfaGVpZ2h0ICk7XG4gICAgdmFyIGxlZnQgICA9IHBvc1swXSAgICsgc2NhbGUgKiAoIGZvbnRfY2hhci5iZWFyaW5nX3ggKyBrZXJuIC0gdGhpcy5mb250Lml4ICk7XG4gICAgdmFyIHJpZ2h0ICA9IGxlZnQgICAgICsgc2NhbGUgKiAoIGdbMl0gLSBnWzBdICk7XG4gICAgdmFyIHAgPSBbIGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSBdO1xuXG4gICAgLy8gQWR2YW5jaW5nIHBlbiBwb3NpdGlvblxuICAgIHZhciBuZXdfcG9zX3ggPSBwb3NbMF0gKyBzY2FsZSAqICggZm9udF9jaGFyLmFkdmFuY2VfeCApO1xuXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xuICAgICAgcFswXSwgcFszXSwgLy8gbGVmdCBib3R0b20sXG4gICAgICBwWzJdLCBwWzNdLCAvLyByaWdodCBib3R0b20sXG4gICAgICBwWzJdLCBwWzFdLCAvLyByaWdodCB0b3BcbiAgICAgIHBbMF0sIHBbMV0sIC8vIGxlZnQgdG9wXG4gICAgXTtcblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbnMsXG4gICAgICBwb3M6IFsgbmV3X3Bvc194LCBwb3NbMV0gXSxcbiAgICAgIG1ldHJpY3M6IHt4OiBwb3NbMF0sIHk6IHBvc1sxXSwgd2lkdGg6IHNjYWxlICogZm9udF9jaGFyLmFkdmFuY2VfeCB9XG4gICAgfTtcbiAgfVxuXG4gIGdldFN0cmluZ1NpemUoc3RyaW5nKSB7XG5cbiAgICBsZXQgd2lkdGggPSAwO1xuICAgIGxldCBoZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcblxuICAgIGNvbnN0IGNoYXJzID0gWy4uLnN0cmluZ107XG5cbiAgICAvLyBJdGVyYXRlIHRob3VnaHQgdGhlIGNoYXJzLCBjYWxjdWxhdGUgcG9zaXRpb25cbiAgICBjaGFycy5mb3JFYWNoKGNoYXIgPT4ge1xuICAgICAgbGV0IGZvbnRfY2hhciA9IHRoaXMuZm9udC5jaGFyc1sgY2hhciBdO1xuXG4gICAgICAvKmlmIChjaGFyID09PSBcIiBcIikge1xuICAgICAgICB3aWR0aCArPSB0aGlzLmZvbnQuc3BhY2VfYWR2YW5jZSAqIHRoaXMubWV0cmljcy5jYXBTY2FsZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSovXG5cbiAgICAgIC8vIEdldCBjaGFyIG1ldHJpY3NcbiAgICAgIGxldCBjaGFyUmVjdCA9IHRoaXMuY2hhclJlY3QoW3dpZHRoLDBdLCBmb250X2NoYXIsIDAuMik7XG4gICAgICB3aWR0aCA9IGNoYXJSZWN0LnBvc1swXTtcblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHt3aWR0aCwgaGVpZ2h0fTtcblxuICB9XG5cbiAgY2FsY3VsYXRlV29yZHNQb3NpdGlvbnMoKSB7XG5cbiAgICBjb25zdCB3b3JkcyA9IHRoaXMudGV4dC5zcGxpdChcIiBcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgd29yZHNbaV0gPSB3b3Jkc1tpXSArIFwiIFwiO1xuICAgIH1cblxuICAgIHRoaXMud29yZHNNZXRyaWNzID0gW107XG5cbiAgICAvLyBJbml0aWFsIHBvc2l0aW9uXG4gICAgbGV0IHggPSB0aGlzLnN0YXJ0WDtcbiAgICBsZXQgeSA9IHRoaXMuc3RhcnRZO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHdvcmRzIHBvc2l0aW9ucyBvbiBsaW5lc1xuICAgIHdvcmRzLmZvckVhY2god29yZCA9PiB7XG4gICAgICBjb25zdCB3b3JkU2l6ZSA9IHRoaXMuZ2V0U3RyaW5nU2l6ZSh3b3JkKTtcbiAgICAgIGlmICh4ICsgd29yZFNpemUud2lkdGggPiB0aGlzLnN0YXJ0WCArIHRoaXMud3JhcHBlcldpZHRoICYmIHRoaXMud3JhcFdvcmRzKSB7XG4gICAgICAgIHggPSB0aGlzLnN0YXJ0WDtcbiAgICAgICAgeSArPSB3b3JkU2l6ZS5oZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMud29yZHNNZXRyaWNzLnB1c2goey4uLndvcmRTaXplLCB4LCB5LCB3b3JkfSk7XG5cbiAgICAgIC8veCArPSB3b3JkU2l6ZS53aWR0aCArIHRoaXMuZm9udC5zcGFjZV9hZHZhbmNlICogdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xuICAgICAgeCArPSB3b3JkU2l6ZS53aWR0aDtcbiAgICB9KTtcblxuICAgIC8vIENhbGN1bGF0ZSBsaW5lcyBjb3VudFxuICAgIHRoaXMubGluZXNDb3VudCA9ICh5IC0gdGhpcy5zdGFydFkpIC8gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyAxO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5saW5lc0NvdW50ICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XG5cbiAgICAvLyBDaGFuZ2UgYWxpZ24gVE9ETyBvcHRpbWlzZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saW5lc0NvdW50OyArK2kpIHtcbiAgICAgIGNvbnN0IHdvcmRzT25MaW5lID0gdGhpcy53b3Jkc01ldHJpY3MuZmlsdGVyKHdvcmQgPT4gd29yZC55ID09PSB0aGlzLnN0YXJ0WSArIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQpKVxuXG4gICAgICBjb25zdCBsYXN0V29yZCA9IHdvcmRzT25MaW5lW3dvcmRzT25MaW5lLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAobGFzdFdvcmQpIHtcbiAgICAgICAgY29uc3QgZnJlZVNwYWNlID0gKHRoaXMuc3RhcnRYICsgdGhpcy53cmFwcGVyV2lkdGgpIC0gKGxhc3RXb3JkLnggKyBsYXN0V29yZC53aWR0aCk7XG5cbiAgICAgICAgbGV0IGxlZnRPZmZzZXQgPSAwO1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5hbGlnbikge1xuICAgICAgICAgIGNhc2UgXCJjZW50ZXJcIjpcbiAgICAgICAgICAgIGxlZnRPZmZzZXQgPSBmcmVlU3BhY2UgLyAyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICBsZWZ0T2Zmc2V0ID0gZnJlZVNwYWNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53b3Jkc01ldHJpY3MuZm9yRWFjaCh3b3JkID0+IHtcbiAgICAgICAgICBpZiAod29yZC55ID09PSB0aGlzLnN0YXJ0WSArIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQpKSB7XG4gICAgICAgICAgICB3b3JkLnggKz0gbGVmdE9mZnNldDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0R2x5cGhzKCBzdHJpbmcsIHBvcykge1xuICAgIGxldCBwcmV2X2NoYXIgPSBcIiBcIjsgIC8vIFVzZWQgdG8gY2FsY3VsYXRlIGtlcm5pbmdcbiAgICBsZXQgY3BvcyAgICAgID0gcG9zOyAgLy8gQ3VycmVudCBwZW4gcG9zaXRpb25cbiAgICBsZXQgeF9tYXggICAgID0gMC4wOyAgLy8gTWF4IHdpZHRoIC0gdXNlZCBmb3IgYm91bmRpbmcgYm94XG4gICAgbGV0IHNjYWxlICAgICA9IHRoaXMubWV0cmljcy5jYXBTY2FsZTtcblxuICAgIGxldCBzdHJfcG9zID0gMDtcblxuICAgIGZvcig7Oykge1xuICAgICAgaWYgKCBzdHJfcG9zID09PSBzdHJpbmcubGVuZ3RoICkgYnJlYWs7XG5cbiAgICAgIHZhciBzY2hhciA9IHN0cmluZ1sgc3RyX3BvcyBdO1xuICAgICAgc3RyX3BvcysrO1xuXG4gICAgICBpZiAoIHNjaGFyID09PSBcIlxcblwiICkge1xuICAgICAgICBpZiAoIGNwb3NbMF0gPiB4X21heCApIHhfbWF4ID0gY3Bvc1swXTsgLy8gRXhwYW5kaW5nIHRoZSBib3VuZGluZyByZWN0XG4gICAgICAgIGNwb3NbMF0gID0gcG9zWzBdO1xuICAgICAgICBjcG9zWzFdIC09IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xuICAgICAgICBwcmV2X2NoYXIgPSBcIiBcIjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICggc2NoYXIgPT09IFwiIFwiICkge1xuICAgICAgICAvL3NjaGFyID0gXCJfXCJcbiAgICAgICAgLy9jcG9zWzBdICs9IHRoaXMuZm9udC5zcGFjZV9hZHZhbmNlICogc2NhbGU7XG4gICAgICAgIHByZXZfY2hhciA9IFwiIFwiO1xuICAgICAgICAvL2NvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgZm9udF9jaGFyID0gdGhpcy5mb250LmNoYXJzWyBzY2hhciBdO1xuICAgICAgaWYgKCAhZm9udF9jaGFyICkgeyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdWJzdGl0dXRpbmcgdW5hdmFpbGFibGUgY2hhcmFjdGVycyB3aXRoICc/J1xuICAgICAgICBzY2hhciA9IFwiP1wiO1xuICAgICAgICBmb250X2NoYXIgPSB0aGlzLmZvbnQuY2hhcnNbIFwiP1wiIF07XG4gICAgICB9XG5cbiAgICAgIHZhciBrZXJuID0gdGhpcy5mb250Lmtlcm5bIHByZXZfY2hhciArIHNjaGFyIF07XG4gICAgICBpZiAoICFrZXJuICkga2VybiA9IDAuMDtcblxuICAgICAgLy8gY2FsY3VsYXRpbmcgdGhlIGdseXBoIHJlY3RhbmdsZSBhbmQgY29weWluZyBpdCB0byB0aGUgdmVydGV4IGFycmF5XG4gICAgICB2YXIgcmVjdCA9IHRoaXMuY2hhclJlY3QoIGNwb3MsIGZvbnRfY2hhciwga2VybiApO1xuXG4gICAgICBwcmV2X2NoYXIgPSBzY2hhcjtcbiAgICAgIGNwb3MgPSByZWN0LnBvcztcblxuICAgICAgdGhpcy5nbHlwaHMucHVzaCh7XG4gICAgICAgIGxldHRlcjogc2NoYXIsXG4gICAgICAgIHZlcnRpY2VzOiByZWN0LnBvc2l0aW9ucyxcbiAgICAgICAgcG9zaXRpb246IHJlY3QucG9zLFxuICAgICAgICBtZXRyaWNzOiByZWN0Lm1ldHJpY3NcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRleHRMYXlvdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGF5b3V0LmpzIiwiY29uc3QgY3JlYXRlSW5kaWNlcyA9IHJlcXVpcmUoXCJxdWFkLWluZGljZXNcIilcclxuXHJcbmNsYXNzIFNlbGVjdCB7XHJcblxyXG4gIHJhbmdlID0gWzAsMF07XHJcbiAgbWV0cmljcyA9IG51bGw7XHJcbiAgbGF5b3V0ID0gbnVsbDtcclxuICBkaXJ0eSA9IGZhbHNlO1xyXG4gIGluZGV4QnVmZmVyID0gZmFsc2U7XHJcbiAgb3duZXIgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihvd25lcikge1xyXG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xyXG4gICAgdGhpcy5tZXRyaWNzID0gb3duZXIubWV0cmljcztcclxuICAgIHRoaXMubGF5b3V0ID0gb3duZXIubGF5b3V0O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5vd25lci5tZXRyaWNzO1xyXG4gICAgdGhpcy5sYXlvdXQgPSB0aGlzLm93bmVyLmxheW91dDtcclxuXHJcbiAgICAvLyBWZXJ0aWNlcyBhcnJheSBmb3IgYWxsIHNlbGVjdGVkIGxpbmVzXHJcbiAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5saW5lc0NvdW50ICogNCAqIDIpO1xyXG5cclxuICAgIGlmICh0aGlzLnJhbmdlWzFdICE9PSBudWxsKVxyXG4gICAgdGhpcy5idWlsZFZlcnRpY2VzKCk7XHJcblxyXG4gICAgdGhpcy5pbmRpY2VzID0gY3JlYXRlSW5kaWNlcyh7XHJcbiAgICAgIGNsb2Nrd2lzZTogdHJ1ZSxcclxuICAgICAgdHlwZTogJ3VpbnQxNicsXHJcbiAgICAgIGNvdW50OnRoaXMubGF5b3V0LmxpbmVzQ291bnRcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgdGhpcy5pbmRleEJ1ZmZlciA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzZXRSYW5nZShzdGFydCA9IG51bGwsIGVuZCA9IG51bGwpIHtcclxuXHJcbiAgICBjb25zdCB7Z2x5cGhzfSA9IHRoaXMub3duZXIubGF5b3V0O1xyXG5cclxuICAgIGlmIChzdGFydCA9PT0gbnVsbCkgc3RhcnQgPSB0aGlzLnJhbmdlWzBdO1xyXG4gICAgaWYgKGVuZCA9PT0gbnVsbCkgZW5kID0gdGhpcy5yYW5nZVsxXTtcclxuXHJcbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDA7XHJcbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMDtcclxuXHJcbiAgICBpZiAoc3RhcnQgPiBnbHlwaHMubGVuZ3RoIC0xKXN0YXJ0ID0gZ2x5cGhzLmxlbmd0aCAtIDE7XHJcbiAgICBpZiAoZW5kID4gZ2x5cGhzLmxlbmd0aCAtIDEpIGVuZCA9IGdseXBocy5sZW5ndGggLSAxO1xyXG5cclxuICAgIGlmIChlbmQgPT09IGZhbHNlKSBlbmQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMucmFuZ2UgPSBbc3RhcnQsIGVuZF07XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRWZXJ0aWNlcygpIHtcclxuXHJcbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLm93bmVyLmxheW91dC5tZXRyaWNzO1xyXG4gICAgLy8gU2VsZWN0IHJhbmdlXHJcbiAgICBsZXQgc3RhcnQgPSB0aGlzLmxheW91dC5nbHlwaHNbTWF0aC5taW4uYXBwbHkobnVsbCx0aGlzLnJhbmdlKV07XHJcbiAgICBsZXQgZW5kID0gdGhpcy5sYXlvdXQuZ2x5cGhzW01hdGgubWF4LmFwcGx5KG51bGwsdGhpcy5yYW5nZSldO1xyXG5cclxuXHJcbiAgICAvLyBJdGVyYXRlIHRob3VnaHQgYWxsIGxpbmVzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGF5b3V0LmxpbmVzQ291bnQ7ICsraSkge1xyXG4gICAgICBsZXQgbGV0dGVyQ291bnQgPSAwOyAvLyBsZXR0ZXJzIHBhc3NlZFxyXG4gICAgICBsZXQgZmlyc3RMZXR0ZXIgPSBudWxsOyAvLyBmaXJzdCBsZXR0ZXIgb24gdGhpcyBsaW5lXHJcbiAgICAgIGxldCBsYXN0TGV0dGVyID0gbnVsbDsgLy8gbGFzdCBsZXR0ZXIgb24gdGhpcyBsaW5lXHJcblxyXG5cclxuICAgICAgaWYgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCArIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0IDwgc3RhcnQucG9zaXRpb25bMV0pIGNvbnRpbnVlO1xyXG4gICAgICBpZiAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgPiBlbmQucG9zaXRpb25bMV0pIGNvbnRpbnVlO1xyXG5cclxuICAgICAgLy8gVGFrZSBldmVyeSB3b3JkLCBpZiBpdCdzIGxhc3Qgb3IgZmlyc3Qgb24gbGluZSAtIGNoYW5nZSBib3VuZHMgbGV0dGVyc1xyXG4gICAgICB0aGlzLmxheW91dC53b3Jkc01ldHJpY3MubWFwKHdvcmQgPT4ge1xyXG5cclxuICAgICAgICBpZiAod29yZC55ID09PSB0aGlzLmxheW91dC5zdGFydFkgKyAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSkge1xyXG4gICAgICAgICAgaWYgKGZpcnN0TGV0dGVyID09PSBudWxsKSBmaXJzdExldHRlciA9IGxldHRlckNvdW50O1xyXG4gICAgICAgICAgbGFzdExldHRlciA9IGxldHRlckNvdW50ICsgd29yZC53b3JkLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXR0ZXJDb3VudCArPSB3b3JkLndvcmQubGVuZ3RoO1xyXG4gICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgLy8gQm91bmRzIGxldHRlcnMgZm9yIGN1cnJlbnQgbGluZVxyXG4gICAgICBsZXQgc3RhcnRMaW5lTGV0dGVyID0gdGhpcy5sYXlvdXQuZ2x5cGhzW2ZpcnN0TGV0dGVyXTtcclxuICAgICAgbGV0IGVuZExpbmVMZXR0ZXIgPSB0aGlzLmxheW91dC5nbHlwaHNbbGFzdExldHRlcl07XHJcblxyXG4gICAgICAvLyBJZiB0aGUgc3RhcnQgb3IgZW5kIHJhbmdlIGlzIG9uIHRoaXMgbGluZSwgY2hhbmdlIGJvdW5kcyBmb3IgdGhlbVxyXG4gICAgICBpZiAoc3RhcnQucG9zaXRpb25bMV0gPT09ICBzdGFydExpbmVMZXR0ZXIucG9zaXRpb25bMV0pIHN0YXJ0TGluZUxldHRlciA9IHN0YXJ0O1xyXG4gICAgICBpZiAoZW5kLnBvc2l0aW9uWzFdID09PSBlbmRMaW5lTGV0dGVyLnBvc2l0aW9uWzFdKSBlbmRMaW5lTGV0dGVyID0gZW5kO1xyXG5cclxuICAgICAgLy8gV2UgdXNlIG9mZnNldCB0byBhdm9pZCBzZWxlY3RzIG92ZXJsYXBwaW5nXHJcbiAgICAgIGNvbnN0IG9mZnNldCA9ICh0aGlzLm1ldHJpY3MubGluZUhlaWdodCAtIHRoaXMubWV0cmljcy5hc2NlbnQpIC8gMjtcclxuXHJcbiAgICAgIC8vIEFkZCBwb3NpdGlvbnMgdG8gYXJyYXlcclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpXSA9IHN0YXJ0TGluZUxldHRlci52ZXJ0aWNlc1swXTtcclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgMV0gPSBzdGFydExpbmVMZXR0ZXIudmVydGljZXNbMV0gKyBvZmZzZXQ7XHJcblxyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyAyXSA9IGVuZExpbmVMZXR0ZXIudmVydGljZXNbMl07XHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDNdID0gZW5kTGluZUxldHRlci52ZXJ0aWNlc1szXSAgICsgb2Zmc2V0O1xyXG5cclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgNF0gPSBlbmRMaW5lTGV0dGVyLnZlcnRpY2VzWzRdO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyA1XSA9IGVuZExpbmVMZXR0ZXIudmVydGljZXNbNV0gIC0gb2Zmc2V0O1xyXG5cclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgNl0gPSBzdGFydExpbmVMZXR0ZXIudmVydGljZXNbNl07XHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDddID0gc3RhcnRMaW5lTGV0dGVyLnZlcnRpY2VzWzddICAtIG9mZnNldDtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0Q2xvc2VzdEdseXBoKHgsIHkpIHtcclxuXHJcbiAgICBjb25zdCB7IGdseXBocyB9ID0gdGhpcy5vd25lci5sYXlvdXQ7XHJcblxyXG4gICAgY29uc3QgbGluZUhlaWdodCA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xyXG4gICAgY29uc3Qgc2VsZWN0aW5nTGluZSA9IE1hdGguZmxvb3IoeSAvIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KTtcclxuICAgIGNvbnN0IHNlbGVjdGluZ0xpbmVZID0gc2VsZWN0aW5nTGluZSAqIGxpbmVIZWlnaHQ7XHJcbiAgICBsZXQgbGFzdEdseXBoT25MaW5lID0gZ2x5cGhzW2dseXBocy5sZW5ndGggLSAxXTtcclxuICAgIGxldCBmaXJzdEdseXBoT25MaW5lID0gbnVsbDtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdseXBocy5sZW5ndGggOyArK2kpIHtcclxuXHJcbiAgICAgIGxldCBnbHlwaCA9IGdseXBoc1tpXTtcclxuXHJcbiAgICAgIGlmIChnbHlwaC5tZXRyaWNzLnkgPT09IHNlbGVjdGluZ0xpbmVZICsgbGluZUhlaWdodCkge1xyXG5cclxuICAgICAgICBsYXN0R2x5cGhPbkxpbmUgPSBnbHlwaDtcclxuXHJcbiAgICAgICAgaWYgKHggPCBnbHlwaC5tZXRyaWNzLnggKyBnbHlwaC5tZXRyaWNzLndpZHRoIC8gMikge1xyXG5cclxuICAgICAgICAgIGlmIChpID09PSAwKSByZXR1cm4gLTE7XHJcbiAgICAgICAgICByZXR1cm4gZ2x5cGhzW2kgLSAxXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGFzdEdseXBoT25MaW5lO1xyXG5cclxuICB9XHJcblxyXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XHJcblxyXG4gICAgLy8gT25seSBsZWZ0IG1vdXNlIGJ1dHRvblxyXG4gICAgaWYgKGV2ZW50LmRhdGEuYnV0dG9uICE9PSAwKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHBvc2l0aW9uID0gZXZlbnQuZGF0YS5nbG9iYWw7XHJcblxyXG4gICAgcG9zaXRpb24ueCAtPSB0aGlzLm93bmVyLnBvc2l0aW9uLng7XHJcbiAgICBwb3NpdGlvbi55IC09IHRoaXMub3duZXIucG9zaXRpb24ueTtcclxuXHJcbiAgICBwb3NpdGlvbi54ID0gcG9zaXRpb24ueCAvICB0aGlzLm93bmVyLnNjYWxlLng7XHJcbiAgICBwb3NpdGlvbi55ID0gcG9zaXRpb24ueSAvIHRoaXMub3duZXIuc2NhbGUueTtcclxuXHJcbiAgICBjb25zdCBjbG9zZXN0TGV0dGVyID0gdGhpcy5nZXRDbG9zZXN0R2x5cGgocG9zaXRpb24ueCAsIHBvc2l0aW9uLnkpO1xyXG4gICAgbGV0IGluZGV4ID0gdGhpcy5vd25lci5sYXlvdXQuZ2x5cGhzLmluZGV4T2YoY2xvc2VzdExldHRlcik7XHJcblxyXG4gICAgdGhpcy5zZXRSYW5nZShpbmRleCArIDEsIGZhbHNlICk7XHJcbiAgfVxyXG5cclxuICBvbk1vdXNlTW92ZShldmVudCkge1xyXG5cclxuICAgIGxldCBwb3NpdGlvbiA9IGV2ZW50LmRhdGEuZ2xvYmFsO1xyXG5cclxuICAgIHBvc2l0aW9uLnggLT0gdGhpcy5vd25lci5wb3NpdGlvbi54O1xyXG4gICAgcG9zaXRpb24ueSAtPSB0aGlzLm93bmVyLnBvc2l0aW9uLnk7XHJcblxyXG4gICAgcG9zaXRpb24ueCA9IHBvc2l0aW9uLnggLyB0aGlzLm93bmVyLnNjYWxlLng7XHJcbiAgICBwb3NpdGlvbi55ID0gcG9zaXRpb24ueSAvIHRoaXMub3duZXIuc2NhbGUueTtcclxuXHJcbiAgICBjb25zdCBjbG9zZXN0TGV0dGVyID0gdGhpcy5nZXRDbG9zZXN0R2x5cGgocG9zaXRpb24ueCAgLCBwb3NpdGlvbi55KTtcclxuICAgIGxldCBpbmRleCA9IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5pbmRleE9mKGNsb3Nlc3RMZXR0ZXIpO1xyXG5cclxuICAgIHRoaXMuc2V0UmFuZ2UobnVsbCwgaW5kZXggKyAxKTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VVcChldmVudCkge1xyXG5cclxuICAgIC8vIE9ubHkgbGVmdCBtb3VzZSBidXR0b25cclxuICAgIGlmIChldmVudC5kYXRhLmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBwb3NpdGlvbiA9IGV2ZW50LmRhdGEuZ2xvYmFsO1xyXG5cclxuICAgIHBvc2l0aW9uLnggLT0gdGhpcy5vd25lci5wb3NpdGlvbi54O1xyXG4gICAgcG9zaXRpb24ueSAtPSB0aGlzLm93bmVyLnBvc2l0aW9uLnk7XHJcblxyXG4gICAgcG9zaXRpb24ueCA9IHBvc2l0aW9uLnggLyB0aGlzLm93bmVyLnNjYWxlLng7XHJcbiAgICBwb3NpdGlvbi55ID0gcG9zaXRpb24ueSAvIHRoaXMub3duZXIuc2NhbGUueTtcclxuXHJcbiAgICBjb25zdCBjbG9zZXN0TGV0dGVyID0gdGhpcy5nZXRDbG9zZXN0R2x5cGgocG9zaXRpb24ueCAsIHBvc2l0aW9uLnkpO1xyXG5cclxuICAgIC8vIC0xIG1lYW5zIHRoYXQgd2UgYXQgdGhlIHN0YXJ0IG9mIHRoZSBsaW5lXHJcbiAgICBpZiAoY2xvc2VzdExldHRlciA9PT0gLTEpIHtcclxuICAgICAgdGhpcy5vd25lci5pbnB1dC5nbHlwaEluZGV4ID0gY2xvc2VzdExldHRlcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3duZXIuaW5wdXQuZ2x5cGhJbmRleCA9IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5pbmRleE9mKGNsb3Nlc3RMZXR0ZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlbGVjdC5qcyIsInZhciBkdHlwZSA9IHJlcXVpcmUoJ2R0eXBlJylcbnZhciBhbkFycmF5ID0gcmVxdWlyZSgnYW4tYXJyYXknKVxudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJylcblxudmFyIENXID0gWzAsIDIsIDNdXG52YXIgQ0NXID0gWzIsIDEsIDNdXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlUXVhZEVsZW1lbnRzKGFycmF5LCBvcHQpIHtcbiAgICAvL2lmIHVzZXIgZGlkbid0IHNwZWNpZnkgYW4gb3V0cHV0IGFycmF5XG4gICAgaWYgKCFhcnJheSB8fCAhKGFuQXJyYXkoYXJyYXkpIHx8IGlzQnVmZmVyKGFycmF5KSkpIHtcbiAgICAgICAgb3B0ID0gYXJyYXkgfHwge31cbiAgICAgICAgYXJyYXkgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHQgPT09ICdudW1iZXInKSAvL2JhY2t3YXJkcy1jb21wYXRpYmxlXG4gICAgICAgIG9wdCA9IHsgY291bnQ6IG9wdCB9XG4gICAgZWxzZVxuICAgICAgICBvcHQgPSBvcHQgfHwge31cblxuICAgIHZhciB0eXBlID0gdHlwZW9mIG9wdC50eXBlID09PSAnc3RyaW5nJyA/IG9wdC50eXBlIDogJ3VpbnQxNidcbiAgICB2YXIgY291bnQgPSB0eXBlb2Ygb3B0LmNvdW50ID09PSAnbnVtYmVyJyA/IG9wdC5jb3VudCA6IDFcbiAgICB2YXIgc3RhcnQgPSAob3B0LnN0YXJ0IHx8IDApIFxuXG4gICAgdmFyIGRpciA9IG9wdC5jbG9ja3dpc2UgIT09IGZhbHNlID8gQ1cgOiBDQ1csXG4gICAgICAgIGEgPSBkaXJbMF0sIFxuICAgICAgICBiID0gZGlyWzFdLFxuICAgICAgICBjID0gZGlyWzJdXG5cbiAgICB2YXIgbnVtSW5kaWNlcyA9IGNvdW50ICogNlxuXG4gICAgdmFyIGluZGljZXMgPSBhcnJheSB8fCBuZXcgKGR0eXBlKHR5cGUpKShudW1JbmRpY2VzKVxuICAgIGZvciAodmFyIGkgPSAwLCBqID0gMDsgaSA8IG51bUluZGljZXM7IGkgKz0gNiwgaiArPSA0KSB7XG4gICAgICAgIHZhciB4ID0gaSArIHN0YXJ0XG4gICAgICAgIGluZGljZXNbeCArIDBdID0gaiArIDBcbiAgICAgICAgaW5kaWNlc1t4ICsgMV0gPSBqICsgMVxuICAgICAgICBpbmRpY2VzW3ggKyAyXSA9IGogKyAyXG4gICAgICAgIGluZGljZXNbeCArIDNdID0gaiArIGFcbiAgICAgICAgaW5kaWNlc1t4ICsgNF0gPSBqICsgYlxuICAgICAgICBpbmRpY2VzW3ggKyA1XSA9IGogKyBjXG4gICAgfVxuICAgIHJldHVybiBpbmRpY2VzXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGR0eXBlKSB7XG4gIHN3aXRjaCAoZHR5cGUpIHtcbiAgICBjYXNlICdpbnQ4JzpcbiAgICAgIHJldHVybiBJbnQ4QXJyYXlcbiAgICBjYXNlICdpbnQxNic6XG4gICAgICByZXR1cm4gSW50MTZBcnJheVxuICAgIGNhc2UgJ2ludDMyJzpcbiAgICAgIHJldHVybiBJbnQzMkFycmF5XG4gICAgY2FzZSAndWludDgnOlxuICAgICAgcmV0dXJuIFVpbnQ4QXJyYXlcbiAgICBjYXNlICd1aW50MTYnOlxuICAgICAgcmV0dXJuIFVpbnQxNkFycmF5XG4gICAgY2FzZSAndWludDMyJzpcbiAgICAgIHJldHVybiBVaW50MzJBcnJheVxuICAgIGNhc2UgJ2Zsb2F0MzInOlxuICAgICAgcmV0dXJuIEZsb2F0MzJBcnJheVxuICAgIGNhc2UgJ2Zsb2F0NjQnOlxuICAgICAgcmV0dXJuIEZsb2F0NjRBcnJheVxuICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIHJldHVybiBBcnJheVxuICAgIGNhc2UgJ3VpbnQ4X2NsYW1wZWQnOlxuICAgICAgcmV0dXJuIFVpbnQ4Q2xhbXBlZEFycmF5XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kdHlwZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuQXJyYXlcblxuZnVuY3Rpb24gYW5BcnJheShhcnIpIHtcbiAgcmV0dXJuIChcbiAgICAgICBhcnIuQllURVNfUEVSX0VMRU1FTlRcbiAgICAmJiBzdHIuY2FsbChhcnIuYnVmZmVyKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJ1xuICAgIHx8IEFycmF5LmlzQXJyYXkoYXJyKVxuICApXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYW4tYXJyYXkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtYnVmZmVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuXG5jbGFzcyBJbnB1dCB7XG5cbiAgX2VuYWJsZWQgPSBmYWxzZTtcbiAgb3duZXIgPSBudWxsO1xuXG4gIF9nbHlwaEluZGV4ID0gLTE7XG5cbiAgc2V0IGdseXBoSW5kZXgodmFsdWUpIHtcbiAgICB0aGlzLl9nbHlwaEluZGV4ID0gdmFsdWU7XG5cbiAgICBpZiAodGhpcy5fZ2x5cGhJbmRleCA8IC0xKVxuICAgICAgdGhpcy5fZ2x5cGhJbmRleCA9IC0xO1xuXG4gICAgaWYgKHRoaXMuX2dseXBoSW5kZXggPiB0aGlzLm93bmVyLmxheW91dC5nbHlwaHMubGVuZ3RoKVxuICAgICAgdGhpcy5fZ2x5cGhJbmRleCA9IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5sZW5ndGg7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgZ2V0IGdseXBoSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dseXBoSW5kZXg7XG4gIH1cblxuICBzZXQgZW5hYmxlZCh2YWx1ZSkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5fZW5hYmxlZCkge1xuICAgICAgdGhpcy5lbmFibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZWRcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG93bmVyKSB7XG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgIHRoaXMubWV0cmljcyA9IG93bmVyLm1ldHJpY3M7XG4gICAgdGhpcy5sYXlvdXQgPSBvd25lci5sYXlvdXQ7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXVxuXG4gICAgdGhpcy5jcmVhdGVGaWVsZCgpO1xuICAgIHRoaXMuZGlzYWJsZSgpO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuaW5wdXRFbGVtZW50KTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIGlmIChkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuaW5wdXRFbGVtZW50KSlcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5pbnB1dEVsZW1lbnQpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICB9XG5cbiAgY3JlYXRlRmllbGQoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cblxuXG4gICAgY29uc3QgdHJhbnNmb3JtID0gT2JqZWN0LnZhbHVlcyh0aGlzLm93bmVyLnRyYW5zZm9ybS53b3JsZFRyYW5zZm9ybSkuc2xpY2UoMCwgNik7XG5cbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgIC8vdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwwLDAsMC4zKSc7XG5cbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5jb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmNvbnRhaW4gPSAnc3RyaWN0JztcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS56SW5kZXggPSAyO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuY29sb3IgPSB0aGlzLm93bmVyLnN0eWxlLmZpbGw7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtT3JpZ2luPSBcImxlZnQgdG9wXCI7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYG1hdHJpeCgke3RyYW5zZm9ybS5qb2luKFwiLCBcIil9KWA7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUucGFkZGluZyA9IFwiMFwiO1xuXG4gICAgdGhpcy5hZGRFdmVudChcImJsdXJcIiwgKGV2ZW50KSA9PiB0aGlzLmlucHV0RWxlbWVudC5mb2N1cygpKTtcbiAgICB0aGlzLmFkZEV2ZW50KFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB0aGlzLm9uSW5wdXQoZXZlbnQpKTtcbiAgICB0aGlzLmFkZEV2ZW50KFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHRoaXMub25LZXlkb3duKGV2ZW50KSlcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcblxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMub3duZXIubWV0cmljcztcbiAgICB0aGlzLmxheW91dCA9IHRoaXMub3duZXIubGF5b3V0O1xuXG4gICAgY29uc3Qge2dseXBoc30gPSB0aGlzLm93bmVyLmxheW91dDtcblxuICAgIGlmICh0aGlzLmdseXBoSW5kZXggPj0gZ2x5cGhzLmxlbmd0aCkge1xuICAgICAgdGhpcy5nbHlwaEluZGV4ID0gZ2x5cGhzLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBjYXJldCBwbGFjZSAtIHN0YXJ0IG9mIHRoZSBpbnB1dCBmaWVsZCBUT0RPIGltcGxlbWVudCBhbGlnblxuICAgIGxldCBnbHlwaE1ldHJpY3MgPSB7XG4gICAgICB4OiB0aGlzLm93bmVyLnBvc2l0aW9uLngsXG4gICAgICB5OiB0aGlzLm93bmVyLnBvc2l0aW9uLnlcbiAgICB9O1xuXG4gICAgLy8gaWYgc3RyaW5nIGlzIGVtcHR5LCBwdXQgY2FyZXQgYXQgdGhlIGJlZ2lubmluZ1xuICAgIGlmICh0aGlzLm93bmVyLmxheW91dC5nbHlwaHMubGVuZ3RoID09PSAtMSkge1xuXG4gICAgICAvLyBpZiB3ZSBvbiB0aGUgbGFzdCBnbHlwaCwgcGxhY2UgY2FyZXQgYWZ0ZXIgaXRcbiAgICB9ZWxzZSBpZiAodGhpcy5nbHlwaEluZGV4ID09PSBnbHlwaHMubGVuZ3RoKSB7XG5cbiAgICAgIGNvbnN0IGxhc3RHbHlwaCA9IGdseXBoc1tnbHlwaHMubGVuZ3RoIC0gMV07XG5cbiAgICAgIGdseXBoTWV0cmljcy54ICs9IGxhc3RHbHlwaC5tZXRyaWNzLnggKyBsYXN0R2x5cGgubWV0cmljcy53aWR0aDtcbiAgICAgIGdseXBoTWV0cmljcy55ICs9IGxhc3RHbHlwaC5tZXRyaWNzLnk7XG5cbiAgICAgIC8vIGlmIGNhcmV0IGluIHRoZSBtaWRkbGUgb2YgdGhlIHRleHRcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ2x5cGhJbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkR2x5cGggPSBnbHlwaHNbdGhpcy5nbHlwaEluZGV4XTtcblxuICAgICAgZ2x5cGhNZXRyaWNzLnggKz0gc2VsZWN0ZWRHbHlwaC5tZXRyaWNzLnggKyBzZWxlY3RlZEdseXBoLm1ldHJpY3Mud2lkdGg7XG4gICAgICBnbHlwaE1ldHJpY3MueSArPSBzZWxlY3RlZEdseXBoLm1ldHJpY3MueTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICBnbHlwaE1ldHJpY3MueSArPSB0aGlzLm93bmVyLnN0eWxlLmxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNmb3JtID0gT2JqZWN0LnZhbHVlcyh0aGlzLm93bmVyLnRyYW5zZm9ybS53b3JsZFRyYW5zZm9ybSkuc2xpY2UoMCwgNik7XG5cblxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBtYXRyaXgoJHt0cmFuc2Zvcm0uam9pbihcIiwgXCIpfSlgO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgXCJweFwiO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyBcInB4XCI7XG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKGdseXBoTWV0cmljcy54ICwgZ2x5cGhNZXRyaWNzLnkpO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBvbklucHV0KGV2ZW50KSB7XG5cbiAgICBjb25zdCB7IHJhbmdlIH0gPSB0aGlzLm93bmVyLnNlbGVjdDtcblxuICAgIC8vIElmIHVzZXIgc2VsZWN0ZWQgc29tZSB0ZXh0LCByZW1vdmUgaXRcbiAgICBpZiAocmFuZ2VbMF0gIT09IHJhbmdlWzFdICYmIHJhbmdlWzFdICE9PSBudWxsKSB7XG4gICAgICB0aGlzLmdseXBoSW5kZXggPSBNYXRoLm1pbihyYW5nZVswXSAtIDEsIHJhbmdlWzFdIC0gMSk7XG4gICAgICBjb25zdCByZW1vdmVJbmRleCA9IE1hdGgubWluLmFwcGx5KG51bGwsIHJhbmdlKTtcbiAgICAgIGNvbnN0IHJlbW92ZUxlbmd0aCA9IE1hdGguYWJzKHJhbmdlWzBdIC0gcmFuZ2VbMV0pO1xuICAgICAgdGhpcy5vd25lci5zZWxlY3Quc2V0UmFuZ2UoMCxmYWxzZSk7XG4gICAgICB0aGlzLm93bmVyLnJlbW92ZVN0cmluZyhyZW1vdmVJbmRleCwgcmVtb3ZlTGVuZ3RoKTtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH1cblxuICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XG5cbiAgICBpZiAoZXZlbnQuZGF0YSA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgLy8gSWYgdGV4dCBpcyBlbXB0eSBub3dcbiAgICBpZiAodGhpcy5vd25lci5sYXlvdXQuZ2x5cGhzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5vd25lci50ZXh0ID0gZXZlbnQuZGF0YTtcbiAgICAgIHRoaXMuZ2x5cGhJbmRleCA9IDE7XG5cbiAgICAvLyBJZiBjYXJldCBpcyBhdCB0aGUgZW5kIG9mIHRoZSB0ZXh0XG4gICAgfSBlbHNlIGlmICh0aGlzLmdseXBoSW5kZXggPT09IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLm93bmVyLnRleHQgKz0gZXZlbnQuZGF0YTtcbiAgICAgIHRoaXMuZ2x5cGhJbmRleCsrO1xuXG4gICAgLy8gSWYgd2UgaW4gdGhlIG1pZGRsZSBvZiB0aGUgbGluZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm93bmVyLmluc2VydFN0cmluZygrK3RoaXMuZ2x5cGhJbmRleCwgZXZlbnQuZGF0YSk7XG4gICAgICAvL3RoaXMuZ2x5cGhJbmRleCsrO1xuICAgIH1cbiAgICB0aGlzLm93bmVyLnNlbGVjdC5zZXRSYW5nZSgwLCBmYWxzZSk7XG5cbiAgfVxuXG4gIG9uS2V5ZG93bihldmVudCkge1xuXG5cbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxuICAgICAgICB0aGlzLm93bmVyLnNlbGVjdC5zZXRSYW5nZSgwLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB0aGlzLmdseXBoSW5kZXgtLTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG4gICAgICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKDAsIGZhbHNlKTtcbiAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgIHRoaXMuZ2x5cGhJbmRleCsrO1xuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiQmFja3NwYWNlXCI6XG4gICAgICBjYXNlIFwiRGVsZXRlXCI6XG4gICAgICAgIGNvbnN0IHtyYW5nZX0gPSB0aGlzLm93bmVyLnNlbGVjdDtcbiAgICAgICAgaWYgKHJhbmdlWzFdICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5nbHlwaEluZGV4ID0gTWF0aC5taW4ocmFuZ2VbMF0sIHJhbmdlWzFdKTtcbiAgICAgICAgICBjb25zdCByZW1vdmVJbmRleCA9IE1hdGgubWluLmFwcGx5KG51bGwsIHJhbmdlKTtcbiAgICAgICAgICBjb25zdCByZW1vdmVMZW5ndGggPSBNYXRoLmFicyhyYW5nZVswXSAtIHJhbmdlWzFdKTtcbiAgICAgICAgICB0aGlzLm93bmVyLnNlbGVjdC5zZXRSYW5nZSgwLGZhbHNlKTtcbiAgICAgICAgICB0aGlzLm93bmVyLnJlbW92ZVN0cmluZyhyZW1vdmVJbmRleCwgcmVtb3ZlTGVuZ3RoKTtcbiAgICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBpZiAoZXZlbnQua2V5ID09PSBcIkJhY2tzcGFjZVwiKVxuICAgICAgICAgICAgdGhpcy5vd25lci5yZW1vdmVTdHJpbmcodGhpcy5nbHlwaEluZGV4LS0sIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIFNlbGVjdCBhbGxcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICAgdGhpcy5vd25lci5zZWxlY3Quc2V0UmFuZ2UoMCx0aGlzLm93bmVyLnRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IFwiIFwiO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcblxuICB9XG5cbiAgc2V0UG9zaXRpb24oeCwgeSkge1xuXG4gICAgY29uc3Qge2EgOiBzY2FsZVgsIGQ6IHNjYWxlWX0gPSB0aGlzLm93bmVyLnRyYW5zZm9ybS53b3JsZFRyYW5zZm9ybTtcbiAgICBjb25zdCB7eCA6IGxvY2FsWCwgeTogbG9jYWxZIH0gPSB0aGlzLm93bmVyLnBvc2l0aW9uO1xuXG4gICAgbGV0IGxpbmVIZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodCAqIHNjYWxlWTtcblxuICAgIHkgKj0gc2NhbGVZO1xuICAgIHggKj0gc2NhbGVYO1xuXG4gICAgeSAtPSBsaW5lSGVpZ2h0O1xuXG4gICAgeSAtPSBsb2NhbFkgKiBzY2FsZVk7XG4gICAgeCAtPSBsb2NhbFggKiBzY2FsZVg7XG5cbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7eH1weGA7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUudG9wID0gYCR7eX1weGA7XG5cbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IFwiIFwiO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcblxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IE9iamVjdC52YWx1ZXModGhpcy5nZXRUcmFuc2Zvcm0oKSkuc2xpY2UoMCwgNik7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYG1hdHJpeCgke3RyYW5zZm9ybS5qb2luKFwiLCBcIil9KWA7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgY29uc3Qgb3duZXJUcmFuc2Zvcm0gPSB0aGlzLm93bmVyLnRyYW5zZm9ybS53b3JsZFRyYW5zZm9ybTtcbiAgICBsZXQgY2FudmFzUmVjdCA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7Li4ub3duZXJUcmFuc2Zvcm0sIHR4OiBvd25lclRyYW5zZm9ybS50eCArIGNhbnZhc1JlY3QueCwgdHk6IG93bmVyVHJhbnNmb3JtLnR5ICsgY2FudmFzUmVjdC55fTtcbiAgfVxuXG4gIGFkZEV2ZW50KGV2ZW50LCBjYWxsYmFjaykge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcbiAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5wdXQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG5hdHRyaWJ1dGUgdmVjMiBhVmVydGV4UG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzIgYVRleHR1cmVDb29yZDtcXG5hdHRyaWJ1dGUgZmxvYXQgYVNkZlNpemU7XFxuXFxudW5pZm9ybSBtYXQzIHRyYW5zbGF0aW9uTWF0cml4O1xcbnVuaWZvcm0gbWF0MyBwcm9qZWN0aW9uTWF0cml4O1xcbnVuaWZvcm0gZmxvYXQgc2RmTXVsdGlwbGllcjtcXG5cXG52YXJ5aW5nIHZlYzIgIHRjMDtcXG52YXJ5aW5nIGZsb2F0IGRvZmZzZXQ7XFxudmFyeWluZyBmbG9hdCBzZGZfdGV4ZWw7XFxuXFxuXFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG5cXG4gICAgLy9UT0RPIE1BS0UgQVRUUklCVVRFXFxuICAgIGZsb2F0IHNkZl9zaXplID0gYVNkZlNpemUgKiBzZGZNdWx0aXBsaWVyO1xcblxcbiAgICAvL1RPRE8gTUFLRSBVTklGT1JNU1xcbiAgICBmbG9hdCBzZGZfdGV4X3NpemUgPSAxMDI0LjA7XFxuXFxuXFxuICAgIHRjMCA9IGFUZXh0dXJlQ29vcmQ7XFxuICAgIGRvZmZzZXQgPSAxLjAgLyBzZGZfc2l6ZTsgICAgICAgLy8gRGlzdGFuY2UgZmllbGQgZGVsdGEgZm9yIG9uZSBzY3JlZW4gcGl4ZWxcXG4gICAgc2RmX3RleGVsID0gMS4wIC8gc2RmX3RleF9zaXplO1xcblxcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQoKHByb2plY3Rpb25NYXRyaXggKiB0cmFuc2xhdGlvbk1hdHJpeCAqIHZlYzMoYVZlcnRleFBvc2l0aW9uICwgMS4wKSkueHksIDAuMCwgMS4wKTtcXG5cXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL3RleHQvdmVydC5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG51bmlmb3JtIHNhbXBsZXIyRCB1U2FtcGxlcjtcXG51bmlmb3JtIGZsb2F0IGhpbnRfYW1vdW50O1xcbnVuaWZvcm0gZmxvYXQgc3VicGl4ZWxfYW1vdW50O1xcblxcbnVuaWZvcm0gdmVjMyBiZ19jb2xvcjtcXG51bmlmb3JtIHZlYzMgZm9udF9jb2xvcjtcXG5cXG52YXJ5aW5nIHZlYzIgIHRjMDtcXG52YXJ5aW5nIGZsb2F0IGRvZmZzZXQ7XFxudmFyeWluZyBmbG9hdCBzZGZfdGV4ZWw7XFxuXFxuXFxuLypcXG4gKiAgU3VicGl4ZWwgY292ZXJhZ2UgY2FsY3VsYXRpb25cXG4gKlxcbiAqICB2IC0gZWRnZSBzbG9wZSAgICAtMS4wIHRvIDEuMCAgICAgICAgICB0cmlwbGV0XFxuICogIGEgLSBwaXhlbCBjb3ZlcmFnZSAwLjAgdG8gMS4wICAgICAgICAgIGNvdmVyYWdlXFxuICpcXG4gKiAgICAgIHw8LSBnbHlwaCBlZGdlICAgICAgICAgICAgICAgICAgICAgIFIgIEcgIEJcXG4gKiAgKy0tLSstLS0rICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0rLS0rLS0rXFxuICogIHwgICB8WFhYfCB2ID0gMS4wIChlZGdlIGZhY2luZyB3ZXN0KSAgfCAgfHh4fFhYfFxcbiAqICB8ICAgfFhYWHwgYSA9IDAuNSAoNTAlIGNvdmVyYWdlKSAgICAgIHwgIHx4eHxYWHxcXG4gKiAgfCAgIHxYWFh8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB8eHh8WFh8XFxuICogICstLS0rLS0tKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tKy0tKy0tK1xcbiAqICAgIHBpeGVsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwICA1MCAxMDBcXG4gKlxcbiAqXFxuICogICAgICAgIFIgICBHICAgQlxcbiAqXFxuICogICAxLjAgICAgICAgICstLSsgICA8LSB0b3AgKGFicyggdiApKVxcbiAqICAgICAgICAgICAgICB8XFxuICogICAgICAgLSstLS0tLSstLSstLSA8LSBjZWlsOiAxMDAlIGNvdmVyYWdlXFxuICogICAgICAgIHwgICAgIHxYWHxcXG4gKiAgIDAuMCAgfCAgKy0tK1hYfFxcbiAqICAgICAgICB8ICB8eHh8WFh8XFxuICogICAgICAgLSstLSstLSstLSstLSA8LSBmbG9vcjogMCUgY292ZXJhZ2VcXG4gKiAgICAgICAgICAgfFxcbiAqICAtMS4wICArLS0rICAgICAgICAgPC0gIC1hYnModilcXG4gKiAgICAgICAgfFxcbiAqICAgICAgICB8XFxuICogICAgICAgIHxcXG4gKiAgLTIuMCAgKyAgICAgICAgICAgIDwtIGJvdHRvbTogLWFicyh2KS0xLjBcXG4gKi9cXG5cXG52ZWMzIHN1YnBpeGVsKCBmbG9hdCB2LCBmbG9hdCBhICkge1xcbiAgICBmbG9hdCB2dCAgICAgID0gMC42ICogdjsgLy8gMS4wIHdpbGwgbWFrZSB5b3VyIGV5ZXMgYmxlZWRcXG4gICAgdmVjMyAgcmdiX21heCA9IHZlYzMoIC12dCwgMC4wLCB2dCApO1xcbiAgICBmbG9hdCB0b3AgICAgID0gYWJzKCB2dCApO1xcbiAgICBmbG9hdCBib3R0b20gID0gLXRvcCAtIDEuMDtcXG4gICAgZmxvYXQgY2Zsb29yICA9IG1peCggdG9wLCBib3R0b20sIGEgKTtcXG4gICAgdmVjMyAgcmVzICAgICA9IGNsYW1wKCByZ2JfbWF4IC0gdmVjMyggY2Zsb29yICksIDAuMCwgMS4wICk7XFxuICAgIHJldHVybiByZXM7XFxufVxcblxcbnZvaWQgbWFpbjIoKSB7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh1U2FtcGxlciwgdGMwKTtcXG59XFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG5cXG4gICAgLy8gU2FtcGxpbmcgdGhlIHRleHR1cmUsIEwgcGF0dGVyblxcbiAgICBmbG9hdCBzZGYgICAgICAgPSB0ZXh0dXJlMkQoIHVTYW1wbGVyLCB0YzAgKS5yO1xcbiAgICBmbG9hdCBzZGZfbm9ydGggPSB0ZXh0dXJlMkQoIHVTYW1wbGVyLCB0YzAgKyB2ZWMyKCAwLjAsIHNkZl90ZXhlbCApICkucjtcXG4gICAgZmxvYXQgc2RmX2Vhc3QgID0gdGV4dHVyZTJEKCB1U2FtcGxlciwgdGMwICsgdmVjMiggc2RmX3RleGVsLCAwLjAgKSApLnI7XFxuXFxuICAgIC8vIEVzdGltYXRpbmcgc3Ryb2tlIGRpcmVjdGlvbiBieSB0aGUgZGlzdGFuY2UgZmllbGQgZ3JhZGllbnQgdmVjdG9yXFxuICAgIHZlYzIgIHNncmFkICAgICA9IHZlYzIoIHNkZl9lYXN0IC0gc2RmLCBzZGZfbm9ydGggLSBzZGYgKTtcXG4gICAgZmxvYXQgc2dyYWRfbGVuID0gbWF4KCBsZW5ndGgoIHNncmFkICksIDEuMCAvIDEyOC4wICk7XFxuICAgIHZlYzIgIGdyYWQgICAgICA9IHNncmFkIC8gdmVjMiggc2dyYWRfbGVuICk7XFxuICAgIGZsb2F0IHZncmFkID0gYWJzKCBncmFkLnkgKTsgLy8gMC4wIC0gdmVydGljYWwgc3Ryb2tlLCAxLjAgLSBob3Jpem9udGFsIG9uZVxcblxcbiAgICBmbG9hdCBob3J6X3NjYWxlICA9IDEuMTsgLy8gQmx1cnJpbmcgdmVydGljYWwgc3Ryb2tlcyBhbG9uZyB0aGUgWCBheGlzIGEgYml0XFxuICAgIGZsb2F0IHZlcnRfc2NhbGUgID0gMC42OyAvLyBXaGlsZSBhZGRpbmcgc29tZSBjb250cmFzdCB0byB0aGUgaG9yaXpvbnRhbCBzdHJva2VzXFxuICAgIGZsb2F0IGhkb2Zmc2V0ICAgID0gbWl4KCBkb2Zmc2V0ICogaG9yel9zY2FsZSwgZG9mZnNldCAqIHZlcnRfc2NhbGUsIHZncmFkICk7XFxuICAgIGZsb2F0IHJlc19kb2Zmc2V0ID0gbWl4KCBkb2Zmc2V0LCBoZG9mZnNldCwgaGludF9hbW91bnQgKTtcXG5cXG4gICAgZmxvYXQgYWxwaGEgICAgICAgPSBzbW9vdGhzdGVwKCAwLjUgLSByZXNfZG9mZnNldCwgMC41ICsgcmVzX2RvZmZzZXQsIHNkZiApO1xcblxcbiAgICAvLyBBZGRpdGlvbmFsIGNvbnRyYXN0XFxuICAgIGFscGhhICAgICAgICAgICAgID0gcG93KCBhbHBoYSwgMS4wICsgMC4yICogdmdyYWQgKiBoaW50X2Ftb3VudCApO1xcblxcbiAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIHN1cHBvcnQgZm9yIEFSQl9ibGVuZF9mdW5jX2V4dGVuZGVkIGluIFdlYkdMLlxcbiAgICAvLyBGb3J0dW5hdGVseSB0aGUgYmFja2dyb3VuZCBpcyBmaWxsZWQgd2l0aCBhIHNvbGlkIGNvbG9yIHNvIHdlIGNhbiBkb1xcbiAgICAvLyB0aGUgYmxlbmRpbmcgaW5zaWRlIHRoZSBzaGFkZXIuXFxuXFxuICAgIC8vIERpc2NhcmRpbmcgcGl4ZWxzIGJleW9uZCBhIHRocmVzaG9sZCB0byBtaW5pbWlzZSBwb3NzaWJsZSBhcnRpZmFjdHMuXFxuICAgIGlmICggYWxwaGEgPCAyMC4wIC8gMjU2LjAgKSBkaXNjYXJkO1xcblxcbiAgICB2ZWMzIGNoYW5uZWxzID0gc3VicGl4ZWwoIGdyYWQueCAqIDAuNSAqIHN1YnBpeGVsX2Ftb3VudCwgYWxwaGEgKSArIDAuMTtcXG5cXG4gICAgLy8gRm9yIHN1YnBpeGVsIHJlbmRlcmluZyB3ZSBoYXZlIHRvIGJsZW5kIGVhY2ggY29sb3IgY2hhbm5lbCBzZXBhcmF0ZWx5XFxuICAgIHZlYzMgcmVzID0gbWl4KCBiZ19jb2xvciwgZm9udF9jb2xvciwgY2hhbm5lbHMgKTtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCggcmVzLCAxLjAgKTtcXG59XFxuXFxuXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL3RleHQvZnJhZy5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG5hdHRyaWJ1dGUgdmVjMiBhVmVydGV4UG9zaXRpb247XFxuXFxudW5pZm9ybSBtYXQzIHRyYW5zbGF0aW9uTWF0cml4O1xcbnVuaWZvcm0gbWF0MyBwcm9qZWN0aW9uTWF0cml4O1xcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuXFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNCgocHJvamVjdGlvbk1hdHJpeCAqIHRyYW5zbGF0aW9uTWF0cml4ICogdmVjMyhhVmVydGV4UG9zaXRpb24gLCAxLjApKS54eSwgMC4wLCAxLjApO1xcblxcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvc2VsZWN0L3ZlcnQuZ2xzbFxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxudW5pZm9ybSB2ZWMzIGJnX2NvbG9yO1xcbnZhcnlpbmcgdmVjMiAgdGMwO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChiZ19jb2xvciwwLjQ1KTtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCgxLjAsIDEuMCwgMS4wLDAuMik7XFxufVxcblxcblxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy9zZWxlY3QvZnJhZy5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9