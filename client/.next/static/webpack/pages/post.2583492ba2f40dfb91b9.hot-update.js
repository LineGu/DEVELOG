webpackHotUpdate_N_E("pages/post",{

/***/ "./src/markdownController/ToolBarEditors/Editors/Head.ts":
/*!***************************************************************!*\
  !*** ./src/markdownController/ToolBarEditors/Editors/Head.ts ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return HeadEditor; });\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _Abstract_LineEditor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Abstract/LineEditor */ \"./src/markdownController/ToolBarEditors/Abstract/LineEditor.ts\");\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar HeadEditor = /*#__PURE__*/function (_AbstractLineEditor) {\n  Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(HeadEditor, _AbstractLineEditor);\n\n  var _super = _createSuper(HeadEditor);\n\n  function HeadEditor(Priority) {\n    var _this;\n\n    Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, HeadEditor);\n\n    _this = _super.call(this);\n\n    Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"similarText\", ['# ', '## ', '### ']);\n\n    Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"idxsToDel\", [0, 0]);\n\n    Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"textToInsert\", void 0);\n\n    Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"indexToInsert\", void 0);\n\n    Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"indexToGo\", void 0);\n\n    Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"delSimilarText\", function (input) {\n      var updatedInput = input.slice(0, _this.idxsToDel[0]) + input.slice(_this.idxsToDel[1]);\n    });\n\n    Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"hasSimilarText\", function (input) {\n      var frontPartToInsert = input.slice(_this.indexToInsert, 4);\n      var hasSimilar = false;\n\n      _this.similarText.forEach(function (text) {\n        if (frontPartToInsert.includes(text)) {\n          hasSimilar = true;\n          _this.idxsToDel = [_this.indexToInsert, _this.indexToInsert + text.length];\n        }\n      });\n\n      return hasSimilar;\n    });\n\n    _this.textToInsert = \"\".concat('#'.repeat(Priority), \" \");\n    _this.indexToInsert = 0;\n    _this.indexToGo = [0, 0];\n    return _this;\n  }\n\n  return HeadEditor;\n}(_Abstract_LineEditor__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21hcmtkb3duQ29udHJvbGxlci9Ub29sQmFyRWRpdG9ycy9FZGl0b3JzL0hlYWQudHM/NjYyNiJdLCJuYW1lcyI6WyJIZWFkRWRpdG9yIiwiUHJpb3JpdHkiLCJpbnB1dCIsInVwZGF0ZWRJbnB1dCIsInNsaWNlIiwiaWR4c1RvRGVsIiwiZnJvbnRQYXJ0VG9JbnNlcnQiLCJpbmRleFRvSW5zZXJ0IiwiaGFzU2ltaWxhciIsInNpbWlsYXJUZXh0IiwiZm9yRWFjaCIsInRleHQiLCJpbmNsdWRlcyIsImxlbmd0aCIsInRleHRUb0luc2VydCIsInJlcGVhdCIsImluZGV4VG9HbyIsIkFic3RyYWN0TGluZUVkaXRvciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7SUFFcUJBLFU7Ozs7O0FBV25CLHNCQUFZQyxRQUFaLEVBQThCO0FBQUE7O0FBQUE7O0FBQzVCOztBQUQ0Qiw4VkFWTixDQUFDLElBQUQsRUFBTyxLQUFQLEVBQWMsTUFBZCxDQVVNOztBQUFBLDRWQVJSLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FRUTs7QUFBQTs7QUFBQTs7QUFBQTs7QUFBQSxpV0FPSCxVQUFDQyxLQUFELEVBQTJCO0FBQ3BELFVBQU1DLFlBQVksR0FBR0QsS0FBSyxDQUFDRSxLQUFOLENBQVksQ0FBWixFQUFlLE1BQUtDLFNBQUwsQ0FBZSxDQUFmLENBQWYsSUFBb0NILEtBQUssQ0FBQ0UsS0FBTixDQUFZLE1BQUtDLFNBQUwsQ0FBZSxDQUFmLENBQVosQ0FBekQ7QUFDRCxLQVQ2Qjs7QUFBQSxpV0FXSCxVQUFDSCxLQUFELEVBQTRCO0FBQ3JELFVBQU1JLGlCQUFpQixHQUFHSixLQUFLLENBQUNFLEtBQU4sQ0FBWSxNQUFLRyxhQUFqQixFQUFnQyxDQUFoQyxDQUExQjtBQUNBLFVBQUlDLFVBQVUsR0FBRyxLQUFqQjs7QUFDQSxZQUFLQyxXQUFMLENBQWlCQyxPQUFqQixDQUF5QixVQUFDQyxJQUFELEVBQVU7QUFDakMsWUFBSUwsaUJBQWlCLENBQUNNLFFBQWxCLENBQTJCRCxJQUEzQixDQUFKLEVBQXNDO0FBQ3BDSCxvQkFBVSxHQUFHLElBQWI7QUFDQSxnQkFBS0gsU0FBTCxHQUFpQixDQUFDLE1BQUtFLGFBQU4sRUFBcUIsTUFBS0EsYUFBTCxHQUFxQkksSUFBSSxDQUFDRSxNQUEvQyxDQUFqQjtBQUNEO0FBQ0YsT0FMRDs7QUFNQSxhQUFPTCxVQUFQO0FBQ0QsS0FyQjZCOztBQUU1QixVQUFLTSxZQUFMLGFBQXVCLElBQUlDLE1BQUosQ0FBV2QsUUFBWCxDQUF2QjtBQUNBLFVBQUtNLGFBQUwsR0FBcUIsQ0FBckI7QUFDQSxVQUFLUyxTQUFMLEdBQWlCLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBakI7QUFKNEI7QUFLN0I7OztFQWhCcUNDLDREIiwiZmlsZSI6Ii4vc3JjL21hcmtkb3duQ29udHJvbGxlci9Ub29sQmFyRWRpdG9ycy9FZGl0b3JzL0hlYWQudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWJzdHJhY3RMaW5lRWRpdG9yIGZyb20gJy4uL0Fic3RyYWN0L0xpbmVFZGl0b3InO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkRWRpdG9yIGV4dGVuZHMgQWJzdHJhY3RMaW5lRWRpdG9yIHtcbiAgcHJvdGVjdGVkIHNpbWlsYXJUZXh0ID0gWycjICcsICcjIyAnLCAnIyMjICddO1xuXG4gIHByb3RlY3RlZCBpZHhzVG9EZWwgPSBbMCwgMF07XG5cbiAgcHJvdGVjdGVkIHRleHRUb0luc2VydDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCBpbmRleFRvSW5zZXJ0OiBudW1iZXI7XG5cbiAgcHJvdGVjdGVkIGluZGV4VG9HbzogbnVtYmVyW107XG5cbiAgY29uc3RydWN0b3IoUHJpb3JpdHk6IG51bWJlcikge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy50ZXh0VG9JbnNlcnQgPSBgJHsnIycucmVwZWF0KFByaW9yaXR5KX0gYDtcbiAgICB0aGlzLmluZGV4VG9JbnNlcnQgPSAwO1xuICAgIHRoaXMuaW5kZXhUb0dvID0gWzAsIDBdO1xuICB9XG5cbiAgcHJvdGVjdGVkIGRlbFNpbWlsYXJUZXh0ID0gKGlucHV0OiBzdHJpbmcpOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IHVwZGF0ZWRJbnB1dCA9IGlucHV0LnNsaWNlKDAsIHRoaXMuaWR4c1RvRGVsWzBdKSArIGlucHV0LnNsaWNlKHRoaXMuaWR4c1RvRGVsWzFdKTtcbiAgfTtcblxuICBwcm90ZWN0ZWQgaGFzU2ltaWxhclRleHQgPSAoaW5wdXQ6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xuICAgIGNvbnN0IGZyb250UGFydFRvSW5zZXJ0ID0gaW5wdXQuc2xpY2UodGhpcy5pbmRleFRvSW5zZXJ0LCA0KTtcbiAgICBsZXQgaGFzU2ltaWxhciA9IGZhbHNlO1xuICAgIHRoaXMuc2ltaWxhclRleHQuZm9yRWFjaCgodGV4dCkgPT4ge1xuICAgICAgaWYgKGZyb250UGFydFRvSW5zZXJ0LmluY2x1ZGVzKHRleHQpKSB7XG4gICAgICAgIGhhc1NpbWlsYXIgPSB0cnVlO1xuICAgICAgICB0aGlzLmlkeHNUb0RlbCA9IFt0aGlzLmluZGV4VG9JbnNlcnQsIHRoaXMuaW5kZXhUb0luc2VydCArIHRleHQubGVuZ3RoXTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gaGFzU2ltaWxhcjtcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/markdownController/ToolBarEditors/Editors/Head.ts\n");

/***/ })

})