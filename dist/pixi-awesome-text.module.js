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
	    _this._text = text; // Content
	
	    _this._font = font.font; // Font information
	
	    _this._texture = font.texture; // Texture with glyphs
	
	    _this.editable = editable; // Is this field editable
	
	    _this.uppercase = style.uppercase;
	    _this.lowercase = style.lowercase; // Calcualte layout
	
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
	
	      this.metrics = this.fontMetrics(this.style.fontSize, 0.0);
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
	
	      if (range[0] !== range[1] && range[1] !== null) {
	        this.owner.input.glyphIndex = Math.min(range[0] - 1, range[1] - 1);
	        var removeIndex = Math.min.apply(null, range);
	        var removeLength = Math.abs(range[0] - range[1]);
	        this.owner.select.setRange(0, false);
	        this.owner.removeString(removeIndex, removeLength);
	        this.owner.input.show();
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
	
	      if (this.owner.uppercase) {
	        textToAdd = textToAdd.toUpperCase();
	      }
	
	      if (this.owner.lowercase) {
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
	
	        case "c":
	          if (event.ctrlKey) {
	            this.copyToClipboard();
	          }
	
	          break;
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
	      var range = this.owner.select.range;
	      var start = Math.min.apply(null, range);
	      var end = Math.max.apply(null, range);
	      this.inputElement.value = this.owner.text.slice(start, end + 1);
	      this.inputElement.select();
	      document.execCommand("copy");
	      this.inputElement.value = "";
	    }
	  }, {
	    key: "pasteFromClipboard",
	    value: function pasteFromClipboard(event) {
	      event.preventDefault();
	      var text = event.clipboardData.getData("text");
	      this.owner.select.clearSelectedRange();
	      this.owner.insertString(this.glyphIndex + 1, text);
	      this.glyphIndex = this.glyphIndex + text.length;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBkMDY3NWNlMjBhYmMyNjYzMmQ0ZCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlbmRlcmVyLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9sYXlvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2R0eXBlL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vYW4tYXJyYXkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9pcy1idWZmZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvdmVydC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvZnJhZy5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3NlbGVjdC92ZXJ0Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvc2VsZWN0L2ZyYWcuZ2xzbCJdLCJuYW1lcyI6WyJPYmplY3QiLCJhc3NpZ24iLCJQSVhJIiwiZXh0cmFzIiwiQXdlc29tZVRleHQiLCJUZXh0IiwidmVydGV4U2hhZGVyIiwiZnJhZ21lbnRTaGFkZXIiLCJzZWxlY3RWZXJ0ZXh0U2hhZGVyIiwic2VsZWN0RnJhZ21lbnRTaGFkZXIiLCJnbENvcmUiLCJBd2Vzb21lVGV4dFJlbmRlcmVyIiwicmVuZGVyZXIiLCJ0ZXh0U2hhZGVyIiwic2VsZWN0U2hhZGVyIiwiZ2wiLCJnZXRFeHRlbnNpb24iLCJTaGFkZXIiLCJzb3VyY2UiLCJnbERhdGEiLCJfZ2xEYXRhcyIsImNvbnRleHRUZXh0IiwiYmluZFZhbyIsImJ1aWxkVGV4dEdsRGF0YSIsInZhbyIsImRpcnR5IiwidXZCdWZmZXIiLCJ1cGxvYWQiLCJ1dnMiLCJpbmRleERpcnR5IiwiaW5kZXhCdWZmZXIiLCJpbmRpY2VzIiwidmVydGV4QnVmZmVyIiwidmVydGljZXMiLCJiaW5kU2hhZGVyIiwic2hhZGVyIiwic3RhdGUiLCJzZXRCbGVuZE1vZGUiLCJibGVuZE1vZGUiLCJ1bmlmb3JtcyIsInVTYW1wbGVyIiwiYmluZFRleHR1cmUiLCJ0ZXh0dXJlIiwidHJhbnNsYXRpb25NYXRyaXgiLCJ3b3JsZFRyYW5zZm9ybSIsInRvQXJyYXkiLCJoaW50X2Ftb3VudCIsInNkZk11bHRpcGxpZXIiLCJzY2FsZSIsInN1YnBpeGVsX2Ftb3VudCIsImZvbnRfY29sb3IiLCJ1dGlscyIsImhleDJyZ2IiLCJzdHlsZSIsImZpbGwiLCJyZXBsYWNlIiwiYmdfY29sb3IiLCJiYWNrZ3JvdW5kQ29sb3IiLCJkcmF3TW9kZSIsIlRSSUFOR0xFUyIsImRyYXciLCJsZW5ndGgiLCJjb250ZXh0U2VsZWN0Iiwic2VsZWN0IiwiYnVpbGRTZWxlY3RHbERhdGEiLCJzZWxlY3RDb2xvciIsInN0eWxlSUQiLCJ1cGRhdGUiLCJzdGF0ZXMiLCJlZGl0YWJsZSIsInNlbGVjdGluZyIsInJlbmRlclNlbGVjdCIsInJlbmRlclRleHQiLCJHTEJ1ZmZlciIsImNyZWF0ZVZlcnRleEJ1ZmZlciIsIlNUUkVBTV9EUkFXIiwic2RmQnVmZmVyIiwic2RmU2l6ZXMiLCJTVEFUSUNfRFJBVyIsImNyZWF0ZUluZGV4QnVmZmVyIiwiVmVydGV4QXJyYXlPYmplY3QiLCJhZGRJbmRleCIsImFkZEF0dHJpYnV0ZSIsImF0dHJpYnV0ZXMiLCJhVmVydGV4UG9zaXRpb24iLCJGTE9BVCIsImFUZXh0dXJlQ29vcmQiLCJhU2RmU2l6ZSIsIk9iamVjdFJlbmRlcmVyIiwiV2ViR0xSZW5kZXJlciIsInJlZ2lzdGVyUGx1Z2luIiwiY3JlYXRlSW5kaWNlcyIsInRleHQiLCJmb250IiwicmVndWxhciIsIlRleHRTdHlsZSIsIl90ZXh0IiwiX2ZvbnQiLCJfdGV4dHVyZSIsInVwcGVyY2FzZSIsImxvd2VyY2FzZSIsImxheW91dCIsIlRleHRMYXlvdXQiLCJmb250U2l6ZSIsIndyYXBXb3JkcyIsImJyZWFrV29yZHMiLCJ3cmFwcGVyV2lkdGgiLCJ3b3JkV3JhcFdpZHRoIiwiYWxpZ24iLCJsaW5lSGVpZ2h0IiwiaW50ZXJhY3RpdmUiLCJidXR0b25Nb2RlIiwiU2VsZWN0IiwiaW5wdXQiLCJJbnB1dCIsInNldFN0YXRlIiwibWV0cmljcyIsImZvbnRNZXRyaWNzIiwiRmxvYXQzMkFycmF5IiwibGV0dGVyc0NvdW50IiwiYXJyYXlQb3NpdGlvbnMiLCJ2ZXJ0ZXgiLCJzZGYiLCJ3b3Jkc01ldHJpY3MiLCJmb3JFYWNoIiwid29yZCIsIndyaXRlU3RyaW5nIiwieCIsInkiLCJjbG9ja3dpc2UiLCJ0eXBlIiwiY291bnQiLCJuZXdTdGF0ZSIsInZhbHVlcyIsInNldFJlZ3VsYXJTdGF0ZSIsInNldEVkaXRhYmxlU3RhdGUiLCJjdXJyZW50RWRpdGluZ0VsZW1lbnQiLCJvZmYiLCJlbmFibGVkIiwib24iLCJlIiwiY2xpY2tzQ291bnQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsInNldFJhbmdlIiwiaW5wdXRFbGVtZW50IiwiZm9jdXMiLCJvbk1vdXNlRG93biIsInNob3ciLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsImluZGV4Iiwic3RyaW5nIiwic3Vic3RyIiwibmV3VGV4dCIsInNwbGl0Iiwic3BsaWNlIiwiam9pbiIsImZvbnRfbWV0cmljcyIsInBvcyIsInByZXZfY2hhciIsImNwb3MiLCJ4X21heCIsImNhcFNjYWxlIiwic3RyX3BvcyIsInNjaGFyIiwiZm9udF9jaGFyIiwiY2hhcnMiLCJrZXJuIiwicmVjdCIsImNoYXJSZWN0IiwicG9zaXRpb25zIiwibWFwIiwidXYiLCJzdHJpbmdfcG9zIiwibW9yZUxpbmVHYXAiLCJjYXBfaGVpZ2h0IiwieF9oZWlnaHQiLCJmb250QXNjZW50IiwiYXNjZW50IiwiZGVzY2VudCIsImxpbmVfZ2FwIiwibG93U2NhbGUiLCJNYXRoIiwicm91bmQiLCJsb3djYXNlIiwiZmxhZ3MiLCJiYXNlbGluZSIsImciLCJib3R0b20iLCJpeSIsInRvcCIsInJvd19oZWlnaHQiLCJsZWZ0IiwiYmVhcmluZ194IiwiaXgiLCJyaWdodCIsInAiLCJuZXdfcG9zX3giLCJhZHZhbmNlX3giLCJzZGZfc2l6ZSIsInZhbHVlIiwibWVzaCIsIk1lc2giLCJvd25lciIsImNvbmZpZyIsInN0YXJ0WSIsImNhbGN1bGF0ZVdvcmRzUG9zaXRpb25zIiwiZ2x5cGhzIiwiZ2V0R2x5cGhzIiwid2lkdGgiLCJoZWlnaHQiLCJjaGFyIiwid29yZHMiLCJpIiwic3RhcnRYIiwid29yZFNpemUiLCJnZXRTdHJpbmdTaXplIiwicHVzaCIsImxpbmVzQ291bnQiLCJ3b3Jkc09uTGluZSIsImZpbHRlciIsImxhc3RXb3JkIiwiZnJlZVNwYWNlIiwibGVmdE9mZnNldCIsImxldHRlciIsInBvc2l0aW9uIiwicmFuZ2UiLCJidWlsZFZlcnRpY2VzIiwic3RhcnQiLCJlbmQiLCJtaW4iLCJhcHBseSIsIm1heCIsImxldHRlckNvdW50IiwiZmlyc3RMZXR0ZXIiLCJsYXN0TGV0dGVyIiwic3RhcnRMaW5lTGV0dGVyIiwiZW5kTGluZUxldHRlciIsIm9mZnNldCIsInNlbGVjdGluZ0xpbmUiLCJmbG9vciIsInNlbGVjdGluZ0xpbmVZIiwibGFzdEdseXBoT25MaW5lIiwiZmlyc3RHbHlwaE9uTGluZSIsImdseXBoIiwiZXZlbnQiLCJkYXRhIiwiYnV0dG9uIiwiZ2xvYmFsIiwiY2xvc2VzdExldHRlciIsImdldENsb3Nlc3RHbHlwaCIsImNvbnNvbGUiLCJsb2ciLCJpbmRleE9mIiwiZ2x5cGhJbmRleCIsInJlbW92ZUluZGV4IiwicmVtb3ZlTGVuZ3RoIiwiYWJzIiwicmVtb3ZlU3RyaW5nIiwiX2dseXBoSW5kZXgiLCJfZW5hYmxlZCIsImVuYWJsZSIsImRpc2FibGUiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY3JlYXRlRmllbGQiLCJkaXNwbGF5IiwiYm9keSIsImFwcGVuZCIsImNvbnRhaW5zIiwicmVtb3ZlQ2hpbGQiLCJvcGFjaXR5IiwiY3JlYXRlRWxlbWVudCIsInRyYW5zZm9ybSIsInNsaWNlIiwiY29sb3IiLCJib3JkZXIiLCJjb250YWluIiwiekluZGV4IiwicG9pbnRlckV2ZW50cyIsIm91dGxpbmUiLCJ0cmFuc2Zvcm1PcmlnaW4iLCJwYWRkaW5nIiwiYWRkRXZlbnQiLCJvbklucHV0Iiwib25LZXlkb3duIiwicGFzdGVGcm9tQ2xpcGJvYXJkIiwiZ2x5cGhNZXRyaWNzIiwibGFzdEdseXBoIiwic2VsZWN0ZWRHbHlwaCIsInNldFBvc2l0aW9uIiwiY2xlYXJTZWxlY3RlZFJhbmdlIiwidGFyZ2V0IiwidGV4dFRvQWRkIiwidG9VcHBlckNhc2UiLCJ0b0xvd2VyQ2FzZSIsImluc2VydFN0cmluZyIsImtleSIsImN0cmxLZXkiLCJjb3B5VG9DbGlwYm9hcmQiLCJzY2FsZVgiLCJhIiwic2NhbGVZIiwiZCIsImxvY2FsWCIsImxvY2FsWSIsImdldFRyYW5zZm9ybSIsIm93bmVyVHJhbnNmb3JtIiwiY2FudmFzUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInR4IiwidHkiLCJjYWxsYmFjayIsImFkZEV2ZW50TGlzdGVuZXIiLCJleGVjQ29tbWFuZCIsInByZXZlbnREZWZhdWx0IiwiY2xpcGJvYXJkRGF0YSIsImdldERhdGEiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPO0FDVkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFD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YnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQXdlc29tZVRleHRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQXdlc29tZVRleHRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZDA2NzVjZTIwYWJjMjY2MzJkNGQiLCJpbXBvcnQgUmVuZGVyZXIgZnJvbSBcIi4vcmVuZGVyZXJcIjtcbmltcG9ydCBUZXh0IGZyb20gXCIuL3RleHRcIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4vbGF5b3V0XCI7XG5cbk9iamVjdC5hc3NpZ24oUElYSS5leHRyYXMsIHtcbiAgQXdlc29tZVRleHQ6IFRleHRcbn0pO1xuXG5pZiAodHlwZW9mIFBJWEkgIT09ICd1bmRlZmluZWQnKSB7XG4gIGlmIChQSVhJLmV4dHJhcykge1xuICAgIFBJWEkuZXh0cmFzLkF3ZXNvbWVUZXh0ID0gVGV4dDtcbiAgfSBlbHNlIHtcbiAgICBQSVhJLmV4dHJhcyA9IHsgQXdlc29tZVRleHQ6IFRleHR9O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIFRleHQsXG4gIFJlbmRlcmVyLFxuICBMYXlvdXRcbn1cblxuLypcblxuaXggICAgICAgICAgICA9IHNkZl9zaXplIC8gdGV4X3dpZHRoXG5peSAgICAgICAgICAgID0gc2RmX3NpemUgLyB0ZXhfaGVpZ2h0XG5yb3dfaGVpZ2h0ICAgID0gKHJvd19oZWlnaHQgKyAyICogc2RmX3NpemUpIC8gdGV4X2hlaWdodDtcbmFzcGVjdCAgICAgICAgPSB0ZXhfd2lkdGggLyB0ZXhfaGVpZ2h0O1xuYXNjZW50ICAgICAgICA9IGZvbnQtPmFzY2VudCAqIHNjYWxlWVxuZGVzY2VudCAgICAgICA9IGZhYnNmKGZvbnQtPmRlc2NlbnQgKiBzY2FsZVkpXG5saW5lX2dhcCAgICAgID0gZm9udC0+bGluZV9nYXAgKiBzY2FsZSBZXG5jYXBfaGVpZ2h0ICAgID0gZ3hjYXAubWF4LnkgKiBzY2FsZVlcbnhfaGVpZ2h0ICAgICAgPSBneC5tYXgueSAqIHNjYWxlWVxuc3BhY2VfYWR2YW5jZSA9IGdzcGFjZS5hZHZhbmNlX3dpZHRoICogc2NhbGVYXG5cblxuc2NhbGV5ID0gcm93X2hlaWdodCAvIHRleF9oZWlnaHQgLyAoIGZvbnQtPmdseXBoX21heC55IC0gZm9udC0+Z2x5cGhfbWluLnkgKTtcbnNjYWxleCA9IHJvd19oZWlnaHQgLyB0ZXhfd2lkdGggLyAoIGZvbnQtPmdseXBoX21heC55IC0gZm9udC0+Z2x5cGhfbWluLnkgKTtcbmdzcGFjZSA9IGZvbnQtPmdseXBoc1sgZm9udC0+Z2x5cGhfaWR4KCAnICcgKSBdO1xuZ3ggICAgID0gZm9udC0+Z2x5cGhzWyBmb250LT5nbHlwaF9pZHgoICd4JyApIF1cbmd4Y2FwICA9IGZvbnQtPmdseXBoc1sgZm9udC0+Z2x5cGhfaWR4KCAnWCcgKSBdXG5cblxuc2RmX3NpemUgPSAxMFxuXG4qL1xuXG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbmRleC5qcyIsImltcG9ydCBBd2Vzb21lVGV4dCBmcm9tIFwiLi90ZXh0XCI7XG5cbmNvbnN0IHZlcnRleFNoYWRlciA9IHJlcXVpcmUoXCIuL3NoYWRlcnMvdGV4dC92ZXJ0Lmdsc2xcIik7XG5jb25zdCBmcmFnbWVudFNoYWRlciA9IHJlcXVpcmUoXCIuL3NoYWRlcnMvdGV4dC9mcmFnLmdsc2xcIik7XG5cbmNvbnN0IHNlbGVjdFZlcnRleHRTaGFkZXIgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3NlbGVjdC92ZXJ0Lmdsc2xcIik7XG5jb25zdCBzZWxlY3RGcmFnbWVudFNoYWRlciA9IHJlcXVpcmUoXCIuL3NoYWRlcnMvc2VsZWN0L2ZyYWcuZ2xzbFwiKTtcblxuY29uc3QgZ2xDb3JlID0gUElYSS5nbENvcmU7XG5cbmNsYXNzIEF3ZXNvbWVUZXh0UmVuZGVyZXIgZXh0ZW5kcyBQSVhJLk9iamVjdFJlbmRlcmVyIHtcblxuICBzdGF0aWMgY29udGV4dFRleHQgPSAwO1xuICBzdGF0aWMgY29udGV4dFNlbGVjdCA9IDE7XG5cbiAgc2VsZWN0Q29sb3IgPSAweEZGQjNDMztcblxuXG4gIGNvbnN0cnVjdG9yKHJlbmRlcmVyKSB7XG4gICAgc3VwZXIocmVuZGVyZXIpO1xuICAgIHRoaXMudGV4dFNoYWRlciA9IG51bGw7XG4gICAgdGhpcy5zZWxlY3RTaGFkZXIgPSBudWxsO1xuXG4gIH1cblxuICBvbkNvbnRleHRDaGFuZ2UoKSB7XG4gICAgY29uc3QgZ2wgPSB0aGlzLnJlbmRlcmVyLmdsO1xuICAgIGdsLmdldEV4dGVuc2lvbihcIk9FU19zdGFuZGFyZF9kZXJpdmF0aXZlc1wiKTtcbiAgICB0aGlzLnRleHRTaGFkZXIgPSBuZXcgUElYSS5TaGFkZXIoZ2wsIHZlcnRleFNoYWRlciwgZnJhZ21lbnRTaGFkZXIpO1xuICAgIHRoaXMuc2VsZWN0U2hhZGVyID0gbmV3IFBJWEkuU2hhZGVyKGdsLCBzZWxlY3RWZXJ0ZXh0U2hhZGVyLCBzZWxlY3RGcmFnbWVudFNoYWRlcik7XG4gIH1cblxuICByZW5kZXJUZXh0KHNvdXJjZSkge1xuXG4gICAgbGV0IGdsRGF0YSA9IHNvdXJjZS5fZ2xEYXRhc1tBd2Vzb21lVGV4dFJlbmRlcmVyLmNvbnRleHRUZXh0XTtcblxuICAgIGlmICghZ2xEYXRhKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmJpbmRWYW8obnVsbCk7XG4gICAgICBnbERhdGEgPSB0aGlzLmJ1aWxkVGV4dEdsRGF0YShzb3VyY2UsIHRoaXMucmVuZGVyZXIuZ2wpO1xuICAgICAgc291cmNlLl9nbERhdGFzW0F3ZXNvbWVUZXh0UmVuZGVyZXIuY29udGV4dFRleHRdID0gZ2xEYXRhO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyZXIuYmluZFZhbyhnbERhdGEudmFvKTtcblxuICAgIGlmIChzb3VyY2UuZGlydHkpIHtcbiAgICAgIHNvdXJjZS5kaXJ0eSA9IGZhbHNlO1xuICAgICAgZ2xEYXRhLnV2QnVmZmVyLnVwbG9hZChzb3VyY2UudXZzKTtcbiAgICB9XG5cbiAgICBpZiAoc291cmNlLmluZGV4RGlydHkpIHtcbiAgICAgIHNvdXJjZS5pbmRleERpcnR5ID0gZmFsc2U7XG4gICAgICBnbERhdGEuaW5kZXhCdWZmZXIudXBsb2FkKHNvdXJjZS5pbmRpY2VzKTtcbiAgICB9XG5cbiAgICBnbERhdGEudmVydGV4QnVmZmVyLnVwbG9hZChzb3VyY2UudmVydGljZXMpO1xuICAgIHRoaXMucmVuZGVyZXIuYmluZFNoYWRlcihnbERhdGEuc2hhZGVyKTtcblxuICAgIHRoaXMucmVuZGVyZXIuc3RhdGUuc2V0QmxlbmRNb2RlKHNvdXJjZS5ibGVuZE1vZGUpO1xuXG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy51U2FtcGxlciA9IHRoaXMucmVuZGVyZXIuYmluZFRleHR1cmUoc291cmNlLnRleHR1cmUpO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMudHJhbnNsYXRpb25NYXRyaXggPSBzb3VyY2Uud29ybGRUcmFuc2Zvcm0udG9BcnJheSh0cnVlKTtcblxuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuaGludF9hbW91bnQgPSAxLjA7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5zZGZNdWx0aXBsaWVyID0gQXdlc29tZVRleHQuc2NhbGU7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5zdWJwaXhlbF9hbW91bnQgPSAxLjA7XG4gICAgZ2xEYXRhLnNoYWRlci51bmlmb3Jtcy5mb250X2NvbG9yID0gUElYSS51dGlscy5oZXgycmdiKHNvdXJjZS5zdHlsZS5maWxsLnJlcGxhY2UoXCIjXCIsIFwiMHhcIikpO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMuYmdfY29sb3IgPSBQSVhJLnV0aWxzLmhleDJyZ2Ioc291cmNlLmJhY2tncm91bmRDb2xvci5yZXBsYWNlKFwiI1wiLCBcIjB4XCIpKTtcblxuICAgIGNvbnN0IGRyYXdNb2RlID0gc291cmNlLmRyYXdNb2RlID0gdGhpcy5yZW5kZXJlci5nbC5UUklBTkdMRVM7XG4gICAgZ2xEYXRhLnZhby5kcmF3KGRyYXdNb2RlLCBzb3VyY2UuaW5kaWNlcy5sZW5ndGgsIDApO1xuXG4gIH1cblxuICByZW5kZXJTZWxlY3Qoc291cmNlKSB7XG4gICAgbGV0IGdsRGF0YSA9IHNvdXJjZS5fZ2xEYXRhc1tBd2Vzb21lVGV4dFJlbmRlcmVyLmNvbnRleHRTZWxlY3RdO1xuXG4gICAgaWYgKCFnbERhdGEgfHwgc291cmNlLnNlbGVjdC5kaXJ0eSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5iaW5kVmFvKG51bGwpO1xuICAgICAgZ2xEYXRhID0gdGhpcy5idWlsZFNlbGVjdEdsRGF0YShzb3VyY2UsIHRoaXMucmVuZGVyZXIuZ2wpO1xuICAgICAgc291cmNlLl9nbERhdGFzW0F3ZXNvbWVUZXh0UmVuZGVyZXIuY29udGV4dFNlbGVjdF0gPSBnbERhdGE7XG4gICAgICBzb3VyY2Uuc2VsZWN0LmRpcnR5ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXJlci5iaW5kVmFvKGdsRGF0YS52YW8pO1xuXG4gICAgaWYgKHNvdXJjZS5zZWxlY3QuaW5kZXhEaXJ0eSkge1xuICAgICAgc291cmNlLnNlbGVjdC5pbmRleERpcnR5ID0gZmFsc2U7XG4gICAgICBnbERhdGEuaW5kZXhCdWZmZXIudXBsb2FkKHNvdXJjZS5zZWxlY3QuaW5kaWNlcyk7XG4gICAgfVxuXG4gICAgZ2xEYXRhLnZlcnRleEJ1ZmZlci51cGxvYWQoc291cmNlLnNlbGVjdC52ZXJ0aWNlcyk7XG4gICAgdGhpcy5yZW5kZXJlci5iaW5kU2hhZGVyKGdsRGF0YS5zaGFkZXIpO1xuXG4gICAgdGhpcy5yZW5kZXJlci5zdGF0ZS5zZXRCbGVuZE1vZGUoMTcpO1xuICAgIGdsRGF0YS5zaGFkZXIudW5pZm9ybXMudHJhbnNsYXRpb25NYXRyaXggPSBzb3VyY2Uud29ybGRUcmFuc2Zvcm0udG9BcnJheSh0cnVlKTtcbiAgICBnbERhdGEuc2hhZGVyLnVuaWZvcm1zLmJnX2NvbG9yID0gUElYSS51dGlscy5oZXgycmdiKHRoaXMuc2VsZWN0Q29sb3IpO1xuXG4gICAgY29uc3QgZHJhd01vZGUgPSBzb3VyY2UuZHJhd01vZGUgPSB0aGlzLnJlbmRlcmVyLmdsLlRSSUFOR0xFUztcbiAgICBnbERhdGEudmFvLmRyYXcoZHJhd01vZGUsIHNvdXJjZS5zZWxlY3QuaW5kaWNlcy5sZW5ndGgsIDApO1xuICB9XG5cbiAgcmVuZGVyKHNvdXJjZSkge1xuXG4gICAgaWYgKHNvdXJjZS5zdHlsZUlEICE9PSBzb3VyY2Uuc3R5bGUuc3R5bGVJRCkge1xuICAgICAgc291cmNlLnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIGlmIChzb3VyY2Uuc3RhdGUgPT09IEF3ZXNvbWVUZXh0LnN0YXRlcy5lZGl0YWJsZSB8fCBzb3VyY2Uuc3RhdGUgPT09IEF3ZXNvbWVUZXh0LnN0YXRlcy5zZWxlY3RpbmcpIHtcbiAgICAgIHRoaXMucmVuZGVyU2VsZWN0KHNvdXJjZSk7XG4gICAgfVxuICAgIHRoaXMucmVuZGVyVGV4dChzb3VyY2UpO1xuICB9XG5cbiAgYnVpbGRUZXh0R2xEYXRhKHNvdXJjZSwgZ2wpIHtcblxuICAgIGNvbnN0IGdsRGF0YSA9IHtcbiAgICAgIHNoYWRlcjogdGhpcy50ZXh0U2hhZGVyLFxuICAgICAgdmVydGV4QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlVmVydGV4QnVmZmVyKGdsLCBzb3VyY2UudmVydGljZXMsIGdsLlNUUkVBTV9EUkFXKSxcbiAgICAgIHV2QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlVmVydGV4QnVmZmVyKGdsLCBzb3VyY2UudXZzLCBnbC5TVFJFQU1fRFJBVyksXG4gICAgICBzZGZCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVWZXJ0ZXhCdWZmZXIoZ2wsIHNvdXJjZS5zZGZTaXplcywgZ2wuU1RBVElDX0RSQVcpLFxuICAgICAgaW5kZXhCdWZmZXI6IGdsQ29yZS5HTEJ1ZmZlci5jcmVhdGVJbmRleEJ1ZmZlcihnbCwgc291cmNlLmluZGljZXMsIGdsLlNUQVRJQ19EUkFXKSxcbiAgICAgIC8vIGJ1aWxkIHRoZSB2YW8gb2JqZWN0IHRoYXQgd2lsbCByZW5kZXIuLlxuICAgICAgdmFvOiBudWxsLFxuICAgICAgZGlydHk6IHNvdXJjZS5kaXJ0eSxcbiAgICAgIGluZGV4RGlydHk6IHNvdXJjZS5pbmRleERpcnR5LFxuICAgIH07XG5cbiAgICBnbERhdGEudmFvID0gbmV3IGdsQ29yZS5WZXJ0ZXhBcnJheU9iamVjdChnbClcbiAgICAgIC5hZGRJbmRleChnbERhdGEuaW5kZXhCdWZmZXIpXG4gICAgICAuYWRkQXR0cmlidXRlKGdsRGF0YS52ZXJ0ZXhCdWZmZXIsIGdsRGF0YS5zaGFkZXIuYXR0cmlidXRlcy5hVmVydGV4UG9zaXRpb24sIGdsLkZMT0FULCBmYWxzZSwgMiAqIDQsIDApXG4gICAgICAuYWRkQXR0cmlidXRlKGdsRGF0YS51dkJ1ZmZlciwgZ2xEYXRhLnNoYWRlci5hdHRyaWJ1dGVzLmFUZXh0dXJlQ29vcmQsIGdsLkZMT0FULCBmYWxzZSwgMiAqIDQsIDApXG4gICAgICAuYWRkQXR0cmlidXRlKGdsRGF0YS5zZGZCdWZmZXIsIGdsRGF0YS5zaGFkZXIuYXR0cmlidXRlcy5hU2RmU2l6ZSwgZ2wuRkxPQVQsIGZhbHNlLCA0LCAwKTtcblxuICAgIHJldHVybiBnbERhdGFcbiAgfVxuXG4gIGJ1aWxkU2VsZWN0R2xEYXRhKHNvdXJjZSwgZ2wpIHtcbiAgICBjb25zdCBnbERhdGEgPSB7XG4gICAgICBzaGFkZXI6IHRoaXMuc2VsZWN0U2hhZGVyLFxuICAgICAgdmVydGV4QnVmZmVyOiBnbENvcmUuR0xCdWZmZXIuY3JlYXRlVmVydGV4QnVmZmVyKGdsLCBzb3VyY2Uuc2VsZWN0LnZlcnRpY2VzLCBnbC5TVFJFQU1fRFJBVyksXG4gICAgICBpbmRleEJ1ZmZlcjogZ2xDb3JlLkdMQnVmZmVyLmNyZWF0ZUluZGV4QnVmZmVyKGdsLCBzb3VyY2Uuc2VsZWN0LmluZGljZXMsIGdsLlNUQVRJQ19EUkFXKSxcbiAgICAgIHZhbzogbnVsbFxuICAgIH07XG5cbiAgICBnbERhdGEudmFvID0gbmV3IGdsQ29yZS5WZXJ0ZXhBcnJheU9iamVjdChnbClcbiAgICAgIC5hZGRJbmRleChnbERhdGEuaW5kZXhCdWZmZXIpXG4gICAgICAuYWRkQXR0cmlidXRlKGdsRGF0YS52ZXJ0ZXhCdWZmZXIsIGdsRGF0YS5zaGFkZXIuYXR0cmlidXRlcy5hVmVydGV4UG9zaXRpb24sIGdsLkZMT0FULCBmYWxzZSwgMiAqIDQsIDApXG5cbiAgICByZXR1cm4gZ2xEYXRhXG4gIH1cblxufVxuXG5QSVhJLldlYkdMUmVuZGVyZXIucmVnaXN0ZXJQbHVnaW4oJ0F3ZXNvbWVUZXh0UmVuZGVyZXInLCBBd2Vzb21lVGV4dFJlbmRlcmVyKTtcblxuZXhwb3J0IGRlZmF1bHQgQXdlc29tZVRleHRSZW5kZXJlclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3JlbmRlcmVyLmpzIiwiY29uc3QgY3JlYXRlSW5kaWNlcyA9IHJlcXVpcmUoXCJxdWFkLWluZGljZXNcIilcbmltcG9ydCBUZXh0TGF5b3V0IGZyb20gJy4vbGF5b3V0JztcbmltcG9ydCBTZWxlY3QgZnJvbSAnLi9zZWxlY3QnXG5pbXBvcnQgSW5wdXQgZnJvbSAnLi9pbnB1dCdcblxuY2xhc3MgQXdlc29tZVRleHQgZXh0ZW5kcyBQSVhJLm1lc2guTWVzaCB7XG5cbiAgc3RhdGljIHNjYWxlID0gMS4wO1xuICBzdGF0aWMgc3RhdGVzID0ge3JlZ3VsYXI6IDAsIGVkaXRhYmxlOiAxLCBzZWxlY3Rpbmc6IDJ9O1xuICBzdGF0aWMgY3VycmVudEVkaXRpbmdFbGVtZW50ID0gbnVsbDtcblxuICBwbHVnaW5OYW1lID0gJ0F3ZXNvbWVUZXh0UmVuZGVyZXInO1xuICBzdGF0ZSA9IEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyO1xuICBjbGlja3NDb3VudCA9IDA7XG5cblxuICBjb25zdHJ1Y3Rvcih0ZXh0LCBzdHlsZSwgZm9udCwgZWRpdGFibGUgPSBmYWxzZSkge1xuICAgIHN1cGVyKGZvbnQudGV4dHVyZSk7XG5cbiAgICB0aGlzLnN0eWxlID0gbmV3IFBJWEkuVGV4dFN0eWxlKHN0eWxlKTtcbiAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IHN0eWxlLmJhY2tncm91bmRDb2xvcjtcbiAgICB0aGlzLl90ZXh0ID0gdGV4dDsgLy8gQ29udGVudFxuICAgIHRoaXMuX2ZvbnQgPSBmb250LmZvbnQ7IC8vIEZvbnQgaW5mb3JtYXRpb25cbiAgICB0aGlzLl90ZXh0dXJlID0gZm9udC50ZXh0dXJlOyAvLyBUZXh0dXJlIHdpdGggZ2x5cGhzXG4gICAgdGhpcy5lZGl0YWJsZSA9IGVkaXRhYmxlOyAvLyBJcyB0aGlzIGZpZWxkIGVkaXRhYmxlXG4gICAgdGhpcy51cHBlcmNhc2UgPSBzdHlsZS51cHBlcmNhc2U7XG4gICAgdGhpcy5sb3dlcmNhc2UgPSBzdHlsZS5sb3dlcmNhc2U7XG5cbiAgICAvLyBDYWxjdWFsdGUgbGF5b3V0XG4gICAgdGhpcy5sYXlvdXQgPSBuZXcgVGV4dExheW91dCh0aGlzLCB7XG4gICAgICBmb250U2l6ZTogdGhpcy5zdHlsZS5mb250U2l6ZSxcbiAgICAgIHdyYXBXb3JkczogdGhpcy5zdHlsZS5icmVha1dvcmRzLFxuICAgICAgd3JhcHBlcldpZHRoOiB0aGlzLnN0eWxlLndvcmRXcmFwV2lkdGgsXG4gICAgICBhbGlnbjogdGhpcy5zdHlsZS5hbGlnbixcbiAgICAgIGxpbmVIZWlnaHQ6IHRoaXMuc3R5bGUubGluZUhlaWdodCxcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmVkaXRhYmxlKSB7XG4gICAgICB0aGlzLmludGVyYWN0aXZlID0gdHJ1ZTtcbiAgICAgIHRoaXMuYnV0dG9uTW9kZSA9IHRydWU7XG5cbiAgICAgIHRoaXMuc2VsZWN0ID0gbmV3IFNlbGVjdCh0aGlzKTtcbiAgICAgIHRoaXMuaW5wdXQgPSBuZXcgSW5wdXQodGhpcyk7XG4gICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5yZWd1bGFyKTtcbiAgICB9XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5mb250TWV0cmljcyh0aGlzLnN0eWxlLmZvbnRTaXplLCAwLjApO1xuXG4gICAgdGhpcy5sYXlvdXQudXBkYXRlKCk7XG5cbiAgICBpZiAodGhpcy5lZGl0YWJsZSkge1xuICAgICAgdGhpcy5zZWxlY3QudXBkYXRlKCk7XG4gICAgICB0aGlzLmlucHV0LnVwZGF0ZSgpO1xuICAgIH1cblxuICAgIC8vIEFycmF5cyBmb3IgdmVydGljZXMsIHV2cyBhbmQgc2RmXG4gICAgdGhpcy52ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5sYXlvdXQubGV0dGVyc0NvdW50ICogNCAqIDIpO1xuICAgIHRoaXMudXZzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0ICogMik7XG4gICAgdGhpcy5zZGZTaXplcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5sYXlvdXQubGV0dGVyc0NvdW50ICogNCk7XG4gICAgdGhpcy5hcnJheVBvc2l0aW9ucyA9IHsgdmVydGV4OiAwLCB1dnM6IDAsIHNkZjogMCB9O1xuXG4gICAgLy8gRmlsbCBhcnJheXMgd29yZCBieSB3b3JkXG4gICAgdGhpcy5sYXlvdXQud29yZHNNZXRyaWNzLmZvckVhY2ggKHdvcmQgPT4ge1xuICAgICAgdGhpcy53cml0ZVN0cmluZyh3b3JkLndvcmQsIHRoaXMuZm9udCwgdGhpcy5tZXRyaWNzLCBbd29yZC54LCB3b3JkLnldKTtcbiAgICB9KTtcblxuICAgIC8vIFByZXBhcmUgaW5kaWNlc1xuICAgIHRoaXMuaW5kaWNlcyA9IGNyZWF0ZUluZGljZXMoe1xuICAgICAgY2xvY2t3aXNlOiB0cnVlLFxuICAgICAgdHlwZTogJ3VpbnQxNicsXG4gICAgICBjb3VudDogdGhpcy5sYXlvdXQubGV0dGVyc0NvdW50XG4gICAgfSk7XG5cbiAgICB0aGlzLnN0eWxlSUQgPSB0aGlzLnN0eWxlLnN0eWxlSUQ7XG4gICAgdGhpcy5kaXJ0eSA9IHRydWU7XG4gICAgdGhpcy5pbmRleERpcnR5ID0gdHJ1ZTtcbiAgICB0aGlzLl9nbERhdGFzID0gW107XG4gIH1cblxuICBzZXRTdGF0ZShuZXdTdGF0ZSkge1xuXG4gICAgaWYgKCF0aGlzLmVkaXRhYmxlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgeyBzdGF0ZXMgfSA9IEF3ZXNvbWVUZXh0O1xuXG4gICAgaWYgKCFuZXdTdGF0ZSBpbiBPYmplY3QudmFsdWVzKHN0YXRlcykpIHJldHVybjtcblxuICAgIHN3aXRjaCAobmV3U3RhdGUpIHtcbiAgICAgIGNhc2Ugc3RhdGVzLnJlZ3VsYXI6XG4gICAgICAgIHRoaXMuc2V0UmVndWxhclN0YXRlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBzdGF0ZXMuZWRpdGFibGU6XG4gICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBBd2Vzb21lVGV4dC5zdGF0ZXMucmVndWxhcikge1xuICAgICAgICAgIHRoaXMuc2V0RWRpdGFibGVTdGF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGUgPSBuZXdTdGF0ZTtcbiAgfVxuXG4gIGdldCB0ZXh0KCkge1xuICAgIHJldHVybiB0aGlzLl90ZXh0O1xuICB9XG5cbiAgc2V0IHRleHQodmFsdWUpIHtcbiAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHNldFJlZ3VsYXJTdGF0ZSgpIHtcblxuICAgIEF3ZXNvbWVUZXh0LmN1cnJlbnRFZGl0aW5nRWxlbWVudCA9IG51bGw7XG5cbiAgICB0aGlzLm9mZihcIm1vdXNlZG93blwiKTtcbiAgICB0aGlzLm9mZihcIm1vdXNlbW92ZVwiKTtcbiAgICB0aGlzLm9mZihcIm1vdXNldXBcIik7XG4gICAgdGhpcy5vZmYoXCJtb3VzZXVwb3V0c2lkZVwiKTtcblxuICAgIHRoaXMuaW5wdXQuZW5hYmxlZCA9IGZhbHNlO1xuXG4gICAgdGhpcy5vbihcImNsaWNrXCIsIGUgPT4ge1xuICAgICAgaWYgKHRoaXMuY2xpY2tzQ291bnQgPT09IDEpIHtcbiAgICAgICAgdGhpcy5jbGlja3NDb3VudCA9IDA7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoQXdlc29tZVRleHQuc3RhdGVzLmVkaXRhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMuY2xpY2tzQ291bnQgPT09IDApIHtcbiAgICAgICAgdGhpcy5jbGlja3NDb3VudCsrO1xuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgdGhpcy5jbGlja3NDb3VudCA9IDA7XG4gICAgICAgIH0sIDMwMClcbiAgICAgIH1cbiAgICB9KVxuXG4gIH1cblxuICBzZXRFZGl0YWJsZVN0YXRlKCkge1xuXG4gICAgLy8gRGlzYWJsZSBwcmV2aW91c2x5IGVuYWJsZWQgZmllbGRcbiAgICBpZiAoQXdlc29tZVRleHQuY3VycmVudEVkaXRpbmdFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgIEF3ZXNvbWVUZXh0LmN1cnJlbnRFZGl0aW5nRWxlbWVudC5zZXRTdGF0ZShBd2Vzb21lVGV4dC5zdGF0ZXMucmVndWxhcik7XG4gICAgfVxuICAgIEF3ZXNvbWVUZXh0LmN1cnJlbnRFZGl0aW5nRWxlbWVudCA9IHRoaXM7XG5cbiAgICAvLyBEaXNhYmxlIHVubmVjZXNzYXJ5IGV2ZW50c1xuICAgIHRoaXMub2ZmKFwiY2xpY2tcIik7XG5cbiAgICB0aGlzLmlucHV0LmVuYWJsZWQgPSB0cnVlO1xuICAgIHRoaXMuaW5wdXQuaGlkZSgpO1xuXG4gICAgLy8gU2VsZWN0IGFsbCBjaGFyYWN0ZXJzXG4gICAgdGhpcy5zZWxlY3Quc2V0UmFuZ2UoMCx0aGlzLnRleHQubGVuZ3RoIC0gMSk7XG4gICAgdGhpcy5pbnB1dC5pbnB1dEVsZW1lbnQuZm9jdXMoKTtcblxuICAgIHRoaXMub24oXCJtb3VzZWRvd25cIiwgZSA9PiB7XG4gICAgICB0aGlzLnNldFN0YXRlKEF3ZXNvbWVUZXh0LnN0YXRlcy5zZWxlY3RpbmcpO1xuICAgICAgdGhpcy5zZWxlY3Qub25Nb3VzZURvd24oZSk7XG4gICAgICB0aGlzLmlucHV0LnNob3coKTtcbiAgICAgIHRoaXMuaW5wdXQudXBkYXRlKGUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbihcIm1vdXNlbW92ZVwiLCBlID0+IHtcbiAgICAgIGlmICh0aGlzLnN0YXRlID09PSBBd2Vzb21lVGV4dC5zdGF0ZXMuc2VsZWN0aW5nKSB7XG4gICAgICAgIHRoaXMuc2VsZWN0Lm9uTW91c2VNb3ZlKGUpO1xuICAgICAgICB0aGlzLmlucHV0LmhpZGUoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMub24oXCJtb3VzZXVwXCIsIGUgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZShBd2Vzb21lVGV4dC5zdGF0ZXMuZWRpdGFibGUpO1xuICAgICAgdGhpcy5zZWxlY3Qub25Nb3VzZVVwKGUpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5vbihcIm1vdXNldXBvdXRzaWRlXCIsIGUgPT4ge1xuICAgICAgdGhpcy5zZXRTdGF0ZShBd2Vzb21lVGV4dC5zdGF0ZXMuZWRpdGFibGUpO1xuICAgICAgdGhpcy5zZWxlY3Qub25Nb3VzZVVwKGUpO1xuICAgIH0pO1xuXG4gIH1cblxuICBpbnNlcnRTdHJpbmcoaW5kZXgsIHN0cmluZykge1xuICAgIHRoaXMudGV4dCA9IHRoaXMudGV4dC5zdWJzdHIoMCwgaW5kZXgpICsgc3RyaW5nICsgdGhpcy50ZXh0LnN1YnN0cihpbmRleCk7XG4gIH1cblxuICByZW1vdmVTdHJpbmcoaW5kZXgsIGxlbmd0aCkge1xuICAgIGxldCBuZXdUZXh0ID0gdGhpcy50ZXh0LnNwbGl0KFwiXCIpO1xuICAgIG5ld1RleHQuc3BsaWNlKGluZGV4LCBsZW5ndGggKyAxKTtcbiAgICB0aGlzLnRleHQgPSBuZXdUZXh0LmpvaW4oXCJcIik7XG4gIH1cblxuICBnZXQgdGV4dHVyZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGV4dHVyZTtcbiAgfVxuXG4gIGdldCBmb250KCkge1xuICAgIHJldHVybiB0aGlzLl9mb250XG4gIH1cblxuICB3cml0ZVN0cmluZyggc3RyaW5nLCBmb250LCBmb250X21ldHJpY3MsIHBvcykge1xuICAgIGxldCBwcmV2X2NoYXIgPSBcIiBcIjsgIC8vIFVzZWQgdG8gY2FsY3VsYXRlIGtlcm5pbmdcbiAgICBsZXQgY3BvcyAgICAgID0gcG9zOyAgLy8gQ3VycmVudCBwZW4gcG9zaXRpb25cbiAgICBsZXQgeF9tYXggICAgID0gMC4wOyAgLy8gTWF4IHdpZHRoIC0gdXNlZCBmb3IgYm91bmRpbmcgYm94XG4gICAgbGV0IHNjYWxlICAgICA9IGZvbnRfbWV0cmljcy5jYXBTY2FsZTtcblxuICAgIGxldCBzdHJfcG9zID0gMDtcblxuICAgIGZvcig7Oykge1xuICAgICAgaWYgKCBzdHJfcG9zID09PSBzdHJpbmcubGVuZ3RoICkgYnJlYWs7XG5cbiAgICAgIHZhciBzY2hhciA9IHN0cmluZ1sgc3RyX3BvcyBdO1xuICAgICAgc3RyX3BvcysrO1xuXG4gICAgICBpZiAoIHNjaGFyID09PSBcIlxcblwiICkge1xuICAgICAgICBpZiAoIGNwb3NbMF0gPiB4X21heCApIHhfbWF4ID0gY3Bvc1swXTsgLy8gRXhwYW5kaW5nIHRoZSBib3VuZGluZyByZWN0XG4gICAgICAgIGNwb3NbMF0gID0gcG9zWzBdO1xuICAgICAgICBjcG9zWzFdIC09IGZvbnRfbWV0cmljcy5saW5lSGVpZ2h0O1xuICAgICAgICBwcmV2X2NoYXIgPSBcIiBcIjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICggc2NoYXIgPT09IFwiIFwiICkge1xuICAgICAgICAvL3NjaGFyID0gXCJfXCJcbiAgICAgICAgLy9jcG9zWzBdICs9IGZvbnQuc3BhY2VfYWR2YW5jZSAqIHNjYWxlO1xuICAgICAgICAvL3ByZXZfY2hhciA9IFwiIFwiO1xuICAgICAgICAvL2NvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgZm9udF9jaGFyID0gZm9udC5jaGFyc1sgc2NoYXIgXTtcbiAgICAgIGlmICggIWZvbnRfY2hhciApIHsgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3Vic3RpdHV0aW5nIHVuYXZhaWxhYmxlIGNoYXJhY3RlcnMgd2l0aCAnPydcbiAgICAgICAgc2NoYXIgPSBcIj9cIjtcbiAgICAgICAgZm9udF9jaGFyID0gZm9udC5jaGFyc1sgXCI/XCIgXTtcbiAgICAgIH1cblxuICAgICAgdmFyIGtlcm4gPSBmb250Lmtlcm5bIHByZXZfY2hhciArIHNjaGFyIF07XG4gICAgICBpZiAoICFrZXJuICkga2VybiA9IDAuMDtcblxuICAgICAgLy8gY2FsY3VsYXRpbmcgdGhlIGdseXBoIHJlY3RhbmdsZSBhbmQgY29weWluZyBpdCB0byB0aGUgdmVydGV4IGFycmF5XG4gICAgICB2YXIgcmVjdCA9IHRoaXMuY2hhclJlY3QoIGNwb3MsIGZvbnQsIGZvbnRfbWV0cmljcywgZm9udF9jaGFyLCBrZXJuICk7XG5cbiAgICAgIHJlY3QucG9zaXRpb25zLm1hcCgocG9zKSA9PiB0aGlzLnZlcnRpY2VzWyB0aGlzLmFycmF5UG9zaXRpb25zLnZlcnRleCsrIF0gPSBwb3MgKTtcbiAgICAgIHJlY3QudXZzLm1hcCgodXYpID0+IHRoaXMudXZzWyB0aGlzLmFycmF5UG9zaXRpb25zLnV2cysrIF0gPSB1diApO1xuICAgICAgcmVjdC5zZGZTaXplcy5tYXAoKHNkZikgPT4gdGhpcy5zZGZTaXplc1sgdGhpcy5hcnJheVBvc2l0aW9ucy5zZGYrKyBdID0gc2RmICk7XG5cbiAgICAgIHByZXZfY2hhciA9IHNjaGFyO1xuICAgICAgY3BvcyA9IHJlY3QucG9zO1xuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICByZWN0IDogWyBwb3NbMF0sIHBvc1sxXSwgeF9tYXggLSBwb3NbMF0sIHBvc1sxXSAtIGNwb3NbMV0gKyBmb250X21ldHJpY3MubGluZUhlaWdodCBdLFxuICAgICAgc3RyaW5nX3BvcyA6IHN0cl9wb3MsXG4gICAgICAvL2FycmF5X3BvcyA6IGFycmF5X3Bvc1xuICAgIH1cblxuICB9XG5cbiAgZm9udE1ldHJpY3MoZm9udFNpemUsIG1vcmVMaW5lR2FwID0gMC4yKSB7XG5cbiAgICBjb25zdCB7Y2FwX2hlaWdodCwgeF9oZWlnaHQsIGFzY2VudDogZm9udEFzY2VudCAsIGRlc2NlbnQsIGxpbmVfZ2FwfSA9IHRoaXMuZm9udDtcblxuICAgIGNvbnN0IGNhcFNjYWxlID0gdGhpcy5zdHlsZS5mb250U2l6ZSAvIGNhcF9oZWlnaHQ7XG4gICAgY29uc3QgbG93U2NhbGUgPSBNYXRoLnJvdW5kKCB4X2hlaWdodCAqIGNhcFNjYWxlICkgLyB4X2hlaWdodDtcbiAgICBjb25zdCBhc2NlbnQgPSBNYXRoLnJvdW5kKCBmb250QXNjZW50ICogY2FwU2NhbGUgKTtcbiAgICBsZXQgbGluZUhlaWdodCA9IE1hdGgucm91bmQoIGNhcFNjYWxlICogKCBmb250QXNjZW50ICsgZGVzY2VudCArIGxpbmVfZ2FwICkgKyBtb3JlTGluZUdhcCk7XG5cbiAgICBpZiAodGhpcy5zdHlsZS5saW5lSGVpZ2h0ID4gMClcbiAgICAgIGxpbmVIZWlnaHQgPSB0aGlzLnN0eWxlLmxpbmVIZWlnaHQ7XG4gICAgZWxzZVxuICAgICAgdGhpcy5zdHlsZS5saW5lSGVpZ2h0ID0gbGluZUhlaWdodDtcblxuICAgIHJldHVybiB7XG4gICAgICBjYXBTY2FsZSAgIDogY2FwU2NhbGUsXG4gICAgICBsb3dTY2FsZSAgIDogbG93U2NhbGUsXG4gICAgICBhc2NlbnQgICAgICA6IGFzY2VudCxcbiAgICAgIGxpbmVIZWlnaHQgOiBsaW5lSGVpZ2h0XG4gICAgfTtcbiAgfVxuXG4gIGNoYXJSZWN0KCBwb3MsIGZvbnQsIGZvbnRfbWV0cmljcywgZm9udF9jaGFyLCBrZXJuID0gMC4wICkge1xuXG4gICAgLy8gTG93IGNhc2UgY2hhcmFjdGVycyBoYXZlIGZpcnN0IGJpdCBzZXQgaW4gJ2ZsYWdzJ1xuICAgIHZhciBsb3djYXNlID0gKCBmb250X2NoYXIuZmxhZ3MgJiAxICkgPT09IDE7XG5cbiAgICAvLyBQZW4gcG9zaXRpb24gaXMgYXQgdGhlIHRvcCBvZiB0aGUgbGluZSwgWSBnb2VzIHVwXG4gICAgdmFyIGJhc2VsaW5lID0gcG9zWzFdIC0gZm9udF9tZXRyaWNzLmFzY2VudDtcblxuICAgIC8vIExvdyBjYXNlIGNoYXJzIHVzZSB0aGVpciBvd24gc2NhbGVcbiAgICB2YXIgc2NhbGUgPSBsb3djYXNlID8gZm9udF9tZXRyaWNzLmxvd1NjYWxlIDogZm9udF9tZXRyaWNzLmNhcFNjYWxlO1xuXG4gICAgLy8gTGF5aW5nIG91dCB0aGUgZ2x5cGggcmVjdGFuZ2xlXG4gICAgdmFyIGcgICAgICA9IGZvbnRfY2hhci5yZWN0O1xuICAgIHZhciBib3R0b20gPSBiYXNlbGluZSAtIHNjYWxlICogKCBmb250LmRlc2NlbnQgKyBmb250Lml5ICk7XG4gICAgdmFyIHRvcCAgICA9IGJvdHRvbSAgICsgc2NhbGUgKiAoIGZvbnQucm93X2hlaWdodCApO1xuICAgIHZhciBsZWZ0ICAgPSBwb3NbMF0gICArIHNjYWxlICogKCBmb250X2NoYXIuYmVhcmluZ194ICsga2VybiAtIGZvbnQuaXggKTtcbiAgICB2YXIgcmlnaHQgID0gbGVmdCAgICAgKyBzY2FsZSAqICggZ1syXSAtIGdbMF0gKTtcbiAgICB2YXIgcCA9IFsgbGVmdCwgdG9wLCByaWdodCwgYm90dG9tIF07XG5cbiAgICAvLyBBZHZhbmNpbmcgcGVuIHBvc2l0aW9uXG4gICAgdmFyIG5ld19wb3NfeCA9IHBvc1swXSArIHNjYWxlICogKCBmb250X2NoYXIuYWR2YW5jZV94ICk7XG5cbiAgICAvLyBTaWduZWQgZGlzdGFuY2UgZmllbGQgc2l6ZSBpbiBzY3JlZW4gcGl4ZWxzXG4gICAgdmFyIHNkZl9zaXplICA9IDIuMCAqIGZvbnQuaXkgKiBzY2FsZTtcblxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgICAgIHBbMF0sIHBbM10sIC8vIGxlZnQgYm90dG9tLFxuICAgICAgcFsyXSwgcFszXSwgLy8gcmlnaHQgYm90dG9tLFxuICAgICAgcFsyXSwgcFsxXSwgLy8gcmlnaHQgdG9wXG4gICAgICBwWzBdLCBwWzFdLCAvLyBsZWZ0IHRvcFxuICAgIF07XG5cbiAgICBjb25zdCB1dnMgPSBbXG4gICAgICBnWzBdLCBnWzFdLCAvLyBsZWZ0IHRvcFxuICAgICAgZ1syXSwgZ1sxXSwgLy8gcmlnaHQgdG9wXG4gICAgICBnWzJdLCBnWzNdLCAvLyByaWdodCBib3R0b20sXG4gICAgICBnWzBdLCBnWzNdLCAvLyBsZWZ0IGJvdHRvbSxcbiAgICBdO1xuXG4gICAgY29uc3Qgc2RmU2l6ZXMgPSBbXG4gICAgICBzZGZfc2l6ZSxcbiAgICAgIHNkZl9zaXplLFxuICAgICAgc2RmX3NpemUsXG4gICAgICBzZGZfc2l6ZSxcbiAgICBdO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIHBvc2l0aW9ucyxcbiAgICAgIHV2cyxcbiAgICAgIHNkZlNpemVzLFxuICAgICAgcG9zOiBbIG5ld19wb3NfeCwgcG9zWzFdIF1cbiAgICB9O1xuXG4gICAgLy9yZXR1cm4geyB2ZXJ0aWNlcyA6IHZlcnRpY2VzLCBwb3MgOiBbIG5ld19wb3NfeCwgcG9zWzFdIF0gfTtcbiAgfVxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IEF3ZXNvbWVUZXh0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3RleHQuanMiLCJcbmNsYXNzIFRleHRMYXlvdXQge1xuXG4gIHRleHQgPSBcIlwiO1xuICBmb250ID0gbnVsbDtcbiAgbWV0cmljcyA9IG51bGw7XG4gIGZvbnRTaXplID0gMjA7XG4gIGFsaWduID0gXCJsZWZ0XCI7XG4gIHN0YXJ0WCA9IDA7XG4gIHN0YXJ0WSA9IDA7XG4gIHdyYXBwZXJXaWR0aCA9IDEwMDtcbiAgd3JhcFdvcmRzID0gZmFsc2U7XG4gIHdvcmRzTWV0cmljcyA9IFtdO1xuICBsZXR0ZXJzQ291bnQgPSAwO1xuICBoZWlnaHQgPSAwO1xuICBsaW5lc0NvdW50ID0gMDtcbiAgbGluZUhlaWdodCA9IDA7XG4gIGdseXBocyA9IFtdO1xuICBvd25lciA9IG51bGw7XG5cblxuICBjb25zdHJ1Y3Rvcihvd25lciwgY29uZmlnKSB7XG5cbiAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgdGhpcy50ZXh0ID0gb3duZXIudGV4dDtcbiAgICB0aGlzLmZvbnQgPSBvd25lci5mb250O1xuICAgIHRoaXMuZm9udFNpemUgPSBjb25maWcuZm9udFNpemU7XG4gICAgdGhpcy53cmFwV29yZHMgPSBjb25maWcud3JhcFdvcmRzO1xuICAgIHRoaXMud3JhcHBlcldpZHRoID0gY29uZmlnLndyYXBwZXJXaWR0aDtcbiAgICB0aGlzLmxpbmVIZWlnaHQgPSBjb25maWcubGluZUhlaWdodDtcbiAgICB0aGlzLmFsaWduID0gY29uZmlnLmFsaWduO1xuICAgIHRoaXMudXBkYXRlKCk7XG5cbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICB0aGlzLnRleHQgPSB0aGlzLm93bmVyLnRleHQ7XG4gICAgdGhpcy5mb250ID0gdGhpcy5vd25lci5mb250O1xuXG4gICAgdGhpcy5sZXR0ZXJzQ291bnQgPSB0aGlzLnRleHQuc3BsaXQoXCJcIikubGVuZ3RoO1xuICAgIHRoaXMubWV0cmljcyA9IHRoaXMuZm9udE1ldHJpY3ModGhpcy5mb250LCAwLjApO1xuICAgIHRoaXMuc3RhcnRZID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XG4gICAgdGhpcy5jYWxjdWxhdGVXb3Jkc1Bvc2l0aW9ucygpO1xuXG4gICAgdGhpcy5nbHlwaHMgPSBbXTtcblxuICAgIHRoaXMud29yZHNNZXRyaWNzLmZvckVhY2ggKHdvcmQgPT4ge1xuICAgICAgdGhpcy5nZXRHbHlwaHMod29yZC53b3JkLCBbd29yZC54LCB3b3JkLnldKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZvbnRNZXRyaWNzKGZvbnRTaXplLCBtb3JlTGluZUdhcCA9IDAuMikge1xuXG4gICAgY29uc3Qge2NhcF9oZWlnaHQsIHhfaGVpZ2h0LCBhc2NlbnQ6IGZvbnRBc2NlbnQgLCBkZXNjZW50LCBsaW5lX2dhcH0gPSB0aGlzLmZvbnQ7XG5cbiAgICBjb25zdCBjYXBTY2FsZSA9IHRoaXMuZm9udFNpemUgLyBjYXBfaGVpZ2h0O1xuICAgIGNvbnN0IGxvd1NjYWxlID0gTWF0aC5yb3VuZCggeF9oZWlnaHQgKiBjYXBTY2FsZSApIC8geF9oZWlnaHQ7XG4gICAgY29uc3QgYXNjZW50ID0gTWF0aC5yb3VuZCggZm9udEFzY2VudCAqIGNhcFNjYWxlICk7XG4gICAgbGV0IGxpbmVIZWlnaHQgPSBNYXRoLnJvdW5kKCBjYXBTY2FsZSAqICggZm9udEFzY2VudCArIGRlc2NlbnQgKyBsaW5lX2dhcCApICsgbW9yZUxpbmVHYXAgKTtcblxuICAgIGlmICh0aGlzLmxpbmVIZWlnaHQgPiAwKVxuICAgICAgbGluZUhlaWdodCA9IHRoaXMubGluZUhlaWdodDtcbiAgICBlbHNlXG4gICAgICB0aGlzLmxpbmVIZWlnaHQgPSBsaW5lSGVpZ2h0O1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcFNjYWxlICAgOiBjYXBTY2FsZSxcbiAgICAgIGxvd1NjYWxlICAgOiBsb3dTY2FsZSxcbiAgICAgIGFzY2VudCAgICAgIDogYXNjZW50LFxuICAgICAgbGluZUhlaWdodCA6IGxpbmVIZWlnaHRcbiAgICB9O1xuICB9XG5cbiAgY2hhclJlY3QoIHBvcywgZm9udF9jaGFyLCBrZXJuID0gMC4wICkge1xuXG4gICAgLy8gTG93IGNhc2UgY2hhcmFjdGVycyBoYXZlIGZpcnN0IGJpdCBzZXQgaW4gJ2ZsYWdzJ1xuICAgIHZhciBsb3djYXNlID0gKCBmb250X2NoYXIuZmxhZ3MgJiAxICkgPT09IDE7XG5cbiAgICAvLyBQZW4gcG9zaXRpb24gaXMgYXQgdGhlIHRvcCBvZiB0aGUgbGluZSwgWSBnb2VzIHVwXG4gICAgdmFyIGJhc2VsaW5lID0gcG9zWzFdIC0gdGhpcy5tZXRyaWNzLmFzY2VudDtcblxuICAgIC8vIExvdyBjYXNlIGNoYXJzIHVzZSB0aGVpciBvd24gc2NhbGVcbiAgICB2YXIgc2NhbGUgPSBsb3djYXNlID8gdGhpcy5tZXRyaWNzLmxvd1NjYWxlIDogdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xuXG4gICAgLy8gTGF5aW5nIG91dCB0aGUgZ2x5cGggcmVjdGFuZ2xlXG4gICAgdmFyIGcgICAgICA9IGZvbnRfY2hhci5yZWN0O1xuICAgIHZhciBib3R0b20gPSBiYXNlbGluZSAtIHNjYWxlICogKCB0aGlzLmZvbnQuZGVzY2VudCArIHRoaXMuZm9udC5peSApO1xuICAgIHZhciB0b3AgICAgPSBib3R0b20gICArIHNjYWxlICogKCB0aGlzLmZvbnQucm93X2hlaWdodCApO1xuICAgIHZhciBsZWZ0ICAgPSBwb3NbMF0gICArIHNjYWxlICogKCBmb250X2NoYXIuYmVhcmluZ194ICsga2VybiAtIHRoaXMuZm9udC5peCApO1xuICAgIHZhciByaWdodCAgPSBsZWZ0ICAgICArIHNjYWxlICogKCBnWzJdIC0gZ1swXSApO1xuICAgIHZhciBwID0gWyBsZWZ0LCB0b3AsIHJpZ2h0LCBib3R0b20gXTtcblxuICAgIC8vIEFkdmFuY2luZyBwZW4gcG9zaXRpb25cbiAgICB2YXIgbmV3X3Bvc194ID0gcG9zWzBdICsgc2NhbGUgKiAoIGZvbnRfY2hhci5hZHZhbmNlX3ggKTtcblxuICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcbiAgICAgIHBbMF0sIHBbM10sIC8vIGxlZnQgYm90dG9tLFxuICAgICAgcFsyXSwgcFszXSwgLy8gcmlnaHQgYm90dG9tLFxuICAgICAgcFsyXSwgcFsxXSwgLy8gcmlnaHQgdG9wXG4gICAgICBwWzBdLCBwWzFdLCAvLyBsZWZ0IHRvcFxuICAgIF07XG5cbiAgICByZXR1cm4ge1xuICAgICAgcG9zaXRpb25zLFxuICAgICAgcG9zOiBbIG5ld19wb3NfeCwgcG9zWzFdIF0sXG4gICAgICBtZXRyaWNzOiB7eDogcG9zWzBdLCB5OiBwb3NbMV0sIHdpZHRoOiBzY2FsZSAqIGZvbnRfY2hhci5hZHZhbmNlX3ggfVxuICAgIH07XG4gIH1cblxuICBnZXRTdHJpbmdTaXplKHN0cmluZykge1xuXG4gICAgbGV0IHdpZHRoID0gMDtcbiAgICBsZXQgaGVpZ2h0ID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XG5cbiAgICBjb25zdCBjaGFycyA9IFsuLi5zdHJpbmddO1xuXG4gICAgLy8gSXRlcmF0ZSB0aG91Z2h0IHRoZSBjaGFycywgY2FsY3VsYXRlIHBvc2l0aW9uXG4gICAgY2hhcnMuZm9yRWFjaChjaGFyID0+IHtcbiAgICAgIGxldCBmb250X2NoYXIgPSB0aGlzLmZvbnQuY2hhcnNbIGNoYXIgXTtcblxuICAgICAgLyppZiAoY2hhciA9PT0gXCIgXCIpIHtcbiAgICAgICAgd2lkdGggKz0gdGhpcy5mb250LnNwYWNlX2FkdmFuY2UgKiB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0qL1xuXG4gICAgICAvLyBHZXQgY2hhciBtZXRyaWNzXG4gICAgICBsZXQgY2hhclJlY3QgPSB0aGlzLmNoYXJSZWN0KFt3aWR0aCwwXSwgZm9udF9jaGFyLCAwLjIpO1xuICAgICAgd2lkdGggPSBjaGFyUmVjdC5wb3NbMF07XG5cbiAgICB9KTtcblxuICAgIHJldHVybiB7d2lkdGgsIGhlaWdodH07XG5cbiAgfVxuXG4gIGNhbGN1bGF0ZVdvcmRzUG9zaXRpb25zKCkge1xuXG4gICAgY29uc3Qgd29yZHMgPSB0aGlzLnRleHQuc3BsaXQoXCIgXCIpO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGggLSAxOyBpKyspIHtcbiAgICAgIHdvcmRzW2ldID0gd29yZHNbaV0gKyBcIiBcIjtcbiAgICB9XG5cbiAgICB0aGlzLndvcmRzTWV0cmljcyA9IFtdO1xuXG4gICAgLy8gSW5pdGlhbCBwb3NpdGlvblxuICAgIGxldCB4ID0gdGhpcy5zdGFydFg7XG4gICAgbGV0IHkgPSB0aGlzLnN0YXJ0WTtcblxuICAgIC8vIENhbGN1bGF0ZSB3b3JkcyBwb3NpdGlvbnMgb24gbGluZXNcbiAgICB3b3Jkcy5mb3JFYWNoKHdvcmQgPT4ge1xuICAgICAgY29uc3Qgd29yZFNpemUgPSB0aGlzLmdldFN0cmluZ1NpemUod29yZCk7XG4gICAgICBpZiAoeCArIHdvcmRTaXplLndpZHRoID4gdGhpcy5zdGFydFggKyB0aGlzLndyYXBwZXJXaWR0aCAmJiB0aGlzLndyYXBXb3Jkcykge1xuICAgICAgICB4ID0gdGhpcy5zdGFydFg7XG4gICAgICAgIHkgKz0gd29yZFNpemUuaGVpZ2h0O1xuICAgICAgfVxuXG4gICAgICB0aGlzLndvcmRzTWV0cmljcy5wdXNoKHsuLi53b3JkU2l6ZSwgeCwgeSwgd29yZH0pO1xuXG4gICAgICAvL3ggKz0gd29yZFNpemUud2lkdGggKyB0aGlzLmZvbnQuc3BhY2VfYWR2YW5jZSAqIHRoaXMubWV0cmljcy5jYXBTY2FsZTtcbiAgICAgIHggKz0gd29yZFNpemUud2lkdGg7XG4gICAgfSk7XG5cbiAgICAvLyBDYWxjdWxhdGUgbGluZXMgY291bnRcbiAgICB0aGlzLmxpbmVzQ291bnQgPSAoeSAtIHRoaXMuc3RhcnRZKSAvIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgMTtcbiAgICB0aGlzLmhlaWdodCA9IHRoaXMubGluZXNDb3VudCAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xuXG4gICAgLy8gQ2hhbmdlIGFsaWduIFRPRE8gb3B0aW1pc2VcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGluZXNDb3VudDsgKytpKSB7XG4gICAgICBjb25zdCB3b3Jkc09uTGluZSA9IHRoaXMud29yZHNNZXRyaWNzLmZpbHRlcih3b3JkID0+IHdvcmQueSA9PT0gdGhpcy5zdGFydFkgKyAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSlcblxuICAgICAgY29uc3QgbGFzdFdvcmQgPSB3b3Jkc09uTGluZVt3b3Jkc09uTGluZS5sZW5ndGggLSAxXTtcblxuICAgICAgaWYgKGxhc3RXb3JkKSB7XG4gICAgICAgIGNvbnN0IGZyZWVTcGFjZSA9ICh0aGlzLnN0YXJ0WCArIHRoaXMud3JhcHBlcldpZHRoKSAtIChsYXN0V29yZC54ICsgbGFzdFdvcmQud2lkdGgpO1xuXG4gICAgICAgIGxldCBsZWZ0T2Zmc2V0ID0gMDtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMuYWxpZ24pIHtcbiAgICAgICAgICBjYXNlIFwiY2VudGVyXCI6XG4gICAgICAgICAgICBsZWZ0T2Zmc2V0ID0gZnJlZVNwYWNlIC8gMjtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgXCJyaWdodFwiOlxuICAgICAgICAgICAgbGVmdE9mZnNldCA9IGZyZWVTcGFjZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud29yZHNNZXRyaWNzLmZvckVhY2god29yZCA9PiB7XG4gICAgICAgICAgaWYgKHdvcmQueSA9PT0gdGhpcy5zdGFydFkgKyAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSkge1xuICAgICAgICAgICAgd29yZC54ICs9IGxlZnRPZmZzZXQ7XG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGdldEdseXBocyggc3RyaW5nLCBwb3MpIHtcbiAgICBsZXQgcHJldl9jaGFyID0gXCIgXCI7ICAvLyBVc2VkIHRvIGNhbGN1bGF0ZSBrZXJuaW5nXG4gICAgbGV0IGNwb3MgICAgICA9IHBvczsgIC8vIEN1cnJlbnQgcGVuIHBvc2l0aW9uXG4gICAgbGV0IHhfbWF4ICAgICA9IDAuMDsgIC8vIE1heCB3aWR0aCAtIHVzZWQgZm9yIGJvdW5kaW5nIGJveFxuICAgIGxldCBzY2FsZSAgICAgPSB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XG5cbiAgICBsZXQgc3RyX3BvcyA9IDA7XG5cbiAgICBmb3IoOzspIHtcbiAgICAgIGlmICggc3RyX3BvcyA9PT0gc3RyaW5nLmxlbmd0aCApIGJyZWFrO1xuXG4gICAgICB2YXIgc2NoYXIgPSBzdHJpbmdbIHN0cl9wb3MgXTtcbiAgICAgIHN0cl9wb3MrKztcblxuICAgICAgaWYgKCBzY2hhciA9PT0gXCJcXG5cIiApIHtcbiAgICAgICAgaWYgKCBjcG9zWzBdID4geF9tYXggKSB4X21heCA9IGNwb3NbMF07IC8vIEV4cGFuZGluZyB0aGUgYm91bmRpbmcgcmVjdFxuICAgICAgICBjcG9zWzBdICA9IHBvc1swXTtcbiAgICAgICAgY3Bvc1sxXSAtPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcbiAgICAgICAgcHJldl9jaGFyID0gXCIgXCI7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIHNjaGFyID09PSBcIiBcIiApIHtcbiAgICAgICAgLy9zY2hhciA9IFwiX1wiXG4gICAgICAgIC8vY3Bvc1swXSArPSB0aGlzLmZvbnQuc3BhY2VfYWR2YW5jZSAqIHNjYWxlO1xuICAgICAgICBwcmV2X2NoYXIgPSBcIiBcIjtcbiAgICAgICAgLy9jb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGZvbnRfY2hhciA9IHRoaXMuZm9udC5jaGFyc1sgc2NoYXIgXTtcbiAgICAgIGlmICggIWZvbnRfY2hhciApIHsgICAgICAgICAgICAgICAgICAgICAgICAgLy8gU3Vic3RpdHV0aW5nIHVuYXZhaWxhYmxlIGNoYXJhY3RlcnMgd2l0aCAnPydcbiAgICAgICAgc2NoYXIgPSBcIj9cIjtcbiAgICAgICAgZm9udF9jaGFyID0gdGhpcy5mb250LmNoYXJzWyBcIj9cIiBdO1xuICAgICAgfVxuXG4gICAgICB2YXIga2VybiA9IHRoaXMuZm9udC5rZXJuWyBwcmV2X2NoYXIgKyBzY2hhciBdO1xuICAgICAgaWYgKCAha2VybiApIGtlcm4gPSAwLjA7XG5cbiAgICAgIC8vIGNhbGN1bGF0aW5nIHRoZSBnbHlwaCByZWN0YW5nbGUgYW5kIGNvcHlpbmcgaXQgdG8gdGhlIHZlcnRleCBhcnJheVxuICAgICAgdmFyIHJlY3QgPSB0aGlzLmNoYXJSZWN0KCBjcG9zLCBmb250X2NoYXIsIGtlcm4gKTtcblxuICAgICAgcHJldl9jaGFyID0gc2NoYXI7XG4gICAgICBjcG9zID0gcmVjdC5wb3M7XG5cbiAgICAgIHRoaXMuZ2x5cGhzLnB1c2goe1xuICAgICAgICBsZXR0ZXI6IHNjaGFyLFxuICAgICAgICB2ZXJ0aWNlczogcmVjdC5wb3NpdGlvbnMsXG4gICAgICAgIHBvc2l0aW9uOiByZWN0LnBvcyxcbiAgICAgICAgbWV0cmljczogcmVjdC5tZXRyaWNzXG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBUZXh0TGF5b3V0O1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2xheW91dC5qcyIsImNvbnN0IGNyZWF0ZUluZGljZXMgPSByZXF1aXJlKFwicXVhZC1pbmRpY2VzXCIpXHJcblxyXG5jbGFzcyBTZWxlY3Qge1xyXG5cclxuICByYW5nZSA9IFswLDBdO1xyXG4gIG1ldHJpY3MgPSBudWxsO1xyXG4gIGxheW91dCA9IG51bGw7XHJcbiAgZGlydHkgPSBmYWxzZTtcclxuICBpbmRleEJ1ZmZlciA9IGZhbHNlO1xyXG4gIG93bmVyID0gbnVsbDtcclxuXHJcbiAgY29uc3RydWN0b3Iob3duZXIpIHtcclxuICAgIHRoaXMub3duZXIgPSBvd25lcjtcclxuICAgIHRoaXMubWV0cmljcyA9IG93bmVyLm1ldHJpY3M7XHJcbiAgICB0aGlzLmxheW91dCA9IG93bmVyLmxheW91dDtcclxuICB9XHJcblxyXG4gIHVwZGF0ZSgpIHtcclxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMub3duZXIubWV0cmljcztcclxuICAgIHRoaXMubGF5b3V0ID0gdGhpcy5vd25lci5sYXlvdXQ7XHJcblxyXG4gICAgLy8gVmVydGljZXMgYXJyYXkgZm9yIGFsbCBzZWxlY3RlZCBsaW5lc1xyXG4gICAgdGhpcy52ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5sYXlvdXQubGluZXNDb3VudCAqIDQgKiAyKTtcclxuXHJcbiAgICBpZiAodGhpcy5yYW5nZVsxXSAhPT0gbnVsbClcclxuICAgIHRoaXMuYnVpbGRWZXJ0aWNlcygpO1xyXG5cclxuICAgIHRoaXMuaW5kaWNlcyA9IGNyZWF0ZUluZGljZXMoe1xyXG4gICAgICBjbG9ja3dpc2U6IHRydWUsXHJcbiAgICAgIHR5cGU6ICd1aW50MTYnLFxyXG4gICAgICBjb3VudDp0aGlzLmxheW91dC5saW5lc0NvdW50XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLmRpcnR5ID0gdHJ1ZTtcclxuICAgIHRoaXMuaW5kZXhCdWZmZXIgPSB0cnVlO1xyXG4gIH1cclxuXHJcbiAgc2V0UmFuZ2Uoc3RhcnQgPSBudWxsLCBlbmQgPSBudWxsKSB7XHJcblxyXG4gICAgY29uc3Qge2dseXBoc30gPSB0aGlzLm93bmVyLmxheW91dDtcclxuXHJcbiAgICBpZiAoc3RhcnQgPT09IG51bGwpIHN0YXJ0ID0gdGhpcy5yYW5nZVswXTtcclxuICAgIGlmIChlbmQgPT09IG51bGwpIGVuZCA9IHRoaXMucmFuZ2VbMV07XHJcblxyXG4gICAgaWYgKHN0YXJ0IDwgMCkgc3RhcnQgPSAwO1xyXG4gICAgaWYgKGVuZCA8IDApIGVuZCA9IDA7XHJcblxyXG4gICAgaWYgKHN0YXJ0ID4gZ2x5cGhzLmxlbmd0aCAtMSlzdGFydCA9IGdseXBocy5sZW5ndGggLSAxO1xyXG4gICAgaWYgKGVuZCA+IGdseXBocy5sZW5ndGggLSAxKSBlbmQgPSBnbHlwaHMubGVuZ3RoIC0gMTtcclxuXHJcbiAgICBpZiAoZW5kID09PSBmYWxzZSkgZW5kID0gbnVsbDtcclxuXHJcbiAgICB0aGlzLnJhbmdlID0gW3N0YXJ0LCBlbmRdO1xyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGJ1aWxkVmVydGljZXMoKSB7XHJcblxyXG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5vd25lci5sYXlvdXQubWV0cmljcztcclxuICAgIC8vIFNlbGVjdCByYW5nZVxyXG4gICAgbGV0IHN0YXJ0ID0gdGhpcy5sYXlvdXQuZ2x5cGhzW01hdGgubWluLmFwcGx5KG51bGwsdGhpcy5yYW5nZSldO1xyXG4gICAgbGV0IGVuZCA9IHRoaXMubGF5b3V0LmdseXBoc1tNYXRoLm1heC5hcHBseShudWxsLHRoaXMucmFuZ2UpXTtcclxuXHJcblxyXG4gICAgLy8gSXRlcmF0ZSB0aG91Z2h0IGFsbCBsaW5lc1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxheW91dC5saW5lc0NvdW50OyArK2kpIHtcclxuICAgICAgbGV0IGxldHRlckNvdW50ID0gMDsgLy8gbGV0dGVycyBwYXNzZWRcclxuICAgICAgbGV0IGZpcnN0TGV0dGVyID0gbnVsbDsgLy8gZmlyc3QgbGV0dGVyIG9uIHRoaXMgbGluZVxyXG4gICAgICBsZXQgbGFzdExldHRlciA9IG51bGw7IC8vIGxhc3QgbGV0dGVyIG9uIHRoaXMgbGluZVxyXG5cclxuXHJcbiAgICAgIGlmIChpICogdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyB0aGlzLm1ldHJpY3MubGluZUhlaWdodCA8IHN0YXJ0LnBvc2l0aW9uWzFdKSBjb250aW51ZTtcclxuICAgICAgaWYgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCArIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ID4gZW5kLnBvc2l0aW9uWzFdKSBjb250aW51ZTtcclxuXHJcbiAgICAgIC8vIFRha2UgZXZlcnkgd29yZCwgaWYgaXQncyBsYXN0IG9yIGZpcnN0IG9uIGxpbmUgLSBjaGFuZ2UgYm91bmRzIGxldHRlcnNcclxuICAgICAgdGhpcy5sYXlvdXQud29yZHNNZXRyaWNzLm1hcCh3b3JkID0+IHtcclxuXHJcbiAgICAgICAgaWYgKHdvcmQueSA9PT0gdGhpcy5sYXlvdXQuc3RhcnRZICsgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCkpIHtcclxuICAgICAgICAgIGlmIChmaXJzdExldHRlciA9PT0gbnVsbCkgZmlyc3RMZXR0ZXIgPSBsZXR0ZXJDb3VudDtcclxuICAgICAgICAgIGxhc3RMZXR0ZXIgPSBsZXR0ZXJDb3VudCArIHdvcmQud29yZC5sZW5ndGggLSAxO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0dGVyQ291bnQgKz0gd29yZC53b3JkLmxlbmd0aDtcclxuICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgIC8vIEJvdW5kcyBsZXR0ZXJzIGZvciBjdXJyZW50IGxpbmVcclxuICAgICAgbGV0IHN0YXJ0TGluZUxldHRlciA9IHRoaXMubGF5b3V0LmdseXBoc1tmaXJzdExldHRlcl07XHJcbiAgICAgIGxldCBlbmRMaW5lTGV0dGVyID0gdGhpcy5sYXlvdXQuZ2x5cGhzW2xhc3RMZXR0ZXJdO1xyXG5cclxuICAgICAgLy8gSWYgdGhlIHN0YXJ0IG9yIGVuZCByYW5nZSBpcyBvbiB0aGlzIGxpbmUsIGNoYW5nZSBib3VuZHMgZm9yIHRoZW1cclxuICAgICAgaWYgKHN0YXJ0LnBvc2l0aW9uWzFdID09PSAgc3RhcnRMaW5lTGV0dGVyLnBvc2l0aW9uWzFdKSBzdGFydExpbmVMZXR0ZXIgPSBzdGFydDtcclxuICAgICAgaWYgKGVuZC5wb3NpdGlvblsxXSA9PT0gZW5kTGluZUxldHRlci5wb3NpdGlvblsxXSkgZW5kTGluZUxldHRlciA9IGVuZDtcclxuXHJcbiAgICAgIC8vIFdlIHVzZSBvZmZzZXQgdG8gYXZvaWQgc2VsZWN0cyBvdmVybGFwcGluZ1xyXG4gICAgICBjb25zdCBvZmZzZXQgPSAodGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgLSB0aGlzLm1ldHJpY3MuYXNjZW50KSAvIDI7XHJcblxyXG4gICAgICAvLyBBZGQgcG9zaXRpb25zIHRvIGFycmF5XHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KV0gPSBzdGFydExpbmVMZXR0ZXIudmVydGljZXNbMF07XHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDFdID0gc3RhcnRMaW5lTGV0dGVyLnZlcnRpY2VzWzFdICsgb2Zmc2V0O1xyXG5cclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgMl0gPSBlbmRMaW5lTGV0dGVyLnZlcnRpY2VzWzJdO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyAzXSA9IGVuZExpbmVMZXR0ZXIudmVydGljZXNbM10gICArIG9mZnNldDtcclxuXHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDRdID0gZW5kTGluZUxldHRlci52ZXJ0aWNlc1s0XTtcclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgNV0gPSBlbmRMaW5lTGV0dGVyLnZlcnRpY2VzWzVdICAtIG9mZnNldDtcclxuXHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDZdID0gc3RhcnRMaW5lTGV0dGVyLnZlcnRpY2VzWzZdO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyA3XSA9IHN0YXJ0TGluZUxldHRlci52ZXJ0aWNlc1s3XSAgLSBvZmZzZXQ7XHJcblxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGdldENsb3Nlc3RHbHlwaCh4LCB5KSB7XHJcbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLm93bmVyLm1ldHJpY3M7XHJcbiAgICB0aGlzLmxheW91dCA9IHRoaXMub3duZXIubGF5b3V0O1xyXG5cclxuICAgIGNvbnN0IHsgZ2x5cGhzIH0gPSB0aGlzLm93bmVyLmxheW91dDtcclxuXHJcbiAgICBjb25zdCBsaW5lSGVpZ2h0ID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XHJcbiAgICBjb25zdCBzZWxlY3RpbmdMaW5lID0gTWF0aC5mbG9vcih5IC8gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQpO1xyXG4gICAgY29uc3Qgc2VsZWN0aW5nTGluZVkgPSBzZWxlY3RpbmdMaW5lICogbGluZUhlaWdodDtcclxuICAgIGxldCBsYXN0R2x5cGhPbkxpbmUgPSBnbHlwaHNbZ2x5cGhzLmxlbmd0aCAtIDFdO1xyXG4gICAgbGV0IGZpcnN0R2x5cGhPbkxpbmUgPSBudWxsO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2x5cGhzLmxlbmd0aCA7ICsraSkge1xyXG5cclxuICAgICAgbGV0IGdseXBoID0gZ2x5cGhzW2ldO1xyXG5cclxuICAgICAgaWYgKGdseXBoLm1ldHJpY3MueSA9PT0gc2VsZWN0aW5nTGluZVkgKyBsaW5lSGVpZ2h0KSB7XHJcbiAgICAgICAgbGFzdEdseXBoT25MaW5lID0gZ2x5cGg7XHJcbiAgICAgICAgaWYgKHggPCBnbHlwaC5tZXRyaWNzLnggKyBnbHlwaC5tZXRyaWNzLndpZHRoIC8gMikge1xyXG4gICAgICAgICAgaWYgKGkgPT09IDApIHJldHVybiAtMTtcclxuXHJcbiAgICAgICAgICByZXR1cm4gZ2x5cGhzW2kgLSAxXTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbGFzdEdseXBoT25MaW5lO1xyXG5cclxuICB9XHJcblxyXG4gIG9uTW91c2VEb3duKGV2ZW50KSB7XHJcblxyXG4gICAgLy8gT25seSBsZWZ0IG1vdXNlIGJ1dHRvblxyXG4gICAgaWYgKGV2ZW50LmRhdGEuYnV0dG9uICE9PSAwKSByZXR1cm47XHJcblxyXG4gICAgbGV0IHBvc2l0aW9uID0gZXZlbnQuZGF0YS5nbG9iYWw7XHJcblxyXG4gICAgcG9zaXRpb24ueCAtPSB0aGlzLm93bmVyLnBvc2l0aW9uLng7XHJcbiAgICBwb3NpdGlvbi55IC09IHRoaXMub3duZXIucG9zaXRpb24ueTtcclxuXHJcbiAgICBwb3NpdGlvbi54ID0gcG9zaXRpb24ueCAvICB0aGlzLm93bmVyLnNjYWxlLng7XHJcbiAgICBwb3NpdGlvbi55ID0gcG9zaXRpb24ueSAvIHRoaXMub3duZXIuc2NhbGUueTtcclxuXHJcbiAgICBjb25zdCBjbG9zZXN0TGV0dGVyID0gdGhpcy5nZXRDbG9zZXN0R2x5cGgocG9zaXRpb24ueCAsIHBvc2l0aW9uLnkpO1xyXG5cclxuICAgIGNvbnNvbGUubG9nKGNsb3Nlc3RMZXR0ZXIpO1xyXG5cclxuICAgIGxldCBpbmRleCA9IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5pbmRleE9mKGNsb3Nlc3RMZXR0ZXIpO1xyXG5cclxuICAgIHRoaXMuc2V0UmFuZ2UoaW5kZXggKyAxLCBmYWxzZSApO1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcclxuXHJcbiAgICBsZXQgcG9zaXRpb24gPSBldmVudC5kYXRhLmdsb2JhbDtcclxuXHJcbiAgICBwb3NpdGlvbi54IC09IHRoaXMub3duZXIucG9zaXRpb24ueDtcclxuICAgIHBvc2l0aW9uLnkgLT0gdGhpcy5vd25lci5wb3NpdGlvbi55O1xyXG5cclxuICAgIHBvc2l0aW9uLnggPSBwb3NpdGlvbi54IC8gdGhpcy5vd25lci5zY2FsZS54O1xyXG4gICAgcG9zaXRpb24ueSA9IHBvc2l0aW9uLnkgLyB0aGlzLm93bmVyLnNjYWxlLnk7XHJcblxyXG4gICAgY29uc3QgY2xvc2VzdExldHRlciA9IHRoaXMuZ2V0Q2xvc2VzdEdseXBoKHBvc2l0aW9uLnggICwgcG9zaXRpb24ueSk7XHJcbiAgICBsZXQgaW5kZXggPSB0aGlzLm93bmVyLmxheW91dC5nbHlwaHMuaW5kZXhPZihjbG9zZXN0TGV0dGVyKTtcclxuXHJcbiAgICB0aGlzLnNldFJhbmdlKG51bGwsIGluZGV4ICsgMSk7XHJcbiAgfVxyXG5cclxuICBvbk1vdXNlVXAoZXZlbnQpIHtcclxuXHJcbiAgICAvLyBPbmx5IGxlZnQgbW91c2UgYnV0dG9uXHJcbiAgICBpZiAoZXZlbnQuZGF0YS5idXR0b24gIT09IDApIHJldHVybjtcclxuXHJcbiAgICBsZXQgcG9zaXRpb24gPSBldmVudC5kYXRhLmdsb2JhbDtcclxuXHJcbiAgICBwb3NpdGlvbi54IC09IHRoaXMub3duZXIucG9zaXRpb24ueDtcclxuICAgIHBvc2l0aW9uLnkgLT0gdGhpcy5vd25lci5wb3NpdGlvbi55O1xyXG5cclxuICAgIHBvc2l0aW9uLnggPSBwb3NpdGlvbi54IC8gdGhpcy5vd25lci5zY2FsZS54O1xyXG4gICAgcG9zaXRpb24ueSA9IHBvc2l0aW9uLnkgLyB0aGlzLm93bmVyLnNjYWxlLnk7XHJcblxyXG4gICAgY29uc3QgY2xvc2VzdExldHRlciA9IHRoaXMuZ2V0Q2xvc2VzdEdseXBoKHBvc2l0aW9uLnggLCBwb3NpdGlvbi55KTtcclxuXHJcblxyXG5cclxuICAgIC8vIC0xIG1lYW5zIHRoYXQgd2UgYXQgdGhlIHN0YXJ0IG9mIHRoZSBsaW5lXHJcbiAgICBpZiAoY2xvc2VzdExldHRlciA9PT0gLTEpIHtcclxuICAgICAgdGhpcy5vd25lci5pbnB1dC5nbHlwaEluZGV4ID0gY2xvc2VzdExldHRlcjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3duZXIuaW5wdXQuZ2x5cGhJbmRleCA9IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5pbmRleE9mKGNsb3Nlc3RMZXR0ZXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY2xlYXJTZWxlY3RlZFJhbmdlKCkge1xyXG5cclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5yYW5nZTtcclxuXHJcbiAgICAvLyBJZiB1c2VyIHNlbGVjdGVkIHNvbWUgdGV4dCwgcmVtb3ZlIGl0XHJcbiAgICBpZiAocmFuZ2VbMF0gIT09IHJhbmdlWzFdICYmIHJhbmdlWzFdICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMub3duZXIuaW5wdXQuZ2x5cGhJbmRleCA9IE1hdGgubWluKHJhbmdlWzBdIC0gMSwgcmFuZ2VbMV0gLSAxKTtcclxuICAgICAgY29uc3QgcmVtb3ZlSW5kZXggPSBNYXRoLm1pbi5hcHBseShudWxsLCByYW5nZSk7XHJcbiAgICAgIGNvbnN0IHJlbW92ZUxlbmd0aCA9IE1hdGguYWJzKHJhbmdlWzBdIC0gcmFuZ2VbMV0pO1xyXG4gICAgICB0aGlzLm93bmVyLnNlbGVjdC5zZXRSYW5nZSgwLGZhbHNlKTtcclxuICAgICAgdGhpcy5vd25lci5yZW1vdmVTdHJpbmcocmVtb3ZlSW5kZXgsIHJlbW92ZUxlbmd0aCk7XHJcbiAgICAgIHRoaXMub3duZXIuaW5wdXQuc2hvdygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlbGVjdC5qcyIsInZhciBkdHlwZSA9IHJlcXVpcmUoJ2R0eXBlJylcbnZhciBhbkFycmF5ID0gcmVxdWlyZSgnYW4tYXJyYXknKVxudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJylcblxudmFyIENXID0gWzAsIDIsIDNdXG52YXIgQ0NXID0gWzIsIDEsIDNdXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlUXVhZEVsZW1lbnRzKGFycmF5LCBvcHQpIHtcbiAgICAvL2lmIHVzZXIgZGlkbid0IHNwZWNpZnkgYW4gb3V0cHV0IGFycmF5XG4gICAgaWYgKCFhcnJheSB8fCAhKGFuQXJyYXkoYXJyYXkpIHx8IGlzQnVmZmVyKGFycmF5KSkpIHtcbiAgICAgICAgb3B0ID0gYXJyYXkgfHwge31cbiAgICAgICAgYXJyYXkgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHQgPT09ICdudW1iZXInKSAvL2JhY2t3YXJkcy1jb21wYXRpYmxlXG4gICAgICAgIG9wdCA9IHsgY291bnQ6IG9wdCB9XG4gICAgZWxzZVxuICAgICAgICBvcHQgPSBvcHQgfHwge31cblxuICAgIHZhciB0eXBlID0gdHlwZW9mIG9wdC50eXBlID09PSAnc3RyaW5nJyA/IG9wdC50eXBlIDogJ3VpbnQxNidcbiAgICB2YXIgY291bnQgPSB0eXBlb2Ygb3B0LmNvdW50ID09PSAnbnVtYmVyJyA/IG9wdC5jb3VudCA6IDFcbiAgICB2YXIgc3RhcnQgPSAob3B0LnN0YXJ0IHx8IDApIFxuXG4gICAgdmFyIGRpciA9IG9wdC5jbG9ja3dpc2UgIT09IGZhbHNlID8gQ1cgOiBDQ1csXG4gICAgICAgIGEgPSBkaXJbMF0sIFxuICAgICAgICBiID0gZGlyWzFdLFxuICAgICAgICBjID0gZGlyWzJdXG5cbiAgICB2YXIgbnVtSW5kaWNlcyA9IGNvdW50ICogNlxuXG4gICAgdmFyIGluZGljZXMgPSBhcnJheSB8fCBuZXcgKGR0eXBlKHR5cGUpKShudW1JbmRpY2VzKVxuICAgIGZvciAodmFyIGkgPSAwLCBqID0gMDsgaSA8IG51bUluZGljZXM7IGkgKz0gNiwgaiArPSA0KSB7XG4gICAgICAgIHZhciB4ID0gaSArIHN0YXJ0XG4gICAgICAgIGluZGljZXNbeCArIDBdID0gaiArIDBcbiAgICAgICAgaW5kaWNlc1t4ICsgMV0gPSBqICsgMVxuICAgICAgICBpbmRpY2VzW3ggKyAyXSA9IGogKyAyXG4gICAgICAgIGluZGljZXNbeCArIDNdID0gaiArIGFcbiAgICAgICAgaW5kaWNlc1t4ICsgNF0gPSBqICsgYlxuICAgICAgICBpbmRpY2VzW3ggKyA1XSA9IGogKyBjXG4gICAgfVxuICAgIHJldHVybiBpbmRpY2VzXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGR0eXBlKSB7XG4gIHN3aXRjaCAoZHR5cGUpIHtcbiAgICBjYXNlICdpbnQ4JzpcbiAgICAgIHJldHVybiBJbnQ4QXJyYXlcbiAgICBjYXNlICdpbnQxNic6XG4gICAgICByZXR1cm4gSW50MTZBcnJheVxuICAgIGNhc2UgJ2ludDMyJzpcbiAgICAgIHJldHVybiBJbnQzMkFycmF5XG4gICAgY2FzZSAndWludDgnOlxuICAgICAgcmV0dXJuIFVpbnQ4QXJyYXlcbiAgICBjYXNlICd1aW50MTYnOlxuICAgICAgcmV0dXJuIFVpbnQxNkFycmF5XG4gICAgY2FzZSAndWludDMyJzpcbiAgICAgIHJldHVybiBVaW50MzJBcnJheVxuICAgIGNhc2UgJ2Zsb2F0MzInOlxuICAgICAgcmV0dXJuIEZsb2F0MzJBcnJheVxuICAgIGNhc2UgJ2Zsb2F0NjQnOlxuICAgICAgcmV0dXJuIEZsb2F0NjRBcnJheVxuICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIHJldHVybiBBcnJheVxuICAgIGNhc2UgJ3VpbnQ4X2NsYW1wZWQnOlxuICAgICAgcmV0dXJuIFVpbnQ4Q2xhbXBlZEFycmF5XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kdHlwZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuQXJyYXlcblxuZnVuY3Rpb24gYW5BcnJheShhcnIpIHtcbiAgcmV0dXJuIChcbiAgICAgICBhcnIuQllURVNfUEVSX0VMRU1FTlRcbiAgICAmJiBzdHIuY2FsbChhcnIuYnVmZmVyKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJ1xuICAgIHx8IEFycmF5LmlzQXJyYXkoYXJyKVxuICApXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYW4tYXJyYXkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtYnVmZmVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxuXG5jbGFzcyBJbnB1dCB7XG5cbiAgX2VuYWJsZWQgPSBmYWxzZTtcbiAgb3duZXIgPSBudWxsO1xuXG4gIF9nbHlwaEluZGV4ID0gLTE7XG5cbiAgc2V0IGdseXBoSW5kZXgodmFsdWUpIHtcblxuICAgIHRoaXMuX2dseXBoSW5kZXggPSB2YWx1ZTtcblxuICAgIGlmICh0aGlzLl9nbHlwaEluZGV4IDwgLTEpXG4gICAgICB0aGlzLl9nbHlwaEluZGV4ID0gLTE7XG5cbiAgICBpZiAodGhpcy5fZ2x5cGhJbmRleCA+IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5sZW5ndGgpXG4gICAgICB0aGlzLl9nbHlwaEluZGV4ID0gdGhpcy5vd25lci5sYXlvdXQuZ2x5cGhzLmxlbmd0aDtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBnZXQgZ2x5cGhJbmRleCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2x5cGhJbmRleDtcbiAgfVxuXG4gIHNldCBlbmFibGVkKHZhbHVlKSB7XG4gICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlO1xuICAgIGlmICh0aGlzLl9lbmFibGVkKSB7XG4gICAgICB0aGlzLmVuYWJsZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpc2FibGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgZW5hYmxlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZFxuICB9XG5cbiAgY29uc3RydWN0b3Iob3duZXIpIHtcbiAgICB0aGlzLm93bmVyID0gb3duZXI7XG4gICAgdGhpcy5tZXRyaWNzID0gb3duZXIubWV0cmljcztcbiAgICB0aGlzLmxheW91dCA9IG93bmVyLmxheW91dDtcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdXG5cbiAgICB0aGlzLmNyZWF0ZUZpZWxkKCk7XG4gICAgdGhpcy5kaXNhYmxlKCk7XG4gIH1cblxuICBlbmFibGUoKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmQodGhpcy5pbnB1dEVsZW1lbnQpO1xuICB9XG5cbiAgZGlzYWJsZSgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuXG4gICAgaWYgKGRvY3VtZW50LmJvZHkuY29udGFpbnModGhpcy5pbnB1dEVsZW1lbnQpKVxuICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZCh0aGlzLmlucHV0RWxlbWVudCk7XG4gIH1cblxuICBoaWRlKCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gIH1cblxuICBzaG93KCkge1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gIH1cblxuICBjcmVhdGVGaWVsZCgpIHtcbiAgICB0aGlzLmlucHV0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblxuICAgIGNvbnN0IHRyYW5zZm9ybSA9IE9iamVjdC52YWx1ZXModGhpcy5vd25lci50cmFuc2Zvcm0ud29ybGRUcmFuc2Zvcm0pLnNsaWNlKDAsIDYpO1xuXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcbiAgICAvL3RoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmJhY2tncm91bmRDb2xvciA9ICdyZ2JhKDAsMCwwLDAuMyknO1xuXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuY29sb3IgPSAndHJhbnNwYXJlbnQnO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmJvcmRlciA9IFwibm9uZVwiO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5jb250YWluID0gJ3N0cmljdCc7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuekluZGV4ID0gMjtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5wb2ludGVyRXZlbnRzID0gXCJub25lXCI7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmNvbG9yID0gdGhpcy5vd25lci5zdHlsZS5maWxsO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybU9yaWdpbj0gXCJsZWZ0IHRvcFwiO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBtYXRyaXgoJHt0cmFuc2Zvcm0uam9pbihcIiwgXCIpfSlgO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnBhZGRpbmcgPSBcIjBcIjtcblxuICAgIHRoaXMuYWRkRXZlbnQoXCJibHVyXCIsIChldmVudCkgPT4gdGhpcy5pbnB1dEVsZW1lbnQuZm9jdXMoKSk7XG4gICAgdGhpcy5hZGRFdmVudChcImlucHV0XCIsIChldmVudCkgPT4gdGhpcy5vbklucHV0KGV2ZW50KSk7XG4gICAgdGhpcy5hZGRFdmVudChcImtleWRvd25cIiwgKGV2ZW50KSA9PiB0aGlzLm9uS2V5ZG93bihldmVudCkpXG4gICAgdGhpcy5hZGRFdmVudChcInBhc3RlXCIsIChldmVudCkgPT4gdGhpcy5wYXN0ZUZyb21DbGlwYm9hcmQoZXZlbnQpKVxuICB9XG5cbiAgdXBkYXRlKCkge1xuXG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5vd25lci5tZXRyaWNzO1xuICAgIHRoaXMubGF5b3V0ID0gdGhpcy5vd25lci5sYXlvdXQ7XG5cbiAgICBjb25zdCB7Z2x5cGhzfSA9IHRoaXMub3duZXIubGF5b3V0O1xuXG4gICAgaWYgKHRoaXMuZ2x5cGhJbmRleCA+PSBnbHlwaHMubGVuZ3RoKSB7XG4gICAgICB0aGlzLmdseXBoSW5kZXggPSBnbHlwaHMubGVuZ3RoIC0gMTtcbiAgICB9XG5cbiAgICAvLyBEZWZhdWx0IGNhcmV0IHBsYWNlIC0gc3RhcnQgb2YgdGhlIGlucHV0IGZpZWxkIFRPRE8gaW1wbGVtZW50IGFsaWduXG4gICAgbGV0IGdseXBoTWV0cmljcyA9IHtcbiAgICAgIHg6IHRoaXMub3duZXIucG9zaXRpb24ueCxcbiAgICAgIHk6IHRoaXMub3duZXIucG9zaXRpb24ueVxuICAgIH07XG5cbiAgICAvLyBpZiBzdHJpbmcgaXMgZW1wdHksIHB1dCBjYXJldCBhdCB0aGUgYmVnaW5uaW5nXG4gICAgaWYgKHRoaXMub3duZXIubGF5b3V0LmdseXBocy5sZW5ndGggPT09IC0xKSB7XG5cbiAgICAgIC8vIGlmIHdlIG9uIHRoZSBsYXN0IGdseXBoLCBwbGFjZSBjYXJldCBhZnRlciBpdFxuICAgIH1lbHNlIGlmICh0aGlzLmdseXBoSW5kZXggPT09IGdseXBocy5sZW5ndGgpIHtcblxuICAgICAgY29uc3QgbGFzdEdseXBoID0gZ2x5cGhzW2dseXBocy5sZW5ndGggLSAxXTtcblxuICAgICAgZ2x5cGhNZXRyaWNzLnggKz0gbGFzdEdseXBoLm1ldHJpY3MueCArIGxhc3RHbHlwaC5tZXRyaWNzLndpZHRoO1xuICAgICAgZ2x5cGhNZXRyaWNzLnkgKz0gbGFzdEdseXBoLm1ldHJpY3MueTtcblxuICAgICAgLy8gaWYgY2FyZXQgaW4gdGhlIG1pZGRsZSBvZiB0aGUgdGV4dFxuICAgIH0gZWxzZSBpZiAodGhpcy5nbHlwaEluZGV4ICE9PSAtMSkge1xuICAgICAgY29uc3Qgc2VsZWN0ZWRHbHlwaCA9IGdseXBoc1t0aGlzLmdseXBoSW5kZXhdO1xuXG4gICAgICBnbHlwaE1ldHJpY3MueCArPSBzZWxlY3RlZEdseXBoLm1ldHJpY3MueCArIHNlbGVjdGVkR2x5cGgubWV0cmljcy53aWR0aDtcbiAgICAgIGdseXBoTWV0cmljcy55ICs9IHNlbGVjdGVkR2x5cGgubWV0cmljcy55O1xuICAgIH0gZWxzZSB7XG5cbiAgICAgIGdseXBoTWV0cmljcy55ICs9IHRoaXMub3duZXIuc3R5bGUubGluZUhlaWdodDtcbiAgICB9XG5cbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBPYmplY3QudmFsdWVzKHRoaXMub3duZXIudHJhbnNmb3JtLndvcmxkVHJhbnNmb3JtKS5zbGljZSgwLCA2KTtcblxuXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUudHJhbnNmb3JtID0gYG1hdHJpeCgke3RyYW5zZm9ybS5qb2luKFwiLCBcIil9KWA7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyBcInB4XCI7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodCArIFwicHhcIjtcblxuICAgIHRoaXMuc2V0UG9zaXRpb24oZ2x5cGhNZXRyaWNzLnggLCBnbHlwaE1ldHJpY3MueSk7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuZm9jdXMoKTtcbiAgfVxuXG4gIG9uSW5wdXQoZXZlbnQpIHtcblxuICAgIGNvbnN0IHsgcmFuZ2UgfSA9IHRoaXMub3duZXIuc2VsZWN0O1xuXG4gICAgdGhpcy5vd25lci5zZWxlY3QuY2xlYXJTZWxlY3RlZFJhbmdlKCk7XG5cbiAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xuXG4gICAgaWYgKGV2ZW50LmRhdGEgPT09IG51bGwpIHJldHVybjtcblxuICAgIC8vIENvbnRlbnQgd2UgYXJlIGFib3V0IHRvIGFkZFxuICAgIGxldCB0ZXh0VG9BZGQgPSBldmVudC5kYXRhO1xuXG4gICAgaWYgKHRoaXMub3duZXIudXBwZXJjYXNlKSB7XG4gICAgICB0ZXh0VG9BZGQgPSB0ZXh0VG9BZGQudG9VcHBlckNhc2UoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5vd25lci5sb3dlcmNhc2UpIHtcbiAgICAgIHRleHRUb0FkZCA9IHRleHRUb0FkZC50b0xvd2VyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8vIElmIHRleHQgaXMgZW1wdHkgbm93XG4gICAgaWYgKHRoaXMub3duZXIubGF5b3V0LmdseXBocy5sZW5ndGggPT09IDApIHtcbiAgICAgIHRoaXMub3duZXIudGV4dCA9IHRleHRUb0FkZDtcbiAgICAgIHRoaXMuZ2x5cGhJbmRleCA9IDE7XG5cbiAgICAvLyBJZiBjYXJldCBpcyBhdCB0aGUgZW5kIG9mIHRoZSB0ZXh0XG4gICAgfSBlbHNlIGlmICh0aGlzLmdseXBoSW5kZXggPT09IHRoaXMub3duZXIubGF5b3V0LmdseXBocy5sZW5ndGggLSAxKSB7XG4gICAgICB0aGlzLm93bmVyLnRleHQgKz0gdGV4dFRvQWRkO1xuICAgICAgdGhpcy5nbHlwaEluZGV4Kys7XG5cbiAgICAvLyBJZiB3ZSBpbiB0aGUgbWlkZGxlIG9mIHRoZSBsaW5lXG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3duZXIuaW5zZXJ0U3RyaW5nKCsrdGhpcy5nbHlwaEluZGV4LCB0ZXh0VG9BZGQpO1xuICAgICAgLy90aGlzLmdseXBoSW5kZXgrKztcbiAgICB9XG4gICAgdGhpcy5vd25lci5zZWxlY3Quc2V0UmFuZ2UoMCwgZmFsc2UpO1xuXG4gIH1cblxuICBvbktleWRvd24oZXZlbnQpIHtcblxuICAgIGNvbnN0IHtyYW5nZX0gPSB0aGlzLm93bmVyLnNlbGVjdDtcblxuXG4gICAgc3dpdGNoIChldmVudC5rZXkpIHtcbiAgICAgIGNhc2UgXCJBcnJvd0xlZnRcIjpcbiAgICAgICAgdGhpcy5vd25lci5zZWxlY3Quc2V0UmFuZ2UoMCwgZmFsc2UpO1xuICAgICAgICB0aGlzLnNob3coKTtcbiAgICAgICAgdGhpcy5nbHlwaEluZGV4LS07XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxuICAgICAgICB0aGlzLm93bmVyLnNlbGVjdC5zZXRSYW5nZSgwLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuc2hvdygpO1xuICAgICAgICB0aGlzLmdseXBoSW5kZXgrKztcblxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIkJhY2tzcGFjZVwiOlxuICAgICAgICBpZiAocmFuZ2VbMV0gIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLm93bmVyLnNlbGVjdC5jbGVhclNlbGVjdGVkUmFuZ2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3duZXIucmVtb3ZlU3RyaW5nKHRoaXMuZ2x5cGhJbmRleC0tLCAwKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBcIkRlbGV0ZVwiOlxuICAgICAgICBpZiAocmFuZ2VbMV0gIT09IG51bGwpIHtcbiAgICAgICAgICB0aGlzLm93bmVyLnNlbGVjdC5jbGVhclNlbGVjdGVkUmFuZ2UoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMub3duZXIucmVtb3ZlU3RyaW5nKHRoaXMuZ2x5cGhJbmRleCArIDEsIDApO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIC8vIFNlbGVjdCBhbGxcbiAgICAgIGNhc2UgXCJhXCI6XG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICAgdGhpcy5vd25lci5zZWxlY3Quc2V0UmFuZ2UoMCx0aGlzLm93bmVyLnRleHQubGVuZ3RoIC0gMSk7XG4gICAgICAgIH1cblxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJjXCI6XG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XG4gICAgICAgICAgdGhpcy5jb3B5VG9DbGlwYm9hcmQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gXCIgXCI7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBcIlwiO1xuXG4gIH1cblxuICBzZXRQb3NpdGlvbih4LCB5KSB7XG5cbiAgICBjb25zdCB7YSA6IHNjYWxlWCwgZDogc2NhbGVZfSA9IHRoaXMub3duZXIudHJhbnNmb3JtLndvcmxkVHJhbnNmb3JtO1xuICAgIGNvbnN0IHt4IDogbG9jYWxYLCB5OiBsb2NhbFkgfSA9IHRoaXMub3duZXIucG9zaXRpb247XG5cbiAgICBsZXQgbGluZUhlaWdodCA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICogc2NhbGVZO1xuXG4gICAgeSAqPSBzY2FsZVk7XG4gICAgeCAqPSBzY2FsZVg7XG5cbiAgICB5IC09IGxpbmVIZWlnaHQ7XG5cbiAgICB5IC09IGxvY2FsWSAqIHNjYWxlWTtcbiAgICB4IC09IGxvY2FsWCAqIHNjYWxlWDtcblxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS50b3AgPSBgJHt5fXB4YDtcblxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gXCIgXCI7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBcIlwiO1xuXG4gICAgY29uc3QgdHJhbnNmb3JtID0gT2JqZWN0LnZhbHVlcyh0aGlzLmdldFRyYW5zZm9ybSgpKS5zbGljZSgwLCA2KTtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgbWF0cml4KCR7dHJhbnNmb3JtLmpvaW4oXCIsIFwiKX0pYDtcbiAgfVxuXG4gIGdldFRyYW5zZm9ybSgpIHtcbiAgICBjb25zdCBvd25lclRyYW5zZm9ybSA9IHRoaXMub3duZXIudHJhbnNmb3JtLndvcmxkVHJhbnNmb3JtO1xuICAgIGxldCBjYW52YXNSZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHsuLi5vd25lclRyYW5zZm9ybSwgdHg6IG93bmVyVHJhbnNmb3JtLnR4ICsgY2FudmFzUmVjdC54LCB0eTogb3duZXJUcmFuc2Zvcm0udHkgKyBjYW52YXNSZWN0Lnl9O1xuICB9XG5cbiAgYWRkRXZlbnQoZXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKGV2ZW50KSA9PiB7XG4gICAgICBpZiAodGhpcy5fZW5hYmxlZCkge1xuICAgICAgICBjYWxsYmFjayhldmVudCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBjb3B5VG9DbGlwYm9hcmQoKSB7XG4gICAgY29uc3QgcmFuZ2UgPSB0aGlzLm93bmVyLnNlbGVjdC5yYW5nZTtcbiAgICBjb25zdCBzdGFydCA9IE1hdGgubWluLmFwcGx5KG51bGwsIHJhbmdlKTtcbiAgICBjb25zdCBlbmQgPSBNYXRoLm1heC5hcHBseShudWxsLCByYW5nZSk7XG5cbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IHRoaXMub3duZXIudGV4dC5zbGljZShzdGFydCwgZW5kICsgMSk7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc2VsZWN0KCk7XG4gICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoXCJjb3B5XCIpO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcbiAgfVxuXG4gIHBhc3RlRnJvbUNsaXBib2FyZChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgdGV4dCA9IGV2ZW50LmNsaXBib2FyZERhdGEuZ2V0RGF0YShcInRleHRcIilcbiAgICB0aGlzLm93bmVyLnNlbGVjdC5jbGVhclNlbGVjdGVkUmFuZ2UoKTtcblxuICAgIHRoaXMub3duZXIuaW5zZXJ0U3RyaW5nKHRoaXMuZ2x5cGhJbmRleCArIDEsIHRleHQpO1xuXG4gICAgdGhpcy5nbHlwaEluZGV4ID0gdGhpcy5nbHlwaEluZGV4ICsgdGV4dC5sZW5ndGg7XG4gICAgXG4gIH1cblxufVxuXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9pbnB1dC5qcyIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjtcXG5hdHRyaWJ1dGUgdmVjMiBhVGV4dHVyZUNvb3JkO1xcbmF0dHJpYnV0ZSBmbG9hdCBhU2RmU2l6ZTtcXG5cXG51bmlmb3JtIG1hdDMgdHJhbnNsYXRpb25NYXRyaXg7XFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb25NYXRyaXg7XFxudW5pZm9ybSBmbG9hdCBzZGZNdWx0aXBsaWVyO1xcblxcbnZhcnlpbmcgdmVjMiAgdGMwO1xcbnZhcnlpbmcgZmxvYXQgZG9mZnNldDtcXG52YXJ5aW5nIGZsb2F0IHNkZl90ZXhlbDtcXG5cXG5cXG5cXG52b2lkIG1haW4odm9pZCkge1xcblxcbiAgICAvL1RPRE8gTUFLRSBBVFRSSUJVVEVcXG4gICAgZmxvYXQgc2RmX3NpemUgPSBhU2RmU2l6ZSAqIHNkZk11bHRpcGxpZXI7XFxuXFxuICAgIC8vVE9ETyBNQUtFIFVOSUZPUk1TXFxuICAgIGZsb2F0IHNkZl90ZXhfc2l6ZSA9IDEwMjQuMDtcXG5cXG5cXG4gICAgdGMwID0gYVRleHR1cmVDb29yZDtcXG4gICAgZG9mZnNldCA9IDEuMCAvIHNkZl9zaXplOyAgICAgICAvLyBEaXN0YW5jZSBmaWVsZCBkZWx0YSBmb3Igb25lIHNjcmVlbiBwaXhlbFxcbiAgICBzZGZfdGV4ZWwgPSAxLjAgLyBzZGZfdGV4X3NpemU7XFxuXFxuICAgIGdsX1Bvc2l0aW9uID0gdmVjNCgocHJvamVjdGlvbk1hdHJpeCAqIHRyYW5zbGF0aW9uTWF0cml4ICogdmVjMyhhVmVydGV4UG9zaXRpb24gLCAxLjApKS54eSwgMC4wLCAxLjApO1xcblxcbn1cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvdGV4dC92ZXJ0Lmdsc2xcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbnVuaWZvcm0gc2FtcGxlcjJEIHVTYW1wbGVyO1xcbnVuaWZvcm0gZmxvYXQgaGludF9hbW91bnQ7XFxudW5pZm9ybSBmbG9hdCBzdWJwaXhlbF9hbW91bnQ7XFxuXFxudW5pZm9ybSB2ZWMzIGJnX2NvbG9yO1xcbnVuaWZvcm0gdmVjMyBmb250X2NvbG9yO1xcblxcbnZhcnlpbmcgdmVjMiAgdGMwO1xcbnZhcnlpbmcgZmxvYXQgZG9mZnNldDtcXG52YXJ5aW5nIGZsb2F0IHNkZl90ZXhlbDtcXG5cXG5cXG4vKlxcbiAqICBTdWJwaXhlbCBjb3ZlcmFnZSBjYWxjdWxhdGlvblxcbiAqXFxuICogIHYgLSBlZGdlIHNsb3BlICAgIC0xLjAgdG8gMS4wICAgICAgICAgIHRyaXBsZXRcXG4gKiAgYSAtIHBpeGVsIGNvdmVyYWdlIDAuMCB0byAxLjAgICAgICAgICAgY292ZXJhZ2VcXG4gKlxcbiAqICAgICAgfDwtIGdseXBoIGVkZ2UgICAgICAgICAgICAgICAgICAgICAgUiAgRyAgQlxcbiAqICArLS0tKy0tLSsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLSstLSstLStcXG4gKiAgfCAgIHxYWFh8IHYgPSAxLjAgKGVkZ2UgZmFjaW5nIHdlc3QpICB8ICB8eHh8WFh8XFxuICogIHwgICB8WFhYfCBhID0gMC41ICg1MCUgY292ZXJhZ2UpICAgICAgfCAgfHh4fFhYfFxcbiAqICB8ICAgfFhYWHwgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHx4eHxYWHxcXG4gKiAgKy0tLSstLS0rICAgICAgICAgICAgICAgICAgICAgICAgICAgICArLS0rLS0rLS0rXFxuICogICAgcGl4ZWwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDAgIDUwIDEwMFxcbiAqXFxuICpcXG4gKiAgICAgICAgUiAgIEcgICBCXFxuICpcXG4gKiAgIDEuMCAgICAgICAgKy0tKyAgIDwtIHRvcCAoYWJzKCB2ICkpXFxuICogICAgICAgICAgICAgIHxcXG4gKiAgICAgICAtKy0tLS0tKy0tKy0tIDwtIGNlaWw6IDEwMCUgY292ZXJhZ2VcXG4gKiAgICAgICAgfCAgICAgfFhYfFxcbiAqICAgMC4wICB8ICArLS0rWFh8XFxuICogICAgICAgIHwgIHx4eHxYWHxcXG4gKiAgICAgICAtKy0tKy0tKy0tKy0tIDwtIGZsb29yOiAwJSBjb3ZlcmFnZVxcbiAqICAgICAgICAgICB8XFxuICogIC0xLjAgICstLSsgICAgICAgICA8LSAgLWFicyh2KVxcbiAqICAgICAgICB8XFxuICogICAgICAgIHxcXG4gKiAgICAgICAgfFxcbiAqICAtMi4wICArICAgICAgICAgICAgPC0gYm90dG9tOiAtYWJzKHYpLTEuMFxcbiAqL1xcblxcbnZlYzMgc3VicGl4ZWwoIGZsb2F0IHYsIGZsb2F0IGEgKSB7XFxuICAgIGZsb2F0IHZ0ICAgICAgPSAwLjYgKiB2OyAvLyAxLjAgd2lsbCBtYWtlIHlvdXIgZXllcyBibGVlZFxcbiAgICB2ZWMzICByZ2JfbWF4ID0gdmVjMyggLXZ0LCAwLjAsIHZ0ICk7XFxuICAgIGZsb2F0IHRvcCAgICAgPSBhYnMoIHZ0ICk7XFxuICAgIGZsb2F0IGJvdHRvbSAgPSAtdG9wIC0gMS4wO1xcbiAgICBmbG9hdCBjZmxvb3IgID0gbWl4KCB0b3AsIGJvdHRvbSwgYSApO1xcbiAgICB2ZWMzICByZXMgICAgID0gY2xhbXAoIHJnYl9tYXggLSB2ZWMzKCBjZmxvb3IgKSwgMC4wLCAxLjAgKTtcXG4gICAgcmV0dXJuIHJlcztcXG59XFxuXFxudm9pZCBtYWluMigpIHtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdGV4dHVyZTJEKHVTYW1wbGVyLCB0YzApO1xcbn1cXG5cXG52b2lkIG1haW4odm9pZCkge1xcblxcbiAgICAvLyBTYW1wbGluZyB0aGUgdGV4dHVyZSwgTCBwYXR0ZXJuXFxuICAgIGZsb2F0IHNkZiAgICAgICA9IHRleHR1cmUyRCggdVNhbXBsZXIsIHRjMCApLnI7XFxuICAgIGZsb2F0IHNkZl9ub3J0aCA9IHRleHR1cmUyRCggdVNhbXBsZXIsIHRjMCArIHZlYzIoIDAuMCwgc2RmX3RleGVsICkgKS5yO1xcbiAgICBmbG9hdCBzZGZfZWFzdCAgPSB0ZXh0dXJlMkQoIHVTYW1wbGVyLCB0YzAgKyB2ZWMyKCBzZGZfdGV4ZWwsIDAuMCApICkucjtcXG5cXG4gICAgLy8gRXN0aW1hdGluZyBzdHJva2UgZGlyZWN0aW9uIGJ5IHRoZSBkaXN0YW5jZSBmaWVsZCBncmFkaWVudCB2ZWN0b3JcXG4gICAgdmVjMiAgc2dyYWQgICAgID0gdmVjMiggc2RmX2Vhc3QgLSBzZGYsIHNkZl9ub3J0aCAtIHNkZiApO1xcbiAgICBmbG9hdCBzZ3JhZF9sZW4gPSBtYXgoIGxlbmd0aCggc2dyYWQgKSwgMS4wIC8gMTI4LjAgKTtcXG4gICAgdmVjMiAgZ3JhZCAgICAgID0gc2dyYWQgLyB2ZWMyKCBzZ3JhZF9sZW4gKTtcXG4gICAgZmxvYXQgdmdyYWQgPSBhYnMoIGdyYWQueSApOyAvLyAwLjAgLSB2ZXJ0aWNhbCBzdHJva2UsIDEuMCAtIGhvcml6b250YWwgb25lXFxuXFxuICAgIGZsb2F0IGhvcnpfc2NhbGUgID0gMS4xOyAvLyBCbHVycmluZyB2ZXJ0aWNhbCBzdHJva2VzIGFsb25nIHRoZSBYIGF4aXMgYSBiaXRcXG4gICAgZmxvYXQgdmVydF9zY2FsZSAgPSAwLjY7IC8vIFdoaWxlIGFkZGluZyBzb21lIGNvbnRyYXN0IHRvIHRoZSBob3Jpem9udGFsIHN0cm9rZXNcXG4gICAgZmxvYXQgaGRvZmZzZXQgICAgPSBtaXgoIGRvZmZzZXQgKiBob3J6X3NjYWxlLCBkb2Zmc2V0ICogdmVydF9zY2FsZSwgdmdyYWQgKTtcXG4gICAgZmxvYXQgcmVzX2RvZmZzZXQgPSBtaXgoIGRvZmZzZXQsIGhkb2Zmc2V0LCBoaW50X2Ftb3VudCApO1xcblxcbiAgICBmbG9hdCBhbHBoYSAgICAgICA9IHNtb290aHN0ZXAoIDAuNSAtIHJlc19kb2Zmc2V0LCAwLjUgKyByZXNfZG9mZnNldCwgc2RmICk7XFxuXFxuICAgIC8vIEFkZGl0aW9uYWwgY29udHJhc3RcXG4gICAgYWxwaGEgICAgICAgICAgICAgPSBwb3coIGFscGhhLCAxLjAgKyAwLjIgKiB2Z3JhZCAqIGhpbnRfYW1vdW50ICk7XFxuXFxuICAgIC8vIFVuZm9ydHVuYXRlbHkgdGhlcmUgaXMgbm8gc3VwcG9ydCBmb3IgQVJCX2JsZW5kX2Z1bmNfZXh0ZW5kZWQgaW4gV2ViR0wuXFxuICAgIC8vIEZvcnR1bmF0ZWx5IHRoZSBiYWNrZ3JvdW5kIGlzIGZpbGxlZCB3aXRoIGEgc29saWQgY29sb3Igc28gd2UgY2FuIGRvXFxuICAgIC8vIHRoZSBibGVuZGluZyBpbnNpZGUgdGhlIHNoYWRlci5cXG5cXG4gICAgLy8gRGlzY2FyZGluZyBwaXhlbHMgYmV5b25kIGEgdGhyZXNob2xkIHRvIG1pbmltaXNlIHBvc3NpYmxlIGFydGlmYWN0cy5cXG4gICAgaWYgKCBhbHBoYSA8IDIwLjAgLyAyNTYuMCApIGRpc2NhcmQ7XFxuXFxuICAgIHZlYzMgY2hhbm5lbHMgPSBzdWJwaXhlbCggZ3JhZC54ICogMC41ICogc3VicGl4ZWxfYW1vdW50LCBhbHBoYSApICsgMC4xO1xcblxcbiAgICAvLyBGb3Igc3VicGl4ZWwgcmVuZGVyaW5nIHdlIGhhdmUgdG8gYmxlbmQgZWFjaCBjb2xvciBjaGFubmVsIHNlcGFyYXRlbHlcXG4gICAgdmVjMyByZXMgPSBtaXgoIGJnX2NvbG9yLCBmb250X2NvbG9yLCBjaGFubmVscyApO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KCByZXMsIDEuMCApO1xcbn1cXG5cXG5cXG5cIlxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL3NoYWRlcnMvdGV4dC9mcmFnLmdsc2xcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjtcXG5cXG51bmlmb3JtIG1hdDMgdHJhbnNsYXRpb25NYXRyaXg7XFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb25NYXRyaXg7XFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG5cXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KChwcm9qZWN0aW9uTWF0cml4ICogdHJhbnNsYXRpb25NYXRyaXggKiB2ZWMzKGFWZXJ0ZXhQb3NpdGlvbiAsIDEuMCkpLnh5LCAwLjAsIDEuMCk7XFxuXFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy9zZWxlY3QvdmVydC5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiI2RlZmluZSBHTFNMSUZZIDFcXG51bmlmb3JtIHZlYzMgYmdfY29sb3I7XFxudmFyeWluZyB2ZWMyICB0YzA7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGJnX2NvbG9yLDAuNDUpO1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDEuMCwgMS4wLCAxLjAsMC4yKTtcXG59XFxuXFxuXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL3NlbGVjdC9mcmFnLmdsc2xcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=