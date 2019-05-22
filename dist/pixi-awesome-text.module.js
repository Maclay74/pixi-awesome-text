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
	      glData.shader.uniforms.hint_amount = source.config.antialiasing * 1;
	      glData.shader.uniforms.sdfMultiplier = _text["default"].scale;
	      glData.shader.uniforms.subpixel_amount = source.config.antialiasing * 1;
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
	
	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
	
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
	
	  function AwesomeText(text, style, config) {
	    var _this;
	
	    _classCallCheck(this, AwesomeText);
	
	    _this = _possibleConstructorReturn(this, _getPrototypeOf(AwesomeText).call(this, config.texture));
	
	    _defineProperty(_assertThisInitialized(_this), "pluginName", 'AwesomeTextRenderer');
	
	    _defineProperty(_assertThisInitialized(_this), "state", AwesomeText.states.regular);
	
	    _defineProperty(_assertThisInitialized(_this), "clicksCount", 0);
	
	    _defineProperty(_assertThisInitialized(_this), "config", {
	      editable: false,
	      uppercase: false,
	      lowercase: false,
	      antialiasing: true
	    });
	
	    _this.style = new PIXI.TextStyle(style);
	    _this.backgroundColor = style.backgroundColor;
	    _this._text = text; // Content
	
	    _this._font = config.font; // Font information
	
	    _this._texture = config.texture; // Texture with glyphs
	
	    _this.config = _extends({}, _this.config, config); // Calculate layout
	
	    _this.layout = new _layout["default"](_assertThisInitialized(_this), {
	      fontSize: _this.style.fontSize,
	      wrapWords: _this.style.breakWords,
	      wrapperWidth: _this.style.wordWrapWidth,
	      align: _this.style.align,
	      lineHeight: _this.style.lineHeight
	    });
	
	    if (_this.config.editable) {
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
	
	      this.metrics = this.fontMetrics(this.style.fontSize, 0.0);
	      this.layout.update();
	
	      if (this.config.editable) {
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
	      if (!this.config.editable) {
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
	      this.metrics = this.owner.metrics;
	      this.layout = this.owner.layout;
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
	      console.log(closestLetter);
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
	  }, {
	    key: "clearSelectedRange",
	    value: function clearSelectedRange() {
	      var range = this.range; // If user selected some text, remove it
	
	      if (range[1] !== null) {
	        this.owner.input.glyphIndex = Math.min(range[0] - 1, range[1] - 1);
	        var removeIndex = Math.min.apply(null, range);
	        var removeLength = Math.abs(range[0] - range[1]);
	        this.owner.select.setRange(0, false);
	        this.owner.removeString(removeIndex, removeLength);
	        this.owner.input.show();
	      }
	    }
	  }, {
	    key: "expand",
	    value: function expand(direction) {
	      this.range[1] += direction;
	      this.update();
	      console.log(this.range);
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
	      this.addEvent("paste", function (event) {
	        return _this.pasteFromClipboard(event);
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
	      var range = this.owner.select.range;
	      this.owner.select.clearSelectedRange();
	      event.target.value = "";
	      if (event.data === null) return; // Content we are about to add
	
	      var textToAdd = event.data;
	
	      if (this.owner.config.uppercase) {
	        textToAdd = textToAdd.toUpperCase();
	      }
	
	      if (this.owner.config.lowercase) {
	        textToAdd = textToAdd.toLowerCase();
	      } // If text is empty now
	
	
	      if (this.owner.layout.glyphs.length === 0) {
	        this.owner.text = textToAdd;
	        this.glyphIndex = 1; // If caret is at the end of the text
	      } else if (this.glyphIndex === this.owner.layout.glyphs.length - 1) {
	        this.owner.text += textToAdd;
	        this.glyphIndex++; // If we in the middle of the line
	      } else {
	        this.owner.insertString(++this.glyphIndex, textToAdd); //this.glyphIndex++;
	      }
	
	      this.owner.select.setRange(0, false);
	    }
	  }, {
	    key: "onKeydown",
	    value: function onKeydown(event) {
	      var range = this.owner.select.range;
	
	      switch (event.key) {
	        case "ArrowUp":
	          this.moveUp();
	          break;
	
	        case "ArrowDown":
	          this.moveDown();
	          break;
	
	        case "ArrowLeft":
	          // Move by word
	          if (event.ctrlKey) {
	            this.moveByWordLeft(); // Select
	          } else if (event.shiftKey) {
	            this.moveWithSelectLeft(); // Just move cursor
	          } else {
	            this.owner.select.setRange(0, false);
	            this.show();
	            this.glyphIndex--;
	          }
	
	          break;
	
	        case "ArrowRight":
	          // Move by word
	          if (event.ctrlKey) {
	            this.moveByWordRight(); // Select
	          } else if (event.shiftKey) {
	            this.moveWithSelectRight(); // Just move index
	          } else {
	            this.owner.select.setRange(0, false);
	            this.show();
	            this.glyphIndex++;
	          }
	
	          break;
	
	        case "Backspace":
	          if (range[1] !== null) {
	            this.owner.select.clearSelectedRange();
	          } else {
	            this.owner.removeString(this.glyphIndex--, 0);
	          }
	
	          break;
	
	        case "Delete":
	          if (range[1] !== null) {
	            this.owner.select.clearSelectedRange();
	          } else {
	            this.owner.removeString(this.glyphIndex + 1, 0);
	          }
	
	          break;
	        // Select all
	
	        case "a":
	          if (event.ctrlKey) {
	            this.owner.select.setRange(0, this.owner.text.length - 1);
	          }
	
	          break;
	        // Copy to clipboard
	
	        case "c":
	          if (event.ctrlKey) {
	            this.copyToClipboard();
	          }
	
	          break;
	        // Cut
	
	        case "x":
	          if (event.ctrlKey) {
	            this.copyToClipboard(true);
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
	  }, {
	    key: "copyToClipboard",
	    value: function copyToClipboard() {
	      var cut = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
	      var range = this.owner.select.range;
	      var start = Math.min.apply(null, range);
	      var end = Math.max.apply(null, range);
	      this.inputElement.value = this.owner.text.slice(start, end + 1);
	      this.inputElement.select();
	      document.execCommand("copy");
	      this.inputElement.value = "";
	
	      if (cut) {
	        this.owner.select.clearSelectedRange();
	      }
	    }
	  }, {
	    key: "pasteFromClipboard",
	    value: function pasteFromClipboard(event) {
	      event.preventDefault();
	      var text = event.clipboardData.getData("text");
	      if (this.owner.config.uppercase) text = text.toUpperCase();
	      if (this.owner.config.lowercase) text = text.toLowerCase(); // TODO remove all trash symbols
	
	      this.owner.select.clearSelectedRange();
	      this.owner.insertString(this.glyphIndex + 1, text);
	      this.glyphIndex = this.glyphIndex + text.length;
	    }
	  }, {
	    key: "moveWithSelectRight",
	    value: function moveWithSelectRight() {
	      var range = this.owner.select.range;
	
	      if (range[1] === null) {
	        ++this.glyphIndex;
	        range[0] = this.glyphIndex;
	        range[1] = this.glyphIndex;
	      } else if (range[1] === range[0] && this.glyphIndex === range[0] - 1) {
	        range[1] = null;
	        this.glyphIndex++;
	      } else {
	        this.owner.select.expand(1);
	        this.glyphIndex++;
	      }
	
	      this.owner.select.update();
	    }
	  }, {
	    key: "moveWithSelectLeft",
	    value: function moveWithSelectLeft() {
	      var range = this.owner.select.range; // If we only have cursor, no selection
	
	      if (range[1] === null) {
	        range[0] = this.glyphIndex;
	        range[1] = this.glyphIndex; // If we have selected one glyph and we remove selection
	      } else if (range[1] === range[0] && this.glyphIndex === range[0]) {
	        range[1] = null; // Regular selecting
	      } else {
	        this.owner.select.expand(-1);
	      }
	
	      this.glyphIndex--;
	      this.owner.select.update();
	    }
	  }, {
	    key: "moveDown",
	    value: function moveDown() {
	      this.owner.select.setRange(null, false);
	      var glyph = this.layout.glyphs[this.glyphIndex]; // If we are on the first line
	
	      if (glyph.position[1] === this.layout.height) {
	        return;
	      }
	
	      var newGlyph = this.owner.select.getClosestGlyph(glyph.position[0], glyph.position[1]);
	      this.glyphIndex = this.layout.glyphs.indexOf(newGlyph);
	    }
	  }, {
	    key: "moveUp",
	    value: function moveUp() {
	      this.owner.select.setRange(null, false);
	      var glyph = this.layout.glyphs[this.glyphIndex]; // If we are on the first line
	
	      if (glyph.position[1] <= this.metrics.lineHeight) {
	        return;
	      }
	
	      var newGlyph = this.owner.select.getClosestGlyph(glyph.position[0], glyph.position[1] - this.metrics.lineHeight * 2);
	      this.glyphIndex = this.layout.glyphs.indexOf(newGlyph);
	    }
	  }, {
	    key: "moveByWordLeft",
	    value: function moveByWordLeft() {
	      var glyphs = this.layout.glyphs;
	
	      if (this.glyphIndex > 0) {
	        for (var i = this.glyphIndex - 2; i >= 0; i--) {
	          if (glyphs[i].letter === " " && glyphs[i + 1].letter !== " ") {
	            this.glyphIndex = i;
	            return;
	          }
	
	          if (i === 0) this.glyphIndex = -1;
	        }
	      }
	    }
	  }, {
	    key: "moveByWordRight",
	    value: function moveByWordRight() {
	      var glyphs = this.layout.glyphs;
	
	      if (this.glyphIndex < glyphs.length) {
	        for (var i = this.glyphIndex + 1; i <= glyphs.length - 1; i++) {
	          if (glyphs[i].letter === " " && glyphs[i - 1].letter !== " ") {
	            this.glyphIndex = i;
	            return;
	          }
	
	          if (i === glyphs.length - 1) this.glyphIndex = glyphs.length - 1;
	        }
	      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAwNTg1OWQ0MTZhMzM5ODZjNDRlMCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2R0eXBlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYW4tYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvdmVydC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvZnJhZy5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3NlbGVjdC92ZXJ0Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvc2VsZWN0L2ZyYWcuZ2xzbCJdLCJuYW1lcyI6WyJPYmplY3QiLCJhc3NpZ24iLCJQSVhJIiwiZXh0cmFzIiwiQXdlc29tZVRleHQiLCJUZXh0IiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJzZWxlY3RWZXJ0ZXh0U2hhZGVyIiwic2VsZWN0RnJhZ21lbnRTaGFkZXIiLCJnbENvcmUiLCJBd2Vzb21lVGV4dFJlbmRlcmVyIiwicmVuZGVyZXIiLCJ0ZXh0U2hhZGVyIiwic2VsZWN0U2hhZGVyIiwiZ2wiLCJnZXRFeHRlbnNpb24iLCJTaGFkZXIiLCJzb3VyY2UiLCJnbERhdGEiLCJfZ2xEYXRhcyIsImNvbnRleHRUZXh0IiwiYmluZFZhbyIsImJ1aWxkVGV4dEdsRGF0YSIsInZhbyIsImRpcnR5IiwidXZCdWZmZXIiLCJ1cGxvYWQiLCJ1dnMiLCJpbmRleERpcnR5IiwiaW5kZXhCdWZmZXIiLCJpbmRpY2VzIiwidmVydGV4QnVmZmVyIiwidmVydGljZXMiLCJiaW5kU2hhZGVyIiwic2hhZGVyIiwic3RhdGUiLCJzZXRCbGVuZE1vZGUiLCJibGVuZE1vZGUiLCJ1bmlmb3JtcyIsInVTYW1wbGVyIiwiYmluZFRleHR1cmUiLCJ0ZXh0dXJlIiwidHJhbnNsYXRpb25NYXRyaXgiLCJ3b3JsZFRyYW5zZm9ybSIsInRvQXJyYXkiLCJoaW50X2Ftb3VudCIsImNvbmZpZyIsImFudGlhbGlhc2luZyIsInNkZk11bHRpcGxpZXIiLCJzY2FsZSIsInN1YnBpeGVsX2Ftb3VudCIsImZvbnRfY29sb3IiLCJ1dGlscyIsImhleDJyZ2IiLCJzdHlsZSIsImZpbGwiLCJyZXBsYWNlIiwiYmdfY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkcmF3TW9kZSIsIlRSSUFOR0xFUyIsImRyYXciLCJsZW5ndGgiLCJjb250ZXh0U2VsZWN0Iiwic2VsZWN0IiwiYnVpbGRTZWxlY3RHbERhdGEiLCJzZWxlY3RDb2xvciIsInN0eWxlSUQiLCJ1cGRhdGUiLCJzdGF0ZXMiLCJlZGl0YWJsZSIsInNlbGVjdGluZyIsInJlbmRlclNlbGVjdCIsInJlbmRlclRleHQiLCJHTEJ1ZmZlciIsImNyZWF0ZVZlcnRleEJ1ZmZlciIsIlNUUkVBTV9EUkFXIiwic2RmQnVmZmVyIiwic2RmU2l6ZXMiLCJTVEFUSUNfRFJBVyIsImNyZWF0ZUluZGV4QnVmZmVyIiwiVmVydGV4QXJyYXlPYmplY3QiLCJhZGRJbmRleCIsImFkZEF0dHJpYnV0ZSIsImF0dHJpYnV0ZXMiLCJhVmVydGV4UG9zaXRpb24iLCJGTE9BVCIsImFUZXh0dXJlQ29vcmQiLCJhU2RmU2l6ZSIsIk9iamVjdFJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsInJlZ2lzdGVyUGx1Z2luIiwiY3JlYXRlSW5kaWNlcyIsInRleHQiLCJyZWd1bGFyIiwidXBwZXJjYXNlIiwibG93ZXJjYXNlIiwiVGV4dFN0eWxlIiwiX3RleHQiLCJfZm9udCIsImZvbnQiLCJfdGV4dHVyZSIsImxheW91dCIsIlRleHRMYXlvdXQiLCJmb250U2l6ZSIsIndyYXBXb3JkcyIsImJyZWFrV29yZHMiLCJ3cmFwcGVyV2lkdGgiLCJ3b3JkV3JhcFdpZHRoIiwiYWxpZ24iLCJsaW5lSGVpZ2h0IiwiaW50ZXJhY3RpdmUiLCJidXR0b25Nb2RlIiwiU2VsZWN0IiwiaW5wdXQiLCJJbnB1dCIsInNldFN0YXRlIiwibWV0cmljcyIsImZvbnRNZXRyaWNzIiwiRmxvYXQzMkFycmF5IiwibGV0dGVyc0NvdW50IiwiYXJyYXlQb3NpdGlvbnMiLCJ2ZXJ0ZXgiLCJzZGYiLCJ3b3Jkc01ldHJpY3MiLCJmb3JFYWNoIiwid29yZCIsIndyaXRlU3RyaW5nIiwieCIsInkiLCJjbG9ja3dpc2UiLCJ0eXBlIiwiY291bnQiLCJuZXdTdGF0ZSIsInZhbHVlcyIsInNldFJlZ3VsYXJTdGF0ZSIsInNldEVkaXRhYmxlU3RhdGUiLCJjdXJyZW50RWRpdGluZ0VsZW1lbnQiLCJvZmYiLCJlbmFibGVkIiwib24iLCJlIiwiY2xpY2tzQ291bnQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsInNldFJhbmdlIiwiaW5wdXRFbGVtZW50IiwiZm9jdXMiLCJvbk1vdXNlRG93biIsInNob3ciLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsImluZGV4Iiwic3RyaW5nIiwic3Vic3RyIiwibmV3VGV4dCIsInNwbGl0Iiwic3BsaWNlIiwiam9pbiIsImZvbnRfbWV0cmljcyIsInBvcyIsInByZXZfY2hhciIsImNwb3MiLCJ4X21heCIsImNhcFNjYWxlIiwic3RyX3BvcyIsInNjaGFyIiwiZm9udF9jaGFyIiwiY2hhcnMiLCJrZXJuIiwicmVjdCIsImNoYXJSZWN0IiwicG9zaXRpb25zIiwibWFwIiwidXYiLCJzdHJpbmdfcG9zIiwibW9yZUxpbmVHYXAiLCJjYXBfaGVpZ2h0IiwieF9oZWlnaHQiLCJmb250QXNjZW50IiwiYXNjZW50IiwiZGVzY2VudCIsImxpbmVfZ2FwIiwibG93U2NhbGUiLCJNYXRoIiwicm91bmQiLCJsb3djYXNlIiwiZmxhZ3MiLCJiYXNlbGluZSIsImciLCJib3R0b20iLCJpeSIsInRvcCIsInJvd19oZWlnaHQiLCJsZWZ0IiwiYmVhcmluZ194IiwiaXgiLCJyaWdodCIsInAiLCJuZXdfcG9zX3giLCJhZHZhbmNlX3giLCJzZGZfc2l6ZSIsInZhbHVlIiwibWVzaCIsIk1lc2giLCJvd25lciIsInN0YXJ0WSIsImNhbGN1bGF0ZVdvcmRzUG9zaXRpb25zIiwiZ2x5cGhzIiwiZ2V0R2x5cGhzIiwid2lkdGgiLCJoZWlnaHQiLCJjaGFyIiwid29yZHMiLCJpIiwic3RhcnRYIiwid29yZFNpemUiLCJnZXRTdHJpbmdTaXplIiwicHVzaCIsImxpbmVzQ291bnQiLCJ3b3Jkc09uTGluZSIsImZpbHRlciIsImxhc3RXb3JkIiwiZnJlZVNwYWNlIiwibGVmdE9mZnNldCIsImxldHRlciIsInBvc2l0aW9uIiwicmFuZ2UiLCJidWlsZFZlcnRpY2VzIiwic3RhcnQiLCJlbmQiLCJtaW4iLCJhcHBseSIsIm1heCIsImxldHRlckNvdW50IiwiZmlyc3RMZXR0ZXIiLCJsYXN0TGV0dGVyIiwic3RhcnRMaW5lTGV0dGVyIiwiZW5kTGluZUxldHRlciIsIm9mZnNldCIsInNlbGVjdGluZ0xpbmUiLCJmbG9vciIsInNlbGVjdGluZ0xpbmVZIiwibGFzdEdseXBoT25MaW5lIiwiZmlyc3RHbHlwaE9uTGluZSIsImdseXBoIiwiZXZlbnQiLCJkYXRhIiwiYnV0dG9uIiwiZ2xvYmFsIiwiY2xvc2VzdExldHRlciIsImdldENsb3Nlc3RHbHlwaCIsImNvbnNvbGUiLCJsb2ciLCJpbmRleE9mIiwiZ2x5cGhJbmRleCIsInJlbW92ZUluZGV4IiwicmVtb3ZlTGVuZ3RoIiwiYWJzIiwicmVtb3ZlU3RyaW5nIiwiZGlyZWN0aW9uIiwiX2dseXBoSW5kZXgiLCJfZW5hYmxlZCIsImVuYWJsZSIsImRpc2FibGUiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY3JlYXRlRmllbGQiLCJkaXNwbGF5IiwiYm9keSIsImFwcGVuZCIsImNvbnRhaW5zIiwicmVtb3ZlQ2hpbGQiLCJvcGFjaXR5IiwiY3JlYXRlRWxlbWVudCIsInRyYW5zZm9ybSIsInNsaWNlIiwiY29sb3IiLCJib3JkZXIiLCJjb250YWluIiwiekluZGV4IiwicG9pbnRlckV2ZW50cyIsIm91dGxpbmUiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJwYWRkaW5nIiwiYWRkRXZlbnQiLCJvbklucHV0Iiwib25LZXlkb3duIiwicGFzdGVGcm9tQ2xpcGJvYXJkIiwiZ2x5cGhNZXRyaWNzIiwibGFzdEdseXBoIiwic2VsZWN0ZWRHbHlwaCIsInNldFBvc2l0aW9uIiwiY2xlYXJTZWxlY3RlZFJhbmdlIiwidGFyZ2V0IiwidGV4dFRvQWRkIiwidG9VcHBlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsImluc2VydFN0cmluZyIsImtleSIsIm1vdmVVcCIsIm1vdmVEb3duIiwiY3RybEtleSIsIm1vdmVCeVdvcmRMZWZ0Iiwic2hpZnRLZXkiLCJtb3ZlV2l0aFNlbGVjdExlZnQiLCJtb3ZlQnlXb3JkUmlnaHQiLCJtb3ZlV2l0aFNlbGVjdFJpZ2h0IiwiY29weVRvQ2xpcGJvYXJkIiwic2NhbGVYIiwiYSIsInNjYWxlWSIsImQiLCJsb2NhbFgiLCJsb2NhbFkiLCJnZXRUcmFuc2Zvcm0iLCJvd25lclRyYW5zZm9ybSIsImNhbnZhc1JlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0eCIsInR5IiwiY2FsbGJhY2siLCJhZGRFdmVudExpc3RlbmVyIiwiY3V0IiwiZXhlY0NvbW1hbmQiLCJwcmV2ZW50RGVmYXVsdCIsImNsaXBib2FyZERhdGEiLCJnZXREYXRhIiwiZXhwYW5kIiwibmV3R2x5cGgiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7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QUM5QjtBQUNGO0FBRUY7Ozs7OztnQkFJWXFELEs7Ozs7Ozs7QUMzY2YscUVBQW9FLCtCQUErQiwyQkFBMkIsbUNBQW1DLGdDQUFnQyw4QkFBOEIsc0JBQXNCLHdCQUF3QiwwQkFBMEIseUJBQXlCLDZFQUE2RSw4REFBOEQsOEJBQThCLCtCQUErQix3RkFBd0YsOEdBQThHLEtBQUssRzs7Ozs7O0FDQW50QixpRUFBZ0UsNEJBQTRCLGdDQUFnQywwQkFBMEIsMEJBQTBCLHNCQUFzQix3QkFBd0IsMEJBQTBCLHc4QkFBdzhCLDhCQUE4Qiw0RUFBNEUsZ0NBQWdDLGlDQUFpQyw0Q0FBNEMsa0VBQWtFLGlCQUFpQixHQUFHLGtCQUFrQiw4Q0FBOEMsR0FBRyxxQkFBcUIsK0ZBQStGLDhFQUE4RSw4RUFBOEUsNElBQTRJLDREQUE0RCxrREFBa0Qsa0NBQWtDLCtFQUErRSxrRkFBa0YsMklBQTJJLGdFQUFnRSxvRkFBb0Ysc0dBQXNHLGdVQUFnVSxnRkFBZ0YsdUlBQXVJLHNDQUFzQyxHQUFHLE87Ozs7OztBQ0Fsc0cscUVBQW9FLG1DQUFtQyxnQ0FBZ0MscUJBQXFCLDhHQUE4RyxLQUFLLEc7Ozs7OztBQ0EvUSw0REFBMkQsb0JBQW9CLGlCQUFpQix5Q0FBeUMsNkNBQTZDLEdBQUcsTyIsImZpbGUiOiJwaXhpLWF3ZXNvbWUtdGV4dC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJBd2Vzb21lVGV4dFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJBd2Vzb21lVGV4dFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAwNTg1OWQ0MTZhMzM5ODZjNDRlMCIsImltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi9yZW5kZXJlclwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4vdGV4dFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi9sYXlvdXRcIjtcblxuT2JqZWN0LmFzc2lnbihQSVhJLmV4dHJhcywge1xuICBBd2Vzb21lVGV4dDogVGV4dFxufSk7XG5cbmlmICh0eXBlb2YgUElYSSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgaWYgKFBJWEkuZXh0cmFzKSB7XG4gICAgUElYSS5leHRyYXMuQXdlc29tZVRleHQgPSBUZXh0O1xuICB9IGVsc2Uge1xuICAgIFBJWEkuZXh0cmFzID0geyBBd2Vzb21lVGV4dDogVGV4dH07XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgVGV4dCxcbiAgUmVuZGVyZXIsXG4gIExheW91dFxufVxuXG4vKlxuXG5peCAgICAgICAgICAgID0gc2RmX3NpemUgLyB0ZXhfd2lkdGhcbml5ICAgICAgICAgICAgPSBzZGZfc2l6ZSAvIHRleF9oZWlnaHRcbnJvd19oZWlnaHQgICAgPSAocm93X2hlaWdodCArIDIgKiBzZGZfc2l6ZSkgLyB0ZXhfaGVpZ2h0O1xuYXNwZWN0ICAgICAgICA9IHRleF93aWR0aCAvIHRleF9oZWlnaHQ7XG5hc2NlbnQgICAgICAgID0gZm9udC0+YXNjZW50ICogc2NhbGVZXG5kZXNjZW50ICAgICAgID0gZmFic2YoZm9udC0+ZGVzY2VudCAqIHNjYWxlWSlcbmxpbmVfZ2FwICAgICAgPSBmb250LT5saW5lX2dhcCAqIHNjYWxlIFlcbmNhcF9oZWlnaHQgICAgPSBneGNhcC5tYXgueSAqIHNjYWxlWVxueF9oZWlnaHQgICAgICA9IGd4Lm1heC55ICogc2NhbGVZXG5zcGFjZV9hZHZhbmNlID0gZ3NwYWNlLmFkdmFuY2Vfd2lkdGggKiBzY2FsZVhcblxuXG5zY2FsZXkgPSByb3dfaGVpZ2h0IC8gdGV4X2hlaWdodCAvICggZm9udC0+Z2x5cGhfbWF4LnkgLSBmb250LT5nbHlwaF9taW4ueSApO1xuc2NhbGV4ID0gcm93X2hlaWdodCAvIHRleF93aWR0aCAvICggZm9udC0+Z2x5cGhfbWF4LnkgLSBmb250LT5nbHlwaF9taW4ueSApO1xuZ3NwYWNlID0gZm9udC0+Z2x5cGhzWyBmb250LT5nbHlwaF9pZHgoICcgJyApIF07XG5neCAgICAgPSBmb250LT5nbHlwaHNbIGZvbnQtPmdseXBoX2lkeCggJ3gnICkgXVxuZ3hjYXAgID0gZm9udC0+Z2x5cGhzWyBmb250LT5nbHlwaF9pZHgoICdYJyApIF1cblxuXG5zZGZfc2l6ZSA9IDEwXG5cbiovXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0IEF3ZXNvbWVUZXh0IGZyb20gXCIuL3RleHRcIjtcblxuY29uc3QgdmVydGV4U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy90ZXh0L3ZlcnQuZ2xzbFwiKTtcbmNvbnN0IGZyYWdtZW50U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy90ZXh0L2ZyYWcuZ2xzbFwiKTtcblxuY29uc3Qgc2VsZWN0VmVydGV4dFNoYWRlciA9IHJlcXVpcmUoXCIuL3NoYWRlcnMvc2VsZWN0L3ZlcnQuZ2xzbFwiKTtcbmNvbnN0IHNlbGVjdEZyYWdtZW50U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy9zZWxlY3QvZnJhZy5nbHNsXCIpO1xuXG5jb25zdCBnbENvcmUgPSBQSVhJLmdsQ29yZTtcblxuY2xhc3MgQXdlc29tZVRleHRSZW5kZXJlciBleHRlbmRzIFBJWEkuT2JqZWN0UmVuZGVyZXIge1xuXG4gIHN0YXRpYyBjb250ZXh0VGV4dCA9IDA7XG4gIHN0YXRpYyBjb250ZXh0U2VsZWN0ID0gMTtcblxuICBzZWxlY3RDb2xvciA9IDB4RkZCM0MzO1xuXG5cbiAgY29uc3RydWN0b3IocmVuZGVyZXIpIHtcbiAgICBzdXBlcihyZW5kZXJlcik7XG4gICAgdGhpcy50ZXh0U2hhZGVyID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdFNoYWRlciA9IG51bGw7XG5cbiAgfVxuXG4gIG9uQ29udGV4dENoYW5nZSgpIHtcbiAgICBjb25zdCBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG4gICAgZ2wuZ2V0RXh0ZW5zaW9uKFwiT0VTX3N0YW5kYXJkX2Rlcml2YXRpdmVzXCIpO1xuICAgIHRoaXMudGV4dFNoYWRlciA9IG5ldyBQSVhJLlNoYWRlcihnbCwgdmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XG4gICAgdGhpcy5zZWxlY3RTaGFkZXIgPSBuZXcgUElYSS5TaGFkZXIoZ2wsIHNlbGVjdFZlcnRleHRTaGFkZXIsIHNlbGVjdEZyYWdtZW50U2hhZGVyKTtcbiAgfVxuXG4gIHJlbmRlclRleHQoc291cmNlKSB7XG5cbiAgICBsZXQgZ2xEYXRhID0gc291cmNlLl9nbERhdGFzW0F3ZXNvbWVUZXh0UmVuZGVyZXIuY29udGV4dFRleHRdO1xuXG4gICAgaWYgKCFnbERhdGEpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYmluZFZhbyhudWxsKTtcbiAgICAgIGdsRGF0YSA9IHRoaXMuYnVpbGRUZXh0R2xEYXRhKHNvdXJjZSwgdGhpcy5yZW5kZXJlci5nbCk7XG4gICAgICBzb3VyY2UuX2dsRGF0YXNbQXdlc29tZVRleHRSZW5kZXJlci5jb250ZXh0VGV4dF0gPSBnbERhdGE7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlci5iaW5kVmFvKGdsRGF0YS52YW8pO1xuXG4gICAgaWYgKHNvdXJjZS5kaXJ0eSkge1xuICAgICAgc291cmNlLmRpcnR5ID0gZmFsc2U7XG4gICAgICBnbERhdGEudXZCdWZmZXIudXBsb2FkKHNvdXJjZS51dnMpO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UuaW5kZXhEaXJ0eSkge1xuICAgICAgc291cmNlLmluZGV4RGlydHkgPSBmYWxzZTtcbiAgICAgIGdsRGF0YS5pbmRleEJ1ZmZlci51cGxvYWQoc291cmNlLmluZGljZXMpO1xuICAgIH1cblxuICAgIGdsRGF0YS52ZXJ0ZXhCdWZmZXIudXBsb2FkKHNvdXJjZS52ZXJ0aWNlcyk7XG4gICAgdGhpcy5yZW5kZXJlci5iaW5kU2hhZGVyKGdsRGF0YS5zaGFkZXIpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zdGF0ZS5zZXRCbGVuZE1vZGUoc291cmNlLmJsZW5kTW9kZSk7XG5cbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnVTYW1wbGVyID0gdGhpcy5yZW5kZXJlci5iaW5kVGV4dHVyZShzb3VyY2UudGV4dHVyZSk7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy50cmFuc2xhdGlvbk1hdHJpeCA9IHNvdXJjZS53b3JsZFRyYW5zZm9ybS50b0FycmF5KHRydWUpO1xuXG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5oaW50X2Ftb3VudCA9IHNvdXJjZS5jb25maWcuYW50aWFsaWFzaW5nICogMTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnNkZk11bHRpcGxpZXIgPSBBd2Vzb21lVGV4dC5zY2FsZTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnN1YnBpeGVsX2Ftb3VudCA9IHNvdXJjZS5jb25maWcuYW50aWFsaWFzaW5nICogMTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmZvbnRfY29sb3IgPSBQSVhJLnV0aWxzLmhleDJyZ2Ioc291cmNlLnN0eWxlLmZpbGwucmVwbGFjZShcIiNcIiwgXCIweFwiKSk7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5iZ19jb2xvciA9IFBJWEkudXRpbHMuaGV4MnJnYihzb3VyY2UuYmFja2dyb3VuZENvbG9yLnJlcGxhY2UoXCIjXCIsIFwiMHhcIikpO1xuXG4gICAgY29uc3QgZHJhd01vZGUgPSBzb3VyY2UuZHJhd01vZGUgPSB0aGlzLnJlbmRlcmVyLmdsLlRSSUFOR0xFUztcbiAgICBnbERhdGEudmFvLmRyYXcoZHJhd01vZGUsIHNvdXJjZS5pbmRpY2VzLmxlbmd0aCwgMCk7XG5cbiAgfVxuXG4gIHJlbmRlclNlbGVjdChzb3VyY2UpIHtcbiAgICBsZXQgZ2xEYXRhID0gc291cmNlLl9nbERhdGFzW0F3ZXNvbWVUZXh0UmVuZGVyZXIuY29udGV4dFNlbGVjdF07XG5cbiAgICBpZiAoIWdsRGF0YSB8fCBzb3VyY2Uuc2VsZWN0LmRpcnR5KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmJpbmRWYW8obnVsbCk7XG4gICAgICBnbERhdGEgPSB0aGlzLmJ1aWxkU2VsZWN0R2xEYXRhKHNvdXJjZSwgdGhpcy5yZW5kZXJlci5nbCk7XG4gICAgICBzb3VyY2UuX2dsRGF0YXNbQXdlc29tZVRleHRSZW5kZXJlci5jb250ZXh0U2VsZWN0XSA9IGdsRGF0YTtcbiAgICAgIHNvdXJjZS5zZWxlY3QuZGlydHkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyLmJpbmRWYW8oZ2xEYXRhLnZhbyk7XG5cbiAgICBpZiAoc291cmNlLnNlbGVjdC5pbmRleERpcnR5KSB7XG4gICAgICBzb3VyY2Uuc2VsZWN0LmluZGV4RGlydHkgPSBmYWxzZTtcbiAgICAgIGdsRGF0YS5pbmRleEJ1ZmZlci51cGxvYWQoc291cmNlLnNlbGVjdC5pbmRpY2VzKTtcbiAgICB9XG5cbiAgICBnbERhdGEudmVydGV4QnVmZmVyLnVwbG9hZChzb3VyY2Uuc2VsZWN0LnZlcnRpY2VzKTtcbiAgICB0aGlzLnJlbmRlcmVyLmJpbmRTaGFkZXIoZ2xEYXRhLnNoYWRlcik7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnN0YXRlLnNldEJsZW5kTW9kZSgxNyk7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy50cmFuc2xhdGlvbk1hdHJpeCA9IHNvdXJjZS53b3JsZFRyYW5zZm9ybS50b0FycmF5KHRydWUpO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuYmdfY29sb3IgPSBQSVhJLnV0aWxzLmhleDJyZ2IodGhpcy5zZWxlY3RDb2xvcik7XG5cbiAgICBjb25zdCBkcmF3TW9kZSA9IHNvdXJjZS5kcmF3TW9kZSA9IHRoaXMucmVuZGVyZXIuZ2wuVFJJQU5HTEVTO1xuICAgIGdsRGF0YS52YW8uZHJhdyhkcmF3TW9kZSwgc291cmNlLnNlbGVjdC5pbmRpY2VzLmxlbmd0aCwgMCk7XG4gIH1cblxuICByZW5kZXIoc291cmNlKSB7XG5cbiAgICBpZiAoc291cmNlLnN0eWxlSUQgIT09IHNvdXJjZS5zdHlsZS5zdHlsZUlEKSB7XG4gICAgICBzb3VyY2UudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZS5zdGF0ZSA9PT0gQXdlc29tZVRleHQuc3RhdGVzLmVkaXRhYmxlIHx8IHNvdXJjZS5zdGF0ZSA9PT0gQXdlc29tZVRleHQuc3RhdGVzLnNlbGVjdGluZykge1xuICAgICAgdGhpcy5yZW5kZXJTZWxlY3Qoc291cmNlKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJUZXh0KHNvdXJjZSk7XG4gIH1cblxuICBidWlsZFRleHRHbERhdGEoc291cmNlLCBnbCkge1xuXG4gICAgY29uc3QgZ2xEYXRhID0ge1xuICAgICAgc2hhZGVyOiB0aGlzLnRleHRTaGFkZXIsXG4gICAgICB2ZXJ0ZXhCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoZ2wsIHNvdXJjZS52ZXJ0aWNlcywgZ2wuU1RSRUFNX0RSQVcpLFxuICAgICAgdXZCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoZ2wsIHNvdXJjZS51dnMsIGdsLlNUUkVBTV9EUkFXKSxcbiAgICAgIHNkZkJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgc291cmNlLnNkZlNpemVzLCBnbC5TVEFUSUNfRFJBVyksXG4gICAgICBpbmRleEJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZUluZGV4QnVmZmVyKGdsLCBzb3VyY2UuaW5kaWNlcywgZ2wuU1RBVElDX0RSQVcpLFxuICAgICAgLy8gYnVpbGQgdGhlIHZhbyBvYmplY3QgdGhhdCB3aWxsIHJlbmRlci4uXG4gICAgICB2YW86IG51bGwsXG4gICAgICBkaXJ0eTogc291cmNlLmRpcnR5LFxuICAgICAgaW5kZXhEaXJ0eTogc291cmNlLmluZGV4RGlydHksXG4gICAgfTtcblxuICAgIGdsRGF0YS52YW8gPSBuZXcgZ2xDb3JlLlZlcnRleEFycmF5T2JqZWN0KGdsKVxuICAgICAgLmFkZEluZGV4KGdsRGF0YS5pbmRleEJ1ZmZlcilcbiAgICAgIC5hZGRBdHRyaWJ1dGUoZ2xEYXRhLnZlcnRleEJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFWZXJ0ZXhQb3NpdGlvbiwgZ2wuRkxPQVQsIGZhbHNlLCAyICogNCwgMClcbiAgICAgIC5hZGRBdHRyaWJ1dGUoZ2xEYXRhLnV2QnVmZmVyLCBnbERhdGEuc2hhZGVyLmF0dHJpYnV0ZXMuYVRleHR1cmVDb29yZCwgZ2wuRkxPQVQsIGZhbHNlLCAyICogNCwgMClcbiAgICAgIC5hZGRBdHRyaWJ1dGUoZ2xEYXRhLnNkZkJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFTZGZTaXplLCBnbC5GTE9BVCwgZmFsc2UsIDQsIDApO1xuXG4gICAgcmV0dXJuIGdsRGF0YVxuICB9XG5cbiAgYnVpbGRTZWxlY3RHbERhdGEoc291cmNlLCBnbCkge1xuICAgIGNvbnN0IGdsRGF0YSA9IHtcbiAgICAgIHNoYWRlcjogdGhpcy5zZWxlY3RTaGFkZXIsXG4gICAgICB2ZXJ0ZXhCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoZ2wsIHNvdXJjZS5zZWxlY3QudmVydGljZXMsIGdsLlNUUkVBTV9EUkFXKSxcbiAgICAgIGluZGV4QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlSW5kZXhCdWZmZXIoZ2wsIHNvdXJjZS5zZWxlY3QuaW5kaWNlcywgZ2wuU1RBVElDX0RSQVcpLFxuICAgICAgdmFvOiBudWxsXG4gICAgfTtcblxuICAgIGdsRGF0YS52YW8gPSBuZXcgZ2xDb3JlLlZlcnRleEFycmF5T2JqZWN0KGdsKVxuICAgICAgLmFkZEluZGV4KGdsRGF0YS5pbmRleEJ1ZmZlcilcbiAgICAgIC5hZGRBdHRyaWJ1dGUoZ2xEYXRhLnZlcnRleEJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFWZXJ0ZXhQb3NpdGlvbiwgZ2wuRkxPQVQsIGZhbHNlLCAyICogNCwgMClcblxuICAgIHJldHVybiBnbERhdGFcbiAgfVxuXG59XG5cblBJWEkuV2ViR0xSZW5kZXJlci5yZWdpc3RlclBsdWdpbignQXdlc29tZVRleHRSZW5kZXJlcicsIEF3ZXNvbWVUZXh0UmVuZGVyZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBBd2Vzb21lVGV4dFJlbmRlcmVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyZXIuanMiLCJjb25zdCBjcmVhdGVJbmRpY2VzID0gcmVxdWlyZShcInF1YWQtaW5kaWNlc1wiKVxuaW1wb3J0IFRleHRMYXlvdXQgZnJvbSAnLi9sYXlvdXQnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL3NlbGVjdCdcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0J1xuXG5jbGFzcyBBd2Vzb21lVGV4dCBleHRlbmRzIFBJWEkubWVzaC5NZXNoIHtcblxuICBzdGF0aWMgc2NhbGUgPSAxLjA7XG4gIHN0YXRpYyBzdGF0ZXMgPSB7cmVndWxhcjogMCwgZWRpdGFibGU6IDEsIHNlbGVjdGluZzogMn07XG4gIHN0YXRpYyBjdXJyZW50RWRpdGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gIHBsdWdpbk5hbWUgPSAnQXdlc29tZVRleHRSZW5kZXJlcic7XG4gIHN0YXRlID0gQXdlc29tZVRleHQuc3RhdGVzLnJlZ3VsYXI7XG4gIGNsaWNrc0NvdW50ID0gMDtcblxuICBjb25maWcgPSB7XG4gICAgZWRpdGFibGU6IGZhbHNlLFxuICAgIHVwcGVyY2FzZTogZmFsc2UsXG4gICAgbG93ZXJjYXNlOiBmYWxzZSxcbiAgICBhbnRpYWxpYXNpbmc6IHRydWVcbiAgfTtcblxuICBjb25zdHJ1Y3Rvcih0ZXh0LCBzdHlsZSwgY29uZmlnKSB7XG4gICAgc3VwZXIoY29uZmlnLnRleHR1cmUpO1xuXG4gICAgdGhpcy5zdHlsZSA9IG5ldyBQSVhJLlRleHRTdHlsZShzdHlsZSk7XG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSBzdHlsZS5iYWNrZ3JvdW5kQ29sb3I7XG4gICAgdGhpcy5fdGV4dCA9IHRleHQ7IC8vIENvbnRlbnRcbiAgICB0aGlzLl9mb250ID0gY29uZmlnLmZvbnQ7IC8vIEZvbnQgaW5mb3JtYXRpb25cbiAgICB0aGlzLl90ZXh0dXJlID0gY29uZmlnLnRleHR1cmU7IC8vIFRleHR1cmUgd2l0aCBnbHlwaHNcbiAgICB0aGlzLmNvbmZpZyA9IHsuLi50aGlzLmNvbmZpZywgLi4uY29uZmlnfTtcblxuICAgIC8vIENhbGN1bGF0ZSBsYXlvdXRcbiAgICB0aGlzLmxheW91dCA9IG5ldyBUZXh0TGF5b3V0KHRoaXMsIHtcbiAgICAgIGZvbnRTaXplOiB0aGlzLnN0eWxlLmZvbnRTaXplLFxuICAgICAgd3JhcFdvcmRzOiB0aGlzLnN0eWxlLmJyZWFrV29yZHMsXG4gICAgICB3cmFwcGVyV2lkdGg6IHRoaXMuc3R5bGUud29yZFdyYXBXaWR0aCxcbiAgICAgIGFsaWduOiB0aGlzLnN0eWxlLmFsaWduLFxuICAgICAgbGluZUhlaWdodDogdGhpcy5zdHlsZS5saW5lSGVpZ2h0LFxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuY29uZmlnLmVkaXRhYmxlKSB7XG4gICAgICB0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuYnV0dG9uTW9kZSA9IHRydWU7XG5cbiAgICAgIHRoaXMuc2VsZWN0ID0gbmV3IFNlbGVjdCh0aGlzKTtcbiAgICAgIHRoaXMuaW5wdXQgPSBuZXcgSW5wdXQodGhpcyk7XG4gICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5mb250TWV0cmljcyh0aGlzLnN0eWxlLmZvbnRTaXplLCAwLjApO1xuXG4gICAgdGhpcy5sYXlvdXQudXBkYXRlKCk7XG5cbiAgICBpZiAodGhpcy5jb25maWcuZWRpdGFibGUpIHtcbiAgICAgIHRoaXMuc2VsZWN0LnVwZGF0ZSgpO1xuICAgICAgdGhpcy5pbnB1dC51cGRhdGUoKTtcbiAgICB9XG5cbiAgICAvLyBBcnJheXMgZm9yIHZlcnRpY2VzLCB1dnMgYW5kIHNkZlxuICAgIHRoaXMudmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubGF5b3V0LmxldHRlcnNDb3VudCAqIDQgKiAyKTtcbiAgICB0aGlzLnV2cyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5sYXlvdXQubGV0dGVyc0NvdW50ICogNCAqIDIpO1xuICAgIHRoaXMuc2RmU2l6ZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubGF5b3V0LmxldHRlcnNDb3VudCAqIDQpO1xuICAgIHRoaXMuYXJyYXlQb3NpdGlvbnMgPSB7IHZlcnRleDogMCwgdXZzOiAwLCBzZGY6IDAgfTtcblxuICAgIC8vIEZpbGwgYXJyYXlzIHdvcmQgYnkgd29yZFxuICAgIHRoaXMubGF5b3V0LndvcmRzTWV0cmljcy5mb3JFYWNoICh3b3JkID0+IHtcbiAgICAgIHRoaXMud3JpdGVTdHJpbmcod29yZC53b3JkLCB0aGlzLmZvbnQsIHRoaXMubWV0cmljcywgW3dvcmQueCwgd29yZC55XSk7XG4gICAgfSk7XG5cbiAgICAvLyBQcmVwYXJlIGluZGljZXNcbiAgICB0aGlzLmluZGljZXMgPSBjcmVhdGVJbmRpY2VzKHtcbiAgICAgIGNsb2Nrd2lzZTogdHJ1ZSxcbiAgICAgIHR5cGU6ICd1aW50MTYnLFxuICAgICAgY291bnQ6IHRoaXMubGF5b3V0LmxldHRlcnNDb3VudFxuICAgIH0pO1xuXG4gICAgdGhpcy5zdHlsZUlEID0gdGhpcy5zdHlsZS5zdHlsZUlEO1xuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xuICAgIHRoaXMuaW5kZXhEaXJ0eSA9IHRydWU7XG4gICAgdGhpcy5fZ2xEYXRhcyA9IFtdO1xuICB9XG5cbiAgc2V0U3RhdGUobmV3U3RhdGUpIHtcblxuICAgIGlmICghdGhpcy5jb25maWcuZWRpdGFibGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCB7IHN0YXRlcyB9ID0gQXdlc29tZVRleHQ7XG5cbiAgICBpZiAoIW5ld1N0YXRlIGluIE9iamVjdC52YWx1ZXMoc3RhdGVzKSkgcmV0dXJuO1xuXG4gICAgc3dpdGNoIChuZXdTdGF0ZSkge1xuICAgICAgY2FzZSBzdGF0ZXMucmVndWxhcjpcbiAgICAgICAgdGhpcy5zZXRSZWd1bGFyU3RhdGUoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIHN0YXRlcy5lZGl0YWJsZTpcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyKSB7XG4gICAgICAgICAgdGhpcy5zZXRFZGl0YWJsZVN0YXRlKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5zdGF0ZSA9IG5ld1N0YXRlO1xuICB9XG5cbiAgZ2V0IHRleHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XG4gIH1cblxuICBzZXQgdGV4dCh2YWx1ZSkge1xuICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc2V0UmVndWxhclN0YXRlKCkge1xuXG4gICAgQXdlc29tZVRleHQuY3VycmVudEVkaXRpbmdFbGVtZW50ID0gbnVsbDtcblxuICAgIHRoaXMub2ZmKFwibW91c2Vkb3duXCIpO1xuICAgIHRoaXMub2ZmKFwibW91c2Vtb3ZlXCIpO1xuICAgIHRoaXMub2ZmKFwibW91c2V1cFwiKTtcbiAgICB0aGlzLm9mZihcIm1vdXNldXBvdXRzaWRlXCIpO1xuXG4gICAgdGhpcy5pbnB1dC5lbmFibGVkID0gZmFsc2U7XG5cbiAgICB0aGlzLm9uKFwiY2xpY2tcIiwgZSA9PiB7XG4gICAgICBpZiAodGhpcy5jbGlja3NDb3VudCA9PT0gMSkge1xuICAgICAgICB0aGlzLmNsaWNrc0NvdW50ID0gMDtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZShBd2Vzb21lVGV4dC5zdGF0ZXMuZWRpdGFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodGhpcy5jbGlja3NDb3VudCA9PT0gMCkge1xuICAgICAgICB0aGlzLmNsaWNrc0NvdW50Kys7XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICB0aGlzLmNsaWNrc0NvdW50ID0gMDtcbiAgICAgICAgfSwgMzAwKVxuICAgICAgfVxuICAgIH0pXG5cbiAgfVxuXG4gIHNldEVkaXRhYmxlU3RhdGUoKSB7XG5cbiAgICAvLyBEaXNhYmxlIHByZXZpb3VzbHkgZW5hYmxlZCBmaWVsZFxuICAgIGlmIChBd2Vzb21lVGV4dC5jdXJyZW50RWRpdGluZ0VsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgQXdlc29tZVRleHQuY3VycmVudEVkaXRpbmdFbGVtZW50LnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyKTtcbiAgICB9XG4gICAgQXdlc29tZVRleHQuY3VycmVudEVkaXRpbmdFbGVtZW50ID0gdGhpcztcblxuICAgIC8vIERpc2FibGUgdW5uZWNlc3NhcnkgZXZlbnRzXG4gICAgdGhpcy5vZmYoXCJjbGlja1wiKTtcblxuICAgIHRoaXMuaW5wdXQuZW5hYmxlZCA9IHRydWU7XG4gICAgdGhpcy5pbnB1dC5oaWRlKCk7XG5cbiAgICAvLyBTZWxlY3QgYWxsIGNoYXJhY3RlcnNcbiAgICB0aGlzLnNlbGVjdC5zZXRSYW5nZSgwLHRoaXMudGV4dC5sZW5ndGggLSAxKTtcbiAgICB0aGlzLmlucHV0LmlucHV0RWxlbWVudC5mb2N1cygpO1xuXG4gICAgdGhpcy5vbihcIm1vdXNlZG93blwiLCBlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLnNlbGVjdGluZyk7XG4gICAgICB0aGlzLnNlbGVjdC5vbk1vdXNlRG93bihlKTtcbiAgICAgIHRoaXMuaW5wdXQuc2hvdygpO1xuICAgICAgdGhpcy5pbnB1dC51cGRhdGUoZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKFwibW91c2Vtb3ZlXCIsIGUgPT4ge1xuICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IEF3ZXNvbWVUZXh0LnN0YXRlcy5zZWxlY3RpbmcpIHtcbiAgICAgICAgdGhpcy5zZWxlY3Qub25Nb3VzZU1vdmUoZSk7XG4gICAgICAgIHRoaXMuaW5wdXQuaGlkZSgpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgdGhpcy5vbihcIm1vdXNldXBcIiwgZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5lZGl0YWJsZSk7XG4gICAgICB0aGlzLnNlbGVjdC5vbk1vdXNlVXAoZSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKFwibW91c2V1cG91dHNpZGVcIiwgZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5lZGl0YWJsZSk7XG4gICAgICB0aGlzLnNlbGVjdC5vbk1vdXNlVXAoZSk7XG4gICAgfSk7XG5cbiAgfVxuXG4gIGluc2VydFN0cmluZyhpbmRleCwgc3RyaW5nKSB7XG4gICAgdGhpcy50ZXh0ID0gdGhpcy50ZXh0LnN1YnN0cigwLCBpbmRleCkgKyBzdHJpbmcgKyB0aGlzLnRleHQuc3Vic3RyKGluZGV4KTtcbiAgfVxuXG4gIHJlbW92ZVN0cmluZyhpbmRleCwgbGVuZ3RoKSB7XG4gICAgbGV0IG5ld1RleHQgPSB0aGlzLnRleHQuc3BsaXQoXCJcIik7XG4gICAgbmV3VGV4dC5zcGxpY2UoaW5kZXgsIGxlbmd0aCArIDEpO1xuICAgIHRoaXMudGV4dCA9IG5ld1RleHQuam9pbihcIlwiKTtcbiAgfVxuXG4gIGdldCB0ZXh0dXJlKCkge1xuICAgIHJldHVybiB0aGlzLl90ZXh0dXJlO1xuICB9XG5cbiAgZ2V0IGZvbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvbnRcbiAgfVxuXG4gIHdyaXRlU3RyaW5nKCBzdHJpbmcsIGZvbnQsIGZvbnRfbWV0cmljcywgcG9zKSB7XG4gICAgbGV0IHByZXZfY2hhciA9IFwiIFwiOyAgLy8gVXNlZCB0byBjYWxjdWxhdGUga2VybmluZ1xuICAgIGxldCBjcG9zICAgICAgPSBwb3M7ICAvLyBDdXJyZW50IHBlbiBwb3NpdGlvblxuICAgIGxldCB4X21heCAgICAgPSAwLjA7ICAvLyBNYXggd2lkdGggLSB1c2VkIGZvciBib3VuZGluZyBib3hcbiAgICBsZXQgc2NhbGUgICAgID0gZm9udF9tZXRyaWNzLmNhcFNjYWxlO1xuXG4gICAgbGV0IHN0cl9wb3MgPSAwO1xuXG4gICAgZm9yKDs7KSB7XG4gICAgICBpZiAoIHN0cl9wb3MgPT09IHN0cmluZy5sZW5ndGggKSBicmVhaztcblxuICAgICAgdmFyIHNjaGFyID0gc3RyaW5nWyBzdHJfcG9zIF07XG4gICAgICBzdHJfcG9zKys7XG5cbiAgICAgIGlmICggc2NoYXIgPT09IFwiXFxuXCIgKSB7XG4gICAgICAgIGlmICggY3Bvc1swXSA+IHhfbWF4ICkgeF9tYXggPSBjcG9zWzBdOyAvLyBFeHBhbmRpbmcgdGhlIGJvdW5kaW5nIHJlY3RcbiAgICAgICAgY3Bvc1swXSAgPSBwb3NbMF07XG4gICAgICAgIGNwb3NbMV0gLT0gZm9udF9tZXRyaWNzLmxpbmVIZWlnaHQ7XG4gICAgICAgIHByZXZfY2hhciA9IFwiIFwiO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCBzY2hhciA9PT0gXCIgXCIgKSB7XG4gICAgICAgIC8vc2NoYXIgPSBcIl9cIlxuICAgICAgICAvL2Nwb3NbMF0gKz0gZm9udC5zcGFjZV9hZHZhbmNlICogc2NhbGU7XG4gICAgICAgIC8vcHJldl9jaGFyID0gXCIgXCI7XG4gICAgICAgIC8vY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBmb250X2NoYXIgPSBmb250LmNoYXJzWyBzY2hhciBdO1xuICAgICAgaWYgKCAhZm9udF9jaGFyICkgeyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdWJzdGl0dXRpbmcgdW5hdmFpbGFibGUgY2hhcmFjdGVycyB3aXRoICc/J1xuICAgICAgICBzY2hhciA9IFwiP1wiO1xuICAgICAgICBmb250X2NoYXIgPSBmb250LmNoYXJzWyBcIj9cIiBdO1xuICAgICAgfVxuXG4gICAgICB2YXIga2VybiA9IGZvbnQua2VyblsgcHJldl9jaGFyICsgc2NoYXIgXTtcbiAgICAgIGlmICggIWtlcm4gKSBrZXJuID0gMC4wO1xuXG4gICAgICAvLyBjYWxjdWxhdGluZyB0aGUgZ2x5cGggcmVjdGFuZ2xlIGFuZCBjb3B5aW5nIGl0IHRvIHRoZSB2ZXJ0ZXggYXJyYXlcbiAgICAgIHZhciByZWN0ID0gdGhpcy5jaGFyUmVjdCggY3BvcywgZm9udCwgZm9udF9tZXRyaWNzLCBmb250X2NoYXIsIGtlcm4gKTtcblxuICAgICAgcmVjdC5wb3NpdGlvbnMubWFwKChwb3MpID0+IHRoaXMudmVydGljZXNbIHRoaXMuYXJyYXlQb3NpdGlvbnMudmVydGV4KysgXSA9IHBvcyApO1xuICAgICAgcmVjdC51dnMubWFwKCh1dikgPT4gdGhpcy51dnNbIHRoaXMuYXJyYXlQb3NpdGlvbnMudXZzKysgXSA9IHV2ICk7XG4gICAgICByZWN0LnNkZlNpemVzLm1hcCgoc2RmKSA9PiB0aGlzLnNkZlNpemVzWyB0aGlzLmFycmF5UG9zaXRpb25zLnNkZisrIF0gPSBzZGYgKTtcblxuICAgICAgcHJldl9jaGFyID0gc2NoYXI7XG4gICAgICBjcG9zID0gcmVjdC5wb3M7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHJlY3QgOiBbIHBvc1swXSwgcG9zWzFdLCB4X21heCAtIHBvc1swXSwgcG9zWzFdIC0gY3Bvc1sxXSArIGZvbnRfbWV0cmljcy5saW5lSGVpZ2h0IF0sXG4gICAgICBzdHJpbmdfcG9zIDogc3RyX3BvcyxcbiAgICAgIC8vYXJyYXlfcG9zIDogYXJyYXlfcG9zXG4gICAgfVxuXG4gIH1cblxuICBmb250TWV0cmljcyhmb250U2l6ZSwgbW9yZUxpbmVHYXAgPSAwLjIpIHtcblxuICAgIGNvbnN0IHtjYXBfaGVpZ2h0LCB4X2hlaWdodCwgYXNjZW50OiBmb250QXNjZW50ICwgZGVzY2VudCwgbGluZV9nYXB9ID0gdGhpcy5mb250O1xuXG4gICAgY29uc3QgY2FwU2NhbGUgPSB0aGlzLnN0eWxlLmZvbnRTaXplIC8gY2FwX2hlaWdodDtcbiAgICBjb25zdCBsb3dTY2FsZSA9IE1hdGgucm91bmQoIHhfaGVpZ2h0ICogY2FwU2NhbGUgKSAvIHhfaGVpZ2h0O1xuICAgIGNvbnN0IGFzY2VudCA9IE1hdGgucm91bmQoIGZvbnRBc2NlbnQgKiBjYXBTY2FsZSApO1xuICAgIGxldCBsaW5lSGVpZ2h0ID0gTWF0aC5yb3VuZCggY2FwU2NhbGUgKiAoIGZvbnRBc2NlbnQgKyBkZXNjZW50ICsgbGluZV9nYXAgKSArIG1vcmVMaW5lR2FwKTtcblxuICAgIGlmICh0aGlzLnN0eWxlLmxpbmVIZWlnaHQgPiAwKVxuICAgICAgbGluZUhlaWdodCA9IHRoaXMuc3R5bGUubGluZUhlaWdodDtcbiAgICBlbHNlXG4gICAgICB0aGlzLnN0eWxlLmxpbmVIZWlnaHQgPSBsaW5lSGVpZ2h0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcFNjYWxlICAgOiBjYXBTY2FsZSxcbiAgICAgIGxvd1NjYWxlICAgOiBsb3dTY2FsZSxcbiAgICAgIGFzY2VudCAgICAgIDogYXNjZW50LFxuICAgICAgbGluZUhlaWdodCA6IGxpbmVIZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgY2hhclJlY3QoIHBvcywgZm9udCwgZm9udF9tZXRyaWNzLCBmb250X2NoYXIsIGtlcm4gPSAwLjAgKSB7XG5cbiAgICAvLyBMb3cgY2FzZSBjaGFyYWN0ZXJzIGhhdmUgZmlyc3QgYml0IHNldCBpbiAnZmxhZ3MnXG4gICAgdmFyIGxvd2Nhc2UgPSAoIGZvbnRfY2hhci5mbGFncyAmIDEgKSA9PT0gMTtcblxuICAgIC8vIFBlbiBwb3NpdGlvbiBpcyBhdCB0aGUgdG9wIG9mIHRoZSBsaW5lLCBZIGdvZXMgdXBcbiAgICB2YXIgYmFzZWxpbmUgPSBwb3NbMV0gLSBmb250X21ldHJpY3MuYXNjZW50O1xuXG4gICAgLy8gTG93IGNhc2UgY2hhcnMgdXNlIHRoZWlyIG93biBzY2FsZVxuICAgIHZhciBzY2FsZSA9IGxvd2Nhc2UgPyBmb250X21ldHJpY3MubG93U2NhbGUgOiBmb250X21ldHJpY3MuY2FwU2NhbGU7XG5cbiAgICAvLyBMYXlpbmcgb3V0IHRoZSBnbHlwaCByZWN0YW5nbGVcbiAgICB2YXIgZyAgICAgID0gZm9udF9jaGFyLnJlY3Q7XG4gICAgdmFyIGJvdHRvbSA9IGJhc2VsaW5lIC0gc2NhbGUgKiAoIGZvbnQuZGVzY2VudCArIGZvbnQuaXkgKTtcbiAgICB2YXIgdG9wICAgID0gYm90dG9tICAgKyBzY2FsZSAqICggZm9udC5yb3dfaGVpZ2h0ICk7XG4gICAgdmFyIGxlZnQgICA9IHBvc1swXSAgICsgc2NhbGUgKiAoIGZvbnRfY2hhci5iZWFyaW5nX3ggKyBrZXJuIC0gZm9udC5peCApO1xuICAgIHZhciByaWdodCAgPSBsZWZ0ICAgICArIHNjYWxlICogKCBnWzJdIC0gZ1swXSApO1xuICAgIHZhciBwID0gWyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20gXTtcblxuICAgIC8vIEFkdmFuY2luZyBwZW4gcG9zaXRpb25cbiAgICB2YXIgbmV3X3Bvc194ID0gcG9zWzBdICsgc2NhbGUgKiAoIGZvbnRfY2hhci5hZHZhbmNlX3ggKTtcblxuICAgIC8vIFNpZ25lZCBkaXN0YW5jZSBmaWVsZCBzaXplIGluIHNjcmVlbiBwaXhlbHNcbiAgICB2YXIgc2RmX3NpemUgID0gMi4wICogZm9udC5peSAqIHNjYWxlO1xuXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xuICAgICAgcFswXSwgcFszXSwgLy8gbGVmdCBib3R0b20sXG4gICAgICBwWzJdLCBwWzNdLCAvLyByaWdodCBib3R0b20sXG4gICAgICBwWzJdLCBwWzFdLCAvLyByaWdodCB0b3BcbiAgICAgIHBbMF0sIHBbMV0sIC8vIGxlZnQgdG9wXG4gICAgXTtcblxuICAgIGNvbnN0IHV2cyA9IFtcbiAgICAgIGdbMF0sIGdbMV0sIC8vIGxlZnQgdG9wXG4gICAgICBnWzJdLCBnWzFdLCAvLyByaWdodCB0b3BcbiAgICAgIGdbMl0sIGdbM10sIC8vIHJpZ2h0IGJvdHRvbSxcbiAgICAgIGdbMF0sIGdbM10sIC8vIGxlZnQgYm90dG9tLFxuICAgIF07XG5cbiAgICBjb25zdCBzZGZTaXplcyA9IFtcbiAgICAgIHNkZl9zaXplLFxuICAgICAgc2RmX3NpemUsXG4gICAgICBzZGZfc2l6ZSxcbiAgICAgIHNkZl9zaXplLFxuICAgIF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb25zLFxuICAgICAgdXZzLFxuICAgICAgc2RmU2l6ZXMsXG4gICAgICBwb3M6IFsgbmV3X3Bvc194LCBwb3NbMV0gXVxuICAgIH07XG5cbiAgICAvL3JldHVybiB7IHZlcnRpY2VzIDogdmVydGljZXMsIHBvcyA6IFsgbmV3X3Bvc194LCBwb3NbMV0gXSB9O1xuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQXdlc29tZVRleHQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdGV4dC5qcyIsIlxuY2xhc3MgVGV4dExheW91dCB7XG5cbiAgdGV4dCA9IFwiXCI7XG4gIGZvbnQgPSBudWxsO1xuICBtZXRyaWNzID0gbnVsbDtcbiAgZm9udFNpemUgPSAyMDtcbiAgYWxpZ24gPSBcImxlZnRcIjtcbiAgc3RhcnRYID0gMDtcbiAgc3RhcnRZID0gMDtcbiAgd3JhcHBlcldpZHRoID0gMTAwO1xuICB3cmFwV29yZHMgPSBmYWxzZTtcbiAgd29yZHNNZXRyaWNzID0gW107XG4gIGxldHRlcnNDb3VudCA9IDA7XG4gIGhlaWdodCA9IDA7XG4gIGxpbmVzQ291bnQgPSAwO1xuICBsaW5lSGVpZ2h0ID0gMDtcbiAgZ2x5cGhzID0gW107XG4gIG93bmVyID0gbnVsbDtcblxuXG4gIGNvbnN0cnVjdG9yKG93bmVyLCBjb25maWcpIHtcblxuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLnRleHQgPSBvd25lci50ZXh0O1xuICAgIHRoaXMuZm9udCA9IG93bmVyLmZvbnQ7XG4gICAgdGhpcy5mb250U2l6ZSA9IGNvbmZpZy5mb250U2l6ZTtcbiAgICB0aGlzLndyYXBXb3JkcyA9IGNvbmZpZy53cmFwV29yZHM7XG4gICAgdGhpcy53cmFwcGVyV2lkdGggPSBjb25maWcud3JhcHBlcldpZHRoO1xuICAgIHRoaXMubGluZUhlaWdodCA9IGNvbmZpZy5saW5lSGVpZ2h0O1xuICAgIHRoaXMuYWxpZ24gPSBjb25maWcuYWxpZ247XG4gICAgdGhpcy51cGRhdGUoKTtcblxuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRoaXMudGV4dCA9IHRoaXMub3duZXIudGV4dDtcbiAgICB0aGlzLmZvbnQgPSB0aGlzLm93bmVyLmZvbnQ7XG5cbiAgICB0aGlzLmxldHRlcnNDb3VudCA9IHRoaXMudGV4dC5zcGxpdChcIlwiKS5sZW5ndGg7XG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5mb250TWV0cmljcyh0aGlzLmZvbnQsIDAuMCk7XG4gICAgdGhpcy5zdGFydFkgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcbiAgICB0aGlzLmNhbGN1bGF0ZVdvcmRzUG9zaXRpb25zKCk7XG5cbiAgICB0aGlzLmdseXBocyA9IFtdO1xuXG4gICAgdGhpcy53b3Jkc01ldHJpY3MuZm9yRWFjaCAod29yZCA9PiB7XG4gICAgICB0aGlzLmdldEdseXBocyh3b3JkLndvcmQsIFt3b3JkLngsIHdvcmQueV0pO1xuICAgIH0pO1xuICB9XG5cbiAgZm9udE1ldHJpY3MoZm9udFNpemUsIG1vcmVMaW5lR2FwID0gMC4yKSB7XG5cbiAgICBjb25zdCB7Y2FwX2hlaWdodCwgeF9oZWlnaHQsIGFzY2VudDogZm9udEFzY2VudCAsIGRlc2NlbnQsIGxpbmVfZ2FwfSA9IHRoaXMuZm9udDtcblxuICAgIGNvbnN0IGNhcFNjYWxlID0gdGhpcy5mb250U2l6ZSAvIGNhcF9oZWlnaHQ7XG4gICAgY29uc3QgbG93U2NhbGUgPSBNYXRoLnJvdW5kKCB4X2hlaWdodCAqIGNhcFNjYWxlICkgLyB4X2hlaWdodDtcbiAgICBjb25zdCBhc2NlbnQgPSBNYXRoLnJvdW5kKCBmb250QXNjZW50ICogY2FwU2NhbGUgKTtcbiAgICBsZXQgbGluZUhlaWdodCA9IE1hdGgucm91bmQoIGNhcFNjYWxlICogKCBmb250QXNjZW50ICsgZGVzY2VudCArIGxpbmVfZ2FwICkgKyBtb3JlTGluZUdhcCApO1xuXG4gICAgaWYgKHRoaXMubGluZUhlaWdodCA+IDApXG4gICAgICBsaW5lSGVpZ2h0ID0gdGhpcy5saW5lSGVpZ2h0O1xuICAgIGVsc2VcbiAgICAgIHRoaXMubGluZUhlaWdodCA9IGxpbmVIZWlnaHQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY2FwU2NhbGUgICA6IGNhcFNjYWxlLFxuICAgICAgbG93U2NhbGUgICA6IGxvd1NjYWxlLFxuICAgICAgYXNjZW50ICAgICAgOiBhc2NlbnQsXG4gICAgICBsaW5lSGVpZ2h0IDogbGluZUhlaWdodFxuICAgIH07XG4gIH1cblxuICBjaGFyUmVjdCggcG9zLCBmb250X2NoYXIsIGtlcm4gPSAwLjAgKSB7XG5cbiAgICAvLyBMb3cgY2FzZSBjaGFyYWN0ZXJzIGhhdmUgZmlyc3QgYml0IHNldCBpbiAnZmxhZ3MnXG4gICAgdmFyIGxvd2Nhc2UgPSAoIGZvbnRfY2hhci5mbGFncyAmIDEgKSA9PT0gMTtcblxuICAgIC8vIFBlbiBwb3NpdGlvbiBpcyBhdCB0aGUgdG9wIG9mIHRoZSBsaW5lLCBZIGdvZXMgdXBcbiAgICB2YXIgYmFzZWxpbmUgPSBwb3NbMV0gLSB0aGlzLm1ldHJpY3MuYXNjZW50O1xuXG4gICAgLy8gTG93IGNhc2UgY2hhcnMgdXNlIHRoZWlyIG93biBzY2FsZVxuICAgIHZhciBzY2FsZSA9IGxvd2Nhc2UgPyB0aGlzLm1ldHJpY3MubG93U2NhbGUgOiB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XG5cbiAgICAvLyBMYXlpbmcgb3V0IHRoZSBnbHlwaCByZWN0YW5nbGVcbiAgICB2YXIgZyAgICAgID0gZm9udF9jaGFyLnJlY3Q7XG4gICAgdmFyIGJvdHRvbSA9IGJhc2VsaW5lIC0gc2NhbGUgKiAoIHRoaXMuZm9udC5kZXNjZW50ICsgdGhpcy5mb250Lml5ICk7XG4gICAgdmFyIHRvcCAgICA9IGJvdHRvbSAgICsgc2NhbGUgKiAoIHRoaXMuZm9udC5yb3dfaGVpZ2h0ICk7XG4gICAgdmFyIGxlZnQgICA9IHBvc1swXSAgICsgc2NhbGUgKiAoIGZvbnRfY2hhci5iZWFyaW5nX3ggKyBrZXJuIC0gdGhpcy5mb250Lml4ICk7XG4gICAgdmFyIHJpZ2h0ICA9IGxlZnQgICAgICsgc2NhbGUgKiAoIGdbMl0gLSBnWzBdICk7XG4gICAgdmFyIHAgPSBbIGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSBdO1xuXG4gICAgLy8gQWR2YW5jaW5nIHBlbiBwb3NpdGlvblxuICAgIHZhciBuZXdfcG9zX3ggPSBwb3NbMF0gKyBzY2FsZSAqICggZm9udF9jaGFyLmFkdmFuY2VfeCApO1xuXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xuICAgICAgcFswXSwgcFszXSwgLy8gbGVmdCBib3R0b20sXG4gICAgICBwWzJdLCBwWzNdLCAvLyByaWdodCBib3R0b20sXG4gICAgICBwWzJdLCBwWzFdLCAvLyByaWdodCB0b3BcbiAgICAgIHBbMF0sIHBbMV0sIC8vIGxlZnQgdG9wXG4gICAgXTtcblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbnMsXG4gICAgICBwb3M6IFsgbmV3X3Bvc194LCBwb3NbMV0gXSxcbiAgICAgIG1ldHJpY3M6IHt4OiBwb3NbMF0sIHk6IHBvc1sxXSwgd2lkdGg6IHNjYWxlICogZm9udF9jaGFyLmFkdmFuY2VfeCB9XG4gICAgfTtcbiAgfVxuXG4gIGdldFN0cmluZ1NpemUoc3RyaW5nKSB7XG5cbiAgICBsZXQgd2lkdGggPSAwO1xuICAgIGxldCBoZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcblxuICAgIGNvbnN0IGNoYXJzID0gWy4uLnN0cmluZ107XG5cbiAgICAvLyBJdGVyYXRlIHRob3VnaHQgdGhlIGNoYXJzLCBjYWxjdWxhdGUgcG9zaXRpb25cbiAgICBjaGFycy5mb3JFYWNoKGNoYXIgPT4ge1xuICAgICAgbGV0IGZvbnRfY2hhciA9IHRoaXMuZm9udC5jaGFyc1sgY2hhciBdO1xuXG4gICAgICAvKmlmIChjaGFyID09PSBcIiBcIikge1xuICAgICAgICB3aWR0aCArPSB0aGlzLmZvbnQuc3BhY2VfYWR2YW5jZSAqIHRoaXMubWV0cmljcy5jYXBTY2FsZTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfSovXG5cbiAgICAgIC8vIEdldCBjaGFyIG1ldHJpY3NcbiAgICAgIGxldCBjaGFyUmVjdCA9IHRoaXMuY2hhclJlY3QoW3dpZHRoLDBdLCBmb250X2NoYXIsIDAuMik7XG4gICAgICB3aWR0aCA9IGNoYXJSZWN0LnBvc1swXTtcblxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHt3aWR0aCwgaGVpZ2h0fTtcblxuICB9XG5cbiAgY2FsY3VsYXRlV29yZHNQb3NpdGlvbnMoKSB7XG5cbiAgICBjb25zdCB3b3JkcyA9IHRoaXMudGV4dC5zcGxpdChcIiBcIik7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRzLmxlbmd0aCAtIDE7IGkrKykge1xuICAgICAgd29yZHNbaV0gPSB3b3Jkc1tpXSArIFwiIFwiO1xuICAgIH1cblxuICAgIHRoaXMud29yZHNNZXRyaWNzID0gW107XG5cbiAgICAvLyBJbml0aWFsIHBvc2l0aW9uXG4gICAgbGV0IHggPSB0aGlzLnN0YXJ0WDtcbiAgICBsZXQgeSA9IHRoaXMuc3RhcnRZO1xuXG4gICAgLy8gQ2FsY3VsYXRlIHdvcmRzIHBvc2l0aW9ucyBvbiBsaW5lc1xuICAgIHdvcmRzLmZvckVhY2god29yZCA9PiB7XG4gICAgICBjb25zdCB3b3JkU2l6ZSA9IHRoaXMuZ2V0U3RyaW5nU2l6ZSh3b3JkKTtcbiAgICAgIGlmICh4ICsgd29yZFNpemUud2lkdGggPiB0aGlzLnN0YXJ0WCArIHRoaXMud3JhcHBlcldpZHRoICYmIHRoaXMud3JhcFdvcmRzKSB7XG4gICAgICAgIHggPSB0aGlzLnN0YXJ0WDtcbiAgICAgICAgeSArPSB3b3JkU2l6ZS5oZWlnaHQ7XG4gICAgICB9XG5cbiAgICAgIHRoaXMud29yZHNNZXRyaWNzLnB1c2goey4uLndvcmRTaXplLCB4LCB5LCB3b3JkfSk7XG5cbiAgICAgIC8veCArPSB3b3JkU2l6ZS53aWR0aCArIHRoaXMuZm9udC5zcGFjZV9hZHZhbmNlICogdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xuICAgICAgeCArPSB3b3JkU2l6ZS53aWR0aDtcbiAgICB9KTtcblxuICAgIC8vIENhbGN1bGF0ZSBsaW5lcyBjb3VudFxuICAgIHRoaXMubGluZXNDb3VudCA9ICh5IC0gdGhpcy5zdGFydFkpIC8gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyAxO1xuICAgIHRoaXMuaGVpZ2h0ID0gdGhpcy5saW5lc0NvdW50ICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XG5cbiAgICAvLyBDaGFuZ2UgYWxpZ24gVE9ETyBvcHRpbWlzZVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5saW5lc0NvdW50OyArK2kpIHtcbiAgICAgIGNvbnN0IHdvcmRzT25MaW5lID0gdGhpcy53b3Jkc01ldHJpY3MuZmlsdGVyKHdvcmQgPT4gd29yZC55ID09PSB0aGlzLnN0YXJ0WSArIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQpKVxuXG4gICAgICBjb25zdCBsYXN0V29yZCA9IHdvcmRzT25MaW5lW3dvcmRzT25MaW5lLmxlbmd0aCAtIDFdO1xuXG4gICAgICBpZiAobGFzdFdvcmQpIHtcbiAgICAgICAgY29uc3QgZnJlZVNwYWNlID0gKHRoaXMuc3RhcnRYICsgdGhpcy53cmFwcGVyV2lkdGgpIC0gKGxhc3RXb3JkLnggKyBsYXN0V29yZC53aWR0aCk7XG5cbiAgICAgICAgbGV0IGxlZnRPZmZzZXQgPSAwO1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy5hbGlnbikge1xuICAgICAgICAgIGNhc2UgXCJjZW50ZXJcIjpcbiAgICAgICAgICAgIGxlZnRPZmZzZXQgPSBmcmVlU3BhY2UgLyAyO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XG4gICAgICAgICAgICBsZWZ0T2Zmc2V0ID0gZnJlZVNwYWNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy53b3Jkc01ldHJpY3MuZm9yRWFjaCh3b3JkID0+IHtcbiAgICAgICAgICBpZiAod29yZC55ID09PSB0aGlzLnN0YXJ0WSArIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQpKSB7XG4gICAgICAgICAgICB3b3JkLnggKz0gbGVmdE9mZnNldDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZ2V0R2x5cGhzKCBzdHJpbmcsIHBvcykge1xuICAgIGxldCBwcmV2X2NoYXIgPSBcIiBcIjsgIC8vIFVzZWQgdG8gY2FsY3VsYXRlIGtlcm5pbmdcbiAgICBsZXQgY3BvcyAgICAgID0gcG9zOyAgLy8gQ3VycmVudCBwZW4gcG9zaXRpb25cbiAgICBsZXQgeF9tYXggICAgID0gMC4wOyAgLy8gTWF4IHdpZHRoIC0gdXNlZCBmb3IgYm91bmRpbmcgYm94XG4gICAgbGV0IHNjYWxlICAgICA9IHRoaXMubWV0cmljcy5jYXBTY2FsZTtcblxuICAgIGxldCBzdHJfcG9zID0gMDtcblxuICAgIGZvcig7Oykge1xuICAgICAgaWYgKCBzdHJfcG9zID09PSBzdHJpbmcubGVuZ3RoICkgYnJlYWs7XG5cbiAgICAgIHZhciBzY2hhciA9IHN0cmluZ1sgc3RyX3BvcyBdO1xuICAgICAgc3RyX3BvcysrO1xuXG4gICAgICBpZiAoIHNjaGFyID09PSBcIlxcblwiICkge1xuICAgICAgICBpZiAoIGNwb3NbMF0gPiB4X21heCApIHhfbWF4ID0gY3Bvc1swXTsgLy8gRXhwYW5kaW5nIHRoZSBib3VuZGluZyByZWN0XG4gICAgICAgIGNwb3NbMF0gID0gcG9zWzBdO1xuICAgICAgICBjcG9zWzFdIC09IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xuICAgICAgICBwcmV2X2NoYXIgPSBcIiBcIjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICggc2NoYXIgPT09IFwiIFwiICkge1xuICAgICAgICAvL3NjaGFyID0gXCJfXCJcbiAgICAgICAgLy9jcG9zWzBdICs9IHRoaXMuZm9udC5zcGFjZV9hZHZhbmNlICogc2NhbGU7XG4gICAgICAgIHByZXZfY2hhciA9IFwiIFwiO1xuICAgICAgICAvL2NvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgZm9udF9jaGFyID0gdGhpcy5mb250LmNoYXJzWyBzY2hhciBdO1xuICAgICAgaWYgKCAhZm9udF9jaGFyICkgeyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdWJzdGl0dXRpbmcgdW5hdmFpbGFibGUgY2hhcmFjdGVycyB3aXRoICc/J1xuICAgICAgICBzY2hhciA9IFwiP1wiO1xuICAgICAgICBmb250X2NoYXIgPSB0aGlzLmZvbnQuY2hhcnNbIFwiP1wiIF07XG4gICAgICB9XG5cbiAgICAgIHZhciBrZXJuID0gdGhpcy5mb250Lmtlcm5bIHByZXZfY2hhciArIHNjaGFyIF07XG4gICAgICBpZiAoICFrZXJuICkga2VybiA9IDAuMDtcblxuICAgICAgLy8gY2FsY3VsYXRpbmcgdGhlIGdseXBoIHJlY3RhbmdsZSBhbmQgY29weWluZyBpdCB0byB0aGUgdmVydGV4IGFycmF5XG4gICAgICB2YXIgcmVjdCA9IHRoaXMuY2hhclJlY3QoIGNwb3MsIGZvbnRfY2hhciwga2VybiApO1xuXG4gICAgICBwcmV2X2NoYXIgPSBzY2hhcjtcbiAgICAgIGNwb3MgPSByZWN0LnBvcztcblxuICAgICAgdGhpcy5nbHlwaHMucHVzaCh7XG4gICAgICAgIGxldHRlcjogc2NoYXIsXG4gICAgICAgIHZlcnRpY2VzOiByZWN0LnBvc2l0aW9ucyxcbiAgICAgICAgcG9zaXRpb246IHJlY3QucG9zLFxuICAgICAgICBtZXRyaWNzOiByZWN0Lm1ldHJpY3NcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IFRleHRMYXlvdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGF5b3V0LmpzIiwiY29uc3QgY3JlYXRlSW5kaWNlcyA9IHJlcXVpcmUoXCJxdWFkLWluZGljZXNcIilcclxuXHJcbmNsYXNzIFNlbGVjdCB7XHJcblxyXG4gIHJhbmdlID0gWzAsMF07XHJcbiAgbWV0cmljcyA9IG51bGw7XHJcbiAgbGF5b3V0ID0gbnVsbDtcclxuICBkaXJ0eSA9IGZhbHNlO1xyXG4gIGluZGV4QnVmZmVyID0gZmFsc2U7XHJcbiAgb3duZXIgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihvd25lcikge1xyXG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xyXG4gICAgdGhpcy5tZXRyaWNzID0gb3duZXIubWV0cmljcztcclxuICAgIHRoaXMubGF5b3V0ID0gb3duZXIubGF5b3V0O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5vd25lci5tZXRyaWNzO1xyXG4gICAgdGhpcy5sYXlvdXQgPSB0aGlzLm93bmVyLmxheW91dDtcclxuXHJcbiAgICAvLyBWZXJ0aWNlcyBhcnJheSBmb3IgYWxsIHNlbGVjdGVkIGxpbmVzXHJcbiAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5saW5lc0NvdW50ICogNCAqIDIpO1xyXG5cclxuICAgIGlmICh0aGlzLnJhbmdlWzFdICE9PSBudWxsKVxyXG4gICAgdGhpcy5idWlsZFZlcnRpY2VzKCk7XHJcblxyXG4gICAgdGhpcy5pbmRpY2VzID0gY3JlYXRlSW5kaWNlcyh7XHJcbiAgICAgIGNsb2Nrd2lzZTogdHJ1ZSxcclxuICAgICAgdHlwZTogJ3VpbnQxNicsXHJcbiAgICAgIGNvdW50OnRoaXMubGF5b3V0LmxpbmVzQ291bnRcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgdGhpcy5pbmRleEJ1ZmZlciA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzZXRSYW5nZShzdGFydCA9IG51bGwsIGVuZCA9IG51bGwpIHtcclxuXHJcbiAgICBjb25zdCB7Z2x5cGhzfSA9IHRoaXMub3duZXIubGF5b3V0O1xyXG5cclxuICAgIGlmIChzdGFydCA9PT0gbnVsbCkgc3RhcnQgPSB0aGlzLnJhbmdlWzBdO1xyXG4gICAgaWYgKGVuZCA9PT0gbnVsbCkgZW5kID0gdGhpcy5yYW5nZVsxXTtcclxuXHJcbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDA7XHJcbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMDtcclxuXHJcbiAgICBpZiAoc3RhcnQgPiBnbHlwaHMubGVuZ3RoIC0xKXN0YXJ0ID0gZ2x5cGhzLmxlbmd0aCAtIDE7XHJcbiAgICBpZiAoZW5kID4gZ2x5cGhzLmxlbmd0aCAtIDEpIGVuZCA9IGdseXBocy5sZW5ndGggLSAxO1xyXG5cclxuICAgIGlmIChlbmQgPT09IGZhbHNlKSBlbmQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMucmFuZ2UgPSBbc3RhcnQsIGVuZF07XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRWZXJ0aWNlcygpIHtcclxuXHJcbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLm93bmVyLmxheW91dC5tZXRyaWNzO1xyXG4gICAgLy8gU2VsZWN0IHJhbmdlXHJcbiAgICBsZXQgc3RhcnQgPSB0aGlzLmxheW91dC5nbHlwaHNbTWF0aC5taW4uYXBwbHkobnVsbCx0aGlzLnJhbmdlKV07XHJcbiAgICBsZXQgZW5kID0gdGhpcy5sYXlvdXQuZ2x5cGhzW01hdGgubWF4LmFwcGx5KG51bGwsdGhpcy5yYW5nZSldO1xyXG5cclxuXHJcbiAgICAvLyBJdGVyYXRlIHRob3VnaHQgYWxsIGxpbmVzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGF5b3V0LmxpbmVzQ291bnQ7ICsraSkge1xyXG4gICAgICBsZXQgbGV0dGVyQ291bnQgPSAwOyAvLyBsZXR0ZXJzIHBhc3NlZFxyXG4gICAgICBsZXQgZmlyc3RMZXR0ZXIgPSBudWxsOyAvLyBmaXJzdCBsZXR0ZXIgb24gdGhpcyBsaW5lXHJcbiAgICAgIGxldCBsYXN0TGV0dGVyID0gbnVsbDsgLy8gbGFzdCBsZXR0ZXIgb24gdGhpcyBsaW5lXHJcblxyXG5cclxuICAgICAgaWYgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCArIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0IDwgc3RhcnQucG9zaXRpb25bMV0pIGNvbnRpbnVlO1xyXG4gICAgICBpZiAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgPiBlbmQucG9zaXRpb25bMV0pIGNvbnRpbnVlO1xyXG5cclxuICAgICAgLy8gVGFrZSBldmVyeSB3b3JkLCBpZiBpdCdzIGxhc3Qgb3IgZmlyc3Qgb24gbGluZSAtIGNoYW5nZSBib3VuZHMgbGV0dGVyc1xyXG4gICAgICB0aGlzLmxheW91dC53b3Jkc01ldHJpY3MubWFwKHdvcmQgPT4ge1xyXG5cclxuICAgICAgICBpZiAod29yZC55ID09PSB0aGlzLmxheW91dC5zdGFydFkgKyAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSkge1xyXG4gICAgICAgICAgaWYgKGZpcnN0TGV0dGVyID09PSBudWxsKSBmaXJzdExldHRlciA9IGxldHRlckNvdW50O1xyXG4gICAgICAgICAgbGFzdExldHRlciA9IGxldHRlckNvdW50ICsgd29yZC53b3JkLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXR0ZXJDb3VudCArPSB3b3JkLndvcmQubGVuZ3RoO1xyXG4gICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgLy8gQm91bmRzIGxldHRlcnMgZm9yIGN1cnJlbnQgbGluZVxyXG4gICAgICBsZXQgc3RhcnRMaW5lTGV0dGVyID0gdGhpcy5sYXlvdXQuZ2x5cGhzW2ZpcnN0TGV0dGVyXTtcclxuICAgICAgbGV0IGVuZExpbmVMZXR0ZXIgPSB0aGlzLmxheW91dC5nbHlwaHNbbGFzdExldHRlcl07XHJcblxyXG4gICAgICAvLyBJZiB0aGUgc3RhcnQgb3IgZW5kIHJhbmdlIGlzIG9uIHRoaXMgbGluZSwgY2hhbmdlIGJvdW5kcyBmb3IgdGhlbVxyXG4gICAgICBpZiAoc3RhcnQucG9zaXRpb25bMV0gPT09ICBzdGFydExpbmVMZXR0ZXIucG9zaXRpb25bMV0pIHN0YXJ0TGluZUxldHRlciA9IHN0YXJ0O1xyXG4gICAgICBpZiAoZW5kLnBvc2l0aW9uWzFdID09PSBlbmRMaW5lTGV0dGVyLnBvc2l0aW9uWzFdKSBlbmRMaW5lTGV0dGVyID0gZW5kO1xyXG5cclxuICAgICAgLy8gV2UgdXNlIG9mZnNldCB0byBhdm9pZCBzZWxlY3RzIG92ZXJsYXBwaW5nXHJcbiAgICAgIGNvbnN0IG9mZnNldCA9ICh0aGlzLm1ldHJpY3MubGluZUhlaWdodCAtIHRoaXMubWV0cmljcy5hc2NlbnQpIC8gMjtcclxuXHJcbiAgICAgIC8vIEFkZCBwb3NpdGlvbnMgdG8gYXJyYXlcclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpXSA9IHN0YXJ0TGluZUxldHRlci52ZXJ0aWNlc1swXTtcclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgMV0gPSBzdGFydExpbmVMZXR0ZXIudmVydGljZXNbMV0gKyBvZmZzZXQ7XHJcblxyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyAyXSA9IGVuZExpbmVMZXR0ZXIudmVydGljZXNbMl07XHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDNdID0gZW5kTGluZUxldHRlci52ZXJ0aWNlc1szXSAgICsgb2Zmc2V0O1xyXG5cclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgNF0gPSBlbmRMaW5lTGV0dGVyLnZlcnRpY2VzWzRdO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyA1XSA9IGVuZExpbmVMZXR0ZXIudmVydGljZXNbNV0gIC0gb2Zmc2V0O1xyXG5cclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgNl0gPSBzdGFydExpbmVMZXR0ZXIudmVydGljZXNbNl07XHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDddID0gc3RhcnRMaW5lTGV0dGVyLnZlcnRpY2VzWzddICAtIG9mZnNldDtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0Q2xvc2VzdEdseXBoKHgsIHkpIHtcclxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMub3duZXIubWV0cmljcztcclxuICAgIHRoaXMubGF5b3V0ID0gdGhpcy5vd25lci5sYXlvdXQ7XHJcblxyXG4gICAgY29uc3QgeyBnbHlwaHMgfSA9IHRoaXMub3duZXIubGF5b3V0O1xyXG5cclxuICAgIGNvbnN0IGxpbmVIZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcclxuICAgIGNvbnN0IHNlbGVjdGluZ0xpbmUgPSBNYXRoLmZsb29yKHkgLyB0aGlzLm1ldHJpY3MubGluZUhlaWdodCk7XHJcbiAgICBjb25zdCBzZWxlY3RpbmdMaW5lWSA9IHNlbGVjdGluZ0xpbmUgKiBsaW5lSGVpZ2h0O1xyXG4gICAgbGV0IGxhc3RHbHlwaE9uTGluZSA9IGdseXBoc1tnbHlwaHMubGVuZ3RoIC0gMV07XHJcbiAgICBsZXQgZmlyc3RHbHlwaE9uTGluZSA9IG51bGw7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnbHlwaHMubGVuZ3RoIDsgKytpKSB7XHJcblxyXG4gICAgICBsZXQgZ2x5cGggPSBnbHlwaHNbaV07XHJcblxyXG4gICAgICBpZiAoZ2x5cGgubWV0cmljcy55ID09PSBzZWxlY3RpbmdMaW5lWSArIGxpbmVIZWlnaHQpIHtcclxuICAgICAgICBsYXN0R2x5cGhPbkxpbmUgPSBnbHlwaDtcclxuICAgICAgICBpZiAoeCA8IGdseXBoLm1ldHJpY3MueCArIGdseXBoLm1ldHJpY3Mud2lkdGggLyAyKSB7XHJcbiAgICAgICAgICBpZiAoaSA9PT0gMCkgcmV0dXJuIC0xO1xyXG5cclxuICAgICAgICAgIHJldHVybiBnbHlwaHNbaSAtIDFdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsYXN0R2x5cGhPbkxpbmU7XHJcblxyXG4gIH1cclxuXHJcbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcclxuXHJcbiAgICAvLyBPbmx5IGxlZnQgbW91c2UgYnV0dG9uXHJcbiAgICBpZiAoZXZlbnQuZGF0YS5idXR0b24gIT09IDApIHJldHVybjtcclxuXHJcbiAgICBsZXQgcG9zaXRpb24gPSBldmVudC5kYXRhLmdsb2JhbDtcclxuXHJcbiAgICBwb3NpdGlvbi54IC09IHRoaXMub3duZXIucG9zaXRpb24ueDtcclxuICAgIHBvc2l0aW9uLnkgLT0gdGhpcy5vd25lci5wb3NpdGlvbi55O1xyXG5cclxuICAgIHBvc2l0aW9uLnggPSBwb3NpdGlvbi54IC8gIHRoaXMub3duZXIuc2NhbGUueDtcclxuICAgIHBvc2l0aW9uLnkgPSBwb3NpdGlvbi55IC8gdGhpcy5vd25lci5zY2FsZS55O1xyXG5cclxuICAgIGNvbnN0IGNsb3Nlc3RMZXR0ZXIgPSB0aGlzLmdldENsb3Nlc3RHbHlwaChwb3NpdGlvbi54ICwgcG9zaXRpb24ueSk7XHJcblxyXG4gICAgY29uc29sZS5sb2coY2xvc2VzdExldHRlcik7XHJcblxyXG4gICAgbGV0IGluZGV4ID0gdGhpcy5vd25lci5sYXlvdXQuZ2x5cGhzLmluZGV4T2YoY2xvc2VzdExldHRlcik7XHJcblxyXG4gICAgdGhpcy5zZXRSYW5nZShpbmRleCArIDEsIGZhbHNlICk7XHJcbiAgfVxyXG5cclxuICBvbk1vdXNlTW92ZShldmVudCkge1xyXG5cclxuICAgIGxldCBwb3NpdGlvbiA9IGV2ZW50LmRhdGEuZ2xvYmFsO1xyXG5cclxuICAgIHBvc2l0aW9uLnggLT0gdGhpcy5vd25lci5wb3NpdGlvbi54O1xyXG4gICAgcG9zaXRpb24ueSAtPSB0aGlzLm93bmVyLnBvc2l0aW9uLnk7XHJcblxyXG4gICAgcG9zaXRpb24ueCA9IHBvc2l0aW9uLnggLyB0aGlzLm93bmVyLnNjYWxlLng7XHJcbiAgICBwb3NpdGlvbi55ID0gcG9zaXRpb24ueSAvIHRoaXMub3duZXIuc2NhbGUueTtcclxuXHJcbiAgICBjb25zdCBjbG9zZXN0TGV0dGVyID0gdGhpcy5nZXRDbG9zZXN0R2x5cGgocG9zaXRpb24ueCAgLCBwb3NpdGlvbi55KTtcclxuICAgIGxldCBpbmRleCA9IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5pbmRleE9mKGNsb3Nlc3RMZXR0ZXIpO1xyXG5cclxuICAgIHRoaXMuc2V0UmFuZ2UobnVsbCwgaW5kZXggKyAxKTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VVcChldmVudCkge1xyXG5cclxuICAgIC8vIE9ubHkgbGVmdCBtb3VzZSBidXR0b25cclxuICAgIGlmIChldmVudC5kYXRhLmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBwb3NpdGlvbiA9IGV2ZW50LmRhdGEuZ2xvYmFsO1xyXG5cclxuICAgIHBvc2l0aW9uLnggLT0gdGhpcy5vd25lci5wb3NpdGlvbi54O1xyXG4gICAgcG9zaXRpb24ueSAtPSB0aGlzLm93bmVyLnBvc2l0aW9uLnk7XHJcblxyXG4gICAgcG9zaXRpb24ueCA9IHBvc2l0aW9uLnggLyB0aGlzLm93bmVyLnNjYWxlLng7XHJcbiAgICBwb3NpdGlvbi55ID0gcG9zaXRpb24ueSAvIHRoaXMub3duZXIuc2NhbGUueTtcclxuXHJcbiAgICBjb25zdCBjbG9zZXN0TGV0dGVyID0gdGhpcy5nZXRDbG9zZXN0R2x5cGgocG9zaXRpb24ueCAsIHBvc2l0aW9uLnkpO1xyXG5cclxuXHJcblxyXG4gICAgLy8gLTEgbWVhbnMgdGhhdCB3ZSBhdCB0aGUgc3RhcnQgb2YgdGhlIGxpbmVcclxuICAgIGlmIChjbG9zZXN0TGV0dGVyID09PSAtMSkge1xyXG4gICAgICB0aGlzLm93bmVyLmlucHV0LmdseXBoSW5kZXggPSBjbG9zZXN0TGV0dGVyO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vd25lci5pbnB1dC5nbHlwaEluZGV4ID0gdGhpcy5vd25lci5sYXlvdXQuZ2x5cGhzLmluZGV4T2YoY2xvc2VzdExldHRlcik7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjbGVhclNlbGVjdGVkUmFuZ2UoKSB7XHJcblxyXG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLnJhbmdlO1xyXG5cclxuICAgIC8vIElmIHVzZXIgc2VsZWN0ZWQgc29tZSB0ZXh0LCByZW1vdmUgaXRcclxuICAgIGlmIChyYW5nZVsxXSAhPT0gbnVsbCkge1xyXG4gICAgICB0aGlzLm93bmVyLmlucHV0LmdseXBoSW5kZXggPSBNYXRoLm1pbihyYW5nZVswXSAtIDEsIHJhbmdlWzFdIC0gMSk7XHJcbiAgICAgIGNvbnN0IHJlbW92ZUluZGV4ID0gTWF0aC5taW4uYXBwbHkobnVsbCwgcmFuZ2UpO1xyXG4gICAgICBjb25zdCByZW1vdmVMZW5ndGggPSBNYXRoLmFicyhyYW5nZVswXSAtIHJhbmdlWzFdKTtcclxuICAgICAgdGhpcy5vd25lci5zZWxlY3Quc2V0UmFuZ2UoMCxmYWxzZSk7XHJcbiAgICAgIHRoaXMub3duZXIucmVtb3ZlU3RyaW5nKHJlbW92ZUluZGV4LCByZW1vdmVMZW5ndGgpO1xyXG4gICAgICB0aGlzLm93bmVyLmlucHV0LnNob3coKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGV4cGFuZChkaXJlY3Rpb24pIHtcclxuICAgIHRoaXMucmFuZ2VbMV0gKz0gZGlyZWN0aW9uO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLnJhbmdlKTtcclxuXHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgU2VsZWN0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvc2VsZWN0LmpzIiwidmFyIGR0eXBlID0gcmVxdWlyZSgnZHR5cGUnKVxudmFyIGFuQXJyYXkgPSByZXF1aXJlKCdhbi1hcnJheScpXG52YXIgaXNCdWZmZXIgPSByZXF1aXJlKCdpcy1idWZmZXInKVxuXG52YXIgQ1cgPSBbMCwgMiwgM11cbnZhciBDQ1cgPSBbMiwgMSwgM11cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjcmVhdGVRdWFkRWxlbWVudHMoYXJyYXksIG9wdCkge1xuICAgIC8vaWYgdXNlciBkaWRuJ3Qgc3BlY2lmeSBhbiBvdXRwdXQgYXJyYXlcbiAgICBpZiAoIWFycmF5IHx8ICEoYW5BcnJheShhcnJheSkgfHwgaXNCdWZmZXIoYXJyYXkpKSkge1xuICAgICAgICBvcHQgPSBhcnJheSB8fCB7fVxuICAgICAgICBhcnJheSA9IG51bGxcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9wdCA9PT0gJ251bWJlcicpIC8vYmFja3dhcmRzLWNvbXBhdGlibGVcbiAgICAgICAgb3B0ID0geyBjb3VudDogb3B0IH1cbiAgICBlbHNlXG4gICAgICAgIG9wdCA9IG9wdCB8fCB7fVxuXG4gICAgdmFyIHR5cGUgPSB0eXBlb2Ygb3B0LnR5cGUgPT09ICdzdHJpbmcnID8gb3B0LnR5cGUgOiAndWludDE2J1xuICAgIHZhciBjb3VudCA9IHR5cGVvZiBvcHQuY291bnQgPT09ICdudW1iZXInID8gb3B0LmNvdW50IDogMVxuICAgIHZhciBzdGFydCA9IChvcHQuc3RhcnQgfHwgMCkgXG5cbiAgICB2YXIgZGlyID0gb3B0LmNsb2Nrd2lzZSAhPT0gZmFsc2UgPyBDVyA6IENDVyxcbiAgICAgICAgYSA9IGRpclswXSwgXG4gICAgICAgIGIgPSBkaXJbMV0sXG4gICAgICAgIGMgPSBkaXJbMl1cblxuICAgIHZhciBudW1JbmRpY2VzID0gY291bnQgKiA2XG5cbiAgICB2YXIgaW5kaWNlcyA9IGFycmF5IHx8IG5ldyAoZHR5cGUodHlwZSkpKG51bUluZGljZXMpXG4gICAgZm9yICh2YXIgaSA9IDAsIGogPSAwOyBpIDwgbnVtSW5kaWNlczsgaSArPSA2LCBqICs9IDQpIHtcbiAgICAgICAgdmFyIHggPSBpICsgc3RhcnRcbiAgICAgICAgaW5kaWNlc1t4ICsgMF0gPSBqICsgMFxuICAgICAgICBpbmRpY2VzW3ggKyAxXSA9IGogKyAxXG4gICAgICAgIGluZGljZXNbeCArIDJdID0gaiArIDJcbiAgICAgICAgaW5kaWNlc1t4ICsgM10gPSBqICsgYVxuICAgICAgICBpbmRpY2VzW3ggKyA0XSA9IGogKyBiXG4gICAgICAgIGluZGljZXNbeCArIDVdID0gaiArIGNcbiAgICB9XG4gICAgcmV0dXJuIGluZGljZXNcbn1cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vcXVhZC1pbmRpY2VzL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZHR5cGUpIHtcbiAgc3dpdGNoIChkdHlwZSkge1xuICAgIGNhc2UgJ2ludDgnOlxuICAgICAgcmV0dXJuIEludDhBcnJheVxuICAgIGNhc2UgJ2ludDE2JzpcbiAgICAgIHJldHVybiBJbnQxNkFycmF5XG4gICAgY2FzZSAnaW50MzInOlxuICAgICAgcmV0dXJuIEludDMyQXJyYXlcbiAgICBjYXNlICd1aW50OCc6XG4gICAgICByZXR1cm4gVWludDhBcnJheVxuICAgIGNhc2UgJ3VpbnQxNic6XG4gICAgICByZXR1cm4gVWludDE2QXJyYXlcbiAgICBjYXNlICd1aW50MzInOlxuICAgICAgcmV0dXJuIFVpbnQzMkFycmF5XG4gICAgY2FzZSAnZmxvYXQzMic6XG4gICAgICByZXR1cm4gRmxvYXQzMkFycmF5XG4gICAgY2FzZSAnZmxvYXQ2NCc6XG4gICAgICByZXR1cm4gRmxvYXQ2NEFycmF5XG4gICAgY2FzZSAnYXJyYXknOlxuICAgICAgcmV0dXJuIEFycmF5XG4gICAgY2FzZSAndWludDhfY2xhbXBlZCc6XG4gICAgICByZXR1cm4gVWludDhDbGFtcGVkQXJyYXlcbiAgfVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2R0eXBlL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsInZhciBzdHIgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nXG5cbm1vZHVsZS5leHBvcnRzID0gYW5BcnJheVxuXG5mdW5jdGlvbiBhbkFycmF5KGFycikge1xuICByZXR1cm4gKFxuICAgICAgIGFyci5CWVRFU19QRVJfRUxFTUVOVFxuICAgICYmIHN0ci5jYWxsKGFyci5idWZmZXIpID09PSAnW29iamVjdCBBcnJheUJ1ZmZlcl0nXG4gICAgfHwgQXJyYXkuaXNBcnJheShhcnIpXG4gIClcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9hbi1hcnJheS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCIvKiFcbiAqIERldGVybWluZSBpZiBhbiBvYmplY3QgaXMgYSBCdWZmZXJcbiAqXG4gKiBAYXV0aG9yICAgRmVyb3NzIEFib3VraGFkaWplaCA8aHR0cHM6Ly9mZXJvc3Mub3JnPlxuICogQGxpY2Vuc2UgIE1JVFxuICovXG5cbi8vIFRoZSBfaXNCdWZmZXIgY2hlY2sgaXMgZm9yIFNhZmFyaSA1LTcgc3VwcG9ydCwgYmVjYXVzZSBpdCdzIG1pc3Npbmdcbi8vIE9iamVjdC5wcm90b3R5cGUuY29uc3RydWN0b3IuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHlcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICE9IG51bGwgJiYgKGlzQnVmZmVyKG9iaikgfHwgaXNTbG93QnVmZmVyKG9iaikgfHwgISFvYmouX2lzQnVmZmVyKVxufVxuXG5mdW5jdGlvbiBpc0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiAhIW9iai5jb25zdHJ1Y3RvciAmJiB0eXBlb2Ygb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyID09PSAnZnVuY3Rpb24nICYmIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlcihvYmopXG59XG5cbi8vIEZvciBOb2RlIHYwLjEwIHN1cHBvcnQuIFJlbW92ZSB0aGlzIGV2ZW50dWFsbHkuXG5mdW5jdGlvbiBpc1Nsb3dCdWZmZXIgKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iai5yZWFkRmxvYXRMRSA9PT0gJ2Z1bmN0aW9uJyAmJiB0eXBlb2Ygb2JqLnNsaWNlID09PSAnZnVuY3Rpb24nICYmIGlzQnVmZmVyKG9iai5zbGljZSgwLCAwKSlcbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9pcy1idWZmZXIvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiXG5cbmNsYXNzIElucHV0IHtcblxuICBfZW5hYmxlZCA9IGZhbHNlO1xuICBvd25lciA9IG51bGw7XG5cbiAgX2dseXBoSW5kZXggPSAtMTtcblxuICBzZXQgZ2x5cGhJbmRleCh2YWx1ZSkge1xuXG4gICAgdGhpcy5fZ2x5cGhJbmRleCA9IHZhbHVlO1xuXG4gICAgaWYgKHRoaXMuX2dseXBoSW5kZXggPCAtMSlcbiAgICAgIHRoaXMuX2dseXBoSW5kZXggPSAtMTtcblxuICAgIGlmICh0aGlzLl9nbHlwaEluZGV4ID4gdGhpcy5vd25lci5sYXlvdXQuZ2x5cGhzLmxlbmd0aClcbiAgICAgIHRoaXMuX2dseXBoSW5kZXggPSB0aGlzLm93bmVyLmxheW91dC5nbHlwaHMubGVuZ3RoO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGdldCBnbHlwaEluZGV4KCkge1xuICAgIHJldHVybiB0aGlzLl9nbHlwaEluZGV4O1xuICB9XG5cbiAgc2V0IGVuYWJsZWQodmFsdWUpIHtcbiAgICB0aGlzLl9lbmFibGVkID0gdmFsdWU7XG4gICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcbiAgICAgIHRoaXMuZW5hYmxlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBlbmFibGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9lbmFibGVkXG4gIH1cblxuICBjb25zdHJ1Y3Rvcihvd25lcikge1xuICAgIHRoaXMub3duZXIgPSBvd25lcjtcbiAgICB0aGlzLm1ldHJpY3MgPSBvd25lci5tZXRyaWNzO1xuICAgIHRoaXMubGF5b3V0ID0gb3duZXIubGF5b3V0O1xuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF1cblxuICAgIHRoaXMuY3JlYXRlRmllbGQoKTtcbiAgICB0aGlzLmRpc2FibGUoKTtcbiAgfVxuXG4gIGVuYWJsZSgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJztcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmlucHV0RWxlbWVudCk7XG4gIH1cblxuICBkaXNhYmxlKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLmlucHV0RWxlbWVudCkpXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuaW5wdXRFbGVtZW50KTtcbiAgfVxuXG4gIGhpZGUoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgfVxuXG4gIHNob3coKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgfVxuXG4gIGNyZWF0ZUZpZWxkKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXG4gICAgY29uc3QgdHJhbnNmb3JtID0gT2JqZWN0LnZhbHVlcyh0aGlzLm93bmVyLnRyYW5zZm9ybS53b3JsZFRyYW5zZm9ybSkuc2xpY2UoMCwgNik7XG5cbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgIC8vdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwwLDAsMC4zKSc7XG5cbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5jb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmNvbnRhaW4gPSAnc3RyaWN0JztcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS56SW5kZXggPSAyO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5vdXRsaW5lID0gXCJub25lXCI7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuY29sb3IgPSB0aGlzLm93bmVyLnN0eWxlLmZpbGw7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtT3JpZ2luPSBcImxlZnQgdG9wXCI7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYG1hdHJpeCgke3RyYW5zZm9ybS5qb2luKFwiLCBcIil9KWA7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUucGFkZGluZyA9IFwiMFwiO1xuXG4gICAgdGhpcy5hZGRFdmVudChcImJsdXJcIiwgKGV2ZW50KSA9PiB0aGlzLmlucHV0RWxlbWVudC5mb2N1cygpKTtcbiAgICB0aGlzLmFkZEV2ZW50KFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB0aGlzLm9uSW5wdXQoZXZlbnQpKTtcbiAgICB0aGlzLmFkZEV2ZW50KFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHRoaXMub25LZXlkb3duKGV2ZW50KSlcbiAgICB0aGlzLmFkZEV2ZW50KFwicGFzdGVcIiwgKGV2ZW50KSA9PiB0aGlzLnBhc3RlRnJvbUNsaXBib2FyZChldmVudCkpXG4gIH1cblxuICB1cGRhdGUoKSB7XG5cbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLm93bmVyLm1ldHJpY3M7XG4gICAgdGhpcy5sYXlvdXQgPSB0aGlzLm93bmVyLmxheW91dDtcblxuICAgIGNvbnN0IHtnbHlwaHN9ID0gdGhpcy5vd25lci5sYXlvdXQ7XG5cbiAgICBpZiAodGhpcy5nbHlwaEluZGV4ID49IGdseXBocy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuZ2x5cGhJbmRleCA9IGdseXBocy5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIC8vIERlZmF1bHQgY2FyZXQgcGxhY2UgLSBzdGFydCBvZiB0aGUgaW5wdXQgZmllbGQgVE9ETyBpbXBsZW1lbnQgYWxpZ25cbiAgICBsZXQgZ2x5cGhNZXRyaWNzID0ge1xuICAgICAgeDogdGhpcy5vd25lci5wb3NpdGlvbi54LFxuICAgICAgeTogdGhpcy5vd25lci5wb3NpdGlvbi55XG4gICAgfTtcblxuICAgIC8vIGlmIHN0cmluZyBpcyBlbXB0eSwgcHV0IGNhcmV0IGF0IHRoZSBiZWdpbm5pbmdcbiAgICBpZiAodGhpcy5vd25lci5sYXlvdXQuZ2x5cGhzLmxlbmd0aCA9PT0gLTEpIHtcblxuICAgICAgLy8gaWYgd2Ugb24gdGhlIGxhc3QgZ2x5cGgsIHBsYWNlIGNhcmV0IGFmdGVyIGl0XG4gICAgfWVsc2UgaWYgKHRoaXMuZ2x5cGhJbmRleCA9PT0gZ2x5cGhzLmxlbmd0aCkge1xuXG4gICAgICBjb25zdCBsYXN0R2x5cGggPSBnbHlwaHNbZ2x5cGhzLmxlbmd0aCAtIDFdO1xuXG4gICAgICBnbHlwaE1ldHJpY3MueCArPSBsYXN0R2x5cGgubWV0cmljcy54ICsgbGFzdEdseXBoLm1ldHJpY3Mud2lkdGg7XG4gICAgICBnbHlwaE1ldHJpY3MueSArPSBsYXN0R2x5cGgubWV0cmljcy55O1xuXG4gICAgICAvLyBpZiBjYXJldCBpbiB0aGUgbWlkZGxlIG9mIHRoZSB0ZXh0XG4gICAgfSBlbHNlIGlmICh0aGlzLmdseXBoSW5kZXggIT09IC0xKSB7XG4gICAgICBjb25zdCBzZWxlY3RlZEdseXBoID0gZ2x5cGhzW3RoaXMuZ2x5cGhJbmRleF07XG5cbiAgICAgIGdseXBoTWV0cmljcy54ICs9IHNlbGVjdGVkR2x5cGgubWV0cmljcy54ICsgc2VsZWN0ZWRHbHlwaC5tZXRyaWNzLndpZHRoO1xuICAgICAgZ2x5cGhNZXRyaWNzLnkgKz0gc2VsZWN0ZWRHbHlwaC5tZXRyaWNzLnk7XG4gICAgfSBlbHNlIHtcblxuICAgICAgZ2x5cGhNZXRyaWNzLnkgKz0gdGhpcy5vd25lci5zdHlsZS5saW5lSGVpZ2h0O1xuICAgIH1cblxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IE9iamVjdC52YWx1ZXModGhpcy5vd25lci50cmFuc2Zvcm0ud29ybGRUcmFuc2Zvcm0pLnNsaWNlKDAsIDYpO1xuXG5cbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgbWF0cml4KCR7dHJhbnNmb3JtLmpvaW4oXCIsIFwiKX0pYDtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5oZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodCArIFwicHhcIjtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgXCJweFwiO1xuXG4gICAgdGhpcy5zZXRQb3NpdGlvbihnbHlwaE1ldHJpY3MueCAsIGdseXBoTWV0cmljcy55KTtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5mb2N1cygpO1xuICB9XG5cbiAgb25JbnB1dChldmVudCkge1xuXG4gICAgY29uc3QgeyByYW5nZSB9ID0gdGhpcy5vd25lci5zZWxlY3Q7XG5cbiAgICB0aGlzLm93bmVyLnNlbGVjdC5jbGVhclNlbGVjdGVkUmFuZ2UoKTtcblxuICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XG5cbiAgICBpZiAoZXZlbnQuZGF0YSA9PT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgLy8gQ29udGVudCB3ZSBhcmUgYWJvdXQgdG8gYWRkXG4gICAgbGV0IHRleHRUb0FkZCA9IGV2ZW50LmRhdGE7XG5cbiAgICBpZiAodGhpcy5vd25lci5jb25maWcudXBwZXJjYXNlKSB7XG4gICAgICB0ZXh0VG9BZGQgPSB0ZXh0VG9BZGQudG9VcHBlckNhc2UoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vd25lci5jb25maWcubG93ZXJjYXNlKSB7XG4gICAgICB0ZXh0VG9BZGQgPSB0ZXh0VG9BZGQudG9Mb3dlckNhc2UoKTtcbiAgICB9XG5cbiAgICAvLyBJZiB0ZXh0IGlzIGVtcHR5IG5vd1xuICAgIGlmICh0aGlzLm93bmVyLmxheW91dC5nbHlwaHMubGVuZ3RoID09PSAwKSB7XG4gICAgICB0aGlzLm93bmVyLnRleHQgPSB0ZXh0VG9BZGQ7XG4gICAgICB0aGlzLmdseXBoSW5kZXggPSAxO1xuXG4gICAgLy8gSWYgY2FyZXQgaXMgYXQgdGhlIGVuZCBvZiB0aGUgdGV4dFxuICAgIH0gZWxzZSBpZiAodGhpcy5nbHlwaEluZGV4ID09PSB0aGlzLm93bmVyLmxheW91dC5nbHlwaHMubGVuZ3RoIC0gMSkge1xuICAgICAgdGhpcy5vd25lci50ZXh0ICs9IHRleHRUb0FkZDtcbiAgICAgIHRoaXMuZ2x5cGhJbmRleCsrO1xuXG4gICAgLy8gSWYgd2UgaW4gdGhlIG1pZGRsZSBvZiB0aGUgbGluZVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm93bmVyLmluc2VydFN0cmluZygrK3RoaXMuZ2x5cGhJbmRleCwgdGV4dFRvQWRkKTtcbiAgICAgIC8vdGhpcy5nbHlwaEluZGV4Kys7XG4gICAgfVxuICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKDAsIGZhbHNlKTtcblxuICB9XG5cbiAgb25LZXlkb3duKGV2ZW50KSB7XG5cbiAgICBjb25zdCB7cmFuZ2V9ID0gdGhpcy5vd25lci5zZWxlY3Q7XG5cbiAgICBzd2l0Y2ggKGV2ZW50LmtleSkge1xuICAgICAgY2FzZSBcIkFycm93VXBcIjpcbiAgICAgICAgdGhpcy5tb3ZlVXAoKTtcbiAgICAgICAgYnJlYWs7XG5cblxuICAgICAgY2FzZSBcIkFycm93RG93blwiOlxuICAgICAgICB0aGlzLm1vdmVEb3duKCk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XG5cbiAgICAgICAgLy8gTW92ZSBieSB3b3JkXG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XG5cbiAgICAgICAgICB0aGlzLm1vdmVCeVdvcmRMZWZ0KClcblxuICAgICAgICAgIC8vIFNlbGVjdFxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG5cbiAgICAgICAgICB0aGlzLm1vdmVXaXRoU2VsZWN0TGVmdCgpXG5cbiAgICAgICAgICAvLyBKdXN0IG1vdmUgY3Vyc29yXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vd25lci5zZWxlY3Quc2V0UmFuZ2UoMCwgZmFsc2UpO1xuICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgIHRoaXMuZ2x5cGhJbmRleC0tO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XG5cbiAgICAgICAgLy8gTW92ZSBieSB3b3JkXG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICB0aGlzLm1vdmVCeVdvcmRSaWdodCgpO1xuICAgICAgICAvLyBTZWxlY3RcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5zaGlmdEtleSkge1xuICAgICAgICAgIHRoaXMubW92ZVdpdGhTZWxlY3RSaWdodCgpXG5cbiAgICAgICAgLy8gSnVzdCBtb3ZlIGluZGV4XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5vd25lci5zZWxlY3Quc2V0UmFuZ2UoMCwgZmFsc2UpO1xuICAgICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICAgIHRoaXMuZ2x5cGhJbmRleCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjpcbiAgICAgICAgaWYgKHJhbmdlWzFdICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5vd25lci5zZWxlY3QuY2xlYXJTZWxlY3RlZFJhbmdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm93bmVyLnJlbW92ZVN0cmluZyh0aGlzLmdseXBoSW5kZXgtLSwgMCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJEZWxldGVcIjpcbiAgICAgICAgaWYgKHJhbmdlWzFdICE9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5vd25lci5zZWxlY3QuY2xlYXJTZWxlY3RlZFJhbmdlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLm93bmVyLnJlbW92ZVN0cmluZyh0aGlzLmdseXBoSW5kZXggKyAxLCAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBTZWxlY3QgYWxsXG4gICAgICBjYXNlIFwiYVwiOlxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xuICAgICAgICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKDAsdGhpcy5vd25lci50ZXh0Lmxlbmd0aCAtIDEpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIENvcHkgdG8gY2xpcGJvYXJkXG4gICAgICBjYXNlIFwiY1wiOlxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xuICAgICAgICAgIHRoaXMuY29weVRvQ2xpcGJvYXJkKCk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgLy8gQ3V0XG4gICAgICBjYXNlIFwieFwiOlxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xuICAgICAgICAgIHRoaXMuY29weVRvQ2xpcGJvYXJkKHRydWUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBcIiBcIjtcbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cbiAgfVxuXG4gIHNldFBvc2l0aW9uKHgsIHkpIHtcblxuICAgIGNvbnN0IHthIDogc2NhbGVYLCBkOiBzY2FsZVl9ID0gdGhpcy5vd25lci50cmFuc2Zvcm0ud29ybGRUcmFuc2Zvcm07XG4gICAgY29uc3Qge3ggOiBsb2NhbFgsIHk6IGxvY2FsWSB9ID0gdGhpcy5vd25lci5wb3NpdGlvbjtcblxuICAgIGxldCBsaW5lSGVpZ2h0ID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKiBzY2FsZVk7XG5cbiAgICB5ICo9IHNjYWxlWTtcbiAgICB4ICo9IHNjYWxlWDtcblxuICAgIHkgLT0gbGluZUhlaWdodDtcblxuICAgIHkgLT0gbG9jYWxZICogc2NhbGVZO1xuICAgIHggLT0gbG9jYWxYICogc2NhbGVYO1xuXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3h9cHhgO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRvcCA9IGAke3l9cHhgO1xuXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBcIiBcIjtcbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBPYmplY3QudmFsdWVzKHRoaXMuZ2V0VHJhbnNmb3JtKCkpLnNsaWNlKDAsIDYpO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBtYXRyaXgoJHt0cmFuc2Zvcm0uam9pbihcIiwgXCIpfSlgO1xuICB9XG5cbiAgZ2V0VHJhbnNmb3JtKCkge1xuICAgIGNvbnN0IG93bmVyVHJhbnNmb3JtID0gdGhpcy5vd25lci50cmFuc2Zvcm0ud29ybGRUcmFuc2Zvcm07XG4gICAgbGV0IGNhbnZhc1JlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gey4uLm93bmVyVHJhbnNmb3JtLCB0eDogb3duZXJUcmFuc2Zvcm0udHggKyBjYW52YXNSZWN0LngsIHR5OiBvd25lclRyYW5zZm9ybS50eSArIGNhbnZhc1JlY3QueX07XG4gIH1cblxuICBhZGRFdmVudChldmVudCwgY2FsbGJhY2spIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoZXZlbnQpID0+IHtcbiAgICAgIGlmICh0aGlzLl9lbmFibGVkKSB7XG4gICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGNvcHlUb0NsaXBib2FyZChjdXQgPSBmYWxzZSkge1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5vd25lci5zZWxlY3QucmFuZ2U7XG4gICAgY29uc3Qgc3RhcnQgPSBNYXRoLm1pbi5hcHBseShudWxsLCByYW5nZSk7XG4gICAgY29uc3QgZW5kID0gTWF0aC5tYXguYXBwbHkobnVsbCwgcmFuZ2UpO1xuXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSB0aGlzLm93bmVyLnRleHQuc2xpY2Uoc3RhcnQsIGVuZCArIDEpO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnNlbGVjdCgpO1xuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XG5cbiAgICBpZiAoY3V0KSB7XG4gICAgICB0aGlzLm93bmVyLnNlbGVjdC5jbGVhclNlbGVjdGVkUmFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICBwYXN0ZUZyb21DbGlwYm9hcmQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGxldCB0ZXh0ID0gZXZlbnQuY2xpcGJvYXJkRGF0YS5nZXREYXRhKFwidGV4dFwiKTtcblxuICAgIGlmICh0aGlzLm93bmVyLmNvbmZpZy51cHBlcmNhc2UpXG4gICAgICB0ZXh0ID0gdGV4dC50b1VwcGVyQ2FzZSgpO1xuXG4gICAgaWYgKHRoaXMub3duZXIuY29uZmlnLmxvd2VyY2FzZSlcbiAgICAgIHRleHQgPSB0ZXh0LnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyBUT0RPIHJlbW92ZSBhbGwgdHJhc2ggc3ltYm9sc1xuXG4gICAgdGhpcy5vd25lci5zZWxlY3QuY2xlYXJTZWxlY3RlZFJhbmdlKCk7XG5cbiAgICB0aGlzLm93bmVyLmluc2VydFN0cmluZyh0aGlzLmdseXBoSW5kZXggKyAxLCB0ZXh0KTtcblxuICAgIHRoaXMuZ2x5cGhJbmRleCA9IHRoaXMuZ2x5cGhJbmRleCArIHRleHQubGVuZ3RoO1xuICB9XG5cbiAgbW92ZVdpdGhTZWxlY3RSaWdodCgpIHtcbiAgICBjb25zdCByYW5nZSA9IHRoaXMub3duZXIuc2VsZWN0LnJhbmdlO1xuXG4gICAgaWYgKHJhbmdlWzFdID09PSBudWxsKSB7XG4gICAgICArK3RoaXMuZ2x5cGhJbmRleDtcbiAgICAgIHJhbmdlWzBdID0gdGhpcy5nbHlwaEluZGV4O1xuICAgICAgcmFuZ2VbMV0gPSB0aGlzLmdseXBoSW5kZXggO1xuICAgIH0gZWxzZSBpZiAocmFuZ2VbMV0gPT09IHJhbmdlWzBdICYmIHRoaXMuZ2x5cGhJbmRleCA9PT0gcmFuZ2VbMF0gLSAxKSB7XG4gICAgICByYW5nZVsxXSA9IG51bGw7XG4gICAgICB0aGlzLmdseXBoSW5kZXgrKztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vd25lci5zZWxlY3QuZXhwYW5kKDEpO1xuICAgICAgdGhpcy5nbHlwaEluZGV4KytcbiAgICB9XG5cbiAgICB0aGlzLm93bmVyLnNlbGVjdC51cGRhdGUoKVxuICB9XG5cbiAgbW92ZVdpdGhTZWxlY3RMZWZ0KCkge1xuXG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLm93bmVyLnNlbGVjdC5yYW5nZTtcblxuICAgIC8vIElmIHdlIG9ubHkgaGF2ZSBjdXJzb3IsIG5vIHNlbGVjdGlvblxuICAgIGlmIChyYW5nZVsxXSA9PT0gbnVsbCkge1xuICAgICAgcmFuZ2VbMF0gPSB0aGlzLmdseXBoSW5kZXg7XG4gICAgICByYW5nZVsxXSA9IHRoaXMuZ2x5cGhJbmRleCA7XG5cbiAgICAgIC8vIElmIHdlIGhhdmUgc2VsZWN0ZWQgb25lIGdseXBoIGFuZCB3ZSByZW1vdmUgc2VsZWN0aW9uXG4gICAgfSBlbHNlIGlmIChyYW5nZVsxXSA9PT0gcmFuZ2VbMF0gJiYgdGhpcy5nbHlwaEluZGV4ID09PSByYW5nZVswXSkge1xuICAgICAgcmFuZ2VbMV0gPSBudWxsO1xuXG4gICAgICAvLyBSZWd1bGFyIHNlbGVjdGluZ1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm93bmVyLnNlbGVjdC5leHBhbmQoLTEpO1xuICAgIH1cblxuICAgIHRoaXMuZ2x5cGhJbmRleC0tO1xuXG4gICAgdGhpcy5vd25lci5zZWxlY3QudXBkYXRlKCk7XG4gIH1cblxuICBtb3ZlRG93bigpIHtcblxuICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKG51bGwsIGZhbHNlKVxuICAgIFxuICAgIGNvbnN0IGdseXBoID0gdGhpcy5sYXlvdXQuZ2x5cGhzW3RoaXMuZ2x5cGhJbmRleF07XG5cbiAgICAvLyBJZiB3ZSBhcmUgb24gdGhlIGZpcnN0IGxpbmVcbiAgICBpZiAoZ2x5cGgucG9zaXRpb25bMV0gPT09IHRoaXMubGF5b3V0LmhlaWdodCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG5ld0dseXBoID0gdGhpcy5vd25lci5zZWxlY3QuZ2V0Q2xvc2VzdEdseXBoKGdseXBoLnBvc2l0aW9uWzBdLCBnbHlwaC5wb3NpdGlvblsxXSk7XG4gICAgdGhpcy5nbHlwaEluZGV4ID0gdGhpcy5sYXlvdXQuZ2x5cGhzLmluZGV4T2YobmV3R2x5cGgpO1xuICB9XG5cbiAgbW92ZVVwKCkge1xuXG4gICAgdGhpcy5vd25lci5zZWxlY3Quc2V0UmFuZ2UobnVsbCwgZmFsc2UpXG5cbiAgICBjb25zdCBnbHlwaCA9IHRoaXMubGF5b3V0LmdseXBoc1t0aGlzLmdseXBoSW5kZXhdO1xuXG4gICAgLy8gSWYgd2UgYXJlIG9uIHRoZSBmaXJzdCBsaW5lXG4gICAgaWYgKGdseXBoLnBvc2l0aW9uWzFdIDw9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3R2x5cGggPSB0aGlzLm93bmVyLnNlbGVjdC5nZXRDbG9zZXN0R2x5cGgoZ2x5cGgucG9zaXRpb25bMF0sIGdseXBoLnBvc2l0aW9uWzFdIC0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKiAyKTtcbiAgICB0aGlzLmdseXBoSW5kZXggPSB0aGlzLmxheW91dC5nbHlwaHMuaW5kZXhPZihuZXdHbHlwaCk7XG5cbiAgfVxuXG4gIG1vdmVCeVdvcmRMZWZ0KCkge1xuICAgIGNvbnN0IGdseXBocyA9IHRoaXMubGF5b3V0LmdseXBocztcblxuICAgIGlmICh0aGlzLmdseXBoSW5kZXggPiAwKSB7XG4gICAgICBmb3IgKGxldCBpID0gdGhpcy5nbHlwaEluZGV4IC0gMjsgaSA+PSAwOyBpLS0gKSB7XG4gICAgICAgIGlmIChnbHlwaHNbaV0ubGV0dGVyID09PSBcIiBcIiAmJiBnbHlwaHNbaSArIDEgXS5sZXR0ZXIgIT09IFwiIFwiKSB7XG4gICAgICAgICAgdGhpcy5nbHlwaEluZGV4ID0gaTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT09IDAgKSB0aGlzLmdseXBoSW5kZXggPSAtMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBtb3ZlQnlXb3JkUmlnaHQoKSB7XG4gICAgY29uc3QgZ2x5cGhzID0gdGhpcy5sYXlvdXQuZ2x5cGhzO1xuXG4gICAgaWYgKHRoaXMuZ2x5cGhJbmRleCA8IGdseXBocy5sZW5ndGgpIHtcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLmdseXBoSW5kZXggKyAxOyBpIDw9IGdseXBocy5sZW5ndGggLSAxOyBpKysgKSB7XG4gICAgICAgIGlmIChnbHlwaHNbaV0ubGV0dGVyID09PSBcIiBcIiAmJiBnbHlwaHNbaSAtIDEgXS5sZXR0ZXIgIT09IFwiIFwiKSB7XG4gICAgICAgICAgdGhpcy5nbHlwaEluZGV4ID0gaTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGkgPT09IGdseXBocy5sZW5ndGggLSAxKSB0aGlzLmdseXBoSW5kZXggPSBnbHlwaHMubGVuZ3RoIC0xO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgSW5wdXQ7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5wdXQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG5hdHRyaWJ1dGUgdmVjMiBhVmVydGV4UG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzIgYVRleHR1cmVDb29yZDtcXG5hdHRyaWJ1dGUgZmxvYXQgYVNkZlNpemU7XFxuXFxudW5pZm9ybSBtYXQzIHRyYW5zbGF0aW9uTWF0cml4O1xcbnVuaWZvcm0gbWF0MyBwcm9qZWN0aW9uTWF0cml4O1xcbnVuaWZvcm0gZmxvYXQgc2RmTXVsdGlwbGllcjtcXG5cXG52YXJ5aW5nIHZlYzIgIHRjMDtcXG52YXJ5aW5nIGZsb2F0IGRvZmZzZXQ7XFxudmFyeWluZyBmbG9hdCBzZGZfdGV4ZWw7XFxuXFxuXFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG5cXG4gICAgLy9UT0RPIE1BS0UgQVRUUklCVVRFXFxuICAgIGZsb2F0IHNkZl9zaXplID0gYVNkZlNpemUgKiBzZGZNdWx0aXBsaWVyO1xcblxcbiAgICAvL1RPRE8gTUFLRSBVTklGT1JNU1xcbiAgICBmbG9hdCBzZGZfdGV4X3NpemUgPSAxMDI0LjA7XFxuXFxuXFxuICAgIHRjMCA9IGFUZXh0dXJlQ29vcmQ7XFxuICAgIGRvZmZzZXQgPSAxLjAgLyBzZGZfc2l6ZTsgICAgICAgLy8gRGlzdGFuY2UgZmllbGQgZGVsdGEgZm9yIG9uZSBzY3JlZW4gcGl4ZWxcXG4gICAgc2RmX3RleGVsID0gMS4wIC8gc2RmX3RleF9zaXplO1xcblxcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQoKHByb2plY3Rpb25NYXRyaXggKiB0cmFuc2xhdGlvbk1hdHJpeCAqIHZlYzMoYVZlcnRleFBvc2l0aW9uICwgMS4wKSkueHksIDAuMCwgMS4wKTtcXG5cXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL3RleHQvdmVydC5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG51bmlmb3JtIHNhbXBsZXIyRCB1U2FtcGxlcjtcXG51bmlmb3JtIGZsb2F0IGhpbnRfYW1vdW50O1xcbnVuaWZvcm0gZmxvYXQgc3VicGl4ZWxfYW1vdW50O1xcblxcbnVuaWZvcm0gdmVjMyBiZ19jb2xvcjtcXG51bmlmb3JtIHZlYzMgZm9udF9jb2xvcjtcXG5cXG52YXJ5aW5nIHZlYzIgIHRjMDtcXG52YXJ5aW5nIGZsb2F0IGRvZmZzZXQ7XFxudmFyeWluZyBmbG9hdCBzZGZfdGV4ZWw7XFxuXFxuXFxuLypcXG4gKiAgU3VicGl4ZWwgY292ZXJhZ2UgY2FsY3VsYXRpb25cXG4gKlxcbiAqICB2IC0gZWRnZSBzbG9wZSAgICAtMS4wIHRvIDEuMCAgICAgICAgICB0cmlwbGV0XFxuICogIGEgLSBwaXhlbCBjb3ZlcmFnZSAwLjAgdG8gMS4wICAgICAgICAgIGNvdmVyYWdlXFxuICpcXG4gKiAgICAgIHw8LSBnbHlwaCBlZGdlICAgICAgICAgICAgICAgICAgICAgIFIgIEcgIEJcXG4gKiAgKy0tLSstLS0rICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0rLS0rLS0rXFxuICogIHwgICB8WFhYfCB2ID0gMS4wIChlZGdlIGZhY2luZyB3ZXN0KSAgfCAgfHh4fFhYfFxcbiAqICB8ICAgfFhYWHwgYSA9IDAuNSAoNTAlIGNvdmVyYWdlKSAgICAgIHwgIHx4eHxYWHxcXG4gKiAgfCAgIHxYWFh8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB8eHh8WFh8XFxuICogICstLS0rLS0tKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tKy0tKy0tK1xcbiAqICAgIHBpeGVsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwICA1MCAxMDBcXG4gKlxcbiAqXFxuICogICAgICAgIFIgICBHICAgQlxcbiAqXFxuICogICAxLjAgICAgICAgICstLSsgICA8LSB0b3AgKGFicyggdiApKVxcbiAqICAgICAgICAgICAgICB8XFxuICogICAgICAgLSstLS0tLSstLSstLSA8LSBjZWlsOiAxMDAlIGNvdmVyYWdlXFxuICogICAgICAgIHwgICAgIHxYWHxcXG4gKiAgIDAuMCAgfCAgKy0tK1hYfFxcbiAqICAgICAgICB8ICB8eHh8WFh8XFxuICogICAgICAgLSstLSstLSstLSstLSA8LSBmbG9vcjogMCUgY292ZXJhZ2VcXG4gKiAgICAgICAgICAgfFxcbiAqICAtMS4wICArLS0rICAgICAgICAgPC0gIC1hYnModilcXG4gKiAgICAgICAgfFxcbiAqICAgICAgICB8XFxuICogICAgICAgIHxcXG4gKiAgLTIuMCAgKyAgICAgICAgICAgIDwtIGJvdHRvbTogLWFicyh2KS0xLjBcXG4gKi9cXG5cXG52ZWMzIHN1YnBpeGVsKCBmbG9hdCB2LCBmbG9hdCBhICkge1xcbiAgICBmbG9hdCB2dCAgICAgID0gMC42ICogdjsgLy8gMS4wIHdpbGwgbWFrZSB5b3VyIGV5ZXMgYmxlZWRcXG4gICAgdmVjMyAgcmdiX21heCA9IHZlYzMoIC12dCwgMC4wLCB2dCApO1xcbiAgICBmbG9hdCB0b3AgICAgID0gYWJzKCB2dCApO1xcbiAgICBmbG9hdCBib3R0b20gID0gLXRvcCAtIDEuMDtcXG4gICAgZmxvYXQgY2Zsb29yICA9IG1peCggdG9wLCBib3R0b20sIGEgKTtcXG4gICAgdmVjMyAgcmVzICAgICA9IGNsYW1wKCByZ2JfbWF4IC0gdmVjMyggY2Zsb29yICksIDAuMCwgMS4wICk7XFxuICAgIHJldHVybiByZXM7XFxufVxcblxcbnZvaWQgbWFpbjIoKSB7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHRleHR1cmUyRCh1U2FtcGxlciwgdGMwKTtcXG59XFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG5cXG4gICAgLy8gU2FtcGxpbmcgdGhlIHRleHR1cmUsIEwgcGF0dGVyblxcbiAgICBmbG9hdCBzZGYgICAgICAgPSB0ZXh0dXJlMkQoIHVTYW1wbGVyLCB0YzAgKS5yO1xcbiAgICBmbG9hdCBzZGZfbm9ydGggPSB0ZXh0dXJlMkQoIHVTYW1wbGVyLCB0YzAgKyB2ZWMyKCAwLjAsIHNkZl90ZXhlbCApICkucjtcXG4gICAgZmxvYXQgc2RmX2Vhc3QgID0gdGV4dHVyZTJEKCB1U2FtcGxlciwgdGMwICsgdmVjMiggc2RmX3RleGVsLCAwLjAgKSApLnI7XFxuXFxuICAgIC8vIEVzdGltYXRpbmcgc3Ryb2tlIGRpcmVjdGlvbiBieSB0aGUgZGlzdGFuY2UgZmllbGQgZ3JhZGllbnQgdmVjdG9yXFxuICAgIHZlYzIgIHNncmFkICAgICA9IHZlYzIoIHNkZl9lYXN0IC0gc2RmLCBzZGZfbm9ydGggLSBzZGYgKTtcXG4gICAgZmxvYXQgc2dyYWRfbGVuID0gbWF4KCBsZW5ndGgoIHNncmFkICksIDEuMCAvIDEyOC4wICk7XFxuICAgIHZlYzIgIGdyYWQgICAgICA9IHNncmFkIC8gdmVjMiggc2dyYWRfbGVuICk7XFxuICAgIGZsb2F0IHZncmFkID0gYWJzKCBncmFkLnkgKTsgLy8gMC4wIC0gdmVydGljYWwgc3Ryb2tlLCAxLjAgLSBob3Jpem9udGFsIG9uZVxcblxcbiAgICBmbG9hdCBob3J6X3NjYWxlICA9IDEuMTsgLy8gQmx1cnJpbmcgdmVydGljYWwgc3Ryb2tlcyBhbG9uZyB0aGUgWCBheGlzIGEgYml0XFxuICAgIGZsb2F0IHZlcnRfc2NhbGUgID0gMC42OyAvLyBXaGlsZSBhZGRpbmcgc29tZSBjb250cmFzdCB0byB0aGUgaG9yaXpvbnRhbCBzdHJva2VzXFxuICAgIGZsb2F0IGhkb2Zmc2V0ICAgID0gbWl4KCBkb2Zmc2V0ICogaG9yel9zY2FsZSwgZG9mZnNldCAqIHZlcnRfc2NhbGUsIHZncmFkICk7XFxuICAgIGZsb2F0IHJlc19kb2Zmc2V0ID0gbWl4KCBkb2Zmc2V0LCBoZG9mZnNldCwgaGludF9hbW91bnQgKTtcXG5cXG4gICAgZmxvYXQgYWxwaGEgICAgICAgPSBzbW9vdGhzdGVwKCAwLjUgLSByZXNfZG9mZnNldCwgMC41ICsgcmVzX2RvZmZzZXQsIHNkZiApO1xcblxcbiAgICAvLyBBZGRpdGlvbmFsIGNvbnRyYXN0XFxuICAgIGFscGhhICAgICAgICAgICAgID0gcG93KCBhbHBoYSwgMS4wICsgMC4yICogdmdyYWQgKiBoaW50X2Ftb3VudCApO1xcblxcbiAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIHN1cHBvcnQgZm9yIEFSQl9ibGVuZF9mdW5jX2V4dGVuZGVkIGluIFdlYkdMLlxcbiAgICAvLyBGb3J0dW5hdGVseSB0aGUgYmFja2dyb3VuZCBpcyBmaWxsZWQgd2l0aCBhIHNvbGlkIGNvbG9yIHNvIHdlIGNhbiBkb1xcbiAgICAvLyB0aGUgYmxlbmRpbmcgaW5zaWRlIHRoZSBzaGFkZXIuXFxuXFxuICAgIC8vIERpc2NhcmRpbmcgcGl4ZWxzIGJleW9uZCBhIHRocmVzaG9sZCB0byBtaW5pbWlzZSBwb3NzaWJsZSBhcnRpZmFjdHMuXFxuICAgIGlmICggYWxwaGEgPCAyMC4wIC8gMjU2LjAgKSBkaXNjYXJkO1xcblxcbiAgICB2ZWMzIGNoYW5uZWxzID0gc3VicGl4ZWwoIGdyYWQueCAqIDAuNSAqIHN1YnBpeGVsX2Ftb3VudCwgYWxwaGEgKSArIDAuMTtcXG5cXG4gICAgLy8gRm9yIHN1YnBpeGVsIHJlbmRlcmluZyB3ZSBoYXZlIHRvIGJsZW5kIGVhY2ggY29sb3IgY2hhbm5lbCBzZXBhcmF0ZWx5XFxuICAgIHZlYzMgcmVzID0gbWl4KCBiZ19jb2xvciwgZm9udF9jb2xvciwgY2hhbm5lbHMgKTtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCggcmVzLCAxLjAgKTtcXG59XFxuXFxuXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL3RleHQvZnJhZy5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG5hdHRyaWJ1dGUgdmVjMiBhVmVydGV4UG9zaXRpb247XFxuXFxudW5pZm9ybSBtYXQzIHRyYW5zbGF0aW9uTWF0cml4O1xcbnVuaWZvcm0gbWF0MyBwcm9qZWN0aW9uTWF0cml4O1xcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuXFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNCgocHJvamVjdGlvbk1hdHJpeCAqIHRyYW5zbGF0aW9uTWF0cml4ICogdmVjMyhhVmVydGV4UG9zaXRpb24gLCAxLjApKS54eSwgMC4wLCAxLjApO1xcblxcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvc2VsZWN0L3ZlcnQuZ2xzbFxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxudW5pZm9ybSB2ZWMzIGJnX2NvbG9yO1xcbnZhcnlpbmcgdmVjMiAgdGMwO1xcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChiZ19jb2xvciwwLjQ1KTtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCgxLjAsIDEuMCwgMS4wLDAuMik7XFxufVxcblxcblxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy9zZWxlY3QvZnJhZy5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9