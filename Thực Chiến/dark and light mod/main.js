var btn = document.querySelector('.toggle');
var label = document.querySelector('label');
var h1 = document.querySelector('header h1');
var h2 = document.querySelector('h2');
var pp = document.querySelector('p');
var a = document.querySelectorAll('.box-social a');
var body = document.querySelector('.content')

function toggleAnimation(){
    label.classList.toggle('animation');
    btn.classList.toggle('active');
    body.classList.toggle('bgactive');
    h1.classList.toggle('actived');
    h2.classList.toggle('actived');
    a.classList.toggle('active');

    
}

btn.addEventListener("click",toggleAnimation);
label.addEventListener('click',toggleAnimation);
