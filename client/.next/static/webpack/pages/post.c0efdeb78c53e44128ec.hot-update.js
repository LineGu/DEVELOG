webpackHotUpdate_N_E("pages/post",{

/***/ "./src/markdownController/ToolBarEditors/Abstract/TextEditor.ts":
/*!**********************************************************************!*\
  !*** ./src/markdownController/ToolBarEditors/Abstract/TextEditor.ts ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return AbstractTextEditor; });\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var _CurrentInsertion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CurrentInsertion */ \"./src/markdownController/ToolBarEditors/Abstract/CurrentInsertion.ts\");\n\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\nvar AbstractTextEditor = /*#__PURE__*/function (_CurrentInsertion) {\n  Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(AbstractTextEditor, _CurrentInsertion);\n\n  var _super = _createSuper(AbstractTextEditor);\n\n  function AbstractTextEditor() {\n    var _this;\n\n    Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(this, AbstractTextEditor);\n\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n\n    _this = _super.call.apply(_super, [this].concat(args));\n\n    Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"pointStartText\", void 0);\n\n    Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"pointEndText\", void 0);\n\n    Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"onClickEditButton\", function (_ref) {\n      var input = _ref.input,\n          cursorPosition = _ref.cursorPosition,\n          moveCursor = _ref.moveCursor;\n      var currentCursorIndex = cursorPosition[0];\n      var isSelected = cursorPosition[0] !== cursorPosition[1];\n\n      _this.setIndexToInsert(currentCursorIndex);\n\n      _this.setIndexToGo(currentCursorIndex);\n\n      if (isSelected) _this.delSelectText(input, cursorPosition);\n\n      var updatedText = _this.insertText(input);\n\n      _this.moveCursorAfterEdit(moveCursor);\n\n      return updatedText;\n    });\n\n    Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"onClickSelectedText\", function (_ref2) {\n      var input = _ref2.input,\n          cursorPosition = _ref2.cursorPosition,\n          moveCursor = _ref2.moveCursor;\n\n      var _cursorPosition = Object(_Users_hyungu_Desktop_front_dev_projects_develog_client_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(cursorPosition, 2),\n          frontCursor = _cursorPosition[0],\n          backCursor = _cursorPosition[1];\n\n      var selectText = input.slice(frontCursor, backCursor);\n      var isInSameTag = input.slice(frontCursor - _this.pointStartText.length, frontCursor).includes(_this.pointStartText) && input.slice(backCursor, backCursor + _this.pointEndText.length).includes(_this.pointEndText);\n      var updatedInput = input;\n\n      if (isInSameTag) {\n        updatedInput = input.slice(0, frontCursor - _this.pointStartText.length) + selectText + input.slice(backCursor + _this.pointStartText.length);\n\n        _this.moveCursorAfterEdit(moveCursor);\n\n        return updatedInput;\n      }\n\n      updatedInput = input.slice(0, frontCursor) + _this.pointStartText + selectText + _this.pointEndText + input.slice(backCursor);\n\n      _this.moveCursorAfterEdit(moveCursor);\n\n      return updatedInput;\n    });\n\n    return _this;\n  }\n\n  return AbstractTextEditor;\n}(_CurrentInsertion__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\n\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL21hcmtkb3duQ29udHJvbGxlci9Ub29sQmFyRWRpdG9ycy9BYnN0cmFjdC9UZXh0RWRpdG9yLnRzPzhjM2MiXSwibmFtZXMiOlsiQWJzdHJhY3RUZXh0RWRpdG9yIiwiaW5wdXQiLCJjdXJzb3JQb3NpdGlvbiIsIm1vdmVDdXJzb3IiLCJjdXJyZW50Q3Vyc29ySW5kZXgiLCJpc1NlbGVjdGVkIiwic2V0SW5kZXhUb0luc2VydCIsInNldEluZGV4VG9HbyIsImRlbFNlbGVjdFRleHQiLCJ1cGRhdGVkVGV4dCIsImluc2VydFRleHQiLCJtb3ZlQ3Vyc29yQWZ0ZXJFZGl0IiwiZnJvbnRDdXJzb3IiLCJiYWNrQ3Vyc29yIiwic2VsZWN0VGV4dCIsInNsaWNlIiwiaXNJblNhbWVUYWciLCJwb2ludFN0YXJ0VGV4dCIsImxlbmd0aCIsImluY2x1ZGVzIiwicG9pbnRFbmRUZXh0IiwidXBkYXRlZElucHV0IiwiQ3VycmVudEluc2VydGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztJQUU4QkEsa0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O29XQUtELGdCQUF1RTtBQUFBLFVBQXBFQyxLQUFvRSxRQUFwRUEsS0FBb0U7QUFBQSxVQUE3REMsY0FBNkQsUUFBN0RBLGNBQTZEO0FBQUEsVUFBN0NDLFVBQTZDLFFBQTdDQSxVQUE2QztBQUNoRyxVQUFNQyxrQkFBa0IsR0FBR0YsY0FBYyxDQUFDLENBQUQsQ0FBekM7QUFDQSxVQUFNRyxVQUFVLEdBQUdILGNBQWMsQ0FBQyxDQUFELENBQWQsS0FBc0JBLGNBQWMsQ0FBQyxDQUFELENBQXZEOztBQUNBLFlBQUtJLGdCQUFMLENBQXNCRixrQkFBdEI7O0FBQ0EsWUFBS0csWUFBTCxDQUFrQkgsa0JBQWxCOztBQUVBLFVBQUlDLFVBQUosRUFBZ0IsTUFBS0csYUFBTCxDQUFtQlAsS0FBbkIsRUFBMEJDLGNBQTFCOztBQUNoQixVQUFNTyxXQUFXLEdBQUcsTUFBS0MsVUFBTCxDQUFnQlQsS0FBaEIsQ0FBcEI7O0FBQ0EsWUFBS1UsbUJBQUwsQ0FBeUJSLFVBQXpCOztBQUVBLGFBQU9NLFdBQVA7QUFDRCxLOztzV0FFK0IsaUJBQXVFO0FBQUEsVUFBcEVSLEtBQW9FLFNBQXBFQSxLQUFvRTtBQUFBLFVBQTdEQyxjQUE2RCxTQUE3REEsY0FBNkQ7QUFBQSxVQUE3Q0MsVUFBNkMsU0FBN0NBLFVBQTZDOztBQUFBLHlMQUNuRUQsY0FEbUU7QUFBQSxVQUM5RlUsV0FEOEY7QUFBQSxVQUNqRkMsVUFEaUY7O0FBRXJHLFVBQU1DLFVBQVUsR0FBR2IsS0FBSyxDQUFDYyxLQUFOLENBQVlILFdBQVosRUFBeUJDLFVBQXpCLENBQW5CO0FBQ0EsVUFBTUcsV0FBVyxHQUNmZixLQUFLLENBQUNjLEtBQU4sQ0FBWUgsV0FBVyxHQUFHLE1BQUtLLGNBQUwsQ0FBb0JDLE1BQTlDLEVBQXNETixXQUF0RCxFQUFtRU8sUUFBbkUsQ0FBNEUsTUFBS0YsY0FBakYsS0FDQWhCLEtBQUssQ0FBQ2MsS0FBTixDQUFZRixVQUFaLEVBQXdCQSxVQUFVLEdBQUcsTUFBS08sWUFBTCxDQUFrQkYsTUFBdkQsRUFBK0RDLFFBQS9ELENBQXdFLE1BQUtDLFlBQTdFLENBRkY7QUFJQSxVQUFJQyxZQUFZLEdBQUdwQixLQUFuQjs7QUFDQSxVQUFJZSxXQUFKLEVBQWlCO0FBQ2ZLLG9CQUFZLEdBQ1ZwQixLQUFLLENBQUNjLEtBQU4sQ0FBWSxDQUFaLEVBQWVILFdBQVcsR0FBRyxNQUFLSyxjQUFMLENBQW9CQyxNQUFqRCxJQUNBSixVQURBLEdBRUFiLEtBQUssQ0FBQ2MsS0FBTixDQUFZRixVQUFVLEdBQUcsTUFBS0ksY0FBTCxDQUFvQkMsTUFBN0MsQ0FIRjs7QUFJQSxjQUFLUCxtQkFBTCxDQUF5QlIsVUFBekI7O0FBQ0EsZUFBT2tCLFlBQVA7QUFDRDs7QUFDREEsa0JBQVksR0FDVnBCLEtBQUssQ0FBQ2MsS0FBTixDQUFZLENBQVosRUFBZUgsV0FBZixJQUE4QixNQUFLSyxjQUFuQyxHQUFvREgsVUFBcEQsR0FBaUUsTUFBS00sWUFBdEUsR0FBcUZuQixLQUFLLENBQUNjLEtBQU4sQ0FBWUYsVUFBWixDQUR2Rjs7QUFFQSxZQUFLRixtQkFBTCxDQUF5QlIsVUFBekI7O0FBQ0EsYUFBT2tCLFlBQVA7QUFDRCxLOzs7Ozs7RUF0Q3NEQyx5RCIsImZpbGUiOiIuL3NyYy9tYXJrZG93bkNvbnRyb2xsZXIvVG9vbEJhckVkaXRvcnMvQWJzdHJhY3QvVGV4dEVkaXRvci50cy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElPbkNsaWNrRWRpdEJ1dHRvbiB9IGZyb20gJ0B0eXBlcyc7XG5pbXBvcnQgQ3VycmVudEluc2VydGlvbiBmcm9tICcuL0N1cnJlbnRJbnNlcnRpb24nO1xuXG5leHBvcnQgZGVmYXVsdCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdFRleHRFZGl0b3IgZXh0ZW5kcyBDdXJyZW50SW5zZXJ0aW9uIHtcbiAgcHJvdGVjdGVkIGFic3RyYWN0IHBvaW50U3RhcnRUZXh0OiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIGFic3RyYWN0IHBvaW50RW5kVGV4dDogc3RyaW5nO1xuXG4gIHB1YmxpYyBvbkNsaWNrRWRpdEJ1dHRvbiA9ICh7IGlucHV0LCBjdXJzb3JQb3NpdGlvbiwgbW92ZUN1cnNvciB9OiBJT25DbGlja0VkaXRCdXR0b24pOiBzdHJpbmcgPT4ge1xuICAgIGNvbnN0IGN1cnJlbnRDdXJzb3JJbmRleCA9IGN1cnNvclBvc2l0aW9uWzBdO1xuICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBjdXJzb3JQb3NpdGlvblswXSAhPT0gY3Vyc29yUG9zaXRpb25bMV07XG4gICAgdGhpcy5zZXRJbmRleFRvSW5zZXJ0KGN1cnJlbnRDdXJzb3JJbmRleCk7XG4gICAgdGhpcy5zZXRJbmRleFRvR28oY3VycmVudEN1cnNvckluZGV4KTtcblxuICAgIGlmIChpc1NlbGVjdGVkKSB0aGlzLmRlbFNlbGVjdFRleHQoaW5wdXQsIGN1cnNvclBvc2l0aW9uKTtcbiAgICBjb25zdCB1cGRhdGVkVGV4dCA9IHRoaXMuaW5zZXJ0VGV4dChpbnB1dCk7XG4gICAgdGhpcy5tb3ZlQ3Vyc29yQWZ0ZXJFZGl0KG1vdmVDdXJzb3IpO1xuXG4gICAgcmV0dXJuIHVwZGF0ZWRUZXh0O1xuICB9O1xuXG4gIHByb3RlY3RlZCBvbkNsaWNrU2VsZWN0ZWRUZXh0ID0gKHsgaW5wdXQsIGN1cnNvclBvc2l0aW9uLCBtb3ZlQ3Vyc29yIH06IElPbkNsaWNrRWRpdEJ1dHRvbik6IHN0cmluZyA9PiB7XG4gICAgY29uc3QgW2Zyb250Q3Vyc29yLCBiYWNrQ3Vyc29yXSA9IGN1cnNvclBvc2l0aW9uO1xuICAgIGNvbnN0IHNlbGVjdFRleHQgPSBpbnB1dC5zbGljZShmcm9udEN1cnNvciwgYmFja0N1cnNvcik7XG4gICAgY29uc3QgaXNJblNhbWVUYWcgPVxuICAgICAgaW5wdXQuc2xpY2UoZnJvbnRDdXJzb3IgLSB0aGlzLnBvaW50U3RhcnRUZXh0Lmxlbmd0aCwgZnJvbnRDdXJzb3IpLmluY2x1ZGVzKHRoaXMucG9pbnRTdGFydFRleHQpICYmXG4gICAgICBpbnB1dC5zbGljZShiYWNrQ3Vyc29yLCBiYWNrQ3Vyc29yICsgdGhpcy5wb2ludEVuZFRleHQubGVuZ3RoKS5pbmNsdWRlcyh0aGlzLnBvaW50RW5kVGV4dCk7XG5cbiAgICBsZXQgdXBkYXRlZElucHV0ID0gaW5wdXQ7XG4gICAgaWYgKGlzSW5TYW1lVGFnKSB7XG4gICAgICB1cGRhdGVkSW5wdXQgPVxuICAgICAgICBpbnB1dC5zbGljZSgwLCBmcm9udEN1cnNvciAtIHRoaXMucG9pbnRTdGFydFRleHQubGVuZ3RoKSArXG4gICAgICAgIHNlbGVjdFRleHQgK1xuICAgICAgICBpbnB1dC5zbGljZShiYWNrQ3Vyc29yICsgdGhpcy5wb2ludFN0YXJ0VGV4dC5sZW5ndGgpO1xuICAgICAgdGhpcy5tb3ZlQ3Vyc29yQWZ0ZXJFZGl0KG1vdmVDdXJzb3IpO1xuICAgICAgcmV0dXJuIHVwZGF0ZWRJbnB1dDtcbiAgICB9XG4gICAgdXBkYXRlZElucHV0ID1cbiAgICAgIGlucHV0LnNsaWNlKDAsIGZyb250Q3Vyc29yKSArIHRoaXMucG9pbnRTdGFydFRleHQgKyBzZWxlY3RUZXh0ICsgdGhpcy5wb2ludEVuZFRleHQgKyBpbnB1dC5zbGljZShiYWNrQ3Vyc29yKTtcbiAgICB0aGlzLm1vdmVDdXJzb3JBZnRlckVkaXQobW92ZUN1cnNvcik7XG4gICAgcmV0dXJuIHVwZGF0ZWRJbnB1dDtcbiAgfTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/markdownController/ToolBarEditors/Abstract/TextEditor.ts\n");

/***/ })

})