import { page, render } from './lib.js'

import { navigationBar } from './views/navigation.js';

import { aboutPage } from './views/about.js';
import { experiencePage } from './views/experience.js';
import { educationPage } from './views/education.js';
import { skillsPage } from './views/skills.js';
import { projectsPage } from './views/projects.js';
import { certificationsPage } from './views/certifications.js';

const root = document.querySelector('main');
const nav = document.querySelector('nav');

page(decorateContext);

page('/', aboutPage);
page('/about', aboutPage);
page('/experience', experiencePage);
page('/education', educationPage);
page('/skills', skillsPage);
page('/projects', projectsPage);
page('/certifications', certificationsPage);

page.start();
navigationBar(nav);
page.redirect('/');

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    next();
}