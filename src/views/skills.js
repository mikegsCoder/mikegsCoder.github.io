import { html } from '../utils/lib.js';
import { devicons, skills } from '../utils/data.js';

const skillsTemplate = (devicons, skills) => html`
<section class="resume-section" id="skills">
    <div class="resume-section-content">
        <h2 class="mb-5">Skills</h2>
        <hr class="m-2" />
        <div class="subheading mb-3">Programming Languages & Tools</div>
        <ul class="list-inline dev-icons">
            ${devicons.map(deviconCard)}
        </ul>
        <hr class="m-2" />
        <div class="subheading mb-3 mt-4">Personal Skills</div>
        <ul class="fa-ul mb-0">
            ${skills.map(skillCard)}
        </ul>
        <hr class="m-2" />
    </div>
</section>
<hr class="m-0" />`;

const deviconCard = (devicon) => html`
<li class="list-inline-item"><i class="${devicon}"></i></li>`;

const skillCard = (skill) => html`
<li>
    <i style="margin-top: 4px;" class="fa-li fa fa-arrow-right"></i> ${skill}
</li>`;

export async function skillsPage(ctx) {
    ctx.render(skillsTemplate(devicons, skills));
};
