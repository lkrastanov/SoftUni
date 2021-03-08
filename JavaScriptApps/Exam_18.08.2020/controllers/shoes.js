import commonPartial from './partials.js';
import { setHeader } from './auth.js';
import { create, get, update, deleteOffer } from '../models/shoes.js';

export function getCreate(context) {
    setHeader(context);
    context.loadPartials(commonPartial).partial('./views/shoes/create.hbs');
}

export function postCreate(context) {
    const { name, price, imageURL, description, brand } = context.params;
    const creator = sessionStorage.getItem('user');
    const buyersList = [];

    if (name !== '' && price !== '' && imageURL !== ''
        && description !== '' && brand !== '') {

        create({ name, price, imageURL, description, brand, creator, buyersList, buyersCount: 0 })
            .then(res => {
                context.redirect('#/home');
            })
            .catch(e => console.log(e))
    }

}

export function getDetails(context) {
    setHeader(context);

    const id = context.params.id;
    get(id)
        .then(res => {
            const shoe = { ...res.data(), id: res.id };
            context.isCreator = shoe.creator === sessionStorage.getItem('user');
            context.shoe = shoe;

            const currentUser = sessionStorage.getItem('user');
            const buyersList = shoe.buyersList;
            const hasBought = buyersList.includes(currentUser);
            context.hasBought = hasBought;

            context.loadPartials(commonPartial).partial('./views/shoes/details.hbs');
        })
        .catch(e => console.log(e))
}

export function getEdit(context) {
    setHeader(context);
    const id = context.params.id;
    get(id)
        .then(res => {
            const shoe = { ...res.data(), id: res.id };
            context.shoe = shoe;
            context.loadPartials(commonPartial).partial('./views/shoes/edit.hbs');
        })
        .catch(e => console.log(e))
}

export function postEdit(context) {
    const { name, price, imageURL, description, brand } = context.params;
    const id = context.params.id;

    if (name !== '' && price !== '' && imageURL !== ''
        && description !== '' && brand !== '') {

        update(id, { name, price, imageURL, description, brand })
            .then(res => {
                context.redirect(`#/details/${id}`);
            })
            .catch(e => console.log(e))
    }
}

export function getDelete(context) {
    const id = context.params.id;

    deleteOffer(id)
        .then(res => {
            context.redirect('#/home');
        })
        .catch(e => console.log(e))
}

export function getBuy(context) {
    const id = context.params.id;
    const currentUser = sessionStorage.getItem('user');

    get(id)
        .then(res => {
            const shoe = res.data();
            const currentUser = sessionStorage.getItem('user');
            const buyersCount = shoe.buyersCount + 1;
            const buyersList = shoe.buyersList;

            buyersList.push(currentUser);

            update(id, { buyersCount, buyersList })
                .then(() => {
                    context.redirect(`#/details/${id}`);
                })
                .catch(e => console.log(e))
        })
        .catch(e => console.log(e))
}