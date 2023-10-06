import { heroes } from '../data/heroes';

export const getHeroesByPublisher = (publisher) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if (!validPublisher.includes(publisher)) {
        throw new Error(`${publisher} no existe en la BD`);
    }

    return heroes.filter((hereo) => {
        return hereo.publisher === publisher
    })
}