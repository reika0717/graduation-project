'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*header背景の動画*/
(0, _jquery2.default)('document').ready(function () {
	var options = { videoId: 'e4Is32W-ppk', start: 3 };
	(0, _jquery2.default)('.wrapper').tubular(options);
	(0, _jquery2.default)('.header').tubular({
		videoId: 'crpiAoM_6rU'
	});

	/* スムーススクロール */
	var offsetY = 0;
	// スクロールにかかる時間
	var time = 500;

	// ページ内リンクのみを取得
	(0, _jquery2.default)('a[href^=#]').click(function () {
		// 移動先となる要素を取得
		var target = (0, _jquery2.default)(this.hash);
		if (!target.length) return;
		// 移動先となる値
		var targetY = target.offset().top + offsetY;
		// スクロールアニメーション
		(0, _jquery2.default)('html,body').animate({
			scrollTop: targetY
		}, time, 'swing');
		// ハッシュ書き換えとく
		window.history.pushState(null, null, this.hash);
		// デフォルトの処理はキャンセル
		return false;
	});

	var navi = (0, _jquery2.default)('.navi');
	var topHeight = (0, _jquery2.default)(".header").height();
	navi.hide();
	(0, _jquery2.default)(window).scroll(function () {
		var currentPos = (0, _jquery2.default)(undefined).scrollTop();
		if (currentPos > topHeight) {
			//ボタンの表示方法
			navi.fadeIn();
		} else {
			navi.hide();
		}
	});

	(0, _jquery2.default)('.fadeIn').on('inview', function (event, isInView) {
		if (isInView) {
			(0, _jquery2.default)(undefined).addClass("fadeInDown");
		}
	});
});

// var startPos = 0;
// $('.fadeIn').css('visibility','hidden');
// $(window).scroll(() => {
//   var windowHeight = $(window).height(),
//     topWindow = $(window).scrollTop();
//   $('.fadeIn').each(() => {
//     var targetPosition = $(this).offset().top;
//     if (topWindow > targetPosition - windowHeight + 200) {
//       $(this).addClass("fadeInDown");
//     }
//   });
//  var currentPos = $(this).scrollTop();
//   if (currentPos > startPos) {
//     if ($(window).scrollTop() >= 200) {
//       $(".navi").css("top", "-" + 170 + "px");
//             }
//     }else{
//     $(".navi").css("top", 0 + "px");
//   }
//   startPos = currentPos;
// });