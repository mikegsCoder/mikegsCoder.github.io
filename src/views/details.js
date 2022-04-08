import { html, nothing } from '../lib.js';
import { deleteAlbum, getAlbumById } from '../api/data.js';
import { getUserData } from '../util.js';

// const detailsTemplate = (article, isOwner, onDelete, onBack ) => html`
// <section id="details-page" class="content details">
//     <h1>${article.title}</h1>

//             <div class="details-content">
//                 <strong>Published in category ${article.category}</strong>
//                 <p>${article.content}</p>

//                 <div class="buttons">
//                     ${articleControlsTemplate(article, isOwner, onDelete)}
//                     <a @click=${onBack} href="/" class="btn edit">Back</a>
//                 </div>
//             </div>
//         </section>`

// const detailsTemplate = (car, isOwner, onDelete) => html`
// <section id="listing-details">
//     <h1>Details</h1>
//     <div class="details-info">
//         <img src=${car.imageUrl}>
//         <hr>
//         <ul class="listing-props">
//             <li><span>Brand:</span>${car.brand}</li>
//             <li><span>Model:</span>${car.model}</li>
//             <li><span>Year:</span>${car.year}</li>
//             <li><span>Price:</span>${car.price}$</li>
//         </ul>

//         <p class="description-para">${car.description}</p>

//         <div class="listings-buttons">

//             ${carControlsTemplate(car, isOwner, onDelete)}
//             <!-- <a href="#" class="button-list">Edit</a>
//             <a href="#" class="button-list">Delete</a> -->
//         </div>
//     </div>
// </section>`;

const detailsTemplate = (album, isOwner, onDelete) => html`
<section id="detailsPage">
    <div class="wrapper">
        <div class="albumCover">
            <img src=${album.imgUrl}>
        </div>
        <div class="albumInfo">
            <div class="albumText">

                <h1>Name: ${album.name}</h1>
                <h3>Artist: ${album.artist}</h3>
                <h4>Genre: ${album.genre}</h4>
                <h4>Price: $${album.price}</h4>
                <h4>Date: ${album.releaseDate}</h4>
                <p>${album.description}</p>
            </div>

            ${albumControlsTemplate(album, isOwner, onDelete)}
            <!-- Only for registered user and creator of the album-->
            <!-- <div class="actionBtn">
                <a href="#" class="edit">Edit</a>
                <a href="#" class="remove">Delete</a>
            </div> -->
        </div>
    </div>
</section>`;

const albumControlsTemplate = (album, isOwner, onDelete) => {
    if (isOwner) {
        return html`
            <div class="actionBtn">
                <a href="/edit/${album._id}" class="edit">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>
            </div>`

        // <a @click=${onDelete} href="javascript:void(0)" class="btn delete">Delete</a>
        // <a href="/edit/${article._id}" class="btn edit">Edit</a>`

    } else {
        return nothing;
    }
};

export async function detailsPage(ctx) {
    //console.log('In Details')

    const userData = getUserData();

    const album = await getAlbumById(ctx.params.id);

    const isOwner = userData && userData.id == album._ownerId;

    ctx.render(detailsTemplate(album, isOwner, onDelete));

    async function onDelete() {
        const choice = confirm(`Are you sure you want to delete this album?`);

        if (choice) {
            await deleteAlbum(ctx.params.id);
            ctx.page.redirect('/catalog');
        }
    }
}