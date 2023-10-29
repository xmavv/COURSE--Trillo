const closeIcon = document.querySelector('.chat__head-close');
const chatIcon = document.querySelectorAll('.user-nav__icon-box');
const minIcon = document.querySelector('.chat__head-min');
const input = document.querySelector('.input-width');
const chatBox = document.querySelector('.chat');

let counter = 0;

// chat functionality

chatIcon[1].addEventListener('click', () => {
    chatBox.classList.toggle("d-none");
})

closeIcon.addEventListener('click', () => {
    chatBox.classList.toggle("d-none");
})

minIcon.addEventListener('click', () => {
    const chatContent = document.querySelector('.chat__content');
    const chatInput = document.querySelector('.chat__input-box');

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

// input suggestions display

const inputCard = document.querySelectorAll('.input__card-item');

const toggleSuggestions = e => {
    const value = e.target.value.toLowerCase().replace(/\s/g, '');
                                                            // "\s to ze bialy znak"
                                                            // /poczatek i koniec/
                                                            // /g globalnie nie tylko pierwszy
                                                            // drugi argument czym zastepujemy
    inputCard.forEach(t => {
        const isVisible = t.innerText.toLowerCase().replace(/\s/g, '').includes(value);
                                                            // dajemy replace tu i tu wowczas
                                                            // mozemy wpisac ze spacja i bez
                                                            // i zawsze nam wyszuka
                                                            // sam na to wpadlem i tak jestem
                                                            // dumny z siebie B)
        t.classList.toggle('d-none', !isVisible);
        if(value === "") t.classList.add('d-none');
    })
}

// w addeventlistenerze zawsze argument w tej funckji to jest przekazanie tego eventu
// a w zasadzie na czym ten event sie wywolal czyli u nas w inpucie
input.addEventListener('input', e => {
    toggleSuggestions(e);
})

input.addEventListener('focus', e => {
    toggleSuggestions(e);
})

inputCard.forEach(e => {
    e.addEventListener('click', t => {
        const text = t.target.innerText;
        input.value = text;
        inputCard.forEach(m => {
            m.classList.add('d-none');
        })
        //  not really know how in other way
        //  algorithm is reallly not that good now O(n) = n^2 
        //  ;/
    })
})

// blur => focused no more
// input.addEventListener('blur', () => {
//     inputCard.forEach(t => {
//         t.classList.add('d-none');
//     })
// })