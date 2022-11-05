var btnSuccess = document.querySelector('.control .success')
var btnWarning = document.querySelector('.control .warning')
var btnError = document.querySelector('.control .error')


btnSuccess.addEventListener('click',function(){
    addToast('success');
})
btnError.addEventListener('click',function(){
    addToast('error');
})
btnWarning.addEventListener('click',function(){
    addToast('warning');
})


function addToast(status){
    let templeteInner = `<i class="fa-solid fa-circle-check"></i>
                <span class="message">This is a Success message</span>`
    switch(status){
        case 'success':
            templeteInner = `<i class="fa-solid fa-circle-check"></i>
            <span class="message">This is a ${status} message</span>`
            break;
        case 'error':
            templeteInner = `<i class="fa-solid fa-triangle-exclamation"></i>
            <span class="message">This is a ${status} message</span>`
            break;
        case 'warning':
            templeteInner = `<i class="fa-solid fa-circle-exclamation"></i>
            <span class="message">This is a ${status} message</span>`
            break;
    }
    var toast = document.createElement('div')
    toast.classList.add('toasts')
    toast.classList.add(status)
    toast.innerHTML = 
    `
            ${templeteInner}
            <span class="coutdown"></span>`
    var toastList = document.getElementById('toasts')
    toastList.appendChild(toast)
    setTimeout(function(){
        toast.style.animation = 'coutdown 3s forwards'
    },2000)
    setTimeout(function(){
        toast.style.animation = 'slide_hide 2s forwards'
    },4000)
    setTimeout(function(){
        toast.remove();
    },5000)
}

// {/* <div class="toasts success">
//             <i class="fa-solid fa-circle-check"></i>
//             <span class="message">This is a Success message</span>
//             <span class="coutdown"></span>
//         </div>
//         <div class="toasts warning">
         
//             <span class="coutdown"></span>
//         </div>
//         <div class="toasts error">
            
//             <span class="coutdown"></span>
//         </div> */}