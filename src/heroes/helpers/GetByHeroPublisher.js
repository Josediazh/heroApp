import { heroes } from "../../assets/data/HeroesData"

export const getByHeroPublisher = (publisher) => {

    const validPublishers = ['DC Comics','Marvel Comics'];
    if (!validPublishers.includes(publisher)){
        throw new Error (`${publisher} is not valid pulisher`);
    }

    const result = heroes.filter( hero => hero.publisher === publisher);
    return result;

}