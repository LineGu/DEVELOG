webpackHotUpdate_N_E("pages/post",{

/***/ "./src/markdownController/ToolBarEditors/Abstract/TextEditor.ts":
/*!**********************************************************************!*\
  !*** ./src/markdownController/ToolBarEditors/Abstract/TextEditor.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AbstractTextEditor; });\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _CurrentInsertion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CurrentInsertion */ \"./src/markdownController/ToolBarEditors/Abstract/CurrentInsertion.ts\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar AbstractTextEditor = /*#__PURE__*/function (_CurrentInsertion) {\n  Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(AbstractTextEditor, _CurrentInsertion);\n\n  var _super = _createSuper(AbstractTextEditor);\n\n  function AbstractTextEditor() {\n    var _this;\n\n    Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, AbstractTextEditor);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"pointStartText\", void 0);\n\n    Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"pointEndText\", void 0);\n\n    Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"onClickEditButton\", function (_ref) {\n      var input = _ref.input,\n          cursorPosition = _ref.cursorPosition,\n          moveCursor = _ref.moveCursor;\n      var currentCursorIndex = cursorPosition[0];\n      var isSelected = cursorPosition[0] !== cursorPosition[1];\n\n      _this.setIndexToInsert(currentCursorIndex);\n\n      _this.setIndexToGo(currentCursorIndex);\n\n      var updatedInput = input;\n\n      if (isSelected) {\n        updatedInput = _this.insertSelectedText({\n          input: input,\n          cursorPosition: cursorPosition,\n          moveCursor: moveCursor\n        });\n      } else {\n        updatedInput = _this.insertText(input);\n      }\n\n      _this.moveCursorAfterEdit(moveCursor);\n\n      return updatedInput;\n    });\n\n    Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"_isInSameTag\", function (input, frontCursor, backCursor) {\n      return input.slice(frontCursor - _this.pointStartText.length, frontCursor).includes(_this.pointStartText) && input.slice(backCursor, backCursor + _this.pointEndText.length).includes(_this.pointEndText);\n    });\n\n    Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"_insertTextBetweenIdxs\", function (input, frontIdx, backIdx, textToInsert) {\n      var updatedInput = input.slice(0, frontIdx) + textToInsert + input.slice(backIdx);\n      return updatedInput;\n    });\n\n    Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"insertSelectedText\", function (_ref2) {\n      var input = _ref2.input,\n          cursorPosition = _ref2.cursorPosition,\n          moveCursor = _ref2.moveCursor;\n\n      var _cursorPosition = Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cursorPosition, 2),\n          frontCursor = _cursorPosition[0],\n          backCursor = _cursorPosition[1];\n\n      var selectText = input.slice(frontCursor, backCursor);\n      var updatedInput = input;\n\n      if (_this._isInSameTag(input, frontCursor, backCursor)) {\n        var sameTagIdxs = [frontCursor - _this.pointStartText.length, backCursor + _this.pointEndText.length];\n        updatedInput = _this._insertTextBetweenIdxs(input, sameTagIdxs[0], sameTagIdxs[1], selectText);\n        _this.indexToGo = [sameTagIdxs[0], sameTagIdxs[1]];\n        return updatedInput;\n      }\n\n      var textToInsert = _this.pointStartText + selectText + _this.pointEndText;\n      updatedInput = _this._insertTextBetweenIdxs(input, frontCursor, backCursor, textToInsert);\n      var idxToGo = [frontCursor + _this.pointStartText.length, frontCursor + _this.pointStartText.length + selectText.length];\n      _this.indexToGo = [frontCursor + _this.pointStartText.length, frontCursor + _this.pointStartText.length + selectText.length];\n      return updatedInput;\n    });\n\n    return _this;\n  }\n\n  return AbstractTextEditor;\n}(_CurrentInsertion__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21hcmtkb3duQ29udHJvbGxlci9Ub29sQmFyRWRpdG9ycy9BYnN0cmFjdC9UZXh0RWRpdG9yLnRzPzhjM2MiXSwibmFtZXMiOlsiQWJzdHJhY3RUZXh0RWRpdG9yIiwiaW5wdXQiLCJjdXJzb3JQb3NpdGlvbiIsIm1vdmVDdXJzb3IiLCJjdXJyZW50Q3Vyc29ySW5kZXgiLCJpc1NlbGVjdGVkIiwic2V0SW5kZXhUb0luc2VydCIsInNldEluZGV4VG9HbyIsInVwZGF0ZWRJbnB1dCIsImluc2VydFNlbGVjdGVkVGV4dCIsImluc2VydFRleHQiLCJtb3ZlQ3Vyc29yQWZ0ZXJFZGl0IiwiZnJvbnRDdXJzb3IiLCJiYWNrQ3Vyc29yIiwic2xpY2UiLCJwb2ludFN0YXJ0VGV4dCIsImxlbmd0aCIsImluY2x1ZGVzIiwicG9pbnRFbmRUZXh0IiwiZnJvbnRJZHgiLCJiYWNrSWR4IiwidGV4dFRvSW5zZXJ0Iiwic2VsZWN0VGV4dCIsIl9pc0luU2FtZVRhZyIsInNhbWVUYWdJZHhzIiwiX2luc2VydFRleHRCZXR3ZWVuSWR4cyIsImluZGV4VG9HbyIsImlkeFRvR28iLCJDdXJyZW50SW5zZXJ0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0lBRThCQSxrQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7b1dBS0QsZ0JBQXVFO0FBQUEsVUFBcEVDLEtBQW9FLFFBQXBFQSxLQUFvRTtBQUFBLFVBQTdEQyxjQUE2RCxRQUE3REEsY0FBNkQ7QUFBQSxVQUE3Q0MsVUFBNkMsUUFBN0NBLFVBQTZDO0FBQ2hHLFVBQU1DLGtCQUFrQixHQUFHRixjQUFjLENBQUMsQ0FBRCxDQUF6QztBQUNBLFVBQU1HLFVBQVUsR0FBR0gsY0FBYyxDQUFDLENBQUQsQ0FBZCxLQUFzQkEsY0FBYyxDQUFDLENBQUQsQ0FBdkQ7O0FBQ0EsWUFBS0ksZ0JBQUwsQ0FBc0JGLGtCQUF0Qjs7QUFDQSxZQUFLRyxZQUFMLENBQWtCSCxrQkFB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R0FBRyxNQUFLRyxjQUFMLENBQW9CQyxNQUFsQyxHQUEyQ00sVUFBVSxDQUFDTixNQUZ2QyxDQUFqQjtBQUlBLGFBQU9SLFlBQVA7QUFDRCxLOzs7Ozs7RUF0RHNEb0IseUQiLCJmaWxlIjoiLi9zcmMvbWFya2Rvd25Db250cm9sbGVyL1Rvb2xCYXJFZGl0b3JzL0Fic3RyYWN0L1RleHRFZGl0b3IudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJT25DbGlja0VkaXRCdXR0b24gfSBmcm9tICdAdHlwZXMnO1xuaW1wb3J0IEN1cnJlbnRJbnNlcnRpb24gZnJvbSAnLi9DdXJyZW50SW5zZXJ0aW9uJztcblxuZXhwb3J0IGRlZmF1bHQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RUZXh0RWRpdG9yIGV4dGVuZHMgQ3VycmVudEluc2VydGlvbiB7XG4gIHByb3RlY3RlZCBhYnN0cmFjdCBwb2ludFN0YXJ0VGV4dDogc3RyaW5nO1xuXG4gIHByb3RlY3RlZCBhYnN0cmFjdCBwb2ludEVuZFRleHQ6IHN0cmluZztcblxuICBwdWJsaWMgb25DbGlja0VkaXRCdXR0b24gPSAoeyBpbnB1dCwgY3Vyc29yUG9zaXRpb24sIG1vdmVDdXJzb3IgfTogSU9uQ2xpY2tFZGl0QnV0dG9uKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCBjdXJyZW50Q3Vyc29ySW5kZXggPSBjdXJzb3JQb3NpdGlvblswXTtcbiAgICBjb25zdCBpc1NlbGVjdGVkID0gY3Vyc29yUG9zaXRpb25bMF0gIT09IGN1cnNvclBvc2l0aW9uWzFdO1xuICAgIHRoaXMuc2V0SW5kZXhUb0luc2VydChjdXJyZW50Q3Vyc29ySW5kZXgpO1xuICAgIHRoaXMuc2V0SW5kZXhUb0dvKGN1cnJlbnRDdXJzb3JJbmRleCk7XG4gICAgbGV0IHVwZGF0ZWRJbnB1dCA9IGlucHV0O1xuICAgIGlmIChpc1NlbGVjdGVkKSB7XG4gICAgICB1cGRhdGVkSW5wdXQgPSB0aGlzLmluc2VydFNlbGVjdGVkVGV4dCh7IGlucHV0LCBjdXJzb3JQb3NpdGlvbiwgbW92ZUN1cnNvciB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlZElucHV0ID0gdGhpcy5pbnNlcnRUZXh0KGlucHV0KTtcbiAgICB9XG4gICAgdGhpcy5tb3ZlQ3Vyc29yQWZ0ZXJFZGl0KG1vdmVDdXJzb3IpO1xuICAgIHJldHVybiB1cGRhdGVkSW5wdXQ7XG4gIH07XG5cbiAgcHJpdmF0ZSBfaXNJblNhbWVUYWcgPSAoaW5wdXQ6IHN0cmluZywgZnJvbnRDdXJzb3I6IG51bWJlciwgYmFja0N1cnNvcjogbnVtYmVyKTogYm9vbGVhbiA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgIGlucHV0LnNsaWNlKGZyb250Q3Vyc29yIC0gdGhpcy5wb2ludFN0YXJ0VGV4dC5sZW5ndGgsIGZyb250Q3Vyc29yKS5pbmNsdWRlcyh0aGlzLnBvaW50U3RhcnRUZXh0KSAmJlxuICAgICAgaW5wdXQuc2xpY2UoYmFja0N1cnNvciwgYmFja0N1cnNvciArIHRoaXMucG9pbnRFbmRUZXh0Lmxlbmd0aCkuaW5jbHVkZXModGhpcy5wb2ludEVuZFRleHQpXG4gICAgKTtcbiAgfTtcblxuICBwcml2YXRlIF9pbnNlcnRUZXh0QmV0d2VlbklkeHMgPSAoaW5wdXQ6IHN0cmluZywgZnJvbnRJZHg6IG51bWJlciwgYmFja0lkeDogbnVtYmVyLCB0ZXh0VG9JbnNlcnQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgdXBkYXRlZElucHV0ID0gaW5wdXQuc2xpY2UoMCwgZnJvbnRJZHgpICsgdGV4dFRvSW5zZXJ0ICsgaW5wdXQuc2xpY2UoYmFja0lkeCk7XG4gICAgcmV0dXJuIHVwZGF0ZWRJbnB1dDtcbiAgfTtcblxuICBwcm90ZWN0ZWQgaW5zZXJ0U2VsZWN0ZWRUZXh0ID0gKHsgaW5wdXQsIGN1cnNvclBvc2l0aW9uLCBtb3ZlQ3Vyc29yIH06IElPbkNsaWNrRWRpdEJ1dHRvbik6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgW2Zyb250Q3Vyc29yLCBiYWNrQ3Vyc29yXSA9IGN1cnNvclBvc2l0aW9uO1xuICAgIGNvbnN0IHNlbGVjdFRleHQgPSBpbnB1dC5zbGljZShmcm9udEN1cnNvciwgYmFja0N1cnNvcik7XG5cbiAgICBsZXQgdXBkYXRlZElucHV0ID0gaW5wdXQ7XG4gICAgaWYgKHRoaXMuX2lzSW5TYW1lVGFnKGlucHV0LCBmcm9udEN1cnNvciwgYmFja0N1cnNvcikpIHtcbiAgICAgIGNvbnN0IHNhbWVUYWdJZHhzID0gW2Zyb250Q3Vyc29yIC0gdGhpcy5wb2ludFN0YXJ0VGV4dC5sZW5ndGgsIGJhY2tDdXJzb3IgKyB0aGlzLnBvaW50RW5kVGV4dC5sZW5ndGhdO1xuICAgICAgdXBkYXRlZElucHV0ID0gdGhpcy5faW5zZXJ0VGV4dEJldHdlZW5JZHhzKGlucHV0LCBzYW1lVGFnSWR4c1swXSwgc2FtZVRhZ0lkeHNbMV0sIHNlbGVjdFRleHQpO1xuICAgICAgdGhpcy5pbmRleFRvR28gPSBbc2FtZVRhZ0lkeHNbMF0sIHNhbWVUYWdJZHhzWzFdXTtcbiAgICAgIHJldHVybiB1cGRhdGVkSW5wdXQ7XG4gICAgfVxuICAgIGNvbnN0IHRleHRUb0luc2VydCA9IHRoaXMucG9pbnRTdGFydFRleHQgKyBzZWxlY3RUZXh0ICsgdGhpcy5wb2ludEVuZFRleHQ7XG4gICAgdXBkYXRlZElucHV0ID0gdGhpcy5faW5zZXJ0VGV4dEJldHdlZW5JZHhzKGlucHV0LCBmcm9udEN1cnNvciwgYmFja0N1cnNvciwgdGV4dFRvSW5zZXJ0KTtcbiAgICBjb25zdCBpZHhUb0dvID0gW1xuICAgICAgZnJvbnRDdXJzb3IgKyB0aGlzLnBvaW50U3RhcnRUZXh0Lmxlbmd0aCxcbiAgICAgIGZyb250Q3Vyc29yICsgdGhpcy5wb2ludFN0YXJ0VGV4dC5sZW5ndGggKyBzZWxlY3RUZXh0Lmxlbmd0aCxcbiAgICBdO1xuICAgIHRoaXMuaW5kZXhUb0dvID0gW1xuICAgICAgZnJvbnRDdXJzb3IgKyB0aGlzLnBvaW50U3RhcnRUZXh0Lmxlbmd0aCxcbiAgICAgIGZyb250Q3Vyc29yICsgdGhpcy5wb2ludFN0YXJ0VGV4dC5sZW5ndGggKyBzZWxlY3RUZXh0Lmxlbmd0aCxcbiAgICBdO1xuICAgIHJldHVybiB1cGRhdGVkSW5wdXQ7XG4gIH07XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/markdownController/ToolBarEditors/Abstract/TextEditor.ts\n");

/***/ })

})