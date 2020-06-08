var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __generator = (this && this.__generator) || function (thisArg, body) {
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
(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": 
        /*!**************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
          \**************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<main id=\"pageMain\">\n  <div class=\"panes\">\n    <app-toolbar id=\"panel-toolbar\" class=\"toolbar-vertical\"></app-toolbar>\n    <app-explorer class=\"pane\" *ngIf=\"!! context.viewMode && context.characters.length\">\n      \n    </app-explorer>\n    <div class=\"middle-pane\">\n      <app-viewport id=\"viewport\"></app-viewport>\n      <app-animation-bar id=\"animation-bar\" class=\"bar-horizontal\" *ngIf=\"context.characters.length\"\n                         [hidden]=\"!context.character||!context.character.currentAction\"></app-animation-bar>\n    </div>\n  </div>\n  <!-- <app-statusbar></app-statusbar> -->\n</main>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/animation-bar.component.html": 
        /*!***********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/animation-bar.component.html ***!
          \***********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"buttons-bar\">\n  <button class=\"button-play\" (click)=\"togglePause()\">▶</button>\n  <!-- <button (click)=\"addEvent()\">Add Event Yo!</button> -->\n  <!-- <div class=\"filler\"><span class=\"timer\"></span></div> -->\n</div>\n<div class=\"sliders\">\n  <br/>\n  <nouislider id=\"slider-events\" [config]=\"sliderConfig.events\" #SliderEvents\n              [min]=\"0\" [max]=\"action.duration\" [(ngModel)]=\"action.events\"\n              (slide)=\"handlers.change_events($event)\"\n              [hidden]=\"!action.hasEvents\"\n              ></nouislider>\n  <nouislider id=\"slider-weight\" [config]=\"sliderConfig.weight\"\n              [min]=\"0\" [max]=\"action.duration\" [(ngModel)]=\"action.weight\"\n              ></nouislider>\n  <nouislider id=\"slider-play\"   [config]=\"sliderConfig.play\"   \n              [min]=\"0\" [max]=\"action.duration\" [(ngModel)]=\"action.time\"\n              (slide)=\"handlers.change_play($event)\"\n              ></nouislider>\n  <br/>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/explorer.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/explorer.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- CHARACTERS -->\n\n<div id=\"panel-navigation\" *ngIf=\"context.viewMode === 'characters'\">\n  <div class=\"subpanel\">\n    <header><h3>Current Characters</h3></header>\n    <ul class=\"contents list\">\n      <li *ngFor=\"let c of context.characters\" attr.uuid=\"{{c.uuid}}\" \n      class=\"list-item\" [class.selected]=\"context.character === c\"\n      (click)=\"main.focusOnCharacter( c )\">{{c.name}}</li>\n    </ul>\n  </div>\n</div>\n\n<!-- OVERVIEW -->\n\n<div id=\"panel-navigation\" *ngIf=\"context.viewMode === 'overview'\">\n  <div id=\"subpanel-properties\" class=\"subpanel\">\n    <header><h3>Selection</h3></header>\n    <div class=\"contents\">\n      <br />\n      <input id=\"field-name\" type=\"text\" [(ngModel)]=\"object.name\"/>\n      <div class=\"i-vector-row position\">\n        <input id=\"field-position-x\" type=\"text\" [(ngModel)]=\"object.position.x\" />\n        <input id=\"field-position-y\" type=\"text\" [(ngModel)]=\"object.position.y\" />\n        <input id=\"field-position-z\" type=\"text\" [(ngModel)]=\"object.position.z\" />\n      </div>\n      <div class=\"i-vector-row rotation\">\n        <input id=\"field-rotation-x\" type=\"text\" [(ngModel)]=\"object.rotation.x\" />\n        <input id=\"field-rotation-y\" type=\"text\" [(ngModel)]=\"object.rotation.y\" />\n        <input id=\"field-rotation-z\" type=\"text\" [(ngModel)]=\"object.rotation.z\" />\n      </div>\n      <div class=\"i-vector-row scale linked\">\n        <input id=\"field-scale-x\" type=\"text\" [(ngModel)]=\"object.scale.x\" />\n        <input id=\"field-scale-y\" type=\"text\" [(ngModel)]=\"object.scale.y\" />\n        <input id=\"field-scale-z\" type=\"text\" [(ngModel)]=\"object.scale.z\" />\n      </div>\n      <br/>\n    </div>\n  </div>\n  <div id=\"subpanel-nodes\" class=\"subpanel\">\n    <header><h3>Model</h3></header>\n    <ul class=\"contents list\">\n      <li *ngFor=\"let o of context.character.model.children\"\n      class=\"list-item\" attr.uuid=\"{{o.uuid}}\" [class.selected]=\"context.selection.last === o\"\n      (click)=\"select(o,'node')\">{{o.name||o.uuid}}</li>\n    </ul>\n  </div>\n  <div id=\"subpanel-props\" class=\"subpanel\" *ngIf=\"context.character\">\n    <header><h3>Props</h3></header>\n    <ul class=\"contents list\">\n      <li *ngFor=\"let o of context.character.props\" \n      class=\"list-item\" attr.uuid=\"{{o.uuid}}\" [class.selected]=\"context.selection.last === o\"\n      [hidden]=\"o.userData.hidden\"\n      (click)=\"select(o,'prop')\"><a>{{o.name||o.uuid}}</a></li>\n    </ul>\n  </div>\n  <div id=\"subpanel-anims\" class=\"subpanel\" *ngIf=\"context.character\">\n    <header><h3>Animations</h3></header>\n    <ul class=\"contents list\">\n      <li *ngFor=\"let o of context.character.anims\" \n      class=\"list-item\" attr.uuid=\"{{o.uuid}}\" [class.selected]=\"context.selection.last === o\"\n      (click)=\"select(o,'anim')\">{{o.name||o.uuid}}</li>\n    </ul>\n  </div>\n</div>\n\n<!-- NODES -->\n\n<div id=\"panel-navigation\" *ngIf=\"context.viewMode === 'nodes'\">\n  <header><h3>Model Nodes</h3></header>\n  <tree [tree]=\"tree_sceneNodes\" \n        (nodeSelected)=\"tree_sceneNodes.onNodeSelected($event)\"\n        #tree__sceneNodes>\n  </tree>\n</div>\n\n<!-- BONES -->\n\n<div id=\"panel-navigation\" *ngIf=\"context.viewMode === 'bones'\">\n  <div class=\"subpanel\">\n    <header><h3>My Bones</h3></header>\n    <ul class=\"contents list\">\n      <li *ngFor=\"let bone of allBones\" attr.uuid=\"{{bone.uuid}}\" \n      class=\"list-item\" [class.selected]=\"context.selection.last === bone\"\n      (click)=\"select(bone,'node')\">{{bone.name}}</li>\n    </ul>\n  </div>\n</div>\n\n<!-- ANIMATIONS -->\n\n<div id=\"panel-navigation\" *ngIf=\"context.viewMode === 'animations'\">\n</div>\n\n<!-- MATERIALING -->\n\n<div id=\"panel-navigation\" *ngIf=\"context.viewMode === 'materials'\">\n  <div class=\"subpanel\">\n    <header><h3>All Materials</h3></header>\n    <ul class=\"contents list\">\n      <li *ngFor=\"let m of allMaterials\" attr.uuid=\"{{m.uuid}}\" \n      class=\"list-item\" [class.selected]=\"context.selection.last === m\"\n      (click)=\"select(m,'mat')\">{{m.name||m.uuid}}</li>\n    </ul>\n  </div>\n  <div class=\"filler\"></div>\n  <div class=\"subpanel\" *ngIf=\"!! material\">\n    <header><h3> {{ material.name || material.uuid }} </h3></header>\n    <br/>\n    <nouislider id=\"slider-roughness\" [config]=\"materialSliders.zeroToOne\"\n                [min]=\"0\" [max]=\"1\" [(ngModel)]=\"material.roughness\"\n    ></nouislider>\n    <br/>\n    <nouislider id=\"slider-metalness\" [config]=\"materialSliders.zeroToOne\"\n                [min]=\"0\" [max]=\"1\" [(ngModel)]=\"material.metalness\"\n    ></nouislider>\n    <br/>\n    <nouislider id=\"slider-envMapIntensity\" [config]=\"materialSliders.zeroToOne\"\n                [min]=\"0\" [max]=\"1\" [(ngModel)]=\"material.envMapIntensity\"\n    ></nouislider>\n    <br/>\n  </div>\n</div>\n\n<!-- STUDIO -->\n\n<div id=\"panel-navigation\" *ngIf=\"context.viewMode === 'studio'\">\n  <div class=\"subpanel\">\n    <header><h3>Select Studio Rig</h3></header>\n    <ul class=\"contents list\">\n      <li *ngFor=\"let config of scener.rigConfigurations\"\n      class=\"list-item\" [class.selected]=\"scener.rig.configuration === config\"\n      (click)=\"scener.setupRig( config )\">{{config.name}}</li>\n    </ul>\n  </div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/statusbar.component.html": 
        /*!*******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/statusbar.component.html ***!
          \*******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- <b>Characters: </b> -->\n<a *ngFor=\"let c of context.characters\" (click)=\"main.focusOnCharacter( c )\"> •   {{c.name}}   • </a>\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/toolbar.component.html": 
        /*!*****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/toolbar.component.html ***!
          \*****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"top\">\n  <button *ngFor=\"let b of buttons\" title=\"{{b.name}}\" [class.selected]=\"context.viewMode===b.viewMode\"\n    (click)=\"selectViewMode(b.viewMode)\">\n    <i class=\"material-icons\">{{b.icon}}</i>\n  </button>\n</div>\n<div class=\"filler\"></div>\n<div class=\"bottom\">\n  <!-- <button onclick=\"location.reload()\"><i class=\"material-icons\">autorenew</i></button> -->\n  <button class=\"options-menu\"><i class=\"material-icons\">menu</i></button>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/viewport.component.html": 
        /*!******************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/viewport.component.html ***!
          \******************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class=\"contents\">\n  <canvas id=\"webgl-canvas\" [hidden]=\"!context.character\"></canvas>\n  <div [hidden]=\"context.character\">Drag files here</div>\n  <div class=\"overlay overlay-top-right\">\n    <button class=\"transform position\">✣&#xFE0E;</button>\n    <button class=\"transform rotation\">↺&#xFE0E;</button>\n    <button class=\"transform scale\">■&#xFE0E;</button>\n    <button class=\"transform space\">🌐&#xFE0E;</button>\n  </div>\n  <!-- <div class=\"overlay overlay-top-left\"> -->\n  <div class=\"overlay overlay-bottom-right\">\n    <!-- <button class=\"select-character\">💀&#xFE0E;</button> -->\n  </div>\n  <div class=\"loading\" *ngIf=\"loador.isBusy\"><h1>Loading</h1></div>\n  <div class=\"exporting\" *ngIf=\"exportor.isBusy\"><h1>Exporting...</h1></div>\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app.component.ts": 
        /*!**********************************!*\
          !*** ./src/app/app.component.ts ***!
          \**********************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_loador_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/loador.service */ "./src/app/services/loador.service.ts");
            /* harmony import */ var _services_scener_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/scener.service */ "./src/app/services/scener.service.ts");
            /* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./services/main.service */ "./src/app/services/main.service.ts");
            /* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! stats-js */ "./node_modules/stats-js/build/stats.min.js");
            /* harmony import */ var stats_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(stats_js__WEBPACK_IMPORTED_MODULE_5__);
            var AppComponent = /** @class */ (function () {
                function AppComponent(main, loador, scener) {
                    this.main = main;
                    this.loador = loador;
                    this.scener = scener;
                    this.context = _services_main_service__WEBPACK_IMPORTED_MODULE_4__["context"];
                }
                AppComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.main.initialize();
                    this.scener.initialize();
                    this.loador.makeDropField('viewport', this.loador.fileResolvers.characters, function () {
                        var rest = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            rest[_i] = arguments[_i];
                        }
                        return _this.onCharactersLoaded.apply(_this, rest);
                    });
                    ///
                    // new DropField( document.getElementById('subpanel-nodes') ).resolver( fileResolvers.model ).loaded( onCharacterLoaded )
                    // new DropField( document.getElementById('subpanel-props') ).resolver( fileResolvers.props ).loaded( onPropLoaded )
                    // new DropField( document.getElementById('subpanel-anims') ).resolver( fileResolvers.anims ).loaded( onAnimationsLoaded )
                    //this.loador.loadZipFromLocalStorage( ( ...rest:any ) => this.onCharactersLoaded( ...rest ) )
                    this.loador.loadFromUrl("/assets/examples/glb/hero-shield.glb").then(function (c) { return _this.onCharactersLoaded(new _services_main_service__WEBPACK_IMPORTED_MODULE_4__["Character"](c.scene, c.animations)); });
                    var SHOW_STATS = false;
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
                };
                AppComponent.prototype.onCharactersLoaded = function () {
                    var _this = this;
                    var characters = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        characters[_i] = arguments[_i];
                    }
                    characters.forEach(function (character) {
                        console.log(character);
                        _this.main.addCharacter(character);
                        character.playDefaultAnimation();
                        // this.extractColors( character.model )
                    });
                    this.main.focusOnCharacter(characters[0]);
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"] },
                { type: _services_loador_service__WEBPACK_IMPORTED_MODULE_2__["LoadorService"] },
                { type: _services_scener_service__WEBPACK_IMPORTED_MODULE_3__["SceneService"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-root', template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default })
            ], AppComponent);
            Array.prototype.toSet = function () { return new Set(this); };
            Array.prototype.mapToObject = function (func) {
                var result = {};
                this.forEach(function (o, i) {
                    var r = func(o, i);
                    var _a = Array.isArray(r) ? [r[0], r[1]] : [r, o], key = _a[0], value = _a[1];
                    result[key] = value;
                });
                return result;
            };
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/ng2-nouislider.js");
            /* harmony import */ var ng2_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng2-tree */ "./node_modules/ng2-tree/index.js");
            /* harmony import */ var ng2_tree__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(ng2_tree__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var _common_tabs_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/tabs.component */ "./src/app/common/tabs.component.ts");
            /* harmony import */ var _common_tab_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/tab.component */ "./src/app/common/tab.component.ts");
            /* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
            /* harmony import */ var _components_viewport_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/viewport.component */ "./src/app/components/viewport.component.ts");
            /* harmony import */ var _components_animation_bar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/animation-bar.component */ "./src/app/components/animation-bar.component.ts");
            /* harmony import */ var _components_explorer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/explorer.component */ "./src/app/components/explorer.component.ts");
            /* harmony import */ var _components_toolbar_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/toolbar.component */ "./src/app/components/toolbar.component.ts");
            /* harmony import */ var _components_statusbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/statusbar.component */ "./src/app/components/statusbar.component.ts");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/common/tab.component.ts": 
        /*!*****************************************!*\
          !*** ./src/app/common/tab.component.ts ***!
          \*****************************************/
        /*! exports provided: TabComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabComponent", function () { return TabComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /**
             * A single tab page. It renders the passed template
             * via the @Input properties by using the ngTemplateOutlet
             * and ngTemplateOutletContext directives.
             */
            var TabComponent = /** @class */ (function () {
                function TabComponent() {
                    this.active = false;
                }
                return TabComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('tabTitle')
            ], TabComponent.prototype, "title", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], TabComponent.prototype, "active", void 0);
            TabComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'my-tab',
                    template: "\n    <div [hidden]=\"!active\" class=\"pane\">\n      <ng-content></ng-content>\n    </div>\n  ",
                    styles: ["\n    .pane{\n      // padding: 1em;\n    }\n  "]
                })
            ], TabComponent);
            /***/ 
        }),
        /***/ "./src/app/common/tabs.component.ts": 
        /*!******************************************!*\
          !*** ./src/app/common/tabs.component.ts ***!
          \******************************************/
        /*! exports provided: TabsComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabsComponent", function () { return TabsComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _tab_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab.component */ "./src/app/common/tab.component.ts");
            /**
             * The main component that renders single TabComponent
             * instances.
             */
            // import { DynamicTabsDirective } from './dynamic-tabs.directive';
            var TabsComponent = /** @class */ (function () {
                function TabsComponent() {
                }
                // contentChildren are set
                TabsComponent.prototype.ngAfterContentInit = function () {
                    // get all active tabs
                    var activeTabs = this.tabs.filter(function (tab) { return tab.active; });
                    // if there is no active tab set, activate the first
                    if (activeTabs.length === 0) {
                        this.selectTab(this.tabs.first);
                    }
                };
                TabsComponent.prototype.selectTab = function (target_tab) {
                    this.tabs.toArray().forEach(function (tab) { return tab.active = tab === target_tab; });
                };
                return TabsComponent;
            }());
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(_tab_component__WEBPACK_IMPORTED_MODULE_2__["TabComponent"])
            ], TabsComponent.prototype, "tabs", void 0);
            TabsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'my-tabs',
                    template: "\n    <ul class=\"nav nav-tabs\">\n      <li *ngFor=\"let tab of tabs\" (click)=\"selectTab(tab)\" [class.active]=\"tab.active\">\n        <a href=\"#\">{{tab.title}}</a>\n      </li>\n    </ul>\n    <ng-content></ng-content>\n  ",
                    styles: ["\n    .tab-close {\n      color: gray;\n      text-align: right;\n      cursor: pointer;\n    }\n    "]
                })
            ], TabsComponent);
            /***/ 
        }),
        /***/ "./src/app/components/animation-bar.component.css": 
        /*!********************************************************!*\
          !*** ./src/app/components/animation-bar.component.css ***!
          \********************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYW5pbWF0aW9uLWJhci5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/animation-bar.component.ts": 
        /*!*******************************************************!*\
          !*** ./src/app/components/animation-bar.component.ts ***!
          \*******************************************************/
        /*! exports provided: AnimationBarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationBarComponent", function () { return AnimationBarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");
            /* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/ng2-nouislider.js");
            /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
            /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
            var FRAME_TIME = 1.000 / 30;
            var AnimationBarComponent = /** @class */ (function () {
                function AnimationBarComponent() {
                    this.sliderConfig = {
                        events: {
                            step: FRAME_TIME,
                            connect: false,
                            animate: false,
                            behaviour: 'unconstrained-tap-snap',
                            // tooltips: true,
                            tooltips: [
                                { to: function () { return "1"; } },
                                { to: function () { return "2"; } },
                                { to: function () { return "3"; } },
                                { to: function () { return "4"; } },
                                { to: function () { return "5"; } },
                                { to: function () { return "6"; } },
                                { to: function () { return "7"; } },
                                { to: function () { return "8"; } },
                                { to: function () { return "9"; } },
                                { to: function () { return "10"; } },
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
                            var clip = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction.getClip();
                            return _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.anims.getUserData(clip).fadeTimes;
                        },
                        set weight(v) {
                            var clip = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction.getClip();
                            var fadeTimes = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.anims.getUserData(clip).fadeTimes;
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
                        change_play: function (value) {
                            // console.log( value )
                            _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction.paused = true;
                            _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction.time = value;
                        },
                        change_events: function (values) {
                            var clip = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction.getClip();
                            var eventTimes = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.anims.getUserData(clip).eventTimes;
                            eventTimes.forEach(function (t, i) { return eventTimes[i] = values[i]; });
                        }
                    };
                }
                AnimationBarComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    ///@ts-ignore
                    window.ani = this;
                    _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].events.subscribe(_services_main_service__WEBPACK_IMPORTED_MODULE_2__["Events"].CHANGE_SELECTION, function (selection) {
                        if (selection.type === "anim") {
                            _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.play(selection.last);
                        }
                    });
                    /// @ts-ignore
                    jquery__WEBPACK_IMPORTED_MODULE_4__["contextMenu"]({
                        selector: 'div.sliders',
                        animation: { duration: 100, show: 'fadeIn', hide: 'fadeOut' },
                        items: [
                            { name: "Add Event", icon: "star", callback: function () { return _this.addEvent(); } },
                            { name: "Create animation from first frame", icon: "flash", callback: function () {
                                    /// @ts-ignore
                                    var a = _this.action.clip.clone();
                                    a.tracks.forEach(function (t) {
                                        t.times = [0];
                                        t.values = t.values.slice(0, t.name.endsWith(".quaternion") ? 4 : 3);
                                    });
                                    a.name += "-start-pose";
                                    a.duration = 0.000;
                                    _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.anims.add(a);
                                } },
                            { name: "Create animation from first frame", icon: "flash", callback: function () {
                                    /// @ts-ignore
                                    var a = _this.action.clip.clone();
                                    a.tracks.forEach(function (t) {
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
                    _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].events.subscribe(_services_main_service__WEBPACK_IMPORTED_MODULE_2__["Events"].ANIMATION_PLAY, function () { return _this.refresh(); });
                    _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].events.subscribe(_services_main_service__WEBPACK_IMPORTED_MODULE_2__["Events"].CHANGE_CHARACTER, function () { return _this.refresh(); });
                    if (_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character && _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction)
                        this.refresh();
                    this.onFrame();
                };
                AnimationBarComponent.prototype.onFrame = function () {
                    var _this = this;
                    try {
                        var action = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction;
                        var clip = action.getClip();
                        var udata_1 = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.anims.getUserData(clip);
                        udata_1.eventTimes.forEach(function (et, i) { return _this.action.events[i] = et; });
                        var handles = jquery__WEBPACK_IMPORTED_MODULE_4__("#slider-events .noUi-handle").toArray();
                        handles.forEach(function (o, i) { return jquery__WEBPACK_IMPORTED_MODULE_4__(o).toggle(udata_1.eventTimes[i] !== undefined); });
                    }
                    catch (e) { }
                    requestAnimationFrame(function () { return _this.onFrame(); });
                };
                AnimationBarComponent.prototype.refresh = function () {
                    var _this = this;
                    var action = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction;
                    var clip = action.getClip();
                    var udata = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.anims.getUserData(clip);
                    udata.eventTimes.forEach(function (et, i) { return _this.action.events[i] = et; });
                    ///@ts-ignore
                    this.slider_events.writeValue(this.action.events);
                    console.log(udata);
                };
                ////
                AnimationBarComponent.prototype.togglePause = function () {
                    _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction.paused = !_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction.paused;
                };
                AnimationBarComponent.prototype.addEvent = function () {
                    var clip = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction.getClip();
                    var udata = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.anims.getUserData(clip);
                    udata.addEvent(_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.currentAction.time);
                    this.refresh();
                };
                return AnimationBarComponent;
            }());
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
            /***/ 
        }),
        /***/ "./src/app/components/explorer.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/components/explorer.component.ts ***!
          \**************************************************/
        /*! exports provided: ExplorerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExplorerComponent", function () { return ExplorerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");
            /* harmony import */ var _services_scener_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/scener.service */ "./src/app/services/scener.service.ts");
            /* harmony import */ var three__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
            /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
            /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_5__);
            /* harmony import */ var jquery_contextmenu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery-contextmenu */ "./node_modules/jquery-contextmenu/dist/jquery.contextMenu.js");
            /* harmony import */ var jquery_contextmenu__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(jquery_contextmenu__WEBPACK_IMPORTED_MODULE_6__);
            var VECTOR3_NaN = { x: NaN, y: NaN, z: NaN };
            var boner = {
                subjects: [],
                keepWorldMatrix: false,
                addCurrentSubjectsTo: function (parentToBe) {
                    var _this = this;
                    var add = function (subject) { return _this.keepWorldMatrix ? parentToBe.attach(subject) : parentToBe.add(subject); };
                    this.subjects.forEach(function (subject) { return add(subject); });
                    _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].data.dirty = true;
                    return this;
                },
                openFor: function () {
                    var _a;
                    var subjects = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        subjects[_i] = arguments[_i];
                    }
                    this.subjects.length = 0;
                    (_a = this.subjects).push.apply(_a, subjects);
                    return this;
                },
            };
            function map_node(o, depth) {
                if (depth === void 0) { depth = 0; }
                return {
                    id: o.uuid,
                    value: o.name || o.uuid,
                    children: o.children.map(function (child) { return map_node(child, ++depth); })
                };
            }
            var ExplorerComponent = /** @class */ (function () {
                function ExplorerComponent(main, scener) {
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
                            callback(_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.model.children.map(function (o) { return map_node(o); }));
                        },
                        onNodeSelected: function (e) {
                            var item = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.model.getObjectByProperty("uuid", e.node.id);
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
                ExplorerComponent.prototype.ngOnInit = function () {
                    ///@ts-ignore
                    window.ex = this;
                    // this.setup_keyboardEvents()
                    this.setup_contextMenus();
                    console.log(this.elTree_sceneNodes);
                };
                ExplorerComponent.prototype.setup_contextMenus = function () {
                    var animation = { duration: 0, show: 'show', hide: 'hide' };
                    var util = {
                        addChild: function (parent, name, userData) {
                            if (userData === void 0) { userData = {}; }
                            var child = new three__WEBPACK_IMPORTED_MODULE_4__["Object3D"]();
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
                            var uuid = el.attr("uuid");
                            var item = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.model.getObjectByProperty("uuid", uuid);
                            return {
                                callback: function (action) { return console.log(action, uuid); },
                                animation: { duration: undefined, show: 'show', hide: 'hide' },
                                items: {
                                    addChild: {
                                        name: "Add empty child", icon: "add",
                                        callback: function () { return util.addChild(item, "o"); }
                                    },
                                    addHolster: {
                                        name: "Add empty holster", icon: "add",
                                        callback: function () { return util.addChild(item, "holster-" + item.name, { isHolster: true }); }
                                    },
                                    toggleHolster: {
                                        name: item.userData.isHolster ? "Untag as holster" : "Tag as holster", icon: "paste",
                                        callback: function () { return item.userData.isHolster = item.userData.isHolster ? undefined : true; }
                                    },
                                    delete: {
                                        name: "Delete", icon: "delete",
                                        callback: function () {
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
                        build: function (el, event) {
                            var uuid = el.attr("uuid");
                            var targets = [_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.model.getObjectByProperty("uuid", uuid)];
                            var makeItem = function (holster, i, keepWorldMatrix) {
                                return ["attachTo_" + i, {
                                        name: holster.name + (keepWorldMatrix ? " (keep global matrix)" : ''),
                                        icon: "link",
                                        callback: function () {
                                            boner.keepWorldMatrix = keepWorldMatrix;
                                            boner.openFor.apply(boner, targets).addCurrentSubjectsTo(holster);
                                        }
                                    }];
                            };
                            return {
                                items: {
                                    toggleHidden: {
                                        name: targets.length && targets[0].visible ? "Hide" : "Show", icon: "eye",
                                        visible: targets.length === 1,
                                        callback: function () { return _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.setHidden(targets[0], targets[0].visible); }
                                    },
                                    setHiddenTrue: {
                                        name: "Hide", icon: "eye",
                                        visible: targets.length > 1,
                                        callback: function () { return targets.forEach(function (o) { return _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.setHidden(o, true); }); }
                                    },
                                    setHiddenFalse: {
                                        name: "Show", icon: "eye",
                                        visible: targets.length > 1,
                                        callback: function () { return targets.forEach(function (o) { return _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.setHidden(o, false); }); }
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
                                        callback: function () { return targets.forEach(function (target) { return util.addChild(target, "hot-point"); }); }
                                    },
                                    clone: {
                                        name: "Clone", icon: "copy",
                                        callback: function () { return targets.forEach(function (o) { return _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.props.duplicate(o); }); }
                                    },
                                    delete: {
                                        name: "Delete", icon: "delete",
                                        callback: function () {
                                            var _a;
                                            return (_a = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.props).deleteAll.apply(_a, targets);
                                        }
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
                            var uuid = el.attr("uuid");
                            var targets = [_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.anims.getByUuid(uuid)];
                            return {
                                items: {
                                    clone: {
                                        name: "Clone", icon: "copy",
                                        callback: function () { return targets.forEach(function (clip) { return _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.anims.duplicate(clip); }); }
                                    },
                                    delete: {
                                        name: "Delete", icon: "delete",
                                        callback: function () {
                                            var _a;
                                            return (_a = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.anims).deleteAll.apply(_a, targets);
                                        }
                                    },
                                }
                            };
                        },
                    });
                };
                Object.defineProperty(ExplorerComponent.prototype, "object", {
                    //// GENERAL
                    get: function () {
                        var fake = { name: '-', position: VECTOR3_NaN, rotation: VECTOR3_NaN, scale: VECTOR3_NaN };
                        if (!_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].selection.last)
                            return fake;
                        if (_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].selection.type === "anim")
                            return fake;
                        if (_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].selection.type === "mat")
                            return fake;
                        return _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].selection.last;
                    },
                    enumerable: true,
                    configurable: true
                });
                ExplorerComponent.prototype.select = function (target, selectionType) {
                    _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].selection.all = [target];
                    _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].selection.last = target;
                    _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].selection.type = selectionType;
                    _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].selection.dirty = true;
                };
                Object.defineProperty(ExplorerComponent.prototype, "allBones", {
                    //// BONES
                    get: function () {
                        return _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.findAllChildren(function (o) { return o.type === "Bone"; });
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExplorerComponent.prototype, "material", {
                    get: function () {
                        return _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].selection.type !== 'mat' ? null : _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].selection.last;
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(ExplorerComponent.prototype, "allMaterials", {
                    get: function () {
                        var r = new Set();
                        /// @ts-ignore
                        _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].character.model.traverse(function (o) { return !o.material ? null : r.add(o.material); });
                        return Array.from(r);
                    },
                    enumerable: true,
                    configurable: true
                });
                return ExplorerComponent;
            }());
            ExplorerComponent.ctorParameters = function () { return [
                { type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] },
                { type: _services_scener_service__WEBPACK_IMPORTED_MODULE_3__["SceneService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('tree__sceneNodes', { static: false })
            ], ExplorerComponent.prototype, "elTree_sceneNodes", void 0);
            ExplorerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-explorer', template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./explorer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/explorer.component.html")).default, })
            ], ExplorerComponent);
            /***/ 
        }),
        /***/ "./src/app/components/statusbar.component.ts": 
        /*!***************************************************!*\
          !*** ./src/app/components/statusbar.component.ts ***!
          \***************************************************/
        /*! exports provided: StatusbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StatusbarComponent", function () { return StatusbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");
            var StatusbarComponent = /** @class */ (function () {
                function StatusbarComponent(main) {
                    this.main = main;
                    this.context = _services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"];
                }
                return StatusbarComponent;
            }());
            StatusbarComponent.ctorParameters = function () { return [
                { type: _services_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }
            ]; };
            StatusbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-statusbar', template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./statusbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/statusbar.component.html")).default, })
            ], StatusbarComponent);
            /***/ 
        }),
        /***/ "./src/app/components/toolbar.component.ts": 
        /*!*************************************************!*\
          !*** ./src/app/components/toolbar.component.ts ***!
          \*************************************************/
        /*! exports provided: ToolbarComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function () { return ToolbarComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_exportor_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/exportor.service */ "./src/app/services/exportor.service.ts");
            /* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");
            /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
            /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);
            var ToolbarComponent = /** @class */ (function () {
                function ToolbarComponent(exportor) {
                    this.exportor = exportor;
                    this.context = _services_main_service__WEBPACK_IMPORTED_MODULE_3__["context"];
                    this.buttons = [];
                }
                ToolbarComponent.prototype.ngOnInit = function () {
                    var _this = this;
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
                                callback: function () { return _this.exportor.saveZip(false, "download"); } },
                            { name: "Download GLB (binary)", icon: "disk-b",
                                callback: function () { return _this.exportor.saveZip(true, "download"); } },
                            { name: "Save to browser's localStorage", icon: "disk-c",
                                callback: function () { return _this.exportor.saveZip(true, "storage"); } },
                            { name: "Clear Local Storage", icon: "clear",
                                callback: function () { localStorage.removeItem("zip"); } },
                            { name: "Upload to Firebase (wip)", icon: "fire",
                                callback: function () { return _this.exportor.saveZip(true, "firebase"); } },
                        ]
                    });
                };
                ToolbarComponent.prototype.selectViewMode = function (viewMode) {
                    _services_main_service__WEBPACK_IMPORTED_MODULE_3__["context"].viewMode = _services_main_service__WEBPACK_IMPORTED_MODULE_3__["context"].viewMode !== viewMode ? viewMode : null;
                };
                return ToolbarComponent;
            }());
            ToolbarComponent.ctorParameters = function () { return [
                { type: _services_exportor_service__WEBPACK_IMPORTED_MODULE_2__["ExportorService"] }
            ]; };
            ToolbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({ selector: 'app-toolbar', template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./toolbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/toolbar.component.html")).default, })
            ], ToolbarComponent);
            /***/ 
        }),
        /***/ "./src/app/components/viewport.component.ts": 
        /*!**************************************************!*\
          !*** ./src/app/components/viewport.component.ts ***!
          \**************************************************/
        /*! exports provided: ViewportComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ViewportComponent", function () { return ViewportComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
            /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
            /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */ var _services_loador_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/loador.service */ "./src/app/services/loador.service.ts");
            /* harmony import */ var _services_scener_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/scener.service */ "./src/app/services/scener.service.ts");
            /* harmony import */ var three_examples_jsm_controls_OrbitControls__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/examples/jsm/controls/OrbitControls */ "./node_modules/three/examples/jsm/controls/OrbitControls.js");
            /* harmony import */ var three_examples_jsm_controls_TransformControls__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three/examples/jsm/controls/TransformControls */ "./node_modules/three/examples/jsm/controls/TransformControls.js");
            /* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");
            /* harmony import */ var _services_exportor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/exportor.service */ "./src/app/services/exportor.service.ts");
            var ViewportComponent = /** @class */ (function () {
                function ViewportComponent(viewportElem, scener, loador, exportor) {
                    this.viewportElem = viewportElem;
                    this.scener = scener;
                    this.loador = loador;
                    this.exportor = exportor;
                    this.context = _services_main_service__WEBPACK_IMPORTED_MODULE_8__["context"];
                }
                ViewportComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    var canvasElem = document.getElementById("webgl-canvas");
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
                    this.transformer.addEventListener('dragging-changed', function (event) { return _this.orbit.enabled = !event.value; });
                    this.transformer.setSize(0.5);
                    this.transformer.setSpace("local");
                    this.scener.scene.add(this.transformer);
                    _services_main_service__WEBPACK_IMPORTED_MODULE_8__["context"].events.subscribe(_services_main_service__WEBPACK_IMPORTED_MODULE_8__["Events"].CHANGE_CHARACTER, function (character) {
                        _this.scener.rig.position.x =
                            _this.camera.position.x =
                                _this.orbit.target.x = _this.scener.platforms[character.uuid].position.x;
                        _this.orbit.update();
                        _this.transformer.detach();
                    });
                    _services_main_service__WEBPACK_IMPORTED_MODULE_8__["context"].events.subscribe(_services_main_service__WEBPACK_IMPORTED_MODULE_8__["Events"].CHANGE_DATA, function (data) {
                        if (_this.transformer.object && !_this.transformer.object.parent)
                            _this.transformer.detach();
                    });
                    _services_main_service__WEBPACK_IMPORTED_MODULE_8__["context"].events.subscribe(_services_main_service__WEBPACK_IMPORTED_MODULE_8__["Events"].CHANGE_SELECTION, function (selection) {
                        if (selection.type === "node" || selection.type === "prop")
                            _this.transformer.attach(selection.last);
                        else
                            _this.transformer.detach();
                    });
                    jquery__WEBPACK_IMPORTED_MODULE_3__("button.transform.position").click(function (e) { return _this.transformer.setMode("translate"); });
                    jquery__WEBPACK_IMPORTED_MODULE_3__("button.transform.rotation").click(function (e) { return _this.transformer.setMode("rotate"); });
                    jquery__WEBPACK_IMPORTED_MODULE_3__("button.transform.scale").click(function (e) { return _this.transformer.setMode("scale"); });
                    jquery__WEBPACK_IMPORTED_MODULE_3__("button.transform.space").click(function (e) { return _this.transformer.setSpace(_this.transformer.space === "world" ? "local" : "world"); });
                    this.onResize();
                    this.animate();
                };
                ViewportComponent.prototype.onResize = function () {
                    var _a = [this.viewportElem.nativeElement.clientWidth, this.viewportElem.nativeElement.clientHeight], W = _a[0], H = _a[1];
                    this.renderer.setSize(W, H);
                    this.camera.aspect = W / H;
                    this.camera.updateProjectionMatrix();
                };
                ViewportComponent.prototype.animate = function () {
                    var _this = this;
                    this.renderer.render(this.scener.scene, this.camera);
                    requestAnimationFrame(function () { return _this.animate(); });
                };
                return ViewportComponent;
            }());
            ViewportComponent.ctorParameters = function () { return [
                { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
                { type: _services_scener_service__WEBPACK_IMPORTED_MODULE_5__["SceneService"] },
                { type: _services_loador_service__WEBPACK_IMPORTED_MODULE_4__["LoadorService"] },
                { type: _services_exportor_service__WEBPACK_IMPORTED_MODULE_9__["ExportorService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event'])
            ], ViewportComponent.prototype, "onResize", null);
            ViewportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-viewport',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./viewport.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/viewport.component.html")).default,
                })
            ], ViewportComponent);
            /***/ 
        }),
        /***/ "./src/app/services/exportor.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/services/exportor.service.ts ***!
          \**********************************************/
        /*! exports provided: ExportDestination, ExportorService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportDestination", function () { return ExportDestination; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExportorService", function () { return ExportorService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");
            /* harmony import */ var three_examples_jsm_exporters_GLTFExporter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/exporters/GLTFExporter */ "./node_modules/three/examples/jsm/exporters/GLTFExporter.js");
            /* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
            /* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_4__);
            var link = document.createElement('a');
            link.style.display = 'none';
            var exporter = new three_examples_jsm_exporters_GLTFExporter__WEBPACK_IMPORTED_MODULE_3__["GLTFExporter"]();
            var zipper = new jszip__WEBPACK_IMPORTED_MODULE_4__();
            var ExportDestination;
            (function (ExportDestination) {
                ExportDestination[ExportDestination["Download"] = 0] = "Download";
                ExportDestination[ExportDestination["LocalStorage"] = 1] = "LocalStorage";
                ExportDestination[ExportDestination["Firebase"] = 2] = "Firebase";
            })(ExportDestination || (ExportDestination = {}));
            var ExportorService = /** @class */ (function () {
                function ExportorService() {
                    this._busy = false;
                    console.log(zipper);
                }
                Object.defineProperty(ExportorService.prototype, "isBusy", {
                    get: function () { return this._busy; },
                    enumerable: true,
                    configurable: true
                });
                ExportorService.prototype.saveZip = function (binary, destination) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var zip_1, results, zip_blob;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    this._busy = true;
                                    _a.label = 1;
                                case 1:
                                    _a.trys.push([1, , 4, 5]);
                                    zip_1 = new jszip__WEBPACK_IMPORTED_MODULE_4__();
                                    console.log("hajime");
                                    return [4 /*yield*/, Promise.all(_services_main_service__WEBPACK_IMPORTED_MODULE_2__["context"].characters.map(function (c) { return _this.convertCharacter(c, binary); }))];
                                case 2:
                                    results = _a.sent();
                                    console.log("results: ", results);
                                    results.forEach(function (r) { return zip_1.file(r.filename, r.blob); });
                                    console.log("zip: ", zip_1);
                                    return [4 /*yield*/, new Promise(function (resolve) { return zip_1.generateAsync({ type: "blob", compression: "DEFLATE" }).then(resolve); })];
                                case 3:
                                    zip_blob = _a.sent();
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
                                    return [3 /*break*/, 5];
                                case 4:
                                    this._busy = false;
                                    return [7 /*endfinally*/];
                                case 5: return [2 /*return*/];
                            }
                        });
                    });
                };
                ExportorService.prototype.saveToLocalStorage = function (blob) {
                    var fileReader = new FileReader();
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
                };
                ExportorService.prototype.download = function (blob, filename) {
                    link.href = URL.createObjectURL(blob);
                    link.download = filename;
                    link.click();
                };
                ExportorService.prototype.convertCharacter = function (character, binary) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var model, anims, userData;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    model = character.model;
                                    anims = character.anims.toArray();
                                    userData = character.makeUserData();
                                    return [4 /*yield*/, this.exportToGLTF(model, anims, userData, binary)];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                };
                ExportorService.prototype.exportToGLTF = function (group, animations, userData, binary) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var exportee;
                        return __generator(this, function (_a) {
                            console.log(group, animations, userData, binary);
                            exportee = group;
                            exportee.userData = userData;
                            return [2 /*return*/, new Promise(function (resolve, reject) {
                                    try {
                                        exporter.parse(exportee, function (data) {
                                            // exporter.parse( group, function ( data ) {
                                            var name = group.name || "LeScene";
                                            var binary = data instanceof ArrayBuffer;
                                            var output = binary ? data : JSON.stringify(data, null, 2);
                                            var filename = name + "." + (binary ? "glb" : "gltf");
                                            var blob = binary ?
                                                new Blob([output], { type: 'text/plain' }) :
                                                new Blob([output], { type: 'application/octet-stream' });
                                            resolve(new Result(blob, filename));
                                        }, { animations: animations, onlyVisible: false, binary: binary });
                                    }
                                    catch (e) {
                                        reject(e);
                                    }
                                })];
                        });
                    });
                };
                return ExportorService;
            }());
            ExportorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], ExportorService);
            var Result = /** @class */ (function () {
                function Result(blob, filename) {
                    this.blob = blob;
                    this.filename = filename;
                }
                return Result;
            }());
            /***/ 
        }),
        /***/ "./src/app/services/loador.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/loador.service.ts ***!
          \********************************************/
        /*! exports provided: LoadorService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadorService", function () { return LoadorService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jszip */ "./node_modules/jszip/dist/jszip.min.js");
            /* harmony import */ var jszip__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(jszip__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */ var three_examples_jsm_loaders_GLTFLoader_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! three/examples/jsm/loaders/GLTFLoader.js */ "./node_modules/three/examples/jsm/loaders/GLTFLoader.js");
            /* harmony import */ var three_examples_jsm_loaders_FBXLoader_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! three/examples/jsm/loaders/FBXLoader.js */ "./node_modules/three/examples/jsm/loaders/FBXLoader.js");
            /* harmony import */ var three_examples_jsm_loaders_OBJLoader_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! three/examples/jsm/loaders/OBJLoader.js */ "./node_modules/three/examples/jsm/loaders/OBJLoader.js");
            /* harmony import */ var three_examples_jsm_loaders_ColladaLoader_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! three/examples/jsm/loaders/ColladaLoader.js */ "./node_modules/three/examples/jsm/loaders/ColladaLoader.js");
            /* harmony import */ var three_examples_jsm_loaders_SVGLoader_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! three/examples/jsm/loaders/SVGLoader.js */ "./node_modules/three/examples/jsm/loaders/SVGLoader.js");
            /* harmony import */ var three__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
            /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
            /* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_9__);
            /* harmony import */ var _main_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main.service */ "./src/app/services/main.service.ts");
            var LoadorService = /** @class */ (function () {
                function LoadorService() {
                    var _this = this;
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
                        characters: function (data, file_extension, file_name) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var _a, group, animations, model;
                            var _this = this;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                                            switch (file_extension) {
                                                case "gltf":
                                                case "glb":
                                                    _this.loaders.gltf.load(data, function (gltf) { return resolve([gltf.scene, gltf.animations]); });
                                                    break;
                                                case "fbx":
                                                    _this.loaders.fbx.load(data, function (o) { return resolve([o, o.animations || []]); });
                                                    break;
                                                default: reject("Sorry, can't load files with extension \"" + file_extension + "\" here");
                                            }
                                        })];
                                    case 1:
                                        _a = _b.sent(), group = _a[0], animations = _a[1];
                                        console.log(group);
                                        model = null;
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
                                        return [2 /*return*/, new _main_service__WEBPACK_IMPORTED_MODULE_10__["Character"](model, animations)];
                                }
                            });
                        }); },
                        model: function (data, file_extension, file_name) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var model;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                                            switch (file_extension) {
                                                case "gltf":
                                                case "glb":
                                                    _this.loaders.gltf.load(data, function (o) { return resolve(o.scene.children[0]); });
                                                    break;
                                                case "dae":
                                                    _this.loaders.dae.load(data, function (o) { return resolve(o.scene.children[0]); });
                                                    break;
                                                case "obj":
                                                    _this.loaders.obj.load(data, function (o) { return resolve(o); });
                                                    break;
                                                case "fbx":
                                                    _this.loaders.fbx.load(data, function (o) { return resolve(o); });
                                                    break;
                                                default: reject("Sorry, can't load files with extension \"" + file_extension + "\" here");
                                            }
                                        })];
                                    case 1:
                                        model = _a.sent();
                                        console.log(model);
                                        model.name = model.name || file_name;
                                        return [2 /*return*/, model];
                                }
                            });
                        }); },
                        props: function (data, file_extension, file_name) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var props, todel;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                                            switch (file_extension) {
                                                case "gltf":
                                                case "glb":
                                                    _this.loaders.gltf.load(data, function (o) { return resolve(o.scene.children); });
                                                    break;
                                                case "obj":
                                                    _this.loaders.obj.load(data, function (o) { return resolve([o]); });
                                                    break;
                                                case "dae":
                                                    _this.loaders.dae.load(data, function (o) { return resolve([o.scene]); });
                                                    break;
                                                case "fbx":
                                                    _this.loaders.fbx.load(data, function (o) { return resolve([o]); });
                                                    break;
                                                case "svg":
                                                    _this.loaders.svg.load(data, function (o) {
                                                        var paths = o.paths;
                                                        var group = new three__WEBPACK_IMPORTED_MODULE_8__["Group"]();
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
                                                default: reject("Sorry, can't load files with extension \"" + file_extension + "\" here");
                                            }
                                        })];
                                    case 1:
                                        props = _a.sent();
                                        props = [].concat.apply([], props);
                                        todel = [];
                                        props.forEach(function (prop) {
                                            prop.traverse(function (o) {
                                                var del = false;
                                                del = del || o.type.indexOf("Light") > -1;
                                                del = del || o.type.indexOf("Camera") > -1;
                                                del = del || o.type === "SkinnedMesh";
                                                del = del || o.type === "Bone";
                                                if (del)
                                                    todel.push(o);
                                            });
                                        });
                                        todel.forEach(function (o) { return o.parent.remove(o); });
                                        if (props.length === 1)
                                            props[0].name = file_name;
                                        else
                                            props.forEach(function (prop) { return prop.name = prop.name || file_name; });
                                        return [2 /*return*/, props];
                                }
                            });
                        }); },
                        anims: function (data, file_extension, file_name) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var animations;
                            var _this = this;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0: return [4 /*yield*/, new Promise(function (resolve, reject) {
                                            switch (file_extension) {
                                                case "gltf":
                                                case "glb":
                                                    _this.loaders.gltf.load(data, function (gl) { return resolve(gl.animations); });
                                                    break;
                                                // case "fbx": this.loaders.fbx.load( data, group => console.warn( group ), null, e => console.error( e ) );
                                                // case "fbx": this.loaders.fbx.load( data, group => resolve( group.animations ) ); break;
                                                case "fbx":
                                                    _this.loaders.fbx.load(data, function (group) { return resolve(group.animations); });
                                                    break;
                                                default: reject("Sorry, can't load files with extension \"" + file_extension + "\" here");
                                            }
                                        })];
                                    case 1:
                                        animations = _a.sent();
                                        animations = animations.filter(function (a) { return a.duration > 0.0; });
                                        if (animations.length === 1)
                                            animations[0].name = file_name;
                                        animations.forEach(function (a) { return a.name = a.name.match(/[\w-]+/g).join('-').toLowerCase(); });
                                        return [2 /*return*/, animations];
                                }
                            });
                        }); },
                    };
                    this.loadingManager.onStart = function () { return _this._busy = true; };
                    this.loadingManager.onLoad = function () { return _this._busy = false; };
                    this.loadingManager.onError = function () { return _this._busy = false; };
                    // loadingManager.onStart = () => $( ".loading" ).show()
                    // loadingManager.onLoad  = () => $( ".loading" ).hide()
                    // loadingManager.onError = () => $( ".loading" ).hide()
                    /// @ts-ignore
                    window.loador = this;
                }
                Object.defineProperty(LoadorService.prototype, "isBusy", {
                    get: function () { return this._busy; },
                    enumerable: true,
                    configurable: true
                });
                LoadorService.prototype.loadFromUrl = function (url) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, new Promise(function (resolve) { return _this.loaders.gltf.load(url, resolve); })];
                                case 1: return [2 /*return*/, _a.sent()];
                            }
                        });
                    });
                };
                LoadorService.prototype.loadZipFromLocalStorage = function (funcLoaded) {
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
                        function dataURLtoBlob(dataurl) {
                            var arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1], bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
                            while (n--) {
                                u8arr[n] = bstr.charCodeAt(n);
                            }
                            return new Blob([u8arr], { type: mime });
                        }
                        var data, o, funcResolver, promises, _loop_1, this_1, zip_filename;
                        var _this = this;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0:
                                    data = localStorage["zip"];
                                    return [4 /*yield*/, jszip__WEBPACK_IMPORTED_MODULE_2__["loadAsync"](dataURLtoBlob(data))];
                                case 1:
                                    o = _a.sent();
                                    console.log(o.files);
                                    funcResolver = this.fileResolvers.characters;
                                    promises = [];
                                    _loop_1 = function (zip_filename) {
                                        promises.push(new Promise(function (resolve) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                            var file, _a, zfext, zfname, blob, url;
                                            return __generator(this, function (_b) {
                                                switch (_b.label) {
                                                    case 0:
                                                        file = o.files[zip_filename];
                                                        _a = this.getFileNameAndExtension(file), zfext = _a[0], zfname = _a[1];
                                                        return [4 /*yield*/, file.async("blob")];
                                                    case 1:
                                                        blob = _b.sent();
                                                        url = URL.createObjectURL(blob);
                                                        funcResolver(url, zfext, zfname).then(resolve).catch(this.onError);
                                                        return [2 /*return*/];
                                                }
                                            });
                                        }); }).catch(this_1.onError));
                                    };
                                    this_1 = this;
                                    for (zip_filename in o.files) {
                                        _loop_1(zip_filename);
                                    }
                                    Promise.all(promises).then(function (a) { return funcLoaded.apply(void 0, [].concat.apply([], a)); }).catch(this.onError);
                                    return [2 /*return*/];
                            }
                        });
                    });
                };
                LoadorService.prototype.makeDropField = function (elementId, funcResolver, funcLoaded) {
                    var _this = this;
                    var element = document.getElementById(elementId);
                    element.ondragover = function (e) {
                        if (e.ctrlKey || e.altKey || jquery__WEBPACK_IMPORTED_MODULE_9__(element).is(":focus-within"))
                            return true;
                        e.preventDefault();
                        element.classList.add("dragover");
                        return false;
                    };
                    element.ondragleave = function (e) {
                        if (e.ctrlKey || e.altKey)
                            return true;
                        e.preventDefault();
                        element.classList.remove("dragover");
                        return false;
                    };
                    element.ondrop = function (e) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                        var promises, _loop_2, this_2, _i, _a, file;
                        var _this = this;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    if (e.ctrlKey || e.altKey || !e.dataTransfer.files.length)
                                        return [2 /*return*/, true];
                                    e.preventDefault();
                                    element.classList.remove("dragover");
                                    promises = [];
                                    _loop_2 = function (file) {
                                        var _a, fileext, filename, ab, o_1, _loop_3, zip_filename;
                                        return __generator(this, function (_b) {
                                            switch (_b.label) {
                                                case 0:
                                                    _a = this_2.getFileNameAndExtension(file), fileext = _a[0], filename = _a[1];
                                                    if (!(fileext === "zip")) return [3 /*break*/, 3];
                                                    return [4 /*yield*/, new Promise(function (resolve) {
                                                            var zip_reader = new FileReader();
                                                            zip_reader.onload = function (event) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () { return __generator(this, function (_a) {
                                                                return [2 /*return*/, resolve(event.target.result)];
                                                            }); }); };
                                                            zip_reader.readAsArrayBuffer(file);
                                                        })];
                                                case 1:
                                                    ab = _b.sent();
                                                    return [4 /*yield*/, jszip__WEBPACK_IMPORTED_MODULE_2__["loadAsync"](ab)];
                                                case 2:
                                                    o_1 = _b.sent();
                                                    _loop_3 = function (zip_filename) {
                                                        promises.push(new Promise(function (resolve) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                            var file, _a, zfext, zfname, blob, url;
                                                            return __generator(this, function (_b) {
                                                                switch (_b.label) {
                                                                    case 0:
                                                                        file = o_1.files[zip_filename];
                                                                        _a = this.getFileNameAndExtension(file), zfext = _a[0], zfname = _a[1];
                                                                        return [4 /*yield*/, file.async("blob")];
                                                                    case 1:
                                                                        blob = _b.sent();
                                                                        url = URL.createObjectURL(blob);
                                                                        funcResolver(url, zfext, zfname).then(resolve).catch(this.onError);
                                                                        return [2 /*return*/];
                                                                }
                                                            });
                                                        }); }).catch(this_2.onError));
                                                    };
                                                    for (zip_filename in o_1.files) {
                                                        _loop_3(zip_filename);
                                                    }
                                                    return [3 /*break*/, 4];
                                                case 3:
                                                    promises.push(new Promise(function (resolve) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                                        var reader;
                                                        var _this = this;
                                                        return __generator(this, function (_a) {
                                                            reader = new FileReader();
                                                            reader.onload = function (event) {
                                                                funcResolver(event.target.result, fileext, filename).then(resolve).catch(_this.onError);
                                                            };
                                                            reader.readAsDataURL(file);
                                                            return [2 /*return*/];
                                                        });
                                                    }); }).catch(this_2.onError));
                                                    _b.label = 4;
                                                case 4: return [2 /*return*/];
                                            }
                                        });
                                    };
                                    this_2 = this;
                                    _i = 0, _a = e.dataTransfer.files;
                                    _b.label = 1;
                                case 1:
                                    if (!(_i < _a.length)) return [3 /*break*/, 4];
                                    file = _a[_i];
                                    return [5 /*yield**/, _loop_2(file)];
                                case 2:
                                    _b.sent();
                                    _b.label = 3;
                                case 3:
                                    _i++;
                                    return [3 /*break*/, 1];
                                case 4:
                                    Promise.all(promises).then(function (a) { return funcLoaded.apply(void 0, [].concat.apply([], a)); }).catch(this.onError);
                                    return [2 /*return*/, false];
                            }
                        });
                    }); };
                };
                LoadorService.prototype.getFileNameAndExtension = function (file) {
                    return [
                        file.name.match(/\.([0-9a-z]+)(?:[\?#]|$)/i)[1].toLowerCase(),
                        file.name.split('.')[0]
                    ];
                };
                LoadorService.prototype.onError = function (e) {
                    console.error(e);
                    // try { this._busy = false }
                    // catch( e ) { console.error( e ) }
                };
                return LoadorService;
            }());
            LoadorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], LoadorService);
            /***/ 
        }),
        /***/ "./src/app/services/main.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/main.service.ts ***!
          \******************************************/
        /*! exports provided: Events, MainService, context, Character, UniqueItemsList, AnimationsList, PropsList */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Events", function () { return Events; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function () { return MainService; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "context", function () { return context; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Character", function () { return Character; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UniqueItemsList", function () { return UniqueItemsList; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnimationsList", function () { return AnimationsList; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PropsList", function () { return PropsList; });
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
            var MainService = /** @class */ (function () {
                function MainService() {
                }
                MainService.prototype.initialize = function () {
                    context.time.clock.start();
                    this.onFrame();
                    context.events.subscribe(Events.CHANGE_DATA, function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return console.info.apply(console, ["CHANGE_DATA"].concat(a));
                    });
                    context.events.subscribe(Events.CHANGE_SELECTION, function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return console.info.apply(console, ["CHANGE_SELECTION"].concat(a));
                    });
                    context.events.subscribe(Events.CHANGE_CHARACTER, function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return console.info.apply(console, ["CHANGE_CHARACTER"].concat(a));
                    });
                    context.events.subscribe(Events.ANIMATION_PLAY, function () {
                        var a = [];
                        for (var _i = 0; _i < arguments.length; _i++) {
                            a[_i] = arguments[_i];
                        }
                        return console.info.apply(console, ["ANIMATION_PLAY"].concat(a));
                    });
                };
                MainService.prototype.onFrame = function () {
                    var _this = this;
                    context.time.delta = context.time.clock.getDelta();
                    if (context.data.dirty) {
                        context.events.dispatch(Events.CHANGE_DATA, context.data);
                        context.data.dirty = false;
                    }
                    if (context.selection.dirty) {
                        context.events.dispatch(Events.CHANGE_SELECTION, context.selection);
                        context.selection.dirty = false;
                    }
                    for (var _i = 0, _a = context.characters; _i < _a.length; _i++) {
                        var c = _a[_i];
                        c.aniMixer.update(context.time.delta);
                    }
                    requestAnimationFrame(function () { return _this.onFrame(); });
                };
                /// /// /// /// 
                MainService.prototype.makeAndAddCharacter = function (model, animations) {
                    return this.addCharacter(new Character(model, animations));
                };
                MainService.prototype.addCharacter = function (character) {
                    character.model.position.setScalar(0);
                    character.model.traverse(function (o) { return o.visible = !o.userData.hidden; });
                    context.characters.push(character);
                    context.events.dispatch(Events.ADD_CHARACTER, character);
                    context.data.dirty = true;
                    return character;
                };
                MainService.prototype.focusOnCharacter = function (character) {
                    context.viewMode = context.viewMode || "overview";
                    context.character = character;
                    context.events.dispatch(Events.CHANGE_CHARACTER, character);
                    context.data.dirty = true;
                };
                return MainService;
            }());
            MainService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], MainService);
            var context = {
                time: {
                    clock: new three__WEBPACK_IMPORTED_MODULE_2__["Clock"](),
                    delta: 0.0,
                },
                // viewMode : null, //  "characters" , // 
                get viewMode() { return localStorage["state.viewMode"]; },
                set viewMode(value) { localStorage["state.viewMode"] = value; },
                character: null,
                characters: new Array(),
                data: new /** @class */ (function () {
                    function CurrentData() {
                        this.dirty = false;
                    }
                    return CurrentData;
                }()),
                selection: new /** @class */ (function () {
                    function SelectionManager() {
                        this.dirty = false;
                    }
                    return SelectionManager;
                }()),
                events: new /** @class */ (function () {
                    function EventManager() {
                        this.functions = {};
                    }
                    EventManager.prototype.subscribe = function (key, callback) {
                        if (!this.functions[key])
                            this.functions[key] = [];
                        this.functions[key].push(callback);
                    };
                    EventManager.prototype.dispatch = function (key, data) {
                        if (this.functions[key])
                            for (var _i = 0, _a = this.functions[key]; _i < _a.length; _i++) {
                                var callback = _a[_i];
                                callback(data);
                            }
                    };
                    return EventManager;
                }()),
            };
            var Character = /** @class */ (function () {
                function Character(model, animations) {
                    var _this = this;
                    this.model = model;
                    this.currentAction = null;
                    this.props = this.findAllProps(model);
                    this.anims = new AnimationsList(animations);
                    this.aniMixer = new three__WEBPACK_IMPORTED_MODULE_2__["AnimationMixer"](model);
                    this.uuid = model.uuid;
                    var animationsUserData = model.userData.animationsUserData;
                    if (animationsUserData)
                        animations.forEach(function (clip, i) { return _this.anims.setUserData(clip, animationsUserData[i]); });
                }
                Object.defineProperty(Character.prototype, "name", {
                    get: function () { return this.model.name || this.model.uuid; },
                    enumerable: true,
                    configurable: true
                });
                Character.prototype.makeUserData = function () {
                    var _this = this;
                    return {
                        animationsUserData: this.anims.toArray().map(function (clip) { return _this.anims.getUserData(clip); })
                    };
                };
                Character.prototype.findAllProps = function (model) {
                    var results = new PropsList();
                    function traverseChildren(o) {
                        var push = false;
                        var hasChildren = o.children && !!o.children.filter(function (c) { return c.type !== "Bone"; }).length;
                        push = push || ((o.type === "Object3D" || o.type === "Group") && hasChildren);
                        push = push || o.type === "Mesh";
                        push = push && !o.userData.isHolster;
                        push = push && o !== model;
                        if (push)
                            results.add(o);
                        else if (o.children)
                            o.children.forEach(function (child) { return traverseChildren(child); });
                    }
                    traverseChildren(model);
                    return results;
                };
                /// /// ///
                Character.prototype.findAllChildren = function (func) {
                    var results = [];
                    this.model.traverse(function (child) { return func(child) ? results.push(child) : null; });
                    return results;
                };
                Character.prototype.setHidden = function (object, hidden) {
                    hidden = hidden !== undefined ? hidden : !object.visible;
                    object.userData.hidden = hidden;
                    object.visible = !hidden;
                    context.data.dirty = true;
                };
                Character.prototype.playDefaultAnimation = function () {
                    var idle_anim = this.anims.find(function (a) { return a.name === "idle"; }) ||
                        this.anims.find(function (a) { return a.name.toLowerCase().indexOf("idle") > -1; });
                    if (idle_anim)
                        this.play(idle_anim);
                };
                Character.prototype.play = function (clip) {
                    this.aniMixer.stopAllAction();
                    this.aniMixer.uncacheClip(clip);
                    this.currentAction = this.aniMixer.clipAction(clip);
                    this.currentAction.setLoop(three__WEBPACK_IMPORTED_MODULE_2__["LoopRepeat"], undefined);
                    this.currentAction.enabled = true;
                    this.currentAction.weight = 1.0;
                    this.currentAction.play();
                    if (context.character === this)
                        context.events.dispatch(Events.ANIMATION_PLAY, this.currentAction);
                };
                return Character;
            }());
            var UniqueItemsList = /** @class */ (function (_super) {
                __extends(UniqueItemsList, _super);
                function UniqueItemsList() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                Object.defineProperty(UniqueItemsList.prototype, "length", {
                    get: function () { return this.size; },
                    enumerable: true,
                    configurable: true
                });
                UniqueItemsList.prototype.getByUuid = function (uuid) {
                    for (var _i = 0, _a = this; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (item.uuid === uuid)
                            return item;
                    }
                    return null;
                };
                UniqueItemsList.prototype.map = function (func) {
                    return Array.from(this).map(function (v, i, a) { return func(v, i, a); });
                };
                UniqueItemsList.prototype.find = function (func) {
                    for (var _i = 0, _a = this; _i < _a.length; _i++) {
                        var item = _a[_i];
                        if (func(item))
                            return item;
                    }
                    return null;
                };
                UniqueItemsList.prototype.addAll = function () {
                    var _this = this;
                    var items = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        items[_i] = arguments[_i];
                    }
                    items.forEach(function (item) { return _this.add(item); });
                };
                UniqueItemsList.prototype.add = function (item) {
                    context.data.dirty = true;
                    return _super.prototype.add.call(this, item);
                };
                UniqueItemsList.prototype.deleteAll = function () {
                    var _this = this;
                    var props = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        props[_i] = arguments[_i];
                    }
                    props.forEach(function (item) { return _this.delete(item); });
                };
                UniqueItemsList.prototype.delete = function (item) {
                    context.data.dirty = true;
                    return _super.prototype.delete.call(this, item);
                };
                UniqueItemsList.prototype.toArray = function () { return Array.from(this); };
                return UniqueItemsList;
            }(Set));
            var AnimationUserData = /** @class */ (function () {
                // get events():{time:number}[] { return this.eventTimes.map( time => { return { time : time } } ) }
                // events:{time:number}[]
                function AnimationUserData(clip, data) {
                    var _a;
                    this.fadeTimes = [0.0, clip.duration];
                    this.eventTimes = [];
                    if (data) {
                        this.fadeTimes[0] = data.fadeTimes[0];
                        this.fadeTimes[1] = data.fadeTimes[1];
                        (_a = this.eventTimes).push.apply(_a, data.eventTimes);
                    }
                    // this.events = [ ]
                }
                AnimationUserData.prototype.addEvent = function (time) {
                    this.eventTimes.push(time);
                    this.eventTimes.sort();
                    // this.events.push( { time : time } )
                };
                return AnimationUserData;
            }());
            var AnimationsList = /** @class */ (function (_super) {
                __extends(AnimationsList, _super);
                function AnimationsList() {
                    var _this = _super.apply(this, arguments) || this;
                    _this.userDatas = {};
                    return _this;
                }
                AnimationsList.prototype.getUserData = function (clip) {
                    if (this.userDatas[clip.uuid] === undefined) {
                        this.userDatas[clip.uuid] = new AnimationUserData(clip);
                    }
                    return this.userDatas[clip.uuid];
                };
                AnimationsList.prototype.setUserData = function (clip, data) {
                    this.userDatas[clip.uuid] = new AnimationUserData(clip, data);
                };
                AnimationsList.prototype.add = function (item) {
                    var i = 0, originalName = item.name;
                    while (this.find(function (a) { return a.name === item.name; }))
                        item.name = originalName + "-" + ++i;
                    return _super.prototype.add.call(this, item);
                };
                AnimationsList.prototype.duplicate = function (clip) {
                    /// @ts-ignore
                    var clone = clip.clone();
                    this.add(clone);
                    return clone;
                };
                return AnimationsList;
            }(UniqueItemsList));
            var PropsList = /** @class */ (function (_super) {
                __extends(PropsList, _super);
                function PropsList() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                PropsList.prototype.duplicate = function (prop) {
                    var clone = prop.clone();
                    prop.parent.add(clone);
                    this.add(clone);
                    return clone;
                };
                PropsList.prototype.delete = function (prop) {
                    prop.parent.remove(prop);
                    return _super.prototype.delete.call(this, prop);
                };
                return PropsList;
            }(UniqueItemsList));
            /***/ 
        }),
        /***/ "./src/app/services/scener.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/scener.service.ts ***!
          \********************************************/
        /*! exports provided: studioRigConfigurations, SceneService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "studioRigConfigurations", function () { return studioRigConfigurations; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SceneService", function () { return SceneService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ "./node_modules/three/build/three.module.js");
            /* harmony import */ var _services_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/main.service */ "./src/app/services/main.service.ts");
            var DEFAULT_RIG = 2; /// 0 1 2
            var textureLoader = new three__WEBPACK_IMPORTED_MODULE_2__["TextureLoader"]();
            var studioRigConfigurations = [
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
            var SceneService = /** @class */ (function () {
                function SceneService() {
                    this.scene = new three__WEBPACK_IMPORTED_MODULE_2__["Scene"]();
                    this.rig = new StudioRig();
                    this.rigConfigurations = studioRigConfigurations;
                    this.platforms = {};
                    this.isLoading = true; //// directly use loader.busy
                }
                SceneService.prototype.initialize = function () {
                    var _this = this;
                    this.scene.add(this.rig);
                    this.rig.initialize(studioRigConfigurations[DEFAULT_RIG], this.scene);
                    _services_main_service__WEBPACK_IMPORTED_MODULE_3__["context"].events.subscribe(_services_main_service__WEBPACK_IMPORTED_MODULE_3__["Events"].ADD_CHARACTER, function (character) {
                        var platform = _this.platforms[character.uuid] = new three__WEBPACK_IMPORTED_MODULE_2__["Group"]();
                        platform.add(character.model);
                        platform.position.x = _services_main_service__WEBPACK_IMPORTED_MODULE_3__["context"].characters.length - 1;
                        _this.scene.add(platform);
                    });
                    this.isLoading = false;
                };
                SceneService.prototype.setupRig = function (config) {
                    this.rig.initialize(config, this.scene);
                };
                return SceneService;
            }());
            SceneService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
            ], SceneService);
            var StudioRig = /** @class */ (function (_super) {
                __extends(StudioRig, _super);
                function StudioRig() {
                    return _super !== null && _super.apply(this, arguments) || this;
                }
                StudioRig.prototype.initialize = function (configuration, scene) {
                    var _this = this;
                    this.configuration = configuration;
                    while (this.children.length > 0)
                        this.remove(this.children[0]);
                    scene.background = new three__WEBPACK_IMPORTED_MODULE_2__["Color"](configuration.colors.background);
                    configuration.lights.ambient.forEach(function (c, i) {
                        var light = new three__WEBPACK_IMPORTED_MODULE_2__["AmbientLight"](c.color, c.intensity);
                        light.name = "Light (ambient) " + i;
                        _this.add(light);
                    });
                    configuration.lights.directional.forEach(function (c, i) {
                        var light = new three__WEBPACK_IMPORTED_MODULE_2__["DirectionalLight"](c.color, c.intensity);
                        light.position.set(c.position[0], c.position[1], c.position[2]).setLength(20);
                        light.lookAt(new three__WEBPACK_IMPORTED_MODULE_2__["Vector3"](0, 0, 0));
                        light.name = "Light (directional) " + i;
                        _this.add(light);
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
                };
                return StudioRig;
            }(three__WEBPACK_IMPORTED_MODULE_2__["Group"]));
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            // This file can be replaced during build by using the `fileReplacements` array.
            // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
            // The list of file replacements can be found in `angular.json`.
            var environment = {
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! /workspace/animateur/src/main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map