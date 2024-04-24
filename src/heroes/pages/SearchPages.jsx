import { Navbar } from '../../ui/components/NavBar'
import { useForm } from '../../hooks/useForm'
import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'
import { heroes } from '../../assets/data/HeroesData'
import { GetByHeroSearch } from '../helpers/GetByHeroSearch'
import { HeroesItem } from '../components/HeroesItem'

export const SearchPages = () => {

  const navigate = useNavigate();
  const location = useLocation();
  const {q = ''} = queryString.parse(location.search);
  const resultHeroes = GetByHeroSearch(q);
  const showSearch = (q.length === 0);
  const showError  = (q.length > 0) && resultHeroes.length === 0;

  const {formState, onInputChange, onResetForm, searchHero} = useForm({
    searchHero: q
  })

  const onSearchSubmit = (event) => {
    event.preventDefault();
    if (searchHero.trim().length <= 1) return;
    navigate(`?q=${searchHero}`);
  }

  return (
    <>
      <Navbar />
      <h1>Search Hero</h1>
      <hr />
      <div className="row p-5">
        <div className="col-4">
          <h4>Searching</h4>
          <hr />
          <form aria-label='form_search'  onSubmit={onSearchSubmit}>
            <input
            aria-label='input_search' 
            name="searchHero"
            placeholder="Search a hero"
            type="text" 
            value={searchHero}
            className="form-control"
            onChange={onInputChange}
            autoComplete="on"
            list="heroes"
            />
            <datalist id="heroes">
                {
                  heroes.map(({superhero}) => {
                    return <option key={superhero} value={superhero}>{superhero}</option>
                  })
                }
            </datalist>
            <button className="btn btn-outline-primary mt-2">Search</button>
          </form>
        </div>
        <div className="col-8">
          <h4 aria-label='results_number'>Results: {resultHeroes.length}</h4>
          <hr />
          <div className="alert alert-primary animate__animated animate__fadeIn" 
            style={{ display: showSearch ? '' : 'none' }}>
              Search a hero
          </div>

          <div aria-label='alert_error' className="alert alert-danger animate__animated animate__fadeIn" 
            style={{ display: showError ? '' : 'none' }}>
              No hero with <b>{ q }</b>
          </div>
          {
            resultHeroes.map( ({id,superhero,publisher,alter_ego,first_appearance,characters}) => {
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
      </div>
    </>
  )
}