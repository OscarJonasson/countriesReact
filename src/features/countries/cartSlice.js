import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: JSON.parse(localStorage.getItem('cartData')) || [],

  reducers: {
    // needs state even if not used?
    clearFavorites: (state) => {
      localStorage.setItem('cartData', JSON.stringify([]));
    },
    addFavorite: (state, action) => {
      state.push(action.payload);
    },
    removeFavorite: (state, action) => {
      return state.filter(
        (country) => country?.name?.common !== action.payload.name?.common
      );
    },
  },
});

export const initializeLocalStorage = (data) => {
  return async () => {
    localStorage.setItem('cartData', JSON.stringify(data));
  };
};

export const clearFavorites = () => {
  return async () => {
    localStorage.setItem('cartData', JSON.stringify([]));
    window.location.reload();
  };
};

export const { addFavorite, removeFavorite, updateLocalStorage } =
  cartSlice.actions;
export default cartSlice.reducer;
