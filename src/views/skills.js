import { html } from '../lib.js';

const skillsTemplate = () => html`
<section class="resume-section" id="skills">
    <div class="resume-section-content">
        <h2 class="mb-5">Skills</h2>
        <div class="subheading mb-3">Programming Languages & Tools</div>
        <ul class="list-inline dev-icons">
            <li class="list-inline-item"><i class="devicon-csharp-plain-wordmark colored"></i></li>
            <li class="list-inline-item"><i class="devicon-dot-net-plain-wordmark colored"></i></li>
            <li class="list-inline-item"><i class="devicon-dotnetcore-plain colored"></i></li>
            <li class="list-inline-item"><i class="devicon-microsoftsqlserver-plain-wordmark colored"></i></li>
            <!-- <li class="list-inline-item"><i class="devicon-html5-plain-wordmark colored"></i></li>
            <li class="list-inline-item"><i class="devicon-css3-plain-wordmark colored"></i></li>
            <li class="list-inline-item"><i class="devicon-bootstrap-plain-wordmark colored"></i></li> -->
            <li class="list-inline-item"><i class="devicon-javascript-plain colored"></i></li>
            <li class="list-inline-item"><i class="devicon-mocha-plain colored"></i></li>
            <!-- <li class="list-inline-item"><i class="devicon-typescript-plain colored"></i></li>
            <li class="list-inline-item"><i class="devicon-angularjs-plain colored"></i></li>
            <li class="list-inline-item"><i class="devicon-react-original-wordmark colored"></i></li> -->
        </ul>

        <div class="subheading mb-3 mt-4">Personal Skills</div>
        <ul class="fa-ul mb-0">
            <li>
                <i class="fa-li fa fa-arrow-right"></i> Algorithmic Thinking
            </li>
            <li>
                <i class="fa-li fa fa-arrow-right"></i> Problem Solving
            </li>
            <li>
                <i class="fa-li fa fa-arrow-right"></i> Communication
            </li>
            <li>
                <i class="fa-li fa fa-arrow-right"></i> Teamwork
            </li>
        </ul>
    </div>
</section>
<hr class="m-0" />`;

export async function skillsPage(ctx) {
    ctx.render(skillsTemplate());
};