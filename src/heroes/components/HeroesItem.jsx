import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const HeroesItem = ({id,superhero,alter_ego,first_appearance,characters}) => {

  const heroImgPath = `/imgs/heroes/${id}.jpg` 
  const charactersSplit = characters.split(',').filter( character => character != alter_ego );

  return (
    <div  className='card'>
        <div className='card-body'>
            <img className='img-thumbnail' src={heroImgPath} alt={superhero} />
            <h5 aria-label='hero_name' className='card-title'>
                {superhero}
            </h5>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{`Alter ego: ${alter_ego}`}</li>
                <li className="list-group-item">{`First appearance: ${first_appearance}`}</li>
                <li className="list-group-item">{charactersSplit.join(',')}</li>
            </ul>
            <Link 
                className={'btn btn-primary'}
                to={`/hero/${id}`}
                >
                More...
            </Link>
        </div>
    </div>
  )
}


HeroesItem.propTypes = {
    superhero: PropTypes.string.isRequired,
    alter_ego: PropTypes.string.isRequired,
    first_appearance: PropTypes.string.isRequired,
    characters: PropTypes.string.isRequired,
}