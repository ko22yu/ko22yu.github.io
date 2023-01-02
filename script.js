$(document).ready(function() {
		const offset = 30; //上から100pxスクロールしたら表示させる
		const duration = 500; //スクロールの速度 500ミリ秒(0.5秒)かけてスクロールする
		$(window).scroll(function() { //スクロールしたときに実行される
				if ($(this).scrollTop() > offset) { //セレクタをスクロールした時の位置を取得
					$('.pagetop').fadeIn(duration); //.pagetopの要素が非表示の場合、.pagetopの要素を、速度500のフェードインのアニメーションで表示する
				}
				else {
					$('.pagetop').fadeOut(duration); //.pagetopの要素が表示されている場合、.pagetopの要素を、速度500のフェードアウトのアニメーションで非表示にする
				}
		});
		
		$('.pagetop').click(function(event) {
				event.preventDefault(); //イベントの基本動作をキャンセルする
				$('html, body').animate({scrollTop: 0}, duration); //{scrollTop: 0}：設定した値が0ならばスクロールの一番上になり、100ならば100ピクセルスクロールした位置に移動する
				return false;
		});
});
