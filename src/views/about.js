import { html } from '../lib.js';

const aboutTemplate = (timeline, sentence, socialIcons) => html`
<section class="resume-section" id="about" style="padding-top: 38px; padding-bottom: 38px;">
    <div class="resume-section-content">
        <h1 class="mb-0">
            Mihail <span class="text-primary">Sidov</span>
        </h1>
        <div class="subheading mb-5" href="https://softuni.bg/">
            Student at SoftUni
        </div>

        <!-- Timeline -->
        <div class="row mb-3">
            <div class="col">
                <div class="timeline-steps aos-init aos-animate" data-aos="fade-up">
                    ${timeline.map(timelineCard)}
                </div>
            </div>
        </div>

        ${sentenceTemplate(sentence)}

        <div class="social-icons">
            ${socialIcons.map(socialIconsCard)}
        </div>

    </div>
</section>
<hr class="m-0" />`;

const timelineCard = (period) => html`
<div class="timeline-step">
    <div class="timeline-content" data-toggle="popover" data-trigger="hover" data-placement="top">
        <div class="inner-circle"></div>
        <p class="h4 mt-3 mb-1">${period.date}</p>

        ${period.activities
            .map(x => html`<p class="h6 text-muted mb-1 mb-lg-1">- ${x}</p>`)}

        <img src="../../img/${period.image}" class="card-img mb-1 mb-lg-1" alt="Hello Programming">
    </div>
</div>`;

const sentenceTemplate = (sentence) => html`
<div class="mb-4">
    <blockquote class="blockquote text-center">
        <p class="mb-0">
            <i class="fas fa-quote-left text-primary"></i>
            ${sentence.content}
            <i class="fas fa-quote-right text-primary"></i>
        </p>
        <footer class="blockquote-footer">
            <cite>${sentence.author}</cite>
        </footer>
    </blockquote>
</div>`;

const socialIconsCard = (icon) => html`
<a class="social-icon" href=${icon.url} target="_blank">
    <i class=${icon.class}></i>
</a>`;

export async function aboutPage(ctx) {
    ctx.render(aboutTemplate(timeline, sentence, socialIcons));
};

const timeline = [
    {
        date: 'September 2020',
        activities: ['Started a free programming basics course in C# out of curiosity. I was attracted by programming and I foud I am good at it and I like it!',
            'Hello World!'],
        image: "hello-world.jpg"
    },
    {
        date: '2021',
        activities: ['Programming Fundamentals with C#',
            'C# Advanced',
            'C# Object Oriented Programming',
            'Fundamentals in Mathematics',
            'Data Structures Fundamentals (with C#)',
            'Data Structures Advanced (with C#)',
            'MS SQL Server',
            'Entity Framework Core'],
        image: "learning-coding.jpg"
    },
    {
        date: '2022',
        activities: ['Algorithms Fundamentals with C#',
            'Algorithms Advanced with C#',
            'Java Script Advanced',
            'Java Script Applications'],
        image: "coding-1.jpg"
    }
];

const sentence = {
    content: 'Before software can be reusable it first has to be usable.',
    author: 'Ralph Johnson'
}

const socialIcons = [
    {
        url: 'https://github.com/mikegsCoder',
        class: 'fab fa-github'
    },
    // {
    //     url: 'https://www.linkedin.com/in/mihail-sidov/',
    //     class: 'fab fa-linkedin-in'
    // }
];