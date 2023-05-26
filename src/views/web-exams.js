import { projectsTemplate } from '../utils/projectsTemplate.js'
import { exams } from '../utils/data.js'

export async function examsPage(ctx) {
    ctx.render(projectsTemplate(exams, 'Exams on the Web'));
};
