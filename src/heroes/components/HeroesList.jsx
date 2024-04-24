import React, { useEffect, useMemo } from 'react'
import { getByHeroPublisher } from '../helpers/GetByHeroPublisher'
import PropTypes from 'prop-types';
import { HeroesItem } from './HeroesItem';


export const HeroesList = ({publisher}) => {

  const herosList = useMemo( () => getByHeroPublisher(publisher),[publisher]);

  return (
    <div className='row row-cols-1 row-cols-md-3 g-3'>
        {
            herosList.map( ({id,superhero,publisher,alter_ego,first_appearance,characters}) => {
                return (
                    <HeroesItem key={id} 
                    id={id}
                    superhero={superhero} 
                    alter_ego={alter_ego} 
                    first_appearance={first_appearance}
                    characters={characters}
                     />
                )
            })
        }
    </div>
  )
}

HeroesList.propTypes = {
    publisher: PropTypes.string.isRequired,
}