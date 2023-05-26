import { page, render } from './utils/lib.js'

import { navigationBar } from './views/navigation.js';

import { aboutPage } from './views/about.js';
import { experiencePage } from './views/experience.js';
import { educationPage } from './views/education.js';
import { examsPage } from './views/web-exams.js';
import { skillsPage } from './views/skills.js';
import { certificationsPage } from './views/certifications.js';
import { diplomasPage } from './views/diplomas.js';
import { projectsPage } from './views/projects.js';

const root = document.querySelector('main');
const nav = document.querySelector('nav');

page(decorateContext);

page('/', aboutPage);
page('/about', aboutPage);
page('/experience', experiencePage);
page('/education', educationPage);
page('/skills', skillsPage);
page('/certifications', certificationsPage);
page('/diplomas', diplomasPage);
page('/projects', projectsPage);
page('/web-exams', examsPage);

page.start();
navigationBar(nav);
page.redirect('/');

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    next();
}