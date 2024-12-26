import { html } from './lib.js';

export const projectsTemplate = (projects, title) => html` 
<section class="resume-section" id="projects">
    <div class="resume-section-content">
        <h2 class="mb-5">${title}</h2>
        ${projects.map(p => projectCard(projects, p))}
    </div>
</section>
<hr class="m-0" />`;

const projectCard = (projects, project) => html`
<div class="d-flex flex-column flex-md-row justify-content-between" id=${project.id}>
    <div class="flex-grow-1">
        <h3 class="mb-2" style="background-color: #f8f9fa;">${project.title}</h3>
        <div class="subheading mb-3 project-subtitle">${project.subTitle}</div>
        <p>${project.description}</p>
        <div class="row">
            ${projects.indexOf(project) % 2 == 0
                ? evenProjectCard(project)
                : oddProjectCard(project)
            }
        </div>
    </div>
</div>
<hr/>`;

const evenProjectCard = (project) => html`
    ${projectDescriptionCard(project, 0)}
    ${projectCarouselCard(project)}`;

const oddProjectCard = (project) => html`
    ${projectCarouselCard(project)}
    ${projectDescriptionCard(project, 6)}`;

const projectDescriptionCard = (project, padding) => html`
<div class="col-sm-4" style="padding-left: ${padding}rem;">
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
        ? html`<a 
                    href=${project.projectUrl}
                    target="_blank"
                    type="button"
                    class="btn btn-outline-primary btn-lg mb-5 mt-3"
                >
                    ${project.projectIcon
                        ? html`<img
                                  src="${project.projectIcon}"
                                  alt="Project-Icon"
                                  style="width: 1.2rem; heigth: 1.2rem; margin-top: -0.4rem;"
                              />`
                        : '🌐'
                    }
                    ${project.title}
                </a>`
        : html`<div 
                    class="btn btn-outline-primary btn-lg mb-5 mt-3"
                    style="cursor: auto !important;"
                >
                    <p style="margin: 0;">💻 This project is not</p> 
                    <p style="margin: 0;">a Web Application</p>
                </div>`
    }
</div>`;

const projectCarouselCard = (project) => html`
<div class="col-sm-8">
    Screenshots Carousel:
    <div id=${project.id + 'Carousel'} class="carousel slide" data-interval="3000" data-ride="carousel">
        <ol class="carousel-indicators" style="bottom: -1rem;">
            ${project.images.map((x) =>
                project.images.indexOf(x) == 0
                ? carouselIndicatorsCard(
                    project.id,
                    project.images.indexOf(x),
                    'active')
                : carouselIndicatorsCard(
                    project.id,
                    project.images.indexOf(x),
                    '')
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
</div>`;

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
</div>`;

const carouselIndicatorsCard = (projectId, index, className) => html`
    <li data-target=${'#' + projectId + 'Carousel'} data-slide-to=${index} class=${className}></li>`;
