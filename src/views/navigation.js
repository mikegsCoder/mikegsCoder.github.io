import { html, render } from '../lib.js';

const navigationTemplate = (navContent) => html`
<a class="navbar-brand" href="/">
    <span class="d-block d-lg-none">Mihail Sidov</span>
    <span class="d-none d-lg-block">
        <img class="img-fluid img-profile rounded-circle mx-auto mb-2"
            src="https://avatars.githubusercontent.com/u/78846575?s=460&v=4" alt="mikegsCoder" />
    </span>
</a>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav">

        ${navContent.map(navCard)}

    </ul>
    <!-- VSCode logo -->
    <div class="vscode-svg d-none d-lg-block"></div>
</div>`;

const navCard = (title) => html`
<li class="nav-item">
    <a class="nav-link" href="/${title}">${title}</a>
</li>`;

export async function navigationBar(nav) {
    render(navigationTemplate(navContent), nav);
};

const navContent = [
    'about',
    'experience',
    'education',
    'skills',
    // 'diplomas',
    'certifications',
    // 'projects'
];