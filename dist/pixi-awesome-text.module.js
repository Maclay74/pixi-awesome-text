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
	Object.defineProperty(exports, "Text", {
	  enumerable: true,
	  get: function get() {
	    return _new["default"];
	  }
	});
	
	var _new = _interopRequireDefault(__webpack_require__(1));
	
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
	
	var _layout = _interopRequireDefault(__webpack_require__(2));
	
	var _select = _interopRequireDefault(__webpack_require__(3));
	
	var _input = _interopRequireDefault(__webpack_require__(10));
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
	
	function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }
	
	function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	var createIndices = __webpack_require__(4);
	
	var vertexShader = __webpack_require__(11);
	
	var fragmentShader = __webpack_require__(12);
	
	var Text =
	/*#__PURE__*/
	function () {
	  function Text(text, style, config) {
	    var _this = this;
	
	    _classCallCheck(this, Text);
	
	    _defineProperty(this, "state", Text.states.regular);
	
	    _defineProperty(this, "clicksCount", 0);
	
	    _defineProperty(this, "config", {
	      editable: false,
	      uppercase: false,
	      lowercase: false,
	      antialiasing: true,
	      backgroundColor: "#000000"
	    });
	
	    _defineProperty(this, "createLayout", function (_ref) {
	      var _ref$fontSize = _ref.fontSize,
	          fontSize = _ref$fontSize === void 0 ? 13 : _ref$fontSize,
	          _ref$breakWords = _ref.breakWords,
	          wrapWords = _ref$breakWords === void 0 ? false : _ref$breakWords,
	          _ref$wrapperWidth = _ref.wrapperWidth,
	          wrapperWidth = _ref$wrapperWidth === void 0 ? 400 : _ref$wrapperWidth,
	          _ref$align = _ref.align,
	          align = _ref$align === void 0 ? "left" : _ref$align,
	          _ref$lineHeight = _ref.lineHeight,
	          lineHeight = _ref$lineHeight === void 0 ? 17 : _ref$lineHeight;
	      return new _layout["default"](_this, {
	        fontSize: fontSize,
	        wrapWords: wrapWords,
	        wrapperWidth: wrapperWidth,
	        align: align,
	        lineHeight: lineHeight
	      });
	    });
	
	    // Basic params
	    this.style = new PIXI.TextStyle(style);
	    this.config = _extends({}, this.config, config);
	    this.backgroundColor = this.config.backgroundColor;
	    this._text = text; // Content
	
	    this._font = config.font; // Font information
	
	    this._texture = config.texture; // Texture with glyphs
	
	    this.layout = this.createLayout(this.style); // Create structure
	
	    this.container = new PIXI.Container();
	    this.container.awesomeText = this; // If field is editable, prepare it
	
	    if (this.config.editable) {
	      this.container.interactive = true;
	      this.container.buttonMode = true;
	      this.select = new _select["default"](this);
	      this.input = new _input["default"](this);
	      this.setState(Text.states.regular);
	    }
	
	    this.update();
	    return this.container;
	  }
	
	  _createClass(Text, [{
	    key: "createGeometry",
	    value: function createGeometry() {
	      var _this2 = this;
	
	      // Arrays for vertices, uvs and sdf
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
	      }); // Fill up the geometry
	
	      return new PIXI.Geometry().addAttribute('aVertexPosition', // the attribute name
	      this.vertices, // x, y
	      2) // the size of the attribute
	      .addAttribute('aTextureCoord', // the attribute name
	      this.uvs, // u, v
	      2) // the size of the attribute
	      .addAttribute('aSdfSize', // the attribute name
	      this.sdfSizes, // u, v
	      1) // the size of the attribute
	      .addIndex(this.indices);
	    }
	  }, {
	    key: "createMesh",
	    value: function createMesh(_ref2) {
	      var _ref2$geometry = _ref2.geometry,
	          geometry = _ref2$geometry === void 0 ? new PIXI.Geometry() : _ref2$geometry,
	          _ref2$vert = _ref2.vert,
	          vert = _ref2$vert === void 0 ? "" : _ref2$vert,
	          _ref2$frag = _ref2.frag,
	          frag = _ref2$frag === void 0 ? "" : _ref2$frag;
	      // Pass uniforms to the shader
	      var uniforms = {
	        uSampler: this._texture,
	        hint_amount: this.config.antialiasing * 1,
	        sdfMultiplier: Text.scale,
	        subpixel_amount: this.config.antialiasing * 1,
	        font_color: PIXI.utils.hex2rgb(this.style.fill.replace("#", "0x")),
	        bg_color: PIXI.utils.hex2rgb(this.backgroundColor.replace("#", "0x"))
	      };
	
	      if (!this.textShader) {
	        this.textShader = PIXI.Shader.from(vert, frag, uniforms);
	      }
	
	      return new PIXI.Mesh(geometry, this.textShader);
	    }
	  }, {
	    key: "update",
	    value: function update() {
	      this.metrics = this.fontMetrics(this.style.fontSize, 0.0);
	      this.layout.update();
	
	      if (this.config.editable) {
	        this.select.update();
	        this.input.update();
	      }
	
	      if (this.textGeometry) this.textGeometry.destroy();
	      if (this.textMesh) this.container.removeChild(this.textMesh); // Create text geometry (vertices, uvs, etc)
	
	      this.textGeometry = this.createGeometry(); // Create text mesh
	
	      this.textMesh = this.createMesh({
	        geometry: this.textGeometry,
	        vert: vertexShader,
	        frag: fragmentShader
	      });
	      this.container.addChild(this.textMesh);
	    }
	  }, {
	    key: "setState",
	    value: function setState(newState) {
	      if (newState === Text.states.editable || newState === Text.states.selecting) {
	        this.select.enabled = true;
	      } else {
	        this.select.enabled = false;
	      }
	
	      if (!this.config.editable) {
	        return;
	      }
	
	      var states = Text.states;
	      if (!newState in Object.values(states)) return;
	
	      switch (newState) {
	        case states.regular:
	          this.setRegularState();
	          break;
	
	        case states.editable:
	          if (this.state === Text.states.regular) {
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
	
	      Text.currentEditingElement = null;
	      this.container.off("mousedown");
	      this.container.off("mousemove");
	      this.container.off("mouseup");
	      this.container.off("mouseupoutside");
	      this.input.enabled = false;
	      this.container.on("click", function (e) {
	        if (_this3.clicksCount === 1) {
	          _this3.clicksCount = 0;
	
	          _this3.setState(Text.states.editable);
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
	      if (Text.currentEditingElement != null) {
	        Text.currentEditingElement.setState(Text.states.regular);
	      }
	
	      Text.currentEditingElement = this; // Disable unnecessary events
	
	      this.container.off("click");
	      this.input.enabled = true;
	      this.input.hide(); // Select all characters
	
	      this.select.setRange(0, this.text.length - 1);
	      this.input.inputElement.focus();
	      this.container.on("mousedown", function (e) {
	        _this4.setState(Text.states.selecting);
	
	        _this4.select.onMouseDown(e);
	
	        _this4.input.show();
	
	        _this4.input.update(e);
	      });
	      this.container.on("mousemove", function (e) {
	        var _e$data$originalEvent = e.data.originalEvent,
	            movementX = _e$data$originalEvent.movementX,
	            movementY = _e$data$originalEvent.movementY;
	        if (movementX === 0 && movementY === 0) return;
	
	        if (_this4.state === Text.states.selecting) {
	          _this4.select.onMouseMove(e);
	
	          _this4.input.hide();
	        }
	      });
	      this.container.on("mouseup", function (e) {
	        _this4.setState(Text.states.editable);
	
	        _this4.select.onMouseUp(e);
	      });
	      this.container.on("mouseupoutside", function (e) {
	        _this4.setState(Text.states.editable);
	
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
	      this._text = value;
	      this.update();
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

/***/ }),
/* 2 */
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
/* 3 */
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
	
	var createIndices = __webpack_require__(4);
	
	var vertexShader = __webpack_require__(8);
	
	var fragmentShader = __webpack_require__(9);
	
	var Select =
	/*#__PURE__*/
	function () {
	  _createClass(Select, [{
	    key: "enabled",
	    set: function set(value) {
	      this._enabled = value;
	      this.update();
	    },
	    get: function get() {
	      return this._enabled;
	    }
	  }]);
	
	  function Select(owner) {
	    _classCallCheck(this, Select);
	
	    _defineProperty(this, "range", [0, 0]);
	
	    _defineProperty(this, "metrics", null);
	
	    _defineProperty(this, "layout", null);
	
	    _defineProperty(this, "dirty", false);
	
	    _defineProperty(this, "indexBuffer", false);
	
	    _defineProperty(this, "owner", null);
	
	    _defineProperty(this, "_enabled", false);
	
	    this.owner = owner.container;
	    this.metrics = owner.metrics;
	    this.layout = owner.layout;
	  }
	
	  _createClass(Select, [{
	    key: "createGeometry",
	    value: function createGeometry() {
	      // Arrays for vertices, uvs and sdf
	      this.vertices = new Float32Array(this.layout.lettersCount * 4 * 2);
	      this.buildVertices(); // Prepare indices
	
	      this.indices = createIndices({
	        clockwise: true,
	        type: 'uint16',
	        count: this.layout.linesCount
	      }); // Fill up the geometry
	
	      return new PIXI.Geometry().addAttribute('aVertexPosition', // the attribute name
	      this.vertices, // x, y
	      2) // the size of the attribute
	      .addIndex(this.indices);
	    }
	  }, {
	    key: "createMesh",
	    value: function createMesh(_ref) {
	      var _ref$geometry = _ref.geometry,
	          geometry = _ref$geometry === void 0 ? new PIXI.Geometry() : _ref$geometry,
	          _ref$vert = _ref.vert,
	          vert = _ref$vert === void 0 ? "" : _ref$vert,
	          _ref$frag = _ref.frag,
	          frag = _ref$frag === void 0 ? "" : _ref$frag;
	      // Pass uniforms to the shader
	      var uniforms = {
	        bg_color: PIXI.utils.hex2rgb(this.owner.awesomeText.backgroundColor.replace("#", "0x"))
	      };
	
	      if (!this.shader) {
	        this.shader = PIXI.Shader.from(vert, frag, uniforms);
	      }
	
	      this.shader.uniforms.enabled = this.enabled ? 1.0 : 0.0;
	      return new PIXI.Mesh(geometry, this.shader);
	    }
	  }, {
	    key: "update",
	    value: function update() {
	      this.metrics = this.owner.awesomeText.metrics;
	      this.layout = this.owner.awesomeText.layout;
	      if (this.mesh) this.owner.removeChild(this.mesh);
	
	      if (this.range[1] !== null) {
	        var geometry = this.createGeometry();
	        this.mesh = this.createMesh({
	          geometry: geometry,
	          vert: vertexShader,
	          frag: fragmentShader
	        });
	        this.mesh.blendMode = PIXI.BLEND_MODES.NORMAL_NPM;
	        this.owner.addChild(this.mesh);
	      }
	    }
	  }, {
	    key: "setRange",
	    value: function setRange() {
	      var start = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
	      var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
	      var glyphs = this.owner.awesomeText.layout.glyphs;
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
	
	      this.metrics = this.owner.awesomeText.layout.metrics; // Select range
	
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
	      this.metrics = this.owner.awesomeText.metrics;
	      this.layout = this.owner.awesomeText.layout;
	      var glyphs = this.owner.awesomeText.layout.glyphs;
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
	      var index = this.owner.awesomeText.layout.glyphs.indexOf(closestLetter);
	      this.setRange(index + 1, false);
	    }
	  }, {
	    key: "onMouseMove",
	    value: function onMouseMove(event) {
	      var position = event.data.global;
	      position = this.transformPosition(position);
	      var closestLetter = this.getClosestGlyph(position.x, position.y);
	      var index = this.owner.awesomeText.layout.glyphs.indexOf(closestLetter);
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
	        this.owner.awesomeText.input.glyphIndex = closestLetter;
	      } else {
	        this.owner.awesomeText.input.glyphIndex = this.owner.awesomeText.layout.glyphs.indexOf(closestLetter);
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
	        this.owner.awesomeText.input.glyphIndex = Math.min(range[0] - 1, range[1] - 1);
	        var removeIndex = Math.min.apply(null, range);
	        var removeLength = Math.abs(range[0] - range[1]);
	        this.owner.awesomeText.select.setRange(0, false);
	        this.owner.awesomeText.removeString(removeIndex, removeLength);
	        this.owner.awesomeText.input.show();
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
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	var dtype = __webpack_require__(5)
	var anArray = __webpack_require__(6)
	var isBuffer = __webpack_require__(7)
	
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
/* 5 */
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
/* 6 */
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
/* 7 */
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
/* 8 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\n\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\n\nvoid main(void) {\n\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition , 1.0)).xy, 0.0, 1.0);\n\n}\n"

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nuniform vec3 bg_color;\nuniform float enabled;\nvarying vec2  tc0;\n\nvoid main() {\n    //gl_FragColor = vec4(bg_color,0.45);\n    gl_FragColor = vec4(1.0, 1.0, 1.0, 0.2 * enabled);\n}\n\n\n"

/***/ }),
/* 10 */
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
	      if (this._glyphIndex > this.owner.awesomeText.layout.glyphs.length) this._glyphIndex = this.owner.awesomeText.layout.glyphs.length;
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
	
	    this.owner = owner.container;
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
	      this.inputElement.style.color = this.owner.awesomeText.style.fill;
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
	      this.metrics = this.owner.awesomeText.metrics;
	      this.layout = this.owner.awesomeText.layout;
	      var glyphs = this.owner.awesomeText.layout.glyphs;
	
	      if (this.glyphIndex >= glyphs.length) {
	        this.glyphIndex = glyphs.length - 1;
	      } // Default caret place - start of the input field TODO implement align
	
	
	      var glyphMetrics = {
	        x: this.owner.position.x,
	        y: this.owner.position.y
	      }; // if string is empty, put caret at the beginning
	
	      if (this.owner.awesomeText.layout.glyphs.length === -1) {// if we on the last glyph, place caret after it
	      } else if (this.glyphIndex === glyphs.length) {
	        var lastGlyph = glyphs[glyphs.length - 1];
	        glyphMetrics.x += lastGlyph.metrics.x + lastGlyph.metrics.width;
	        glyphMetrics.y += lastGlyph.metrics.y; // if caret in the middle of the text
	      } else if (this.glyphIndex !== -1) {
	        var selectedGlyph = glyphs[this.glyphIndex];
	        glyphMetrics.x += selectedGlyph.metrics.x + selectedGlyph.metrics.width;
	        glyphMetrics.y += selectedGlyph.metrics.y;
	      } else {
	        glyphMetrics.y += this.owner.awesomeText.style.lineHeight;
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
	      var range = this.owner.awesomeText.select.range;
	      this.owner.awesomeText.select.clearSelectedRange();
	      event.target.value = "";
	      if (event.data === null) return; // Content we are about to add
	
	      var textToAdd = event.data;
	
	      if (this.owner.awesomeText.config.uppercase) {
	        textToAdd = textToAdd.toUpperCase();
	      }
	
	      if (this.owner.awesomeText.config.lowercase) {
	        textToAdd = textToAdd.toLowerCase();
	      } // If text is empty now
	
	
	      if (this.owner.awesomeText.layout.glyphs.length === 0) {
	        this.owner.awesomeText.text = textToAdd;
	        this.glyphIndex = 1; // If caret is at the end of the text
	      } else if (this.glyphIndex === this.owner.awesomeText.layout.glyphs.length - 1) {
	        this.owner.awesomeText.text += textToAdd;
	        this.glyphIndex++; // If we in the middle of the line
	      } else {
	        this.owner.awesomeText.insertString(++this.glyphIndex, textToAdd); //this.glyphIndex++;
	      }
	
	      this.owner.awesomeText.select.setRange(0, false);
	    }
	  }, {
	    key: "onKeydown",
	    value: function onKeydown(event) {
	      var range = this.owner.awesomeText.select.range;
	
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
	            this.owner.awesomeText.select.setRange(0, false);
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
	            this.owner.awesomeText.select.setRange(0, false);
	            this.show();
	            this.glyphIndex++;
	          }
	
	          break;
	
	        case "Backspace":
	          if (range[1] !== null) {
	            this.owner.awesomeText.select.clearSelectedRange();
	          } else {
	            this.owner.awesomeText.removeString(this.glyphIndex--, 0);
	          }
	
	          break;
	
	        case "Delete":
	          if (range[1] !== null) {
	            this.owner.awesomeText.select.clearSelectedRange();
	          } else {
	            this.owner.awesomeText.removeString(this.glyphIndex + 1, 0);
	          }
	
	          break;
	        // Select all
	
	        case "a":
	          if (event.ctrlKey) {
	            this.owner.awesomeText.select.setRange(0, this.owner.awesomeText.text.length - 1);
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
	      var range = this.owner.awesomeText.select.range;
	      var start = Math.min.apply(null, range);
	      var end = Math.max.apply(null, range);
	      this.inputElement.value = this.owner.text.slice(start, end + 1);
	      this.inputElement.select();
	      document.execCommand("copy");
	      this.inputElement.value = "";
	
	      if (cut) {
	        this.owner.awesomeText.select.clearSelectedRange();
	      }
	    }
	  }, {
	    key: "pasteFromClipboard",
	    value: function pasteFromClipboard(event) {
	      event.preventDefault();
	      var text = event.clipboardData.getData("text");
	      if (this.owner.awesomeText.config.uppercase) text = text.toUpperCase();
	      if (this.owner.awesomeText.config.lowercase) text = text.toLowerCase(); // TODO remove all trash symbols
	
	      this.owner.awesomeText.select.clearSelectedRange();
	      this.owner.awesomeText.insertString(this.glyphIndex + 1, text);
	      this.glyphIndex = this.glyphIndex + text.length;
	    }
	  }, {
	    key: "moveWithSelectRight",
	    value: function moveWithSelectRight() {
	      var range = this.owner.awesomeText.select.range;
	
	      if (range[1] === null) {
	        ++this.glyphIndex;
	        range[0] = this.glyphIndex;
	        range[1] = this.glyphIndex;
	      } else if (range[1] === range[0] && this.glyphIndex === range[0] - 1) {
	        range[1] = null;
	        this.glyphIndex++;
	      } else {
	        this.owner.awesomeText.select.expand(1);
	        this.glyphIndex++;
	      }
	
	      this.owner.awesomeText.select.update();
	    }
	  }, {
	    key: "moveWithSelectLeft",
	    value: function moveWithSelectLeft() {
	      var range = this.owner.awesomeText.select.range; // If we only have cursor, no selection
	
	      if (range[1] === null) {
	        range[0] = this.glyphIndex;
	        range[1] = this.glyphIndex; // If we have selected one glyph and we remove selection
	      } else if (range[1] === range[0] && this.glyphIndex === range[0]) {
	        range[1] = null; // Regular selecting
	      } else {
	        this.owner.awesomeText.select.expand(-1);
	      }
	
	      this.glyphIndex--;
	      this.owner.awesomeText.select.update();
	    }
	  }, {
	    key: "moveDown",
	    value: function moveDown() {
	      this.owner.awesomeText.select.setRange(null, false);
	      var glyph = this.layout.glyphs[Math.max(0, this.glyphIndex)]; // If we are on the first line
	
	      if (glyph.position[1] === this.layout.height) {
	        return;
	      }
	
	      var newGlyph = this.owner.awesomeText.select.getClosestGlyph(glyph.position[0], glyph.position[1]);
	      this.glyphIndex = this.layout.glyphs.indexOf(newGlyph);
	    }
	  }, {
	    key: "moveUp",
	    value: function moveUp() {
	      this.owner.awesomeText.select.setRange(null, false);
	      var glyph = this.layout.glyphs[this.glyphIndex]; // If we are on the first line
	
	      if (glyph.position[1] <= this.metrics.lineHeight) {
	        return;
	      }
	
	      var newGlyph = this.owner.awesomeText.select.getClosestGlyph(glyph.position[0], glyph.position[1] - this.metrics.lineHeight * 2);
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
/* 11 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nattribute vec2 aVertexPosition;\nattribute vec2 aTextureCoord;\nattribute float aSdfSize;\n\nuniform mat3 translationMatrix;\nuniform mat3 projectionMatrix;\nuniform float sdfMultiplier;\n\nvarying vec2  tc0;\nvarying float doffset;\nvarying float sdf_texel;\n\n\n\nvoid main(void) {\n\n    //TODO MAKE ATTRIBUTE\n    float sdf_size = aSdfSize * sdfMultiplier;\n\n    //TODO MAKE UNIFORMS\n    float sdf_tex_size = 1024.0;\n\n\n    tc0 = aTextureCoord;\n    doffset = 1.0 / sdf_size;       // Distance field delta for one screen pixel\n    sdf_texel = 1.0 / sdf_tex_size;\n\n    gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition , 1.0)).xy, 0.0, 1.0);\n\n}\n"

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = "#define GLSLIFY 1\nuniform sampler2D uSampler;\nuniform float hint_amount;\nuniform float subpixel_amount;\n\nuniform vec3 bg_color;\nuniform vec3 font_color;\n\nvarying vec2  tc0;\nvarying float doffset;\nvarying float sdf_texel;\n\n\n/*\n *  Subpixel coverage calculation\n *\n *  v - edge slope    -1.0 to 1.0          triplet\n *  a - pixel coverage 0.0 to 1.0          coverage\n *\n *      |<- glyph edge                      R  G  B\n *  +---+---+                             +--+--+--+\n *  |   |XXX| v = 1.0 (edge facing west)  |  |xx|XX|\n *  |   |XXX| a = 0.5 (50% coverage)      |  |xx|XX|\n *  |   |XXX|                             |  |xx|XX|\n *  +---+---+                             +--+--+--+\n *    pixel                                0  50 100\n *\n *\n *        R   G   B\n *\n *   1.0        +--+   <- top (abs( v ))\n *              |\n *       -+-----+--+-- <- ceil: 100% coverage\n *        |     |XX|\n *   0.0  |  +--+XX|\n *        |  |xx|XX|\n *       -+--+--+--+-- <- floor: 0% coverage\n *           |\n *  -1.0  +--+         <-  -abs(v)\n *        |\n *        |\n *        |\n *  -2.0  +            <- bottom: -abs(v)-1.0\n */\n\nvec3 subpixel( float v, float a ) {\n    float vt      = 0.6 * v; // 1.0 will make your eyes bleed\n    vec3  rgb_max = vec3( -vt, 0.0, vt );\n    float top     = abs( vt );\n    float bottom  = -top - 1.0;\n    float cfloor  = mix( top, bottom, a );\n    vec3  res     = clamp( rgb_max - vec3( cfloor ), 0.0, 1.0 );\n    return res;\n}\n\nvoid main2() {\n    gl_FragColor = vec4(1.0, 1.0, 1.0,1.0);\n}\n\nvoid main(void) {\n\n    // Sampling the texture, L pattern\n    float sdf       = texture2D( uSampler, tc0 ).r;\n    float sdf_north = texture2D( uSampler, tc0 + vec2( 0.0, sdf_texel ) ).r;\n    float sdf_east  = texture2D( uSampler, tc0 + vec2( sdf_texel, 0.0 ) ).r;\n\n    // Estimating stroke direction by the distance field gradient vector\n    vec2  sgrad     = vec2( sdf_east - sdf, sdf_north - sdf );\n    float sgrad_len = max( length( sgrad ), 1.0 / 128.0 );\n    vec2  grad      = sgrad / vec2( sgrad_len );\n    float vgrad = abs( grad.y ); // 0.0 - vertical stroke, 1.0 - horizontal one\n\n    float horz_scale  = 1.1; // Blurring vertical strokes along the X axis a bit\n    float vert_scale  = 0.6; // While adding some contrast to the horizontal strokes\n    float hdoffset    = mix( doffset * horz_scale, doffset * vert_scale, vgrad );\n    float res_doffset = mix( doffset, hdoffset, hint_amount );\n\n    float alpha       = smoothstep( 0.5 - res_doffset, 0.5 + res_doffset, sdf );\n\n    // Additional contrast\n    alpha             = pow( alpha, 1.0 + 0.2 * vgrad * hint_amount );\n\n    // Unfortunately there is no support for ARB_blend_func_extended in WebGL.\n    // Fortunately the background is filled with a solid color so we can do\n    // the blending inside the shader.\n\n    // Discarding pixels beyond a threshold to minimise possible artifacts.\n    if ( alpha < 20.0 / 256.0 ) discard;\n\n    vec3 channels = subpixel( grad.x * 0.5 * subpixel_amount, alpha ) + 0.1;\n\n    // For subpixel rendering we have to blend each color channel separately\n    vec3 res = mix( bg_color, font_color, channels );\n    gl_FragColor = vec4( res, 1.0 );\n}\n\n\n"

/***/ })
/******/ ])
});
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCBjNDJmYjlmZGU5M2IwMjQyY2JlNSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL25ldy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGF5b3V0LmpzIiwid2VicGFjazovLy8uL3NyYy9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9xdWFkLWluZGljZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9kdHlwZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2FuLWFycmF5L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vaXMtYnVmZmVyL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3NlbGVjdC92ZXJ0Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvc2VsZWN0L2ZyYWcuZ2xzbCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5wdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvdGV4dC92ZXJ0Lmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NoYWRlcnMvdGV4dC9mcmFnLmdsc2wiXSwibmFtZXMiOlsiT2JqZWN0IiwiYXNzaWduIiwiUElYSSIsImV4dHJhcyIsIkF3ZXNvbWVUZXh0IiwiVGV4dCIsImNyZWF0ZUluZGljZXMiLCJ2ZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsInRleHQiLCJzdHlsZSIsImNvbmZpZyIsInN0YXRlcyIsInJlZ3VsYXIiLCJlZGl0YWJsZSIsInVwcGVyY2FzZSIsImxvd2VyY2FzZSIsImFudGlhbGlhc2luZyIsImJhY2tncm91bmRDb2xvciIsImZvbnRTaXplIiwiYnJlYWtXb3JkcyIsIndyYXBXb3JkcyIsIndyYXBwZXJXaWR0aCIsImFsaWduIiwibGluZUhlaWdodCIsIlRleHRMYXlvdXQiLCJUZXh0U3R5bGUiLCJfdGV4dCIsIl9mb250IiwiZm9udCIsIl90ZXh0dXJlIiwidGV4dHVyZSIsImxheW91dCIsImNyZWF0ZUxheW91dCIsImNvbnRhaW5lciIsIkNvbnRhaW5lciIsImF3ZXNvbWVUZXh0IiwiaW50ZXJhY3RpdmUiLCJidXR0b25Nb2RlIiwic2VsZWN0IiwiU2VsZWN0IiwiaW5wdXQiLCJJbnB1dCIsInNldFN0YXRlIiwidXBkYXRlIiwidmVydGljZXMiLCJGbG9hdDMyQXJyYXkiLCJsZXR0ZXJzQ291bnQiLCJ1dnMiLCJzZGZTaXplcyIsImFycmF5UG9zaXRpb25zIiwidmVydGV4Iiwic2RmIiwid29yZHNNZXRyaWNzIiwiZm9yRWFjaCIsIndvcmQiLCJ3cml0ZVN0cmluZyIsIm1ldHJpY3MiLCJ4IiwieSIsImluZGljZXMiLCJjbG9ja3dpc2UiLCJ0eXBlIiwiY291bnQiLCJHZW9tZXRyeSIsImFkZEF0dHJpYnV0ZSIsImFkZEluZGV4IiwiZ2VvbWV0cnkiLCJ2ZXJ0IiwiZnJhZyIsInVuaWZvcm1zIiwidVNhbXBsZXIiLCJoaW50X2Ftb3VudCIsInNkZk11bHRpcGxpZXIiLCJzY2FsZSIsInN1YnBpeGVsX2Ftb3VudCIsImZvbnRfY29sb3IiLCJ1dGlscyIsImhleDJyZ2IiLCJmaWxsIiwicmVwbGFjZSIsImJnX2NvbG9yIiwidGV4dFNoYWRlciIsIlNoYWRlciIsImZyb20iLCJNZXNoIiwiZm9udE1ldHJpY3MiLCJ0ZXh0R2VvbWV0cnkiLCJkZXN0cm95IiwidGV4dE1lc2giLCJyZW1vdmVDaGlsZCIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlTWVzaCIsImFkZENoaWxkIiwibmV3U3RhdGUiLCJzZWxlY3RpbmciLCJlbmFibGVkIiwidmFsdWVzIiwic2V0UmVndWxhclN0YXRlIiwic3RhdGUiLCJzZXRFZGl0YWJsZVN0YXRlIiwiY3VycmVudEVkaXRpbmdFbGVtZW50Iiwib2ZmIiwib24iLCJlIiwiY2xpY2tzQ291bnQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsInNldFJhbmdlIiwibGVuZ3RoIiwiaW5wdXRFbGVtZW50IiwiZm9jdXMiLCJvbk1vdXNlRG93biIsInNob3ciLCJkYXRhIiwib3JpZ2luYWxFdmVudCIsIm1vdmVtZW50WCIsIm1vdmVtZW50WSIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwiaW5kZXgiLCJzdHJpbmciLCJzdWJzdHIiLCJuZXdUZXh0Iiwic3BsaXQiLCJzcGxpY2UiLCJqb2luIiwiZm9udF9tZXRyaWNzIiwicG9zIiwicHJldl9jaGFyIiwiY3BvcyIsInhfbWF4IiwiY2FwU2NhbGUiLCJzdHJfcG9zIiwic2NoYXIiLCJmb250X2NoYXIiLCJjaGFycyIsImtlcm4iLCJyZWN0IiwiY2hhclJlY3QiLCJwb3NpdGlvbnMiLCJtYXAiLCJ1diIsInN0cmluZ19wb3MiLCJtb3JlTGluZUdhcCIsImNhcF9oZWlnaHQiLCJ4X2hlaWdodCIsImZvbnRBc2NlbnQiLCJhc2NlbnQiLCJkZXNjZW50IiwibGluZV9nYXAiLCJsb3dTY2FsZSIsIk1hdGgiLCJyb3VuZCIsImxvd2Nhc2UiLCJmbGFncyIsImJhc2VsaW5lIiwiZyIsImJvdHRvbSIsIml5IiwidG9wIiwicm93X2hlaWdodCIsImxlZnQiLCJiZWFyaW5nX3giLCJpeCIsInJpZ2h0IiwicCIsIm5ld19wb3NfeCIsImFkdmFuY2VfeCIsInNkZl9zaXplIiwidmFsdWUiLCJvd25lciIsInN0YXJ0WSIsImNhbGN1bGF0ZVdvcmRzUG9zaXRpb25zIiwiZ2x5cGhzIiwiZ2V0R2x5cGhzIiwid2lkdGgiLCJoZWlnaHQiLCJjaGFyIiwid29yZHMiLCJpIiwic3RhcnRYIiwid29yZFNpemUiLCJnZXRTdHJpbmdTaXplIiwicHVzaCIsImxpbmVzQ291bnQiLCJ3b3Jkc09uTGluZSIsImZpbHRlciIsImxhc3RXb3JkIiwiZnJlZVNwYWNlIiwibGVmdE9mZnNldCIsImxldHRlciIsInBvc2l0aW9uIiwiX2VuYWJsZWQiLCJidWlsZFZlcnRpY2VzIiwic2hhZGVyIiwibWVzaCIsInJhbmdlIiwiYmxlbmRNb2RlIiwiQkxFTkRfTU9ERVMiLCJOT1JNQUxfTlBNIiwic3RhcnQiLCJlbmQiLCJtaW4iLCJhcHBseSIsIm1heCIsImxldHRlckNvdW50IiwiZmlyc3RMZXR0ZXIiLCJsYXN0TGV0dGVyIiwic3RhcnRMaW5lTGV0dGVyIiwiZW5kTGluZUxldHRlciIsIm9mZnNldCIsInNlbGVjdGluZ0xpbmUiLCJmbG9vciIsInNlbGVjdGluZ0xpbmVZIiwibGFzdEdseXBoT25MaW5lIiwiZmlyc3RHbHlwaE9uTGluZSIsImdseXBoIiwiZXZlbnQiLCJidXR0b24iLCJnbG9iYWwiLCJ0cmFuc2Zvcm1Qb3NpdGlvbiIsImNsb3Nlc3RMZXR0ZXIiLCJnZXRDbG9zZXN0R2x5cGgiLCJpbmRleE9mIiwiZ2x5cGhJbmRleCIsIm93bmVyUG9zaXRpb24iLCJnZXRHbG9iYWxQb3NpdGlvbiIsInRyYW5zZm9ybSIsIndvcmxkVHJhbnNmb3JtIiwidHgiLCJ0eSIsImEiLCJkIiwicmVtb3ZlSW5kZXgiLCJyZW1vdmVMZW5ndGgiLCJhYnMiLCJyZW1vdmVTdHJpbmciLCJkaXJlY3Rpb24iLCJfZ2x5cGhJbmRleCIsImVuYWJsZSIsImRpc2FibGUiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY3JlYXRlRmllbGQiLCJkaXNwbGF5IiwiYm9keSIsImFwcGVuZCIsImNvbnRhaW5zIiwib3BhY2l0eSIsImNyZWF0ZUVsZW1lbnQiLCJzbGljZSIsImNvbG9yIiwiYm9yZGVyIiwiY29udGFpbiIsInpJbmRleCIsInBvaW50ZXJFdmVudHMiLCJvdXRsaW5lIiwidHJhbnNmb3JtT3JpZ2luIiwicGFkZGluZyIsImFkZEV2ZW50Iiwib25JbnB1dCIsIm9uS2V5ZG93biIsInBhc3RlRnJvbUNsaXBib2FyZCIsImdseXBoTWV0cmljcyIsImxhc3RHbHlwaCIsInNlbGVjdGVkR2x5cGgiLCJzZXRQb3NpdGlvbiIsImNsZWFyU2VsZWN0ZWRSYW5nZSIsInRhcmdldCIsInRleHRUb0FkZCIsInRvVXBwZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJpbnNlcnRTdHJpbmciLCJrZXkiLCJtb3ZlVXAiLCJtb3ZlRG93biIsImN0cmxLZXkiLCJtb3ZlQnlXb3JkTGVmdCIsInNoaWZ0S2V5IiwibW92ZVdpdGhTZWxlY3RMZWZ0IiwibW92ZUJ5V29yZFJpZ2h0IiwibW92ZVdpdGhTZWxlY3RSaWdodCIsImNvcHlUb0NsaXBib2FyZCIsInNjYWxlWCIsInNjYWxlWSIsImxvY2FsWCIsImxvY2FsWSIsImdldFRyYW5zZm9ybSIsIm93bmVyVHJhbnNmb3JtIiwiY2FudmFzUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImN1dCIsImV4ZWNDb21tYW5kIiwicHJldmVudERlZmF1bHQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImV4cGFuZCIsIm5ld0dseXBoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q0E7Ozs7QUFFQUEsT0FBTSxDQUFDQyxNQUFQLENBQWNDLElBQUksQ0FBQ0MsTUFBbkIsRUFBMkI7QUFDekJDLGNBQVcsRUFBRUM7QUFEWSxFQUEzQjs7QUFJQSxLQUFJLE9BQU9ILElBQVAsS0FBZ0IsV0FBcEIsRUFBaUM7QUFDL0IsT0FBSUEsSUFBSSxDQUFDQyxNQUFULEVBQWlCO0FBQ2ZELFNBQUksQ0FBQ0MsTUFBTCxDQUFZQyxXQUFaLEdBQTBCQyxlQUExQjtBQUNELElBRkQsTUFFTztBQUNMSCxTQUFJLENBQUNDLE1BQUwsR0FBYztBQUFFQyxrQkFBVyxFQUFFQztBQUFm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RUFBM0QsRUFBZ0U7QUFDOUQsZUFBSU4sTUFBTSxDQUFDTSxDQUFELENBQU4sQ0FBVVcsTUFBVixLQUFxQixHQUFyQixJQUE0QmpCLE1BQU0sQ0FBQ00sQ0FBQyxHQUFHLENBQUwsQ0FBTixDQUFlVyxNQUFmLEtBQTBCLEdBQTFELEVBQStEO0FBQzdELGtCQUFLa0MsVUFBTCxHQUFrQjdDLENBQWxCO0FBQ0E7QUFDRDs7QUFDRCxlQUFJQSxDQUFDLEtBQUtOLE1BQU0sQ0FBQ2pFLE1BQVAsR0FBZ0IsQ0FBMUIsRUFBNkIsS0FBS29ILFVBQUwsR0FBa0JuRCxNQUFNLENBQUNqRSxNQUFQLEdBQWUsQ0FBakM7QUFDOUI7QUFDRjtBQUVGOzs7Ozs7Z0JBSVlwRSxLOzs7Ozs7O0FDMWNmLHFFQUFvRSwrQkFBK0IsMkJBQTJCLG1DQUFtQyxnQ0FBZ0MsOEJBQThCLHNCQUFzQix3QkFBd0IsMEJBQTBCLHlCQUF5Qiw2RUFBNkUsOERBQThELDhCQUE4QiwrQkFBK0Isd0ZBQXdGLDhHQUE4RyxLQUFLLEc7Ozs7OztBQ0FudEIsaUVBQWdFLDRCQUE0QixnQ0FBZ0MsMEJBQTBCLDBCQUEwQixzQkFBc0Isd0JBQXdCLDBCQUEwQix3OEJBQXc4Qiw4QkFBOEIsNEVBQTRFLGdDQUFnQyxpQ0FBaUMsNENBQTRDLGtFQUFrRSxpQkFBaUIsR0FBRyxrQkFBa0IsNkNBQTZDLEdBQUcscUJBQXFCLCtGQUErRiw4RUFBOEUsOEVBQThFLDRJQUE0SSw0REFBNEQsa0RBQWtELGtDQUFrQywrRUFBK0Usa0ZBQWtGLDJJQUEySSxnRUFBZ0Usb0ZBQW9GLHNHQUFzRyxnVUFBZ1UsZ0ZBQWdGLHVJQUF1SSxzQ0FBc0MsR0FBRyxPIiwiZmlsZSI6InBpeGktYXdlc29tZS10ZXh0Lm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIkF3ZXNvbWVUZXh0XCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcIkF3ZXNvbWVUZXh0XCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svdW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbiIsIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM0MmZiOWZkZTkzYjAyNDJjYmU1IiwiaW1wb3J0IFRleHQgZnJvbSBcIi4vbmV3XCI7XHJcblxyXG5PYmplY3QuYXNzaWduKFBJWEkuZXh0cmFzLCB7XHJcbiAgQXdlc29tZVRleHQ6IFRleHRcclxufSk7XHJcblxyXG5pZiAodHlwZW9mIFBJWEkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgaWYgKFBJWEkuZXh0cmFzKSB7XHJcbiAgICBQSVhJLmV4dHJhcy5Bd2Vzb21lVGV4dCA9IFRleHQ7XHJcbiAgfSBlbHNlIHtcclxuICAgIFBJWEkuZXh0cmFzID0geyBBd2Vzb21lVGV4dDogVGV4dH07XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQge1xyXG4gIFRleHRcclxufVxyXG5cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiY29uc3QgY3JlYXRlSW5kaWNlcyA9IHJlcXVpcmUoXCJxdWFkLWluZGljZXNcIilcclxuaW1wb3J0IFRleHRMYXlvdXQgZnJvbSAnLi9sYXlvdXQnO1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gXCIuL3NlbGVjdFwiO1xyXG5pbXBvcnQgSW5wdXQgZnJvbSBcIi4vaW5wdXRcIjtcclxuXHJcbmNvbnN0IHZlcnRleFNoYWRlciA9IHJlcXVpcmUoXCIuL3NoYWRlcnMvdGV4dC92ZXJ0Lmdsc2xcIik7XHJcbmNvbnN0IGZyYWdtZW50U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy90ZXh0L2ZyYWcuZ2xzbFwiKTtcclxuXHJcbmNsYXNzIFRleHQge1xyXG5cclxuICAgIHN0YXRpYyBzY2FsZSA9IDEuMDtcclxuICAgIHN0YXRpYyBzdGF0ZXMgPSB7cmVndWxhcjogMCwgZWRpdGFibGU6IDEsIHNlbGVjdGluZzogMn07XHJcbiAgICBzdGF0aWMgY3VycmVudEVkaXRpbmdFbGVtZW50ID0gbnVsbDtcclxuXHJcbiAgICBzdGF0ZSA9IFRleHQuc3RhdGVzLnJlZ3VsYXI7XHJcbiAgICBjbGlja3NDb3VudCA9IDA7XHJcblxyXG4gICAgY29uZmlnID0ge1xyXG4gICAgICAgIGVkaXRhYmxlOiBmYWxzZSxcclxuICAgICAgICB1cHBlcmNhc2U6IGZhbHNlLFxyXG4gICAgICAgIGxvd2VyY2FzZTogZmFsc2UsXHJcbiAgICAgICAgYW50aWFsaWFzaW5nOiB0cnVlLFxyXG4gICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwMDAwXCJcclxuICAgIH07XHJcblxyXG4gICAgY29uc3RydWN0b3IodGV4dCwgc3R5bGUsIGNvbmZpZykge1xyXG5cclxuICAgICAgICAvLyBCYXNpYyBwYXJhbXNcclxuICAgICAgICB0aGlzLnN0eWxlID0gbmV3IFBJWEkuVGV4dFN0eWxlKHN0eWxlKTtcclxuICAgICAgICB0aGlzLmNvbmZpZyA9IHsuLi50aGlzLmNvbmZpZywgLi4uY29uZmlnfTtcclxuICAgICAgICB0aGlzLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29uZmlnLmJhY2tncm91bmRDb2xvcjtcclxuICAgICAgICB0aGlzLl90ZXh0ID0gdGV4dDsgLy8gQ29udGVudFxyXG4gICAgICAgIHRoaXMuX2ZvbnQgPSBjb25maWcuZm9udDsgLy8gRm9udCBpbmZvcm1hdGlvblxyXG4gICAgICAgIHRoaXMuX3RleHR1cmUgPSBjb25maWcudGV4dHVyZTsgLy8gVGV4dHVyZSB3aXRoIGdseXBoc1xyXG5cclxuICAgICAgICB0aGlzLmxheW91dCA9IHRoaXMuY3JlYXRlTGF5b3V0KHRoaXMuc3R5bGUpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgc3RydWN0dXJlXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIgPSBuZXcgUElYSS5Db250YWluZXIoKTtcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5hd2Vzb21lVGV4dCA9IHRoaXM7XHJcblxyXG4gICAgICAgIC8vIElmIGZpZWxkIGlzIGVkaXRhYmxlLCBwcmVwYXJlIGl0XHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmVkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29udGFpbmVyLmludGVyYWN0aXZlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5jb250YWluZXIuYnV0dG9uTW9kZSA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdCA9IG5ldyBTZWxlY3QodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQgPSBuZXcgSW5wdXQodGhpcyk7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoVGV4dC5zdGF0ZXMucmVndWxhcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5jb250YWluZXI7XHJcbiAgICB9XHJcblxyXG4gICAgY3JlYXRlTGF5b3V0ID0gKHtmb250U2l6ZSA9IDEzLCBicmVha1dvcmRzIDogd3JhcFdvcmRzICA9IGZhbHNlLCB3cmFwcGVyV2lkdGggPSA0MDAsIGFsaWduID0gXCJsZWZ0XCIsIGxpbmVIZWlnaHQgPSAxN30pID0+IG5ldyBUZXh0TGF5b3V0KHRoaXMsIHtcclxuICAgICAgICBmb250U2l6ZSxcclxuICAgICAgICB3cmFwV29yZHMsXHJcbiAgICAgICAgd3JhcHBlcldpZHRoLFxyXG4gICAgICAgIGFsaWduLFxyXG4gICAgICAgIGxpbmVIZWlnaHQsXHJcbiAgICB9KTtcclxuXHJcbiAgICBjcmVhdGVHZW9tZXRyeSgpIHtcclxuXHJcbiAgICAgICAgLy8gQXJyYXlzIGZvciB2ZXJ0aWNlcywgdXZzIGFuZCBzZGZcclxuICAgICAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0ICogMik7XHJcbiAgICAgICAgdGhpcy51dnMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubGF5b3V0LmxldHRlcnNDb3VudCAqIDQgKiAyKTtcclxuICAgICAgICB0aGlzLnNkZlNpemVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0KTtcclxuICAgICAgICB0aGlzLmFycmF5UG9zaXRpb25zID0geyB2ZXJ0ZXg6IDAsIHV2czogMCwgc2RmOiAwIH07XHJcblxyXG4gICAgICAgIC8vIEZpbGwgYXJyYXlzIHdvcmQgYnkgd29yZFxyXG4gICAgICAgIHRoaXMubGF5b3V0LndvcmRzTWV0cmljcy5mb3JFYWNoICh3b3JkID0+IHtcclxuICAgICAgICAgICAgdGhpcy53cml0ZVN0cmluZyh3b3JkLndvcmQsIHRoaXMuZm9udCwgdGhpcy5tZXRyaWNzLCBbd29yZC54LCB3b3JkLnldKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gUHJlcGFyZSBpbmRpY2VzXHJcbiAgICAgICAgdGhpcy5pbmRpY2VzID0gY3JlYXRlSW5kaWNlcyh7XHJcbiAgICAgICAgICAgIGNsb2Nrd2lzZTogdHJ1ZSxcclxuICAgICAgICAgICAgdHlwZTogJ3VpbnQxNicsXHJcbiAgICAgICAgICAgIGNvdW50OiB0aGlzLmxheW91dC5sZXR0ZXJzQ291bnRcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gRmlsbCB1cCB0aGUgZ2VvbWV0cnlcclxuICAgICAgICByZXR1cm4gbmV3IFBJWEkuR2VvbWV0cnkoKVxyXG4gICAgICAgICAgICAuYWRkQXR0cmlidXRlKCdhVmVydGV4UG9zaXRpb24nLCAvLyB0aGUgYXR0cmlidXRlIG5hbWVcclxuICAgICAgICAgICAgICAgIHRoaXMudmVydGljZXMsIC8vIHgsIHlcclxuICAgICAgICAgICAgICAgIDIpIC8vIHRoZSBzaXplIG9mIHRoZSBhdHRyaWJ1dGVcclxuXHJcbiAgICAgICAgICAgIC5hZGRBdHRyaWJ1dGUoJ2FUZXh0dXJlQ29vcmQnLCAvLyB0aGUgYXR0cmlidXRlIG5hbWVcclxuICAgICAgICAgICAgICAgIHRoaXMudXZzLCAvLyB1LCB2XHJcbiAgICAgICAgICAgICAgICAyKSAvLyB0aGUgc2l6ZSBvZiB0aGUgYXR0cmlidXRlXHJcblxyXG4gICAgICAgICAgICAuYWRkQXR0cmlidXRlKCdhU2RmU2l6ZScsIC8vIHRoZSBhdHRyaWJ1dGUgbmFtZVxyXG4gICAgICAgICAgICAgICAgdGhpcy5zZGZTaXplcywgLy8gdSwgdlxyXG4gICAgICAgICAgICAgICAgMSkgLy8gdGhlIHNpemUgb2YgdGhlIGF0dHJpYnV0ZVxyXG4gICAgICAgICAgICAuYWRkSW5kZXgodGhpcy5pbmRpY2VzKVxyXG4gICAgfVxyXG5cclxuICAgIGNyZWF0ZU1lc2goe2dlb21ldHJ5ID0gbmV3IFBJWEkuR2VvbWV0cnkoKSwgdmVydCA9IFwiXCIsIGZyYWcgPSBcIlwifSkge1xyXG4gICAgICAgIC8vIFBhc3MgdW5pZm9ybXMgdG8gdGhlIHNoYWRlclxyXG4gICAgICAgIGNvbnN0IHVuaWZvcm1zID0ge1xyXG4gICAgICAgICAgICB1U2FtcGxlcjogdGhpcy5fdGV4dHVyZSxcclxuICAgICAgICAgICAgaGludF9hbW91bnQ6IHRoaXMuY29uZmlnLmFudGlhbGlhc2luZyAqIDEsXHJcbiAgICAgICAgICAgIHNkZk11bHRpcGxpZXI6IFRleHQuc2NhbGUsXHJcbiAgICAgICAgICAgIHN1YnBpeGVsX2Ftb3VudDogdGhpcy5jb25maWcuYW50aWFsaWFzaW5nICogMSxcclxuICAgICAgICAgICAgZm9udF9jb2xvcjogUElYSS51dGlscy5oZXgycmdiKHRoaXMuc3R5bGUuZmlsbC5yZXBsYWNlKFwiI1wiLCBcIjB4XCIpKSxcclxuICAgICAgICAgICAgYmdfY29sb3I6IFBJWEkudXRpbHMuaGV4MnJnYih0aGlzLmJhY2tncm91bmRDb2xvci5yZXBsYWNlKFwiI1wiLCBcIjB4XCIpKVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICghdGhpcy50ZXh0U2hhZGVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dFNoYWRlciA9IFBJWEkuU2hhZGVyLmZyb20odmVydCwgZnJhZywgdW5pZm9ybXMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQSVhJLk1lc2goZ2VvbWV0cnksIHRoaXMudGV4dFNoYWRlcik7XHJcbiAgICB9XHJcblxyXG4gICAgdXBkYXRlKCkge1xyXG4gICAgICAgIHRoaXMubWV0cmljcyA9IHRoaXMuZm9udE1ldHJpY3ModGhpcy5zdHlsZS5mb250U2l6ZSwgMC4wKTtcclxuICAgICAgICB0aGlzLmxheW91dC51cGRhdGUoKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuY29uZmlnLmVkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0LnVwZGF0ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0LnVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMudGV4dEdlb21ldHJ5KVxyXG4gICAgICAgICAgICB0aGlzLnRleHRHZW9tZXRyeS5kZXN0cm95KCk7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLnRleHRNZXNoKVxyXG4gICAgICAgICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLnRleHRNZXNoKVxyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGV4dCBnZW9tZXRyeSAodmVydGljZXMsIHV2cywgZXRjKVxyXG4gICAgICAgIHRoaXMudGV4dEdlb21ldHJ5ID0gdGhpcy5jcmVhdGVHZW9tZXRyeSgpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgdGV4dCBtZXNoXHJcbiAgICAgICAgdGhpcy50ZXh0TWVzaCA9IHRoaXMuY3JlYXRlTWVzaCh7XHJcbiAgICAgICAgICAgIGdlb21ldHJ5IDogdGhpcy50ZXh0R2VvbWV0cnksXHJcbiAgICAgICAgICAgIHZlcnQ6IHZlcnRleFNoYWRlcixcclxuICAgICAgICAgICAgZnJhZzogZnJhZ21lbnRTaGFkZXJcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy50ZXh0TWVzaCk7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IHRleHR1cmUoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RleHR1cmU7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0IGZvbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ZvbnRcclxuICAgIH1cclxuXHJcbiAgICBnZXQgdGV4dCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fdGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBzZXQgdGV4dCh2YWx1ZSkge1xyXG4gICAgICAgIHRoaXMuX3RleHQgPSB2YWx1ZTtcclxuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFN0YXRlKG5ld1N0YXRlKSB7XHJcblxyXG4gICAgICAgIGlmIChuZXdTdGF0ZSA9PT0gVGV4dC5zdGF0ZXMuZWRpdGFibGUgfHwgbmV3U3RhdGUgPT09IFRleHQuc3RhdGVzLnNlbGVjdGluZykge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdC5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdC5lbmFibGVkID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIXRoaXMuY29uZmlnLmVkaXRhYmxlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHsgc3RhdGVzIH0gPSBUZXh0O1xyXG5cclxuICAgICAgICBpZiAoIW5ld1N0YXRlIGluIE9iamVjdC52YWx1ZXMoc3RhdGVzKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKG5ld1N0YXRlKSB7XHJcbiAgICAgICAgICAgIGNhc2Ugc3RhdGVzLnJlZ3VsYXI6XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFJlZ3VsYXJTdGF0ZSgpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2Ugc3RhdGVzLmVkaXRhYmxlOlxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFRleHQuc3RhdGVzLnJlZ3VsYXIpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldEVkaXRhYmxlU3RhdGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IG5ld1N0YXRlO1xyXG4gICAgfVxyXG5cclxuICAgIHNldFJlZ3VsYXJTdGF0ZSgpIHtcclxuXHJcbiAgICAgICAgVGV4dC5jdXJyZW50RWRpdGluZ0VsZW1lbnQgPSBudWxsO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5vZmYoXCJtb3VzZWRvd25cIik7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIub2ZmKFwibW91c2Vtb3ZlXCIpO1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyLm9mZihcIm1vdXNldXBcIik7XHJcbiAgICAgICAgdGhpcy5jb250YWluZXIub2ZmKFwibW91c2V1cG91dHNpZGVcIik7XHJcblxyXG4gICAgICAgIHRoaXMuaW5wdXQuZW5hYmxlZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5vbihcImNsaWNrXCIsIGUgPT4ge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5jbGlja3NDb3VudCA9PT0gMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja3NDb3VudCA9IDA7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKFRleHQuc3RhdGVzLmVkaXRhYmxlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuY2xpY2tzQ291bnQgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tzQ291bnQrKztcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrc0NvdW50ID0gMDtcclxuICAgICAgICAgICAgICAgIH0sIDMwMClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfVxyXG5cclxuICAgIHNldEVkaXRhYmxlU3RhdGUoKSB7XHJcblxyXG4gICAgICAgIC8vIERpc2FibGUgcHJldmlvdXNseSBlbmFibGVkIGZpZWxkXHJcbiAgICAgICAgaWYgKFRleHQuY3VycmVudEVkaXRpbmdFbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgVGV4dC5jdXJyZW50RWRpdGluZ0VsZW1lbnQuc2V0U3RhdGUoVGV4dC5zdGF0ZXMucmVndWxhcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFRleHQuY3VycmVudEVkaXRpbmdFbGVtZW50ID0gdGhpcztcclxuXHJcbiAgICAgICAgLy8gRGlzYWJsZSB1bm5lY2Vzc2FyeSBldmVudHNcclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5vZmYoXCJjbGlja1wiKTtcclxuXHJcbiAgICAgICAgdGhpcy5pbnB1dC5lbmFibGVkID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmlucHV0LmhpZGUoKTtcclxuXHJcbiAgICAgICAgLy8gU2VsZWN0IGFsbCBjaGFyYWN0ZXJzXHJcbiAgICAgICAgdGhpcy5zZWxlY3Quc2V0UmFuZ2UoMCx0aGlzLnRleHQubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgdGhpcy5pbnB1dC5pbnB1dEVsZW1lbnQuZm9jdXMoKTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIub24oXCJtb3VzZWRvd25cIiwgZSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoVGV4dC5zdGF0ZXMuc2VsZWN0aW5nKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3Qub25Nb3VzZURvd24oZSk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5wdXQuc2hvdygpO1xyXG4gICAgICAgICAgICB0aGlzLmlucHV0LnVwZGF0ZShlKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIub24oXCJtb3VzZW1vdmVcIiwgZSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHttb3ZlbWVudFgsIG1vdmVtZW50WX0gPSBlLmRhdGEub3JpZ2luYWxFdmVudDtcclxuICAgICAgICAgICAgaWYgKG1vdmVtZW50WCA9PT0gMCAmJiBtb3ZlbWVudFkgPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnN0YXRlID09PSBUZXh0LnN0YXRlcy5zZWxlY3RpbmcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0Lm9uTW91c2VNb3ZlKGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dC5oaWRlKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5jb250YWluZXIub24oXCJtb3VzZXVwXCIsIGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFRleHQuc3RhdGVzLmVkaXRhYmxlKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3Qub25Nb3VzZVVwKGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICB0aGlzLmNvbnRhaW5lci5vbihcIm1vdXNldXBvdXRzaWRlXCIsIGUgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKFRleHQuc3RhdGVzLmVkaXRhYmxlKTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3Qub25Nb3VzZVVwKGUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH1cclxuXHJcbiAgICBpbnNlcnRTdHJpbmcoaW5kZXgsIHN0cmluZykge1xyXG4gICAgICAgIHRoaXMudGV4dCA9IHRoaXMudGV4dC5zdWJzdHIoMCwgaW5kZXgpICsgc3RyaW5nICsgdGhpcy50ZXh0LnN1YnN0cihpbmRleCk7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU3RyaW5nKGluZGV4LCBsZW5ndGgpIHtcclxuICAgICAgICBsZXQgbmV3VGV4dCA9IHRoaXMudGV4dC5zcGxpdChcIlwiKTtcclxuICAgICAgICBuZXdUZXh0LnNwbGljZShpbmRleCwgbGVuZ3RoICsgMSk7XHJcbiAgICAgICAgdGhpcy50ZXh0ID0gbmV3VGV4dC5qb2luKFwiXCIpO1xyXG4gICAgfVxyXG5cclxuICAgIHdyaXRlU3RyaW5nKCBzdHJpbmcsIGZvbnQsIGZvbnRfbWV0cmljcywgcG9zKSB7XHJcbiAgICAgICAgbGV0IHByZXZfY2hhciA9IFwiIFwiOyAgLy8gVXNlZCB0byBjYWxjdWxhdGUga2VybmluZ1xyXG4gICAgICAgIGxldCBjcG9zICAgICAgPSBwb3M7ICAvLyBDdXJyZW50IHBlbiBwb3NpdGlvblxyXG4gICAgICAgIGxldCB4X21heCAgICAgPSAwLjA7ICAvLyBNYXggd2lkdGggLSB1c2VkIGZvciBib3VuZGluZyBib3hcclxuICAgICAgICBsZXQgc2NhbGUgICAgID0gZm9udF9tZXRyaWNzLmNhcFNjYWxlO1xyXG5cclxuICAgICAgICBsZXQgc3RyX3BvcyA9IDA7XHJcblxyXG4gICAgICAgIGZvcig7Oykge1xyXG4gICAgICAgICAgICBpZiAoIHN0cl9wb3MgPT09IHN0cmluZy5sZW5ndGggKSBicmVhaztcclxuXHJcbiAgICAgICAgICAgIHZhciBzY2hhciA9IHN0cmluZ1sgc3RyX3BvcyBdO1xyXG4gICAgICAgICAgICBzdHJfcG9zKys7XHJcblxyXG4gICAgICAgICAgICBpZiAoIHNjaGFyID09PSBcIlxcblwiICkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCBjcG9zWzBdID4geF9tYXggKSB4X21heCA9IGNwb3NbMF07IC8vIEV4cGFuZGluZyB0aGUgYm91bmRpbmcgcmVjdFxyXG4gICAgICAgICAgICAgICAgY3Bvc1swXSAgPSBwb3NbMF07XHJcbiAgICAgICAgICAgICAgICBjcG9zWzFdIC09IGZvbnRfbWV0cmljcy5saW5lSGVpZ2h0O1xyXG4gICAgICAgICAgICAgICAgcHJldl9jaGFyID0gXCIgXCI7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCBzY2hhciA9PT0gXCIgXCIgKSB7XHJcbiAgICAgICAgICAgICAgICAvL3NjaGFyID0gXCJfXCJcclxuICAgICAgICAgICAgICAgIC8vY3Bvc1swXSArPSBmb250LnNwYWNlX2FkdmFuY2UgKiBzY2FsZTtcclxuICAgICAgICAgICAgICAgIC8vcHJldl9jaGFyID0gXCIgXCI7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB2YXIgZm9udF9jaGFyID0gZm9udC5jaGFyc1sgc2NoYXIgXTtcclxuICAgICAgICAgICAgaWYgKCAhZm9udF9jaGFyICkgeyAgICAgICAgICAgICAgICAgICAgICAgICAvLyBTdWJzdGl0dXRpbmcgdW5hdmFpbGFibGUgY2hhcmFjdGVycyB3aXRoICc/J1xyXG4gICAgICAgICAgICAgICAgc2NoYXIgPSBcIj9cIjtcclxuICAgICAgICAgICAgICAgIGZvbnRfY2hhciA9IGZvbnQuY2hhcnNbIFwiP1wiIF07XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHZhciBrZXJuID0gZm9udC5rZXJuWyBwcmV2X2NoYXIgKyBzY2hhciBdO1xyXG4gICAgICAgICAgICBpZiAoICFrZXJuICkga2VybiA9IDAuMDtcclxuXHJcbiAgICAgICAgICAgIC8vIGNhbGN1bGF0aW5nIHRoZSBnbHlwaCByZWN0YW5nbGUgYW5kIGNvcHlpbmcgaXQgdG8gdGhlIHZlcnRleCBhcnJheVxyXG4gICAgICAgICAgICB2YXIgcmVjdCA9IHRoaXMuY2hhclJlY3QoIGNwb3MsIGZvbnQsIGZvbnRfbWV0cmljcywgZm9udF9jaGFyLCBrZXJuICk7XHJcblxyXG4gICAgICAgICAgICByZWN0LnBvc2l0aW9ucy5tYXAoKHBvcykgPT4gdGhpcy52ZXJ0aWNlc1sgdGhpcy5hcnJheVBvc2l0aW9ucy52ZXJ0ZXgrKyBdID0gcG9zICk7XHJcbiAgICAgICAgICAgIHJlY3QudXZzLm1hcCgodXYpID0+IHRoaXMudXZzWyB0aGlzLmFycmF5UG9zaXRpb25zLnV2cysrIF0gPSB1diApO1xyXG4gICAgICAgICAgICByZWN0LnNkZlNpemVzLm1hcCgoc2RmKSA9PiB0aGlzLnNkZlNpemVzWyB0aGlzLmFycmF5UG9zaXRpb25zLnNkZisrIF0gPSBzZGYgKTtcclxuXHJcbiAgICAgICAgICAgIHByZXZfY2hhciA9IHNjaGFyO1xyXG4gICAgICAgICAgICBjcG9zID0gcmVjdC5wb3M7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICByZWN0IDogWyBwb3NbMF0sIHBvc1sxXSwgeF9tYXggLSBwb3NbMF0sIHBvc1sxXSAtIGNwb3NbMV0gKyBmb250X21ldHJpY3MubGluZUhlaWdodCBdLFxyXG4gICAgICAgICAgICBzdHJpbmdfcG9zIDogc3RyX3BvcyxcclxuICAgICAgICAgICAgLy9hcnJheV9wb3MgOiBhcnJheV9wb3NcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGZvbnRNZXRyaWNzKGZvbnRTaXplLCBtb3JlTGluZUdhcCA9IDAuMikge1xyXG5cclxuICAgICAgICBjb25zdCB7Y2FwX2hlaWdodCwgeF9oZWlnaHQsIGFzY2VudDogZm9udEFzY2VudCAsIGRlc2NlbnQsIGxpbmVfZ2FwfSA9IHRoaXMuZm9udDtcclxuXHJcbiAgICAgICAgY29uc3QgY2FwU2NhbGUgPSB0aGlzLnN0eWxlLmZvbnRTaXplIC8gY2FwX2hlaWdodDtcclxuICAgICAgICBjb25zdCBsb3dTY2FsZSA9IE1hdGgucm91bmQoIHhfaGVpZ2h0ICogY2FwU2NhbGUgKSAvIHhfaGVpZ2h0O1xyXG4gICAgICAgIGNvbnN0IGFzY2VudCA9IE1hdGgucm91bmQoIGZvbnRBc2NlbnQgKiBjYXBTY2FsZSApO1xyXG4gICAgICAgIGxldCBsaW5lSGVpZ2h0ID0gTWF0aC5yb3VuZCggY2FwU2NhbGUgKiAoIGZvbnRBc2NlbnQgKyBkZXNjZW50ICsgbGluZV9nYXAgKSArIG1vcmVMaW5lR2FwKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3R5bGUubGluZUhlaWdodCA+IDApXHJcbiAgICAgICAgICAgIGxpbmVIZWlnaHQgPSB0aGlzLnN0eWxlLmxpbmVIZWlnaHQ7XHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB0aGlzLnN0eWxlLmxpbmVIZWlnaHQgPSBsaW5lSGVpZ2h0O1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBjYXBTY2FsZSAgIDogY2FwU2NhbGUsXHJcbiAgICAgICAgICAgIGxvd1NjYWxlICAgOiBsb3dTY2FsZSxcclxuICAgICAgICAgICAgYXNjZW50ICAgICAgOiBhc2NlbnQsXHJcbiAgICAgICAgICAgIGxpbmVIZWlnaHQgOiBsaW5lSGVpZ2h0XHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBjaGFyUmVjdCggcG9zLCBmb250LCBmb250X21ldHJpY3MsIGZvbnRfY2hhciwga2VybiA9IDAuMCApIHtcclxuXHJcbiAgICAgICAgLy8gTG93IGNhc2UgY2hhcmFjdGVycyBoYXZlIGZpcnN0IGJpdCBzZXQgaW4gJ2ZsYWdzJ1xyXG4gICAgICAgIHZhciBsb3djYXNlID0gKCBmb250X2NoYXIuZmxhZ3MgJiAxICkgPT09IDE7XHJcblxyXG4gICAgICAgIC8vIFBlbiBwb3NpdGlvbiBpcyBhdCB0aGUgdG9wIG9mIHRoZSBsaW5lLCBZIGdvZXMgdXBcclxuICAgICAgICB2YXIgYmFzZWxpbmUgPSBwb3NbMV0gLSBmb250X21ldHJpY3MuYXNjZW50O1xyXG5cclxuICAgICAgICAvLyBMb3cgY2FzZSBjaGFycyB1c2UgdGhlaXIgb3duIHNjYWxlXHJcbiAgICAgICAgdmFyIHNjYWxlID0gbG93Y2FzZSA/IGZvbnRfbWV0cmljcy5sb3dTY2FsZSA6IGZvbnRfbWV0cmljcy5jYXBTY2FsZTtcclxuXHJcbiAgICAgICAgLy8gTGF5aW5nIG91dCB0aGUgZ2x5cGggcmVjdGFuZ2xlXHJcbiAgICAgICAgdmFyIGcgICAgICA9IGZvbnRfY2hhci5yZWN0O1xyXG4gICAgICAgIHZhciBib3R0b20gPSBiYXNlbGluZSAtIHNjYWxlICogKCBmb250LmRlc2NlbnQgKyBmb250Lml5ICk7XHJcbiAgICAgICAgdmFyIHRvcCAgICA9IGJvdHRvbSAgICsgc2NhbGUgKiAoIGZvbnQucm93X2hlaWdodCApO1xyXG4gICAgICAgIHZhciBsZWZ0ICAgPSBwb3NbMF0gICArIHNjYWxlICogKCBmb250X2NoYXIuYmVhcmluZ194ICsga2VybiAtIGZvbnQuaXggKTtcclxuICAgICAgICB2YXIgcmlnaHQgID0gbGVmdCAgICAgKyBzY2FsZSAqICggZ1syXSAtIGdbMF0gKTtcclxuICAgICAgICB2YXIgcCA9IFsgbGVmdCwgdG9wLCByaWdodCwgYm90dG9tIF07XHJcblxyXG4gICAgICAgIC8vIEFkdmFuY2luZyBwZW4gcG9zaXRpb25cclxuICAgICAgICB2YXIgbmV3X3Bvc194ID0gcG9zWzBdICsgc2NhbGUgKiAoIGZvbnRfY2hhci5hZHZhbmNlX3ggKTtcclxuXHJcbiAgICAgICAgLy8gU2lnbmVkIGRpc3RhbmNlIGZpZWxkIHNpemUgaW4gc2NyZWVuIHBpeGVsc1xyXG4gICAgICAgIHZhciBzZGZfc2l6ZSAgPSAyLjAgKiBmb250Lml5ICogc2NhbGU7XHJcblxyXG4gICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtcclxuICAgICAgICAgICAgcFswXSwgcFszXSwgLy8gbGVmdCBib3R0b20sXHJcbiAgICAgICAgICAgIHBbMl0sIHBbM10sIC8vIHJpZ2h0IGJvdHRvbSxcclxuICAgICAgICAgICAgcFsyXSwgcFsxXSwgLy8gcmlnaHQgdG9wXHJcbiAgICAgICAgICAgIHBbMF0sIHBbMV0sIC8vIGxlZnQgdG9wXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgY29uc3QgdXZzID0gW1xyXG4gICAgICAgICAgICBnWzBdLCBnWzFdLCAvLyBsZWZ0IHRvcFxyXG4gICAgICAgICAgICBnWzJdLCBnWzFdLCAvLyByaWdodCB0b3BcclxuICAgICAgICAgICAgZ1syXSwgZ1szXSwgLy8gcmlnaHQgYm90dG9tLFxyXG4gICAgICAgICAgICBnWzBdLCBnWzNdLCAvLyBsZWZ0IGJvdHRvbSxcclxuICAgICAgICBdO1xyXG5cclxuICAgICAgICBjb25zdCBzZGZTaXplcyA9IFtcclxuICAgICAgICAgICAgc2RmX3NpemUsXHJcbiAgICAgICAgICAgIHNkZl9zaXplLFxyXG4gICAgICAgICAgICBzZGZfc2l6ZSxcclxuICAgICAgICAgICAgc2RmX3NpemUsXHJcbiAgICAgICAgXTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgcG9zaXRpb25zLFxyXG4gICAgICAgICAgICB1dnMsXHJcbiAgICAgICAgICAgIHNkZlNpemVzLFxyXG4gICAgICAgICAgICBwb3M6IFsgbmV3X3Bvc194LCBwb3NbMV0gXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vcmV0dXJuIHsgdmVydGljZXMgOiB2ZXJ0aWNlcywgcG9zIDogWyBuZXdfcG9zX3gsIHBvc1sxXSBdIH07XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbmV3LmpzIiwiXHJcbmNsYXNzIFRleHRMYXlvdXQge1xyXG5cclxuICB0ZXh0ID0gXCJcIjtcclxuICBmb250ID0gbnVsbDtcclxuICBtZXRyaWNzID0gbnVsbDtcclxuICBmb250U2l6ZSA9IDIwO1xyXG4gIGFsaWduID0gXCJsZWZ0XCI7XHJcbiAgc3RhcnRYID0gMDtcclxuICBzdGFydFkgPSAwO1xyXG4gIHdyYXBwZXJXaWR0aCA9IDEwMDtcclxuICB3cmFwV29yZHMgPSBmYWxzZTtcclxuICB3b3Jkc01ldHJpY3MgPSBbXTtcclxuICBsZXR0ZXJzQ291bnQgPSAwO1xyXG4gIGhlaWdodCA9IDA7XHJcbiAgbGluZXNDb3VudCA9IDA7XHJcbiAgbGluZUhlaWdodCA9IDA7XHJcbiAgZ2x5cGhzID0gW107XHJcbiAgb3duZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3Iob3duZXIsIGNvbmZpZykge1xyXG5cclxuICAgIHRoaXMub3duZXIgPSBvd25lcjtcclxuICAgIHRoaXMudGV4dCA9IG93bmVyLnRleHQ7XHJcbiAgICB0aGlzLmZvbnQgPSBvd25lci5mb250O1xyXG4gICAgdGhpcy5mb250U2l6ZSA9IGNvbmZpZy5mb250U2l6ZTtcclxuICAgIHRoaXMud3JhcFdvcmRzID0gY29uZmlnLndyYXBXb3JkcztcclxuICAgIHRoaXMud3JhcHBlcldpZHRoID0gY29uZmlnLndyYXBwZXJXaWR0aDtcclxuICAgIHRoaXMubGluZUhlaWdodCA9IGNvbmZpZy5saW5lSGVpZ2h0O1xyXG4gICAgdGhpcy5hbGlnbiA9IGNvbmZpZy5hbGlnbjtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy50ZXh0ID0gdGhpcy5vd25lci50ZXh0O1xyXG4gICAgdGhpcy5mb250ID0gdGhpcy5vd25lci5mb250O1xyXG5cclxuICAgIHRoaXMubGV0dGVyc0NvdW50ID0gdGhpcy50ZXh0LnNwbGl0KFwiXCIpLmxlbmd0aDtcclxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMuZm9udE1ldHJpY3ModGhpcy5mb250LCAwLjApO1xyXG4gICAgdGhpcy5zdGFydFkgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcclxuICAgIHRoaXMuY2FsY3VsYXRlV29yZHNQb3NpdGlvbnMoKTtcclxuXHJcbiAgICB0aGlzLmdseXBocyA9IFtdO1xyXG5cclxuICAgIHRoaXMud29yZHNNZXRyaWNzLmZvckVhY2ggKHdvcmQgPT4ge1xyXG4gICAgICB0aGlzLmdldEdseXBocyh3b3JkLndvcmQsIFt3b3JkLngsIHdvcmQueV0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmb250TWV0cmljcyhmb250U2l6ZSwgbW9yZUxpbmVHYXAgPSAwLjIpIHtcclxuXHJcbiAgICBjb25zdCB7Y2FwX2hlaWdodCwgeF9oZWlnaHQsIGFzY2VudDogZm9udEFzY2VudCAsIGRlc2NlbnQsIGxpbmVfZ2FwfSA9IHRoaXMuZm9udDtcclxuXHJcbiAgICBjb25zdCBjYXBTY2FsZSA9IHRoaXMuZm9udFNpemUgLyBjYXBfaGVpZ2h0O1xyXG4gICAgY29uc3QgbG93U2NhbGUgPSBNYXRoLnJvdW5kKCB4X2hlaWdodCAqIGNhcFNjYWxlICkgLyB4X2hlaWdodDtcclxuICAgIGNvbnN0IGFzY2VudCA9IE1hdGgucm91bmQoIGZvbnRBc2NlbnQgKiBjYXBTY2FsZSApO1xyXG4gICAgbGV0IGxpbmVIZWlnaHQgPSBNYXRoLnJvdW5kKCBjYXBTY2FsZSAqICggZm9udEFzY2VudCArIGRlc2NlbnQgKyBsaW5lX2dhcCApICsgbW9yZUxpbmVHYXAgKTtcclxuXHJcbiAgICBpZiAodGhpcy5saW5lSGVpZ2h0ID4gMClcclxuICAgICAgbGluZUhlaWdodCA9IHRoaXMubGluZUhlaWdodDtcclxuICAgIGVsc2VcclxuICAgICAgdGhpcy5saW5lSGVpZ2h0ID0gbGluZUhlaWdodDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjYXBTY2FsZSAgIDogY2FwU2NhbGUsXHJcbiAgICAgIGxvd1NjYWxlICAgOiBsb3dTY2FsZSxcclxuICAgICAgYXNjZW50ICAgICAgOiBhc2NlbnQsXHJcbiAgICAgIGxpbmVIZWlnaHQgOiBsaW5lSGVpZ2h0XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY2hhclJlY3QoIHBvcywgZm9udF9jaGFyLCBrZXJuID0gMC4wICkge1xyXG5cclxuICAgIC8vIExvdyBjYXNlIGNoYXJhY3RlcnMgaGF2ZSBmaXJzdCBiaXQgc2V0IGluICdmbGFncydcclxuICAgIHZhciBsb3djYXNlID0gKCBmb250X2NoYXIuZmxhZ3MgJiAxICkgPT09IDE7XHJcblxyXG4gICAgLy8gUGVuIHBvc2l0aW9uIGlzIGF0IHRoZSB0b3Agb2YgdGhlIGxpbmUsIFkgZ29lcyB1cFxyXG4gICAgdmFyIGJhc2VsaW5lID0gcG9zWzFdIC0gdGhpcy5tZXRyaWNzLmFzY2VudDtcclxuXHJcbiAgICAvLyBMb3cgY2FzZSBjaGFycyB1c2UgdGhlaXIgb3duIHNjYWxlXHJcbiAgICB2YXIgc2NhbGUgPSBsb3djYXNlID8gdGhpcy5tZXRyaWNzLmxvd1NjYWxlIDogdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xyXG5cclxuICAgIC8vIExheWluZyBvdXQgdGhlIGdseXBoIHJlY3RhbmdsZVxyXG4gICAgdmFyIGcgICAgICA9IGZvbnRfY2hhci5yZWN0O1xyXG4gICAgdmFyIGJvdHRvbSA9IGJhc2VsaW5lIC0gc2NhbGUgKiAoIHRoaXMuZm9udC5kZXNjZW50ICsgdGhpcy5mb250Lml5ICk7XHJcbiAgICB2YXIgdG9wICAgID0gYm90dG9tICAgKyBzY2FsZSAqICggdGhpcy5mb250LnJvd19oZWlnaHQgKTtcclxuICAgIHZhciBsZWZ0ICAgPSBwb3NbMF0gICArIHNjYWxlICogKCBmb250X2NoYXIuYmVhcmluZ194ICsga2VybiAtIHRoaXMuZm9udC5peCApO1xyXG4gICAgdmFyIHJpZ2h0ICA9IGxlZnQgICAgICsgc2NhbGUgKiAoIGdbMl0gLSBnWzBdICk7XHJcbiAgICB2YXIgcCA9IFsgbGVmdCwgdG9wLCByaWdodCwgYm90dG9tIF07XHJcblxyXG4gICAgLy8gQWR2YW5jaW5nIHBlbiBwb3NpdGlvblxyXG4gICAgdmFyIG5ld19wb3NfeCA9IHBvc1swXSArIHNjYWxlICogKCBmb250X2NoYXIuYWR2YW5jZV94ICk7XHJcblxyXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xyXG4gICAgICBwWzBdLCBwWzNdLCAvLyBsZWZ0IGJvdHRvbSxcclxuICAgICAgcFsyXSwgcFszXSwgLy8gcmlnaHQgYm90dG9tLFxyXG4gICAgICBwWzJdLCBwWzFdLCAvLyByaWdodCB0b3BcclxuICAgICAgcFswXSwgcFsxXSwgLy8gbGVmdCB0b3BcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcG9zaXRpb25zLFxyXG4gICAgICBwb3M6IFsgbmV3X3Bvc194LCBwb3NbMV0gXSxcclxuICAgICAgbWV0cmljczoge3g6IHBvc1swXSwgeTogcG9zWzFdLCB3aWR0aDogc2NhbGUgKiBmb250X2NoYXIuYWR2YW5jZV94IH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXRTdHJpbmdTaXplKHN0cmluZykge1xyXG5cclxuICAgIGxldCB3aWR0aCA9IDA7XHJcbiAgICBsZXQgaGVpZ2h0ID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XHJcblxyXG4gICAgY29uc3QgY2hhcnMgPSBbLi4uc3RyaW5nXTtcclxuXHJcbiAgICAvLyBJdGVyYXRlIHRob3VnaHQgdGhlIGNoYXJzLCBjYWxjdWxhdGUgcG9zaXRpb25cclxuICAgIGNoYXJzLmZvckVhY2goY2hhciA9PiB7XHJcbiAgICAgIGxldCBmb250X2NoYXIgPSB0aGlzLmZvbnQuY2hhcnNbIGNoYXIgXTtcclxuXHJcbiAgICAgIC8qaWYgKGNoYXIgPT09IFwiIFwiKSB7XHJcbiAgICAgICAgd2lkdGggKz0gdGhpcy5mb250LnNwYWNlX2FkdmFuY2UgKiB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9Ki9cclxuXHJcbiAgICAgIC8vIEdldCBjaGFyIG1ldHJpY3NcclxuICAgICAgbGV0IGNoYXJSZWN0ID0gdGhpcy5jaGFyUmVjdChbd2lkdGgsMF0sIGZvbnRfY2hhciwgMC4yKTtcclxuICAgICAgd2lkdGggPSBjaGFyUmVjdC5wb3NbMF07XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHt3aWR0aCwgaGVpZ2h0fTtcclxuXHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVXb3Jkc1Bvc2l0aW9ucygpIHtcclxuXHJcbiAgICBjb25zdCB3b3JkcyA9IHRoaXMudGV4dC5zcGxpdChcIiBcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgd29yZHNbaV0gPSB3b3Jkc1tpXSArIFwiIFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMud29yZHNNZXRyaWNzID0gW107XHJcblxyXG4gICAgLy8gSW5pdGlhbCBwb3NpdGlvblxyXG4gICAgbGV0IHggPSB0aGlzLnN0YXJ0WDtcclxuICAgIGxldCB5ID0gdGhpcy5zdGFydFk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHdvcmRzIHBvc2l0aW9ucyBvbiBsaW5lc1xyXG4gICAgd29yZHMuZm9yRWFjaCh3b3JkID0+IHtcclxuICAgICAgY29uc3Qgd29yZFNpemUgPSB0aGlzLmdldFN0cmluZ1NpemUod29yZCk7XHJcbiAgICAgIGlmICh4ICsgd29yZFNpemUud2lkdGggPiB0aGlzLnN0YXJ0WCArIHRoaXMud3JhcHBlcldpZHRoICYmIHRoaXMud3JhcFdvcmRzKSB7XHJcbiAgICAgICAgeCA9IHRoaXMuc3RhcnRYO1xyXG4gICAgICAgIHkgKz0gd29yZFNpemUuaGVpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLndvcmRzTWV0cmljcy5wdXNoKHsuLi53b3JkU2l6ZSwgeCwgeSwgd29yZH0pO1xyXG5cclxuICAgICAgLy94ICs9IHdvcmRTaXplLndpZHRoICsgdGhpcy5mb250LnNwYWNlX2FkdmFuY2UgKiB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XHJcbiAgICAgIHggKz0gd29yZFNpemUud2lkdGg7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgbGluZXMgY291bnRcclxuICAgIHRoaXMubGluZXNDb3VudCA9ICh5IC0gdGhpcy5zdGFydFkpIC8gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyAxO1xyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmxpbmVzQ291bnQgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcclxuXHJcbiAgICAvLyBDaGFuZ2UgYWxpZ24gVE9ETyBvcHRpbWlzZVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpbmVzQ291bnQ7ICsraSkge1xyXG4gICAgICBjb25zdCB3b3Jkc09uTGluZSA9IHRoaXMud29yZHNNZXRyaWNzLmZpbHRlcih3b3JkID0+IHdvcmQueSA9PT0gdGhpcy5zdGFydFkgKyAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSlcclxuXHJcbiAgICAgIGNvbnN0IGxhc3RXb3JkID0gd29yZHNPbkxpbmVbd29yZHNPbkxpbmUubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICBpZiAobGFzdFdvcmQpIHtcclxuICAgICAgICBjb25zdCBmcmVlU3BhY2UgPSAodGhpcy5zdGFydFggKyB0aGlzLndyYXBwZXJXaWR0aCkgLSAobGFzdFdvcmQueCArIGxhc3RXb3JkLndpZHRoKTtcclxuXHJcbiAgICAgICAgbGV0IGxlZnRPZmZzZXQgPSAwO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuYWxpZ24pIHtcclxuICAgICAgICAgIGNhc2UgXCJjZW50ZXJcIjpcclxuICAgICAgICAgICAgbGVmdE9mZnNldCA9IGZyZWVTcGFjZSAvIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICAgIGxlZnRPZmZzZXQgPSBmcmVlU3BhY2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndvcmRzTWV0cmljcy5mb3JFYWNoKHdvcmQgPT4ge1xyXG4gICAgICAgICAgaWYgKHdvcmQueSA9PT0gdGhpcy5zdGFydFkgKyAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSkge1xyXG4gICAgICAgICAgICB3b3JkLnggKz0gbGVmdE9mZnNldDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRHbHlwaHMoIHN0cmluZywgcG9zKSB7XHJcbiAgICBsZXQgcHJldl9jaGFyID0gXCIgXCI7ICAvLyBVc2VkIHRvIGNhbGN1bGF0ZSBrZXJuaW5nXHJcbiAgICBsZXQgY3BvcyAgICAgID0gcG9zOyAgLy8gQ3VycmVudCBwZW4gcG9zaXRpb25cclxuICAgIGxldCB4X21heCAgICAgPSAwLjA7ICAvLyBNYXggd2lkdGggLSB1c2VkIGZvciBib3VuZGluZyBib3hcclxuICAgIGxldCBzY2FsZSAgICAgPSB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XHJcblxyXG4gICAgbGV0IHN0cl9wb3MgPSAwO1xyXG5cclxuICAgIGZvcig7Oykge1xyXG4gICAgICBpZiAoIHN0cl9wb3MgPT09IHN0cmluZy5sZW5ndGggKSBicmVhaztcclxuXHJcbiAgICAgIHZhciBzY2hhciA9IHN0cmluZ1sgc3RyX3BvcyBdO1xyXG4gICAgICBzdHJfcG9zKys7XHJcblxyXG4gICAgICBpZiAoIHNjaGFyID09PSBcIlxcblwiICkge1xyXG4gICAgICAgIGlmICggY3Bvc1swXSA+IHhfbWF4ICkgeF9tYXggPSBjcG9zWzBdOyAvLyBFeHBhbmRpbmcgdGhlIGJvdW5kaW5nIHJlY3RcclxuICAgICAgICBjcG9zWzBdICA9IHBvc1swXTtcclxuICAgICAgICBjcG9zWzFdIC09IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xyXG4gICAgICAgIHByZXZfY2hhciA9IFwiIFwiO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIHNjaGFyID09PSBcIiBcIiApIHtcclxuICAgICAgICAvL3NjaGFyID0gXCJfXCJcclxuICAgICAgICAvL2Nwb3NbMF0gKz0gdGhpcy5mb250LnNwYWNlX2FkdmFuY2UgKiBzY2FsZTtcclxuICAgICAgICBwcmV2X2NoYXIgPSBcIiBcIjtcclxuICAgICAgICAvL2NvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgZm9udF9jaGFyID0gdGhpcy5mb250LmNoYXJzWyBzY2hhciBdO1xyXG4gICAgICBpZiAoICFmb250X2NoYXIgKSB7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1YnN0aXR1dGluZyB1bmF2YWlsYWJsZSBjaGFyYWN0ZXJzIHdpdGggJz8nXHJcbiAgICAgICAgc2NoYXIgPSBcIj9cIjtcclxuICAgICAgICBmb250X2NoYXIgPSB0aGlzLmZvbnQuY2hhcnNbIFwiP1wiIF07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBrZXJuID0gdGhpcy5mb250Lmtlcm5bIHByZXZfY2hhciArIHNjaGFyIF07XHJcbiAgICAgIGlmICggIWtlcm4gKSBrZXJuID0gMC4wO1xyXG5cclxuICAgICAgLy8gY2FsY3VsYXRpbmcgdGhlIGdseXBoIHJlY3RhbmdsZSBhbmQgY29weWluZyBpdCB0byB0aGUgdmVydGV4IGFycmF5XHJcbiAgICAgIHZhciByZWN0ID0gdGhpcy5jaGFyUmVjdCggY3BvcywgZm9udF9jaGFyLCBrZXJuICk7XHJcblxyXG4gICAgICBwcmV2X2NoYXIgPSBzY2hhcjtcclxuICAgICAgY3BvcyA9IHJlY3QucG9zO1xyXG5cclxuICAgICAgdGhpcy5nbHlwaHMucHVzaCh7XHJcbiAgICAgICAgbGV0dGVyOiBzY2hhcixcclxuICAgICAgICB2ZXJ0aWNlczogcmVjdC5wb3NpdGlvbnMsXHJcbiAgICAgICAgcG9zaXRpb246IHJlY3QucG9zLFxyXG4gICAgICAgIG1ldHJpY3M6IHJlY3QubWV0cmljc1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0TGF5b3V0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGF5b3V0LmpzIiwiY29uc3QgY3JlYXRlSW5kaWNlcyA9IHJlcXVpcmUoXCJxdWFkLWluZGljZXNcIilcclxuY29uc3QgdmVydGV4U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy9zZWxlY3QvdmVydC5nbHNsXCIpO1xyXG5jb25zdCBmcmFnbWVudFNoYWRlciA9IHJlcXVpcmUoXCIuL3NoYWRlcnMvc2VsZWN0L2ZyYWcuZ2xzbFwiKTtcclxuXHJcbmNsYXNzIFNlbGVjdCB7XHJcblxyXG4gIHJhbmdlID0gWzAsMF07XHJcbiAgbWV0cmljcyA9IG51bGw7XHJcbiAgbGF5b3V0ID0gbnVsbDtcclxuICBkaXJ0eSA9IGZhbHNlO1xyXG4gIGluZGV4QnVmZmVyID0gZmFsc2U7XHJcbiAgb3duZXIgPSBudWxsO1xyXG4gIF9lbmFibGVkID0gZmFsc2U7XHJcblxyXG4gIHNldCBlbmFibGVkKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9lbmFibGVkID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgfVxyXG5cclxuICBnZXQgZW5hYmxlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9lbmFibGVkXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihvd25lcikge1xyXG4gICAgdGhpcy5vd25lciA9IG93bmVyLmNvbnRhaW5lcjtcclxuICAgIHRoaXMubWV0cmljcyA9IG93bmVyLm1ldHJpY3M7XHJcbiAgICB0aGlzLmxheW91dCA9IG93bmVyLmxheW91dDtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUdlb21ldHJ5KCkge1xyXG5cclxuICAgIC8vIEFycmF5cyBmb3IgdmVydGljZXMsIHV2cyBhbmQgc2RmXHJcbiAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0ICogMik7XHJcblxyXG4gICAgdGhpcy5idWlsZFZlcnRpY2VzKCk7XHJcblxyXG4gICAgLy8gUHJlcGFyZSBpbmRpY2VzXHJcbiAgICB0aGlzLmluZGljZXMgPSBjcmVhdGVJbmRpY2VzKHtcclxuICAgICAgY2xvY2t3aXNlOiB0cnVlLFxyXG4gICAgICB0eXBlOiAndWludDE2JyxcclxuICAgICAgY291bnQ6IHRoaXMubGF5b3V0LmxpbmVzQ291bnRcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEZpbGwgdXAgdGhlIGdlb21ldHJ5XHJcbiAgICByZXR1cm4gbmV3IFBJWEkuR2VvbWV0cnkoKVxyXG4gICAgICAgIC5hZGRBdHRyaWJ1dGUoJ2FWZXJ0ZXhQb3NpdGlvbicsIC8vIHRoZSBhdHRyaWJ1dGUgbmFtZVxyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLCAvLyB4LCB5XHJcbiAgICAgICAgICAgIDIpIC8vIHRoZSBzaXplIG9mIHRoZSBhdHRyaWJ1dGVcclxuICAgICAgICAuYWRkSW5kZXgodGhpcy5pbmRpY2VzKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlTWVzaCh7Z2VvbWV0cnkgPSBuZXcgUElYSS5HZW9tZXRyeSgpLCB2ZXJ0ID0gXCJcIiwgZnJhZyA9IFwiXCJ9KSB7XHJcbiAgICAvLyBQYXNzIHVuaWZvcm1zIHRvIHRoZSBzaGFkZXJcclxuXHJcbiAgICBjb25zdCB1bmlmb3JtcyA9IHtcclxuICAgICAgYmdfY29sb3I6IFBJWEkudXRpbHMuaGV4MnJnYih0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LmJhY2tncm91bmRDb2xvci5yZXBsYWNlKFwiI1wiLCBcIjB4XCIpKSxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCF0aGlzLnNoYWRlcikge1xyXG4gICAgICB0aGlzLnNoYWRlciA9IFBJWEkuU2hhZGVyLmZyb20odmVydCwgZnJhZywgdW5pZm9ybXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hhZGVyLnVuaWZvcm1zLmVuYWJsZWQgPSB0aGlzLmVuYWJsZWQgPyAxLjAgOiAwLjBcclxuXHJcbiAgICByZXR1cm4gbmV3IFBJWEkuTWVzaChnZW9tZXRyeSwgdGhpcy5zaGFkZXIpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5vd25lci5hd2Vzb21lVGV4dC5tZXRyaWNzO1xyXG4gICAgdGhpcy5sYXlvdXQgPSB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LmxheW91dDtcclxuXHJcbiAgICBpZiAodGhpcy5tZXNoKVxyXG4gICAgICB0aGlzLm93bmVyLnJlbW92ZUNoaWxkKHRoaXMubWVzaCk7XHJcblxyXG4gICAgaWYgKHRoaXMucmFuZ2VbMV0gIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgZ2VvbWV0cnkgPSB0aGlzLmNyZWF0ZUdlb21ldHJ5KCk7XHJcbiAgICAgIHRoaXMubWVzaCA9IHRoaXMuY3JlYXRlTWVzaCh7XHJcbiAgICAgICAgZ2VvbWV0cnksXHJcbiAgICAgICAgdmVydDogdmVydGV4U2hhZGVyLFxyXG4gICAgICAgIGZyYWc6IGZyYWdtZW50U2hhZGVyXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5tZXNoLmJsZW5kTW9kZSA9IFBJWEkuQkxFTkRfTU9ERVMuTk9STUFMX05QTTtcclxuXHJcbiAgICAgIHRoaXMub3duZXIuYWRkQ2hpbGQodGhpcy5tZXNoKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBzZXRSYW5nZShzdGFydCA9IG51bGwsIGVuZCA9IG51bGwpIHtcclxuXHJcbiAgICBjb25zdCB7Z2x5cGhzfSA9IHRoaXMub3duZXIuYXdlc29tZVRleHQubGF5b3V0O1xyXG5cclxuICAgIGlmIChzdGFydCA9PT0gbnVsbCkgc3RhcnQgPSB0aGlzLnJhbmdlWzBdO1xyXG4gICAgaWYgKGVuZCA9PT0gbnVsbCkgZW5kID0gdGhpcy5yYW5nZVsxXTtcclxuXHJcbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDA7XHJcbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMDtcclxuXHJcbiAgICBpZiAoc3RhcnQgPiBnbHlwaHMubGVuZ3RoIC0xKXN0YXJ0ID0gZ2x5cGhzLmxlbmd0aCAtIDE7XHJcbiAgICBpZiAoZW5kID4gZ2x5cGhzLmxlbmd0aCAtIDEpIGVuZCA9IGdseXBocy5sZW5ndGggLSAxO1xyXG5cclxuICAgIGlmIChlbmQgPT09IGZhbHNlKSBlbmQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMucmFuZ2UgPSBbc3RhcnQsIGVuZF07XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRWZXJ0aWNlcygpIHtcclxuXHJcbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LmxheW91dC5tZXRyaWNzO1xyXG4gICAgLy8gU2VsZWN0IHJhbmdlXHJcbiAgICBsZXQgc3RhcnQgPSB0aGlzLmxheW91dC5nbHlwaHNbTWF0aC5taW4uYXBwbHkobnVsbCx0aGlzLnJhbmdlKV07XHJcbiAgICBsZXQgZW5kID0gdGhpcy5sYXlvdXQuZ2x5cGhzW01hdGgubWF4LmFwcGx5KG51bGwsdGhpcy5yYW5nZSldO1xyXG5cclxuXHJcbiAgICAvLyBJdGVyYXRlIHRob3VnaHQgYWxsIGxpbmVzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGF5b3V0LmxpbmVzQ291bnQ7ICsraSkge1xyXG4gICAgICBsZXQgbGV0dGVyQ291bnQgPSAwOyAvLyBsZXR0ZXJzIHBhc3NlZFxyXG4gICAgICBsZXQgZmlyc3RMZXR0ZXIgPSBudWxsOyAvLyBmaXJzdCBsZXR0ZXIgb24gdGhpcyBsaW5lXHJcbiAgICAgIGxldCBsYXN0TGV0dGVyID0gbnVsbDsgLy8gbGFzdCBsZXR0ZXIgb24gdGhpcyBsaW5lXHJcblxyXG5cclxuICAgICAgaWYgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCArIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0IDwgc3RhcnQucG9zaXRpb25bMV0pIGNvbnRpbnVlO1xyXG4gICAgICBpZiAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgPiBlbmQucG9zaXRpb25bMV0pIGNvbnRpbnVlO1xyXG5cclxuICAgICAgLy8gVGFrZSBldmVyeSB3b3JkLCBpZiBpdCdzIGxhc3Qgb3IgZmlyc3Qgb24gbGluZSAtIGNoYW5nZSBib3VuZHMgbGV0dGVyc1xyXG4gICAgICB0aGlzLmxheW91dC53b3Jkc01ldHJpY3MubWFwKHdvcmQgPT4ge1xyXG5cclxuICAgICAgICBpZiAod29yZC55ID09PSB0aGlzLmxheW91dC5zdGFydFkgKyAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSkge1xyXG4gICAgICAgICAgaWYgKGZpcnN0TGV0dGVyID09PSBudWxsKSBmaXJzdExldHRlciA9IGxldHRlckNvdW50O1xyXG4gICAgICAgICAgbGFzdExldHRlciA9IGxldHRlckNvdW50ICsgd29yZC53b3JkLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXR0ZXJDb3VudCArPSB3b3JkLndvcmQubGVuZ3RoO1xyXG4gICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgLy8gQm91bmRzIGxldHRlcnMgZm9yIGN1cnJlbnQgbGluZVxyXG4gICAgICBsZXQgc3RhcnRMaW5lTGV0dGVyID0gdGhpcy5sYXlvdXQuZ2x5cGhzW2ZpcnN0TGV0dGVyXTtcclxuICAgICAgbGV0IGVuZExpbmVMZXR0ZXIgPSB0aGlzLmxheW91dC5nbHlwaHNbbGFzdExldHRlcl07XHJcblxyXG4gICAgICAvLyBJZiB0aGUgc3RhcnQgb3IgZW5kIHJhbmdlIGlzIG9uIHRoaXMgbGluZSwgY2hhbmdlIGJvdW5kcyBmb3IgdGhlbVxyXG4gICAgICBpZiAoc3RhcnQucG9zaXRpb25bMV0gPT09ICBzdGFydExpbmVMZXR0ZXIucG9zaXRpb25bMV0pIHN0YXJ0TGluZUxldHRlciA9IHN0YXJ0O1xyXG4gICAgICBpZiAoZW5kLnBvc2l0aW9uWzFdID09PSBlbmRMaW5lTGV0dGVyLnBvc2l0aW9uWzFdKSBlbmRMaW5lTGV0dGVyID0gZW5kO1xyXG5cclxuICAgICAgLy8gV2UgdXNlIG9mZnNldCB0byBhdm9pZCBzZWxlY3RzIG92ZXJsYXBwaW5nXHJcbiAgICAgIGNvbnN0IG9mZnNldCA9ICh0aGlzLm1ldHJpY3MubGluZUhlaWdodCAtIHRoaXMubWV0cmljcy5hc2NlbnQpIC8gMjtcclxuXHJcbiAgICAgIC8vIEFkZCBwb3NpdGlvbnMgdG8gYXJyYXlcclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpXSA9IHN0YXJ0TGluZUxldHRlci52ZXJ0aWNlc1swXTtcclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgMV0gPSBzdGFydExpbmVMZXR0ZXIudmVydGljZXNbMV0gKyBvZmZzZXQ7XHJcblxyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyAyXSA9IGVuZExpbmVMZXR0ZXIudmVydGljZXNbMl07XHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDNdID0gZW5kTGluZUxldHRlci52ZXJ0aWNlc1szXSAgICsgb2Zmc2V0O1xyXG5cclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgNF0gPSBlbmRMaW5lTGV0dGVyLnZlcnRpY2VzWzRdO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyA1XSA9IGVuZExpbmVMZXR0ZXIudmVydGljZXNbNV0gIC0gb2Zmc2V0O1xyXG5cclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgNl0gPSBzdGFydExpbmVMZXR0ZXIudmVydGljZXNbNl07XHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDddID0gc3RhcnRMaW5lTGV0dGVyLnZlcnRpY2VzWzddICAtIG9mZnNldDtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0Q2xvc2VzdEdseXBoKHgsIHkpIHtcclxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMub3duZXIuYXdlc29tZVRleHQubWV0cmljcztcclxuICAgIHRoaXMubGF5b3V0ID0gdGhpcy5vd25lci5hd2Vzb21lVGV4dC5sYXlvdXQ7XHJcblxyXG4gICAgY29uc3QgeyBnbHlwaHMgfSA9IHRoaXMub3duZXIuYXdlc29tZVRleHQubGF5b3V0O1xyXG5cclxuICAgIGNvbnN0IGxpbmVIZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcclxuICAgIGNvbnN0IHNlbGVjdGluZ0xpbmUgPSBNYXRoLmZsb29yKHkgLyB0aGlzLm1ldHJpY3MubGluZUhlaWdodCk7XHJcbiAgICBjb25zdCBzZWxlY3RpbmdMaW5lWSA9IHNlbGVjdGluZ0xpbmUgKiBsaW5lSGVpZ2h0O1xyXG4gICAgbGV0IGxhc3RHbHlwaE9uTGluZSA9IGdseXBoc1tnbHlwaHMubGVuZ3RoIC0gMV07XHJcbiAgICBsZXQgZmlyc3RHbHlwaE9uTGluZSA9IG51bGw7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnbHlwaHMubGVuZ3RoIDsgKytpKSB7XHJcblxyXG4gICAgICBsZXQgZ2x5cGggPSBnbHlwaHNbaV07XHJcblxyXG4gICAgICBpZiAoZ2x5cGgubWV0cmljcy55ID09PSBzZWxlY3RpbmdMaW5lWSArIGxpbmVIZWlnaHQpIHtcclxuICAgICAgICBsYXN0R2x5cGhPbkxpbmUgPSBnbHlwaDtcclxuICAgICAgICBpZiAoeCA8IGdseXBoLm1ldHJpY3MueCArIGdseXBoLm1ldHJpY3Mud2lkdGggLyAyKSB7XHJcbiAgICAgICAgICBpZiAoaSA9PT0gMCkgcmV0dXJuIC0xO1xyXG5cclxuICAgICAgICAgIHJldHVybiBnbHlwaHNbaSAtIDFdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsYXN0R2x5cGhPbkxpbmU7XHJcblxyXG4gIH1cclxuXHJcbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcclxuICAgIC8vIE9ubHkgbGVmdCBtb3VzZSBidXR0b25cclxuICAgIGlmIChldmVudC5kYXRhLmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBwb3NpdGlvbiA9IGV2ZW50LmRhdGEuZ2xvYmFsO1xyXG4gICAgcG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybVBvc2l0aW9uKHBvc2l0aW9uKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZXN0TGV0dGVyID0gdGhpcy5nZXRDbG9zZXN0R2x5cGgocG9zaXRpb24ueCAsIHBvc2l0aW9uLnkpO1xyXG5cclxuICAgIGxldCBpbmRleCA9IHRoaXMub3duZXIuYXdlc29tZVRleHQubGF5b3V0LmdseXBocy5pbmRleE9mKGNsb3Nlc3RMZXR0ZXIpO1xyXG5cclxuICAgIHRoaXMuc2V0UmFuZ2UoaW5kZXggKyAxLCBmYWxzZSApO1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcclxuICAgIGxldCBwb3NpdGlvbiA9IGV2ZW50LmRhdGEuZ2xvYmFsO1xyXG4gICAgcG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybVBvc2l0aW9uKHBvc2l0aW9uKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZXN0TGV0dGVyID0gdGhpcy5nZXRDbG9zZXN0R2x5cGgocG9zaXRpb24ueCAgLCBwb3NpdGlvbi55KTtcclxuICAgIGxldCBpbmRleCA9IHRoaXMub3duZXIuYXdlc29tZVRleHQubGF5b3V0LmdseXBocy5pbmRleE9mKGNsb3Nlc3RMZXR0ZXIpO1xyXG5cclxuICAgIHRoaXMuc2V0UmFuZ2UobnVsbCwgaW5kZXggKyAxKTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VVcChldmVudCkge1xyXG5cclxuICAgIC8vIE9ubHkgbGVmdCBtb3VzZSBidXR0b25cclxuICAgIGlmIChldmVudC5kYXRhLmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBwb3NpdGlvbiA9IGV2ZW50LmRhdGEuZ2xvYmFsO1xyXG4gICAgcG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybVBvc2l0aW9uKHBvc2l0aW9uKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZXN0TGV0dGVyID0gdGhpcy5nZXRDbG9zZXN0R2x5cGgocG9zaXRpb24ueCAsIHBvc2l0aW9uLnkpO1xyXG5cclxuXHJcbiAgICAvLyAtMSBtZWFucyB0aGF0IHdlIGF0IHRoZSBzdGFydCBvZiB0aGUgbGluZVxyXG4gICAgaWYgKGNsb3Nlc3RMZXR0ZXIgPT09IC0xKSB7XHJcbiAgICAgIHRoaXMub3duZXIuYXdlc29tZVRleHQuaW5wdXQuZ2x5cGhJbmRleCA9IGNsb3Nlc3RMZXR0ZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LmlucHV0LmdseXBoSW5kZXggPSB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LmxheW91dC5nbHlwaHMuaW5kZXhPZihjbG9zZXN0TGV0dGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybVBvc2l0aW9uKHBvc2l0aW9uKSB7XHJcbiAgICBjb25zdCBvd25lclBvc2l0aW9uID0gdGhpcy5vd25lci5nZXRHbG9iYWxQb3NpdGlvbigpO1xyXG4gICAgY29uc3QgdHJhbnNmb3JtID0gdGhpcy5vd25lci53b3JsZFRyYW5zZm9ybTtcclxuXHJcbiAgICBwb3NpdGlvbi54IC09IHRyYW5zZm9ybS50eDtcclxuICAgIHBvc2l0aW9uLnkgLT0gdHJhbnNmb3JtLnR5O1xyXG5cclxuICAgIHBvc2l0aW9uLnggPSBwb3NpdGlvbi54IC8gdHJhbnNmb3JtLmE7XHJcbiAgICBwb3NpdGlvbi55ID0gcG9zaXRpb24ueSAvIHRyYW5zZm9ybS5kO1xyXG5cclxuICAgIHJldHVybiBwb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIGNsZWFyU2VsZWN0ZWRSYW5nZSgpIHtcclxuXHJcbiAgICBjb25zdCByYW5nZSA9IHRoaXMucmFuZ2U7XHJcblxyXG4gICAgLy8gSWYgdXNlciBzZWxlY3RlZCBzb21lIHRleHQsIHJlbW92ZSBpdFxyXG4gICAgaWYgKHJhbmdlWzFdICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMub3duZXIuYXdlc29tZVRleHQuaW5wdXQuZ2x5cGhJbmRleCA9IE1hdGgubWluKHJhbmdlWzBdIC0gMSwgcmFuZ2VbMV0gLSAxKTtcclxuICAgICAgY29uc3QgcmVtb3ZlSW5kZXggPSBNYXRoLm1pbi5hcHBseShudWxsLCByYW5nZSk7XHJcbiAgICAgIGNvbnN0IHJlbW92ZUxlbmd0aCA9IE1hdGguYWJzKHJhbmdlWzBdIC0gcmFuZ2VbMV0pO1xyXG4gICAgICB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnNlbGVjdC5zZXRSYW5nZSgwLGZhbHNlKTtcclxuICAgICAgdGhpcy5vd25lci5hd2Vzb21lVGV4dC5yZW1vdmVTdHJpbmcocmVtb3ZlSW5kZXgsIHJlbW92ZUxlbmd0aCk7XHJcbiAgICAgIHRoaXMub3duZXIuYXdlc29tZVRleHQuaW5wdXQuc2hvdygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwYW5kKGRpcmVjdGlvbikge1xyXG4gICAgdGhpcy5yYW5nZVsxXSArPSBkaXJlY3Rpb247XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlbGVjdC5qcyIsInZhciBkdHlwZSA9IHJlcXVpcmUoJ2R0eXBlJylcbnZhciBhbkFycmF5ID0gcmVxdWlyZSgnYW4tYXJyYXknKVxudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJylcblxudmFyIENXID0gWzAsIDIsIDNdXG52YXIgQ0NXID0gWzIsIDEsIDNdXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlUXVhZEVsZW1lbnRzKGFycmF5LCBvcHQpIHtcbiAgICAvL2lmIHVzZXIgZGlkbid0IHNwZWNpZnkgYW4gb3V0cHV0IGFycmF5XG4gICAgaWYgKCFhcnJheSB8fCAhKGFuQXJyYXkoYXJyYXkpIHx8IGlzQnVmZmVyKGFycmF5KSkpIHtcbiAgICAgICAgb3B0ID0gYXJyYXkgfHwge31cbiAgICAgICAgYXJyYXkgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHQgPT09ICdudW1iZXInKSAvL2JhY2t3YXJkcy1jb21wYXRpYmxlXG4gICAgICAgIG9wdCA9IHsgY291bnQ6IG9wdCB9XG4gICAgZWxzZVxuICAgICAgICBvcHQgPSBvcHQgfHwge31cblxuICAgIHZhciB0eXBlID0gdHlwZW9mIG9wdC50eXBlID09PSAnc3RyaW5nJyA/IG9wdC50eXBlIDogJ3VpbnQxNidcbiAgICB2YXIgY291bnQgPSB0eXBlb2Ygb3B0LmNvdW50ID09PSAnbnVtYmVyJyA/IG9wdC5jb3VudCA6IDFcbiAgICB2YXIgc3RhcnQgPSAob3B0LnN0YXJ0IHx8IDApIFxuXG4gICAgdmFyIGRpciA9IG9wdC5jbG9ja3dpc2UgIT09IGZhbHNlID8gQ1cgOiBDQ1csXG4gICAgICAgIGEgPSBkaXJbMF0sIFxuICAgICAgICBiID0gZGlyWzFdLFxuICAgICAgICBjID0gZGlyWzJdXG5cbiAgICB2YXIgbnVtSW5kaWNlcyA9IGNvdW50ICogNlxuXG4gICAgdmFyIGluZGljZXMgPSBhcnJheSB8fCBuZXcgKGR0eXBlKHR5cGUpKShudW1JbmRpY2VzKVxuICAgIGZvciAodmFyIGkgPSAwLCBqID0gMDsgaSA8IG51bUluZGljZXM7IGkgKz0gNiwgaiArPSA0KSB7XG4gICAgICAgIHZhciB4ID0gaSArIHN0YXJ0XG4gICAgICAgIGluZGljZXNbeCArIDBdID0gaiArIDBcbiAgICAgICAgaW5kaWNlc1t4ICsgMV0gPSBqICsgMVxuICAgICAgICBpbmRpY2VzW3ggKyAyXSA9IGogKyAyXG4gICAgICAgIGluZGljZXNbeCArIDNdID0gaiArIGFcbiAgICAgICAgaW5kaWNlc1t4ICsgNF0gPSBqICsgYlxuICAgICAgICBpbmRpY2VzW3ggKyA1XSA9IGogKyBjXG4gICAgfVxuICAgIHJldHVybiBpbmRpY2VzXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGR0eXBlKSB7XG4gIHN3aXRjaCAoZHR5cGUpIHtcbiAgICBjYXNlICdpbnQ4JzpcbiAgICAgIHJldHVybiBJbnQ4QXJyYXlcbiAgICBjYXNlICdpbnQxNic6XG4gICAgICByZXR1cm4gSW50MTZBcnJheVxuICAgIGNhc2UgJ2ludDMyJzpcbiAgICAgIHJldHVybiBJbnQzMkFycmF5XG4gICAgY2FzZSAndWludDgnOlxuICAgICAgcmV0dXJuIFVpbnQ4QXJyYXlcbiAgICBjYXNlICd1aW50MTYnOlxuICAgICAgcmV0dXJuIFVpbnQxNkFycmF5XG4gICAgY2FzZSAndWludDMyJzpcbiAgICAgIHJldHVybiBVaW50MzJBcnJheVxuICAgIGNhc2UgJ2Zsb2F0MzInOlxuICAgICAgcmV0dXJuIEZsb2F0MzJBcnJheVxuICAgIGNhc2UgJ2Zsb2F0NjQnOlxuICAgICAgcmV0dXJuIEZsb2F0NjRBcnJheVxuICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIHJldHVybiBBcnJheVxuICAgIGNhc2UgJ3VpbnQ4X2NsYW1wZWQnOlxuICAgICAgcmV0dXJuIFVpbnQ4Q2xhbXBlZEFycmF5XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kdHlwZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuQXJyYXlcblxuZnVuY3Rpb24gYW5BcnJheShhcnIpIHtcbiAgcmV0dXJuIChcbiAgICAgICBhcnIuQllURVNfUEVSX0VMRU1FTlRcbiAgICAmJiBzdHIuY2FsbChhcnIuYnVmZmVyKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJ1xuICAgIHx8IEFycmF5LmlzQXJyYXkoYXJyKVxuICApXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYW4tYXJyYXkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtYnVmZmVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjtcXG5cXG51bmlmb3JtIG1hdDMgdHJhbnNsYXRpb25NYXRyaXg7XFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb25NYXRyaXg7XFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG5cXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KChwcm9qZWN0aW9uTWF0cml4ICogdHJhbnNsYXRpb25NYXRyaXggKiB2ZWMzKGFWZXJ0ZXhQb3NpdGlvbiAsIDEuMCkpLnh5LCAwLjAsIDEuMCk7XFxuXFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy9zZWxlY3QvdmVydC5nbHNsXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbnVuaWZvcm0gdmVjMyBiZ19jb2xvcjtcXG51bmlmb3JtIGZsb2F0IGVuYWJsZWQ7XFxudmFyeWluZyB2ZWMyICB0YzA7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICAvL2dsX0ZyYWdDb2xvciA9IHZlYzQoYmdfY29sb3IsMC40NSk7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMS4wLCAxLjAsIDEuMCwgMC4yICogZW5hYmxlZCk7XFxufVxcblxcblxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy9zZWxlY3QvZnJhZy5nbHNsXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG5cclxuY2xhc3MgSW5wdXQge1xyXG5cclxuICBfZW5hYmxlZCA9IGZhbHNlO1xyXG4gIG93bmVyID0gbnVsbDtcclxuXHJcbiAgX2dseXBoSW5kZXggPSAtMTtcclxuXHJcbiAgc2V0IGdseXBoSW5kZXgodmFsdWUpIHtcclxuXHJcbiAgICB0aGlzLl9nbHlwaEluZGV4ID0gdmFsdWU7XHJcblxyXG4gICAgaWYgKHRoaXMuX2dseXBoSW5kZXggPCAtMSlcclxuICAgICAgdGhpcy5fZ2x5cGhJbmRleCA9IC0xO1xyXG5cclxuICAgIGlmICh0aGlzLl9nbHlwaEluZGV4ID4gdGhpcy5vd25lci5hd2Vzb21lVGV4dC5sYXlvdXQuZ2x5cGhzLmxlbmd0aClcclxuICAgICAgdGhpcy5fZ2x5cGhJbmRleCA9IHRoaXMub3duZXIuYXdlc29tZVRleHQubGF5b3V0LmdseXBocy5sZW5ndGg7XHJcblxyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBnbHlwaEluZGV4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dseXBoSW5kZXg7XHJcbiAgfVxyXG5cclxuICBzZXQgZW5hYmxlZCh2YWx1ZSkge1xyXG4gICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcclxuICAgICAgdGhpcy5lbmFibGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGVuYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3Iob3duZXIpIHtcclxuICAgIHRoaXMub3duZXIgPSBvd25lci5jb250YWluZXI7XHJcbiAgICB0aGlzLm1ldHJpY3MgPSBvd25lci5tZXRyaWNzO1xyXG4gICAgdGhpcy5sYXlvdXQgPSBvd25lci5sYXlvdXQ7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlRmllbGQoKTtcclxuICAgIHRoaXMuZGlzYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlKCkge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmlucHV0RWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlKCkge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLmlucHV0RWxlbWVudCkpXHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5pbnB1dEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgfVxyXG5cclxuICBzaG93KCkge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICB9XHJcblxyXG4gIGNyZWF0ZUZpZWxkKCkge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcblxyXG4gICAgY29uc3QgdHJhbnNmb3JtID0gT2JqZWN0LnZhbHVlcyh0aGlzLm93bmVyLnRyYW5zZm9ybS53b3JsZFRyYW5zZm9ybSkuc2xpY2UoMCwgNik7XHJcblxyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgIC8vdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwwLDAsMC4zKSc7XHJcblxyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuY29sb3IgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5jb250YWluID0gJ3N0cmljdCc7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS56SW5kZXggPSAyO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuY29sb3IgPSB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnN0eWxlLmZpbGw7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW49IFwibGVmdCB0b3BcIjtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBtYXRyaXgoJHt0cmFuc2Zvcm0uam9pbihcIiwgXCIpfSlgO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUucGFkZGluZyA9IFwiMFwiO1xyXG5cclxuICAgIHRoaXMuYWRkRXZlbnQoXCJibHVyXCIsIChldmVudCkgPT4gdGhpcy5pbnB1dEVsZW1lbnQuZm9jdXMoKSk7XHJcbiAgICB0aGlzLmFkZEV2ZW50KFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB0aGlzLm9uSW5wdXQoZXZlbnQpKTtcclxuICAgIHRoaXMuYWRkRXZlbnQoXCJrZXlkb3duXCIsIChldmVudCkgPT4gdGhpcy5vbktleWRvd24oZXZlbnQpKVxyXG4gICAgdGhpcy5hZGRFdmVudChcInBhc3RlXCIsIChldmVudCkgPT4gdGhpcy5wYXN0ZUZyb21DbGlwYm9hcmQoZXZlbnQpKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG5cclxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMub3duZXIuYXdlc29tZVRleHQubWV0cmljcztcclxuICAgIHRoaXMubGF5b3V0ID0gdGhpcy5vd25lci5hd2Vzb21lVGV4dC5sYXlvdXQ7XHJcblxyXG4gICAgY29uc3Qge2dseXBoc30gPSB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LmxheW91dDtcclxuXHJcbiAgICBpZiAodGhpcy5nbHlwaEluZGV4ID49IGdseXBocy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5nbHlwaEluZGV4ID0gZ2x5cGhzLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVmYXVsdCBjYXJldCBwbGFjZSAtIHN0YXJ0IG9mIHRoZSBpbnB1dCBmaWVsZCBUT0RPIGltcGxlbWVudCBhbGlnblxyXG4gICAgbGV0IGdseXBoTWV0cmljcyA9IHtcclxuICAgICAgeDogdGhpcy5vd25lci5wb3NpdGlvbi54LFxyXG4gICAgICB5OiB0aGlzLm93bmVyLnBvc2l0aW9uLnlcclxuICAgIH07XHJcblxyXG4gICAgLy8gaWYgc3RyaW5nIGlzIGVtcHR5LCBwdXQgY2FyZXQgYXQgdGhlIGJlZ2lubmluZ1xyXG4gICAgaWYgKHRoaXMub3duZXIuYXdlc29tZVRleHQubGF5b3V0LmdseXBocy5sZW5ndGggPT09IC0xKSB7XHJcblxyXG4gICAgICAvLyBpZiB3ZSBvbiB0aGUgbGFzdCBnbHlwaCwgcGxhY2UgY2FyZXQgYWZ0ZXIgaXRcclxuICAgIH1lbHNlIGlmICh0aGlzLmdseXBoSW5kZXggPT09IGdseXBocy5sZW5ndGgpIHtcclxuXHJcbiAgICAgIGNvbnN0IGxhc3RHbHlwaCA9IGdseXBoc1tnbHlwaHMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICBnbHlwaE1ldHJpY3MueCArPSBsYXN0R2x5cGgubWV0cmljcy54ICsgbGFzdEdseXBoLm1ldHJpY3Mud2lkdGg7XHJcbiAgICAgIGdseXBoTWV0cmljcy55ICs9IGxhc3RHbHlwaC5tZXRyaWNzLnk7XHJcblxyXG4gICAgICAvLyBpZiBjYXJldCBpbiB0aGUgbWlkZGxlIG9mIHRoZSB0ZXh0XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ2x5cGhJbmRleCAhPT0gLTEpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRHbHlwaCA9IGdseXBoc1t0aGlzLmdseXBoSW5kZXhdO1xyXG5cclxuICAgICAgZ2x5cGhNZXRyaWNzLnggKz0gc2VsZWN0ZWRHbHlwaC5tZXRyaWNzLnggKyBzZWxlY3RlZEdseXBoLm1ldHJpY3Mud2lkdGg7XHJcbiAgICAgIGdseXBoTWV0cmljcy55ICs9IHNlbGVjdGVkR2x5cGgubWV0cmljcy55O1xyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIGdseXBoTWV0cmljcy55ICs9IHRoaXMub3duZXIuYXdlc29tZVRleHQuc3R5bGUubGluZUhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBPYmplY3QudmFsdWVzKHRoaXMub3duZXIudHJhbnNmb3JtLndvcmxkVHJhbnNmb3JtKS5zbGljZSgwLCA2KTtcclxuXHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgbWF0cml4KCR7dHJhbnNmb3JtLmpvaW4oXCIsIFwiKX0pYDtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodCArIFwicHhcIjtcclxuXHJcbiAgICB0aGlzLnNldFBvc2l0aW9uKGdseXBoTWV0cmljcy54ICwgZ2x5cGhNZXRyaWNzLnkpO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIG9uSW5wdXQoZXZlbnQpIHtcclxuXHJcbiAgICBjb25zdCB7IHJhbmdlIH0gPSB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnNlbGVjdDtcclxuXHJcbiAgICB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnNlbGVjdC5jbGVhclNlbGVjdGVkUmFuZ2UoKTtcclxuXHJcbiAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgIGlmIChldmVudC5kYXRhID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgLy8gQ29udGVudCB3ZSBhcmUgYWJvdXQgdG8gYWRkXHJcbiAgICBsZXQgdGV4dFRvQWRkID0gZXZlbnQuZGF0YTtcclxuXHJcbiAgICBpZiAodGhpcy5vd25lci5hd2Vzb21lVGV4dC5jb25maWcudXBwZXJjYXNlKSB7XHJcbiAgICAgIHRleHRUb0FkZCA9IHRleHRUb0FkZC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LmNvbmZpZy5sb3dlcmNhc2UpIHtcclxuICAgICAgdGV4dFRvQWRkID0gdGV4dFRvQWRkLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgdGV4dCBpcyBlbXB0eSBub3dcclxuICAgIGlmICh0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LmxheW91dC5nbHlwaHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMub3duZXIuYXdlc29tZVRleHQudGV4dCA9IHRleHRUb0FkZDtcclxuICAgICAgdGhpcy5nbHlwaEluZGV4ID0gMTtcclxuXHJcbiAgICAvLyBJZiBjYXJldCBpcyBhdCB0aGUgZW5kIG9mIHRoZSB0ZXh0XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ2x5cGhJbmRleCA9PT0gdGhpcy5vd25lci5hd2Vzb21lVGV4dC5sYXlvdXQuZ2x5cGhzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgdGhpcy5vd25lci5hd2Vzb21lVGV4dC50ZXh0ICs9IHRleHRUb0FkZDtcclxuICAgICAgdGhpcy5nbHlwaEluZGV4Kys7XHJcblxyXG4gICAgLy8gSWYgd2UgaW4gdGhlIG1pZGRsZSBvZiB0aGUgbGluZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vd25lci5hd2Vzb21lVGV4dC5pbnNlcnRTdHJpbmcoKyt0aGlzLmdseXBoSW5kZXgsIHRleHRUb0FkZCk7XHJcbiAgICAgIC8vdGhpcy5nbHlwaEluZGV4Kys7XHJcbiAgICB9XHJcbiAgICB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnNlbGVjdC5zZXRSYW5nZSgwLCBmYWxzZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgb25LZXlkb3duKGV2ZW50KSB7XHJcblxyXG4gICAgY29uc3Qge3JhbmdlfSA9IHRoaXMub3duZXIuYXdlc29tZVRleHQuc2VsZWN0O1xyXG5cclxuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XHJcbiAgICAgICAgdGhpcy5tb3ZlVXAoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcblxyXG4gICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XHJcbiAgICAgICAgdGhpcy5tb3ZlRG93bigpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxyXG5cclxuICAgICAgICAvLyBNb3ZlIGJ5IHdvcmRcclxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xyXG5cclxuICAgICAgICAgIHRoaXMubW92ZUJ5V29yZExlZnQoKVxyXG5cclxuICAgICAgICAgIC8vIFNlbGVjdFxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcclxuXHJcbiAgICAgICAgICB0aGlzLm1vdmVXaXRoU2VsZWN0TGVmdCgpXHJcblxyXG4gICAgICAgICAgLy8gSnVzdCBtb3ZlIGN1cnNvclxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnNlbGVjdC5zZXRSYW5nZSgwLCBmYWxzZSk7XHJcbiAgICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICAgIHRoaXMuZ2x5cGhJbmRleC0tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxyXG5cclxuICAgICAgICAvLyBNb3ZlIGJ5IHdvcmRcclxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xyXG4gICAgICAgICB0aGlzLm1vdmVCeVdvcmRSaWdodCgpO1xyXG4gICAgICAgIC8vIFNlbGVjdFxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcclxuICAgICAgICAgIHRoaXMubW92ZVdpdGhTZWxlY3RSaWdodCgpXHJcblxyXG4gICAgICAgIC8vIEp1c3QgbW92ZSBpbmRleFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnNlbGVjdC5zZXRSYW5nZSgwLCBmYWxzZSk7XHJcbiAgICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICAgIHRoaXMuZ2x5cGhJbmRleCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwiQmFja3NwYWNlXCI6XHJcbiAgICAgICAgaWYgKHJhbmdlWzFdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnNlbGVjdC5jbGVhclNlbGVjdGVkUmFuZ2UoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnJlbW92ZVN0cmluZyh0aGlzLmdseXBoSW5kZXgtLSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBcIkRlbGV0ZVwiOlxyXG4gICAgICAgIGlmIChyYW5nZVsxXSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgdGhpcy5vd25lci5hd2Vzb21lVGV4dC5zZWxlY3QuY2xlYXJTZWxlY3RlZFJhbmdlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vd25lci5hd2Vzb21lVGV4dC5yZW1vdmVTdHJpbmcodGhpcy5nbHlwaEluZGV4ICsgMSwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIFNlbGVjdCBhbGxcclxuICAgICAgY2FzZSBcImFcIjpcclxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xyXG4gICAgICAgICAgdGhpcy5vd25lci5hd2Vzb21lVGV4dC5zZWxlY3Quc2V0UmFuZ2UoMCx0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnRleHQubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIENvcHkgdG8gY2xpcGJvYXJkXHJcbiAgICAgIGNhc2UgXCJjXCI6XHJcbiAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcclxuICAgICAgICAgIHRoaXMuY29weVRvQ2xpcGJvYXJkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIEN1dFxyXG4gICAgICBjYXNlIFwieFwiOlxyXG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XHJcbiAgICAgICAgICB0aGlzLmNvcHlUb0NsaXBib2FyZCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBcIiBcIjtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcclxuXHJcbiAgfVxyXG5cclxuICBzZXRQb3NpdGlvbih4LCB5KSB7XHJcblxyXG4gICAgY29uc3Qge2EgOiBzY2FsZVgsIGQ6IHNjYWxlWX0gPSB0aGlzLm93bmVyLnRyYW5zZm9ybS53b3JsZFRyYW5zZm9ybTtcclxuICAgIGNvbnN0IHt4IDogbG9jYWxYLCB5OiBsb2NhbFkgfSA9IHRoaXMub3duZXIucG9zaXRpb247XHJcblxyXG4gICAgbGV0IGxpbmVIZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodCAqIHNjYWxlWTtcclxuXHJcbiAgICB5ICo9IHNjYWxlWTtcclxuICAgIHggKj0gc2NhbGVYO1xyXG5cclxuICAgIHkgLT0gbGluZUhlaWdodDtcclxuXHJcbiAgICB5IC09IGxvY2FsWSAqIHNjYWxlWTtcclxuICAgIHggLT0gbG9jYWxYICogc2NhbGVYO1xyXG5cclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRvcCA9IGAke3l9cHhgO1xyXG5cclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gXCIgXCI7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgY29uc3QgdHJhbnNmb3JtID0gT2JqZWN0LnZhbHVlcyh0aGlzLmdldFRyYW5zZm9ybSgpKS5zbGljZSgwLCA2KTtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBtYXRyaXgoJHt0cmFuc2Zvcm0uam9pbihcIiwgXCIpfSlgO1xyXG4gIH1cclxuXHJcbiAgZ2V0VHJhbnNmb3JtKCkge1xyXG4gICAgY29uc3Qgb3duZXJUcmFuc2Zvcm0gPSB0aGlzLm93bmVyLnRyYW5zZm9ybS53b3JsZFRyYW5zZm9ybTtcclxuICAgIGxldCBjYW52YXNSZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICByZXR1cm4gey4uLm93bmVyVHJhbnNmb3JtLCB0eDogb3duZXJUcmFuc2Zvcm0udHggKyBjYW52YXNSZWN0LngsIHR5OiBvd25lclRyYW5zZm9ybS50eSArIGNhbnZhc1JlY3QueX07XHJcbiAgfVxyXG5cclxuICBhZGRFdmVudChldmVudCwgY2FsbGJhY2spIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5fZW5hYmxlZCkge1xyXG4gICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb3B5VG9DbGlwYm9hcmQoY3V0ID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5vd25lci5hd2Vzb21lVGV4dC5zZWxlY3QucmFuZ2U7XHJcbiAgICBjb25zdCBzdGFydCA9IE1hdGgubWluLmFwcGx5KG51bGwsIHJhbmdlKTtcclxuICAgIGNvbnN0IGVuZCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIHJhbmdlKTtcclxuXHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IHRoaXMub3duZXIudGV4dC5zbGljZShzdGFydCwgZW5kICsgMSk7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zZWxlY3QoKTtcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcclxuXHJcbiAgICBpZiAoY3V0KSB7XHJcbiAgICAgIHRoaXMub3duZXIuYXdlc29tZVRleHQuc2VsZWN0LmNsZWFyU2VsZWN0ZWRSYW5nZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcGFzdGVGcm9tQ2xpcGJvYXJkKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHRleHQgPSBldmVudC5jbGlwYm9hcmREYXRhLmdldERhdGEoXCJ0ZXh0XCIpO1xyXG5cclxuICAgIGlmICh0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LmNvbmZpZy51cHBlcmNhc2UpXHJcbiAgICAgIHRleHQgPSB0ZXh0LnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgaWYgKHRoaXMub3duZXIuYXdlc29tZVRleHQuY29uZmlnLmxvd2VyY2FzZSlcclxuICAgICAgdGV4dCA9IHRleHQudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAvLyBUT0RPIHJlbW92ZSBhbGwgdHJhc2ggc3ltYm9sc1xyXG5cclxuICAgIHRoaXMub3duZXIuYXdlc29tZVRleHQuc2VsZWN0LmNsZWFyU2VsZWN0ZWRSYW5nZSgpO1xyXG5cclxuICAgIHRoaXMub3duZXIuYXdlc29tZVRleHQuaW5zZXJ0U3RyaW5nKHRoaXMuZ2x5cGhJbmRleCArIDEsIHRleHQpO1xyXG5cclxuICAgIHRoaXMuZ2x5cGhJbmRleCA9IHRoaXMuZ2x5cGhJbmRleCArIHRleHQubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgbW92ZVdpdGhTZWxlY3RSaWdodCgpIHtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5vd25lci5hd2Vzb21lVGV4dC5zZWxlY3QucmFuZ2U7XHJcblxyXG4gICAgaWYgKHJhbmdlWzFdID09PSBudWxsKSB7XHJcbiAgICAgICsrdGhpcy5nbHlwaEluZGV4O1xyXG4gICAgICByYW5nZVswXSA9IHRoaXMuZ2x5cGhJbmRleDtcclxuICAgICAgcmFuZ2VbMV0gPSB0aGlzLmdseXBoSW5kZXggO1xyXG4gICAgfSBlbHNlIGlmIChyYW5nZVsxXSA9PT0gcmFuZ2VbMF0gJiYgdGhpcy5nbHlwaEluZGV4ID09PSByYW5nZVswXSAtIDEpIHtcclxuICAgICAgcmFuZ2VbMV0gPSBudWxsO1xyXG4gICAgICB0aGlzLmdseXBoSW5kZXgrKztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3duZXIuYXdlc29tZVRleHQuc2VsZWN0LmV4cGFuZCgxKTtcclxuICAgICAgdGhpcy5nbHlwaEluZGV4KytcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnNlbGVjdC51cGRhdGUoKVxyXG4gIH1cclxuXHJcbiAgbW92ZVdpdGhTZWxlY3RMZWZ0KCkge1xyXG5cclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5vd25lci5hd2Vzb21lVGV4dC5zZWxlY3QucmFuZ2U7XHJcblxyXG4gICAgLy8gSWYgd2Ugb25seSBoYXZlIGN1cnNvciwgbm8gc2VsZWN0aW9uXHJcbiAgICBpZiAocmFuZ2VbMV0gPT09IG51bGwpIHtcclxuICAgICAgcmFuZ2VbMF0gPSB0aGlzLmdseXBoSW5kZXg7XHJcbiAgICAgIHJhbmdlWzFdID0gdGhpcy5nbHlwaEluZGV4IDtcclxuXHJcbiAgICAgIC8vIElmIHdlIGhhdmUgc2VsZWN0ZWQgb25lIGdseXBoIGFuZCB3ZSByZW1vdmUgc2VsZWN0aW9uXHJcbiAgICB9IGVsc2UgaWYgKHJhbmdlWzFdID09PSByYW5nZVswXSAmJiB0aGlzLmdseXBoSW5kZXggPT09IHJhbmdlWzBdKSB7XHJcbiAgICAgIHJhbmdlWzFdID0gbnVsbDtcclxuXHJcbiAgICAgIC8vIFJlZ3VsYXIgc2VsZWN0aW5nXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnNlbGVjdC5leHBhbmQoLTEpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2x5cGhJbmRleC0tO1xyXG5cclxuICAgIHRoaXMub3duZXIuYXdlc29tZVRleHQuc2VsZWN0LnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbW92ZURvd24oKSB7XHJcblxyXG4gICAgdGhpcy5vd25lci5hd2Vzb21lVGV4dC5zZWxlY3Quc2V0UmFuZ2UobnVsbCwgZmFsc2UpXHJcblxyXG4gICAgY29uc3QgZ2x5cGggPSB0aGlzLmxheW91dC5nbHlwaHNbTWF0aC5tYXgoMCwgdGhpcy5nbHlwaEluZGV4KV07XHJcblxyXG4gICAgLy8gSWYgd2UgYXJlIG9uIHRoZSBmaXJzdCBsaW5lXHJcbiAgICBpZiAoZ2x5cGgucG9zaXRpb25bMV0gPT09IHRoaXMubGF5b3V0LmhlaWdodCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3R2x5cGggPSB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnNlbGVjdC5nZXRDbG9zZXN0R2x5cGgoZ2x5cGgucG9zaXRpb25bMF0sIGdseXBoLnBvc2l0aW9uWzFdKTtcclxuICAgIHRoaXMuZ2x5cGhJbmRleCA9IHRoaXMubGF5b3V0LmdseXBocy5pbmRleE9mKG5ld0dseXBoKTtcclxuICB9XHJcblxyXG4gIG1vdmVVcCgpIHtcclxuXHJcbiAgICB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnNlbGVjdC5zZXRSYW5nZShudWxsLCBmYWxzZSlcclxuXHJcbiAgICBjb25zdCBnbHlwaCA9IHRoaXMubGF5b3V0LmdseXBoc1t0aGlzLmdseXBoSW5kZXhdO1xyXG5cclxuICAgIC8vIElmIHdlIGFyZSBvbiB0aGUgZmlyc3QgbGluZVxyXG4gICAgaWYgKGdseXBoLnBvc2l0aW9uWzFdIDw9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdHbHlwaCA9IHRoaXMub3duZXIuYXdlc29tZVRleHQuc2VsZWN0LmdldENsb3Nlc3RHbHlwaChnbHlwaC5wb3NpdGlvblswXSwgZ2x5cGgucG9zaXRpb25bMV0gLSB0aGlzLm1ldHJpY3MubGluZUhlaWdodCAqIDIpO1xyXG4gICAgdGhpcy5nbHlwaEluZGV4ID0gdGhpcy5sYXlvdXQuZ2x5cGhzLmluZGV4T2YobmV3R2x5cGgpO1xyXG5cclxuICB9XHJcblxyXG4gIG1vdmVCeVdvcmRMZWZ0KCkge1xyXG4gICAgY29uc3QgZ2x5cGhzID0gdGhpcy5sYXlvdXQuZ2x5cGhzO1xyXG5cclxuICAgIGlmICh0aGlzLmdseXBoSW5kZXggPiAwKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLmdseXBoSW5kZXggLSAyOyBpID49IDA7IGktLSApIHtcclxuICAgICAgICBpZiAoZ2x5cGhzW2ldLmxldHRlciA9PT0gXCIgXCIgJiYgZ2x5cGhzW2kgKyAxIF0ubGV0dGVyICE9PSBcIiBcIikge1xyXG4gICAgICAgICAgdGhpcy5nbHlwaEluZGV4ID0gaTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGkgPT09IDAgKSB0aGlzLmdseXBoSW5kZXggPSAtMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW92ZUJ5V29yZFJpZ2h0KCkge1xyXG4gICAgY29uc3QgZ2x5cGhzID0gdGhpcy5sYXlvdXQuZ2x5cGhzO1xyXG5cclxuICAgIGlmICh0aGlzLmdseXBoSW5kZXggPCBnbHlwaHMubGVuZ3RoKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLmdseXBoSW5kZXggKyAxOyBpIDw9IGdseXBocy5sZW5ndGggLSAxOyBpKysgKSB7XHJcbiAgICAgICAgaWYgKGdseXBoc1tpXS5sZXR0ZXIgPT09IFwiIFwiICYmIGdseXBoc1tpIC0gMSBdLmxldHRlciAhPT0gXCIgXCIpIHtcclxuICAgICAgICAgIHRoaXMuZ2x5cGhJbmRleCA9IGk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpID09PSBnbHlwaHMubGVuZ3RoIC0gMSkgdGhpcy5nbHlwaEluZGV4ID0gZ2x5cGhzLmxlbmd0aCAtMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2lucHV0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxuYXR0cmlidXRlIHZlYzIgYVZlcnRleFBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWMyIGFUZXh0dXJlQ29vcmQ7XFxuYXR0cmlidXRlIGZsb2F0IGFTZGZTaXplO1xcblxcbnVuaWZvcm0gbWF0MyB0cmFuc2xhdGlvbk1hdHJpeDtcXG51bmlmb3JtIG1hdDMgcHJvamVjdGlvbk1hdHJpeDtcXG51bmlmb3JtIGZsb2F0IHNkZk11bHRpcGxpZXI7XFxuXFxudmFyeWluZyB2ZWMyICB0YzA7XFxudmFyeWluZyBmbG9hdCBkb2Zmc2V0O1xcbnZhcnlpbmcgZmxvYXQgc2RmX3RleGVsO1xcblxcblxcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuXFxuICAgIC8vVE9ETyBNQUtFIEFUVFJJQlVURVxcbiAgICBmbG9hdCBzZGZfc2l6ZSA9IGFTZGZTaXplICogc2RmTXVsdGlwbGllcjtcXG5cXG4gICAgLy9UT0RPIE1BS0UgVU5JRk9STVNcXG4gICAgZmxvYXQgc2RmX3RleF9zaXplID0gMTAyNC4wO1xcblxcblxcbiAgICB0YzAgPSBhVGV4dHVyZUNvb3JkO1xcbiAgICBkb2Zmc2V0ID0gMS4wIC8gc2RmX3NpemU7ICAgICAgIC8vIERpc3RhbmNlIGZpZWxkIGRlbHRhIGZvciBvbmUgc2NyZWVuIHBpeGVsXFxuICAgIHNkZl90ZXhlbCA9IDEuMCAvIHNkZl90ZXhfc2l6ZTtcXG5cXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KChwcm9qZWN0aW9uTWF0cml4ICogdHJhbnNsYXRpb25NYXRyaXggKiB2ZWMzKGFWZXJ0ZXhQb3NpdGlvbiAsIDEuMCkpLnh5LCAwLjAsIDEuMCk7XFxuXFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy90ZXh0L3ZlcnQuZ2xzbFxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxudW5pZm9ybSBzYW1wbGVyMkQgdVNhbXBsZXI7XFxudW5pZm9ybSBmbG9hdCBoaW50X2Ftb3VudDtcXG51bmlmb3JtIGZsb2F0IHN1YnBpeGVsX2Ftb3VudDtcXG5cXG51bmlmb3JtIHZlYzMgYmdfY29sb3I7XFxudW5pZm9ybSB2ZWMzIGZvbnRfY29sb3I7XFxuXFxudmFyeWluZyB2ZWMyICB0YzA7XFxudmFyeWluZyBmbG9hdCBkb2Zmc2V0O1xcbnZhcnlpbmcgZmxvYXQgc2RmX3RleGVsO1xcblxcblxcbi8qXFxuICogIFN1YnBpeGVsIGNvdmVyYWdlIGNhbGN1bGF0aW9uXFxuICpcXG4gKiAgdiAtIGVkZ2Ugc2xvcGUgICAgLTEuMCB0byAxLjAgICAgICAgICAgdHJpcGxldFxcbiAqICBhIC0gcGl4ZWwgY292ZXJhZ2UgMC4wIHRvIDEuMCAgICAgICAgICBjb3ZlcmFnZVxcbiAqXFxuICogICAgICB8PC0gZ2x5cGggZWRnZSAgICAgICAgICAgICAgICAgICAgICBSICBHICBCXFxuICogICstLS0rLS0tKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tKy0tKy0tK1xcbiAqICB8ICAgfFhYWHwgdiA9IDEuMCAoZWRnZSBmYWNpbmcgd2VzdCkgIHwgIHx4eHxYWHxcXG4gKiAgfCAgIHxYWFh8IGEgPSAwLjUgKDUwJSBjb3ZlcmFnZSkgICAgICB8ICB8eHh8WFh8XFxuICogIHwgICB8WFhYfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgfHh4fFhYfFxcbiAqICArLS0tKy0tLSsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLSstLSstLStcXG4gKiAgICBwaXhlbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCAgNTAgMTAwXFxuICpcXG4gKlxcbiAqICAgICAgICBSICAgRyAgIEJcXG4gKlxcbiAqICAgMS4wICAgICAgICArLS0rICAgPC0gdG9wIChhYnMoIHYgKSlcXG4gKiAgICAgICAgICAgICAgfFxcbiAqICAgICAgIC0rLS0tLS0rLS0rLS0gPC0gY2VpbDogMTAwJSBjb3ZlcmFnZVxcbiAqICAgICAgICB8ICAgICB8WFh8XFxuICogICAwLjAgIHwgICstLStYWHxcXG4gKiAgICAgICAgfCAgfHh4fFhYfFxcbiAqICAgICAgIC0rLS0rLS0rLS0rLS0gPC0gZmxvb3I6IDAlIGNvdmVyYWdlXFxuICogICAgICAgICAgIHxcXG4gKiAgLTEuMCAgKy0tKyAgICAgICAgIDwtICAtYWJzKHYpXFxuICogICAgICAgIHxcXG4gKiAgICAgICAgfFxcbiAqICAgICAgICB8XFxuICogIC0yLjAgICsgICAgICAgICAgICA8LSBib3R0b206IC1hYnModiktMS4wXFxuICovXFxuXFxudmVjMyBzdWJwaXhlbCggZmxvYXQgdiwgZmxvYXQgYSApIHtcXG4gICAgZmxvYXQgdnQgICAgICA9IDAuNiAqIHY7IC8vIDEuMCB3aWxsIG1ha2UgeW91ciBleWVzIGJsZWVkXFxuICAgIHZlYzMgIHJnYl9tYXggPSB2ZWMzKCAtdnQsIDAuMCwgdnQgKTtcXG4gICAgZmxvYXQgdG9wICAgICA9IGFicyggdnQgKTtcXG4gICAgZmxvYXQgYm90dG9tICA9IC10b3AgLSAxLjA7XFxuICAgIGZsb2F0IGNmbG9vciAgPSBtaXgoIHRvcCwgYm90dG9tLCBhICk7XFxuICAgIHZlYzMgIHJlcyAgICAgPSBjbGFtcCggcmdiX21heCAtIHZlYzMoIGNmbG9vciApLCAwLjAsIDEuMCApO1xcbiAgICByZXR1cm4gcmVzO1xcbn1cXG5cXG52b2lkIG1haW4yKCkge1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDEuMCwgMS4wLCAxLjAsMS4wKTtcXG59XFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG5cXG4gICAgLy8gU2FtcGxpbmcgdGhlIHRleHR1cmUsIEwgcGF0dGVyblxcbiAgICBmbG9hdCBzZGYgICAgICAgPSB0ZXh0dXJlMkQoIHVTYW1wbGVyLCB0YzAgKS5yO1xcbiAgICBmbG9hdCBzZGZfbm9ydGggPSB0ZXh0dXJlMkQoIHVTYW1wbGVyLCB0YzAgKyB2ZWMyKCAwLjAsIHNkZl90ZXhlbCApICkucjtcXG4gICAgZmxvYXQgc2RmX2Vhc3QgID0gdGV4dHVyZTJEKCB1U2FtcGxlciwgdGMwICsgdmVjMiggc2RmX3RleGVsLCAwLjAgKSApLnI7XFxuXFxuICAgIC8vIEVzdGltYXRpbmcgc3Ryb2tlIGRpcmVjdGlvbiBieSB0aGUgZGlzdGFuY2UgZmllbGQgZ3JhZGllbnQgdmVjdG9yXFxuICAgIHZlYzIgIHNncmFkICAgICA9IHZlYzIoIHNkZl9lYXN0IC0gc2RmLCBzZGZfbm9ydGggLSBzZGYgKTtcXG4gICAgZmxvYXQgc2dyYWRfbGVuID0gbWF4KCBsZW5ndGgoIHNncmFkICksIDEuMCAvIDEyOC4wICk7XFxuICAgIHZlYzIgIGdyYWQgICAgICA9IHNncmFkIC8gdmVjMiggc2dyYWRfbGVuICk7XFxuICAgIGZsb2F0IHZncmFkID0gYWJzKCBncmFkLnkgKTsgLy8gMC4wIC0gdmVydGljYWwgc3Ryb2tlLCAxLjAgLSBob3Jpem9udGFsIG9uZVxcblxcbiAgICBmbG9hdCBob3J6X3NjYWxlICA9IDEuMTsgLy8gQmx1cnJpbmcgdmVydGljYWwgc3Ryb2tlcyBhbG9uZyB0aGUgWCBheGlzIGEgYml0XFxuICAgIGZsb2F0IHZlcnRfc2NhbGUgID0gMC42OyAvLyBXaGlsZSBhZGRpbmcgc29tZSBjb250cmFzdCB0byB0aGUgaG9yaXpvbnRhbCBzdHJva2VzXFxuICAgIGZsb2F0IGhkb2Zmc2V0ICAgID0gbWl4KCBkb2Zmc2V0ICogaG9yel9zY2FsZSwgZG9mZnNldCAqIHZlcnRfc2NhbGUsIHZncmFkICk7XFxuICAgIGZsb2F0IHJlc19kb2Zmc2V0ID0gbWl4KCBkb2Zmc2V0LCBoZG9mZnNldCwgaGludF9hbW91bnQgKTtcXG5cXG4gICAgZmxvYXQgYWxwaGEgICAgICAgPSBzbW9vdGhzdGVwKCAwLjUgLSByZXNfZG9mZnNldCwgMC41ICsgcmVzX2RvZmZzZXQsIHNkZiApO1xcblxcbiAgICAvLyBBZGRpdGlvbmFsIGNvbnRyYXN0XFxuICAgIGFscGhhICAgICAgICAgICAgID0gcG93KCBhbHBoYSwgMS4wICsgMC4yICogdmdyYWQgKiBoaW50X2Ftb3VudCApO1xcblxcbiAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIHN1cHBvcnQgZm9yIEFSQl9ibGVuZF9mdW5jX2V4dGVuZGVkIGluIFdlYkdMLlxcbiAgICAvLyBGb3J0dW5hdGVseSB0aGUgYmFja2dyb3VuZCBpcyBmaWxsZWQgd2l0aCBhIHNvbGlkIGNvbG9yIHNvIHdlIGNhbiBkb1xcbiAgICAvLyB0aGUgYmxlbmRpbmcgaW5zaWRlIHRoZSBzaGFkZXIuXFxuXFxuICAgIC8vIERpc2NhcmRpbmcgcGl4ZWxzIGJleW9uZCBhIHRocmVzaG9sZCB0byBtaW5pbWlzZSBwb3NzaWJsZSBhcnRpZmFjdHMuXFxuICAgIGlmICggYWxwaGEgPCAyMC4wIC8gMjU2LjAgKSBkaXNjYXJkO1xcblxcbiAgICB2ZWMzIGNoYW5uZWxzID0gc3VicGl4ZWwoIGdyYWQueCAqIDAuNSAqIHN1YnBpeGVsX2Ftb3VudCwgYWxwaGEgKSArIDAuMTtcXG5cXG4gICAgLy8gRm9yIHN1YnBpeGVsIHJlbmRlcmluZyB3ZSBoYXZlIHRvIGJsZW5kIGVhY2ggY29sb3IgY2hhbm5lbCBzZXBhcmF0ZWx5XFxuICAgIHZlYzMgcmVzID0gbWl4KCBiZ19jb2xvciwgZm9udF9jb2xvciwgY2hhbm5lbHMgKTtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCggcmVzLCAxLjAgKTtcXG59XFxuXFxuXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL3RleHQvZnJhZy5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9