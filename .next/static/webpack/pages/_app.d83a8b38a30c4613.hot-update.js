"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_font_google_target_css_path_src_pages_app_tsx_import_Lato_arguments_subsets_latin_weight_100_300_400_700_900_variableName_lato___WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/font/google/target.css?{\"path\":\"src\\\\pages\\\\_app.tsx\",\"import\":\"Lato\",\"arguments\":[{\"subsets\":[\"latin\"],\"weight\":[\"100\",\"300\",\"400\",\"700\",\"900\"]}],\"variableName\":\"lato\"} */ \"./node_modules/next/font/google/target.css?{\\\"path\\\":\\\"src\\\\\\\\pages\\\\\\\\_app.tsx\\\",\\\"import\\\":\\\"Lato\\\",\\\"arguments\\\":[{\\\"subsets\\\":[\\\"latin\\\"],\\\"weight\\\":[\\\"100\\\",\\\"300\\\",\\\"400\\\",\\\"700\\\",\\\"900\\\"]}],\\\"variableName\\\":\\\"lato\\\"}\");\n/* harmony import */ var next_font_google_target_css_path_src_pages_app_tsx_import_Lato_arguments_subsets_latin_weight_100_300_400_700_900_variableName_lato___WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_font_google_target_css_path_src_pages_app_tsx_import_Lato_arguments_subsets_latin_weight_100_300_400_700_900_variableName_lato___WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _components_fragments_Navbar_Index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/fragments/Navbar/Index */ \"./src/components/fragments/Navbar/Index.tsx\");\n/* harmony import */ var _components_ui_Toster_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/ui/Toster/index */ \"./src/components/ui/Toster/index.tsx\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/globals.css */ \"./src/styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n// Navbar disable pada auth admin\nconst disableNavbar = [\n    \"auth\",\n    \"admin\",\n    \"member\"\n];\nfunction App(param) {\n    let { Component, pageProps: { session, ...pageProps } } = param;\n    _s();\n    const { pathname } = (0,next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter)();\n    const [toster, setToster] = (0,react__WEBPACK_IMPORTED_MODULE_7__.useState)({\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_7__.useEffect)(()=>{\n        if (Object.keys(toster).length > 0) {\n            setTimeout(()=>{\n                setToster({});\n            }, 3000);\n        }\n    }, [\n        toster\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_4__.SessionProvider, {\n        session: session,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_5___default()), {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                    href: \"https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css\",\n                    rel: \"stylesheet\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\laiha\\\\Documents\\\\Project\\\\Latihan\\\\project\\\\Tokol\\\\src\\\\pages\\\\_app.tsx\",\n                    lineNumber: 33,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\laiha\\\\Documents\\\\Project\\\\Latihan\\\\project\\\\Tokol\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (next_font_google_target_css_path_src_pages_app_tsx_import_Lato_arguments_subsets_latin_weight_100_300_400_700_900_variableName_lato___WEBPACK_IMPORTED_MODULE_8___default().className),\n                children: [\n                    !disableNavbar.includes(pathname.split(\"/\")[1]) && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_fragments_Navbar_Index__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\laiha\\\\Documents\\\\Project\\\\Latihan\\\\project\\\\Tokol\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 61\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                        ...pageProps,\n                        setToster: setToster\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\laiha\\\\Documents\\\\Project\\\\Latihan\\\\project\\\\Tokol\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    Object.keys(toster).length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ui_Toster_index__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                        variants: toster.variant,\n                        message: toster.message,\n                        setToster: setToster\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\laiha\\\\Documents\\\\Project\\\\Latihan\\\\project\\\\Tokol\\\\src\\\\pages\\\\_app.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 44\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\laiha\\\\Documents\\\\Project\\\\Latihan\\\\project\\\\Tokol\\\\src\\\\pages\\\\_app.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\laiha\\\\Documents\\\\Project\\\\Latihan\\\\project\\\\Tokol\\\\src\\\\pages\\\\_app.tsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(App, \"5K0/fzR/XSG5t0j2oELMjGJpki4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_6__.useRouter\n    ];\n});\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvX2FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQVlNQTtBQVprRDtBQUNQO0FBQ3BCO0FBQ29CO0FBR3JCO0FBQ1c7QUFDSTtBQUUzQyxpQ0FBaUM7QUFDakMsTUFBTVEsZ0JBQWdCO0lBQUM7SUFBUTtJQUFTO0NBQVM7QUFLbEMsU0FBU0MsSUFBSSxLQUE2RDtRQUE3RCxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsT0FBTyxFQUFFLEdBQUdELFdBQVcsRUFBWSxHQUE3RDs7SUFDMUIsTUFBTSxFQUFFRSxRQUFRLEVBQUUsR0FBR1Isc0RBQVNBO0lBQzlCLE1BQU0sQ0FBQ1MsUUFBUUMsVUFBVSxHQUFHUiwrQ0FBUUEsQ0FBTTtJQUcxQztJQUNBRCxnREFBU0EsQ0FBQztRQUNSLElBQUlVLE9BQU9DLElBQUksQ0FBQ0gsUUFBUUksTUFBTSxHQUFHLEdBQUc7WUFDbENDLFdBQVc7Z0JBQ1RKLFVBQVUsQ0FBQztZQUNiLEdBQUc7UUFDTDtJQUNGLEdBQUc7UUFBQ0Q7S0FBTztJQUNYLHFCQUNFLDhEQUFDWCw0REFBZUE7UUFBQ1MsU0FBU0E7OzBCQUN4Qiw4REFBQ1Isa0RBQUlBOzBCQUNILDRFQUFDZ0I7b0JBQUtDLE1BQUs7b0JBQXdEQyxLQUFJOzs7Ozs7Ozs7OzswQkFHekUsOERBQUNDO2dCQUFJQyxXQUFXeEIsdUxBQWM7O29CQUMzQixDQUFDUSxjQUFjaUIsUUFBUSxDQUFDWixTQUFTYSxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUUsbUJBQUssOERBQUN6QiwwRUFBTUE7Ozs7O2tDQUMzRCw4REFBQ1M7d0JBQVcsR0FBR0MsU0FBUzt3QkFBRUksV0FBV0E7Ozs7OztvQkFDcENDLE9BQU9DLElBQUksQ0FBQ0gsUUFBUUksTUFBTSxHQUFHLG1CQUFLLDhEQUFDaEIsbUVBQU1BO3dCQUFDeUIsVUFBVWIsT0FBT2MsT0FBTzt3QkFBRUMsU0FBU2YsT0FBT2UsT0FBTzt3QkFBRWQsV0FBV0E7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlqSDtHQTFCd0JOOztRQUNESixrREFBU0E7OztLQURSSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvX2FwcC50c3g/ZjlkNiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmF2YmFyIGZyb20gJ0AvY29tcG9uZW50cy9mcmFnbWVudHMvTmF2YmFyL0luZGV4J1xuaW1wb3J0IFRvc3RlciBmcm9tICdAL2NvbXBvbmVudHMvdWkvVG9zdGVyL2luZGV4J1xuaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWxzLmNzcydcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gJ25leHQtYXV0aC9yZWFjdCdcbmltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IExhdG8gfSBmcm9tICduZXh0L2ZvbnQvZ29vZ2xlJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXG5cbi8vIE5hdmJhciBkaXNhYmxlIHBhZGEgYXV0aCBhZG1pblxuY29uc3QgZGlzYWJsZU5hdmJhciA9IFsnYXV0aCcsICdhZG1pbicsICdtZW1iZXInXTtcbmNvbnN0IGxhdG8gPSBMYXRvKHtcbiAgc3Vic2V0czogWydsYXRpbiddLFxuICB3ZWlnaHQ6IFsnMTAwJywgJzMwMCcsICc0MDAnLCAnNzAwJywgJzkwMCddXG59KVxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHM6IHsgc2Vzc2lvbiwgLi4ucGFnZVByb3BzIH0gfTogQXBwUHJvcHMpIHtcbiAgY29uc3QgeyBwYXRobmFtZSB9ID0gdXNlUm91dGVyKCk7XG4gIGNvbnN0IFt0b3N0ZXIsIHNldFRvc3Rlcl0gPSB1c2VTdGF0ZTxhbnk+KHtcbiAgICAvLyB2YXJpYW50OiAnd2FybmluZycsXG4gICAgLy8gbWVzc2FnZTogJ0lucHV0IElzIEVtcHR5JyxcbiAgfSk7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKE9iamVjdC5rZXlzKHRvc3RlcikubGVuZ3RoID4gMCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHNldFRvc3Rlcih7fSlcbiAgICAgIH0sIDMwMDApXG4gICAgfVxuICB9LCBbdG9zdGVyXSlcbiAgcmV0dXJuIChcbiAgICA8U2Vzc2lvblByb3ZpZGVyIHNlc3Npb249e3Nlc3Npb259PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDxsaW5rIGhyZWY9J2h0dHBzOi8vdW5wa2cuY29tL2JveGljb25zQDIuMS40L2Nzcy9ib3hpY29ucy5taW4uY3NzJyByZWw9J3N0eWxlc2hlZXQnPlxuICAgICAgICA8L2xpbms+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17bGF0by5jbGFzc05hbWV9PlxuICAgICAgICB7IWRpc2FibGVOYXZiYXIuaW5jbHVkZXMocGF0aG5hbWUuc3BsaXQoJy8nKVsxXSkgJiYgPE5hdmJhciAvPn1cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSBzZXRUb3N0ZXI9e3NldFRvc3Rlcn0gLz5cbiAgICAgICAge09iamVjdC5rZXlzKHRvc3RlcikubGVuZ3RoID4gMCAmJiA8VG9zdGVyIHZhcmlhbnRzPXt0b3N0ZXIudmFyaWFudH0gbWVzc2FnZT17dG9zdGVyLm1lc3NhZ2V9IHNldFRvc3Rlcj17c2V0VG9zdGVyfSAvPn1cbiAgICAgIDwvZGl2PlxuICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICApXG59XG4iXSwibmFtZXMiOlsibGF0byIsIk5hdmJhciIsIlRvc3RlciIsIlNlc3Npb25Qcm92aWRlciIsIkhlYWQiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImRpc2FibGVOYXZiYXIiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIiwicGF0aG5hbWUiLCJ0b3N0ZXIiLCJzZXRUb3N0ZXIiLCJPYmplY3QiLCJrZXlzIiwibGVuZ3RoIiwic2V0VGltZW91dCIsImxpbmsiLCJocmVmIiwicmVsIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW5jbHVkZXMiLCJzcGxpdCIsInZhcmlhbnRzIiwidmFyaWFudCIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n"));

/***/ })

});