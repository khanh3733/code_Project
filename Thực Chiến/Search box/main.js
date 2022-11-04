var search_btn = document.querySelector('.search-box__btn');
var input_btn = document.querySelector('.search-box_input');

search_btn.addEventListener('click',function(){
    search_btn.parentElement.classList.toggle('open');
    search_btn.previousElementSibling.focus();
})