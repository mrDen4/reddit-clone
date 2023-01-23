webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardList/CardItem/Menu/MenuList/menulist.less":
/*!*********************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/less-loader/dist/cjs.js!./src/shared/CardList/CardItem/Menu/MenuList/menulist.less ***!
  \*********************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \".menulist__menu-list--2GyAa {\\n  background: #fff;\\n  padding: 12px 20px;\\n}\\n.menulist__menu-list__item--1Qizg {\\n  display: flex;\\n  align-items: center;\\n}\\n.menulist__menu-list__item--1Qizg svg {\\n  margin-right: 5px;\\n}\\n.menulist__menu-list__item--1Qizg:last-child {\\n  background: var(--greyD9);\\n}\\n\", \"\"]);\n// Exports\nexports.locals = {\n\t\"menu-list\": \"menulist__menu-list--2GyAa\",\n\t\"menu-list__item\": \"menulist__menu-list__item--1Qizg\"\n};\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/shared/CardList/CardItem/Menu/MenuList/menulist.less?./node_modules/css-loader/dist/cjs.js??ref--5-1!./node_modules/less-loader/dist/cjs.js");

/***/ }),

/***/ "./src/shared/CardList/CardItem/Menu/MenuList/MenuList.tsx":
/*!*****************************************************************!*\
  !*** ./src/shared/CardList/CardItem/Menu/MenuList/MenuList.tsx ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\nvar __importDefault = (this && this.__importDefault) || function (mod) {\n    return (mod && mod.__esModule) ? mod : { \"default\": mod };\n};\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.MenuList = void 0;\nvar react_1 = __importDefault(__webpack_require__(/*! react */ \"./node_modules/react/index.js\"));\nvar icons_1 = __webpack_require__(/*! ../../../../icons */ \"./src/shared/icons/index.ts\");\nvar menulist_less_1 = __importDefault(__webpack_require__(/*! ./menulist.less */ \"./src/shared/CardList/CardItem/Menu/MenuList/menulist.less\"));\nfunction MenuList() {\n    return (react_1.default.createElement(\"ul\", { className: menulist_less_1.default.menu - list },\n        react_1.default.createElement(\"li\", null,\n            react_1.default.createElement(icons_1.CloseIcon, null),\n            \"\\u0421\\u043A\\u0440\\u044B\\u0442\\u044C\"),\n        react_1.default.createElement(\"li\", null,\n            react_1.default.createElement(icons_1.ReportIcon, null),\n            \"\\u041F\\u043E\\u0436\\u0430\\u043B\\u043E\\u0432\\u0430\\u0442\\u044C\\u0441\\u044F\"),\n        react_1.default.createElement(\"li\", null, \"\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C\")));\n}\nexports.MenuList = MenuList;\n\n\n//# sourceURL=webpack:///./src/shared/CardList/CardItem/Menu/MenuList/MenuList.tsx?");

/***/ }),

/***/ "./src/shared/CardList/CardItem/Menu/MenuList/menulist.less":
/*!******************************************************************!*\
  !*** ./src/shared/CardList/CardItem/Menu/MenuList/menulist.less ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../../node_modules/less-loader/dist/cjs.js!./menulist.less */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardList/CardItem/Menu/MenuList/menulist.less\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\nif (true) {\n  if (!content.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === 'default') {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var oldLocals = content.locals;\n\n    module.hot.accept(\n      /*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../../node_modules/less-loader/dist/cjs.js!./menulist.less */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardList/CardItem/Menu/MenuList/menulist.less\",\n      function () {\n        content = __webpack_require__(/*! !../../../../../../node_modules/css-loader/dist/cjs.js??ref--5-1!../../../../../../node_modules/less-loader/dist/cjs.js!./menulist.less */ \"./node_modules/css-loader/dist/cjs.js?!./node_modules/less-loader/dist/cjs.js!./src/shared/CardList/CardItem/Menu/MenuList/menulist.less\");\n\n              content = content.__esModule ? content.default : content;\n\n              if (typeof content === 'string') {\n                content = [[module.i, content, '']];\n              }\n\n              if (!isEqualLocals(oldLocals, content.locals)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = content.locals;\n\n              update(content);\n      }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/shared/CardList/CardItem/Menu/MenuList/menulist.less?");

/***/ })

})