var range = document.querySelector('.range')
var process = document.querySelector('.process')
var value = document.querySelector('.result')
const body = document.querySelector('body');

function updateProcess(percent){
    process.style.width = `${percent}%`;
    value.innerHTML = `${percent}%`
    body.style.backgroundColor = `rgba(0, 0, 0, ${percent / 100})`
}


range.addEventListener('mousemove',function(e){
    var processWith = e.pageX - this.offsetLeft;
    var percent = (processWith / this.offsetWidth * 100).toFixed(0);
    updateProcess(percent);
    if(percent == 100){
        process.style.borderRadius = '50px';
    }else{
        process.style.borderBottomLeftRadius = "50px";
        process.style.borderTopLeftRadius = "50px";
        process.style.borderBottomRightRadius = "0px";
        process.style.borderTopRightRadius = "0px";
    }
})
updateProcess(40)



