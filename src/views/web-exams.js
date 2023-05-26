import { projectsTemplate } from '../utils/projectsTemplate.js'

export async function examsPage(ctx) {
    ctx.render(projectsTemplate(exams, 'Exams on the Web'));
};

const exams = [
    {
        title: 'Pet Care',
        subTitle: 'JS Applications Exam @ SoftUni',
        description: 'My exam for the JS Applications course at SoftUni (February 2022). This is a simple Single Page Application where you can add, edit, remove pets or make donations.',
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
    },
    {
        title: 'Book Library',
        subTitle: 'ASP.NET Fundamentals Exam @ SoftUni',
        description: 'My exam for the ASP.NET Fundamentals course at SoftUni (September 2022). This is a simple Web Application where you can add books to the library, add them to your wish list or remove them.',
        codeUrl: 'https://github.com/mikegsCoder/SoftUni-CSharp-Main-Program/tree/main/07.%20ASP.NET-Fundamentals/12.%20My_Exam',
        id: 'book-library',
        builtWith: [
            'C#',
            'ASP.NET',
            'EF Core',
            'HTML 5',
            'CSS'
        ],
        projectUrl: 'http://mikegscoderasp-001-site2.atempurl.com/',
        images: [
            {
                url: './img/BookLibrary/HomePage.jpg',
                description: 'Home page'
            },
            {
                url: './img/BookLibrary/Register.jpg',
                description: 'Register page'
            },
            {
                url: './img/BookLibrary/Login.jpg',
                description: 'Login page'
            },
            {
                url: './img/BookLibrary/AllBooks.jpg',
                description: 'All books'
            },
            {
                url: './img/BookLibrary/AddBook.jpg',
                description: 'Add book'
            },
            {
                url: './img/BookLibrary/MyBooks.jpg',
                description: 'My books'
            }
        ]
    }
];
