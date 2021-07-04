import dishCardTpl from './templates/foodCards.hbs';
import dishes from './menu.json';

// Variables
const foodMenu = document.querySelector('.menu');
const inputEl = document.querySelector('input');
const bodyEl = document.querySelector('body');

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
};

// Add templates
const markup = dishCardTpl(dishes);
foodMenu.insertAdjacentHTML('beforeend', markup);

// Change theme
getStorageTheme();

function changeTheme(event) {
    const checked = event.currentTarget.checked;
        
    if (checked) {
        changeClass(Theme.LIGHT, Theme.DARK);
    } else if (!checked) {
        changeClass(Theme.DARK, Theme.LIGHT);        
    }
    
    localStorage.setItem('check-position', checked);
};

function changeClass (remove, add) {
    bodyEl.classList.remove(remove);
    bodyEl.classList.add(add);
};

function getStorageTheme() {
    let savedTheme = localStorage.getItem('check-position');

    if (savedTheme && savedTheme === 'true') {
        inputEl.checked = true;
        bodyEl.classList.add(Theme.DARK);
    }
};

inputEl.addEventListener('change', changeTheme);