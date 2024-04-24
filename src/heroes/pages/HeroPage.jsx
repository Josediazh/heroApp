import React, { useMemo } from 'react'
import { Navbar } from '../../ui/components/NavBar'
import { useNavigate, useParams } from 'react-router-dom'
import { GetByHeroId } from '../helpers/GetByHeroId';

export const HeroPage = () => {

  const {id} = useParams();
  const hero = useMemo(() => GetByHeroId(id),[id]);
  const heroImgPath = `/imgs/heroes/${hero.id}.jpg` 
  const charactersSplit = hero.characters.split(',').filter( character => character != hero.alter_ego );
  const navigate = useNavigate();

  const onBackNavigation = () => {
    navigate(-1);
  }


  if(!hero){
    return <Navigate to={'/'} />
  }

  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='row mt-5'>
            <div className='col'>
              <img className='animate__animated animate__backInLeft img-thumbnail' src={heroImgPath} alt={hero.superhero} />
            </div>
            <div className='col'>
              <h1>{hero.superhero}</h1>
              <small className='text-muted'>{hero.publisher}</small>
              <hr />
              <p>{hero.alter_ego}</p>
              <p>{hero.first_appearance}</p>
              <p>{charactersSplit}</p>
              <button onClick={onBackNavigation} className='btn btn-primary'>Back</button>
            </div>
        </div>
      </div>
    </>
  )
}
