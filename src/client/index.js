/*

Useful links:

- webpack guidelines:
  https://webpack.js.org/guides/development/
- MeaningCloud
  https://www.meaningcloud.com/

*/

import { doStuff } from './js/component'
import '../client/styles/resets.css'
import '../client/styles/styles.css'

function component () {
    const elem = document.getElementById('placeholder');
    elem.innerText = 'This text was added via JavaScript. New text added.';
    elem.classList.add('header__crimson');
    doStuff();
}

// It all starts here.
document.addEventListener('DOMContentLoaded', component);
