// カルーセル

const carousel = function(){
    const next = document.querySelector(".next"); // class名がnextの要素を取得する
    const prev = document.querySelector(".prev"); // class名がprevの要素を取得する

    const carouselWidth = document.querySelector(".carouselItem"); // class名がcarouselItemの要素を取得する
    let width = carouselWidth.clientWidth; // .carouselItemの表示域の横幅を取得

    const carouselList = document.querySelector(".carouselList"); // class名がcarouselItemの要素を取得する
    const carouselItem = document.querySelectorAll(".carouselItem"); // class名がcarouselItemの要素をすべて取得する

    let counter = 0; // counterを定義し、初期値を0に設定

    next.addEventListener("click", function(){
        if(counter == carouselItem.length - 1) return;
        prev.style.display = "block"; // .prevにdisplay: blockのstyle属性を付与する
        carouselList.style.transition = ".3s"; // .carouselListにtransition: .3sのstyle属性を付与する
        counter ++; // counterに+1
        // nextを押した時にcarouselItemの1枚分横に移動させる
        carouselList.style.transform = "translateX("+ (- width * counter) + "px)";// .carouselListにtransition: translateX(- carouselItemの横幅 * counter px)のstyle属性を付与する

        carouselList.addEventListener("transitionend", function(){
            if(counter == carouselItem.length - 1){
                carouselList.style.transition = "none"; // .carouselListにtransition: noneのstyle属性を付与する
                next.style.display = "none"; // .nextにdisplay: noneのstyle属性を付与する
            }
        })
    });

    prev.addEventListener("click", function(){
        if(counter == carouselItem.length - carouselItem.length) return;
        next.style.display = "block"; // .nextにdisplay: blockのstyle属性を付与する
        carouselList.style.transition = ".3s"; // .carouselListにtransition: .3sのstyle属性を付与する
        counter --; // counterに−1
        carouselList.style.transform = "translateX("+ (- width * counter) + "px)";

        carouselList.addEventListener("transitionend", function(){
            if(counter == carouselItem.length - carouselItem.length){
                carouselList.style.transition = "none"; // .carouselListにtransition: noneのstyle属性を付与する
                prev.style.display = "none"; // .prevにdisplay: noneのstyle属性を付与する
            }
        })
    });
};

carousel();