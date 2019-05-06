/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 	__webpack_require__.p = "dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*\r\n *  This file is part of electron-titlebar.\r\n *\r\n *  Copyright (c) 2016 Menci <huanghaorui301@gmail.com>\r\n *\r\n *  electron-titlebar is free software: you can redistribute it and/or modify\r\n *  it under the terms of the GNU Lesser General Public License as published by\r\n *  the Free Software Foundation, either version 3 of the License, or\r\n *  (at your option) any later version.\r\n *\r\n *  electron-titlebar is distributed in the hope that it will be useful,\r\n *  but WITHOUT ANY WARRANTY; without even the implied warranty of\r\n *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\r\n *  GNU Lesser General Public License for more details.\r\n *\r\n *  You should have received a copy of the GNU Lesser General Public License\r\n *  along with electron-titlebar. If not, see <http://www.gnu.org/licenses/>.\r\n */\r\n\r\n\r\n\r\nconst fs = __webpack_require__(/*! fs */ \"fs\"); \r\nconst path = __webpack_require__(/*! path */ \"path\");\r\nconst url = __webpack_require__(/*! url */ \"url\");\r\nconst electron = eval(\"require('electron')\");   //Fix webpack resolving electron\r\n\r\n//Make webpack pack this too\r\n__webpack_require__(/*! ./titlebar/titlebar.css */ \"./titlebar/titlebar.css\");\r\n__webpack_require__(/*! ./titlebar/caption-buttons.svg */ \"./titlebar/caption-buttons.svg\");\r\n__webpack_require__(/*! ./titlebar/close.svg */ \"./titlebar/close.svg\");\r\n__webpack_require__(/*! ./titlebar/maximize.svg */ \"./titlebar/maximize.svg\");\r\n__webpack_require__(/*! ./titlebar/minimize.svg */ \"./titlebar/minimize.svg\");\r\n__webpack_require__(/*! ./titlebar/restore.svg */ \"./titlebar/restore.svg\");\r\n\r\nfunction installTitlebar() {\r\n    if (window.electron_titlebar_installed === true) return;\r\n\r\n    let titlebar = document.getElementById('electron-titlebar');\r\n    if (!titlebar) return;\r\n\r\n    window.electron_titlebar_installed = true;\r\n\r\n    const platform = titlebar.getAttribute('platform') || process.platform;\r\n    document.body.parentNode.setAttribute('electron-titlebar-platform', platform);\r\n    if (platform === 'darwin') {return;}\r\n\r\n    if (titlebar.classList.contains('drag')) {\r\n        let drag = document.createElement('div');\r\n        drag.id = 'electron-titlebar-drag';\r\n        titlebar.appendChild(drag);\r\n    }\r\n\r\n    const w = electron.remote.getCurrentWindow();\r\n    if (!w.isResizable() || !w.isMaximizable()) titlebar.classList.add('no-maximize');\r\n    if (!w.isMinimizable()) titlebar.classList.add('no-minimize');\r\n\r\n    const basedir = path.resolve(path.dirname(/*require.resolve*/(/*! ./index */ \"./index.js\")), 'titlebar');\r\n\r\n    function createButton(type) {\r\n        function createImage(type, display) {\r\n            if (typeof display !== 'string') display = '';\r\n            let img = document.createElement('img');\r\n            img.style.display = display;\r\n            img.className = 'electron-titlebar-button-img-' + type;\r\n\r\n            let src;\r\n            if (platform === 'linux') src = path.resolve(basedir, type + '.svg');\r\n            else if (platform === 'win32') src = path.resolve(basedir, 'caption-buttons.svg#' + type);\r\n\r\n            //img.setAttribute('src', url.resolve('file://', src));\r\n            img.src = icon;\r\n            return img;\r\n        }\r\n        let div = document.createElement('div');\r\n        div.className = 'electron-titlebar-button electron-titlebar-button-' + type;\r\n\r\n        if (type === 'maximize') {\r\n            div.appendChild(createImage('maximize'));\r\n            div.appendChild(createImage('restore', 'none'));\r\n        } else div.appendChild(createImage(type));\r\n\r\n        return div;\r\n    }\r\n\r\n    for (let x of ['close', 'minimize', 'maximize']) titlebar.appendChild(createButton(x));\r\n\r\n    // register events\r\n    for (let elem of document.querySelectorAll('#electron-titlebar > .electron-titlebar-button, #electron-titlebar > .electron-titlebar-button img')) {\r\n        elem.addEventListener('dragstart', (e) => { e.preventDefault(); })\r\n    }\r\n\r\n    function showOrHide(elem, show) {\r\n        if (show === true) elem.style.display = '';\r\n        else elem.style.display = 'none';\r\n    }\r\n\r\n    let buttomImgMaximize = document.querySelector('#electron-titlebar > .electron-titlebar-button .electron-titlebar-button-img-maximize');\r\n    let buttomImgRestore = document.querySelector('#electron-titlebar > .electron-titlebar-button .electron-titlebar-button-img-restore');\r\n    \r\n    function maximizedBehavior(){\r\n        if(w.isMaximized()){\r\n            showOrHide(buttomImgMaximize, false);\r\n            showOrHide(buttomImgRestore, true);\r\n            if (titlebar.classList.contains('drag')){\r\n                let drag = document.getElementById('electron-titlebar-drag');\r\n                drag.style.top = 0;\r\n                drag.style.left = 0;\r\n                drag.style.height = '100%';\r\n                drag.style.width = '100%';\r\n            }\r\n        }\r\n        else{\r\n            showOrHide(buttomImgMaximize, true);\r\n            showOrHide(buttomImgRestore, false);\r\n            if (titlebar.classList.contains('drag')){\r\n                let drag = document.getElementById('electron-titlebar-drag');\r\n                drag.style.top = '8px';\r\n                drag.style.left = '8px';\r\n                drag.style.height = 'calc(100% - 8px)';\r\n                drag.style.width = 'calc(100% - 8px)';\r\n            }\r\n        }\r\n    }\r\n    maximizedBehavior();\r\n\r\n    w.on('maximize', () => {\r\n        maximizedBehavior();\r\n    });\r\n\r\n    w.on('unmaximize', () => {\r\n        maximizedBehavior();\r\n    });\r\n\r\n    // workaround for the .electron-titlebar-button is still :hover after maximize window\r\n    for (let elem of document.querySelectorAll('#electron-titlebar > .electron-titlebar-button')) {\r\n        elem.addEventListener('mouseover', () => {\r\n            elem.classList.add('hover');\r\n        });\r\n        elem.addEventListener('mouseout', () => {\r\n            elem.classList.remove('hover');\r\n        });\r\n    }\r\n\r\n    let buttonClose = document.querySelector('#electron-titlebar > .electron-titlebar-button-close');\r\n    if (buttonClose) buttonClose.addEventListener('click', () => {\r\n        w.close();\r\n    });\r\n\r\n    let butonMinimize = document.querySelector('#electron-titlebar > .electron-titlebar-button-minimize');\r\n    if (butonMinimize) butonMinimize.addEventListener('click', () => {\r\n        w.minimize();\r\n    });\r\n\r\n    let butonMaximize = document.querySelector('#electron-titlebar > .electron-titlebar-button-maximize');\r\n    if (butonMaximize) butonMaximize.addEventListener('click', () => {\r\n        if (!w.isMaximized()) w.maximize();\r\n        else w.unmaximize();\r\n    });\r\n};\r\n\r\nif (document.readyState === 'complete' || document.readyState === 'interactive') installTitlebar();\r\nelse document.addEventListener('DOMContentLoaded', installTitlebar);\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./titlebar/titlebar.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./titlebar/titlebar.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\")(false);\n// Module\nexports.push([module.i, \"/*\\r\\n *  This file is part of electron-titlebar.\\r\\n *\\r\\n *  Copyright (c) 2016 Menci <huanghaorui301@gmail.com>\\r\\n *\\r\\n *  electron-titlebar is free software: you can redistribute it and/or modify\\r\\n *  it under the terms of the GNU Lesser General Public License as published by\\r\\n *  the Free Software Foundation, either version 3 of the License, or\\r\\n *  (at your option) any later version.\\r\\n *\\r\\n *  electron-titlebar is distributed in the hope that it will be useful,\\r\\n *  but WITHOUT ANY WARRANTY; without even the implied warranty of\\r\\n *  MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the\\r\\n *  GNU Lesser General Public License for more details.\\r\\n *\\r\\n *  You should have received a copy of the GNU Lesser General Public License\\r\\n *  along with electron-titlebar. If not, see <http://www.gnu.org/licenses/>.\\r\\n */\\r\\n\\r\\n#electron-titlebar {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    left: 0;\\r\\n    right: 0;\\r\\n    width: 100%;\\r\\n    height: 29px;\\r\\n    -webkit-user-select: none;\\r\\n    cursor: default;\\r\\n    pointer-events: none;\\r\\n\\tz-index: 99;\\r\\n}\\r\\n\\r\\n#electron-titlebar > #electron-titlebar-drag {\\r\\n    -webkit-app-region: drag;\\r\\n\\tposition: absolute;\\r\\n\\twidth: 100%;\\r\\n\\theight: 100%;\\r\\n\\ttop:0;\\r\\n\\tleft:0;\\r\\n}\\r\\n\\r\\n#electron-titlebar > .electron-titlebar-button img {\\r\\n    position: absolute;\\r\\n    cursor: default;\\r\\n    -webkit-app-region: no-drag;\\r\\n}\\r\\n\\r\\n#electron-titlebar > .electron-titlebar-button {\\r\\n    position: absolute;\\r\\n    cursor: default;\\r\\n    pointer-events: all;\\r\\n    -webkit-app-region: no-drag;\\r\\n}\\r\\n\\r\\n/* no-maximize or no-minimize */\\r\\n\\r\\n#electron-titlebar.no-minimize > .electron-titlebar-button-minimize {\\r\\n    display: none !important;\\r\\n}\\r\\n\\r\\n#electron-titlebar.no-maximize > .electron-titlebar-button-maximize {\\r\\n    display: none !important;\\r\\n}\\r\\n\\r\\nhtml[electron-titlebar-platform=linux] #electron-titlebar > .electron-titlebar-button {\\r\\n    top: 5px;\\r\\n    width: 16px;\\r\\n    height: 16px;\\r\\n}\\r\\n\\r\\nhtml[electron-titlebar-platform=linux] #electron-titlebar > .electron-titlebar-button.hover {\\r\\n    background-color: rgba(196, 196, 196, 0.4);\\r\\n}\\r\\n\\r\\nhtml[electron-titlebar-platform=linux] #electron-titlebar > .electron-titlebar-button:active {\\r\\n    background-color: rgba(168, 168, 168, 0.5);\\r\\n}\\r\\n\\r\\n/* normal */\\r\\n\\r\\nhtml[electron-titlebar-platform=linux] #electron-titlebar > .electron-titlebar-button-close {\\r\\n    left: 5px;\\r\\n}\\r\\n\\r\\nhtml[electron-titlebar-platform=linux] #electron-titlebar > .electron-titlebar-button-maximize {\\r\\n    right: 5px;\\r\\n}\\r\\n\\r\\nhtml[electron-titlebar-platform=linux] #electron-titlebar > .electron-titlebar-button-minimize {\\r\\n    right: 28px;\\r\\n}\\r\\n\\r\\nhtml[electron-titlebar-platform=linux] #electron-titlebar.no-maximize > .electron-titlebar-button-minimize {\\r\\n    right: 5px;\\r\\n}\\r\\n\\r\\n/* inset */\\r\\n\\r\\nhtml[electron-titlebar-platform=linux] #electron-titlebar.inset > .electron-titlebar-button {\\r\\n    top: 12px;\\r\\n}\\r\\n\\r\\nhtml[electron-titlebar-platform=linux] #electron-titlebar.inset > .electron-titlebar-button-close {\\r\\n    left: 12px;\\r\\n}\\r\\n\\r\\nhtml[electron-titlebar-platform=linux] #electron-titlebar.inset > .electron-titlebar-button-maximize {\\r\\n    right: 12px;\\r\\n}\\r\\n\\r\\nhtml[electron-titlebar-platform=linux] #electron-titlebar.inset.no-maximize > .electron-titlebar-button-minimize {\\r\\n    right: 12px;\\r\\n}\\r\\n\\r\\nhtml[electron-titlebar-platform=linux] #electron-titlebar.inset > .electron-titlebar-button-minimize {\\r\\n    right: 40px;\\r\\n}\\r\\n\\r\\nhtml[electron-titlebar-platform=win32] #electron-titlebar > .electron-titlebar-button {\\r\\n    top: 0px;\\r\\n    width: 45px;\\r\\n    height: 29px;\\r\\n}\\r\\n\\r\\nhtml[electron-titlebar-platform=win32] #electron-titlebar > .electron-titlebar-button.hover {\\r\\n    background-color: rgba(196, 196, 196, 0.4);\\r\\n}\\r\\n\\r\\nhtml[electron-titlebar-platform=win32] #electron-titlebar > .electron-titlebar-button:active {\\r\\n    background-color: rgba(168, 168, 168, 0.5);\\r\\n}\\r\\n\\r\\nhtml[electron-titlebar-platform=win32] #electron-titlebar > .electron-titlebar-button-close {\\r\\n    right: 0px;\\r\\n}\\r\\n\\r\\nhtml[electron-titlebar-platform=win32] #electron-titlebar > .electron-titlebar-button-close.hover {\\r\\n    background-color: #e81123;\\r\\n}\\r\\n\\r\\nhtml[electron-titlebar-platform=win32] #electron-titlebar > .electron-titlebar-button-close:active {\\r\\n    background-color: rgba(232, 17, 35, 0.6);\\r\\n}\\r\\n\\r\\nhtml[electron-titlebar-platform=win32] #electron-titlebar > .electron-titlebar-button img {\\r\\n    margin-top: 8.5px;\\r\\n    margin-left: 16.5px;\\r\\n}\\r\\n\\r\\nhtml[electron-titlebar-platform=win32] #electron-titlebar > .electron-titlebar-button-close.hover img, html[electron-titlebar-platform=win32] #electron-titlebar > .electron-titlebar-button-close:active img {\\r\\n    -webkit-filter: invert(100%);\\r\\n}\\r\\n\\r\\nhtml[electron-titlebar-platform=win32] #electron-titlebar > .electron-titlebar-button-maximize {\\r\\n    right: 45px;\\r\\n}\\r\\n\\r\\nhtml[electron-titlebar-platform=win32] #electron-titlebar > .electron-titlebar-button-minimize {\\r\\n    right: 90px;\\r\\n}\\r\\n\\r\\nhtml[electron-titlebar-platform=win32] #electron-titlebar.no-maximize > .electron-titlebar-button-minimize {\\r\\n    right: 45px;\\r\\n}\\r\\n\\r\\n/* inset */\\r\\n\\r\\nhtml[electron-titlebar-platform=win32] #electron-titlebar.inset > .electron-titlebar-button img {\\r\\n    margin-top: 14px;\\r\\n    margin-left: 14px;\\r\\n}\\r\\n\\r\\nhtml[electron-titlebar-platform=win32] #electron-titlebar.inset > .electron-titlebar-button {\\r\\n    width: 40px;\\r\\n    height: 40px;\\r\\n}\\r\\n\\r\\nhtml[electron-titlebar-platform=win32] #electron-titlebar.inset > .electron-titlebar-button-maximize {\\r\\n    right: 40px;\\r\\n}\\r\\n\\r\\nhtml[electron-titlebar-platform=win32] #electron-titlebar.inset > .electron-titlebar-button-minimize {\\r\\n    right: 80px;\\r\\n}\\r\\n\\r\\nhtml[electron-titlebar-platform=win32] #electron-titlebar.inset.no-maximize > .electron-titlebar-button-minimize {\\r\\n    right: 40px;\\r\\n}\\r\\n\\r\\nhtml#electron-titlebar.inset > #electron-titlebar-custom-title {\\r\\n    line-height: 40px; \\r\\n}\\r\\n\\r\\nhtml #electron-titlebar.inset {\\r\\n    height: 40px;\\r\\n}\\r\\n\\r\\n#electron-titlebar-custom-title{\\r\\n\\twidth: calc(100% - 147px); /*buttonsize *3 + margin-left*/\\r\\n\\theight: calc(100% - 4px); \\r\\n\\ttext-align: left; \\r\\n\\tline-height: 23px; \\r\\n\\tmargin-left:12px; \\r\\n\\tmargin-top:4px; \\r\\n    font-size: 9pt;\\r\\n    overflow: hidden;\\r\\n    text-overflow: ellipsis;\\r\\n    white-space: nowrap;\\r\\n}\\r\\n\", \"\"]);\n\n\n\n//# sourceURL=webpack:///./titlebar/titlebar.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return '@media ' + item[2] + '{' + content + '}';\n      } else {\n        return content;\n      }\n    }).join('');\n  }; // import a list of modules into the list\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    for (var i = 0; i < this.length; i++) {\n      var id = this[i][0];\n\n      if (id != null) {\n        alreadyImportedModules[id] = true;\n      }\n    }\n\n    for (i = 0; i < modules.length; i++) {\n      var item = modules[i]; // skip already imported module\n      // this implementation is not 100% perfect for weird media query combinations\n      // when a module is imported multiple times with different media queries.\n      // I hope this will never occur (Hey this way we have smaller bundles)\n\n      if (item[0] == null || !alreadyImportedModules[item[0]]) {\n        if (mediaQuery && !item[2]) {\n          item[2] = mediaQuery;\n        } else if (mediaQuery) {\n          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';\n        }\n\n        list.push(item);\n      }\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || '';\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;\n  return '/*# ' + data + ' */';\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\nvar stylesInDom = {};\n\nvar\tmemoize = function (fn) {\n\tvar memo;\n\n\treturn function () {\n\t\tif (typeof memo === \"undefined\") memo = fn.apply(this, arguments);\n\t\treturn memo;\n\t};\n};\n\nvar isOldIE = memoize(function () {\n\t// Test for IE <= 9 as proposed by Browserhacks\n\t// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n\t// Tests for existence of standard globals is to allow style-loader\n\t// to operate correctly into non-standard environments\n\t// @see https://github.com/webpack-contrib/style-loader/issues/177\n\treturn window && document && document.all && !window.atob;\n});\n\nvar getTarget = function (target, parent) {\n  if (parent){\n    return parent.querySelector(target);\n  }\n  return document.querySelector(target);\n};\n\nvar getElement = (function (fn) {\n\tvar memo = {};\n\n\treturn function(target, parent) {\n                // If passing function in options, then use it for resolve \"head\" element.\n                // Useful for Shadow Root style i.e\n                // {\n                //   insertInto: function () { return document.querySelector(\"#foo\").shadowRoot }\n                // }\n                if (typeof target === 'function') {\n                        return target();\n                }\n                if (typeof memo[target] === \"undefined\") {\n\t\t\tvar styleTarget = getTarget.call(this, target, parent);\n\t\t\t// Special case to return head of iframe instead of iframe itself\n\t\t\tif (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n\t\t\t\ttry {\n\t\t\t\t\t// This will throw an exception if access to iframe is blocked\n\t\t\t\t\t// due to cross-origin restrictions\n\t\t\t\t\tstyleTarget = styleTarget.contentDocument.head;\n\t\t\t\t} catch(e) {\n\t\t\t\t\tstyleTarget = null;\n\t\t\t\t}\n\t\t\t}\n\t\t\tmemo[target] = styleTarget;\n\t\t}\n\t\treturn memo[target]\n\t};\n})();\n\nvar singleton = null;\nvar\tsingletonCounter = 0;\nvar\tstylesInsertedAtTop = [];\n\nvar\tfixUrls = __webpack_require__(/*! ./urls */ \"./node_modules/style-loader/lib/urls.js\");\n\nmodule.exports = function(list, options) {\n\tif (typeof DEBUG !== \"undefined\" && DEBUG) {\n\t\tif (typeof document !== \"object\") throw new Error(\"The style-loader cannot be used in a non-browser environment\");\n\t}\n\n\toptions = options || {};\n\n\toptions.attrs = typeof options.attrs === \"object\" ? options.attrs : {};\n\n\t// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n\t// tags it will allow on a page\n\tif (!options.singleton && typeof options.singleton !== \"boolean\") options.singleton = isOldIE();\n\n\t// By default, add <style> tags to the <head> element\n        if (!options.insertInto) options.insertInto = \"head\";\n\n\t// By default, add <style> tags to the bottom of the target\n\tif (!options.insertAt) options.insertAt = \"bottom\";\n\n\tvar styles = listToStyles(list, options);\n\n\taddStylesToDom(styles, options);\n\n\treturn function update (newList) {\n\t\tvar mayRemove = [];\n\n\t\tfor (var i = 0; i < styles.length; i++) {\n\t\t\tvar item = styles[i];\n\t\t\tvar domStyle = stylesInDom[item.id];\n\n\t\t\tdomStyle.refs--;\n\t\t\tmayRemove.push(domStyle);\n\t\t}\n\n\t\tif(newList) {\n\t\t\tvar newStyles = listToStyles(newList, options);\n\t\t\taddStylesToDom(newStyles, options);\n\t\t}\n\n\t\tfor (var i = 0; i < mayRemove.length; i++) {\n\t\t\tvar domStyle = mayRemove[i];\n\n\t\t\tif(domStyle.refs === 0) {\n\t\t\t\tfor (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();\n\n\t\t\t\tdelete stylesInDom[domStyle.id];\n\t\t\t}\n\t\t}\n\t};\n};\n\nfunction addStylesToDom (styles, options) {\n\tfor (var i = 0; i < styles.length; i++) {\n\t\tvar item = styles[i];\n\t\tvar domStyle = stylesInDom[item.id];\n\n\t\tif(domStyle) {\n\t\t\tdomStyle.refs++;\n\n\t\t\tfor(var j = 0; j < domStyle.parts.length; j++) {\n\t\t\t\tdomStyle.parts[j](item.parts[j]);\n\t\t\t}\n\n\t\t\tfor(; j < item.parts.length; j++) {\n\t\t\t\tdomStyle.parts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\t\t} else {\n\t\t\tvar parts = [];\n\n\t\t\tfor(var j = 0; j < item.parts.length; j++) {\n\t\t\t\tparts.push(addStyle(item.parts[j], options));\n\t\t\t}\n\n\t\t\tstylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};\n\t\t}\n\t}\n}\n\nfunction listToStyles (list, options) {\n\tvar styles = [];\n\tvar newStyles = {};\n\n\tfor (var i = 0; i < list.length; i++) {\n\t\tvar item = list[i];\n\t\tvar id = options.base ? item[0] + options.base : item[0];\n\t\tvar css = item[1];\n\t\tvar media = item[2];\n\t\tvar sourceMap = item[3];\n\t\tvar part = {css: css, media: media, sourceMap: sourceMap};\n\n\t\tif(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});\n\t\telse newStyles[id].parts.push(part);\n\t}\n\n\treturn styles;\n}\n\nfunction insertStyleElement (options, style) {\n\tvar target = getElement(options.insertInto)\n\n\tif (!target) {\n\t\tthrow new Error(\"Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.\");\n\t}\n\n\tvar lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];\n\n\tif (options.insertAt === \"top\") {\n\t\tif (!lastStyleElementInsertedAtTop) {\n\t\t\ttarget.insertBefore(style, target.firstChild);\n\t\t} else if (lastStyleElementInsertedAtTop.nextSibling) {\n\t\t\ttarget.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);\n\t\t} else {\n\t\t\ttarget.appendChild(style);\n\t\t}\n\t\tstylesInsertedAtTop.push(style);\n\t} else if (options.insertAt === \"bottom\") {\n\t\ttarget.appendChild(style);\n\t} else if (typeof options.insertAt === \"object\" && options.insertAt.before) {\n\t\tvar nextSibling = getElement(options.insertAt.before, target);\n\t\ttarget.insertBefore(style, nextSibling);\n\t} else {\n\t\tthrow new Error(\"[Style Loader]\\n\\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\\n Must be 'top', 'bottom', or Object.\\n (https://github.com/webpack-contrib/style-loader#insertat)\\n\");\n\t}\n}\n\nfunction removeStyleElement (style) {\n\tif (style.parentNode === null) return false;\n\tstyle.parentNode.removeChild(style);\n\n\tvar idx = stylesInsertedAtTop.indexOf(style);\n\tif(idx >= 0) {\n\t\tstylesInsertedAtTop.splice(idx, 1);\n\t}\n}\n\nfunction createStyleElement (options) {\n\tvar style = document.createElement(\"style\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\n\tif(options.attrs.nonce === undefined) {\n\t\tvar nonce = getNonce();\n\t\tif (nonce) {\n\t\t\toptions.attrs.nonce = nonce;\n\t\t}\n\t}\n\n\taddAttrs(style, options.attrs);\n\tinsertStyleElement(options, style);\n\n\treturn style;\n}\n\nfunction createLinkElement (options) {\n\tvar link = document.createElement(\"link\");\n\n\tif(options.attrs.type === undefined) {\n\t\toptions.attrs.type = \"text/css\";\n\t}\n\toptions.attrs.rel = \"stylesheet\";\n\n\taddAttrs(link, options.attrs);\n\tinsertStyleElement(options, link);\n\n\treturn link;\n}\n\nfunction addAttrs (el, attrs) {\n\tObject.keys(attrs).forEach(function (key) {\n\t\tel.setAttribute(key, attrs[key]);\n\t});\n}\n\nfunction getNonce() {\n\tif (false) {}\n\n\treturn __webpack_require__.nc;\n}\n\nfunction addStyle (obj, options) {\n\tvar style, update, remove, result;\n\n\t// If a transform function was defined, run it on the css\n\tif (options.transform && obj.css) {\n\t    result = typeof options.transform === 'function'\n\t\t ? options.transform(obj.css) \n\t\t : options.transform.default(obj.css);\n\n\t    if (result) {\n\t    \t// If transform returns a value, use that instead of the original css.\n\t    \t// This allows running runtime transformations on the css.\n\t    \tobj.css = result;\n\t    } else {\n\t    \t// If the transform function returns a falsy value, don't add this css.\n\t    \t// This allows conditional loading of css\n\t    \treturn function() {\n\t    \t\t// noop\n\t    \t};\n\t    }\n\t}\n\n\tif (options.singleton) {\n\t\tvar styleIndex = singletonCounter++;\n\n\t\tstyle = singleton || (singleton = createStyleElement(options));\n\n\t\tupdate = applyToSingletonTag.bind(null, style, styleIndex, false);\n\t\tremove = applyToSingletonTag.bind(null, style, styleIndex, true);\n\n\t} else if (\n\t\tobj.sourceMap &&\n\t\ttypeof URL === \"function\" &&\n\t\ttypeof URL.createObjectURL === \"function\" &&\n\t\ttypeof URL.revokeObjectURL === \"function\" &&\n\t\ttypeof Blob === \"function\" &&\n\t\ttypeof btoa === \"function\"\n\t) {\n\t\tstyle = createLinkElement(options);\n\t\tupdate = updateLink.bind(null, style, options);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\n\t\t\tif(style.href) URL.revokeObjectURL(style.href);\n\t\t};\n\t} else {\n\t\tstyle = createStyleElement(options);\n\t\tupdate = applyToTag.bind(null, style);\n\t\tremove = function () {\n\t\t\tremoveStyleElement(style);\n\t\t};\n\t}\n\n\tupdate(obj);\n\n\treturn function updateStyle (newObj) {\n\t\tif (newObj) {\n\t\t\tif (\n\t\t\t\tnewObj.css === obj.css &&\n\t\t\t\tnewObj.media === obj.media &&\n\t\t\t\tnewObj.sourceMap === obj.sourceMap\n\t\t\t) {\n\t\t\t\treturn;\n\t\t\t}\n\n\t\t\tupdate(obj = newObj);\n\t\t} else {\n\t\t\tremove();\n\t\t}\n\t};\n}\n\nvar replaceText = (function () {\n\tvar textStore = [];\n\n\treturn function (index, replacement) {\n\t\ttextStore[index] = replacement;\n\n\t\treturn textStore.filter(Boolean).join('\\n');\n\t};\n})();\n\nfunction applyToSingletonTag (style, index, remove, obj) {\n\tvar css = remove ? \"\" : obj.css;\n\n\tif (style.styleSheet) {\n\t\tstyle.styleSheet.cssText = replaceText(index, css);\n\t} else {\n\t\tvar cssNode = document.createTextNode(css);\n\t\tvar childNodes = style.childNodes;\n\n\t\tif (childNodes[index]) style.removeChild(childNodes[index]);\n\n\t\tif (childNodes.length) {\n\t\t\tstyle.insertBefore(cssNode, childNodes[index]);\n\t\t} else {\n\t\t\tstyle.appendChild(cssNode);\n\t\t}\n\t}\n}\n\nfunction applyToTag (style, obj) {\n\tvar css = obj.css;\n\tvar media = obj.media;\n\n\tif(media) {\n\t\tstyle.setAttribute(\"media\", media)\n\t}\n\n\tif(style.styleSheet) {\n\t\tstyle.styleSheet.cssText = css;\n\t} else {\n\t\twhile(style.firstChild) {\n\t\t\tstyle.removeChild(style.firstChild);\n\t\t}\n\n\t\tstyle.appendChild(document.createTextNode(css));\n\t}\n}\n\nfunction updateLink (link, options, obj) {\n\tvar css = obj.css;\n\tvar sourceMap = obj.sourceMap;\n\n\t/*\n\t\tIf convertToAbsoluteUrls isn't defined, but sourcemaps are enabled\n\t\tand there is no publicPath defined then lets turn convertToAbsoluteUrls\n\t\ton by default.  Otherwise default to the convertToAbsoluteUrls option\n\t\tdirectly\n\t*/\n\tvar autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;\n\n\tif (options.convertToAbsoluteUrls || autoFixUrls) {\n\t\tcss = fixUrls(css);\n\t}\n\n\tif (sourceMap) {\n\t\t// http://stackoverflow.com/a/26603875\n\t\tcss += \"\\n/*# sourceMappingURL=data:application/json;base64,\" + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + \" */\";\n\t}\n\n\tvar blob = new Blob([css], { type: \"text/css\" });\n\n\tvar oldSrc = link.href;\n\n\tlink.href = URL.createObjectURL(blob);\n\n\tif(oldSrc) URL.revokeObjectURL(oldSrc);\n}\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/addStyles.js?");

