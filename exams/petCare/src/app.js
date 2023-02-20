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

const root = document.getElementById('content');
document.getElementById('logoutBtn').addEventListener('click', onLogout);

page(decorateContext);

page('/exams/petCare/', homePage);
page('/exams/petCare/login', loginPage);
page('/exams/petCare/register', registerPage);
page('/exams/petCare/catalog', catalogPage);
page('/exams/petCare/create', createPage);
page('/exams/petCare/details/:id', detailsPage);
page('/exams/petCare/edit/:id', editPage);

updateUserNav();
page.start();
// page.redirect('/');

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
    page.redirect('/exams/petCare/');
}