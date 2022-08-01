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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/bundles/templates/customers/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/bundles/templates/customers/login.js":
/*!*****************************************************!*\
  !*** ./src/js/bundles/templates/customers/login.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var Styles_templates_customers_login_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Styles/templates/customers/login.scss */ \"./src/styles/templates/customers/login.scss\");\n/* harmony import */ var Styles_templates_customers_login_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(Styles_templates_customers_login_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * Password Template Script\n * ------------------------------------------------------------------------------\n * A file that contains scripts highly couple code to the Password template.\n *\n * @namespace password\n */\n\nvar selectors = {\n  recoverPasswordFormTriggers: '[data-recover-toggle]',\n  recoverPasswordForm: '[data-recover-form]',\n  loginForm: '[data-login-form]',\n  formState: '[data-form-state]',\n  resetSuccess: '[data-reset-success]'\n};\n\nfunction onShowHidePasswordForm(evt) {\n  evt.preventDefault();\n  toggleRecoverPasswordForm();\n}\n\nfunction checkUrlHash() {\n  var hash = window.location.hash; // Allow deep linking to recover password form\n\n  if (hash === '#recover') {\n    toggleRecoverPasswordForm();\n  }\n}\n/**\n *  Show/Hide recover password form\n */\n\n\nfunction toggleRecoverPasswordForm() {\n  document.querySelector(selectors.recoverPasswordForm).classList.toggle('hide');\n  document.querySelector(selectors.loginForm).classList.toggle('hide');\n}\n/**\n *  Show reset password success message\n */\n\n\nfunction resetPasswordSuccess() {\n  // check if reset password form was\n  // successfully submitted and show success message.\n  if (document.querySelector(selectors.formState)) {\n    document.querySelector(selectors.resetSuccess).classList.remove('hide');\n  }\n}\n\nif (document.querySelector(selectors.recoverPasswordForm)) {\n  checkUrlHash();\n  resetPasswordSuccess();\n  document.querySelectorAll(selectors.recoverPasswordFormTriggers).forEach(function (trigger) {\n    trigger.addEventListener('click', onShowHidePasswordForm);\n  });\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvanMvYnVuZGxlcy90ZW1wbGF0ZXMvY3VzdG9tZXJzL2xvZ2luLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2pzL2J1bmRsZXMvdGVtcGxhdGVzL2N1c3RvbWVycy9sb2dpbi5qcz8xOTE4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnU3R5bGVzL3RlbXBsYXRlcy9jdXN0b21lcnMvbG9naW4uc2Nzcyc7XG4vKipcbiAqIFBhc3N3b3JkIFRlbXBsYXRlIFNjcmlwdFxuICogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBBIGZpbGUgdGhhdCBjb250YWlucyBzY3JpcHRzIGhpZ2hseSBjb3VwbGUgY29kZSB0byB0aGUgUGFzc3dvcmQgdGVtcGxhdGUuXG4gKlxuICogQG5hbWVzcGFjZSBwYXNzd29yZFxuICovXG5cbnZhciBzZWxlY3RvcnMgPSB7XG4gIHJlY292ZXJQYXNzd29yZEZvcm1UcmlnZ2VyczogJ1tkYXRhLXJlY292ZXItdG9nZ2xlXScsXG4gIHJlY292ZXJQYXNzd29yZEZvcm06ICdbZGF0YS1yZWNvdmVyLWZvcm1dJyxcbiAgbG9naW5Gb3JtOiAnW2RhdGEtbG9naW4tZm9ybV0nLFxuICBmb3JtU3RhdGU6ICdbZGF0YS1mb3JtLXN0YXRlXScsXG4gIHJlc2V0U3VjY2VzczogJ1tkYXRhLXJlc2V0LXN1Y2Nlc3NdJ1xufTtcblxuZnVuY3Rpb24gb25TaG93SGlkZVBhc3N3b3JkRm9ybShldnQpIHtcbiAgZXZ0LnByZXZlbnREZWZhdWx0KCk7XG4gIHRvZ2dsZVJlY292ZXJQYXNzd29yZEZvcm0oKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tVcmxIYXNoKCkge1xuICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoOyAvLyBBbGxvdyBkZWVwIGxpbmtpbmcgdG8gcmVjb3ZlciBwYXNzd29yZCBmb3JtXG5cbiAgaWYgKGhhc2ggPT09ICcjcmVjb3ZlcicpIHtcbiAgICB0b2dnbGVSZWNvdmVyUGFzc3dvcmRGb3JtKCk7XG4gIH1cbn1cbi8qKlxuICogIFNob3cvSGlkZSByZWNvdmVyIHBhc3N3b3JkIGZvcm1cbiAqL1xuXG5cbmZ1bmN0aW9uIHRvZ2dsZVJlY292ZXJQYXNzd29yZEZvcm0oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLnJlY292ZXJQYXNzd29yZEZvcm0pLmNsYXNzTGlzdC50b2dnbGUoJ2hpZGUnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMubG9naW5Gb3JtKS5jbGFzc0xpc3QudG9nZ2xlKCdoaWRlJyk7XG59XG4vKipcbiAqICBTaG93IHJlc2V0IHBhc3N3b3JkIHN1Y2Nlc3MgbWVzc2FnZVxuICovXG5cblxuZnVuY3Rpb24gcmVzZXRQYXNzd29yZFN1Y2Nlc3MoKSB7XG4gIC8vIGNoZWNrIGlmIHJlc2V0IHBhc3N3b3JkIGZvcm0gd2FzXG4gIC8vIHN1Y2Nlc3NmdWxseSBzdWJtaXR0ZWQgYW5kIHNob3cgc3VjY2VzcyBtZXNzYWdlLlxuICBpZiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcnMuZm9ybVN0YXRlKSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3JzLnJlc2V0U3VjY2VzcykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICB9XG59XG5cbmlmIChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9ycy5yZWNvdmVyUGFzc3dvcmRGb3JtKSkge1xuICBjaGVja1VybEhhc2goKTtcbiAgcmVzZXRQYXNzd29yZFN1Y2Nlc3MoKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcnMucmVjb3ZlclBhc3N3b3JkRm9ybVRyaWdnZXJzKS5mb3JFYWNoKGZ1bmN0aW9uICh0cmlnZ2VyKSB7XG4gICAgdHJpZ2dlci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG9uU2hvd0hpZGVQYXNzd29yZEZvcm0pO1xuICB9KTtcbn0iXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/js/bundles/templates/customers/login.js\n");

/***/ }),

/***/ "./src/styles/templates/customers/login.scss":
/*!***************************************************!*\
  !*** ./src/styles/templates/customers/login.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL3RlbXBsYXRlcy9jdXN0b21lcnMvbG9naW4uc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zdHlsZXMvdGVtcGxhdGVzL2N1c3RvbWVycy9sb2dpbi5zY3NzPzA0NDIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/styles/templates/customers/login.scss\n");

/***/ })

/******/ });