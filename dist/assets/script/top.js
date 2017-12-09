'use strict';

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* ローディングアニメーション */
(0, _jquery2.default)(function () {
	console.log('un');
	(0, _jquery2.default)('.whole-wrapper').css('display', 'none');
});

/*header背景の動画*/
(0, _jquery2.default)(window).on('load', function () {
	console.log('hi');
	(0, _jquery2.default)('.loader').delay(600).fadeOut(300);
	(0, _jquery2.default)('.whole-wrapper').css('display', 'block');
	// var options = { videoId: 'e4Is32W-ppk', start: 3 };
	// $('.wrapper').tubular(options);
	// $('.header').tubular({
	// 	 videoId: 'crpiAoM_6rU'
	//  	});

	/* スムーススクロール */
	var offsetY = 0;
	// スクロールにかかる時間
	var time = 500;

	// ページ内リンクのみを取得
	(0, _jquery2.default)('a[href^="#"]').click(function () {
		// 移動先となる要素を取得
		var target = (0, _jquery2.default)(undefined.hash);
		if (!target.length) return;
		// 移動先となる値
		var targetY = target.offset().top + offsetY;
		// スクロールアニメーション
		(0, _jquery2.default)('html,body').animate({
			scrollTop: targetY
		}, time, 'swing');
		// ハッシュ書き換えとく
		window.history.pushState(null, null, undefined.hash);
		// デフォルトの処理はキャンセル
		return false;
	});

	(0, _jquery2.default)('.fadeIn').css('visibility', 'hidden');
	(0, _jquery2.default)('.fadeIn').on('inview', function () {
		(0, _jquery2.default)(undefined).addClass("fadeInDown");
	});
}).scroll(function () {
	var startPos = 0,
	    currentPos = (0, _jquery2.default)(window).scrollTop(),
	    navi = (0, _jquery2.default)('.navi'),
	    topHeight = (0, _jquery2.default)(".header").height();
	navi.hide();
	if (currentPos > topHeight) {
		if (currentPos > startPos) {
			if ((0, _jquery2.default)(window).scrollTop() >= 200) {
				(0, _jquery2.default)(".navi").css("top", "-" + 170 + "px");
			}
		} else {
			(0, _jquery2.default)(".navi").css("top", 0 + "px");
		}
		startPos = currentPos;
	}
});