/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\n/**\n * When source maps are enabled, `style-loader` uses a link element with a data-uri to\n * embed the css on the page. This breaks all relative urls because now they are relative to a\n * bundle instead of the current page.\n *\n * One solution is to only use full urls, but that may be impossible.\n *\n * Instead, this function \"fixes\" the relative urls to be absolute according to the current page location.\n *\n * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.\n *\n */\n\nmodule.exports = function (css) {\n  // get current location\n  var location = typeof window !== \"undefined\" && window.location;\n\n  if (!location) {\n    throw new Error(\"fixUrls requires window.location\");\n  }\n\n\t// blank or null?\n\tif (!css || typeof css !== \"string\") {\n\t  return css;\n  }\n\n  var baseUrl = location.protocol + \"//\" + location.host;\n  var currentDir = baseUrl + location.pathname.replace(/\\/[^\\/]*$/, \"/\");\n\n\t// convert each url(...)\n\t/*\n\tThis regular expression is just a way to recursively match brackets within\n\ta string.\n\n\t /url\\s*\\(  = Match on the word \"url\" with any whitespace after it and then a parens\n\t   (  = Start a capturing group\n\t     (?:  = Start a non-capturing group\n\t         [^)(]  = Match anything that isn't a parentheses\n\t         |  = OR\n\t         \\(  = Match a start parentheses\n\t             (?:  = Start another non-capturing groups\n\t                 [^)(]+  = Match anything that isn't a parentheses\n\t                 |  = OR\n\t                 \\(  = Match a start parentheses\n\t                     [^)(]*  = Match anything that isn't a parentheses\n\t                 \\)  = Match a end parentheses\n\t             )  = End Group\n              *\\) = Match anything and then a close parens\n          )  = Close non-capturing group\n          *  = Match anything\n       )  = Close capturing group\n\t \\)  = Match a close parens\n\n\t /gi  = Get all matches, not the first.  Be case insensitive.\n\t */\n\tvar fixedCss = css.replace(/url\\s*\\(((?:[^)(]|\\((?:[^)(]+|\\([^)(]*\\))*\\))*)\\)/gi, function(fullMatch, origUrl) {\n\t\t// strip quotes (if they exist)\n\t\tvar unquotedOrigUrl = origUrl\n\t\t\t.trim()\n\t\t\t.replace(/^\"(.*)\"$/, function(o, $1){ return $1; })\n\t\t\t.replace(/^'(.*)'$/, function(o, $1){ return $1; });\n\n\t\t// already a full url? no change\n\t\tif (/^(#|data:|http:\\/\\/|https:\\/\\/|file:\\/\\/\\/|\\s*$)/i.test(unquotedOrigUrl)) {\n\t\t  return fullMatch;\n\t\t}\n\n\t\t// convert the url to a full url\n\t\tvar newUrl;\n\n\t\tif (unquotedOrigUrl.indexOf(\"//\") === 0) {\n\t\t  \t//TODO: should we add protocol?\n\t\t\tnewUrl = unquotedOrigUrl;\n\t\t} else if (unquotedOrigUrl.indexOf(\"/\") === 0) {\n\t\t\t// path should be relative to the base url\n\t\t\tnewUrl = baseUrl + unquotedOrigUrl; // already starts with '/'\n\t\t} else {\n\t\t\t// path should be relative to current directory\n\t\t\tnewUrl = currentDir + unquotedOrigUrl.replace(/^\\.\\//, \"\"); // Strip leading './'\n\t\t}\n\n\t\t// send back the fixed url(...)\n\t\treturn \"url(\" + JSON.stringify(newUrl) + \")\";\n\t});\n\n\t// send back the fixed css\n\treturn fixedCss;\n};\n\n\n//# sourceURL=webpack:///./node_modules/style-loader/lib/urls.js?");

/***/ }),

