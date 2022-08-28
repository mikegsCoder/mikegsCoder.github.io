import { html } from '../lib.js';

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
    <div class="d-flex flex-column flex-md-row justify-content-between" id="beautybooking">
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
                    <a
                        href=${project.projectUrl}
                        target="_blank"
                        type="button"
                        class="btn btn-outline-primary btn-lg mb-5 mt-3"
                    >
                        ${project.title}
                    </a>
                </div>

                <div class="col-sm-8">
                    Screenshots Carousel:
                    <div id=${project.id} class="carousel slide" data-interval="3000" data-ride="carousel">
                        <ol class="carousel-indicators">
                            ${project.images.map((x) =>
                                project.images.indexOf(x) == 0
                                    ? carouselIndicatorsCard(
                                          project.id,
                                          project.images.indexOf(x),
                                          'active',
                                      )
                                    : carouselIndicatorsCard(
                                          project.id,
                                          project.images.indexOf(x),
                                          '',
                                      ),
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
                            href=${'#' + project.id}
                            role="button"
                            data-slide="prev"
                        >
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a
                            class="carousel-control-next"
                            href=${'#' + project.id}
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
`;

const technologyCard = (technology) => html`<li>${technology}</li>`;

const carouselCard = (className, image) => html`
    <div class=${className}>
        <a href=${image.url} target="_blank">
            <img
                class="d-block w-100 carousel-img border border-secondary mb-5"
                src=${image.url}
                alt=${image.description}
            />
        </a>
    </div>
`;

const carouselIndicatorsCard = (projectId, index, className) => html`
    <li data-target=${'#' + projectId} data-slide-to=${index} class=${className}></li>
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
    }
];
