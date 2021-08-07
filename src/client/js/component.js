function component() {
    const elem = document.getElementById('placeholder');
    elem.innerText = 'This text was added via JavaScript.'
}

// It all starts here.
document.addEventListener('DOMContentLoaded', component);

