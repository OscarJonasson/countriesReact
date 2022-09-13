import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: [],

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

// export const initializeLocalStorage = () => {
//   return async (dispatch) => {
//     // dispatch(addFavorite());
//     // localStorage.setItem('cartData', JSON.stringify(data));
//     // const cartData = localStorage.getItem('cartData')
//     //   ? localStorage.getItem('cartData')
//     //   : localStorage.setItem([]);
//     // localStorage.setItem('cartData', JSON.stringify(cartData));
//   };
// };

export const { addFavorite, removeFavorite } = cartSlice.actions;
export default cartSlice.reducer;
