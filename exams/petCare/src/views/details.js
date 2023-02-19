import { html, nothing } from '../lib.js';
import { deleteItem, getItemById, getMyDonationByItemId, donateItem, getDonationByItemId } from '../api/data.js';
import { getUserData } from '../util.js';

const detailsTemplate = (pet, hasUser, isOwner, onDelete, donations, showDonationButton, onDonate) => html`
<section id="detailsPage">
    <div class="details">
        <div class="animalPic">
            <img src=${pet.image}>
        </div>
        <div>
            <div class="animalInfo">
                <h1>Name: ${pet.name}</h1>
                <h3>Breed: ${pet.breed}</h3>
                <h4>Age: ${pet.age}</h4>
                <h4>Weight: ${pet.weight}</h4>
                <h4 class="donation">Donation: ${donations * 100}$</h4>
            </div>

            ${hasUser
                ? html`
                <div class="actionBtn">
                    ${petControlTemplate(pet, isOwner, onDelete)}
                    ${donateControlTemplate(showDonationButton, onDonate)}
                </div>`
                : nothing}

        </div>
    </div>
</section>`;

const petControlTemplate = (pet, isOwner, onDelete) => {
    if (isOwner) {
        return html`
            <a href="/edit/${pet._id}" class="edit">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" class="remove">Delete</a>`
    } else {
        return nothing;
    }
};

const donateControlTemplate = (showDonationButton, onDonate) => {
    if (showDonationButton) {
        return html`<a @click=${onDonate} href="javascript:void(0)" class="donate">Donate</a>`;
    } else {
        return nothing;
    }
};

export async function detailsPage(ctx) {
    const userData = getUserData();
    const hasUser = Boolean(userData);
    const [pet, donations, hasDonation] = await Promise.all([
        getItemById(ctx.params.id),
        getDonationByItemId(ctx.params.id),
        userData ? getMyDonationByItemId(ctx.params.id, userData.id) : 0
    ]);

    const isOwner = userData && userData.id == pet._ownerId;
    const showDonationButton = userData != null && isOwner == false && hasDonation == false;

    ctx.render(detailsTemplate(pet, hasUser, isOwner, onDelete, donations, showDonationButton, onDonate));

    async function onDelete() {
        const choice = confirm(`Are you sure you want to delete this pet?`);

        if (choice) {
            await deleteItem(ctx.params.id);
            ctx.page.redirect('/');
        }
    }

    async function onDonate() {
        await donateItem(ctx.params.id);
        ctx.page.redirect('/details/' + ctx.params.id);
    }
}