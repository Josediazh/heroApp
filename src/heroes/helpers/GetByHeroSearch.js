import { heroes } from '../../assets/data/HeroesData';

export const GetByHeroSearch = (hero = '') => {

    const name = hero.toLocaleLowerCase().trim();
    
    if (name.length === 0 ) return [];

    return heroes.filter( hero => hero.superhero.toLocaleLowerCase().includes(name) );
    
}