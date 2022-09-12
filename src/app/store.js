import { configureStore } from '@reduxjs/toolkit';
import cartSlice from '../features/countries/cartSlice';
import countriesSlice from '../features/countries/countriesSlice';

export default configureStore({
  reducer: {
    countries: countriesSlice,
    cart: cartSlice,
  },
});
