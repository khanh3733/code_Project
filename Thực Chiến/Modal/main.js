const btnOpen = document.querySelector('.btnOpen');
const btnClose = document.querySelector('.btnClose');
const iconClose = document.querySelector('.iconClose');
const close = document.querySelector('.modal');

function toggleModal(){
    close.classList.toggle("hide");
}

btnOpen.addEventListener("click",toggleModal);
btnClose.addEventListener("click",toggleModal);
iconClose.addEventListener("click",toggleModal);

close.addEventListener("click", (e) => {
    if (e.target == e.currentTarget) {
        toggleModal();
    }
})