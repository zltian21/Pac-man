/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./node_modules/querystring/decode.js":
/*!********************************************!*\
  !*** ./node_modules/querystring/decode.js ***!
  \********************************************/
/***/ ((module) => {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
}

module.exports = function(qs, sep, eq, options) {
  sep = sep || '&';
  eq = eq || '=';
  var obj = {};

  if (typeof qs !== 'string' || qs.length === 0) {
    return obj;
  }

  var regexp = /\+/g;
  qs = qs.split(sep);

  var maxKeys = 1000;
  if (options && typeof options.maxKeys === 'number') {
    maxKeys = options.maxKeys;
  }

  var len = qs.length;
  // maxKeys <= 0 means that we should not limit keys count
  if (maxKeys > 0 && len > maxKeys) {
    len = maxKeys;
  }

  for (var i = 0; i < len; ++i) {
    var x = qs[i].replace(regexp, '%20'),
        idx = x.indexOf(eq),
        kstr, vstr, k, v;

    if (idx >= 0) {
      kstr = x.substr(0, idx);
      vstr = x.substr(idx + 1);
    } else {
      kstr = x;
      vstr = '';
    }

    k = decodeURIComponent(kstr);
    v = decodeURIComponent(vstr);

    if (!hasOwnProperty(obj, k)) {
      obj[k] = v;
    } else if (Array.isArray(obj[k])) {
      obj[k].push(v);
    } else {
      obj[k] = [obj[k], v];
    }
  }

  return obj;
};


/***/ }),

/***/ "./node_modules/querystring/encode.js":
/*!********************************************!*\
  !*** ./node_modules/querystring/encode.js ***!
  \********************************************/
/***/ ((module) => {

// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var stringifyPrimitive = function(v) {
  switch (typeof v) {
    case 'string':
      return v;

    case 'boolean':
      return v ? 'true' : 'false';

    case 'number':
      return isFinite(v) ? v : '';

    default:
      return '';
  }
};

module.exports = function(obj, sep, eq, name) {
  sep = sep || '&';
  eq = eq || '=';
  if (obj === null) {
    obj = undefined;
  }

  if (typeof obj === 'object') {
    return Object.keys(obj).map(function(k) {
      var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
      if (Array.isArray(obj[k])) {
        return obj[k].map(function(v) {
          return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
      } else {
        return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
      }
    }).join(sep);

  }

  if (!name) return '';
  return encodeURIComponent(stringifyPrimitive(name)) + eq +
         encodeURIComponent(stringifyPrimitive(obj));
};


/***/ }),

/***/ "./node_modules/querystring/index.js":
/*!*******************************************!*\
  !*** ./node_modules/querystring/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



exports.decode = exports.parse = __webpack_require__(/*! ./decode */ "./node_modules/querystring/decode.js");
exports.encode = exports.stringify = __webpack_require__(/*! ./encode */ "./node_modules/querystring/encode.js");


/***/ }),

/***/ "./src/Game.ts":
/*!*********************!*\
  !*** ./src/Game.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/common.ts");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./request */ "./src/request.ts");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};


var Game = /** @class */ (function () {
    function Game() {
        this.lives = 3;
        this.speed = 'med';
        this.level = 1;
        this.score = 360;
        this.spawningPoint = null;
        this.collectedFruits = [];
        this.gameTime = 0;
        this.pacMan = null;
        this.ghosts = [];
        this.bigDots = [];
        this.normalDots = [];
        this.fruit = null;
        this.isStarted = false;
        this.isGameOver = false;
        this.isEditMode = false;
        this.lives = +(localStorage.getItem('lives') || 3);
        this.level = 0;
        this.speed = localStorage.getItem('speed') || 'med';
        this.score = 0;
        this.spawningPoint = JSON.parse(localStorage.getItem('point') || '{"x": 216, "y": 264}');
        this.collectedFruits = [];
        this.gameTime = 0;
        this.pacMan = null;
        this.ghosts = [];
        this.bigDots = [];
        this.normalDots = [];
        this.fruit = null;
        this.isStarted = false;
        this.isGameOver = false;
        this.isEditMode = false;
    }
    Game.prototype.updateGameInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, getDirection, data;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0,_request__WEBPACK_IMPORTED_MODULE_1__.request)({
                            url: '/updateGameStore',
                            method: 'POST',
                        })];
                    case 1:
                        response = _a.sent();
                        if (!response) {
                            throw new Error('Error in request');
                        }
                        getDirection = function (_a) {
                            var x = _a.x, y = _a.y;
                            if (!x) {
                                return y > 0 ? _common__WEBPACK_IMPORTED_MODULE_0__.DIRECTIONS.DOWN : _common__WEBPACK_IMPORTED_MODULE_0__.DIRECTIONS.UP;
                            }
                            return x > 0 ? _common__WEBPACK_IMPORTED_MODULE_0__.DIRECTIONS.RIGHT : _common__WEBPACK_IMPORTED_MODULE_0__.DIRECTIONS.LEFT;
                        };
                        data = response.data;
                        this.score = data.score;
                        this.level = data.difficulty;
                        this.collectedFruits = data.collectedFruits || [];
                        this.lives = data.lives;
                        this.isGameOver = data.isGameOver;
                        if (this.isGameOver) {
                            this.isStarted = false;
                        }
                        this.pacMan = __assign(__assign({}, data.pacMan), { direction: getDirection(data.pacMan.speed) });
                        this.ghosts = data.ghosts || [];
                        this.bigDots = data.bigDots || [];
                        this.normalDots = data.normalDots || [];
                        this.fruit = data.fruit;
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.saveGameSettings = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0,_request__WEBPACK_IMPORTED_MODULE_1__.request)({
                            url: '/setGame',
                            method: 'POST',
                            body: {
                                x: this.spawningPoint.x,
                                y: this.spawningPoint.y,
                                lives: this.lives,
                                speed: this.speed,
                            },
                        })];
                    case 1:
                        _a.sent();
                        localStorage.setItem('lives', this.lives + '');
                        localStorage.setItem('speed', this.speed);
                        localStorage.setItem('point', JSON.stringify(this.spawningPoint));
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.start = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (0,_request__WEBPACK_IMPORTED_MODULE_1__.request)({
                            url: '/init',
                            method: 'POST',
                        })];
                    case 1:
                        _a.sent();
                        this.isStarted = true;
                        return [2 /*return*/];
                }
            });
        });
    };
    Game.prototype.gameTimeIncrease = function () {
        this.gameTime++;
        if (this.gameTime === 1000000) {
            this.gameTime = 0;
        }
    };
    Game.prototype.getGameTime = function () {
        return this.gameTime;
    };
    Game.prototype.setLives = function (lives) {
        this.lives = lives;
    };
    Game.prototype.getLives = function () {
        return this.lives;
    };
    Game.prototype.setSpeed = function (speed) {
        this.speed = speed;
    };
    Game.prototype.getSpeed = function () {
        return this.speed;
    };
    Game.prototype.getLevel = function () {
        return this.level;
    };
    Game.prototype.getNormalDots = function () {
        return this.normalDots;
    };
    Game.prototype.getBigDots = function () {
        return this.bigDots;
    };
    Game.prototype.getGhosts = function () {
        return this.ghosts;
    };
    Game.prototype.getPacman = function () {
        return this.pacMan;
    };
    Game.prototype.getFruit = function () {
        return this.fruit;
    };
    Game.prototype.getDotsCount = function () {
        return this.normalDots.length + this.bigDots.length;
    };
    Game.prototype.getScore = function () {
        return this.score;
    };
    Game.prototype.getCollectives = function () {
        return this.collectedFruits;
    };
    Game.prototype.getIsStarted = function () {
        return this.isStarted;
    };
    Game.prototype.setIsStarted = function (isStarted) {
        this.isStarted = isStarted;
        this.lives = +(localStorage.getItem('lives') || 3);
        this.speed = localStorage.getItem('speed') || 'med';
        this.spawningPoint = JSON.parse(localStorage.getItem('point') || '{"x": 216, "y": 264}');
    };
    Game.prototype.getIsEditMode = function () {
        return this.isEditMode;
    };
    Game.prototype.getIsGameOver = function () {
        return this.isGameOver;
    };
    Game.prototype.setEditMode = function (isEditMode) {
        this.isEditMode = isEditMode;
    };
    Game.prototype.setSpawningPoint = function (point) {
        this.spawningPoint = point;
    };
    return Game;
}());
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);


/***/ }),

/***/ "./src/canvas.ts":
/*!***********************!*\
  !*** ./src/canvas.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCanvasContext": () => (/* binding */ getCanvasContext),
/* harmony export */   "clear": () => (/* binding */ clear),
/* harmony export */   "drawWalls": () => (/* binding */ drawWalls),
/* harmony export */   "drawGhost": () => (/* binding */ drawGhost),
/* harmony export */   "drawPacMan": () => (/* binding */ drawPacMan),
/* harmony export */   "drawDot": () => (/* binding */ drawDot),
/* harmony export */   "drawFruit": () => (/* binding */ drawFruit)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/common.ts");

