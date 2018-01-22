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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*スクロールに合わせてコンテンツをfadeInさせる*/
$('.fadeIn').css('visibility', 'hidden').on('inview', function () {
	$(this).addClass('fadeInDown');
});

/*naviから選択された場所にスムーズに移動する*/
$(function () {
	// スクロールのオフセット値
	var offsetY = 0;
	// スクロールにかかる時間
	var time = 500;

	// ページ内リンクのみを取得
	$('a[href^=#]').click(function () {
		// 移動先となる要素を取得
		var target = $(this.hash);
		if (!target.length) return;
		// 移動先となる値
		var targetY = target.offset().top + offsetY;
		// スクロールアニメーション
		$('html,body').animate({
			scrollTop: targetY
		}, time, 'swing');
		// ハッシュ書き換えとく
		window.history.pushState(null, null, this.hash);
		// デフォルトの処理はキャンセル
		return false;
	});
});

/*スクロール上下によるnaviの表示非表示*/
var menuHeight = $(".navi").height();
var startPos = 0;
$(window).scroll(function () {
	var currentPos = $(this).scrollTop();
	if (currentPos > startPos) {
		if ($(window).scrollTop() >= 200) {
			$(".navi").css("top", "-" + 170 + "px");
		}
	} else {
		$(".navi").css("top", 0 + "px");
	}
	startPos = currentPos;
});

$(function () {
	var navi = $('.navi');
	var topHeight = $(".header").height();
	navi.hide();
	$(window).scroll(function () {
		var currentPos = $(this).scrollTop();
		if (currentPos > topHeight) {
			//ボタンの表示方法
			navi.fadeIn();
		} else {
			navi.hide();
		}
	});
});


/***/ })
/******/ ]);