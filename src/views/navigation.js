import { html, render } from '../utils/lib.js';
import { socialIcons } from '../utils/data.js';

const navigationTemplate = (navContent) => html`
<a class="navbar-brand" href="/">
    <span class="d-block d-lg-none">Mihail Sidov</span>
    <span class="d-none d-lg-block">
        <img class="img-fluid img-profile rounded-semi mx-auto mb-2"
            src="https://avatars.githubusercontent.com/u/78846575?s=460&v=4" alt="mikegsCoder" />
    </span>
</a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span></button>
<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav">
        ${navContent.map(navCard)}
        <div class="social-icons text-center">
            ${socialIcons.map(socialIconsCard)}
        </div>
    </ul>
    <!-- VSCode logo -->
    <div class="vscode-svg d-none d-lg-block"></div>
</div>`;

const navCard = (title) => html`
<li class="nav-item">
    <a class="nav-link" href="/${title.replace(' ', '-')}">${title}</a>
</li>`;

const socialIconsCard = (icon) => html`
<a class="social-icon" href=${icon.url} target="_blank" style="margin: 1.5rem 0.8rem;">
    <i class=${icon.class}></i>
</a>`;

export async function navigationBar(nav) {
    render(navigationTemplate(navContent), nav);
};

const navContent = [
    'about',
    'experience',
    'education',
    'web exams',
    'skills',
    'certifications',
    'diplomas',
    'projects',
];
