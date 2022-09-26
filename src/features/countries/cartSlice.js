import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: JSON.parse(localStorage.getItem('cartData')) || [],

  reducers: {
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

export const updateLocalStorage = (data) => {
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

export const { addFavorite, removeFavorite, initFavorites } = cartSlice.actions;
export default cartSlice.reducer;
