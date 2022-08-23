import { html } from '../lib.js';

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

const certificates = [
    {
        name: 'ReactJS - June 2022',
        date: 'August 2022',
        url: 'https://softuni.bg/certificates/details/140622/14fe73c6'
    },
    {
        name: 'HTML & CSS - May 2022',
        date: 'July 2022',
        url: 'https://softuni.bg/certificates/details/136945/49d8d54c'
    },
    {
        name: 'JS Applications - February 2022',
        date: 'Apr 2022',
        url: 'https://softuni.bg/certificates/details/130507/8da297c6'
    },
    {
        name: 'JS Advanced - January 2022',
        date: 'Feb 2022',
        url: 'https://softuni.bg/certificates/details/126433/c0bb0e29'
    },
    {
        name: 'Algorithms Advanced with C# - January 2022',
        date: 'Mar 2022',
        url: 'https://softuni.bg/certificates/details/127899/61e4eacf'
    },
    {
        name: 'Algorithms Fundamentals with C# - December 2021',
        date: 'Jan 2022',
        url: 'https://softuni.bg/certificates/details/123077/f9e03b4a'
    },
    {
        name: 'Entity Framework Core - October 2021',
        date: 'Dec 2021',
        url: 'https://softuni.bg/certificates/details/119011/23052f62'
    },
    {
        name: 'MS SQL Server - September 2021',
        date: 'Oct 2021',
        url: 'https://softuni.bg/certificates/details/113982/bdfd10f0'
    },
    {
        name: 'Data Structures Advanced (with C#) - August 2021',
        date: 'Sep 2021',
        url: 'https://softuni.bg/certificates/details/113750/5a62579e'
    },
    {
        name: 'Data Structures Fundamentals (with C#) - June 2021',
        date: 'Aug 2021',
        url: 'https://softuni.bg/certificates/details/110022/4c3da5ad'
    },
    {
        name: 'Fundamentals in Mathematics - May 2021',
        date: 'Jun 2020',
        url: 'https://softuni.bg/certificates/details/107586/2e993b11'
    },
    {
        name: 'C# OOP - June 2021',
        date: 'Aug 2021',
        url: 'https://softuni.bg/certificates/details/113008/f864a93e'
    },
    {
        name: 'C# Advanced - May 2021',
        date: 'Jul 2021',
        url: 'https://softuni.bg/certificates/details/108643/f7e63eb9'
    },
    {
        name: 'Programming Fundamentals with C# - January 2021',
        date: 'Apr 2021',
        url: 'https://softuni.bg/certificates/details/103576/f626985a'
    },
    {
        name: 'Programming Basics with C# - September 2020',
        date: 'Oct 2020',
        url: 'https://softuni.bg/certificates/details/89036/928fda17'
    }
];