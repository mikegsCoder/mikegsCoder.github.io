import { html } from "../utils/lib.js";
import { timeline, sentenceArr } from "../utils/data.js";

const aboutTemplate = (timeline, sentence) => html` <section
        class="resume-section"
        id="about"
        style="padding-top: 5px; padding-bottom: 10px;"
    >
        <div class="resume-section-content">
            <h1 class="mb-0 text-center">
                Mihail <span class="text-primary">Sidov</span>
            </h1>
            <div class="subheading mb-5 text-center">
                <img
                    src="https://readme-typing-svg.demolab.com?font=Saira+Extra+Condensed&weight=500&size=35&duration=1800&pause=1000&color=000000&center=true&multiline=true&width=280&height=80&lines=SOFTWARE+ENGINEER;C%23+FULL-STACK+DEVELOPER"
                    alt="Typing SVG"
                />
            </div>

            <!-- Timeline -->
            <div class="row mb-3">
                <div class="col">
                    <div
                        class="timeline-steps aos-init aos-animate"
                        data-aos="fade-up"
                    >
                        ${timeline.map(timelineCard)}
                    </div>
                </div>
            </div>
            ${sentenceTemplate(sentence)}
        </div>
    </section>
    <hr class="m-0" />`;

const timelineCard = (period) => html` <div class="timeline-step">
    <div
        class="timeline-content"
        data-toggle="popover"
        data-trigger="hover"
        data-placement="top"
    >
        <div class="inner-circle"></div>
        <p class="h4 mt-3 mb-1">${period.date}</p>
        ${period.activities.map((x) =>
            x == "Hello World!"
                ? html`<p
                      class="h5 text-muted mb-1 mb-lg-1"
                      style="padding-top: 2.2rem"
                  >
                      ${x}
                  </p>`
                : html`<p class="h6 text-muted mb-1 mb-lg-1">- ${x}</p>`
        )}
        <img
            src="./img/AboutImages/${period.image}"
            class="card-img mb-1 mb-lg-1 shadow"
            alt="Hello Programming"
            style="margin-top: ${period.marginTop}"
        />
    </div>
</div>`;

const sentenceTemplate = (sentence) => html` <div class="mb-4">
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

export async function aboutPage(ctx) {
    const sentence =
        sentenceArr[Math.floor(Math.random() * sentenceArr.length)];
    
    ctx.render(aboutTemplate(timeline, sentence));
}
