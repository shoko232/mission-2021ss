// モーダル

const modalBtn = document.getElementById('modalOpen'); // クリックする要素を取得
const modal = document.getElementById('modal'); // 開く要素を取得

// opacityが変化する速度を設定
const ms = 400;
modal.style.transition = 'opacity ' + ms + 'ms';

// modalBtnにclickイベントを付与
modalBtn.addEventListener('click', () =>{
    setTimeout(function(){modal.classList.add('is-open')},1); // 1ミリ秒後にis-openクラスを付与
    setTimeout(function(){modal.style.opacity = 1}, 50); // 50ミリ秒後にopacity = 1に変更
});

// .js-modal-closeを持つものをすべて取得する
let modalClose = document.querySelectorAll('.js-modal-close');

// 該当するmodalCloseにclickイベントを付与し、modalを非表示にする
for (let i = 0; i < modalClose.length; i++){
    modalClose[i].addEventListener('click', () => {
        setTimeout(function(){modal.style.opacity = 0}, 1); // 1ミリ秒後にopacity = 0に変更
        setTimeout(function(){modal.classList.remove('is-open')}, ms) // ms秒後にis-openクラスを削除
    });
}