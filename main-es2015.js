(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main id=\"pageMain\">\n  <div class=\"panes\">\n    <app-toolbar id=\"panel-toolbar\" class=\"toolbar-vertical\"></app-toolbar>\n    <app-explorer class=\"pane\" *ngIf=\"!! context.viewMode && context.characters.length\">\n      \n    </app-explorer>\n    <div class=\"middle-pane\">\n      <app-viewport id=\"viewport\"></app-viewport>\n      <app-animation-bar id=\"animation-bar\" class=\"bar-horizontal\" *ngIf=\"context.characters.length\"\n                         [hidden]=\"!context.character||!context.character.currentAction\"></app-animation-bar>\n    </div>\n  </div>\n  <!-- <app-statusbar></app-statusbar> -->\n</main>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/animation-bar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/animation-bar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"buttons-bar\">\n  <button class=\"button-play\" (click)=\"togglePause()\">▶</button>\n  <!-- <button (click)=\"addEvent()\">Add Event Yo!</button> -->\n  <!-- <div class=\"filler\"><span class=\"timer\"></span></div> -->\n</div>\n<div class=\"sliders\">\n  <br/>\n  <nouislider id=\"slider-events\" [config]=\"sliderConfig.events\" #SliderEvents\n              [min]=\"0\" [max]=\"action.duration\" [(ngModel)]=\"action.events\"\n              (slide)=\"handlers.change_events($event)\"\n              [hidden]=\"!action.hasEvents\"\n              ></nouislider>\n  <nouislider id=\"slider-weight\" [config]=\"sliderConfig.weight\"\n              [min]=\"0\" [max]=\"action.duration\" [(ngModel)]=\"action.weight\"\n              ></nouislider>\n  <nouislider id=\"slider-play\"   [config]=\"sliderConfig.play\"   \n              [min]=\"0\" [max]=\"action.duration\" [(ngModel)]=\"action.time\"\n              (slide)=\"handlers.change_play($event)\"\n              ></nouislider>\n  <br/>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/explorer.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/explorer.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- CHARACTERS -->\n\n<div id=\"panel-navigation\" *ngIf=\"context.viewMode === 'characters'\">\n  <div class=\"subpanel\">\n    <header><h3>Current Characters</h3></header>\n    <ul class=\"contents list\">\n      <li *ngFor=\"let c of context.characters\" attr.uuid=\"{{c.uuid}}\" \n      class=\"list-item\" [class.selected]=\"context.character === c\"\n      (click)=\"main.focusOnCharacter( c )\">{{c.name}}</li>\n    </ul>\n  </div>\n</div>\n\n<!-- OVERVIEW -->\n\n<div id=\"panel-navigation\" *ngIf=\"context.viewMode === 'overview'\">\n  <div id=\"subpanel-properties\" class=\"subpanel\">\n    <header><h3>Selection</h3></header>\n    <div class=\"contents\">\n      <br />\n      <input id=\"field-name\" type=\"text\" [(ngModel)]=\"object.name\"/>\n      <div class=\"i-vector-row position\">\n        <input id=\"field-position-x\" type=\"text\" [(ngModel)]=\"object.position.x\" />\n        <input id=\"field-position-y\" type=\"text\" [(ngModel)]=\"object.position.y\" />\n        <input id=\"field-position-z\" type=\"text\" [(ngModel)]=\"object.position.z\" />\n      </div>\n      <div class=\"i-vector-row rotation\">\n        <input id=\"field-rotation-x\" type=\"text\" [(ngModel)]=\"object.rotation.x\" />\n        <input id=\"field-rotation-y\" type=\"text\" [(ngModel)]=\"object.rotation.y\" />\n        <input id=\"field-rotation-z\" type=\"text\" [(ngModel)]=\"object.rotation.z\" />\n      </div>\n      <div class=\"i-vector-row scale linked\">\n        <input id=\"field-scale-x\" type=\"text\" [(ngModel)]=\"object.scale.x\" />\n        <input id=\"field-scale-y\" type=\"text\" [(ngModel)]=\"object.scale.y\" />\n        <input id=\"field-scale-z\" type=\"text\" [(ngModel)]=\"object.scale.z\" />\n      </div>\n      <br/>\n    </div>\n  </div>\n  <div id=\"subpanel-nodes\" class=\"subpanel\">\n    <header><h3>Model</h3></header>\n    <ul class=\"contents list\">\n      <li *ngFor=\"let o of context.character.model.children\"\n      class=\"list-item\" attr.uuid=\"{{o.uuid}}\" [class.selected]=\"context.selection.last === o\"\n      (click)=\"select(o,'node')\">{{o.name||o.uuid}}</li>\n    </ul>\n  </div>\n  <div id=\"subpanel-props\" class=\"subpanel\" *ngIf=\"context.character\">\n    <header><h3>Props</h3></header>\n    <ul class=\"contents list\">\n      <li *ngFor=\"let o of context.character.props\" \n      class=\"list-item\" attr.uuid=\"{{o.uuid}}\" [class.selected]=\"context.selection.last === o\"\n      [hidden]=\"o.userData.hidden\"\n      (click)=\"select(o,'prop')\"><a>{{o.name||o.uuid}}</a></li>\n    </ul>\n  </div>\n  <div id=\"subpanel-anims\" class=\"subpanel\" *ngIf=\"context.character\">\n    <header><h3>Animations</h3></header>\n    <ul class=\"contents list\">\n      <li *ngFor=\"let o of context.character.anims\" \n      class=\"list-item\" attr.uuid=\"{{o.uuid}}\" [class.selected]=\"context.selection.last === o\"\n      (click)=\"select(o,'anim')\">{{o.name||o.uuid}}</li>\n    </ul>\n  </div>\n</div>\n\n<!-- NODES -->\n\n<div id=\"panel-navigation\" *ngIf=\"context.viewMode === 'nodes'\">\n  <header><h3>Model Nodes</h3></header>\n  <tree [tree]=\"tree_sceneNodes\" \n        (nodeSelected)=\"tree_sceneNodes.onNodeSelected($event)\"\n        #tree__sceneNodes>\n  </tree>\n</div>\n\n<!-- BONES -->\n\n<div id=\"panel-navigation\" *ngIf=\"context.viewMode === 'bones'\">\n  <div class=\"subpanel\">\n    <header><h3>My Bones</h3></header>\n    <ul class=\"contents list\">\n      <li *ngFor=\"let bone of allBones\" attr.uuid=\"{{bone.uuid}}\" \n      class=\"list-item\" [class.selected]=\"context.selection.last === bone\"\n      (click)=\"select(bone,'node')\">{{bone.name}}</li>\n    </ul>\n  </div>\n</div>\n\n<!-- ANIMATIONS -->\n\n<div id=\"panel-navigation\" *ngIf=\"context.viewMode === 'animations'\">\n</div>\n\n<!-- MATERIALING -->\n\n<div id=\"panel-navigation\" *ngIf=\"context.viewMode === 'materials'\">\n  <div class=\"subpanel\">\n    <header><h3>All Materials</h3></header>\n    <ul class=\"contents list\">\n      <li *ngFor=\"let m of allMaterials\" attr.uuid=\"{{m.uuid}}\" \n      class=\"list-item\" [class.selected]=\"context.selection.last === m\"\n      (click)=\"select(m,'mat')\">{{m.name||m.uuid}}</li>\n    </ul>\n  </div>\n  <div class=\"filler\"></div>\n  <div class=\"subpanel\" *ngIf=\"!! material\">\n    <header><h3> {{ material.name || material.uuid }} </h3></header>\n    <br/>\n    <nouislider id=\"slider-roughness\" [config]=\"materialSliders.zeroToOne\"\n                [min]=\"0\" [max]=\"1\" [(ngModel)]=\"material.roughness\"\n    ></nouislider>\n    <br/>\n    <nouislider id=\"slider-metalness\" [config]=\"materialSliders.zeroToOne\"\n                [min]=\"0\" [max]=\"1\" [(ngModel)]=\"material.metalness\"\n    ></nouislider>\n    <br/>\n    <nouislider id=\"slider-envMapIntensity\" [config]=\"materialSliders.zeroToOne\"\n                [min]=\"0\" [max]=\"1\" [(ngModel)]=\"material.envMapIntensity\"\n    ></nouislider>\n    <br/>\n  </div>\n</div>\n\n<!-- STUDIO -->\n\n<div id=\"panel-navigation\" *ngIf=\"context.viewMode === 'studio'\">\n  <div class=\"subpanel\">\n    <header><h3>Select Studio Rig</h3></header>\n    <ul class=\"contents list\">\n      <li *ngFor=\"let config of scener.rigConfigurations\"\n      class=\"list-item\" [class.selected]=\"scener.rig.configuration === config\"\n      (click)=\"scener.setupRig( config )\">{{config.name}}</li>\n    </ul>\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/statusbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/statusbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <b>Characters: </b> -->\n<a *ngFor=\"let c of context.characters\" (click)=\"main.focusOnCharacter( c )\"> •   {{c.name}}   • </a>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/toolbar.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/toolbar.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"top\">\n  <button *ngFor=\"let b of buttons\" title=\"{{b.name}}\" [class.selected]=\"context.viewMode===b.viewMode\"\n    (click)=\"selectViewMode(b.viewMode)\">\n    <i class=\"material-icons\">{{b.icon}}</i>\n  </button>\n</div>\n<div class=\"filler\"></div>\n<div class=\"bottom\">\n  <!-- <button onclick=\"location.reload()\"><i class=\"material-icons\">autorenew</i></button> -->\n  <button class=\"options-menu\"><i class=\"material-icons\">menu</i></button>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/viewport.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/viewport.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contents\">\n  <canvas id=\"webgl-canvas\" [hidden]=\"!context.character\"></canvas>\n  <div [hidden]=\"context.character\">Drag files here</div>\n  <div class=\"overlay overlay-top-right\">\n    <button class=\"transform position\">✣&#xFE0E;</button>\n    <button class=\"transform rotation\">↺&#xFE0E;</button>\n    <button class=\"transform scale\">■&#xFE0E;</button>\n    <button class=\"transform space\">🌐&#xFE0E;</button>\n  </div>\n  <!-- <div class=\"overlay overlay-top-left\"> -->\n  <div class=\"overlay overlay-bottom-right\">\n    <!-- <button class=\"select-character\">💀&#xFE0E;</button> -->\n  </div>\n  <div class=\"loading\" *ngIf=\"loador.isBusy\"><h1>Loading</h1></div>\n  <div class=\"exporting\" *ngIf=\"exportor.isBusy\"><h1>Exporting...</h1></div>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_loador_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/loador.service */ "./src/app/services/loador.service.ts");
/* harmony import */ var _services_scener_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/scener.service */ "./src/app/services/scener.service.ts");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stats-js */ "./node_modules/stats-js/build/stats.min.js");
/* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(stats_js__WEBPACK_IMPORTED_MODULE_5__);






let AppComponent = class AppComponent {
    constructor(main, loador, scener) {
        this.main = main;
        this.loador = loador;
        this.scener = scener;
        this.context = _services_main_service__WEBPACK_IMPORTED_MODULE_4__["context"];
    }
    ngOnInit() {
        this.main.initialize();
        this.scener.initialize();
        this.loador.makeDropField('viewport', this.loador.fileResolvers.characters, (...rest) => this.onCharactersLoaded(...rest));
        ///
        // new DropField( document.getElementById('subpanel-nodes') ).resolver( fileResolvers.model ).loaded( onCharacterLoaded )
        // new DropField( document.getElementById('subpanel-props') ).resolver( fileResolvers.props ).loaded( onPropLoaded )
        // new DropField( document.getElementById('subpanel-anims') ).resolver( fileResolvers.anims ).loaded( onAnimationsLoaded )
        //this.loador.loadZipFromLocalStorage( ( ...rest:any ) => this.onCharactersLoaded( ...rest ) )
        this.loador.loadFromUrl("/assets/examples/glb/hero-shield.glb").then((c) => this.onCharactersLoaded(new _services_main_service__WEBPACK_IMPORTED_MODULE_4__["Character"](c.scene, c.animations)));
        const SHOW_STATS = false;
        if (SHOW_STATS) {
            var stats = new stats_js__WEBPACK_IMPORTED_MODULE_5___default.a();
            stats.showPanel(1); // 0: fps, 1: ms, 2: mb, 3+: custom
            stats.dom.style.setProperty("left", "unset");
            stats.dom.style.setProperty("right", "48px");
            document.body.appendChild(stats.dom);
            function animate() {
                stats.end();
                stats.begin();
                requestAnimationFrame(animate);
            }
            requestAnimationFrame(animate);
        }
        /// @ts-ignore
        window.app = this;
        window.context = _services_main_service__WEBPACK_IMPORTED_MODULE_4__["context"];
    }
    onCharactersLoaded(...characters) {
        characters.forEach(character => {
            console.log(character);
            this.main.addCharacter(character);
            character.playDefaultAnimation();
            // this.extractColors( character.model )
        });
        this.main.focusOnCharacter(characters[0]);
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"] },
    { type: _services_loador_service__WEBPACK_IMPORTED_MODULE_2__["LoadorService"] },
    { type: _services_scener_service__WEBPACK_IMPORTED_MODULE_3__["SceneService"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-root', template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default })
], AppComponent);

Array.prototype.toSet = function () { return new Set(this); };
Array.prototype.mapToObject = function (func) {
    const result = {};
    this.forEach((o, i) => {
        let r = func(o, i);
        let [key, value] = Array.isArray(r) ? [r[0], r[1]] : [r, o];
        result[key] = value;
    });
    return result;
};


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/ng2-nouislider.js");
/* harmony import */ var ng2_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-tree */ "./node_modules/ng2-tree/index.js");
/* harmony import */ var ng2_tree__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng2_tree__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/tabs.component */ "./src/app/common/tabs.component.ts");
/* harmony import */ var _common_tab_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/tab.component */ "./src/app/common/tab.component.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_viewport_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/viewport.component */ "./src/app/components/viewport.component.ts");
/* harmony import */ var _components_animation_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/animation-bar.component */ "./src/app/components/animation-bar.component.ts");
/* harmony import */ var _components_explorer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/explorer.component */ "./src/app/components/explorer.component.ts");
/* harmony import */ var _components_toolbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/toolbar.component */ "./src/app/components/toolbar.component.ts");
/* harmony import */ var _components_statusbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/statusbar.component */ "./src/app/components/statusbar.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _components_viewport_component__WEBPACK_IMPORTED_MODULE_9__["ViewportComponent"],
            _components_animation_bar_component__WEBPACK_IMPORTED_MODULE_10__["AnimationBarComponent"],
            _components_explorer_component__WEBPACK_IMPORTED_MODULE_11__["ExplorerComponent"],
            _components_toolbar_component__WEBPACK_IMPORTED_MODULE_12__["ToolbarComponent"],
            _common_tabs_component__WEBPACK_IMPORTED_MODULE_6__["TabsComponent"],
            _common_tab_component__WEBPACK_IMPORTED_MODULE_7__["TabComponent"],
            _components_statusbar_component__WEBPACK_IMPORTED_MODULE_13__["StatusbarComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
            ng2_tree__WEBPACK_IMPORTED_MODULE_5__["TreeModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/common/tab.component.ts":
/*!*****************************************!*\
  !*** ./src/app/common/tab.component.ts ***!
  \*****************************************/
/*! exports provided: TabComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function() { return TabComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/**
 * A single tab page. It renders the passed template
 * via the @Input properties by using the ngTemplateOutlet
 * and ngTemplateOutletContext directives.
 */


let TabComponent = class TabComponent {
    constructor() {
        this.active = false;
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tabTitle')
], TabComponent.prototype, "title", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TabComponent.prototype, "active", void 0);
TabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'my-tab',
        template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `,
        styles: ["\n    .pane{\n      // padding: 1em;\n    }\n  "]
    })
], TabComponent);



/***/ }),

/***/ "./src/app/common/tabs.component.ts":
/*!******************************************!*\
  !*** ./src/app/common/tabs.component.ts ***!
  \******************************************/
/*! exports provided: TabsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function() { return TabsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab.component */ "./src/app/common/tab.component.ts");
/**
 * The main component that renders single TabComponent
 * instances.
 */



// import { DynamicTabsDirective } from './dynamic-tabs.directive';
let TabsComponent = class TabsComponent {
    // contentChildren are set
    ngAfterContentInit() {
        // get all active tabs
        let activeTabs = this.tabs.filter((tab) => tab.active);
        // if there is no active tab set, activate the first
        if (activeTabs.length === 0) {
            this.selectTab(this.tabs.first);
        }
    }
    selectTab(target_tab) {
        this.tabs.toArray().forEach(tab => tab.active = tab === target_tab);
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_tab_component__WEBPACK_IMPORTED_MODULE_2__["TabComponent"])
], TabsComponent.prototype, "tabs", void 0);
TabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'my-tabs',
        template: `
    <ul class="nav nav-tabs">
      <li *ngFor="let tab of tabs" (click)="selectTab(tab)" [class.active]="tab.active">
        <a href="#">{{tab.title}}</a>
      </li>
    </ul>
    <ng-content></ng-content>
  `,
        styles: ["\n    .tab-close {\n      color: gray;\n      text-align: right;\n      cursor: pointer;\n    }\n    "]
    })
], TabsComponent);



/***/ }),

/***/ "./src/app/components/animation-bar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/animation-bar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5pbWF0aW9uLWJhci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/animation-bar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/animation-bar.component.ts ***!
  \*******************************************************/
/*! exports provided: AnimationBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationBarComponent", function() { return AnimationBarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/ng2-nouislider.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





const FRAME_TIME = 1.000 / 30;
let AnimationBarComponent = class AnimationBarComponent {
    constructor() {
        this.sliderConfig = {
            events: {
                step: FRAME_TIME,
                connect: false,
                animate: false,
                behaviour: 'unconstrained-tap-snap',
                // tooltips: true,
                tooltips: [
                    { to: () => "1" },
                    { to: () => "2" },
                    { to: () => "3" },
                    { to: () => "4" },
                    { to: () => "5" },
                    { to: () => "6" },
                    { to: () => "7" },
                    { to: () => "8" },
                    { to: () => "9" },
                    { to: () => "10" },
                ]
            },
            weight: {
                step: FRAME_TIME,
                margin: FRAME_TIME,
                connect: [true, false, true],
                animate: false,
                behaviour: 'snap',
            },
            play: {
                step: .001,
                connect: [true, false],
                animate: false,
                behaviour: 'snap',
            }
        };
        this.action = {
            get clip() {
                if (!_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character || !_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction)
                    return null;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction.getClip();
            },
            get userData() {
                if (!this.clip)
                    return null;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.anims.getUserData(this.clip);
            },
            get duration() {
                if (!_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character || !_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction)
                    return 1.000;
                return this.clip.duration;
            },
            get hasEvents() {
                return !!_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character &&
                    !!_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction &&
                    !!this.userData.eventTimes.length;
            },
            // _events : [.1,.2,.3,.4,.5,.6,.7,.8,.9,1.0] ,
            events: [11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
            get weight() {
                if (!_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character || !_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction)
                    return [0.000, 0.000];
                const clip = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction.getClip();
                return _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.anims.getUserData(clip).fadeTimes;
            },
            set weight(v) {
                const clip = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction.getClip();
                const fadeTimes = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.anims.getUserData(clip).fadeTimes;
                fadeTimes[0] = v[0];
                fadeTimes[1] = v[1];
            },
            get time() {
                if (!_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character || !_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction)
                    return 0.000;
                return _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction.time;
            },
            set time(v) {
                if (!_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character || !_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction)
                    return;
                // console.log( v )
                // context.character.currentAction.paused = true
                // context.character.currentAction.time = v
            }
        };
        this.context = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"];
        this.handlers = {
            change_play(value) {
                // console.log( value )
                _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction.paused = true;
                _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction.time = value;
            },
            change_events(values) {
                const clip = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction.getClip();
                const eventTimes = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.anims.getUserData(clip).eventTimes;
                eventTimes.forEach((t, i) => eventTimes[i] = values[i]);
            }
        };
    }
    ngOnInit() {
        ///@ts-ignore
        window.ani = this;
        _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].events.subscribe(_services_main_service__WEBPACK_IMPORTED_MODULE_2__["Events"].CHANGE_SELECTION, selection => {
            if (selection.type === "anim") {
                _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.play(selection.last);
            }
        });
        /// @ts-ignore
        jquery__WEBPACK_IMPORTED_MODULE_4__["contextMenu"]({
            selector: 'div.sliders',
            animation: { duration: 100, show: 'fadeIn', hide: 'fadeOut' },
            items: [
                { name: "Add Event", icon: "star", callback: () => this.addEvent() },
                { name: "Create animation from first frame", icon: "flash", callback: () => {
                        /// @ts-ignore
                        let a = this.action.clip.clone();
                        a.tracks.forEach(t => {
                            t.times = [0];
                            t.values = t.values.slice(0, t.name.endsWith(".quaternion") ? 4 : 3);
                        });
                        a.name += "-start-pose";
                        a.duration = 0.000;
                        _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.anims.add(a);
                    } },
                { name: "Create animation from first frame", icon: "flash", callback: () => {
                        /// @ts-ignore
                        let a = this.action.clip.clone();
                        a.tracks.forEach(t => {
                            t.times = [0];
                            t.values = t.values.slice(t.values.length - (t.name.endsWith(".quaternion") ? 4 : 3));
                        });
                        a.name += "-end-pose";
                        a.duration = 0.000;
                        _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.anims.add(a);
                    } },
            ]
        });
        // this.slider_events.slide.subscribe( (...rest) => console.log(rest) )
        // this.slider_events.slider.on( "slide", (...rest) => console.log(rest) )
        // $("#slider-events").on("change",(...rest) => console.log(rest))
        _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].events.subscribe(_services_main_service__WEBPACK_IMPORTED_MODULE_2__["Events"].ANIMATION_PLAY, () => this.refresh());
        _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].events.subscribe(_services_main_service__WEBPACK_IMPORTED_MODULE_2__["Events"].CHANGE_CHARACTER, () => this.refresh());
        if (_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character && _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction)
            this.refresh();
        this.onFrame();
    }
    onFrame() {
        try {
            const action = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction;
            const clip = action.getClip();
            const udata = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.anims.getUserData(clip);
            udata.eventTimes.forEach((et, i) => this.action.events[i] = et);
            const handles = jquery__WEBPACK_IMPORTED_MODULE_4__("#slider-events .noUi-handle").toArray();
            handles.forEach((o, i) => jquery__WEBPACK_IMPORTED_MODULE_4__(o).toggle(udata.eventTimes[i] !== undefined));
        }
        catch (e) { }
        requestAnimationFrame(() => this.onFrame());
    }
    refresh() {
        const action = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction;
        const clip = action.getClip();
        const udata = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.anims.getUserData(clip);
        udata.eventTimes.forEach((et, i) => this.action.events[i] = et);
        ///@ts-ignore
        this.slider_events.writeValue(this.action.events);
        console.log(udata);
    }
    ////
    togglePause() {
        _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction.paused = !_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction.paused;
    }
    addEvent() {
        const clip = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction.getClip();
        const udata = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.anims.getUserData(clip);
        udata.addEvent(_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction.time);
        this.refresh();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(ng2_nouislider__WEBPACK_IMPORTED_MODULE_3__["NouisliderComponent"], { static: true })
], AnimationBarComponent.prototype, "slider_events", void 0);
AnimationBarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-animation-bar',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./animation-bar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/animation-bar.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./animation-bar.component.css */ "./src/app/components/animation-bar.component.css")).default]
    })
], AnimationBarComponent);



/***/ }),

/***/ "./src/app/components/explorer.component.ts":
/*!**************************************************!*\
  !*** ./src/app/components/explorer.component.ts ***!
  \**************************************************/
/*! exports provided: ExplorerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorerComponent", function() { return ExplorerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _services_scener_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/scener.service */ "./src/app/services/scener.service.ts");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery_contextmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery-contextmenu */ "./node_modules/jquery-contextmenu/dist/jquery.contextMenu.js");
/* harmony import */ var jquery_contextmenu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery_contextmenu__WEBPACK_IMPORTED_MODULE_6__);







const VECTOR3_NaN = { x: NaN, y: NaN, z: NaN };
const boner = {
    subjects: [],
    keepWorldMatrix: false,
    addCurrentSubjectsTo(parentToBe) {
        const add = subject => this.keepWorldMatrix ? parentToBe.attach(subject) : parentToBe.add(subject);
        this.subjects.forEach(subject => add(subject));
        _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].data.dirty = true;
        return this;
    },
    openFor(...subjects) {
        this.subjects.length = 0;
        this.subjects.push(...subjects);
        return this;
    },
};
function map_node(o, depth = 0) {
    return {
        id: o.uuid,
        value: o.name || o.uuid,
        children: o.children.map(child => map_node(child, ++depth))
    };
}
let ExplorerComponent = class ExplorerComponent {
    constructor(main, scener) {
        this.main = main;
        this.scener = scener;
        this.context = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"];
        this.tree_sceneNodes = {
            value: 'character.model',
            settings: {
                static: true,
                isCollapsedOnInit: false,
            },
            loadChildren: function (callback) {
                callback(_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.model.children.map(o => map_node(o)));
            },
            onNodeSelected(e) {
                const item = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.model.getObjectByProperty("uuid", e.node.id);
                _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].selection.type = "node";
                _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].selection.last = item;
                _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].selection.dirty = true;
                console.log(e);
            },
        };
        //// MATERIALS
        this.materialSliders = {
            zeroToOne: { connect: [true, false], animate: false, behaviour: 'snap', },
        };
    }
    ngOnInit() {
        ///@ts-ignore
        window.ex = this;
        // this.setup_keyboardEvents()
        this.setup_contextMenus();
        console.log(this.elTree_sceneNodes);
    }
    setup_contextMenus() {
        const animation = { duration: 0, show: 'show', hide: 'hide' };
        const util = {
            addChild(parent, name, userData = {}) {
                let child = new three__WEBPACK_IMPORTED_MODULE_4__["Object3D"]();
                child.name = name;
                child.userData = userData;
                parent.add(child);
                _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].data.dirty = true;
            },
        };
        /// @ts-ignore
        jquery__WEBPACK_IMPORTED_MODULE_5__["contextMenu"]({
            selector: '#subpanel-nodes .list-item',
            animation: animation,
            build: function (el, event) {
                const uuid = el.attr("uuid");
                const item = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.model.getObjectByProperty("uuid", uuid);
                return {
                    callback: action => console.log(action, uuid),
                    animation: { duration: undefined, show: 'show', hide: 'hide' },
                    items: {
                        addChild: {
                            name: "Add empty child", icon: "add",
                            callback: () => util.addChild(item, "o")
                        },
                        addHolster: {
                            name: "Add empty holster", icon: "add",
                            callback: () => util.addChild(item, "holster-" + item.name, { isHolster: true })
                        },
                        toggleHolster: {
                            name: item.userData.isHolster ? "Untag as holster" : "Tag as holster", icon: "paste",
                            callback: () => item.userData.isHolster = item.userData.isHolster ? undefined : true
                        },
                        delete: {
                            name: "Delete", icon: "delete",
                            callback: () => {
                                item.parent.remove(item);
                                _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].data.dirty = true;
                            }
                        },
                    }
                };
            }
        });
        /// @ts-ignore
        jquery__WEBPACK_IMPORTED_MODULE_5__["contextMenu"]({
            selector: '#subpanel-props .list-item',
            animation: animation,
            build: (el, event) => {
                const uuid = el.attr("uuid");
                const targets = [_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.model.getObjectByProperty("uuid", uuid)];
                const makeItem = (holster, i, keepWorldMatrix) => {
                    return ["attachTo_" + i, {
                            name: holster.name + (keepWorldMatrix ? " (keep global matrix)" : ''),
                            icon: "link",
                            callback: () => {
                                boner.keepWorldMatrix = keepWorldMatrix;
                                boner.openFor(...targets).addCurrentSubjectsTo(holster);
                            }
                        }];
                };
                return {
                    items: {
                        toggleHidden: {
                            name: targets.length && targets[0].visible ? "Hide" : "Show", icon: "eye",
                            visible: targets.length === 1,
                            callback: () => _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.setHidden(targets[0], targets[0].visible)
                        },
                        setHiddenTrue: {
                            name: "Hide", icon: "eye",
                            visible: targets.length > 1,
                            callback: () => targets.forEach(o => _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.setHidden(o, true))
                        },
                        setHiddenFalse: {
                            name: "Show", icon: "eye",
                            visible: targets.length > 1,
                            callback: () => targets.forEach(o => _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.setHidden(o, false))
                        },
                        sep1: "---------",
                        attachLocal: {
                            name: "Attach to", icon: "link",
                        },
                        attachGlobal: {
                            name: "Attach to (keep global matrix)", icon: "link",
                        },
                        sep2: "---------",
                        addChild: {
                            name: "Add hotpoint (empty child)", icon: "add",
                            // visible: targets.length === 1,
                            callback: () => targets.forEach(target => util.addChild(target, "hot-point"))
                        },
                        clone: {
                            name: "Clone", icon: "copy",
                            callback: () => targets.forEach(o => _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.props.duplicate(o))
                        },
                        delete: {
                            name: "Delete", icon: "delete",
                            callback: () => _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.props.deleteAll(...targets)
                        },
                    }
                };
            },
        });
        /// @ts-ignore
        jquery__WEBPACK_IMPORTED_MODULE_5__["contextMenu"]({
            selector: '#subpanel-anims .list-item',
            animation: animation,
            build: function (el, event) {
                const uuid = el.attr("uuid");
                const targets = [_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.anims.getByUuid(uuid)];
                return {
                    items: {
                        clone: {
                            name: "Clone", icon: "copy",
                            callback: () => targets.forEach(clip => _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.anims.duplicate(clip))
                        },
                        delete: {
                            name: "Delete", icon: "delete",
                            callback: () => _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.anims.deleteAll(...targets)
                        },
                    }
                };
            },
        });
    }
    //// GENERAL
    get object() {
        const fake = { name: '-', position: VECTOR3_NaN, rotation: VECTOR3_NaN, scale: VECTOR3_NaN };
        if (!_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].selection.last)
            return fake;
        if (_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].selection.type === "anim")
            return fake;
        if (_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].selection.type === "mat")
            return fake;
        return _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].selection.last;
    }
    select(target, selectionType) {
        _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].selection.all = [target];
        _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].selection.last = target;
        _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].selection.type = selectionType;
        _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].selection.dirty = true;
    }
    //// BONES
    get allBones() {
        return _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.findAllChildren(o => o.type === "Bone");
    }
    get material() {
        return _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].selection.type !== 'mat' ? null : _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].selection.last;
    }
    get allMaterials() {
        let r = new Set();
        /// @ts-ignore
        _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.model.traverse(o => !o.material ? null : r.add(o.material));
        return Array.from(r);
    }
};
ExplorerComponent.ctorParameters = () => [
    { type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] },
    { type: _services_scener_service__WEBPACK_IMPORTED_MODULE_3__["SceneService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tree__sceneNodes', { static: false })
], ExplorerComponent.prototype, "elTree_sceneNodes", void 0);
ExplorerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-explorer', template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./explorer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/explorer.component.html")).default, })
], ExplorerComponent);



/***/ }),

/***/ "./src/app/components/statusbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/statusbar.component.ts ***!
  \***************************************************/
/*! exports provided: StatusbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusbarComponent", function() { return StatusbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");



let StatusbarComponent = class StatusbarComponent {
    constructor(main) {
        this.main = main;
        this.context = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"];
    }
};
StatusbarComponent.ctorParameters = () => [
    { type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }
];
StatusbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-statusbar', template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./statusbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/statusbar.component.html")).default, })
], StatusbarComponent);



/***/ }),

/***/ "./src/app/components/toolbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/components/toolbar.component.ts ***!
  \*************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_exportor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/exportor.service */ "./src/app/services/exportor.service.ts");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);





let ToolbarComponent = class ToolbarComponent {
    constructor(exportor) {
        this.exportor = exportor;
        this.context = _services_main_service__WEBPACK_IMPORTED_MODULE_3__["context"];
        this.buttons = [];
    }
    ngOnInit() {
        this.buttons = [
            { icon: "people", name: "Characters", viewMode: "characters" },
            { icon: "remove_red_eye", name: "Overview", viewMode: "overview" },
            { icon: "account_tree", name: "Nodes", viewMode: "nodes" },
            { icon: "accessibility", name: "Bones", viewMode: "bones" },
            { icon: "playlist_play", name: "Animations", viewMode: "animations" },
            { icon: "format_paint", name: "Materials", viewMode: "materials" },
            { icon: "camera", name: "Studio Rigs", viewMode: "studio" },
        ];
        /// @ts-ignore
        jquery__WEBPACK_IMPORTED_MODULE_4__["contextMenu"]({
            selector: 'button.options-menu',
            trigger: "left",
            animation: { duration: 100, show: 'fadeIn', hide: 'fadeOut' },
            items: [
                // { name : "xxxx", icon: "eye", 
                //   callback : () => null } , 
                { name: "Download GLTF (text)", icon: "disk-a",
                    callback: () => this.exportor.saveZip(false, "download") },
                { name: "Download GLB (binary)", icon: "disk-b",
                    callback: () => this.exportor.saveZip(true, "download") },
                { name: "Save to browser's localStorage", icon: "disk-c",
                    callback: () => this.exportor.saveZip(true, "storage") },
                { name: "Clear Local Storage", icon: "clear",
                    callback: () => { localStorage.removeItem("zip"); } },
                { name: "Upload to Firebase (wip)", icon: "fire",
                    callback: () => this.exportor.saveZip(true, "firebase") },
            ]
        });
    }
    selectViewMode(viewMode) {
        _services_main_service__WEBPACK_IMPORTED_MODULE_3__["context"].viewMode = _services_main_service__WEBPACK_IMPORTED_MODULE_3__["context"].viewMode !== viewMode ? viewMode : null;
    }
};
ToolbarComponent.ctorParameters = () => [
    { type: _services_exportor_service__WEBPACK_IMPORTED_MODULE_2__["ExportorService"] }
];
ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-toolbar', template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/toolbar.component.html")).default, })
], ToolbarComponent);



/***/ }),

/***/ "./src/app/components/viewport.component.ts":
/*!**************************************************!*\
  !*** ./src/app/components/viewport.component.ts ***!
  \**************************************************/
/*! exports provided: ViewportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportComponent", function() { return ViewportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_loador_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loador.service */ "./src/app/services/loador.service.ts");
/* harmony import */ var _services_scener_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/scener.service */ "./src/app/services/scener.service.ts");
/* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
/* harmony import */ var three_examples_jsm_controls_TransformControls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three/examples/jsm/controls/TransformControls */ "./node_modules/three/examples/jsm/controls/TransformControls.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var _services_exportor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/exportor.service */ "./src/app/services/exportor.service.ts");










let ViewportComponent = class ViewportComponent {
    constructor(viewportElem, scener, loador, exportor) {
        this.viewportElem = viewportElem;
        this.scener = scener;
        this.loador = loador;
        this.exportor = exportor;
        this.context = _services_main_service__WEBPACK_IMPORTED_MODULE_8__["context"];
    }
    ngOnInit() {
        const canvasElem = document.getElementById("webgl-canvas");
        this.renderer = new three__WEBPACK_IMPORTED_MODULE_2__["WebGLRenderer"]({ canvas: canvasElem, antialias: true });
        this.scener.initialize();
        this.camera = new three__WEBPACK_IMPORTED_MODULE_2__["PerspectiveCamera"](45, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 3;
        this.camera.position.y = 2;
        this.camera.lookAt(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"]());
        this.orbit = new three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_6__["OrbitControls"](this.camera, canvasElem);
        this.orbit.target = new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 1, 0);
        this.orbit.update();
        this.orbit.mouseButtons.LEFT = 0;
        this.orbit.mouseButtons.RIGHT = 2;
        this.orbit.mouseButtons.MIDDLE = -1;
        this.orbit.enableKeys = false;
        this.transformer = new three_examples_jsm_controls_TransformControls__WEBPACK_IMPORTED_MODULE_7__["TransformControls"](this.camera, canvasElem);
        this.transformer.addEventListener('dragging-changed', event => this.orbit.enabled = !event.value);
        this.transformer.setSize(0.5);
        this.transformer.setSpace("local");
        this.scener.scene.add(this.transformer);
        _services_main_service__WEBPACK_IMPORTED_MODULE_8__["context"].events.subscribe(_services_main_service__WEBPACK_IMPORTED_MODULE_8__["Events"].CHANGE_CHARACTER, character => {
            this.scener.rig.position.x =
                this.camera.position.x =
                    this.orbit.target.x = this.scener.platforms[character.uuid].position.x;
            this.orbit.update();
            this.transformer.detach();
        });
        _services_main_service__WEBPACK_IMPORTED_MODULE_8__["context"].events.subscribe(_services_main_service__WEBPACK_IMPORTED_MODULE_8__["Events"].CHANGE_DATA, data => {
            if (this.transformer.object && !this.transformer.object.parent)
                this.transformer.detach();
        });
        _services_main_service__WEBPACK_IMPORTED_MODULE_8__["context"].events.subscribe(_services_main_service__WEBPACK_IMPORTED_MODULE_8__["Events"].CHANGE_SELECTION, selection => {
            if (selection.type === "node" || selection.type === "prop")
                this.transformer.attach(selection.last);
            else
                this.transformer.detach();
        });
        jquery__WEBPACK_IMPORTED_MODULE_3__("button.transform.position").click(e => this.transformer.setMode("translate"));
        jquery__WEBPACK_IMPORTED_MODULE_3__("button.transform.rotation").click(e => this.transformer.setMode("rotate"));
        jquery__WEBPACK_IMPORTED_MODULE_3__("button.transform.scale").click(e => this.transformer.setMode("scale"));
        jquery__WEBPACK_IMPORTED_MODULE_3__("button.transform.space").click(e => this.transformer.setSpace(this.transformer.space === "world" ? "local" : "world"));
        this.onResize();
        this.animate();
    }
    onResize() {
        let [W, H] = [this.viewportElem.nativeElement.clientWidth, this.viewportElem.nativeElement.clientHeight];
        this.renderer.setSize(W, H);
        this.camera.aspect = W / H;
        this.camera.updateProjectionMatrix();
    }
    animate() {
        this.renderer.render(this.scener.scene, this.camera);
        requestAnimationFrame(() => this.animate());
    }
};
ViewportComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
    { type: _services_scener_service__WEBPACK_IMPORTED_MODULE_5__["SceneService"] },
    { type: _services_loador_service__WEBPACK_IMPORTED_MODULE_4__["LoadorService"] },
    { type: _services_exportor_service__WEBPACK_IMPORTED_MODULE_9__["ExportorService"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
], ViewportComponent.prototype, "onResize", null);
ViewportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-viewport',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewport.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/viewport.component.html")).default,
    })
], ViewportComponent);



/***/ }),

/***/ "./src/app/services/exportor.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/exportor.service.ts ***!
  \**********************************************/
/*! exports provided: ExportDestination, ExportorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportDestination", function() { return ExportDestination; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportorService", function() { return ExportorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");
/* harmony import */ var three_examples_jsm_exporters_GLTFExporter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/exporters/GLTFExporter */ "./node_modules/three/examples/jsm/exporters/GLTFExporter.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_4__);





const link = document.createElement('a');
link.style.display = 'none';
const exporter = new three_examples_jsm_exporters_GLTFExporter__WEBPACK_IMPORTED_MODULE_3__["GLTFExporter"]();
const zipper = new jszip__WEBPACK_IMPORTED_MODULE_4__();
var ExportDestination;
(function (ExportDestination) {
    ExportDestination[ExportDestination["Download"] = 0] = "Download";
    ExportDestination[ExportDestination["LocalStorage"] = 1] = "LocalStorage";
    ExportDestination[ExportDestination["Firebase"] = 2] = "Firebase";
})(ExportDestination || (ExportDestination = {}));
let ExportorService = class ExportorService {
    constructor() {
        this._busy = false;
        console.log(zipper);
    }
    get isBusy() { return this._busy; }
    saveZip(binary, destination) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this._busy = true;
            try {
                const zip = new jszip__WEBPACK_IMPORTED_MODULE_4__();
                console.log("hajime");
                const results = yield Promise.all(_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].characters.map(c => this.convertCharacter(c, binary)));
                console.log("results: ", results);
                results.forEach((r) => zip.file(r.filename, r.blob));
                console.log("zip: ", zip);
                const zip_blob = yield new Promise(resolve => zip.generateAsync({ type: "blob", compression: "DEFLATE" }).then(resolve));
                switch (destination) {
                    case "download":
                        this.download(zip_blob, "characters.zip");
                        break;
                    case "storage":
                        this.saveToLocalStorage(zip_blob);
                        break;
                    case "firebase":
                        throw new Error("Not implemented...");
                        break;
                }
                console.log("done ", zip_blob);
            }
            finally {
                this._busy = false;
            }
        });
    }
    saveToLocalStorage(blob) {
        let fileReader = new FileReader();
        fileReader.onload = function (evt) {
            /// @ts-ignore
            var result = evt.target.result;
            try {
                localStorage.setItem("zip", result);
            }
            catch (e) {
                console.log("Storage failed: " + e);
            }
        };
        fileReader.readAsDataURL(blob);
    }
    download(blob, filename) {
        link.href = URL.createObjectURL(blob);
        link.download = filename;
        link.click();
    }
    convertCharacter(character, binary) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            let model = character.model;
            let anims = character.anims.toArray();
            let userData = character.makeUserData();
            return yield this.exportToGLTF(model, anims, userData, binary);
        });
    }
    exportToGLTF(group, animations, userData, binary) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            console.log(group, animations, userData, binary);
            // let exportee = new THREE.Scene()
            // exportee.add( group )
            // exportee.add( group.clone( true ) )
            let exportee = group;
            exportee.userData = userData;
            return new Promise((resolve, reject) => {
                try {
                    exporter.parse(exportee, function (data) {
                        // exporter.parse( group, function ( data ) {
                        const name = group.name || "LeScene";
                        let binary = data instanceof ArrayBuffer;
                        let output = binary ? data : JSON.stringify(data, null, 2);
                        let filename = `${name}.${binary ? "glb" : "gltf"}`;
                        let blob = binary ?
                            new Blob([output], { type: 'text/plain' }) :
                            new Blob([output], { type: 'application/octet-stream' });
                        resolve(new Result(blob, filename));
                    }, { animations: animations, onlyVisible: false, binary: binary });
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    }
};
ExportorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], ExportorService);

class Result {
    constructor(blob, filename) {
        this.blob = blob;
        this.filename = filename;
    }
}


/***/ }),

/***/ "./src/app/services/loador.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/loador.service.ts ***!
  \********************************************/
/*! exports provided: LoadorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadorService", function() { return LoadorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
/* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
/* harmony import */ var three_examples_jsm_loaders_FBXLoader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/loaders/FBXLoader.js */ "./node_modules/three/examples/jsm/loaders/FBXLoader.js");
/* harmony import */ var three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/loaders/OBJLoader.js */ "./node_modules/three/examples/jsm/loaders/OBJLoader.js");
/* harmony import */ var three_examples_jsm_loaders_ColladaLoader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/examples/jsm/loaders/ColladaLoader.js */ "./node_modules/three/examples/jsm/loaders/ColladaLoader.js");
/* harmony import */ var three_examples_jsm_loaders_SVGLoader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three/examples/jsm/loaders/SVGLoader.js */ "./node_modules/three/examples/jsm/loaders/SVGLoader.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main.service */ "./src/app/services/main.service.ts");











let LoadorService = class LoadorService {
    constructor() {
        this._busy = false;
        this.loadingManager = new three__WEBPACK_IMPORTED_MODULE_8__["LoadingManager"]();
        this.loaders = {
            gltf: new three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_3__["GLTFLoader"](this.loadingManager),
            fbx: new three_examples_jsm_loaders_FBXLoader_js__WEBPACK_IMPORTED_MODULE_4__["FBXLoader"](this.loadingManager),
            obj: new three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_5__["OBJLoader"](this.loadingManager),
            dae: new three_examples_jsm_loaders_ColladaLoader_js__WEBPACK_IMPORTED_MODULE_6__["ColladaLoader"](this.loadingManager),
            svg: new three_examples_jsm_loaders_SVGLoader_js__WEBPACK_IMPORTED_MODULE_7__["SVGLoader"](this.loadingManager),
        };
        this.fileResolvers = {
            characters: (data, file_extension, file_name) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let [group, animations] = yield new Promise((resolve, reject) => {
                    switch (file_extension) {
                        case "gltf":
                        case "glb":
                            this.loaders.gltf.load(data, gltf => resolve([gltf.scene, gltf.animations]));
                            break;
                        case "fbx":
                            this.loaders.fbx.load(data, (o) => resolve([o, o.animations || []]));
                            break;
                        default: reject(`Sorry, can't load files with extension "${file_extension}" here`);
                    }
                });
                console.log(group);
                let model = null;
                if (group.children.length === 0) {
                    console.warn("No 3D objects found...");
                }
                else if (group.children.length === 1) {
                    // model = gltf.scene.children.shift()
                    model = group.children[0];
                }
                else {
                    model = new three__WEBPACK_IMPORTED_MODULE_8__["Object3D"]();
                    model.scale.setScalar(.01);
                    // gltf.scene.children.forEach( o => model.add( o ) )
                    while (group.children.length)
                        model.add(group.children.shift());
                }
                return new _main_service__WEBPACK_IMPORTED_MODULE_10__["Character"](model, animations);
            }),
            model: (data, file_extension, file_name) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let model = yield new Promise((resolve, reject) => {
                    switch (file_extension) {
                        case "gltf":
                        case "glb":
                            this.loaders.gltf.load(data, o => resolve(o.scene.children[0]));
                            break;
                        case "dae":
                            this.loaders.dae.load(data, o => resolve(o.scene.children[0]));
                            break;
                        case "obj":
                            this.loaders.obj.load(data, o => resolve(o));
                            break;
                        case "fbx":
                            this.loaders.fbx.load(data, o => resolve(o));
                            break;
                        default: reject(`Sorry, can't load files with extension "${file_extension}" here`);
                    }
                });
                console.log(model);
                model.name = model.name || file_name;
                return model;
            }),
            props: (data, file_extension, file_name) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let props = yield new Promise((resolve, reject) => {
                    switch (file_extension) {
                        case "gltf":
                        case "glb":
                            this.loaders.gltf.load(data, o => resolve(o.scene.children));
                            break;
                        case "obj":
                            this.loaders.obj.load(data, o => resolve([o]));
                            break;
                        case "dae":
                            this.loaders.dae.load(data, o => resolve([o.scene]));
                            break;
                        case "fbx":
                            this.loaders.fbx.load(data, o => resolve([o]));
                            break;
                        case "svg":
                            this.loaders.svg.load(data, o => {
                                let paths = o.paths;
                                let group = new three__WEBPACK_IMPORTED_MODULE_8__["Group"]();
                                for (var i = 0; i < paths.length; i++) {
                                    var path = paths[i];
                                    var material = new three__WEBPACK_IMPORTED_MODULE_8__["MeshBasicMaterial"]({
                                        color: o.xml.fgColor,
                                        side: three__WEBPACK_IMPORTED_MODULE_8__["DoubleSide"],
                                        depthWrite: false
                                    });
                                    var shapes = path.toShapes(true, false);
                                    for (var j = 0; j < shapes.length; j++) {
                                        var shape = shapes[j];
                                        var geometry = new three__WEBPACK_IMPORTED_MODULE_8__["ShapeBufferGeometry"](shape);
                                        var mesh = new three__WEBPACK_IMPORTED_MODULE_8__["Mesh"](geometry, material);
                                        group.add(mesh);
                                    }
                                }
                                resolve([group]);
                            });
                            break;
                        default: reject(`Sorry, can't load files with extension "${file_extension}" here`);
                    }
                });
                props = [].concat(...props);
                let todel = [];
                props.forEach(prop => {
                    prop.traverse(o => {
                        let del = false;
                        del = del || o.type.indexOf("Light") > -1;
                        del = del || o.type.indexOf("Camera") > -1;
                        del = del || o.type === "SkinnedMesh";
                        del = del || o.type === "Bone";
                        if (del)
                            todel.push(o);
                    });
                });
                todel.forEach(o => o.parent.remove(o));
                if (props.length === 1)
                    props[0].name = file_name;
                else
                    props.forEach(prop => prop.name = prop.name || file_name);
                return props;
            }),
            anims: (data, file_extension, file_name) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                let animations = yield new Promise((resolve, reject) => {
                    switch (file_extension) {
                        case "gltf":
                        case "glb":
                            this.loaders.gltf.load(data, gl => resolve(gl.animations));
                            break;
                        // case "fbx": this.loaders.fbx.load( data, group => console.warn( group ), null, e => console.error( e ) );
                        // case "fbx": this.loaders.fbx.load( data, group => resolve( group.animations ) ); break;
                        case "fbx":
                            this.loaders.fbx.load(data, (group) => resolve(group.animations));
                            break;
                        default: reject(`Sorry, can't load files with extension "${file_extension}" here`);
                    }
                });
                animations = animations.filter(a => a.duration > 0.0);
                if (animations.length === 1)
                    animations[0].name = file_name;
                animations.forEach(a => a.name = a.name.match(/[\w-]+/g).join('-').toLowerCase());
                return animations;
            }),
        };
        this.loadingManager.onStart = () => this._busy = true;
        this.loadingManager.onLoad = () => this._busy = false;
        this.loadingManager.onError = () => this._busy = false;
        // loadingManager.onStart = () => $( ".loading" ).show()
        // loadingManager.onLoad  = () => $( ".loading" ).hide()
        // loadingManager.onError = () => $( ".loading" ).hide()
        /// @ts-ignore
        window.loador = this;
    }
    get isBusy() { return this._busy; }
    loadFromUrl(url) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            return yield new Promise((resolve) => this.loaders.gltf.load(url, resolve));
        });
    }
    loadZipFromLocalStorage(funcLoaded) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            function dataURLtoBlob(dataurl) {
                var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
                while (n--) {
                    u8arr[n] = bstr.charCodeAt(n);
                }
                return new Blob([u8arr], { type: mime });
            }
            let data = localStorage["zip"];
            let o = yield jszip__WEBPACK_IMPORTED_MODULE_2__["loadAsync"](dataURLtoBlob(data));
            console.log(o.files);
            const funcResolver = this.fileResolvers.characters;
            let promises = [];
            for (let zip_filename in o.files) {
                promises.push(new Promise((resolve) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                    let file = o.files[zip_filename];
                    let [zfext, zfname] = this.getFileNameAndExtension(file);
                    let blob = yield file.async("blob");
                    let url = URL.createObjectURL(blob);
                    funcResolver(url, zfext, zfname).then(resolve).catch(this.onError);
                })).catch(this.onError));
            }
            Promise.all(promises).then(a => funcLoaded(...[].concat(...a))).catch(this.onError);
            // let fileReader = new FileReader()
            // fileReader.onload = function (evt) {
            //     /// @ts-ignore
            //     var result = evt.target.result
            //     try { localStorage.setItem("zip", result) }
            //     catch (e) { console.log("Storage failed: " + e) }
            // }
            // fileReader.
        });
    }
    makeDropField(elementId, funcResolver, funcLoaded) {
        const element = document.getElementById(elementId);
        element.ondragover = e => {
            if (e.ctrlKey || e.altKey || jquery__WEBPACK_IMPORTED_MODULE_9__(element).is(":focus-within"))
                return true;
            e.preventDefault();
            element.classList.add("dragover");
            return false;
        };
        element.ondragleave = e => {
            if (e.ctrlKey || e.altKey)
                return true;
            e.preventDefault();
            element.classList.remove("dragover");
            return false;
        };
        element.ondrop = (e) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            if (e.ctrlKey || e.altKey || !e.dataTransfer.files.length)
                return true;
            e.preventDefault();
            element.classList.remove("dragover");
            let promises = [];
            /// @ts-ignore
            for (let file of e.dataTransfer.files) {
                let [fileext, filename] = this.getFileNameAndExtension(file);
                // console.log( file )
                if (fileext === "zip") {
                    let ab = yield new Promise(resolve => {
                        let zip_reader = new FileReader();
                        zip_reader.onload = (event) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () { return resolve(event.target.result); });
                        zip_reader.readAsArrayBuffer(file);
                    });
                    let o = yield jszip__WEBPACK_IMPORTED_MODULE_2__["loadAsync"](ab);
                    for (let zip_filename in o.files) {
                        promises.push(new Promise((resolve) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                            let file = o.files[zip_filename];
                            let [zfext, zfname] = this.getFileNameAndExtension(file);
                            let blob = yield file.async("blob");
                            let url = URL.createObjectURL(blob);
                            funcResolver(url, zfext, zfname).then(resolve).catch(this.onError);
                        })).catch(this.onError));
                    }
                }
                else {
                    promises.push(new Promise((resolve) => tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
                        let reader = new FileReader();
                        reader.onload = (event) => {
                            funcResolver(event.target.result, fileext, filename).then(resolve).catch(this.onError);
                        };
                        reader.readAsDataURL(file);
                    })).catch(this.onError));
                }
            }
            Promise.all(promises).then(a => funcLoaded(...[].concat(...a))).catch(this.onError);
            return false;
        });
    }
    getFileNameAndExtension(file) {
        return [
            file.name.match(/\.([0-9a-z]+)(?:[\?#]|$)/i)[1].toLowerCase(),
            file.name.split('.')[0]
        ];
    }
    onError(e) {
        console.error(e);
        // try { this._busy = false }
        // catch( e ) { console.error( e ) }
    }
};
LoadorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], LoadorService);



