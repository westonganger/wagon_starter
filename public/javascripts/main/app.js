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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/assets/main/javascripts/app.js":
/*!********************************************!*\
  !*** ./app/assets/main/javascripts/app.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _sections_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sections.js */ "./app/assets/main/javascripts/sections.js");
/* harmony import */ var _sections_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_sections_js__WEBPACK_IMPORTED_MODULE_0__);
// Tell Webpack to load the style
//import '../stylesheets/app.scss';

$(document).on('turbolinks:load', function () {//$('[data-toggle="popover"]').popover();
  //$('[data-toggle="tooltip"]').tooltip();
});
/* Bootstrap AJAX Modals */

var active_modal = null;
$(document).on('click', 'a[data-toggle=ajax_modal]', function (e) {
  e.preventDefault(); //$('body').modalmanager('loading');

  $('#loader').addClass('withmodal').show();

  if (active_modal) {
    active_modal.modal('hide');
    active_modal = null;
  }

  var target = $(this).attr('data-target');
  var width = $(this).attr('data-width');
  var url = $(this).attr('href');

  if ($(target).length > 0) {
    $(target).remove();
  }

  var $modal = $('<div/>', {
    id: target.split("#").join(""),
    // 'class': 'modal hide fade',
    'class': 'modal hide',
    data: {
      width: width,
      backdrop: 'static'
    }
  }).appendTo('body');
  ;
  $modal.load(url, function () {
    $modal.modal('show');
    $('#loader').removeClass('withmodal').hide();
  });
  active_modal = $modal;
});
$('body').on('hide', '.modal', function () {
  active_modal = null;
});
$('a[data-toggle=modal]').on('click', function (e) {
  var target = $(this).attr('data-target');
  var url = $(this).attr('href');
  $(target).load(url);
});
/* END bootstrap AJAX modals */

/***/ }),

/***/ "./app/assets/main/javascripts/sections.js":
/*!*************************************************!*\
  !*** ./app/assets/main/javascripts/sections.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
// INSTEAD WE USE THE SIMPLE EVENTS BELOW
import SectionsManager from './sections/_manager';
import * as Sections from './sections';

$(document).on('DOMContentLoaded turbolinks:load',  function(){
  const sectionsManager = new SectionsManager();

  // Register sections here. DO NOT REMOVE OR UPDATE THIS LINE
  //sectionsManager.registerSection('bootstrap-business', Sections.BootstrapBusiness);

  sectionsManager.start();
});
*/
$(document).on("locomotive::section::load", function (event) {
  var sectionId = event.detail.sectionId;
  var section = $("#locomotive-section-" + sectionId);
  var sectionType = section.prop('data-locomotive-section-type');
}).on("locomotive::section::unload", function (event) {
  var sectionId = event.detail.sectionId;
  var section = $("#locomotive-section-" + sectionId);
  var sectionType = section.prop('data-locomotive-section-type');
}).on("locomotive::section::select", function (event) {
  var sectionId = event.detail.sectionId;
  var section = $("#locomotive-section-" + sectionId);
  var sectionType = section.prop('data-locomotive-section-type');
}).on("locomotive::section::deselect", function (event) {
  var sectionId = event.detail.sectionId;
  var section = $("#locomotive-section-" + sectionId);
  var sectionType = section.prop('data-locomotive-section-type');
}).on("locomotive::section::reorder", function (event) {
  var sectionId = event.detail.sectionId;
  var section = $("#locomotive-section-" + sectionId);
  var sectionType = section.prop('data-locomotive-section-type');
}).on("locomotive::block::load", function (event) {
  var sectionId = event.detail.sectionId;
  var blockId = event.detail.blockId;
  var section = $("#locomotive-section-" + sectionId);
  var sectionType = section.prop('data-locomotive-section-type');
  var block = section.find("[data-locomotive-block='section-".concat(sectionId, "-block-").concat(blockId, "']"));
}).on("locomotive::block::unload", function (event) {
  var sectionId = event.detail.sectionId;
  var blockId = event.detail.blockId;
  var section = $("#locomotive-section-" + sectionId);
  var sectionType = section.prop('data-locomotive-section-type');
  var block = section.find("[data-locomotive-block='section-".concat(sectionId, "-block-").concat(blockId, "']"));
}).on("locomotive::block::select", function (event) {
  var sectionId = event.detail.sectionId;
  var blockId = event.detail.blockId;
  var section = $("#locomotive-section-" + sectionId);
  var sectionType = section.prop('data-locomotive-section-type');
  var block = section.find("[data-locomotive-block='section-".concat(sectionId, "-block-").concat(blockId, "']"));
}).on("locomotive::block::deselect", function (event) {
  var sectionId = event.detail.sectionId;
  var blockId = event.detail.blockId;
  var section = $("#locomotive-section-" + sectionId);
  var sectionType = section.prop('data-locomotive-section-type');
  var block = section.find("[data-locomotive-block='section-".concat(sectionId, "-block-").concat(blockId, "']"));
}).on("locomotive::block::reorder", function (event) {
  var sectionId = event.detail.sectionId;
  var blockId = event.detail.blockId;
  var section = $("#locomotive-section-" + sectionId);
  var sectionType = section.prop('data-locomotive-section-type');
  var block = section.find("[data-locomotive-block='section-".concat(sectionId, "-block-").concat(blockId, "']"));
});

/***/ }),

/***/ 1:
/*!**************************************************!*\
  !*** multi ./app/assets/main/javascripts/app.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/weston/html/ruby/locomotive_cms/wagon_design_blocks/app/assets/main/javascripts/app.js */"./app/assets/main/javascripts/app.js");


/***/ })

/******/ });