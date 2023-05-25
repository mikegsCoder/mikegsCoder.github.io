import { html, nothing } from '../lib.js';

const projectsTemplate = (projects) => html` 
    <section class="resume-section" id="projects">
        <div class="resume-section-content">
            <h2 class="mb-5">Projects</h2>
            ${projects.map(projectCard)}
        </div>
    </section>
    <hr class="m-0" />
`;

const projectCard = (project) => html`
    <div class="d-flex flex-column flex-md-row justify-content-between" id=${project.id}>
        <div class="flex-grow-1">
            <h3 class="mb-2" style="background-color: #f8f9fa;">${project.title}</h3>
            <div class="subheading mb-3 project-subtitle">${project.subTitle}</div>
            <p>${project.description}</p>
            <div class="row">
                <div class="col-sm-4">
                    <a
                        href=${project.codeUrl}
                        target="_blank"
                        type="button"
                        class="btn btn-outline-primary btn-lg mb-5 mt-3"
                    >
                        <i class="fab fa-github text-secondary"></i> See Source Code
                    </a>
                    <h4 class="mb-3"><i class="fas fa-tools" style="margin-top: 1rem; margin-left: 3rem"></i> Built With :</h4>
                    <ul class="mb-5" style="font-size: 13px; margin-left: 2rem">
                        ${project.builtWith.map(technologyCard)}
                    </ul>
                    ${project.projectUrl.length > 0
                        ?   html`<a 
                                    href=${project.projectUrl}
                                    target="_blank"
                                    type="button"
                                    class="btn btn-outline-primary btn-lg mb-5 mt-3"
                                >
                                    ${project.title}
                                </a>`
                        :   nothing
                    }
                </div>

                <div class="col-sm-8">
                    Screenshots Carousel:
                    <div id=${project.id + 'Carousel'} class="carousel slide" data-interval="3000" data-ride="carousel">
                        <ol class="carousel-indicators" style="bottom: -1rem;">
                            ${project.images.map((x) =>
                                project.images.indexOf(x) == 0
                                    ?   carouselIndicatorsCard(
                                            project.id,
                                            project.images.indexOf(x),
                                            'active'
                                        )
                                    :   carouselIndicatorsCard(
                                            project.id,
                                            project.images.indexOf(x),
                                            ''
                                        )
                            )}
                        </ol>
                        <div class="carousel-inner">
                            ${project.images.map((x) =>
                                project.images.indexOf(x) == 0
                                    ? carouselCard('carousel-item active', x)
                                    : carouselCard('carousel-item', x),
                            )}
                        </div>
                        <a
                            class="carousel-control-prev"
                            href=${'#' + project.id + 'Carousel'}
                            role="button"
                            data-slide="prev"
                        >
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a
                            class="carousel-control-next"
                            href=${'#' + project.id + 'Carousel'}
                            role="button"
                            data-slide="next"
                        >
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <hr/>
`;

const technologyCard = (technology) => html`<li>${technology}</li>`;

const carouselCard = (className, image) => html`
    <div class=${className}>
        <a href=${image.url} target="_blank">
            <img
                class="d-block w-100 carousel-img border border-secondary mb-5"
                src=${image.url}
                alt=${image.description}
                style="border: none!important"
            />
        </a>
    </div>
`;

const carouselIndicatorsCard = (projectId, index, className) => html`
    <li data-target=${'#' + projectId + 'Carousel'} data-slide-to=${index} class=${className}></li>
`;

export async function projectsPage(ctx) {
    ctx.render(projectsTemplate(projects));
};

const projects = [
    {
        title: 'Travel Destinations',
        subTitle: 'ReactJS course project @ SoftUni',
        description:
            'My project for the ReactJS course at SoftUni (June 2022). This is a Web application where you can share the best travel destinations you have visited and to browse such destinations shared by other users. Each destination has title, description, image URL and geolocation. The project is deployed on Firebase.',
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
        description:
            'My project for the ASP.NET Advanced course at SoftUni (October 2022). This is a Web application where you can order furniture, browse gallery with design images and send contact messages to the Interior Desing team. There are roles for Employee and Administrator inplemented. Implemented application email sender using Sendgrid. Implemented company chat using SignalR.',
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
        description:
            'My project for the Windows Presentation Foundation course. This is a desktop application where you can register, login and manage your own tasks. Each task has category, status and collection of remarks.',
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
