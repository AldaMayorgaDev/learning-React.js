import { useNavigate, useLocation } from "react-router-dom";
import queryString from 'query-string';

import { useForm } from "../../../hooks/useForm";
import { getHeroesByName } from '../helpers';
import { HeroCard } from '../components/HeroCard';

export const SearchPage = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search); //Se toma el valor de query q y si no viene se asigna un '' 
  const heroes = getHeroesByName(q);

  const showSearchText = (q === '');
  const showErrorText = (q !== '' && heroes.length === 0);

  const { searchText, onInputChange } = useForm({
    searchText: q,

  });

  const onSearchSubmit = (e) => {
    e.preventDefault();
    //if (searchText.trim().length <= 1) return;


    navigate(`?q=${searchText}`);

  }
  return (
    <>
      <h2>SearchPage</h2>
      <hr />

      <div className="row">

        <div className="col-5">
          <h3>Searching</h3>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input type="text"
              name="searchText"
              placeholder="Search a hero"
              className="form-control"
              autoComplete="off"

              value={searchText}
              onChange={onInputChange} />

            <button className="btn btn-outline-primary mt-2">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h3>Results</h3>
          <hr />

          {/* {
            (q === '')
              ? <div className="alert alert-primary">Search a hero</div>
              : (heroes.length === 0) && <div className="alert alert-danger">No hero with <b>{q}</b></div>
          } */}

          <div className="alert alert-primary animate__animated animate__fadeIn"
            style={{ display: (showSearchText) ? '' : 'none' }}>
            Search a hero
          </div>

          <div className="alert alert-danger animate__animated animate__fadeIn"
            style={{ display: (showErrorText) ? '' : 'none' }}>No hero with
            <b> {q}</b>
          </div>



          {
            heroes.map(hero => (
              <HeroCard key={Number(hero.id)} {...hero} />
            ))

          }

        </div>
      </div>

    </>

  )
}
