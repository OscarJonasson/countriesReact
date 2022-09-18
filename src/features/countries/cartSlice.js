import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: JSON.parse(localStorage.getItem('cartData')) || [],

  reducers: {
    updateLocalStorage: (state, action) => {
      localStorage.setItem('cartData', JSON.stringify(action.payload));
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
  return async (dispatch) => {
    // console.log(!localStorage.getItem('cartData'));

    // if (!localStorage.getItem('cartData')) {
    //   const cartLocalStorage = (await localStorage.getItem('cartData'))
    //     ? JSON.parse(localStorage.getItem('cartData'))
    //     : [];
    //   localStorage.setItem('cartData', JSON.stringify(cartLocalStorage));
    // }
    dispatch(updateLocalStorage(data));
    // localStorage.setItem('cartData', JSON.stringify(cartLocalStorage));

    // console.log('cartLocalS', cartLocalStorage);

    // cartLocalStorage
    //   ? dispatch(addFavorite(cartLocalStorage))
    //   : dispatch(addFavorite(''));
    // dispatch(addFavorite(cartLocalStorage));
    // const favorites = await dispatch(addFavorite());
    // localStorage.setItem('cartData', JSON.stringify(data));
    // const cartData = localStorage.getItem('cartData')
    //   ? localStorage.getItem('cartData')
    //   : localStorage.setItem([]);
    // localStorage.setItem('cartData', JSON.stringify(cartData));
  };
};

export const { addFavorite, removeFavorite, updateLocalStorage } =
  cartSlice.actions;
export default cartSlice.reducer;
