import { html } from '../lib.js';

const certificationsTemplate = (csCourses, jsCourses, tuCourses) => html`
<section class="resume-section" id="education" style="padding-top: 38px; padding-bottom: 38px;">
    <div class="resume-section-content">
        <h2>Education</h2>
        <div class="row">

            <!-- SoftUni -->
            <div class="col-sm-6">
                <hr class="mb-3">
                <div class="d-flex flex-column flex-md-row justify-content-between">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Software University (<a href="https://softuni.bg/trainings/courses"
                                target="blank">softuni.bg</a>)</h3>
                        <div class="mb-3"><span class="text-primary">2020 - Present</span></div>
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
                    </div>
                </div>
            </div>

            <!-- TU Education -->
            <div class="col-sm-6">
                <hr class="mb-3">
                <div class="d-flex flex-column flex-md-row justify-content-between">
                    <div class="flex-grow-1">
                        <h3 class="mb-0">Technical University - Varna</h3>
                        <div class="mb-3">
                            <span class="text-primary">1991 - 1996</span>
                        </div>
                        <p>Average grade: <b>5.50</b></p>
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
    ctx.render(certificationsTemplate(csCourses.reverse(), jsCourses.reverse(), tuCourses));
};

const csCourses = [
    {
        name: 'Algorithms Advanced with C# - January 2022',
        url: 'https://softuni.bg/certificates/details/127899/61e4eacf'
    },
    {
        name: 'Algorithms Fundamentals with C# - December 2021',
        url: 'https://softuni.bg/certificates/details/123077/f9e03b4a'
    },
    {
        name: 'Entity Framework Core - October 2021',
        url: 'https://softuni.bg/certificates/details/119011/23052f62'
    },
    {
        name: 'MS SQL Server - September 2021',
        url: 'https://softuni.bg/certificates/details/113982/bdfd10f0'
    },
    {
        name: 'Data Structures Advanced (with C#) - August 2021',
        url: 'https://softuni.bg/certificates/details/113750/5a62579e'
    },
    {
        name: 'Data Structures Fundamentals (with C#) - June 2021',
        url: 'https://softuni.bg/certificates/details/110022/4c3da5ad'
    },
    {
        name: 'Fundamentals in Mathematics - May 2021',
        url: 'https://softuni.bg/certificates/details/107586/2e993b11'
    },
    {
        name: 'C# OOP - June 2021',
        url: 'https://softuni.bg/certificates/details/113008/f864a93e'
    },
    {
        name: 'C# Advanced - May 2021',
        url: 'https://softuni.bg/certificates/details/108643/f7e63eb9'
    },
    {
        name: 'Programming Fundamentals with C# - January 2021',
        url: 'https://softuni.bg/certificates/details/103576/f626985a'
    },
    {
        name: 'Programming Basics with C# - September 2020',
        url: 'https://softuni.bg/certificates/details/89036/928fda17'
    }
];

const jsCourses = [
    {
        name: 'JS Applications - February 2022',
        url: 'https://softuni.bg/certificates/details/130507/8da297c6'
    },
    {
        name: 'JS Advanced - January 2022',
        url: 'https://softuni.bg/certificates/details/126433/c0bb0e29'
    },
];

const tuCourses = [
    'Linear algebra and analytical geometry',
    'Mathematical analysis - part I',
    'Physics - part I',
    'Chemistry',
    'Programming and use of computing systems - part I',
    'Techical drawing and standart',
    'Mathematical amalysis - part II',
    'Physics - part II',
    'Theoretical electrical technology - part I',
    'Technical mechanics - part I',
    'Technical drawing - project',
    'Mechanical technology',
    'English',
    'Selected chapters from mathematics',
    'Theoretical electrical technology - part II',
    'Electrical measurements',
    'Technical mechanics - part II',
    'Philosophy',
    'Programming and use of computing systems - part II',
    'Theoretical electrical technology - part III',
    'Electrotechnical materials',
    'Machine elements and mechanisms',
    'Industrial electronics',
    'Hydraulic part of Hydroelectric Power Plant',
    'Electrical apparatus',
    'Electrical machines - part I',
    'Transition Processes in Power Systems - part I',
    'Electrical networks and systems - part I',
    'General economic theory',
    'Economics and electrical planning',
    'Electrical machines - part II',
    'Thermal part of Thermal Power Plant and Nuclear Power Plant',
    'Electrical networks and systems - part II',
    'Electrical networks and systems - project',
    'Electrical part of power plants and substations - part I',
    'Organization and management of a power plant',
    'Transition Processes in Power Systems - part II',
    'Electrical part of power plants and substations - part II',
    'Electrical part of power plants and substations - project',
    'Basics of relay protection',
    'Labor protection',
    'High voltage technology',
    'Basics of automation of electric power systems',
    'Electricity supply to settlements',
    'Electricity supply to settlements - project',
    'Modes of operation of electricity systems',
    'Construction of electrical networks',
    'Mechanical part of electrical networks',
    'Design and exploitation of electrical networks',
    'Design and exploitation of electrical networks - project'
];