/***/ "./titlebar/caption-buttons.svg":
/*!**************************************!*\
  !*** ./titlebar/caption-buttons.svg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"caption-buttons.svg\";\n\n//# sourceURL=webpack:///./titlebar/caption-buttons.svg?");

/***/ }),

/***/ "./titlebar/close.svg":
/*!****************************!*\
  !*** ./titlebar/close.svg ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"close.svg\";\n\n//# sourceURL=webpack:///./titlebar/close.svg?");

/***/ }),

/***/ "./titlebar/maximize.svg":
/*!*******************************!*\
  !*** ./titlebar/maximize.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"maximize.svg\";\n\n//# sourceURL=webpack:///./titlebar/maximize.svg?");

/***/ }),

/***/ "./titlebar/minimize.svg":
/*!*******************************!*\
  !*** ./titlebar/minimize.svg ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"minimize.svg\";\n\n//# sourceURL=webpack:///./titlebar/minimize.svg?");

/***/ }),

/***/ "./titlebar/restore.svg":
/*!******************************!*\
  !*** ./titlebar/restore.svg ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"restore.svg\";\n\n//# sourceURL=webpack:///./titlebar/restore.svg?");

/***/ }),

/***/ "./titlebar/titlebar.css":
/*!*******************************!*\
  !*** ./titlebar/titlebar.css ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./titlebar.css */ \"./node_modules/css-loader/dist/cjs.js!./titlebar/titlebar.css\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./titlebar/titlebar.css?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"url\");\n\n//# sourceURL=webpack:///external_%22url%22?");

/***/ })

/******/ });