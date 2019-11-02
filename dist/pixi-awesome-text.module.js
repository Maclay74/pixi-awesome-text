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
	          _ref$wordWrapWidth = _ref.wordWrapWidth,
	          wrapperWidth = _ref$wordWrapWidth === void 0 ? 400 : _ref$wordWrapWidth,
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
/* 1 */,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCAxZGM5YTNiMWQ4ZTA2N2Y5Y2Q5ZSIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xheW91dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VsZWN0LmpzIiwid2VicGFjazovLy8uL34vcXVhZC1pbmRpY2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL34vZHR5cGUvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9hbi1hcnJheS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9+L2lzLWJ1ZmZlci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2hhZGVycy9zZWxlY3QvdmVydC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3NlbGVjdC9mcmFnLmdsc2wiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0LmpzIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvdmVydC5nbHNsIiwid2VicGFjazovLy8uL3NyYy9zaGFkZXJzL3RleHQvZnJhZy5nbHNsIl0sIm5hbWVzIjpbImNyZWF0ZUluZGljZXMiLCJ2ZXJ0ZXhTaGFkZXIiLCJmcmFnbWVudFNoYWRlciIsIlRleHQiLCJ0ZXh0Iiwic3R5bGUiLCJjb25maWciLCJzdGF0ZXMiLCJyZWd1bGFyIiwiZWRpdGFibGUiLCJ1cHBlcmNhc2UiLCJsb3dlcmNhc2UiLCJhbnRpYWxpYXNpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJmb250U2l6ZSIsImJyZWFrV29yZHMiLCJ3cmFwV29yZHMiLCJ3b3JkV3JhcFdpZHRoIiwid3JhcHBlcldpZHRoIiwiYWxpZ24iLCJsaW5lSGVpZ2h0IiwiVGV4dExheW91dCIsIlBJWEkiLCJUZXh0U3R5bGUiLCJfdGV4dCIsIl9mb250IiwiZm9udCIsIl90ZXh0dXJlIiwidGV4dHVyZSIsImxheW91dCIsImNyZWF0ZUxheW91dCIsImNvbnRhaW5lciIsIkNvbnRhaW5lciIsImF3ZXNvbWVUZXh0IiwiaW50ZXJhY3RpdmUiLCJidXR0b25Nb2RlIiwic2VsZWN0IiwiU2VsZWN0IiwiaW5wdXQiLCJJbnB1dCIsInNldFN0YXRlIiwidXBkYXRlIiwidmVydGljZXMiLCJGbG9hdDMyQXJyYXkiLCJsZXR0ZXJzQ291bnQiLCJ1dnMiLCJzZGZTaXplcyIsImFycmF5UG9zaXRpb25zIiwidmVydGV4Iiwic2RmIiwid29yZHNNZXRyaWNzIiwiZm9yRWFjaCIsIndvcmQiLCJ3cml0ZVN0cmluZyIsIm1ldHJpY3MiLCJ4IiwieSIsImluZGljZXMiLCJjbG9ja3dpc2UiLCJ0eXBlIiwiY291bnQiLCJHZW9tZXRyeSIsImFkZEF0dHJpYnV0ZSIsImFkZEluZGV4IiwiZ2VvbWV0cnkiLCJ2ZXJ0IiwiZnJhZyIsInVuaWZvcm1zIiwidVNhbXBsZXIiLCJoaW50X2Ftb3VudCIsInNkZk11bHRpcGxpZXIiLCJzY2FsZSIsInN1YnBpeGVsX2Ftb3VudCIsImZvbnRfY29sb3IiLCJ1dGlscyIsImhleDJyZ2IiLCJmaWxsIiwicmVwbGFjZSIsImJnX2NvbG9yIiwidGV4dFNoYWRlciIsIlNoYWRlciIsImZyb20iLCJNZXNoIiwiZm9udE1ldHJpY3MiLCJ0ZXh0R2VvbWV0cnkiLCJkZXN0cm95IiwidGV4dE1lc2giLCJyZW1vdmVDaGlsZCIsImNyZWF0ZUdlb21ldHJ5IiwiY3JlYXRlTWVzaCIsImFkZENoaWxkIiwibmV3U3RhdGUiLCJzZWxlY3RpbmciLCJlbmFibGVkIiwiT2JqZWN0IiwidmFsdWVzIiwic2V0UmVndWxhclN0YXRlIiwic3RhdGUiLCJzZXRFZGl0YWJsZVN0YXRlIiwiY3VycmVudEVkaXRpbmdFbGVtZW50Iiwib2ZmIiwib24iLCJlIiwiY2xpY2tzQ291bnQiLCJ3aW5kb3ciLCJzZXRUaW1lb3V0IiwiaGlkZSIsInNldFJhbmdlIiwibGVuZ3RoIiwiaW5wdXRFbGVtZW50IiwiZm9jdXMiLCJvbk1vdXNlRG93biIsInNob3ciLCJkYXRhIiwib3JpZ2luYWxFdmVudCIsIm1vdmVtZW50WCIsIm1vdmVtZW50WSIsIm9uTW91c2VNb3ZlIiwib25Nb3VzZVVwIiwiaW5kZXgiLCJzdHJpbmciLCJzdWJzdHIiLCJuZXdUZXh0Iiwic3BsaXQiLCJzcGxpY2UiLCJqb2luIiwiZm9udF9tZXRyaWNzIiwicG9zIiwicHJldl9jaGFyIiwiY3BvcyIsInhfbWF4IiwiY2FwU2NhbGUiLCJzdHJfcG9zIiwic2NoYXIiLCJmb250X2NoYXIiLCJjaGFycyIsImtlcm4iLCJyZWN0IiwiY2hhclJlY3QiLCJwb3NpdGlvbnMiLCJtYXAiLCJ1diIsInN0cmluZ19wb3MiLCJtb3JlTGluZUdhcCIsImNhcF9oZWlnaHQiLCJ4X2hlaWdodCIsImZvbnRBc2NlbnQiLCJhc2NlbnQiLCJkZXNjZW50IiwibGluZV9nYXAiLCJsb3dTY2FsZSIsIk1hdGgiLCJyb3VuZCIsImxvd2Nhc2UiLCJmbGFncyIsImJhc2VsaW5lIiwiZyIsImJvdHRvbSIsIml5IiwidG9wIiwicm93X2hlaWdodCIsImxlZnQiLCJiZWFyaW5nX3giLCJpeCIsInJpZ2h0IiwicCIsIm5ld19wb3NfeCIsImFkdmFuY2VfeCIsInNkZl9zaXplIiwidmFsdWUiLCJvd25lciIsInN0YXJ0WSIsImNhbGN1bGF0ZVdvcmRzUG9zaXRpb25zIiwiZ2x5cGhzIiwiZ2V0R2x5cGhzIiwid2lkdGgiLCJoZWlnaHQiLCJjaGFyIiwid29yZHMiLCJpIiwic3RhcnRYIiwid29yZFNpemUiLCJnZXRTdHJpbmdTaXplIiwicHVzaCIsImxpbmVzQ291bnQiLCJ3b3Jkc09uTGluZSIsImZpbHRlciIsImxhc3RXb3JkIiwiZnJlZVNwYWNlIiwibGVmdE9mZnNldCIsImxldHRlciIsInBvc2l0aW9uIiwiX2VuYWJsZWQiLCJidWlsZFZlcnRpY2VzIiwic2hhZGVyIiwibWVzaCIsInJhbmdlIiwiYmxlbmRNb2RlIiwiQkxFTkRfTU9ERVMiLCJOT1JNQUxfTlBNIiwic3RhcnQiLCJlbmQiLCJtaW4iLCJhcHBseSIsIm1heCIsImxldHRlckNvdW50IiwiZmlyc3RMZXR0ZXIiLCJsYXN0TGV0dGVyIiwic3RhcnRMaW5lTGV0dGVyIiwiZW5kTGluZUxldHRlciIsIm9mZnNldCIsInNlbGVjdGluZ0xpbmUiLCJmbG9vciIsInNlbGVjdGluZ0xpbmVZIiwibGFzdEdseXBoT25MaW5lIiwiZmlyc3RHbHlwaE9uTGluZSIsImdseXBoIiwiZXZlbnQiLCJidXR0b24iLCJnbG9iYWwiLCJ0cmFuc2Zvcm1Qb3NpdGlvbiIsImNsb3Nlc3RMZXR0ZXIiLCJnZXRDbG9zZXN0R2x5cGgiLCJpbmRleE9mIiwiZ2x5cGhJbmRleCIsIm93bmVyUG9zaXRpb24iLCJnZXRHbG9iYWxQb3NpdGlvbiIsInRyYW5zZm9ybSIsIndvcmxkVHJhbnNmb3JtIiwidHgiLCJ0eSIsImEiLCJkIiwicmVtb3ZlSW5kZXgiLCJyZW1vdmVMZW5ndGgiLCJhYnMiLCJyZW1vdmVTdHJpbmciLCJkaXJlY3Rpb24iLCJfZ2x5cGhJbmRleCIsImVuYWJsZSIsImRpc2FibGUiLCJjYW52YXMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiY3JlYXRlRmllbGQiLCJkaXNwbGF5IiwiYm9keSIsImFwcGVuZCIsImNvbnRhaW5zIiwib3BhY2l0eSIsImNyZWF0ZUVsZW1lbnQiLCJzbGljZSIsImNvbG9yIiwiYm9yZGVyIiwiY29udGFpbiIsInpJbmRleCIsInBvaW50ZXJFdmVudHMiLCJvdXRsaW5lIiwidHJhbnNmb3JtT3JpZ2luIiwicGFkZGluZyIsImFkZEV2ZW50Iiwib25JbnB1dCIsIm9uS2V5ZG93biIsInBhc3RlRnJvbUNsaXBib2FyZCIsImdseXBoTWV0cmljcyIsImxhc3RHbHlwaCIsInNlbGVjdGVkR2x5cGgiLCJzZXRQb3NpdGlvbiIsImNsZWFyU2VsZWN0ZWRSYW5nZSIsInRhcmdldCIsInRleHRUb0FkZCIsInRvVXBwZXJDYXNlIiwidG9Mb3dlckNhc2UiLCJpbnNlcnRTdHJpbmciLCJrZXkiLCJtb3ZlVXAiLCJtb3ZlRG93biIsImN0cmxLZXkiLCJtb3ZlQnlXb3JkTGVmdCIsInNoaWZ0S2V5IiwibW92ZVdpdGhTZWxlY3RMZWZ0IiwibW92ZUJ5V29yZFJpZ2h0IiwibW92ZVdpdGhTZWxlY3RSaWdodCIsImNvcHlUb0NsaXBib2FyZCIsInNjYWxlWCIsInNjYWxlWSIsImxvY2FsWCIsImxvY2FsWSIsImdldFRyYW5zZm9ybSIsIm93bmVyVHJhbnNmb3JtIiwiY2FudmFzUmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNhbGxiYWNrIiwiYWRkRXZlbnRMaXN0ZW5lciIsImN1dCIsImV4ZWNDb21tYW5kIiwicHJldmVudERlZmF1bHQiLCJjbGlwYm9hcmREYXRhIiwiZ2V0RGF0YSIsImV4cGFuZCIsIm5ld0dseXBoIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsTztBQ1ZBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FDckNBOztBQUNBOztBQUNBOzs7Ozs7Ozs7Ozs7OztBQUhBLEtBQU1BLGFBQWEsR0FBRyxtQkFBTyxDQUFDLENBQUQsQ0FBN0I7O0FBS0EsS0FBTUMsWUFBWSxHQUFHLG1CQUFPLENBQUMsRUFBRCxDQUE1Qjs7QUFDQSxLQUFNQyxjQUFjLEdBQUcsbUJBQU8sQ0FBQyxFQUFELENBQTlCOztLQUVNQyxJOzs7QUFpQkosaUJBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxNQUF6QixFQUFpQztBQUFBOztBQUFBOztBQUFBLG9DQVh6QkgsSUFBSSxDQUFDSSxNQUFMLENBQVlDLE9BV2E7O0FBQUEsMENBVm5CLENBVW1COztBQUFBLHFDQVJ4QjtBQUNQQyxlQUFRLEVB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QiwyQkFBMkIsbUNBQW1DLGdDQUFnQyw4QkFBOEIsc0JBQXNCLHdCQUF3QiwwQkFBMEIseUJBQXlCLDZFQUE2RSw4REFBOEQsOEJBQThCLCtCQUErQix3RkFBd0YsOEdBQThHLEtBQUssRzs7Ozs7O0FDQW50QixpRUFBZ0UsNEJBQTRCLGdDQUFnQywwQkFBMEIsMEJBQTBCLHNCQUFzQix3QkFBd0IsMEJBQTBCLHc4QkFBdzhCLDhCQUE4Qiw0RUFBNEUsZ0NBQWdDLGlDQUFpQyw0Q0FBNEMsa0VBQWtFLGlCQUFpQixHQUFHLGtCQUFrQiw2Q0FBNkMsR0FBRyxxQkFBcUIsK0ZBQStGLDhFQUE4RSw4RUFBOEUsNElBQTRJLDREQUE0RCxrREFBa0Qsa0NBQWtDLCtFQUErRSxrRkFBa0YsMklBQTJJLGdFQUFnRSxvRkFBb0Ysc0dBQXNHLGdVQUFnVSxnRkFBZ0YsdUlBQXVJLHNDQUFzQyxHQUFHLE8iLCJmaWxlIjoicGl4aS1hd2Vzb21lLXRleHQubW9kdWxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiQXdlc29tZVRleHRcIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiQXdlc29tZVRleHRcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiBcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgMWRjOWEzYjFkOGUwNjdmOWNkOWUiLCJjb25zdCBjcmVhdGVJbmRpY2VzID0gcmVxdWlyZShcInF1YWQtaW5kaWNlc1wiKVxyXG5pbXBvcnQgVGV4dExheW91dCBmcm9tICcuL2xheW91dCc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSBcIi4vc2VsZWN0XCI7XHJcbmltcG9ydCBJbnB1dCBmcm9tIFwiLi9pbnB1dFwiO1xyXG5cclxuY29uc3QgdmVydGV4U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy90ZXh0L3ZlcnQuZ2xzbFwiKTtcclxuY29uc3QgZnJhZ21lbnRTaGFkZXIgPSByZXF1aXJlKFwiLi9zaGFkZXJzL3RleHQvZnJhZy5nbHNsXCIpO1xyXG5cclxuY2xhc3MgVGV4dCB7XHJcblxyXG4gIHN0YXRpYyBzY2FsZSA9IDEuMDtcclxuICBzdGF0aWMgc3RhdGVzID0ge3JlZ3VsYXI6IDAsIGVkaXRhYmxlOiAxLCBzZWxlY3Rpbmc6IDJ9O1xyXG4gIHN0YXRpYyBjdXJyZW50RWRpdGluZ0VsZW1lbnQgPSBudWxsO1xyXG5cclxuICBzdGF0ZSA9IFRleHQuc3RhdGVzLnJlZ3VsYXI7XHJcbiAgY2xpY2tzQ291bnQgPSAwO1xyXG5cclxuICBjb25maWcgPSB7XHJcbiAgICBlZGl0YWJsZTogZmFsc2UsXHJcbiAgICB1cHBlcmNhc2U6IGZhbHNlLFxyXG4gICAgbG93ZXJjYXNlOiBmYWxzZSxcclxuICAgIGFudGlhbGlhc2luZzogdHJ1ZSxcclxuICAgIGJhY2tncm91bmRDb2xvcjogXCIjMDAwMDAwXCJcclxuICB9O1xyXG5cclxuICBjb25zdHJ1Y3Rvcih0ZXh0LCBzdHlsZSwgY29uZmlnKSB7XHJcblxyXG4gICAgLy8gQmFzaWMgcGFyYW1zXHJcbiAgICB0aGlzLnN0eWxlID0gbmV3IFBJWEkuVGV4dFN0eWxlKHN0eWxlKTtcclxuICAgIHRoaXMuY29uZmlnID0gey4uLnRoaXMuY29uZmlnLCAuLi5jb25maWd9O1xyXG4gICAgdGhpcy5iYWNrZ3JvdW5kQ29sb3IgPSB0aGlzLmNvbmZpZy5iYWNrZ3JvdW5kQ29sb3I7XHJcbiAgICB0aGlzLl90ZXh0ID0gdGV4dDsgLy8gQ29udGVudFxyXG4gICAgdGhpcy5fZm9udCA9IGNvbmZpZy5mb250OyAvLyBGb250IGluZm9ybWF0aW9uXHJcbiAgICB0aGlzLl90ZXh0dXJlID0gY29uZmlnLnRleHR1cmU7IC8vIFRleHR1cmUgd2l0aCBnbHlwaHNcclxuXHJcbiAgICB0aGlzLmxheW91dCA9IHRoaXMuY3JlYXRlTGF5b3V0KHRoaXMuc3R5bGUpO1xyXG5cclxuICAgIC8vIENyZWF0ZSBzdHJ1Y3R1cmVcclxuICAgIHRoaXMuY29udGFpbmVyID0gbmV3IFBJWEkuQ29udGFpbmVyKCk7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5hd2Vzb21lVGV4dCA9IHRoaXM7XHJcblxyXG4gICAgLy8gSWYgZmllbGQgaXMgZWRpdGFibGUsIHByZXBhcmUgaXRcclxuICAgIGlmICh0aGlzLmNvbmZpZy5lZGl0YWJsZSkge1xyXG4gICAgICB0aGlzLmNvbnRhaW5lci5pbnRlcmFjdGl2ZSA9IHRydWU7XHJcbiAgICAgIHRoaXMuY29udGFpbmVyLmJ1dHRvbk1vZGUgPSB0cnVlO1xyXG5cclxuICAgICAgdGhpcy5zZWxlY3QgPSBuZXcgU2VsZWN0KHRoaXMpO1xyXG4gICAgICB0aGlzLmlucHV0ID0gbmV3IElucHV0KHRoaXMpO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKFRleHQuc3RhdGVzLnJlZ3VsYXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMudXBkYXRlKCk7XHJcblxyXG4gICAgcmV0dXJuIHRoaXMuY29udGFpbmVyO1xyXG4gIH1cclxuXHJcbiAgY3JlYXRlTGF5b3V0ID0gKHtmb250U2l6ZSA9IDEzLCBicmVha1dvcmRzIDogd3JhcFdvcmRzICA9IGZhbHNlLCB3b3JkV3JhcFdpZHRoIDogd3JhcHBlcldpZHRoID0gNDAwLCBhbGlnbiA9IFwibGVmdFwiLCBsaW5lSGVpZ2h0ID0gMTd9KSA9PiBuZXcgVGV4dExheW91dCh0aGlzLCB7XHJcbiAgICBmb250U2l6ZSxcclxuICAgIHdyYXBXb3JkcyxcclxuICAgIHdyYXBwZXJXaWR0aCxcclxuICAgIGFsaWduLFxyXG4gICAgbGluZUhlaWdodCxcclxuICB9KTtcclxuXHJcbiAgY3JlYXRlR2VvbWV0cnkoKSB7XHJcblxyXG4gICAgLy8gQXJyYXlzIGZvciB2ZXJ0aWNlcywgdXZzIGFuZCBzZGZcclxuICAgIHRoaXMudmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMubGF5b3V0LmxldHRlcnNDb3VudCAqIDQgKiAyKTtcclxuICAgIHRoaXMudXZzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0ICogMik7XHJcbiAgICB0aGlzLnNkZlNpemVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0KTtcclxuICAgIHRoaXMuYXJyYXlQb3NpdGlvbnMgPSB7IHZlcnRleDogMCwgdXZzOiAwLCBzZGY6IDAgfTtcclxuXHJcbiAgICAvLyBGaWxsIGFycmF5cyB3b3JkIGJ5IHdvcmRcclxuICAgIHRoaXMubGF5b3V0LndvcmRzTWV0cmljcy5mb3JFYWNoICh3b3JkID0+IHtcclxuICAgICAgdGhpcy53cml0ZVN0cmluZyh3b3JkLndvcmQsIHRoaXMuZm9udCwgdGhpcy5tZXRyaWNzLCBbd29yZC54LCB3b3JkLnldKTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFByZXBhcmUgaW5kaWNlc1xyXG4gICAgdGhpcy5pbmRpY2VzID0gY3JlYXRlSW5kaWNlcyh7XHJcbiAgICAgIGNsb2Nrd2lzZTogdHJ1ZSxcclxuICAgICAgdHlwZTogJ3VpbnQxNicsXHJcbiAgICAgIGNvdW50OiB0aGlzLmxheW91dC5sZXR0ZXJzQ291bnRcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEZpbGwgdXAgdGhlIGdlb21ldHJ5XHJcbiAgICByZXR1cm4gbmV3IFBJWEkuR2VvbWV0cnkoKVxyXG4gICAgICAgIC5hZGRBdHRyaWJ1dGUoJ2FWZXJ0ZXhQb3NpdGlvbicsIC8vIHRoZSBhdHRyaWJ1dGUgbmFtZVxyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLCAvLyB4LCB5XHJcbiAgICAgICAgICAgIDIpIC8vIHRoZSBzaXplIG9mIHRoZSBhdHRyaWJ1dGVcclxuXHJcbiAgICAgICAgLmFkZEF0dHJpYnV0ZSgnYVRleHR1cmVDb29yZCcsIC8vIHRoZSBhdHRyaWJ1dGUgbmFtZVxyXG4gICAgICAgICAgICB0aGlzLnV2cywgLy8gdSwgdlxyXG4gICAgICAgICAgICAyKSAvLyB0aGUgc2l6ZSBvZiB0aGUgYXR0cmlidXRlXHJcblxyXG4gICAgICAgIC5hZGRBdHRyaWJ1dGUoJ2FTZGZTaXplJywgLy8gdGhlIGF0dHJpYnV0ZSBuYW1lXHJcbiAgICAgICAgICAgIHRoaXMuc2RmU2l6ZXMsIC8vIHUsIHZcclxuICAgICAgICAgICAgMSkgLy8gdGhlIHNpemUgb2YgdGhlIGF0dHJpYnV0ZVxyXG4gICAgICAgIC5hZGRJbmRleCh0aGlzLmluZGljZXMpXHJcbiAgfVxyXG5cclxuICBjcmVhdGVNZXNoKHtnZW9tZXRyeSA9IG5ldyBQSVhJLkdlb21ldHJ5KCksIHZlcnQgPSBcIlwiLCBmcmFnID0gXCJcIn0pIHtcclxuICAgIC8vIFBhc3MgdW5pZm9ybXMgdG8gdGhlIHNoYWRlclxyXG4gICAgY29uc3QgdW5pZm9ybXMgPSB7XHJcbiAgICAgIHVTYW1wbGVyOiB0aGlzLl90ZXh0dXJlLFxyXG4gICAgICBoaW50X2Ftb3VudDogdGhpcy5jb25maWcuYW50aWFsaWFzaW5nICogMSxcclxuICAgICAgc2RmTXVsdGlwbGllcjogVGV4dC5zY2FsZSxcclxuICAgICAgc3VicGl4ZWxfYW1vdW50OiB0aGlzLmNvbmZpZy5hbnRpYWxpYXNpbmcgKiAxLFxyXG4gICAgICBmb250X2NvbG9yOiBQSVhJLnV0aWxzLmhleDJyZ2IodGhpcy5zdHlsZS5maWxsLnJlcGxhY2UoXCIjXCIsIFwiMHhcIikpLFxyXG4gICAgICBiZ19jb2xvcjogUElYSS51dGlscy5oZXgycmdiKHRoaXMuYmFja2dyb3VuZENvbG9yLnJlcGxhY2UoXCIjXCIsIFwiMHhcIikpXHJcbiAgICB9O1xyXG5cclxuICAgIGlmICghdGhpcy50ZXh0U2hhZGVyKSB7XHJcbiAgICAgIHRoaXMudGV4dFNoYWRlciA9IFBJWEkuU2hhZGVyLmZyb20odmVydCwgZnJhZywgdW5pZm9ybXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBuZXcgUElYSS5NZXNoKGdlb21ldHJ5LCB0aGlzLnRleHRTaGFkZXIpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5mb250TWV0cmljcyh0aGlzLnN0eWxlLmZvbnRTaXplLCAwLjApO1xyXG4gICAgdGhpcy5sYXlvdXQudXBkYXRlKCk7XHJcblxyXG4gICAgaWYgKHRoaXMuY29uZmlnLmVkaXRhYmxlKSB7XHJcbiAgICAgIHRoaXMuc2VsZWN0LnVwZGF0ZSgpO1xyXG4gICAgICB0aGlzLmlucHV0LnVwZGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLnRleHRHZW9tZXRyeSlcclxuICAgICAgdGhpcy50ZXh0R2VvbWV0cnkuZGVzdHJveSgpO1xyXG5cclxuICAgIGlmICh0aGlzLnRleHRNZXNoKVxyXG4gICAgICB0aGlzLmNvbnRhaW5lci5yZW1vdmVDaGlsZCh0aGlzLnRleHRNZXNoKVxyXG5cclxuICAgIC8vIENyZWF0ZSB0ZXh0IGdlb21ldHJ5ICh2ZXJ0aWNlcywgdXZzLCBldGMpXHJcbiAgICB0aGlzLnRleHRHZW9tZXRyeSA9IHRoaXMuY3JlYXRlR2VvbWV0cnkoKTtcclxuXHJcbiAgICAvLyBDcmVhdGUgdGV4dCBtZXNoXHJcbiAgICB0aGlzLnRleHRNZXNoID0gdGhpcy5jcmVhdGVNZXNoKHtcclxuICAgICAgZ2VvbWV0cnkgOiB0aGlzLnRleHRHZW9tZXRyeSxcclxuICAgICAgdmVydDogdmVydGV4U2hhZGVyLFxyXG4gICAgICBmcmFnOiBmcmFnbWVudFNoYWRlclxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb250YWluZXIuYWRkQ2hpbGQodGhpcy50ZXh0TWVzaCk7XHJcbiAgfVxyXG5cclxuICBnZXQgdGV4dHVyZSgpIHtcclxuICAgIHJldHVybiB0aGlzLl90ZXh0dXJlO1xyXG4gIH1cclxuXHJcbiAgZ2V0IGZvbnQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZm9udFxyXG4gIH1cclxuXHJcbiAgZ2V0IHRleHQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fdGV4dDtcclxuICB9XHJcblxyXG4gIHNldCB0ZXh0KHZhbHVlKSB7XHJcbiAgICB0aGlzLl90ZXh0ID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgc2V0U3RhdGUobmV3U3RhdGUpIHtcclxuXHJcbiAgICBpZiAobmV3U3RhdGUgPT09IFRleHQuc3RhdGVzLmVkaXRhYmxlIHx8IG5ld1N0YXRlID09PSBUZXh0LnN0YXRlcy5zZWxlY3RpbmcpIHtcclxuICAgICAgdGhpcy5zZWxlY3QuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLnNlbGVjdC5lbmFibGVkID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCF0aGlzLmNvbmZpZy5lZGl0YWJsZSkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgeyBzdGF0ZXMgfSA9IFRleHQ7XHJcblxyXG4gICAgaWYgKCFuZXdTdGF0ZSBpbiBPYmplY3QudmFsdWVzKHN0YXRlcykpIHJldHVybjtcclxuXHJcbiAgICBzd2l0Y2ggKG5ld1N0YXRlKSB7XHJcbiAgICAgIGNhc2Ugc3RhdGVzLnJlZ3VsYXI6XHJcbiAgICAgICAgdGhpcy5zZXRSZWd1bGFyU3RhdGUoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBzdGF0ZXMuZWRpdGFibGU6XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhdGUgPT09IFRleHQuc3RhdGVzLnJlZ3VsYXIpIHtcclxuICAgICAgICAgIHRoaXMuc2V0RWRpdGFibGVTdGF0ZSgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLnN0YXRlID0gbmV3U3RhdGU7XHJcbiAgfVxyXG5cclxuICBzZXRSZWd1bGFyU3RhdGUoKSB7XHJcblxyXG4gICAgVGV4dC5jdXJyZW50RWRpdGluZ0VsZW1lbnQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMuY29udGFpbmVyLm9mZihcIm1vdXNlZG93blwiKTtcclxuICAgIHRoaXMuY29udGFpbmVyLm9mZihcIm1vdXNlbW92ZVwiKTtcclxuICAgIHRoaXMuY29udGFpbmVyLm9mZihcIm1vdXNldXBcIik7XHJcbiAgICB0aGlzLmNvbnRhaW5lci5vZmYoXCJtb3VzZXVwb3V0c2lkZVwiKTtcclxuXHJcbiAgICB0aGlzLmlucHV0LmVuYWJsZWQgPSBmYWxzZTtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lci5vbihcImNsaWNrXCIsIGUgPT4ge1xyXG4gICAgICBpZiAodGhpcy5jbGlja3NDb3VudCA9PT0gMSkge1xyXG4gICAgICAgIHRoaXMuY2xpY2tzQ291bnQgPSAwO1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoVGV4dC5zdGF0ZXMuZWRpdGFibGUpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAodGhpcy5jbGlja3NDb3VudCA9PT0gMCkge1xyXG4gICAgICAgIHRoaXMuY2xpY2tzQ291bnQrKztcclxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICB0aGlzLmNsaWNrc0NvdW50ID0gMDtcclxuICAgICAgICB9LCAzMDApXHJcbiAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gIH1cclxuXHJcbiAgc2V0RWRpdGFibGVTdGF0ZSgpIHtcclxuXHJcbiAgICAvLyBEaXNhYmxlIHByZXZpb3VzbHkgZW5hYmxlZCBmaWVsZFxyXG4gICAgaWYgKFRleHQuY3VycmVudEVkaXRpbmdFbGVtZW50ICE9IG51bGwpIHtcclxuICAgICAgVGV4dC5jdXJyZW50RWRpdGluZ0VsZW1lbnQuc2V0U3RhdGUoVGV4dC5zdGF0ZXMucmVndWxhcik7XHJcbiAgICB9XHJcbiAgICBUZXh0LmN1cnJlbnRFZGl0aW5nRWxlbWVudCA9IHRoaXM7XHJcblxyXG4gICAgLy8gRGlzYWJsZSB1bm5lY2Vzc2FyeSBldmVudHNcclxuICAgIHRoaXMuY29udGFpbmVyLm9mZihcImNsaWNrXCIpO1xyXG5cclxuICAgIHRoaXMuaW5wdXQuZW5hYmxlZCA9IHRydWU7XHJcbiAgICB0aGlzLmlucHV0LmhpZGUoKTtcclxuXHJcbiAgICAvLyBTZWxlY3QgYWxsIGNoYXJhY3RlcnNcclxuICAgIHRoaXMuc2VsZWN0LnNldFJhbmdlKDAsdGhpcy50ZXh0Lmxlbmd0aCAtIDEpO1xyXG4gICAgdGhpcy5pbnB1dC5pbnB1dEVsZW1lbnQuZm9jdXMoKTtcclxuXHJcbiAgICB0aGlzLmNvbnRhaW5lci5vbihcIm1vdXNlZG93blwiLCBlID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShUZXh0LnN0YXRlcy5zZWxlY3RpbmcpO1xyXG4gICAgICB0aGlzLnNlbGVjdC5vbk1vdXNlRG93bihlKTtcclxuICAgICAgdGhpcy5pbnB1dC5zaG93KCk7XHJcbiAgICAgIHRoaXMuaW5wdXQudXBkYXRlKGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb250YWluZXIub24oXCJtb3VzZW1vdmVcIiwgZSA9PiB7XHJcbiAgICAgIGNvbnN0IHttb3ZlbWVudFgsIG1vdmVtZW50WX0gPSBlLmRhdGEub3JpZ2luYWxFdmVudDtcclxuICAgICAgaWYgKG1vdmVtZW50WCA9PT0gMCAmJiBtb3ZlbWVudFkgPT09IDApIHJldHVybjtcclxuXHJcbiAgICAgIGlmICh0aGlzLnN0YXRlID09PSBUZXh0LnN0YXRlcy5zZWxlY3RpbmcpIHtcclxuICAgICAgICB0aGlzLnNlbGVjdC5vbk1vdXNlTW92ZShlKTtcclxuICAgICAgICB0aGlzLmlucHV0LmhpZGUoKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb250YWluZXIub24oXCJtb3VzZXVwXCIsIGUgPT4ge1xyXG4gICAgICB0aGlzLnNldFN0YXRlKFRleHQuc3RhdGVzLmVkaXRhYmxlKTtcclxuICAgICAgdGhpcy5zZWxlY3Qub25Nb3VzZVVwKGUpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5jb250YWluZXIub24oXCJtb3VzZXVwb3V0c2lkZVwiLCBlID0+IHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZShUZXh0LnN0YXRlcy5lZGl0YWJsZSk7XHJcbiAgICAgIHRoaXMuc2VsZWN0Lm9uTW91c2VVcChlKTtcclxuICAgIH0pO1xyXG5cclxuICB9XHJcblxyXG4gIGluc2VydFN0cmluZyhpbmRleCwgc3RyaW5nKSB7XHJcbiAgICB0aGlzLnRleHQgPSB0aGlzLnRleHQuc3Vic3RyKDAsIGluZGV4KSArIHN0cmluZyArIHRoaXMudGV4dC5zdWJzdHIoaW5kZXgpO1xyXG4gIH1cclxuXHJcbiAgcmVtb3ZlU3RyaW5nKGluZGV4LCBsZW5ndGgpIHtcclxuICAgIGxldCBuZXdUZXh0ID0gdGhpcy50ZXh0LnNwbGl0KFwiXCIpO1xyXG4gICAgbmV3VGV4dC5zcGxpY2UoaW5kZXgsIGxlbmd0aCArIDEpO1xyXG4gICAgdGhpcy50ZXh0ID0gbmV3VGV4dC5qb2luKFwiXCIpO1xyXG4gIH1cclxuXHJcbiAgd3JpdGVTdHJpbmcoIHN0cmluZywgZm9udCwgZm9udF9tZXRyaWNzLCBwb3MpIHtcclxuICAgIGxldCBwcmV2X2NoYXIgPSBcIiBcIjsgIC8vIFVzZWQgdG8gY2FsY3VsYXRlIGtlcm5pbmdcclxuICAgIGxldCBjcG9zICAgICAgPSBwb3M7ICAvLyBDdXJyZW50IHBlbiBwb3NpdGlvblxyXG4gICAgbGV0IHhfbWF4ICAgICA9IDAuMDsgIC8vIE1heCB3aWR0aCAtIHVzZWQgZm9yIGJvdW5kaW5nIGJveFxyXG4gICAgbGV0IHNjYWxlICAgICA9IGZvbnRfbWV0cmljcy5jYXBTY2FsZTtcclxuXHJcbiAgICBsZXQgc3RyX3BvcyA9IDA7XHJcblxyXG4gICAgZm9yKDs7KSB7XHJcbiAgICAgIGlmICggc3RyX3BvcyA9PT0gc3RyaW5nLmxlbmd0aCApIGJyZWFrO1xyXG5cclxuICAgICAgdmFyIHNjaGFyID0gc3RyaW5nWyBzdHJfcG9zIF07XHJcbiAgICAgIHN0cl9wb3MrKztcclxuXHJcbiAgICAgIGlmICggc2NoYXIgPT09IFwiXFxuXCIgKSB7XHJcbiAgICAgICAgaWYgKCBjcG9zWzBdID4geF9tYXggKSB4X21heCA9IGNwb3NbMF07IC8vIEV4cGFuZGluZyB0aGUgYm91bmRpbmcgcmVjdFxyXG4gICAgICAgIGNwb3NbMF0gID0gcG9zWzBdO1xyXG4gICAgICAgIGNwb3NbMV0gLT0gZm9udF9tZXRyaWNzLmxpbmVIZWlnaHQ7XHJcbiAgICAgICAgcHJldl9jaGFyID0gXCIgXCI7XHJcbiAgICAgICAgY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmICggc2NoYXIgPT09IFwiIFwiICkge1xyXG4gICAgICAgIC8vc2NoYXIgPSBcIl9cIlxyXG4gICAgICAgIC8vY3Bvc1swXSArPSBmb250LnNwYWNlX2FkdmFuY2UgKiBzY2FsZTtcclxuICAgICAgICAvL3ByZXZfY2hhciA9IFwiIFwiO1xyXG4gICAgICAgIC8vY29udGludWU7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBmb250X2NoYXIgPSBmb250LmNoYXJzWyBzY2hhciBdO1xyXG4gICAgICBpZiAoICFmb250X2NoYXIgKSB7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1YnN0aXR1dGluZyB1bmF2YWlsYWJsZSBjaGFyYWN0ZXJzIHdpdGggJz8nXHJcbiAgICAgICAgc2NoYXIgPSBcIj9cIjtcclxuICAgICAgICBmb250X2NoYXIgPSBmb250LmNoYXJzWyBcIj9cIiBdO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIga2VybiA9IGZvbnQua2VyblsgcHJldl9jaGFyICsgc2NoYXIgXTtcclxuICAgICAgaWYgKCAha2VybiApIGtlcm4gPSAwLjA7XHJcblxyXG4gICAgICAvLyBjYWxjdWxhdGluZyB0aGUgZ2x5cGggcmVjdGFuZ2xlIGFuZCBjb3B5aW5nIGl0IHRvIHRoZSB2ZXJ0ZXggYXJyYXlcclxuICAgICAgdmFyIHJlY3QgPSB0aGlzLmNoYXJSZWN0KCBjcG9zLCBmb250LCBmb250X21ldHJpY3MsIGZvbnRfY2hhciwga2VybiApO1xyXG5cclxuICAgICAgcmVjdC5wb3NpdGlvbnMubWFwKChwb3MpID0+IHRoaXMudmVydGljZXNbIHRoaXMuYXJyYXlQb3NpdGlvbnMudmVydGV4KysgXSA9IHBvcyApO1xyXG4gICAgICByZWN0LnV2cy5tYXAoKHV2KSA9PiB0aGlzLnV2c1sgdGhpcy5hcnJheVBvc2l0aW9ucy51dnMrKyBdID0gdXYgKTtcclxuICAgICAgcmVjdC5zZGZTaXplcy5tYXAoKHNkZikgPT4gdGhpcy5zZGZTaXplc1sgdGhpcy5hcnJheVBvc2l0aW9ucy5zZGYrKyBdID0gc2RmICk7XHJcblxyXG4gICAgICBwcmV2X2NoYXIgPSBzY2hhcjtcclxuICAgICAgY3BvcyA9IHJlY3QucG9zO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIHJlY3QgOiBbIHBvc1swXSwgcG9zWzFdLCB4X21heCAtIHBvc1swXSwgcG9zWzFdIC0gY3Bvc1sxXSArIGZvbnRfbWV0cmljcy5saW5lSGVpZ2h0IF0sXHJcbiAgICAgIHN0cmluZ19wb3MgOiBzdHJfcG9zLFxyXG4gICAgICAvL2FycmF5X3BvcyA6IGFycmF5X3Bvc1xyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG4gIGZvbnRNZXRyaWNzKGZvbnRTaXplLCBtb3JlTGluZUdhcCA9IDAuMikge1xyXG5cclxuICAgIGNvbnN0IHtjYXBfaGVpZ2h0LCB4X2hlaWdodCwgYXNjZW50OiBmb250QXNjZW50ICwgZGVzY2VudCwgbGluZV9nYXB9ID0gdGhpcy5mb250O1xyXG5cclxuICAgIGNvbnN0IGNhcFNjYWxlID0gdGhpcy5zdHlsZS5mb250U2l6ZSAvIGNhcF9oZWlnaHQ7XHJcbiAgICBjb25zdCBsb3dTY2FsZSA9IE1hdGgucm91bmQoIHhfaGVpZ2h0ICogY2FwU2NhbGUgKSAvIHhfaGVpZ2h0O1xyXG4gICAgY29uc3QgYXNjZW50ID0gTWF0aC5yb3VuZCggZm9udEFzY2VudCAqIGNhcFNjYWxlICk7XHJcbiAgICBsZXQgbGluZUhlaWdodCA9IE1hdGgucm91bmQoIGNhcFNjYWxlICogKCBmb250QXNjZW50ICsgZGVzY2VudCArIGxpbmVfZ2FwICkgKyBtb3JlTGluZUdhcCk7XHJcblxyXG4gICAgaWYgKHRoaXMuc3R5bGUubGluZUhlaWdodCA+IDApXHJcbiAgICAgIGxpbmVIZWlnaHQgPSB0aGlzLnN0eWxlLmxpbmVIZWlnaHQ7XHJcbiAgICBlbHNlXHJcbiAgICAgIHRoaXMuc3R5bGUubGluZUhlaWdodCA9IGxpbmVIZWlnaHQ7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgY2FwU2NhbGUgICA6IGNhcFNjYWxlLFxyXG4gICAgICBsb3dTY2FsZSAgIDogbG93U2NhbGUsXHJcbiAgICAgIGFzY2VudCAgICAgIDogYXNjZW50LFxyXG4gICAgICBsaW5lSGVpZ2h0IDogbGluZUhlaWdodFxyXG4gICAgfTtcclxuICB9XHJcblxyXG4gIGNoYXJSZWN0KCBwb3MsIGZvbnQsIGZvbnRfbWV0cmljcywgZm9udF9jaGFyLCBrZXJuID0gMC4wICkge1xyXG5cclxuICAgIC8vIExvdyBjYXNlIGNoYXJhY3RlcnMgaGF2ZSBmaXJzdCBiaXQgc2V0IGluICdmbGFncydcclxuICAgIHZhciBsb3djYXNlID0gKCBmb250X2NoYXIuZmxhZ3MgJiAxICkgPT09IDE7XHJcblxyXG4gICAgLy8gUGVuIHBvc2l0aW9uIGlzIGF0IHRoZSB0b3Agb2YgdGhlIGxpbmUsIFkgZ29lcyB1cFxyXG4gICAgdmFyIGJhc2VsaW5lID0gcG9zWzFdIC0gZm9udF9tZXRyaWNzLmFzY2VudDtcclxuXHJcbiAgICAvLyBMb3cgY2FzZSBjaGFycyB1c2UgdGhlaXIgb3duIHNjYWxlXHJcbiAgICB2YXIgc2NhbGUgPSBsb3djYXNlID8gZm9udF9tZXRyaWNzLmxvd1NjYWxlIDogZm9udF9tZXRyaWNzLmNhcFNjYWxlO1xyXG5cclxuICAgIC8vIExheWluZyBvdXQgdGhlIGdseXBoIHJlY3RhbmdsZVxyXG4gICAgdmFyIGcgICAgICA9IGZvbnRfY2hhci5yZWN0O1xyXG4gICAgdmFyIGJvdHRvbSA9IGJhc2VsaW5lIC0gc2NhbGUgKiAoIGZvbnQuZGVzY2VudCArIGZvbnQuaXkgKTtcclxuICAgIHZhciB0b3AgICAgPSBib3R0b20gICArIHNjYWxlICogKCBmb250LnJvd19oZWlnaHQgKTtcclxuICAgIHZhciBsZWZ0ICAgPSBwb3NbMF0gICArIHNjYWxlICogKCBmb250X2NoYXIuYmVhcmluZ194ICsga2VybiAtIGZvbnQuaXggKTtcclxuICAgIHZhciByaWdodCAgPSBsZWZ0ICAgICArIHNjYWxlICogKCBnWzJdIC0gZ1swXSApO1xyXG4gICAgdmFyIHAgPSBbIGxlZnQsIHRvcCwgcmlnaHQsIGJvdHRvbSBdO1xyXG5cclxuICAgIC8vIEFkdmFuY2luZyBwZW4gcG9zaXRpb25cclxuICAgIHZhciBuZXdfcG9zX3ggPSBwb3NbMF0gKyBzY2FsZSAqICggZm9udF9jaGFyLmFkdmFuY2VfeCApO1xyXG5cclxuICAgIC8vIFNpZ25lZCBkaXN0YW5jZSBmaWVsZCBzaXplIGluIHNjcmVlbiBwaXhlbHNcclxuICAgIHZhciBzZGZfc2l6ZSAgPSAyLjAgKiBmb250Lml5ICogc2NhbGU7XHJcblxyXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xyXG4gICAgICBwWzBdLCBwWzNdLCAvLyBsZWZ0IGJvdHRvbSxcclxuICAgICAgcFsyXSwgcFszXSwgLy8gcmlnaHQgYm90dG9tLFxyXG4gICAgICBwWzJdLCBwWzFdLCAvLyByaWdodCB0b3BcclxuICAgICAgcFswXSwgcFsxXSwgLy8gbGVmdCB0b3BcclxuICAgIF07XHJcblxyXG4gICAgY29uc3QgdXZzID0gW1xyXG4gICAgICBnWzBdLCBnWzFdLCAvLyBsZWZ0IHRvcFxyXG4gICAgICBnWzJdLCBnWzFdLCAvLyByaWdodCB0b3BcclxuICAgICAgZ1syXSwgZ1szXSwgLy8gcmlnaHQgYm90dG9tLFxyXG4gICAgICBnWzBdLCBnWzNdLCAvLyBsZWZ0IGJvdHRvbSxcclxuICAgIF07XHJcblxyXG4gICAgY29uc3Qgc2RmU2l6ZXMgPSBbXHJcbiAgICAgIHNkZl9zaXplLFxyXG4gICAgICBzZGZfc2l6ZSxcclxuICAgICAgc2RmX3NpemUsXHJcbiAgICAgIHNkZl9zaXplLFxyXG4gICAgXTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBwb3NpdGlvbnMsXHJcbiAgICAgIHV2cyxcclxuICAgICAgc2RmU2l6ZXMsXHJcbiAgICAgIHBvczogWyBuZXdfcG9zX3gsIHBvc1sxXSBdXHJcbiAgICB9O1xyXG5cclxuICAgIC8vcmV0dXJuIHsgdmVydGljZXMgOiB2ZXJ0aWNlcywgcG9zIDogWyBuZXdfcG9zX3gsIHBvc1sxXSBdIH07XHJcbiAgfVxyXG5cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGV4dDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2luZGV4LmpzIiwiXHJcbmNsYXNzIFRleHRMYXlvdXQge1xyXG5cclxuICB0ZXh0ID0gXCJcIjtcclxuICBmb250ID0gbnVsbDtcclxuICBtZXRyaWNzID0gbnVsbDtcclxuICBmb250U2l6ZSA9IDIwO1xyXG4gIGFsaWduID0gXCJsZWZ0XCI7XHJcbiAgc3RhcnRYID0gMDtcclxuICBzdGFydFkgPSAwO1xyXG4gIHdyYXBwZXJXaWR0aCA9IDEwMDtcclxuICB3cmFwV29yZHMgPSBmYWxzZTtcclxuICB3b3Jkc01ldHJpY3MgPSBbXTtcclxuICBsZXR0ZXJzQ291bnQgPSAwO1xyXG4gIGhlaWdodCA9IDA7XHJcbiAgbGluZXNDb3VudCA9IDA7XHJcbiAgbGluZUhlaWdodCA9IDA7XHJcbiAgZ2x5cGhzID0gW107XHJcbiAgb3duZXIgPSBudWxsO1xyXG5cclxuXHJcbiAgY29uc3RydWN0b3Iob3duZXIsIGNvbmZpZykge1xyXG5cclxuICAgIHRoaXMub3duZXIgPSBvd25lcjtcclxuICAgIHRoaXMudGV4dCA9IG93bmVyLnRleHQ7XHJcbiAgICB0aGlzLmZvbnQgPSBvd25lci5mb250O1xyXG4gICAgdGhpcy5mb250U2l6ZSA9IGNvbmZpZy5mb250U2l6ZTtcclxuICAgIHRoaXMud3JhcFdvcmRzID0gY29uZmlnLndyYXBXb3JkcztcclxuICAgIHRoaXMud3JhcHBlcldpZHRoID0gY29uZmlnLndyYXBwZXJXaWR0aDtcclxuICAgIHRoaXMubGluZUhlaWdodCA9IGNvbmZpZy5saW5lSGVpZ2h0O1xyXG4gICAgdGhpcy5hbGlnbiA9IGNvbmZpZy5hbGlnbjtcclxuICAgIHRoaXMudXBkYXRlKCk7XHJcblxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy50ZXh0ID0gdGhpcy5vd25lci50ZXh0O1xyXG4gICAgdGhpcy5mb250ID0gdGhpcy5vd25lci5mb250O1xyXG5cclxuICAgIHRoaXMubGV0dGVyc0NvdW50ID0gdGhpcy50ZXh0LnNwbGl0KFwiXCIpLmxlbmd0aDtcclxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMuZm9udE1ldHJpY3ModGhpcy5mb250LCAwLjApO1xyXG4gICAgdGhpcy5zdGFydFkgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcclxuICAgIHRoaXMuY2FsY3VsYXRlV29yZHNQb3NpdGlvbnMoKTtcclxuXHJcbiAgICB0aGlzLmdseXBocyA9IFtdO1xyXG5cclxuICAgIHRoaXMud29yZHNNZXRyaWNzLmZvckVhY2ggKHdvcmQgPT4ge1xyXG4gICAgICB0aGlzLmdldEdseXBocyh3b3JkLndvcmQsIFt3b3JkLngsIHdvcmQueV0pO1xyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBmb250TWV0cmljcyhmb250U2l6ZSwgbW9yZUxpbmVHYXAgPSAwLjIpIHtcclxuXHJcbiAgICBjb25zdCB7Y2FwX2hlaWdodCwgeF9oZWlnaHQsIGFzY2VudDogZm9udEFzY2VudCAsIGRlc2NlbnQsIGxpbmVfZ2FwfSA9IHRoaXMuZm9udDtcclxuXHJcbiAgICBjb25zdCBjYXBTY2FsZSA9IHRoaXMuZm9udFNpemUgLyBjYXBfaGVpZ2h0O1xyXG4gICAgY29uc3QgbG93U2NhbGUgPSBNYXRoLnJvdW5kKCB4X2hlaWdodCAqIGNhcFNjYWxlICkgLyB4X2hlaWdodDtcclxuICAgIGNvbnN0IGFzY2VudCA9IE1hdGgucm91bmQoIGZvbnRBc2NlbnQgKiBjYXBTY2FsZSApO1xyXG4gICAgbGV0IGxpbmVIZWlnaHQgPSBNYXRoLnJvdW5kKCBjYXBTY2FsZSAqICggZm9udEFzY2VudCArIGRlc2NlbnQgKyBsaW5lX2dhcCApICsgbW9yZUxpbmVHYXAgKTtcclxuXHJcbiAgICBpZiAodGhpcy5saW5lSGVpZ2h0ID4gMClcclxuICAgICAgbGluZUhlaWdodCA9IHRoaXMubGluZUhlaWdodDtcclxuICAgIGVsc2VcclxuICAgICAgdGhpcy5saW5lSGVpZ2h0ID0gbGluZUhlaWdodDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBjYXBTY2FsZSAgIDogY2FwU2NhbGUsXHJcbiAgICAgIGxvd1NjYWxlICAgOiBsb3dTY2FsZSxcclxuICAgICAgYXNjZW50ICAgICAgOiBhc2NlbnQsXHJcbiAgICAgIGxpbmVIZWlnaHQgOiBsaW5lSGVpZ2h0XHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY2hhclJlY3QoIHBvcywgZm9udF9jaGFyLCBrZXJuID0gMC4wICkge1xyXG5cclxuICAgIC8vIExvdyBjYXNlIGNoYXJhY3RlcnMgaGF2ZSBmaXJzdCBiaXQgc2V0IGluICdmbGFncydcclxuICAgIHZhciBsb3djYXNlID0gKCBmb250X2NoYXIuZmxhZ3MgJiAxICkgPT09IDE7XHJcblxyXG4gICAgLy8gUGVuIHBvc2l0aW9uIGlzIGF0IHRoZSB0b3Agb2YgdGhlIGxpbmUsIFkgZ29lcyB1cFxyXG4gICAgdmFyIGJhc2VsaW5lID0gcG9zWzFdIC0gdGhpcy5tZXRyaWNzLmFzY2VudDtcclxuXHJcbiAgICAvLyBMb3cgY2FzZSBjaGFycyB1c2UgdGhlaXIgb3duIHNjYWxlXHJcbiAgICB2YXIgc2NhbGUgPSBsb3djYXNlID8gdGhpcy5tZXRyaWNzLmxvd1NjYWxlIDogdGhpcy5tZXRyaWNzLmNhcFNjYWxlO1xyXG5cclxuICAgIC8vIExheWluZyBvdXQgdGhlIGdseXBoIHJlY3RhbmdsZVxyXG4gICAgdmFyIGcgICAgICA9IGZvbnRfY2hhci5yZWN0O1xyXG4gICAgdmFyIGJvdHRvbSA9IGJhc2VsaW5lIC0gc2NhbGUgKiAoIHRoaXMuZm9udC5kZXNjZW50ICsgdGhpcy5mb250Lml5ICk7XHJcbiAgICB2YXIgdG9wICAgID0gYm90dG9tICAgKyBzY2FsZSAqICggdGhpcy5mb250LnJvd19oZWlnaHQgKTtcclxuICAgIHZhciBsZWZ0ICAgPSBwb3NbMF0gICArIHNjYWxlICogKCBmb250X2NoYXIuYmVhcmluZ194ICsga2VybiAtIHRoaXMuZm9udC5peCApO1xyXG4gICAgdmFyIHJpZ2h0ICA9IGxlZnQgICAgICsgc2NhbGUgKiAoIGdbMl0gLSBnWzBdICk7XHJcbiAgICB2YXIgcCA9IFsgbGVmdCwgdG9wLCByaWdodCwgYm90dG9tIF07XHJcblxyXG4gICAgLy8gQWR2YW5jaW5nIHBlbiBwb3NpdGlvblxyXG4gICAgdmFyIG5ld19wb3NfeCA9IHBvc1swXSArIHNjYWxlICogKCBmb250X2NoYXIuYWR2YW5jZV94ICk7XHJcblxyXG4gICAgY29uc3QgcG9zaXRpb25zID0gW1xyXG4gICAgICBwWzBdLCBwWzNdLCAvLyBsZWZ0IGJvdHRvbSxcclxuICAgICAgcFsyXSwgcFszXSwgLy8gcmlnaHQgYm90dG9tLFxyXG4gICAgICBwWzJdLCBwWzFdLCAvLyByaWdodCB0b3BcclxuICAgICAgcFswXSwgcFsxXSwgLy8gbGVmdCB0b3BcclxuICAgIF07XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgcG9zaXRpb25zLFxyXG4gICAgICBwb3M6IFsgbmV3X3Bvc194LCBwb3NbMV0gXSxcclxuICAgICAgbWV0cmljczoge3g6IHBvc1swXSwgeTogcG9zWzFdLCB3aWR0aDogc2NhbGUgKiBmb250X2NoYXIuYWR2YW5jZV94IH1cclxuICAgIH07XHJcbiAgfVxyXG5cclxuICBnZXRTdHJpbmdTaXplKHN0cmluZykge1xyXG5cclxuICAgIGxldCB3aWR0aCA9IDA7XHJcbiAgICBsZXQgaGVpZ2h0ID0gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQ7XHJcblxyXG4gICAgY29uc3QgY2hhcnMgPSBbLi4uc3RyaW5nXTtcclxuXHJcbiAgICAvLyBJdGVyYXRlIHRob3VnaHQgdGhlIGNoYXJzLCBjYWxjdWxhdGUgcG9zaXRpb25cclxuICAgIGNoYXJzLmZvckVhY2goY2hhciA9PiB7XHJcbiAgICAgIGxldCBmb250X2NoYXIgPSB0aGlzLmZvbnQuY2hhcnNbIGNoYXIgXTtcclxuXHJcbiAgICAgIC8qaWYgKGNoYXIgPT09IFwiIFwiKSB7XHJcbiAgICAgICAgd2lkdGggKz0gdGhpcy5mb250LnNwYWNlX2FkdmFuY2UgKiB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgICB9Ki9cclxuXHJcbiAgICAgIC8vIEdldCBjaGFyIG1ldHJpY3NcclxuICAgICAgbGV0IGNoYXJSZWN0ID0gdGhpcy5jaGFyUmVjdChbd2lkdGgsMF0sIGZvbnRfY2hhciwgMC4yKTtcclxuICAgICAgd2lkdGggPSBjaGFyUmVjdC5wb3NbMF07XHJcblxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHt3aWR0aCwgaGVpZ2h0fTtcclxuXHJcbiAgfVxyXG5cclxuICBjYWxjdWxhdGVXb3Jkc1Bvc2l0aW9ucygpIHtcclxuXHJcbiAgICBjb25zdCB3b3JkcyA9IHRoaXMudGV4dC5zcGxpdChcIiBcIik7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3b3Jkcy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgd29yZHNbaV0gPSB3b3Jkc1tpXSArIFwiIFwiO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMud29yZHNNZXRyaWNzID0gW107XHJcblxyXG4gICAgLy8gSW5pdGlhbCBwb3NpdGlvblxyXG4gICAgbGV0IHggPSB0aGlzLnN0YXJ0WDtcclxuICAgIGxldCB5ID0gdGhpcy5zdGFydFk7XHJcblxyXG4gICAgLy8gQ2FsY3VsYXRlIHdvcmRzIHBvc2l0aW9ucyBvbiBsaW5lc1xyXG4gICAgd29yZHMuZm9yRWFjaCh3b3JkID0+IHtcclxuICAgICAgY29uc3Qgd29yZFNpemUgPSB0aGlzLmdldFN0cmluZ1NpemUod29yZCk7XHJcbiAgICAgIGlmICh4ICsgd29yZFNpemUud2lkdGggPiB0aGlzLnN0YXJ0WCArIHRoaXMud3JhcHBlcldpZHRoICYmIHRoaXMud3JhcFdvcmRzKSB7XHJcbiAgICAgICAgeCA9IHRoaXMuc3RhcnRYO1xyXG4gICAgICAgIHkgKz0gd29yZFNpemUuaGVpZ2h0O1xyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLndvcmRzTWV0cmljcy5wdXNoKHsuLi53b3JkU2l6ZSwgeCwgeSwgd29yZH0pO1xyXG5cclxuICAgICAgLy94ICs9IHdvcmRTaXplLndpZHRoICsgdGhpcy5mb250LnNwYWNlX2FkdmFuY2UgKiB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XHJcbiAgICAgIHggKz0gd29yZFNpemUud2lkdGg7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBDYWxjdWxhdGUgbGluZXMgY291bnRcclxuICAgIHRoaXMubGluZXNDb3VudCA9ICh5IC0gdGhpcy5zdGFydFkpIC8gdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgKyAxO1xyXG4gICAgdGhpcy5oZWlnaHQgPSB0aGlzLmxpbmVzQ291bnQgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcclxuXHJcbiAgICAvLyBDaGFuZ2UgYWxpZ24gVE9ETyBvcHRpbWlzZVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxpbmVzQ291bnQ7ICsraSkge1xyXG4gICAgICBjb25zdCB3b3Jkc09uTGluZSA9IHRoaXMud29yZHNNZXRyaWNzLmZpbHRlcih3b3JkID0+IHdvcmQueSA9PT0gdGhpcy5zdGFydFkgKyAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSlcclxuXHJcbiAgICAgIGNvbnN0IGxhc3RXb3JkID0gd29yZHNPbkxpbmVbd29yZHNPbkxpbmUubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICBpZiAobGFzdFdvcmQpIHtcclxuICAgICAgICBjb25zdCBmcmVlU3BhY2UgPSAodGhpcy5zdGFydFggKyB0aGlzLndyYXBwZXJXaWR0aCkgLSAobGFzdFdvcmQueCArIGxhc3RXb3JkLndpZHRoKTtcclxuXHJcbiAgICAgICAgbGV0IGxlZnRPZmZzZXQgPSAwO1xyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuYWxpZ24pIHtcclxuICAgICAgICAgIGNhc2UgXCJjZW50ZXJcIjpcclxuICAgICAgICAgICAgbGVmdE9mZnNldCA9IGZyZWVTcGFjZSAvIDI7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgY2FzZSBcInJpZ2h0XCI6XHJcbiAgICAgICAgICAgIGxlZnRPZmZzZXQgPSBmcmVlU3BhY2U7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIH1cclxuICAgICAgICB0aGlzLndvcmRzTWV0cmljcy5mb3JFYWNoKHdvcmQgPT4ge1xyXG4gICAgICAgICAgaWYgKHdvcmQueSA9PT0gdGhpcy5zdGFydFkgKyAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSkge1xyXG4gICAgICAgICAgICB3b3JkLnggKz0gbGVmdE9mZnNldDtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBnZXRHbHlwaHMoIHN0cmluZywgcG9zKSB7XHJcbiAgICBsZXQgcHJldl9jaGFyID0gXCIgXCI7ICAvLyBVc2VkIHRvIGNhbGN1bGF0ZSBrZXJuaW5nXHJcbiAgICBsZXQgY3BvcyAgICAgID0gcG9zOyAgLy8gQ3VycmVudCBwZW4gcG9zaXRpb25cclxuICAgIGxldCB4X21heCAgICAgPSAwLjA7ICAvLyBNYXggd2lkdGggLSB1c2VkIGZvciBib3VuZGluZyBib3hcclxuICAgIGxldCBzY2FsZSAgICAgPSB0aGlzLm1ldHJpY3MuY2FwU2NhbGU7XHJcblxyXG4gICAgbGV0IHN0cl9wb3MgPSAwO1xyXG5cclxuICAgIGZvcig7Oykge1xyXG4gICAgICBpZiAoIHN0cl9wb3MgPT09IHN0cmluZy5sZW5ndGggKSBicmVhaztcclxuXHJcbiAgICAgIHZhciBzY2hhciA9IHN0cmluZ1sgc3RyX3BvcyBdO1xyXG4gICAgICBzdHJfcG9zKys7XHJcblxyXG4gICAgICBpZiAoIHNjaGFyID09PSBcIlxcblwiICkge1xyXG4gICAgICAgIGlmICggY3Bvc1swXSA+IHhfbWF4ICkgeF9tYXggPSBjcG9zWzBdOyAvLyBFeHBhbmRpbmcgdGhlIGJvdW5kaW5nIHJlY3RcclxuICAgICAgICBjcG9zWzBdICA9IHBvc1swXTtcclxuICAgICAgICBjcG9zWzFdIC09IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0O1xyXG4gICAgICAgIHByZXZfY2hhciA9IFwiIFwiO1xyXG4gICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoIHNjaGFyID09PSBcIiBcIiApIHtcclxuICAgICAgICAvL3NjaGFyID0gXCJfXCJcclxuICAgICAgICAvL2Nwb3NbMF0gKz0gdGhpcy5mb250LnNwYWNlX2FkdmFuY2UgKiBzY2FsZTtcclxuICAgICAgICBwcmV2X2NoYXIgPSBcIiBcIjtcclxuICAgICAgICAvL2NvbnRpbnVlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICB2YXIgZm9udF9jaGFyID0gdGhpcy5mb250LmNoYXJzWyBzY2hhciBdO1xyXG4gICAgICBpZiAoICFmb250X2NoYXIgKSB7ICAgICAgICAgICAgICAgICAgICAgICAgIC8vIFN1YnN0aXR1dGluZyB1bmF2YWlsYWJsZSBjaGFyYWN0ZXJzIHdpdGggJz8nXHJcbiAgICAgICAgc2NoYXIgPSBcIj9cIjtcclxuICAgICAgICBmb250X2NoYXIgPSB0aGlzLmZvbnQuY2hhcnNbIFwiP1wiIF07XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHZhciBrZXJuID0gdGhpcy5mb250Lmtlcm5bIHByZXZfY2hhciArIHNjaGFyIF07XHJcbiAgICAgIGlmICggIWtlcm4gKSBrZXJuID0gMC4wO1xyXG5cclxuICAgICAgLy8gY2FsY3VsYXRpbmcgdGhlIGdseXBoIHJlY3RhbmdsZSBhbmQgY29weWluZyBpdCB0byB0aGUgdmVydGV4IGFycmF5XHJcbiAgICAgIHZhciByZWN0ID0gdGhpcy5jaGFyUmVjdCggY3BvcywgZm9udF9jaGFyLCBrZXJuICk7XHJcblxyXG4gICAgICBwcmV2X2NoYXIgPSBzY2hhcjtcclxuICAgICAgY3BvcyA9IHJlY3QucG9zO1xyXG5cclxuICAgICAgdGhpcy5nbHlwaHMucHVzaCh7XHJcbiAgICAgICAgbGV0dGVyOiBzY2hhcixcclxuICAgICAgICB2ZXJ0aWNlczogcmVjdC5wb3NpdGlvbnMsXHJcbiAgICAgICAgcG9zaXRpb246IHJlY3QucG9zLFxyXG4gICAgICAgIG1ldHJpY3M6IHJlY3QubWV0cmljc1xyXG4gICAgICB9KTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBUZXh0TGF5b3V0O1xyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvbGF5b3V0LmpzIiwiY29uc3QgY3JlYXRlSW5kaWNlcyA9IHJlcXVpcmUoXCJxdWFkLWluZGljZXNcIilcclxuY29uc3QgdmVydGV4U2hhZGVyID0gcmVxdWlyZShcIi4vc2hhZGVycy9zZWxlY3QvdmVydC5nbHNsXCIpO1xyXG5jb25zdCBmcmFnbWVudFNoYWRlciA9IHJlcXVpcmUoXCIuL3NoYWRlcnMvc2VsZWN0L2ZyYWcuZ2xzbFwiKTtcclxuXHJcbmNsYXNzIFNlbGVjdCB7XHJcblxyXG4gIHJhbmdlID0gWzAsMF07XHJcbiAgbWV0cmljcyA9IG51bGw7XHJcbiAgbGF5b3V0ID0gbnVsbDtcclxuICBkaXJ0eSA9IGZhbHNlO1xyXG4gIGluZGV4QnVmZmVyID0gZmFsc2U7XHJcbiAgb3duZXIgPSBudWxsO1xyXG4gIF9lbmFibGVkID0gZmFsc2U7XHJcblxyXG4gIHNldCBlbmFibGVkKHZhbHVlKSB7XHJcbiAgICB0aGlzLl9lbmFibGVkID0gdmFsdWU7XHJcbiAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgfVxyXG5cclxuICBnZXQgZW5hYmxlZCgpIHtcclxuICAgIHJldHVybiB0aGlzLl9lbmFibGVkXHJcbiAgfVxyXG5cclxuICBjb25zdHJ1Y3Rvcihvd25lcikge1xyXG4gICAgdGhpcy5vd25lciA9IG93bmVyLmNvbnRhaW5lcjtcclxuICAgIHRoaXMubWV0cmljcyA9IG93bmVyLm1ldHJpY3M7XHJcbiAgICB0aGlzLmxheW91dCA9IG93bmVyLmxheW91dDtcclxuICB9XHJcblxyXG4gIGNyZWF0ZUdlb21ldHJ5KCkge1xyXG5cclxuICAgIC8vIEFycmF5cyBmb3IgdmVydGljZXMsIHV2cyBhbmQgc2RmXHJcbiAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmxheW91dC5sZXR0ZXJzQ291bnQgKiA0ICogMik7XHJcblxyXG4gICAgdGhpcy5idWlsZFZlcnRpY2VzKCk7XHJcblxyXG4gICAgLy8gUHJlcGFyZSBpbmRpY2VzXHJcbiAgICB0aGlzLmluZGljZXMgPSBjcmVhdGVJbmRpY2VzKHtcclxuICAgICAgY2xvY2t3aXNlOiB0cnVlLFxyXG4gICAgICB0eXBlOiAndWludDE2JyxcclxuICAgICAgY291bnQ6IHRoaXMubGF5b3V0LmxpbmVzQ291bnRcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIEZpbGwgdXAgdGhlIGdlb21ldHJ5XHJcbiAgICByZXR1cm4gbmV3IFBJWEkuR2VvbWV0cnkoKVxyXG4gICAgICAgIC5hZGRBdHRyaWJ1dGUoJ2FWZXJ0ZXhQb3NpdGlvbicsIC8vIHRoZSBhdHRyaWJ1dGUgbmFtZVxyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzLCAvLyB4LCB5XHJcbiAgICAgICAgICAgIDIpIC8vIHRoZSBzaXplIG9mIHRoZSBhdHRyaWJ1dGVcclxuICAgICAgICAuYWRkSW5kZXgodGhpcy5pbmRpY2VzKVxyXG4gIH1cclxuXHJcbiAgY3JlYXRlTWVzaCh7Z2VvbWV0cnkgPSBuZXcgUElYSS5HZW9tZXRyeSgpLCB2ZXJ0ID0gXCJcIiwgZnJhZyA9IFwiXCJ9KSB7XHJcbiAgICAvLyBQYXNzIHVuaWZvcm1zIHRvIHRoZSBzaGFkZXJcclxuXHJcbiAgICBjb25zdCB1bmlmb3JtcyA9IHtcclxuICAgICAgYmdfY29sb3I6IFBJWEkudXRpbHMuaGV4MnJnYih0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LmJhY2tncm91bmRDb2xvci5yZXBsYWNlKFwiI1wiLCBcIjB4XCIpKSxcclxuICAgIH07XHJcblxyXG4gICAgaWYgKCF0aGlzLnNoYWRlcikge1xyXG4gICAgICB0aGlzLnNoYWRlciA9IFBJWEkuU2hhZGVyLmZyb20odmVydCwgZnJhZywgdW5pZm9ybXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuc2hhZGVyLnVuaWZvcm1zLmVuYWJsZWQgPSB0aGlzLmVuYWJsZWQgPyAxLjAgOiAwLjBcclxuXHJcbiAgICByZXR1cm4gbmV3IFBJWEkuTWVzaChnZW9tZXRyeSwgdGhpcy5zaGFkZXIpO1xyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG4gICAgdGhpcy5tZXRyaWNzID0gdGhpcy5vd25lci5hd2Vzb21lVGV4dC5tZXRyaWNzO1xyXG4gICAgdGhpcy5sYXlvdXQgPSB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LmxheW91dDtcclxuXHJcbiAgICBpZiAodGhpcy5tZXNoKVxyXG4gICAgICB0aGlzLm93bmVyLnJlbW92ZUNoaWxkKHRoaXMubWVzaCk7XHJcblxyXG4gICAgaWYgKHRoaXMucmFuZ2VbMV0gIT09IG51bGwpIHtcclxuICAgICAgY29uc3QgZ2VvbWV0cnkgPSB0aGlzLmNyZWF0ZUdlb21ldHJ5KCk7XHJcbiAgICAgIHRoaXMubWVzaCA9IHRoaXMuY3JlYXRlTWVzaCh7XHJcbiAgICAgICAgZ2VvbWV0cnksXHJcbiAgICAgICAgdmVydDogdmVydGV4U2hhZGVyLFxyXG4gICAgICAgIGZyYWc6IGZyYWdtZW50U2hhZGVyXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgdGhpcy5tZXNoLmJsZW5kTW9kZSA9IFBJWEkuQkxFTkRfTU9ERVMuTk9STUFMX05QTTtcclxuXHJcbiAgICAgIHRoaXMub3duZXIuYWRkQ2hpbGQodGhpcy5tZXNoKTtcclxuICAgIH1cclxuXHJcbiAgfVxyXG5cclxuICBzZXRSYW5nZShzdGFydCA9IG51bGwsIGVuZCA9IG51bGwpIHtcclxuXHJcbiAgICBjb25zdCB7Z2x5cGhzfSA9IHRoaXMub3duZXIuYXdlc29tZVRleHQubGF5b3V0O1xyXG5cclxuICAgIGlmIChzdGFydCA9PT0gbnVsbCkgc3RhcnQgPSB0aGlzLnJhbmdlWzBdO1xyXG4gICAgaWYgKGVuZCA9PT0gbnVsbCkgZW5kID0gdGhpcy5yYW5nZVsxXTtcclxuXHJcbiAgICBpZiAoc3RhcnQgPCAwKSBzdGFydCA9IDA7XHJcbiAgICBpZiAoZW5kIDwgMCkgZW5kID0gMDtcclxuXHJcbiAgICBpZiAoc3RhcnQgPiBnbHlwaHMubGVuZ3RoIC0xKXN0YXJ0ID0gZ2x5cGhzLmxlbmd0aCAtIDE7XHJcbiAgICBpZiAoZW5kID4gZ2x5cGhzLmxlbmd0aCAtIDEpIGVuZCA9IGdseXBocy5sZW5ndGggLSAxO1xyXG5cclxuICAgIGlmIChlbmQgPT09IGZhbHNlKSBlbmQgPSBudWxsO1xyXG5cclxuICAgIHRoaXMucmFuZ2UgPSBbc3RhcnQsIGVuZF07XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgYnVpbGRWZXJ0aWNlcygpIHtcclxuXHJcbiAgICB0aGlzLm1ldHJpY3MgPSB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LmxheW91dC5tZXRyaWNzO1xyXG4gICAgLy8gU2VsZWN0IHJhbmdlXHJcbiAgICBsZXQgc3RhcnQgPSB0aGlzLmxheW91dC5nbHlwaHNbTWF0aC5taW4uYXBwbHkobnVsbCx0aGlzLnJhbmdlKV07XHJcbiAgICBsZXQgZW5kID0gdGhpcy5sYXlvdXQuZ2x5cGhzW01hdGgubWF4LmFwcGx5KG51bGwsdGhpcy5yYW5nZSldO1xyXG5cclxuXHJcbiAgICAvLyBJdGVyYXRlIHRob3VnaHQgYWxsIGxpbmVzXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGF5b3V0LmxpbmVzQ291bnQ7ICsraSkge1xyXG4gICAgICBsZXQgbGV0dGVyQ291bnQgPSAwOyAvLyBsZXR0ZXJzIHBhc3NlZFxyXG4gICAgICBsZXQgZmlyc3RMZXR0ZXIgPSBudWxsOyAvLyBmaXJzdCBsZXR0ZXIgb24gdGhpcyBsaW5lXHJcbiAgICAgIGxldCBsYXN0TGV0dGVyID0gbnVsbDsgLy8gbGFzdCBsZXR0ZXIgb24gdGhpcyBsaW5lXHJcblxyXG5cclxuICAgICAgaWYgKGkgKiB0aGlzLm1ldHJpY3MubGluZUhlaWdodCArIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0IDwgc3RhcnQucG9zaXRpb25bMV0pIGNvbnRpbnVlO1xyXG4gICAgICBpZiAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgdGhpcy5tZXRyaWNzLmxpbmVIZWlnaHQgPiBlbmQucG9zaXRpb25bMV0pIGNvbnRpbnVlO1xyXG5cclxuICAgICAgLy8gVGFrZSBldmVyeSB3b3JkLCBpZiBpdCdzIGxhc3Qgb3IgZmlyc3Qgb24gbGluZSAtIGNoYW5nZSBib3VuZHMgbGV0dGVyc1xyXG4gICAgICB0aGlzLmxheW91dC53b3Jkc01ldHJpY3MubWFwKHdvcmQgPT4ge1xyXG5cclxuICAgICAgICBpZiAod29yZC55ID09PSB0aGlzLmxheW91dC5zdGFydFkgKyAoaSAqIHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSkge1xyXG4gICAgICAgICAgaWYgKGZpcnN0TGV0dGVyID09PSBudWxsKSBmaXJzdExldHRlciA9IGxldHRlckNvdW50O1xyXG4gICAgICAgICAgbGFzdExldHRlciA9IGxldHRlckNvdW50ICsgd29yZC53b3JkLmxlbmd0aCAtIDE7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBsZXR0ZXJDb3VudCArPSB3b3JkLndvcmQubGVuZ3RoO1xyXG4gICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgLy8gQm91bmRzIGxldHRlcnMgZm9yIGN1cnJlbnQgbGluZVxyXG4gICAgICBsZXQgc3RhcnRMaW5lTGV0dGVyID0gdGhpcy5sYXlvdXQuZ2x5cGhzW2ZpcnN0TGV0dGVyXTtcclxuICAgICAgbGV0IGVuZExpbmVMZXR0ZXIgPSB0aGlzLmxheW91dC5nbHlwaHNbbGFzdExldHRlcl07XHJcblxyXG4gICAgICAvLyBJZiB0aGUgc3RhcnQgb3IgZW5kIHJhbmdlIGlzIG9uIHRoaXMgbGluZSwgY2hhbmdlIGJvdW5kcyBmb3IgdGhlbVxyXG4gICAgICBpZiAoc3RhcnQucG9zaXRpb25bMV0gPT09ICBzdGFydExpbmVMZXR0ZXIucG9zaXRpb25bMV0pIHN0YXJ0TGluZUxldHRlciA9IHN0YXJ0O1xyXG4gICAgICBpZiAoZW5kLnBvc2l0aW9uWzFdID09PSBlbmRMaW5lTGV0dGVyLnBvc2l0aW9uWzFdKSBlbmRMaW5lTGV0dGVyID0gZW5kO1xyXG5cclxuICAgICAgLy8gV2UgdXNlIG9mZnNldCB0byBhdm9pZCBzZWxlY3RzIG92ZXJsYXBwaW5nXHJcbiAgICAgIGNvbnN0IG9mZnNldCA9ICh0aGlzLm1ldHJpY3MubGluZUhlaWdodCAtIHRoaXMubWV0cmljcy5hc2NlbnQpIC8gMjtcclxuXHJcbiAgICAgIC8vIEFkZCBwb3NpdGlvbnMgdG8gYXJyYXlcclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpXSA9IHN0YXJ0TGluZUxldHRlci52ZXJ0aWNlc1swXTtcclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgMV0gPSBzdGFydExpbmVMZXR0ZXIudmVydGljZXNbMV0gKyBvZmZzZXQ7XHJcblxyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyAyXSA9IGVuZExpbmVMZXR0ZXIudmVydGljZXNbMl07XHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDNdID0gZW5kTGluZUxldHRlci52ZXJ0aWNlc1szXSAgICsgb2Zmc2V0O1xyXG5cclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgNF0gPSBlbmRMaW5lTGV0dGVyLnZlcnRpY2VzWzRdO1xyXG4gICAgICB0aGlzLnZlcnRpY2VzWyhpICogOCkgKyA1XSA9IGVuZExpbmVMZXR0ZXIudmVydGljZXNbNV0gIC0gb2Zmc2V0O1xyXG5cclxuICAgICAgdGhpcy52ZXJ0aWNlc1soaSAqIDgpICsgNl0gPSBzdGFydExpbmVMZXR0ZXIudmVydGljZXNbNl07XHJcbiAgICAgIHRoaXMudmVydGljZXNbKGkgKiA4KSArIDddID0gc3RhcnRMaW5lTGV0dGVyLnZlcnRpY2VzWzddICAtIG9mZnNldDtcclxuXHJcbiAgICB9XHJcblxyXG4gIH1cclxuXHJcbiAgZ2V0Q2xvc2VzdEdseXBoKHgsIHkpIHtcclxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMub3duZXIuYXdlc29tZVRleHQubWV0cmljcztcclxuICAgIHRoaXMubGF5b3V0ID0gdGhpcy5vd25lci5hd2Vzb21lVGV4dC5sYXlvdXQ7XHJcblxyXG4gICAgY29uc3QgeyBnbHlwaHMgfSA9IHRoaXMub3duZXIuYXdlc29tZVRleHQubGF5b3V0O1xyXG5cclxuICAgIGNvbnN0IGxpbmVIZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodDtcclxuICAgIGNvbnN0IHNlbGVjdGluZ0xpbmUgPSBNYXRoLmZsb29yKHkgLyB0aGlzLm1ldHJpY3MubGluZUhlaWdodCk7XHJcbiAgICBjb25zdCBzZWxlY3RpbmdMaW5lWSA9IHNlbGVjdGluZ0xpbmUgKiBsaW5lSGVpZ2h0O1xyXG4gICAgbGV0IGxhc3RHbHlwaE9uTGluZSA9IGdseXBoc1tnbHlwaHMubGVuZ3RoIC0gMV07XHJcbiAgICBsZXQgZmlyc3RHbHlwaE9uTGluZSA9IG51bGw7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnbHlwaHMubGVuZ3RoIDsgKytpKSB7XHJcblxyXG4gICAgICBsZXQgZ2x5cGggPSBnbHlwaHNbaV07XHJcblxyXG4gICAgICBpZiAoZ2x5cGgubWV0cmljcy55ID09PSBzZWxlY3RpbmdMaW5lWSArIGxpbmVIZWlnaHQpIHtcclxuICAgICAgICBsYXN0R2x5cGhPbkxpbmUgPSBnbHlwaDtcclxuICAgICAgICBpZiAoeCA8IGdseXBoLm1ldHJpY3MueCArIGdseXBoLm1ldHJpY3Mud2lkdGggLyAyKSB7XHJcbiAgICAgICAgICBpZiAoaSA9PT0gMCkgcmV0dXJuIC0xO1xyXG5cclxuICAgICAgICAgIHJldHVybiBnbHlwaHNbaSAtIDFdO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBsYXN0R2x5cGhPbkxpbmU7XHJcblxyXG4gIH1cclxuXHJcbiAgb25Nb3VzZURvd24oZXZlbnQpIHtcclxuICAgIC8vIE9ubHkgbGVmdCBtb3VzZSBidXR0b25cclxuICAgIGlmIChldmVudC5kYXRhLmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBwb3NpdGlvbiA9IGV2ZW50LmRhdGEuZ2xvYmFsO1xyXG4gICAgcG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybVBvc2l0aW9uKHBvc2l0aW9uKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZXN0TGV0dGVyID0gdGhpcy5nZXRDbG9zZXN0R2x5cGgocG9zaXRpb24ueCAsIHBvc2l0aW9uLnkpO1xyXG5cclxuICAgIGxldCBpbmRleCA9IHRoaXMub3duZXIuYXdlc29tZVRleHQubGF5b3V0LmdseXBocy5pbmRleE9mKGNsb3Nlc3RMZXR0ZXIpO1xyXG5cclxuICAgIHRoaXMuc2V0UmFuZ2UoaW5kZXggKyAxLCBmYWxzZSApO1xyXG4gIH1cclxuXHJcbiAgb25Nb3VzZU1vdmUoZXZlbnQpIHtcclxuICAgIGxldCBwb3NpdGlvbiA9IGV2ZW50LmRhdGEuZ2xvYmFsO1xyXG4gICAgcG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybVBvc2l0aW9uKHBvc2l0aW9uKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZXN0TGV0dGVyID0gdGhpcy5nZXRDbG9zZXN0R2x5cGgocG9zaXRpb24ueCAgLCBwb3NpdGlvbi55KTtcclxuICAgIGxldCBpbmRleCA9IHRoaXMub3duZXIuYXdlc29tZVRleHQubGF5b3V0LmdseXBocy5pbmRleE9mKGNsb3Nlc3RMZXR0ZXIpO1xyXG5cclxuICAgIHRoaXMuc2V0UmFuZ2UobnVsbCwgaW5kZXggKyAxKTtcclxuICB9XHJcblxyXG4gIG9uTW91c2VVcChldmVudCkge1xyXG5cclxuICAgIC8vIE9ubHkgbGVmdCBtb3VzZSBidXR0b25cclxuICAgIGlmIChldmVudC5kYXRhLmJ1dHRvbiAhPT0gMCkgcmV0dXJuO1xyXG5cclxuICAgIGxldCBwb3NpdGlvbiA9IGV2ZW50LmRhdGEuZ2xvYmFsO1xyXG4gICAgcG9zaXRpb24gPSB0aGlzLnRyYW5zZm9ybVBvc2l0aW9uKHBvc2l0aW9uKTtcclxuXHJcbiAgICBjb25zdCBjbG9zZXN0TGV0dGVyID0gdGhpcy5nZXRDbG9zZXN0R2x5cGgocG9zaXRpb24ueCAsIHBvc2l0aW9uLnkpO1xyXG5cclxuXHJcbiAgICAvLyAtMSBtZWFucyB0aGF0IHdlIGF0IHRoZSBzdGFydCBvZiB0aGUgbGluZVxyXG4gICAgaWYgKGNsb3Nlc3RMZXR0ZXIgPT09IC0xKSB7XHJcbiAgICAgIHRoaXMub3duZXIuYXdlc29tZVRleHQuaW5wdXQuZ2x5cGhJbmRleCA9IGNsb3Nlc3RMZXR0ZXI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LmlucHV0LmdseXBoSW5kZXggPSB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LmxheW91dC5nbHlwaHMuaW5kZXhPZihjbG9zZXN0TGV0dGVyKTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHRyYW5zZm9ybVBvc2l0aW9uKHBvc2l0aW9uKSB7XHJcbiAgICBjb25zdCBvd25lclBvc2l0aW9uID0gdGhpcy5vd25lci5nZXRHbG9iYWxQb3NpdGlvbigpO1xyXG4gICAgY29uc3QgdHJhbnNmb3JtID0gdGhpcy5vd25lci53b3JsZFRyYW5zZm9ybTtcclxuXHJcbiAgICBwb3NpdGlvbi54IC09IHRyYW5zZm9ybS50eDtcclxuICAgIHBvc2l0aW9uLnkgLT0gdHJhbnNmb3JtLnR5O1xyXG5cclxuICAgIHBvc2l0aW9uLnggPSBwb3NpdGlvbi54IC8gdHJhbnNmb3JtLmE7XHJcbiAgICBwb3NpdGlvbi55ID0gcG9zaXRpb24ueSAvIHRyYW5zZm9ybS5kO1xyXG5cclxuICAgIHJldHVybiBwb3NpdGlvbjtcclxuICB9XHJcblxyXG4gIGNsZWFyU2VsZWN0ZWRSYW5nZSgpIHtcclxuXHJcbiAgICBjb25zdCByYW5nZSA9IHRoaXMucmFuZ2U7XHJcblxyXG4gICAgLy8gSWYgdXNlciBzZWxlY3RlZCBzb21lIHRleHQsIHJlbW92ZSBpdFxyXG4gICAgaWYgKHJhbmdlWzFdICE9PSBudWxsKSB7XHJcbiAgICAgIHRoaXMub3duZXIuYXdlc29tZVRleHQuaW5wdXQuZ2x5cGhJbmRleCA9IE1hdGgubWluKHJhbmdlWzBdIC0gMSwgcmFuZ2VbMV0gLSAxKTtcclxuICAgICAgY29uc3QgcmVtb3ZlSW5kZXggPSBNYXRoLm1pbi5hcHBseShudWxsLCByYW5nZSk7XHJcbiAgICAgIGNvbnN0IHJlbW92ZUxlbmd0aCA9IE1hdGguYWJzKHJhbmdlWzBdIC0gcmFuZ2VbMV0pO1xyXG4gICAgICB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnNlbGVjdC5zZXRSYW5nZSgwLGZhbHNlKTtcclxuICAgICAgdGhpcy5vd25lci5hd2Vzb21lVGV4dC5yZW1vdmVTdHJpbmcocmVtb3ZlSW5kZXgsIHJlbW92ZUxlbmd0aCk7XHJcbiAgICAgIHRoaXMub3duZXIuYXdlc29tZVRleHQuaW5wdXQuc2hvdygpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZXhwYW5kKGRpcmVjdGlvbikge1xyXG4gICAgdGhpcy5yYW5nZVsxXSArPSBkaXJlY3Rpb247XHJcbiAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFNlbGVjdDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3NlbGVjdC5qcyIsInZhciBkdHlwZSA9IHJlcXVpcmUoJ2R0eXBlJylcbnZhciBhbkFycmF5ID0gcmVxdWlyZSgnYW4tYXJyYXknKVxudmFyIGlzQnVmZmVyID0gcmVxdWlyZSgnaXMtYnVmZmVyJylcblxudmFyIENXID0gWzAsIDIsIDNdXG52YXIgQ0NXID0gWzIsIDEsIDNdXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3JlYXRlUXVhZEVsZW1lbnRzKGFycmF5LCBvcHQpIHtcbiAgICAvL2lmIHVzZXIgZGlkbid0IHNwZWNpZnkgYW4gb3V0cHV0IGFycmF5XG4gICAgaWYgKCFhcnJheSB8fCAhKGFuQXJyYXkoYXJyYXkpIHx8IGlzQnVmZmVyKGFycmF5KSkpIHtcbiAgICAgICAgb3B0ID0gYXJyYXkgfHwge31cbiAgICAgICAgYXJyYXkgPSBudWxsXG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvcHQgPT09ICdudW1iZXInKSAvL2JhY2t3YXJkcy1jb21wYXRpYmxlXG4gICAgICAgIG9wdCA9IHsgY291bnQ6IG9wdCB9XG4gICAgZWxzZVxuICAgICAgICBvcHQgPSBvcHQgfHwge31cblxuICAgIHZhciB0eXBlID0gdHlwZW9mIG9wdC50eXBlID09PSAnc3RyaW5nJyA/IG9wdC50eXBlIDogJ3VpbnQxNidcbiAgICB2YXIgY291bnQgPSB0eXBlb2Ygb3B0LmNvdW50ID09PSAnbnVtYmVyJyA/IG9wdC5jb3VudCA6IDFcbiAgICB2YXIgc3RhcnQgPSAob3B0LnN0YXJ0IHx8IDApIFxuXG4gICAgdmFyIGRpciA9IG9wdC5jbG9ja3dpc2UgIT09IGZhbHNlID8gQ1cgOiBDQ1csXG4gICAgICAgIGEgPSBkaXJbMF0sIFxuICAgICAgICBiID0gZGlyWzFdLFxuICAgICAgICBjID0gZGlyWzJdXG5cbiAgICB2YXIgbnVtSW5kaWNlcyA9IGNvdW50ICogNlxuXG4gICAgdmFyIGluZGljZXMgPSBhcnJheSB8fCBuZXcgKGR0eXBlKHR5cGUpKShudW1JbmRpY2VzKVxuICAgIGZvciAodmFyIGkgPSAwLCBqID0gMDsgaSA8IG51bUluZGljZXM7IGkgKz0gNiwgaiArPSA0KSB7XG4gICAgICAgIHZhciB4ID0gaSArIHN0YXJ0XG4gICAgICAgIGluZGljZXNbeCArIDBdID0gaiArIDBcbiAgICAgICAgaW5kaWNlc1t4ICsgMV0gPSBqICsgMVxuICAgICAgICBpbmRpY2VzW3ggKyAyXSA9IGogKyAyXG4gICAgICAgIGluZGljZXNbeCArIDNdID0gaiArIGFcbiAgICAgICAgaW5kaWNlc1t4ICsgNF0gPSBqICsgYlxuICAgICAgICBpbmRpY2VzW3ggKyA1XSA9IGogKyBjXG4gICAgfVxuICAgIHJldHVybiBpbmRpY2VzXG59XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9+L3F1YWQtaW5kaWNlcy9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGR0eXBlKSB7XG4gIHN3aXRjaCAoZHR5cGUpIHtcbiAgICBjYXNlICdpbnQ4JzpcbiAgICAgIHJldHVybiBJbnQ4QXJyYXlcbiAgICBjYXNlICdpbnQxNic6XG4gICAgICByZXR1cm4gSW50MTZBcnJheVxuICAgIGNhc2UgJ2ludDMyJzpcbiAgICAgIHJldHVybiBJbnQzMkFycmF5XG4gICAgY2FzZSAndWludDgnOlxuICAgICAgcmV0dXJuIFVpbnQ4QXJyYXlcbiAgICBjYXNlICd1aW50MTYnOlxuICAgICAgcmV0dXJuIFVpbnQxNkFycmF5XG4gICAgY2FzZSAndWludDMyJzpcbiAgICAgIHJldHVybiBVaW50MzJBcnJheVxuICAgIGNhc2UgJ2Zsb2F0MzInOlxuICAgICAgcmV0dXJuIEZsb2F0MzJBcnJheVxuICAgIGNhc2UgJ2Zsb2F0NjQnOlxuICAgICAgcmV0dXJuIEZsb2F0NjRBcnJheVxuICAgIGNhc2UgJ2FycmF5JzpcbiAgICAgIHJldHVybiBBcnJheVxuICAgIGNhc2UgJ3VpbnQ4X2NsYW1wZWQnOlxuICAgICAgcmV0dXJuIFVpbnQ4Q2xhbXBlZEFycmF5XG4gIH1cbn1cblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vfi9kdHlwZS9pbmRleC5qc1xuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJ2YXIgc3RyID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ1xuXG5tb2R1bGUuZXhwb3J0cyA9IGFuQXJyYXlcblxuZnVuY3Rpb24gYW5BcnJheShhcnIpIHtcbiAgcmV0dXJuIChcbiAgICAgICBhcnIuQllURVNfUEVSX0VMRU1FTlRcbiAgICAmJiBzdHIuY2FsbChhcnIuYnVmZmVyKSA9PT0gJ1tvYmplY3QgQXJyYXlCdWZmZXJdJ1xuICAgIHx8IEFycmF5LmlzQXJyYXkoYXJyKVxuICApXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vYW4tYXJyYXkvaW5kZXguanNcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiLyohXG4gKiBEZXRlcm1pbmUgaWYgYW4gb2JqZWN0IGlzIGEgQnVmZmVyXG4gKlxuICogQGF1dGhvciAgIEZlcm9zcyBBYm91a2hhZGlqZWggPGh0dHBzOi8vZmVyb3NzLm9yZz5cbiAqIEBsaWNlbnNlICBNSVRcbiAqL1xuXG4vLyBUaGUgX2lzQnVmZmVyIGNoZWNrIGlzIGZvciBTYWZhcmkgNS03IHN1cHBvcnQsIGJlY2F1c2UgaXQncyBtaXNzaW5nXG4vLyBPYmplY3QucHJvdG90eXBlLmNvbnN0cnVjdG9yLiBSZW1vdmUgdGhpcyBldmVudHVhbGx5XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIG9iaiAhPSBudWxsICYmIChpc0J1ZmZlcihvYmopIHx8IGlzU2xvd0J1ZmZlcihvYmopIHx8ICEhb2JqLl9pc0J1ZmZlcilcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKG9iaikge1xuICByZXR1cm4gISFvYmouY29uc3RydWN0b3IgJiYgdHlwZW9mIG9iai5jb25zdHJ1Y3Rvci5pc0J1ZmZlciA9PT0gJ2Z1bmN0aW9uJyAmJiBvYmouY29uc3RydWN0b3IuaXNCdWZmZXIob2JqKVxufVxuXG4vLyBGb3IgTm9kZSB2MC4xMCBzdXBwb3J0LiBSZW1vdmUgdGhpcyBldmVudHVhbGx5LlxuZnVuY3Rpb24gaXNTbG93QnVmZmVyIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmoucmVhZEZsb2F0TEUgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIG9iai5zbGljZSA9PT0gJ2Z1bmN0aW9uJyAmJiBpc0J1ZmZlcihvYmouc2xpY2UoMCwgMCkpXG59XG5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL34vaXMtYnVmZmVyL2luZGV4LmpzXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbmF0dHJpYnV0ZSB2ZWMyIGFWZXJ0ZXhQb3NpdGlvbjtcXG5cXG51bmlmb3JtIG1hdDMgdHJhbnNsYXRpb25NYXRyaXg7XFxudW5pZm9ybSBtYXQzIHByb2plY3Rpb25NYXRyaXg7XFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG5cXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KChwcm9qZWN0aW9uTWF0cml4ICogdHJhbnNsYXRpb25NYXRyaXggKiB2ZWMzKGFWZXJ0ZXhQb3NpdGlvbiAsIDEuMCkpLnh5LCAwLjAsIDEuMCk7XFxuXFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy9zZWxlY3QvdmVydC5nbHNsXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIjZGVmaW5lIEdMU0xJRlkgMVxcbnVuaWZvcm0gdmVjMyBiZ19jb2xvcjtcXG51bmlmb3JtIGZsb2F0IGVuYWJsZWQ7XFxudmFyeWluZyB2ZWMyICB0YzA7XFxuXFxudm9pZCBtYWluKCkge1xcbiAgICAvL2dsX0ZyYWdDb2xvciA9IHZlYzQoYmdfY29sb3IsMC40NSk7XFxuICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMS4wLCAxLjAsIDEuMCwgMC4yICogZW5hYmxlZCk7XFxufVxcblxcblxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy9zZWxlY3QvZnJhZy5nbHNsXG4vLyBtb2R1bGUgaWQgPSA5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIlxyXG5cclxuY2xhc3MgSW5wdXQge1xyXG5cclxuICBfZW5hYmxlZCA9IGZhbHNlO1xyXG4gIG93bmVyID0gbnVsbDtcclxuXHJcbiAgX2dseXBoSW5kZXggPSAtMTtcclxuXHJcbiAgc2V0IGdseXBoSW5kZXgodmFsdWUpIHtcclxuXHJcbiAgICB0aGlzLl9nbHlwaEluZGV4ID0gdmFsdWU7XHJcblxyXG4gICAgaWYgKHRoaXMuX2dseXBoSW5kZXggPCAtMSlcclxuICAgICAgdGhpcy5fZ2x5cGhJbmRleCA9IC0xO1xyXG5cclxuICAgIGlmICh0aGlzLl9nbHlwaEluZGV4ID4gdGhpcy5vd25lci5hd2Vzb21lVGV4dC5sYXlvdXQuZ2x5cGhzLmxlbmd0aClcclxuICAgICAgdGhpcy5fZ2x5cGhJbmRleCA9IHRoaXMub3duZXIuYXdlc29tZVRleHQubGF5b3V0LmdseXBocy5sZW5ndGg7XHJcblxyXG4gICAgdGhpcy51cGRhdGUoKTtcclxuICB9XHJcblxyXG4gIGdldCBnbHlwaEluZGV4KCkge1xyXG4gICAgcmV0dXJuIHRoaXMuX2dseXBoSW5kZXg7XHJcbiAgfVxyXG5cclxuICBzZXQgZW5hYmxlZCh2YWx1ZSkge1xyXG4gICAgdGhpcy5fZW5hYmxlZCA9IHZhbHVlO1xyXG4gICAgaWYgKHRoaXMuX2VuYWJsZWQpIHtcclxuICAgICAgdGhpcy5lbmFibGUoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMuZGlzYWJsZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgZ2V0IGVuYWJsZWQoKSB7XHJcbiAgICByZXR1cm4gdGhpcy5fZW5hYmxlZFxyXG4gIH1cclxuXHJcbiAgY29uc3RydWN0b3Iob3duZXIpIHtcclxuICAgIHRoaXMub3duZXIgPSBvd25lci5jb250YWluZXI7XHJcbiAgICB0aGlzLm1ldHJpY3MgPSBvd25lci5tZXRyaWNzO1xyXG4gICAgdGhpcy5sYXlvdXQgPSBvd25lci5sYXlvdXQ7XHJcbiAgICB0aGlzLmNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiY2FudmFzXCIpWzBdO1xyXG5cclxuICAgIHRoaXMuY3JlYXRlRmllbGQoKTtcclxuICAgIHRoaXMuZGlzYWJsZSgpO1xyXG4gIH1cclxuXHJcbiAgZW5hYmxlKCkge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZCh0aGlzLmlucHV0RWxlbWVudCk7XHJcbiAgfVxyXG5cclxuICBkaXNhYmxlKCkge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5jb250YWlucyh0aGlzLmlucHV0RWxlbWVudCkpXHJcbiAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5pbnB1dEVsZW1lbnQpO1xyXG4gIH1cclxuXHJcbiAgaGlkZSgpIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLm9wYWNpdHkgPSAnMCc7XHJcbiAgfVxyXG5cclxuICBzaG93KCkge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUub3BhY2l0eSA9ICcxJztcclxuICB9XHJcblxyXG4gIGNyZWF0ZUZpZWxkKCkge1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW5wdXRcIik7XHJcblxyXG4gICAgY29uc3QgdHJhbnNmb3JtID0gT2JqZWN0LnZhbHVlcyh0aGlzLm93bmVyLnRyYW5zZm9ybS53b3JsZFRyYW5zZm9ybSkuc2xpY2UoMCwgNik7XHJcblxyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3RyYW5zcGFyZW50JztcclxuICAgIC8vdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gJ3JnYmEoMCwwLDAsMC4zKSc7XHJcblxyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuY29sb3IgPSAndHJhbnNwYXJlbnQnO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuYm9yZGVyID0gXCJub25lXCI7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS5jb250YWluID0gJ3N0cmljdCc7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS56SW5kZXggPSAyO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUucG9pbnRlckV2ZW50cyA9IFwibm9uZVwiO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUub3V0bGluZSA9IFwibm9uZVwiO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuY29sb3IgPSB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnN0eWxlLmZpbGw7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS50cmFuc2Zvcm1PcmlnaW49IFwibGVmdCB0b3BcIjtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBtYXRyaXgoJHt0cmFuc2Zvcm0uam9pbihcIiwgXCIpfSlgO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUucGFkZGluZyA9IFwiMFwiO1xyXG5cclxuICAgIHRoaXMuYWRkRXZlbnQoXCJibHVyXCIsIChldmVudCkgPT4gdGhpcy5pbnB1dEVsZW1lbnQuZm9jdXMoKSk7XHJcbiAgICB0aGlzLmFkZEV2ZW50KFwiaW5wdXRcIiwgKGV2ZW50KSA9PiB0aGlzLm9uSW5wdXQoZXZlbnQpKTtcclxuICAgIHRoaXMuYWRkRXZlbnQoXCJrZXlkb3duXCIsIChldmVudCkgPT4gdGhpcy5vbktleWRvd24oZXZlbnQpKVxyXG4gICAgdGhpcy5hZGRFdmVudChcInBhc3RlXCIsIChldmVudCkgPT4gdGhpcy5wYXN0ZUZyb21DbGlwYm9hcmQoZXZlbnQpKVxyXG4gIH1cclxuXHJcbiAgdXBkYXRlKCkge1xyXG5cclxuICAgIHRoaXMubWV0cmljcyA9IHRoaXMub3duZXIuYXdlc29tZVRleHQubWV0cmljcztcclxuICAgIHRoaXMubGF5b3V0ID0gdGhpcy5vd25lci5hd2Vzb21lVGV4dC5sYXlvdXQ7XHJcblxyXG4gICAgY29uc3Qge2dseXBoc30gPSB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LmxheW91dDtcclxuXHJcbiAgICBpZiAodGhpcy5nbHlwaEluZGV4ID49IGdseXBocy5sZW5ndGgpIHtcclxuICAgICAgdGhpcy5nbHlwaEluZGV4ID0gZ2x5cGhzLmxlbmd0aCAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRGVmYXVsdCBjYXJldCBwbGFjZSAtIHN0YXJ0IG9mIHRoZSBpbnB1dCBmaWVsZCBUT0RPIGltcGxlbWVudCBhbGlnblxyXG4gICAgbGV0IGdseXBoTWV0cmljcyA9IHtcclxuICAgICAgeDogdGhpcy5vd25lci5wb3NpdGlvbi54LFxyXG4gICAgICB5OiB0aGlzLm93bmVyLnBvc2l0aW9uLnlcclxuICAgIH07XHJcblxyXG4gICAgLy8gaWYgc3RyaW5nIGlzIGVtcHR5LCBwdXQgY2FyZXQgYXQgdGhlIGJlZ2lubmluZ1xyXG4gICAgaWYgKHRoaXMub3duZXIuYXdlc29tZVRleHQubGF5b3V0LmdseXBocy5sZW5ndGggPT09IC0xKSB7XHJcblxyXG4gICAgICAvLyBpZiB3ZSBvbiB0aGUgbGFzdCBnbHlwaCwgcGxhY2UgY2FyZXQgYWZ0ZXIgaXRcclxuICAgIH1lbHNlIGlmICh0aGlzLmdseXBoSW5kZXggPT09IGdseXBocy5sZW5ndGgpIHtcclxuXHJcbiAgICAgIGNvbnN0IGxhc3RHbHlwaCA9IGdseXBoc1tnbHlwaHMubGVuZ3RoIC0gMV07XHJcblxyXG4gICAgICBnbHlwaE1ldHJpY3MueCArPSBsYXN0R2x5cGgubWV0cmljcy54ICsgbGFzdEdseXBoLm1ldHJpY3Mud2lkdGg7XHJcbiAgICAgIGdseXBoTWV0cmljcy55ICs9IGxhc3RHbHlwaC5tZXRyaWNzLnk7XHJcblxyXG4gICAgICAvLyBpZiBjYXJldCBpbiB0aGUgbWlkZGxlIG9mIHRoZSB0ZXh0XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ2x5cGhJbmRleCAhPT0gLTEpIHtcclxuICAgICAgY29uc3Qgc2VsZWN0ZWRHbHlwaCA9IGdseXBoc1t0aGlzLmdseXBoSW5kZXhdO1xyXG5cclxuICAgICAgZ2x5cGhNZXRyaWNzLnggKz0gc2VsZWN0ZWRHbHlwaC5tZXRyaWNzLnggKyBzZWxlY3RlZEdseXBoLm1ldHJpY3Mud2lkdGg7XHJcbiAgICAgIGdseXBoTWV0cmljcy55ICs9IHNlbGVjdGVkR2x5cGgubWV0cmljcy55O1xyXG4gICAgfSBlbHNlIHtcclxuXHJcbiAgICAgIGdseXBoTWV0cmljcy55ICs9IHRoaXMub3duZXIuYXdlc29tZVRleHQuc3R5bGUubGluZUhlaWdodDtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0cmFuc2Zvcm0gPSBPYmplY3QudmFsdWVzKHRoaXMub3duZXIudHJhbnNmb3JtLndvcmxkVHJhbnNmb3JtKS5zbGljZSgwLCA2KTtcclxuXHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zdHlsZS50cmFuc2Zvcm0gPSBgbWF0cml4KCR7dHJhbnNmb3JtLmpvaW4oXCIsIFwiKX0pYDtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmhlaWdodCA9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0ICsgXCJweFwiO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuc3R5bGUuZm9udFNpemUgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodCArIFwicHhcIjtcclxuXHJcbiAgICB0aGlzLnNldFBvc2l0aW9uKGdseXBoTWV0cmljcy54ICwgZ2x5cGhNZXRyaWNzLnkpO1xyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuZm9jdXMoKTtcclxuICB9XHJcblxyXG4gIG9uSW5wdXQoZXZlbnQpIHtcclxuXHJcbiAgICBjb25zdCB7IHJhbmdlIH0gPSB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnNlbGVjdDtcclxuXHJcbiAgICB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnNlbGVjdC5jbGVhclNlbGVjdGVkUmFuZ2UoKTtcclxuXHJcbiAgICBldmVudC50YXJnZXQudmFsdWUgPSBcIlwiO1xyXG5cclxuICAgIGlmIChldmVudC5kYXRhID09PSBudWxsKSByZXR1cm47XHJcblxyXG4gICAgLy8gQ29udGVudCB3ZSBhcmUgYWJvdXQgdG8gYWRkXHJcbiAgICBsZXQgdGV4dFRvQWRkID0gZXZlbnQuZGF0YTtcclxuXHJcbiAgICBpZiAodGhpcy5vd25lci5hd2Vzb21lVGV4dC5jb25maWcudXBwZXJjYXNlKSB7XHJcbiAgICAgIHRleHRUb0FkZCA9IHRleHRUb0FkZC50b1VwcGVyQ2FzZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LmNvbmZpZy5sb3dlcmNhc2UpIHtcclxuICAgICAgdGV4dFRvQWRkID0gdGV4dFRvQWRkLnRvTG93ZXJDYXNlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gSWYgdGV4dCBpcyBlbXB0eSBub3dcclxuICAgIGlmICh0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LmxheW91dC5nbHlwaHMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgIHRoaXMub3duZXIuYXdlc29tZVRleHQudGV4dCA9IHRleHRUb0FkZDtcclxuICAgICAgdGhpcy5nbHlwaEluZGV4ID0gMTtcclxuXHJcbiAgICAvLyBJZiBjYXJldCBpcyBhdCB0aGUgZW5kIG9mIHRoZSB0ZXh0XHJcbiAgICB9IGVsc2UgaWYgKHRoaXMuZ2x5cGhJbmRleCA9PT0gdGhpcy5vd25lci5hd2Vzb21lVGV4dC5sYXlvdXQuZ2x5cGhzLmxlbmd0aCAtIDEpIHtcclxuICAgICAgdGhpcy5vd25lci5hd2Vzb21lVGV4dC50ZXh0ICs9IHRleHRUb0FkZDtcclxuICAgICAgdGhpcy5nbHlwaEluZGV4Kys7XHJcblxyXG4gICAgLy8gSWYgd2UgaW4gdGhlIG1pZGRsZSBvZiB0aGUgbGluZVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5vd25lci5hd2Vzb21lVGV4dC5pbnNlcnRTdHJpbmcoKyt0aGlzLmdseXBoSW5kZXgsIHRleHRUb0FkZCk7XHJcbiAgICAgIC8vdGhpcy5nbHlwaEluZGV4Kys7XHJcbiAgICB9XHJcbiAgICB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnNlbGVjdC5zZXRSYW5nZSgwLCBmYWxzZSk7XHJcblxyXG4gIH1cclxuXHJcbiAgb25LZXlkb3duKGV2ZW50KSB7XHJcblxyXG4gICAgY29uc3Qge3JhbmdlfSA9IHRoaXMub3duZXIuYXdlc29tZVRleHQuc2VsZWN0O1xyXG5cclxuICAgIHN3aXRjaCAoZXZlbnQua2V5KSB7XHJcbiAgICAgIGNhc2UgXCJBcnJvd1VwXCI6XHJcbiAgICAgICAgdGhpcy5tb3ZlVXAoKTtcclxuICAgICAgICBicmVhaztcclxuXHJcblxyXG4gICAgICBjYXNlIFwiQXJyb3dEb3duXCI6XHJcbiAgICAgICAgdGhpcy5tb3ZlRG93bigpO1xyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBcIkFycm93TGVmdFwiOlxyXG5cclxuICAgICAgICAvLyBNb3ZlIGJ5IHdvcmRcclxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xyXG5cclxuICAgICAgICAgIHRoaXMubW92ZUJ5V29yZExlZnQoKVxyXG5cclxuICAgICAgICAgIC8vIFNlbGVjdFxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcclxuXHJcbiAgICAgICAgICB0aGlzLm1vdmVXaXRoU2VsZWN0TGVmdCgpXHJcblxyXG4gICAgICAgICAgLy8gSnVzdCBtb3ZlIGN1cnNvclxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnNlbGVjdC5zZXRSYW5nZSgwLCBmYWxzZSk7XHJcbiAgICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICAgIHRoaXMuZ2x5cGhJbmRleC0tO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwiQXJyb3dSaWdodFwiOlxyXG5cclxuICAgICAgICAvLyBNb3ZlIGJ5IHdvcmRcclxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xyXG4gICAgICAgICB0aGlzLm1vdmVCeVdvcmRSaWdodCgpO1xyXG4gICAgICAgIC8vIFNlbGVjdFxyXG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnQuc2hpZnRLZXkpIHtcclxuICAgICAgICAgIHRoaXMubW92ZVdpdGhTZWxlY3RSaWdodCgpXHJcblxyXG4gICAgICAgIC8vIEp1c3QgbW92ZSBpbmRleFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnNlbGVjdC5zZXRSYW5nZSgwLCBmYWxzZSk7XHJcbiAgICAgICAgICB0aGlzLnNob3coKTtcclxuICAgICAgICAgIHRoaXMuZ2x5cGhJbmRleCsrO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwiQmFja3NwYWNlXCI6XHJcbiAgICAgICAgaWYgKHJhbmdlWzFdICE9PSBudWxsKSB7XHJcbiAgICAgICAgICB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnNlbGVjdC5jbGVhclNlbGVjdGVkUmFuZ2UoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnJlbW92ZVN0cmluZyh0aGlzLmdseXBoSW5kZXgtLSwgMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgY2FzZSBcIkRlbGV0ZVwiOlxyXG4gICAgICAgIGlmIChyYW5nZVsxXSAhPT0gbnVsbCkge1xyXG4gICAgICAgICAgdGhpcy5vd25lci5hd2Vzb21lVGV4dC5zZWxlY3QuY2xlYXJTZWxlY3RlZFJhbmdlKCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vd25lci5hd2Vzb21lVGV4dC5yZW1vdmVTdHJpbmcodGhpcy5nbHlwaEluZGV4ICsgMSwgMCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIFNlbGVjdCBhbGxcclxuICAgICAgY2FzZSBcImFcIjpcclxuICAgICAgICBpZiAoZXZlbnQuY3RybEtleSkge1xyXG4gICAgICAgICAgdGhpcy5vd25lci5hd2Vzb21lVGV4dC5zZWxlY3Quc2V0UmFuZ2UoMCx0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnRleHQubGVuZ3RoIC0gMSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIENvcHkgdG8gY2xpcGJvYXJkXHJcbiAgICAgIGNhc2UgXCJjXCI6XHJcbiAgICAgICAgaWYgKGV2ZW50LmN0cmxLZXkpIHtcclxuICAgICAgICAgIHRoaXMuY29weVRvQ2xpcGJvYXJkKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIC8vIEN1dFxyXG4gICAgICBjYXNlIFwieFwiOlxyXG4gICAgICAgIGlmIChldmVudC5jdHJsS2V5KSB7XHJcbiAgICAgICAgICB0aGlzLmNvcHlUb0NsaXBib2FyZCh0cnVlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBcIiBcIjtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcclxuXHJcbiAgfVxyXG5cclxuICBzZXRQb3NpdGlvbih4LCB5KSB7XHJcblxyXG4gICAgY29uc3Qge2EgOiBzY2FsZVgsIGQ6IHNjYWxlWX0gPSB0aGlzLm93bmVyLnRyYW5zZm9ybS53b3JsZFRyYW5zZm9ybTtcclxuICAgIGNvbnN0IHt4IDogbG9jYWxYLCB5OiBsb2NhbFkgfSA9IHRoaXMub3duZXIucG9zaXRpb247XHJcblxyXG4gICAgbGV0IGxpbmVIZWlnaHQgPSB0aGlzLm1ldHJpY3MubGluZUhlaWdodCAqIHNjYWxlWTtcclxuXHJcbiAgICB5ICo9IHNjYWxlWTtcclxuICAgIHggKj0gc2NhbGVYO1xyXG5cclxuICAgIHkgLT0gbGluZUhlaWdodDtcclxuXHJcbiAgICB5IC09IGxvY2FsWSAqIHNjYWxlWTtcclxuICAgIHggLT0gbG9jYWxYICogc2NhbGVYO1xyXG5cclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLmxlZnQgPSBgJHt4fXB4YDtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRvcCA9IGAke3l9cHhgO1xyXG5cclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gXCIgXCI7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IFwiXCI7XHJcblxyXG4gICAgY29uc3QgdHJhbnNmb3JtID0gT2JqZWN0LnZhbHVlcyh0aGlzLmdldFRyYW5zZm9ybSgpKS5zbGljZSgwLCA2KTtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnN0eWxlLnRyYW5zZm9ybSA9IGBtYXRyaXgoJHt0cmFuc2Zvcm0uam9pbihcIiwgXCIpfSlgO1xyXG4gIH1cclxuXHJcbiAgZ2V0VHJhbnNmb3JtKCkge1xyXG4gICAgY29uc3Qgb3duZXJUcmFuc2Zvcm0gPSB0aGlzLm93bmVyLnRyYW5zZm9ybS53b3JsZFRyYW5zZm9ybTtcclxuICAgIGxldCBjYW52YXNSZWN0ID0gdGhpcy5jYW52YXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICByZXR1cm4gey4uLm93bmVyVHJhbnNmb3JtLCB0eDogb3duZXJUcmFuc2Zvcm0udHggKyBjYW52YXNSZWN0LngsIHR5OiBvd25lclRyYW5zZm9ybS50eSArIGNhbnZhc1JlY3QueX07XHJcbiAgfVxyXG5cclxuICBhZGRFdmVudChldmVudCwgY2FsbGJhY2spIHtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIChldmVudCkgPT4ge1xyXG4gICAgICBpZiAodGhpcy5fZW5hYmxlZCkge1xyXG4gICAgICAgIGNhbGxiYWNrKGV2ZW50KTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfVxyXG5cclxuICBjb3B5VG9DbGlwYm9hcmQoY3V0ID0gZmFsc2UpIHtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5vd25lci5hd2Vzb21lVGV4dC5zZWxlY3QucmFuZ2U7XHJcbiAgICBjb25zdCBzdGFydCA9IE1hdGgubWluLmFwcGx5KG51bGwsIHJhbmdlKTtcclxuICAgIGNvbnN0IGVuZCA9IE1hdGgubWF4LmFwcGx5KG51bGwsIHJhbmdlKTtcclxuXHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IHRoaXMub3duZXIudGV4dC5zbGljZShzdGFydCwgZW5kICsgMSk7XHJcbiAgICB0aGlzLmlucHV0RWxlbWVudC5zZWxlY3QoKTtcclxuICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKFwiY29weVwiKTtcclxuICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gXCJcIjtcclxuXHJcbiAgICBpZiAoY3V0KSB7XHJcbiAgICAgIHRoaXMub3duZXIuYXdlc29tZVRleHQuc2VsZWN0LmNsZWFyU2VsZWN0ZWRSYW5nZSgpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcGFzdGVGcm9tQ2xpcGJvYXJkKGV2ZW50KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgbGV0IHRleHQgPSBldmVudC5jbGlwYm9hcmREYXRhLmdldERhdGEoXCJ0ZXh0XCIpO1xyXG5cclxuICAgIGlmICh0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LmNvbmZpZy51cHBlcmNhc2UpXHJcbiAgICAgIHRleHQgPSB0ZXh0LnRvVXBwZXJDYXNlKCk7XHJcblxyXG4gICAgaWYgKHRoaXMub3duZXIuYXdlc29tZVRleHQuY29uZmlnLmxvd2VyY2FzZSlcclxuICAgICAgdGV4dCA9IHRleHQudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICAvLyBUT0RPIHJlbW92ZSBhbGwgdHJhc2ggc3ltYm9sc1xyXG5cclxuICAgIHRoaXMub3duZXIuYXdlc29tZVRleHQuc2VsZWN0LmNsZWFyU2VsZWN0ZWRSYW5nZSgpO1xyXG5cclxuICAgIHRoaXMub3duZXIuYXdlc29tZVRleHQuaW5zZXJ0U3RyaW5nKHRoaXMuZ2x5cGhJbmRleCArIDEsIHRleHQpO1xyXG5cclxuICAgIHRoaXMuZ2x5cGhJbmRleCA9IHRoaXMuZ2x5cGhJbmRleCArIHRleHQubGVuZ3RoO1xyXG4gIH1cclxuXHJcbiAgbW92ZVdpdGhTZWxlY3RSaWdodCgpIHtcclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5vd25lci5hd2Vzb21lVGV4dC5zZWxlY3QucmFuZ2U7XHJcblxyXG4gICAgaWYgKHJhbmdlWzFdID09PSBudWxsKSB7XHJcbiAgICAgICsrdGhpcy5nbHlwaEluZGV4O1xyXG4gICAgICByYW5nZVswXSA9IHRoaXMuZ2x5cGhJbmRleDtcclxuICAgICAgcmFuZ2VbMV0gPSB0aGlzLmdseXBoSW5kZXggO1xyXG4gICAgfSBlbHNlIGlmIChyYW5nZVsxXSA9PT0gcmFuZ2VbMF0gJiYgdGhpcy5nbHlwaEluZGV4ID09PSByYW5nZVswXSAtIDEpIHtcclxuICAgICAgcmFuZ2VbMV0gPSBudWxsO1xyXG4gICAgICB0aGlzLmdseXBoSW5kZXgrKztcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHRoaXMub3duZXIuYXdlc29tZVRleHQuc2VsZWN0LmV4cGFuZCgxKTtcclxuICAgICAgdGhpcy5nbHlwaEluZGV4KytcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnNlbGVjdC51cGRhdGUoKVxyXG4gIH1cclxuXHJcbiAgbW92ZVdpdGhTZWxlY3RMZWZ0KCkge1xyXG5cclxuICAgIGNvbnN0IHJhbmdlID0gdGhpcy5vd25lci5hd2Vzb21lVGV4dC5zZWxlY3QucmFuZ2U7XHJcblxyXG4gICAgLy8gSWYgd2Ugb25seSBoYXZlIGN1cnNvciwgbm8gc2VsZWN0aW9uXHJcbiAgICBpZiAocmFuZ2VbMV0gPT09IG51bGwpIHtcclxuICAgICAgcmFuZ2VbMF0gPSB0aGlzLmdseXBoSW5kZXg7XHJcbiAgICAgIHJhbmdlWzFdID0gdGhpcy5nbHlwaEluZGV4IDtcclxuXHJcbiAgICAgIC8vIElmIHdlIGhhdmUgc2VsZWN0ZWQgb25lIGdseXBoIGFuZCB3ZSByZW1vdmUgc2VsZWN0aW9uXHJcbiAgICB9IGVsc2UgaWYgKHJhbmdlWzFdID09PSByYW5nZVswXSAmJiB0aGlzLmdseXBoSW5kZXggPT09IHJhbmdlWzBdKSB7XHJcbiAgICAgIHJhbmdlWzFdID0gbnVsbDtcclxuXHJcbiAgICAgIC8vIFJlZ3VsYXIgc2VsZWN0aW5nXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnNlbGVjdC5leHBhbmQoLTEpO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuZ2x5cGhJbmRleC0tO1xyXG5cclxuICAgIHRoaXMub3duZXIuYXdlc29tZVRleHQuc2VsZWN0LnVwZGF0ZSgpO1xyXG4gIH1cclxuXHJcbiAgbW92ZURvd24oKSB7XHJcblxyXG4gICAgdGhpcy5vd25lci5hd2Vzb21lVGV4dC5zZWxlY3Quc2V0UmFuZ2UobnVsbCwgZmFsc2UpXHJcblxyXG4gICAgY29uc3QgZ2x5cGggPSB0aGlzLmxheW91dC5nbHlwaHNbTWF0aC5tYXgoMCwgdGhpcy5nbHlwaEluZGV4KV07XHJcblxyXG4gICAgLy8gSWYgd2UgYXJlIG9uIHRoZSBmaXJzdCBsaW5lXHJcbiAgICBpZiAoZ2x5cGgucG9zaXRpb25bMV0gPT09IHRoaXMubGF5b3V0LmhlaWdodCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgbmV3R2x5cGggPSB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnNlbGVjdC5nZXRDbG9zZXN0R2x5cGgoZ2x5cGgucG9zaXRpb25bMF0sIGdseXBoLnBvc2l0aW9uWzFdKTtcclxuICAgIHRoaXMuZ2x5cGhJbmRleCA9IHRoaXMubGF5b3V0LmdseXBocy5pbmRleE9mKG5ld0dseXBoKTtcclxuICB9XHJcblxyXG4gIG1vdmVVcCgpIHtcclxuXHJcbiAgICB0aGlzLm93bmVyLmF3ZXNvbWVUZXh0LnNlbGVjdC5zZXRSYW5nZShudWxsLCBmYWxzZSlcclxuXHJcbiAgICBjb25zdCBnbHlwaCA9IHRoaXMubGF5b3V0LmdseXBoc1t0aGlzLmdseXBoSW5kZXhdO1xyXG5cclxuICAgIC8vIElmIHdlIGFyZSBvbiB0aGUgZmlyc3QgbGluZVxyXG4gICAgaWYgKGdseXBoLnBvc2l0aW9uWzFdIDw9IHRoaXMubWV0cmljcy5saW5lSGVpZ2h0KSB7XHJcbiAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdHbHlwaCA9IHRoaXMub3duZXIuYXdlc29tZVRleHQuc2VsZWN0LmdldENsb3Nlc3RHbHlwaChnbHlwaC5wb3NpdGlvblswXSwgZ2x5cGgucG9zaXRpb25bMV0gLSB0aGlzLm1ldHJpY3MubGluZUhlaWdodCAqIDIpO1xyXG4gICAgdGhpcy5nbHlwaEluZGV4ID0gdGhpcy5sYXlvdXQuZ2x5cGhzLmluZGV4T2YobmV3R2x5cGgpO1xyXG5cclxuICB9XHJcblxyXG4gIG1vdmVCeVdvcmRMZWZ0KCkge1xyXG4gICAgY29uc3QgZ2x5cGhzID0gdGhpcy5sYXlvdXQuZ2x5cGhzO1xyXG5cclxuICAgIGlmICh0aGlzLmdseXBoSW5kZXggPiAwKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLmdseXBoSW5kZXggLSAyOyBpID49IDA7IGktLSApIHtcclxuICAgICAgICBpZiAoZ2x5cGhzW2ldLmxldHRlciA9PT0gXCIgXCIgJiYgZ2x5cGhzW2kgKyAxIF0ubGV0dGVyICE9PSBcIiBcIikge1xyXG4gICAgICAgICAgdGhpcy5nbHlwaEluZGV4ID0gaTtcclxuICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGkgPT09IDAgKSB0aGlzLmdseXBoSW5kZXggPSAtMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgbW92ZUJ5V29yZFJpZ2h0KCkge1xyXG4gICAgY29uc3QgZ2x5cGhzID0gdGhpcy5sYXlvdXQuZ2x5cGhzO1xyXG5cclxuICAgIGlmICh0aGlzLmdseXBoSW5kZXggPCBnbHlwaHMubGVuZ3RoKSB7XHJcbiAgICAgIGZvciAobGV0IGkgPSB0aGlzLmdseXBoSW5kZXggKyAxOyBpIDw9IGdseXBocy5sZW5ndGggLSAxOyBpKysgKSB7XHJcbiAgICAgICAgaWYgKGdseXBoc1tpXS5sZXR0ZXIgPT09IFwiIFwiICYmIGdseXBoc1tpIC0gMSBdLmxldHRlciAhPT0gXCIgXCIpIHtcclxuICAgICAgICAgIHRoaXMuZ2x5cGhJbmRleCA9IGk7XHJcbiAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChpID09PSBnbHlwaHMubGVuZ3RoIC0gMSkgdGhpcy5nbHlwaEluZGV4ID0gZ2x5cGhzLmxlbmd0aCAtMTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICB9XHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbnB1dDtcclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2lucHV0LmpzIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxuYXR0cmlidXRlIHZlYzIgYVZlcnRleFBvc2l0aW9uO1xcbmF0dHJpYnV0ZSB2ZWMyIGFUZXh0dXJlQ29vcmQ7XFxuYXR0cmlidXRlIGZsb2F0IGFTZGZTaXplO1xcblxcbnVuaWZvcm0gbWF0MyB0cmFuc2xhdGlvbk1hdHJpeDtcXG51bmlmb3JtIG1hdDMgcHJvamVjdGlvbk1hdHJpeDtcXG51bmlmb3JtIGZsb2F0IHNkZk11bHRpcGxpZXI7XFxuXFxudmFyeWluZyB2ZWMyICB0YzA7XFxudmFyeWluZyBmbG9hdCBkb2Zmc2V0O1xcbnZhcnlpbmcgZmxvYXQgc2RmX3RleGVsO1xcblxcblxcblxcbnZvaWQgbWFpbih2b2lkKSB7XFxuXFxuICAgIC8vVE9ETyBNQUtFIEFUVFJJQlVURVxcbiAgICBmbG9hdCBzZGZfc2l6ZSA9IGFTZGZTaXplICogc2RmTXVsdGlwbGllcjtcXG5cXG4gICAgLy9UT0RPIE1BS0UgVU5JRk9STVNcXG4gICAgZmxvYXQgc2RmX3RleF9zaXplID0gMTAyNC4wO1xcblxcblxcbiAgICB0YzAgPSBhVGV4dHVyZUNvb3JkO1xcbiAgICBkb2Zmc2V0ID0gMS4wIC8gc2RmX3NpemU7ICAgICAgIC8vIERpc3RhbmNlIGZpZWxkIGRlbHRhIGZvciBvbmUgc2NyZWVuIHBpeGVsXFxuICAgIHNkZl90ZXhlbCA9IDEuMCAvIHNkZl90ZXhfc2l6ZTtcXG5cXG4gICAgZ2xfUG9zaXRpb24gPSB2ZWM0KChwcm9qZWN0aW9uTWF0cml4ICogdHJhbnNsYXRpb25NYXRyaXggKiB2ZWMzKGFWZXJ0ZXhQb3NpdGlvbiAsIDEuMCkpLnh5LCAwLjAsIDEuMCk7XFxuXFxufVxcblwiXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvc2hhZGVycy90ZXh0L3ZlcnQuZ2xzbFxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSBcIiNkZWZpbmUgR0xTTElGWSAxXFxudW5pZm9ybSBzYW1wbGVyMkQgdVNhbXBsZXI7XFxudW5pZm9ybSBmbG9hdCBoaW50X2Ftb3VudDtcXG51bmlmb3JtIGZsb2F0IHN1YnBpeGVsX2Ftb3VudDtcXG5cXG51bmlmb3JtIHZlYzMgYmdfY29sb3I7XFxudW5pZm9ybSB2ZWMzIGZvbnRfY29sb3I7XFxuXFxudmFyeWluZyB2ZWMyICB0YzA7XFxudmFyeWluZyBmbG9hdCBkb2Zmc2V0O1xcbnZhcnlpbmcgZmxvYXQgc2RmX3RleGVsO1xcblxcblxcbi8qXFxuICogIFN1YnBpeGVsIGNvdmVyYWdlIGNhbGN1bGF0aW9uXFxuICpcXG4gKiAgdiAtIGVkZ2Ugc2xvcGUgICAgLTEuMCB0byAxLjAgICAgICAgICAgdHJpcGxldFxcbiAqICBhIC0gcGl4ZWwgY292ZXJhZ2UgMC4wIHRvIDEuMCAgICAgICAgICBjb3ZlcmFnZVxcbiAqXFxuICogICAgICB8PC0gZ2x5cGggZWRnZSAgICAgICAgICAgICAgICAgICAgICBSICBHICBCXFxuICogICstLS0rLS0tKyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKy0tKy0tKy0tK1xcbiAqICB8ICAgfFhYWHwgdiA9IDEuMCAoZWRnZSBmYWNpbmcgd2VzdCkgIHwgIHx4eHxYWHxcXG4gKiAgfCAgIHxYWFh8IGEgPSAwLjUgKDUwJSBjb3ZlcmFnZSkgICAgICB8ICB8eHh8WFh8XFxuICogIHwgICB8WFhYfCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgfHh4fFhYfFxcbiAqICArLS0tKy0tLSsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICstLSstLSstLStcXG4gKiAgICBwaXhlbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgMCAgNTAgMTAwXFxuICpcXG4gKlxcbiAqICAgICAgICBSICAgRyAgIEJcXG4gKlxcbiAqICAgMS4wICAgICAgICArLS0rICAgPC0gdG9wIChhYnMoIHYgKSlcXG4gKiAgICAgICAgICAgICAgfFxcbiAqICAgICAgIC0rLS0tLS0rLS0rLS0gPC0gY2VpbDogMTAwJSBjb3ZlcmFnZVxcbiAqICAgICAgICB8ICAgICB8WFh8XFxuICogICAwLjAgIHwgICstLStYWHxcXG4gKiAgICAgICAgfCAgfHh4fFhYfFxcbiAqICAgICAgIC0rLS0rLS0rLS0rLS0gPC0gZmxvb3I6IDAlIGNvdmVyYWdlXFxuICogICAgICAgICAgIHxcXG4gKiAgLTEuMCAgKy0tKyAgICAgICAgIDwtICAtYWJzKHYpXFxuICogICAgICAgIHxcXG4gKiAgICAgICAgfFxcbiAqICAgICAgICB8XFxuICogIC0yLjAgICsgICAgICAgICAgICA8LSBib3R0b206IC1hYnModiktMS4wXFxuICovXFxuXFxudmVjMyBzdWJwaXhlbCggZmxvYXQgdiwgZmxvYXQgYSApIHtcXG4gICAgZmxvYXQgdnQgICAgICA9IDAuNiAqIHY7IC8vIDEuMCB3aWxsIG1ha2UgeW91ciBleWVzIGJsZWVkXFxuICAgIHZlYzMgIHJnYl9tYXggPSB2ZWMzKCAtdnQsIDAuMCwgdnQgKTtcXG4gICAgZmxvYXQgdG9wICAgICA9IGFicyggdnQgKTtcXG4gICAgZmxvYXQgYm90dG9tICA9IC10b3AgLSAxLjA7XFxuICAgIGZsb2F0IGNmbG9vciAgPSBtaXgoIHRvcCwgYm90dG9tLCBhICk7XFxuICAgIHZlYzMgIHJlcyAgICAgPSBjbGFtcCggcmdiX21heCAtIHZlYzMoIGNmbG9vciApLCAwLjAsIDEuMCApO1xcbiAgICByZXR1cm4gcmVzO1xcbn1cXG5cXG52b2lkIG1haW4yKCkge1xcbiAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDEuMCwgMS4wLCAxLjAsMS4wKTtcXG59XFxuXFxudm9pZCBtYWluKHZvaWQpIHtcXG5cXG4gICAgLy8gU2FtcGxpbmcgdGhlIHRleHR1cmUsIEwgcGF0dGVyblxcbiAgICBmbG9hdCBzZGYgICAgICAgPSB0ZXh0dXJlMkQoIHVTYW1wbGVyLCB0YzAgKS5yO1xcbiAgICBmbG9hdCBzZGZfbm9ydGggPSB0ZXh0dXJlMkQoIHVTYW1wbGVyLCB0YzAgKyB2ZWMyKCAwLjAsIHNkZl90ZXhlbCApICkucjtcXG4gICAgZmxvYXQgc2RmX2Vhc3QgID0gdGV4dHVyZTJEKCB1U2FtcGxlciwgdGMwICsgdmVjMiggc2RmX3RleGVsLCAwLjAgKSApLnI7XFxuXFxuICAgIC8vIEVzdGltYXRpbmcgc3Ryb2tlIGRpcmVjdGlvbiBieSB0aGUgZGlzdGFuY2UgZmllbGQgZ3JhZGllbnQgdmVjdG9yXFxuICAgIHZlYzIgIHNncmFkICAgICA9IHZlYzIoIHNkZl9lYXN0IC0gc2RmLCBzZGZfbm9ydGggLSBzZGYgKTtcXG4gICAgZmxvYXQgc2dyYWRfbGVuID0gbWF4KCBsZW5ndGgoIHNncmFkICksIDEuMCAvIDEyOC4wICk7XFxuICAgIHZlYzIgIGdyYWQgICAgICA9IHNncmFkIC8gdmVjMiggc2dyYWRfbGVuICk7XFxuICAgIGZsb2F0IHZncmFkID0gYWJzKCBncmFkLnkgKTsgLy8gMC4wIC0gdmVydGljYWwgc3Ryb2tlLCAxLjAgLSBob3Jpem9udGFsIG9uZVxcblxcbiAgICBmbG9hdCBob3J6X3NjYWxlICA9IDEuMTsgLy8gQmx1cnJpbmcgdmVydGljYWwgc3Ryb2tlcyBhbG9uZyB0aGUgWCBheGlzIGEgYml0XFxuICAgIGZsb2F0IHZlcnRfc2NhbGUgID0gMC42OyAvLyBXaGlsZSBhZGRpbmcgc29tZSBjb250cmFzdCB0byB0aGUgaG9yaXpvbnRhbCBzdHJva2VzXFxuICAgIGZsb2F0IGhkb2Zmc2V0ICAgID0gbWl4KCBkb2Zmc2V0ICogaG9yel9zY2FsZSwgZG9mZnNldCAqIHZlcnRfc2NhbGUsIHZncmFkICk7XFxuICAgIGZsb2F0IHJlc19kb2Zmc2V0ID0gbWl4KCBkb2Zmc2V0LCBoZG9mZnNldCwgaGludF9hbW91bnQgKTtcXG5cXG4gICAgZmxvYXQgYWxwaGEgICAgICAgPSBzbW9vdGhzdGVwKCAwLjUgLSByZXNfZG9mZnNldCwgMC41ICsgcmVzX2RvZmZzZXQsIHNkZiApO1xcblxcbiAgICAvLyBBZGRpdGlvbmFsIGNvbnRyYXN0XFxuICAgIGFscGhhICAgICAgICAgICAgID0gcG93KCBhbHBoYSwgMS4wICsgMC4yICogdmdyYWQgKiBoaW50X2Ftb3VudCApO1xcblxcbiAgICAvLyBVbmZvcnR1bmF0ZWx5IHRoZXJlIGlzIG5vIHN1cHBvcnQgZm9yIEFSQl9ibGVuZF9mdW5jX2V4dGVuZGVkIGluIFdlYkdMLlxcbiAgICAvLyBGb3J0dW5hdGVseSB0aGUgYmFja2dyb3VuZCBpcyBmaWxsZWQgd2l0aCBhIHNvbGlkIGNvbG9yIHNvIHdlIGNhbiBkb1xcbiAgICAvLyB0aGUgYmxlbmRpbmcgaW5zaWRlIHRoZSBzaGFkZXIuXFxuXFxuICAgIC8vIERpc2NhcmRpbmcgcGl4ZWxzIGJleW9uZCBhIHRocmVzaG9sZCB0byBtaW5pbWlzZSBwb3NzaWJsZSBhcnRpZmFjdHMuXFxuICAgIGlmICggYWxwaGEgPCAyMC4wIC8gMjU2LjAgKSBkaXNjYXJkO1xcblxcbiAgICB2ZWMzIGNoYW5uZWxzID0gc3VicGl4ZWwoIGdyYWQueCAqIDAuNSAqIHN1YnBpeGVsX2Ftb3VudCwgYWxwaGEgKSArIDAuMTtcXG5cXG4gICAgLy8gRm9yIHN1YnBpeGVsIHJlbmRlcmluZyB3ZSBoYXZlIHRvIGJsZW5kIGVhY2ggY29sb3IgY2hhbm5lbCBzZXBhcmF0ZWx5XFxuICAgIHZlYzMgcmVzID0gbWl4KCBiZ19jb2xvciwgZm9udF9jb2xvciwgY2hhbm5lbHMgKTtcXG4gICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCggcmVzLCAxLjAgKTtcXG59XFxuXFxuXFxuXCJcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9zaGFkZXJzL3RleHQvZnJhZy5nbHNsXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9