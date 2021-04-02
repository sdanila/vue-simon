/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"chunk-vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=script&lang=js":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/App.vue?vue&type=script&lang=js ***!
  \*******************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'App',
  data: function data() {
    return {
      centerButton: "START",
      easy: true,
      normal: false,
      hard: false,
      playing: false,
      isClickable: false,
      isWon: false,
      isWrong: false,
      round: 0,
      sequence: [],
      sequenceInterval: null,
      playerSequence: [],
      isLit: {
        1: false,
        2: false,
        3: false,
        4: false
      }
    };
  },
  computed: {
    showScore: function showScore() {
      if (this.isWon) {
        return "Play Again?";
      }

      return "Round: " + this.round;
    }
  },
  methods: {
    easyOn: function easyOn() {
      this.easy = true;
      this.normal = false;
      this.hard = false;
    },
    normalOn: function normalOn() {
      this.easy = false;
      this.normal = true;
      this.hard = false;
    },
    hardOn: function hardOn() {
      this.easy = false;
      this.normal = false;
      this.hard = true;
    },
    startOrStop: function startOrStop() {
      if (this.centerButton === 'START' || this.centerButton === 'Winner!' || this.centerButton === 'Super Winner!') {
        this.startGame();
      } else this.stopGame();
    },
    startGame: function startGame() {
      this.playing = true;
      this.sequence = [];
      this.playerSequence = [];
      this.centerButton = "RESET";
      this.isWon = false;
      this.isWrong = false;
      this.round = 0;
      clearInterval(this.sequenceInterval);
      this.showSequence();
    },
    stopGame: function stopGame() {
      var _this = this;

      this.playing = false;
      this.playerSequence = [];
      this.sequence = [];
      this.centerButton = "Wrong!";
      this.isWrong = true;
      this.isClickable = false;
      clearInterval(this.sequenceInterval);
      setTimeout(function () {
        _this.centerButton = "START";
      }, 2500);
    },
    clicked: function clicked(tile) {
      if (this.isClickable) {
        this.lightUp(tile);
        this.soundOn(tile);
        this.playerSequence.push(tile);
        this.checkWinLose();
      }
    },
    checkWinLose: function checkWinLose() {
      for (var i = 0; i < this.playerSequence.length; i++) {
        if (this.playerSequence[i] !== this.sequence[i]) {
          return this.stopGame();
        }
      }

      if (this.playerSequence.length === this.sequence.length) {
        this.playerSequence = [];
        this.round++;

        if (this.round > 20) {
          this.hard ? this.centerButton = "Владик лох!" : this.centerButton = "Денис лох!";
          this.isClickable = false;
          this.isWon = true;
        } else {
          this.showSequence();
        }
      }
    },
    lightUp: function lightUp(tile) {
      var _this2 = this;

      this.isLit[tile] = true;
      setTimeout(function () {
        _this2.isLit[tile] = false;
      }, 300);
    },
    soundOn: function soundOn(tile) {
      var req = __webpack_require__("./src/assets/sounds sync recursive ^\\.\\/.*\\.mp3$")("./".concat(tile, ".mp3"));

      var audio = new Audio(req);
      audio.play();
    },
    showSequence: function showSequence(redo) {
      var _this3 = this;

      var currentIndex = 0;
      var speed;

      if (this.easy) {
        speed = 1500;
      } else if (this.normal) {
        speed = 1000;
      } else speed = 400;

      this.isClickable = false;

      if (!redo) {
        this.sequence.push(Math.floor(Math.random() * 4 + 1));
      }

      this.sequenceInterval = setInterval(function () {
        if (currentIndex >= _this3.sequence.length) {
          clearInterval(_this3.sequenceInterval);
          return _this3.isClickable = true;
        }

        _this3.lightUp(_this3.sequence[currentIndex]);

        _this3.soundOn(_this3.sequence[currentIndex]);

        currentIndex++;
      }, speed);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");

var _hoisted_1 = {
  class: "wrapper"
};

var _hoisted_2 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("h1", null, "Simon Says", -1
/* HOISTED */
);

var _hoisted_3 = {
  class: "game-board"
};
var _hoisted_4 = {
  class: "simon"
};
var _hoisted_5 = {
  class: "game"
};
var _hoisted_6 = {
  class: "game-info"
};
var _hoisted_7 = {
  key: 0
};
var _hoisted_8 = {
  class: "game-options"
};

var _hoisted_9 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("h2", null, "Game Options:", -1
/* HOISTED */
);

var _hoisted_10 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])("easy");

