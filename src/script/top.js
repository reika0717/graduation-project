import $ from 'jquery'

		/*header背景の動画*/
		 $('document').ready(() => {
  	   var options = { videoId: 'e4Is32W-ppk', start: 3 };
	 	   $('.wrapper').tubular(options);
			 $('.header').tubular({
				 videoId: 'crpiAoM_6rU'
			 	});

			/* スムーススクロール */
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

				var navi = $('.navi');
				var topHeight = $(".header").height();
					navi.hide();
				$(window).scroll(() => {
					var currentPos = $(this).scrollTop();
						if (currentPos > topHeight) {
						//ボタンの表示方法
								navi.fadeIn();
						} else{
								navi.hide();
						}
				});

				$('.fadeIn').on('inview', (event, isInView)=>{
					if(isInView){
						$(this).addClass("fadeInDown");
					}
				})
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
