let chatIcon = document.querySelectorAll('.user-nav__icon-box');
let chatBox = document.querySelector('.chat');
let closeIcon = document.querySelector('.chat__head-close');
let minIcon = document.querySelector('.chat__head-min');

chatIcon[1].addEventListener('click', () => {
    chatBox.classList.toggle("d-none");
})

closeIcon.addEventListener('click', () => {
    chatBox.classList.toggle("d-none");
})

minIcon.addEventListener('click', () => {
    
})