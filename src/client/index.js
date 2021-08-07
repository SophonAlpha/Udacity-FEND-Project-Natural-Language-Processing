import {doStuff} from '../client/js/component'
import '../client/styles/resets.css'
import '../client/styles/header.css'

function component() {
    const elem = document.getElementById('placeholder');
    elem.innerText = 'This text was added via JavaScript.';
    elem.classList.add('header__crimson');
    doStuff();
}

// It all starts here.
document.addEventListener('DOMContentLoaded', component);
