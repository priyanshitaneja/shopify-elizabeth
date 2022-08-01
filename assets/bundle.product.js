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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bundles/templates/product.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundles/templates/product.js":
/*!*********************************************!*\
  !*** ./src/js/bundles/templates/product.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Styles_templates_product_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Styles/templates/product.scss */ \"./src/styles/templates/product.scss\");\n/* harmony import */ var Styles_templates_product_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(Styles_templates_product_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n(function () {\n  'use strict';\n\n  var dom = {};\n\n  var cacheDom = function cacheDom() {\n    dom.cartQtyButton = document.querySelectorAll(\"[data-item-quantity-change]\");\n    dom.cartQty = document.querySelectorAll(\"[data-item-quantity]\");\n    dom.cartForm = document.querySelectorAll(\"[data-cart-form]\");\n  };\n\n  var validateQty = function validateQty(qty) {\n    if (parseFloat(qty) == parseInt(qty) && !isNaN(qty)) {// We have a valid number!\n    } else {\n      qty = 1;\n    }\n\n    return qty;\n  };\n\n  var bindUIActions = function bindUIActions() {\n    dom.cartQtyButton.forEach(function (element) {\n      element.addEventListener('click', function () {\n        var qtySelector = this.parentNode.querySelector(\"[data-item-quantity]\");\n        var qty = validateQty(parseInt(qtySelector.value.replace(/\\D/g, '')));\n\n        if (this.hasAttribute('data-item-quantity-plus')) {\n          qty += 1;\n        } else {\n          qty -= 1;\n          if (qty <= 0) qty = 0;\n        }\n\n        qtySelector.value = qty;\n      });\n    });\n  };\n\n  var init = function init() {\n    cacheDom();\n    bindUIActions();\n  };\n\n  init();\n})();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYnVuZGxlcy90ZW1wbGF0ZXMvcHJvZHVjdC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9qcy9idW5kbGVzL3RlbXBsYXRlcy9wcm9kdWN0LmpzP2RmZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICdTdHlsZXMvdGVtcGxhdGVzL3Byb2R1Y3Quc2Nzcyc7XG5cbihmdW5jdGlvbiAoKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICB2YXIgZG9tID0ge307XG5cbiAgdmFyIGNhY2hlRG9tID0gZnVuY3Rpb24gY2FjaGVEb20oKSB7XG4gICAgZG9tLmNhcnRRdHlCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW2RhdGEtaXRlbS1xdWFudGl0eS1jaGFuZ2VdXCIpO1xuICAgIGRvbS5jYXJ0UXR5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIltkYXRhLWl0ZW0tcXVhbnRpdHldXCIpO1xuICAgIGRvbS5jYXJ0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbZGF0YS1jYXJ0LWZvcm1dXCIpO1xuICB9O1xuXG4gIHZhciB2YWxpZGF0ZVF0eSA9IGZ1bmN0aW9uIHZhbGlkYXRlUXR5KHF0eSkge1xuICAgIGlmIChwYXJzZUZsb2F0KHF0eSkgPT0gcGFyc2VJbnQocXR5KSAmJiAhaXNOYU4ocXR5KSkgey8vIFdlIGhhdmUgYSB2YWxpZCBudW1iZXIhXG4gICAgfSBlbHNlIHtcbiAgICAgIHF0eSA9IDE7XG4gICAgfVxuXG4gICAgcmV0dXJuIHF0eTtcbiAgfTtcblxuICB2YXIgYmluZFVJQWN0aW9ucyA9IGZ1bmN0aW9uIGJpbmRVSUFjdGlvbnMoKSB7XG4gICAgZG9tLmNhcnRRdHlCdXR0b24uZm9yRWFjaChmdW5jdGlvbiAoZWxlbWVudCkge1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHF0eVNlbGVjdG9yID0gdGhpcy5wYXJlbnROb2RlLnF1ZXJ5U2VsZWN0b3IoXCJbZGF0YS1pdGVtLXF1YW50aXR5XVwiKTtcbiAgICAgICAgdmFyIHF0eSA9IHZhbGlkYXRlUXR5KHBhcnNlSW50KHF0eVNlbGVjdG9yLnZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJykpKTtcblxuICAgICAgICBpZiAodGhpcy5oYXNBdHRyaWJ1dGUoJ2RhdGEtaXRlbS1xdWFudGl0eS1wbHVzJykpIHtcbiAgICAgICAgICBxdHkgKz0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBxdHkgLT0gMTtcbiAgICAgICAgICBpZiAocXR5IDw9IDApIHF0eSA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBxdHlTZWxlY3Rvci52YWx1ZSA9IHF0eTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9O1xuXG4gIHZhciBpbml0ID0gZnVuY3Rpb24gaW5pdCgpIHtcbiAgICBjYWNoZURvbSgpO1xuICAgIGJpbmRVSUFjdGlvbnMoKTtcbiAgfTtcblxuICBpbml0KCk7XG59KSgpOyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/bundles/templates/product.js\n");

/***/ }),

/***/ "./src/styles/templates/product.scss":
/*!*******************************************!*\
  !*** ./src/styles/templates/product.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RlbXBsYXRlcy9wcm9kdWN0LnNjc3MuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvc3R5bGVzL3RlbXBsYXRlcy9wcm9kdWN0LnNjc3M/MmUyMSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/styles/templates/product.scss\n");

/***/ })

/******/ });