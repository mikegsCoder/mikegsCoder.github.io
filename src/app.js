import { page, render } from './lib.js'

import { aboutPage } from './views/about.js';
import { skillsPage } from './views/skills.js';
import { certificationsPage } from './views/certifications.js';

const root = document.querySelector('main');

page(decorateContext);

page('/about', aboutPage);
page('/skills', skillsPage);
page('/certifications', certificationsPage);

page.start();
page.redirect('/about');

function decorateContext(ctx, next) {
    ctx.render = (content) => render(content, root);
    next();
}