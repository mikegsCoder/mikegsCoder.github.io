import { html, nothing } from '../lib.js';
import { search } from '../api/data.js';
import { getUserData } from '../util.js';

// const searchTemplate = (albums, onSearch) => html`
// <section id="searchPage">
//     <h1>Search by Name</h1>

//     <div class="search">
//         <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
//         <button @click=${onSearch} class="button-list">Search</button>
//     </div>

//     <h2>Results:</h2>

//     <!--Show after click Search button-->
//     <div class="search-result">

//         ${albums.length == 0 
//             ? html`<p class="no-result">No result.</p>` 
//             : albums.map(albumPreview)}

//     </div>
// </section>`

const searchTemplate = (albums, onSearch) => html`
<section id="searchPage">
    <h1>Search by Name</h1>

    <div class="search">
        <input id="search-input" type="text" name="search" placeholder="Enter desired albums's name">
        <button @click=${onSearch} class="button-list">Search</button>
    </div>

    <h2>Results:</h2>

    <!--Show after click Search button-->
    <div class="search-result">

        ${albums.length == 0
        ? html`<p class="no-result">No result.</p>`
        : albums.map(albumPreview)}

    </div>
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
//             <p class="date">Release Date: ${album.releaseDate}</p>
//         </div>
//         <div class="btn-group">
//             ${getUserData() 
//                 ? html`<a href="/details/${album._id}" id="details">Details</a>`
//                 : ''}
//             <!-- <a href="/details/${album._id}" id="details">Details</a> -->
//         </div>
//     </div>
// </div>`

const albumPreview = (album) => html`
<div class="card-box">
    <img src=${album.imgUrl}>
    <div>
        <div class="text-center">
            <p class="name">Name: ${album.name}</p>
            <p class="artist">Artist: ${album.artist}</p>
            <p class="genre">Genre: ${album.genre}</p>
            <p class="price">Price: $${album.price}</p>
            <p class="date">Release Date: ${album.releaseDate}</p>
        </div>
        <div class="btn-group">
            <a href="/details/${album._id}" id="details">Details</a>
        </div>
    </div>
</div>`

export async function searchPage(ctx) {
    //console.log('in search');

    let albums = [];
    ctx.render(searchTemplate(albums, onSearch));

    async function onSearch(event) {
        event.preventDefault();

        const searchElement = document.getElementById('search-input');
        const query = searchElement.value.trim();

        if (query == '') {
            return alert('Please write searcs string!')
        }

        albums = await search(query);
        searchElement.value = '';
        ctx.render(searchTemplate(albums, onSearch));
    }
}