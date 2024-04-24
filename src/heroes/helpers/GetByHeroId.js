import React from 'react'
import { heroes } from '../../assets/data/HeroesData'

export const GetByHeroId = (heroid) => {

    const heroById = heroes.find( hero => hero.id === heroid); 
    return heroById;
  
}