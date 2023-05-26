import { projectsTemplate } from '../utils/projectsTemplate.js'
import { projects } from '../utils/data.js'

export async function projectsPage(ctx) {
    ctx.render(projectsTemplate(projects, 'Projects'));
};