/***/ }),

/***/ "./src/app/services/main.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/main.service.ts ***!
  \******************************************/
/*! exports provided: Events, MainService, context, Character, UniqueItemsList, AnimationsList, PropsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function() { return Events; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "context", function() { return context; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function() { return Character; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueItemsList", function() { return UniqueItemsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationsList", function() { return AnimationsList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropsList", function() { return PropsList; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");



var Events;
(function (Events) {
    Events["CHANGE_DATA"] = "change.data";
    Events["CHANGE_SELECTION"] = "change.selection";
    Events["CHANGE_CHARACTER"] = "change.character";
    Events["ANIMATION_PLAY"] = "animation.play";
    Events["ADD_CHARACTER"] = "add.character";
})(Events || (Events = {}));
let MainService = class MainService {
    initialize() {
        context.time.clock.start();
        this.onFrame();
        context.events.subscribe(Events.CHANGE_DATA, (...a) => console.info("CHANGE_DATA", ...a));
        context.events.subscribe(Events.CHANGE_SELECTION, (...a) => console.info("CHANGE_SELECTION", ...a));
        context.events.subscribe(Events.CHANGE_CHARACTER, (...a) => console.info("CHANGE_CHARACTER", ...a));
        context.events.subscribe(Events.ANIMATION_PLAY, (...a) => console.info("ANIMATION_PLAY", ...a));
    }
    onFrame() {
        context.time.delta = context.time.clock.getDelta();
        if (context.data.dirty) {
            context.events.dispatch(Events.CHANGE_DATA, context.data);
            context.data.dirty = false;
        }
        if (context.selection.dirty) {
            context.events.dispatch(Events.CHANGE_SELECTION, context.selection);
            context.selection.dirty = false;
        }
        for (let c of context.characters)
            c.aniMixer.update(context.time.delta);
        requestAnimationFrame(() => this.onFrame());
    }
    /// /// /// /// 
    makeAndAddCharacter(model, animations) {
        return this.addCharacter(new Character(model, animations));
    }
    addCharacter(character) {
        character.model.position.setScalar(0);
        character.model.traverse(o => o.visible = !o.userData.hidden);
        context.characters.push(character);
        context.events.dispatch(Events.ADD_CHARACTER, character);
        context.data.dirty = true;
        return character;
    }
    focusOnCharacter(character) {
        context.viewMode = context.viewMode || "overview";
        context.character = character;
        context.events.dispatch(Events.CHANGE_CHARACTER, character);
        context.data.dirty = true;
    }
};
MainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], MainService);

const context = {
    time: {
        clock: new three__WEBPACK_IMPORTED_MODULE_2__["Clock"](),
        delta: 0.0,
    },
    // viewMode : null, //  "characters" , // 
    get viewMode() { return localStorage["state.viewMode"]; },
    set viewMode(value) { localStorage["state.viewMode"] = value; },
    character: null,
    characters: new Array(),
    data: new class CurrentData {
        constructor() {
            this.dirty = false;
        }
    },
    selection: new class SelectionManager {
        constructor() {
            this.dirty = false;
        }
    },
    events: new class EventManager {
        constructor() {
            this.functions = {};
        }
        subscribe(key, callback) {
            if (!this.functions[key])
                this.functions[key] = [];
            this.functions[key].push(callback);
        }
        dispatch(key, data) {
            if (this.functions[key])
                for (let callback of this.functions[key])
                    callback(data);
        }
    },
};
class Character {
    constructor(model, animations) {
        this.model = model;
        this.currentAction = null;
        this.props = this.findAllProps(model);
        this.anims = new AnimationsList(animations);
        this.aniMixer = new three__WEBPACK_IMPORTED_MODULE_2__["AnimationMixer"](model);
        this.uuid = model.uuid;
        const animationsUserData = model.userData.animationsUserData;
        if (animationsUserData)
            animations.forEach((clip, i) => this.anims.setUserData(clip, animationsUserData[i]));
    }
    get name() { return this.model.name || this.model.uuid; }
    makeUserData() {
        return {
            animationsUserData: this.anims.toArray().map(clip => this.anims.getUserData(clip))
        };
    }
    findAllProps(model) {
        let results = new PropsList();
        function traverseChildren(o) {
            let push = false;
            let hasChildren = o.children && !!o.children.filter(c => c.type !== "Bone").length;
            push = push || ((o.type === "Object3D" || o.type === "Group") && hasChildren);
            push = push || o.type === "Mesh";
            push = push && !o.userData.isHolster;
            push = push && o !== model;
            if (push)
                results.add(o);
            else if (o.children)
                o.children.forEach((child) => traverseChildren(child));
        }
        traverseChildren(model);
        return results;
    }
    /// /// ///
    findAllChildren(func) {
        let results = [];
        this.model.traverse(child => func(child) ? results.push(child) : null);
        return results;
    }
    setHidden(object, hidden) {
        hidden = hidden !== undefined ? hidden : !object.visible;
        object.userData.hidden = hidden;
        object.visible = !hidden;
        context.data.dirty = true;
    }
    playDefaultAnimation() {
        let idle_anim = this.anims.find(a => a.name === "idle") ||
            this.anims.find(a => a.name.toLowerCase().indexOf("idle") > -1);
        if (idle_anim)
            this.play(idle_anim);
    }
    play(clip) {
        this.aniMixer.stopAllAction();
        this.aniMixer.uncacheClip(clip);
        this.currentAction = this.aniMixer.clipAction(clip);
        this.currentAction.setLoop(three__WEBPACK_IMPORTED_MODULE_2__["LoopRepeat"], undefined);
        this.currentAction.enabled = true;
        this.currentAction.weight = 1.0;
        this.currentAction.play();
        if (context.character === this)
            context.events.dispatch(Events.ANIMATION_PLAY, this.currentAction);
    }
}
class UniqueItemsList extends Set {
    get length() { return this.size; }
    getByUuid(uuid) {
        for (let item of this)
            if (item.uuid === uuid)
                return item;
        return null;
    }
    map(func) {
        return Array.from(this).map((v, i, a) => func(v, i, a));
    }
    find(func) {
        for (let item of this)
            if (func(item))
                return item;
        return null;
    }
    addAll(...items) {
        items.forEach(item => this.add(item));
    }
    add(item) {
        context.data.dirty = true;
        return super.add(item);
    }
    deleteAll(...props) {
        props.forEach(item => this.delete(item));
    }
    delete(item) {
        context.data.dirty = true;
        return super.delete(item);
    }
    toArray() { return Array.from(this); }
}
class AnimationUserData {
    // get events():{time:number}[] { return this.eventTimes.map( time => { return { time : time } } ) }
    // events:{time:number}[]
    constructor(clip, data) {
        this.fadeTimes = [0.0, clip.duration];
        this.eventTimes = [];
        if (data) {
            this.fadeTimes[0] = data.fadeTimes[0];
            this.fadeTimes[1] = data.fadeTimes[1];
            this.eventTimes.push(...data.eventTimes);
        }
        // this.events = [ ]
    }
    addEvent(time) {
        this.eventTimes.push(time);
        this.eventTimes.sort();
        // this.events.push( { time : time } )
    }
}
class AnimationsList extends UniqueItemsList {
    constructor() {
        super(...arguments);
        this.userDatas = {};
    }
    getUserData(clip) {
        if (this.userDatas[clip.uuid] === undefined) {
            this.userDatas[clip.uuid] = new AnimationUserData(clip);
        }
        return this.userDatas[clip.uuid];
    }
    setUserData(clip, data) {
        this.userDatas[clip.uuid] = new AnimationUserData(clip, data);
    }
    add(item) {
        let i = 0, originalName = item.name;
        while (this.find(a => a.name === item.name))
            item.name = `${originalName}-${++i}`;
        return super.add(item);
    }
    duplicate(clip) {
        /// @ts-ignore
        let clone = clip.clone();
        this.add(clone);
        return clone;
    }
}
class PropsList extends UniqueItemsList {
    duplicate(prop) {
        let clone = prop.clone();
        prop.parent.add(clone);
        this.add(clone);
        return clone;
    }
    delete(prop) {
        prop.parent.remove(prop);
        return super.delete(prop);
    }
}


/***/ }),

