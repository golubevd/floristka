(function(){
'use strict';
const scrollBtn = document.querySelector('.scroll_to');
const mainScrollBtn = document.querySelector('.main_btn--scroll');

function onScrollBtnClick(e) {
    e.preventDefault();
    const scrollLink = e.target;
    if (scrollLink.dataset.goto && document.querySelector(scrollLink.dataset.goto)) {
        const gotoBlock = document.querySelector(scrollLink.dataset.goto);        
        gotoBlock.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })

    }
}

scrollBtn.addEventListener("click", onScrollBtnClick);
mainScrollBtn.addEventListener("click", onScrollBtnClick);


})();
