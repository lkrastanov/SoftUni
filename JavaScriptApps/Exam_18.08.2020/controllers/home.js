import commonPartial from './partials.js';
import { setHeader } from './auth.js';
import { getAll } from '../models/shoes.js';

export function getHome(context) {
    setHeader(context);
    getAll()
        .then(res => {
            const shoes = res.docs.map(x => x = { ...x.data(), id: x.id })
                .sort((a, b) => b.buyersCount - a.buyersCount);

            context.shoes = shoes;
            context.loadPartials(commonPartial).partial('./views/home.hbs');
        })
}