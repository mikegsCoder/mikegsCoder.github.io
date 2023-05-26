import { html } from '../utils/lib.js';
import { diplomas } from '../utils/data.js';

const diplomasTemplate = (diplomas) => html`
<section class="resume-section" id="diplomas" style="padding-top: 38px; padding-bottom: 38px;">
    <div class="resume-section-content">
        <h2 class="mb-4">Diplomas</h2>
        <hr class="mb-3" style="margin-bottom: 2rem !important;"/>
        <div class="row">
        
            ${diplomas.map(diplomaCard)}

        </div>
    </div>
</section>
<hr class="m-0" />`;

const diplomaCard = (diploma) => html`
<div class="col-6">
    <p>
        <img class="img-responsive border border-secondary" style="max-width: 94%;"
            src=${diploma.img} alt="Diploma" />
    </p>
    <p>
        Check the validity of this document
        <a href=${diploma.url} target="blank">
            here <i class="fas fa-hand-pointer"></i>
        </a>
    </p>
</div>`;

export async function diplomasPage(ctx) {
    ctx.render(diplomasTemplate(diplomas));
};
