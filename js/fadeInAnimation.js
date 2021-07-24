$(function () {
    $(window).scroll(function () {
        //1.ブラウザ領域の高さを取得
        const height = $(window).height();
        //2.スクロール位置を取得
        const scrollPosition = $(window).scrollTop();
        $(".scroll").each(function () {
            //3,フェードインさせる要素の縦位置を取得
            const targetPosition = $(this).offset().top;
            //4.フェードインさせるべき要素kどうかを判定する
            if(scrollPosition > targetPosition - height + 60) {
                //5.フェードインさせるべき要素だった場合、新たにクラスを付与する
                $(this).addClass("fadeInDown");
            }
        });
    });
});

//参考サイト：NatsukiMemo 「スクロールでフェードイン表示させる方法（jQuery+HTML+CSS）」
//url("https://natsukimemo.com/jquery-scroll-fadein")
