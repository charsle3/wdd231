const comparison = document.querySelector('#comparison')
const exists = document.querySelector('#cat-yes');
const noCat = document.querySelector('#cat-no');
const select = document.querySelector('#select');
const radio = document.querySelector('#radio');
const text = document.querySelector('#text');
const breed = document.querySelector('#breed');

exists.addEventListener('click', () => {
    comparison.classList.add('showing');
    select.setAttribute('required', "");
    radio.setAttribute('required', "");
    text.setAttribute('required', "");
    breed.setAttribute('required', "");
});

noCat.addEventListener('click', () => {
    comparison.classList.remove('showing');
    select.removeAttribute('required');
    radio.removeAttribute('required');
    text.removeAttribute('required');
    breed.removeAttribute('required');
});


import GetDate from './date.mjs';
import Navigation from './navigation.mjs';
import DisclaimerModal from './disclaimer.mjs';

GetDate();
Navigation();
DisclaimerModal();