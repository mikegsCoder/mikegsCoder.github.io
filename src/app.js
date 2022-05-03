import { page, render } from './lib.js'

import { aboutPage } from './views/about.js';
import { experiencePage } from './views/experience.js';
import { educationPage } from './views/education.js';
import { skillsPage } from './views/skills.js';
import { certificationsPage } from './views/certifications.js';

const root = document.querySelector('main');

page(decorateContext);

page('/', aboutPage);
page('/about', aboutPage);
page('/experience', experiencePage);
page('/education', educationPage);
page('/skills', skillsPage);
page('/certifications', certificationsPage);

page.start();
page.redirect('/');

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    next();
}