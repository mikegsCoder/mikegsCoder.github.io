import { html, nothing } from '../lib.js';
import { createAlbum } from '../api/data.js';

// const createTemplate = (onSubmit) => html`
// <section id="create-page" class="content">
//     <h1>Create Article</h1>

//     <form @submit=${onSubmit} id="create" action="#" method="">
//         <fieldset>
//             <p class="field title">
//                 <label for="create-title">Title:</label>
//                 <input type="text" id="create-title" name="title" placeholder="Enter article title">
//             </p>

//             <p class="field category">
//                 <label for="create-category">Category:</label>
//                 <input type="text" id="create-category" name="category" placeholder="Enter article category">
//             </p>
//             <p class="field">
//                 <label for="create-content">Content:</label>
//                 <textarea name="content" id="create-content"></textarea>
//             </p>

//             <p class="field submit">
//                 <input class="btn submit" type="submit" value="Create">
//             </p>

//         </fieldset>
//     </form>
// </section>`;

const createTemplate = (onSubmit) => html`
<section class="createPage">
    <form @submit=${onSubmit}>
        <fieldset>
            <legend>Add Album</legend>

            <div class="container">
                <label for="name" class="vhide">Album name</label>
                <input id="name" name="name" class="name" type="text" placeholder="Album name">

                <label for="imgUrl" class="vhide">Image Url</label>
                <input id="imgUrl" name="imgUrl" class="imgUrl" type="text" placeholder="Image Url">

                <label for="price" class="vhide">Price</label>
                <input id="price" name="price" class="price" type="text" placeholder="Price">

                <label for="releaseDate" class="vhide">Release date</label>
                <input id="releaseDate" name="releaseDate" class="releaseDate" type="text" placeholder="Release date">

                <label for="artist" class="vhide">Artist</label>
                <input id="artist" name="artist" class="artist" type="text" placeholder="Artist">

                <label for="genre" class="vhide">Genre</label>
                <input id="genre" name="genre" class="genre" type="text" placeholder="Genre">

                <label for="description" class="vhide">Description</label>
                <textarea name="description" class="description" placeholder="Description"></textarea>

                <button class="add-album" type="submit">Add New Album</button>
            </div>
        </fieldset>
    </form>
</section>`;

export function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

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

        // if (category != 'JavaScript' && category != 'C#'
        //     && category != 'Java' && category != 'Python') {
        //     return alert('Please select a valid category!');
        // }

        await createAlbum({
            name,
            imgUrl,
            price,
            releaseDate,
            artist,
            genre,
            description
        });

        ctx.page.redirect('/catalog');
    }
}