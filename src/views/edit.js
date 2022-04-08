import { html, nothing } from '../lib.js';
import { getAlbumById, editAlbum } from '../api/data.js';

// const editTemplate = (article, onSubmit) => html`
// <section id="edit-page" class="content">
//     <h1>Edit Article</h1>

//     <form @submit=${onSubmit} id="edit" action="#" method="">
//         <fieldset>
//             <p class="field title">
//                 <label for="title">Title:</label>
//                 <input type="text" name="title" id="title" .value=${article.title}>
//             </p>

//             <p class="field category">
//                 <label for="category">Category:</label>
//                 <input type="text" name="category" id="category" .value=${article.category}>
//             </p>
//             <p class="field">
//                 <label for="content">Content:</label>
//                 <textarea name="content" id="content" .value=${article.content}></textarea>
//             </p>

//             <p class="field submit">
//                 <input class="btn submit" type="submit" value="Save Changes">
//             </p>

//         </fieldset>
//     </form>
// </section>`;

// const editTemplate = (car, onSubmit) => html`
// <section id="edit-listing">
//     <div class="container">

//         <form @submit=${onSubmit} id="edit-form">
//             <h1>Edit Car Listing</h1>
//             <p>Please fill in this form to edit an listing.</p>
//             <hr>

//             <p>Car Brand</p>
//             <input type="text" placeholder="Enter Car Brand" name="brand" .value=${car.brand}>

//             <p>Car Model</p>
//             <input type="text" placeholder="Enter Car Model" name="model" .value=${car.model}>

//             <p>Description</p>
//             <input type="text" placeholder="Enter Description" name="description" .value=${car.description}>

//             <p>Car Year</p>
//             <input type="number" placeholder="Enter Car Year" name="year" .value=${car.year}>

//             <p>Car Image</p>
//             <input type="text" placeholder="Enter Car Image" name="imageUrl" .value=${car.imageUrl}>

//             <p>Car Price</p>
//             <input type="number" placeholder="Enter Car Price" name="price" .value=${car.price}>

//             <hr>
//             <input type="submit" class="registerbtn" value="Edit Listing">
//         </form>
//     </div>
// </section>`;

const editTemplate = (album, onSubmit) => html`
<section class="editPage">
    <form @submit=${onSubmit}>
        <fieldset>
            <legend>Edit Album</legend>

            <div class="container">
                <label for="name" class="vhide">Album name</label>
                <input id="name" name="name" class="name" type="text" .value=${album.name}>

                <label for="imgUrl" class="vhide">Image Url</label>
                <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" .value=${album.imgUrl}>

                <label for="price" class="vhide">Price</label>
                <input id="price" name="price" class="price" type="text" .value=${album.price}>

                <label for="releaseDate" class="vhide">Release date</label>
                <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" .value=${album.releaseDate}>

                <label for="artist" class="vhide">Artist</label>
                <input id="artist" name="artist" class="artist" type="text" .value=${album.artist}>

                <label for="genre" class="vhide">Genre</label>
                <input id="genre" name="genre" class="genre" type="text" .value=${album.genre}>

                <label for="description" class="vhide">Description</label>
                <textarea name="description" class="description" rows="10"
                    cols="10">${album.description}</textarea>

                <button class="edit-album" type="submit">Edit Album</button>
            </div>
        </fieldset>
    </form>
</section>`;

export async function editPage(ctx) {
    const album = await getAlbumById(ctx.params.id);
    //console.log(pet);
    ctx.render(editTemplate(album, onSubmit));

    async function onSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);

        const name = formData.get('name').trim();
        const imgUrl = formData.get('imgUrl').trim();
        const price = formData.get('price').trim();
        const releaseDate = formData.get('releaseDate').trim();
        const artist = formData.get('artist').trim();
        const genre = formData.get('genre').trim();
        const description = formData.get('description').trim();

        //if( formData.values().some(x => x == ''))
        if (name == '' || imgUrl == '' || price == '' || releaseDate == ''
            || artist == '' || genre == '' || description == '') {
            return alert('All fields are required!');
        }

        await editAlbum(ctx.params.id, {
            name,
            imgUrl,
            price,
            releaseDate,
            artist,
            genre,
            description
        });

        ctx.page.redirect('/details/' + ctx.params.id);
    }
}