import { html } from '../utils/lib.js';
import { certificates } from '../utils/data.js'

const certificationsTemplate = (certificates) => html`
<section class="resume-section" id="certifications" style="padding-top: 38px; padding-bottom: 38px;">
    <div class="resume-section-content">
        <h2 class="mb-4">Certifications</h2>
        <hr class="m-2" />
        <ul class="fa-ul mb-5">
            ${certificates.map(certificateCard)}
        </ul>
        <hr class="m-2" />
    </div>
</section>
<hr class="m-0" />`;

const certificateCard = (certificate) => html`
<li class="mb-2">
    <span class="fa-li"><i class="fas fa-trophy text-warning"></i> </span>
    <a href=${certificate.url} target="blank">
        ${certificate.name}</a> -
    Issued ${certificate.date} by Software University.
</li>`;

export async function certificationsPage(ctx) {
    ctx.render(certificationsTemplate(certificates));
};