var _hoisted_11 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("br", null, null, -1
/* HOISTED */
);

var _hoisted_12 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])("normal");

var _hoisted_13 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("br", null, null, -1
/* HOISTED */
);

var _hoisted_14 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createTextVNode"])("hard");

var _hoisted_15 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("br", null, null, -1
/* HOISTED */
);

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("div", _hoisted_1, [_hoisted_2, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("div", _hoisted_3, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("div", _hoisted_4, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("ul", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("li", {
    class: ["circle", {
      lit: _ctx.isLit[1]
    }],
    onClick: _cache[1] || (_cache[1] = function ($event) {
      return $options.clicked(1);
    })
  }, null, 2
  /* CLASS */
  ), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("li", {
    class: ["circle", {
      lit: _ctx.isLit[2]
    }],
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $options.clicked(2);
    })
  }, null, 2
  /* CLASS */
  ), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("li", {
    class: ["circle", {
      lit: _ctx.isLit[3]
    }],
    onClick: _cache[3] || (_cache[3] = function ($event) {
      return $options.clicked(3);
    })
  }, null, 2
  /* CLASS */
  ), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("li", {
    class: ["circle", {
      lit: _ctx.isLit[4]
    }],
    onClick: _cache[4] || (_cache[4] = function ($event) {
      return $options.clicked(4);
    })
  }, null, 2
  /* CLASS */
  )])])]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("div", _hoisted_6, [Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("h2", null, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])($options.showScore), 1
  /* TEXT */
  ), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("button", {
    onClick: _cache[5] || (_cache[5] = function () {
      return $options.startOrStop && $options.startOrStop.apply($options, arguments);
    })
  }, Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.centerButton), 1
  /* TEXT */
  ), _ctx.isWrong ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__["openBlock"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createBlock"])("p", _hoisted_7, "Sorry, you lost after " + Object(vue__WEBPACK_IMPORTED_MODULE_0__["toDisplayString"])(_ctx.round) + " rounds!", 1
  /* TEXT */
  )) : Object(vue__WEBPACK_IMPORTED_MODULE_0__["createCommentVNode"])("v-if", true)]), Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("div", _hoisted_8, [_hoisted_9, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("input", {
    type: "radio",
    name: "mode",
    onChange: _cache[6] || (_cache[6] = function () {
      return $options.easyOn && $options.easyOn.apply($options, arguments);
    }),
    checked: ""
  }, null, 32
  /* HYDRATE_EVENTS */
  ), _hoisted_10, _hoisted_11, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("input", {
    type: "radio",
    name: "mode",
    onChange: _cache[7] || (_cache[7] = function () {
      return $options.normalOn && $options.normalOn.apply($options, arguments);
    })
  }, null, 32
  /* HYDRATE_EVENTS */
  ), _hoisted_12, _hoisted_13, Object(vue__WEBPACK_IMPORTED_MODULE_0__["createVNode"])("input", {
    type: "radio",
    name: "mode",
    onChange: _cache[8] || (_cache[8] = function () {
      return $options.hardOn && $options.hardOn.apply($options, arguments);
    })
  }, null, 32
  /* HYDRATE_EVENTS */
  ), _hoisted_14, _hoisted_15])]);
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
// Module
exports.push([module.i, "\n#app {\n  font-family: Avenir, Helvetica, Arial, sans-serif;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n  text-align: center;\n  color: #2c3e50;\n  margin-top: 60px;\n}\nbody {\n\tfont-family: Arial, serif;\n\tcolor: #333;\n\t-webkit-user-select: none; /* Chrome/Safari */\n\t-moz-user-select: none; /* Firefox */\n\t-ms-user-select: none; /* IE10+ */\n\t-o-user-select: none;\n\tuser-select: none;\n}\nh1 {\n\tmargin: 1em 0 2em;\n\ttext-align: center;\n}\nul {\n\tlist-style: none;\n}\nul, li {\n\tpadding: 0;\n\tmargin: 0;\n}\np[data-action=\"lose\"] {\n\tdisplay: none;\n}\n.active {\n\topacity: 1 !important;\n}\n.clearfix {\n\twidth: 100%;\n\tclear: both;\n}\n.wrapper {\n\twidth: 540px;\n\tmargin: 0 auto;\n}\n.container {\n\twidth: 305px;\n}\n.simon {\n\tbackground: #fff;\n\tposition: relative;\n\tfloat: left;\n\tmargin-right: 3em;\n\twidth: 302px;\n\theight: 295px;\n\tborder-radius: 150px 150px 150px 150px;\n  -o-box-shadow: 2px 1px 12px #aaa;\n  box-shadow: 2px 1px 12px #aaa;\n}\n.circle {\n\topacity: 0.6;\n\ttransition: opacity 250ms ease;\n  height: 290px;\n\tborder-radius: 150px 150px 150px 150px;\n\tposition: absolute;\n\ttext-indent: 10000px;\n}\n.circle:nth-of-type(1) {\n  background: #FF5643;\n\tclip: rect(0px, 300px, 150px, 150px);\n\twidth: 296px;\n}\n.circle:nth-of-type(2) {\n  background: dodgerblue;\n\tclip: rect(0px, 150px, 150px, 0px);\n\twidth: 300px;\n}\n.circle:nth-of-type(3) {\n  background: #FEEF33;\n\tclip: rect(150px, 150px, 300px, 0px);\n\twidth: 300px;\n}\n.circle:nth-of-type(4) {\n  background: #BEDE15;\n\tclip: rect(150px,300px, 300px, 150px);\n\twidth: 296px;\n}\n.circle:nth-of-type(1):hover,\n.circle:nth-of-type(2):hover,\n.circle:nth-of-type(3):hover,\n.circle:nth-of-type(4):hover {\n  border: 2px solid black\n}\n.circle.lit {\n\topacity: 1;\n}\n.game-info {\n\tmargin-top: 90px;\n}\n.game-info button {\n\twidth: 5em;\n\tbox-sizing: border-box;\n\tfont-size: 1.4em;\n\tborder-radius: 10px 10px 10px 10px;\n\tbackground: #6DABE8;\n\tborder: none;\n\tpadding: 0.3em 0.6em;\n}\n.game-info button:hover {\n\tbackground: #78BCFF;\n}\n.game-options h2 {\n\tmargin-top: 30px;\n\tmargin-bottom: 0;\n}\n.game-options input[type=\"radio\"] {\n\tmargin-right: 10px;\n}\n.hoverable:hover {\n\tcursor: pointer;\n}\n.dud {\n  margin-top: 500px;\n  border: 1px solid black;\n  position: relative;\n  border-radius: 100%;\n}\nfooter {\n\tposition: absolute;\n\tbottom: 20px;\n\twidth: 540px;\n\tclear: both;\n\ttext-align: center;\n}\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-oneOf-1-2!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader-v16/dist??ref--0-1!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../node_modules/vue-loader-v16/dist/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader-v16/dist??ref--0-1!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("d9346794", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/App.vue":
/*!*********************!*\
  !*** ./src/App.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=7ba5bd90 */ "./src/App.vue?vue&type=template&id=7ba5bd90");
/* harmony import */ var _App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js */ "./src/App.vue?vue&type=script&lang=js");
/* empty/unused harmony star reexport *//* harmony import */ var _App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css */ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css");





