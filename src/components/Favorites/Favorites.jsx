import CountriesCard from '../CountriesCard/CountriesCard';
import { useSelector } from 'react-redux';
import classes from './Favorites.module.css';
import Search from '../Search/Search';

const Favorites = () => {
  const favorites = useSelector((state) => state.cart);
  const searchTerm = useSelector((state) => state.countries.search);
  console.log(favorites);

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <section className={classes.container}>
      <Search />
      <div className={classes.countries}>
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
