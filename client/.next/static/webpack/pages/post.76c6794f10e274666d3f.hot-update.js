webpackHotUpdate_N_E("pages/post",{

/***/ "./src/markdownController/Controller/index.ts":
/*!****************************************************!*\
  !*** ./src/markdownController/Controller/index.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Controller; });\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _blank__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blank */ \"./src/markdownController/Controller/blank.ts\");\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar Controller = /*#__PURE__*/function (_blankController) {\n  Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Controller, _blankController);\n\n  var _super = _createSuper(Controller);\n\n  function Controller() {\n    var _this;\n\n    Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Controller);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"applyBlankToMarkdown\", function (input) {\n      var textsByLine = _this.devideTextsByLine(input);\n\n      var updatedTexts = _this.applyBlank(textsByLine);\n\n      console.log(updatedTexts);\n      updatedTexts = _this.delInvalidBlank(textsByLine);\n      return _this.joinTexts(updatedTexts);\n    });\n\n    return _this;\n  }\n\n  return Controller;\n}(_blank__WEBPACK_IMPORTED_MODULE_6__[\"default\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21hcmtkb3duQ29udHJvbGxlci9Db250cm9sbGVyL2luZGV4LnRzPzRiZjMiXSwibmFtZXMiOlsiQ29udHJvbGxlciIsImlucHV0IiwidGV4dHNCeUxpbmUiLCJkZXZpZGVUZXh0c0J5TGluZSIsInVwZGF0ZWRUZXh0cyIsImFwcGx5QmxhbmsiLCJjb25zb2xlIiwibG9nIiwiZGVsSW52YWxpZEJsYW5rIiwiam9pblRleHRzIiwiYmxhbmtDb250cm9sbGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztJQUVxQkEsVTs7Ozs7Ozs7Ozs7Ozs7Ozt1V0FLVyxVQUFDQyxLQUFELEVBQTJCO0FBQ3ZELFVBQU1DLFdBQXFCLEdBQUcsTUFBS0MsaUJBQUwsQ0FBdUJGLEtBQXZCLENBQTlCOztBQUVBLFVBQUlHLFlBQXNCLEdBQUcsTUFBS0MsVUFBTCxDQUFnQkgsV0FBaEIsQ0FBN0I7O0FBQ0FJLGFBQU8sQ0FBQ0MsR0FBUixDQUFZSCxZQUFaO0FBQ0FBLGtCQUFZLEdBQUcsTUFBS0ksZUFBTCxDQUFxQk4sV0FBckIsQ0FBZjtBQUVBLGFBQU8sTUFBS08sU0FBTCxDQUFlTCxZQUFmLENBQVA7QUFDRCxLOzs7Ozs7RUFicUNNLDhDIiwiZmlsZSI6Ii4vc3JjL21hcmtkb3duQ29udHJvbGxlci9Db250cm9sbGVyL2luZGV4LnRzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJsYW5rQ29udHJvbGxlciBmcm9tICcuL2JsYW5rJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udHJvbGxlciBleHRlbmRzIGJsYW5rQ29udHJvbGxlciB7XG4gIC8vIGNvbnN0cnVjdG9yKCkge1xuICAvLyAgIHN1cGVyKCk7XG4gIC8vIH1cblxuICBwdWJsaWMgYXBwbHlCbGFua1RvTWFya2Rvd24gPSAoaW5wdXQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgdGV4dHNCeUxpbmU6IHN0cmluZ1tdID0gdGhpcy5kZXZpZGVUZXh0c0J5TGluZShpbnB1dCk7XG5cbiAgICBsZXQgdXBkYXRlZFRleHRzOiBzdHJpbmdbXSA9IHRoaXMuYXBwbHlCbGFuayh0ZXh0c0J5TGluZSk7XG4gICAgY29uc29sZS5sb2codXBkYXRlZFRleHRzKTtcbiAgICB1cGRhdGVkVGV4dHMgPSB0aGlzLmRlbEludmFsaWRCbGFuayh0ZXh0c0J5TGluZSk7XG5cbiAgICByZXR1cm4gdGhpcy5qb2luVGV4dHModXBkYXRlZFRleHRzKTtcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/markdownController/Controller/index.ts\n");

/***/ })

})