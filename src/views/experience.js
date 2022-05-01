import { html, nothing } from '../lib.js';

const experienceTemplate = (workplaces) => html`
<section class="resume-section" id="experience" style="padding-top: 38px; padding-bottom: 38px;">
    <div class="resume-section-content">
        <h2 class="mb-5">Experience</h2>
        ${workplaces.map(workplacePreview)}
    </div>
</section>`;

const workplacePreview = (workplace) => html`
<hr class="m-2" />
<div class="subheading mb-3">${workplace.name}
    ${workplace.url.length > 0
        ? html`(<a href="${workplace.url}" target="blank">eso.bg</a>)`
        : nothing}
    ${workplace.period.length > 0
        ? html`- <b><span class="text-primary">${workplace.period}</span></b>`
        : nothing}
</div>

<div class="flex-grow-1">
    ${workplace.roles.map(rolePreview)}
</div>`;

const rolePreview = (role) => html`
<div class="d-flex flex-column flex-md-row justify-content-between mb-3">
    <div class="flex-grow-1">
        <h4 class="mb-0 mr-2" style="display: inline;">${role.name}</h4>
        <p style="display: inline;">
            <button class="btn btn-sm btn-outline-secondary" type="button" data-toggle="collapse"
                data-target="#${role.identification}" aria-expanded="false" aria-controls="${role.identification}">
                See Main Responsibilities &#x2195;&#xFE0F;
            </button>
        </p>
        <div class="collapse" id="${role.identification}">
            <div class="card card-body text-left mt-3" style="font-size: 13px;">
                ${role.responsibilities.map(responsibilitiesPreview)}
            </div>
        </div>
    </div>
    <div class="flex-shrink-0">
        ${role.period.length == 0
            ? html`<span class="text-primary">${role.startDate} - ${role.endDate}</span>`
            : html`<span class="text-primary"><b>${role.period}</b> | ${role.startDate} - ${role.endDate}</span>`}
    </div>
</div>`;

const responsibilitiesPreview = (responsibility) => html`
&#x2022; ${responsibility}<br />`;

export async function experiencePage(ctx) {
    ctx.render(experienceTemplate(workplaces));
};

const workplaces = [
    {
        name: 'Electricity System Operator - Varna, Bulgaria',
        url: 'https://www.eso.bg/',
        roles: [
            {
                name: 'Relay protection engineer',
                identification: 'rpev',
                startDate: 'March 2003',
                endDate: 'Present',
                period: '', // period: 'Almost 20 yrs',
                responsibilities: [
                    'Setting up and maintenance of relay protection and automation devices in electrical substations',
                    'Setting up and maintenance of event recording and disturbance recording devices  in electrical substations',
                    'Electrical measurements and maintenance of high voltage facilities in electrical substations',
                    'Technical servicing of high voltage switchgears',
                    'Technical maintenance of high voltage facilities such as circuit breakers, disconnectors, voltage and current transformers'
                ]
            }
        ],
        startDate: 'March 2003',
        endDate: 'Present',
        period: '' // period: 'Almost 20 yrs'
    },
    {
        name: 'Electricity Supply Company - Targovishte, Bulgaria',
        url: '',
        roles: [
            {
                name: 'Relay protection engineer',
                identification: 'rpet',
                startDate: 'October 1998',
                endDate: 'March 2003',
                period: '', // period: '4 yrs 5 mos',
                responsibilities: [
                    'Setting up and maintenance of relay protection and automation devices in electrical substations',
                    'Setting up and maintenance of event recording and disturbance recording devices  in electrical substations',
                    'Electrical measurements and maintenance of high voltage facilities in electrical substations',
                    'Technical servicing of high voltage switchgears',
                    'Technical maintenance of high voltage facilities such as circuit breakers, disconnectors, voltage and current transformers'
                ]
            },
            {
                name: 'Operator in electrical substation',
                identification: 'ot',
                startDate: 'October 1997',
                endDate: 'October 1998',
                period: '', // period: '1 yr',
                responsibilities: [
                    'Technical servicing of high voltage switchgears',
                    'Manipulations in high voltage electrical switchyards such as switch on/off and change the operating mode of different facilities and devices'
                ]
            }
        ],
        startDate: 'October 1997',
        endDate: 'March 2003',
        period: '' // period: '5 yr 5 mos'
    }
];