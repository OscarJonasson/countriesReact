import CountriesCard from '../CountriesCard/CountriesCard';
import { useSelector, useDispatch } from 'react-redux';
import classes from './Favorites.module.css';
import Search from '../Search/Search';
import { search } from '../../features/countries/countriesSlice';
import { useEffect } from 'react';
import { clearFavorites } from '../../features/countries/cartSlice';

const Favorites = () => {
  const favorites = useSelector((state) => state.cart);
  const searchTerm = useSelector((state) => state.countries.search);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(search(''));
  }, []);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className={classes.container}>
      <Search />
      <button onClick={() => dispatch(clearFavorites())}>
        Clear all favorites
      </button>
      <div className={classes.countries}>
        {/* Could go inside countriescard */}
        {favorites
          .filter((country) => {
            if (searchTerm === '') {
              return country;
            }
            return country?.name?.common
              .toLowerCase()
              .includes(searchTerm.toLowerCase());
          })
          .map((country, i) => (
            <CountriesCard key={country?.name?.common} country={country} />
          ))}
      </div>
      <button className={classes.backToTop} onClick={backToTop}>
        TOP
      </button>
    </section>
  );
};

export default Favorites;
