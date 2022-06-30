(function(){
"use strcit";

const openMenuBtn = document.querySelector('.menu');
const closeMenuBtn = document.querySelector('.menu_close');
const menu = document.querySelector('.main_nav');

const formBlock = document.querySelector('.call_back');
const form = document.querySelector('.form_btn');
const orderBtn = document.querySelector('.order_btn');
const closeFromBtn = document.querySelector('.close_form');



function toggleClass(item,itemClass){
item.classList.toggle(itemClass)
}

const onEscClose = function (block, modifer) {
    window.addEventListener("keydown", function (e) {
        e.keyCode === 27 && block.classList.contains(modifer) && block.classList.remove(modifer);
    });
}

openMenuBtn.addEventListener('click',function(e){
    e.preventDefault();
    toggleClass(menu,'main_nav--active');
});

closeMenuBtn.addEventListener('click',function(e){
    e.preventDefault();
    toggleClass(menu,'main_nav--active');
});

orderBtn.addEventListener('click',function(e){
    e.preventDefault();
    toggleClass(formBlock,'call_back-active');
});

closeFromBtn.addEventListener('click',function(e){
    e.preventDefault();
    toggleClass(formBlock,'call_back-active');
});


onEscClose(menu,'main_nav--active');
onEscClose(formBlock,'call_back-active');

})();