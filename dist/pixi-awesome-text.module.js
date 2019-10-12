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

	module.exports = "#define GLSLIFY 1\nuniform sampler2D uSampler;\nuniform float hint_amount;\nuniform float subpixel_amount;\n\nuniform vec3 bg_color;\nuniform vec3 font_color;\n\nvarying vec2  tc0;\nvarying float doffset;\nvarying float sdf_texel;\n\n\n/*\n *  Subpixel coverage calculation\n *\n *  v - edge slope    -1.0 to 1.0          triplet\n *  a - pixel coverage 0.0 to 1.0          coverage\n *\n *      |<- glyph edge                      R  G  B\n *  +---+---+                             +--+--+--+\n *  |   |XXX| v = 1.0 (edge facing west)  |  |xx|XX|\n *  |   |XXX| a = 0.5 (50% coverage)      |  |xx|XX|\n *  |   |XXX|                             |  |xx|XX|\n *  +---+---+                             +--+--+--+\n *    pixel                                0  50 100\n *\n *\n *        R   G   B\n *\n *   1.0        +--+   <- top (abs( v ))\n *              |\n *       -+-----+--+-- <- ceil: 100% coverage\n *        |     |XX|\n *   0.0  |  +--+XX|\n *        |  |xx|XX|\n *       -+--+--+--+-- <- floor: 0% coverage\n *           |\n *  -1.0  +--+         <-  -abs(v)\n *        |\n *        |\n *        |\n *  -2.0  +            <- bottom: -abs(v)-1.0\n */\n\nvec3 subpixel( float v, float a ) {\n    float vt      = 0.6 * v; // 1.0 will make your eyes bleed\n    vec3  rgb_max = vec3( -vt, 0.0, vt );\n    float top     = abs( vt );\n    float bottom  = -top - 1.0;\n    float cfloor  = mix( top, bottom, a );\n    vec3  res     = clamp( rgb_max - vec3( cfloor ), 0.0, 1.0 );\n    return res;\n}\n\nvoid main2() {\n    gl_FragColor = vec4(1.0, 1.0, 1.0,1.0);\n}\n\nvoid main(void) {\n\n    // Sampling the texture, L pattern\n    float sdf       = texture2D( uSampler, tc0 ).r;\n    float sdf_north = texture2D( uSampler, tc0 + vec2( 0.0, sdf_texel ) ).r;\n    float sdf_east  = texture2D( uSampler, tc0 + vec2( sdf_texel, 0.0 ) ).r;\n\n    // Estimating stroke direction by the distance field gradient vector\n    vec2  sgrad     = vec2( sdf_east - sdf, sdf_north - sdf );\n    float sgrad_len = max( length( sgrad ), 1.0 / 128.0 );\n    vec2  grad      = sgrad / vec2( sgrad_len );\n    float vgrad = abs( grad.y ); // 0.0 - vertical stroke, 1.0 - horizontal one\n\n    float horz_scale  = 1.1; // Blurring vertical strokes along the X axis a bit\n    float vert_scale  = 0.6; // While adding some contrast to the horizontal strokes\n    float hdoffset    = mix( doffset * horz_scale, doffset * vert_scale, vgrad );\n    float res_doffset = mix( doffset, hdoffset, hint_amount );\n\n    float alpha       = smoothstep( 0.5 - res_doffset, 0.5 + res_doffset, sdf );\n\n    // Additional contrast\n    alpha             = pow( alpha, 1.0 + 0.2 * vgrad * hint_amount );\n\n    // Unfortunately there is no support for ARB_blend_func_extended in WebGL.\n    // Fortunately the background is filled with a solid color so we can do\n    // the blending inside the shader.\n\n    // Discarding pixels beyond a threshold to minimise possible artifacts.\n    if ( alpha < 20.0 / 256.0 ) discard;\n\n    vec3 channels = subpixel( grad.x * 0.5 * subpixel_amount, alpha ) + 0.1;\n\n    // For subpixel rendering we have to blend each color channel separately\n    vec3 res = mix( bg_color, font_color, channels );\n    gl_FragColor = vec4( res, 1.0 );\n}\n\n\n"

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
/***/ (function(module, exports, __webpack_require__) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports["default"] = void 0;
	
	var _text = _interopRequireDefault(__webpack_require__(2));
	
	var _layout = _interopRequireDefault(__webpack_require__(3));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
	
	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var createIndices = __webpack_require__(5);
	
	var vertexShader = __webpack_require__(10);
	
	var fragmentShader = __webpack_require__(11);
	
	var Text =
	/*#__PURE__*/
	function () {
	  function Text(text, style, config) {
	    var _this = this;
	
	    _classCallCheck(this, Text);
	
	    this.style = new PIXI.TextStyle(style);
	    this.config = _extends({}, this.config, config);
	    this.backgroundColor = this.config.backgroundColor;
	    this._text = text; // Content
	
	    this._font = config.font; // Font information
	
	    this._texture = config.texture; // Texture with glyphs
	
	    this.layout = new _layout["default"](this, {
	      fontSize: this.style.fontSize,
	      wrapWords: this.style.breakWords,
	      wrapperWidth: this.style.wordWrapWidth,
	      align: this.style.align,
	      lineHeight: this.style.lineHeight
	    });
	    this.metrics = this.fontMetrics(this.style.fontSize, 0.0);
	    this.layout.update(); // Arrays for vertices, uvs and sdf
	
	    this.vertices = new Float32Array(this.layout.lettersCount * 4 * 2);
	    this.uvs = new Float32Array(this.layout.lettersCount * 4 * 2);
	    this.sdfSizes = new Float32Array(this.layout.lettersCount * 4);
	    this.arrayPositions = {
	      vertex: 0,
	      uvs: 0,
	      sdf: 0
	    }; // Fill arrays word by word
	
	    this.layout.wordsMetrics.forEach(function (word) {
	      _this.writeString(word.word, _this.font, _this.metrics, [word.x, word.y]);
	    }); // Prepare indices
	
	    this.indices = createIndices({
	      clockwise: true,
	      type: 'uint16',
	      count: this.layout.lettersCount
	    });
	    this.geometry = new PIXI.Geometry().addAttribute('aVertexPosition', // the attribute name
	    this.vertices, // x, y
	    2) // the size of the attribute
	    .addAttribute('aTextureCoord', // the attribute name
	    this.uvs, // u, v
	    2) // the size of the attribute
	    .addAttribute('aSdfSize', // the attribute name
	    this.sdfSizes, // u, v
	    1) // the size of the attribute
	    .addIndex(this.indices);
	    /*  glData.shader.uniforms.uSampler = this.renderer.bindTexture(source.texture);
	      glData.shader.uniforms.translationMatrix = source.worldTransform.toArray(true);
	        glData.shader.uniforms.hint_amount = source.config.antialiasing * 1;
	      glData.shader.uniforms.sdfMultiplier = AwesomeText.scale;
	      glData.shader.uniforms.subpixel_amount = source.config.antialiasing * 1;
	      glData.shader.uniforms.font_color = PIXI.utils.hex2rgb(source.style.fill.replace("#", "0x"));
	      glData.shader.uniforms.bg_color = PIXI.utils.hex2rgb(source.backgroundColor.replace("#", "0x"));*/
	
	    var uniforms = {
	      uSampler: this._texture,
	      hint_amount: this.config.antialiasing * 1,
	      sdfMultiplier: Text.scale,
	      subpixel_amount: this.config.antialiasing * 1,
	      font_color: PIXI.utils.hex2rgb(this.style.fill.replace("#", "0x")),
	      bg_color: PIXI.utils.hex2rgb(this.backgroundColor.replace("#", "0x"))
	    };
	    this.shader = PIXI.Shader.from(vertexShader, fragmentShader, uniforms);
	    this.triangle = new PIXI.Mesh(this.geometry, this.shader);
	    this.triangle.awesomeText = this;
	    return this.triangle;
	  }
	
	  _createClass(Text, [{
	    key: "writeString",
	    value: function writeString(string, font, font_metrics, pos) {
	      var _this2 = this;
	
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
	          return _this2.vertices[_this2.arrayPositions.vertex++] = pos;
	        });
	        rect.uvs.map(function (uv) {
	          return _this2.uvs[_this2.arrayPositions.uvs++] = uv;
	        });
	        rect.sdfSizes.map(function (sdf) {
	          return _this2.sdfSizes[_this2.arrayPositions.sdf++] = sdf;
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
	    key: "texture",
	    get: function get() {
	      return this._texture;
	    }
	  }, {
	    key: "font",
	    get: function get() {
	      return this._font;
	    }
	  }, {
	    key: "text",
	    get: function get() {
	      return this._text;
	    },
	    set: function set(value) {
	      this._text = value; //this.update();
	    }
	  }]);
	
	  return Text;
	}();
	
	_defineProperty(Text, "scale", 1.0);
	
	_defineProperty(Text, "states", {
	  regular: 0,
	  editable: 1,
	  selecting: 2
	});
	
	_defineProperty(Text, "currentEditingElement", null);
	
	var _default = Text;
	exports["default"] = _default;

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCA3ODA4NzllZDY1MWRlZjgzY2Y3YiIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2R0eXBlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYW4tYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvdmVydC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvZnJhZy5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3NlbGVjdC92ZXJ0Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvc2VsZWN0L2ZyYWcuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvbmV3LmpzIl0sIm5hbWVzIjpbIk9iamVjdCIsImFzc2lnbiIsIlBJWEkiLCJleHRyYXMiLCJBd2Vzb21lVGV4dCIsIlRleHQiLCJ2ZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsInNlbGVjdFZlcnRleHRTaGFkZXIiLCJzZWxlY3RGcmFnbWVudFNoYWRlciIsImdsQ29yZSIsIkF3ZXNvbWVUZXh0UmVuZGVyZXIiLCJyZW5kZXJlciIsInRleHRTaGFkZXIiLCJzZWxlY3RTaGFkZXIiLCJnbCIsImdldEV4dGVuc2lvbiIsIlNoYWRlciIsInNvdXJjZSIsImdsRGF0YSIsIl9nbERhdGFzIiwiY29udGV4dFRleHQiLCJiaW5kVmFvIiwiYnVpbGRUZXh0R2xEYXRhIiwidmFvIiwiZGlydHkiLCJ1dkJ1ZmZlciIsInVwbG9hZCIsInV2cyIsImluZGV4RGlydHkiLCJpbmRleEJ1ZmZlciIsImluZGljZXMiLCJ2ZXJ0ZXhCdWZmZXIiLCJ2ZXJ0aWNlcyIsImJpbmRTaGFkZXIiLCJzaGFkZXIiLCJzdGF0ZSIsInNldEJsZW5kTW9kZSIsImJsZW5kTW9kZSIsInVuaWZvcm1zIiwidVNhbXBsZXIiLCJiaW5kVGV4dHVyZSIsInRleHR1cmUiLCJ0cmFuc2xhdGlvbk1hdHJpeCIsIndvcmxkVHJhbnNmb3JtIiwidG9BcnJheSIsImhpbnRfYW1vdW50IiwiY29uZmlnIiwiYW50aWFsaWFzaW5nIiwic2RmTXVsdGlwbGllciIsInNjYWxlIiwic3VicGl4ZWxfYW1vdW50IiwiZm9udF9jb2xvciIsInV0aWxzIiwiaGV4MnJnYiIsInN0eWxlIiwiZmlsbCIsInJlcGxhY2UiLCJiZ19jb2xvciIsImJhY2tncm91bmRDb2xvciIsImRyYXdNb2RlIiwiVFJJQU5HTEVTIiwiZHJhdyIsImxlbmd0aCIsImNvbnRleHRTZWxlY3QiLCJzZWxlY3QiLCJidWlsZFNlbGVjdEdsRGF0YSIsInNlbGVjdENvbG9yIiwic3R5bGVJRCIsInVwZGF0ZSIsInN0YXRlcyIsImVkaXRhYmxlIiwic2VsZWN0aW5nIiwicmVuZGVyU2VsZWN0IiwicmVuZGVyVGV4dCIsIkdMQnVmZmVyIiwiY3JlYXRlVmVydGV4QnVmZmVyIiwiU1RSRUFNX0RSQVciLCJzZGZCdWZmZXIiLCJzZGZTaXplcyIsIlNUQVRJQ19EUkFXIiwiY3JlYXRlSW5kZXhCdWZmZXIiLCJWZXJ0ZXhBcnJheU9iamVjdCIsImFkZEluZGV4IiwiYWRkQXR0cmlidXRlIiwiYXR0cmlidXRlcyIsImFWZXJ0ZXhQb3NpdGlvbiIsIkZMT0FUIiwiYVRleHR1cmVDb29yZCIsImFTZGZTaXplIiwiT2JqZWN0UmVuZGVyZXIiLCJSZW5kZXJlciIsInJlZ2lzdGVyUGx1Z2luIiwiY3JlYXRlSW5kaWNlcyIsInRleHQiLCJyZWd1bGFyIiwidXBwZXJjYXNlIiwibG93ZXJjYXNlIiwiVGV4dFN0eWxlIiwiX3RleHQiLCJfZm9udCIsImZvbnQiLCJfdGV4dHVyZSIsImxheW91dCIsIlRleHRMYXlvdXQiLCJmb250U2l6ZSIsIndyYXBXb3JkcyIsImJyZWFrV29yZHMiLCJ3cmFwcGVyV2lkdGgiLCJ3b3JkV3JhcFdpZHRoIiwiYWxpZ24iLCJsaW5lSGVpZ2h0IiwiaW50ZXJhY3RpdmUiLCJidXR0b25Nb2RlIiwiU2VsZWN0IiwiaW5wdXQiLCJJbnB1dCIsInNldFN0YXRlIiwibWV0cmljcyIsImZvbnRNZXRyaWNzIiwiRmxvYXQzMkFycmF5IiwibGV0dGVyc0NvdW50IiwiYXJyYXlQb3NpdGlvbnMiLCJ2ZXJ0ZXgiLCJzZGYiLCJ3b3Jkc01ldHJpY3MiLCJmb3JFYWNoIiwid29yZCIsIndyaXRlU3RyaW5nIiwieCIsInkiLCJjbG9ja3dpc2UiLCJ0eXBlIiwiY291bnQiLCJuZXdTdGF0ZSIsInZhbHVlcyIsInNldFJlZ3VsYXJTdGF0ZSIsInNldEVkaXRhYmxlU3RhdGUiLCJjdXJyZW50RWRpdGluZ0VsZW1lbnQiLCJvZmYiLCJlbmFibGVkIiwib24iLCJlIiwiY2xpY2tzQ291bnQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsInNldFJhbmdlIiwiaW5wdXRFbGVtZW50IiwiZm9jdXMiLCJvbk1vdXNlRG93biIsInNob3ciLCJkYXRhIiwib3JpZ2luYWxFdmVudCIsIm1vdmVtZW50WCIsIm1vdmVtZW50WSIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwiaW5kZXgiLCJzdHJpbmciLCJzdWJzdHIiLCJuZXdUZXh0Iiwic3BsaXQiLCJzcGxpY2UiLCJqb2luIiwiZm9udF9tZXRyaWNzIiwicG9zIiwicHJldl9jaGFyIiwiY3BvcyIsInhfbWF4IiwiY2FwU2NhbGUiLCJzdHJfcG9zIiwic2NoYXIiLCJmb250X2NoYXIiLCJjaGFycyIsImtlcm4iLCJyZWN0IiwiY2hhclJlY3QiLCJwb3NpdGlvbnMiLCJtYXAiLCJ1diIsInN0cmluZ19wb3MiLCJtb3JlTGluZUdhcCIsImNhcF9oZWlnaHQiLCJ4X2hlaWdodCIsImZvbnRBc2NlbnQiLCJhc2NlbnQiLCJkZXNjZW50IiwibGluZV9nYXAiLCJsb3dTY2FsZSIsIk1hdGgiLCJyb3VuZCIsImxvd2Nhc2UiLCJmbGFncyIsImJhc2VsaW5lIiwiZyIsImJvdHRvbSIsIml5IiwidG9wIiwicm93X2hlaWdodCIsImxlZnQiLCJiZWFyaW5nX3giLCJpeCIsInJpZ2h0IiwicCIsIm5ld19wb3NfeCIsImFkdmFuY2VfeCIsInNkZl9zaXplIiwidmFsdWUiLCJTaW1wbGVNZXNoIiwib3duZXIiLCJzdGFydFkiLCJjYWxjdWxhdGVXb3Jkc1Bvc2l0aW9ucyIsImdseXBocyIsImdldEdseXBocyIsIndpZHRoIiwiaGVpZ2h0IiwiY2hhciIsIndvcmRzIiwiaSIsInN0YXJ0WCIsIndvcmRTaXplIiwiZ2V0U3RyaW5nU2l6ZSIsInB1c2giLCJsaW5lc0NvdW50Iiwid29yZHNPbkxpbmUiLCJmaWx0ZXIiLCJsYXN0V29yZCIsImZyZWVTcGFjZSIsImxlZnRPZmZzZXQiLCJsZXR0ZXIiLCJwb3NpdGlvbiIsInJhbmdlIiwiYnVpbGRWZXJ0aWNlcyIsInN0YXJ0IiwiZW5kIiwibWluIiwiYXBwbHkiLCJtYXgiLCJsZXR0ZXJDb3VudCIsImZpcnN0TGV0dGVyIiwibGFzdExldHRlciIsInN0YXJ0TGluZUxldHRlciIsImVuZExpbmVMZXR0ZXIiLCJvZmZzZXQiLCJzZWxlY3RpbmdMaW5lIiwiZmxvb3IiLCJzZWxlY3RpbmdMaW5lWSIsImxhc3RHbHlwaE9uTGluZSIsImZpcnN0R2x5cGhPbkxpbmUiLCJnbHlwaCIsImV2ZW50IiwiYnV0dG9uIiwiZ2xvYmFsIiwidHJhbnNmb3JtUG9zaXRpb24iLCJjbG9zZXN0TGV0dGVyIiwiZ2V0Q2xvc2VzdEdseXBoIiwiaW5kZXhPZiIsImdseXBoSW5kZXgiLCJvd25lclBvc2l0aW9uIiwiZ2V0R2xvYmFsUG9zaXRpb24iLCJ0cmFuc2Zvcm0iLCJ0eCIsInR5IiwiYSIsImQiLCJyZW1vdmVJbmRleCIsInJlbW92ZUxlbmd0aCIsImFicyIsInJlbW92ZVN0cmluZyIsImRpcmVjdGlvbiIsIl9nbHlwaEluZGV4IiwiX2VuYWJsZWQiLCJlbmFibGUiLCJkaXNhYmxlIiwiY2FudmFzIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsImNyZWF0ZUZpZWxkIiwiZGlzcGxheSIsImJvZHkiLCJhcHBlbmQiLCJjb250YWlucyIsInJlbW92ZUNoaWxkIiwib3BhY2l0eSIsImNyZWF0ZUVsZW1lbnQiLCJzbGljZSIsImNvbG9yIiwiYm9yZGVyIiwiY29udGFpbiIsInpJbmRleCIsInBvaW50ZXJFdmVudHMiLCJvdXRsaW5lIiwidHJhbnNmb3JtT3JpZ2luIiwicGFkZGluZyIsImFkZEV2ZW50Iiwib25JbnB1dCIsIm9uS2V5ZG93biIsInBhc3RlRnJvbUNsaXBib2FyZCIsImdseXBoTWV0cmljcyIsImxhc3RHbHlwaCIsInNlbGVjdGVkR2x5cGgiLCJzZXRQb3NpdGlvbiIsImNsZWFyU2VsZWN0ZWRSYW5nZSIsInRhcmdldCIsInRleHRUb0FkZCIsInRvVXBwZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJpbnNlcnRTdHJpbmciLCJrZXkiLCJtb3ZlVXAiLCJtb3ZlRG93biIsImN0cmxLZXkiLCJtb3ZlQnlXb3JkTGVmdCIsInNoaWZ0S2V5IiwibW92ZVdpdGhTZWxlY3RMZWZ0IiwibW92ZUJ5V29yZFJpZ2h0IiwibW92ZVdpdGhTZWxlY3RSaWdodCIsImNvcHlUb0NsaXBib2FyZCIsInNjYWxlWCIsInNjYWxlWSIsImxvY2FsWCIsImxvY2FsWSIsImdldFRyYW5zZm9ybSIsIm93bmVyVHJhbnNmb3JtIiwiY2FudmFzUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImN1dCIsImV4ZWNDb21tYW5kIiwicHJldmVudERlZmF1bHQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImV4cGFuZCIsIm5ld0dseXBoIiwiZ2VvbWV0cnkiLCJHZW9tZXRyeSIsImZyb20iLCJ0cmlhbmdsZSIsIk1lc2giLCJhd2Vzb21lVGV4dCJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1QkFBZTtBQUNmO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOztBQUNBOztBQUNBOzs7O0FBRUFBLE9BQU0sQ0FBQ0MsTUFBUCxDQUFjQyxJQUFJLENBQUNDLE1BQW5CLEVBQTJCO0FBQ3pCQyxjQUFXLEVBQUVDO0FBRFksRUFBM0I7O0FBSUEsS0FBSSxPQUFPSCxJQUFQLEtBQWdCLFdBQXBCLEVBQWlDO0FBQy9CLE9BQUlBLElBQUksQ0FBQ0MsTUFBVCxFQUFpQjtBQUNmRCxTQUFJLENBQUNDLE1BQUwsQ0FBWUMsV0FBWixHQUEwQkMsZUFBMUI7QUFDRCxJQUZELE1BRU87QUFDTEgsU0FBSSxDQUFDQyxNQUFMLEdBQWM7QUFBRUMsa0JBQVcsRUFBRUM7QUFBZixNQUFkO0FBQ0Q7QUFDRixFOzs7Ozs7Ozs7Ozs7O0FDZEQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLEtBQU1DLFlBQVksR0FBRyxtQkFBTyxDQUFDLEVBQUQsQ0FBNUI7O0FBQ0EsS0FBTUMsY0FBYyxHQUFHLG1CQUFPLENBQUMsRUFBRCxDQUE5Qjs7QUFFQSxLQUFNQyxtQkFBbUIsR0FBRyxtQkFBTyxDQUFDLEVBQUQsQ0FBbkM7O0FBQ0EsS0FBTUMsb0JBQW9CLEdBQUcsbUJBQU8sQ0FBQyxFQUFELENBQXBDOztBQUVBLEtBQU1DLE1BQU0sR0FBR1Is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Sk8sRUFJRkEsQ0FBQyxDQUFDLENBQUQsQ0FKQyxDQUlJO0FBSkosUUFBWjtBQU9BLFdBQU1wSCxRQUFRLEdBQUcsQ0FDYmdJLFFBRGEsRUFFYkEsUUFGYSxFQUdiQSxRQUhhLEVBSWJBLFFBSmEsQ0FBakI7QUFPQSxjQUFPO0FBQ0g3QixrQkFBUyxFQUFUQSxTQURHO0FBRUh0SixZQUFHLEVBQUhBLEdBRkc7QUFHSG1ELGlCQUFRLEVBQVJBLFFBSEc7QUFJSHVGLFlBQUcsRUFBRSxDQUFFdUMsU0FBRixFQUFhdkMsR0FBRyxDQUFDLENBQUQsQ0FBaEI7QUFKRixRQUFQLENBOUN1RCxDQXFEdkQ7QUFDSDs7O3lCQXRKYTtBQUNWLGNBQU8sS0FBS2hFLFFBQVo7QUFDSDs7O3lCQUVVO0FBQ1AsY0FBTyxLQUFLRixLQUFaO0FBQ0g7Ozt5QkFFVTtBQUNQLGNBQU8sS0FBS0QsS0FBWjtBQUNILE07dUJBRVE2RyxLLEVBQU87QUFDWixZQUFLN0csS0FBTCxHQUFhNkcsS0FBYixDQURZLENBRVo7QUFDSDs7Ozs7O2lCQXBHQzNNLEksV0FFYSxHOztpQkFGYkEsSSxZQUdjO0FBQUMwRixVQUFPLEVBQUUsQ0FBVjtBQUFheEIsV0FBUSxFQUFFLENBQXZCO0FBQTBCQyxZQUFTLEVBQUU7QUFBckMsRTs7aUJBSGRuRSxJLDJCQUk2QixJOztnQkEyT3BCQSxJIiwiZmlsZSI6InBpeGktYXdlc29tZS10ZXh0Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkF3ZXNvbWVUZXh0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkF3ZXNvbWVUZXh0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDc4MDg3OWVkNjUxZGVmODNjZjdiIiwiaW1wb3J0IFJlbmRlcmVyIGZyb20gXCIuL3JlbmRlcmVyXCI7XHJcbmltcG9ydCBUZXh0IGZyb20gXCIuL25ld1wiO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuL2xheW91dFwiO1xyXG5cclxuT2JqZWN0LmFzc2lnbihQSVhJLmV4dHJhcywge1xyXG4gIEF3ZXNvbWVUZXh0OiBUZXh0XHJcbn0pO1xyXG5cclxuaWYgKHR5cGVvZiBQSVhJICE9PSAndW5kZWZpbmVkJykge1xyXG4gIGlmIChQSVhJLmV4dHJhcykge1xyXG4gICAgUElYSS5leHRyYXMuQXdlc29tZVRleHQgPSBUZXh0O1xyXG4gIH0gZWxzZSB7XHJcbiAgICBQSVhJLmV4dHJhcyA9IHsgQXdlc29tZVRleHQ6IFRleHR9O1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IHtcclxuICBUZXh0LFxyXG4gIFJlbmRlcmVyLFxyXG4gIExheW91dFxyXG59XHJcblxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXguanMiLCJpbXBvcnQgQXdlc29tZVRleHQgZnJvbSBcIi4vdGV4dFwiO1xyXG5cclxuY29uc3QgdmVydGV4U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy90ZXh0L3ZlcnQuZ2xzbFwiKTtcclxuY29uc3QgZnJhZ21lbnRTaGFkZXIgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3RleHQvZnJhZy5nbHNsXCIpO1xyXG5cclxuY29uc3Qgc2VsZWN0VmVydGV4dFNoYWRlciA9IHJlcXVpcmUoXCIuL3NoYWRlcnMvc2VsZWN0L3ZlcnQuZ2xzbFwiKTtcclxuY29uc3Qgc2VsZWN0RnJhZ21lbnRTaGFkZXIgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3NlbGVjdC9mcmFnLmdsc2xcIik7XHJcblxyXG5jb25zdCBnbENvcmUgPSBQSVhJLmdsQ29yZTtcclxuXHJcbmNsYXNzIEF3ZXNvbWVUZXh0UmVuZGVyZXIgZXh0ZW5kcyBQSVhJLk9iamVjdFJlbmRlcmVyIHtcclxuXHJcbiAgc3RhdGljIGNvbnRleHRUZXh0ID0gMDtcclxuICBzdGF0aWMgY29udGV4dFNlbGVjdCA9IDE7XHJcblxyXG4gIHNlbGVjdENvbG9yID0gMHhGRkIzQzM7XHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcihyZW5kZXJlcikge1xyXG4gICAgc3VwZXIocmVuZGVyZXIpO1xyXG4gICAgdGhpcy50ZXh0U2hhZGVyID0gbnVsbDtcclxuICAgIHRoaXMuc2VsZWN0U2hhZGVyID0gbnVsbDtcclxuXHJcbiAgfVxyXG5cclxuICBvbkNvbnRleHRDaGFuZ2UoKSB7XHJcbiAgICBjb25zdCBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XHJcbiAgICBnbC5nZXRFeHRlbnNpb24oXCJPRVNfc3RhbmRhcmRfZGVyaXZhdGl2ZXNcIik7XHJcbiAgICB0aGlzLnRleHRTaGFkZXIgPSBuZXcgUElYSS5TaGFkZXIoZ2wsIHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xyXG4gICAgdGhpcy5zZWxlY3RTaGFkZXIgPSBuZXcgUElYSS5TaGFkZXIoZ2wsIHNlbGVjdFZlcnRleHRTaGFkZXIsIHNlbGVjdEZyYWdtZW50U2hhZGVyKTtcclxuICB9XHJcblxyXG4gIHJlbmRlclRleHQoc291cmNlKSB7XHJcblxyXG4gICAgbGV0IGdsRGF0YSA9IHNvdXJjZS5fZ2xEYXRhc1tBd2Vzb21lVGV4dFJlbmRlcmVyLmNvbnRleHRUZXh0XTtcclxuXHJcbiAgICBpZiAoIWdsRGF0YSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmJpbmRWYW8obnVsbCk7XHJcbiAgICAgIGdsRGF0YSA9IHRoaXMuYnVpbGRUZXh0R2xEYXRhKHNvdXJjZSwgdGhpcy5yZW5kZXJlci5nbCk7XHJcbiAgICAgIHNvdXJjZS5fZ2xEYXRhc1tBd2Vzb21lVGV4dFJlbmRlcmVyLmNvbnRleHRUZXh0XSA9IGdsRGF0YTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLmJpbmRWYW8oZ2xEYXRhLnZhbyk7XHJcblxyXG4gICAgaWYgKHNvdXJjZS5kaXJ0eSkge1xyXG4gICAgICBzb3VyY2UuZGlydHkgPSBmYWxzZTtcclxuICAgICAgZ2xEYXRhLnV2QnVmZmVyLnVwbG9hZChzb3VyY2UudXZzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoc291cmNlLmluZGV4RGlydHkpIHtcclxuICAgICAgc291cmNlLmluZGV4RGlydHkgPSBmYWxzZTtcclxuICAgICAgZ2xEYXRhLmluZGV4QnVmZmVyLnVwbG9hZChzb3VyY2UuaW5kaWNlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2xEYXRhLnZlcnRleEJ1ZmZlci51cGxvYWQoc291cmNlLnZlcnRpY2VzKTtcclxuICAgIHRoaXMucmVuZGVyZXIuYmluZFNoYWRlcihnbERhdGEuc2hhZGVyKTtcclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLnN0YXRlLnNldEJsZW5kTW9kZShzb3VyY2UuYmxlbmRNb2RlKTtcclxuXHJcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnVTYW1wbGVyID0gdGhpcy5yZW5kZXJlci5iaW5kVGV4dHVyZShzb3VyY2UudGV4dHVyZSk7XHJcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnRyYW5zbGF0aW9uTWF0cml4ID0gc291cmNlLndvcmxkVHJhbnNmb3JtLnRvQXJyYXkodHJ1ZSk7XHJcblxyXG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5oaW50X2Ftb3VudCA9IHNvdXJjZS5jb25maWcuYW50aWFsaWFzaW5nICogMTtcclxuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuc2RmTXVsdGlwbGllciA9IEF3ZXNvbWVUZXh0LnNjYWxlO1xyXG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5zdWJwaXhlbF9hbW91bnQgPSBzb3VyY2UuY29uZmlnLmFudGlhbGlhc2luZyAqIDE7XHJcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmZvbnRfY29sb3IgPSBQSVhJLnV0aWxzLmhleDJyZ2Ioc291cmNlLnN0eWxlLmZpbGwucmVwbGFjZShcIiNcIiwgXCIweFwiKSk7XHJcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmJnX2NvbG9yID0gUElYSS51dGlscy5oZXgycmdiKHNvdXJjZS5iYWNrZ3JvdW5kQ29sb3IucmVwbGFjZShcIiNcIiwgXCIweFwiKSk7XHJcblxyXG4gICAgY29uc3QgZHJhd01vZGUgPSBzb3VyY2UuZHJhd01vZGUgPSB0aGlzLnJlbmRlcmVyLmdsLlRSSUFOR0xFUztcclxuICAgIGdsRGF0YS52YW8uZHJhdyhkcmF3TW9kZSwgc291cmNlLmluZGljZXMubGVuZ3RoLCAwKTtcclxuXHJcbiAgfVxyXG5cclxuICByZW5kZXJTZWxlY3Qoc291cmNlKSB7XHJcbiAgICBsZXQgZ2xEYXRhID0gc291cmNlLl9nbERhdGFzW0F3ZXNvbWVUZXh0UmVuZGVyZXIuY29udGV4dFNlbGVjdF07XHJcblxyXG4gICAgaWYgKCFnbERhdGEgfHwgc291cmNlLnNlbGVjdC5kaXJ0eSkge1xyXG4gICAgICB0aGlzLnJlbmRlcmVyLmJpbmRWYW8obnVsbCk7XHJcbiAgICAgIGdsRGF0YSA9IHRoaXMuYnVpbGRTZWxlY3RHbERhdGEoc291cmNlLCB0aGlzLnJlbmRlcmVyLmdsKTtcclxuICAgICAgc291cmNlLl9nbERhdGFzW0F3ZXNvbWVUZXh0UmVuZGVyZXIuY29udGV4dFNlbGVjdF0gPSBnbERhdGE7XHJcbiAgICAgIHNvdXJjZS5zZWxlY3QuZGlydHkgPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnJlbmRlcmVyLmJpbmRWYW8oZ2xEYXRhLnZhbyk7XHJcblxyXG4gICAgaWYgKHNvdXJjZS5zZWxlY3QuaW5kZXhEaXJ0eSkge1xyXG4gICAgICBzb3VyY2Uuc2VsZWN0LmluZGV4RGlydHkgPSBmYWxzZTtcclxuICAgICAgZ2xEYXRhLmluZGV4QnVmZmVyLnVwbG9hZChzb3VyY2Uuc2VsZWN0LmluZGljZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIGdsRGF0YS52ZXJ0ZXhCdWZmZXIudXBsb2FkKHNvdXJjZS5zZWxlY3QudmVydGljZXMpO1xyXG4gICAgdGhpcy5yZW5kZXJlci5iaW5kU2hhZGVyKGdsRGF0YS5zaGFkZXIpO1xyXG5cclxuICAgIHRoaXMucmVuZGVyZXIuc3RhdGUuc2V0QmxlbmRNb2RlKDE3KTtcclxuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMudHJhbnNsYXRpb25NYXRyaXggPSBzb3VyY2Uud29ybGRUcmFuc2Zvcm0udG9BcnJheSh0cnVlKTtcclxuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuYmdfY29sb3IgPSBQSVhJLnV0aWxzLmhleDJyZ2IodGhpcy5zZWxlY3RDb2xvcik7XHJcblxyXG4gICAgY29uc3QgZHJhd01vZGUgPSBzb3VyY2UuZHJhd01vZGUgPSB0aGlzLnJlbmRlcmVyLmdsLlRSSUFOR0xFUztcclxuICAgIGdsRGF0YS52YW8uZHJhdyhkcmF3TW9kZSwgc291cmNlLnNlbGVjdC5pbmRpY2VzLmxlbmd0aCwgMCk7XHJcbiAgfVxyXG5cclxuICByZW5kZXIoc291cmNlKSB7XHJcblxyXG4gICAgaWYgKHNvdXJjZS5zdHlsZUlEICE9PSBzb3VyY2Uuc3R5bGUuc3R5bGVJRCkge1xyXG4gICAgICBzb3VyY2UudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHNvdXJjZS5zdGF0ZSA9PT0gQXdlc29tZVRleHQuc3RhdGVzLmVkaXRhYmxlIHx8IHNvdXJjZS5zdGF0ZSA9PT0gQXdlc29tZVRleHQuc3RhdGVzLnNlbGVjdGluZykge1xyXG4gICAgICB0aGlzLnJlbmRlclNlbGVjdChzb3VyY2UpO1xyXG4gICAgfVxyXG4gICAgdGhpcy5yZW5kZXJUZXh0KHNvdXJjZSk7XHJcbiAgfVxyXG5cclxuICBidWlsZFRleHRHbERhdGEoc291cmNlLCBnbCkge1xyXG5cclxuICAgIGNvbnN0IGdsRGF0YSA9IHtcclxuICAgICAgc2hhZGVyOiB0aGlzLnRleHRTaGFkZXIsXHJcbiAgICAgIHZlcnRleEJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgc291cmNlLnZlcnRpY2VzLCBnbC5TVFJFQU1fRFJBVyksXHJcbiAgICAgIHV2QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlVmVydGV4QnVmZmVyKGdsLCBzb3VyY2UudXZzLCBnbC5TVFJFQU1fRFJBVyksXHJcbiAgICAgIHNkZkJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgc291cmNlLnNkZlNpemVzLCBnbC5TVEFUSUNfRFJBVyksXHJcbiAgICAgIGluZGV4QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlSW5kZXhCdWZmZXIoZ2wsIHNvdXJjZS5pbmRpY2VzLCBnbC5TVEFUSUNfRFJBVyksXHJcbiAgICAgIC8vIGJ1aWxkIHRoZSB2YW8gb2JqZWN0IHRoYXQgd2lsbCByZW5kZXIuLlxyXG4gICAgICB2YW86IG51bGwsXHJcbiAgICAgIGRpcnR5OiBzb3VyY2UuZGlydHksXHJcbiAgICAgIGluZGV4RGlydHk6IHNvdXJjZS5pbmRleERpcnR5LFxyXG4gICAgfTtcclxuXHJcbiAgICBnbERhdGEudmFvID0gbmV3IGdsQ29yZS5WZXJ0ZXhBcnJheU9iamVjdChnbClcclxuICAgICAgLmFkZEluZGV4KGdsRGF0YS5pbmRleEJ1ZmZlcilcclxuICAgICAgLmFkZEF0dHJpYnV0ZShnbERhdGEudmVydGV4QnVmZmVyLCBnbERhdGEuc2hhZGVyLmF0dHJpYnV0ZXMuYVZlcnRleFBvc2l0aW9uLCBnbC5GTE9BVCwgZmFsc2UsIDIgKiA0LCAwKVxyXG4gICAgICAuYWRkQXR0cmlidXRlKGdsRGF0YS51dkJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFUZXh0dXJlQ29vcmQsIGdsLkZMT0FULCBmYWxzZSwgMiAqIDQsIDApXHJcbiAgICAgIC5hZGRBdHRyaWJ1dGUoZ2xEYXRhLnNkZkJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFTZGZTaXplLCBnbC5GTE9BVCwgZmFsc2UsIDQsIDApO1xyXG5cclxuICAgIHJldHVybiBnbERhdGFcclxuICB9XHJcblxyXG4gIGJ1aWxkU2VsZWN0R2xEYXRhKHNvdXJjZSwgZ2wpIHtcclxuICAgIGNvbnN0IGdsRGF0YSA9IHtcclxuICAgICAgc2hhZGVyOiB0aGlzLnNlbGVjdFNoYWRlcixcclxuICAgICAgdmVydGV4QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlVmVydGV4QnVmZmVyKGdsLCBzb3VyY2Uuc2VsZWN0LnZlcnRpY2VzLCBnbC5TVFJFQU1fRFJBVyksXHJcbiAgICAgIGluZGV4QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlSW5kZXhCdWZmZXIoZ2wsIHNvdXJjZS5zZWxlY3QuaW5kaWNlcywgZ2wuU1RBVElDX0RSQVcpLFxyXG4gICAgICB2YW86IG51bGxcclxuICAgIH07XHJcblxyXG4gICAgZ2xEYXRhLnZhbyA9IG5ldyBnbENvcmUuVmVydGV4QXJyYXlPYmplY3QoZ2wpXHJcbiAgICAgIC5hZGRJbmRleChnbERhdGEuaW5kZXhCdWZmZXIpXHJcbiAgICAgIC5hZGRBdHRyaWJ1dGUoZ2xEYXRhLnZlcnRleEJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFWZXJ0ZXhQb3NpdGlvbiwgZ2wuRkxPQVQsIGZhbHNlLCAyICogNCwgMClcclxuXHJcbiAgICByZXR1cm4gZ2xEYXRhXHJcbiAgfVxyXG5cclxufVxyXG5cclxuUElYSS5SZW5kZXJlci5yZWdpc3RlclBsdWdpbignQXdlc29tZVRleHRSZW5kZXJlcicsIEF3ZXNvbWVUZXh0UmVuZGVyZXIpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXdlc29tZVRleHRSZW5kZXJlclxyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyZXIuanMiLCJjb25zdCBjcmVhdGVJbmRpY2VzID0gcmVxdWlyZShcInF1YWQtaW5kaWNlc1wiKVxyXG5pbXBvcnQgVGV4dExheW91dCBmcm9tICcuL2xheW91dCc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9zZWxlY3QnXHJcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0J1xyXG5cclxuY2xhc3MgQXdlc29tZVRleHQgZXh0ZW5kcyBQSVhJLlNpbXBsZU1lc2gge1xyXG5cclxuICBzdGF0aWMgc2NhbGUgPSAxLjA7XHJcbiAgc3RhdGljIHN0YXRlcyA9IHtyZWd1bGFyOiAwLCBlZGl0YWJsZTogMSwgc2VsZWN0aW5nOiAyfTtcclxuICBzdGF0aWMgY3VycmVudEVkaXRpbmdFbGVtZW50ID0gbnVsbDtcclxuXHJcbiAgcGx1Z2luTmFtZSA9ICdBd2Vzb21lVGV4dFJlbmRlcmVyJztcclxuICBzdGF0ZSA9IEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyO1xyXG4gIGNsaWNrc0NvdW50ID0gMDtcclxuXHJcbiAgY29uZmlnID0ge1xyXG4gICAgZWRpdGFibGU6IGZhbHNlLFxyXG4gICAgdXBwZXJjYXNlOiBmYWxzZSxcclxuICAgIGxvd2VyY2FzZTogZmFsc2UsXHJcbiAgICBhbnRpYWxpYXNpbmc6IHRydWUsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzAwMDAwMFwiXHJcbiAgfTtcclxuXHJcbiAgY29uc3RydWN0b3IodGV4dCwgc3R5bGUsIGNvbmZpZykge1xyXG4gICAgc3VwZXIoY29uZmlnLnRleHR1cmUpO1xyXG5cclxuICAgIHRoaXMuc3R5bGUgPSBuZXcgUElYSS5UZXh0U3R5bGUoc3R5bGUpO1xyXG4gICAgdGhpcy5jb25maWcgPSB7Li4udGhpcy5jb25maWcsIC4uLmNvbmZpZ307XHJcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29uZmlnLmJhY2tncm91bmRDb2xvcjtcclxuICAgIHRoaXMuX3RleHQgPSB0ZXh0OyAvLyBDb250ZW50XHJcbiAgICB0aGlzLl9mb250ID0gY29uZmlnLmZvbnQ7IC8vIEZvbnQgaW5mb3JtYXRpb25cclxuICAgIHRoaXMuX3RleHR1cmUgPSBjb25maWcudGV4dHVyZTsgLy8gVGV4dHVyZSB3aXRoIGdseXBoc1xyXG5cclxuICAgIC8vIENhbGN1bGF0ZSBsYXlvdXRcclxuICAgIHRoaXMubGF5b3V0ID0gbmV3IFRleHRMYXlvdXQodGhpcywge1xyXG4gICAgICBmb250U2l6ZTogdGhpcy5zdHlsZS5mb250U2l6ZSxcclxuICAgICAgd3JhcFdvcmRzOiB0aGlzLnN0eWxlLmJyZWFrV29yZHMsXHJcbiAgICAgIHdyYXBwZXJXaWR0aDogdGhpcy5zdHlsZS53b3JkV3JhcFdpZHRoLFxyXG4gICAgICBhbGlnbjogdGhpcy5zdHlsZS5hbGlnbixcclxuICAgICAgbGluZUhlaWdodDogdGhpcy5zdHlsZS5saW5lSGVpZ2h0LFxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHRoaXMuY29uZmlnLmVkaXRhYmxlKSB7XHJcbiAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xyXG4gICAgICB0aGlzLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5zZWxlY3QgPSBuZXcgU2VsZWN0KHRoaXMpO1xyXG4gICAgICB0aGlzLmlucHV0ID0gbmV3IElucHV0KHRoaXMpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMuZm9udE1ldHJpY3ModGhpcy5zdHlsZS5mb250U2l6ZSwgMC4wKTtcclxuXHJcbiAgICB0aGlzLmxheW91dC51cGRhdGUoKTtcclxuXHJcbiAgICBpZiAodGhpcy5jb25maWcuZWRpdGFibGUpIHtcclxuICAgICAgdGhpcy5zZWxlY3QudXBkYXRlKCk7XHJcbiAgICAgIHRoaXMuaW5wdXQudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQXJyYXlzIGZvciB2ZXJ0aWNlcywgdXZzIGFuZCBzZGZcclxuICAgIHRoaXMudmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubGF5b3V0LmxldHRlcnNDb3VudCAqIDQgKiAyKTtcclxuICAgIHRoaXMudXZzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0ICogMik7XHJcbiAgICB0aGlzLnNkZlNpemVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0KTtcclxuICAgIHRoaXMuYXJyYXlQb3NpdGlvbnMgPSB7IHZlcnRleDogMCwgdXZzOiAwLCBzZGY6IDAgfTtcclxuXHJcbiAgICAvLyBGaWxsIGFycmF5cyB3b3JkIGJ5IHdvcmRcclxuICAgIHRoaXMubGF5b3V0LndvcmRzTWV0cmljcy5mb3JFYWNoICh3b3JkID0+IHtcclxuICAgICAgdGhpcy53cml0ZVN0cmluZyh3b3JkLndvcmQsIHRoaXMuZm9udCwgdGhpcy5tZXRyaWNzLCBbd29yZC54LCB3b3JkLnldKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFByZXBhcmUgaW5kaWNlc1xyXG4gICAgdGhpcy5pbmRpY2VzID0gY3JlYXRlSW5kaWNlcyh7XHJcbiAgICAgIGNsb2Nrd2lzZTogdHJ1ZSxcclxuICAgICAgdHlwZTogJ3VpbnQxNicsXHJcbiAgICAgIGNvdW50OiB0aGlzLmxheW91dC5sZXR0ZXJzQ291bnRcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuc3R5bGVJRCA9IHRoaXMuc3R5bGUuc3R5bGVJRDtcclxuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgdGhpcy5pbmRleERpcnR5ID0gdHJ1ZTtcclxuICAgIHRoaXMuX2dsRGF0YXMgPSBbXTtcclxuICB9XHJcblxyXG4gIHNldFN0YXRlKG5ld1N0YXRlKSB7XHJcblxyXG4gICAgaWYgKCF0aGlzLmNvbmZpZy5lZGl0YWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBzdGF0ZXMgfSA9IEF3ZXNvbWVUZXh0O1xyXG5cclxuICAgIGlmICghbmV3U3RhdGUgaW4gT2JqZWN0LnZhbHVlcyhzdGF0ZXMpKSByZXR1cm47XHJcblxyXG4gICAgc3dpdGNoIChuZXdTdGF0ZSkge1xyXG4gICAgICBjYXNlIHN0YXRlcy5yZWd1bGFyOlxyXG4gICAgICAgIHRoaXMuc2V0UmVndWxhclN0YXRlKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2Ugc3RhdGVzLmVkaXRhYmxlOlxyXG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBBd2Vzb21lVGV4dC5zdGF0ZXMucmVndWxhcikge1xyXG4gICAgICAgICAgdGhpcy5zZXRFZGl0YWJsZVN0YXRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc3RhdGUgPSBuZXdTdGF0ZTtcclxuICB9XHJcblxyXG4gIGdldCB0ZXh0KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX3RleHQ7XHJcbiAgfVxyXG5cclxuICBzZXQgdGV4dCh2YWx1ZSkge1xyXG4gICAgdGhpcy5fdGV4dCA9IHZhbHVlO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIHNldFJlZ3VsYXJTdGF0ZSgpIHtcclxuXHJcbiAgICBBd2Vzb21lVGV4dC5jdXJyZW50RWRpdGluZ0VsZW1lbnQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMub2ZmKFwibW91c2Vkb3duXCIpO1xyXG4gICAgdGhpcy5vZmYoXCJtb3VzZW1vdmVcIik7XHJcbiAgICB0aGlzLm9mZihcIm1vdXNldXBcIik7XHJcbiAgICB0aGlzLm9mZihcIm1vdXNldXBvdXRzaWRlXCIpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQuZW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgIHRoaXMub24oXCJjbGlja1wiLCBlID0+IHtcclxuICAgICAgaWYgKHRoaXMuY2xpY2tzQ291bnQgPT09IDEpIHtcclxuICAgICAgICB0aGlzLmNsaWNrc0NvdW50ID0gMDtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5lZGl0YWJsZSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICh0aGlzLmNsaWNrc0NvdW50ID09PSAwKSB7XHJcbiAgICAgICAgdGhpcy5jbGlja3NDb3VudCsrO1xyXG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgIHRoaXMuY2xpY2tzQ291bnQgPSAwO1xyXG4gICAgICAgIH0sIDMwMClcclxuICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgfVxyXG5cclxuICBzZXRFZGl0YWJsZVN0YXRlKCkge1xyXG5cclxuICAgIC8vIERpc2FibGUgcHJldmlvdXNseSBlbmFibGVkIGZpZWxkXHJcbiAgICBpZiAoQXdlc29tZVRleHQuY3VycmVudEVkaXRpbmdFbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgQXdlc29tZVRleHQuY3VycmVudEVkaXRpbmdFbGVtZW50LnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyKTtcclxuICAgIH1cclxuICAgIEF3ZXNvbWVUZXh0LmN1cnJlbnRFZGl0aW5nRWxlbWVudCA9IHRoaXM7XHJcblxyXG4gICAgLy8gRGlzYWJsZSB1bm5lY2Vzc2FyeSBldmVudHNcclxuICAgIHRoaXMub2ZmKFwiY2xpY2tcIik7XHJcblxyXG4gICAgdGhpcy5pbnB1dC5lbmFibGVkID0gdHJ1ZTtcclxuICAgIHRoaXMuaW5wdXQuaGlkZSgpO1xyXG5cclxuICAgIC8vIFNlbGVjdCBhbGwgY2hhcmFjdGVyc1xyXG4gICAgdGhpcy5zZWxlY3Quc2V0UmFuZ2UoMCx0aGlzLnRleHQubGVuZ3RoIC0gMSk7XHJcbiAgICB0aGlzLmlucHV0LmlucHV0RWxlbWVudC5mb2N1cygpO1xyXG5cclxuICAgIHRoaXMub24oXCJtb3VzZWRvd25cIiwgZSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLnNlbGVjdGluZyk7XHJcbiAgICAgIHRoaXMuc2VsZWN0Lm9uTW91c2VEb3duKGUpO1xyXG4gICAgICB0aGlzLmlucHV0LnNob3coKTtcclxuICAgICAgdGhpcy5pbnB1dC51cGRhdGUoZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm9uKFwibW91c2Vtb3ZlXCIsIGUgPT4ge1xyXG4gICAgICBjb25zdCB7bW92ZW1lbnRYLCBtb3ZlbWVudFl9ID0gZS5kYXRhLm9yaWdpbmFsRXZlbnQ7XHJcbiAgICAgIGlmIChtb3ZlbWVudFggPT09IDAgJiYgbW92ZW1lbnRZID09PSAwKSByZXR1cm47XHJcblxyXG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQXdlc29tZVRleHQuc3RhdGVzLnNlbGVjdGluZykge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0Lm9uTW91c2VNb3ZlKGUpO1xyXG4gICAgICAgIHRoaXMuaW5wdXQuaGlkZSgpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm9uKFwibW91c2V1cFwiLCBlID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShBd2Vzb21lVGV4dC5zdGF0ZXMuZWRpdGFibGUpO1xyXG4gICAgICB0aGlzLnNlbGVjdC5vbk1vdXNlVXAoZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLm9uKFwibW91c2V1cG91dHNpZGVcIiwgZSA9PiB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLmVkaXRhYmxlKTtcclxuICAgICAgdGhpcy5zZWxlY3Qub25Nb3VzZVVwKGUpO1xyXG4gICAgfSk7XHJcblxyXG4gIH1cclxuXHJcbiAgaW5zZXJ0U3RyaW5nKGluZGV4LCBzdHJpbmcpIHtcclxuICAgIHRoaXMudGV4dCA9IHRoaXMudGV4dC5zdWJzdHIoMCwgaW5kZXgpICsgc3RyaW5nICsgdGhpcy50ZXh0LnN1YnN0cihpbmRleCk7XHJcbiAgfVxyXG5cclxuICByZW1vdmVTdHJpbmcoaW5kZXgsIGxlbmd0aCkge1xyXG4gICAgbGV0IG5ld1RleHQgPSB0aGlzLnRleHQuc3BsaXQoXCJcIik7XHJcbiAgICBuZXdUZXh0LnNwbGljZShpbmRleCwgbGVuZ3RoICsgMSk7XHJcbiAgICB0aGlzLnRleHQgPSBuZXdUZXh0LmpvaW4oXCJcIik7XHJcbiAgfVxyXG5cclxuICBnZXQgdGV4dHVyZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl90ZXh0dXJlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZvbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9udFxyXG4gIH1cclxuXHJcbiAgd3JpdGVTdHJpbmcoIHN0cmluZywgZm9udCwgZm9udF9tZXRyaWNzLCBwb3MpIHtcclxuICAgIGxldCBwcmV2X2NoYXIgPSBcIiBcIjsgIC8vIFVzZWQgdG8gY2FsY3VsYXRlIGtlcm5pbmdcclxuICAgIGxldCBjcG9zICAgICAgPSBwb3M7ICAvLyBDdXJyZW50IHBlbiBwb3NpdGlvblxyXG4gICAgbGV0IHhfbWF4ICAgICA9IDAuMDsgIC8vIE1heCB3aWR0aCAtIHVzZWQgZm9yIGJvdW5kaW5nIGJveFxyXG4gICAgbGV0IHNjYWxlICAgICA9IGZvbnRfbWV0cmljcy5jYXBTY2FsZTtcclxuXHJcbiAgICBsZXQgc3RyX3BvcyA9IDA7XHJcblxyXG4gICAgZm9yKDs7KSB7XHJcbiAgICAgIGlmICggc3RyX3BvcyA9PT0gc3RyaW5nLmxlbmd0aCApIGJyZWFrO1xyXG5cclxuICAgICAgdmFyIHNjaGFyID0gc3RyaW5nWyBzdHJfcG9zIF07XHJcbiAgICAgIHN0cl9wb3MrKztcclxuXHJcbiAgICAgIGlmICggc2NoYXIgPT09IFwiXFxuXCIgKSB7XHJcbiAgICAgICAgaWYgKCBjcG9zWzBdID4geF9tYXggKSB4X21heCA9IGNwb3NbMF07IC8vIEV4cGFuZGluZyB0aGUgYm91bmRpbmcgcmVjdFxyXG4gICAgICAgIGNwb3NbMF0gID0gcG9zWzBdO1xyXG4gICAgICAgIGNwb3NbMV0gLT0gZm9udF9tZXRyaWNzLmxpbmVIZWlnaHQ7XHJcbiAgICAgICAgcHJldl9jaGFyID0gXCIgXCI7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICggc2NoYXIgPT09IFwiIFwiICkge1xyXG4gICAgICAgIC8vc2NoYXIgPSBcIl9cIlxyXG4gICAgICAgIC8vY3Bvc1swXSArPSBmb250LnNwYWNlX2FkdmFuY2UgKiBzY2FsZTtcclxuICAgICAgICAvL3ByZXZfY2hhciA9IFwiIFwiO1xyXG4gICAgICAgIC8vY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBmb250X2NoYXIgPSBmb250LmNoYXJzWyBzY2hhciBdO1xyXG4gICAgICBpZiAoICFmb250X2NoYXIgKSB7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1YnN0aXR1dGluZyB1bmF2YWlsYWJsZSBjaGFyYWN0ZXJzIHdpdGggJz8nXHJcbiAgICAgICAgc2NoYXIgPSBcIj9cIjtcclxuICAgICAgICBmb250X2NoYXIgPSBmb250LmNoYXJzWyBcIj9cIiBdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIga2VybiA9IGZvbnQua2VyblsgcHJldl9jaGFyICsgc2NoYXIgXTtcclxuICAgICAgaWYgKCAha2VybiApIGtlcm4gPSAwLjA7XHJcblxyXG4gICAgICAvLyBjYWxjdWxhdGluZyB0aGUgZ2x5cGggcmVjdGFuZ2xlIGFuZCBjb3B5aW5nIGl0IHRvIHRoZSB2ZXJ0ZXggYXJyYXlcclxuICAgICAgdmFyIHJlY3QgPSB0aGlzLmNoYXJSZWN0KCBjcG9zLCBmb250LCBmb250X21ldHJpY3MsIGZvbnRfY2hhciwga2VybiApO1xyXG5cclxuICAgICAgcmVjdC5wb3NpdGlvbnMubWFwKChwb3MpID0+IHRoaXMudmVydGljZXNbIHRoaXMuYXJyYXlQb3NpdGlvbnMudmVydGV4KysgXSA9IHBvcyApO1xyXG4gICAgICByZWN0LnV2cy5tYXAoKHV2KSA9PiB0aGlzLnV2c1sgdGhpcy5hcnJheVBvc2l0aW9ucy51dnMrKyBdID0gdXYgKTtcclxuICAgICAgcmVjdC5zZGZTaXplcy5tYXAoKHNkZikgPT4gdGhpcy5zZGZTaXplc1sgdGhpcy5hcnJheVBvc2l0aW9ucy5zZGYrKyBdID0gc2RmICk7XHJcblxyXG4gICAgICBwcmV2X2NoYXIgPSBzY2hhcjtcclxuICAgICAgY3BvcyA9IHJlY3QucG9zO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlY3QgOiBbIHBvc1swXSwgcG9zWzFdLCB4X21heCAtIHBvc1swXSwgcG9zWzFdIC0gY3Bvc1sxXSArIGZvbnRfbWV0cmljcy5saW5lSGVpZ2h0IF0sXHJcbiAgICAgIHN0cmluZ19wb3MgOiBzdHJfcG9zLFxyXG4gICAgICAvL2FycmF5X3BvcyA6IGFycmF5X3Bvc1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGZvbnRNZXRyaWNzKGZvbnRTaXplLCBtb3JlTGluZUdhcCA9IDAuMikge1xyXG5cclxuICAgIGNvbnN0IHtjYXBfaGVpZ2h0LCB4X2hlaWdodCwgYXNjZW50OiBmb250QXNjZW50ICwgZGVzY2VudCwgbGluZV9nYXB9ID0gdGhpcy5mb250O1xyXG5cclxuICAgIGNvbnN0IGNhcFNjYWxlID0gdGhpcy5zdHlsZS5mb250U2l6ZSAvIGNhcF9oZWlnaHQ7XHJcbiAgICBjb25zdCBsb3dTY2FsZSA9IE1hdGgucm91bmQoIHhfaGVpZ2h0ICogY2FwU2NhbGUgKSAvIHhfaGVpZ2h0O1xyXG4gICAgY29uc3QgYXNjZW50ID0gTWF0aC5yb3VuZCggZm9udEFzY2VudCAqIGNhcFNjYWxlICk7XHJcbiAgICBsZXQgbGluZUhlaWdodCA9IE1hdGgucm91bmQoIGNhcFNjYWxlICogKCBmb250QXNjZW50ICsgZGVzY2VudCArIGxpbmVfZ2FwICkgKyBtb3JlTGluZUdhcCk7XHJcblxyXG4gICAgaWYgKHRoaXMuc3R5bGUubGluZUhlaWdodCA+IDApXHJcbiAgICAgIGxpbmVIZWlnaHQgPSB0aGlzLnN0eWxlLmxpbmVIZWlnaHQ7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMuc3R5bGUubGluZUhlaWdodCA9IGxpbmVIZWlnaHQ7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2FwU2NhbGUgICA6IGNhcFNjYWxlLFxyXG4gICAgICBsb3dTY2FsZSAgIDogbG93U2NhbGUsXHJcbiAgICAgIGFzY2VudCAgICAgIDogYXNjZW50LFxyXG4gICAgICBsaW5lSGVpZ2h0IDogbGluZUhlaWdodFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNoYXJSZWN0KCBwb3MsIGZvbnQsIGZvbnRfbWV0cmljcywgZm9udF9jaGFyLCBrZXJuID0gMC4wICkge1xyXG5cclxuICAgIC8vIExvdyBjYXNlIGNoYXJhY3RlcnMgaGF2ZSBmaXJzdCBiaXQgc2V0IGluICdmbGFncydcclxuICAgIHZhciBsb3djYXNlID0gKCBmb250X2NoYXIuZmxhZ3MgJiAxICkgPT09IDE7XHJcblxyXG4gICAgLy8gUGVuIHBvc2l0aW9uIGlzIGF0IHRoZSB0b3Agb2YgdGhlIGxpbmUsIFkgZ29lcyB1cFxyXG4gICAgdmFyIGJhc2VsaW5lID0gcG9zWzFdIC0gZm9udF9tZXRyaWNzLmFzY2VudDtcclxuXHJcbiAgICAvLyBMb3cgY2FzZSBjaGFycyB1c2UgdGhlaXIgb3duIHNjYWxlXHJcbiAgICB2YXIgc2NhbGUgPSBsb3djYXNlID8gZm9udF9tZXRyaWNzLmxvd1NjYWxlIDogZm9udF9tZXRyaWNzLmNhcFNjYWxlO1xyXG5cclxuICAgIC8vIExheWluZyBvdXQgdGhlIGdseXBoIHJlY3RhbmdsZVxyXG4gICAgdmFyIGcgICAgICA9IGZvbnRfY2hhci5yZWN0O1xyXG4gICAgdmFyIGJvdHRvbSA9IGJhc2VsaW5lIC0gc2NhbGUgKiAoIGZvbnQuZGVzY2VudCArIGZvbnQuaXkgKTtcclxuICAgIHZhciB0b3AgICAgPSBib3R0b20gICArIHNjYWxlICogKCBmb250LnJvd19oZWlnaHQgKTtcclxuICAgIHZhciBsZWZ0ICAgPSBwb3NbMF0gICArIHNjYWxlICogKCBmb250X2NoYXIuYmVhcmluZ194ICsga2VybiAtIGZvbnQuaXggKTtcclxuICAgIHZhciByaWdodCAgPSBsZWZ0ICAgICArIHNjYWxlICogKCBnWzJdIC0gZ1swXSApO1xyXG4gICAgdmFyIHAgPSBbIGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSBdO1xyXG5cclxuICAgIC8vIEFkdmFuY2luZyBwZW4gcG9zaXRpb25cclxuICAgIHZhciBuZXdfcG9zX3ggPSBwb3NbMF0gKyBzY2FsZSAqICggZm9udF9jaGFyLmFkdmFuY2VfeCApO1xyXG5cclxuICAgIC8vIFNpZ25lZCBkaXN0YW5jZSBmaWVsZCBzaXplIGluIHNjcmVlbiBwaXhlbHNcclxuICAgIHZhciBzZGZfc2l6ZSAgPSAyLjAgKiBmb250Lml5ICogc2NhbGU7XHJcblxyXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xyXG4gICAgICBwWzBdLCBwWzNdLCAvLyBsZWZ0IGJvdHRvbSxcclxuICAgICAgcFsyXSwgcFszXSwgLy8gcmlnaHQgYm90dG9tLFxyXG4gICAgICBwWzJdLCBwWzFdLCAvLyByaWdodCB0b3BcclxuICAgICAgcFswXSwgcFsxXSwgLy8gbGVmdCB0b3BcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgdXZzID0gW1xyXG4gICAgICBnWzBdLCBnWzFdLCAvLyBsZWZ0IHRvcFxyXG4gICAgICBnWzJdLCBnWzFdLCAvLyByaWdodCB0b3BcclxuICAgICAgZ1syXSwgZ1szXSwgLy8gcmlnaHQgYm90dG9tLFxyXG4gICAgICBnWzBdLCBnWzNdLCAvLyBsZWZ0IGJvdHRvbSxcclxuICAgIF07XHJcblxyXG4gICAgY29uc3Qgc2RmU2l6ZXMgPSBbXHJcbiAgICAgIHNkZl9zaXplLFxyXG4gICAgICBzZGZfc2l6ZSxcclxuICAgICAgc2RmX3NpemUsXHJcbiAgICAgIHNkZl9zaXplLFxyXG4gICAgXTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwb3NpdGlvbnMsXHJcbiAgICAgIHV2cyxcclxuICAgICAgc2RmU2l6ZXMsXHJcbiAgICAgIHBvczogWyBuZXdfcG9zX3gsIHBvc1sxXSBdXHJcbiAgICB9O1xyXG5cclxuICAgIC8vcmV0dXJuIHsgdmVydGljZXMgOiB2ZXJ0aWNlcywgcG9zIDogWyBuZXdfcG9zX3gsIHBvc1sxXSBdIH07XHJcbiAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXdlc29tZVRleHQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZXh0LmpzIiwiXHJcbmNsYXNzIFRleHRMYXlvdXQge1xyXG5cclxuICB0ZXh0ID0gXCJcIjtcclxuICBmb250ID0gbnVsbDtcclxuICBtZXRyaWNzID0gbnVsbDtcclxuICBmb250U2l6ZSA9IDIwO1xyXG4gIGFsaWduID0gXCJsZWZ0XCI7XHJcbiAgc3RhcnRYID0gMDtcclxuICBzdGFydFkgPSAwO1xyXG4gIHdyYXBwZXJXaWR0aCA9IDEwMDtcclxuICB3cmFwV29yZHMgPSBmYWxzZTtcclxuICB3b3Jkc01ldHJpY3MgPSBbXTtcclxuICBsZXR0ZXJzQ291bnQgPSAwO1xyXG4gIGhlaWdodCA9IDA7XHJcbiAgbGluZXNDb3VudCA9IDA7XHJcbiAgbGluZUhlaWdodCA9IDA7XHJcbiAgZ2x5cGhzID0gW107XHJcbiAgb3duZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3Iob3duZXIsIGNvbmZpZykge1xyXG5cclxuICAgIHRoaXMub3duZXIgPSBvd25lcjtcclxuICAgIHRoaXMudGV4dCA9IG93bmVyLnRleHQ7XHJcbiAgICB0aGlzLmZvbnQgPSBvd25lci5mb250O1xyXG4gICAgdGhpcy5mb250U2l6ZSA9IGNvbmZpZy5mb250U2l6ZTtcclxuICAgIHRoaXMud3JhcFdvcmRzID0gY29uZmlnLndyYXBXb3JkcztcclxuICAgIHRoaXMud3JhcHBlcldpZHRoID0gY29uZmlnLndyYXBwZXJXaWR0aDtcclxuICAgIHRoaXMubGluZUhlaWdodCA9IGNvbmZpZy5saW5lSGVpZ2h0O1xyXG4gICAgdGhpcy5hbGlnbiA9IGNvbmZpZy5hbGlnbjtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy50ZXh0ID0gdGhpcy5vd25lci50ZXh0O1xyXG4gICAgdGhpcy5mb250ID0gdGhpcy5vd25lci5mb250O1xyXG5cclxuICAgIHRoaXMubGV0dGVyc0NvdW50ID0gdGhpcy50ZXh0LnNwbGl0KFwiXCIpLmxlbmd0aDtcclxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMuZm9udE1ldHJpY3ModGhpcy5mb250LCAwLjApO1xyXG4gICAgdGhpcy5zdGFydFkgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcclxuICAgIHRoaXMuY2FsY3VsYXRlV29yZHNQb3NpdGlvbnMoKTtcclxuXHJcbiAgICB0aGlzLmdseXBocyA9IFtdO1xyXG5cclxuICAgIHRoaXMud29yZHNNZXRyaWNzLmZvckVhY2ggKHdvcmQgPT4ge1xyXG4gICAgICB0aGlzLmdldEdseXBocyh3b3JkLndvcmQsIFt3b3JkLngsIHdvcmQueV0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmb250TWV0cmljcyhmb250U2l6ZSwgbW9yZUxpbmVHYXAgPSAwLjIpIHtcclxuXHJcbiAgICBjb25zdCB7Y2FwX2hlaWdodCwgeF9oZWlnaHQsIGFzY2VudDogZm9udEFzY2VudCAsIGRlc2NlbnQsIGxpbmVfZ2FwfSA9IHRoaXMuZm9udDtcclxuXHJcbiAgICBjb25zdCBjYXBTY2FsZSA9IHRoaXMuZm9udFNpemUgLyBjYXBfaGVpZ2h0O1xyXG4gICAgY29uc3QgbG93U2NhbGUgPSBNYXRoLnJvdW5kKCB4X2hlaWdodCAqIGNhcFNjYWxlICkgLyB4X2hlaWdodDtcclxuICAgIGNvbnN0IGFzY2VudCA9IE1hdGgucm91bmQoIGZvbnRBc2NlbnQgKiBjYXBTY2FsZSApO1xyXG4gICAgbGV0IGxpbmVIZWlnaHQgPSBNYXRoLnJvdW5kKCBjYXBTY2FsZSAqICggZm9udEFzY2VudCArIGRlc2NlbnQgKyBsaW5lX2dhcCApICsgbW9yZUxpbmVHYXAgKTtcclxuXHJcbiAgICBpZiAodGhpcy5saW5lSGVpZ2h0ID4gMClcclxuICAgICAgbGluZUhlaWdodCA9IHRoaXMubGluZUhlaWdodDtcclxuICAgIGVsc2VcclxuICAgICAgdGhpcy5saW5lSGVpZ2h0ID0gbGluZUhlaWdodDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjYXBTY2FsZSAgIDogY2FwU2NhbGUsXHJcbiAgICAgIGxvd1NjYWxlICAgOiBsb3dTY2FsZSxcclxuICAgICAgYXNjZW50ICAgICAgOiBhc2NlbnQsXHJcbiAgICAgIGxpbmVIZWlnaHQgOiBsaW5lSGVpZ2h0XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY2hhclJlY3QoIHBvcywgZm9udF9jaGFyLCBrZXJuID0gMC4wICkge1xyXG5cclxuICAgIC8vIExvdyBjYXNlIGNoYXJhY3RlcnMgaGF2ZSBmaXJzdCBiaXQgc2V0IGluICdmbGFncydcclxuICAgIHZhciBsb3djYXNlID0gKCBmb250X2NoYXIuZmxhZ3MgJiAxICkgPT09IDE7XHJcblxyXG4gICAgLy8gUGVuIHBvc2l0aW9uIGlzIGF0IHRoZSB0b3Agb2YgdGhlIGxpbmUsIFkgZ29lcyB1cFxyXG4gICAgdmFyIGJhc2VsaW5lID0gcG9zWzFdIC0gdGhpcy5tZXRyaWNzLmFzY2VudDtcclxuXHJcbiAgICAvLyBMb3cgY2FzZSBjaGFycyB1c2UgdGhlaXIgb3duIHNjYWxlXHJcbiAgICB2YXIgc2NhbGUgPSBsb3djYXNlID8gdGhpcy5tZXRyaWNzLmxvd1NjYWxlIDogdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xyXG5cclxuICAgIC8vIExheWluZyBvdXQgdGhlIGdseXBoIHJlY3RhbmdsZVxyXG4gICAgdmFyIGcgICAgICA9IGZvbnRfY2hhci5yZWN0O1xyXG4gICAgdmFyIGJvdHRvbSA9IGJhc2VsaW5lIC0gc2NhbGUgKiAoIHRoaXMuZm9udC5kZXNjZW50ICsgdGhpcy5mb250Lml5ICk7XHJcbiAgICB2YXIgdG9wICAgID0gYm90dG9tICAgKyBzY2FsZSAqICggdGhpcy5mb250LnJvd19oZWlnaHQgKTtcclxuICAgIHZhciBsZWZ0ICAgPSBwb3NbMF0gICArIHNjYWxlICogKCBmb250X2NoYXIuYmVhcmluZ194ICsga2VybiAtIHRoaXMuZm9udC5peCApO1xyXG4gICAgdmFyIHJpZ2h0ICA9IGxlZnQgICAgICsgc2NhbGUgKiAoIGdbMl0gLSBnWzBdICk7XHJcbiAgICB2YXIgcCA9IFsgbGVmdCwgdG9wLCByaWdodCwgYm90dG9tIF07XHJcblxyXG4gICAgLy8gQWR2YW5jaW5nIHBlbiBwb3NpdGlvblxyXG4gICAgdmFyIG5ld19wb3NfeCA9IHBvc1swXSArIHNjYWxlICogKCBmb250X2NoYXIuYWR2YW5jZV94ICk7XHJcblxyXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xyXG4gICAgICBwWzBdLCBwWzNdLCAvLyBsZWZ0IGJvdHRvbSxcclxuICAgICAgcFsyXSwgcFszXSwgLy8gcmlnaHQgYm90dG9tLFxyXG4gICAgICBwWzJdLCBwWzFdLCAvLyByaWdodCB0b3BcclxuICAgICAgcFswXSwgcFsxXSwgLy8gbGVmdCB0b3BcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcG9zaXRpb25zLFxyXG4gICAgICBwb3M6IFsgbmV3X3Bvc194LCBwb3NbMV0gXSxcclxuICAgICAgbWV0cmljczoge3g6IHBvc1swXSwgeTogcG9zWzFdLCB3aWR0aDogc2NhbGUgKiBmb250X2NoYXIuYWR2YW5jZV94IH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXRTdHJpbmdTaXplKHN0cmluZykge1xyXG5cclxuICAgIGxldCB3aWR0aCA9IDA7XHJcbiAgICBsZXQgaGVpZ2h0ID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XHJcblxyXG4gICAgY29uc3QgY2hhcnMgPSBbLi4uc3RyaW5nXTtcclxuXHJcbiAgICAvLyBJdGVyYXRlIHRob3VnaHQgdGhlIGNoYXJzLCBjYWxjdWxhdGUgcG9zaXRpb25cclxuICAgIGNoYXJzLmZvckVhY2goY2hhciA9PiB7XHJcbiAgICAgIGxldCBmb250X2NoYXIgPSB0aGlzLmZvbnQuY2hhcnNbIGNoYXIgXTtcclxuXHJcbiAgICAgIC8qaWYgKGNoYXIgPT09IFwiIFwiKSB7XHJcbiAgICAgICAgd2lkdGggKz0gdGhpcy5mb250LnNwYWNlX2FkdmFuY2UgKiB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9Ki9cclxuXHJcbiAgICAgIC8vIEdldCBjaGFyIG1ldHJpY3NcclxuICAgICAgbGV0IGNoYXJSZWN0ID0gdGhpcy5jaGFyUmVjdChbd2lkdGgsMF0sIGZvbnRfY2hhciwgMC4yKTtcclxuICAgICAgd2lkdGggPSBjaGFyUmVjdC5wb3NbMF07XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHt3aWR0aCwgaGVpZ2h0fTtcclxuXHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVXb3Jkc1Bvc2l0aW9ucygpIHtcclxuXHJcbiAgICBjb25zdCB3b3JkcyA9IHRoaXMudGV4dC5zcGxpdChcIiBcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgd29yZHNbaV0gPSB3b3Jkc1tpXSArIFwiIFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMud29yZHNNZXRyaWNzID0gW107XHJcblxyXG4gICAgLy8gSW5pdGlhbCBwb3NpdGlvblxyXG4gICAgbGV0IHggPSB0aGlzLnN0YXJ0WDtcclxuICAgIGxldCB5ID0gdGhpcy5zdGFydFk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHdvcmRzIHBvc2l0aW9ucyBvbiBsaW5lc1xyXG4gICAgd29yZHMuZm9yRWFjaCh3b3JkID0+IHtcclxuICAgICAgY29uc3Qgd29yZFNpemUgPSB0aGlzLmdldFN0cmluZ1NpemUod29yZCk7XHJcbiAgICAgIGlmICh4ICsgd29yZFNpemUud2lkdGggPiB0aGlzLnN0YXJ0WCArIHRoaXMud3JhcHBlcldpZHRoICYmIHRoaXMud3JhcFdvcmRzKSB7XHJcbiAgICAgICAgeCA9IHRoaXMuc3RhcnRYO1xyXG4gICAgICAgIHkgKz0gd29yZFNpemUuaGVpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLndvcmRzTWV0cmljcy5wdXNoKHsuLi53b3JkU2l6ZSwgeCwgeSwgd29yZH0pO1xyXG5cclxuICAgICAgLy94ICs9IHdvcmRTaXplLndpZHRoICsgdGhpcy5mb250LnNwYWNlX2FkdmFuY2UgKiB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XHJcbiAgICAgIHggKz0gd29yZFNpemUud2lkdGg7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgbGluZXMgY291bnRcclxuICAgIHRoaXMubGluZXNDb3VudCA9ICh5IC0gdGhpcy5zdGFydFkpIC8gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyAxO1xyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmxpbmVzQ291bnQgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcclxuXHJcbiAgICAvLyBDaGFuZ2UgYWxpZ24gVE9ETyBvcHRpbWlzZVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpbmVzQ291bnQ7ICsraSkge1xyXG4gICAgICBjb25zdCB3b3Jkc09uTGluZSA9IHRoaXMud29yZHNNZXRyaWNzLmZpbHRlcih3b3JkID0+IHdvcmQueSA9PT0gdGhpcy5zdGFydFkgKyAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSlcclxuXHJcbiAgICAgIGNvbnN0IGxhc3RXb3JkID0gd29yZHNPbkxpbmVbd29yZHNPbkxpbmUubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICBpZiAobGFzdFdvcmQpIHtcclxuICAgICAgICBjb25zdCBmcmVlU3BhY2UgPSAodGhpcy5zdGFydFggKyB0aGlzLndyYXBwZXJXaWR0aCkgLSAobGFzdFdvcmQueCArIGxhc3RXb3JkLndpZHRoKTtcclxuXHJcbiAgICAgICAgbGV0IGxlZnRPZmZzZXQgPSAwO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuYWxpZ24pIHtcclxuICAgICAgICAgIGNhc2UgXCJjZW50ZXJcIjpcclxuICAgICAgICAgICAgbGVmdE9mZnNldCA9IGZyZWVTcGFjZSAvIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICAgIGxlZnRPZmZzZXQgPSBmcmVlU3BhY2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndvcmRzTWV0cmljcy5mb3JFYWNoKHdvcmQgPT4ge1xyXG4gICAgICAgICAgaWYgKHdvcmQueSA9PT0gdGhpcy5zdGFydFkgKyAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSkge1xyXG4gICAgICAgICAgICB3b3JkLnggKz0gbGVmdE9mZnNldDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRHbHlwaHMoIHN0cmluZywgcG9zKSB7XHJcbiAgICBsZXQgcHJldl9jaGFyID0gXCIgXCI7ICAvLyBVc2VkIHRvIGNhbGN1bGF0ZSBrZXJuaW5nXHJcbiAgICBsZXQgY3BvcyAgICAgID0gcG9zOyAgLy8gQ3VycmVudCBwZW4gcG9zaXRpb25cclxuICAgIGxldCB4X21heCAgICAgPSAwLjA7ICAvLyBNYXggd2lkdGggLSB1c2VkIGZvciBib3VuZGluZyBib3hcclxuICAgIGxldCBzY2FsZSAgICAgPSB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XHJcblxyXG4gICAgbGV0IHN0cl9wb3MgPSAwO1xyXG5cclxuICAgIGZvcig7Oykge1xyXG4gICAgICBpZiAoIHN0cl9wb3MgPT09IHN0cmluZy5sZW5ndGggKSBicmVhaztcclxuXHJcbiAgICAgIHZhciBzY2hhciA9IHN0cmluZ1sgc3RyX3BvcyBdO1xyXG4gICAgICBzdHJfcG9zKys7XHJcblxyXG4gICAgICBpZiAoIHNjaGFyID09PSBcIlxcblwiICkge1xyXG4gICAgICAgIGlmICggY3Bvc1swXSA+IHhfbWF4ICkgeF9tYXggPSBjcG9zWzBdOyAvLyBFeHBhbmRpbmcgdGhlIGJvdW5kaW5nIHJlY3RcclxuICAgICAgICBjcG9zWzBdICA9IHBvc1swXTtcclxuICAgICAgICBjcG9zWzFdIC09IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xyXG4gICAgICAgIHByZXZfY2hhciA9IFwiIFwiO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIHNjaGFyID09PSBcIiBcIiApIHtcclxuICAgICAgICAvL3NjaGFyID0gXCJfXCJcclxuICAgICAgICAvL2Nwb3NbMF0gKz0gdGhpcy5mb250LnNwYWNlX2FkdmFuY2UgKiBzY2FsZTtcclxuICAgICAgICBwcmV2X2NoYXIgPSBcIiBcIjtcclxuICAgICAgICAvL2NvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgZm9udF9jaGFyID0gdGhpcy5mb250LmNoYXJzWyBzY2hhciBdO1xyXG4gICAgICBpZiAoICFmb250X2NoYXIgKSB7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1YnN0aXR1dGluZyB1bmF2YWlsYWJsZSBjaGFyYWN0ZXJzIHdpdGggJz8nXHJcbiAgICAgICAgc2NoYXIgPSBcIj9cIjtcclxuICAgICAgICBmb250X2NoYXIgPSB0aGlzLmZvbnQuY2hhcnNbIFwiP1wiIF07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBrZXJuID0gdGhpcy5mb250Lmtlcm5bIHByZXZfY2hhciArIHNjaGFyIF07XHJcbiAgICAgIGlmICggIWtlcm4gKSBrZXJuID0gMC4wO1xyXG5cclxuICAgICAgLy8gY2FsY3VsYXRpbmcgdGhlIGdseXBoIHJlY3RhbmdsZSBhbmQgY29weWluZyBpdCB0byB0aGUgdmVydGV4IGFycmF5XHJcbiAgICAgIHZhciByZWN0ID0gdGhpcy5jaGFyUmVjdCggY3BvcywgZm9udF9jaGFyLCBrZXJuICk7XHJcblxyXG4gICAgICBwcmV2X2NoYXIgPSBzY2hhcjtcclxuICAgICAgY3BvcyA9IHJlY3QucG9zO1xyXG5cclxuICAgICAgdGhpcy5nbHlwaHMucHVzaCh7XHJcbiAgICAgICAgbGV0dGVyOiBzY2hhcixcclxuICAgICAgICB2ZXJ0aWNlczogcmVjdC5wb3NpdGlvbnMsXHJcbiAgICAgICAgcG9zaXRpb246IHJlY3QucG9zLFxyXG4gICAgICAgIG1ldHJpY3M6IHJlY3QubWV0cmljc1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0TGF5b3V0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGF5b3V0LmpzIiwiY29uc3QgY3JlYXRlSW5kaWNlcyA9IHJlcXVpcmUoXCJxdWFkLWluZGljZXNcIilcclxuXHJcbmNsYXNzIFNlbGVjdCB7XHJcblxyXG4gIHJhbmdlID0gWzAsMF07XHJcbiAgbWV0cmljcyA9IG51bGw7XHJcbiAgbGF5b3V0ID0gbnVsbDtcclxuICBkaXJ0eSA9IGZhbHNlO1xyXG4gIGluZGV4QnVmZmVyID0gZmFsc2U7XHJcbiAgb3duZXIgPSBudWxsO1xyXG5cclxuICBjb25zdHJ1Y3Rvcihvd25lcikge1xyXG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xyXG4gICAgdGhpcy5tZXRyaWNzID0gb3duZXIubWV0cmljcztcclxuICAgIHRoaXMubGF5b3V0ID0gb3duZXIubGF5b3V0O1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5vd25lci5tZXRyaWNzO1xyXG4gICAgdGhpcy5sYXlvdXQgPSB0aGlzLm93bmVyLmxheW91dDtcclxuXHJcbiAgICAvLyBWZXJ0aWNlcyBhcnJheSBmb3IgYWxsIHNlbGVjdGVkIGxpbmVzXHJcbiAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5saW5lc0NvdW50ICogNCAqIDIpO1xyXG5cclxuICAgIGlmICh0aGlzLnJhbmdlWzFdICE9PSBudWxsKVxyXG4gICAgdGhpcy5idWlsZFZlcnRpY2VzKCk7XHJcblxyXG4gICAgdGhpcy5pbmRpY2VzID0gY3JlYXRlSW5kaWNlcyh7XHJcbiAgICAgIGNsb2Nrd2lzZTogdHJ1ZSxcclxuICAgICAgdHlwZTogJ3VpbnQxNicsXHJcbiAgICAgIGNvdW50OnRoaXMubGF5b3V0LmxpbmVzQ291bnRcclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGlydHkgPSB0cnVlO1xyXG4gICAgdGhpcy5pbmRleEJ1ZmZlciA9IHRydWU7XHJcbiAgfVxyXG5cclxuICBzZXRSYW5nZShzdGFydCA9IG51bGwsIGVuZCA9IG51bGwpIHtcclxuXHJcbiAgICBjb25zdCB7Z2x5cGhzfSA9IHRoaXMub3duZXIubGF5b3V0O1xyXG5cclxuICAgIGlmIChzdGFydCA9PT0gbnVsbCkgc3RhcnQgPSB0aGlzLnJhbmdlWzBdO1xyXG4gICAgaWYgKGVuZCA9PT0gbnVsbCkgZW5kID0gdGhpcy5yYW5nZVsxXTtcclxuXHJcbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDA7XHJcbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMDtcclxuXHJcbiAgICBpZiAoc3RhcnQgPiBnbHlwaHMubGVuZ3RoIC0xKXN0YXJ0ID0gZ2x5cGhzLmxlbmd0aCAtIDE7XHJcbiAgICBpZiAoZW5kID4gZ2x5cGhzLmxlbmd0aCAtIDEpIGVuZCA9IGdseXBocy5sZW5ndGggLSAxO1xyXG5cclxuICAgIGlmIChlbmQgPT09IGZhbHNlKSBlbmQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMucmFuZ2UgPSBbc3RhcnQsIGVuZF07XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRWZXJ0aWNlcygpIHtcclxuXHJcbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLm93bmVyLmxheW91dC5tZXRyaWNzO1xyXG4gICAgLy8gU2VsZWN0IHJhbmdlXHJcbiAgICBsZXQgc3RhcnQgPSB0aGlzLmxheW91dC5nbHlwaHNbTWF0aC5taW4uYXBwbHkobnVsbCx0aGlzLnJhbmdlKV07XHJcbiAgICBsZXQgZW5kID0gdGhpcy5sYXlvdXQuZ2x5cGhzW01hdGgubWF4LmFwcGx5KG51bGwsdGhpcy5yYW5nZSldO1xyXG5cclxuXHJcbiAgICAvLyBJdGVyYXRlIHRob3VnaHQgYWxsIGxpbmVzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGF5b3V0LmxpbmVzQ291bnQ7ICsraSkge1xyXG4gICAgICBsZXQgbGV0dGVyQ291bnQgPSAwOyAvLyBsZXR0ZXJzIHBhc3NlZFxyXG4gICAgICBsZXQgZmlyc3RMZXR0ZXIgPSBudWxsOyAvLyBmaXJzdCBsZXR0ZXIgb24gdGhpcyBsaW5lXHJcbiAgICAgIGxldCBsYXN0TGV0dGVyID0gbnVsbDsgLy8gbGFzdCBsZXR0ZXIgb24gdGhpcyBsaW5lXHJcblxyXG5cclxuICAgICAgaWYgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCArIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0IDwgc3RhcnQucG9zaXRpb25bMV0pIGNvbnRpbnVlO1xyXG4gICAgICBpZiAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgPiBlbmQucG9zaXRpb25bMV0pIGNvbnRpbnVlO1xyXG5cclxuICAgICAgLy8gVGFrZSBldmVyeSB3b3JkLCBpZiBpdCdzIGxhc3Qgb3IgZmlyc3Qgb24gbGluZSAtIGNoYW5nZSBib3VuZHMgbGV0dGVyc1xyXG4gICAgICB0aGlzLmxheW91dC53b3Jkc01ldHJpY3MubWFwKHdvcmQgPT4ge1xyXG5cclxuICAgICAgICBpZiAod29yZC55ID09PSB0aGlzLmxheW91dC5zdGFydFkgKyAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSkge1xyXG4gICAgICAgICAgaWYgKGZpcnN0TGV0dGVyID09PSBudWxsKSBmaXJzdExldHRlciA9IGxldHRlckNvdW50O1xyXG4gICAgICAgICAgbGFzdExldHRlciA9IGxldHRlckNvdW50ICsgd29yZC53b3JkLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXR0ZXJDb3VudCArPSB3b3JkLndvcmQubGVuZ3RoO1xyXG4gICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgLy8gQm91bmRzIGxldHRlcnMgZm9yIGN1cnJlbnQgbGluZVxyXG4gICAgICBsZXQgc3RhcnRMaW5lTGV0dGVyID0gdGhpcy5sYXlvdXQuZ2x5cGhzW2ZpcnN0TGV0dGVyXTtcclxuICAgICAgbGV0IGVuZExpbmVMZXR0ZXIgPSB0aGlzLmxheW91dC5nbHlwaHNbbGFzdExldHRlcl07XHJcblxyXG4gICAgICAvLyBJZiB0aGUgc3RhcnQgb3IgZW5kIHJhbmdlIGlzIG9uIHRoaXMgbGluZSwgY2hhbmdlIGJvdW5kcyBmb3IgdGhlbVxyXG4gICAgICBpZiAoc3RhcnQucG9zaXRpb25bMV0gPT09ICBzdGFydExpbmVMZXR0ZXIucG9zaXRpb25bMV0pIHN0YXJ0TGluZUxldHRlciA9IHN0YXJ0O1xyXG4gICAgICBpZiAoZW5kLnBvc2l0aW9uWzFdID09PSBlbmRMaW5lTGV0dGVyLnBvc2l0aW9uWzFdKSBlbmRMaW5lTGV0dGVyID0gZW5kO1xyXG5cclxuICAgICAgLy8gV2UgdXNlIG9mZnNldCB0byBhdm9pZCBzZWxlY3RzIG92ZXJsYXBwaW5nXHJcbiAgICAgIGNvbnN0IG9mZnNldCA9ICh0aGlzLm1ldHJpY3MubGluZUhlaWdodCAtIHRoaXMubWV0cmljcy5hc2NlbnQpIC8gMjtcclxuXHJcbiAgICAgIC8vIEFkZCBwb3NpdGlvbnMgdG8gYXJyYXlcclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpXSA9IHN0YXJ0TGluZUxldHRlci52ZXJ0aWNlc1swXTtcclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgMV0gPSBzdGFydExpbmVMZXR0ZXIudmVydGljZXNbMV0gKyBvZmZzZXQ7XHJcblxyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyAyXSA9IGVuZExpbmVMZXR0ZXIudmVydGljZXNbMl07XHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDNdID0gZW5kTGluZUxldHRlci52ZXJ0aWNlc1szXSAgICsgb2Zmc2V0O1xyXG5cclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgNF0gPSBlbmRMaW5lTGV0dGVyLnZlcnRpY2VzWzRdO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyA1XSA9IGVuZExpbmVMZXR0ZXIudmVydGljZXNbNV0gIC0gb2Zmc2V0O1xyXG5cclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgNl0gPSBzdGFydExpbmVMZXR0ZXIudmVydGljZXNbNl07XHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDddID0gc3RhcnRMaW5lTGV0dGVyLnZlcnRpY2VzWzddICAtIG9mZnNldDtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0Q2xvc2VzdEdseXBoKHgsIHkpIHtcclxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMub3duZXIubWV0cmljcztcclxuICAgIHRoaXMubGF5b3V0ID0gdGhpcy5vd25lci5sYXlvdXQ7XHJcblxyXG4gICAgY29uc3QgeyBnbHlwaHMgfSA9IHRoaXMub3duZXIubGF5b3V0O1xyXG5cclxuICAgIGNvbnN0IGxpbmVIZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcclxuICAgIGNvbnN0IHNlbGVjdGluZ0xpbmUgPSBNYXRoLmZsb29yKHkgLyB0aGlzLm1ldHJpY3MubGluZUhlaWdodCk7XHJcbiAgICBjb25zdCBzZWxlY3RpbmdMaW5lWSA9IHNlbGVjdGluZ0xpbmUgKiBsaW5lSGVpZ2h0O1xyXG4gICAgbGV0IGxhc3RHbHlwaE9uTGluZSA9IGdseXBoc1tnbHlwaHMubGVuZ3RoIC0gMV07XHJcbiAgICBsZXQgZmlyc3RHbHlwaE9uTGluZSA9IG51bGw7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnbHlwaHMubGVuZ3RoIDsgKytpKSB7XHJcblxyXG4gICAgICBsZXQgZ2x5cGggPSBnbHlwaHNbaV07XHJcblxyXG4gICAgICBpZiAoZ2x5cGgubWV0cmljcy55ID09PSBzZWxlY3RpbmdMaW5lWSArIGxpbmVIZWlnaHQpIHtcclxuICAgICAgICBsYXN0R2x5cGhPbkxpbmUgPSBnbHlwaDtcclxuICAgICAgICBpZiAoeCA8IGdseXBoLm1ldHJpY3MueCArIGdseXBoLm1ldHJpY3Mud2lkdGggLyAyKSB7XHJcbiAgICAgICAgICBpZiAoaSA9PT0gMCkgcmV0dXJuIC0xO1xyXG5cclxuICAgICAgICAgIHJldHVybiBnbHlwaHNbaSAtIDFdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsYXN0R2x5cGhPbkxpbmU7XHJcblxyXG4gIH1cclxuXHJcbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcclxuICAgIC8vIE9ubHkgbGVmdCBtb3VzZSBidXR0b25cclxuICAgIGlmIChldmVudC5kYXRhLmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBwb3NpdGlvbiA9IGV2ZW50LmRhdGEuZ2xvYmFsO1xyXG4gICAgcG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybVBvc2l0aW9uKHBvc2l0aW9uKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZXN0TGV0dGVyID0gdGhpcy5nZXRDbG9zZXN0R2x5cGgocG9zaXRpb24ueCAsIHBvc2l0aW9uLnkpO1xyXG5cclxuICAgIGxldCBpbmRleCA9IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5pbmRleE9mKGNsb3Nlc3RMZXR0ZXIpO1xyXG5cclxuICAgIHRoaXMuc2V0UmFuZ2UoaW5kZXggKyAxLCBmYWxzZSApO1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcclxuICAgIGxldCBwb3NpdGlvbiA9IGV2ZW50LmRhdGEuZ2xvYmFsO1xyXG4gICAgcG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybVBvc2l0aW9uKHBvc2l0aW9uKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZXN0TGV0dGVyID0gdGhpcy5nZXRDbG9zZXN0R2x5cGgocG9zaXRpb24ueCAgLCBwb3NpdGlvbi55KTtcclxuICAgIGxldCBpbmRleCA9IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5pbmRleE9mKGNsb3Nlc3RMZXR0ZXIpO1xyXG5cclxuICAgIHRoaXMuc2V0UmFuZ2UobnVsbCwgaW5kZXggKyAxKTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VVcChldmVudCkge1xyXG5cclxuICAgIC8vIE9ubHkgbGVmdCBtb3VzZSBidXR0b25cclxuICAgIGlmIChldmVudC5kYXRhLmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBwb3NpdGlvbiA9IGV2ZW50LmRhdGEuZ2xvYmFsO1xyXG4gICAgcG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybVBvc2l0aW9uKHBvc2l0aW9uKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZXN0TGV0dGVyID0gdGhpcy5nZXRDbG9zZXN0R2x5cGgocG9zaXRpb24ueCAsIHBvc2l0aW9uLnkpO1xyXG5cclxuXHJcbiAgICAvLyAtMSBtZWFucyB0aGF0IHdlIGF0IHRoZSBzdGFydCBvZiB0aGUgbGluZVxyXG4gICAgaWYgKGNsb3Nlc3RMZXR0ZXIgPT09IC0xKSB7XHJcbiAgICAgIHRoaXMub3duZXIuaW5wdXQuZ2x5cGhJbmRleCA9IGNsb3Nlc3RMZXR0ZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm93bmVyLmlucHV0LmdseXBoSW5kZXggPSB0aGlzLm93bmVyLmxheW91dC5nbHlwaHMuaW5kZXhPZihjbG9zZXN0TGV0dGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybVBvc2l0aW9uKHBvc2l0aW9uKSB7XHJcbiAgICBjb25zdCBvd25lclBvc2l0aW9uID0gdGhpcy5vd25lci5nZXRHbG9iYWxQb3NpdGlvbigpO1xyXG4gICAgY29uc3QgdHJhbnNmb3JtID0gdGhpcy5vd25lci53b3JsZFRyYW5zZm9ybTtcclxuXHJcbiAgICBwb3NpdGlvbi54IC09IHRyYW5zZm9ybS50eDtcclxuICAgIHBvc2l0aW9uLnkgLT0gdHJhbnNmb3JtLnR5O1xyXG5cclxuICAgIHBvc2l0aW9uLnggPSBwb3NpdGlvbi54IC8gdHJhbnNmb3JtLmE7XHJcbiAgICBwb3NpdGlvbi55ID0gcG9zaXRpb24ueSAvIHRyYW5zZm9ybS5kO1xyXG5cclxuICAgIHJldHVybiBwb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIGNsZWFyU2VsZWN0ZWRSYW5nZSgpIHtcclxuXHJcbiAgICBjb25zdCByYW5nZSA9IHRoaXMucmFuZ2U7XHJcblxyXG4gICAgLy8gSWYgdXNlciBzZWxlY3RlZCBzb21lIHRleHQsIHJlbW92ZSBpdFxyXG4gICAgaWYgKHJhbmdlWzFdICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMub3duZXIuaW5wdXQuZ2x5cGhJbmRleCA9IE1hdGgubWluKHJhbmdlWzBdIC0gMSwgcmFuZ2VbMV0gLSAxKTtcclxuICAgICAgY29uc3QgcmVtb3ZlSW5kZXggPSBNYXRoLm1pbi5hcHBseShudWxsLCByYW5nZSk7XHJcbiAgICAgIGNvbnN0IHJlbW92ZUxlbmd0aCA9IE1hdGguYWJzKHJhbmdlWzBdIC0gcmFuZ2VbMV0pO1xyXG4gICAgICB0aGlzLm93bmVyLnNlbGVjdC5zZXRSYW5nZSgwLGZhbHNlKTtcclxuICAgICAgdGhpcy5vd25lci5yZW1vdmVTdHJpbmcocmVtb3ZlSW5kZXgsIHJlbW92ZUxlbmd0aCk7XHJcbiAgICAgIHRoaXMub3duZXIuaW5wdXQuc2hvdygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwYW5kKGRpcmVjdGlvbikge1xyXG4gICAgdGhpcy5yYW5nZVsxXSArPSBkaXJlY3Rpb247XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlbGVjdC5qcyIsInZhciBkdHlwZSA9IHJlcXVpcmUoJ2R0eXBlJylcbnZhciBhbkFycmF5ID0gcmVxdWlyZSgnYW4tYXJyYXknKVxudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJylcblxudmFyIENXID0gWzAsIDIsIDNdXG52YXIgQ0NXID0gWzIsIDEsIDNdXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlUXVhZEVsZW1lbnRzKGFycmF5LCBvcHQpIHtcbiAgICAvL2lmIHVzZXIgZGlkbid0IHNwZWNpZnkgYW4gb3V0cHV0IGFycmF5XG4gICAgaWYgKCFhcnJheSB8fCAhKGFuQXJyYXkoYXJyYXkpIHx8IGlzQnVmZmVyKGFycmF5KSkpIHtcbiAgICAgICAgb3B0ID0gYXJyYXkgfHwge31cbiAgICAgICAgYXJyYXkgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHQgPT09ICdudW1iZXInKSAvL2JhY2t3YXJkcy1jb21wYXRpYmxlXG4gICAgICAgIG9wdCA9IHsgY291bnQ6IG9wdCB9XG4gICAgZWxzZVxuICAgICAgICBvcHQgPSBvcHQgfHwge31cblxuICAgIHZhciB0eXBlID0gdHlwZW9mIG9wdC50eXBlID09PSAnc3RyaW5nJyA/IG9wdC50eXBlIDogJ3VpbnQxNidcbiAgICB2YXIgY291bnQgPSB0eXBlb2Ygb3B0LmNvdW50ID09PSAnbnVtYmVyJyA/IG9wdC5jb3VudCA6IDFcbiAgICB2YXIgc3RhcnQgPSAob3B0LnN0YXJ0IHx8IDApIFxuXG4gICAgdmFyIGRpciA9IG9wdC5jbG9ja3dpc2UgIT09IGZhbHNlID8gQ1cgOiBDQ1csXG4gICAgICAgIGEgPSBkaXJbMF0sIFxuICAgICAgICBiID0gZGlyWzFdLFxuICAgICAgICBjID0gZGlyWzJdXG5cbiAgICB2YXIgbnVtSW5kaWNlcyA9IGNvdW50ICogNlxuXG4gICAgdmFyIGluZGljZXMgPSBhcnJheSB8fCBuZXcgKGR0eXBlKHR5cGUpKShudW1JbmRpY2VzKVxuICAgIGZvciAodmFyIGkgPSAwLCBqID0gMDsgaSA8IG51bUluZGljZXM7IGkgKz0gNiwgaiArPSA0KSB7XG4gICAgICAgIHZhciB4ID0gaSArIHN0YXJ0XG4gICAgICAgIGluZGljZXNbeCArIDBdID0gaiArIDBcbiAgICAgICAgaW5kaWNlc1t4ICsgMV0gPSBqICsgMVxuICAgICAgICBpbmRpY2VzW3ggKyAyXSA9IGogKyAyXG4gICAgICAgIGluZGljZXNbeCArIDNdID0gaiArIGFcbiAgICAgICAgaW5kaWNlc1t4ICsgNF0gPSBqICsgYlxuICAgICAgICBpbmRpY2VzW3ggKyA1XSA9IGogKyBjXG4gICAgfVxuICAgIHJldHVybiBpbmRpY2VzXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGR0eXBlKSB7XG4gIHN3aXRjaCAoZHR5cGUpIHtcbiAgICBjYXNlICdpbnQ4JzpcbiAgICAgIHJldHVybiBJbnQ4QXJyYXlcbiAgICBjYXNlICdpbnQxNic6XG4gICAgICByZXR1cm4gSW50MTZBcnJheVxuICAgIGNhc2UgJ2ludDMyJzpcbiAgICAgIHJldHVybiBJbnQzMkFycmF5XG4gICAgY2FzZSAndWludDgnOlxuICAgICAgcmV0dXJuIFVpbnQ4QXJyYXlcbiAgICBjYXNlICd1aW50MTYnOlxuICAgICAgcmV0dXJuIFVpbnQxNkFycmF5XG4gICAgY2FzZSAndWludDMyJzpcbiAgICAgIHJldHVybiBVaW50MzJBcnJheVxuICAgIGNhc2UgJ2Zsb2F0MzInOlxuICAgICAgcmV0dXJuIEZsb2F0MzJBcnJheVxuICAgIGNhc2UgJ2Zsb2F0NjQnOlxuICAgICAgcmV0dXJuIEZsb2F0NjRBcnJheVxuICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIHJldHVybiBBcnJheVxuICAgIGNhc2UgJ3VpbnQ4X2NsYW1wZWQnOlxuICAgICAgcmV0dXJuIFVpbnQ4Q2xhbXBlZEFycmF5XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kdHlwZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuQXJyYXlcblxuZnVuY3Rpb24gYW5BcnJheShhcnIpIHtcbiAgcmV0dXJuIChcbiAgICAgICBhcnIuQllURVNfUEVSX0VMRU1FTlRcbiAgICAmJiBzdHIuY2FsbChhcnIuYnVmZmVyKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJ1xuICAgIHx8IEFycmF5LmlzQXJyYXkoYXJyKVxuICApXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYW4tYXJyYXkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtYnVmZmVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG5cclxuY2xhc3MgSW5wdXQge1xyXG5cclxuICBfZW5hYmxlZCA9IGZhbHNlO1xyXG4gIG93bmVyID0gbnVsbDtcclxuXHJcbiAgX2dseXBoSW5kZXggPSAtMTtcclxuXHJcbiAgc2V0IGdseXBoSW5kZXgodmFsdWUpIHtcclxuXHJcbiAgICB0aGlzLl9nbHlwaEluZGV4ID0gdmFsdWU7XHJcblxyXG4gICAgaWYgKHRoaXMuX2dseXBoSW5kZXggPCAtMSlcclxuICAgICAgdGhpcy5fZ2x5cGhJbmRleCA9IC0xO1xyXG5cclxuICAgIGlmICh0aGlzLl9nbHlwaEluZGV4ID4gdGhpcy5vd25lci5sYXlvdXQuZ2x5cGhzLmxlbmd0aClcclxuICAgICAgdGhpcy5fZ2x5cGhJbmRleCA9IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5sZW5ndGg7XHJcblxyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBnbHlwaEluZGV4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dseXBoSW5kZXg7XHJcbiAgfVxyXG5cclxuICBzZXQgZW5hYmxlZCh2YWx1ZSkge1xyXG4gICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcclxuICAgICAgdGhpcy5lbmFibGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGVuYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3Iob3duZXIpIHtcclxuICAgIHRoaXMub3duZXIgPSBvd25lcjtcclxuICAgIHRoaXMubWV0cmljcyA9IG93bmVyLm1ldHJpY3M7XHJcbiAgICB0aGlzLmxheW91dCA9IG93bmVyLmxheW91dDtcclxuICAgIHRoaXMuY2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJjYW52YXNcIilbMF1cclxuXHJcbiAgICB0aGlzLmNyZWF0ZUZpZWxkKCk7XHJcbiAgICB0aGlzLmRpc2FibGUoKTtcclxuICB9XHJcblxyXG4gIGVuYWJsZSgpIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5pbnB1dEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgZGlzYWJsZSgpIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy5pbnB1dEVsZW1lbnQpKVxyXG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuaW5wdXRFbGVtZW50KTtcclxuICB9XHJcblxyXG4gIGhpZGUoKSB7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xyXG4gIH1cclxuXHJcbiAgc2hvdygpIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMSc7XHJcbiAgfVxyXG5cclxuICBjcmVhdGVGaWVsZCgpIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xyXG5cclxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IE9iamVjdC52YWx1ZXModGhpcy5vd25lci50cmFuc2Zvcm0ud29ybGRUcmFuc2Zvcm0pLnNsaWNlKDAsIDYpO1xyXG5cclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XHJcbiAgICAvL3RoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsMCwwLDAuMyknO1xyXG5cclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmNvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuY29udGFpbiA9ICdzdHJpY3QnO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuekluZGV4ID0gMjtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnBvaW50ZXJFdmVudHMgPSBcIm5vbmVcIjtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmNvbG9yID0gdGhpcy5vd25lci5zdHlsZS5maWxsO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtT3JpZ2luPSBcImxlZnQgdG9wXCI7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgbWF0cml4KCR7dHJhbnNmb3JtLmpvaW4oXCIsIFwiKX0pYDtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSBcIjBcIjtcclxuXHJcbiAgICB0aGlzLmFkZEV2ZW50KFwiYmx1clwiLCAoZXZlbnQpID0+IHRoaXMuaW5wdXRFbGVtZW50LmZvY3VzKCkpO1xyXG4gICAgdGhpcy5hZGRFdmVudChcImlucHV0XCIsIChldmVudCkgPT4gdGhpcy5vbklucHV0KGV2ZW50KSk7XHJcbiAgICB0aGlzLmFkZEV2ZW50KFwia2V5ZG93blwiLCAoZXZlbnQpID0+IHRoaXMub25LZXlkb3duKGV2ZW50KSlcclxuICAgIHRoaXMuYWRkRXZlbnQoXCJwYXN0ZVwiLCAoZXZlbnQpID0+IHRoaXMucGFzdGVGcm9tQ2xpcGJvYXJkKGV2ZW50KSlcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuXHJcbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLm93bmVyLm1ldHJpY3M7XHJcbiAgICB0aGlzLmxheW91dCA9IHRoaXMub3duZXIubGF5b3V0O1xyXG5cclxuICAgIGNvbnN0IHtnbHlwaHN9ID0gdGhpcy5vd25lci5sYXlvdXQ7XHJcblxyXG4gICAgaWYgKHRoaXMuZ2x5cGhJbmRleCA+PSBnbHlwaHMubGVuZ3RoKSB7XHJcbiAgICAgIHRoaXMuZ2x5cGhJbmRleCA9IGdseXBocy5sZW5ndGggLSAxO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIERlZmF1bHQgY2FyZXQgcGxhY2UgLSBzdGFydCBvZiB0aGUgaW5wdXQgZmllbGQgVE9ETyBpbXBsZW1lbnQgYWxpZ25cclxuICAgIGxldCBnbHlwaE1ldHJpY3MgPSB7XHJcbiAgICAgIHg6IHRoaXMub3duZXIucG9zaXRpb24ueCxcclxuICAgICAgeTogdGhpcy5vd25lci5wb3NpdGlvbi55XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGlmIHN0cmluZyBpcyBlbXB0eSwgcHV0IGNhcmV0IGF0IHRoZSBiZWdpbm5pbmdcclxuICAgIGlmICh0aGlzLm93bmVyLmxheW91dC5nbHlwaHMubGVuZ3RoID09PSAtMSkge1xyXG5cclxuICAgICAgLy8gaWYgd2Ugb24gdGhlIGxhc3QgZ2x5cGgsIHBsYWNlIGNhcmV0IGFmdGVyIGl0XHJcbiAgICB9ZWxzZSBpZiAodGhpcy5nbHlwaEluZGV4ID09PSBnbHlwaHMubGVuZ3RoKSB7XHJcblxyXG4gICAgICBjb25zdCBsYXN0R2x5cGggPSBnbHlwaHNbZ2x5cGhzLmxlbmd0aCAtIDFdO1xyXG5cclxuICAgICAgZ2x5cGhNZXRyaWNzLnggKz0gbGFzdEdseXBoLm1ldHJpY3MueCArIGxhc3RHbHlwaC5tZXRyaWNzLndpZHRoO1xyXG4gICAgICBnbHlwaE1ldHJpY3MueSArPSBsYXN0R2x5cGgubWV0cmljcy55O1xyXG5cclxuICAgICAgLy8gaWYgY2FyZXQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgdGV4dFxyXG4gICAgfSBlbHNlIGlmICh0aGlzLmdseXBoSW5kZXggIT09IC0xKSB7XHJcbiAgICAgIGNvbnN0IHNlbGVjdGVkR2x5cGggPSBnbHlwaHNbdGhpcy5nbHlwaEluZGV4XTtcclxuXHJcbiAgICAgIGdseXBoTWV0cmljcy54ICs9IHNlbGVjdGVkR2x5cGgubWV0cmljcy54ICsgc2VsZWN0ZWRHbHlwaC5tZXRyaWNzLndpZHRoO1xyXG4gICAgICBnbHlwaE1ldHJpY3MueSArPSBzZWxlY3RlZEdseXBoLm1ldHJpY3MueTtcclxuICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICBnbHlwaE1ldHJpY3MueSArPSB0aGlzLm93bmVyLnN0eWxlLmxpbmVIZWlnaHQ7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgdHJhbnNmb3JtID0gT2JqZWN0LnZhbHVlcyh0aGlzLm93bmVyLnRyYW5zZm9ybS53b3JsZFRyYW5zZm9ybSkuc2xpY2UoMCwgNik7XHJcblxyXG5cclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBtYXRyaXgoJHt0cmFuc2Zvcm0uam9pbihcIiwgXCIpfSlgO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyBcInB4XCI7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5mb250U2l6ZSA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgXCJweFwiO1xyXG5cclxuICAgIHRoaXMuc2V0UG9zaXRpb24oZ2x5cGhNZXRyaWNzLnggLCBnbHlwaE1ldHJpY3MueSk7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5mb2N1cygpO1xyXG4gIH1cclxuXHJcbiAgb25JbnB1dChldmVudCkge1xyXG5cclxuICAgIGNvbnN0IHsgcmFuZ2UgfSA9IHRoaXMub3duZXIuc2VsZWN0O1xyXG5cclxuICAgIHRoaXMub3duZXIuc2VsZWN0LmNsZWFyU2VsZWN0ZWRSYW5nZSgpO1xyXG5cclxuICAgIGV2ZW50LnRhcmdldC52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgaWYgKGV2ZW50LmRhdGEgPT09IG51bGwpIHJldHVybjtcclxuXHJcbiAgICAvLyBDb250ZW50IHdlIGFyZSBhYm91dCB0byBhZGRcclxuICAgIGxldCB0ZXh0VG9BZGQgPSBldmVudC5kYXRhO1xyXG5cclxuICAgIGlmICh0aGlzLm93bmVyLmNvbmZpZy51cHBlcmNhc2UpIHtcclxuICAgICAgdGV4dFRvQWRkID0gdGV4dFRvQWRkLnRvVXBwZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRoaXMub3duZXIuY29uZmlnLmxvd2VyY2FzZSkge1xyXG4gICAgICB0ZXh0VG9BZGQgPSB0ZXh0VG9BZGQudG9Mb3dlckNhc2UoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBJZiB0ZXh0IGlzIGVtcHR5IG5vd1xyXG4gICAgaWYgKHRoaXMub3duZXIubGF5b3V0LmdseXBocy5sZW5ndGggPT09IDApIHtcclxuICAgICAgdGhpcy5vd25lci50ZXh0ID0gdGV4dFRvQWRkO1xyXG4gICAgICB0aGlzLmdseXBoSW5kZXggPSAxO1xyXG5cclxuICAgIC8vIElmIGNhcmV0IGlzIGF0IHRoZSBlbmQgb2YgdGhlIHRleHRcclxuICAgIH0gZWxzZSBpZiAodGhpcy5nbHlwaEluZGV4ID09PSB0aGlzLm93bmVyLmxheW91dC5nbHlwaHMubGVuZ3RoIC0gMSkge1xyXG4gICAgICB0aGlzLm93bmVyLnRleHQgKz0gdGV4dFRvQWRkO1xyXG4gICAgICB0aGlzLmdseXBoSW5kZXgrKztcclxuXHJcbiAgICAvLyBJZiB3ZSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBsaW5lXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm93bmVyLmluc2VydFN0cmluZygrK3RoaXMuZ2x5cGhJbmRleCwgdGV4dFRvQWRkKTtcclxuICAgICAgLy90aGlzLmdseXBoSW5kZXgrKztcclxuICAgIH1cclxuICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKDAsIGZhbHNlKTtcclxuXHJcbiAgfVxyXG5cclxuICBvbktleWRvd24oZXZlbnQpIHtcclxuXHJcbiAgICBjb25zdCB7cmFuZ2V9ID0gdGhpcy5vd25lci5zZWxlY3Q7XHJcblxyXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcclxuICAgICAgY2FzZSBcIkFycm93VXBcIjpcclxuICAgICAgICB0aGlzLm1vdmVVcCgpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuXHJcbiAgICAgIGNhc2UgXCJBcnJvd0Rvd25cIjpcclxuICAgICAgICB0aGlzLm1vdmVEb3duKCk7XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwiQXJyb3dMZWZ0XCI6XHJcblxyXG4gICAgICAgIC8vIE1vdmUgYnkgd29yZFxyXG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XHJcblxyXG4gICAgICAgICAgdGhpcy5tb3ZlQnlXb3JkTGVmdCgpXHJcblxyXG4gICAgICAgICAgLy8gU2VsZWN0XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5zaGlmdEtleSkge1xyXG5cclxuICAgICAgICAgIHRoaXMubW92ZVdpdGhTZWxlY3RMZWZ0KClcclxuXHJcbiAgICAgICAgICAvLyBKdXN0IG1vdmUgY3Vyc29yXHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKDAsIGZhbHNlKTtcclxuICAgICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICAgICAgdGhpcy5nbHlwaEluZGV4LS07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgXCJBcnJvd1JpZ2h0XCI6XHJcblxyXG4gICAgICAgIC8vIE1vdmUgYnkgd29yZFxyXG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XHJcbiAgICAgICAgIHRoaXMubW92ZUJ5V29yZFJpZ2h0KCk7XHJcbiAgICAgICAgLy8gU2VsZWN0XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudC5zaGlmdEtleSkge1xyXG4gICAgICAgICAgdGhpcy5tb3ZlV2l0aFNlbGVjdFJpZ2h0KClcclxuXHJcbiAgICAgICAgLy8gSnVzdCBtb3ZlIGluZGV4XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKDAsIGZhbHNlKTtcclxuICAgICAgICAgIHRoaXMuc2hvdygpO1xyXG4gICAgICAgICAgdGhpcy5nbHlwaEluZGV4Kys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgXCJCYWNrc3BhY2VcIjpcclxuICAgICAgICBpZiAocmFuZ2VbMV0gIT09IG51bGwpIHtcclxuICAgICAgICAgIHRoaXMub3duZXIuc2VsZWN0LmNsZWFyU2VsZWN0ZWRSYW5nZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3duZXIucmVtb3ZlU3RyaW5nKHRoaXMuZ2x5cGhJbmRleC0tLCAwKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwiRGVsZXRlXCI6XHJcbiAgICAgICAgaWYgKHJhbmdlWzFdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICB0aGlzLm93bmVyLnNlbGVjdC5jbGVhclNlbGVjdGVkUmFuZ2UoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm93bmVyLnJlbW92ZVN0cmluZyh0aGlzLmdseXBoSW5kZXggKyAxLCAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gU2VsZWN0IGFsbFxyXG4gICAgICBjYXNlIFwiYVwiOlxyXG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XHJcbiAgICAgICAgICB0aGlzLm93bmVyLnNlbGVjdC5zZXRSYW5nZSgwLHRoaXMub3duZXIudGV4dC5sZW5ndGggLSAxKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gQ29weSB0byBjbGlwYm9hcmRcclxuICAgICAgY2FzZSBcImNcIjpcclxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xyXG4gICAgICAgICAgdGhpcy5jb3B5VG9DbGlwYm9hcmQoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgLy8gQ3V0XHJcbiAgICAgIGNhc2UgXCJ4XCI6XHJcbiAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcclxuICAgICAgICAgIHRoaXMuY29weVRvQ2xpcGJvYXJkKHRydWUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IFwiIFwiO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBcIlwiO1xyXG5cclxuICB9XHJcblxyXG4gIHNldFBvc2l0aW9uKHgsIHkpIHtcclxuXHJcbiAgICBjb25zdCB7YSA6IHNjYWxlWCwgZDogc2NhbGVZfSA9IHRoaXMub3duZXIudHJhbnNmb3JtLndvcmxkVHJhbnNmb3JtO1xyXG4gICAgY29uc3Qge3ggOiBsb2NhbFgsIHk6IGxvY2FsWSB9ID0gdGhpcy5vd25lci5wb3NpdGlvbjtcclxuXHJcbiAgICBsZXQgbGluZUhlaWdodCA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICogc2NhbGVZO1xyXG5cclxuICAgIHkgKj0gc2NhbGVZO1xyXG4gICAgeCAqPSBzY2FsZVg7XHJcblxyXG4gICAgeSAtPSBsaW5lSGVpZ2h0O1xyXG5cclxuICAgIHkgLT0gbG9jYWxZICogc2NhbGVZO1xyXG4gICAgeCAtPSBsb2NhbFggKiBzY2FsZVg7XHJcblxyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUubGVmdCA9IGAke3h9cHhgO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUudG9wID0gYCR7eX1weGA7XHJcblxyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBcIiBcIjtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcclxuXHJcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBPYmplY3QudmFsdWVzKHRoaXMuZ2V0VHJhbnNmb3JtKCkpLnNsaWNlKDAsIDYpO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYG1hdHJpeCgke3RyYW5zZm9ybS5qb2luKFwiLCBcIil9KWA7XHJcbiAgfVxyXG5cclxuICBnZXRUcmFuc2Zvcm0oKSB7XHJcbiAgICBjb25zdCBvd25lclRyYW5zZm9ybSA9IHRoaXMub3duZXIudHJhbnNmb3JtLndvcmxkVHJhbnNmb3JtO1xyXG4gICAgbGV0IGNhbnZhc1JlY3QgPSB0aGlzLmNhbnZhcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIHJldHVybiB7Li4ub3duZXJUcmFuc2Zvcm0sIHR4OiBvd25lclRyYW5zZm9ybS50eCArIGNhbnZhc1JlY3QueCwgdHk6IG93bmVyVHJhbnNmb3JtLnR5ICsgY2FudmFzUmVjdC55fTtcclxuICB9XHJcblxyXG4gIGFkZEV2ZW50KGV2ZW50LCBjYWxsYmFjaykge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKGV2ZW50KSA9PiB7XHJcbiAgICAgIGlmICh0aGlzLl9lbmFibGVkKSB7XHJcbiAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG4gIGNvcHlUb0NsaXBib2FyZChjdXQgPSBmYWxzZSkge1xyXG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLm93bmVyLnNlbGVjdC5yYW5nZTtcclxuICAgIGNvbnN0IHN0YXJ0ID0gTWF0aC5taW4uYXBwbHkobnVsbCwgcmFuZ2UpO1xyXG4gICAgY29uc3QgZW5kID0gTWF0aC5tYXguYXBwbHkobnVsbCwgcmFuZ2UpO1xyXG5cclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gdGhpcy5vd25lci50ZXh0LnNsaWNlKHN0YXJ0LCBlbmQgKyAxKTtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnNlbGVjdCgpO1xyXG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgIGlmIChjdXQpIHtcclxuICAgICAgdGhpcy5vd25lci5zZWxlY3QuY2xlYXJTZWxlY3RlZFJhbmdlKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBwYXN0ZUZyb21DbGlwYm9hcmQoZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBsZXQgdGV4dCA9IGV2ZW50LmNsaXBib2FyZERhdGEuZ2V0RGF0YShcInRleHRcIik7XHJcblxyXG4gICAgaWYgKHRoaXMub3duZXIuY29uZmlnLnVwcGVyY2FzZSlcclxuICAgICAgdGV4dCA9IHRleHQudG9VcHBlckNhc2UoKTtcclxuXHJcbiAgICBpZiAodGhpcy5vd25lci5jb25maWcubG93ZXJjYXNlKVxyXG4gICAgICB0ZXh0ID0gdGV4dC50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIC8vIFRPRE8gcmVtb3ZlIGFsbCB0cmFzaCBzeW1ib2xzXHJcblxyXG4gICAgdGhpcy5vd25lci5zZWxlY3QuY2xlYXJTZWxlY3RlZFJhbmdlKCk7XHJcblxyXG4gICAgdGhpcy5vd25lci5pbnNlcnRTdHJpbmcodGhpcy5nbHlwaEluZGV4ICsgMSwgdGV4dCk7XHJcblxyXG4gICAgdGhpcy5nbHlwaEluZGV4ID0gdGhpcy5nbHlwaEluZGV4ICsgdGV4dC5sZW5ndGg7XHJcbiAgfVxyXG5cclxuICBtb3ZlV2l0aFNlbGVjdFJpZ2h0KCkge1xyXG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLm93bmVyLnNlbGVjdC5yYW5nZTtcclxuXHJcbiAgICBpZiAocmFuZ2VbMV0gPT09IG51bGwpIHtcclxuICAgICAgKyt0aGlzLmdseXBoSW5kZXg7XHJcbiAgICAgIHJhbmdlWzBdID0gdGhpcy5nbHlwaEluZGV4O1xyXG4gICAgICByYW5nZVsxXSA9IHRoaXMuZ2x5cGhJbmRleCA7XHJcbiAgICB9IGVsc2UgaWYgKHJhbmdlWzFdID09PSByYW5nZVswXSAmJiB0aGlzLmdseXBoSW5kZXggPT09IHJhbmdlWzBdIC0gMSkge1xyXG4gICAgICByYW5nZVsxXSA9IG51bGw7XHJcbiAgICAgIHRoaXMuZ2x5cGhJbmRleCsrO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vd25lci5zZWxlY3QuZXhwYW5kKDEpO1xyXG4gICAgICB0aGlzLmdseXBoSW5kZXgrK1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMub3duZXIuc2VsZWN0LnVwZGF0ZSgpXHJcbiAgfVxyXG5cclxuICBtb3ZlV2l0aFNlbGVjdExlZnQoKSB7XHJcblxyXG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLm93bmVyLnNlbGVjdC5yYW5nZTtcclxuXHJcbiAgICAvLyBJZiB3ZSBvbmx5IGhhdmUgY3Vyc29yLCBubyBzZWxlY3Rpb25cclxuICAgIGlmIChyYW5nZVsxXSA9PT0gbnVsbCkge1xyXG4gICAgICByYW5nZVswXSA9IHRoaXMuZ2x5cGhJbmRleDtcclxuICAgICAgcmFuZ2VbMV0gPSB0aGlzLmdseXBoSW5kZXggO1xyXG5cclxuICAgICAgLy8gSWYgd2UgaGF2ZSBzZWxlY3RlZCBvbmUgZ2x5cGggYW5kIHdlIHJlbW92ZSBzZWxlY3Rpb25cclxuICAgIH0gZWxzZSBpZiAocmFuZ2VbMV0gPT09IHJhbmdlWzBdICYmIHRoaXMuZ2x5cGhJbmRleCA9PT0gcmFuZ2VbMF0pIHtcclxuICAgICAgcmFuZ2VbMV0gPSBudWxsO1xyXG5cclxuICAgICAgLy8gUmVndWxhciBzZWxlY3RpbmdcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3duZXIuc2VsZWN0LmV4cGFuZCgtMSk7XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5nbHlwaEluZGV4LS07XHJcblxyXG4gICAgdGhpcy5vd25lci5zZWxlY3QudXBkYXRlKCk7XHJcbiAgfVxyXG5cclxuICBtb3ZlRG93bigpIHtcclxuXHJcbiAgICB0aGlzLm93bmVyLnNlbGVjdC5zZXRSYW5nZShudWxsLCBmYWxzZSlcclxuXHJcbiAgICBjb25zdCBnbHlwaCA9IHRoaXMubGF5b3V0LmdseXBoc1tNYXRoLm1heCgwLCB0aGlzLmdseXBoSW5kZXgpXTtcclxuXHJcbiAgICAvLyBJZiB3ZSBhcmUgb24gdGhlIGZpcnN0IGxpbmVcclxuICAgIGlmIChnbHlwaC5wb3NpdGlvblsxXSA9PT0gdGhpcy5sYXlvdXQuaGVpZ2h0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdHbHlwaCA9IHRoaXMub3duZXIuc2VsZWN0LmdldENsb3Nlc3RHbHlwaChnbHlwaC5wb3NpdGlvblswXSwgZ2x5cGgucG9zaXRpb25bMV0pO1xyXG4gICAgdGhpcy5nbHlwaEluZGV4ID0gdGhpcy5sYXlvdXQuZ2x5cGhzLmluZGV4T2YobmV3R2x5cGgpO1xyXG4gIH1cclxuXHJcbiAgbW92ZVVwKCkge1xyXG5cclxuICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKG51bGwsIGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGdseXBoID0gdGhpcy5sYXlvdXQuZ2x5cGhzW3RoaXMuZ2x5cGhJbmRleF07XHJcblxyXG4gICAgLy8gSWYgd2UgYXJlIG9uIHRoZSBmaXJzdCBsaW5lXHJcbiAgICBpZiAoZ2x5cGgucG9zaXRpb25bMV0gPD0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQpIHtcclxuICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG5ld0dseXBoID0gdGhpcy5vd25lci5zZWxlY3QuZ2V0Q2xvc2VzdEdseXBoKGdseXBoLnBvc2l0aW9uWzBdLCBnbHlwaC5wb3NpdGlvblsxXSAtIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICogMik7XHJcbiAgICB0aGlzLmdseXBoSW5kZXggPSB0aGlzLmxheW91dC5nbHlwaHMuaW5kZXhPZihuZXdHbHlwaCk7XHJcblxyXG4gIH1cclxuXHJcbiAgbW92ZUJ5V29yZExlZnQoKSB7XHJcbiAgICBjb25zdCBnbHlwaHMgPSB0aGlzLmxheW91dC5nbHlwaHM7XHJcblxyXG4gICAgaWYgKHRoaXMuZ2x5cGhJbmRleCA+IDApIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHRoaXMuZ2x5cGhJbmRleCAtIDI7IGkgPj0gMDsgaS0tICkge1xyXG4gICAgICAgIGlmIChnbHlwaHNbaV0ubGV0dGVyID09PSBcIiBcIiAmJiBnbHlwaHNbaSArIDEgXS5sZXR0ZXIgIT09IFwiIFwiKSB7XHJcbiAgICAgICAgICB0aGlzLmdseXBoSW5kZXggPSBpO1xyXG4gICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoaSA9PT0gMCApIHRoaXMuZ2x5cGhJbmRleCA9IC0xO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBtb3ZlQnlXb3JkUmlnaHQoKSB7XHJcbiAgICBjb25zdCBnbHlwaHMgPSB0aGlzLmxheW91dC5nbHlwaHM7XHJcblxyXG4gICAgaWYgKHRoaXMuZ2x5cGhJbmRleCA8IGdseXBocy5sZW5ndGgpIHtcclxuICAgICAgZm9yIChsZXQgaSA9IHRoaXMuZ2x5cGhJbmRleCArIDE7IGkgPD0gZ2x5cGhzLmxlbmd0aCAtIDE7IGkrKyApIHtcclxuICAgICAgICBpZiAoZ2x5cGhzW2ldLmxldHRlciA9PT0gXCIgXCIgJiYgZ2x5cGhzW2kgLSAxIF0ubGV0dGVyICE9PSBcIiBcIikge1xyXG4gICAgICAgICAgdGhpcy5nbHlwaEluZGV4ID0gaTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGkgPT09IGdseXBocy5sZW5ndGggLSAxKSB0aGlzLmdseXBoSW5kZXggPSBnbHlwaHMubGVuZ3RoIC0xO1xyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IElucHV0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5wdXQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG5hdHRyaWJ1dGUgdmVjMiBhVmVydGV4UG9zaXRpb247XFxuYXR0cmlidXRlIHZlYzIgYVRleHR1cmVDb29yZDtcXG5hdHRyaWJ1dGUgZmxvYXQgYVNkZlNpemU7XFxuXFxudW5pZm9ybSBtYXQzIHRyYW5zbGF0aW9uTWF0cml4O1xcbnVuaWZvcm0gbWF0MyBwcm9qZWN0aW9uTWF0cml4O1xcbnVuaWZvcm0gZmxvYXQgc2RmTXVsdGlwbGllcjtcXG5cXG52YXJ5aW5nIHZlYzIgIHRjMDtcXG52YXJ5aW5nIGZsb2F0IGRvZmZzZXQ7XFxudmFyeWluZyBmbG9hdCBzZGZfdGV4ZWw7XFxuXFxuXFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG5cXG4gICAgLy9UT0RPIE1BS0UgQVRUUklCVVRFXFxuICAgIGZsb2F0IHNkZl9zaXplID0gYVNkZlNpemUgKiBzZGZNdWx0aXBsaWVyO1xcblxcbiAgICAvL1RPRE8gTUFLRSBVTklGT1JNU1xcbiAgICBmbG9hdCBzZGZfdGV4X3NpemUgPSAxMDI0LjA7XFxuXFxuXFxuICAgIHRjMCA9IGFUZXh0dXJlQ29vcmQ7XFxuICAgIGRvZmZzZXQgPSAxLjAgLyBzZGZfc2l6ZTsgICAgICAgLy8gRGlzdGFuY2UgZmllbGQgZGVsdGEgZm9yIG9uZSBzY3JlZW4gcGl4ZWxcXG4gICAgc2RmX3RleGVsID0gMS4wIC8gc2RmX3RleF9zaXplO1xcblxcbiAgICBnbF9Qb3NpdGlvbiA9IHZlYzQoKHByb2plY3Rpb25NYXRyaXggKiB0cmFuc2xhdGlvbk1hdHJpeCAqIHZlYzMoYVZlcnRleFBvc2l0aW9uICwgMS4wKSkueHksIDAuMCwgMS4wKTtcXG5cXG59XFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL3RleHQvdmVydC5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG51bmlmb3JtIHNhbXBsZXIyRCB1U2FtcGxlcjtcXG51bmlmb3JtIGZsb2F0IGhpbnRfYW1vdW50O1xcbnVuaWZvcm0gZmxvYXQgc3VicGl4ZWxfYW1vdW50O1xcblxcbnVuaWZvcm0gdmVjMyBiZ19jb2xvcjtcXG51bmlmb3JtIHZlYzMgZm9udF9jb2xvcjtcXG5cXG52YXJ5aW5nIHZlYzIgIHRjMDtcXG52YXJ5aW5nIGZsb2F0IGRvZmZzZXQ7XFxudmFyeWluZyBmbG9hdCBzZGZfdGV4ZWw7XFxuXFxuXFxuLypcXG4gKiAgU3VicGl4ZWwgY292ZXJhZ2UgY2FsY3VsYXRpb25cXG4gKlxcbiAqICB2IC0gZWRnZSBzbG9wZSAgICAtMS4wIHRvIDEuMCAgICAgICAgICB0cmlwbGV0XFxuICogIGEgLSBwaXhlbCBjb3ZlcmFnZSAwLjAgdG8gMS4wICAgICAgICAgIGNvdmVyYWdlXFxuICpcXG4gKiAgICAgIHw8LSBnbHlwaCBlZGdlICAgICAgICAgICAgICAgICAgICAgIFIgIEcgIEJcXG4gKiAgKy0tLSstLS0rICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0rLS0rLS0rXFxuICogIHwgICB8WFhYfCB2ID0gMS4wIChlZGdlIGZhY2luZyB3ZXN0KSAgfCAgfHh4fFhYfFxcbiAqICB8ICAgfFhYWHwgYSA9IDAuNSAoNTAlIGNvdmVyYWdlKSAgICAgIHwgIHx4eHxYWHxcXG4gKiAgfCAgIHxYWFh8ICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB8eHh8WFh8XFxuICogICstLS0rLS0tKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tKy0tKy0tK1xcbiAqICAgIHBpeGVsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAwICA1MCAxMDBcXG4gKlxcbiAqXFxuICogICAgICAgIFIgICBHICAgQlxcbiAqXFxuICogICAxLjAgICAgICAgICstLSsgICA8LSB0b3AgKGFicyggdiApKVxcbiAqICAgICAgICAgICAgICB8XFxuICogICAgICAgLSstLS0tLSstLSstLSA8LSBjZWlsOiAxMDAlIGNvdmVyYWdlXFxuICogICAgICAgIHwgICAgIHxYWHxcXG4gKiAgIDAuMCAgfCAgKy0tK1hYfFxcbiAqICAgICAgICB8ICB8eHh8WFh8XFxuICogICAgICAgLSstLSstLSstLSstLSA8LSBmbG9vcjogMCUgY292ZXJhZ2VcXG4gKiAgICAgICAgICAgfFxcbiAqICAtMS4wICArLS0rICAgICAgICAgPC0gIC1hYnModilcXG4gKiAgICAgICAgfFxcbiAqICAgICAgICB8XFxuICogICAgICAgIHxcXG4gKiAgLTIuMCAgKyAgICAgICAgICAgIDwtIGJvdHRvbTogLWFicyh2KS0xLjBcXG4gKi9cXG5cXG52ZWMzIHN1YnBpeGVsKCBmbG9hdCB2LCBmbG9hdCBhICkge1xcbiAgICBmbG9hdCB2dCAgICAgID0gMC42ICogdjsgLy8gMS4wIHdpbGwgbWFrZSB5b3VyIGV5ZXMgYmxlZWRcXG4gICAgdmVjMyAgcmdiX21heCA9IHZlYzMoIC12dCwgMC4wLCB2dCApO1xcbiAgICBmbG9hdCB0b3AgICAgID0gYWJzKCB2dCApO1xcbiAgICBmbG9hdCBib3R0b20gID0gLXRvcCAtIDEuMDtcXG4gICAgZmxvYXQgY2Zsb29yICA9IG1peCggdG9wLCBib3R0b20sIGEgKTtcXG4gICAgdmVjMyAgcmVzICAgICA9IGNsYW1wKCByZ2JfbWF4IC0gdmVjMyggY2Zsb29yICksIDAuMCwgMS4wICk7XFxuICAgIHJldHVybiByZXM7XFxufVxcblxcbnZvaWQgbWFpbjIoKSB7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMS4wLCAxLjAsIDEuMCwxLjApO1xcbn1cXG5cXG52b2lkIG1haW4odm9pZCkge1xcblxcbiAgICAvLyBTYW1wbGluZyB0aGUgdGV4dHVyZSwgTCBwYXR0ZXJuXFxuICAgIGZsb2F0IHNkZiAgICAgICA9IHRleHR1cmUyRCggdVNhbXBsZXIsIHRjMCApLnI7XFxuICAgIGZsb2F0IHNkZl9ub3J0aCA9IHRleHR1cmUyRCggdVNhbXBsZXIsIHRjMCArIHZlYzIoIDAuMCwgc2RmX3RleGVsICkgKS5yO1xcbiAgICBmbG9hdCBzZGZfZWFzdCAgPSB0ZXh0dXJlMkQoIHVTYW1wbGVyLCB0YzAgKyB2ZWMyKCBzZGZfdGV4ZWwsIDAuMCApICkucjtcXG5cXG4gICAgLy8gRXN0aW1hdGluZyBzdHJva2UgZGlyZWN0aW9uIGJ5IHRoZSBkaXN0YW5jZSBmaWVsZCBncmFkaWVudCB2ZWN0b3JcXG4gICAgdmVjMiAgc2dyYWQgICAgID0gdmVjMiggc2RmX2Vhc3QgLSBzZGYsIHNkZl9ub3J0aCAtIHNkZiApO1xcbiAgICBmbG9hdCBzZ3JhZF9sZW4gPSBtYXgoIGxlbmd0aCggc2dyYWQgKSwgMS4wIC8gMTI4LjAgKTtcXG4gICAgdmVjMiAgZ3JhZCAgICAgID0gc2dyYWQgLyB2ZWMyKCBzZ3JhZF9sZW4gKTtcXG4gICAgZmxvYXQgdmdyYWQgPSBhYnMoIGdyYWQueSApOyAvLyAwLjAgLSB2ZXJ0aWNhbCBzdHJva2UsIDEuMCAtIGhvcml6b250YWwgb25lXFxuXFxuICAgIGZsb2F0IGhvcnpfc2NhbGUgID0gMS4xOyAvLyBCbHVycmluZyB2ZXJ0aWNhbCBzdHJva2VzIGFsb25nIHRoZSBYIGF4aXMgYSBiaXRcXG4gICAgZmxvYXQgdmVydF9zY2FsZSAgPSAwLjY7IC8vIFdoaWxlIGFkZGluZyBzb21lIGNvbnRyYXN0IHRvIHRoZSBob3Jpem9udGFsIHN0cm9rZXNcXG4gICAgZmxvYXQgaGRvZmZzZXQgICAgPSBtaXgoIGRvZmZzZXQgKiBob3J6X3NjYWxlLCBkb2Zmc2V0ICogdmVydF9zY2FsZSwgdmdyYWQgKTtcXG4gICAgZmxvYXQgcmVzX2RvZmZzZXQgPSBtaXgoIGRvZmZzZXQsIGhkb2Zmc2V0LCBoaW50X2Ftb3VudCApO1xcblxcbiAgICBmbG9hdCBhbHBoYSAgICAgICA9IHNtb290aHN0ZXAoIDAuNSAtIHJlc19kb2Zmc2V0LCAwLjUgKyByZXNfZG9mZnNldCwgc2RmICk7XFxuXFxuICAgIC8vIEFkZGl0aW9uYWwgY29udHJhc3RcXG4gICAgYWxwaGEgICAgICAgICAgICAgPSBwb3coIGFscGhhLCAxLjAgKyAwLjIgKiB2Z3JhZCAqIGhpbnRfYW1vdW50ICk7XFxuXFxuICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gc3VwcG9ydCBmb3IgQVJCX2JsZW5kX2Z1bmNfZXh0ZW5kZWQgaW4gV2ViR0wuXFxuICAgIC8vIEZvcnR1bmF0ZWx5IHRoZSBiYWNrZ3JvdW5kIGlzIGZpbGxlZCB3aXRoIGEgc29saWQgY29sb3Igc28gd2UgY2FuIGRvXFxuICAgIC8vIHRoZSBibGVuZGluZyBpbnNpZGUgdGhlIHNoYWRlci5cXG5cXG4gICAgLy8gRGlzY2FyZGluZyBwaXhlbHMgYmV5b25kIGEgdGhyZXNob2xkIHRvIG1pbmltaXNlIHBvc3NpYmxlIGFydGlmYWN0cy5cXG4gICAgaWYgKCBhbHBoYSA8IDIwLjAgLyAyNTYuMCApIGRpc2NhcmQ7XFxuXFxuICAgIHZlYzMgY2hhbm5lbHMgPSBzdWJwaXhlbCggZ3JhZC54ICogMC41ICogc3VicGl4ZWxfYW1vdW50LCBhbHBoYSApICsgMC4xO1xcblxcbiAgICAvLyBGb3Igc3VicGl4ZWwgcmVuZGVyaW5nIHdlIGhhdmUgdG8gYmxlbmQgZWFjaCBjb2xvciBjaGFubmVsIHNlcGFyYXRlbHlcXG4gICAgdmVjMyByZXMgPSBtaXgoIGJnX2NvbG9yLCBmb250X2NvbG9yLCBjaGFubmVscyApO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KCByZXMsIDEuMCApO1xcbn1cXG5cXG5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvdGV4dC9mcmFnLmdsc2xcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjtcXG5cXG51bmlmb3JtIG1hdDMgdHJhbnNsYXRpb25NYXRyaXg7XFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb25NYXRyaXg7XFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG5cXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KChwcm9qZWN0aW9uTWF0cml4ICogdHJhbnNsYXRpb25NYXRyaXggKiB2ZWMzKGFWZXJ0ZXhQb3NpdGlvbiAsIDEuMCkpLnh5LCAwLjAsIDEuMCk7XFxuXFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy9zZWxlY3QvdmVydC5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG51bmlmb3JtIHZlYzMgYmdfY29sb3I7XFxudmFyeWluZyB2ZWMyICB0YzA7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGJnX2NvbG9yLDAuNDUpO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDEuMCwgMS4wLCAxLjAsMC4yKTtcXG59XFxuXFxuXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL3NlbGVjdC9mcmFnLmdsc2xcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBBd2Vzb21lVGV4dCBmcm9tIFwiLi90ZXh0XCI7XHJcblxyXG5jb25zdCBjcmVhdGVJbmRpY2VzID0gcmVxdWlyZShcInF1YWQtaW5kaWNlc1wiKVxyXG5pbXBvcnQgVGV4dExheW91dCBmcm9tICcuL2xheW91dCc7XHJcblxyXG5jb25zdCB2ZXJ0ZXhTaGFkZXIgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3RleHQvdmVydC5nbHNsXCIpO1xyXG5jb25zdCBmcmFnbWVudFNoYWRlciA9IHJlcXVpcmUoXCIuL3NoYWRlcnMvdGV4dC9mcmFnLmdsc2xcIik7XHJcblxyXG5jbGFzcyBUZXh0IHtcclxuXHJcbiAgICBzdGF0aWMgc2NhbGUgPSAxLjA7XHJcbiAgICBzdGF0aWMgc3RhdGVzID0ge3JlZ3VsYXI6IDAsIGVkaXRhYmxlOiAxLCBzZWxlY3Rpbmc6IDJ9O1xyXG4gICAgc3RhdGljIGN1cnJlbnRFZGl0aW5nRWxlbWVudCA9IG51bGw7XHJcblxyXG4gICAgY29uc3RydWN0b3IodGV4dCwgc3R5bGUsIGNvbmZpZykge1xyXG5cclxuICAgICAgICB0aGlzLnN0eWxlID0gbmV3IFBJWEkuVGV4dFN0eWxlKHN0eWxlKTtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IHsuLi50aGlzLmNvbmZpZywgLi4uY29uZmlnfTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29uZmlnLmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICB0aGlzLl90ZXh0ID0gdGV4dDsgLy8gQ29udGVudFxyXG4gICAgICAgIHRoaXMuX2ZvbnQgPSBjb25maWcuZm9udDsgLy8gRm9udCBpbmZvcm1hdGlvblxyXG4gICAgICAgIHRoaXMuX3RleHR1cmUgPSBjb25maWcudGV4dHVyZTsgLy8gVGV4dHVyZSB3aXRoIGdseXBoc1xyXG5cclxuICAgICAgICB0aGlzLmxheW91dCA9IG5ldyBUZXh0TGF5b3V0KHRoaXMsIHtcclxuICAgICAgICAgICAgZm9udFNpemU6IHRoaXMuc3R5bGUuZm9udFNpemUsXHJcbiAgICAgICAgICAgIHdyYXBXb3JkczogdGhpcy5zdHlsZS5icmVha1dvcmRzLFxyXG4gICAgICAgICAgICB3cmFwcGVyV2lkdGg6IHRoaXMuc3R5bGUud29yZFdyYXBXaWR0aCxcclxuICAgICAgICAgICAgYWxpZ246IHRoaXMuc3R5bGUuYWxpZ24sXHJcbiAgICAgICAgICAgIGxpbmVIZWlnaHQ6IHRoaXMuc3R5bGUubGluZUhlaWdodCxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5tZXRyaWNzID0gdGhpcy5mb250TWV0cmljcyh0aGlzLnN0eWxlLmZvbnRTaXplLCAwLjApO1xyXG4gICAgICAgIHRoaXMubGF5b3V0LnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICAvLyBBcnJheXMgZm9yIHZlcnRpY2VzLCB1dnMgYW5kIHNkZlxyXG4gICAgICAgIHRoaXMudmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubGF5b3V0LmxldHRlcnNDb3VudCAqIDQgKiAyKTtcclxuICAgICAgICB0aGlzLnV2cyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5sYXlvdXQubGV0dGVyc0NvdW50ICogNCAqIDIpO1xyXG4gICAgICAgIHRoaXMuc2RmU2l6ZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubGF5b3V0LmxldHRlcnNDb3VudCAqIDQpO1xyXG4gICAgICAgIHRoaXMuYXJyYXlQb3NpdGlvbnMgPSB7IHZlcnRleDogMCwgdXZzOiAwLCBzZGY6IDAgfTtcclxuXHJcbiAgICAgICAgLy8gRmlsbCBhcnJheXMgd29yZCBieSB3b3JkXHJcbiAgICAgICAgdGhpcy5sYXlvdXQud29yZHNNZXRyaWNzLmZvckVhY2ggKHdvcmQgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLndyaXRlU3RyaW5nKHdvcmQud29yZCwgdGhpcy5mb250LCB0aGlzLm1ldHJpY3MsIFt3b3JkLngsIHdvcmQueV0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBQcmVwYXJlIGluZGljZXNcclxuICAgICAgICB0aGlzLmluZGljZXMgPSBjcmVhdGVJbmRpY2VzKHtcclxuICAgICAgICAgICAgY2xvY2t3aXNlOiB0cnVlLFxyXG4gICAgICAgICAgICB0eXBlOiAndWludDE2JyxcclxuICAgICAgICAgICAgY291bnQ6IHRoaXMubGF5b3V0LmxldHRlcnNDb3VudFxyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IFBJWEkuR2VvbWV0cnkoKVxyXG4gICAgICAgICAgICAuYWRkQXR0cmlidXRlKCdhVmVydGV4UG9zaXRpb24nLCAvLyB0aGUgYXR0cmlidXRlIG5hbWVcclxuICAgICAgICAgICAgICAgIHRoaXMudmVydGljZXMsIC8vIHgsIHlcclxuICAgICAgICAgICAgICAgIDIpIC8vIHRoZSBzaXplIG9mIHRoZSBhdHRyaWJ1dGVcclxuXHJcbiAgICAgICAgICAgIC5hZGRBdHRyaWJ1dGUoJ2FUZXh0dXJlQ29vcmQnLCAvLyB0aGUgYXR0cmlidXRlIG5hbWVcclxuICAgICAgICAgICAgICAgIHRoaXMudXZzLCAvLyB1LCB2XHJcbiAgICAgICAgICAgICAgICAyKSAvLyB0aGUgc2l6ZSBvZiB0aGUgYXR0cmlidXRlXHJcblxyXG4gICAgICAgICAgICAuYWRkQXR0cmlidXRlKCdhU2RmU2l6ZScsIC8vIHRoZSBhdHRyaWJ1dGUgbmFtZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZGZTaXplcywgLy8gdSwgdlxyXG4gICAgICAgICAgICAgICAgICAgIDEpIC8vIHRoZSBzaXplIG9mIHRoZSBhdHRyaWJ1dGVcclxuICAgICAgICAgICAgLmFkZEluZGV4KHRoaXMuaW5kaWNlcylcclxuXHJcblxyXG4gICAgICAvKiAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy51U2FtcGxlciA9IHRoaXMucmVuZGVyZXIuYmluZFRleHR1cmUoc291cmNlLnRleHR1cmUpO1xyXG4gICAgICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMudHJhbnNsYXRpb25NYXRyaXggPSBzb3VyY2Uud29ybGRUcmFuc2Zvcm0udG9BcnJheSh0cnVlKTtcclxuXHJcbiAgICAgICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5oaW50X2Ftb3VudCA9IHNvdXJjZS5jb25maWcuYW50aWFsaWFzaW5nICogMTtcclxuICAgICAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnNkZk11bHRpcGxpZXIgPSBBd2Vzb21lVGV4dC5zY2FsZTtcclxuICAgICAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnN1YnBpeGVsX2Ftb3VudCA9IHNvdXJjZS5jb25maWcuYW50aWFsaWFzaW5nICogMTtcclxuICAgICAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmZvbnRfY29sb3IgPSBQSVhJLnV0aWxzLmhleDJyZ2Ioc291cmNlLnN0eWxlLmZpbGwucmVwbGFjZShcIiNcIiwgXCIweFwiKSk7XHJcbiAgICAgICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5iZ19jb2xvciA9IFBJWEkudXRpbHMuaGV4MnJnYihzb3VyY2UuYmFja2dyb3VuZENvbG9yLnJlcGxhY2UoXCIjXCIsIFwiMHhcIikpOyovXHJcblxyXG4gICAgICAgIGNvbnN0IHVuaWZvcm1zID0ge1xyXG4gICAgICAgICAgICB1U2FtcGxlcjogdGhpcy5fdGV4dHVyZSxcclxuICAgICAgICAgICAgaGludF9hbW91bnQ6IHRoaXMuY29uZmlnLmFudGlhbGlhc2luZyAqIDEsXHJcbiAgICAgICAgICAgIHNkZk11bHRpcGxpZXI6IFRleHQuc2NhbGUsXHJcbiAgICAgICAgICAgIHN1YnBpeGVsX2Ftb3VudDogdGhpcy5jb25maWcuYW50aWFsaWFzaW5nICogMSxcclxuICAgICAgICAgICAgZm9udF9jb2xvcjogUElYSS51dGlscy5oZXgycmdiKHRoaXMuc3R5bGUuZmlsbC5yZXBsYWNlKFwiI1wiLCBcIjB4XCIpKSxcclxuICAgICAgICAgICAgYmdfY29sb3I6IFBJWEkudXRpbHMuaGV4MnJnYih0aGlzLmJhY2tncm91bmRDb2xvci5yZXBsYWNlKFwiI1wiLCBcIjB4XCIpKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuc2hhZGVyID0gUElYSS5TaGFkZXIuZnJvbSh2ZXJ0ZXhTaGFkZXIsIGZyYWdtZW50U2hhZGVyLCB1bmlmb3Jtcyk7XHJcbiAgICAgICAgdGhpcy50cmlhbmdsZSA9IG5ldyBQSVhJLk1lc2godGhpcy5nZW9tZXRyeSwgdGhpcy5zaGFkZXIpO1xyXG5cclxuICAgICAgICB0aGlzLnRyaWFuZ2xlLmF3ZXNvbWVUZXh0ID0gdGhpcztcclxuXHJcbiAgICAgICAgcmV0dXJuIHRoaXMudHJpYW5nbGU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRleHR1cmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHR1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZvbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvbnRcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGV4dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdGV4dCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcclxuICAgICAgICAvL3RoaXMudXBkYXRlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgd3JpdGVTdHJpbmcoIHN0cmluZywgZm9udCwgZm9udF9tZXRyaWNzLCBwb3MpIHtcclxuICAgICAgICBsZXQgcHJldl9jaGFyID0gXCIgXCI7ICAvLyBVc2VkIHRvIGNhbGN1bGF0ZSBrZXJuaW5nXHJcbiAgICAgICAgbGV0IGNwb3MgICAgICA9IHBvczsgIC8vIEN1cnJlbnQgcGVuIHBvc2l0aW9uXHJcbiAgICAgICAgbGV0IHhfbWF4ICAgICA9IDAuMDsgIC8vIE1heCB3aWR0aCAtIHVzZWQgZm9yIGJvdW5kaW5nIGJveFxyXG4gICAgICAgIGxldCBzY2FsZSAgICAgPSBmb250X21ldHJpY3MuY2FwU2NhbGU7XHJcblxyXG4gICAgICAgIGxldCBzdHJfcG9zID0gMDtcclxuXHJcbiAgICAgICAgZm9yKDs7KSB7XHJcbiAgICAgICAgICAgIGlmICggc3RyX3BvcyA9PT0gc3RyaW5nLmxlbmd0aCApIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgdmFyIHNjaGFyID0gc3RyaW5nWyBzdHJfcG9zIF07XHJcbiAgICAgICAgICAgIHN0cl9wb3MrKztcclxuXHJcbiAgICAgICAgICAgIGlmICggc2NoYXIgPT09IFwiXFxuXCIgKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIGNwb3NbMF0gPiB4X21heCApIHhfbWF4ID0gY3Bvc1swXTsgLy8gRXhwYW5kaW5nIHRoZSBib3VuZGluZyByZWN0XHJcbiAgICAgICAgICAgICAgICBjcG9zWzBdICA9IHBvc1swXTtcclxuICAgICAgICAgICAgICAgIGNwb3NbMV0gLT0gZm9udF9tZXRyaWNzLmxpbmVIZWlnaHQ7XHJcbiAgICAgICAgICAgICAgICBwcmV2X2NoYXIgPSBcIiBcIjtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNjaGFyID09PSBcIiBcIiApIHtcclxuICAgICAgICAgICAgICAgIC8vc2NoYXIgPSBcIl9cIlxyXG4gICAgICAgICAgICAgICAgLy9jcG9zWzBdICs9IGZvbnQuc3BhY2VfYWR2YW5jZSAqIHNjYWxlO1xyXG4gICAgICAgICAgICAgICAgLy9wcmV2X2NoYXIgPSBcIiBcIjtcclxuICAgICAgICAgICAgICAgIC8vY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBmb250X2NoYXIgPSBmb250LmNoYXJzWyBzY2hhciBdO1xyXG4gICAgICAgICAgICBpZiAoICFmb250X2NoYXIgKSB7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1YnN0aXR1dGluZyB1bmF2YWlsYWJsZSBjaGFyYWN0ZXJzIHdpdGggJz8nXHJcbiAgICAgICAgICAgICAgICBzY2hhciA9IFwiP1wiO1xyXG4gICAgICAgICAgICAgICAgZm9udF9jaGFyID0gZm9udC5jaGFyc1sgXCI/XCIgXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIGtlcm4gPSBmb250Lmtlcm5bIHByZXZfY2hhciArIHNjaGFyIF07XHJcbiAgICAgICAgICAgIGlmICggIWtlcm4gKSBrZXJuID0gMC4wO1xyXG5cclxuICAgICAgICAgICAgLy8gY2FsY3VsYXRpbmcgdGhlIGdseXBoIHJlY3RhbmdsZSBhbmQgY29weWluZyBpdCB0byB0aGUgdmVydGV4IGFycmF5XHJcbiAgICAgICAgICAgIHZhciByZWN0ID0gdGhpcy5jaGFyUmVjdCggY3BvcywgZm9udCwgZm9udF9tZXRyaWNzLCBmb250X2NoYXIsIGtlcm4gKTtcclxuXHJcbiAgICAgICAgICAgIHJlY3QucG9zaXRpb25zLm1hcCgocG9zKSA9PiB0aGlzLnZlcnRpY2VzWyB0aGlzLmFycmF5UG9zaXRpb25zLnZlcnRleCsrIF0gPSBwb3MgKTtcclxuICAgICAgICAgICAgcmVjdC51dnMubWFwKCh1dikgPT4gdGhpcy51dnNbIHRoaXMuYXJyYXlQb3NpdGlvbnMudXZzKysgXSA9IHV2ICk7XHJcbiAgICAgICAgICAgIHJlY3Quc2RmU2l6ZXMubWFwKChzZGYpID0+IHRoaXMuc2RmU2l6ZXNbIHRoaXMuYXJyYXlQb3NpdGlvbnMuc2RmKysgXSA9IHNkZiApO1xyXG5cclxuICAgICAgICAgICAgcHJldl9jaGFyID0gc2NoYXI7XHJcbiAgICAgICAgICAgIGNwb3MgPSByZWN0LnBvcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHJlY3QgOiBbIHBvc1swXSwgcG9zWzFdLCB4X21heCAtIHBvc1swXSwgcG9zWzFdIC0gY3Bvc1sxXSArIGZvbnRfbWV0cmljcy5saW5lSGVpZ2h0IF0sXHJcbiAgICAgICAgICAgIHN0cmluZ19wb3MgOiBzdHJfcG9zLFxyXG4gICAgICAgICAgICAvL2FycmF5X3BvcyA6IGFycmF5X3Bvc1xyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG4gICAgZm9udE1ldHJpY3MoZm9udFNpemUsIG1vcmVMaW5lR2FwID0gMC4yKSB7XHJcblxyXG4gICAgICAgIGNvbnN0IHtjYXBfaGVpZ2h0LCB4X2hlaWdodCwgYXNjZW50OiBmb250QXNjZW50ICwgZGVzY2VudCwgbGluZV9nYXB9ID0gdGhpcy5mb250O1xyXG5cclxuICAgICAgICBjb25zdCBjYXBTY2FsZSA9IHRoaXMuc3R5bGUuZm9udFNpemUgLyBjYXBfaGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGxvd1NjYWxlID0gTWF0aC5yb3VuZCggeF9oZWlnaHQgKiBjYXBTY2FsZSApIC8geF9oZWlnaHQ7XHJcbiAgICAgICAgY29uc3QgYXNjZW50ID0gTWF0aC5yb3VuZCggZm9udEFzY2VudCAqIGNhcFNjYWxlICk7XHJcbiAgICAgICAgbGV0IGxpbmVIZWlnaHQgPSBNYXRoLnJvdW5kKCBjYXBTY2FsZSAqICggZm9udEFzY2VudCArIGRlc2NlbnQgKyBsaW5lX2dhcCApICsgbW9yZUxpbmVHYXApO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5zdHlsZS5saW5lSGVpZ2h0ID4gMClcclxuICAgICAgICAgICAgbGluZUhlaWdodCA9IHRoaXMuc3R5bGUubGluZUhlaWdodDtcclxuICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHRoaXMuc3R5bGUubGluZUhlaWdodCA9IGxpbmVIZWlnaHQ7XHJcblxyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIGNhcFNjYWxlICAgOiBjYXBTY2FsZSxcclxuICAgICAgICAgICAgbG93U2NhbGUgICA6IGxvd1NjYWxlLFxyXG4gICAgICAgICAgICBhc2NlbnQgICAgICA6IGFzY2VudCxcclxuICAgICAgICAgICAgbGluZUhlaWdodCA6IGxpbmVIZWlnaHRcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNoYXJSZWN0KCBwb3MsIGZvbnQsIGZvbnRfbWV0cmljcywgZm9udF9jaGFyLCBrZXJuID0gMC4wICkge1xyXG5cclxuICAgICAgICAvLyBMb3cgY2FzZSBjaGFyYWN0ZXJzIGhhdmUgZmlyc3QgYml0IHNldCBpbiAnZmxhZ3MnXHJcbiAgICAgICAgdmFyIGxvd2Nhc2UgPSAoIGZvbnRfY2hhci5mbGFncyAmIDEgKSA9PT0gMTtcclxuXHJcbiAgICAgICAgLy8gUGVuIHBvc2l0aW9uIGlzIGF0IHRoZSB0b3Agb2YgdGhlIGxpbmUsIFkgZ29lcyB1cFxyXG4gICAgICAgIHZhciBiYXNlbGluZSA9IHBvc1sxXSAtIGZvbnRfbWV0cmljcy5hc2NlbnQ7XHJcblxyXG4gICAgICAgIC8vIExvdyBjYXNlIGNoYXJzIHVzZSB0aGVpciBvd24gc2NhbGVcclxuICAgICAgICB2YXIgc2NhbGUgPSBsb3djYXNlID8gZm9udF9tZXRyaWNzLmxvd1NjYWxlIDogZm9udF9tZXRyaWNzLmNhcFNjYWxlO1xyXG5cclxuICAgICAgICAvLyBMYXlpbmcgb3V0IHRoZSBnbHlwaCByZWN0YW5nbGVcclxuICAgICAgICB2YXIgZyAgICAgID0gZm9udF9jaGFyLnJlY3Q7XHJcbiAgICAgICAgdmFyIGJvdHRvbSA9IGJhc2VsaW5lIC0gc2NhbGUgKiAoIGZvbnQuZGVzY2VudCArIGZvbnQuaXkgKTtcclxuICAgICAgICB2YXIgdG9wICAgID0gYm90dG9tICAgKyBzY2FsZSAqICggZm9udC5yb3dfaGVpZ2h0ICk7XHJcbiAgICAgICAgdmFyIGxlZnQgICA9IHBvc1swXSAgICsgc2NhbGUgKiAoIGZvbnRfY2hhci5iZWFyaW5nX3ggKyBrZXJuIC0gZm9udC5peCApO1xyXG4gICAgICAgIHZhciByaWdodCAgPSBsZWZ0ICAgICArIHNjYWxlICogKCBnWzJdIC0gZ1swXSApO1xyXG4gICAgICAgIHZhciBwID0gWyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20gXTtcclxuXHJcbiAgICAgICAgLy8gQWR2YW5jaW5nIHBlbiBwb3NpdGlvblxyXG4gICAgICAgIHZhciBuZXdfcG9zX3ggPSBwb3NbMF0gKyBzY2FsZSAqICggZm9udF9jaGFyLmFkdmFuY2VfeCApO1xyXG5cclxuICAgICAgICAvLyBTaWduZWQgZGlzdGFuY2UgZmllbGQgc2l6ZSBpbiBzY3JlZW4gcGl4ZWxzXHJcbiAgICAgICAgdmFyIHNkZl9zaXplICA9IDIuMCAqIGZvbnQuaXkgKiBzY2FsZTtcclxuXHJcbiAgICAgICAgY29uc3QgcG9zaXRpb25zID0gW1xyXG4gICAgICAgICAgICBwWzBdLCBwWzNdLCAvLyBsZWZ0IGJvdHRvbSxcclxuICAgICAgICAgICAgcFsyXSwgcFszXSwgLy8gcmlnaHQgYm90dG9tLFxyXG4gICAgICAgICAgICBwWzJdLCBwWzFdLCAvLyByaWdodCB0b3BcclxuICAgICAgICAgICAgcFswXSwgcFsxXSwgLy8gbGVmdCB0b3BcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBjb25zdCB1dnMgPSBbXHJcbiAgICAgICAgICAgIGdbMF0sIGdbMV0sIC8vIGxlZnQgdG9wXHJcbiAgICAgICAgICAgIGdbMl0sIGdbMV0sIC8vIHJpZ2h0IHRvcFxyXG4gICAgICAgICAgICBnWzJdLCBnWzNdLCAvLyByaWdodCBib3R0b20sXHJcbiAgICAgICAgICAgIGdbMF0sIGdbM10sIC8vIGxlZnQgYm90dG9tLFxyXG4gICAgICAgIF07XHJcblxyXG4gICAgICAgIGNvbnN0IHNkZlNpemVzID0gW1xyXG4gICAgICAgICAgICBzZGZfc2l6ZSxcclxuICAgICAgICAgICAgc2RmX3NpemUsXHJcbiAgICAgICAgICAgIHNkZl9zaXplLFxyXG4gICAgICAgICAgICBzZGZfc2l6ZSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBwb3NpdGlvbnMsXHJcbiAgICAgICAgICAgIHV2cyxcclxuICAgICAgICAgICAgc2RmU2l6ZXMsXHJcbiAgICAgICAgICAgIHBvczogWyBuZXdfcG9zX3gsIHBvc1sxXSBdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy9yZXR1cm4geyB2ZXJ0aWNlcyA6IHZlcnRpY2VzLCBwb3MgOiBbIG5ld19wb3NfeCwgcG9zWzFdIF0gfTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRleHQ7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9uZXcuanMiXSwic291cmNlUm9vdCI6IiJ9