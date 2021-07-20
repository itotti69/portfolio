import Vue from "vue";
import VueScrollTo from "vue-scrollto";

Vue.use(VueScrollTo, {
    container: "body",// スクロールするcontainer
  duration: 500, // スクロールアニメーションの長さ（ミリ秒）
  easing: "ease", // 使用されるイージング
  force: true,   // スクロールターゲットがすでに表示されている場合でも、スクロールを実行するかどうか。
  cancelable: false // ユーザーがスクロールをキャンセルできるかどうか
})