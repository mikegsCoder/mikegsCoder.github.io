import { html, nothing } from '../lib.js';
import { getAllAlbums } from '../api/data.js';
import { getUserData } from '../util.js';

// const catalogTemplate = (albums) => html`
// <section id="catalogPage">
//     <h1>All Albums</h1>

//     ${albums.length == 0
//     ? html`<p>No Albums in Catalog!</p>`
//     : albums.map(albumPreview)}

// </section>`;

const catalogTemplate = (albums) => html`
<section id="catalogPage">
    <h1>All Albums</h1>

    ${albums.length == 0
        ? html`<p>No Albums in Catalog!</p>`
        : albums.map(albumPreview)}

    <!-- <div class="card-box">
        <img src="./images/BrandiCarlile.png">
        <div>
            <div class="text-center">
                <p class="name">Name: In These Silent Days</p>
                <p class="artist">Artist: Brandi Carlile</p>
                <p class="genre">Genre: Low Country Sound Music</p>
                <p class="price">Price: $12.80</p>
                <p class="date">Release Date: October 1, 2021</p>
            </div>
            <div class="btn-group">
                <a href="#" id="details">Details</a>
            </div>
        </div>
    </div>

    <div class="card-box">
        <img src="./images/pinkFloyd.jpg">
        <div>
            <div class="text-center">
                <p class="name">Name: The Dark Side of the Moon</p>
                <p class="artist">Artist: Pink Floyd</p>
                <p class="genre">Genre: Rock Music</p>
                <p class="price">Price: $28.75</p>
                <p class="date">Release Date: March 1, 1973</p>
            </div>
            <div class="btn-group">
                <a href="#" id="details">Details</a>
            </div>
        </div>
    </div>

    <div class="card-box">
        <img src="./images/Lorde.jpg">
        <div>
            <div class="text-center">
                <p class="name">Name: Melodrama</p>
                <p class="artist">Artist: Lorde</p>
                <p class="genre">Genre: Pop Music</p>
                <p class="price">Price: $7.33</p>
                <p class="date">Release Date: June 16, 2017</p>
            </div>
            <div class="btn-group">
                <a href="#" id="details">Details</a>
            </div>
        </div>
    </div> -->

    <!--No albums in catalog-->
    <!-- <p>No Albums in Catalog!</p> -->

</section>`;

// const albumPreview = (album) => html`
// <div class="card-box">
//     <img src=${album.imgUrl}>
//     <div>
//         <div class="text-center">
//             <p class="name">Name: ${album.name}</p>
//             <p class="artist">Artist: ${album.artist}</p>
//             <p class="genre">Genre: ${album.genre}</p>
//             <p class="price">Price: $${album.price}</p>
//             <p class="date">Release Date: ${album.date}</p>
//         </div>
//         <div class="btn-group">
//             ${getUserData() 
//                 ? html`<a href="/details/${album._id}" id="details">Details</a>`
//                 : ''}

//             <!-- <a href="/details/${album._id}" id="details">Details</a> -->
//         </div>
//     </div>
// </div>`;

const albumPreview = (album) => html`
<div class="card-box">
    <img src=${album.imgUrl}>
    <div>
        <div class="text-center">
            <p class="name">Name: ${album.name}</p>
            <p class="artist">Artist: ${album.artist}</p>
            <p class="genre">Genre: ${album.genre}</p>
            <p class="price">Price: $${album.price}</p>
            <p class="date">Release Date: ${album.date}</p>
        </div>
        ${getUserData()
        ? html`
        <div class="btn-group">
            <a href="/details/${album._id}" id="details">Details</a>
        </div>`
        : nothing}        
    </div>
</div>`;

export async function catalogPage(ctx) {
    const albums = await getAllAlbums();
    ctx.render(catalogTemplate(albums));
}