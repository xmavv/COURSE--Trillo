let chatIcon = document.querySelectorAll('.user-nav__icon-box');
let chatBox = document.querySelector('.chat');
let closeIcon = document.querySelector('.chat__head-close');
let minIcon = document.querySelector('.chat__head-min');
let maxIcon = document.querySelector('.chat__head-max');
let chatContent = document.querySelector('.chat__content');
let chatInput = document.querySelector('.chat__input-box');

let counter = 0;

chatIcon[1].addEventListener('click', () => {
    chatBox.classList.toggle("d-none");
})

closeIcon.addEventListener('click', () => {
    chatBox.classList.toggle("d-none");
})

minIcon.addEventListener('click', () => {
    counter++;
    console.log(counter);
    chatContent.classList.toggle('d-none');
    chatInput.classList.toggle('d-none');

    if(counter % 2 == 0) {
    minIcon.innerText = '_';
    chatBox.style.height = '35rem';
    } else {
        minIcon.innerText = '[]';
        chatBox.style.height = '5rem';
    }
})