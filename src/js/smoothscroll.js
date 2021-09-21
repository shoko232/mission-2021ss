// スムーススクロール

// aタグのhref属性を持つものをすべて取得する
const smoothScrollTrigger = document.querySelectorAll('a[href^="#"]');

// aタグにclickイベントを設定
for(let i = 0; i < smoothScrollTrigger.length; i++) {
    smoothScrollTrigger[i].addEventListener('click', (e) => {

        e.preventDefault(); // デフォルトのエベントアクションをキャンセル
        let href = smoothScrollTrigger[i].getAttribute('href'); // href属性の値を取得
        let targetElement = document.getElementById(href.replace('#','')); // スクロール先の要素を取得

        const rect = targetElement.getBoundingClientRect().top; // ブラウザからの高さを取得
        const offset = window.pageYOffset; // 現在のスクロール位置
        const gap = 0; // 固定ヘッダーの高さ
        const target = rect + offset - gap; // スクロール先の要素の位置を取得
        // スムーススクロールのメソッド
        window.scrollTo({
            top: target,
            behavior: 'smooth',
        });
    });
}