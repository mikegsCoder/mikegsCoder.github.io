import { projectsTemplate } from '../utils/projectsTemplate.js'

export async function projectsPage(ctx) {
    ctx.render(projectsTemplate(projects, 'Projects'));
};

const projects = [
    {
        title: 'Travel Destinations',
        subTitle: 'ReactJS course project @ SoftUni',
        description: 'My project for the ReactJS course at SoftUni (June 2022). This is a Web application where you can share the best travel destinations you have visited and to browse such destinations shared by other users. Each destination has title, description, image URL and geolocation. The project is deployed on Firebase.',
        codeUrl: 'https://github.com/mikegsCoder/Travel-Destinations',
        id: 'travel-destinations',
        builtWith: [
            'ReactJS',
            'React Router v6',
            'React Bootstrap',
            'React Leaflet',
            'JavaScript',
            'HTML 5',
            'CSS',
            'Font Awesome',
        ],
        projectUrl: 'https://travel-destinations-88814.firebaseapp.com/',
        images: [
            {
                url: './img/TravelDestinations/DestinationCarousel.jpg',
                description: 'Destination Carousel'
            },
            {
                url: './img/TravelDestinations/DestinationDetails.jpg',
                description: 'Destination Details'
            },
            {
                url: './img/TravelDestinations/DestinationLocation.jpg',
                description: 'Destination Location'
            },
            {
                url: './img/TravelDestinations/Register.jpg',
                description: 'Register'
            },
            {
                url: './img/TravelDestinations/CreateDestination.jpg',
                description: 'Create Destination'
            },
            {
                url: './img/TravelDestinations/CommentsList.jpg',
                description: 'Comments List'
            },
            {
                url: './img/TravelDestinations/UserProfileStatistics.jpg',
                description: 'User Profile Statistics'
            },
            {
                url: './img/TravelDestinations/404.jpg',
                description: 'Page Not Found'
            }
        ]
    },
    {
        title: 'Interior Design',
        subTitle: 'ASP.NET course project @ SoftUni',
        description: 'My project for the ASP.NET Advanced course at SoftUni (October 2022). This is a Web application where you can order furniture, browse gallery with design images and send contact messages to the Interior Desing team. There are roles for Employee and Administrator inplemented. Implemented application email sender using Sendgrid. Implemented company chat using SignalR.',
        codeUrl: 'https://github.com/mikegsCoder/Interior-Design',
        id: 'interior-design',
        builtWith: [
            'ASP.NET',
            'Entity Framework Core',
            'MS SQL',
            'JavaScript',
            'SignalR',
            'Sendgrid',
            'HTML 5',
            'CSS',
            'Font Awesome',
        ],
        projectUrl: 'http://mikegscoderasp-001-site1.atempurl.com/',
        images: [
            {
                url: './img/InteriorDesign/Home_Page.jpg',
                description: 'Home Page'
            },
            {
                url: './img/InteriorDesign/Gallery.jpg',
                description: 'Gallery'
            },
            {
                url: './img/InteriorDesign/ContactUs.jpg',
                description: 'Contact Us'
            },
            {
                url: './img/InteriorDesign/Map.jpg',
                description: 'Geolocation'
            },
            {
                url: './img/InteriorDesign/AboutUs.jpg',
                description: 'About Us'
            },
            {
                url: './img/InteriorDesign/OurTeam.jpg',
                description: 'Our Team'
            },
            {
                url: './img/InteriorDesign/AdminPanel.jpg',
                description: 'Admin Panel'
            },
            {
                url: './img/InteriorDesign/Admin_Testimonials.jpg',
                description: 'Admin Testimonials'
            },
            {
                url: './img/InteriorDesign/Admin_Gallery.jpg',
                description: 'Admin Gallery'
            }
        ]
    },
    {
        title: 'Task Manager',
        subTitle: 'Windows Presentation Foundation course project',
        description: 'My project for the Windows Presentation Foundation course. This is a desktop application where you can register, login and manage your own tasks. Each task has category, status and collection of remarks.',
        codeUrl: 'https://github.com/mikegsCoder/Task-Manager',
        id: 'task-manager',
        builtWith: [
            'WPF',
            'Entity Framework Core',
            'MS SQL',
            'C#'
        ],
        projectUrl: '',
        images: [
            {
                url: './img/TaskManager/MainWindow.jpg',
                description: 'Main Window'
            },
            {
                url: './img/TaskManager/Register.jpg',
                description: 'Register'
            },
            {
                url: './img/TaskManager/Login.jpg',
                description: 'Login'
            },
            {
                url: './img/TaskManager/AllTasks.jpg',
                description: 'All Tasks'
            },
            {
                url: './img/TaskManager/TaskAdd.jpg',
                description: 'Add Task Window'
            },
            {
                url: './img/TaskManager/TaskEdit.jpg',
                description: 'Edit Task Window'
            },
            {
                url: './img/TaskManager/TaskDelete.jpg',
                description: 'Delete Task Window'
            },
            {
                url: './img/TaskManager/Remarks.jpg',
                description: 'Remarks Window'
            },
            {
                url: './img/TaskManager/RemarkAdd.jpg',
                description: 'Add Remark Window'
            },
            {
                url: './img/TaskManager/RemarkEdit.jpg',
                description: 'Edit Remark Window'
            },
            {
                url: './img/TaskManager/RemarkDelete.jpg',
                description: 'Delete Remark Window'
            },
            {
                url: './img/TaskManager/ExportTasks.jpg',
                description: 'Export Tasks Window'
            }
        ]
    }
];
