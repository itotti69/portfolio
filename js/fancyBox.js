$(document).ready(function() {
	$('[data-fancybox]').fancybox({
		// オプション
		animationEffect: "zoom-in-out", //アニメーションをズームインアウトに
		loop : false, // 複数画像表示時に最初と最後をループさせない
		toolbar  : true, // ツールバーの表示
		smallBtn : false, // 小さいCloseボタン利用しない
		transitionEffect : "circular",
		
		thumbs: {
			autoStart: false,
			hideOnClose: true,
			parentEl: ".fancybox-container",
			axis: "y"
		},
	});
});