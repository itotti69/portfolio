$(document).ready(function () {
    $("#topBtn").hide();　//初期設定は、「TOPへ」＝非表示
    $(window).on("scroll", function () {
        if ($(this).scrollTop() > 400) { //ページの上から400pxスクロールした時に
            $("#topBtn").fadeIn("fast"); //「TOPへ」という文字がフェードインしてくる
        } else {
            $("#topBtn").fadeOut("fast");　//ページの上から400px以内にきたら、ボタンがフェードアウトする
        }
    });
 
 
//#topBtnに対して、スムーススクロールの設定
    $('#topBtn').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 900);　//スムーススクロールの速度を800msになるようにここで設定
        return false;
    });
});


//ここからハンバーガーメニューに関してのJavaScript

//関数Humburgerは、スクロールしたときにハンバーガーメニューに変化する処理をまとめるためのもの
function Humburger() {
	//ヘッダーの高さを取得
	var headerHeight = $('.header-main').outerHeight(true);
	var scroll = $(window).scrollTop();
	if (scroll >= headerHeight){//ヘッダーの高さ以上までスクロールしたら
			$('.menu-btn').addClass('fadeOut');//.openbtnにfadeDownというクラス名を付与して
			$('.header-main').addClass('dnone');//#headerにdnoneというクラス名を付与
		}else{//それ以外は
			$('.menu-btn').removeClass('fadeOut');//fadeDownというクラス名を除き
			$('.header-main').removeClass('dnone');//dnoneというクラス名を除く
		}
}

// 画面をスクロールをしたら動かしたい場合の記述
    $(window).scroll(function () {
	    Humburger();//関数Humburgerをここで呼ぶ
    });

// ページが読み込まれたらすぐに動かしたい場合の記述
    $(window).on('load', function () {
	    Humburger();//関数Humburgerをここで呼ぶ
});


//ボタンをクリックした際のアニメーションの設定
$(".menu-btn").click(function () {//ボタンがクリックされたら
	$(this).toggleClass('activate');//ボタン自身に activateクラスを付与し
    $(".header-main").toggleClass('action');//ヘッダーにactionクラスを付与
});

$(".nav-menu-top li a").click(function () {//ナビゲーションの中のリンクがクリックにより
    $(".menu-btn").removeClass('activate');//.menu-btnのactivateクラスを除去し
    $(".header-main").removeClass('action');//ヘッダーのactionクラスも除去
});


//指定の場所までこれまではただジャンプするだけだったのが、スムーススクロールになる
$('.nav-menu-under li a').click(function () {
	var jump = $(this).attr('href');
	var tp = $(jump).offset().top-0;
    //スクロールする時間も設定
	$('body,html').animate({scrollTop: tp}, 1200);
	return false;
});

$(".menu-btn").click(function () {
    $(this).toggleClass('active');
});

//このハンバーガーメニューを作る際に参考にしたサイト↓
//動くWebデザインアイディア帳
//　グローバルナビゲーション　ースクロールするとハンバーガーメニューに変化ー
//URL:https://coco-factory.jp/ugokuweb/move01/5-1-7/