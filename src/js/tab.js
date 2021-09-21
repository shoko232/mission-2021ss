// タブ

//tabItemをクラス名に持つものをすべて取得する
const tabTrigger = document.getElementsByClassName('tabItem');

// 該当するtabTriggerにclickイベントを付与し、tabSwitchを実行する
for(let i = 0; i < tabTrigger.length; i++) {
    tabTrigger[i].addEventListener('click', tabSwitch);
}

// タブをclickすると実行する関数
function tabSwitch() {
    // タブのclassの値を変更
    document.getElementsByClassName('is-active')[0].classList.remove('is-active'); // is-activeの削除
    this.classList.add('is-active'); // is-activeの追加
    // コンテンツのclassの値を変更
    document.getElementsByClassName('is-show')[0].classList.remove('is-show'); // is-showの削除
    const arrayTabs = Array.prototype.slice.call( tabTrigger); // 引数にとったオブジェクトを配列に変換
    const index = arrayTabs.indexOf(this); // 配列に対してのみ使用し、DOMを引数にとって一致した要素番号を返す
    document.getElementsByClassName('tabContent')[index].classList.add('is-show'); // is-showの追加
};