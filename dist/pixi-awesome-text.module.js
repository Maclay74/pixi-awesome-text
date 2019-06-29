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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAyNDgyYWE0OTJiODM5MGViN2Q2YyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2R0eXBlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYW4tYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvdmVydC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvZnJhZy5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3NlbGVjdC92ZXJ0Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvc2VsZWN0L2ZyYWcuZ2xzbCJdLCJuYW1lcyI6WyJPYmplY3QiLCJhc3NpZ24iLCJQSVhJIiwiZXh0cmFzIiwiQXdlc29tZVRleHQiLCJUZXh0IiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJzZWxlY3RWZXJ0ZXh0U2hhZGVyIiwic2VsZWN0RnJhZ21lbnRTaGFkZXIiLCJnbENvcmUiLCJBd2Vzb21lVGV4dFJlbmRlcmVyIiwicmVuZGVyZXIiLCJ0ZXh0U2hhZGVyIiwic2VsZWN0U2hhZGVyIiwiZ2wiLCJnZXRFeHRlbnNpb24iLCJTaGFkZXIiLCJzb3VyY2UiLCJnbERhdGEiLCJfZ2xEYXRhcyIsImNvbnRleHRUZXh0IiwiYmluZFZhbyIsImJ1aWxkVGV4dEdsRGF0YSIsInZhbyIsImRpcnR5IiwidXZCdWZmZXIiLCJ1cGxvYWQiLCJ1dnMiLCJpbmRleERpcnR5IiwiaW5kZXhCdWZmZXIiLCJpbmRpY2VzIiwidmVydGV4QnVmZmVyIiwidmVydGljZXMiLCJiaW5kU2hhZGVyIiwic2hhZGVyIiwic3RhdGUiLCJzZXRCbGVuZE1vZGUiLCJibGVuZE1vZGUiLCJ1bmlmb3JtcyIsInVTYW1wbGVyIiwiYmluZFRleHR1cmUiLCJ0ZXh0dXJlIiwidHJhbnNsYXRpb25NYXRyaXgiLCJ3b3JsZFRyYW5zZm9ybSIsInRvQXJyYXkiLCJoaW50X2Ftb3VudCIsImNvbmZpZyIsImFudGlhbGlhc2luZyIsInNkZk11bHRpcGxpZXIiLCJzY2FsZSIsInN1YnBpeGVsX2Ftb3VudCIsImZvbnRfY29sb3IiLCJ1dGlscyIsImhleDJyZ2IiLCJzdHlsZSIsImZpbGwiLCJyZXBsYWNlIiwiYmdfY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkcmF3TW9kZSIsIlRSSUFOR0xFUyIsImRyYXciLCJsZW5ndGgiLCJjb250ZXh0U2VsZWN0Iiwic2VsZWN0IiwiYnVpbGRTZWxlY3RHbERhdGEiLCJzZWxlY3RDb2xvciIsInN0eWxlSUQiLCJ1cGRhdGUiLCJzdGF0ZXMiLCJlZGl0YWJsZSIsInNlbGVjdGluZyIsInJlbmRlclNlbGVjdCIsInJlbmRlclRleHQiLCJHTEJ1ZmZlciIsImNyZWF0ZVZlcnRleEJ1ZmZlciIsIlNUUkVBTV9EUkFXIiwic2RmQnVmZmVyIiwic2RmU2l6ZXMiLCJTVEFUSUNfRFJBVyIsImNyZWF0ZUluZGV4QnVmZmVyIiwiVmVydGV4QXJyYXlPYmplY3QiLCJhZGRJbmRleCIsImFkZEF0dHJpYnV0ZSIsImF0dHJpYnV0ZXMiLCJhVmVydGV4UG9zaXRpb24iLCJGTE9BVCIsImFUZXh0dXJlQ29vcmQiLCJhU2RmU2l6ZSIsIk9iamVjdFJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsInJlZ2lzdGVyUGx1Z2luIiwiY3JlYXRlSW5kaWNlcyIsInRleHQiLCJyZWd1bGFyIiwidXBwZXJjYXNlIiwibG93ZXJjYXNlIiwiVGV4dFN0eWxlIiwiX3RleHQiLCJfZm9udCIsImZvbnQiLCJfdGV4dHVyZSIsImxheW91dCIsIlRleHRMYXlvdXQiLCJmb250U2l6ZSIsIndyYXBXb3JkcyIsImJyZWFrV29yZHMiLCJ3cmFwcGVyV2lkdGgiLCJ3b3JkV3JhcFdpZHRoIiwiYWxpZ24iLCJsaW5lSGVpZ2h0IiwiaW50ZXJhY3RpdmUiLCJidXR0b25Nb2RlIiwiU2VsZWN0IiwiaW5wdXQiLCJJbnB1dCIsInNldFN0YXRlIiwibWV0cmljcyIsImZvbnRNZXRyaWNzIiwiRmxvYXQzMkFycmF5IiwibGV0dGVyc0NvdW50IiwiYXJyYXlQb3NpdGlvbnMiLCJ2ZXJ0ZXgiLCJzZGYiLCJ3b3Jkc01ldHJpY3MiLCJmb3JFYWNoIiwid29yZCIsIndyaXRlU3RyaW5nIiwieCIsInkiLCJjbG9ja3dpc2UiLCJ0eXBlIiwiY291bnQiLCJuZXdTdGF0ZSIsInZhbHVlcyIsInNldFJlZ3VsYXJTdGF0ZSIsInNldEVkaXRhYmxlU3RhdGUiLCJjdXJyZW50RWRpdGluZ0VsZW1lbnQiLCJvZmYiLCJlbmFibGVkIiwib24iLCJlIiwiY2xpY2tzQ291bnQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsInNldFJhbmdlIiwiaW5wdXRFbGVtZW50IiwiZm9jdXMiLCJvbk1vdXNlRG93biIsInNob3ciLCJkYXRhIiwib3JpZ2luYWxFdmVudCIsIm1vdmVtZW50WCIsIm1vdmVtZW50WSIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwiaW5kZXgiLCJzdHJpbmciLCJzdWJzdHIiLCJuZXdUZXh0Iiwic3BsaXQiLCJzcGxpY2UiLCJqb2luIiwiZm9udF9tZXRyaWNzIiwicG9zIiwicHJldl9jaGFyIiwiY3BvcyIsInhfbWF4IiwiY2FwU2NhbGUiLCJzdHJfcG9zIiwic2NoYXIiLCJmb250X2NoYXIiLCJjaGFycyIsImtlcm4iLCJyZWN0IiwiY2hhclJlY3QiLCJwb3NpdGlvbnMiLCJtYXAiLCJ1diIsInN0cmluZ19wb3MiLCJtb3JlTGluZUdhcCIsImNhcF9oZWlnaHQiLCJ4X2hlaWdodCIsImZvbnRBc2NlbnQiLCJhc2NlbnQiLCJkZXNjZW50IiwibGluZV9nYXAiLCJsb3dTY2FsZSIsIk1hdGgiLCJyb3VuZCIsImxvd2Nhc2UiLCJmbGFncyIsImJhc2VsaW5lIiwiZyIsImJvdHRvbSIsIml5IiwidG9wIiwicm93X2hlaWdodCIsImxlZnQiLCJiZWFyaW5nX3giLCJpeCIsInJpZ2h0IiwicCIsIm5ld19wb3NfeCIsImFkdmFuY2VfeCIsInNkZl9zaXplIiwidmFsdWUiLCJtZXNoIiwiTWVzaCIsIm93bmVyIiwic3RhcnRZIiwiY2FsY3VsYXRlV29yZHNQb3NpdGlvbnMiLCJnbHlwaHMiLCJnZXRHbHlwaHMiLCJ3aWR0aCIsImhlaWdodCIsImNoYXIiLCJ3b3JkcyIsImkiLCJzdGFydFgiLCJ3b3JkU2l6ZSIsImdldFN0cmluZ1NpemUiLCJwdXNoIiwibGluZXNDb3VudCIsIndvcmRzT25MaW5lIiwiZmlsdGVyIiwibGFzdFdvcmQiLCJmcmVlU3BhY2UiLCJsZWZ0T2Zmc2V0IiwibGV0dGVyIiwicG9zaXRpb24iLCJyYW5nZSIsImJ1aWxkVmVydGljZXMiLCJzdGFydCIsImVuZCIsIm1pbiIsImFwcGx5IiwibWF4IiwibGV0dGVyQ291bnQiLCJmaXJzdExldHRlciIsImxhc3RMZXR0ZXIiLCJzdGFydExpbmVMZXR0ZXIiLCJlbmRMaW5lTGV0dGVyIiwib2Zmc2V0Iiwic2VsZWN0aW5nTGluZSIsImZsb29yIiwic2VsZWN0aW5nTGluZVkiLCJsYXN0R2x5cGhPbkxpbmUiLCJmaXJzdEdseXBoT25MaW5lIiwiZ2x5cGgiLCJldmVudCIsImJ1dHRvbiIsImdsb2JhbCIsInRyYW5zZm9ybVBvc2l0aW9uIiwiY2xvc2VzdExldHRlciIsImdldENsb3Nlc3RHbHlwaCIsImluZGV4T2YiLCJnbHlwaEluZGV4Iiwib3duZXJQb3NpdGlvbiIsImdldEdsb2JhbFBvc2l0aW9uIiwidHJhbnNmb3JtIiwidHgiLCJ0eSIsImEiLCJkIiwicmVtb3ZlSW5kZXgiLCJyZW1vdmVMZW5ndGgiLCJhYnMiLCJyZW1vdmVTdHJpbmciLCJkaXJlY3Rpb24iLCJfZ2x5cGhJbmRleCIsIl9lbmFibGVkIiwiZW5hYmxlIiwiZGlzYWJsZSIsImNhbnZhcyIsImRvY3VtZW50IiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJjcmVhdGVGaWVsZCIsImRpc3BsYXkiLCJib2R5IiwiYXBwZW5kIiwiY29udGFpbnMiLCJyZW1vdmVDaGlsZCIsIm9wYWNpdHkiLCJjcmVhdGVFbGVtZW50Iiwic2xpY2UiLCJjb2xvciIsImJvcmRlciIsImNvbnRhaW4iLCJ6SW5kZXgiLCJwb2ludGVyRXZlbnRzIiwib3V0bGluZSIsInRyYW5zZm9ybU9yaWdpbiIsInBhZGRpbmciLCJhZGRFdmVudCIsIm9uSW5wdXQiLCJvbktleWRvd24iLCJwYXN0ZUZyb21DbGlwYm9hcmQiLCJnbHlwaE1ldHJpY3MiLCJsYXN0R2x5cGgiLCJzZWxlY3RlZEdseXBoIiwic2V0UG9zaXRpb24iLCJjbGVhclNlbGVjdGVkUmFuZ2UiLCJ0YXJnZXQiLCJ0ZXh0VG9BZGQiLCJ0b1VwcGVyQ2FzZSIsInRvTG93ZXJDYXNlIiwiaW5zZXJ0U3RyaW5nIiwia2V5IiwibW92ZVVwIiwibW92ZURvd24iLCJjdHJsS2V5IiwibW92ZUJ5V29yZExlZnQiLCJzaGlmdEtleSIsIm1vdmVXaXRoU2VsZWN0TGVmdCIsIm1vdmVCeVdvcmRSaWdodCIsIm1vdmVXaXRoU2VsZWN0UmlnaHQiLCJjb3B5VG9DbGlwYm9hcmQiLCJzY2FsZVgiLCJzY2FsZVkiLCJsb2NhbFgiLCJsb2NhbFkiLCJnZXRUcmFuc2Zvcm0iLCJvd25lclRyYW5zZm9ybSIsImNhbnZhc1JlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjYWxsYmFjayIsImFkZEV2ZW50TGlzdGVuZXIiLCJjdXQiLCJleGVjQ29tbWFuZCIsInByZXZlbnREZWZhdWx0IiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiLCJleHBhbmQi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Z0UsNEJBQTRCLGdDQUFnQywwQkFBMEIsMEJBQTBCLHNCQUFzQix3QkFBd0IsMEJBQTBCLHc4QkFBdzhCLDhCQUE4Qiw0RUFBNEUsZ0NBQWdDLGlDQUFpQyw0Q0FBNEMsa0VBQWtFLGlCQUFpQixHQUFHLGtCQUFrQiw4Q0FBOEMsR0FBRyxxQkFBcUIsK0ZBQStGLDhFQUE4RSw4RUFBOEUsNElBQTRJLDREQUE0RCxrREFBa0Qsa0NBQWtDLCtFQUErRSxrRkFBa0YsMklBQTJJLGdFQUFnRSxvRkFBb0Ysc0dBQXNHLGdVQUFnVSxnRkFBZ0YsdUlBQXVJLHNDQUFzQyxHQUFHLE87Ozs7OztBQ0Fsc0cscUVBQW9FLG1DQUFtQyxnQ0FBZ0MscUJBQXFCLDhHQUE4RyxLQUFLLEc7Ozs7OztBQ0EvUSw0REFBMkQsb0JBQW9CLGlCQUFpQix5Q0FBeUMsNkNBQTZDLEdBQUcsTyIsImZpbGUiOiJwaXhpLWF3ZXNvbWUtdGV4dC5tb2R1bGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJBd2Vzb21lVGV4dFwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJBd2Vzb21lVGV4dFwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuIFxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyB3ZWJwYWNrL2Jvb3RzdHJhcCAyNDgyYWE0OTJiODM5MGViN2Q2YyIsImltcG9ydCBSZW5kZXJlciBmcm9tIFwiLi9yZW5kZXJlclwiO1xuaW1wb3J0IFRleHQgZnJvbSBcIi4vdGV4dFwiO1xuaW1wb3J0IExheW91dCBmcm9tIFwiLi9sYXlvdXRcIjtcblxuT2JqZWN0LmFzc2lnbihQSVhJLmV4dHJhcywge1xuICBBd2Vzb21lVGV4dDogVGV4dFxufSk7XG5cbmlmICh0eXBlb2YgUElYSSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgaWYgKFBJWEkuZXh0cmFzKSB7XG4gICAgUElYSS5leHRyYXMuQXdlc29tZVRleHQgPSBUZXh0O1xuICB9IGVsc2Uge1xuICAgIFBJWEkuZXh0cmFzID0geyBBd2Vzb21lVGV4dDogVGV4dH07XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgVGV4dCxcbiAgUmVuZGVyZXIsXG4gIExheW91dFxufVxuXG4vKlxuXG5peCAgICAgICAgICAgID0gc2RmX3NpemUgLyB0ZXhfd2lkdGhcbml5ICAgICAgICAgICAgPSBzZGZfc2l6ZSAvIHRleF9oZWlnaHRcbnJvd19oZWlnaHQgICAgPSAocm93X2hlaWdodCArIDIgKiBzZGZfc2l6ZSkgLyB0ZXhfaGVpZ2h0O1xuYXNwZWN0ICAgICAgICA9IHRleF93aWR0aCAvIHRleF9oZWlnaHQ7XG5hc2NlbnQgICAgICAgID0gZm9udC0+YXNjZW50ICogc2NhbGVZXG5kZXNjZW50ICAgICAgID0gZmFic2YoZm9udC0+ZGVzY2VudCAqIHNjYWxlWSlcbmxpbmVfZ2FwICAgICAgPSBmb250LT5saW5lX2dhcCAqIHNjYWxlIFlcbmNhcF9oZWlnaHQgICAgPSBneGNhcC5tYXgueSAqIHNjYWxlWVxueF9oZWlnaHQgICAgICA9IGd4Lm1heC55ICogc2NhbGVZXG5zcGFjZV9hZHZhbmNlID0gZ3NwYWNlLmFkdmFuY2Vfd2lkdGggKiBzY2FsZVhcblxuXG5zY2FsZXkgPSByb3dfaGVpZ2h0IC8gdGV4X2hlaWdodCAvICggZm9udC0+Z2x5cGhfbWF4LnkgLSBmb250LT5nbHlwaF9taW4ueSApO1xuc2NhbGV4ID0gcm93X2hlaWdodCAvIHRleF93aWR0aCAvICggZm9udC0+Z2x5cGhfbWF4LnkgLSBmb250LT5nbHlwaF9taW4ueSApO1xuZ3NwYWNlID0gZm9udC0+Z2x5cGhzWyBmb250LT5nbHlwaF9pZHgoICcgJyApIF07XG5neCAgICAgPSBmb250LT5nbHlwaHNbIGZvbnQtPmdseXBoX2lkeCggJ3gnICkgXVxuZ3hjYXAgID0gZm9udC0+Z2x5cGhzWyBmb250LT5nbHlwaF9pZHgoICdYJyApIF1cblxuXG5zZGZfc2l6ZSA9IDEwXG5cbiovXG5cblxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiaW1wb3J0IEF3ZXNvbWVUZXh0IGZyb20gXCIuL3RleHRcIjtcblxuY29uc3QgdmVydGV4U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy90ZXh0L3ZlcnQuZ2xzbFwiKTtcbmNvbnN0IGZyYWdtZW50U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy90ZXh0L2ZyYWcuZ2xzbFwiKTtcblxuY29uc3Qgc2VsZWN0VmVydGV4dFNoYWRlciA9IHJlcXVpcmUoXCIuL3NoYWRlcnMvc2VsZWN0L3ZlcnQuZ2xzbFwiKTtcbmNvbnN0IHNlbGVjdEZyYWdtZW50U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy9zZWxlY3QvZnJhZy5nbHNsXCIpO1xuXG5jb25zdCBnbENvcmUgPSBQSVhJLmdsQ29yZTtcblxuY2xhc3MgQXdlc29tZVRleHRSZW5kZXJlciBleHRlbmRzIFBJWEkuT2JqZWN0UmVuZGVyZXIge1xuXG4gIHN0YXRpYyBjb250ZXh0VGV4dCA9IDA7XG4gIHN0YXRpYyBjb250ZXh0U2VsZWN0ID0gMTtcblxuICBzZWxlY3RDb2xvciA9IDB4RkZCM0MzO1xuXG5cbiAgY29uc3RydWN0b3IocmVuZGVyZXIpIHtcbiAgICBzdXBlcihyZW5kZXJlcik7XG4gICAgdGhpcy50ZXh0U2hhZGVyID0gbnVsbDtcbiAgICB0aGlzLnNlbGVjdFNoYWRlciA9IG51bGw7XG5cbiAgfVxuXG4gIG9uQ29udGV4dENoYW5nZSgpIHtcbiAgICBjb25zdCBnbCA9IHRoaXMucmVuZGVyZXIuZ2w7XG4gICAgZ2wuZ2V0RXh0ZW5zaW9uKFwiT0VTX3N0YW5kYXJkX2Rlcml2YXRpdmVzXCIpO1xuICAgIHRoaXMudGV4dFNoYWRlciA9IG5ldyBQSVhJLlNoYWRlcihnbCwgdmVydGV4U2hhZGVyLCBmcmFnbWVudFNoYWRlcik7XG4gICAgdGhpcy5zZWxlY3RTaGFkZXIgPSBuZXcgUElYSS5TaGFkZXIoZ2wsIHNlbGVjdFZlcnRleHRTaGFkZXIsIHNlbGVjdEZyYWdtZW50U2hhZGVyKTtcbiAgfVxuXG4gIHJlbmRlclRleHQoc291cmNlKSB7XG5cbiAgICBsZXQgZ2xEYXRhID0gc291cmNlLl9nbERhdGFzW0F3ZXNvbWVUZXh0UmVuZGVyZXIuY29udGV4dFRleHRdO1xuXG4gICAgaWYgKCFnbERhdGEpIHtcbiAgICAgIHRoaXMucmVuZGVyZXIuYmluZFZhbyhudWxsKTtcbiAgICAgIGdsRGF0YSA9IHRoaXMuYnVpbGRUZXh0R2xEYXRhKHNvdXJjZSwgdGhpcy5yZW5kZXJlci5nbCk7XG4gICAgICBzb3VyY2UuX2dsRGF0YXNbQXdlc29tZVRleHRSZW5kZXJlci5jb250ZXh0VGV4dF0gPSBnbERhdGE7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlci5iaW5kVmFvKGdsRGF0YS52YW8pO1xuXG4gICAgaWYgKHNvdXJjZS5kaXJ0eSkge1xuICAgICAgc291cmNlLmRpcnR5ID0gZmFsc2U7XG4gICAgICBnbERhdGEudXZCdWZmZXIudXBsb2FkKHNvdXJjZS51dnMpO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2UuaW5kZXhEaXJ0eSkge1xuICAgICAgc291cmNlLmluZGV4RGlydHkgPSBmYWxzZTtcbiAgICAgIGdsRGF0YS5pbmRleEJ1ZmZlci51cGxvYWQoc291cmNlLmluZGljZXMpO1xuICAgIH1cblxuICAgIGdsRGF0YS52ZXJ0ZXhCdWZmZXIudXBsb2FkKHNvdXJjZS52ZXJ0aWNlcyk7XG4gICAgdGhpcy5yZW5kZXJlci5iaW5kU2hhZGVyKGdsRGF0YS5zaGFkZXIpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zdGF0ZS5zZXRCbGVuZE1vZGUoc291cmNlLmJsZW5kTW9kZSk7XG5cbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnVTYW1wbGVyID0gdGhpcy5yZW5kZXJlci5iaW5kVGV4dHVyZShzb3VyY2UudGV4dHVyZSk7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy50cmFuc2xhdGlvbk1hdHJpeCA9IHNvdXJjZS53b3JsZFRyYW5zZm9ybS50b0FycmF5KHRydWUpO1xuXG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5oaW50X2Ftb3VudCA9IHNvdXJjZS5jb25maWcuYW50aWFsaWFzaW5nICogMTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnNkZk11bHRpcGxpZXIgPSBBd2Vzb21lVGV4dC5zY2FsZTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLnN1YnBpeGVsX2Ftb3VudCA9IHNvdXJjZS5jb25maWcuYW50aWFsaWFzaW5nICogMTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmZvbnRfY29sb3IgPSBQSVhJLnV0aWxzLmhleDJyZ2Ioc291cmNlLnN0eWxlLmZpbGwucmVwbGFjZShcIiNcIiwgXCIweFwiKSk7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5iZ19jb2xvciA9IFBJWEkudXRpbHMuaGV4MnJnYihzb3VyY2UuYmFja2dyb3VuZENvbG9yLnJlcGxhY2UoXCIjXCIsIFwiMHhcIikpO1xuXG4gICAgY29uc3QgZHJhd01vZGUgPSBzb3VyY2UuZHJhd01vZGUgPSB0aGlzLnJlbmRlcmVyLmdsLlRSSUFOR0xFUztcbiAgICBnbERhdGEudmFvLmRyYXcoZHJhd01vZGUsIHNvdXJjZS5pbmRpY2VzLmxlbmd0aCwgMCk7XG5cbiAgfVxuXG4gIHJlbmRlclNlbGVjdChzb3VyY2UpIHtcbiAgICBsZXQgZ2xEYXRhID0gc291cmNlLl9nbERhdGFzW0F3ZXNvbWVUZXh0UmVuZGVyZXIuY29udGV4dFNlbGVjdF07XG5cbiAgICBpZiAoIWdsRGF0YSB8fCBzb3VyY2Uuc2VsZWN0LmRpcnR5KSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmJpbmRWYW8obnVsbCk7XG4gICAgICBnbERhdGEgPSB0aGlzLmJ1aWxkU2VsZWN0R2xEYXRhKHNvdXJjZSwgdGhpcy5yZW5kZXJlci5nbCk7XG4gICAgICBzb3VyY2UuX2dsRGF0YXNbQXdlc29tZVRleHRSZW5kZXJlci5jb250ZXh0U2VsZWN0XSA9IGdsRGF0YTtcbiAgICAgIHNvdXJjZS5zZWxlY3QuZGlydHkgPSBmYWxzZTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbmRlcmVyLmJpbmRWYW8oZ2xEYXRhLnZhbyk7XG5cbiAgICBpZiAoc291cmNlLnNlbGVjdC5pbmRleERpcnR5KSB7XG4gICAgICBzb3VyY2Uuc2VsZWN0LmluZGV4RGlydHkgPSBmYWxzZTtcbiAgICAgIGdsRGF0YS5pbmRleEJ1ZmZlci51cGxvYWQoc291cmNlLnNlbGVjdC5pbmRpY2VzKTtcbiAgICB9XG5cbiAgICBnbERhdGEudmVydGV4QnVmZmVyLnVwbG9hZChzb3VyY2Uuc2VsZWN0LnZlcnRpY2VzKTtcbiAgICB0aGlzLnJlbmRlcmVyLmJpbmRTaGFkZXIoZ2xEYXRhLnNoYWRlcik7XG5cbiAgICB0aGlzLnJlbmRlcmVyLnN0YXRlLnNldEJsZW5kTW9kZSgxNyk7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy50cmFuc2xhdGlvbk1hdHJpeCA9IHNvdXJjZS53b3JsZFRyYW5zZm9ybS50b0FycmF5KHRydWUpO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuYmdfY29sb3IgPSBQSVhJLnV0aWxzLmhleDJyZ2IodGhpcy5zZWxlY3RDb2xvcik7XG5cbiAgICBjb25zdCBkcmF3TW9kZSA9IHNvdXJjZS5kcmF3TW9kZSA9IHRoaXMucmVuZGVyZXIuZ2wuVFJJQU5HTEVTO1xuICAgIGdsRGF0YS52YW8uZHJhdyhkcmF3TW9kZSwgc291cmNlLnNlbGVjdC5pbmRpY2VzLmxlbmd0aCwgMCk7XG4gIH1cblxuICByZW5kZXIoc291cmNlKSB7XG5cbiAgICBpZiAoc291cmNlLnN0eWxlSUQgIT09IHNvdXJjZS5zdHlsZS5zdHlsZUlEKSB7XG4gICAgICBzb3VyY2UudXBkYXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKHNvdXJjZS5zdGF0ZSA9PT0gQXdlc29tZVRleHQuc3RhdGVzLmVkaXRhYmxlIHx8IHNvdXJjZS5zdGF0ZSA9PT0gQXdlc29tZVRleHQuc3RhdGVzLnNlbGVjdGluZykge1xuICAgICAgdGhpcy5yZW5kZXJTZWxlY3Qoc291cmNlKTtcbiAgICB9XG4gICAgdGhpcy5yZW5kZXJUZXh0KHNvdXJjZSk7XG4gIH1cblxuICBidWlsZFRleHRHbERhdGEoc291cmNlLCBnbCkge1xuXG4gICAgY29uc3QgZ2xEYXRhID0ge1xuICAgICAgc2hhZGVyOiB0aGlzLnRleHRTaGFkZXIsXG4gICAgICB2ZXJ0ZXhCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoZ2wsIHNvdXJjZS52ZXJ0aWNlcywgZ2wuU1RSRUFNX0RSQVcpLFxuICAgICAgdXZCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoZ2wsIHNvdXJjZS51dnMsIGdsLlNUUkVBTV9EUkFXKSxcbiAgICAgIHNkZkJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZVZlcnRleEJ1ZmZlcihnbCwgc291cmNlLnNkZlNpemVzLCBnbC5TVEFUSUNfRFJBVyksXG4gICAgICBpbmRleEJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZUluZGV4QnVmZmVyKGdsLCBzb3VyY2UuaW5kaWNlcywgZ2wuU1RBVElDX0RSQVcpLFxuICAgICAgLy8gYnVpbGQgdGhlIHZhbyBvYmplY3QgdGhhdCB3aWxsIHJlbmRlci4uXG4gICAgICB2YW86IG51bGwsXG4gICAgICBkaXJ0eTogc291cmNlLmRpcnR5LFxuICAgICAgaW5kZXhEaXJ0eTogc291cmNlLmluZGV4RGlydHksXG4gICAgfTtcblxuICAgIGdsRGF0YS52YW8gPSBuZXcgZ2xDb3JlLlZlcnRleEFycmF5T2JqZWN0KGdsKVxuICAgICAgLmFkZEluZGV4KGdsRGF0YS5pbmRleEJ1ZmZlcilcbiAgICAgIC5hZGRBdHRyaWJ1dGUoZ2xEYXRhLnZlcnRleEJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFWZXJ0ZXhQb3NpdGlvbiwgZ2wuRkxPQVQsIGZhbHNlLCAyICogNCwgMClcbiAgICAgIC5hZGRBdHRyaWJ1dGUoZ2xEYXRhLnV2QnVmZmVyLCBnbERhdGEuc2hhZGVyLmF0dHJpYnV0ZXMuYVRleHR1cmVDb29yZCwgZ2wuRkxPQVQsIGZhbHNlLCAyICogNCwgMClcbiAgICAgIC5hZGRBdHRyaWJ1dGUoZ2xEYXRhLnNkZkJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFTZGZTaXplLCBnbC5GTE9BVCwgZmFsc2UsIDQsIDApO1xuXG4gICAgcmV0dXJuIGdsRGF0YVxuICB9XG5cbiAgYnVpbGRTZWxlY3RHbERhdGEoc291cmNlLCBnbCkge1xuICAgIGNvbnN0IGdsRGF0YSA9IHtcbiAgICAgIHNoYWRlcjogdGhpcy5zZWxlY3RTaGFkZXIsXG4gICAgICB2ZXJ0ZXhCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoZ2wsIHNvdXJjZS5zZWxlY3QudmVydGljZXMsIGdsLlNUUkVBTV9EUkFXKSxcbiAgICAgIGluZGV4QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlSW5kZXhCdWZmZXIoZ2wsIHNvdXJjZS5zZWxlY3QuaW5kaWNlcywgZ2wuU1RBVElDX0RSQVcpLFxuICAgICAgdmFvOiBudWxsXG4gICAgfTtcblxuICAgIGdsRGF0YS52YW8gPSBuZXcgZ2xDb3JlLlZlcnRleEFycmF5T2JqZWN0KGdsKVxuICAgICAgLmFkZEluZGV4KGdsRGF0YS5pbmRleEJ1ZmZlcilcbiAgICAgIC5hZGRBdHRyaWJ1dGUoZ2xEYXRhLnZlcnRleEJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFWZXJ0ZXhQb3NpdGlvbiwgZ2wuRkxPQVQsIGZhbHNlLCAyICogNCwgMClcblxuICAgIHJldHVybiBnbERhdGFcbiAgfVxuXG59XG5cblBJWEkuV2ViR0xSZW5kZXJlci5yZWdpc3RlclBsdWdpbignQXdlc29tZVRleHRSZW5kZXJlcicsIEF3ZXNvbWVUZXh0UmVuZGVyZXIpO1xuXG5leHBvcnQgZGVmYXVsdCBBd2Vzb21lVGV4dFJlbmRlcmVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvcmVuZGVyZXIuanMiLCJjb25zdCBjcmVhdGVJbmRpY2VzID0gcmVxdWlyZShcInF1YWQtaW5kaWNlc1wiKVxuaW1wb3J0IFRleHRMYXlvdXQgZnJvbSAnLi9sYXlvdXQnO1xuaW1wb3J0IFNlbGVjdCBmcm9tICcuL3NlbGVjdCdcbmltcG9ydCBJbnB1dCBmcm9tICcuL2lucHV0J1xuXG5jbGFzcyBBd2Vzb21lVGV4dCBleHRlbmRzIFBJWEkubWVzaC5NZXNoIHtcblxuICBzdGF0aWMgc2NhbGUgPSAxLjA7XG4gIHN0YXRpYyBzdGF0ZXMgPSB7cmVndWxhcjogMCwgZWRpdGFibGU6IDEsIHNlbGVjdGluZzogMn07XG4gIHN0YXRpYyBjdXJyZW50RWRpdGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gIHBsdWdpbk5hbWUgPSAnQXdlc29tZVRleHRSZW5kZXJlcic7XG4gIHN0YXRlID0gQXdlc29tZVRleHQuc3RhdGVzLnJlZ3VsYXI7XG4gIGNsaWNrc0NvdW50ID0gMDtcblxuICBjb25maWcgPSB7XG4gICAgZWRpdGFibGU6IGZhbHNlLFxuICAgIHVwcGVyY2FzZTogZmFsc2UsXG4gICAgbG93ZXJjYXNlOiBmYWxzZSxcbiAgICBhbnRpYWxpYXNpbmc6IHRydWUsXG4gICAgYmFja2dyb3VuZENvbG9yOiBcIiMwMDAwMDBcIlxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHRleHQsIHN0eWxlLCBjb25maWcpIHtcbiAgICBzdXBlcihjb25maWcudGV4dHVyZSk7XG5cbiAgICB0aGlzLnN0eWxlID0gbmV3IFBJWEkuVGV4dFN0eWxlKHN0eWxlKTtcbiAgICB0aGlzLmNvbmZpZyA9IHsuLi50aGlzLmNvbmZpZywgLi4uY29uZmlnfTtcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29uZmlnLmJhY2tncm91bmRDb2xvcjtcbiAgICB0aGlzLl90ZXh0ID0gdGV4dDsgLy8gQ29udGVudFxuICAgIHRoaXMuX2ZvbnQgPSBjb25maWcuZm9udDsgLy8gRm9udCBpbmZvcm1hdGlvblxuICAgIHRoaXMuX3RleHR1cmUgPSBjb25maWcudGV4dHVyZTsgLy8gVGV4dHVyZSB3aXRoIGdseXBoc1xuXG4gICAgLy8gQ2FsY3VsYXRlIGxheW91dFxuICAgIHRoaXMubGF5b3V0ID0gbmV3IFRleHRMYXlvdXQodGhpcywge1xuICAgICAgZm9udFNpemU6IHRoaXMuc3R5bGUuZm9udFNpemUsXG4gICAgICB3cmFwV29yZHM6IHRoaXMuc3R5bGUuYnJlYWtXb3JkcyxcbiAgICAgIHdyYXBwZXJXaWR0aDogdGhpcy5zdHlsZS53b3JkV3JhcFdpZHRoLFxuICAgICAgYWxpZ246IHRoaXMuc3R5bGUuYWxpZ24sXG4gICAgICBsaW5lSGVpZ2h0OiB0aGlzLnN0eWxlLmxpbmVIZWlnaHQsXG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5jb25maWcuZWRpdGFibGUpIHtcbiAgICAgIHRoaXMuaW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgICAgdGhpcy5idXR0b25Nb2RlID0gdHJ1ZTtcblxuICAgICAgdGhpcy5zZWxlY3QgPSBuZXcgU2VsZWN0KHRoaXMpO1xuICAgICAgdGhpcy5pbnB1dCA9IG5ldyBJbnB1dCh0aGlzKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLnJlZ3VsYXIpO1xuICAgIH1cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLmZvbnRNZXRyaWNzKHRoaXMuc3R5bGUuZm9udFNpemUsIDAuMCk7XG5cbiAgICB0aGlzLmxheW91dC51cGRhdGUoKTtcblxuICAgIGlmICh0aGlzLmNvbmZpZy5lZGl0YWJsZSkge1xuICAgICAgdGhpcy5zZWxlY3QudXBkYXRlKCk7XG4gICAgICB0aGlzLmlucHV0LnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8vIEFycmF5cyBmb3IgdmVydGljZXMsIHV2cyBhbmQgc2RmXG4gICAgdGhpcy52ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5sYXlvdXQubGV0dGVyc0NvdW50ICogNCAqIDIpO1xuICAgIHRoaXMudXZzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0ICogMik7XG4gICAgdGhpcy5zZGZTaXplcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5sYXlvdXQubGV0dGVyc0NvdW50ICogNCk7XG4gICAgdGhpcy5hcnJheVBvc2l0aW9ucyA9IHsgdmVydGV4OiAwLCB1dnM6IDAsIHNkZjogMCB9O1xuXG4gICAgLy8gRmlsbCBhcnJheXMgd29yZCBieSB3b3JkXG4gICAgdGhpcy5sYXlvdXQud29yZHNNZXRyaWNzLmZvckVhY2ggKHdvcmQgPT4ge1xuICAgICAgdGhpcy53cml0ZVN0cmluZyh3b3JkLndvcmQsIHRoaXMuZm9udCwgdGhpcy5tZXRyaWNzLCBbd29yZC54LCB3b3JkLnldKTtcbiAgICB9KTtcblxuICAgIC8vIFByZXBhcmUgaW5kaWNlc1xuICAgIHRoaXMuaW5kaWNlcyA9IGNyZWF0ZUluZGljZXMoe1xuICAgICAgY2xvY2t3aXNlOiB0cnVlLFxuICAgICAgdHlwZTogJ3VpbnQxNicsXG4gICAgICBjb3VudDogdGhpcy5sYXlvdXQubGV0dGVyc0NvdW50XG4gICAgfSk7XG5cbiAgICB0aGlzLnN0eWxlSUQgPSB0aGlzLnN0eWxlLnN0eWxlSUQ7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgdGhpcy5pbmRleERpcnR5ID0gdHJ1ZTtcbiAgICB0aGlzLl9nbERhdGFzID0gW107XG4gIH1cblxuICBzZXRTdGF0ZShuZXdTdGF0ZSkge1xuXG4gICAgaWYgKCF0aGlzLmNvbmZpZy5lZGl0YWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgc3RhdGVzIH0gPSBBd2Vzb21lVGV4dDtcblxuICAgIGlmICghbmV3U3RhdGUgaW4gT2JqZWN0LnZhbHVlcyhzdGF0ZXMpKSByZXR1cm47XG5cbiAgICBzd2l0Y2ggKG5ld1N0YXRlKSB7XG4gICAgICBjYXNlIHN0YXRlcy5yZWd1bGFyOlxuICAgICAgICB0aGlzLnNldFJlZ3VsYXJTdGF0ZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2Ugc3RhdGVzLmVkaXRhYmxlOlxuICAgICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQXdlc29tZVRleHQuc3RhdGVzLnJlZ3VsYXIpIHtcbiAgICAgICAgICB0aGlzLnNldEVkaXRhYmxlU3RhdGUoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG5cbiAgICB0aGlzLnN0YXRlID0gbmV3U3RhdGU7XG4gIH1cblxuICBnZXQgdGV4dCgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dDtcbiAgfVxuXG4gIHNldCB0ZXh0KHZhbHVlKSB7XG4gICAgdGhpcy5fdGV4dCA9IHZhbHVlO1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBzZXRSZWd1bGFyU3RhdGUoKSB7XG5cbiAgICBBd2Vzb21lVGV4dC5jdXJyZW50RWRpdGluZ0VsZW1lbnQgPSBudWxsO1xuXG4gICAgdGhpcy5vZmYoXCJtb3VzZWRvd25cIik7XG4gICAgdGhpcy5vZmYoXCJtb3VzZW1vdmVcIik7XG4gICAgdGhpcy5vZmYoXCJtb3VzZXVwXCIpO1xuICAgIHRoaXMub2ZmKFwibW91c2V1cG91dHNpZGVcIik7XG5cbiAgICB0aGlzLmlucHV0LmVuYWJsZWQgPSBmYWxzZTtcblxuICAgIHRoaXMub24oXCJjbGlja1wiLCBlID0+IHtcbiAgICAgIGlmICh0aGlzLmNsaWNrc0NvdW50ID09PSAxKSB7XG4gICAgICAgIHRoaXMuY2xpY2tzQ291bnQgPSAwO1xuICAgICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5lZGl0YWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLmNsaWNrc0NvdW50ID09PSAwKSB7XG4gICAgICAgIHRoaXMuY2xpY2tzQ291bnQrKztcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuY2xpY2tzQ291bnQgPSAwO1xuICAgICAgICB9LCAzMDApXG4gICAgICB9XG4gICAgfSlcblxuICB9XG5cbiAgc2V0RWRpdGFibGVTdGF0ZSgpIHtcblxuICAgIC8vIERpc2FibGUgcHJldmlvdXNseSBlbmFibGVkIGZpZWxkXG4gICAgaWYgKEF3ZXNvbWVUZXh0LmN1cnJlbnRFZGl0aW5nRWxlbWVudCAhPSBudWxsKSB7XG4gICAgICBBd2Vzb21lVGV4dC5jdXJyZW50RWRpdGluZ0VsZW1lbnQuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLnJlZ3VsYXIpO1xuICAgIH1cbiAgICBBd2Vzb21lVGV4dC5jdXJyZW50RWRpdGluZ0VsZW1lbnQgPSB0aGlzO1xuXG4gICAgLy8gRGlzYWJsZSB1bm5lY2Vzc2FyeSBldmVudHNcbiAgICB0aGlzLm9mZihcImNsaWNrXCIpO1xuXG4gICAgdGhpcy5pbnB1dC5lbmFibGVkID0gdHJ1ZTtcbiAgICB0aGlzLmlucHV0LmhpZGUoKTtcblxuICAgIC8vIFNlbGVjdCBhbGwgY2hhcmFjdGVyc1xuICAgIHRoaXMuc2VsZWN0LnNldFJhbmdlKDAsdGhpcy50ZXh0Lmxlbmd0aCAtIDEpO1xuICAgIHRoaXMuaW5wdXQuaW5wdXRFbGVtZW50LmZvY3VzKCk7XG5cbiAgICB0aGlzLm9uKFwibW91c2Vkb3duXCIsIGUgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZShBd2Vzb21lVGV4dC5zdGF0ZXMuc2VsZWN0aW5nKTtcbiAgICAgIHRoaXMuc2VsZWN0Lm9uTW91c2VEb3duKGUpO1xuICAgICAgdGhpcy5pbnB1dC5zaG93KCk7XG4gICAgICB0aGlzLmlucHV0LnVwZGF0ZShlKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oXCJtb3VzZW1vdmVcIiwgZSA9PiB7XG4gICAgICBjb25zdCB7bW92ZW1lbnRYLCBtb3ZlbWVudFl9ID0gZS5kYXRhLm9yaWdpbmFsRXZlbnQ7XG4gICAgICBpZiAobW92ZW1lbnRYID09PSAwICYmIG1vdmVtZW50WSA9PT0gMCkgcmV0dXJuO1xuXG4gICAgICBpZiAodGhpcy5zdGF0ZSA9PT0gQXdlc29tZVRleHQuc3RhdGVzLnNlbGVjdGluZykge1xuICAgICAgICB0aGlzLnNlbGVjdC5vbk1vdXNlTW92ZShlKTtcbiAgICAgICAgdGhpcy5pbnB1dC5oaWRlKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLm9uKFwibW91c2V1cFwiLCBlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLmVkaXRhYmxlKTtcbiAgICAgIHRoaXMuc2VsZWN0Lm9uTW91c2VVcChlKTtcbiAgICB9KTtcblxuICAgIHRoaXMub24oXCJtb3VzZXVwb3V0c2lkZVwiLCBlID0+IHtcbiAgICAgIHRoaXMuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLmVkaXRhYmxlKTtcbiAgICAgIHRoaXMuc2VsZWN0Lm9uTW91c2VVcChlKTtcbiAgICB9KTtcblxuICB9XG5cbiAgaW5zZXJ0U3RyaW5nKGluZGV4LCBzdHJpbmcpIHtcbiAgICB0aGlzLnRleHQgPSB0aGlzLnRleHQuc3Vic3RyKDAsIGluZGV4KSArIHN0cmluZyArIHRoaXMudGV4dC5zdWJzdHIoaW5kZXgpO1xuICB9XG5cbiAgcmVtb3ZlU3RyaW5nKGluZGV4LCBsZW5ndGgpIHtcbiAgICBsZXQgbmV3VGV4dCA9IHRoaXMudGV4dC5zcGxpdChcIlwiKTtcbiAgICBuZXdUZXh0LnNwbGljZShpbmRleCwgbGVuZ3RoICsgMSk7XG4gICAgdGhpcy50ZXh0ID0gbmV3VGV4dC5qb2luKFwiXCIpO1xuICB9XG5cbiAgZ2V0IHRleHR1cmUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RleHR1cmU7XG4gIH1cblxuICBnZXQgZm9udCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZm9udFxuICB9XG5cbiAgd3JpdGVTdHJpbmcoIHN0cmluZywgZm9udCwgZm9udF9tZXRyaWNzLCBwb3MpIHtcbiAgICBsZXQgcHJldl9jaGFyID0gXCIgXCI7ICAvLyBVc2VkIHRvIGNhbGN1bGF0ZSBrZXJuaW5nXG4gICAgbGV0IGNwb3MgICAgICA9IHBvczsgIC8vIEN1cnJlbnQgcGVuIHBvc2l0aW9uXG4gICAgbGV0IHhfbWF4ICAgICA9IDAuMDsgIC8vIE1heCB3aWR0aCAtIHVzZWQgZm9yIGJvdW5kaW5nIGJveFxuICAgIGxldCBzY2FsZSAgICAgPSBmb250X21ldHJpY3MuY2FwU2NhbGU7XG5cbiAgICBsZXQgc3RyX3BvcyA9IDA7XG5cbiAgICBmb3IoOzspIHtcbiAgICAgIGlmICggc3RyX3BvcyA9PT0gc3RyaW5nLmxlbmd0aCApIGJyZWFrO1xuXG4gICAgICB2YXIgc2NoYXIgPSBzdHJpbmdbIHN0cl9wb3MgXTtcbiAgICAgIHN0cl9wb3MrKztcblxuICAgICAgaWYgKCBzY2hhciA9PT0gXCJcXG5cIiApIHtcbiAgICAgICAgaWYgKCBjcG9zWzBdID4geF9tYXggKSB4X21heCA9IGNwb3NbMF07IC8vIEV4cGFuZGluZyB0aGUgYm91bmRpbmcgcmVjdFxuICAgICAgICBjcG9zWzBdICA9IHBvc1swXTtcbiAgICAgICAgY3Bvc1sxXSAtPSBmb250X21ldHJpY3MubGluZUhlaWdodDtcbiAgICAgICAgcHJldl9jaGFyID0gXCIgXCI7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIHNjaGFyID09PSBcIiBcIiApIHtcbiAgICAgICAgLy9zY2hhciA9IFwiX1wiXG4gICAgICAgIC8vY3Bvc1swXSArPSBmb250LnNwYWNlX2FkdmFuY2UgKiBzY2FsZTtcbiAgICAgICAgLy9wcmV2X2NoYXIgPSBcIiBcIjtcbiAgICAgICAgLy9jb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZvbnRfY2hhciA9IGZvbnQuY2hhcnNbIHNjaGFyIF07XG4gICAgICBpZiAoICFmb250X2NoYXIgKSB7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1YnN0aXR1dGluZyB1bmF2YWlsYWJsZSBjaGFyYWN0ZXJzIHdpdGggJz8nXG4gICAgICAgIHNjaGFyID0gXCI/XCI7XG4gICAgICAgIGZvbnRfY2hhciA9IGZvbnQuY2hhcnNbIFwiP1wiIF07XG4gICAgICB9XG5cbiAgICAgIHZhciBrZXJuID0gZm9udC5rZXJuWyBwcmV2X2NoYXIgKyBzY2hhciBdO1xuICAgICAgaWYgKCAha2VybiApIGtlcm4gPSAwLjA7XG5cbiAgICAgIC8vIGNhbGN1bGF0aW5nIHRoZSBnbHlwaCByZWN0YW5nbGUgYW5kIGNvcHlpbmcgaXQgdG8gdGhlIHZlcnRleCBhcnJheVxuICAgICAgdmFyIHJlY3QgPSB0aGlzLmNoYXJSZWN0KCBjcG9zLCBmb250LCBmb250X21ldHJpY3MsIGZvbnRfY2hhciwga2VybiApO1xuXG4gICAgICByZWN0LnBvc2l0aW9ucy5tYXAoKHBvcykgPT4gdGhpcy52ZXJ0aWNlc1sgdGhpcy5hcnJheVBvc2l0aW9ucy52ZXJ0ZXgrKyBdID0gcG9zICk7XG4gICAgICByZWN0LnV2cy5tYXAoKHV2KSA9PiB0aGlzLnV2c1sgdGhpcy5hcnJheVBvc2l0aW9ucy51dnMrKyBdID0gdXYgKTtcbiAgICAgIHJlY3Quc2RmU2l6ZXMubWFwKChzZGYpID0+IHRoaXMuc2RmU2l6ZXNbIHRoaXMuYXJyYXlQb3NpdGlvbnMuc2RmKysgXSA9IHNkZiApO1xuXG4gICAgICBwcmV2X2NoYXIgPSBzY2hhcjtcbiAgICAgIGNwb3MgPSByZWN0LnBvcztcbiAgICB9XG5cbiAgICByZXR1cm4ge1xuICAgICAgcmVjdCA6IFsgcG9zWzBdLCBwb3NbMV0sIHhfbWF4IC0gcG9zWzBdLCBwb3NbMV0gLSBjcG9zWzFdICsgZm9udF9tZXRyaWNzLmxpbmVIZWlnaHQgXSxcbiAgICAgIHN0cmluZ19wb3MgOiBzdHJfcG9zLFxuICAgICAgLy9hcnJheV9wb3MgOiBhcnJheV9wb3NcbiAgICB9XG5cbiAgfVxuXG4gIGZvbnRNZXRyaWNzKGZvbnRTaXplLCBtb3JlTGluZUdhcCA9IDAuMikge1xuXG4gICAgY29uc3Qge2NhcF9oZWlnaHQsIHhfaGVpZ2h0LCBhc2NlbnQ6IGZvbnRBc2NlbnQgLCBkZXNjZW50LCBsaW5lX2dhcH0gPSB0aGlzLmZvbnQ7XG5cbiAgICBjb25zdCBjYXBTY2FsZSA9IHRoaXMuc3R5bGUuZm9udFNpemUgLyBjYXBfaGVpZ2h0O1xuICAgIGNvbnN0IGxvd1NjYWxlID0gTWF0aC5yb3VuZCggeF9oZWlnaHQgKiBjYXBTY2FsZSApIC8geF9oZWlnaHQ7XG4gICAgY29uc3QgYXNjZW50ID0gTWF0aC5yb3VuZCggZm9udEFzY2VudCAqIGNhcFNjYWxlICk7XG4gICAgbGV0IGxpbmVIZWlnaHQgPSBNYXRoLnJvdW5kKCBjYXBTY2FsZSAqICggZm9udEFzY2VudCArIGRlc2NlbnQgKyBsaW5lX2dhcCApICsgbW9yZUxpbmVHYXApO1xuXG4gICAgaWYgKHRoaXMuc3R5bGUubGluZUhlaWdodCA+IDApXG4gICAgICBsaW5lSGVpZ2h0ID0gdGhpcy5zdHlsZS5saW5lSGVpZ2h0O1xuICAgIGVsc2VcbiAgICAgIHRoaXMuc3R5bGUubGluZUhlaWdodCA9IGxpbmVIZWlnaHQ7XG5cbiAgICByZXR1cm4ge1xuICAgICAgY2FwU2NhbGUgICA6IGNhcFNjYWxlLFxuICAgICAgbG93U2NhbGUgICA6IGxvd1NjYWxlLFxuICAgICAgYXNjZW50ICAgICAgOiBhc2NlbnQsXG4gICAgICBsaW5lSGVpZ2h0IDogbGluZUhlaWdodFxuICAgIH07XG4gIH1cblxuICBjaGFyUmVjdCggcG9zLCBmb250LCBmb250X21ldHJpY3MsIGZvbnRfY2hhciwga2VybiA9IDAuMCApIHtcblxuICAgIC8vIExvdyBjYXNlIGNoYXJhY3RlcnMgaGF2ZSBmaXJzdCBiaXQgc2V0IGluICdmbGFncydcbiAgICB2YXIgbG93Y2FzZSA9ICggZm9udF9jaGFyLmZsYWdzICYgMSApID09PSAxO1xuXG4gICAgLy8gUGVuIHBvc2l0aW9uIGlzIGF0IHRoZSB0b3Agb2YgdGhlIGxpbmUsIFkgZ29lcyB1cFxuICAgIHZhciBiYXNlbGluZSA9IHBvc1sxXSAtIGZvbnRfbWV0cmljcy5hc2NlbnQ7XG5cbiAgICAvLyBMb3cgY2FzZSBjaGFycyB1c2UgdGhlaXIgb3duIHNjYWxlXG4gICAgdmFyIHNjYWxlID0gbG93Y2FzZSA/IGZvbnRfbWV0cmljcy5sb3dTY2FsZSA6IGZvbnRfbWV0cmljcy5jYXBTY2FsZTtcblxuICAgIC8vIExheWluZyBvdXQgdGhlIGdseXBoIHJlY3RhbmdsZVxuICAgIHZhciBnICAgICAgPSBmb250X2NoYXIucmVjdDtcbiAgICB2YXIgYm90dG9tID0gYmFzZWxpbmUgLSBzY2FsZSAqICggZm9udC5kZXNjZW50ICsgZm9udC5peSApO1xuICAgIHZhciB0b3AgICAgPSBib3R0b20gICArIHNjYWxlICogKCBmb250LnJvd19oZWlnaHQgKTtcbiAgICB2YXIgbGVmdCAgID0gcG9zWzBdICAgKyBzY2FsZSAqICggZm9udF9jaGFyLmJlYXJpbmdfeCArIGtlcm4gLSBmb250Lml4ICk7XG4gICAgdmFyIHJpZ2h0ICA9IGxlZnQgICAgICsgc2NhbGUgKiAoIGdbMl0gLSBnWzBdICk7XG4gICAgdmFyIHAgPSBbIGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSBdO1xuXG4gICAgLy8gQWR2YW5jaW5nIHBlbiBwb3NpdGlvblxuICAgIHZhciBuZXdfcG9zX3ggPSBwb3NbMF0gKyBzY2FsZSAqICggZm9udF9jaGFyLmFkdmFuY2VfeCApO1xuXG4gICAgLy8gU2lnbmVkIGRpc3RhbmNlIGZpZWxkIHNpemUgaW4gc2NyZWVuIHBpeGVsc1xuICAgIHZhciBzZGZfc2l6ZSAgPSAyLjAgKiBmb250Lml5ICogc2NhbGU7XG5cbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbXG4gICAgICBwWzBdLCBwWzNdLCAvLyBsZWZ0IGJvdHRvbSxcbiAgICAgIHBbMl0sIHBbM10sIC8vIHJpZ2h0IGJvdHRvbSxcbiAgICAgIHBbMl0sIHBbMV0sIC8vIHJpZ2h0IHRvcFxuICAgICAgcFswXSwgcFsxXSwgLy8gbGVmdCB0b3BcbiAgICBdO1xuXG4gICAgY29uc3QgdXZzID0gW1xuICAgICAgZ1swXSwgZ1sxXSwgLy8gbGVmdCB0b3BcbiAgICAgIGdbMl0sIGdbMV0sIC8vIHJpZ2h0IHRvcFxuICAgICAgZ1syXSwgZ1szXSwgLy8gcmlnaHQgYm90dG9tLFxuICAgICAgZ1swXSwgZ1szXSwgLy8gbGVmdCBib3R0b20sXG4gICAgXTtcblxuICAgIGNvbnN0IHNkZlNpemVzID0gW1xuICAgICAgc2RmX3NpemUsXG4gICAgICBzZGZfc2l6ZSxcbiAgICAgIHNkZl9zaXplLFxuICAgICAgc2RmX3NpemUsXG4gICAgXTtcblxuICAgIHJldHVybiB7XG4gICAgICBwb3NpdGlvbnMsXG4gICAgICB1dnMsXG4gICAgICBzZGZTaXplcyxcbiAgICAgIHBvczogWyBuZXdfcG9zX3gsIHBvc1sxXSBdXG4gICAgfTtcblxuICAgIC8vcmV0dXJuIHsgdmVydGljZXMgOiB2ZXJ0aWNlcywgcG9zIDogWyBuZXdfcG9zX3gsIHBvc1sxXSBdIH07XG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBBd2Vzb21lVGV4dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy90ZXh0LmpzIiwiXG5jbGFzcyBUZXh0TGF5b3V0IHtcblxuICB0ZXh0ID0gXCJcIjtcbiAgZm9udCA9IG51bGw7XG4gIG1ldHJpY3MgPSBudWxsO1xuICBmb250U2l6ZSA9IDIwO1xuICBhbGlnbiA9IFwibGVmdFwiO1xuICBzdGFydFggPSAwO1xuICBzdGFydFkgPSAwO1xuICB3cmFwcGVyV2lkdGggPSAxMDA7XG4gIHdyYXBXb3JkcyA9IGZhbHNlO1xuICB3b3Jkc01ldHJpY3MgPSBbXTtcbiAgbGV0dGVyc0NvdW50ID0gMDtcbiAgaGVpZ2h0ID0gMDtcbiAgbGluZXNDb3VudCA9IDA7XG4gIGxpbmVIZWlnaHQgPSAwO1xuICBnbHlwaHMgPSBbXTtcbiAgb3duZXIgPSBudWxsO1xuXG5cbiAgY29uc3RydWN0b3Iob3duZXIsIGNvbmZpZykge1xuXG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgIHRoaXMudGV4dCA9IG93bmVyLnRleHQ7XG4gICAgdGhpcy5mb250ID0gb3duZXIuZm9udDtcbiAgICB0aGlzLmZvbnRTaXplID0gY29uZmlnLmZvbnRTaXplO1xuICAgIHRoaXMud3JhcFdvcmRzID0gY29uZmlnLndyYXBXb3JkcztcbiAgICB0aGlzLndyYXBwZXJXaWR0aCA9IGNvbmZpZy53cmFwcGVyV2lkdGg7XG4gICAgdGhpcy5saW5lSGVpZ2h0ID0gY29uZmlnLmxpbmVIZWlnaHQ7XG4gICAgdGhpcy5hbGlnbiA9IGNvbmZpZy5hbGlnbjtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuXG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy50ZXh0ID0gdGhpcy5vd25lci50ZXh0O1xuICAgIHRoaXMuZm9udCA9IHRoaXMub3duZXIuZm9udDtcblxuICAgIHRoaXMubGV0dGVyc0NvdW50ID0gdGhpcy50ZXh0LnNwbGl0KFwiXCIpLmxlbmd0aDtcbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLmZvbnRNZXRyaWNzKHRoaXMuZm9udCwgMC4wKTtcbiAgICB0aGlzLnN0YXJ0WSA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xuICAgIHRoaXMuY2FsY3VsYXRlV29yZHNQb3NpdGlvbnMoKTtcblxuICAgIHRoaXMuZ2x5cGhzID0gW107XG5cbiAgICB0aGlzLndvcmRzTWV0cmljcy5mb3JFYWNoICh3b3JkID0+IHtcbiAgICAgIHRoaXMuZ2V0R2x5cGhzKHdvcmQud29yZCwgW3dvcmQueCwgd29yZC55XSk7XG4gICAgfSk7XG4gIH1cblxuICBmb250TWV0cmljcyhmb250U2l6ZSwgbW9yZUxpbmVHYXAgPSAwLjIpIHtcblxuICAgIGNvbnN0IHtjYXBfaGVpZ2h0LCB4X2hlaWdodCwgYXNjZW50OiBmb250QXNjZW50ICwgZGVzY2VudCwgbGluZV9nYXB9ID0gdGhpcy5mb250O1xuXG4gICAgY29uc3QgY2FwU2NhbGUgPSB0aGlzLmZvbnRTaXplIC8gY2FwX2hlaWdodDtcbiAgICBjb25zdCBsb3dTY2FsZSA9IE1hdGgucm91bmQoIHhfaGVpZ2h0ICogY2FwU2NhbGUgKSAvIHhfaGVpZ2h0O1xuICAgIGNvbnN0IGFzY2VudCA9IE1hdGgucm91bmQoIGZvbnRBc2NlbnQgKiBjYXBTY2FsZSApO1xuICAgIGxldCBsaW5lSGVpZ2h0ID0gTWF0aC5yb3VuZCggY2FwU2NhbGUgKiAoIGZvbnRBc2NlbnQgKyBkZXNjZW50ICsgbGluZV9nYXAgKSArIG1vcmVMaW5lR2FwICk7XG5cbiAgICBpZiAodGhpcy5saW5lSGVpZ2h0ID4gMClcbiAgICAgIGxpbmVIZWlnaHQgPSB0aGlzLmxpbmVIZWlnaHQ7XG4gICAgZWxzZVxuICAgICAgdGhpcy5saW5lSGVpZ2h0ID0gbGluZUhlaWdodDtcblxuICAgIHJldHVybiB7XG4gICAgICBjYXBTY2FsZSAgIDogY2FwU2NhbGUsXG4gICAgICBsb3dTY2FsZSAgIDogbG93U2NhbGUsXG4gICAgICBhc2NlbnQgICAgICA6IGFzY2VudCxcbiAgICAgIGxpbmVIZWlnaHQgOiBsaW5lSGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIGNoYXJSZWN0KCBwb3MsIGZvbnRfY2hhciwga2VybiA9IDAuMCApIHtcblxuICAgIC8vIExvdyBjYXNlIGNoYXJhY3RlcnMgaGF2ZSBmaXJzdCBiaXQgc2V0IGluICdmbGFncydcbiAgICB2YXIgbG93Y2FzZSA9ICggZm9udF9jaGFyLmZsYWdzICYgMSApID09PSAxO1xuXG4gICAgLy8gUGVuIHBvc2l0aW9uIGlzIGF0IHRoZSB0b3Agb2YgdGhlIGxpbmUsIFkgZ29lcyB1cFxuICAgIHZhciBiYXNlbGluZSA9IHBvc1sxXSAtIHRoaXMubWV0cmljcy5hc2NlbnQ7XG5cbiAgICAvLyBMb3cgY2FzZSBjaGFycyB1c2UgdGhlaXIgb3duIHNjYWxlXG4gICAgdmFyIHNjYWxlID0gbG93Y2FzZSA/IHRoaXMubWV0cmljcy5sb3dTY2FsZSA6IHRoaXMubWV0cmljcy5jYXBTY2FsZTtcblxuICAgIC8vIExheWluZyBvdXQgdGhlIGdseXBoIHJlY3RhbmdsZVxuICAgIHZhciBnICAgICAgPSBmb250X2NoYXIucmVjdDtcbiAgICB2YXIgYm90dG9tID0gYmFzZWxpbmUgLSBzY2FsZSAqICggdGhpcy5mb250LmRlc2NlbnQgKyB0aGlzLmZvbnQuaXkgKTtcbiAgICB2YXIgdG9wICAgID0gYm90dG9tICAgKyBzY2FsZSAqICggdGhpcy5mb250LnJvd19oZWlnaHQgKTtcbiAgICB2YXIgbGVmdCAgID0gcG9zWzBdICAgKyBzY2FsZSAqICggZm9udF9jaGFyLmJlYXJpbmdfeCArIGtlcm4gLSB0aGlzLmZvbnQuaXggKTtcbiAgICB2YXIgcmlnaHQgID0gbGVmdCAgICAgKyBzY2FsZSAqICggZ1syXSAtIGdbMF0gKTtcbiAgICB2YXIgcCA9IFsgbGVmdCwgdG9wLCByaWdodCwgYm90dG9tIF07XG5cbiAgICAvLyBBZHZhbmNpbmcgcGVuIHBvc2l0aW9uXG4gICAgdmFyIG5ld19wb3NfeCA9IHBvc1swXSArIHNjYWxlICogKCBmb250X2NoYXIuYWR2YW5jZV94ICk7XG5cbiAgICBjb25zdCBwb3NpdGlvbnMgPSBbXG4gICAgICBwWzBdLCBwWzNdLCAvLyBsZWZ0IGJvdHRvbSxcbiAgICAgIHBbMl0sIHBbM10sIC8vIHJpZ2h0IGJvdHRvbSxcbiAgICAgIHBbMl0sIHBbMV0sIC8vIHJpZ2h0IHRvcFxuICAgICAgcFswXSwgcFsxXSwgLy8gbGVmdCB0b3BcbiAgICBdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9ucyxcbiAgICAgIHBvczogWyBuZXdfcG9zX3gsIHBvc1sxXSBdLFxuICAgICAgbWV0cmljczoge3g6IHBvc1swXSwgeTogcG9zWzFdLCB3aWR0aDogc2NhbGUgKiBmb250X2NoYXIuYWR2YW5jZV94IH1cbiAgICB9O1xuICB9XG5cbiAgZ2V0U3RyaW5nU2l6ZShzdHJpbmcpIHtcblxuICAgIGxldCB3aWR0aCA9IDA7XG4gICAgbGV0IGhlaWdodCA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xuXG4gICAgY29uc3QgY2hhcnMgPSBbLi4uc3RyaW5nXTtcblxuICAgIC8vIEl0ZXJhdGUgdGhvdWdodCB0aGUgY2hhcnMsIGNhbGN1bGF0ZSBwb3NpdGlvblxuICAgIGNoYXJzLmZvckVhY2goY2hhciA9PiB7XG4gICAgICBsZXQgZm9udF9jaGFyID0gdGhpcy5mb250LmNoYXJzWyBjaGFyIF07XG5cbiAgICAgIC8qaWYgKGNoYXIgPT09IFwiIFwiKSB7XG4gICAgICAgIHdpZHRoICs9IHRoaXMuZm9udC5zcGFjZV9hZHZhbmNlICogdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xuICAgICAgICByZXR1cm47XG4gICAgICB9Ki9cblxuICAgICAgLy8gR2V0IGNoYXIgbWV0cmljc1xuICAgICAgbGV0IGNoYXJSZWN0ID0gdGhpcy5jaGFyUmVjdChbd2lkdGgsMF0sIGZvbnRfY2hhciwgMC4yKTtcbiAgICAgIHdpZHRoID0gY2hhclJlY3QucG9zWzBdO1xuXG4gICAgfSk7XG5cbiAgICByZXR1cm4ge3dpZHRoLCBoZWlnaHR9O1xuXG4gIH1cblxuICBjYWxjdWxhdGVXb3Jkc1Bvc2l0aW9ucygpIHtcblxuICAgIGNvbnN0IHdvcmRzID0gdGhpcy50ZXh0LnNwbGl0KFwiIFwiKTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd29yZHMubGVuZ3RoIC0gMTsgaSsrKSB7XG4gICAgICB3b3Jkc1tpXSA9IHdvcmRzW2ldICsgXCIgXCI7XG4gICAgfVxuXG4gICAgdGhpcy53b3Jkc01ldHJpY3MgPSBbXTtcblxuICAgIC8vIEluaXRpYWwgcG9zaXRpb25cbiAgICBsZXQgeCA9IHRoaXMuc3RhcnRYO1xuICAgIGxldCB5ID0gdGhpcy5zdGFydFk7XG5cbiAgICAvLyBDYWxjdWxhdGUgd29yZHMgcG9zaXRpb25zIG9uIGxpbmVzXG4gICAgd29yZHMuZm9yRWFjaCh3b3JkID0+IHtcbiAgICAgIGNvbnN0IHdvcmRTaXplID0gdGhpcy5nZXRTdHJpbmdTaXplKHdvcmQpO1xuICAgICAgaWYgKHggKyB3b3JkU2l6ZS53aWR0aCA+IHRoaXMuc3RhcnRYICsgdGhpcy53cmFwcGVyV2lkdGggJiYgdGhpcy53cmFwV29yZHMpIHtcbiAgICAgICAgeCA9IHRoaXMuc3RhcnRYO1xuICAgICAgICB5ICs9IHdvcmRTaXplLmhlaWdodDtcbiAgICAgIH1cblxuICAgICAgdGhpcy53b3Jkc01ldHJpY3MucHVzaCh7Li4ud29yZFNpemUsIHgsIHksIHdvcmR9KTtcblxuICAgICAgLy94ICs9IHdvcmRTaXplLndpZHRoICsgdGhpcy5mb250LnNwYWNlX2FkdmFuY2UgKiB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XG4gICAgICB4ICs9IHdvcmRTaXplLndpZHRoO1xuICAgIH0pO1xuXG4gICAgLy8gQ2FsY3VsYXRlIGxpbmVzIGNvdW50XG4gICAgdGhpcy5saW5lc0NvdW50ID0gKHkgLSB0aGlzLnN0YXJ0WSkgLyB0aGlzLm1ldHJpY3MubGluZUhlaWdodCArIDE7XG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmxpbmVzQ291bnQgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcblxuICAgIC8vIENoYW5nZSBhbGlnbiBUT0RPIG9wdGltaXNlXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpbmVzQ291bnQ7ICsraSkge1xuICAgICAgY29uc3Qgd29yZHNPbkxpbmUgPSB0aGlzLndvcmRzTWV0cmljcy5maWx0ZXIod29yZCA9PiB3b3JkLnkgPT09IHRoaXMuc3RhcnRZICsgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCkpXG5cbiAgICAgIGNvbnN0IGxhc3RXb3JkID0gd29yZHNPbkxpbmVbd29yZHNPbkxpbmUubGVuZ3RoIC0gMV07XG5cbiAgICAgIGlmIChsYXN0V29yZCkge1xuICAgICAgICBjb25zdCBmcmVlU3BhY2UgPSAodGhpcy5zdGFydFggKyB0aGlzLndyYXBwZXJXaWR0aCkgLSAobGFzdFdvcmQueCArIGxhc3RXb3JkLndpZHRoKTtcblxuICAgICAgICBsZXQgbGVmdE9mZnNldCA9IDA7XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLmFsaWduKSB7XG4gICAgICAgICAgY2FzZSBcImNlbnRlclwiOlxuICAgICAgICAgICAgbGVmdE9mZnNldCA9IGZyZWVTcGFjZSAvIDI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIFwicmlnaHRcIjpcbiAgICAgICAgICAgIGxlZnRPZmZzZXQgPSBmcmVlU3BhY2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndvcmRzTWV0cmljcy5mb3JFYWNoKHdvcmQgPT4ge1xuICAgICAgICAgIGlmICh3b3JkLnkgPT09IHRoaXMuc3RhcnRZICsgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCkpIHtcbiAgICAgICAgICAgIHdvcmQueCArPSBsZWZ0T2Zmc2V0O1xuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBnZXRHbHlwaHMoIHN0cmluZywgcG9zKSB7XG4gICAgbGV0IHByZXZfY2hhciA9IFwiIFwiOyAgLy8gVXNlZCB0byBjYWxjdWxhdGUga2VybmluZ1xuICAgIGxldCBjcG9zICAgICAgPSBwb3M7ICAvLyBDdXJyZW50IHBlbiBwb3NpdGlvblxuICAgIGxldCB4X21heCAgICAgPSAwLjA7ICAvLyBNYXggd2lkdGggLSB1c2VkIGZvciBib3VuZGluZyBib3hcbiAgICBsZXQgc2NhbGUgICAgID0gdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xuXG4gICAgbGV0IHN0cl9wb3MgPSAwO1xuXG4gICAgZm9yKDs7KSB7XG4gICAgICBpZiAoIHN0cl9wb3MgPT09IHN0cmluZy5sZW5ndGggKSBicmVhaztcblxuICAgICAgdmFyIHNjaGFyID0gc3RyaW5nWyBzdHJfcG9zIF07XG4gICAgICBzdHJfcG9zKys7XG5cbiAgICAgIGlmICggc2NoYXIgPT09IFwiXFxuXCIgKSB7XG4gICAgICAgIGlmICggY3Bvc1swXSA+IHhfbWF4ICkgeF9tYXggPSBjcG9zWzBdOyAvLyBFeHBhbmRpbmcgdGhlIGJvdW5kaW5nIHJlY3RcbiAgICAgICAgY3Bvc1swXSAgPSBwb3NbMF07XG4gICAgICAgIGNwb3NbMV0gLT0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XG4gICAgICAgIHByZXZfY2hhciA9IFwiIFwiO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCBzY2hhciA9PT0gXCIgXCIgKSB7XG4gICAgICAgIC8vc2NoYXIgPSBcIl9cIlxuICAgICAgICAvL2Nwb3NbMF0gKz0gdGhpcy5mb250LnNwYWNlX2FkdmFuY2UgKiBzY2FsZTtcbiAgICAgICAgcHJldl9jaGFyID0gXCIgXCI7XG4gICAgICAgIC8vY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHZhciBmb250X2NoYXIgPSB0aGlzLmZvbnQuY2hhcnNbIHNjaGFyIF07XG4gICAgICBpZiAoICFmb250X2NoYXIgKSB7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1YnN0aXR1dGluZyB1bmF2YWlsYWJsZSBjaGFyYWN0ZXJzIHdpdGggJz8nXG4gICAgICAgIHNjaGFyID0gXCI/XCI7XG4gICAgICAgIGZvbnRfY2hhciA9IHRoaXMuZm9udC5jaGFyc1sgXCI/XCIgXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGtlcm4gPSB0aGlzLmZvbnQua2VyblsgcHJldl9jaGFyICsgc2NoYXIgXTtcbiAgICAgIGlmICggIWtlcm4gKSBrZXJuID0gMC4wO1xuXG4gICAgICAvLyBjYWxjdWxhdGluZyB0aGUgZ2x5cGggcmVjdGFuZ2xlIGFuZCBjb3B5aW5nIGl0IHRvIHRoZSB2ZXJ0ZXggYXJyYXlcbiAgICAgIHZhciByZWN0ID0gdGhpcy5jaGFyUmVjdCggY3BvcywgZm9udF9jaGFyLCBrZXJuICk7XG5cbiAgICAgIHByZXZfY2hhciA9IHNjaGFyO1xuICAgICAgY3BvcyA9IHJlY3QucG9zO1xuXG4gICAgICB0aGlzLmdseXBocy5wdXNoKHtcbiAgICAgICAgbGV0dGVyOiBzY2hhcixcbiAgICAgICAgdmVydGljZXM6IHJlY3QucG9zaXRpb25zLFxuICAgICAgICBwb3NpdGlvbjogcmVjdC5wb3MsXG4gICAgICAgIG1ldHJpY3M6IHJlY3QubWV0cmljc1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgVGV4dExheW91dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9sYXlvdXQuanMiLCJjb25zdCBjcmVhdGVJbmRpY2VzID0gcmVxdWlyZShcInF1YWQtaW5kaWNlc1wiKVxuXG5jbGFzcyBTZWxlY3Qge1xuXG4gIHJhbmdlID0gWzAsMF07XG4gIG1ldHJpY3MgPSBudWxsO1xuICBsYXlvdXQgPSBudWxsO1xuICBkaXJ0eSA9IGZhbHNlO1xuICBpbmRleEJ1ZmZlciA9IGZhbHNlO1xuICBvd25lciA9IG51bGw7XG5cbiAgY29uc3RydWN0b3Iob3duZXIpIHtcbiAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgdGhpcy5tZXRyaWNzID0gb3duZXIubWV0cmljcztcbiAgICB0aGlzLmxheW91dCA9IG93bmVyLmxheW91dDtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLm93bmVyLm1ldHJpY3M7XG4gICAgdGhpcy5sYXlvdXQgPSB0aGlzLm93bmVyLmxheW91dDtcblxuICAgIC8vIFZlcnRpY2VzIGFycmF5IGZvciBhbGwgc2VsZWN0ZWQgbGluZXNcbiAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5saW5lc0NvdW50ICogNCAqIDIpO1xuXG4gICAgaWYgKHRoaXMucmFuZ2VbMV0gIT09IG51bGwpXG4gICAgdGhpcy5idWlsZFZlcnRpY2VzKCk7XG5cbiAgICB0aGlzLmluZGljZXMgPSBjcmVhdGVJbmRpY2VzKHtcbiAgICAgIGNsb2Nrd2lzZTogdHJ1ZSxcbiAgICAgIHR5cGU6ICd1aW50MTYnLFxuICAgICAgY291bnQ6dGhpcy5sYXlvdXQubGluZXNDb3VudFxuICAgIH0pO1xuXG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgdGhpcy5pbmRleEJ1ZmZlciA9IHRydWU7XG4gIH1cblxuICBzZXRSYW5nZShzdGFydCA9IG51bGwsIGVuZCA9IG51bGwpIHtcblxuICAgIGNvbnN0IHtnbHlwaHN9ID0gdGhpcy5vd25lci5sYXlvdXQ7XG5cbiAgICBpZiAoc3RhcnQgPT09IG51bGwpIHN0YXJ0ID0gdGhpcy5yYW5nZVswXTtcbiAgICBpZiAoZW5kID09PSBudWxsKSBlbmQgPSB0aGlzLnJhbmdlWzFdO1xuXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwO1xuICAgIGlmIChlbmQgPCAwKSBlbmQgPSAwO1xuXG4gICAgaWYgKHN0YXJ0ID4gZ2x5cGhzLmxlbmd0aCAtMSlzdGFydCA9IGdseXBocy5sZW5ndGggLSAxO1xuICAgIGlmIChlbmQgPiBnbHlwaHMubGVuZ3RoIC0gMSkgZW5kID0gZ2x5cGhzLmxlbmd0aCAtIDE7XG5cbiAgICBpZiAoZW5kID09PSBmYWxzZSkgZW5kID0gbnVsbDtcblxuICAgIHRoaXMucmFuZ2UgPSBbc3RhcnQsIGVuZF07XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGJ1aWxkVmVydGljZXMoKSB7XG5cbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLm93bmVyLmxheW91dC5tZXRyaWNzO1xuICAgIC8vIFNlbGVjdCByYW5nZVxuICAgIGxldCBzdGFydCA9IHRoaXMubGF5b3V0LmdseXBoc1tNYXRoLm1pbi5hcHBseShudWxsLHRoaXMucmFuZ2UpXTtcbiAgICBsZXQgZW5kID0gdGhpcy5sYXlvdXQuZ2x5cGhzW01hdGgubWF4LmFwcGx5KG51bGwsdGhpcy5yYW5nZSldO1xuXG5cbiAgICAvLyBJdGVyYXRlIHRob3VnaHQgYWxsIGxpbmVzXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxheW91dC5saW5lc0NvdW50OyArK2kpIHtcbiAgICAgIGxldCBsZXR0ZXJDb3VudCA9IDA7IC8vIGxldHRlcnMgcGFzc2VkXG4gICAgICBsZXQgZmlyc3RMZXR0ZXIgPSBudWxsOyAvLyBmaXJzdCBsZXR0ZXIgb24gdGhpcyBsaW5lXG4gICAgICBsZXQgbGFzdExldHRlciA9IG51bGw7IC8vIGxhc3QgbGV0dGVyIG9uIHRoaXMgbGluZVxuXG5cbiAgICAgIGlmIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyB0aGlzLm1ldHJpY3MubGluZUhlaWdodCA8IHN0YXJ0LnBvc2l0aW9uWzFdKSBjb250aW51ZTtcbiAgICAgIGlmIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyB0aGlzLm1ldHJpY3MubGluZUhlaWdodCA+IGVuZC5wb3NpdGlvblsxXSkgY29udGludWU7XG5cbiAgICAgIC8vIFRha2UgZXZlcnkgd29yZCwgaWYgaXQncyBsYXN0IG9yIGZpcnN0IG9uIGxpbmUgLSBjaGFuZ2UgYm91bmRzIGxldHRlcnNcbiAgICAgIHRoaXMubGF5b3V0LndvcmRzTWV0cmljcy5tYXAod29yZCA9PiB7XG5cbiAgICAgICAgaWYgKHdvcmQueSA9PT0gdGhpcy5sYXlvdXQuc3RhcnRZICsgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCkpIHtcbiAgICAgICAgICBpZiAoZmlyc3RMZXR0ZXIgPT09IG51bGwpIGZpcnN0TGV0dGVyID0gbGV0dGVyQ291bnQ7XG4gICAgICAgICAgbGFzdExldHRlciA9IGxldHRlckNvdW50ICsgd29yZC53b3JkLmxlbmd0aCAtIDE7XG4gICAgICAgIH1cblxuICAgICAgICBsZXR0ZXJDb3VudCArPSB3b3JkLndvcmQubGVuZ3RoO1xuICAgICAgfSk7XG5cblxuXG4gICAgICAvLyBCb3VuZHMgbGV0dGVycyBmb3IgY3VycmVudCBsaW5lXG4gICAgICBsZXQgc3RhcnRMaW5lTGV0dGVyID0gdGhpcy5sYXlvdXQuZ2x5cGhzW2ZpcnN0TGV0dGVyXTtcbiAgICAgIGxldCBlbmRMaW5lTGV0dGVyID0gdGhpcy5sYXlvdXQuZ2x5cGhzW2xhc3RMZXR0ZXJdO1xuXG4gICAgICAvLyBJZiB0aGUgc3RhcnQgb3IgZW5kIHJhbmdlIGlzIG9uIHRoaXMgbGluZSwgY2hhbmdlIGJvdW5kcyBmb3IgdGhlbVxuICAgICAgaWYgKHN0YXJ0LnBvc2l0aW9uWzFdID09PSAgc3RhcnRMaW5lTGV0dGVyLnBvc2l0aW9uWzFdKSBzdGFydExpbmVMZXR0ZXIgPSBzdGFydDtcbiAgICAgIGlmIChlbmQucG9zaXRpb25bMV0gPT09IGVuZExpbmVMZXR0ZXIucG9zaXRpb25bMV0pIGVuZExpbmVMZXR0ZXIgPSBlbmQ7XG5cbiAgICAgIC8vIFdlIHVzZSBvZmZzZXQgdG8gYXZvaWQgc2VsZWN0cyBvdmVybGFwcGluZ1xuICAgICAgY29uc3Qgb2Zmc2V0ID0gKHRoaXMubWV0cmljcy5saW5lSGVpZ2h0IC0gdGhpcy5tZXRyaWNzLmFzY2VudCkgLyAyO1xuXG4gICAgICAvLyBBZGQgcG9zaXRpb25zIHRvIGFycmF5XG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCldID0gc3RhcnRMaW5lTGV0dGVyLnZlcnRpY2VzWzBdO1xuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgMV0gPSBzdGFydExpbmVMZXR0ZXIudmVydGljZXNbMV0gKyBvZmZzZXQ7XG5cbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDJdID0gZW5kTGluZUxldHRlci52ZXJ0aWNlc1syXTtcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDNdID0gZW5kTGluZUxldHRlci52ZXJ0aWNlc1szXSAgICsgb2Zmc2V0O1xuXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyA0XSA9IGVuZExpbmVMZXR0ZXIudmVydGljZXNbNF07XG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyA1XSA9IGVuZExpbmVMZXR0ZXIudmVydGljZXNbNV0gIC0gb2Zmc2V0O1xuXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyA2XSA9IHN0YXJ0TGluZUxldHRlci52ZXJ0aWNlc1s2XTtcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDddID0gc3RhcnRMaW5lTGV0dGVyLnZlcnRpY2VzWzddICAtIG9mZnNldDtcblxuICAgIH1cblxuICB9XG5cbiAgZ2V0Q2xvc2VzdEdseXBoKHgsIHkpIHtcbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLm93bmVyLm1ldHJpY3M7XG4gICAgdGhpcy5sYXlvdXQgPSB0aGlzLm93bmVyLmxheW91dDtcblxuICAgIGNvbnN0IHsgZ2x5cGhzIH0gPSB0aGlzLm93bmVyLmxheW91dDtcblxuICAgIGNvbnN0IGxpbmVIZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcbiAgICBjb25zdCBzZWxlY3RpbmdMaW5lID0gTWF0aC5mbG9vcih5IC8gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQpO1xuICAgIGNvbnN0IHNlbGVjdGluZ0xpbmVZID0gc2VsZWN0aW5nTGluZSAqIGxpbmVIZWlnaHQ7XG4gICAgbGV0IGxhc3RHbHlwaE9uTGluZSA9IGdseXBoc1tnbHlwaHMubGVuZ3RoIC0gMV07XG4gICAgbGV0IGZpcnN0R2x5cGhPbkxpbmUgPSBudWxsO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnbHlwaHMubGVuZ3RoIDsgKytpKSB7XG5cbiAgICAgIGxldCBnbHlwaCA9IGdseXBoc1tpXTtcblxuICAgICAgaWYgKGdseXBoLm1ldHJpY3MueSA9PT0gc2VsZWN0aW5nTGluZVkgKyBsaW5lSGVpZ2h0KSB7XG4gICAgICAgIGxhc3RHbHlwaE9uTGluZSA9IGdseXBoO1xuICAgICAgICBpZiAoeCA8IGdseXBoLm1ldHJpY3MueCArIGdseXBoLm1ldHJpY3Mud2lkdGggLyAyKSB7XG4gICAgICAgICAgaWYgKGkgPT09IDApIHJldHVybiAtMTtcblxuICAgICAgICAgIHJldHVybiBnbHlwaHNbaSAtIDFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGxhc3RHbHlwaE9uTGluZTtcblxuICB9XG5cbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcbiAgICAvLyBPbmx5IGxlZnQgbW91c2UgYnV0dG9uXG4gICAgaWYgKGV2ZW50LmRhdGEuYnV0dG9uICE9PSAwKSByZXR1cm47XG5cbiAgICBsZXQgcG9zaXRpb24gPSBldmVudC5kYXRhLmdsb2JhbDtcbiAgICBwb3NpdGlvbiA9IHRoaXMudHJhbnNmb3JtUG9zaXRpb24ocG9zaXRpb24pO1xuXG4gICAgY29uc3QgY2xvc2VzdExldHRlciA9IHRoaXMuZ2V0Q2xvc2VzdEdseXBoKHBvc2l0aW9uLnggLCBwb3NpdGlvbi55KTtcblxuICAgIGxldCBpbmRleCA9IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5pbmRleE9mKGNsb3Nlc3RMZXR0ZXIpO1xuXG4gICAgdGhpcy5zZXRSYW5nZShpbmRleCArIDEsIGZhbHNlICk7XG4gIH1cblxuICBvbk1vdXNlTW92ZShldmVudCkge1xuICAgIGxldCBwb3NpdGlvbiA9IGV2ZW50LmRhdGEuZ2xvYmFsO1xuICAgIHBvc2l0aW9uID0gdGhpcy50cmFuc2Zvcm1Qb3NpdGlvbihwb3NpdGlvbik7XG5cbiAgICBjb25zdCBjbG9zZXN0TGV0dGVyID0gdGhpcy5nZXRDbG9zZXN0R2x5cGgocG9zaXRpb24ueCAgLCBwb3NpdGlvbi55KTtcbiAgICBsZXQgaW5kZXggPSB0aGlzLm93bmVyLmxheW91dC5nbHlwaHMuaW5kZXhPZihjbG9zZXN0TGV0dGVyKTtcblxuICAgIHRoaXMuc2V0UmFuZ2UobnVsbCwgaW5kZXggKyAxKTtcbiAgfVxuXG4gIG9uTW91c2VVcChldmVudCkge1xuXG4gICAgLy8gT25seSBsZWZ0IG1vdXNlIGJ1dHRvblxuICAgIGlmIChldmVudC5kYXRhLmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xuXG4gICAgbGV0IHBvc2l0aW9uID0gZXZlbnQuZGF0YS5nbG9iYWw7XG4gICAgcG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybVBvc2l0aW9uKHBvc2l0aW9uKTtcblxuICAgIGNvbnN0IGNsb3Nlc3RMZXR0ZXIgPSB0aGlzLmdldENsb3Nlc3RHbHlwaChwb3NpdGlvbi54ICwgcG9zaXRpb24ueSk7XG5cblxuICAgIC8vIC0xIG1lYW5zIHRoYXQgd2UgYXQgdGhlIHN0YXJ0IG9mIHRoZSBsaW5lXG4gICAgaWYgKGNsb3Nlc3RMZXR0ZXIgPT09IC0xKSB7XG4gICAgICB0aGlzLm93bmVyLmlucHV0LmdseXBoSW5kZXggPSBjbG9zZXN0TGV0dGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm93bmVyLmlucHV0LmdseXBoSW5kZXggPSB0aGlzLm93bmVyLmxheW91dC5nbHlwaHMuaW5kZXhPZihjbG9zZXN0TGV0dGVyKTtcbiAgICB9XG4gIH1cblxuICB0cmFuc2Zvcm1Qb3NpdGlvbihwb3NpdGlvbikge1xuICAgIGNvbnN0IG93bmVyUG9zaXRpb24gPSB0aGlzLm93bmVyLmdldEdsb2JhbFBvc2l0aW9uKCk7XG4gICAgY29uc3QgdHJhbnNmb3JtID0gdGhpcy5vd25lci53b3JsZFRyYW5zZm9ybTtcblxuICAgIHBvc2l0aW9uLnggLT0gdHJhbnNmb3JtLnR4O1xuICAgIHBvc2l0aW9uLnkgLT0gdHJhbnNmb3JtLnR5O1xuXG4gICAgcG9zaXRpb24ueCA9IHBvc2l0aW9uLnggLyB0cmFuc2Zvcm0uYTtcbiAgICBwb3NpdGlvbi55ID0gcG9zaXRpb24ueSAvIHRyYW5zZm9ybS5kO1xuXG4gICAgcmV0dXJuIHBvc2l0aW9uO1xuICB9XG5cbiAgY2xlYXJTZWxlY3RlZFJhbmdlKCkge1xuXG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLnJhbmdlO1xuXG4gICAgLy8gSWYgdXNlciBzZWxlY3RlZCBzb21lIHRleHQsIHJlbW92ZSBpdFxuICAgIGlmIChyYW5nZVsxXSAhPT0gbnVsbCkge1xuICAgICAgdGhpcy5vd25lci5pbnB1dC5nbHlwaEluZGV4ID0gTWF0aC5taW4ocmFuZ2VbMF0gLSAxLCByYW5nZVsxXSAtIDEpO1xuICAgICAgY29uc3QgcmVtb3ZlSW5kZXggPSBNYXRoLm1pbi5hcHBseShudWxsLCByYW5nZSk7XG4gICAgICBjb25zdCByZW1vdmVMZW5ndGggPSBNYXRoLmFicyhyYW5nZVswXSAtIHJhbmdlWzFdKTtcbiAgICAgIHRoaXMub3duZXIuc2VsZWN0LnNldFJhbmdlKDAsZmFsc2UpO1xuICAgICAgdGhpcy5vd25lci5yZW1vdmVTdHJpbmcocmVtb3ZlSW5kZXgsIHJlbW92ZUxlbmd0aCk7XG4gICAgICB0aGlzLm93bmVyLmlucHV0LnNob3coKTtcbiAgICB9XG4gIH1cblxuICBleHBhbmQoZGlyZWN0aW9uKSB7XG4gICAgdGhpcy5yYW5nZVsxXSArPSBkaXJlY3Rpb247XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9zZWxlY3QuanMiLCJ2YXIgZHR5cGUgPSByZXF1aXJlKCdkdHlwZScpXG52YXIgYW5BcnJheSA9IHJlcXVpcmUoJ2FuLWFycmF5JylcbnZhciBpc0J1ZmZlciA9IHJlcXVpcmUoJ2lzLWJ1ZmZlcicpXG5cbnZhciBDVyA9IFswLCAyLCAzXVxudmFyIENDVyA9IFsyLCAxLCAzXVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNyZWF0ZVF1YWRFbGVtZW50cyhhcnJheSwgb3B0KSB7XG4gICAgLy9pZiB1c2VyIGRpZG4ndCBzcGVjaWZ5IGFuIG91dHB1dCBhcnJheVxuICAgIGlmICghYXJyYXkgfHwgIShhbkFycmF5KGFycmF5KSB8fCBpc0J1ZmZlcihhcnJheSkpKSB7XG4gICAgICAgIG9wdCA9IGFycmF5IHx8IHt9XG4gICAgICAgIGFycmF5ID0gbnVsbFxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb3B0ID09PSAnbnVtYmVyJykgLy9iYWNrd2FyZHMtY29tcGF0aWJsZVxuICAgICAgICBvcHQgPSB7IGNvdW50OiBvcHQgfVxuICAgIGVsc2VcbiAgICAgICAgb3B0ID0gb3B0IHx8IHt9XG5cbiAgICB2YXIgdHlwZSA9IHR5cGVvZiBvcHQudHlwZSA9PT0gJ3N0cmluZycgPyBvcHQudHlwZSA6ICd1aW50MTYnXG4gICAgdmFyIGNvdW50ID0gdHlwZW9mIG9wdC5jb3VudCA9PT0gJ251bWJlcicgPyBvcHQuY291bnQgOiAxXG4gICAgdmFyIHN0YXJ0ID0gKG9wdC5zdGFydCB8fCAwKSBcblxuICAgIHZhciBkaXIgPSBvcHQuY2xvY2t3aXNlICE9PSBmYWxzZSA/IENXIDogQ0NXLFxuICAgICAgICBhID0gZGlyWzBdLCBcbiAgICAgICAgYiA9IGRpclsxXSxcbiAgICAgICAgYyA9IGRpclsyXVxuXG4gICAgdmFyIG51bUluZGljZXMgPSBjb3VudCAqIDZcblxuICAgIHZhciBpbmRpY2VzID0gYXJyYXkgfHwgbmV3IChkdHlwZSh0eXBlKSkobnVtSW5kaWNlcylcbiAgICBmb3IgKHZhciBpID0gMCwgaiA9IDA7IGkgPCBudW1JbmRpY2VzOyBpICs9IDYsIGogKz0gNCkge1xuICAgICAgICB2YXIgeCA9IGkgKyBzdGFydFxuICAgICAgICBpbmRpY2VzW3ggKyAwXSA9IGogKyAwXG4gICAgICAgIGluZGljZXNbeCArIDFdID0gaiArIDFcbiAgICAgICAgaW5kaWNlc1t4ICsgMl0gPSBqICsgMlxuICAgICAgICBpbmRpY2VzW3ggKyAzXSA9IGogKyBhXG4gICAgICAgIGluZGljZXNbeCArIDRdID0gaiArIGJcbiAgICAgICAgaW5kaWNlc1t4ICsgNV0gPSBqICsgY1xuICAgIH1cbiAgICByZXR1cm4gaW5kaWNlc1xufVxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9xdWFkLWluZGljZXMvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkdHlwZSkge1xuICBzd2l0Y2ggKGR0eXBlKSB7XG4gICAgY2FzZSAnaW50OCc6XG4gICAgICByZXR1cm4gSW50OEFycmF5XG4gICAgY2FzZSAnaW50MTYnOlxuICAgICAgcmV0dXJuIEludDE2QXJyYXlcbiAgICBjYXNlICdpbnQzMic6XG4gICAgICByZXR1cm4gSW50MzJBcnJheVxuICAgIGNhc2UgJ3VpbnQ4JzpcbiAgICAgIHJldHVybiBVaW50OEFycmF5XG4gICAgY2FzZSAndWludDE2JzpcbiAgICAgIHJldHVybiBVaW50MTZBcnJheVxuICAgIGNhc2UgJ3VpbnQzMic6XG4gICAgICByZXR1cm4gVWludDMyQXJyYXlcbiAgICBjYXNlICdmbG9hdDMyJzpcbiAgICAgIHJldHVybiBGbG9hdDMyQXJyYXlcbiAgICBjYXNlICdmbG9hdDY0JzpcbiAgICAgIHJldHVybiBGbG9hdDY0QXJyYXlcbiAgICBjYXNlICdhcnJheSc6XG4gICAgICByZXR1cm4gQXJyYXlcbiAgICBjYXNlICd1aW50OF9jbGFtcGVkJzpcbiAgICAgIHJldHVybiBVaW50OENsYW1wZWRBcnJheVxuICB9XG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vZHR5cGUvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwidmFyIHN0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmdcblxubW9kdWxlLmV4cG9ydHMgPSBhbkFycmF5XG5cbmZ1bmN0aW9uIGFuQXJyYXkoYXJyKSB7XG4gIHJldHVybiAoXG4gICAgICAgYXJyLkJZVEVTX1BFUl9FTEVNRU5UXG4gICAgJiYgc3RyLmNhbGwoYXJyLmJ1ZmZlcikgPT09ICdbb2JqZWN0IEFycmF5QnVmZmVyXSdcbiAgICB8fCBBcnJheS5pc0FycmF5KGFycilcbiAgKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2FuLWFycmF5L2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIi8qIVxuICogRGV0ZXJtaW5lIGlmIGFuIG9iamVjdCBpcyBhIEJ1ZmZlclxuICpcbiAqIEBhdXRob3IgICBGZXJvc3MgQWJvdWtoYWRpamVoIDxodHRwczovL2Zlcm9zcy5vcmc+XG4gKiBAbGljZW5zZSAgTUlUXG4gKi9cblxuLy8gVGhlIF9pc0J1ZmZlciBjaGVjayBpcyBmb3IgU2FmYXJpIDUtNyBzdXBwb3J0LCBiZWNhdXNlIGl0J3MgbWlzc2luZ1xuLy8gT2JqZWN0LnByb3RvdHlwZS5jb25zdHJ1Y3Rvci4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogIT0gbnVsbCAmJiAoaXNCdWZmZXIob2JqKSB8fCBpc1Nsb3dCdWZmZXIob2JqKSB8fCAhIW9iai5faXNCdWZmZXIpXG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyIChvYmopIHtcbiAgcmV0dXJuICEhb2JqLmNvbnN0cnVjdG9yICYmIHR5cGVvZiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIgPT09ICdmdW5jdGlvbicgJiYgb2JqLmNvbnN0cnVjdG9yLmlzQnVmZmVyKG9iailcbn1cblxuLy8gRm9yIE5vZGUgdjAuMTAgc3VwcG9ydC4gUmVtb3ZlIHRoaXMgZXZlbnR1YWxseS5cbmZ1bmN0aW9uIGlzU2xvd0J1ZmZlciAob2JqKSB7XG4gIHJldHVybiB0eXBlb2Ygb2JqLnJlYWRGbG9hdExFID09PSAnZnVuY3Rpb24nICYmIHR5cGVvZiBvYmouc2xpY2UgPT09ICdmdW5jdGlvbicgJiYgaXNCdWZmZXIob2JqLnNsaWNlKDAsIDApKVxufVxuXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L2lzLWJ1ZmZlci9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJcblxuY2xhc3MgSW5wdXQge1xuXG4gIF9lbmFibGVkID0gZmFsc2U7XG4gIG93bmVyID0gbnVsbDtcblxuICBfZ2x5cGhJbmRleCA9IC0xO1xuXG4gIHNldCBnbHlwaEluZGV4KHZhbHVlKSB7XG5cbiAgICB0aGlzLl9nbHlwaEluZGV4ID0gdmFsdWU7XG5cbiAgICBpZiAodGhpcy5fZ2x5cGhJbmRleCA8IC0xKVxuICAgICAgdGhpcy5fZ2x5cGhJbmRleCA9IC0xO1xuXG4gICAgaWYgKHRoaXMuX2dseXBoSW5kZXggPiB0aGlzLm93bmVyLmxheW91dC5nbHlwaHMubGVuZ3RoKVxuICAgICAgdGhpcy5fZ2x5cGhJbmRleCA9IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5sZW5ndGg7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgZ2V0IGdseXBoSW5kZXgoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dseXBoSW5kZXg7XG4gIH1cblxuICBzZXQgZW5hYmxlZCh2YWx1ZSkge1xuICAgIHRoaXMuX2VuYWJsZWQgPSB2YWx1ZTtcbiAgICBpZiAodGhpcy5fZW5hYmxlZCkge1xuICAgICAgdGhpcy5lbmFibGUoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaXNhYmxlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IGVuYWJsZWQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2VuYWJsZWRcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKG93bmVyKSB7XG4gICAgdGhpcy5vd25lciA9IG93bmVyO1xuICAgIHRoaXMubWV0cmljcyA9IG93bmVyLm1ldHJpY3M7XG4gICAgdGhpcy5sYXlvdXQgPSBvd25lci5sYXlvdXQ7XG4gICAgdGhpcy5jYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImNhbnZhc1wiKVswXVxuXG4gICAgdGhpcy5jcmVhdGVGaWVsZCgpO1xuICAgIHRoaXMuZGlzYWJsZSgpO1xuICB9XG5cbiAgZW5hYmxlKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kKHRoaXMuaW5wdXRFbGVtZW50KTtcbiAgfVxuXG4gIGRpc2FibGUoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgIGlmIChkb2N1bWVudC5ib2R5LmNvbnRhaW5zKHRoaXMuaW5wdXRFbGVtZW50KSlcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5pbnB1dEVsZW1lbnQpO1xuICB9XG5cbiAgaGlkZSgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICB9XG5cbiAgc2hvdygpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5vcGFjaXR5ID0gJzEnO1xuICB9XG5cbiAgY3JlYXRlRmllbGQoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XG5cbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBPYmplY3QudmFsdWVzKHRoaXMub3duZXIudHJhbnNmb3JtLndvcmxkVHJhbnNmb3JtKS5zbGljZSgwLCA2KTtcblxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICd0cmFuc3BhcmVudCc7XG4gICAgLy90aGlzLmlucHV0RWxlbWVudC5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSAncmdiYSgwLDAsMCwwLjMpJztcblxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmNvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5ib3JkZXIgPSBcIm5vbmVcIjtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuY29udGFpbiA9ICdzdHJpY3QnO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnpJbmRleCA9IDI7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLm91dGxpbmUgPSBcIm5vbmVcIjtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5jb2xvciA9IHRoaXMub3duZXIuc3R5bGUuZmlsbDtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW49IFwibGVmdCB0b3BcIjtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgbWF0cml4KCR7dHJhbnNmb3JtLmpvaW4oXCIsIFwiKX0pYDtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5wYWRkaW5nID0gXCIwXCI7XG5cbiAgICB0aGlzLmFkZEV2ZW50KFwiYmx1clwiLCAoZXZlbnQpID0+IHRoaXMuaW5wdXRFbGVtZW50LmZvY3VzKCkpO1xuICAgIHRoaXMuYWRkRXZlbnQoXCJpbnB1dFwiLCAoZXZlbnQpID0+IHRoaXMub25JbnB1dChldmVudCkpO1xuICAgIHRoaXMuYWRkRXZlbnQoXCJrZXlkb3duXCIsIChldmVudCkgPT4gdGhpcy5vbktleWRvd24oZXZlbnQpKVxuICAgIHRoaXMuYWRkRXZlbnQoXCJwYXN0ZVwiLCAoZXZlbnQpID0+IHRoaXMucGFzdGVGcm9tQ2xpcGJvYXJkKGV2ZW50KSlcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcblxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMub3duZXIubWV0cmljcztcbiAgICB0aGlzLmxheW91dCA9IHRoaXMub3duZXIubGF5b3V0O1xuXG4gICAgY29uc3Qge2dseXBoc30gPSB0aGlzLm93bmVyLmxheW91dDtcblxuICAgIGlmICh0aGlzLmdseXBoSW5kZXggPj0gZ2x5cGhzLmxlbmd0aCkge1xuICAgICAgdGhpcy5nbHlwaEluZGV4ID0gZ2x5cGhzLmxlbmd0aCAtIDE7XG4gICAgfVxuXG4gICAgLy8gRGVmYXVsdCBjYXJldCBwbGFjZSAtIHN0YXJ0IG9mIHRoZSBpbnB1dCBmaWVsZCBUT0RPIGltcGxlbWVudCBhbGlnblxuICAgIGxldCBnbHlwaE1ldHJpY3MgPSB7XG4gICAgICB4OiB0aGlzLm93bmVyLnBvc2l0aW9uLngsXG4gICAgICB5OiB0aGlzLm93bmVyLnBvc2l0aW9uLnlcbiAgICB9O1xuXG4gICAgLy8gaWYgc3RyaW5nIGlzIGVtcHR5LCBwdXQgY2FyZXQgYXQgdGhlIGJlZ2lubmluZ1xuICAgIGlmICh0aGlzLm93bmVyLmxheW91dC5nbHlwaHMubGVuZ3RoID09PSAtMSkge1xuXG4gICAgICAvLyBpZiB3ZSBvbiB0aGUgbGFzdCBnbHlwaCwgcGxhY2UgY2FyZXQgYWZ0ZXIgaXRcbiAgICB9ZWxzZSBpZiAodGhpcy5nbHlwaEluZGV4ID09PSBnbHlwaHMubGVuZ3RoKSB7XG5cbiAgICAgIGNvbnN0IGxhc3RHbHlwaCA9IGdseXBoc1tnbHlwaHMubGVuZ3RoIC0gMV07XG5cbiAgICAgIGdseXBoTWV0cmljcy54ICs9IGxhc3RHbHlwaC5tZXRyaWNzLnggKyBsYXN0R2x5cGgubWV0cmljcy53aWR0aDtcbiAgICAgIGdseXBoTWV0cmljcy55ICs9IGxhc3RHbHlwaC5tZXRyaWNzLnk7XG5cbiAgICAgIC8vIGlmIGNhcmV0IGluIHRoZSBtaWRkbGUgb2YgdGhlIHRleHRcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ2x5cGhJbmRleCAhPT0gLTEpIHtcbiAgICAgIGNvbnN0IHNlbGVjdGVkR2x5cGggPSBnbHlwaHNbdGhpcy5nbHlwaEluZGV4XTtcblxuICAgICAgZ2x5cGhNZXRyaWNzLnggKz0gc2VsZWN0ZWRHbHlwaC5tZXRyaWNzLnggKyBzZWxlY3RlZEdseXBoLm1ldHJpY3Mud2lkdGg7XG4gICAgICBnbHlwaE1ldHJpY3MueSArPSBzZWxlY3RlZEdseXBoLm1ldHJpY3MueTtcbiAgICB9IGVsc2Uge1xuXG4gICAgICBnbHlwaE1ldHJpY3MueSArPSB0aGlzLm93bmVyLnN0eWxlLmxpbmVIZWlnaHQ7XG4gICAgfVxuXG4gICAgY29uc3QgdHJhbnNmb3JtID0gT2JqZWN0LnZhbHVlcyh0aGlzLm93bmVyLnRyYW5zZm9ybS53b3JsZFRyYW5zZm9ybSkuc2xpY2UoMCwgNik7XG5cblxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBtYXRyaXgoJHt0cmFuc2Zvcm0uam9pbihcIiwgXCIpfSlgO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgXCJweFwiO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmZvbnRTaXplID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyBcInB4XCI7XG5cbiAgICB0aGlzLnNldFBvc2l0aW9uKGdseXBoTWV0cmljcy54ICwgZ2x5cGhNZXRyaWNzLnkpO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LmZvY3VzKCk7XG4gIH1cblxuICBvbklucHV0KGV2ZW50KSB7XG5cbiAgICBjb25zdCB7IHJhbmdlIH0gPSB0aGlzLm93bmVyLnNlbGVjdDtcblxuICAgIHRoaXMub3duZXIuc2VsZWN0LmNsZWFyU2VsZWN0ZWRSYW5nZSgpO1xuXG4gICAgZXZlbnQudGFyZ2V0LnZhbHVlID0gXCJcIjtcblxuICAgIGlmIChldmVudC5kYXRhID09PSBudWxsKSByZXR1cm47XG5cbiAgICAvLyBDb250ZW50IHdlIGFyZSBhYm91dCB0byBhZGRcbiAgICBsZXQgdGV4dFRvQWRkID0gZXZlbnQuZGF0YTtcblxuICAgIGlmICh0aGlzLm93bmVyLmNvbmZpZy51cHBlcmNhc2UpIHtcbiAgICAgIHRleHRUb0FkZCA9IHRleHRUb0FkZC50b1VwcGVyQ2FzZSgpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm93bmVyLmNvbmZpZy5sb3dlcmNhc2UpIHtcbiAgICAgIHRleHRUb0FkZCA9IHRleHRUb0FkZC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8vIElmIHRleHQgaXMgZW1wdHkgbm93XG4gICAgaWYgKHRoaXMub3duZXIubGF5b3V0LmdseXBocy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMub3duZXIudGV4dCA9IHRleHRUb0FkZDtcbiAgICAgIHRoaXMuZ2x5cGhJbmRleCA9IDE7XG5cbiAgICAvLyBJZiBjYXJldCBpcyBhdCB0aGUgZW5kIG9mIHRoZSB0ZXh0XG4gICAgfSBlbHNlIGlmICh0aGlzLmdseXBoSW5kZXggPT09IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLm93bmVyLnRleHQgKz0gdGV4dFRvQWRkO1xuICAgICAgdGhpcy5nbHlwaEluZGV4Kys7XG5cbiAgICAvLyBJZiB3ZSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBsaW5lXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3duZXIuaW5zZXJ0U3RyaW5nKCsrdGhpcy5nbHlwaEluZGV4LCB0ZXh0VG9BZGQpO1xuICAgICAgLy90aGlzLmdseXBoSW5kZXgrKztcbiAgICB9XG4gICAgdGhpcy5vd25lci5zZWxlY3Quc2V0UmFuZ2UoMCwgZmFsc2UpO1xuXG4gIH1cblxuICBvbktleWRvd24oZXZlbnQpIHtcblxuICAgIGNvbnN0IHtyYW5nZX0gPSB0aGlzLm93bmVyLnNlbGVjdDtcblxuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XG4gICAgICBjYXNlIFwiQXJyb3dVcFwiOlxuICAgICAgICB0aGlzLm1vdmVVcCgpO1xuICAgICAgICBicmVhaztcblxuXG4gICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XG4gICAgICAgIHRoaXMubW92ZURvd24oKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcblxuICAgICAgICAvLyBNb3ZlIGJ5IHdvcmRcbiAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcblxuICAgICAgICAgIHRoaXMubW92ZUJ5V29yZExlZnQoKVxuXG4gICAgICAgICAgLy8gU2VsZWN0XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcblxuICAgICAgICAgIHRoaXMubW92ZVdpdGhTZWxlY3RMZWZ0KClcblxuICAgICAgICAgIC8vIEp1c3QgbW92ZSBjdXJzb3JcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm93bmVyLnNlbGVjdC5zZXRSYW5nZSgwLCBmYWxzZSk7XG4gICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgdGhpcy5nbHlwaEluZGV4LS07XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIkFycm93UmlnaHRcIjpcblxuICAgICAgICAvLyBNb3ZlIGJ5IHdvcmRcbiAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcbiAgICAgICAgIHRoaXMubW92ZUJ5V29yZFJpZ2h0KCk7XG4gICAgICAgIC8vIFNlbGVjdFxuICAgICAgICB9IGVsc2UgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgICAgdGhpcy5tb3ZlV2l0aFNlbGVjdFJpZ2h0KClcblxuICAgICAgICAvLyBKdXN0IG1vdmUgaW5kZXhcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLm93bmVyLnNlbGVjdC5zZXRSYW5nZSgwLCBmYWxzZSk7XG4gICAgICAgICAgdGhpcy5zaG93KCk7XG4gICAgICAgICAgdGhpcy5nbHlwaEluZGV4Kys7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIkJhY2tzcGFjZVwiOlxuICAgICAgICBpZiAocmFuZ2VbMV0gIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLm93bmVyLnNlbGVjdC5jbGVhclNlbGVjdGVkUmFuZ2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3duZXIucmVtb3ZlU3RyaW5nKHRoaXMuZ2x5cGhJbmRleC0tLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIkRlbGV0ZVwiOlxuICAgICAgICBpZiAocmFuZ2VbMV0gIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLm93bmVyLnNlbGVjdC5jbGVhclNlbGVjdGVkUmFuZ2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3duZXIucmVtb3ZlU3RyaW5nKHRoaXMuZ2x5cGhJbmRleCArIDEsIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIFNlbGVjdCBhbGxcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICAgdGhpcy5vd25lci5zZWxlY3Quc2V0UmFuZ2UoMCx0aGlzLm93bmVyLnRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcblxuICAgICAgLy8gQ29weSB0byBjbGlwYm9hcmRcbiAgICAgIGNhc2UgXCJjXCI6XG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICAgdGhpcy5jb3B5VG9DbGlwYm9hcmQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuXG4gICAgICAvLyBDdXRcbiAgICAgIGNhc2UgXCJ4XCI6XG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICAgdGhpcy5jb3B5VG9DbGlwYm9hcmQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IFwiIFwiO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcblxuICB9XG5cbiAgc2V0UG9zaXRpb24oeCwgeSkge1xuXG4gICAgY29uc3Qge2EgOiBzY2FsZVgsIGQ6IHNjYWxlWX0gPSB0aGlzLm93bmVyLnRyYW5zZm9ybS53b3JsZFRyYW5zZm9ybTtcbiAgICBjb25zdCB7eCA6IGxvY2FsWCwgeTogbG9jYWxZIH0gPSB0aGlzLm93bmVyLnBvc2l0aW9uO1xuXG4gICAgbGV0IGxpbmVIZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodCAqIHNjYWxlWTtcblxuICAgIHkgKj0gc2NhbGVZO1xuICAgIHggKj0gc2NhbGVYO1xuXG4gICAgeSAtPSBsaW5lSGVpZ2h0O1xuXG4gICAgeSAtPSBsb2NhbFkgKiBzY2FsZVk7XG4gICAgeCAtPSBsb2NhbFggKiBzY2FsZVg7XG5cbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7eH1weGA7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUudG9wID0gYCR7eX1weGA7XG5cbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IFwiIFwiO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcblxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IE9iamVjdC52YWx1ZXModGhpcy5nZXRUcmFuc2Zvcm0oKSkuc2xpY2UoMCwgNik7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYG1hdHJpeCgke3RyYW5zZm9ybS5qb2luKFwiLCBcIil9KWA7XG4gIH1cblxuICBnZXRUcmFuc2Zvcm0oKSB7XG4gICAgY29uc3Qgb3duZXJUcmFuc2Zvcm0gPSB0aGlzLm93bmVyLnRyYW5zZm9ybS53b3JsZFRyYW5zZm9ybTtcbiAgICBsZXQgY2FudmFzUmVjdCA9IHRoaXMuY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHJldHVybiB7Li4ub3duZXJUcmFuc2Zvcm0sIHR4OiBvd25lclRyYW5zZm9ybS50eCArIGNhbnZhc1JlY3QueCwgdHk6IG93bmVyVHJhbnNmb3JtLnR5ICsgY2FudmFzUmVjdC55fTtcbiAgfVxuXG4gIGFkZEV2ZW50KGV2ZW50LCBjYWxsYmFjaykge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIChldmVudCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcbiAgICAgICAgY2FsbGJhY2soZXZlbnQpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29weVRvQ2xpcGJvYXJkKGN1dCA9IGZhbHNlKSB7XG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLm93bmVyLnNlbGVjdC5yYW5nZTtcbiAgICBjb25zdCBzdGFydCA9IE1hdGgubWluLmFwcGx5KG51bGwsIHJhbmdlKTtcbiAgICBjb25zdCBlbmQgPSBNYXRoLm1heC5hcHBseShudWxsLCByYW5nZSk7XG5cbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IHRoaXMub3duZXIudGV4dC5zbGljZShzdGFydCwgZW5kICsgMSk7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc2VsZWN0KCk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcblxuICAgIGlmIChjdXQpIHtcbiAgICAgIHRoaXMub3duZXIuc2VsZWN0LmNsZWFyU2VsZWN0ZWRSYW5nZSgpO1xuICAgIH1cbiAgfVxuXG4gIHBhc3RlRnJvbUNsaXBib2FyZChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbGV0IHRleHQgPSBldmVudC5jbGlwYm9hcmREYXRhLmdldERhdGEoXCJ0ZXh0XCIpO1xuXG4gICAgaWYgKHRoaXMub3duZXIuY29uZmlnLnVwcGVyY2FzZSlcbiAgICAgIHRleHQgPSB0ZXh0LnRvVXBwZXJDYXNlKCk7XG5cbiAgICBpZiAodGhpcy5vd25lci5jb25maWcubG93ZXJjYXNlKVxuICAgICAgdGV4dCA9IHRleHQudG9Mb3dlckNhc2UoKTtcblxuICAgIC8vIFRPRE8gcmVtb3ZlIGFsbCB0cmFzaCBzeW1ib2xzXG5cbiAgICB0aGlzLm93bmVyLnNlbGVjdC5jbGVhclNlbGVjdGVkUmFuZ2UoKTtcblxuICAgIHRoaXMub3duZXIuaW5zZXJ0U3RyaW5nKHRoaXMuZ2x5cGhJbmRleCArIDEsIHRleHQpO1xuXG4gICAgdGhpcy5nbHlwaEluZGV4ID0gdGhpcy5nbHlwaEluZGV4ICsgdGV4dC5sZW5ndGg7XG4gIH1cblxuICBtb3ZlV2l0aFNlbGVjdFJpZ2h0KCkge1xuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5vd25lci5zZWxlY3QucmFuZ2U7XG5cbiAgICBpZiAocmFuZ2VbMV0gPT09IG51bGwpIHtcbiAgICAgICsrdGhpcy5nbHlwaEluZGV4O1xuICAgICAgcmFuZ2VbMF0gPSB0aGlzLmdseXBoSW5kZXg7XG4gICAgICByYW5nZVsxXSA9IHRoaXMuZ2x5cGhJbmRleCA7XG4gICAgfSBlbHNlIGlmIChyYW5nZVsxXSA9PT0gcmFuZ2VbMF0gJiYgdGhpcy5nbHlwaEluZGV4ID09PSByYW5nZVswXSAtIDEpIHtcbiAgICAgIHJhbmdlWzFdID0gbnVsbDtcbiAgICAgIHRoaXMuZ2x5cGhJbmRleCsrO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm93bmVyLnNlbGVjdC5leHBhbmQoMSk7XG4gICAgICB0aGlzLmdseXBoSW5kZXgrK1xuICAgIH1cblxuICAgIHRoaXMub3duZXIuc2VsZWN0LnVwZGF0ZSgpXG4gIH1cblxuICBtb3ZlV2l0aFNlbGVjdExlZnQoKSB7XG5cbiAgICBjb25zdCByYW5nZSA9IHRoaXMub3duZXIuc2VsZWN0LnJhbmdlO1xuXG4gICAgLy8gSWYgd2Ugb25seSBoYXZlIGN1cnNvciwgbm8gc2VsZWN0aW9uXG4gICAgaWYgKHJhbmdlWzFdID09PSBudWxsKSB7XG4gICAgICByYW5nZVswXSA9IHRoaXMuZ2x5cGhJbmRleDtcbiAgICAgIHJhbmdlWzFdID0gdGhpcy5nbHlwaEluZGV4IDtcblxuICAgICAgLy8gSWYgd2UgaGF2ZSBzZWxlY3RlZCBvbmUgZ2x5cGggYW5kIHdlIHJlbW92ZSBzZWxlY3Rpb25cbiAgICB9IGVsc2UgaWYgKHJhbmdlWzFdID09PSByYW5nZVswXSAmJiB0aGlzLmdseXBoSW5kZXggPT09IHJhbmdlWzBdKSB7XG4gICAgICByYW5nZVsxXSA9IG51bGw7XG5cbiAgICAgIC8vIFJlZ3VsYXIgc2VsZWN0aW5nXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3duZXIuc2VsZWN0LmV4cGFuZCgtMSk7XG4gICAgfVxuXG4gICAgdGhpcy5nbHlwaEluZGV4LS07XG5cbiAgICB0aGlzLm93bmVyLnNlbGVjdC51cGRhdGUoKTtcbiAgfVxuXG4gIG1vdmVEb3duKCkge1xuXG4gICAgdGhpcy5vd25lci5zZWxlY3Quc2V0UmFuZ2UobnVsbCwgZmFsc2UpXG5cbiAgICBjb25zdCBnbHlwaCA9IHRoaXMubGF5b3V0LmdseXBoc1tNYXRoLm1heCgwLCB0aGlzLmdseXBoSW5kZXgpXTtcblxuICAgIC8vIElmIHdlIGFyZSBvbiB0aGUgZmlyc3QgbGluZVxuICAgIGlmIChnbHlwaC5wb3NpdGlvblsxXSA9PT0gdGhpcy5sYXlvdXQuaGVpZ2h0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgbmV3R2x5cGggPSB0aGlzLm93bmVyLnNlbGVjdC5nZXRDbG9zZXN0R2x5cGgoZ2x5cGgucG9zaXRpb25bMF0sIGdseXBoLnBvc2l0aW9uWzFdKTtcbiAgICB0aGlzLmdseXBoSW5kZXggPSB0aGlzLmxheW91dC5nbHlwaHMuaW5kZXhPZihuZXdHbHlwaCk7XG4gIH1cblxuICBtb3ZlVXAoKSB7XG5cbiAgICB0aGlzLm93bmVyLnNlbGVjdC5zZXRSYW5nZShudWxsLCBmYWxzZSlcblxuICAgIGNvbnN0IGdseXBoID0gdGhpcy5sYXlvdXQuZ2x5cGhzW3RoaXMuZ2x5cGhJbmRleF07XG5cbiAgICAvLyBJZiB3ZSBhcmUgb24gdGhlIGZpcnN0IGxpbmVcbiAgICBpZiAoZ2x5cGgucG9zaXRpb25bMV0gPD0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBuZXdHbHlwaCA9IHRoaXMub3duZXIuc2VsZWN0LmdldENsb3Nlc3RHbHlwaChnbHlwaC5wb3NpdGlvblswXSwgZ2x5cGgucG9zaXRpb25bMV0gLSB0aGlzLm1ldHJpY3MubGluZUhlaWdodCAqIDIpO1xuICAgIHRoaXMuZ2x5cGhJbmRleCA9IHRoaXMubGF5b3V0LmdseXBocy5pbmRleE9mKG5ld0dseXBoKTtcblxuICB9XG5cbiAgbW92ZUJ5V29yZExlZnQoKSB7XG4gICAgY29uc3QgZ2x5cGhzID0gdGhpcy5sYXlvdXQuZ2x5cGhzO1xuXG4gICAgaWYgKHRoaXMuZ2x5cGhJbmRleCA+IDApIHtcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLmdseXBoSW5kZXggLSAyOyBpID49IDA7IGktLSApIHtcbiAgICAgICAgaWYgKGdseXBoc1tpXS5sZXR0ZXIgPT09IFwiIFwiICYmIGdseXBoc1tpICsgMSBdLmxldHRlciAhPT0gXCIgXCIpIHtcbiAgICAgICAgICB0aGlzLmdseXBoSW5kZXggPSBpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PT0gMCApIHRoaXMuZ2x5cGhJbmRleCA9IC0xO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG1vdmVCeVdvcmRSaWdodCgpIHtcbiAgICBjb25zdCBnbHlwaHMgPSB0aGlzLmxheW91dC5nbHlwaHM7XG5cbiAgICBpZiAodGhpcy5nbHlwaEluZGV4IDwgZ2x5cGhzLmxlbmd0aCkge1xuICAgICAgZm9yIChsZXQgaSA9IHRoaXMuZ2x5cGhJbmRleCArIDE7IGkgPD0gZ2x5cGhzLmxlbmd0aCAtIDE7IGkrKyApIHtcbiAgICAgICAgaWYgKGdseXBoc1tpXS5sZXR0ZXIgPT09IFwiIFwiICYmIGdseXBoc1tpIC0gMSBdLmxldHRlciAhPT0gXCIgXCIpIHtcbiAgICAgICAgICB0aGlzLmdseXBoSW5kZXggPSBpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaSA9PT0gZ2x5cGhzLmxlbmd0aCAtIDEpIHRoaXMuZ2x5cGhJbmRleCA9IGdseXBocy5sZW5ndGggLTE7XG4gICAgICB9XG4gICAgfVxuXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbnB1dC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjMiBhVGV4dHVyZUNvb3JkO1xcbmF0dHJpYnV0ZSBmbG9hdCBhU2RmU2l6ZTtcXG5cXG51bmlmb3JtIG1hdDMgdHJhbnNsYXRpb25NYXRyaXg7XFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb25NYXRyaXg7XFxudW5pZm9ybSBmbG9hdCBzZGZNdWx0aXBsaWVyO1xcblxcbnZhcnlpbmcgdmVjMiAgdGMwO1xcbnZhcnlpbmcgZmxvYXQgZG9mZnNldDtcXG52YXJ5aW5nIGZsb2F0IHNkZl90ZXhlbDtcXG5cXG5cXG5cXG52b2lkIG1haW4odm9pZCkge1xcblxcbiAgICAvL1RPRE8gTUFLRSBBVFRSSUJVVEVcXG4gICAgZmxvYXQgc2RmX3NpemUgPSBhU2RmU2l6ZSAqIHNkZk11bHRpcGxpZXI7XFxuXFxuICAgIC8vVE9ETyBNQUtFIFVOSUZPUk1TXFxuICAgIGZsb2F0IHNkZl90ZXhfc2l6ZSA9IDEwMjQuMDtcXG5cXG5cXG4gICAgdGMwID0gYVRleHR1cmVDb29yZDtcXG4gICAgZG9mZnNldCA9IDEuMCAvIHNkZl9zaXplOyAgICAgICAvLyBEaXN0YW5jZSBmaWVsZCBkZWx0YSBmb3Igb25lIHNjcmVlbiBwaXhlbFxcbiAgICBzZGZfdGV4ZWwgPSAxLjAgLyBzZGZfdGV4X3NpemU7XFxuXFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNCgocHJvamVjdGlvbk1hdHJpeCAqIHRyYW5zbGF0aW9uTWF0cml4ICogdmVjMyhhVmVydGV4UG9zaXRpb24gLCAxLjApKS54eSwgMC4wLCAxLjApO1xcblxcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvdGV4dC92ZXJ0Lmdsc2xcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbnVuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyO1xcbnVuaWZvcm0gZmxvYXQgaGludF9hbW91bnQ7XFxudW5pZm9ybSBmbG9hdCBzdWJwaXhlbF9hbW91bnQ7XFxuXFxudW5pZm9ybSB2ZWMzIGJnX2NvbG9yO1xcbnVuaWZvcm0gdmVjMyBmb250X2NvbG9yO1xcblxcbnZhcnlpbmcgdmVjMiAgdGMwO1xcbnZhcnlpbmcgZmxvYXQgZG9mZnNldDtcXG52YXJ5aW5nIGZsb2F0IHNkZl90ZXhlbDtcXG5cXG5cXG4vKlxcbiAqICBTdWJwaXhlbCBjb3ZlcmFnZSBjYWxjdWxhdGlvblxcbiAqXFxuICogIHYgLSBlZGdlIHNsb3BlICAgIC0xLjAgdG8gMS4wICAgICAgICAgIHRyaXBsZXRcXG4gKiAgYSAtIHBpeGVsIGNvdmVyYWdlIDAuMCB0byAxLjAgICAgICAgICAgY292ZXJhZ2VcXG4gKlxcbiAqICAgICAgfDwtIGdseXBoIGVkZ2UgICAgICAgICAgICAgICAgICAgICAgUiAgRyAgQlxcbiAqICArLS0tKy0tLSsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLSstLSstLStcXG4gKiAgfCAgIHxYWFh8IHYgPSAxLjAgKGVkZ2UgZmFjaW5nIHdlc3QpICB8ICB8eHh8WFh8XFxuICogIHwgICB8WFhYfCBhID0gMC41ICg1MCUgY292ZXJhZ2UpICAgICAgfCAgfHh4fFhYfFxcbiAqICB8ICAgfFhYWHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHx4eHxYWHxcXG4gKiAgKy0tLSstLS0rICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0rLS0rLS0rXFxuICogICAgcGl4ZWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgIDUwIDEwMFxcbiAqXFxuICpcXG4gKiAgICAgICAgUiAgIEcgICBCXFxuICpcXG4gKiAgIDEuMCAgICAgICAgKy0tKyAgIDwtIHRvcCAoYWJzKCB2ICkpXFxuICogICAgICAgICAgICAgIHxcXG4gKiAgICAgICAtKy0tLS0tKy0tKy0tIDwtIGNlaWw6IDEwMCUgY292ZXJhZ2VcXG4gKiAgICAgICAgfCAgICAgfFhYfFxcbiAqICAgMC4wICB8ICArLS0rWFh8XFxuICogICAgICAgIHwgIHx4eHxYWHxcXG4gKiAgICAgICAtKy0tKy0tKy0tKy0tIDwtIGZsb29yOiAwJSBjb3ZlcmFnZVxcbiAqICAgICAgICAgICB8XFxuICogIC0xLjAgICstLSsgICAgICAgICA8LSAgLWFicyh2KVxcbiAqICAgICAgICB8XFxuICogICAgICAgIHxcXG4gKiAgICAgICAgfFxcbiAqICAtMi4wICArICAgICAgICAgICAgPC0gYm90dG9tOiAtYWJzKHYpLTEuMFxcbiAqL1xcblxcbnZlYzMgc3VicGl4ZWwoIGZsb2F0IHYsIGZsb2F0IGEgKSB7XFxuICAgIGZsb2F0IHZ0ICAgICAgPSAwLjYgKiB2OyAvLyAxLjAgd2lsbCBtYWtlIHlvdXIgZXllcyBibGVlZFxcbiAgICB2ZWMzICByZ2JfbWF4ID0gdmVjMyggLXZ0LCAwLjAsIHZ0ICk7XFxuICAgIGZsb2F0IHRvcCAgICAgPSBhYnMoIHZ0ICk7XFxuICAgIGZsb2F0IGJvdHRvbSAgPSAtdG9wIC0gMS4wO1xcbiAgICBmbG9hdCBjZmxvb3IgID0gbWl4KCB0b3AsIGJvdHRvbSwgYSApO1xcbiAgICB2ZWMzICByZXMgICAgID0gY2xhbXAoIHJnYl9tYXggLSB2ZWMzKCBjZmxvb3IgKSwgMC4wLCAxLjAgKTtcXG4gICAgcmV0dXJuIHJlcztcXG59XFxuXFxudm9pZCBtYWluMigpIHtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHVTYW1wbGVyLCB0YzApO1xcbn1cXG5cXG52b2lkIG1haW4odm9pZCkge1xcblxcbiAgICAvLyBTYW1wbGluZyB0aGUgdGV4dHVyZSwgTCBwYXR0ZXJuXFxuICAgIGZsb2F0IHNkZiAgICAgICA9IHRleHR1cmUyRCggdVNhbXBsZXIsIHRjMCApLnI7XFxuICAgIGZsb2F0IHNkZl9ub3J0aCA9IHRleHR1cmUyRCggdVNhbXBsZXIsIHRjMCArIHZlYzIoIDAuMCwgc2RmX3RleGVsICkgKS5yO1xcbiAgICBmbG9hdCBzZGZfZWFzdCAgPSB0ZXh0dXJlMkQoIHVTYW1wbGVyLCB0YzAgKyB2ZWMyKCBzZGZfdGV4ZWwsIDAuMCApICkucjtcXG5cXG4gICAgLy8gRXN0aW1hdGluZyBzdHJva2UgZGlyZWN0aW9uIGJ5IHRoZSBkaXN0YW5jZSBmaWVsZCBncmFkaWVudCB2ZWN0b3JcXG4gICAgdmVjMiAgc2dyYWQgICAgID0gdmVjMiggc2RmX2Vhc3QgLSBzZGYsIHNkZl9ub3J0aCAtIHNkZiApO1xcbiAgICBmbG9hdCBzZ3JhZF9sZW4gPSBtYXgoIGxlbmd0aCggc2dyYWQgKSwgMS4wIC8gMTI4LjAgKTtcXG4gICAgdmVjMiAgZ3JhZCAgICAgID0gc2dyYWQgLyB2ZWMyKCBzZ3JhZF9sZW4gKTtcXG4gICAgZmxvYXQgdmdyYWQgPSBhYnMoIGdyYWQueSApOyAvLyAwLjAgLSB2ZXJ0aWNhbCBzdHJva2UsIDEuMCAtIGhvcml6b250YWwgb25lXFxuXFxuICAgIGZsb2F0IGhvcnpfc2NhbGUgID0gMS4xOyAvLyBCbHVycmluZyB2ZXJ0aWNhbCBzdHJva2VzIGFsb25nIHRoZSBYIGF4aXMgYSBiaXRcXG4gICAgZmxvYXQgdmVydF9zY2FsZSAgPSAwLjY7IC8vIFdoaWxlIGFkZGluZyBzb21lIGNvbnRyYXN0IHRvIHRoZSBob3Jpem9udGFsIHN0cm9rZXNcXG4gICAgZmxvYXQgaGRvZmZzZXQgICAgPSBtaXgoIGRvZmZzZXQgKiBob3J6X3NjYWxlLCBkb2Zmc2V0ICogdmVydF9zY2FsZSwgdmdyYWQgKTtcXG4gICAgZmxvYXQgcmVzX2RvZmZzZXQgPSBtaXgoIGRvZmZzZXQsIGhkb2Zmc2V0LCBoaW50X2Ftb3VudCApO1xcblxcbiAgICBmbG9hdCBhbHBoYSAgICAgICA9IHNtb290aHN0ZXAoIDAuNSAtIHJlc19kb2Zmc2V0LCAwLjUgKyByZXNfZG9mZnNldCwgc2RmICk7XFxuXFxuICAgIC8vIEFkZGl0aW9uYWwgY29udHJhc3RcXG4gICAgYWxwaGEgICAgICAgICAgICAgPSBwb3coIGFscGhhLCAxLjAgKyAwLjIgKiB2Z3JhZCAqIGhpbnRfYW1vdW50ICk7XFxuXFxuICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gc3VwcG9ydCBmb3IgQVJCX2JsZW5kX2Z1bmNfZXh0ZW5kZWQgaW4gV2ViR0wuXFxuICAgIC8vIEZvcnR1bmF0ZWx5IHRoZSBiYWNrZ3JvdW5kIGlzIGZpbGxlZCB3aXRoIGEgc29saWQgY29sb3Igc28gd2UgY2FuIGRvXFxuICAgIC8vIHRoZSBibGVuZGluZyBpbnNpZGUgdGhlIHNoYWRlci5cXG5cXG4gICAgLy8gRGlzY2FyZGluZyBwaXhlbHMgYmV5b25kIGEgdGhyZXNob2xkIHRvIG1pbmltaXNlIHBvc3NpYmxlIGFydGlmYWN0cy5cXG4gICAgaWYgKCBhbHBoYSA8IDIwLjAgLyAyNTYuMCApIGRpc2NhcmQ7XFxuXFxuICAgIHZlYzMgY2hhbm5lbHMgPSBzdWJwaXhlbCggZ3JhZC54ICogMC41ICogc3VicGl4ZWxfYW1vdW50LCBhbHBoYSApICsgMC4xO1xcblxcbiAgICAvLyBGb3Igc3VicGl4ZWwgcmVuZGVyaW5nIHdlIGhhdmUgdG8gYmxlbmQgZWFjaCBjb2xvciBjaGFubmVsIHNlcGFyYXRlbHlcXG4gICAgdmVjMyByZXMgPSBtaXgoIGJnX2NvbG9yLCBmb250X2NvbG9yLCBjaGFubmVscyApO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KCByZXMsIDEuMCApO1xcbn1cXG5cXG5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvdGV4dC9mcmFnLmdsc2xcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjtcXG5cXG51bmlmb3JtIG1hdDMgdHJhbnNsYXRpb25NYXRyaXg7XFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb25NYXRyaXg7XFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG5cXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KChwcm9qZWN0aW9uTWF0cml4ICogdHJhbnNsYXRpb25NYXRyaXggKiB2ZWMzKGFWZXJ0ZXhQb3NpdGlvbiAsIDEuMCkpLnh5LCAwLjAsIDEuMCk7XFxuXFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy9zZWxlY3QvdmVydC5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG51bmlmb3JtIHZlYzMgYmdfY29sb3I7XFxudmFyeWluZyB2ZWMyICB0YzA7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGJnX2NvbG9yLDAuNDUpO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDEuMCwgMS4wLCAxLjAsMC4yKTtcXG59XFxuXFxuXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL3NlbGVjdC9mcmFnLmdsc2xcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=