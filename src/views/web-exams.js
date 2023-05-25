import { projectsTemplate } from './projects.js';

export async function examsPage(ctx) {
    ctx.render(projectsTemplate(exams, 'Exams on the Web'));
};

const exams = [
    {
        title: 'Pet Care',
        subTitle: 'JS Applications Exam @ SoftUni',
        description:
            'My exam for the JS Applications course at SoftUni (February 2022). This is a simple Single Page Application where you can add, edit, remove pets or make donations.',
        codeUrl: 'https://github.com/mikegsCoder/SoftUni-JavaScript-and-Front-End-Courses/tree/main/02.%20JS-Applications/10.%20My-Exam',
        id: 'pet-care',
        builtWith: [
            'JavaScript',
            'Lit-html',
            'Page',
            'HTML 5',
            'CSS'
        ],
        projectUrl: 'https://mikegscoder.github.io/exams/petCare/',
        images: [
            {
                url: './exams/petCare/images/screenShots/Home.jpg',
                description: 'Home page'
            },
            {
                url: './exams/petCare/images/screenShots/Register.jpg',
                description: 'Register page'
            },
            {
                url: './exams/petCare/images/screenShots/Login.jpg',
                description: 'Login page'
            },
            {
                url: './exams/petCare/images/screenShots/Dashboard.jpg',
                description: 'Dashboard'
            },
            {
                url: './exams/petCare/images/screenShots/Create.jpg',
                description: 'Create pet'
            },
            {
                url: './exams/petCare/images/screenShots/Edit.jpg',
                description: 'Edit pet'
            },
            {
                url: './exams/petCare/images/screenShots/Details.jpg',
                description: 'Details page'
            }
        ]
    }
];