/***/ "./src/app/services/scener.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/scener.service.ts ***!
  \********************************************/
/*! exports provided: studioRigConfigurations, SceneService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studioRigConfigurations", function() { return studioRigConfigurations; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneService", function() { return SceneService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
/* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");




const DEFAULT_RIG = 2; /// 0 1 2
const textureLoader = new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]();
const studioRigConfigurations = [
    {
        name: "default",
        colors: {
            background: 0x224477,
            grid_a: 0x99CCFF,
            grid_b: 0x4466CC,
        },
        lights: {
            ambient: [
                { color: 0xffffff, intensity: .60 }
            ],
            directional: [
                { color: 0xffffff, intensity: .50, position: [-1, 0, 0] },
                { color: 0xffffff, intensity: .75, position: [1, 1, 1] },
                { color: 0xffffff, intensity: .50, position: [0, 0, -1] },
            ],
        },
    },
    {
        name: "in-gamish",
        colors: {
            background: 0x3a7f41,
            grid_a: 0xFFFF41,
            grid_b: 0x5a9f61,
        },
        lights: {
            ambient: [
                { color: 0xffffff, intensity: 0.70 }
            ],
            directional: [
                { color: 0xffffff, intensity: .40, position: [-1, 0, -1] },
                { color: 0xffffff, intensity: .70, position: [1, 1, 1] },
            ],
        },
    },
    {
        name: "dark",
        colors: {
            background: 0x1A1A1A,
            grid_a: 0x404040,
            grid_b: 0x303030,
        },
        lights: {
            ambient: [
                { color: 0xffffff, intensity: .50 }
            ],
            directional: [
                { color: 0xffffff, intensity: .50, position: [-1, 0, 0] },
                { color: 0xffffff, intensity: .75, position: [1, 1, 1] },
                { color: 0xffffff, intensity: .50, position: [0, 0, -1] },
            ],
        },
    },
];
let SceneService = class SceneService {
    constructor() {
        this.scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
        this.rig = new StudioRig();
        this.rigConfigurations = studioRigConfigurations;
        this.platforms = {};
        this.isLoading = true; //// directly use loader.busy
    }
    initialize() {
        this.scene.add(this.rig);
        this.rig.initialize(studioRigConfigurations[DEFAULT_RIG], this.scene);
        _services_main_service__WEBPACK_IMPORTED_MODULE_3__["context"].events.subscribe(_services_main_service__WEBPACK_IMPORTED_MODULE_3__["Events"].ADD_CHARACTER, (character) => {
            let platform = this.platforms[character.uuid] = new three__WEBPACK_IMPORTED_MODULE_2__["Group"]();
            platform.add(character.model);
            platform.position.x = _services_main_service__WEBPACK_IMPORTED_MODULE_3__["context"].characters.length - 1;
            this.scene.add(platform);
        });
        this.isLoading = false;
    }
    setupRig(config) {
        this.rig.initialize(config, this.scene);
    }
};
SceneService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
], SceneService);

class StudioRig extends three__WEBPACK_IMPORTED_MODULE_2__["Group"] {
    initialize(configuration, scene) {
        this.configuration = configuration;
        while (this.children.length > 0)
            this.remove(this.children[0]);
        scene.background = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](configuration.colors.background);
        configuration.lights.ambient.forEach((c, i) => {
            let light = new three__WEBPACK_IMPORTED_MODULE_2__["AmbientLight"](c.color, c.intensity);
            light.name = "Light (ambient) " + i;
            this.add(light);
        });
        configuration.lights.directional.forEach((c, i) => {
            let light = new three__WEBPACK_IMPORTED_MODULE_2__["DirectionalLight"](c.color, c.intensity);
            light.position.set(c.position[0], c.position[1], c.position[2]).setLength(20);
            light.lookAt(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0));
            light.name = "Light (directional) " + i;
            this.add(light);
        });
        this.grid = new three__WEBPACK_IMPORTED_MODULE_2__["GridHelper"](20, 20, configuration.colors.grid_a, configuration.colors.grid_b);
        this.add(this.grid);
        this.envMap = textureLoader.load("assets/images/metal-5.png");
        this.envMap.mapping = three__WEBPACK_IMPORTED_MODULE_2__["SphericalReflectionMapping"];
        this.envMap.encoding = three__WEBPACK_IMPORTED_MODULE_2__["sRGBEncoding"];
        // this.envMap = textureLoader.load( "assets/shitroom.jpg" )
        // this.envMap.mapping = THREE.EquirectangularReflectionMapping;
        // this.envMap.magFilter = THREE.LinearFilter;
        // this.envMap.minFilter = THREE.LinearMipmapLinearFilter;
        // this.envMap.encoding = THREE.sRGBEncoding
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /workspace/animateur/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map