import { html } from '../utils/lib.js';
import { csCourses, jsCourses, tuCourses, seCourses } from '../utils/data.js';

const educationTemplate = (csCourses, jsCourses, tuCourses, seCourses) => html`
<section class="resume-section" id="education" style="padding-top: 38px; padding-bottom: 38px;">
    <div class="resume-section-content">
        <h2>Education</h2>
        <hr class="mb-3">
        <div class="row">

            <div class="col-sm-6">
                <div class="d-flex flex-column flex-md-row justify-content-between">
                    <div class="flex-grow-1">
                        <!-- SoftUni -->
                        <h3 class="mb-0 text-left">Software University (<a href="https://softuni.bg/trainings/courses"
                                target="blank">softuni.bg</a>)</h3>
                        <div class="mb-3"><span class="text-primary">2020 - 2023</span></div>
                        <p>Average grade software engineering program: <b>6.00</b></p>
                        <p>Average grade open courses: <b>5.99</b></p>
                        <div style="font-size: 13px;">

                            <!-- C# -->
                            <div class="font-weight-bold">C# & .NET Courses:</div>
                            <ul class="list-unstyled pl-4 mr-5">
                                ${csCourses.map(educationCardSoftUni)}
                            </ul>

                            <!-- JavaScript -->
                            <div class="font-weight-bold">JavaScript & Front-End Courses:</div>
                            <ul class="list-unstyled pl-4 mr-5">
                                ${jsCourses.map(educationCardSoftUni)}
                            </ul>
                        </div>

                        <!-- Self Education -->
                        <h3 class="mb-0 text-left">Self Education (<a href="https://github.com/mikegsCoder/Self-Education/"
                            target="blank">self-education repo</a>)</h3>
                        <div class="mb-3"><span class="text-primary">2023 - present</span></div>

                        <!-- C# -->
                        <div style="font-size: 13px;">
                            <div class="font-weight-bold">C# & .NET Courses:</div>
                            <ul class="list-unstyled pl-4 mr-5">
                                ${seCourses.csCourses.map(educationCardSoftUni)}
                            </ul>
                        </div>

                        <!-- JS -->
                        <div style="font-size: 13px;">
                            <div class="font-weight-bold">JavaScript, TypeScript & Front-End Courses:</div>
                            <ul class="list-unstyled pl-4 mr-5">
                                ${seCourses.jsCourses.map(educationCardSoftUni)}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- TU Education -->
            <div class="col-sm-6">
                <div class="d-flex flex-column flex-md-row justify-content-between">
                    <div class="flex-grow-1">
                        <h3 class="mb-0 text-left">Technical University - Varna (<a href="https://www1.tu-varna.bg/tu-varna/"
                                target="blank">tu-varna.bg</a>)</h3>
                        <div class="mb-3">
                            <p class="text-primary" style="margin-bottom: 2rem;"> </p>
                        </div>
                        <!-- <p>Average grade: <b>5.50</b></p> -->
                        <div>Electrical Engineer</div>
                        <p>specialty: Electrical power plants, networks and systems</p>
                        <p>
                            <button class="btn btn-sm btn-outline-secondary" type="button" data-toggle="collapse"
                                data-target="#nbuCourses" aria-expanded="false" aria-controls="nbuCourses">
                                See Completed Courses &#x2195;&#xFE0F;
                            </button>
                        </p>
                        <div class="collapse" id="nbuCourses">
                            <div class="card card-body text-left" style="font-size: 13px;">
                                ${tuCourses.map(educationCardTU)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <hr class="m-2" />
    </div>
</section>`;

const educationCardSoftUni = (course) => html`
<li><i class="fas fa-check"></i> 
    <a href="${course.url}" target="blank">
        ${course.name}</a>
</li>`;

const educationCardTU = (course) => html`
<span><i class="fas fa-check"></i> ${course}</span>`;

export async function educationPage(ctx) {
    ctx.render(educationTemplate(csCourses, jsCourses, tuCourses, seCourses));
};
