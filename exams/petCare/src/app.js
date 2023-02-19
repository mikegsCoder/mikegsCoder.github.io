import { page, render } from './lib.js'
import { getUserData } from './util.js';
import { homePage } from './views/home.js';
import { loginPage } from './views/login.js';
import { registerPage } from './views/register.js';
import { logout } from './api/data.js';
import { catalogPage } from './views/catalog.js';
import { createPage } from './views/create.js';
import { detailsPage } from './views/details.js';
import { editPage } from './views/edit.js';

// console.log('it works');
// import * as api from './api/data.js';
// window.api = api;

const root = document.getElementById('content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);

// page('/', () => console.log('home page'));

page('/', homePage);
page('/login', loginPage);
page('/register', registerPage);
page('/catalog', catalogPage);
page('/create', createPage);
page('/details/:id', detailsPage);
page('/edit/:id', editPage);

updateUserNav();
page.start();

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    ctx.updateUserNav = updateUserNav;
    next();
}

function updateUserNav() {
    const userData = getUserData();
    let userElements = document.querySelectorAll('.user');
    let guestElements = document.querySelectorAll('.guest')

    if (userData) {
        userElements.forEach(x => x.style.display = 'inline');
        guestElements.forEach(x => x.style.display = 'none');

    } else {
        userElements.forEach(x => x.style.display = 'none');
        guestElements.forEach(x => x.style.display = 'inline');
    }
}

function onLogout() {
    logout();
    updateUserNav();
    page.redirect('/');
}