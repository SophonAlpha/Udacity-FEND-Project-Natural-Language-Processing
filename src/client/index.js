/*

Useful links:

- webpack guidelines:
  https://webpack.js.org/guides/development/

*/


import {doStuff} from '../client/js/component'
import '../client/styles/header.css'
import '../client/styles/resets.css'

function component() {
    const elem = document.getElementById('placeholder');
    elem.innerText = 'This text was added via JavaScript.';
    elem.classList.add('header__crimson');
    doStuff();
}

// It all starts here.
document.addEventListener('DOMContentLoaded', component);