var ctx;
var canvas;
var getCanvasContext = function () {
    !canvas && (canvas = document.querySelector('#canvas'));
    !ctx && (ctx = (canvas === null || canvas === void 0 ? void 0 : canvas.getContext('2d')) || null);
    return { ctx: ctx, canvas: canvas };
};
var clear = function (shouldDrawWalls) {
    if (!ctx) {
        getCanvasContext();
    }
    if (ctx) {
        ctx.clearRect(0, 0, _common__WEBPACK_IMPORTED_MODULE_0__.WIDTH, _common__WEBPACK_IMPORTED_MODULE_0__.HEIGHT);
        shouldDrawWalls && drawWalls();
    }
};
var drawWalls = function () {
    if (!ctx) {
        return;
    }
    ctx.save();
    ctx.strokeStyle = '#4ec2f7';
    ctx.lineWidth = 4;
    ctx.shadowColor = '#a6e0fb';
    ctx.shadowBlur = 20;
    // Upper boundary
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.lineTo(_common__WEBPACK_IMPORTED_MODULE_0__.WIDTH, 0);
    ctx.lineTo(_common__WEBPACK_IMPORTED_MODULE_0__.WIDTH, 10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(_common__WEBPACK_IMPORTED_MODULE_0__.WIDTH - 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(_common__WEBPACK_IMPORTED_MODULE_0__.WIDTH - 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(26 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(26 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 4 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(24 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 4 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(24 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(22 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(22 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 4 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(20 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 4 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(20 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(0, 10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.closePath();
    ctx.stroke();
    // Lower boundary
    ctx.beginPath();
    ctx.moveTo(0, 12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, _common__WEBPACK_IMPORTED_MODULE_0__.HEIGHT - 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(_common__WEBPACK_IMPORTED_MODULE_0__.WIDTH - 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, _common__WEBPACK_IMPORTED_MODULE_0__.HEIGHT - 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(_common__WEBPACK_IMPORTED_MODULE_0__.WIDTH - 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(_common__WEBPACK_IMPORTED_MODULE_0__.WIDTH, 12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(_common__WEBPACK_IMPORTED_MODULE_0__.WIDTH, _common__WEBPACK_IMPORTED_MODULE_0__.HEIGHT);
    ctx.lineTo(0, _common__WEBPACK_IMPORTED_MODULE_0__.HEIGHT);
    ctx.closePath();
    ctx.stroke();
    // 2 Walls at middle bottom
    ctx.strokeRect(20 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 16 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.strokeRect(24 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 16 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    // 4 walls on the right
    ctx.strokeRect(_common__WEBPACK_IMPORTED_MODULE_0__.WIDTH - 6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 4 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.strokeRect(_common__WEBPACK_IMPORTED_MODULE_0__.WIDTH - 6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 8 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.strokeRect(_common__WEBPACK_IMPORTED_MODULE_0__.WIDTH - 6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.strokeRect(_common__WEBPACK_IMPORTED_MODULE_0__.WIDTH - 6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 16 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    // R
    ctx.strokeStyle = '#8a4af3';
    ctx.shadowColor = '#ad80f6';
    ctx.beginPath();
    ctx.moveTo(4 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 4 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 4 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(8 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(8 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(8 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(8 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 18 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(8 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 18 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(8 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 18 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(4 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 18 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.closePath();
    ctx.stroke();
    // I
    ctx.strokeStyle = '#f44336';
    ctx.shadowColor = '#f77b72';
    ctx.strokeRect(12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 4 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.strokeRect(12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 8 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.strokeRect(16 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 8 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.strokeRect(12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 16 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    // C
    ctx.strokeStyle = '#66de6e';
    ctx.shadowColor = '#a3eba8';
    ctx.beginPath();
    ctx.moveTo(20 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(26 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(26 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(24 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(24 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 8 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(22 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 8 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(22 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 14 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(24 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 14 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(24 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(26 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(26 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 16 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(20 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 16 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.closePath();
    ctx.stroke();
    // Barrier
    ctx.save();
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 2;
    ctx.setLineDash([5]);
    ctx.beginPath();
    ctx.moveTo(26 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(26 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.closePath();
    ctx.stroke();
    // E
    ctx.restore();
    ctx.strokeStyle = '#eba3e6';
    ctx.shadowColor = '#f3c7f0';
    ctx.strokeRect(28 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 4 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.strokeRect(28 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 16 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.beginPath();
    ctx.moveTo(28 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 8 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(34 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 8 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(34 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(30 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(30 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(34 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(34 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 14 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.lineTo(28 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, 14 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT);
    ctx.closePath();
    ctx.stroke();
    ctx.restore();
};
var drawGhost = function (x, y, color, isTwoEye, isBlinking, time) {
    if (!ctx) {
        return;
    }
    x -= 14;
    y -= 14;
    if (!isTwoEye) {
        ctx.fillStyle = color;
        ctx.lineWidth = 2;
        ctx.shadowBlur = 0;
        ctx.shadowColor = '';
        ctx.beginPath();
        ctx.moveTo(x, y + 28);
        ctx.lineTo(x, y + 14);
        ctx.bezierCurveTo(x, y + 6, x + 6, y, x + 14, y);
        ctx.bezierCurveTo(x + 22, y, x + 28, y + 6, x + 28, y + 14);
        ctx.lineTo(x + 28, y + 28);
        ctx.lineTo(x + 23.333, y + 23.333);
        ctx.lineTo(x + 18.666, y + 28);
        ctx.lineTo(x + 14, y + 23.333);
        ctx.lineTo(x + 9.333, y + 28);
        ctx.lineTo(x + 4.666, y + 23.333);
        ctx.lineTo(x, y + 28);
        if (isBlinking &&
            time !== undefined &&
            ((time - 1) % 6 == 0 || (time - 2) % 6 == 0 || (time - 3) % 6 == 0)) {
            ctx.fillStyle = 'blue';
        }
        ctx.fill();
    }
    ctx.fillStyle = 'white';
    ctx.beginPath();
    ctx.moveTo(x + 8, y + 8);
    ctx.bezierCurveTo(x + 5, y + 8, x + 4, y + 11, x + 4, y + 13);
    ctx.bezierCurveTo(x + 4, y + 15, x + 5, y + 18, x + 8, y + 18);
    ctx.bezierCurveTo(x + 11, y + 18, x + 12, y + 15, x + 12, y + 13);
    ctx.bezierCurveTo(x + 12, y + 11, x + 11, y + 8, x + 8, y + 8);
    ctx.moveTo(x + 20, y + 8);
    ctx.bezierCurveTo(x + 17, y + 8, x + 16, y + 11, x + 16, y + 13);
    ctx.bezierCurveTo(x + 16, y + 15, x + 17, y + 18, x + 20, y + 18);
    ctx.bezierCurveTo(x + 23, y + 18, x + 24, y + 15, x + 24, y + 13);
    ctx.bezierCurveTo(x + 24, y + 11, x + 23, y + 8, x + 20, y + 8);
    ctx.fill();
    ctx.fillStyle = 'black';
    ctx.beginPath();
    ctx.arc(x + 20, y + 14, 2, 0, Math.PI * 2, true);
    ctx.fill();
    ctx.beginPath();
    ctx.arc(x + 8, y + 14, 2, 0, Math.PI * 2, true);
    ctx.fill();
};
var drawPacMan = function (x, y, direction, time) {
    if (!ctx) {
        return;
    }
    ctx.beginPath();
    ctx.fillStyle = '#ffc107';
    if (time !== undefined && ((time - 1) % 4 === 0 || (time - 2) % 4 === 0)) {
        ctx.arc(x, y, 12, 0, Math.PI * 2, false);
        ctx.closePath();
        ctx.fill();
        return;
    }
    switch (direction) {
        case _common__WEBPACK_IMPORTED_MODULE_0__.DIRECTIONS.RIGHT:
            ctx.arc(x, y, 12, Math.PI / 7, -Math.PI / 7, false);
            ctx.lineTo(x - 5, y);
            break;
        case _common__WEBPACK_IMPORTED_MODULE_0__.DIRECTIONS.LEFT:
            ctx.arc(x, y, 12, (Math.PI * 6) / 7, (Math.PI * 8) / 7, true);
            ctx.lineTo(x + 5, y);
            break;
        case _common__WEBPACK_IMPORTED_MODULE_0__.DIRECTIONS.UP:
            ctx.arc(x, y, 12, -(Math.PI * 5) / 14, (Math.PI * 19) / 14, false);
            ctx.lineTo(x, y + 5);
            break;
        case _common__WEBPACK_IMPORTED_MODULE_0__.DIRECTIONS.DOWN:
            ctx.arc(x, y, 12, (Math.PI * 9) / 14, (Math.PI * 5) / 14, false);
            ctx.lineTo(x, y - 5);
    }
    ctx.fill();
};
var drawDot = function (x, y, isBig, time) {
    if (!ctx) {
        return;
    }
    ctx.fillStyle = '#ff9800';
    ctx.beginPath();
    if (isBig) {
        ctx.ellipse(x, y, 8 / ((time % 4) + 1), 8, 0, 0, 2 * Math.PI);
    }
    else {
        ctx.arc(x, y, 3, 0, 2 * Math.PI);
    }
    ctx.closePath();
    ctx.fill();
};
var drawFruit = function (x, y, type) {
    if (!ctx) {
        return;
    }
    x -= 14;
    y -= 14;
    var image = new Image(32, 32);
    image.src = _common__WEBPACK_IMPORTED_MODULE_0__.FRUIT[type];
    ctx.drawImage(image, x, y, 32, 32);
};


/***/ }),

/***/ "./src/common.ts":
/*!***********************!*\
  !*** ./src/common.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UNIT": () => (/* binding */ UNIT),
/* harmony export */   "WIDTH": () => (/* binding */ WIDTH),
/* harmony export */   "HEIGHT": () => (/* binding */ HEIGHT),
/* harmony export */   "DIRECTIONS": () => (/* binding */ DIRECTIONS),
/* harmony export */   "FRUITS": () => (/* binding */ FRUITS),
/* harmony export */   "COLOR": () => (/* binding */ COLOR),
/* harmony export */   "FRUIT": () => (/* binding */ FRUIT),
/* harmony export */   "lifeImage": () => (/* binding */ lifeImage),
/* harmony export */   "sleep": () => (/* binding */ sleep)
/* harmony export */ });
var UNIT = 24;
var WIDTH = 1008;
var HEIGHT = 528;
var DIRECTIONS;
(function (DIRECTIONS) {
    DIRECTIONS[DIRECTIONS["UP"] = 0] = "UP";
    DIRECTIONS[DIRECTIONS["DOWN"] = 1] = "DOWN";
    DIRECTIONS[DIRECTIONS["LEFT"] = 2] = "LEFT";
    DIRECTIONS[DIRECTIONS["RIGHT"] = 3] = "RIGHT";
})(DIRECTIONS || (DIRECTIONS = {}));
var FRUITS;
(function (FRUITS) {
    FRUITS[FRUITS["CHERRY"] = 0] = "CHERRY";
    FRUITS[FRUITS["ORANGE"] = 1] = "ORANGE";
    FRUITS[FRUITS["BANANA"] = 2] = "BANANA";
    FRUITS[FRUITS["APPLE"] = 3] = "APPLE";
    FRUITS[FRUITS["AVOCADO"] = 4] = "AVOCADO";
})(FRUITS || (FRUITS = {}));
var COLOR = {
    red: '#e91e63',
    yellow: '#ffcc01',
    blue: '#00fcff',
    pink: '#fea0cc',
};
var FRUIT = {
    avocado: 'https://res.cloudinary.com/rylanzhou/image/upload/v1637006888/COMP%20504/avocado_latpoc.png',
    cherry: 'https://res.cloudinary.com/rylanzhou/image/upload/v1637006888/COMP%20504/cherry_irhhhz.png',
    orange: 'https://res.cloudinary.com/rylanzhou/image/upload/v1637006888/COMP%20504/orange_y7ehso.png',
    banana: 'https://res.cloudinary.com/rylanzhou/image/upload/v1637006888/COMP%20504/banana_ksnsbc.png',
    apple: 'https://res.cloudinary.com/rylanzhou/image/upload/v1637006888/COMP%20504/apple_hr27jm.png',
};
var lifeImage = new Image(30, 30);
lifeImage.src =
    'https://res.cloudinary.com/rylanzhou/image/upload/v1636996530/COMP%20504/pacman_r4rhhz.svg';
var sleep = function (timeout) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve();
        }, timeout);
    });
};


/***/ }),

/***/ "./src/data.ts":
/*!*********************!*\
  !*** ./src/data.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dots": () => (/* binding */ dots),
/* harmony export */   "dotsMap": () => (/* binding */ dotsMap)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common */ "./src/common.ts");

var dots = [
    // 4 big dots
    { x: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: true },
    { x: 39 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: true },
    { x: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: true },
    { x: 39 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: true },
    // Line 1
    { x: 4 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 5 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 8 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 9 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 13 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 14 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 16 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 17 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 18 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 23 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 27 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 28 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 29 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 30 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 31 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 32 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 33 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 34 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 35 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 36 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 37 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 38 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Last line
    { x: 4 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 5 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 8 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 9 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 13 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 14 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 16 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 17 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 18 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 20 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 21 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // { x: 22 * UNIT, y: 19 * UNIT, isBig: false },
    // { x: 23 * UNIT, y: 19 * UNIT, isBig: false },
    { x: 24 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 25 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 26 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 27 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 28 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 29 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 30 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 31 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 32 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 33 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 34 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 35 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 36 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 37 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 38 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 1
    { x: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 4 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 5 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 8 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 9 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 13 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 14 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 16 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 17 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 3 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 18 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 2
    { x: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 13 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 14 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 16 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 17 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 18 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 3
    { x: 9 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 4
    { x: 10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 5
    { x: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 4 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 5 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 8 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 9 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 13 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 14 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 16 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 17 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 18 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 6
    { x: 12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 7
    { x: 13 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 13 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 8
    { x: 14 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 14 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 9
    { x: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 8 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 9 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 13 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 14 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 10
    { x: 16 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 16 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 11
    { x: 17 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 17 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 12
    { x: 18 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 18 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 13
    { x: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 4 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 5 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 8 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 9 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 13 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 14 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 16 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 17 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 18 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 14
    { x: 20 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 5 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 15
    { x: 21 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 5 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 16
    { x: 22 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 5 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 22 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 17
    { x: 23 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 4 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 23 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 5 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 23 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 17 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 23 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 18 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 23 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 19 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 18
    { x: 24 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 5 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 19
    { x: 25 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 5 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 20
    { x: 26 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 5 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 21
    { x: 27 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 4 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 27 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 5 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 27 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 27 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 27 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 8 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 27 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 9 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 27 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 27 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 27 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 27 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 13 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 27 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 14 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 27 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 27 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 16 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 27 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 17 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 27 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 18 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 22
    { x: 28 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 28 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 23
    { x: 29 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 29 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 24
    { x: 30 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 30 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 25
    { x: 31 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 31 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 31 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 26
    { x: 32 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 32 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 32 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 27
    { x: 33 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 33 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 33 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 28
    { x: 34 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 34 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 34 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 29
    { x: 35 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 4 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 35 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 5 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 35 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 35 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 35 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 8 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 35 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 9 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 35 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 35 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 35 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 35 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 13 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 35 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 14 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 35 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 35 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 16 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 35 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 17 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 35 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 18 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 30
    { x: 36 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 36 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 36 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 30
    { x: 37 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 37 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 37 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 30
    { x: 38 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 38 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 38 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // Column 31
    { x: 39 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 4 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 39 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 5 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 39 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 6 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 39 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 7 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 39 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 8 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 39 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 9 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 39 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 10 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 39 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 39 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 12 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 39 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 13 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 39 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 14 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 39 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 15 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 39 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 16 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 39 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 17 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 39 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 18 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    // On the exit
    { x: 1 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 2 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 40 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
    { x: 41 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, y: 11 * _common__WEBPACK_IMPORTED_MODULE_0__.UNIT, isBig: false },
];
var dotsMap = dots.reduce(function (prev, curr) {
    if (!prev[curr.x]) {
        prev[curr.x] = new Set();
    }
    prev[curr.x].add(curr.y);
    return prev;
}, {});


/***/ }),

/***/ "./src/request.ts":
/*!************************!*\
  !*** ./src/request.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "request": () => (/* binding */ request)
/* harmony export */ });
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! querystring */ "./node_modules/querystring/index.js");
var __assign = (undefined && undefined.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var request = function (params) { return __awaiter(void 0, void 0, void 0, function () {
    var response, data;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch(params.url, {
                    method: params.method,
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: params.method === 'GET'
                        ? null
                        : querystring__WEBPACK_IMPORTED_MODULE_0__.stringify(__assign(__assign({}, (params.body || {})), { uid: localStorage.getItem('uid') })),
                })];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                data = _a.sent();
                if (response.status >= 400) {
                    throw data;
                }
                return [2 /*return*/, data];
        }
    });
}); };


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _canvas__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./canvas */ "./src/canvas.ts");
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common */ "./src/common.ts");
/* harmony import */ var _Game__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Game */ "./src/Game.ts");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./request */ "./src/request.ts");
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./data */ "./src/data.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






// Startup Page
var maskPanel = document.querySelector('.mask');
var startGameBtn = document.querySelector('#start-btn');
var settingsBtn = document.querySelector('#settings-btn');
var settingsPanel = document.querySelector('.settings-panel');
var positionBtn = document.querySelector('#position');
var livesValue = document.querySelector('#lives .value');
var minusBtn = document.querySelector('#minus');
var plusBtn = document.querySelector('#plus');
var speedBtns = document.querySelectorAll('#speed span');
var confirmBtn = document.querySelector('#confirm');
// NOTE: Not used for now
var restartBtn = document.querySelector('#restart');
// Game Page
var canvas = (0,_canvas__WEBPACK_IMPORTED_MODULE_1__.getCanvasContext)().canvas;
var infoPanel = document.querySelector('.info');
var fruitsIndicator = document.querySelectorAll('.fruits img');
var footer = document.querySelector('.footer');
var pauseBtn = document.querySelector('#pause');
var backBtn = document.querySelector('#back-btn');
var gameOverPanel = document.querySelector('.game-over');
var allCollectedPanel = document.querySelector('.all-collected');
var game = new _Game__WEBPACK_IMPORTED_MODULE_3__["default"]();
var timer = null;
(0,_canvas__WEBPACK_IMPORTED_MODULE_1__.clear)(true);
if (!localStorage.getItem('uid')) {
    localStorage.setItem('uid', Math.random() + '');
}
(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0,_request__WEBPACK_IMPORTED_MODULE_4__.request)({ url: '/setUid', method: 'POST' })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); })();
var drawWithGameData = function (isFirst) { return __awaiter(void 0, void 0, void 0, function () {
    var normalDots, bigDots, ghosts_1, pacman_1, fruit, lifeIndicator, i, image, drawMovingObjs, _i, bigDots_1, _a, x, y, _b, normalDots_1, _c, x, y, error_1;
    return __generator(this, function (_d) {
        switch (_d.label) {
            case 0:
                _d.trys.push([0, 12, , 13]);
                return [4 /*yield*/, game.updateGameInfo()];
            case 1:
                _d.sent();
                (0,_canvas__WEBPACK_IMPORTED_MODULE_1__.clear)(true);
                normalDots = game.getNormalDots();
                bigDots = game.getBigDots();
                ghosts_1 = game.getGhosts();
                pacman_1 = game.getPacman();
                fruit = game.getFruit();
                // Draw in info panel
                infoPanel.querySelector('.level span').innerHTML = "" + ('0' + game.getLevel());
                infoPanel.querySelector('.dots span').innerHTML = "" + ('000' + game.getDotsCount()).slice(-3);
                infoPanel.querySelector('.score span').innerHTML = "" + ('00000' + game.getScore()).slice(-5);
                lifeIndicator = infoPanel.querySelector('.lives');
                while (lifeIndicator.hasChildNodes()) {
                    lifeIndicator.firstChild && lifeIndicator.removeChild(lifeIndicator.firstChild);
                }
                for (i = 0; i < game.getLives(); i++) {
                    image = _common__WEBPACK_IMPORTED_MODULE_2__.lifeImage.cloneNode();
                    lifeIndicator.appendChild(image);
                }
                game
                    .getCollectives()
                    .forEach(function (val, index) {
                    return val
                        ? fruitsIndicator[index].classList.add('collected')
                        : fruitsIndicator[index].classList.remove('collected');
                });
                if (game.getCollectives().every(function (each) { return each; })) {
                    allCollectedPanel === null || allCollectedPanel === void 0 ? void 0 : allCollectedPanel.classList.add('animate');
                }
                drawMovingObjs = function () {
                    ghosts_1.forEach(function (ghost) {
                        if (ghost.status === 'normal') {
                            (0,_canvas__WEBPACK_IMPORTED_MODULE_1__.drawGhost)(ghost.position.x, ghost.position.y, _common__WEBPACK_IMPORTED_MODULE_2__.COLOR[ghost.type]);
                        }
                        else if (ghost.status === 'blink') {
                            (0,_canvas__WEBPACK_IMPORTED_MODULE_1__.drawGhost)(ghost.position.x, ghost.position.y, _common__WEBPACK_IMPORTED_MODULE_2__.COLOR[ghost.type], false, true, game.getGameTime());
                        }
                        else if (ghost.status === 'blue') {
                            (0,_canvas__WEBPACK_IMPORTED_MODULE_1__.drawGhost)(ghost.position.x, ghost.position.y, 'blue');
                        }
                        else if (ghost.status === 'twoeye') {
                            (0,_canvas__WEBPACK_IMPORTED_MODULE_1__.drawGhost)(ghost.position.x, ghost.position.y, _common__WEBPACK_IMPORTED_MODULE_2__.COLOR[ghost.type], true);
                        }
                    });
                    pacman_1 &&
                        (0,_canvas__WEBPACK_IMPORTED_MODULE_1__.drawPacMan)(pacman_1.position.x, pacman_1.position.y, pacman_1.direction, game.getGameTime());
                };
                if (!isFirst) return [3 /*break*/, 10];
                drawMovingObjs();
                _i = 0, bigDots_1 = bigDots;
                _d.label = 2;
            case 2:
                if (!(_i < bigDots_1.length)) return [3 /*break*/, 5];
                _a = bigDots_1[_i].position, x = _a.x, y = _a.y;
                return [4 /*yield*/, (0,_common__WEBPACK_IMPORTED_MODULE_2__.sleep)(10)];
            case 3:
                _d.sent();
                (0,_canvas__WEBPACK_IMPORTED_MODULE_1__.drawDot)(x, y, true);
                _d.label = 4;
            case 4:
                _i++;
                return [3 /*break*/, 2];
            case 5:
                _b = 0, normalDots_1 = normalDots;
                _d.label = 6;
            case 6:
                if (!(_b < normalDots_1.length)) return [3 /*break*/, 9];
                _c = normalDots_1[_b].position, x = _c.x, y = _c.y;
                return [4 /*yield*/, (0,_common__WEBPACK_IMPORTED_MODULE_2__.sleep)(10)];
            case 7:
                _d.sent();
                (0,_canvas__WEBPACK_IMPORTED_MODULE_1__.drawDot)(x, y, false);
                _d.label = 8;
            case 8:
                _b++;
                return [3 /*break*/, 6];
            case 9: return [3 /*break*/, 11];
            case 10:
                normalDots.forEach(function (dot) { return (0,_canvas__WEBPACK_IMPORTED_MODULE_1__.drawDot)(dot.position.x, dot.position.y, false); });
                bigDots.forEach(function (dot) { return (0,_canvas__WEBPACK_IMPORTED_MODULE_1__.drawDot)(dot.position.x, dot.position.y, true, game.getGameTime()); });
                fruit && (0,_canvas__WEBPACK_IMPORTED_MODULE_1__.drawFruit)(fruit.position.x, fruit.position.y, fruit.type);
                drawMovingObjs();
                _d.label = 11;
            case 11:
                // Judge game over
                if (game.getIsGameOver()) {
                    if (timer !== null) {
                        clearInterval(timer);
                        timer = null;
                    }
                    gameOverPanel === null || gameOverPanel === void 0 ? void 0 : gameOverPanel.classList.add('appear');
                }
                return [3 /*break*/, 13];
            case 12:
                error_1 = _d.sent();
                console.log(error_1);
                timer && clearInterval(timer);
                timer = null;
                return [3 /*break*/, 13];
            case 13: return [2 /*return*/];
        }
    });
}); };
/**
 * Global keyboard listener
 */
document.addEventListener('keyup', function (e) { return __awaiter(void 0, void 0, void 0, function () {
    var map;
    return __generator(this, function (_a) {
        if (game.getIsStarted()) {
            e.preventDefault();
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                map = {
                    ArrowUp: 0,
                    ArrowDown: 1,
                    ArrowLeft: 2,
                    ArrowRight: 3,
                };
                (0,_request__WEBPACK_IMPORTED_MODULE_4__.request)({ url: '/changeDirection', method: 'POST', body: { direction: map[e.key] } });
            }
        }
        return [2 /*return*/];
    });
}); });
/**
 * Start game
 * 1. Hide mask
 * 2. Read data from game
 * 3. Display info panel
 * 4. Set game to start
 */
startGameBtn === null || startGameBtn === void 0 ? void 0 : startGameBtn.addEventListener('click', function () {
    if (!infoPanel || !maskPanel) {
        return;
    }
    maskPanel === null || maskPanel === void 0 ? void 0 : maskPanel.classList.add('hidden');
    infoPanel === null || infoPanel === void 0 ? void 0 : infoPanel.classList.remove('hidden');
    (function () { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, game.saveGameSettings()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, game.start()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, drawWithGameData(true)];
                case 3:
                    _a.sent();
                    if (timer) {
                        clearInterval(timer);
                    }
                    timer = setInterval(function () {
                        drawWithGameData().then(function () { return game.gameTimeIncrease(); });
                    }, 100);
                    footer === null || footer === void 0 ? void 0 : footer.classList.remove('hidden');
                    return [2 /*return*/];
            }
        });
    }); })();
});
restartBtn === null || restartBtn === void 0 ? void 0 : restartBtn.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                infoPanel === null || infoPanel === void 0 ? void 0 : infoPanel.classList.add('hidden');
                return [4 /*yield*/, (0,_request__WEBPACK_IMPORTED_MODULE_4__.request)({ url: '/init', method: 'POST' })];
            case 1:
                _a.sent();
                return [2 /*return*/];
        }
    });
}); });
settingsBtn === null || settingsBtn === void 0 ? void 0 : settingsBtn.addEventListener('click', function () {
    livesValue.innerHTML = "" + game.getLives();
    speedBtns.forEach(function (each) {
        if (each.getAttribute('name') === game.getSpeed()) {
            each.classList.add('active');
        }
        else {
            each.classList.remove('active');
        }
    });
    settingsPanel === null || settingsPanel === void 0 ? void 0 : settingsPanel.classList.toggle('hidden');
});
positionBtn === null || positionBtn === void 0 ? void 0 : positionBtn.addEventListener('click', function () {
    maskPanel === null || maskPanel === void 0 ? void 0 : maskPanel.classList.add('hidden');
    game.setEditMode(true);
});
minusBtn === null || minusBtn === void 0 ? void 0 : minusBtn.addEventListener('click', function () {
    var lives = game.getLives();
    if (lives <= 1) {
        return;
    }
    else {
        game.setLives(lives - 1);
        livesValue.innerHTML = "" + game.getLives();
    }
});
plusBtn === null || plusBtn === void 0 ? void 0 : plusBtn.addEventListener('click', function () {
    var lives = game.getLives();
    if (lives === 5) {
        return;
    }
    else {
        game.setLives(lives + 1);
        livesValue.innerHTML = "" + game.getLives();
    }
});
speedBtns.forEach(function (each) {
    each.addEventListener('click', function () {
        game.setSpeed(each.getAttribute('name') || 'med');
        speedBtns.forEach(function (other) {
            if (other !== each) {
                other.classList.remove('active');
            }
            else {
                other.classList.add('active');
            }
        });
    });
});
confirmBtn === null || confirmBtn === void 0 ? void 0 : confirmBtn.addEventListener('click', function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, game.saveGameSettings()];
            case 1:
                _a.sent();
                settingsPanel === null || settingsPanel === void 0 ? void 0 : settingsPanel.classList.add('hidden');
                return [2 /*return*/];
        }
    });
}); });
canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('mousemove', function (e) {
    e.stopPropagation();
    if (game.getIsEditMode()) {
        var offsetX = e.offsetX, offsetY = e.offsetY;
        var posX = _common__WEBPACK_IMPORTED_MODULE_2__.UNIT * Math.round(offsetX / _common__WEBPACK_IMPORTED_MODULE_2__.UNIT);
        var posY = _common__WEBPACK_IMPORTED_MODULE_2__.UNIT * Math.round(offsetY / _common__WEBPACK_IMPORTED_MODULE_2__.UNIT);
        if (!(posX in _data__WEBPACK_IMPORTED_MODULE_5__.dotsMap) || !_data__WEBPACK_IMPORTED_MODULE_5__.dotsMap[posX].has(posY)) {
            return;
        }
        (0,_canvas__WEBPACK_IMPORTED_MODULE_1__.clear)(true);
        (0,_canvas__WEBPACK_IMPORTED_MODULE_1__.drawPacMan)(posX, posY, _common__WEBPACK_IMPORTED_MODULE_2__.DIRECTIONS.RIGHT);
    }
});
canvas === null || canvas === void 0 ? void 0 : canvas.addEventListener('click', function (e) {
    e.stopPropagation();
    if (game.getIsEditMode()) {
        var offsetX = e.offsetX, offsetY = e.offsetY;
        var posX = _common__WEBPACK_IMPORTED_MODULE_2__.UNIT * Math.round(offsetX / _common__WEBPACK_IMPORTED_MODULE_2__.UNIT);
        var posY = _common__WEBPACK_IMPORTED_MODULE_2__.UNIT * Math.round(offsetY / _common__WEBPACK_IMPORTED_MODULE_2__.UNIT);
        game.setSpawningPoint({ x: posX, y: posY });
        (0,_canvas__WEBPACK_IMPORTED_MODULE_1__.clear)(true);
        maskPanel === null || maskPanel === void 0 ? void 0 : maskPanel.classList.remove('hidden');
    }
    game.setEditMode(false);
});
pauseBtn === null || pauseBtn === void 0 ? void 0 : pauseBtn.addEventListener('click', function () {
    if (game.getIsGameOver()) {
        return;
    }
    if (timer) {
        clearInterval(timer);
        timer = null;
    }
    else {
        timer = setInterval(function () {
            drawWithGameData().then(function () { return game.gameTimeIncrease(); });
        }, 100);
    }
});
backBtn === null || backBtn === void 0 ? void 0 : backBtn.addEventListener('click', function () {
    maskPanel === null || maskPanel === void 0 ? void 0 : maskPanel.classList.remove('hidden');
    infoPanel === null || infoPanel === void 0 ? void 0 : infoPanel.classList.add('hidden');
    footer === null || footer === void 0 ? void 0 : footer.classList.add('hidden');
    gameOverPanel === null || gameOverPanel === void 0 ? void 0 : gameOverPanel.classList.remove('appear');
    allCollectedPanel === null || allCollectedPanel === void 0 ? void 0 : allCollectedPanel.classList.remove('animate');
    fruitsIndicator.forEach(function (each) { return each.classList.remove('collected'); });
    game.setIsStarted(false);
    (0,_canvas__WEBPACK_IMPORTED_MODULE_1__.clear)(true);
    timer && clearInterval(timer);
    timer = null;
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxDQUFDLEdBQUcseUNBQUksQ0FBQyxDQUFDO0lBRXpELElBQUk7SUFDSixHQUFHLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUM1QixHQUFHLENBQUMsV0FBVyxHQUFHLFNBQVMsQ0FBQztJQUM1QixHQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7SUFDaEIsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEdBQUcseUNBQUksQ0FBQyxDQUFDO0lBQ2hDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLENBQUMsQ0FBQztJQUNoQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxDQUFDLENBQUM7SUFDakMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcseUNBQUksRUFBRSxFQUFFLEdBQUcseUNBQUksQ0FBQyxDQUFDO0lBQ2pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLENBQUMsQ0FBQztJQUNoQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsR0FBRyx5Q0FBSSxDQUFDLENBQUM7SUFDaEMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcseUNBQUksRUFBRSxFQUFFLEdBQUcseUNBQUksQ0FBQyxDQUFDO0lBQ2pDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRSxHQUFHLHlDQUFJLEVBQUUsRUFBRSxHQUFHLHlDQUFJLENBQUMsQ0FBQztJQUNqQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxDQUFDLENBQUM7SUFDakMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFLEdBQUcseUNBQUksRUFBRSxFQUFFLEdBQUcseUNBQUksQ0FBQyxDQUFDO0lBQ2pD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LEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQy9ELEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNsRSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDL0QsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMxQixHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDakUsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQ2xFLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNsRSxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7SUFDaEUsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBRVgsR0FBRyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUM7SUFDeEIsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDakQsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0lBRVgsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDaEQsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO0FBQ2IsQ0FBQyxDQUFDO0FBRUssSUFBTSxVQUFVLEdBQUcsVUFBQyxDQUFTLEVBQUUsQ0FBUyxFQUFFLFNBQXFCLEVBQUUsSUFBYTtJQUNuRixJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1IsT0FBTztLQUNSO0lBRUQsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzFCLElBQUksSUFBSSxLQUFLLFNBQVMsSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxFQUFFO1FBQ3hFLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3pDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWCxPQUFPO0tBQ1I7SUFFRCxRQUFRLFNBQVMsRUFBRTtRQUNqQixLQUFLLHFEQUFnQjtZQUNuQixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDcEQsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3JCLE1BQU07UUFDUixLQUFLLG9EQUFlO1lBQ2xCLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzlELEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNO1FBQ1IsS0FBSyxrREFBYTtZQUNoQixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDLEdBQUcsRUFBRSxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBQ25FLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUNyQixNQUFNO1FBQ1IsS0FBSyxvREFBZTtZQUNsQixHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsSUFBSSxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxJQUFJLENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQztZQUNqRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7S0FDeEI7SUFDRCxHQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7QUFDYixDQUFDLENBQUM7QUFFSyxJQUFNLE9BQU8sR0FBRyxVQUFDLENBQVMsRUFBRSxDQUFTLEVBQUUsS0FBZSxFQUFFLElBQWE7SUFDMUUsSUFBSSxDQUFDLEdBQUcsRUFBRTtRQUNSLE9BQU87S0FDUjtJQUVELEdBQUcsQ0FBQyxTQUFTLEdBQUcsU0FBUyxDQUFDO0lBQzFCLEdBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUVoQixJQUFJLEtBQUssRUFBRTtRQUNULEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2hFO1NBQU07UUFDTCxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0tBQ2xDO0lBQ0QsR0FBRyxDQUFDLFNBQVMsRUFBRSxDQUFDO0lBQ2hCLEdBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztBQUNiLENBQUMsQ0FBQztBQUVLLElBQU0sU0FBUyxHQUFHLFVBQUMsQ0FBUyxFQUFFLENBQVMsRUFBRSxJQUFZO0lBQzFELElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDUixPQUFPO0tBQ1I7SUFFRCxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ1IsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUVSLElBQU0sS0FBSyxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNoQyxLQUFLLENBQUMsR0FBRyxHQUFHLDBDQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFFeEIsR0FBRyxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUM7QUFDckMsQ0FBQyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xTSyxJQUFNLElBQUksR0FBRyxFQUFFLENBQUM7QUFDaEIsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ25CLElBQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQztBQUUxQixJQUFZLFVBS1g7QUFMRCxXQUFZLFVBQVU7SUFDcEIsdUNBQUU7SUFDRiwyQ0FBSTtJQUNKLDJDQUFJO0lBQ0osNkNBQUs7QUFDUCxDQUFDLEVBTFcsVUFBVSxLQUFWLFVBQVUsUUFLckI7QUFFRCxJQUFZLE1BTVg7QUFORCxXQUFZLE1BQU07SUFDaEIsdUNBQU07SUFDTix1Q0FBTTtJQUNOLHVDQUFNO0lBQ04scUNBQUs7SUFDTCx5Q0FBTztBQUNULENBQUMsRUFOVyxNQUFNLEtBQU4sTUFBTSxRQU1qQjtBQUVNLElBQU0sS0FBSyxHQUE4QjtJQUM5QyxHQUFHLEVBQUUsU0FBUztJQUNkLE1BQU0sRUFBRSxTQUFTO0lBQ2pCLElBQUksRUFBRSxTQUFTO0lBQ2YsSUFBSSxFQUFFLFNBQVM7Q0FDaEIsQ0FBQztBQUVLLElBQU0sS0FBSyxHQUE4QjtJQUM5QyxPQUFPLEVBQ0wsNkZBQTZGO0lBQy9GLE1BQU0sRUFDSiw0RkFBNEY7SUFDOUYsTUFBTSxFQUNKLDRGQUE0RjtJQUM5RixNQUFNLEVBQ0osNEZBQTRGO0lBQzlGLEtBQUssRUFDSCwyRkFBMkY7Q0FDOUYsQ0FBQztBQUVLLElBQU0sU0FBUyxHQUFHLElBQUksS0FBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztBQUMzQyxTQUFTLENBQUMsR0FBRztJQUNYLDRGQUE0RixDQUFDO0FBRXhGLElBQU0sS0FBSyxHQUFHLFVBQUMsT0FBZTtJQUNuQyxXQUFJLE9BQU8sQ0FBTyxVQUFDLE9BQU87UUFDeEIsVUFBVSxDQUFDO1lBQ1QsT0FBTyxFQUFFLENBQUM7UUFDWixDQUFDLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDZCxDQUFDLENBQUM7QUFKRixDQUlFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEQyQjtBQUV6QixJQUFNLElBQUksR0FBK0M7SUFDOUQsYUFBYTtJQUNiLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO0lBQ3pDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO0lBQzFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO0lBQzFDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO0lBQzNDLFNBQVM7SUFDVCxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMxQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMxQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMxQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMxQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMxQyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMxQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxZQUFZO0lBQ1osRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsZ0RBQWdEO0lBQ2hELGdEQUFnRDtJQUNoRCxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxXQUFXO0lBQ1gsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDMUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDMUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDMUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDMUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDMUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDMUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsV0FBVztJQUNYLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLFdBQVc7SUFDWCxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxXQUFXO0lBQ1gsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsV0FBVztJQUNYLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLFdBQVc7SUFDWCxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxXQUFXO0lBQ1gsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsV0FBVztJQUNYLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLFdBQVc7SUFDWCxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxZQUFZO0lBQ1osRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsWUFBWTtJQUNaLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLFlBQVk7SUFDWixFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxZQUFZO0lBQ1osRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsWUFBWTtJQUNaLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLFlBQVk7SUFDWixFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxZQUFZO0lBQ1osRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsWUFBWTtJQUNaLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLFlBQVk7SUFDWixFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxZQUFZO0lBQ1osRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsWUFBWTtJQUNaLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLFlBQVk7SUFDWixFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxZQUFZO0lBQ1osRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsWUFBWTtJQUNaLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLFlBQVk7SUFDWixFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxZQUFZO0lBQ1osRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsWUFBWTtJQUNaLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLFlBQVk7SUFDWixFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxZQUFZO0lBQ1osRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsWUFBWTtJQUNaLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLFlBQVk7SUFDWixFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxZQUFZO0lBQ1osRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLENBQUMsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsWUFBWTtJQUNaLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzNDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxLQUFLLEVBQUUsS0FBSyxFQUFFO0lBQzVDLFlBQVk7SUFDWixFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUMzQyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUM1QyxFQUFFLENBQUMsRUFBRSxFQUFFLEdBQUcseUNBQUksRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRTtJQUU1QyxjQUFjO0lBQ2QsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsQ0FBQyxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDM0MsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7SUFDNUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxHQUFHLHlDQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUUsR0FBRyx5Q0FBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUU7Q0FDN0MsQ0FBQztBQUVLLElBQU0sT0FBTyxHQUFtQyxJQUFJLENBQUMsTUFBTSxDQUFDLFVBQUMsSUFBSSxFQUFFLElBQUk7SUFDNUUsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDakIsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLEdBQUcsRUFBVSxDQUFDO0tBQ2xDO0lBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLE9BQU8sSUFBSSxDQUFDO0FBQ2QsQ0FBQyxFQUFFLEVBQW9DLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdlJaO0FBZXRCLElBQU0sT0FBTyxHQUFHLFVBQ3JCLE1BQWtDOzs7O29CQUVqQixxQkFBTSxLQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsRUFBRTtvQkFDdkMsTUFBTSxFQUFFLE1BQU0sQ0FBQyxNQUFNO29CQUNyQixPQUFPLEVBQUU7d0JBQ1AsY0FBYyxFQUFFLG1DQUFtQztxQkFDcEQ7b0JBQ0QsSUFBSSxFQUNGLE1BQU0sQ0FBQyxNQUFNLEtBQUssS0FBSzt3QkFDckIsQ0FBQyxDQUFDLElBQUk7d0JBQ04sQ0FBQyxDQUFDLGtEQUFZLHVCQUFNLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxFQUFFLENBQUMsS0FBRSxHQUFHLEVBQUUsWUFBWSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsSUFBRztpQkFDakYsQ0FBQzs7Z0JBVEksUUFBUSxHQUFHLFNBU2Y7Z0JBRVcscUJBQU0sUUFBUSxDQUFDLElBQUksRUFBRTs7Z0JBQTVCLElBQUksR0FBRyxTQUFxQjtnQkFFbEMsSUFBSSxRQUFRLENBQUMsTUFBTSxJQUFJLEdBQUcsRUFBRTtvQkFDMUIsTUFBTSxJQUFJLENBQUM7aUJBQ1o7Z0JBRUQsc0JBQU8sSUFBSSxFQUFDOzs7S0FDYixDQUFDOzs7Ozs7O1VDcENGO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ05zQjtBQVNKO0FBQ21EO0FBQzNDO0FBQ1U7QUFDSDtBQUVqQyxlQUFlO0FBQ2YsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUNsRCxJQUFNLFlBQVksR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzFELElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDNUQsSUFBTSxhQUFhLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO0FBQ2hFLElBQU0sV0FBVyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsV0FBVyxDQUFDLENBQUM7QUFDeEQsSUFBTSxVQUFVLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMzRCxJQUFNLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ2xELElBQU0sT0FBTyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDaEQsSUFBTSxTQUFTLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGFBQWEsQ0FBQyxDQUFDO0FBQzNELElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFdEQseUJBQXlCO0FBQ3pCLElBQU0sVUFBVSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7QUFFdEQsWUFBWTtBQUNKLFVBQU0sR0FBSyx5REFBZ0IsRUFBRSxPQUF2QixDQUF3QjtBQUN0QyxJQUFNLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2xELElBQU0sZUFBZSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztBQUNqRSxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBQ2pELElBQU0sUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDbEQsSUFBTSxPQUFPLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQztBQUNwRCxJQUFNLGFBQWEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFlBQVksQ0FBQyxDQUFDO0FBQzNELElBQU0saUJBQWlCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0FBRW5FLElBQUksSUFBSSxHQUFHLElBQUksNkNBQUksRUFBRSxDQUFDO0FBQ3RCLElBQUksS0FBSyxHQUF3QixJQUFJLENBQUM7QUFFdEMsOENBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUVaLElBQUksQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO0lBQ2hDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxFQUFFLENBQUMsQ0FBQztDQUNqRDtBQUVELENBQUM7OztvQkFDQyxxQkFBTSxpREFBTyxDQUFTLEVBQUUsR0FBRyxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUUsTUFBTSxFQUFFLENBQUM7O2dCQUF6RCxTQUF5RCxDQUFDOzs7O0tBQzNELENBQUMsRUFBRSxDQUFDO0FBRUwsSUFBTSxnQkFBZ0IsR0FBRyxVQUFPLE9BQWlCOzs7Ozs7Z0JBRTdDLHFCQUFNLElBQUksQ0FBQyxjQUFjLEVBQUU7O2dCQUEzQixTQUEyQixDQUFDO2dCQUU1Qiw4Q0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUdOLFVBQVUsR0FBRyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUM7Z0JBQ2xDLE9BQU8sR0FBRyxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7Z0JBQzVCLFdBQVMsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2dCQUMxQixXQUFTLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztnQkFDMUIsS0FBSyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztnQkFFOUIscUJBQXFCO2dCQUNyQixTQUFVLENBQUMsYUFBYSxDQUFDLGFBQWEsQ0FBRSxDQUFDLFNBQVMsR0FBRyxNQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUUsQ0FBQztnQkFDaEYsU0FBVSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUUsQ0FBQyxTQUFTLEdBQUcsS0FBRyxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQ3hGLENBQUMsQ0FBQyxDQUNELENBQUM7Z0JBQ0osU0FBVSxDQUFDLGFBQWEsQ0FBQyxhQUFhLENBQUUsQ0FBQyxTQUFTLEdBQUcsS0FBRyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUcsQ0FBQztnQkFDMUYsYUFBYSxHQUFHLFNBQVUsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ3pELE9BQU8sYUFBYyxDQUFDLGFBQWEsRUFBRSxFQUFFO29CQUNyQyxhQUFjLENBQUMsVUFBVSxJQUFJLGFBQWMsQ0FBQyxXQUFXLENBQUMsYUFBYyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2lCQUNwRjtnQkFDRCxLQUFTLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxRQUFRLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtvQkFDbEMsS0FBSyxHQUFHLHdEQUFtQixFQUFFLENBQUM7b0JBQ3BDLGFBQWMsQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7aUJBQ25DO2dCQUNELElBQUk7cUJBQ0QsY0FBYyxFQUFFO3FCQUNoQixPQUFPLENBQUMsVUFBQyxHQUFHLEVBQUUsS0FBSztvQkFDbEIsVUFBRzt3QkFDRCxDQUFDLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDO3dCQUNuRCxDQUFDLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDO2dCQUZ4RCxDQUV3RCxDQUN6RCxDQUFDO2dCQUVKLElBQUksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDLEtBQUssQ0FBQyxVQUFDLElBQUksSUFBSyxXQUFJLEVBQUosQ0FBSSxDQUFDLEVBQUU7b0JBQy9DLGlCQUFpQixhQUFqQixpQkFBaUIsdUJBQWpCLGlCQUFpQixDQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsU0FBUyxDQUFDLENBQUM7aUJBQzdDO2dCQUVLLGNBQWMsR0FBRztvQkFDckIsUUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFDLEtBQUs7d0JBQ25CLElBQUksS0FBSyxDQUFDLE1BQU0sS0FBSyxRQUFRLEVBQUU7NEJBQzdCLGtEQUFTLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsMENBQUssQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQzt5QkFDbEU7NkJBQU0sSUFBSSxLQUFLLENBQUMsTUFBTSxLQUFLLE9BQU8sRUFBRTs0QkFDbkMsa0RBQVMsQ0FDUCxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsRUFDaEIsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQ2hCLDBDQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUNqQixLQUFLLEVBQ0wsSUFBSSxFQUNKLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FDbkIsQ0FBQzt5QkFDSDs2QkFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssTUFBTSxFQUFFOzRCQUNsQyxrREFBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDO3lCQUN2RDs2QkFBTSxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssUUFBUSxFQUFFOzRCQUNwQyxrREFBUyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLDBDQUFLLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDO3lCQUN4RTtvQkFDSCxDQUFDLENBQUMsQ0FBQztvQkFDSCxRQUFNO3dCQUNKLG1EQUFVLENBQUMsUUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsUUFBTSxDQUFDLFNBQVMsRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQztnQkFDM0YsQ0FBQyxDQUFDO3FCQUVFLE9BQU8sRUFBUCx5QkFBTztnQkFDVCxjQUFjLEVBQUUsQ0FBQztzQkFHTCxFQUFQLG1CQUFPOzs7cUJBQVAsc0JBQU87Z0JBRFYsMkJBQWtCLEVBQU4sQ0FBQyxTQUFFLENBQUM7Z0JBRWhCLHFCQUFNLDhDQUFLLENBQUMsRUFBRSxDQUFDOztnQkFBZixTQUFlLENBQUM7Z0JBQ2hCLGdEQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQzs7O2dCQUZqQixJQUFPOzs7c0JBTUcsRUFBVix5QkFBVTs7O3FCQUFWLHlCQUFVO2dCQURiLDhCQUFrQixFQUFOLENBQUMsU0FBRSxDQUFDO2dCQUVoQixxQkFBTSw4Q0FBSyxDQUFDLEVBQUUsQ0FBQzs7Z0JBQWYsU0FBZSxDQUFDO2dCQUNoQixnREFBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUM7OztnQkFGbEIsSUFBVTs7OztnQkFLZixVQUFVLENBQUMsT0FBTyxDQUFDLFVBQUMsR0FBRyxJQUFLLHVEQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQTlDLENBQThDLENBQUMsQ0FBQztnQkFDNUUsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFDLEdBQUcsSUFBSyx1REFBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLElBQUksRUFBRSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUMsRUFBakUsQ0FBaUUsQ0FBQyxDQUFDO2dCQUM1RixLQUFLLElBQUksa0RBQVMsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ25FLGNBQWMsRUFBRSxDQUFDOzs7Z0JBR25CLGtCQUFrQjtnQkFDbEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7b0JBQ3hCLElBQUksS0FBSyxLQUFLLElBQUksRUFBRTt3QkFDbEIsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO3dCQUNyQixLQUFLLEdBQUcsSUFBSSxDQUFDO3FCQUNkO29CQUNELGFBQWEsYUFBYixhQUFhLHVCQUFiLGFBQWEsQ0FBRSxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN4Qzs7OztnQkFFRCxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQUssQ0FBQyxDQUFDO2dCQUNuQixLQUFLLElBQUksYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUM5QixLQUFLLEdBQUcsSUFBSSxDQUFDOzs7OztLQUVoQixDQUFDO0FBRUY7O0dBRUc7QUFDSCxRQUFRLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQU8sQ0FBQzs7O1FBQ3pDLElBQUksSUFBSSxDQUFDLFlBQVksRUFBRSxFQUFFO1lBQ3ZCLENBQUMsQ0FBQyxjQUFjLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsU0FBUyxFQUFFLFdBQVcsRUFBRSxXQUFXLEVBQUUsWUFBWSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRTtnQkFDakUsR0FBRyxHQUE4QjtvQkFDckMsT0FBTyxFQUFFLENBQUM7b0JBQ1YsU0FBUyxFQUFFLENBQUM7b0JBQ1osU0FBUyxFQUFFLENBQUM7b0JBQ1osVUFBVSxFQUFFLENBQUM7aUJBQ2QsQ0FBQztnQkFDRixpREFBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLEVBQUUsU0FBUyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7YUFDdkY7U0FDRjs7O0tBQ0YsQ0FBQyxDQUFDO0FBRUg7Ozs7OztHQU1HO0FBQ0gsWUFBWSxhQUFaLFlBQVksdUJBQVosWUFBWSxDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUN0QyxJQUFJLENBQUMsU0FBUyxJQUFJLENBQUMsU0FBUyxFQUFFO1FBQzVCLE9BQU87S0FDUjtJQUVELFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ25DLFNBQVMsYUFBVCxTQUFTLHVCQUFULFNBQVMsQ0FBRSxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBRXRDLENBQUM7Ozt3QkFDQyxxQkFBTSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7O29CQUE3QixTQUE2QixDQUFDO29CQUM5QixxQkFBTSxJQUFJLENBQUMsS0FBSyxFQUFFOztvQkFBbEIsU0FBa0IsQ0FBQztvQkFDbkIscUJBQU0sZ0JBQWdCLENBQUMsSUFBSSxDQUFDOztvQkFBNUIsU0FBNEIsQ0FBQztvQkFFN0IsSUFBSSxLQUFLLEVBQUU7d0JBQ1QsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO3FCQUN0QjtvQkFDRCxLQUFLLEdBQUcsV0FBVyxDQUFDO3dCQUNsQixnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFNLFdBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUF2QixDQUF1QixDQUFDLENBQUM7b0JBQ3pELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztvQkFDUixNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OztTQUNwQyxDQUFDLEVBQUUsQ0FBQztBQUNQLENBQUMsQ0FBQyxDQUFDO0FBRUgsVUFBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRTs7OztnQkFDcEMsU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQ25DLHFCQUFNLGlEQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQzs7Z0JBQS9DLFNBQStDLENBQUM7Ozs7S0FDakQsQ0FBQyxDQUFDO0FBRUgsV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUNyQyxVQUFXLENBQUMsU0FBUyxHQUFHLEtBQUcsSUFBSSxDQUFDLFFBQVEsRUFBSSxDQUFDO0lBQzdDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBQyxJQUFJO1FBQ3JCLElBQUksSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFLEVBQUU7WUFDakQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDOUI7YUFBTTtZQUNMLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ2pDO0lBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDSCxhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUM1QyxDQUFDLENBQUMsQ0FBQztBQUVILFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDckMsU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUN6QixDQUFDLENBQUMsQ0FBQztBQUVILFFBQVEsYUFBUixRQUFRLHVCQUFSLFFBQVEsQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDbEMsSUFBTSxLQUFLLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLElBQUksS0FBSyxJQUFJLENBQUMsRUFBRTtRQUNkLE9BQU87S0FDUjtTQUFNO1FBQ0wsSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDekIsVUFBVyxDQUFDLFNBQVMsR0FBRyxLQUFHLElBQUksQ0FBQyxRQUFRLEVBQUksQ0FBQztLQUM5QztBQUNILENBQUMsQ0FBQyxDQUFDO0FBRUgsT0FBTyxhQUFQLE9BQU8sdUJBQVAsT0FBTyxDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRTtJQUNqQyxJQUFNLEtBQUssR0FBRyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7SUFDOUIsSUFBSSxLQUFLLEtBQUssQ0FBQyxFQUFFO1FBQ2YsT0FBTztLQUNSO1NBQU07UUFDTCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztRQUN6QixVQUFXLENBQUMsU0FBUyxHQUFHLEtBQUcsSUFBSSxDQUFDLFFBQVEsRUFBSSxDQUFDO0tBQzlDO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSTtJQUNyQixJQUFJLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO1FBQzdCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsSUFBSSxLQUFLLENBQUMsQ0FBQztRQUNsRCxTQUFTLENBQUMsT0FBTyxDQUFDLFVBQUMsS0FBSztZQUN0QixJQUFJLEtBQUssS0FBSyxJQUFJLEVBQUU7Z0JBQ2xCLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQ2xDO2lCQUFNO2dCQUNMLEtBQUssQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO2FBQy9CO1FBQ0gsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsVUFBVSxhQUFWLFVBQVUsdUJBQVYsVUFBVSxDQUFFLGdCQUFnQixDQUFDLE9BQU8sRUFBRTs7O29CQUNwQyxxQkFBTSxJQUFJLENBQUMsZ0JBQWdCLEVBQUU7O2dCQUE3QixTQUE2QixDQUFDO2dCQUM5QixhQUFhLGFBQWIsYUFBYSx1QkFBYixhQUFhLENBQUUsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQzs7OztLQUN4QyxDQUFDLENBQUM7QUFFSCxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsZ0JBQWdCLENBQUMsV0FBVyxFQUFFLFVBQUMsQ0FBQztJQUN0QyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDcEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7UUFDbEIsV0FBTyxHQUFjLENBQUMsUUFBZixFQUFFLE9BQU8sR0FBSyxDQUFDLFFBQU4sQ0FBTztRQUM3QixJQUFJLElBQUksR0FBRyx5Q0FBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLHlDQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLElBQUksR0FBRyx5Q0FBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLHlDQUFJLENBQUMsQ0FBQztRQUU3QyxJQUFJLENBQUMsQ0FBQyxJQUFJLElBQUksMENBQU8sQ0FBQyxJQUFJLENBQUMsMENBQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDbEQsT0FBTztTQUNSO1FBQ0QsOENBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNaLG1EQUFVLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRSxxREFBZ0IsQ0FBQyxDQUFDO0tBQzFDO0FBQ0gsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLGFBQU4sTUFBTSx1QkFBTixNQUFNLENBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFVBQUMsQ0FBQztJQUNsQyxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7SUFDcEIsSUFBSSxJQUFJLENBQUMsYUFBYSxFQUFFLEVBQUU7UUFDbEIsV0FBTyxHQUFjLENBQUMsUUFBZixFQUFFLE9BQU8sR0FBSyxDQUFDLFFBQU4sQ0FBTztRQUM3QixJQUFJLElBQUksR0FBRyx5Q0FBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLHlDQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLElBQUksR0FBRyx5Q0FBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLHlDQUFJLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzVDLDhDQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDWixTQUFTLGFBQVQsU0FBUyx1QkFBVCxTQUFTLENBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztLQUN2QztJQUNELElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDMUIsQ0FBQyxDQUFDLENBQUM7QUFFSCxRQUFRLGFBQVIsUUFBUSx1QkFBUixRQUFRLENBQUUsZ0JBQWdCLENBQUMsT0FBTyxFQUFFO0lBQ2xDLElBQUksSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFO1FBQ3hCLE9BQU87S0FDUjtJQUVELElBQUksS0FBSyxFQUFFO1FBQ1QsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3JCLEtBQUssR0FBRyxJQUFJLENBQUM7S0FDZDtTQUFNO1FBQ0wsS0FBSyxHQUFHLFdBQVcsQ0FBQztZQUNsQixnQkFBZ0IsRUFBRSxDQUFDLElBQUksQ0FBQyxjQUFNLFdBQUksQ0FBQyxnQkFBZ0IsRUFBRSxFQUF2QixDQUF1QixDQUFDLENBQUM7UUFDekQsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDO0tBQ1Q7QUFDSCxDQUFDLENBQUMsQ0FBQztBQUVILE9BQU8sYUFBUCxPQUFPLHVCQUFQLE9BQU8sQ0FBRSxnQkFBZ0IsQ0FBQyxPQUFPLEVBQUU7SUFDakMsU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsU0FBUyxhQUFULFNBQVMsdUJBQVQsU0FBUyxDQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDbkMsTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDaEMsYUFBYSxhQUFiLGFBQWEsdUJBQWIsYUFBYSxDQUFFLFNBQVMsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsaUJBQWlCLGFBQWpCLGlCQUFpQix1QkFBakIsaUJBQWlCLENBQUUsU0FBUyxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUMvQyxlQUFlLENBQUMsT0FBTyxDQUFDLFVBQUMsSUFBSSxJQUFLLFdBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxFQUFsQyxDQUFrQyxDQUFDLENBQUM7SUFDdEUsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN6Qiw4Q0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ1osS0FBSyxJQUFJLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUM5QixLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2YsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nYW1lYXBpLWZyb250ZW5kLy4vc3JjL3N0eWxlcy5jc3M/MTU1MyIsIndlYnBhY2s6Ly9nYW1lYXBpLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nL2RlY29kZS5qcyIsIndlYnBhY2s6Ly9nYW1lYXBpLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nL2VuY29kZS5qcyIsIndlYnBhY2s6Ly9nYW1lYXBpLWZyb250ZW5kLy4vbm9kZV9tb2R1bGVzL3F1ZXJ5c3RyaW5nL2luZGV4LmpzIiwid2VicGFjazovL2dhbWVhcGktZnJvbnRlbmQvLi9zcmMvR2FtZS50cyIsIndlYnBhY2s6Ly9nYW1lYXBpLWZyb250ZW5kLy4vc3JjL2NhbnZhcy50cyIsIndlYnBhY2s6Ly9nYW1lYXBpLWZyb250ZW5kLy4vc3JjL2NvbW1vbi50cyIsIndlYnBhY2s6Ly9nYW1lYXBpLWZyb250ZW5kLy4vc3JjL2RhdGEudHMiLCJ3ZWJwYWNrOi8vZ2FtZWFwaS1mcm9udGVuZC8uL3NyYy9yZXF1ZXN0LnRzIiwid2VicGFjazovL2dhbWVhcGktZnJvbnRlbmQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZ2FtZWFwaS1mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZ2FtZWFwaS1mcm9udGVuZC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2dhbWVhcGktZnJvbnRlbmQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9nYW1lYXBpLWZyb250ZW5kLy4vc3JjL2luZGV4LnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbi8vIElmIG9iai5oYXNPd25Qcm9wZXJ0eSBoYXMgYmVlbiBvdmVycmlkZGVuLCB0aGVuIGNhbGxpbmdcbi8vIG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wKSB3aWxsIGJyZWFrLlxuLy8gU2VlOiBodHRwczovL2dpdGh1Yi5jb20vam95ZW50L25vZGUvaXNzdWVzLzE3MDdcbmZ1bmN0aW9uIGhhc093blByb3BlcnR5KG9iaiwgcHJvcCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocXMsIHNlcCwgZXEsIG9wdGlvbnMpIHtcbiAgc2VwID0gc2VwIHx8ICcmJztcbiAgZXEgPSBlcSB8fCAnPSc7XG4gIHZhciBvYmogPSB7fTtcblxuICBpZiAodHlwZW9mIHFzICE9PSAnc3RyaW5nJyB8fCBxcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gb2JqO1xuICB9XG5cbiAgdmFyIHJlZ2V4cCA9IC9cXCsvZztcbiAgcXMgPSBxcy5zcGxpdChzZXApO1xuXG4gIHZhciBtYXhLZXlzID0gMTAwMDtcbiAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMubWF4S2V5cyA9PT0gJ251bWJlcicpIHtcbiAgICBtYXhLZXlzID0gb3B0aW9ucy5tYXhLZXlzO1xuICB9XG5cbiAgdmFyIGxlbiA9IHFzLmxlbmd0aDtcbiAgLy8gbWF4S2V5cyA8PSAwIG1lYW5zIHRoYXQgd2Ugc2hvdWxkIG5vdCBsaW1pdCBrZXlzIGNvdW50XG4gIGlmIChtYXhLZXlzID4gMCAmJiBsZW4gPiBtYXhLZXlzKSB7XG4gICAgbGVuID0gbWF4S2V5cztcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICB2YXIgeCA9IHFzW2ldLnJlcGxhY2UocmVnZXhwLCAnJTIwJyksXG4gICAgICAgIGlkeCA9IHguaW5kZXhPZihlcSksXG4gICAgICAgIGtzdHIsIHZzdHIsIGssIHY7XG5cbiAgICBpZiAoaWR4ID49IDApIHtcbiAgICAgIGtzdHIgPSB4LnN1YnN0cigwLCBpZHgpO1xuICAgICAgdnN0ciA9IHguc3Vic3RyKGlkeCArIDEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBrc3RyID0geDtcbiAgICAgIHZzdHIgPSAnJztcbiAgICB9XG5cbiAgICBrID0gZGVjb2RlVVJJQ29tcG9uZW50KGtzdHIpO1xuICAgIHYgPSBkZWNvZGVVUklDb21wb25lbnQodnN0cik7XG5cbiAgICBpZiAoIWhhc093blByb3BlcnR5KG9iaiwgaykpIHtcbiAgICAgIG9ialtrXSA9IHY7XG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KG9ialtrXSkpIHtcbiAgICAgIG9ialtrXS5wdXNoKHYpO1xuICAgIH0gZWxzZSB7XG4gICAgICBvYmpba10gPSBbb2JqW2tdLCB2XTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb2JqO1xufTtcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBzdHJpbmdpZnlQcmltaXRpdmUgPSBmdW5jdGlvbih2KSB7XG4gIHN3aXRjaCAodHlwZW9mIHYpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgcmV0dXJuIHY7XG5cbiAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIHJldHVybiB2ID8gJ3RydWUnIDogJ2ZhbHNlJztcblxuICAgIGNhc2UgJ251bWJlcic6XG4gICAgICByZXR1cm4gaXNGaW5pdGUodikgPyB2IDogJyc7XG5cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuICcnO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iaiwgc2VwLCBlcSwgbmFtZSkge1xuICBzZXAgPSBzZXAgfHwgJyYnO1xuICBlcSA9IGVxIHx8ICc9JztcbiAgaWYgKG9iaiA9PT0gbnVsbCkge1xuICAgIG9iaiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhvYmopLm1hcChmdW5jdGlvbihrKSB7XG4gICAgICB2YXIga3MgPSBlbmNvZGVVUklDb21wb25lbnQoc3RyaW5naWZ5UHJpbWl0aXZlKGspKSArIGVxO1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tdKSkge1xuICAgICAgICByZXR1cm4gb2JqW2tdLm1hcChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgcmV0dXJuIGtzICsgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZSh2KSk7XG4gICAgICAgIH0pLmpvaW4oc2VwKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBrcyArIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUob2JqW2tdKSk7XG4gICAgICB9XG4gICAgfSkuam9pbihzZXApO1xuXG4gIH1cblxuICBpZiAoIW5hbWUpIHJldHVybiAnJztcbiAgcmV0dXJuIGVuY29kZVVSSUNvbXBvbmVudChzdHJpbmdpZnlQcmltaXRpdmUobmFtZSkpICsgZXEgK1xuICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KHN0cmluZ2lmeVByaW1pdGl2ZShvYmopKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuZGVjb2RlID0gZXhwb3J0cy5wYXJzZSA9IHJlcXVpcmUoJy4vZGVjb2RlJyk7XG5leHBvcnRzLmVuY29kZSA9IGV4cG9ydHMuc3RyaW5naWZ5ID0gcmVxdWlyZSgnLi9lbmNvZGUnKTtcbiIsImltcG9ydCB7IERJUkVDVElPTlMsIFVOSVQgfSBmcm9tICcuL2NvbW1vbic7XG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi9yZXF1ZXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSB7XG4gIHByaXZhdGUgbGl2ZXM6IG51bWJlciA9IDM7XG4gIHByaXZhdGUgc3BlZWQ6IHN0cmluZyA9ICdtZWQnO1xuICBwcml2YXRlIGxldmVsOiBudW1iZXIgPSAxO1xuICBwcml2YXRlIHNjb3JlOiBudW1iZXIgPSAzNjA7XG4gIHByaXZhdGUgc3Bhd25pbmdQb2ludDogUG9pbnQgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBjb2xsZWN0ZWRGcnVpdHM6IGJvb2xlYW5bXSA9IFtdO1xuICBwcml2YXRlIGdhbWVUaW1lOiBudW1iZXIgPSAwO1xuXG4gIHByaXZhdGUgcGFjTWFuOiAoUGFjbWFuICYgeyBkaXJlY3Rpb246IERJUkVDVElPTlMgfSkgfCBudWxsID0gbnVsbDtcbiAgcHJpdmF0ZSBnaG9zdHM6IEdob3N0W10gPSBbXTtcbiAgcHJpdmF0ZSBiaWdEb3RzOiBEb3RbXSA9IFtdO1xuICBwcml2YXRlIG5vcm1hbERvdHM6IERvdFtdID0gW107XG4gIHByaXZhdGUgZnJ1aXQ6IEZydWl0IHwgbnVsbCA9IG51bGw7XG5cbiAgcHJpdmF0ZSBpc1N0YXJ0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBpc0dhbWVPdmVyOiBib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgaXNFZGl0TW9kZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMubGl2ZXMgPSArKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdsaXZlcycpIHx8IDMpO1xuICAgIHRoaXMubGV2ZWwgPSAwO1xuICAgIHRoaXMuc3BlZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnc3BlZWQnKSB8fCAnbWVkJztcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgICB0aGlzLnNwYXduaW5nUG9pbnQgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdwb2ludCcpIHx8ICd7XCJ4XCI6IDIxNiwgXCJ5XCI6IDI2NH0nKTtcbiAgICB0aGlzLmNvbGxlY3RlZEZydWl0cyA9IFtdO1xuICAgIHRoaXMuZ2FtZVRpbWUgPSAwO1xuXG4gICAgdGhpcy5wYWNNYW4gPSBudWxsO1xuICAgIHRoaXMuZ2hvc3RzID0gW107XG4gICAgdGhpcy5iaWdEb3RzID0gW107XG4gICAgdGhpcy5ub3JtYWxEb3RzID0gW107XG4gICAgdGhpcy5mcnVpdCA9IG51bGw7XG5cbiAgICB0aGlzLmlzU3RhcnRlZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNHYW1lT3ZlciA9IGZhbHNlO1xuICAgIHRoaXMuaXNFZGl0TW9kZSA9IGZhbHNlO1xuICB9XG5cbiAgYXN5bmMgdXBkYXRlR2FtZUluZm8oKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0PEdhbWVVcGRhdGVSZXNwb25zZT4oe1xuICAgICAgdXJsOiAnL3VwZGF0ZUdhbWVTdG9yZScsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICB9KTtcblxuICAgIGlmICghcmVzcG9uc2UpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXJyb3IgaW4gcmVxdWVzdCcpO1xuICAgIH1cblxuICAgIGNvbnN0IGdldERpcmVjdGlvbiA9ICh7IHgsIHkgfTogUG9pbnQpID0+IHtcbiAgICAgIGlmICgheCkge1xuICAgICAgICByZXR1cm4geSA+IDAgPyBESVJFQ1RJT05TLkRPV04gOiBESVJFQ1RJT05TLlVQO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHggPiAwID8gRElSRUNUSU9OUy5SSUdIVCA6IERJUkVDVElPTlMuTEVGVDtcbiAgICB9O1xuXG4gICAgY29uc3QgeyBkYXRhIH0gPSByZXNwb25zZTtcbiAgICB0aGlzLnNjb3JlID0gZGF0YS5zY29yZTtcbiAgICB0aGlzLmxldmVsID0gZGF0YS5kaWZmaWN1bHR5O1xuICAgIHRoaXMuY29sbGVjdGVkRnJ1aXRzID0gZGF0YS5jb2xsZWN0ZWRGcnVpdHMgfHwgW107XG4gICAgdGhpcy5saXZlcyA9IGRhdGEubGl2ZXM7XG4gICAgdGhpcy5pc0dhbWVPdmVyID0gZGF0YS5pc0dhbWVPdmVyO1xuICAgIGlmICh0aGlzLmlzR2FtZU92ZXIpIHtcbiAgICAgIHRoaXMuaXNTdGFydGVkID0gZmFsc2U7XG4gICAgfVxuICAgIHRoaXMucGFjTWFuID0geyAuLi5kYXRhLnBhY01hbiwgZGlyZWN0aW9uOiBnZXREaXJlY3Rpb24oZGF0YS5wYWNNYW4uc3BlZWQpIH07XG4gICAgdGhpcy5naG9zdHMgPSBkYXRhLmdob3N0cyB8fCBbXTtcbiAgICB0aGlzLmJpZ0RvdHMgPSBkYXRhLmJpZ0RvdHMgfHwgW107XG4gICAgdGhpcy5ub3JtYWxEb3RzID0gZGF0YS5ub3JtYWxEb3RzIHx8IFtdO1xuICAgIHRoaXMuZnJ1aXQgPSBkYXRhLmZydWl0O1xuICB9XG5cbiAgYXN5bmMgc2F2ZUdhbWVTZXR0aW5ncygpIHtcbiAgICBhd2FpdCByZXF1ZXN0PHN0cmluZywgU2V0R2FtZVJlcXVlc3Q+KHtcbiAgICAgIHVybDogJy9zZXRHYW1lJyxcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgYm9keToge1xuICAgICAgICB4OiB0aGlzLnNwYXduaW5nUG9pbnQhLngsXG4gICAgICAgIHk6IHRoaXMuc3Bhd25pbmdQb2ludCEueSxcbiAgICAgICAgbGl2ZXM6IHRoaXMubGl2ZXMsXG4gICAgICAgIHNwZWVkOiB0aGlzLnNwZWVkLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnbGl2ZXMnLCB0aGlzLmxpdmVzICsgJycpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdzcGVlZCcsIHRoaXMuc3BlZWQpO1xuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdwb2ludCcsIEpTT04uc3RyaW5naWZ5KHRoaXMuc3Bhd25pbmdQb2ludCkpO1xuICB9XG5cbiAgYXN5bmMgc3RhcnQoKSB7XG4gICAgYXdhaXQgcmVxdWVzdCh7XG4gICAgICB1cmw6ICcvaW5pdCcsXG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICB9KTtcbiAgICB0aGlzLmlzU3RhcnRlZCA9IHRydWU7XG4gIH1cblxuICBnYW1lVGltZUluY3JlYXNlKCkge1xuICAgIHRoaXMuZ2FtZVRpbWUrKztcbiAgICBpZiAodGhpcy5nYW1lVGltZSA9PT0gMV8wMDBfMDAwKSB7XG4gICAgICB0aGlzLmdhbWVUaW1lID0gMDtcbiAgICB9XG4gIH1cblxuICBnZXRHYW1lVGltZSgpIHtcbiAgICByZXR1cm4gdGhpcy5nYW1lVGltZTtcbiAgfVxuXG4gIHNldExpdmVzKGxpdmVzOiBudW1iZXIpIHtcbiAgICB0aGlzLmxpdmVzID0gbGl2ZXM7XG4gIH1cblxuICBnZXRMaXZlcygpIHtcbiAgICByZXR1cm4gdGhpcy5saXZlcztcbiAgfVxuXG4gIHNldFNwZWVkKHNwZWVkOiBzdHJpbmcpIHtcbiAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XG4gIH1cblxuICBnZXRTcGVlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zcGVlZDtcbiAgfVxuXG4gIGdldExldmVsKCkge1xuICAgIHJldHVybiB0aGlzLmxldmVsO1xuICB9XG5cbiAgZ2V0Tm9ybWFsRG90cygpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxEb3RzO1xuICB9XG5cbiAgZ2V0QmlnRG90cygpIHtcbiAgICByZXR1cm4gdGhpcy5iaWdEb3RzO1xuICB9XG5cbiAgZ2V0R2hvc3RzKCkge1xuICAgIHJldHVybiB0aGlzLmdob3N0cztcbiAgfVxuXG4gIGdldFBhY21hbigpIHtcbiAgICByZXR1cm4gdGhpcy5wYWNNYW47XG4gIH1cblxuICBnZXRGcnVpdCgpIHtcbiAgICByZXR1cm4gdGhpcy5mcnVpdDtcbiAgfVxuXG4gIGdldERvdHNDb3VudCgpIHtcbiAgICByZXR1cm4gdGhpcy5ub3JtYWxEb3RzLmxlbmd0aCArIHRoaXMuYmlnRG90cy5sZW5ndGg7XG4gIH1cblxuICBnZXRTY29yZSgpIHtcbiAgICByZXR1cm4gdGhpcy5zY29yZTtcbiAgfVxuXG4gIGdldENvbGxlY3RpdmVzKCkge1xuICAgIHJldHVybiB0aGlzLmNvbGxlY3RlZEZydWl0cztcbiAgfVxuXG4gIGdldElzU3RhcnRlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5pc1N0YXJ0ZWQ7XG4gIH1cblxuICBzZXRJc1N0YXJ0ZWQoaXNTdGFydGVkOiBib29sZWFuKSB7XG4gICAgdGhpcy5pc1N0YXJ0ZWQgPSBpc1N0YXJ0ZWQ7XG4gICAgdGhpcy5saXZlcyA9ICsobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2xpdmVzJykgfHwgMyk7XG4gICAgdGhpcy5zcGVlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdzcGVlZCcpIHx8ICdtZWQnO1xuICAgIHRoaXMuc3Bhd25pbmdQb2ludCA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BvaW50JykgfHwgJ3tcInhcIjogMjE2LCBcInlcIjogMjY0fScpO1xuICB9XG5cbiAgZ2V0SXNFZGl0TW9kZSgpIHtcbiAgICByZXR1cm4gdGhpcy5pc0VkaXRNb2RlO1xuICB9XG5cbiAgZ2V0SXNHYW1lT3ZlcigpIHtcbiAgICByZXR1cm4gdGhpcy5pc0dhbWVPdmVyO1xuICB9XG5cbiAgc2V0RWRpdE1vZGUoaXNFZGl0TW9kZTogYm9vbGVhbikge1xuICAgIHRoaXMuaXNFZGl0TW9kZSA9IGlzRWRpdE1vZGU7XG4gIH1cblxuICBzZXRTcGF3bmluZ1BvaW50KHBvaW50OiBQb2ludCkge1xuICAgIHRoaXMuc3Bhd25pbmdQb2ludCA9IHBvaW50O1xuICB9XG59XG4iLCJpbXBvcnQgeyBIRUlHSFQsIFdJRFRILCBVTklULCBESVJFQ1RJT05TLCBGUlVJVCB9IGZyb20gJy4vY29tbW9uJztcblxubGV0IGN0eDogQ2FudmFzUmVuZGVyaW5nQ29udGV4dDJEIHwgbnVsbDtcbmxldCBjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50IHwgbnVsbDtcblxuZXhwb3J0IGNvbnN0IGdldENhbnZhc0NvbnRleHQgPSAoKSA9PiB7XG4gICFjYW52YXMgJiYgKGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYW52YXMnKSk7XG4gICFjdHggJiYgKGN0eCA9IGNhbnZhcz8uZ2V0Q29udGV4dCgnMmQnKSB8fCBudWxsKTtcblxuICByZXR1cm4geyBjdHgsIGNhbnZhcyB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNsZWFyID0gKHNob3VsZERyYXdXYWxscz86IGJvb2xlYW4pID0+IHtcbiAgaWYgKCFjdHgpIHtcbiAgICBnZXRDYW52YXNDb250ZXh0KCk7XG4gIH1cblxuICBpZiAoY3R4KSB7XG4gICAgY3R4LmNsZWFyUmVjdCgwLCAwLCBXSURUSCwgSEVJR0hUKTtcbiAgICBzaG91bGREcmF3V2FsbHMgJiYgZHJhd1dhbGxzKCk7XG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBkcmF3V2FsbHMgPSAoKSA9PiB7XG4gIGlmICghY3R4KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY3R4LnNhdmUoKTtcbiAgY3R4LnN0cm9rZVN0eWxlID0gJyM0ZWMyZjcnO1xuICBjdHgubGluZVdpZHRoID0gNDtcbiAgY3R4LnNoYWRvd0NvbG9yID0gJyNhNmUwZmInO1xuICBjdHguc2hhZG93Qmx1ciA9IDIwO1xuXG4gIC8vIFVwcGVyIGJvdW5kYXJ5XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbygwLCAwKTtcbiAgY3R4LmxpbmVUbyhXSURUSCwgMCk7XG4gIGN0eC5saW5lVG8oV0lEVEgsIDEwICogVU5JVCk7XG4gIGN0eC5saW5lVG8oV0lEVEggLSAyICogVU5JVCwgMTAgKiBVTklUKTtcbiAgY3R4LmxpbmVUbyhXSURUSCAtIDIgKiBVTklULCAyICogVU5JVCk7XG4gIGN0eC5saW5lVG8oMjYgKiBVTklULCAyICogVU5JVCk7XG4gIGN0eC5saW5lVG8oMjYgKiBVTklULCA0ICogVU5JVCk7XG4gIGN0eC5saW5lVG8oMjQgKiBVTklULCA0ICogVU5JVCk7XG4gIGN0eC5saW5lVG8oMjQgKiBVTklULCAyICogVU5JVCk7XG4gIGN0eC5saW5lVG8oMjIgKiBVTklULCAyICogVU5JVCk7XG4gIGN0eC5saW5lVG8oMjIgKiBVTklULCA0ICogVU5JVCk7XG4gIGN0eC5saW5lVG8oMjAgKiBVTklULCA0ICogVU5JVCk7XG4gIGN0eC5saW5lVG8oMjAgKiBVTklULCAyICogVU5JVCk7XG4gIGN0eC5saW5lVG8oMiAqIFVOSVQsIDIgKiBVTklUKTtcbiAgY3R4LmxpbmVUbygyICogVU5JVCwgMTAgKiBVTklUKTtcbiAgY3R4LmxpbmVUbygwLCAxMCAqIFVOSVQpO1xuICBjdHguY2xvc2VQYXRoKCk7XG4gIGN0eC5zdHJva2UoKTtcblxuICAvLyBMb3dlciBib3VuZGFyeVxuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5tb3ZlVG8oMCwgMTIgKiBVTklUKTtcbiAgY3R4LmxpbmVUbygyICogVU5JVCwgMTIgKiBVTklUKTtcbiAgY3R4LmxpbmVUbygyICogVU5JVCwgSEVJR0hUIC0gMiAqIFVOSVQpO1xuICBjdHgubGluZVRvKFdJRFRIIC0gMiAqIFVOSVQsIEhFSUdIVCAtIDIgKiBVTklUKTtcbiAgY3R4LmxpbmVUbyhXSURUSCAtIDIgKiBVTklULCAxMiAqIFVOSVQpO1xuICBjdHgubGluZVRvKFdJRFRILCAxMiAqIFVOSVQpO1xuICBjdHgubGluZVRvKFdJRFRILCBIRUlHSFQpO1xuICBjdHgubGluZVRvKDAsIEhFSUdIVCk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbiAgY3R4LnN0cm9rZSgpO1xuXG4gIC8vIDIgV2FsbHMgYXQgbWlkZGxlIGJvdHRvbVxuICBjdHguc3Ryb2tlUmVjdCgyMCAqIFVOSVQsIDE2ICogVU5JVCwgMiAqIFVOSVQsIDIgKiBVTklUKTtcbiAgY3R4LnN0cm9rZVJlY3QoMjQgKiBVTklULCAxNiAqIFVOSVQsIDIgKiBVTklULCAyICogVU5JVCk7XG5cbiAgLy8gNCB3YWxscyBvbiB0aGUgcmlnaHRcbiAgY3R4LnN0cm9rZVJlY3QoV0lEVEggLSA2ICogVU5JVCwgNCAqIFVOSVQsIDIgKiBVTklULCAyICogVU5JVCk7XG4gIGN0eC5zdHJva2VSZWN0KFdJRFRIIC0gNiAqIFVOSVQsIDggKiBVTklULCAyICogVU5JVCwgMiAqIFVOSVQpO1xuICBjdHguc3Ryb2tlUmVjdChXSURUSCAtIDYgKiBVTklULCAxMiAqIFVOSVQsIDIgKiBVTklULCAyICogVU5JVCk7XG4gIGN0eC5zdHJva2VSZWN0KFdJRFRIIC0gNiAqIFVOSVQsIDE2ICogVU5JVCwgMiAqIFVOSVQsIDIgKiBVTklUKTtcblxuICAvLyBSXG4gIGN0eC5zdHJva2VTdHlsZSA9ICcjOGE0YWYzJztcbiAgY3R4LnNoYWRvd0NvbG9yID0gJyNhZDgwZjYnO1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5tb3ZlVG8oNCAqIFVOSVQsIDQgKiBVTklUKTtcbiAgY3R4LmxpbmVUbygxMCAqIFVOSVQsIDQgKiBVTklUKTtcbiAgY3R4LmxpbmVUbygxMCAqIFVOSVQsIDEwICogVU5JVCk7XG4gIGN0eC5saW5lVG8oOCAqIFVOSVQsIDEwICogVU5JVCk7XG4gIGN0eC5saW5lVG8oOCAqIFVOSVQsIDYgKiBVTklUKTtcbiAgY3R4LmxpbmVUbyg2ICogVU5JVCwgNiAqIFVOSVQpO1xuICBjdHgubGluZVRvKDYgKiBVTklULCAxMCAqIFVOSVQpO1xuICBjdHgubGluZVRvKDggKiBVTklULCAxMCAqIFVOSVQpO1xuICBjdHgubGluZVRvKDggKiBVTklULCAxMiAqIFVOSVQpO1xuICBjdHgubGluZVRvKDEwICogVU5JVCwgMTIgKiBVTklUKTtcbiAgY3R4LmxpbmVUbygxMCAqIFVOSVQsIDE4ICogVU5JVCk7XG4gIGN0eC5saW5lVG8oOCAqIFVOSVQsIDE4ICogVU5JVCk7XG4gIGN0eC5saW5lVG8oOCAqIFVOSVQsIDEyICogVU5JVCk7XG4gIGN0eC5saW5lVG8oNiAqIFVOSVQsIDEyICogVU5JVCk7XG4gIGN0eC5saW5lVG8oNiAqIFVOSVQsIDE4ICogVU5JVCk7XG4gIGN0eC5saW5lVG8oNCAqIFVOSVQsIDE4ICogVU5JVCk7XG4gIGN0eC5jbG9zZVBhdGgoKTtcbiAgY3R4LnN0cm9rZSgpO1xuXG4gIC8vIElcbiAgY3R4LnN0cm9rZVN0eWxlID0gJyNmNDQzMzYnO1xuICBjdHguc2hhZG93Q29sb3IgPSAnI2Y3N2I3Mic7XG4gIGN0eC5zdHJva2VSZWN0KDEyICogVU5JVCwgNCAqIFVOSVQsIDYgKiBVTklULCAyICogVU5JVCk7XG4gIGN0eC5zdHJva2VSZWN0KDEyICogVU5JVCwgOCAqIFVOSVQsIDIgKiBVTklULCA2ICogVU5JVCk7XG4gIGN0eC5zdHJva2VSZWN0KDE2ICogVU5JVCwgOCAqIFVOSVQsIDIgKiBVTklULCA2ICogVU5JVCk7XG4gIGN0eC5zdHJva2VSZWN0KDEyICogVU5JVCwgMTYgKiBVTklULCA2ICogVU5JVCwgMiAqIFVOSVQpO1xuXG4gIC8vIENcbiAgY3R4LnN0cm9rZVN0eWxlID0gJyM2NmRlNmUnO1xuICBjdHguc2hhZG93Q29sb3IgPSAnI2EzZWJhOCc7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbygyMCAqIFVOSVQsIDYgKiBVTklUKTtcbiAgY3R4LmxpbmVUbygyNiAqIFVOSVQsIDYgKiBVTklUKTtcbiAgY3R4LmxpbmVUbygyNiAqIFVOSVQsIDEwICogVU5JVCk7XG4gIGN0eC5saW5lVG8oMjQgKiBVTklULCAxMCAqIFVOSVQpO1xuICBjdHgubGluZVRvKDI0ICogVU5JVCwgOCAqIFVOSVQpO1xuICBjdHgubGluZVRvKDIyICogVU5JVCwgOCAqIFVOSVQpO1xuICBjdHgubGluZVRvKDIyICogVU5JVCwgMTQgKiBVTklUKTtcbiAgY3R4LmxpbmVUbygyNCAqIFVOSVQsIDE0ICogVU5JVCk7XG4gIGN0eC5saW5lVG8oMjQgKiBVTklULCAxMiAqIFVOSVQpO1xuICBjdHgubGluZVRvKDI2ICogVU5JVCwgMTIgKiBVTklUKTtcbiAgY3R4LmxpbmVUbygyNiAqIFVOSVQsIDE2ICogVU5JVCk7XG4gIGN0eC5saW5lVG8oMjAgKiBVTklULCAxNiAqIFVOSVQpO1xuICBjdHguY2xvc2VQYXRoKCk7XG4gIGN0eC5zdHJva2UoKTtcblxuICAvLyBCYXJyaWVyXG4gIGN0eC5zYXZlKCk7XG4gIGN0eC5zdHJva2VTdHlsZSA9ICcjY2NjJztcbiAgY3R4LmxpbmVXaWR0aCA9IDI7XG4gIGN0eC5zZXRMaW5lRGFzaChbNV0pO1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5tb3ZlVG8oMjYgKiBVTklULCAxMCAqIFVOSVQpO1xuICBjdHgubGluZVRvKDI2ICogVU5JVCwgMTIgKiBVTklUKTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xuICBjdHguc3Ryb2tlKCk7XG5cbiAgLy8gRVxuICBjdHgucmVzdG9yZSgpO1xuICBjdHguc3Ryb2tlU3R5bGUgPSAnI2ViYTNlNic7XG4gIGN0eC5zaGFkb3dDb2xvciA9ICcjZjNjN2YwJztcbiAgY3R4LnN0cm9rZVJlY3QoMjggKiBVTklULCA0ICogVU5JVCwgNiAqIFVOSVQsIDIgKiBVTklUKTtcbiAgY3R4LnN0cm9rZVJlY3QoMjggKiBVTklULCAxNiAqIFVOSVQsIDYgKiBVTklULCAyICogVU5JVCk7XG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4Lm1vdmVUbygyOCAqIFVOSVQsIDggKiBVTklUKTtcbiAgY3R4LmxpbmVUbygzNCAqIFVOSVQsIDggKiBVTklUKTtcbiAgY3R4LmxpbmVUbygzNCAqIFVOSVQsIDEwICogVU5JVCk7XG4gIGN0eC5saW5lVG8oMzAgKiBVTklULCAxMCAqIFVOSVQpO1xuICBjdHgubGluZVRvKDMwICogVU5JVCwgMTIgKiBVTklUKTtcbiAgY3R4LmxpbmVUbygzNCAqIFVOSVQsIDEyICogVU5JVCk7XG4gIGN0eC5saW5lVG8oMzQgKiBVTklULCAxNCAqIFVOSVQpO1xuICBjdHgubGluZVRvKDI4ICogVU5JVCwgMTQgKiBVTklUKTtcbiAgY3R4LmNsb3NlUGF0aCgpO1xuICBjdHguc3Ryb2tlKCk7XG5cbiAgY3R4LnJlc3RvcmUoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkcmF3R2hvc3QgPSAoXG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICBjb2xvcjogc3RyaW5nLFxuICBpc1R3b0V5ZT86IGJvb2xlYW4sXG4gIGlzQmxpbmtpbmc/OiBib29sZWFuLFxuICB0aW1lPzogbnVtYmVyLFxuKSA9PiB7XG4gIGlmICghY3R4KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgeCAtPSAxNDtcbiAgeSAtPSAxNDtcblxuICBpZiAoIWlzVHdvRXllKSB7XG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5saW5lV2lkdGggPSAyO1xuICAgIGN0eC5zaGFkb3dCbHVyID0gMDtcbiAgICBjdHguc2hhZG93Q29sb3IgPSAnJztcblxuICAgIGN0eC5iZWdpblBhdGgoKTtcbiAgICBjdHgubW92ZVRvKHgsIHkgKyAyOCk7XG4gICAgY3R4LmxpbmVUbyh4LCB5ICsgMTQpO1xuICAgIGN0eC5iZXppZXJDdXJ2ZVRvKHgsIHkgKyA2LCB4ICsgNiwgeSwgeCArIDE0LCB5KTtcbiAgICBjdHguYmV6aWVyQ3VydmVUbyh4ICsgMjIsIHksIHggKyAyOCwgeSArIDYsIHggKyAyOCwgeSArIDE0KTtcbiAgICBjdHgubGluZVRvKHggKyAyOCwgeSArIDI4KTtcbiAgICBjdHgubGluZVRvKHggKyAyMy4zMzMsIHkgKyAyMy4zMzMpO1xuICAgIGN0eC5saW5lVG8oeCArIDE4LjY2NiwgeSArIDI4KTtcbiAgICBjdHgubGluZVRvKHggKyAxNCwgeSArIDIzLjMzMyk7XG4gICAgY3R4LmxpbmVUbyh4ICsgOS4zMzMsIHkgKyAyOCk7XG4gICAgY3R4LmxpbmVUbyh4ICsgNC42NjYsIHkgKyAyMy4zMzMpO1xuICAgIGN0eC5saW5lVG8oeCwgeSArIDI4KTtcbiAgICBpZiAoXG4gICAgICBpc0JsaW5raW5nICYmXG4gICAgICB0aW1lICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICgodGltZSAtIDEpICUgNiA9PSAwIHx8ICh0aW1lIC0gMikgJSA2ID09IDAgfHwgKHRpbWUgLSAzKSAlIDYgPT0gMClcbiAgICApIHtcbiAgICAgIGN0eC5maWxsU3R5bGUgPSAnYmx1ZSc7XG4gICAgfVxuICAgIGN0eC5maWxsKCk7XG4gIH1cblxuICBjdHguZmlsbFN0eWxlID0gJ3doaXRlJztcbiAgY3R4LmJlZ2luUGF0aCgpO1xuICBjdHgubW92ZVRvKHggKyA4LCB5ICsgOCk7XG4gIGN0eC5iZXppZXJDdXJ2ZVRvKHggKyA1LCB5ICsgOCwgeCArIDQsIHkgKyAxMSwgeCArIDQsIHkgKyAxMyk7XG4gIGN0eC5iZXppZXJDdXJ2ZVRvKHggKyA0LCB5ICsgMTUsIHggKyA1LCB5ICsgMTgsIHggKyA4LCB5ICsgMTgpO1xuICBjdHguYmV6aWVyQ3VydmVUbyh4ICsgMTEsIHkgKyAxOCwgeCArIDEyLCB5ICsgMTUsIHggKyAxMiwgeSArIDEzKTtcbiAgY3R4LmJlemllckN1cnZlVG8oeCArIDEyLCB5ICsgMTEsIHggKyAxMSwgeSArIDgsIHggKyA4LCB5ICsgOCk7XG4gIGN0eC5tb3ZlVG8oeCArIDIwLCB5ICsgOCk7XG4gIGN0eC5iZXppZXJDdXJ2ZVRvKHggKyAxNywgeSArIDgsIHggKyAxNiwgeSArIDExLCB4ICsgMTYsIHkgKyAxMyk7XG4gIGN0eC5iZXppZXJDdXJ2ZVRvKHggKyAxNiwgeSArIDE1LCB4ICsgMTcsIHkgKyAxOCwgeCArIDIwLCB5ICsgMTgpO1xuICBjdHguYmV6aWVyQ3VydmVUbyh4ICsgMjMsIHkgKyAxOCwgeCArIDI0LCB5ICsgMTUsIHggKyAyNCwgeSArIDEzKTtcbiAgY3R4LmJlemllckN1cnZlVG8oeCArIDI0LCB5ICsgMTEsIHggKyAyMywgeSArIDgsIHggKyAyMCwgeSArIDgpO1xuICBjdHguZmlsbCgpO1xuXG4gIGN0eC5maWxsU3R5bGUgPSAnYmxhY2snO1xuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5hcmMoeCArIDIwLCB5ICsgMTQsIDIsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgY3R4LmZpbGwoKTtcblxuICBjdHguYmVnaW5QYXRoKCk7XG4gIGN0eC5hcmMoeCArIDgsIHkgKyAxNCwgMiwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICBjdHguZmlsbCgpO1xufTtcblxuZXhwb3J0IGNvbnN0IGRyYXdQYWNNYW4gPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIGRpcmVjdGlvbjogRElSRUNUSU9OUywgdGltZT86IG51bWJlcikgPT4ge1xuICBpZiAoIWN0eCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGN0eC5iZWdpblBhdGgoKTtcbiAgY3R4LmZpbGxTdHlsZSA9ICcjZmZjMTA3JztcbiAgaWYgKHRpbWUgIT09IHVuZGVmaW5lZCAmJiAoKHRpbWUgLSAxKSAlIDQgPT09IDAgfHwgKHRpbWUgLSAyKSAlIDQgPT09IDApKSB7XG4gICAgY3R4LmFyYyh4LCB5LCAxMiwgMCwgTWF0aC5QSSAqIDIsIGZhbHNlKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gICAgY3R4LmZpbGwoKTtcbiAgICByZXR1cm47XG4gIH1cblxuICBzd2l0Y2ggKGRpcmVjdGlvbikge1xuICAgIGNhc2UgRElSRUNUSU9OUy5SSUdIVDpcbiAgICAgIGN0eC5hcmMoeCwgeSwgMTIsIE1hdGguUEkgLyA3LCAtTWF0aC5QSSAvIDcsIGZhbHNlKTtcbiAgICAgIGN0eC5saW5lVG8oeCAtIDUsIHkpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBESVJFQ1RJT05TLkxFRlQ6XG4gICAgICBjdHguYXJjKHgsIHksIDEyLCAoTWF0aC5QSSAqIDYpIC8gNywgKE1hdGguUEkgKiA4KSAvIDcsIHRydWUpO1xuICAgICAgY3R4LmxpbmVUbyh4ICsgNSwgeSk7XG4gICAgICBicmVhaztcbiAgICBjYXNlIERJUkVDVElPTlMuVVA6XG4gICAgICBjdHguYXJjKHgsIHksIDEyLCAtKE1hdGguUEkgKiA1KSAvIDE0LCAoTWF0aC5QSSAqIDE5KSAvIDE0LCBmYWxzZSk7XG4gICAgICBjdHgubGluZVRvKHgsIHkgKyA1KTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgRElSRUNUSU9OUy5ET1dOOlxuICAgICAgY3R4LmFyYyh4LCB5LCAxMiwgKE1hdGguUEkgKiA5KSAvIDE0LCAoTWF0aC5QSSAqIDUpIC8gMTQsIGZhbHNlKTtcbiAgICAgIGN0eC5saW5lVG8oeCwgeSAtIDUpO1xuICB9XG4gIGN0eC5maWxsKCk7XG59O1xuXG5leHBvcnQgY29uc3QgZHJhd0RvdCA9ICh4OiBudW1iZXIsIHk6IG51bWJlciwgaXNCaWc/OiBib29sZWFuLCB0aW1lPzogbnVtYmVyKSA9PiB7XG4gIGlmICghY3R4KSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY3R4LmZpbGxTdHlsZSA9ICcjZmY5ODAwJztcbiAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gIGlmIChpc0JpZykge1xuICAgIGN0eC5lbGxpcHNlKHgsIHksIDggLyAoKHRpbWUhICUgNCkgKyAxKSwgOCwgMCwgMCwgMiAqIE1hdGguUEkpO1xuICB9IGVsc2Uge1xuICAgIGN0eC5hcmMoeCwgeSwgMywgMCwgMiAqIE1hdGguUEkpO1xuICB9XG4gIGN0eC5jbG9zZVBhdGgoKTtcbiAgY3R4LmZpbGwoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBkcmF3RnJ1aXQgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIsIHR5cGU6IHN0cmluZykgPT4ge1xuICBpZiAoIWN0eCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHggLT0gMTQ7XG4gIHkgLT0gMTQ7XG5cbiAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoMzIsIDMyKTtcbiAgaW1hZ2Uuc3JjID0gRlJVSVRbdHlwZV07XG5cbiAgY3R4LmRyYXdJbWFnZShpbWFnZSwgeCwgeSwgMzIsIDMyKTtcbn07XG4iLCJleHBvcnQgY29uc3QgVU5JVCA9IDI0O1xuZXhwb3J0IGNvbnN0IFdJRFRIID0gMTAwODtcbmV4cG9ydCBjb25zdCBIRUlHSFQgPSA1Mjg7XG5cbmV4cG9ydCBlbnVtIERJUkVDVElPTlMge1xuICBVUCxcbiAgRE9XTixcbiAgTEVGVCxcbiAgUklHSFQsXG59XG5cbmV4cG9ydCBlbnVtIEZSVUlUUyB7XG4gIENIRVJSWSxcbiAgT1JBTkdFLFxuICBCQU5BTkEsXG4gIEFQUExFLFxuICBBVk9DQURPLFxufVxuXG5leHBvcnQgY29uc3QgQ09MT1I6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gIHJlZDogJyNlOTFlNjMnLFxuICB5ZWxsb3c6ICcjZmZjYzAxJyxcbiAgYmx1ZTogJyMwMGZjZmYnLFxuICBwaW5rOiAnI2ZlYTBjYycsXG59O1xuXG5leHBvcnQgY29uc3QgRlJVSVQ6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gPSB7XG4gIGF2b2NhZG86XG4gICAgJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3J5bGFuemhvdS9pbWFnZS91cGxvYWQvdjE2MzcwMDY4ODgvQ09NUCUyMDUwNC9hdm9jYWRvX2xhdHBvYy5wbmcnLFxuICBjaGVycnk6XG4gICAgJ2h0dHBzOi8vcmVzLmNsb3VkaW5hcnkuY29tL3J5bGFuemhvdS9pbWFnZS91cGxvYWQvdjE2MzcwMDY4ODgvQ09NUCUyMDUwNC9jaGVycnlfaXJoaGh6LnBuZycsXG4gIG9yYW5nZTpcbiAgICAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcnlsYW56aG91L2ltYWdlL3VwbG9hZC92MTYzNzAwNjg4OC9DT01QJTIwNTA0L29yYW5nZV95N2Voc28ucG5nJyxcbiAgYmFuYW5hOlxuICAgICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9yeWxhbnpob3UvaW1hZ2UvdXBsb2FkL3YxNjM3MDA2ODg4L0NPTVAlMjA1MDQvYmFuYW5hX2tzbnNiYy5wbmcnLFxuICBhcHBsZTpcbiAgICAnaHR0cHM6Ly9yZXMuY2xvdWRpbmFyeS5jb20vcnlsYW56aG91L2ltYWdlL3VwbG9hZC92MTYzNzAwNjg4OC9DT01QJTIwNTA0L2FwcGxlX2hyMjdqbS5wbmcnLFxufTtcblxuZXhwb3J0IGNvbnN0IGxpZmVJbWFnZSA9IG5ldyBJbWFnZSgzMCwgMzApO1xubGlmZUltYWdlLnNyYyA9XG4gICdodHRwczovL3Jlcy5jbG91ZGluYXJ5LmNvbS9yeWxhbnpob3UvaW1hZ2UvdXBsb2FkL3YxNjM2OTk2NTMwL0NPTVAlMjA1MDQvcGFjbWFuX3I0cmhoei5zdmcnO1xuXG5leHBvcnQgY29uc3Qgc2xlZXAgPSAodGltZW91dDogbnVtYmVyKSA9PlxuICBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVzb2x2ZSgpO1xuICAgIH0sIHRpbWVvdXQpO1xuICB9KTtcbiIsImltcG9ydCB7IFVOSVQgfSBmcm9tICcuL2NvbW1vbic7XG5cbmV4cG9ydCBjb25zdCBkb3RzOiB7IHg6IG51bWJlcjsgeTogbnVtYmVyOyBpc0JpZzogYm9vbGVhbiB9W10gPSBbXG4gIC8vIDQgYmlnIGRvdHNcbiAgeyB4OiAzICogVU5JVCwgeTogMyAqIFVOSVQsIGlzQmlnOiB0cnVlIH0sXG4gIHsgeDogMzkgKiBVTklULCB5OiAzICogVU5JVCwgaXNCaWc6IHRydWUgfSxcbiAgeyB4OiAzICogVU5JVCwgeTogMTkgKiBVTklULCBpc0JpZzogdHJ1ZSB9LFxuICB7IHg6IDM5ICogVU5JVCwgeTogMTkgKiBVTklULCBpc0JpZzogdHJ1ZSB9LFxuICAvLyBMaW5lIDFcbiAgeyB4OiA0ICogVU5JVCwgeTogMyAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDUgKiBVTklULCB5OiAzICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogNiAqIFVOSVQsIHk6IDMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiA3ICogVU5JVCwgeTogMyAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDggKiBVTklULCB5OiAzICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogOSAqIFVOSVQsIHk6IDMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAxMCAqIFVOSVQsIHk6IDMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAxMSAqIFVOSVQsIHk6IDMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAxMiAqIFVOSVQsIHk6IDMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAxMyAqIFVOSVQsIHk6IDMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAxNCAqIFVOSVQsIHk6IDMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAxNSAqIFVOSVQsIHk6IDMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAxNiAqIFVOSVQsIHk6IDMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAxNyAqIFVOSVQsIHk6IDMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAxOCAqIFVOSVQsIHk6IDMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAxOSAqIFVOSVQsIHk6IDMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAyMyAqIFVOSVQsIHk6IDMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAyNyAqIFVOSVQsIHk6IDMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAyOCAqIFVOSVQsIHk6IDMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAyOSAqIFVOSVQsIHk6IDMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzMCAqIFVOSVQsIHk6IDMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzMSAqIFVOSVQsIHk6IDMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzMiAqIFVOSVQsIHk6IDMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzMyAqIFVOSVQsIHk6IDMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzNCAqIFVOSVQsIHk6IDMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzNSAqIFVOSVQsIHk6IDMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzNiAqIFVOSVQsIHk6IDMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzNyAqIFVOSVQsIHk6IDMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzOCAqIFVOSVQsIHk6IDMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgLy8gTGFzdCBsaW5lXG4gIHsgeDogNCAqIFVOSVQsIHk6IDE5ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogNSAqIFVOSVQsIHk6IDE5ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogNiAqIFVOSVQsIHk6IDE5ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogNyAqIFVOSVQsIHk6IDE5ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogOCAqIFVOSVQsIHk6IDE5ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogOSAqIFVOSVQsIHk6IDE5ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMTAgKiBVTklULCB5OiAxOSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDExICogVU5JVCwgeTogMTkgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAxMiAqIFVOSVQsIHk6IDE5ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMTMgKiBVTklULCB5OiAxOSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDE0ICogVU5JVCwgeTogMTkgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAxNSAqIFVOSVQsIHk6IDE5ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMTYgKiBVTklULCB5OiAxOSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDE3ICogVU5JVCwgeTogMTkgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAxOCAqIFVOSVQsIHk6IDE5ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMTkgKiBVTklULCB5OiAxOSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDIwICogVU5JVCwgeTogMTkgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAyMSAqIFVOSVQsIHk6IDE5ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIC8vIHsgeDogMjIgKiBVTklULCB5OiAxOSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICAvLyB7IHg6IDIzICogVU5JVCwgeTogMTkgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAyNCAqIFVOSVQsIHk6IDE5ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMjUgKiBVTklULCB5OiAxOSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDI2ICogVU5JVCwgeTogMTkgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAyNyAqIFVOSVQsIHk6IDE5ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMjggKiBVTklULCB5OiAxOSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDI5ICogVU5JVCwgeTogMTkgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzMCAqIFVOSVQsIHk6IDE5ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMzEgKiBVTklULCB5OiAxOSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDMyICogVU5JVCwgeTogMTkgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzMyAqIFVOSVQsIHk6IDE5ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMzQgKiBVTklULCB5OiAxOSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDM1ICogVU5JVCwgeTogMTkgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzNiAqIFVOSVQsIHk6IDE5ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMzcgKiBVTklULCB5OiAxOSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDM4ICogVU5JVCwgeTogMTkgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgLy8gQ29sdW1uIDFcbiAgeyB4OiAzICogVU5JVCwgeTogNCAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDMgKiBVTklULCB5OiA1ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMyAqIFVOSVQsIHk6IDYgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzICogVU5JVCwgeTogNyAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDMgKiBVTklULCB5OiA4ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMyAqIFVOSVQsIHk6IDkgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzICogVU5JVCwgeTogMTAgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzICogVU5JVCwgeTogMTEgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzICogVU5JVCwgeTogMTIgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzICogVU5JVCwgeTogMTMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzICogVU5JVCwgeTogMTQgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzICogVU5JVCwgeTogMTUgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzICogVU5JVCwgeTogMTYgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzICogVU5JVCwgeTogMTcgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzICogVU5JVCwgeTogMTggKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgLy8gQ29sdW1uIDJcbiAgeyB4OiA3ICogVU5JVCwgeTogMTMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiA3ICogVU5JVCwgeTogMTQgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiA3ICogVU5JVCwgeTogMTUgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiA3ICogVU5JVCwgeTogMTYgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiA3ICogVU5JVCwgeTogMTcgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiA3ICogVU5JVCwgeTogMTggKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgLy8gQ29sdW1uIDNcbiAgeyB4OiA5ICogVU5JVCwgeTogMTEgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgLy8gQ29sdW1uIDRcbiAgeyB4OiAxMCAqIFVOSVQsIHk6IDExICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIC8vIENvbHVtbiA1XG4gIHsgeDogMTEgKiBVTklULCB5OiA0ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMTEgKiBVTklULCB5OiA1ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMTEgKiBVTklULCB5OiA2ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMTEgKiBVTklULCB5OiA3ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMTEgKiBVTklULCB5OiA4ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMTEgKiBVTklULCB5OiA5ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMTEgKiBVTklULCB5OiAxMCAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDExICogVU5JVCwgeTogMTEgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAxMSAqIFVOSVQsIHk6IDEyICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMTEgKiBVTklULCB5OiAxMyAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDExICogVU5JVCwgeTogMTQgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAxMSAqIFVOSVQsIHk6IDE1ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMTEgKiBVTklULCB5OiAxNiAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDExICogVU5JVCwgeTogMTcgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAxMSAqIFVOSVQsIHk6IDE4ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIC8vIENvbHVtbiA2XG4gIHsgeDogMTIgKiBVTklULCB5OiA3ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMTIgKiBVTklULCB5OiAxNSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICAvLyBDb2x1bW4gN1xuICB7IHg6IDEzICogVU5JVCwgeTogNyAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDEzICogVU5JVCwgeTogMTUgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgLy8gQ29sdW1uIDhcbiAgeyB4OiAxNCAqIFVOSVQsIHk6IDcgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAxNCAqIFVOSVQsIHk6IDE1ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIC8vIENvbHVtbiA5XG4gIHsgeDogMTUgKiBVTklULCB5OiA3ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMTUgKiBVTklULCB5OiA4ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMTUgKiBVTklULCB5OiA5ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMTUgKiBVTklULCB5OiAxMCAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDE1ICogVU5JVCwgeTogMTEgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAxNSAqIFVOSVQsIHk6IDEyICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMTUgKiBVTklULCB5OiAxMyAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDE1ICogVU5JVCwgeTogMTQgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAxNSAqIFVOSVQsIHk6IDE1ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIC8vIENvbHVtbiAxMFxuICB7IHg6IDE2ICogVU5JVCwgeTogNyAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDE2ICogVU5JVCwgeTogMTUgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgLy8gQ29sdW1uIDExXG4gIHsgeDogMTcgKiBVTklULCB5OiA3ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMTcgKiBVTklULCB5OiAxNSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICAvLyBDb2x1bW4gMTJcbiAgeyB4OiAxOCAqIFVOSVQsIHk6IDcgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAxOCAqIFVOSVQsIHk6IDE1ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIC8vIENvbHVtbiAxM1xuICB7IHg6IDE5ICogVU5JVCwgeTogNCAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDE5ICogVU5JVCwgeTogNSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDE5ICogVU5JVCwgeTogNiAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDE5ICogVU5JVCwgeTogNyAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDE5ICogVU5JVCwgeTogOCAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDE5ICogVU5JVCwgeTogOSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDE5ICogVU5JVCwgeTogMTAgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAxOSAqIFVOSVQsIHk6IDExICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMTkgKiBVTklULCB5OiAxMiAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDE5ICogVU5JVCwgeTogMTMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAxOSAqIFVOSVQsIHk6IDE0ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMTkgKiBVTklULCB5OiAxNSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDE5ICogVU5JVCwgeTogMTYgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAxOSAqIFVOSVQsIHk6IDE3ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMTkgKiBVTklULCB5OiAxOCAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICAvLyBDb2x1bW4gMTRcbiAgeyB4OiAyMCAqIFVOSVQsIHk6IDUgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgLy8gQ29sdW1uIDE1XG4gIHsgeDogMjEgKiBVTklULCB5OiA1ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIC8vIENvbHVtbiAxNlxuICB7IHg6IDIyICogVU5JVCwgeTogNSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDIyICogVU5JVCwgeTogMTkgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgLy8gQ29sdW1uIDE3XG4gIHsgeDogMjMgKiBVTklULCB5OiA0ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMjMgKiBVTklULCB5OiA1ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMjMgKiBVTklULCB5OiAxNyAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDIzICogVU5JVCwgeTogMTggKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAyMyAqIFVOSVQsIHk6IDE5ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIC8vIENvbHVtbiAxOFxuICB7IHg6IDI0ICogVU5JVCwgeTogNSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICAvLyBDb2x1bW4gMTlcbiAgeyB4OiAyNSAqIFVOSVQsIHk6IDUgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgLy8gQ29sdW1uIDIwXG4gIHsgeDogMjYgKiBVTklULCB5OiA1ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIC8vIENvbHVtbiAyMVxuICB7IHg6IDI3ICogVU5JVCwgeTogNCAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDI3ICogVU5JVCwgeTogNSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDI3ICogVU5JVCwgeTogNiAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDI3ICogVU5JVCwgeTogNyAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDI3ICogVU5JVCwgeTogOCAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDI3ICogVU5JVCwgeTogOSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDI3ICogVU5JVCwgeTogMTAgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAyNyAqIFVOSVQsIHk6IDExICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMjcgKiBVTklULCB5OiAxMiAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDI3ICogVU5JVCwgeTogMTMgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAyNyAqIFVOSVQsIHk6IDE0ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMjcgKiBVTklULCB5OiAxNSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDI3ICogVU5JVCwgeTogMTYgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAyNyAqIFVOSVQsIHk6IDE3ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMjcgKiBVTklULCB5OiAxOCAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICAvLyBDb2x1bW4gMjJcbiAgeyB4OiAyOCAqIFVOSVQsIHk6IDcgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAyOCAqIFVOSVQsIHk6IDE1ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIC8vIENvbHVtbiAyM1xuICB7IHg6IDI5ICogVU5JVCwgeTogNyAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDI5ICogVU5JVCwgeTogMTUgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgLy8gQ29sdW1uIDI0XG4gIHsgeDogMzAgKiBVTklULCB5OiA3ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMzAgKiBVTklULCB5OiAxNSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICAvLyBDb2x1bW4gMjVcbiAgeyB4OiAzMSAqIFVOSVQsIHk6IDcgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzMSAqIFVOSVQsIHk6IDExICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMzEgKiBVTklULCB5OiAxNSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICAvLyBDb2x1bW4gMjZcbiAgeyB4OiAzMiAqIFVOSVQsIHk6IDcgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzMiAqIFVOSVQsIHk6IDExICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMzIgKiBVTklULCB5OiAxNSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICAvLyBDb2x1bW4gMjdcbiAgeyB4OiAzMyAqIFVOSVQsIHk6IDcgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzMyAqIFVOSVQsIHk6IDExICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMzMgKiBVTklULCB5OiAxNSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICAvLyBDb2x1bW4gMjhcbiAgeyB4OiAzNCAqIFVOSVQsIHk6IDcgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzNCAqIFVOSVQsIHk6IDExICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMzQgKiBVTklULCB5OiAxNSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICAvLyBDb2x1bW4gMjlcbiAgeyB4OiAzNSAqIFVOSVQsIHk6IDQgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzNSAqIFVOSVQsIHk6IDUgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzNSAqIFVOSVQsIHk6IDYgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzNSAqIFVOSVQsIHk6IDcgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzNSAqIFVOSVQsIHk6IDggKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzNSAqIFVOSVQsIHk6IDkgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzNSAqIFVOSVQsIHk6IDEwICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMzUgKiBVTklULCB5OiAxMSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDM1ICogVU5JVCwgeTogMTIgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzNSAqIFVOSVQsIHk6IDEzICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMzUgKiBVTklULCB5OiAxNCAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDM1ICogVU5JVCwgeTogMTUgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzNSAqIFVOSVQsIHk6IDE2ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMzUgKiBVTklULCB5OiAxNyAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDM1ICogVU5JVCwgeTogMTggKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgLy8gQ29sdW1uIDMwXG4gIHsgeDogMzYgKiBVTklULCB5OiA3ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMzYgKiBVTklULCB5OiAxMSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDM2ICogVU5JVCwgeTogMTUgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgLy8gQ29sdW1uIDMwXG4gIHsgeDogMzcgKiBVTklULCB5OiA3ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMzcgKiBVTklULCB5OiAxMSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDM3ICogVU5JVCwgeTogMTUgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgLy8gQ29sdW1uIDMwXG4gIHsgeDogMzggKiBVTklULCB5OiA3ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMzggKiBVTklULCB5OiAxMSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDM4ICogVU5JVCwgeTogMTUgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgLy8gQ29sdW1uIDMxXG4gIHsgeDogMzkgKiBVTklULCB5OiA0ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMzkgKiBVTklULCB5OiA1ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMzkgKiBVTklULCB5OiA2ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMzkgKiBVTklULCB5OiA3ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMzkgKiBVTklULCB5OiA4ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMzkgKiBVTklULCB5OiA5ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMzkgKiBVTklULCB5OiAxMCAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDM5ICogVU5JVCwgeTogMTEgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzOSAqIFVOSVQsIHk6IDEyICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMzkgKiBVTklULCB5OiAxMyAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDM5ICogVU5JVCwgeTogMTQgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzOSAqIFVOSVQsIHk6IDE1ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogMzkgKiBVTklULCB5OiAxNiAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuICB7IHg6IDM5ICogVU5JVCwgeTogMTcgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAzOSAqIFVOSVQsIHk6IDE4ICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG5cbiAgLy8gT24gdGhlIGV4aXRcbiAgeyB4OiAxICogVU5JVCwgeTogMTEgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiAyICogVU5JVCwgeTogMTEgKiBVTklULCBpc0JpZzogZmFsc2UgfSxcbiAgeyB4OiA0MCAqIFVOSVQsIHk6IDExICogVU5JVCwgaXNCaWc6IGZhbHNlIH0sXG4gIHsgeDogNDEgKiBVTklULCB5OiAxMSAqIFVOSVQsIGlzQmlnOiBmYWxzZSB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IGRvdHNNYXA6IHsgW2tleTogbnVtYmVyXTogU2V0PG51bWJlcj4gfSA9IGRvdHMucmVkdWNlKChwcmV2LCBjdXJyKSA9PiB7XG4gIGlmICghcHJldltjdXJyLnhdKSB7XG4gICAgcHJldltjdXJyLnhdID0gbmV3IFNldDxudW1iZXI+KCk7XG4gIH1cbiAgcHJldltjdXJyLnhdLmFkZChjdXJyLnkpO1xuICByZXR1cm4gcHJldjtcbn0sIHt9IGFzIHsgW2tleTogbnVtYmVyXTogU2V0PG51bWJlcj4gfSk7XG4iLCJpbXBvcnQgcXMgZnJvbSAncXVlcnlzdHJpbmcnO1xuXG5pbnRlcmZhY2UgUmVxdWVzdFBhcmFtczxUPiB7XG4gIG1ldGhvZDogJ0dFVCcgfCAnUE9TVCcgfCAnREVMRVRFJztcbiAgdXJsOiBzdHJpbmc7XG4gIGJvZHk/OiBUO1xuICBoZWFkZXI/OiBhbnk7XG59XG5cbmludGVyZmFjZSBUUmVzcG9uc2U8VD4ge1xuICBlcnJDb2RlOiBudW1iZXI7XG4gIGRhdGE6IFQ7XG4gIGVyck1zZz86IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IHJlcXVlc3QgPSBhc3luYyA8UmVzcG9uc2VUeXBlID0gYW55LCBSZXF1ZXN0VHlwZSA9IGFueT4oXG4gIHBhcmFtczogUmVxdWVzdFBhcmFtczxSZXF1ZXN0VHlwZT4sXG4pOiBQcm9taXNlPFRSZXNwb25zZTxSZXNwb25zZVR5cGU+PiA9PiB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gocGFyYW1zLnVybCwge1xuICAgIG1ldGhvZDogcGFyYW1zLm1ldGhvZCxcbiAgICBoZWFkZXJzOiB7XG4gICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCcsXG4gICAgfSxcbiAgICBib2R5OlxuICAgICAgcGFyYW1zLm1ldGhvZCA9PT0gJ0dFVCdcbiAgICAgICAgPyBudWxsXG4gICAgICAgIDogcXMuc3RyaW5naWZ5KHsgLi4uKHBhcmFtcy5ib2R5IHx8IHt9KSwgdWlkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndWlkJykgfSksXG4gIH0pO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSA0MDApIHtcbiAgICB0aHJvdyBkYXRhO1xuICB9XG5cbiAgcmV0dXJuIGRhdGE7XG59O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5pbXBvcnQge1xuICBjbGVhcixcbiAgZHJhd0RvdCxcbiAgZHJhd0ZydWl0LFxuICBkcmF3R2hvc3QsXG4gIGRyYXdQYWNNYW4sXG4gIGRyYXdXYWxscyxcbiAgZ2V0Q2FudmFzQ29udGV4dCxcbn0gZnJvbSAnLi9jYW52YXMnO1xuaW1wb3J0IHsgbGlmZUltYWdlLCBzbGVlcCwgQ09MT1IsIFVOSVQsIERJUkVDVElPTlMgfSBmcm9tICcuL2NvbW1vbic7XG5pbXBvcnQgR2FtZSBmcm9tICcuL0dhbWUnO1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4vcmVxdWVzdCc7XG5pbXBvcnQgeyBkb3RzTWFwIH0gZnJvbSAnLi9kYXRhJztcblxuLy8gU3RhcnR1cCBQYWdlXG5jb25zdCBtYXNrUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFzaycpO1xuY29uc3Qgc3RhcnRHYW1lQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N0YXJ0LWJ0bicpO1xuY29uc3Qgc2V0dGluZ3NCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2V0dGluZ3MtYnRuJyk7XG5jb25zdCBzZXR0aW5nc1BhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNldHRpbmdzLXBhbmVsJyk7XG5jb25zdCBwb3NpdGlvbkJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwb3NpdGlvbicpO1xuY29uc3QgbGl2ZXNWYWx1ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsaXZlcyAudmFsdWUnKTtcbmNvbnN0IG1pbnVzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21pbnVzJyk7XG5jb25zdCBwbHVzQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3BsdXMnKTtcbmNvbnN0IHNwZWVkQnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJyNzcGVlZCBzcGFuJyk7XG5jb25zdCBjb25maXJtQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbmZpcm0nKTtcblxuLy8gTk9URTogTm90IHVzZWQgZm9yIG5vd1xuY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN0YXJ0Jyk7XG5cbi8vIEdhbWUgUGFnZVxuY29uc3QgeyBjYW52YXMgfSA9IGdldENhbnZhc0NvbnRleHQoKTtcbmNvbnN0IGluZm9QYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmZvJyk7XG5jb25zdCBmcnVpdHNJbmRpY2F0b3IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZnJ1aXRzIGltZycpO1xuY29uc3QgZm9vdGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmZvb3RlcicpO1xuY29uc3QgcGF1c2VCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGF1c2UnKTtcbmNvbnN0IGJhY2tCdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYmFjay1idG4nKTtcbmNvbnN0IGdhbWVPdmVyUGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1vdmVyJyk7XG5jb25zdCBhbGxDb2xsZWN0ZWRQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtY29sbGVjdGVkJyk7XG5cbmxldCBnYW1lID0gbmV3IEdhbWUoKTtcbmxldCB0aW1lcjogTm9kZUpTLlRpbWVyIHwgbnVsbCA9IG51bGw7XG5cbmNsZWFyKHRydWUpO1xuXG5pZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1aWQnKSkge1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndWlkJywgTWF0aC5yYW5kb20oKSArICcnKTtcbn1cblxuKGFzeW5jICgpID0+IHtcbiAgYXdhaXQgcmVxdWVzdDxzdHJpbmc+KHsgdXJsOiAnL3NldFVpZCcsIG1ldGhvZDogJ1BPU1QnIH0pO1xufSkoKTtcblxuY29uc3QgZHJhd1dpdGhHYW1lRGF0YSA9IGFzeW5jIChpc0ZpcnN0PzogYm9vbGVhbikgPT4ge1xuICB0cnkge1xuICAgIGF3YWl0IGdhbWUudXBkYXRlR2FtZUluZm8oKTtcblxuICAgIGNsZWFyKHRydWUpO1xuXG4gICAgLy8gRHJhdyBvbiBjYW52YXNcbiAgICBjb25zdCBub3JtYWxEb3RzID0gZ2FtZS5nZXROb3JtYWxEb3RzKCk7XG4gICAgY29uc3QgYmlnRG90cyA9IGdhbWUuZ2V0QmlnRG90cygpO1xuICAgIGNvbnN0IGdob3N0cyA9IGdhbWUuZ2V0R2hvc3RzKCk7XG4gICAgY29uc3QgcGFjbWFuID0gZ2FtZS5nZXRQYWNtYW4oKTtcbiAgICBjb25zdCBmcnVpdCA9IGdhbWUuZ2V0RnJ1aXQoKTtcblxuICAgIC8vIERyYXcgaW4gaW5mbyBwYW5lbFxuICAgIGluZm9QYW5lbCEucXVlcnlTZWxlY3RvcignLmxldmVsIHNwYW4nKSEuaW5uZXJIVE1MID0gYCR7JzAnICsgZ2FtZS5nZXRMZXZlbCgpfWA7XG4gICAgaW5mb1BhbmVsIS5xdWVyeVNlbGVjdG9yKCcuZG90cyBzcGFuJykhLmlubmVySFRNTCA9IGAkeygnMDAwJyArIGdhbWUuZ2V0RG90c0NvdW50KCkpLnNsaWNlKFxuICAgICAgLTMsXG4gICAgKX1gO1xuICAgIGluZm9QYW5lbCEucXVlcnlTZWxlY3RvcignLnNjb3JlIHNwYW4nKSEuaW5uZXJIVE1MID0gYCR7KCcwMDAwMCcgKyBnYW1lLmdldFNjb3JlKCkpLnNsaWNlKC01KX1gO1xuICAgIGNvbnN0IGxpZmVJbmRpY2F0b3IgPSBpbmZvUGFuZWwhLnF1ZXJ5U2VsZWN0b3IoJy5saXZlcycpO1xuICAgIHdoaWxlIChsaWZlSW5kaWNhdG9yIS5oYXNDaGlsZE5vZGVzKCkpIHtcbiAgICAgIGxpZmVJbmRpY2F0b3IhLmZpcnN0Q2hpbGQgJiYgbGlmZUluZGljYXRvciEucmVtb3ZlQ2hpbGQobGlmZUluZGljYXRvciEuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZS5nZXRMaXZlcygpOyBpKyspIHtcbiAgICAgIGNvbnN0IGltYWdlID0gbGlmZUltYWdlLmNsb25lTm9kZSgpO1xuICAgICAgbGlmZUluZGljYXRvciEuYXBwZW5kQ2hpbGQoaW1hZ2UpO1xuICAgIH1cbiAgICBnYW1lXG4gICAgICAuZ2V0Q29sbGVjdGl2ZXMoKVxuICAgICAgLmZvckVhY2goKHZhbCwgaW5kZXgpID0+XG4gICAgICAgIHZhbFxuICAgICAgICAgID8gZnJ1aXRzSW5kaWNhdG9yW2luZGV4XS5jbGFzc0xpc3QuYWRkKCdjb2xsZWN0ZWQnKVxuICAgICAgICAgIDogZnJ1aXRzSW5kaWNhdG9yW2luZGV4XS5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsZWN0ZWQnKSxcbiAgICAgICk7XG5cbiAgICBpZiAoZ2FtZS5nZXRDb2xsZWN0aXZlcygpLmV2ZXJ5KChlYWNoKSA9PiBlYWNoKSkge1xuICAgICAgYWxsQ29sbGVjdGVkUGFuZWw/LmNsYXNzTGlzdC5hZGQoJ2FuaW1hdGUnKTtcbiAgICB9XG5cbiAgICBjb25zdCBkcmF3TW92aW5nT2JqcyA9ICgpID0+IHtcbiAgICAgIGdob3N0cy5mb3JFYWNoKChnaG9zdCkgPT4ge1xuICAgICAgICBpZiAoZ2hvc3Quc3RhdHVzID09PSAnbm9ybWFsJykge1xuICAgICAgICAgIGRyYXdHaG9zdChnaG9zdC5wb3NpdGlvbi54LCBnaG9zdC5wb3NpdGlvbi55LCBDT0xPUltnaG9zdC50eXBlXSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2hvc3Quc3RhdHVzID09PSAnYmxpbmsnKSB7XG4gICAgICAgICAgZHJhd0dob3N0KFxuICAgICAgICAgICAgZ2hvc3QucG9zaXRpb24ueCxcbiAgICAgICAgICAgIGdob3N0LnBvc2l0aW9uLnksXG4gICAgICAgICAgICBDT0xPUltnaG9zdC50eXBlXSxcbiAgICAgICAgICAgIGZhbHNlLFxuICAgICAgICAgICAgdHJ1ZSxcbiAgICAgICAgICAgIGdhbWUuZ2V0R2FtZVRpbWUoKSxcbiAgICAgICAgICApO1xuICAgICAgICB9IGVsc2UgaWYgKGdob3N0LnN0YXR1cyA9PT0gJ2JsdWUnKSB7XG4gICAgICAgICAgZHJhd0dob3N0KGdob3N0LnBvc2l0aW9uLngsIGdob3N0LnBvc2l0aW9uLnksICdibHVlJyk7XG4gICAgICAgIH0gZWxzZSBpZiAoZ2hvc3Quc3RhdHVzID09PSAndHdvZXllJykge1xuICAgICAgICAgIGRyYXdHaG9zdChnaG9zdC5wb3NpdGlvbi54LCBnaG9zdC5wb3NpdGlvbi55LCBDT0xPUltnaG9zdC50eXBlXSwgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgcGFjbWFuICYmXG4gICAgICAgIGRyYXdQYWNNYW4ocGFjbWFuLnBvc2l0aW9uLngsIHBhY21hbi5wb3NpdGlvbi55LCBwYWNtYW4uZGlyZWN0aW9uLCBnYW1lLmdldEdhbWVUaW1lKCkpO1xuICAgIH07XG5cbiAgICBpZiAoaXNGaXJzdCkge1xuICAgICAgZHJhd01vdmluZ09ianMoKTtcbiAgICAgIGZvciAoY29uc3Qge1xuICAgICAgICBwb3NpdGlvbjogeyB4LCB5IH0sXG4gICAgICB9IG9mIGJpZ0RvdHMpIHtcbiAgICAgICAgYXdhaXQgc2xlZXAoMTApO1xuICAgICAgICBkcmF3RG90KHgsIHksIHRydWUpO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCB7XG4gICAgICAgIHBvc2l0aW9uOiB7IHgsIHkgfSxcbiAgICAgIH0gb2Ygbm9ybWFsRG90cykge1xuICAgICAgICBhd2FpdCBzbGVlcCgxMCk7XG4gICAgICAgIGRyYXdEb3QoeCwgeSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBub3JtYWxEb3RzLmZvckVhY2goKGRvdCkgPT4gZHJhd0RvdChkb3QucG9zaXRpb24ueCwgZG90LnBvc2l0aW9uLnksIGZhbHNlKSk7XG4gICAgICBiaWdEb3RzLmZvckVhY2goKGRvdCkgPT4gZHJhd0RvdChkb3QucG9zaXRpb24ueCwgZG90LnBvc2l0aW9uLnksIHRydWUsIGdhbWUuZ2V0R2FtZVRpbWUoKSkpO1xuICAgICAgZnJ1aXQgJiYgZHJhd0ZydWl0KGZydWl0LnBvc2l0aW9uLngsIGZydWl0LnBvc2l0aW9uLnksIGZydWl0LnR5cGUpO1xuICAgICAgZHJhd01vdmluZ09ianMoKTtcbiAgICB9XG5cbiAgICAvLyBKdWRnZSBnYW1lIG92ZXJcbiAgICBpZiAoZ2FtZS5nZXRJc0dhbWVPdmVyKCkpIHtcbiAgICAgIGlmICh0aW1lciAhPT0gbnVsbCkge1xuICAgICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICAgICAgdGltZXIgPSBudWxsO1xuICAgICAgfVxuICAgICAgZ2FtZU92ZXJQYW5lbD8uY2xhc3NMaXN0LmFkZCgnYXBwZWFyJyk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB0aW1lciAmJiBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICB0aW1lciA9IG51bGw7XG4gIH1cbn07XG5cbi8qKlxuICogR2xvYmFsIGtleWJvYXJkIGxpc3RlbmVyXG4gKi9cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgYXN5bmMgKGUpID0+IHtcbiAgaWYgKGdhbWUuZ2V0SXNTdGFydGVkKCkpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaWYgKFsnQXJyb3dVcCcsICdBcnJvd0Rvd24nLCAnQXJyb3dMZWZ0JywgJ0Fycm93UmlnaHQnXS5pbmNsdWRlcyhlLmtleSkpIHtcbiAgICAgIGNvbnN0IG1hcDogeyBba2V5OiBzdHJpbmddOiBudW1iZXIgfSA9IHtcbiAgICAgICAgQXJyb3dVcDogMCxcbiAgICAgICAgQXJyb3dEb3duOiAxLFxuICAgICAgICBBcnJvd0xlZnQ6IDIsXG4gICAgICAgIEFycm93UmlnaHQ6IDMsXG4gICAgICB9O1xuICAgICAgcmVxdWVzdCh7IHVybDogJy9jaGFuZ2VEaXJlY3Rpb24nLCBtZXRob2Q6ICdQT1NUJywgYm9keTogeyBkaXJlY3Rpb246IG1hcFtlLmtleV0gfSB9KTtcbiAgICB9XG4gIH1cbn0pO1xuXG4vKipcbiAqIFN0YXJ0IGdhbWVcbiAqIDEuIEhpZGUgbWFza1xuICogMi4gUmVhZCBkYXRhIGZyb20gZ2FtZVxuICogMy4gRGlzcGxheSBpbmZvIHBhbmVsXG4gKiA0LiBTZXQgZ2FtZSB0byBzdGFydFxuICovXG5zdGFydEdhbWVCdG4/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAoIWluZm9QYW5lbCB8fCAhbWFza1BhbmVsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgbWFza1BhbmVsPy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgaW5mb1BhbmVsPy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcblxuICAoYXN5bmMgKCkgPT4ge1xuICAgIGF3YWl0IGdhbWUuc2F2ZUdhbWVTZXR0aW5ncygpO1xuICAgIGF3YWl0IGdhbWUuc3RhcnQoKTtcbiAgICBhd2FpdCBkcmF3V2l0aEdhbWVEYXRhKHRydWUpO1xuXG4gICAgaWYgKHRpbWVyKSB7XG4gICAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICB9XG4gICAgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBkcmF3V2l0aEdhbWVEYXRhKCkudGhlbigoKSA9PiBnYW1lLmdhbWVUaW1lSW5jcmVhc2UoKSk7XG4gICAgfSwgMTAwKTtcbiAgICBmb290ZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICB9KSgpO1xufSk7XG5cbnJlc3RhcnRCdG4/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKCkgPT4ge1xuICBpbmZvUGFuZWw/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBhd2FpdCByZXF1ZXN0KHsgdXJsOiAnL2luaXQnLCBtZXRob2Q6ICdQT1NUJyB9KTtcbn0pO1xuXG5zZXR0aW5nc0J0bj8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gIGxpdmVzVmFsdWUhLmlubmVySFRNTCA9IGAke2dhbWUuZ2V0TGl2ZXMoKX1gO1xuICBzcGVlZEJ0bnMuZm9yRWFjaCgoZWFjaCkgPT4ge1xuICAgIGlmIChlYWNoLmdldEF0dHJpYnV0ZSgnbmFtZScpID09PSBnYW1lLmdldFNwZWVkKCkpIHtcbiAgICAgIGVhY2guY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVhY2guY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgfVxuICB9KTtcbiAgc2V0dGluZ3NQYW5lbD8uY2xhc3NMaXN0LnRvZ2dsZSgnaGlkZGVuJyk7XG59KTtcblxucG9zaXRpb25CdG4/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtYXNrUGFuZWw/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBnYW1lLnNldEVkaXRNb2RlKHRydWUpO1xufSk7XG5cbm1pbnVzQnRuPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgY29uc3QgbGl2ZXMgPSBnYW1lLmdldExpdmVzKCk7XG4gIGlmIChsaXZlcyA8PSAxKSB7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIGdhbWUuc2V0TGl2ZXMobGl2ZXMgLSAxKTtcbiAgICBsaXZlc1ZhbHVlIS5pbm5lckhUTUwgPSBgJHtnYW1lLmdldExpdmVzKCl9YDtcbiAgfVxufSk7XG5cbnBsdXNCdG4/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBjb25zdCBsaXZlcyA9IGdhbWUuZ2V0TGl2ZXMoKTtcbiAgaWYgKGxpdmVzID09PSA1KSB7XG4gICAgcmV0dXJuO1xuICB9IGVsc2Uge1xuICAgIGdhbWUuc2V0TGl2ZXMobGl2ZXMgKyAxKTtcbiAgICBsaXZlc1ZhbHVlIS5pbm5lckhUTUwgPSBgJHtnYW1lLmdldExpdmVzKCl9YDtcbiAgfVxufSk7XG5cbnNwZWVkQnRucy5mb3JFYWNoKChlYWNoKSA9PiB7XG4gIGVhY2guYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgZ2FtZS5zZXRTcGVlZChlYWNoLmdldEF0dHJpYnV0ZSgnbmFtZScpIHx8ICdtZWQnKTtcbiAgICBzcGVlZEJ0bnMuZm9yRWFjaCgob3RoZXIpID0+IHtcbiAgICAgIGlmIChvdGhlciAhPT0gZWFjaCkge1xuICAgICAgICBvdGhlci5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG90aGVyLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgfVxuICAgIH0pO1xuICB9KTtcbn0pO1xuXG5jb25maXJtQnRuPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jICgpID0+IHtcbiAgYXdhaXQgZ2FtZS5zYXZlR2FtZVNldHRpbmdzKCk7XG4gIHNldHRpbmdzUGFuZWw/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xufSk7XG5cbmNhbnZhcz8uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgKGUpID0+IHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgaWYgKGdhbWUuZ2V0SXNFZGl0TW9kZSgpKSB7XG4gICAgbGV0IHsgb2Zmc2V0WCwgb2Zmc2V0WSB9ID0gZTtcbiAgICBsZXQgcG9zWCA9IFVOSVQgKiBNYXRoLnJvdW5kKG9mZnNldFggLyBVTklUKTtcbiAgICBsZXQgcG9zWSA9IFVOSVQgKiBNYXRoLnJvdW5kKG9mZnNldFkgLyBVTklUKTtcblxuICAgIGlmICghKHBvc1ggaW4gZG90c01hcCkgfHwgIWRvdHNNYXBbcG9zWF0uaGFzKHBvc1kpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNsZWFyKHRydWUpO1xuICAgIGRyYXdQYWNNYW4ocG9zWCwgcG9zWSwgRElSRUNUSU9OUy5SSUdIVCk7XG4gIH1cbn0pO1xuXG5jYW52YXM/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgaWYgKGdhbWUuZ2V0SXNFZGl0TW9kZSgpKSB7XG4gICAgbGV0IHsgb2Zmc2V0WCwgb2Zmc2V0WSB9ID0gZTtcbiAgICBsZXQgcG9zWCA9IFVOSVQgKiBNYXRoLnJvdW5kKG9mZnNldFggLyBVTklUKTtcbiAgICBsZXQgcG9zWSA9IFVOSVQgKiBNYXRoLnJvdW5kKG9mZnNldFkgLyBVTklUKTtcbiAgICBnYW1lLnNldFNwYXduaW5nUG9pbnQoeyB4OiBwb3NYLCB5OiBwb3NZIH0pO1xuICAgIGNsZWFyKHRydWUpO1xuICAgIG1hc2tQYW5lbD8uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIH1cbiAgZ2FtZS5zZXRFZGl0TW9kZShmYWxzZSk7XG59KTtcblxucGF1c2VCdG4/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBpZiAoZ2FtZS5nZXRJc0dhbWVPdmVyKCkpIHtcbiAgICByZXR1cm47XG4gIH1cblxuICBpZiAodGltZXIpIHtcbiAgICBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICB0aW1lciA9IG51bGw7XG4gIH0gZWxzZSB7XG4gICAgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICBkcmF3V2l0aEdhbWVEYXRhKCkudGhlbigoKSA9PiBnYW1lLmdhbWVUaW1lSW5jcmVhc2UoKSk7XG4gICAgfSwgMTAwKTtcbiAgfVxufSk7XG5cbmJhY2tCdG4/LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICBtYXNrUGFuZWw/LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuICBpbmZvUGFuZWw/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBmb290ZXI/LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBnYW1lT3ZlclBhbmVsPy5jbGFzc0xpc3QucmVtb3ZlKCdhcHBlYXInKTtcbiAgYWxsQ29sbGVjdGVkUGFuZWw/LmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcbiAgZnJ1aXRzSW5kaWNhdG9yLmZvckVhY2goKGVhY2gpID0+IGVhY2guY2xhc3NMaXN0LnJlbW92ZSgnY29sbGVjdGVkJykpO1xuICBnYW1lLnNldElzU3RhcnRlZChmYWxzZSk7XG4gIGNsZWFyKHRydWUpO1xuICB0aW1lciAmJiBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgdGltZXIgPSBudWxsO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=