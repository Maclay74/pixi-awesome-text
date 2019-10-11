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
	    return _new["default"];
	  }
	});
	Object.defineProperty(exports, "Layout", {
	  enumerable: true,
	  get: function get() {
	    return _layout["default"];
	  }
	});
	
	var _renderer = _interopRequireDefault(__webpack_require__(1));
	
	var _new = _interopRequireDefault(__webpack_require__(14));
	
	var _layout = _interopRequireDefault(__webpack_require__(3));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	Object.assign(PIXI.extras, {
	  AwesomeText: _new["default"]
	});
	
	if (typeof PIXI !== 'undefined') {
	  if (PIXI.extras) {
	    PIXI.extras.AwesomeText = _new["default"];
	  } else {
	    PIXI.extras = {
	      AwesomeText: _new["default"]
	    };
	  }
	}

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
	
	PIXI.Renderer.registerPlugin('AwesomeTextRenderer', AwesomeTextRenderer);
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
	function (_PIXI$SimpleMesh) {
	  _inherits(AwesomeText, _PIXI$SimpleMesh);
	
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
	      antialiasing: true,
	      backgroundColor: "#000000"
	    });
	
	    _this.style = new PIXI.TextStyle(style);
	    _this.config = _extends({}, _this.config, config);
	    _this.backgroundColor = _this.config.backgroundColor;
	    _this._text = text; // Content
	
	    _this._font = config.font; // Font information
	
	    _this._texture = config.texture; // Texture with glyphs
	    // Calculate layout
	
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
	        var _e$data$originalEvent = e.data.originalEvent,
	            movementX = _e$data$originalEvent.movementX,
	            movementY = _e$data$originalEvent.movementY;
	        if (movementX === 0 && movementY === 0) return;
	
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
	      p[0], p[1] // left top
	      ];
	      var uvs = [g[0], g[1], // left top
	      g[2], g[1], // right top
	      g[2], g[3], // right bottom,
	      g[0], g[3] // left bottom,
	      ];
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
	}(PIXI.SimpleMesh);
	
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
	      p[0], p[1] // left top
	      ];
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
	      position = this.transformPosition(position);
	      var closestLetter = this.getClosestGlyph(position.x, position.y);
	      var index = this.owner.layout.glyphs.indexOf(closestLetter);
	      this.setRange(index + 1, false);
	    }
	  }, {
	    key: "onMouseMove",
	    value: function onMouseMove(event) {
	      var position = event.data.global;
	      position = this.transformPosition(position);
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
	      position = this.transformPosition(position);
	      var closestLetter = this.getClosestGlyph(position.x, position.y); // -1 means that we at the start of the line
	
	      if (closestLetter === -1) {
	        this.owner.input.glyphIndex = closestLetter;
	      } else {
	        this.owner.input.glyphIndex = this.owner.layout.glyphs.indexOf(closestLetter);
	      }
	    }
	  }, {
	    key: "transformPosition",
	    value: function transformPosition(position) {
	      var ownerPosition = this.owner.getGlobalPosition();
	      var transform = this.owner.worldTransform;
	      position.x -= transform.tx;
	      position.y -= transform.ty;
	      position.x = position.x / transform.a;
	      position.y = position.y / transform.d;
	      return position;
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
	      var glyph = this.layout.glyphs[Math.max(0, this.glyphIndex)]; // If we are on the first line
	
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

	module.exports = "#define GLSLIFY 1\nuniform sampler2D uSampler;\nuniform float hint_amount;\nuniform float subpixel_amount;\n\nuniform vec3 bg_color;\nuniform vec3 font_color;\n\nvarying vec2  tc0;\nvarying float doffset;\nvarying float sdf_texel;\n\n\n/*\n *  Subpixel coverage calculation\n *\n *  v - edge slope    -1.0 to 1.0          triplet\n *  a - pixel coverage 0.0 to 1.0          coverage\n *\n *      |<- glyph edge                      R  G  B\n *  +---+---+                             +--+--+--+\n *  |   |XXX| v = 1.0 (edge facing west)  |  |xx|XX|\n *  |   |XXX| a = 0.5 (50% coverage)      |  |xx|XX|\n *  |   |XXX|                             |  |xx|XX|\n *  +---+---+                             +--+--+--+\n *    pixel                                0  50 100\n *\n *\n *        R   G   B\n *\n *   1.0        +--+   <- top (abs( v ))\n *              |\n *       -+-----+--+-- <- ceil: 100% coverage\n *        |     |XX|\n *   0.0  |  +--+XX|\n *        |  |xx|XX|\n *       -+--+--+--+-- <- floor: 0% coverage\n *           |\n *  -1.0  +--+         <-  -abs(v)\n *        |\n *        |\n *        |\n *  -2.0  +            <- bottom: -abs(v)-1.0\n */\n\nvec3 subpixel( float v, float a ) {\n    float vt      = 0.6 * v; // 1.0 will make your eyes bleed\n    vec3  rgb_max = vec3( -vt, 0.0, vt );\n    float top     = abs( vt );\n    float bottom  = -top - 1.0;\n    float cfloor  = mix( top, bottom, a );\n    vec3  res     = clamp( rgb_max - vec3( cfloor ), 0.0, 1.0 );\n    return res;\n}\n\nvoid main() {\n    gl_FragColor = vec4(1.0, 1.0, 1.0,1.0);\n}\n\nvoid main2(void) {\n\n    // Sampling the texture, L pattern\n    float sdf       = texture2D( uSampler, tc0 ).r;\n    float sdf_north = texture2D( uSampler, tc0 + vec2( 0.0, sdf_texel ) ).r;\n    float sdf_east  = texture2D( uSampler, tc0 + vec2( sdf_texel, 0.0 ) ).r;\n\n    // Estimating stroke direction by the distance field gradient vector\n    vec2  sgrad     = vec2( sdf_east - sdf, sdf_north - sdf );\n    float sgrad_len = max( length( sgrad ), 1.0 / 128.0 );\n    vec2  grad      = sgrad / vec2( sgrad_len );\n    float vgrad = abs( grad.y ); // 0.0 - vertical stroke, 1.0 - horizontal one\n\n    float horz_scale  = 1.1; // Blurring vertical strokes along the X axis a bit\n    float vert_scale  = 0.6; // While adding some contrast to the horizontal strokes\n    float hdoffset    = mix( doffset * horz_scale, doffset * vert_scale, vgrad );\n    float res_doffset = mix( doffset, hdoffset, hint_amount );\n\n    float alpha       = smoothstep( 0.5 - res_doffset, 0.5 + res_doffset, sdf );\n\n    // Additional contrast\n    alpha             = pow( alpha, 1.0 + 0.2 * vgrad * hint_amount );\n\n    // Unfortunately there is no support for ARB_blend_func_extended in WebGL.\n    // Fortunately the background is filled with a solid color so we can do\n    // the blending inside the shader.\n\n    // Discarding pixels beyond a threshold to minimise possible artifacts.\n    if ( alpha < 20.0 / 256.0 ) discard;\n\n    vec3 channels = subpixel( grad.x * 0.5 * subpixel_amount, alpha ) + 0.1;\n\n    // For subpixel rendering we have to blend each color channel separately\n    vec3 res = mix( bg_color, font_color, channels );\n    gl_FragColor = vec4( res, 1.0 );\n}\n\n\n"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\n\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\n\nvoid main(void) {\n\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition , 1.0)).xy, 0.0, 1.0);\n\n}\n"

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nuniform vec3 bg_color;\nvarying vec2  tc0;\n\nvoid main() {\n    gl_FragColor = vec4(bg_color,0.45);\n    gl_FragColor = vec4(1.0, 1.0, 1.0,0.2);\n}\n\n\n"

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
	
	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
	
	var Text =
	/*#__PURE__*/
	function () {
	  function Text() {
	    _classCallCheck(this, Text);
	
	    this.geometry = new PIXI.Geometry().addAttribute('aVertexPosition', // the attribute name
	    [-100, -100, // x, y
	    100, -100, // x, y
	    100, 100], // x, y
	    2) // the size of the attribute
	    .addAttribute('aColor', // the attribute name
	    [1, 0, 0, // r, g, b
	    0, 1, 0, // r, g, b
	    0, 0, 1], // r, g, b
	    3) // the size of the attribute
	    .addAttribute('aUvs', // the attribute name
	    [0, 0, // u, v
	    1, 0, // u, v
	    1, 1], // u, v
	    2); // the size of the attribute
	
	    this.vertexSrc = "\n\n            precision mediump float;\n        \n            attribute vec2 aVertexPosition;\n            attribute vec3 aColor;\n            attribute vec2 aUvs;\n        \n            uniform mat3 translationMatrix;\n            uniform mat3 projectionMatrix;\n        \n            varying vec2 vUvs;\n            varying vec3 vColor;\n        \n            void main() {\n        \n                vUvs = aUvs;\n                vColor = aColor;\n                gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\n        \n            }";
	    this.fragmentSrc = "\n\n            precision mediump float;\n        \n            varying vec3 vColor;\n            varying vec2 vUvs;\n        \n            uniform sampler2D uSampler2;\n        \n            void main() {\n        \n                gl_FragColor = vec4(1.0, 0.0, 1.0, 1.0);\n            }";
	    var uniforms = {
	      uSampler2: PIXI.Texture.from('examples/assets/bg_scene_rotate.jpg')
	    };
	    this.shader = PIXI.Shader.from(this.vertexSrc, this.fragmentSrc, uniforms);
	    this.triangle = new PIXI.Mesh(this.geometry, this.shader);
	    this.triangle.awesomeText = this;
	    return this.triangle;
	  }
	
	  _createClass(Text, [{
	    key: "add",
	    value: function add(container) {
	      container.addChild(this.triangle);
	    }
	  }]);
	
	  return Text;
	}();
	
	var _default = Text;
	exports["default"] = _default;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBmYzY2YTNhYmYyOGFiNTQxNTdiZCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2R0eXBlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYW4tYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvdmVydC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvZnJhZy5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3NlbGVjdC92ZXJ0Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvc2VsZWN0L2ZyYWcuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImFzc2lnbiIsIlBJWEkiLCJleHRyYXMiLCJBd2Vzb21lVGV4dCIsIlRleHQiLCJ2ZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsInNlbGVjdFZlcnRleHRTaGFkZXIiLCJzZWxlY3RGcmFnbWVudFNoYWRlciIsImdsQ29yZSIsIkF3ZXNvbWVUZXh0UmVuZGVyZXIiLCJyZW5kZXJlciIsInRleHRTaGFkZXIiLCJzZWxlY3RTaGFkZXIiLCJnbCIsImdldEV4dGVuc2lvbiIsIlNoYWRlciIsInNvdXJjZSIsImdsRGF0YSIsIl9nbERhdGFzIiwiY29udGV4dFRleHQiLCJiaW5kVmFvIiwiYnVpbGRUZXh0R2xEYXRhIiwidmFvIiwiZGlydHkiLCJ1dkJ1ZmZlciIsInVwbG9hZCIsInV2cyIsImluZGV4RGlydHkiLCJpbmRleEJ1ZmZlciIsImluZGljZXMiLCJ2ZXJ0ZXhCdWZmZXIiLCJ2ZXJ0aWNlcyIsImJpbmRTaGFkZXIiLCJzaGFkZXIiLCJzdGF0ZSIsInNldEJsZW5kTW9kZSIsImJsZW5kTW9kZSIsInVuaWZvcm1zIiwidVNhbXBsZXIiLCJiaW5kVGV4dHVyZSIsInRleHR1cmUiLCJ0cmFuc2xhdGlvbk1hdHJpeCIsIndvcmxkVHJhbnNmb3JtIiwidG9BcnJheSIsImhpbnRfYW1vdW50IiwiY29uZmlnIiwiYW50aWFsaWFzaW5nIiwic2RmTXVsdGlwbGllciIsInNjYWxlIiwic3VicGl4ZWxfYW1vdW50IiwiZm9udF9jb2xvciIsInV0aWxzIiwiaGV4MnJnYiIsInN0eWxlIiwiZmlsbCIsInJlcGxhY2UiLCJiZ19jb2xvciIsImJhY2tncm91bmRDb2xvciIsImRyYXdNb2RlIiwiVFJJQU5HTEVTIiwiZHJhdyIsImxlbmd0aCIsImNvbnRleHRTZWxlY3QiLCJzZWxlY3QiLCJidWlsZFNlbGVjdEdsRGF0YSIsInNlbGVjdENvbG9yIiwic3R5bGVJRCIsInVwZGF0ZSIsInN0YXRlcyIsImVkaXRhYmxlIiwic2VsZWN0aW5nIiwicmVuZGVyU2VsZWN0IiwicmVuZGVyVGV4dCIsIkdMQnVmZmVyIiwiY3JlYXRlVmVydGV4QnVmZmVyIiwiU1RSRUFNX0RSQVciLCJzZGZCdWZmZXIiLCJzZGZTaXplcyIsIlNUQVRJQ19EUkFXIiwiY3JlYXRlSW5kZXhCdWZmZXIiLCJWZXJ0ZXhBcnJheU9iamVjdCIsImFkZEluZGV4IiwiYWRkQXR0cmlidXRlIiwiYXR0cmlidXRlcyIsImFWZXJ0ZXhQb3NpdGlvbiIsIkZMT0FUIiwiYVRleHR1cmVDb29yZCIsImFTZGZTaXplIiwiT2JqZWN0UmVuZGVyZXIiLCJSZW5kZXJlciIsInJlZ2lzdGVyUGx1Z2luIiwiY3JlYXRlSW5kaWNlcyIsInRleHQiLCJyZWd1bGFyIiwidXBwZXJjYXNlIiwibG93ZXJjYXNlIiwiVGV4dFN0eWxlIiwiX3RleHQiLCJfZm9udCIsImZvbnQiLCJfdGV4dHVyZSIsImxheW91dCIsIlRleHRMYXlvdXQiLCJmb250U2l6ZSIsIndyYXBXb3JkcyIsImJyZWFrV29yZHMiLCJ3cmFwcGVyV2lkdGgiLCJ3b3JkV3JhcFdpZHRoIiwiYWxpZ24iLCJsaW5lSGVpZ2h0IiwiaW50ZXJhY3RpdmUiLCJidXR0b25Nb2RlIiwiU2VsZWN0IiwiaW5wdXQiLCJJbnB1dCIsInNldFN0YXRlIiwibWV0cmljcyIsImZvbnRNZXRyaWNzIiwiRmxvYXQzMkFycmF5IiwibGV0dGVyc0NvdW50IiwiYXJyYXlQb3NpdGlvbnMiLCJ2ZXJ0ZXgiLCJzZGYiLCJ3b3Jkc01ldHJpY3MiLCJmb3JFYWNoIiwid29yZCIsIndyaXRlU3RyaW5nIiwieCIsInkiLCJjbG9ja3dpc2UiLCJ0eXBlIiwiY291bnQiLCJuZXdTdGF0ZSIsInZhbHVlcyIsInNldFJlZ3VsYXJTdGF0ZSIsInNldEVkaXRhYmxlU3RhdGUiLCJjdXJyZW50RWRpdGluZ0VsZW1lbnQiLCJvZmYiLCJlbmFibGVkIiwib24iLCJlIiwiY2xpY2tzQ291bnQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsInNldFJhbmdlIiwiaW5wdXRFbGVtZW50IiwiZm9jdXMiLCJvbk1vdXNlRG93biIsInNob3ciLCJkYXRhIiwib3JpZ2luYWxFdmVudCIsIm1vdmVtZW50WCIsIm1vdmVtZW50WSIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwiaW5kZXgiLCJzdHJpbmciLCJzdWJzdHIiLCJuZXdUZXh0Iiwic3BsaXQiLCJzcGxpY2UiLCJqb2luIiwiZm9udF9tZXRyaWNzIiwicG9zIiwicHJldl9jaGFyIiwiY3BvcyIsInhfbWF4IiwiY2FwU2NhbGUiLCJzdHJfcG9zIiwic2NoYXIiLCJmb250X2NoYXIiLCJjaGFycyIsImtlcm4iLCJyZWN0IiwiY2hhclJlY3QiLCJwb3NpdGlvbnMiLCJtYXAiLCJ1diIsInN0cmluZ19wb3MiLCJtb3JlTGluZUdhcCIsImNhcF9oZWlnaHQiLCJ4X2hlaWdodCIsImZvbnRBc2NlbnQiLCJhc2NlbnQiLCJkZXNjZW50IiwibGluZV9nYXAiLCJsb3dTY2FsZSIsIk1hdGgiLCJyb3VuZCIsImxvd2Nhc2UiLCJmbGFncyIsImJhc2VsaW5lIiwiZyIsImJvdHRvbSIsIml5IiwidG9wIiwicm93X2hlaWdodCIsImxlZnQiLCJiZWFyaW5nX3giLCJpeCIsInJpZ2h0IiwicCIsIm5ld19wb3NfeCIsImFkdmFuY2VfeCIsInNkZl9zaXplIiwidmFsdWUiLCJTaW1wbGVNZXNoIiwib3duZXIiLCJzdGFydFkiLCJjYWxjdWxhdGVXb3Jkc1Bvc2l0aW9ucyIsImdseXBocyIsImdldEdseXBocyIsIndpZHRoIiwiaGVpZ2h0IiwiY2hhciIsIndvcmRzIiwiaSIsInN0YXJ0WCIsIndvcmRTaXplIiwiZ2V0U3RyaW5nU2l6ZSIsInB1c2giLCJsaW5lc0NvdW50Iiwid29yZHNPbkxpbmUiLCJmaWx0ZXIiLCJsYXN0V29yZCIsImZyZWVTcGFjZSIsImxlZnRPZmZzZXQiLCJsZXR0ZXIiLCJwb3NpdGlvbiIsInJhbmdlIiwiYnVpbGRWZXJ0aWNlcyIsInN0YXJ0IiwiZW5kIiwibWluIiwiYXBwbHkiLCJtYXgiLCJsZXR0ZXJDb3VudCIsImZpcnN0TGV0dGVyIiwibGFzdExldHRlciIsInN0YXJ0TGluZUxldHRlciIsImVuZExpbmVMZXR0ZXIiLCJvZmZzZXQiLCJzZWxlY3RpbmdMaW5lIiwiZmxvb3IiLCJzZWxlY3RpbmdMaW5lWSIsImxhc3RHbHlwaE9uTGluZSIsImZpcnN0R2x5cGhPbkxpbmUiLCJnbHlwaCIsImV2ZW50IiwiYnV0dG9uIiwiZ2xvYmFsIiwidHJhbnNmb3JtUG9zaXRpb24iLCJjbG9zZXN0TGV0dGVyIiwiZ2V0Q2xvc2VzdEdseXBoIiwiaW5kZXhPZiIsImdseXBoSW5kZXgiLCJvd25lclBvc2l0aW9uIiwiZ2V0R2xvYmFsUG9zaXRpb24iLCJ0cmFuc2Zvcm0iLCJ0eCIsInR5IiwiYSIsImQiLCJyZW1vdmVJbmRleCIsInJlbW92ZUxlbmd0aCIsImFicyIsInJlbW92ZVN0cmluZyIsImRpcmVjdGlvbiIsIl9nbHlwaEluZGV4IiwiX2VuYWJsZWQiLCJlbmFibGUiLCJkaXNhYmxlIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNyZWF0ZUZpZWxkIiwiZGlzcGxheSIsImJvZHkiLCJhcHBlbmQiLCJjb250YWlucyIsInJlbW92ZUNoaWxkIiwib3BhY2l0eSIsImNyZWF0ZUVsZW1lbnQiLCJzbGljZSIsImNvbG9yIiwiYm9yZGVyIiwiY29udGFpbiIsInpJbmRleCIsInBvaW50ZXJFdmVudHMiLCJvdXRsaW5lIiwidHJhbnNmb3JtT3JpZ2luIiwicGFkZGluZyIsImFkZEV2ZW50Iiwib25JbnB1dCIsIm9uS2V5ZG93biIsInBhc3RlRnJvbUNsaXBib2FyZCIsImdseXBoTWV0cmljcyIsImxhc3RHbHlwaCIsInNlbGVjdGVkR2x5cGgiLCJzZXRQb3NpdGlvbiIsImNsZWFyU2VsZWN0ZWRSYW5nZSIsInRhcmdldCIsInRleHRUb0FkZCIsInRvVXBwZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJpbnNlcnRTdHJpbmciLCJrZXkiLCJtb3ZlVXAiLCJtb3ZlRG93biIsImN0cmxLZXkiLCJtb3ZlQnlXb3JkTGVmdCIsInNoaWZ0S2V5IiwibW92ZVdpdGhTZWxlY3RMZWZ0IiwibW92ZUJ5V29yZFJpZ2h0IiwibW92ZVdpdGhTZWxlY3RSaWdodCIsImNvcHlUb0NsaXBib2FyZCIsInNjYWxlWCIsInNjYWxlWSIsImxvY2FsWCIsImxvY2FsWSIsImdldFRyYW5zZm9ybSIsIm93bmVyVHJhbnNmb3JtIiwiY2FudmFzUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImN1dCIsImV4ZWNDb21tYW5kIiwicHJldmVudERlZmF1bHQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImV4cGFuZCIsIm5ld0dseXBoIiwiZ2VvbWV0cnkiLCJHZW9tZXRyeSIsInZlcnRleFNyYyIsImZyYWdtZW50U3JjIiwidVNhbXBsZXIyIiwiVGV4dHVyZSIsImZyb20iLCJ0cmlhbmdsZSIsIk1lc2giLCJhd2Vzb21lVGV4dCIsImNvbnRhaW5lciIsImFkZENoaWxkIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7O0FBQ0E7O0FBQ0E7Ozs7QUFFQUEsT0FBTSxDQUFDQyxNQUFQLENBQWNDLElBQUksQ0FBQ0MsTUFBbkIsRUFBMkI7QUFDekJDLGNBQVcsRUFBRUM7QUFEWSxFQUEzQjs7QUFJQSxLQUFJLE9BQU9ILElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDL0IsT0FBSUEsSUFBSSxDQUFDQyxNQUFULEVBQWlCO0FBQ2ZELFNBQUksQ0FBQ0MsTUFBTCxDQUFZQyxXQUFaLEdBQTBCQyxlQUExQjtBQUNELElBRkQsTUFFTztBQUNMSCxTQUFJLENBQUNDLE1BQUwsR0FBYztBQUFFQyxrQkFBVyxFQUFFQztBQUFmLE1BQWQ7QUFDRDtBQUNGLEU7Ozs7Ozs7Ozs7Ozs7QUNkRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUEsS0FBTUMsWUFBWSxHQUFHLG1CQUFPLENBQUMsRUFBRCxDQUE1Qjs7QUFDQSxLQUFNQyxjQUFjLEdBQUcsbUJBQU8sQ0FBQyxFQUFELENBQTlCOztBQUVBLEtBQU1DLG1CQUFtQixHQUFHLG1CQUFPLENBQUMsRUFBRCxDQUFu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O0FBQ2QsTUFYUSxFQVdMO0FBWEssTUFhWEEsWUFiVyxDQWFFLE1BYkYsRUFhVTtBQUNsQixNQUFDLENBQUQsRUFBSSxDQUFKLEVBQU87QUFDSCxNQURKLEVBQ08sQ0FEUCxFQUNVO0FBQ04sTUFGSixFQUVPLENBRlAsQ0FkUSxFQWdCRztBQUNYLE1BakJRLENBQWhCLENBRFUsQ0FrQkU7O0FBR1osVUFBSzhQLFNBQUw7QUFzQkEsVUFBS0MsV0FBTDtBQWNBLFNBQU01UyxRQUFRLEdBQUc7QUFBQzZTLGdCQUFTLEVBQUVsVixJQUFJLENBQUNtVixPQUFMLENBQWFDLElBQWIsQ0FBa0IscUNBQWxCO0FBQVosTUFBakI7QUFDQSxVQUFLblQsTUFBTCxHQUFjakMsSUFBSSxDQUFDZSxNQUFMLENBQVlxVSxJQUFaLENBQWlCLEtBQUtKLFNBQXRCLEVBQWlDLEtBQUtDLFdBQXRDLEVBQW1ENVMsUUFBbkQsQ0FBZDtBQUNBLFVBQUtnVCxRQUFMLEdBQWdCLElBQUlyVixJQUFJLENBQUNzVixJQUFULENBQWMsS0FBS1IsUUFBbkIsRUFBNkIsS0FBSzdTLE1BQWxDLENBQWhCO0FBRUEsVUFBS29ULFFBQUwsQ0FBY0UsV0FBZCxHQUE0QixJQUE1QjtBQUVBLFlBQU8sS0FBS0YsUUFBWjtBQUNIOzs7O3lCQUVHRyxTLEVBQVc7QUFDWEEsZ0JBQVMsQ0FBQ0MsUUFBVixDQUFtQixLQUFLSixRQUF4QjtBQUNIOzs7Ozs7Z0JBSVVsVixJIiwiZmlsZSI6InBpeGktYXdlc29tZS10ZXh0Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkF3ZXNvbWVUZXh0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkF3ZXNvbWVUZXh0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGZjNjZhM2FiZjI4YWI1NDE1N2JkIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL3JlbmRlcmVyXCI7XHJcbmltcG9ydCBUZXh0IGZyb20gXCIuL25ld1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2xheW91dFwiO1xyXG5cclxuT2JqZWN0LmFzc2lnbihQSVhJLmV4dHJhcywge1xyXG4gIEF3ZXNvbWVUZXh0OiBUZXh0XHJcbn0pO1xyXG5cclxuaWYgKHR5cGVvZiBQSVhJICE9PSAndW5kZWZpbmVkJykge1xyXG4gIGlmIChQSVhJLmV4dHJhcykge1xyXG4gICAgUElYSS5leHRyYXMuQXdlc29tZVRleHQgPSBUZXh0O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBQSVhJLmV4dHJhcyA9IHsgQXdlc29tZVRleHQ6IFRleHR9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBUZXh0LFxyXG4gIFJlbmRlcmVyLFxyXG4gIExheW91dFxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgQXdlc29tZVRleHQgZnJvbSBcIi4vdGV4dFwiO1xyXG5cclxuY29uc3QgdmVydGV4U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy90ZXh0L3ZlcnQuZ2xzbFwiKTtcclxuY29uc3QgZnJhZ21lbnRTaGFkZXIgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3RleHQvZnJhZy5nbHNsXCIpO1xyXG5cclxuY29uc3Qgc2VsZWN0VmVydGV4dFNoYWRlciA9IHJlcXVpcmUoXCIuL3NoYWRlcnMvc2VsZWN0L3ZlcnQuZ2xzbFwiKTtcclxuY29uc3Qgc2VsZWN0RnJhZ21lbnRTaGFkZXIgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3NlbGVjdC9mcmFnLmdsc2xcIik7XHJcblxyXG5jb25zdCBnbENvcmUgPSBQSVhJLmdsQ29yZTtcclxuXHJcbmNsYXNzIEF3ZXNvbWVUZXh0UmVuZGVyZXIgZXh0ZW5kcyBQSVhJLk9iamVjdFJlbmRlcmVyIHtcclxuXHJcbiAgc3RhdGljIGNvbnRleHRUZXh0ID0gMDtcclxuICBzdGF0aWMgY29udGV4dFNlbGVjdCA9IDE7XHJcblxyXG4gIHNlbGVjdENvbG9yID0gMHhGRkIzQzM7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xyXG4gICAgc3VwZXIocmVuZGVyZXIpO1xyXG4gICAgdGhpcy50ZXh0U2hhZGVyID0gbnVsbDtcclxuICAgIHRoaXMuc2VsZWN0U2hhZGVyID0gbnVsbDtcclxuXHJcbiAgfVxyXG5cclxuICBvbkNvbnRleHRDaGFuZ2UoKSB7XHJcbiAgICBjb25zdCBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XHJcbiAgICBnbC5nZXRFeHRlbnNpb24oXCJPRVNfc3RhbmRhcmRfZGVyaXZhdGl2ZXNcIik7XHJcbiAgICB0aGlzLnRleHRTaGFkZXIgPSBuZXcgUElYSS5TaGFkZXIoZ2wsIHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xyXG4gICAgdGhpcy5zZWxlY3RTaGFkZXIgPSBuZXcgUElYSS5TaGFkZXIoZ2wsIHNlbGVjdFZlcnRleHRTaGFkZXIsIHNlbGVjdEZyYWdtZW50U2hhZGVyKTtcclxuICB9XHJcblxyXG4gIHJlbmRlclRleHQoc291cmNlKSB7XHJcblxyXG4gICAgbGV0IGdsRGF0YSA9IHNvdXJjZS5fZ2xEYXRhc1tBd2Vzb21lVGV4dFJlbmRlcmVyLmNvbnRleHRUZXh0XTtcclxuXHJcbiAgICBpZiAoIWdsRGF0YSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmJpbmRWYW8obnVsbCk7XHJcbiAgICAgIGdsRGF0YSA9IHRoaXMuYnVpbGRUZXh0R2xEYXRhKHNvdXJjZSwgdGhpcy5yZW5kZXJlci5nbCk7XHJcbiAgICAgIHNvdXJjZS5fZ2xEYXRhc1tBd2Vzb21lVGV4dFJlbmRlcmVyLmNvbnRleHRUZXh0XSA9IGdsRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLmJpbmRWYW8oZ2xEYXRhLnZhbyk7XHJcblxyXG4gICAgaWYgKHNvdXJjZS5kaXJ0eSkge1xyXG4gICAgICBzb3VyY2UuZGlydHkgPSBmYWxzZTtcclxuICAgICAgZ2xEYXRhLnV2QnVmZmVyLnVwbG9hZChzb3VyY2UudXZzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc291cmNlLmluZGV4RGlydHkpIHtcclxuICAgICAgc291cmNlLmluZGV4RGlydHkgPSBmYWxzZTtcclxuICAgICAgZ2xEYXRhLmluZGV4QnVmZmVyLnVwbG9hZChzb3VyY2UuaW5kaWNlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2xEYXRhLnZlcnRleEJ1ZmZlci51cGxvYWQoc291cmNlLnZlcnRpY2VzKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYmluZFNoYWRlcihnbERhdGEuc2hhZGVyKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLnN0YXRlLnNldEJsZW5kTW9kZShzb3VyY2UuYmxlbmRNb2RlKTtcclxuXHJcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnVTYW1wbGVyID0gdGhpcy5yZW5kZXJlci5iaW5kVGV4dHVyZShzb3VyY2UudGV4dHVyZSk7XHJcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnRyYW5zbGF0aW9uTWF0cml4ID0gc291cmNlLndvcmxkVHJhbnNmb3JtLnRvQXJyYXkodHJ1ZSk7XHJcblxyXG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5oaW50X2Ftb3VudCA9IHNvdXJjZS5jb25maWcuYW50aWFsaWFzaW5nICogMTtcclxuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuc2RmTXVsdGlwbGllciA9IEF3ZXNvbWVUZXh0LnNjYWxlO1xyXG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5zdWJwaXhlbF9hbW91bnQgPSBzb3VyY2UuY29uZmlnLmFudGlhbGlhc2luZyAqIDE7XHJcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmZvbnRfY29sb3IgPSBQSVhJLnV0aWxzLmhleDJyZ2Ioc291cmNlLnN0eWxlLmZpbGwucmVwbGFjZShcIiNcIiwgXCIweFwiKSk7XHJcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmJnX2NvbG9yID0gUElYSS51dGlscy5oZXgycmdiKHNvdXJjZS5iYWNrZ3JvdW5kQ29sb3IucmVwbGFjZShcIiNcIiwgXCIweFwiKSk7XHJcblxyXG4gICAgY29uc3QgZHJhd01vZGUgPSBzb3VyY2UuZHJhd01vZGUgPSB0aGlzLnJlbmRlcmVyLmdsLlRSSUFOR0xFUztcclxuICAgIGdsRGF0YS52YW8uZHJhdyhkcmF3TW9kZSwgc291cmNlLmluZGljZXMubGVuZ3RoLCAwKTtcclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXJTZWxlY3Qoc291cmNlKSB7XHJcbiAgICBsZXQgZ2xEYXRhID0gc291cmNlLl9nbERhdGFzW0F3ZXNvbWVUZXh0UmVuZGVyZXIuY29udGV4dFNlbGVjdF07XHJcblxyXG4gICAgaWYgKCFnbERhdGEgfHwgc291cmNlLnNlbGVjdC5kaXJ0eSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmJpbmRWYW8obnVsbCk7XHJcbiAgICAgIGdsRGF0YSA9IHRoaXMuYnVpbGRTZWxlY3RHbERhdGEoc291cmNlLCB0aGlzLnJlbmRlcmVyLmdsKTtcclxuICAgICAgc291cmNlLl9nbERhdGFzW0F3ZXNvbWVUZXh0UmVuZGVyZXIuY29udGV4dFNlbGVjdF0gPSBnbERhdGE7XHJcbiAgICAgIHNvdXJjZS5zZWxlY3QuZGlydHkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLmJpbmRWYW8oZ2xEYXRhLnZhbyk7XHJcblxyXG4gICAgaWYgKHNvdXJjZS5zZWxlY3QuaW5kZXhEaXJ0eSkge1xyXG4gICAgICBzb3VyY2Uuc2VsZWN0LmluZGV4RGlydHkgPSBmYWxzZTtcclxuICAgICAgZ2xEYXRhLmluZGV4QnVmZmVyLnVwbG9hZChzb3VyY2Uuc2VsZWN0LmluZGljZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdsRGF0YS52ZXJ0ZXhCdWZmZXIudXBsb2FkKHNvdXJjZS5zZWxlY3QudmVydGljZXMpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5iaW5kU2hhZGVyKGdsRGF0YS5zaGFkZXIpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuc3RhdGUuc2V0QmxlbmRNb2RlKDE3KTtcclxuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMudHJhbnNsYXRpb25NYXRyaXggPSBzb3VyY2Uud29ybGRUcmFuc2Zvcm0udG9BcnJheSh0cnVlKTtcclxuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuYmdfY29sb3IgPSBQSVhJLnV0aWxzLmhleDJyZ2IodGhpcy5zZWxlY3RDb2xvcik7XHJcblxyXG4gICAgY29uc3QgZHJhd01vZGUgPSBzb3VyY2UuZHJhd01vZGUgPSB0aGlzLnJlbmRlcmVyLmdsLlRSSUFOR0xFUztcclxuICAgIGdsRGF0YS52YW8uZHJhdyhkcmF3TW9kZSwgc291cmNlLnNlbGVjdC5pbmRpY2VzLmxlbmd0aCwgMCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoc291cmNlKSB7XHJcblxyXG4gICAgaWYgKHNvdXJjZS5zdHlsZUlEICE9PSBzb3VyY2Uuc3R5bGUuc3R5bGVJRCkge1xyXG4gICAgICBzb3VyY2UudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNvdXJjZS5zdGF0ZSA9PT0gQXdlc29tZVRleHQuc3RhdGVzLmVkaXRhYmxlIHx8IHNvdXJjZS5zdGF0ZSA9PT0gQXdlc29tZVRleHQuc3RhdGVzLnNlbGVjdGluZykge1xyXG4gICAgICB0aGlzLnJlbmRlclNlbGVjdChzb3VyY2UpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXJUZXh0KHNvdXJjZSk7XHJcbiAgfVxyXG5cclxuICBidWlsZFRleHRHbERhdGEoc291cmNlLCBnbCkge1xyXG5cclxuICAgIGNvbnN0IGdsRGF0YSA9IHtcclxuICAgICAgc2hhZGVyOiB0aGlzLnRleHRTaGFkZXIsXHJcbiAgICAgIHZlcnRleEJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgc291cmNlLnZlcnRpY2VzLCBnbC5TVFJFQU1fRFJBVyksXHJcbiAgICAgIHV2QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlVmVydGV4QnVmZmVyKGdsLCBzb3VyY2UudXZzLCBnbC5TVFJFQU1fRFJBVyksXHJcbiAgICAgIHNkZkJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgc291cmNlLnNkZlNpemVzLCBnbC5TVEFUSUNfRFJBVyksXHJcbiAgICAgIGluZGV4QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlSW5kZXhCdWZmZXIoZ2wsIHNvdXJjZS5pbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyksXHJcbiAgICAgIC8vIGJ1aWxkIHRoZSB2YW8gb2JqZWN0IHRoYXQgd2lsbCByZW5kZXIuLlxyXG4gICAgICB2YW86IG51bGwsXHJcbiAgICAgIGRpcnR5OiBzb3VyY2UuZGlydHksXHJcbiAgICAgIGluZGV4RGlydHk6IHNvdXJjZS5pbmRleERpcnR5LFxyXG4gICAgfTtcclxuXHJcbiAgICBnbERhdGEudmFvID0gbmV3IGdsQ29yZS5WZXJ0ZXhBcnJheU9iamVjdChnbClcclxuICAgICAgLmFkZEluZGV4KGdsRGF0YS5pbmRleEJ1ZmZlcilcclxuICAgICAgLmFkZEF0dHJpYnV0ZShnbERhdGEudmVydGV4QnVmZmVyLCBnbERhdGEuc2hhZGVyLmF0dHJpYnV0ZXMuYVZlcnRleFBvc2l0aW9uLCBnbC5GTE9BVCwgZmFsc2UsIDIgKiA0LCAwKVxyXG4gICAgICAuYWRkQXR0cmlidXRlKGdsRGF0YS51dkJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFUZXh0dXJlQ29vcmQsIGdsLkZMT0FULCBmYWxzZSwgMiAqIDQsIDApXHJcbiAgICAgIC5hZGRBdHRyaWJ1dGUoZ2xEYXRhLnNkZkJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFTZGZTaXplLCBnbC5GTE9BVCwgZmFsc2UsIDQsIDApO1xyXG5cclxuICAgIHJldHVybiBnbERhdGFcclxuICB9XHJcblxyXG4gIGJ1aWxkU2VsZWN0R2xEYXRhKHNvdXJjZSwgZ2wpIHtcclxuICAgIGNvbnN0IGdsRGF0YSA9IHtcclxuICAgICAgc2hhZGVyOiB0aGlzLnNlbGVjdFNoYWRlcixcclxuICAgICAgdmVydGV4QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlVmVydGV4QnVmZmVyKGdsLCBzb3VyY2Uuc2VsZWN0LnZlcnRpY2VzLCBnbC5TVFJFQU1fRFJBVyksXHJcbiAgICAgIGluZGV4QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlSW5kZXhCdWZmZXIoZ2wsIHNvdXJjZS5zZWxlY3QuaW5kaWNlcywgZ2wuU1RBVElDX0RSQVcpLFxyXG4gICAgICB2YW86IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgZ2xEYXRhLnZhbyA9IG5ldyBnbENvcmUuVmVydGV4QXJyYXlPYmplY3QoZ2wpXHJcbiAgICAgIC5hZGRJbmRleChnbERhdGEuaW5kZXhCdWZmZXIpXHJcbiAgICAgIC5hZGRBdHRyaWJ1dGUoZ2xEYXRhLnZlcnRleEJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFWZXJ0ZXhQb3NpdGlvbiwgZ2wuRkxPQVQsIGZhbHNlLCAyICogNCwgMClcclxuXHJcbiAgICByZXR1cm4gZ2xEYXRhXHJcbiAgfVxyXG5cclxufVxyXG5cclxuUElYSS5SZW5kZXJlci5yZWdpc3RlclBsdWdpbignQXdlc29tZVRleHRSZW5kZXJlcicsIEF3ZXNvbWVUZXh0UmVuZGVyZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXdlc29tZVRleHRSZW5kZXJlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyZXIuanMiLCJjb25zdCBjcmVhdGVJbmRpY2VzID0gcmVxdWlyZShcInF1YWQtaW5kaWNlc1wiKVxyXG5pbXBvcnQgVGV4dExheW91dCBmcm9tICcuL2xheW91dCc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9zZWxlY3QnXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0J1xyXG5cclxuY2xhc3MgQXdlc29tZVRleHQgZXh0ZW5kcyBQSVhJLlNpbXBsZU1lc2gge1xyXG5cclxuICBzdGF0aWMgc2NhbGUgPSAxLjA7XHJcbiAgc3RhdGljIHN0YXRlcyA9IHtyZWd1bGFyOiAwLCBlZGl0YWJsZTogMSwgc2VsZWN0aW5nOiAyfTtcclxuICBzdGF0aWMgY3VycmVudEVkaXRpbmdFbGVtZW50ID0gbnVsbDtcclxuXHJcbiAgcGx1Z2luTmFtZSA9ICdBd2Vzb21lVGV4dFJlbmRlcmVyJztcclxuICBzdGF0ZSA9IEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyO1xyXG4gIGNsaWNrc0NvdW50ID0gMDtcclxuXHJcbiAgY29uZmlnID0ge1xyXG4gICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgdXBwZXJjYXNlOiBmYWxzZSxcclxuICAgIGxvd2VyY2FzZTogZmFsc2UsXHJcbiAgICBhbnRpYWxpYXNpbmc6IHRydWUsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMDAwMFwiXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IodGV4dCwgc3R5bGUsIGNvbmZpZykge1xyXG4gICAgc3VwZXIoY29uZmlnLnRleHR1cmUpO1xyXG5cclxuICAgIHRoaXMuc3R5bGUgPSBuZXcgUElYSS5UZXh0U3R5bGUoc3R5bGUpO1xyXG4gICAgdGhpcy5jb25maWcgPSB7Li4udGhpcy5jb25maWcsIC4uLmNvbmZpZ307XHJcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29uZmlnLmJhY2tncm91bmRDb2xvcjtcclxuICAgIHRoaXMuX3RleHQgPSB0ZXh0OyAvLyBDb250ZW50XHJcbiAgICB0aGlzLl9mb250ID0gY29uZmlnLmZvbnQ7IC8vIEZvbnQgaW5mb3JtYXRpb25cclxuICAgIHRoaXMuX3RleHR1cmUgPSBjb25maWcudGV4dHVyZTsgLy8gVGV4dHVyZSB3aXRoIGdseXBoc1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBsYXlvdXRcclxuICAgIHRoaXMubGF5b3V0ID0gbmV3IFRleHRMYXlvdXQodGhpcywge1xyXG4gICAgICBmb250U2l6ZTogdGhpcy5zdHlsZS5mb250U2l6ZSxcclxuICAgICAgd3JhcFdvcmRzOiB0aGlzLnN0eWxlLmJyZWFrV29yZHMsXHJcbiAgICAgIHdyYXBwZXJXaWR0aDogdGhpcy5zdHlsZS53b3JkV3JhcFdpZHRoLFxyXG4gICAgICBhbGlnbjogdGhpcy5zdHlsZS5hbGlnbixcclxuICAgICAgbGluZUhlaWdodDogdGhpcy5zdHlsZS5saW5lSGVpZ2h0LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuY29uZmlnLmVkaXRhYmxlKSB7XHJcbiAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5zZWxlY3QgPSBuZXcgU2VsZWN0KHRoaXMpO1xyXG4gICAgICB0aGlzLmlucHV0ID0gbmV3IElucHV0KHRoaXMpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMuZm9udE1ldHJpY3ModGhpcy5zdHlsZS5mb250U2l6ZSwgMC4wKTtcclxuXHJcbiAgICB0aGlzLmxheW91dC51cGRhdGUoKTtcclxuXHJcbiAgICBpZiAodGhpcy5jb25maWcuZWRpdGFibGUpIHtcclxuICAgICAgdGhpcy5zZWxlY3QudXBkYXRlKCk7XHJcbiAgICAgIHRoaXMuaW5wdXQudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXJyYXlzIGZvciB2ZXJ0aWNlcywgdXZzIGFuZCBzZGZcclxuICAgIHRoaXMudmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubGF5b3V0LmxldHRlcnNDb3VudCAqIDQgKiAyKTtcclxuICAgIHRoaXMudXZzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0ICogMik7XHJcbiAgICB0aGlzLnNkZlNpemVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0KTtcclxuICAgIHRoaXMuYXJyYXlQb3NpdGlvbnMgPSB7IHZlcnRleDogMCwgdXZzOiAwLCBzZGY6IDAgfTtcclxuXHJcbiAgICAvLyBGaWxsIGFycmF5cyB3b3JkIGJ5IHdvcmRcclxuICAgIHRoaXMubGF5b3V0LndvcmRzTWV0cmljcy5mb3JFYWNoICh3b3JkID0+IHtcclxuICAgICAgdGhpcy53cml0ZVN0cmluZyh3b3JkLndvcmQsIHRoaXMuZm9udCwgdGhpcy5tZXRyaWNzLCBbd29yZC54LCB3b3JkLnldKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFByZXBhcmUgaW5kaWNlc1xyXG4gICAgdGhpcy5pbmRpY2VzID0gY3JlYXRlSW5kaWNlcyh7XHJcbiAgICAgIGNsb2Nrd2lzZTogdHJ1ZSxcclxuICAgICAgdHlwZTogJ3VpbnQxNicsXHJcbiAgICAgIGNvdW50OiB0aGlzLmxheW91dC5sZXR0ZXJzQ291bnRcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc3R5bGVJRCA9IHRoaXMuc3R5bGUuc3R5bGVJRDtcclxuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgdGhpcy5pbmRleERpcnR5ID0gdHJ1ZTtcclxuICAgIHRoaXMuX2dsRGF0YXMgPSBbXTtcclxuICB9XHJcblxyXG4gIHNldFN0YXRlKG5ld1N0YXRlKSB7XHJcblxyXG4gICAgaWYgKCF0aGlzLmNvbmZpZy5lZGl0YWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBzdGF0ZXMgfSA9IEF3ZXNvbWVUZXh0O1xyXG5cclxuICAgIGlmICghbmV3U3RhdGUgaW4gT2JqZWN0LnZhbHVlcyhzdGF0ZXMpKSByZXR1cm47XHJcblxyXG4gICAgc3dpdGNoIChuZXdTdGF0ZSkge1xyXG4gICAgICBjYXNlIHN0YXRlcy5yZWd1bGFyOlxyXG4gICAgICAgIHRoaXMuc2V0UmVndWxhclN0YXRlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2Ugc3RhdGVzLmVkaXRhYmxlOlxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBBd2Vzb21lVGV4dC5zdGF0ZXMucmVndWxhcikge1xyXG4gICAgICAgICAgdGhpcy5zZXRFZGl0YWJsZVN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RhdGUgPSBuZXdTdGF0ZTtcclxuICB9XHJcblxyXG4gIGdldCB0ZXh0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XHJcbiAgfVxyXG5cclxuICBzZXQgdGV4dCh2YWx1ZSkge1xyXG4gICAgdGhpcy5fdGV4dCA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIHNldFJlZ3VsYXJTdGF0ZSgpIHtcclxuXHJcbiAgICBBd2Vzb21lVGV4dC5jdXJyZW50RWRpdGluZ0VsZW1lbnQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMub2ZmKFwibW91c2Vkb3duXCIpO1xyXG4gICAgdGhpcy5vZmYoXCJtb3VzZW1vdmVcIik7XHJcbiAgICB0aGlzLm9mZihcIm1vdXNldXBcIik7XHJcbiAgICB0aGlzLm9mZihcIm1vdXNldXBvdXRzaWRlXCIpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQuZW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMub24oXCJjbGlja1wiLCBlID0+IHtcclxuICAgICAgaWYgKHRoaXMuY2xpY2tzQ291bnQgPT09IDEpIHtcclxuICAgICAgICB0aGlzLmNsaWNrc0NvdW50ID0gMDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5lZGl0YWJsZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmNsaWNrc0NvdW50ID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5jbGlja3NDb3VudCsrO1xyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuY2xpY2tzQ291bnQgPSAwO1xyXG4gICAgICAgIH0sIDMwMClcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgfVxyXG5cclxuICBzZXRFZGl0YWJsZVN0YXRlKCkge1xyXG5cclxuICAgIC8vIERpc2FibGUgcHJldmlvdXNseSBlbmFibGVkIGZpZWxkXHJcbiAgICBpZiAoQXdlc29tZVRleHQuY3VycmVudEVkaXRpbmdFbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgQXdlc29tZVRleHQuY3VycmVudEVkaXRpbmdFbGVtZW50LnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyKTtcclxuICAgIH1cclxuICAgIEF3ZXNvbWVUZXh0LmN1cnJlbnRFZGl0aW5nRWxlbWVudCA9IHRoaXM7XHJcblxyXG4gICAgLy8gRGlzYWJsZSB1bm5lY2Vzc2FyeSBldmVudHNcclxuICAgIHRoaXMub2ZmKFwiY2xpY2tcIik7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5lbmFibGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuaW5wdXQuaGlkZSgpO1xyXG5cclxuICAgIC8vIFNlbGVjdCBhbGwgY2hhcmFjdGVyc1xyXG4gICAgdGhpcy5zZWxlY3Quc2V0UmFuZ2UoMCx0aGlzLnRleHQubGVuZ3RoIC0gMSk7XHJcbiAgICB0aGlzLmlucHV0LmlucHV0RWxlbWVudC5mb2N1cygpO1xyXG5cclxuICAgIHRoaXMub24oXCJtb3VzZWRvd25cIiwgZSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLnNlbGVjdGluZyk7XHJcbiAgICAgIHRoaXMuc2VsZWN0Lm9uTW91c2VEb3duKGUpO1xyXG4gICAgICB0aGlzLmlucHV0LnNob3coKTtcclxuICAgICAgdGhpcy5pbnB1dC51cGRhdGUoZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm9uKFwibW91c2Vtb3ZlXCIsIGUgPT4ge1xyXG4gICAgICBjb25zdCB7bW92ZW1lbnRYLCBtb3ZlbWVudFl9ID0gZS5kYXRhLm9yaWdpbmFsRXZlbnQ7XHJcbiAgICAgIGlmIChtb3ZlbWVudFggPT09IDAgJiYgbW92ZW1lbnRZID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQXdlc29tZVRleHQuc3RhdGVzLnNlbGVjdGluZykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Lm9uTW91c2VNb3ZlKGUpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQuaGlkZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm9uKFwibW91c2V1cFwiLCBlID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShBd2Vzb21lVGV4dC5zdGF0ZXMuZWRpdGFibGUpO1xyXG4gICAgICB0aGlzLnNlbGVjdC5vbk1vdXNlVXAoZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm9uKFwibW91c2V1cG91dHNpZGVcIiwgZSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLmVkaXRhYmxlKTtcclxuICAgICAgdGhpcy5zZWxlY3Qub25Nb3VzZVVwKGUpO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgaW5zZXJ0U3RyaW5nKGluZGV4LCBzdHJpbmcpIHtcclxuICAgIHRoaXMudGV4dCA9IHRoaXMudGV4dC5zdWJzdHIoMCwgaW5kZXgpICsgc3RyaW5nICsgdGhpcy50ZXh0LnN1YnN0cihpbmRleCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVTdHJpbmcoaW5kZXgsIGxlbmd0aCkge1xyXG4gICAgbGV0IG5ld1RleHQgPSB0aGlzLnRleHQuc3BsaXQoXCJcIik7XHJcbiAgICBuZXdUZXh0LnNwbGljZShpbmRleCwgbGVuZ3RoICsgMSk7XHJcbiAgICB0aGlzLnRleHQgPSBuZXdUZXh0LmpvaW4oXCJcIik7XHJcbiAgfVxyXG5cclxuICBnZXQgdGV4dHVyZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl90ZXh0dXJlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZvbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9udFxyXG4gIH1cclxuXHJcbiAgd3JpdGVTdHJpbmcoIHN0cmluZywgZm9udCwgZm9udF9tZXRyaWNzLCBwb3MpIHtcclxuICAgIGxldCBwcmV2X2NoYXIgPSBcIiBcIjsgIC8vIFVzZWQgdG8gY2FsY3VsYXRlIGtlcm5pbmdcclxuICAgIGxldCBjcG9zICAgICAgPSBwb3M7ICAvLyBDdXJyZW50IHBlbiBwb3NpdGlvblxyXG4gICAgbGV0IHhfbWF4ICAgICA9IDAuMDsgIC8vIE1heCB3aWR0aCAtIHVzZWQgZm9yIGJvdW5kaW5nIGJveFxyXG4gICAgbGV0IHNjYWxlICAgICA9IGZvbnRfbWV0cmljcy5jYXBTY2FsZTtcclxuXHJcbiAgICBsZXQgc3RyX3BvcyA9IDA7XHJcblxyXG4gICAgZm9yKDs7KSB7XHJcbiAgICAgIGlmICggc3RyX3BvcyA9PT0gc3RyaW5nLmxlbmd0aCApIGJyZWFrO1xyXG5cclxuICAgICAgdmFyIHNjaGFyID0gc3RyaW5nWyBzdHJfcG9zIF07XHJcbiAgICAgIHN0cl9wb3MrKztcclxuXHJcbiAgICAgIGlmICggc2NoYXIgPT09IFwiXFxuXCIgKSB7XHJcbiAgICAgICAgaWYgKCBjcG9zWzBdID4geF9tYXggKSB4X21heCA9IGNwb3NbMF07IC8vIEV4cGFuZGluZyB0aGUgYm91bmRpbmcgcmVjdFxyXG4gICAgICAgIGNwb3NbMF0gID0gcG9zWzBdO1xyXG4gICAgICAgIGNwb3NbMV0gLT0gZm9udF9tZXRyaWNzLmxpbmVIZWlnaHQ7XHJcbiAgICAgICAgcHJldl9jaGFyID0gXCIgXCI7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICggc2NoYXIgPT09IFwiIFwiICkge1xyXG4gICAgICAgIC8vc2NoYXIgPSBcIl9cIlxyXG4gICAgICAgIC8vY3Bvc1swXSArPSBmb250LnNwYWNlX2FkdmFuY2UgKiBzY2FsZTtcclxuICAgICAgICAvL3ByZXZfY2hhciA9IFwiIFwiO1xyXG4gICAgICAgIC8vY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBmb250X2NoYXIgPSBmb250LmNoYXJzWyBzY2hhciBdO1xyXG4gICAgICBpZiAoICFmb250X2NoYXIgKSB7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1YnN0aXR1dGluZyB1bmF2YWlsYWJsZSBjaGFyYWN0ZXJzIHdpdGggJz8nXHJcbiAgICAgICAgc2NoYXIgPSBcIj9cIjtcclxuICAgICAgICBmb250X2NoYXIgPSBmb250LmNoYXJzWyBcIj9cIiBdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIga2VybiA9IGZvbnQua2VyblsgcHJldl9jaGFyICsgc2NoYXIgXTtcclxuICAgICAgaWYgKCAha2VybiApIGtlcm4gPSAwLjA7XHJcblxyXG4gICAgICAvLyBjYWxjdWxhdGluZyB0aGUgZ2x5cGggcmVjdGFuZ2xlIGFuZCBjb3B5aW5nIGl0IHRvIHRoZSB2ZXJ0ZXggYXJyYXlcclxuICAgICAgdmFyIHJlY3QgPSB0aGlzLmNoYXJSZWN0KCBjcG9zLCBmb250LCBmb250X21ldHJpY3MsIGZvbnRfY2hhciwga2VybiApO1xyXG5cclxuICAgICAgcmVjdC5wb3NpdGlvbnMubWFwKChwb3MpID0+IHRoaXMudmVydGljZXNbIHRoaXMuYXJyYXlQb3NpdGlvbnMudmVydGV4KysgXSA9IHBvcyApO1xyXG4gICAgICByZWN0LnV2cy5tYXAoKHV2KSA9PiB0aGlzLnV2c1sgdGhpcy5hcnJheVBvc2l0aW9ucy51dnMrKyBdID0gdXYgKTtcclxuICAgICAgcmVjdC5zZGZTaXplcy5tYXAoKHNkZikgPT4gdGhpcy5zZGZTaXplc1sgdGhpcy5hcnJheVBvc2l0aW9ucy5zZGYrKyBdID0gc2RmICk7XHJcblxyXG4gICAgICBwcmV2X2NoYXIgPSBzY2hhcjtcclxuICAgICAgY3BvcyA9IHJlY3QucG9zO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlY3QgOiBbIHBvc1swXSwgcG9zWzFdLCB4X21heCAtIHBvc1swXSwgcG9zWzFdIC0gY3Bvc1sxXSArIGZvbnRfbWV0cmljcy5saW5lSGVpZ2h0IF0sXHJcbiAgICAgIHN0cmluZ19wb3MgOiBzdHJfcG9zLFxyXG4gICAgICAvL2FycmF5X3BvcyA6IGFycmF5X3Bvc1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGZvbnRNZXRyaWNzKGZvbnRTaXplLCBtb3JlTGluZUdhcCA9IDAuMikge1xyXG5cclxuICAgIGNvbnN0IHtjYXBfaGVpZ2h0LCB4X2hlaWdodCwgYXNjZW50OiBmb250QXNjZW50ICwgZGVzY2VudCwgbGluZV9nYXB9ID0gdGhpcy5mb250O1xyXG5cclxuICAgIGNvbnN0IGNhcFNjYWxlID0gdGhpcy5zdHlsZS5mb250U2l6ZSAvIGNhcF9oZWlnaHQ7XHJcbiAgICBjb25zdCBsb3dTY2FsZSA9IE1hdGgucm91bmQoIHhfaGVpZ2h0ICogY2FwU2NhbGUgKSAvIHhfaGVpZ2h0O1xyXG4gICAgY29uc3QgYXNjZW50ID0gTWF0aC5yb3VuZCggZm9udEFzY2VudCAqIGNhcFNjYWxlICk7XHJcbiAgICBsZXQgbGluZUhlaWdodCA9IE1hdGgucm91bmQoIGNhcFNjYWxlICogKCBmb250QXNjZW50ICsgZGVzY2VudCArIGxpbmVfZ2FwICkgKyBtb3JlTGluZUdhcCk7XHJcblxyXG4gICAgaWYgKHRoaXMuc3R5bGUubGluZUhlaWdodCA+IDApXHJcbiAgICAgIGxpbmVIZWlnaHQgPSB0aGlzLnN0eWxlLmxpbmVIZWlnaHQ7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMuc3R5bGUubGluZUhlaWdodCA9IGxpbmVIZWlnaHQ7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2FwU2NhbGUgICA6IGNhcFNjYWxlLFxyXG4gICAgICBsb3dTY2FsZSAgIDogbG93U2NhbGUsXHJcbiAgICAgIGFzY2VudCAgICAgIDogYXNjZW50LFxyXG4gICAgICBsaW5lSGVpZ2h0IDogbGluZUhlaWdodFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNoYXJSZWN0KCBwb3MsIGZvbnQsIGZvbnRfbWV0cmljcywgZm9udF9jaGFyLCBrZXJuID0gMC4wICkge1xyXG5cclxuICAgIC8vIExvdyBjYXNlIGNoYXJhY3RlcnMgaGF2ZSBmaXJzdCBiaXQgc2V0IGluICdmbGFncydcclxuICAgIHZhciBsb3djYXNlID0gKCBmb250X2NoYXIuZmxhZ3MgJiAxICkgPT09IDE7XHJcblxyXG4gICAgLy8gUGVuIHBvc2l0aW9uIGlzIGF0IHRoZSB0b3Agb2YgdGhlIGxpbmUsIFkgZ29lcyB1cFxyXG4gICAgdmFyIGJhc2VsaW5lID0gcG9zWzFdIC0gZm9udF9tZXRyaWNzLmFzY2VudDtcclxuXHJcbiAgICAvLyBMb3cgY2FzZSBjaGFycyB1c2UgdGhlaXIgb3duIHNjYWxlXHJcbiAgICB2YXIgc2NhbGUgPSBsb3djYXNlID8gZm9udF9tZXRyaWNzLmxvd1NjYWxlIDogZm9udF9tZXRyaWNzLmNhcFNjYWxlO1xyXG5cclxuICAgIC8vIExheWluZyBvdXQgdGhlIGdseXBoIHJlY3RhbmdsZVxyXG4gICAgdmFyIGcgICAgICA9IGZvbnRfY2hhci5yZWN0O1xyXG4gICAgdmFyIGJvdHRvbSA9IGJhc2VsaW5lIC0gc2NhbGUgKiAoIGZvbnQuZGVzY2VudCArIGZvbnQuaXkgKTtcclxuICAgIHZhciB0b3AgICAgPSBib3R0b20gICArIHNjYWxlICogKCBmb250LnJvd19oZWlnaHQgKTtcclxuICAgIHZhciBsZWZ0ICAgPSBwb3NbMF0gICArIHNjYWxlICogKCBmb250X2NoYXIuYmVhcmluZ194ICsga2VybiAtIGZvbnQuaXggKTtcclxuICAgIHZhciByaWdodCAgPSBsZWZ0ICAgICArIHNjYWxlICogKCBnWzJdIC0gZ1swXSApO1xyXG4gICAgdmFyIHAgPSBbIGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSBdO1xyXG5cclxuICAgIC8vIEFkdmFuY2luZyBwZW4gcG9zaXRpb25cclxuICAgIHZhciBuZXdfcG9zX3ggPSBwb3NbMF0gKyBzY2FsZSAqICggZm9udF9jaGFyLmFkdmFuY2VfeCApO1xyXG5cclxuICAgIC8vIFNpZ25lZCBkaXN0YW5jZSBmaWVsZCBzaXplIGluIHNjcmVlbiBwaXhlbHNcclxuICAgIHZhciBzZGZfc2l6ZSAgPSAyLjAgKiBmb250Lml5ICogc2NhbGU7XHJcblxyXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xyXG4gICAgICBwWzBdLCBwWzNdLCAvLyBsZWZ0IGJvdHRvbSxcclxuICAgICAgcFsyXSwgcFszXSwgLy8gcmlnaHQgYm90dG9tLFxyXG4gICAgICBwWzJdLCBwWzFdLCAvLyByaWdodCB0b3BcclxuICAgICAgcFswXSwgcFsxXSwgLy8gbGVmdCB0b3BcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgdXZzID0gW1xyXG4gICAgICBnWzBdLCBnWzFdLCAvLyBsZWZ0IHRvcFxyXG4gICAgICBnWzJdLCBnWzFdLCAvLyByaWdodCB0b3BcclxuICAgICAgZ1syXSwgZ1szXSwgLy8gcmlnaHQgYm90dG9tLFxyXG4gICAgICBnWzBdLCBnWzNdLCAvLyBsZWZ0IGJvdHRvbSxcclxuICAgIF07XHJcblxyXG4gICAgY29uc3Qgc2RmU2l6ZXMgPSBbXHJcbiAgICAgIHNkZl9zaXplLFxyXG4gICAgICBzZGZfc2l6ZSxcclxuICAgICAgc2RmX3NpemUsXHJcbiAgICAgIHNkZl9zaXplLFxyXG4gICAgXTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwb3NpdGlvbnMsXHJcbiAgICAgIHV2cyxcclxuICAgICAgc2RmU2l6ZXMsXHJcbiAgICAgIHBvczogWyBuZXdfcG9zX3gsIHBvc1sxXSBdXHJcbiAgICB9O1xyXG5cclxuICAgIC8vcmV0dXJuIHsgdmVydGljZXMgOiB2ZXJ0aWNlcywgcG9zIDogWyBuZXdfcG9zX3gsIHBvc1sxXSBdIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXdlc29tZVRleHQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZXh0LmpzIiwiXHJcbmNsYXNzIFRleHRMYXlvdXQge1xyXG5cclxuICB0ZXh0ID0gXCJcIjtcclxuICBmb250ID0gbnVsbDtcclxuICBtZXRyaWNzID0gbnVsbDtcclxuICBmb250U2l6ZSA9IDIwO1xyXG4gIGFsaWduID0gXCJsZWZ0XCI7XHJcbiAgc3RhcnRYID0gMDtcclxuICBzdGFydFkgPSAwO1xyXG4gIHdyYXBwZXJXaWR0aCA9IDEwMDtcclxuICB3cmFwV29yZHMgPSBmYWxzZTtcclxuICB3b3Jkc01ldHJpY3MgPSBbXTtcclxuICBsZXR0ZXJzQ291bnQgPSAwO1xyXG4gIGhlaWdodCA9IDA7XHJcbiAgbGluZXNDb3VudCA9IDA7XHJcbiAgbGluZUhlaWdodCA9IDA7XHJcbiAgZ2x5cGhzID0gW107XHJcbiAgb3duZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3Iob3duZXIsIGNvbmZpZykge1xyXG5cclxuICAgIHRoaXMub3duZXIgPSBvd25lcjtcclxuICAgIHRoaXMudGV4dCA9IG93bmVyLnRleHQ7XHJcbiAgICB0aGlzLmZvbnQgPSBvd25lci5mb250O1xyXG4gICAgdGhpcy5mb250U2l6ZSA9IGNvbmZpZy5mb250U2l6ZTtcclxuICAgIHRoaXMud3JhcFdvcmRzID0gY29uZmlnLndyYXBXb3JkcztcclxuICAgIHRoaXMud3JhcHBlcldpZHRoID0gY29uZmlnLndyYXBwZXJXaWR0aDtcclxuICAgIHRoaXMubGluZUhlaWdodCA9IGNvbmZpZy5saW5lSGVpZ2h0O1xyXG4gICAgdGhpcy5hbGlnbiA9IGNvbmZpZy5hbGlnbjtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy50ZXh0ID0gdGhpcy5vd25lci50ZXh0O1xyXG4gICAgdGhpcy5mb250ID0gdGhpcy5vd25lci5mb250O1xyXG5cclxuICAgIHRoaXMubGV0dGVyc0NvdW50ID0gdGhpcy50ZXh0LnNwbGl0KFwiXCIpLmxlbmd0aDtcclxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMuZm9udE1ldHJpY3ModGhpcy5mb250LCAwLjApO1xyXG4gICAgdGhpcy5zdGFydFkgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcclxuICAgIHRoaXMuY2FsY3VsYXRlV29yZHNQb3NpdGlvbnMoKTtcclxuXHJcbiAgICB0aGlzLmdseXBocyA9IFtdO1xyXG5cclxuICAgIHRoaXMud29yZHNNZXRyaWNzLmZvckVhY2ggKHdvcmQgPT4ge1xyXG4gICAgICB0aGlzLmdldEdseXBocyh3b3JkLndvcmQsIFt3b3JkLngsIHdvcmQueV0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmb250TWV0cmljcyhmb250U2l6ZSwgbW9yZUxpbmVHYXAgPSAwLjIpIHtcclxuXHJcbiAgICBjb25zdCB7Y2FwX2hlaWdodCwgeF9oZWlnaHQsIGFzY2VudDogZm9udEFzY2VudCAsIGRlc2NlbnQsIGxpbmVfZ2FwfSA9IHRoaXMuZm9udDtcclxuXHJcbiAgICBjb25zdCBjYXBTY2FsZSA9IHRoaXMuZm9udFNpemUgLyBjYXBfaGVpZ2h0O1xyXG4gICAgY29uc3QgbG93U2NhbGUgPSBNYXRoLnJvdW5kKCB4X2hlaWdodCAqIGNhcFNjYWxlICkgLyB4X2hlaWdodDtcclxuICAgIGNvbnN0IGFzY2VudCA9IE1hdGgucm91bmQoIGZvbnRBc2NlbnQgKiBjYXBTY2FsZSApO1xyXG4gICAgbGV0IGxpbmVIZWlnaHQgPSBNYXRoLnJvdW5kKCBjYXBTY2FsZSAqICggZm9udEFzY2VudCArIGRlc2NlbnQgKyBsaW5lX2dhcCApICsgbW9yZUxpbmVHYXAgKTtcclxuXHJcbiAgICBpZiAodGhpcy5saW5lSGVpZ2h0ID4gMClcclxuICAgICAgbGluZUhlaWdodCA9IHRoaXMubGluZUhlaWdodDtcclxuICAgIGVsc2VcclxuICAgICAgdGhpcy5saW5lSGVpZ2h0ID0gbGluZUhlaWdodDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjYXBTY2FsZSAgIDogY2FwU2NhbGUsXHJcbiAgICAgIGxvd1NjYWxlICAgOiBsb3dTY2FsZSxcclxuICAgICAgYXNjZW50ICAgICAgOiBhc2NlbnQsXHJcbiAgICAgIGxpbmVIZWlnaHQgOiBsaW5lSGVpZ2h0XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY2hhclJlY3QoIHBvcywgZm9udF9jaGFyLCBrZXJuID0gMC4wICkge1xyXG5cclxuICAgIC8vIExvdyBjYXNlIGNoYXJhY3RlcnMgaGF2ZSBmaXJzdCBiaXQgc2V0IGluICdmbGFncydcclxuICAgIHZhciBsb3djYXNlID0gKCBmb250X2NoYXIuZmxhZ3MgJiAxICkgPT09IDE7XHJcblxyXG4gICAgLy8gUGVuIHBvc2l0aW9uIGlzIGF0IHRoZSB0b3Agb2YgdGhlIGxpbmUsIFkgZ29lcyB1cFxyXG4gICAgdmFyIGJhc2VsaW5lID0gcG9zWzFdIC0gdGhpcy5tZXRyaWNzLmFzY2VudDtcclxuXHJcbiAgICAvLyBMb3cgY2FzZSBjaGFycyB1c2UgdGhlaXIgb3duIHNjYWxlXHJcbiAgICB2YXIgc2NhbGUgPSBsb3djYXNlID8gdGhpcy5tZXRyaWNzLmxvd1NjYWxlIDogdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xyXG5cclxuICAgIC8vIExheWluZyBvdXQgdGhlIGdseXBoIHJlY3RhbmdsZVxyXG4gICAgdmFyIGcgICAgICA9IGZvbnRfY2hhci5yZWN0O1xyXG4gICAgdmFyIGJvdHRvbSA9IGJhc2VsaW5lIC0gc2NhbGUgKiAoIHRoaXMuZm9udC5kZXNjZW50ICsgdGhpcy5mb250Lml5ICk7XHJcbiAgICB2YXIgdG9wICAgID0gYm90dG9tICAgKyBzY2FsZSAqICggdGhpcy5mb250LnJvd19oZWlnaHQgKTtcclxuICAgIHZhciBsZWZ0ICAgPSBwb3NbMF0gICArIHNjYWxlICogKCBmb250X2NoYXIuYmVhcmluZ194ICsga2VybiAtIHRoaXMuZm9udC5peCApO1xyXG4gICAgdmFyIHJpZ2h0ICA9IGxlZnQgICAgICsgc2NhbGUgKiAoIGdbMl0gLSBnWzBdICk7XHJcbiAgICB2YXIgcCA9IFsgbGVmdCwgdG9wLCByaWdodCwgYm90dG9tIF07XHJcblxyXG4gICAgLy8gQWR2YW5jaW5nIHBlbiBwb3NpdGlvblxyXG4gICAgdmFyIG5ld19wb3NfeCA9IHBvc1swXSArIHNjYWxlICogKCBmb250X2NoYXIuYWR2YW5jZV94ICk7XHJcblxyXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xyXG4gICAgICBwWzBdLCBwWzNdLCAvLyBsZWZ0IGJvdHRvbSxcclxuICAgICAgcFsyXSwgcFszXSwgLy8gcmlnaHQgYm90dG9tLFxyXG4gICAgICBwWzJdLCBwWzFdLCAvLyByaWdodCB0b3BcclxuICAgICAgcFswXSwgcFsxXSwgLy8gbGVmdCB0b3BcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcG9zaXRpb25zLFxyXG4gICAgICBwb3M6IFsgbmV3X3Bvc194LCBwb3NbMV0gXSxcclxuICAgICAgbWV0cmljczoge3g6IHBvc1swXSwgeTogcG9zWzFdLCB3aWR0aDogc2NhbGUgKiBmb250X2NoYXIuYWR2YW5jZV94IH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXRTdHJpbmdTaXplKHN0cmluZykge1xyXG5cclxuICAgIGxldCB3aWR0aCA9IDA7XHJcbiAgICBsZXQgaGVpZ2h0ID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XHJcblxyXG4gICAgY29uc3QgY2hhcnMgPSBbLi4uc3RyaW5nXTtcclxuXHJcbiAgICAvLyBJdGVyYXRlIHRob3VnaHQgdGhlIGNoYXJzLCBjYWxjdWxhdGUgcG9zaXRpb25cclxuICAgIGNoYXJzLmZvckVhY2goY2hhciA9PiB7XHJcbiAgICAgIGxldCBmb250X2NoYXIgPSB0aGlzLmZvbnQuY2hhcnNbIGNoYXIgXTtcclxuXHJcbiAgICAgIC8qaWYgKGNoYXIgPT09IFwiIFwiKSB7XHJcbiAgICAgICAgd2lkdGggKz0gdGhpcy5mb250LnNwYWNlX2FkdmFuY2UgKiB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9Ki9cclxuXHJcbiAgICAgIC8vIEdldCBjaGFyIG1ldHJpY3NcclxuICAgICAgbGV0IGNoYXJSZWN0ID0gdGhpcy5jaGFyUmVjdChbd2lkdGgsMF0sIGZvbnRfY2hhciwgMC4yKTtcclxuICAgICAgd2lkdGggPSBjaGFyUmVjdC5wb3NbMF07XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHt3aWR0aCwgaGVpZ2h0fTtcclxuXHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVXb3Jkc1Bvc2l0aW9ucygpIHtcclxuXHJcbiAgICBjb25zdCB3b3JkcyA9IHRoaXMudGV4dC5zcGxpdChcIiBcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgd29yZHNbaV0gPSB3b3Jkc1tpXSArIFwiIFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMud29yZHNNZXRyaWNzID0gW107XHJcblxyXG4gICAgLy8gSW5pdGlhbCBwb3NpdGlvblxyXG4gICAgbGV0IHggPSB0aGlzLnN0YXJ0WDtcclxuICAgIGxldCB5ID0gdGhpcy5zdGFydFk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHdvcmRzIHBvc2l0aW9ucyBvbiBsaW5lc1xyXG4gICAgd29yZHMuZm9yRWFjaCh3b3JkID0+IHtcclxuICAgICAgY29uc3Qgd29yZFNpemUgPSB0aGlzLmdldFN0cmluZ1NpemUod29yZCk7XHJcbiAgICAgIGlmICh4ICsgd29yZFNpemUud2lkdGggPiB0aGlzLnN0YXJ0WCArIHRoaXMud3JhcHBlcldpZHRoICYmIHRoaXMud3JhcFdvcmRzKSB7XHJcbiAgICAgICAgeCA9IHRoaXMuc3RhcnRYO1xyXG4gICAgICAgIHkgKz0gd29yZFNpemUuaGVpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLndvcmRzTWV0cmljcy5wdXNoKHsuLi53b3JkU2l6ZSwgeCwgeSwgd29yZH0pO1xyXG5cclxuICAgICAgLy94ICs9IHdvcmRTaXplLndpZHRoICsgdGhpcy5mb250LnNwYWNlX2FkdmFuY2UgKiB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XHJcbiAgICAgIHggKz0gd29yZFNpemUud2lkdGg7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgbGluZXMgY291bnRcclxuICAgIHRoaXMubGluZXNDb3VudCA9ICh5IC0gdGhpcy5zdGFydFkpIC8gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyAxO1xyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmxpbmVzQ291bnQgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcclxuXHJcbiAgICAvLyBDaGFuZ2UgYWxpZ24gVE9ETyBvcHRpbWlzZVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpbmVzQ291bnQ7ICsraSkge1xyXG4gICAgICBjb25zdCB3b3Jkc09uTGluZSA9IHRoaXMud29yZHNNZXRyaWNzLmZpbHRlcih3b3JkID0+IHdvcmQueSA9PT0gdGhpcy5zdGFydFkgKyAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSlcclxuXHJcbiAgICAgIGNvbnN0IGxhc3RXb3JkID0gd29yZHNPbkxpbmVbd29yZHNPbkxpbmUubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICBpZiAobGFzdFdvcmQpIHtcclxuICAgICAgICBjb25zdCBmcmVlU3BhY2UgPSAodGhpcy5zdGFydFggKyB0aGlzLndyYXBwZXJXaWR0aCkgLSAobGFzdFdvcmQueCArIGxhc3RXb3JkLndpZHRoKTtcclxuXHJcbiAgICAgICAgbGV0IGxlZnRPZmZzZXQgPSAwO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuYWxpZ24pIHtcclxuICAgICAgICAgIGNhc2UgXCJjZW50ZXJcIjpcclxuICAgICAgICAgICAgbGVmdE9mZnNldCA9IGZyZWVTcGFjZSAvIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICAgIGxlZnRPZmZzZXQgPSBmcmVlU3BhY2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndvcmRzTWV0cmljcy5mb3JFYWNoKHdvcmQgPT4ge1xyXG4gICAgICAgICAgaWYgKHdvcmQueSA9PT0gdGhpcy5zdGFydFkgKyAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSkge1xyXG4gICAgICAgICAgICB3b3JkLnggKz0gbGVmdE9mZnNldDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRHbHlwaHMoIHN0cmluZywgcG9zKSB7XHJcbiAgICBsZXQgcHJldl9jaGFyID0gXCIgXCI7ICAvLyBVc2VkIHRvIGNhbGN1bGF0ZSBrZXJuaW5nXHJcbiAgICBsZXQgY3BvcyAgICAgID0gcG9zOyAgLy8gQ3VycmVudCBwZW4gcG9zaXRpb25cclxuICAgIGxldCB4X21heCAgICAgPSAwLjA7ICAvLyBNYXggd2lkdGggLSB1c2VkIGZvciBib3VuZGluZyBib3hcclxuICAgIGxldCBzY2FsZSAgICAgPSB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XHJcblxyXG4gICAgbGV0IHN0cl9wb3MgPSAwO1xyXG5cclxuICAgIGZvcig7Oykge1xyXG4gICAgICBpZiAoIHN0cl9wb3MgPT09IHN0cmluZy5sZW5ndGggKSBicmVhaztcclxuXHJcbiAgICAgIHZhciBzY2hhciA9IHN0cmluZ1sgc3RyX3BvcyBdO1xyXG4gICAgICBzdHJfcG9zKys7XHJcblxyXG4gICAgICBpZiAoIHNjaGFyID09PSBcIlxcblwiICkge1xyXG4gICAgICAgIGlmICggY3Bvc1swXSA+IHhfbWF4ICkgeF9tYXggPSBjcG9zWzBdOyAvLyBFeHBhbmRpbmcgdGhlIGJvdW5kaW5nIHJlY3RcclxuICAgICAgICBjcG9zWzBdICA9IHBvc1swXTtcclxuICAgICAgICBjcG9zWzFdIC09IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xyXG4gICAgICAgIHByZXZfY2hhciA9IFwiIFwiO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIHNjaGFyID09PSBcIiBcIiApIHtcclxuICAgICAgICAvL3NjaGFyID0gXCJfXCJcclxuICAgICAgICAvL2Nwb3NbMF0gKz0gdGhpcy5mb250LnNwYWNlX2FkdmFuY2UgKiBzY2FsZTtcclxuICAgICAgICBwcmV2X2NoYXIgPSBcIiBcIjtcclxuICAgICAgICAvL2NvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgZm9udF9jaGFyID0gdGhpcy5mb250LmNoYXJzWyBzY2hhciBdO1xyXG4gICAgICBpZiAoICFmb250X2NoYXIgKSB7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1YnN0aXR1dGluZyB1bmF2YWlsYWJsZSBjaGFyYWN0ZXJzIHdpdGggJz8nXHJcbiAgICAgICAgc2NoYXIgPSBcIj9cIjtcclxuICAgICAgICBmb250X2NoYXIgPSB0aGlzLmZvbnQuY2hhcnNbIFwiP1wiIF07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBrZXJuID0gdGhpcy5mb250Lmtlcm5bIHByZXZfY2hhciArIHNjaGFyIF07XHJcbiAgICAgIGlmICggIWtlcm4gKSBrZXJuID0gMC4wO1xyXG5cclxuICAgICAgLy8gY2FsY3VsYXRpbmcgdGhlIGdseXBoIHJlY3RhbmdsZSBhbmQgY29weWluZyBpdCB0byB0aGUgdmVydGV4IGFycmF5XHJcbiAgICAgIHZhciByZWN0ID0gdGhpcy5jaGFyUmVjdCggY3BvcywgZm9udF9jaGFyLCBrZXJuICk7XHJcblxyXG4gICAgICBwcmV2X2NoYXIgPSBzY2hhcjtcclxuICAgICAgY3BvcyA9IHJlY3QucG9zO1xyXG5cclxuICAgICAgdGhpcy5nbHlwaHMucHVzaCh7XHJcbiAgICAgICAgbGV0dGVyOiBzY2hhcixcclxuICAgICAgICB2ZXJ0aWNlczogcmVjdC5wb3NpdGlvbnMsXHJcbiAgICAgICAgcG9zaXRpb246IHJlY3QucG9zLFxyXG4gICAgICAgIG1ldHJpY3M6IHJlY3QubWV0cmljc1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0TGF5b3V0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGF5b3V0LmpzIiwiY29uc3QgY3JlYXRlSW5kaWNlcyA9IHJlcXVpcmUoXCJxdWFkLWluZGljZXNcIilcclxuXHJcbmNsYXNzIFNlbGVjdCB7XHJcblxyXG4gIHJhbmdlID0gWzAsMF07XHJcbiAgbWV0cmljcyA9IG51bGw7XHJcbiAgbGF5b3V0ID0gbnVsbDtcclxuICBkaXJ0eSA9IGZhbHNlO1xyXG4gIGluZGV4QnVmZmVyID0gZmFsc2U7XHJcbiAgb3duZXIgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihvd25lcikge1xyXG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xyXG4gICAgdGhpcy5tZXRyaWNzID0gb3duZXIubWV0cmljcztcclxuICAgIHRoaXMubGF5b3V0ID0gb3duZXIubGF5b3V0O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5vd25lci5tZXRyaWNzO1xyXG4gICAgdGhpcy5sYXlvdXQgPSB0aGlzLm93bmVyLmxheW91dDtcclxuXHJcbiAgICAvLyBWZXJ0aWNlcyBhcnJheSBmb3IgYWxsIHNlbGVjdGVkIGxpbmVzXHJcbiAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5saW5lc0NvdW50ICogNCAqIDIpO1xyXG5cclxuICAgIGlmICh0aGlzLnJhbmdlWzFdICE9PSBudWxsKVxyXG4gICAgdGhpcy5idWlsZFZlcnRpY2VzKCk7XHJcblxyXG4gICAgdGhpcy5pbmRpY2VzID0gY3JlYXRlSW5kaWNlcyh7XHJcbiAgICAgIGNsb2Nrd2lzZTogdHJ1ZSxcclxuICAgICAgdHlwZTogJ3VpbnQxNicsXHJcbiAgICAgIGNvdW50OnRoaXMubGF5b3V0LmxpbmVzQ291bnRcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgdGhpcy5pbmRleEJ1ZmZlciA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzZXRSYW5nZShzdGFydCA9IG51bGwsIGVuZCA9IG51bGwpIHtcclxuXHJcbiAgICBjb25zdCB7Z2x5cGhzfSA9IHRoaXMub3duZXIubGF5b3V0O1xyXG5cclxuICAgIGlmIChzdGFydCA9PT0gbnVsbCkgc3RhcnQgPSB0aGlzLnJhbmdlWzBdO1xyXG4gICAgaWYgKGVuZCA9PT0gbnVsbCkgZW5kID0gdGhpcy5yYW5nZVsxXTtcclxuXHJcbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDA7XHJcbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMDtcclxuXHJcbiAgICBpZiAoc3RhcnQgPiBnbHlwaHMubGVuZ3RoIC0xKXN0YXJ0ID0gZ2x5cGhzLmxlbmd0aCAtIDE7XHJcbiAgICBpZiAoZW5kID4gZ2x5cGhzLmxlbmd0aCAtIDEpIGVuZCA9IGdseXBocy5sZW5ndGggLSAxO1xyXG5cclxuICAgIGlmIChlbmQgPT09IGZhbHNlKSBlbmQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMucmFuZ2UgPSBbc3RhcnQsIGVuZF07XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRWZXJ0aWNlcygpIHtcclxuXHJcbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLm93bmVyLmxheW91dC5tZXRyaWNzO1xyXG4gICAgLy8gU2VsZWN0IHJhbmdlXHJcbiAgICBsZXQgc3RhcnQgPSB0aGlzLmxheW91dC5nbHlwaHNbTWF0aC5taW4uYXBwbHkobnVsbCx0aGlzLnJhbmdlKV07XHJcbiAgICBsZXQgZW5kID0gdGhpcy5sYXlvdXQuZ2x5cGhzW01hdGgubWF4LmFwcGx5KG51bGwsdGhpcy5yYW5nZSldO1xyXG5cclxuXHJcbiAgICAvLyBJdGVyYXRlIHRob3VnaHQgYWxsIGxpbmVzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGF5b3V0LmxpbmVzQ291bnQ7ICsraSkge1xyXG4gICAgICBsZXQgbGV0dGVyQ291bnQgPSAwOyAvLyBsZXR0ZXJzIHBhc3NlZFxyXG4gICAgICBsZXQgZmlyc3RMZXR0ZXIgPSBudWxsOyAvLyBmaXJzdCBsZXR0ZXIgb24gdGhpcyBsaW5lXHJcbiAgICAgIGxldCBsYXN0TGV0dGVyID0gbnVsbDsgLy8gbGFzdCBsZXR0ZXIgb24gdGhpcyBsaW5lXHJcblxyXG5cclxuICAgICAgaWYgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCArIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0IDwgc3RhcnQucG9zaXRpb25bMV0pIGNvbnRpbnVlO1xyXG4gICAgICBpZiAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgPiBlbmQucG9zaXRpb25bMV0pIGNvbnRpbnVlO1xyXG5cclxuICAgICAgLy8gVGFrZSBldmVyeSB3b3JkLCBpZiBpdCdzIGxhc3Qgb3IgZmlyc3Qgb24gbGluZSAtIGNoYW5nZSBib3VuZHMgbGV0dGVyc1xyXG4gICAgICB0aGlzLmxheW91dC53b3Jkc01ldHJpY3MubWFwKHdvcmQgPT4ge1xyXG5cclxuICAgICAgICBpZiAod29yZC55ID09PSB0aGlzLmxheW91dC5zdGFydFkgKyAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSkge1xyXG4gICAgICAgICAgaWYgKGZpcnN0TGV0dGVyID09PSBudWxsKSBmaXJzdExldHRlciA9IGxldHRlckNvdW50O1xyXG4gICAgICAgICAgbGFzdExldHRlciA9IGxldHRlckNvdW50ICsgd29yZC53b3JkLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXR0ZXJDb3VudCArPSB3b3JkLndvcmQubGVuZ3RoO1xyXG4gICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgLy8gQm91bmRzIGxldHRlcnMgZm9yIGN1cnJlbnQgbGluZVxyXG4gICAgICBsZXQgc3RhcnRMaW5lTGV0dGVyID0gdGhpcy5sYXlvdXQuZ2x5cGhzW2ZpcnN0TGV0dGVyXTtcclxuICAgICAgbGV0IGVuZExpbmVMZXR0ZXIgPSB0aGlzLmxheW91dC5nbHlwaHNbbGFzdExldHRlcl07XHJcblxyXG4gICAgICAvLyBJZiB0aGUgc3RhcnQgb3IgZW5kIHJhbmdlIGlzIG9uIHRoaXMgbGluZSwgY2hhbmdlIGJvdW5kcyBmb3IgdGhlbVxyXG4gICAgICBpZiAoc3RhcnQucG9zaXRpb25bMV0gPT09ICBzdGFydExpbmVMZXR0ZXIucG9zaXRpb25bMV0pIHN0YXJ0TGluZUxldHRlciA9IHN0YXJ0O1xyXG4gICAgICBpZiAoZW5kLnBvc2l0aW9uWzFdID09PSBlbmRMaW5lTGV0dGVyLnBvc2l0aW9uWzFdKSBlbmRMaW5lTGV0dGVyID0gZW5kO1xyXG5cclxuICAgICAgLy8gV2UgdXNlIG9mZnNldCB0byBhdm9pZCBzZWxlY3RzIG92ZXJsYXBwaW5nXHJcbiAgICAgIGNvbnN0IG9mZnNldCA9ICh0aGlzLm1ldHJpY3MubGluZUhlaWdodCAtIHRoaXMubWV0cmljcy5hc2NlbnQpIC8gMjtcclxuXHJcbiAgICAgIC8vIEFkZCBwb3NpdGlvbnMgdG8gYXJyYXlcclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpXSA9IHN0YXJ0TGluZUxldHRlci52ZXJ0aWNlc1swXTtcclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgMV0gPSBzdGFydExpbmVMZXR0ZXIudmVydGljZXNbMV0gKyBvZmZzZXQ7XHJcblxyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyAyXSA9IGVuZExpbmVMZXR0ZXIudmVydGljZXNbMl07XHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDNdID0gZW5kTGluZUxldHRlci52ZXJ0aWNlc1szXSAgICsgb2Zmc2V0O1xyXG5cclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgNF0gPSBlbmRMaW5lTGV0dGVyLnZlcnRpY2VzWzRdO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyA1XSA9IGVuZExpbmVMZXR0ZXIudmVydGljZXNbNV0gIC0gb2Zmc2V0O1xyXG5cclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgNl0gPSBzdGFydExpbmVMZXR0ZXIudmVydGljZXNbNl07XHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDddID0gc3RhcnRMaW5lTGV0dGVyLnZlcnRpY2VzWzddICAtIG9mZnNldDtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0Q2xvc2VzdEdseXBoKHgsIHkpIHtcclxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMub3duZXIubWV0cmljcztcclxuICAgIHRoaXMubGF5b3V0ID0gdGhpcy5vd25lci5sYXlvdXQ7XHJcblxyXG4gICAgY29uc3QgeyBnbHlwaHMgfSA9IHRoaXMub3duZXIubGF5b3V0O1xyXG5cclxuICAgIGNvbnN0IGxpbmVIZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcclxuICAgIGNvbnN0IHNlbGVjdGluZ0xpbmUgPSBNYXRoLmZsb29yKHkgLyB0aGlzLm1ldHJpY3MubGluZUhlaWdodCk7XHJcbiAgICBjb25zdCBzZWxlY3RpbmdMaW5lWSA9IHNlbGVjdGluZ0xpbmUgKiBsaW5lSGVpZ2h0O1xyXG4gICAgbGV0IGxhc3RHbHlwaE9uTGluZSA9IGdseXBoc1tnbHlwaHMubGVuZ3RoIC0gMV07XHJcbiAgICBsZXQgZmlyc3RHbHlwaE9uTGluZSA9IG51bGw7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnbHlwaHMubGVuZ3RoIDsgKytpKSB7XHJcblxyXG4gICAgICBsZXQgZ2x5cGggPSBnbHlwaHNbaV07XHJcblxyXG4gICAgICBpZiAoZ2x5cGgubWV0cmljcy55ID09PSBzZWxlY3RpbmdMaW5lWSArIGxpbmVIZWlnaHQpIHtcclxuICAgICAgICBsYXN0R2x5cGhPbkxpbmUgPSBnbHlwaDtcclxuICAgICAgICBpZiAoeCA8IGdseXBoLm1ldHJpY3MueCArIGdseXBoLm1ldHJpY3Mud2lkdGggLyAyKSB7XHJcbiAgICAgICAgICBpZiAoaSA9PT0gMCkgcmV0dXJuIC0xO1xyXG5cclxuICAgICAgICAgIHJldHVybiBnbHlwaHNbaSAtIDFdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsYXN0R2x5cGhPbkxpbmU7XHJcblxyXG4gIH1cclxuXHJcbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcclxuICAgIC8vIE9ubHkgbGVmdCBtb3VzZSBidXR0b25cclxuICAgIGlmIChldmVudC5kYXRhLmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBwb3NpdGlvbiA9IGV2ZW50LmRhdGEuZ2xvYmFsO1xyXG4gICAgcG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybVBvc2l0aW9uKHBvc2l0aW9uKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZXN0TGV0dGVyID0gdGhpcy5nZXRDbG9zZXN0R2x5cGgocG9zaXRpb24ueCAsIHBvc2l0aW9uLnkpO1xyXG5cclxuICAgIGxldCBpbmRleCA9IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5pbmRleE9mKGNsb3Nlc3RMZXR0ZXIpO1xyXG5cclxuICAgIHRoaXMuc2V0UmFuZ2UoaW5kZXggKyAxLCBmYWxzZSApO1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcclxuICAgIGxldCBwb3NpdGlvbiA9IGV2ZW50LmRhdGEuZ2xvYmFsO1xyXG4gICAgcG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybVBvc2l0aW9uKHBvc2l0aW9uKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZXN0TGV0dGVyID0gdGhpcy5nZXRDbG9zZXN0R2x5cGgocG9zaXRpb24ueCAgLCBwb3NpdGlvbi55KTtcclxuICAgIGxldCBpbmRleCA9IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5pbmRleE9mKGNsb3Nlc3RMZXR0ZXIpO1xyXG5cclxuICAgIHRoaXMuc2V0UmFuZ2UobnVsbCwgaW5kZXggKyAxKTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VVcChldmVudCkge1xyXG5cclxuICAgIC8vIE9ubHkgbGVmdCBtb3VzZSBidXR0b25cclxuICAgIGlmIChldmVudC5kYXRhLmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBwb3NpdGlvbiA9IGV2ZW50LmRhdGEuZ2xvYmFsO1xyXG4gICAgcG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybVBvc2l0aW9uKHBvc2l0aW9uKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZXN0TGV0dGVyID0gdGhpcy5nZXRDbG9zZXN0R2x5cGgocG9zaXRpb24ueCAsIHBvc2l0aW9uLnkpO1xyXG5cclxuXHJcbiAgICAvLyAtMSBtZWFucyB0aGF0IHdlIGF0IHRoZSBzdGFydCBvZiB0aGUgbGluZVxyXG4gICAgaWYgKGNsb3Nlc3RMZXR0ZXIgPT09IC0xKSB7XHJcbiAgICAgIHRoaXMub3duZXIuaW5wdXQuZ2x5cGhJbmRleCA9IGNsb3Nlc3RMZXR0ZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm93bmVyLmlucHV0LmdseXBoSW5kZXggPSB0aGlzLm93bmVyLmxheW91dC5nbHlwaHMuaW5kZXhPZihjbG9zZXN0TGV0dGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybVBvc2l0aW9uKHBvc2l0aW9uKSB7XHJcbiAgICBjb25zdCBvd25lclBvc2l0aW9uID0gdGhpcy5vd25lci5nZXRHbG9iYWxQb3NpdGlvbigpO1xyXG4gICAgY29uc3QgdHJhbnNmb3JtID0gdGhpcy5vd25lci53b3JsZFRyYW5zZm9ybTtcclxuXHJcbiAgICBwb3NpdGlvbi54IC09IHRyYW5zZm9ybS50eDtcclxuICAgIHBvc2l0aW9uLnkgLT0gdHJhbnNmb3JtLnR5O1xyXG5cclxuICAgIHBvc2l0aW9uLnggPSBwb3NpdGlvbi54IC8gdHJhbnNmb3JtLmE7XHJcbiAgICBwb3NpdGlvbi55ID0gcG9zaXRpb24ueSAvIHRyYW5zZm9ybS5kO1xyXG5cclxuICAgIHJldHVybiBwb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIGNsZWFyU2VsZWN0ZWRSYW5nZSgpIHtcclxuXHJcbiAgICBjb25zdCByYW5nZSA9IHRoaXMucmFuZ2U7XHJcblxyXG4gICAgLy8gSWYgdXNlciBzZWxlY3RlZCBzb21lIHRleHQsIHJlbW92ZSBpdFxyXG4gICAgaWYgKHJhbmdlWzFdICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMub3duZXIuaW5wdXQuZ2x5cGhJbmRleCA9IE1hdGgubWluKHJhbmdlWzBdIC0gMSwgcmFuZ2VbMV0gLSAxKTtcclxuICAgICAgY29uc3QgcmVtb3ZlSW5kZXggPSBNYXRoLm1pbi5hcHBseShudWxsLCByYW5nZSk7XHJcbiAgICAgIGNvbnN0IHJlbW92ZUxlbmd0aCA9IE1hdGguYWJzKHJhbmdlWzBdIC0gcmFuZ2VbMV0pO1xyXG4gICAgICB0aGlzLm93bmVyLnNlbGVjdC5zZXRSYW5nZSgwLGZhbHNlKTtcclxuICAgICAgdGhpcy5vd25lci5yZW1vdmVTdHJpbmcocmVtb3ZlSW5kZXgsIHJlbW92ZUxlbmd0aCk7XHJcbiAgICAgIHRoaXMub3duZXIuaW5wdXQuc2hvdygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwYW5kKGRpcmVjdGlvbikge1xyXG4gICAgdGhpcy5yYW5nZVsxXSArPSBkaXJlY3Rpb247XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlbGVjdC5qcyIsInZhciBkdHlwZSA9IHJlcXVpcmUoJ2R0eXBlJylcbnZhciBhbkFycmF5ID0gcmVxdWlyZSgnYW4tYXJyYXknKVxudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJylcblxudmFyIENXID0gWzAsIDIsIDNdXG52YXIgQ0NXID0gWzIsIDEsIDNdXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlUXVhZEVsZW1lbnRzKGFycmF5LCBvcHQpIHtcbiAgICAvL2lmIHVzZXIgZGlkbid0IHNwZWNpZnkgYW4gb3V0cHV0IGFycmF5XG4gICAgaWYgKCFhcnJheSB8fCAhKGFuQXJyYXkoYXJyYXkpIHx8IGlzQnVmZmVyKGFycmF5KSkpIHtcbiAgICAgICAgb3B0ID0gYXJyYXkgfHwge31cbiAgICAgICAgYXJyYXkgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHQgPT09ICdudW1iZXInKSAvL2JhY2t3YXJkcy1jb21wYXRpYmxlXG4gICAgICAgIG9wdCA9IHsgY291bnQ6IG9wdCB9XG4gICAgZWxzZVxuICAgICAgICBvcHQgPSBvcHQgfHwge31cblxuICAgIHZhciB0eXBlID0gdHlwZW9mIG9wdC50eXBlID09PSAnc3RyaW5nJyA/IG9wdC50eXBlIDogJ3VpbnQxNidcbiAgICB2YXIgY291bnQgPSB0eXBlb2Ygb3B0LmNvdW50ID09PSAnbnVtYmVyJyA/IG9wdC5jb3VudCA6IDFcbiAgICB2YXIgc3RhcnQgPSAob3B0LnN0YXJ0IHx8IDApIFxuXG4gICAgdmFyIGRpciA9IG9wdC5jbG9ja3dpc2UgIT09IGZhbHNlID8gQ1cgOiBDQ1csXG4gICAgICAgIGEgPSBkaXJbMF0sIFxuICAgICAgICBiID0gZGlyWzFdLFxuICAgICAgICBjID0gZGlyWzJdXG5cbiAgICB2YXIgbnVtSW5kaWNlcyA9IGNvdW50ICogNlxuXG4gICAgdmFyIGluZGljZXMgPSBhcnJheSB8fCBuZXcgKGR0eXBlKHR5cGUpKShudW1JbmRpY2VzKVxuICAgIGZvciAodmFyIGkgPSAwLCBqID0gMDsgaSA8IG51bUluZGljZXM7IGkgKz0gNiwgaiArPSA0KSB7XG4gICAgICAgIHZhciB4ID0gaSArIHN0YXJ0XG4gICAgICAgIGluZGljZXNbeCArIDBdID0gaiArIDBcbiAgICAgICAgaW5kaWNlc1t4ICsgMV0gPSBqICsgMVxuICAgICAgICBpbmRpY2VzW3ggKyAyXSA9IGogKyAyXG4gICAgICAgIGluZGljZXNbeCArIDNdID0gaiArIGFcbiAgICAgICAgaW5kaWNlc1t4ICsgNF0gPSBqICsgYlxuICAgICAgICBpbmRpY2VzW3ggKyA1XSA9IGogKyBjXG4gICAgfVxuICAgIHJldHVybiBpbmRpY2VzXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGR0eXBlKSB7XG4gIHN3aXRjaCAoZHR5cGUpIHtcbiAgICBjYXNlICdpbnQ4JzpcbiAgICAgIHJldHVybiBJbnQ4QXJyYXlcbiAgICBjYXNlICdpbnQxNic6XG4gICAgICByZXR1cm4gSW50MTZBcnJheVxuICAgIGNhc2UgJ2ludDMyJzpcbiAgICAgIHJldHVybiBJbnQzMkFycmF5XG4gICAgY2FzZSAndWludDgnOlxuICAgICAgcmV0dXJuIFVpbnQ4QXJyYXlcbiAgICBjYXNlICd1aW50MTYnOlxuICAgICAgcmV0dXJuIFVpbnQxNkFycmF5XG4gICAgY2FzZSAndWludDMyJzpcbiAgICAgIHJldHVybiBVaW50MzJBcnJheVxuICAgIGNhc2UgJ2Zsb2F0MzInOlxuICAgICAgcmV0dXJuIEZsb2F0MzJBcnJheVxuICAgIGNhc2UgJ2Zsb2F0NjQnOlxuICAgICAgcmV0dXJuIEZsb2F0NjRBcnJheVxuICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIHJldHVybiBBcnJheVxuICAgIGNhc2UgJ3VpbnQ4X2NsYW1wZWQnOlxuICAgICAgcmV0dXJuIFVpbnQ4Q2xhbXBlZEFycmF5XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kdHlwZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuQXJyYXlcblxuZnVuY3Rpb24gYW5BcnJheShhcnIpIHtcbiAgcmV0dXJuIChcbiAgICAgICBhcnIuQllURVNfUEVSX0VMRU1FTlRcbiAgICAmJiBzdHIuY2FsbChhcnIuYnVmZmVyKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJ1xuICAgIHx8IEFycmF5LmlzQXJyYXkoYXJyKVxuICApXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYW4tYXJyYXkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtYnVmZmVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG5cclxuY2xhc3MgSW5wdXQge1xyXG5cclxuICBfZW5hYmxlZCA9IGZhbHNlO1xyXG4gIG93bmVyID0gbnVsbDtcclxuXHJcbiAgX2dseXBoSW5kZXggPSAtMTtcclxuXHJcbiAgc2V0IGdseXBoSW5kZXgodmFsdWUpIHtcclxuXHJcbiAgICB0aGlzLl9nbHlwaEluZGV4ID0gdmFsdWU7XHJcblxyXG4gICAgaWYgKHRoaXMuX2dseXBoSW5kZXggPCAtMSlcclxuICAgICAgdGhpcy5fZ2x5cGhJbmRleCA9IC0xO1xyXG5cclxuICAgIGlmICh0aGlzLl9nbHlwaEluZGV4ID4gdGhpcy5vd25lci5sYXlvdXQuZ2x5cGhzLmxlbmd0aClcclxuICAgICAgdGhpcy5fZ2x5cGhJbmRleCA9IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5sZW5ndGg7XHJcblxyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBnbHlwaEluZGV4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dseXBoSW5kZXg7XHJcbiAgfVxyXG5cclxuICBzZXQgZW5hYmxlZCh2YWx1ZSkge1xyXG4gICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcclxuICAgICAgdGhpcy5lbmFibGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGVuYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3Iob3duZXIpIHtcclxuICAgIHRoaXMub3duZXIgPSBvd25lcjtcclxuICAgIHRoaXMubWV0cmljcyA9IG93bmVyLm1ldHJpY3M7XHJcbiAgICB0aGlzLmxheW91dCA9IG93bmVyLmxheW91dDtcclxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF1cclxuXHJcbiAgICB0aGlzLmNyZWF0ZUZpZWxkKCk7XHJcbiAgICB0aGlzLmRpc2FibGUoKTtcclxuICB9XHJcblxyXG4gIGVuYWJsZSgpIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5pbnB1dEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZSgpIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy5pbnB1dEVsZW1lbnQpKVxyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuaW5wdXRFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGhpZGUoKSB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gIH1cclxuXHJcbiAgc2hvdygpIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVGaWVsZCgpIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG5cclxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IE9iamVjdC52YWx1ZXModGhpcy5vd25lci50cmFuc2Zvcm0ud29ybGRUcmFuc2Zvcm0pLnNsaWNlKDAsIDYpO1xyXG5cclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAvL3RoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsMCwwLDAuMyknO1xyXG5cclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmNvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuY29udGFpbiA9ICdzdHJpY3QnO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuekluZGV4ID0gMjtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmNvbG9yID0gdGhpcy5vd25lci5zdHlsZS5maWxsO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtT3JpZ2luPSBcImxlZnQgdG9wXCI7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgbWF0cml4KCR7dHJhbnNmb3JtLmpvaW4oXCIsIFwiKX0pYDtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSBcIjBcIjtcclxuXHJcbiAgICB0aGlzLmFkZEV2ZW50KFwiYmx1clwiLCAoZXZlbnQpID0+IHRoaXMuaW5wdXRFbGVtZW50LmZvY3VzKCkpO1xyXG4gICAgdGhpcy5hZGRFdmVudChcImlucHV0XCIsIChldmVudCkgPT4gdGhpcy5vbklucHV0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmFkZEV2ZW50KFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHRoaXMub25LZXlkb3duKGV2ZW50KSlcclxuICAgIHRoaXMuYWRkRXZlbnQoXCJwYXN0ZVwiLCAoZXZlbnQpID0+IHRoaXMucGFzdGVGcm9tQ2xpcGJvYXJkKGV2ZW50KSlcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuXHJcbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLm93bmVyLm1ldHJpY3M7XHJcbiAgICB0aGlzLmxheW91dCA9IHRoaXMub3duZXIubGF5b3V0O1xyXG5cclxuICAgIGNvbnN0IHtnbHlwaHN9ID0gdGhpcy5vd25lci5sYXlvdXQ7XHJcblxyXG4gICAgaWYgKHRoaXMuZ2x5cGhJbmRleCA+PSBnbHlwaHMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuZ2x5cGhJbmRleCA9IGdseXBocy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERlZmF1bHQgY2FyZXQgcGxhY2UgLSBzdGFydCBvZiB0aGUgaW5wdXQgZmllbGQgVE9ETyBpbXBsZW1lbnQgYWxpZ25cclxuICAgIGxldCBnbHlwaE1ldHJpY3MgPSB7XHJcbiAgICAgIHg6IHRoaXMub3duZXIucG9zaXRpb24ueCxcclxuICAgICAgeTogdGhpcy5vd25lci5wb3NpdGlvbi55XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGlmIHN0cmluZyBpcyBlbXB0eSwgcHV0IGNhcmV0IGF0IHRoZSBiZWdpbm5pbmdcclxuICAgIGlmICh0aGlzLm93bmVyLmxheW91dC5nbHlwaHMubGVuZ3RoID09PSAtMSkge1xyXG5cclxuICAgICAgLy8gaWYgd2Ugb24gdGhlIGxhc3QgZ2x5cGgsIHBsYWNlIGNhcmV0IGFmdGVyIGl0XHJcbiAgICB9ZWxzZSBpZiAodGhpcy5nbHlwaEluZGV4ID09PSBnbHlwaHMubGVuZ3RoKSB7XHJcblxyXG4gICAgICBjb25zdCBsYXN0R2x5cGggPSBnbHlwaHNbZ2x5cGhzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgZ2x5cGhNZXRyaWNzLnggKz0gbGFzdEdseXBoLm1ldHJpY3MueCArIGxhc3RHbHlwaC5tZXRyaWNzLndpZHRoO1xyXG4gICAgICBnbHlwaE1ldHJpY3MueSArPSBsYXN0R2x5cGgubWV0cmljcy55O1xyXG5cclxuICAgICAgLy8gaWYgY2FyZXQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgdGV4dFxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmdseXBoSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkR2x5cGggPSBnbHlwaHNbdGhpcy5nbHlwaEluZGV4XTtcclxuXHJcbiAgICAgIGdseXBoTWV0cmljcy54ICs9IHNlbGVjdGVkR2x5cGgubWV0cmljcy54ICsgc2VsZWN0ZWRHbHlwaC5tZXRyaWNzLndpZHRoO1xyXG4gICAgICBnbHlwaE1ldHJpY3MueSArPSBzZWxlY3RlZEdseXBoLm1ldHJpY3MueTtcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBnbHlwaE1ldHJpY3MueSArPSB0aGlzLm93bmVyLnN0eWxlLmxpbmVIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdHJhbnNmb3JtID0gT2JqZWN0LnZhbHVlcyh0aGlzLm93bmVyLnRyYW5zZm9ybS53b3JsZFRyYW5zZm9ybSkuc2xpY2UoMCwgNik7XHJcblxyXG5cclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBtYXRyaXgoJHt0cmFuc2Zvcm0uam9pbihcIiwgXCIpfSlgO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyBcInB4XCI7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgXCJweFwiO1xyXG5cclxuICAgIHRoaXMuc2V0UG9zaXRpb24oZ2x5cGhNZXRyaWNzLnggLCBnbHlwaE1ldHJpY3MueSk7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dChldmVudCkge1xyXG5cclxuICAgIGNvbnN0IHsgcmFuZ2UgfSA9IHRoaXMub3duZXIuc2VsZWN0O1xyXG5cclxuICAgIHRoaXMub3duZXIuc2VsZWN0LmNsZWFyU2VsZWN0ZWRSYW5nZSgpO1xyXG5cclxuICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgaWYgKGV2ZW50LmRhdGEgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAvLyBDb250ZW50IHdlIGFyZSBhYm91dCB0byBhZGRcclxuICAgIGxldCB0ZXh0VG9BZGQgPSBldmVudC5kYXRhO1xyXG5cclxuICAgIGlmICh0aGlzLm93bmVyLmNvbmZpZy51cHBlcmNhc2UpIHtcclxuICAgICAgdGV4dFRvQWRkID0gdGV4dFRvQWRkLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMub3duZXIuY29uZmlnLmxvd2VyY2FzZSkge1xyXG4gICAgICB0ZXh0VG9BZGQgPSB0ZXh0VG9BZGQudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiB0ZXh0IGlzIGVtcHR5IG5vd1xyXG4gICAgaWYgKHRoaXMub3duZXIubGF5b3V0LmdseXBocy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5vd25lci50ZXh0ID0gdGV4dFRvQWRkO1xyXG4gICAgICB0aGlzLmdseXBoSW5kZXggPSAxO1xyXG5cclxuICAgIC8vIElmIGNhcmV0IGlzIGF0IHRoZSBlbmQgb2YgdGhlIHRleHRcclxuICAgIH0gZWxzZSBpZiAodGhpcy5nbHlwaEluZGV4ID09PSB0aGlzLm93bmVyLmxheW91dC5nbHlwaHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICB0aGlzLm93bmVyLnRleHQgKz0gdGV4dFRvQWRkO1xyXG4gICAgICB0aGlzLmdseXBoSW5kZXgrKztcclxuXHJcbiAgICAvLyBJZiB3ZSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBsaW5lXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm93bmVyLmluc2VydFN0cmluZygrK3RoaXMuZ2x5cGhJbmRleCwgdGV4dFRvQWRkKTtcclxuICAgICAgLy90aGlzLmdseXBoSW5kZXgrKztcclxuICAgIH1cclxuICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKDAsIGZhbHNlKTtcclxuXHJcbiAgfVxyXG5cclxuICBvbktleWRvd24oZXZlbnQpIHtcclxuXHJcbiAgICBjb25zdCB7cmFuZ2V9ID0gdGhpcy5vd25lci5zZWxlY3Q7XHJcblxyXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgY2FzZSBcIkFycm93VXBcIjpcclxuICAgICAgICB0aGlzLm1vdmVVcCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcclxuICAgICAgICB0aGlzLm1vdmVEb3duKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XHJcblxyXG4gICAgICAgIC8vIE1vdmUgYnkgd29yZFxyXG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XHJcblxyXG4gICAgICAgICAgdGhpcy5tb3ZlQnlXb3JkTGVmdCgpXHJcblxyXG4gICAgICAgICAgLy8gU2VsZWN0XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5zaGlmdEtleSkge1xyXG5cclxuICAgICAgICAgIHRoaXMubW92ZVdpdGhTZWxlY3RMZWZ0KClcclxuXHJcbiAgICAgICAgICAvLyBKdXN0IG1vdmUgY3Vyc29yXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKDAsIGZhbHNlKTtcclxuICAgICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICAgICAgdGhpcy5nbHlwaEluZGV4LS07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XHJcblxyXG4gICAgICAgIC8vIE1vdmUgYnkgd29yZFxyXG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XHJcbiAgICAgICAgIHRoaXMubW92ZUJ5V29yZFJpZ2h0KCk7XHJcbiAgICAgICAgLy8gU2VsZWN0XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5zaGlmdEtleSkge1xyXG4gICAgICAgICAgdGhpcy5tb3ZlV2l0aFNlbGVjdFJpZ2h0KClcclxuXHJcbiAgICAgICAgLy8gSnVzdCBtb3ZlIGluZGV4XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKDAsIGZhbHNlKTtcclxuICAgICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICAgICAgdGhpcy5nbHlwaEluZGV4Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjpcclxuICAgICAgICBpZiAocmFuZ2VbMV0gIT09IG51bGwpIHtcclxuICAgICAgICAgIHRoaXMub3duZXIuc2VsZWN0LmNsZWFyU2VsZWN0ZWRSYW5nZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3duZXIucmVtb3ZlU3RyaW5nKHRoaXMuZ2x5cGhJbmRleC0tLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwiRGVsZXRlXCI6XHJcbiAgICAgICAgaWYgKHJhbmdlWzFdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICB0aGlzLm93bmVyLnNlbGVjdC5jbGVhclNlbGVjdGVkUmFuZ2UoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm93bmVyLnJlbW92ZVN0cmluZyh0aGlzLmdseXBoSW5kZXggKyAxLCAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gU2VsZWN0IGFsbFxyXG4gICAgICBjYXNlIFwiYVwiOlxyXG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XHJcbiAgICAgICAgICB0aGlzLm93bmVyLnNlbGVjdC5zZXRSYW5nZSgwLHRoaXMub3duZXIudGV4dC5sZW5ndGggLSAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gQ29weSB0byBjbGlwYm9hcmRcclxuICAgICAgY2FzZSBcImNcIjpcclxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xyXG4gICAgICAgICAgdGhpcy5jb3B5VG9DbGlwYm9hcmQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gQ3V0XHJcbiAgICAgIGNhc2UgXCJ4XCI6XHJcbiAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcclxuICAgICAgICAgIHRoaXMuY29weVRvQ2xpcGJvYXJkKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IFwiIFwiO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBcIlwiO1xyXG5cclxuICB9XHJcblxyXG4gIHNldFBvc2l0aW9uKHgsIHkpIHtcclxuXHJcbiAgICBjb25zdCB7YSA6IHNjYWxlWCwgZDogc2NhbGVZfSA9IHRoaXMub3duZXIudHJhbnNmb3JtLndvcmxkVHJhbnNmb3JtO1xyXG4gICAgY29uc3Qge3ggOiBsb2NhbFgsIHk6IGxvY2FsWSB9ID0gdGhpcy5vd25lci5wb3NpdGlvbjtcclxuXHJcbiAgICBsZXQgbGluZUhlaWdodCA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICogc2NhbGVZO1xyXG5cclxuICAgIHkgKj0gc2NhbGVZO1xyXG4gICAgeCAqPSBzY2FsZVg7XHJcblxyXG4gICAgeSAtPSBsaW5lSGVpZ2h0O1xyXG5cclxuICAgIHkgLT0gbG9jYWxZICogc2NhbGVZO1xyXG4gICAgeCAtPSBsb2NhbFggKiBzY2FsZVg7XHJcblxyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3h9cHhgO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUudG9wID0gYCR7eX1weGA7XHJcblxyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBcIiBcIjtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcclxuXHJcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBPYmplY3QudmFsdWVzKHRoaXMuZ2V0VHJhbnNmb3JtKCkpLnNsaWNlKDAsIDYpO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYG1hdHJpeCgke3RyYW5zZm9ybS5qb2luKFwiLCBcIil9KWA7XHJcbiAgfVxyXG5cclxuICBnZXRUcmFuc2Zvcm0oKSB7XHJcbiAgICBjb25zdCBvd25lclRyYW5zZm9ybSA9IHRoaXMub3duZXIudHJhbnNmb3JtLndvcmxkVHJhbnNmb3JtO1xyXG4gICAgbGV0IGNhbnZhc1JlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHJldHVybiB7Li4ub3duZXJUcmFuc2Zvcm0sIHR4OiBvd25lclRyYW5zZm9ybS50eCArIGNhbnZhc1JlY3QueCwgdHk6IG93bmVyVHJhbnNmb3JtLnR5ICsgY2FudmFzUmVjdC55fTtcclxuICB9XHJcblxyXG4gIGFkZEV2ZW50KGV2ZW50LCBjYWxsYmFjaykge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLl9lbmFibGVkKSB7XHJcbiAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvcHlUb0NsaXBib2FyZChjdXQgPSBmYWxzZSkge1xyXG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLm93bmVyLnNlbGVjdC5yYW5nZTtcclxuICAgIGNvbnN0IHN0YXJ0ID0gTWF0aC5taW4uYXBwbHkobnVsbCwgcmFuZ2UpO1xyXG4gICAgY29uc3QgZW5kID0gTWF0aC5tYXguYXBwbHkobnVsbCwgcmFuZ2UpO1xyXG5cclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gdGhpcy5vd25lci50ZXh0LnNsaWNlKHN0YXJ0LCBlbmQgKyAxKTtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnNlbGVjdCgpO1xyXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgIGlmIChjdXQpIHtcclxuICAgICAgdGhpcy5vd25lci5zZWxlY3QuY2xlYXJTZWxlY3RlZFJhbmdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwYXN0ZUZyb21DbGlwYm9hcmQoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgdGV4dCA9IGV2ZW50LmNsaXBib2FyZERhdGEuZ2V0RGF0YShcInRleHRcIik7XHJcblxyXG4gICAgaWYgKHRoaXMub3duZXIuY29uZmlnLnVwcGVyY2FzZSlcclxuICAgICAgdGV4dCA9IHRleHQudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICBpZiAodGhpcy5vd25lci5jb25maWcubG93ZXJjYXNlKVxyXG4gICAgICB0ZXh0ID0gdGV4dC50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIC8vIFRPRE8gcmVtb3ZlIGFsbCB0cmFzaCBzeW1ib2xzXHJcblxyXG4gICAgdGhpcy5vd25lci5zZWxlY3QuY2xlYXJTZWxlY3RlZFJhbmdlKCk7XHJcblxyXG4gICAgdGhpcy5vd25lci5pbnNlcnRTdHJpbmcodGhpcy5nbHlwaEluZGV4ICsgMSwgdGV4dCk7XHJcblxyXG4gICAgdGhpcy5nbHlwaEluZGV4ID0gdGhpcy5nbHlwaEluZGV4ICsgdGV4dC5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBtb3ZlV2l0aFNlbGVjdFJpZ2h0KCkge1xyXG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLm93bmVyLnNlbGVjdC5yYW5nZTtcclxuXHJcbiAgICBpZiAocmFuZ2VbMV0gPT09IG51bGwpIHtcclxuICAgICAgKyt0aGlzLmdseXBoSW5kZXg7XHJcbiAgICAgIHJhbmdlWzBdID0gdGhpcy5nbHlwaEluZGV4O1xyXG4gICAgICByYW5nZVsxXSA9IHRoaXMuZ2x5cGhJbmRleCA7XHJcbiAgICB9IGVsc2UgaWYgKHJhbmdlWzFdID09PSByYW5nZVswXSAmJiB0aGlzLmdseXBoSW5kZXggPT09IHJhbmdlWzBdIC0gMSkge1xyXG4gICAgICByYW5nZVsxXSA9IG51bGw7XHJcbiAgICAgIHRoaXMuZ2x5cGhJbmRleCsrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vd25lci5zZWxlY3QuZXhwYW5kKDEpO1xyXG4gICAgICB0aGlzLmdseXBoSW5kZXgrK1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub3duZXIuc2VsZWN0LnVwZGF0ZSgpXHJcbiAgfVxyXG5cclxuICBtb3ZlV2l0aFNlbGVjdExlZnQoKSB7XHJcblxyXG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLm93bmVyLnNlbGVjdC5yYW5nZTtcclxuXHJcbiAgICAvLyBJZiB3ZSBvbmx5IGhhdmUgY3Vyc29yLCBubyBzZWxlY3Rpb25cclxuICAgIGlmIChyYW5nZVsxXSA9PT0gbnVsbCkge1xyXG4gICAgICByYW5nZVswXSA9IHRoaXMuZ2x5cGhJbmRleDtcclxuICAgICAgcmFuZ2VbMV0gPSB0aGlzLmdseXBoSW5kZXggO1xyXG5cclxuICAgICAgLy8gSWYgd2UgaGF2ZSBzZWxlY3RlZCBvbmUgZ2x5cGggYW5kIHdlIHJlbW92ZSBzZWxlY3Rpb25cclxuICAgIH0gZWxzZSBpZiAocmFuZ2VbMV0gPT09IHJhbmdlWzBdICYmIHRoaXMuZ2x5cGhJbmRleCA9PT0gcmFuZ2VbMF0pIHtcclxuICAgICAgcmFuZ2VbMV0gPSBudWxsO1xyXG5cclxuICAgICAgLy8gUmVndWxhciBzZWxlY3RpbmdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3duZXIuc2VsZWN0LmV4cGFuZCgtMSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nbHlwaEluZGV4LS07XHJcblxyXG4gICAgdGhpcy5vd25lci5zZWxlY3QudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlRG93bigpIHtcclxuXHJcbiAgICB0aGlzLm93bmVyLnNlbGVjdC5zZXRSYW5nZShudWxsLCBmYWxzZSlcclxuXHJcbiAgICBjb25zdCBnbHlwaCA9IHRoaXMubGF5b3V0LmdseXBoc1tNYXRoLm1heCgwLCB0aGlzLmdseXBoSW5kZXgpXTtcclxuXHJcbiAgICAvLyBJZiB3ZSBhcmUgb24gdGhlIGZpcnN0IGxpbmVcclxuICAgIGlmIChnbHlwaC5wb3NpdGlvblsxXSA9PT0gdGhpcy5sYXlvdXQuaGVpZ2h0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdHbHlwaCA9IHRoaXMub3duZXIuc2VsZWN0LmdldENsb3Nlc3RHbHlwaChnbHlwaC5wb3NpdGlvblswXSwgZ2x5cGgucG9zaXRpb25bMV0pO1xyXG4gICAgdGhpcy5nbHlwaEluZGV4ID0gdGhpcy5sYXlvdXQuZ2x5cGhzLmluZGV4T2YobmV3R2x5cGgpO1xyXG4gIH1cclxuXHJcbiAgbW92ZVVwKCkge1xyXG5cclxuICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKG51bGwsIGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGdseXBoID0gdGhpcy5sYXlvdXQuZ2x5cGhzW3RoaXMuZ2x5cGhJbmRleF07XHJcblxyXG4gICAgLy8gSWYgd2UgYXJlIG9uIHRoZSBmaXJzdCBsaW5lXHJcbiAgICBpZiAoZ2x5cGgucG9zaXRpb25bMV0gPD0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld0dseXBoID0gdGhpcy5vd25lci5zZWxlY3QuZ2V0Q2xvc2VzdEdseXBoKGdseXBoLnBvc2l0aW9uWzBdLCBnbHlwaC5wb3NpdGlvblsxXSAtIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICogMik7XHJcbiAgICB0aGlzLmdseXBoSW5kZXggPSB0aGlzLmxheW91dC5nbHlwaHMuaW5kZXhPZihuZXdHbHlwaCk7XHJcblxyXG4gIH1cclxuXHJcbiAgbW92ZUJ5V29yZExlZnQoKSB7XHJcbiAgICBjb25zdCBnbHlwaHMgPSB0aGlzLmxheW91dC5nbHlwaHM7XHJcblxyXG4gICAgaWYgKHRoaXMuZ2x5cGhJbmRleCA+IDApIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHRoaXMuZ2x5cGhJbmRleCAtIDI7IGkgPj0gMDsgaS0tICkge1xyXG4gICAgICAgIGlmIChnbHlwaHNbaV0ubGV0dGVyID09PSBcIiBcIiAmJiBnbHlwaHNbaSArIDEgXS5sZXR0ZXIgIT09IFwiIFwiKSB7XHJcbiAgICAgICAgICB0aGlzLmdseXBoSW5kZXggPSBpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaSA9PT0gMCApIHRoaXMuZ2x5cGhJbmRleCA9IC0xO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtb3ZlQnlXb3JkUmlnaHQoKSB7XHJcbiAgICBjb25zdCBnbHlwaHMgPSB0aGlzLmxheW91dC5nbHlwaHM7XHJcblxyXG4gICAgaWYgKHRoaXMuZ2x5cGhJbmRleCA8IGdseXBocy5sZW5ndGgpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHRoaXMuZ2x5cGhJbmRleCArIDE7IGkgPD0gZ2x5cGhzLmxlbmd0aCAtIDE7IGkrKyApIHtcclxuICAgICAgICBpZiAoZ2x5cGhzW2ldLmxldHRlciA9PT0gXCIgXCIgJiYgZ2x5cGhzW2kgLSAxIF0ubGV0dGVyICE9PSBcIiBcIikge1xyXG4gICAgICAgICAgdGhpcy5nbHlwaEluZGV4ID0gaTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGkgPT09IGdseXBocy5sZW5ndGggLSAxKSB0aGlzLmdseXBoSW5kZXggPSBnbHlwaHMubGVuZ3RoIC0xO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5wdXQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG5hdHRyaWJ1dGUgdmVjMiBhVmVydGV4UG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzIgYVRleHR1cmVDb29yZDtcXG5hdHRyaWJ1dGUgZmxvYXQgYVNkZlNpemU7XFxuXFxudW5pZm9ybSBtYXQzIHRyYW5zbGF0aW9uTWF0cml4O1xcbnVuaWZvcm0gbWF0MyBwcm9qZWN0aW9uTWF0cml4O1xcbnVuaWZvcm0gZmxvYXQgc2RmTXVsdGlwbGllcjtcXG5cXG52YXJ5aW5nIHZlYzIgIHRjMDtcXG52YXJ5aW5nIGZsb2F0IGRvZmZzZXQ7XFxudmFyeWluZyBmbG9hdCBzZGZfdGV4ZWw7XFxuXFxuXFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG5cXG4gICAgLy9UT0RPIE1BS0UgQVRUUklCVVRFXFxuICAgIGZsb2F0IHNkZl9zaXplID0gYVNkZlNpemUgKiBzZGZNdWx0aXBsaWVyO1xcblxcbiAgICAvL1RPRE8gTUFLRSBVTklGT1JNU1xcbiAgICBmbG9hdCBzZGZfdGV4X3NpemUgPSAxMDI0LjA7XFxuXFxuXFxuICAgIHRjMCA9IGFUZXh0dXJlQ29vcmQ7XFxuICAgIGRvZmZzZXQgPSAxLjAgLyBzZGZfc2l6ZTsgICAgICAgLy8gRGlzdGFuY2UgZmllbGQgZGVsdGEgZm9yIG9uZSBzY3JlZW4gcGl4ZWxcXG4gICAgc2RmX3RleGVsID0gMS4wIC8gc2RmX3RleF9zaXplO1xcblxcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQoKHByb2plY3Rpb25NYXRyaXggKiB0cmFuc2xhdGlvbk1hdHJpeCAqIHZlYzMoYVZlcnRleFBvc2l0aW9uICwgMS4wKSkueHksIDAuMCwgMS4wKTtcXG5cXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL3RleHQvdmVydC5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG51bmlmb3JtIHNhbXBsZXIyRCB1U2FtcGxlcjtcXG51bmlmb3JtIGZsb2F0IGhpbnRfYW1vdW50O1xcbnVuaWZvcm0gZmxvYXQgc3VicGl4ZWxfYW1vdW50O1xcblxcbnVuaWZvcm0gdmVjMyBiZ19jb2xvcjtcXG51bmlmb3JtIHZlYzMgZm9udF9jb2xvcjtcXG5cXG52YXJ5aW5nIHZlYzIgIHRjMDtcXG52YXJ5aW5nIGZsb2F0IGRvZmZzZXQ7XFxudmFyeWluZyBmbG9hdCBzZGZfdGV4ZWw7XFxuXFxuXFxuLypcXG4gKiAgU3VicGl4ZWwgY292ZXJhZ2UgY2FsY3VsYXRpb25cXG4gKlxcbiAqICB2IC0gZWRnZSBzbG9wZSAgICAtMS4wIHRvIDEuMCAgICAgICAgICB0cmlwbGV0XFxuICogIGEgLSBwaXhlbCBjb3ZlcmFnZSAwLjAgdG8gMS4wICAgICAgICAgIGNvdmVyYWdlXFxuICpcXG4gKiAgICAgIHw8LSBnbHlwaCBlZGdlICAgICAgICAgICAgICAgICAgICAgIFIgIEcgIEJcXG4gKiAgKy0tLSstLS0rICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0rLS0rLS0rXFxuICogIHwgICB8WFhYfCB2ID0gMS4wIChlZGdlIGZhY2luZyB3ZXN0KSAgfCAgfHh4fFhYfFxcbiAqICB8ICAgfFhYWHwgYSA9IDAuNSAoNTAlIGNvdmVyYWdlKSAgICAgIHwgIHx4eHxYWHxcXG4gKiAgfCAgIHxYWFh8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB8eHh8WFh8XFxuICogICstLS0rLS0tKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tKy0tKy0tK1xcbiAqICAgIHBpeGVsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwICA1MCAxMDBcXG4gKlxcbiAqXFxuICogICAgICAgIFIgICBHICAgQlxcbiAqXFxuICogICAxLjAgICAgICAgICstLSsgICA8LSB0b3AgKGFicyggdiApKVxcbiAqICAgICAgICAgICAgICB8XFxuICogICAgICAgLSstLS0tLSstLSstLSA8LSBjZWlsOiAxMDAlIGNvdmVyYWdlXFxuICogICAgICAgIHwgICAgIHxYWHxcXG4gKiAgIDAuMCAgfCAgKy0tK1hYfFxcbiAqICAgICAgICB8ICB8eHh8WFh8XFxuICogICAgICAgLSstLSstLSstLSstLSA8LSBmbG9vcjogMCUgY292ZXJhZ2VcXG4gKiAgICAgICAgICAgfFxcbiAqICAtMS4wICArLS0rICAgICAgICAgPC0gIC1hYnModilcXG4gKiAgICAgICAgfFxcbiAqICAgICAgICB8XFxuICogICAgICAgIHxcXG4gKiAgLTIuMCAgKyAgICAgICAgICAgIDwtIGJvdHRvbTogLWFicyh2KS0xLjBcXG4gKi9cXG5cXG52ZWMzIHN1YnBpeGVsKCBmbG9hdCB2LCBmbG9hdCBhICkge1xcbiAgICBmbG9hdCB2dCAgICAgID0gMC42ICogdjsgLy8gMS4wIHdpbGwgbWFrZSB5b3VyIGV5ZXMgYmxlZWRcXG4gICAgdmVjMyAgcmdiX21heCA9IHZlYzMoIC12dCwgMC4wLCB2dCApO1xcbiAgICBmbG9hdCB0b3AgICAgID0gYWJzKCB2dCApO1xcbiAgICBmbG9hdCBib3R0b20gID0gLXRvcCAtIDEuMDtcXG4gICAgZmxvYXQgY2Zsb29yICA9IG1peCggdG9wLCBib3R0b20sIGEgKTtcXG4gICAgdmVjMyAgcmVzICAgICA9IGNsYW1wKCByZ2JfbWF4IC0gdmVjMyggY2Zsb29yICksIDAuMCwgMS4wICk7XFxuICAgIHJldHVybiByZXM7XFxufVxcblxcbnZvaWQgbWFpbigpIHtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCgxLjAsIDEuMCwgMS4wLDEuMCk7XFxufVxcblxcbnZvaWQgbWFpbjIodm9pZCkge1xcblxcbiAgICAvLyBTYW1wbGluZyB0aGUgdGV4dHVyZSwgTCBwYXR0ZXJuXFxuICAgIGZsb2F0IHNkZiAgICAgICA9IHRleHR1cmUyRCggdVNhbXBsZXIsIHRjMCApLnI7XFxuICAgIGZsb2F0IHNkZl9ub3J0aCA9IHRleHR1cmUyRCggdVNhbXBsZXIsIHRjMCArIHZlYzIoIDAuMCwgc2RmX3RleGVsICkgKS5yO1xcbiAgICBmbG9hdCBzZGZfZWFzdCAgPSB0ZXh0dXJlMkQoIHVTYW1wbGVyLCB0YzAgKyB2ZWMyKCBzZGZfdGV4ZWwsIDAuMCApICkucjtcXG5cXG4gICAgLy8gRXN0aW1hdGluZyBzdHJva2UgZGlyZWN0aW9uIGJ5IHRoZSBkaXN0YW5jZSBmaWVsZCBncmFkaWVudCB2ZWN0b3JcXG4gICAgdmVjMiAgc2dyYWQgICAgID0gdmVjMiggc2RmX2Vhc3QgLSBzZGYsIHNkZl9ub3J0aCAtIHNkZiApO1xcbiAgICBmbG9hdCBzZ3JhZF9sZW4gPSBtYXgoIGxlbmd0aCggc2dyYWQgKSwgMS4wIC8gMTI4LjAgKTtcXG4gICAgdmVjMiAgZ3JhZCAgICAgID0gc2dyYWQgLyB2ZWMyKCBzZ3JhZF9sZW4gKTtcXG4gICAgZmxvYXQgdmdyYWQgPSBhYnMoIGdyYWQueSApOyAvLyAwLjAgLSB2ZXJ0aWNhbCBzdHJva2UsIDEuMCAtIGhvcml6b250YWwgb25lXFxuXFxuICAgIGZsb2F0IGhvcnpfc2NhbGUgID0gMS4xOyAvLyBCbHVycmluZyB2ZXJ0aWNhbCBzdHJva2VzIGFsb25nIHRoZSBYIGF4aXMgYSBiaXRcXG4gICAgZmxvYXQgdmVydF9zY2FsZSAgPSAwLjY7IC8vIFdoaWxlIGFkZGluZyBzb21lIGNvbnRyYXN0IHRvIHRoZSBob3Jpem9udGFsIHN0cm9rZXNcXG4gICAgZmxvYXQgaGRvZmZzZXQgICAgPSBtaXgoIGRvZmZzZXQgKiBob3J6X3NjYWxlLCBkb2Zmc2V0ICogdmVydF9zY2FsZSwgdmdyYWQgKTtcXG4gICAgZmxvYXQgcmVzX2RvZmZzZXQgPSBtaXgoIGRvZmZzZXQsIGhkb2Zmc2V0LCBoaW50X2Ftb3VudCApO1xcblxcbiAgICBmbG9hdCBhbHBoYSAgICAgICA9IHNtb290aHN0ZXAoIDAuNSAtIHJlc19kb2Zmc2V0LCAwLjUgKyByZXNfZG9mZnNldCwgc2RmICk7XFxuXFxuICAgIC8vIEFkZGl0aW9uYWwgY29udHJhc3RcXG4gICAgYWxwaGEgICAgICAgICAgICAgPSBwb3coIGFscGhhLCAxLjAgKyAwLjIgKiB2Z3JhZCAqIGhpbnRfYW1vdW50ICk7XFxuXFxuICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gc3VwcG9ydCBmb3IgQVJCX2JsZW5kX2Z1bmNfZXh0ZW5kZWQgaW4gV2ViR0wuXFxuICAgIC8vIEZvcnR1bmF0ZWx5IHRoZSBiYWNrZ3JvdW5kIGlzIGZpbGxlZCB3aXRoIGEgc29saWQgY29sb3Igc28gd2UgY2FuIGRvXFxuICAgIC8vIHRoZSBibGVuZGluZyBpbnNpZGUgdGhlIHNoYWRlci5cXG5cXG4gICAgLy8gRGlzY2FyZGluZyBwaXhlbHMgYmV5b25kIGEgdGhyZXNob2xkIHRvIG1pbmltaXNlIHBvc3NpYmxlIGFydGlmYWN0cy5cXG4gICAgaWYgKCBhbHBoYSA8IDIwLjAgLyAyNTYuMCApIGRpc2NhcmQ7XFxuXFxuICAgIHZlYzMgY2hhbm5lbHMgPSBzdWJwaXhlbCggZ3JhZC54ICogMC41ICogc3VicGl4ZWxfYW1vdW50LCBhbHBoYSApICsgMC4xO1xcblxcbiAgICAvLyBGb3Igc3VicGl4ZWwgcmVuZGVyaW5nIHdlIGhhdmUgdG8gYmxlbmQgZWFjaCBjb2xvciBjaGFubmVsIHNlcGFyYXRlbHlcXG4gICAgdmVjMyByZXMgPSBtaXgoIGJnX2NvbG9yLCBmb250X2NvbG9yLCBjaGFubmVscyApO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KCByZXMsIDEuMCApO1xcbn1cXG5cXG5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvdGV4dC9mcmFnLmdsc2xcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjtcXG5cXG51bmlmb3JtIG1hdDMgdHJhbnNsYXRpb25NYXRyaXg7XFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb25NYXRyaXg7XFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG5cXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KChwcm9qZWN0aW9uTWF0cml4ICogdHJhbnNsYXRpb25NYXRyaXggKiB2ZWMzKGFWZXJ0ZXhQb3NpdGlvbiAsIDEuMCkpLnh5LCAwLjAsIDEuMCk7XFxuXFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy9zZWxlY3QvdmVydC5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG51bmlmb3JtIHZlYzMgYmdfY29sb3I7XFxudmFyeWluZyB2ZWMyICB0YzA7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGJnX2NvbG9yLDAuNDUpO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDEuMCwgMS4wLCAxLjAsMC4yKTtcXG59XFxuXFxuXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL3NlbGVjdC9mcmFnLmdsc2xcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImNsYXNzIFRleHQge1xyXG5cclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFBJWEkuR2VvbWV0cnkoKVxyXG4gICAgICAgICAgICAuYWRkQXR0cmlidXRlKCdhVmVydGV4UG9zaXRpb24nLCAvLyB0aGUgYXR0cmlidXRlIG5hbWVcclxuICAgICAgICAgICAgICAgIFstMTAwLCAtMTAwLCAvLyB4LCB5XHJcbiAgICAgICAgICAgICAgICAgICAgMTAwLCAtMTAwLCAvLyB4LCB5XHJcbiAgICAgICAgICAgICAgICAgICAgMTAwLCAxMDBdLCAvLyB4LCB5XHJcbiAgICAgICAgICAgICAgICAyKSAvLyB0aGUgc2l6ZSBvZiB0aGUgYXR0cmlidXRlXHJcblxyXG4gICAgICAgICAgICAuYWRkQXR0cmlidXRlKCdhQ29sb3InLCAvLyB0aGUgYXR0cmlidXRlIG5hbWVcclxuICAgICAgICAgICAgICAgIFsxLCAwLCAwLCAvLyByLCBnLCBiXHJcbiAgICAgICAgICAgICAgICAgICAgMCwgMSwgMCwgLy8gciwgZywgYlxyXG4gICAgICAgICAgICAgICAgICAgIDAsIDAsIDFdLCAvLyByLCBnLCBiXHJcbiAgICAgICAgICAgICAgICAzKSAvLyB0aGUgc2l6ZSBvZiB0aGUgYXR0cmlidXRlXHJcblxyXG4gICAgICAgICAgICAuYWRkQXR0cmlidXRlKCdhVXZzJywgLy8gdGhlIGF0dHJpYnV0ZSBuYW1lXHJcbiAgICAgICAgICAgICAgICBbMCwgMCwgLy8gdSwgdlxyXG4gICAgICAgICAgICAgICAgICAgIDEsIDAsIC8vIHUsIHZcclxuICAgICAgICAgICAgICAgICAgICAxLCAxXSwgLy8gdSwgdlxyXG4gICAgICAgICAgICAgICAgMik7IC8vIHRoZSBzaXplIG9mIHRoZSBhdHRyaWJ1dGVcclxuXHJcblxyXG4gICAgICAgIHRoaXMudmVydGV4U3JjID0gYFxyXG5cclxuICAgICAgICAgICAgcHJlY2lzaW9uIG1lZGl1bXAgZmxvYXQ7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjtcclxuICAgICAgICAgICAgYXR0cmlidXRlIHZlYzMgYUNvbG9yO1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGUgdmVjMiBhVXZzO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB1bmlmb3JtIG1hdDMgdHJhbnNsYXRpb25NYXRyaXg7XHJcbiAgICAgICAgICAgIHVuaWZvcm0gbWF0MyBwcm9qZWN0aW9uTWF0cml4O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB2YXJ5aW5nIHZlYzIgdlV2cztcclxuICAgICAgICAgICAgdmFyeWluZyB2ZWMzIHZDb2xvcjtcclxuICAgICAgICBcclxuICAgICAgICAgICAgdm9pZCBtYWluKCkge1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdlV2cyA9IGFVdnM7XHJcbiAgICAgICAgICAgICAgICB2Q29sb3IgPSBhQ29sb3I7XHJcbiAgICAgICAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHZlYzQoKHByb2plY3Rpb25NYXRyaXggKiB0cmFuc2xhdGlvbk1hdHJpeCAqIHZlYzMoYVZlcnRleFBvc2l0aW9uLCAxLjApKS54eSwgMC4wLCAxLjApO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB9YDtcclxuXHJcbiAgICAgICAgdGhpcy5mcmFnbWVudFNyYyA9IGBcclxuXHJcbiAgICAgICAgICAgIHByZWNpc2lvbiBtZWRpdW1wIGZsb2F0O1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB2YXJ5aW5nIHZlYzMgdkNvbG9yO1xyXG4gICAgICAgICAgICB2YXJ5aW5nIHZlYzIgdlV2cztcclxuICAgICAgICBcclxuICAgICAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgdVNhbXBsZXIyO1xyXG4gICAgICAgIFxyXG4gICAgICAgICAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDEuMCwgMC4wLCAxLjAsIDEuMCk7XHJcbiAgICAgICAgICAgIH1gO1xyXG5cclxuICAgICAgICBjb25zdCB1bmlmb3JtcyA9IHt1U2FtcGxlcjI6IFBJWEkuVGV4dHVyZS5mcm9tKCdleGFtcGxlcy9hc3NldHMvYmdfc2NlbmVfcm90YXRlLmpwZycpfTtcclxuICAgICAgICB0aGlzLnNoYWRlciA9IFBJWEkuU2hhZGVyLmZyb20odGhpcy52ZXJ0ZXhTcmMsIHRoaXMuZnJhZ21lbnRTcmMsIHVuaWZvcm1zKTtcclxuICAgICAgICB0aGlzLnRyaWFuZ2xlID0gbmV3IFBJWEkuTWVzaCh0aGlzLmdlb21ldHJ5LCB0aGlzLnNoYWRlcik7XHJcblxyXG4gICAgICAgIHRoaXMudHJpYW5nbGUuYXdlc29tZVRleHQgPSB0aGlzO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy50cmlhbmdsZTtcclxuICAgIH1cclxuXHJcbiAgICBhZGQoY29udGFpbmVyKSB7XHJcbiAgICAgICAgY29udGFpbmVyLmFkZENoaWxkKHRoaXMudHJpYW5nbGUpXHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbmV3LmpzIl0sInNvdXJjZVJvb3QiOiIifQ==