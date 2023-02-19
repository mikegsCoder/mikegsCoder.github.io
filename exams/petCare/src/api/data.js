import * as api from './api.js';

export const login = api.login;
export const register = api.register;
export const logout = api.logout;

const endPoints = {
    getAllItems: '/data/pets?sortBy=_createdOn%20desc&distinct=name',
    createItem: '/data/pets',
    itemById: '/data/pets/',

    //----DONATION------
    donateItem: '/data/donation',
    getDonationById: (petId) => `/data/donation?where=petId%3D%22${petId}%22&distinct=_ownerId&count`,
    getMyDonationById: (petId, userId) => `/data/donation?where=petId%3D%22${petId}%22%20and%20_ownerId%3D%22${userId}%22&count`
}

export async function getAllItems() {
    return api.get(endPoints.getAllItems);
}

//----------------CRUD-----------------
export async function getItemById(id) {
    return api.get(endPoints.itemById + id);
}

export async function createItem(item) {
    return api.post(endPoints.createItem, item);
}

export async function editItem(id, item) {
    return api.put(endPoints.itemById + id, item);
}

export async function deleteItem(id) {
    return api.del(endPoints.itemById + id);
}
//-------------------------------------

//--------------DONATION---------------
export async function donateItem(petId) {
    return api.post(endPoints.donateItem, { petId });
}

export async function getDonationByItemId(petId) {
    return api.get(endPoints.getDonationById(petId));
}

export async function getMyDonationByItemId(petId, userId) {
    return api.get(endPoints.getMyDonationById(petId, userId));
}
//-------------------------------------