_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].render = _App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__["render"]
/* hot reload */
if (false) {}

_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"].__file = "src/App.vue"

/* harmony default export */ __webpack_exports__["default"] = (_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/App.vue?vue&type=script&lang=js":
/*!*********************************************!*\
  !*** ./src/App.vue?vue&type=script&lang=js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/babel-loader/lib!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader-v16/dist??ref--0-1!./App.vue?vue&type=script&lang=js */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_App_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* empty/unused harmony star reexport */ 

/***/ }),

/***/ "./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css":
/*!*****************************************************************!*\
  !*** ./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-style-loader??ref--6-oneOf-1-0!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!../node_modules/vue-loader-v16/dist/stylePostLoader.js!../node_modules/postcss-loader/src??ref--6-oneOf-1-2!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader-v16/dist??ref--0-1!./App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=style&index=0&id=7ba5bd90&lang=css");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_6_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_node_modules_vue_loader_v16_dist_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_2_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_App_vue_vue_type_style_index_0_id_7ba5bd90_lang_css__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./src/App.vue?vue&type=template&id=7ba5bd90":
/*!***************************************************!*\
  !*** ./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \***************************************************/
/*! exports provided: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/cache-loader/dist/cjs.js??ref--12-0!../node_modules/babel-loader/lib!../node_modules/vue-loader-v16/dist/templateLoader.js??ref--6!../node_modules/cache-loader/dist/cjs.js??ref--0-0!../node_modules/vue-loader-v16/dist??ref--0-1!./App.vue?vue&type=template&id=7ba5bd90 */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader-v16/dist/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader-v16/dist/index.js?!./src/App.vue?vue&type=template&id=7ba5bd90");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_v16_dist_templateLoader_js_ref_6_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_v16_dist_index_js_ref_0_1_App_vue_vue_type_template_id_7ba5bd90__WEBPACK_IMPORTED_MODULE_0__["render"]; });



