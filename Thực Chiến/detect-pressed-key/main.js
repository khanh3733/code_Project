var arlet = document.querySelector('.arlet');
var box = document.querySelector('.box');
var key = document.querySelector('.detail-result.key')
var loca = document.querySelector('.detail-result.loca')
var which = document.querySelector('.detail-result.which')
var code = document.querySelector('.detail-result.code')
var result = document.querySelector('.result');

document.addEventListener('keydown',e =>{
    arlet.classList.add('hide');
    box.classList.remove('hide');

    let keyName = e.keyCode === 32 ? 'Space' : e.key

    key.innerText = keyName;
    loca.innerText = e.location;
    which.innerText = e.which;
    code.innerText = e.code;

    result.innerText = e.which;

})