/***/ }),

/***/ "./src/assets/sounds sync recursive ^\\.\\/.*\\.mp3$":
/*!**********************************************!*\
  !*** ./src/assets/sounds sync ^\.\/.*\.mp3$ ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./1.mp3": "./src/assets/sounds/1.mp3",
	"./2.mp3": "./src/assets/sounds/2.mp3",
	"./3.mp3": "./src/assets/sounds/3.mp3",
	"./4.mp3": "./src/assets/sounds/4.mp3"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/assets/sounds sync recursive ^\\.\\/.*\\.mp3$";

/***/ }),

/***/ "./src/assets/sounds/1.mp3":
/*!*********************************!*\
  !*** ./src/assets/sounds/1.mp3 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/1.99e50f7d.mp3";

/***/ }),

/***/ "./src/assets/sounds/2.mp3":
/*!*********************************!*\
  !*** ./src/assets/sounds/2.mp3 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/2.d2c4a2c4.mp3";

/***/ }),

/***/ "./src/assets/sounds/3.mp3":
/*!*********************************!*\
  !*** ./src/assets/sounds/3.mp3 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/3.c1c96b44.mp3";

/***/ }),

/***/ "./src/assets/sounds/4.mp3":
/*!*********************************!*\
  !*** ./src/assets/sounds/4.mp3 ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "media/4.36d5a722.mp3";

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var C_Users_danya_Desktop_vue_vue_simon_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var C_Users_danya_Desktop_vue_vue_simon_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(C_Users_danya_Desktop_vue_vue_simon_node_modules_core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_danya_Desktop_vue_vue_simon_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var C_Users_danya_Desktop_vue_vue_simon_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(C_Users_danya_Desktop_vue_vue_simon_node_modules_core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_danya_Desktop_vue_vue_simon_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.object.assign.js */ "./node_modules/core-js/modules/es.object.assign.js");
/* harmony import */ var C_Users_danya_Desktop_vue_vue_simon_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_danya_Desktop_vue_vue_simon_node_modules_core_js_modules_es_object_assign_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_danya_Desktop_vue_vue_simon_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/core-js/modules/es.promise.finally.js */ "./node_modules/core-js/modules/es.promise.finally.js");
/* harmony import */ var C_Users_danya_Desktop_vue_vue_simon_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(C_Users_danya_Desktop_vue_vue_simon_node_modules_core_js_modules_es_promise_finally_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./App.vue */ "./src/App.vue");
/* harmony import */ var _vue_devtools__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vue/devtools */ "./node_modules/@vue/devtools/index.js");
/* harmony import */ var _vue_devtools__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_vue_devtools__WEBPACK_IMPORTED_MODULE_6__);








if (true) {
  _vue_devtools__WEBPACK_IMPORTED_MODULE_6___default.a.connect();
}

Object(vue__WEBPACK_IMPORTED_MODULE_4__["createApp"])(_App_vue__WEBPACK_IMPORTED_MODULE_5__["default"]).mount('#app');

/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/main.js */"./src/main.js");


/***/ })

/******/ });
//# sourceMappingURL=app.js.map