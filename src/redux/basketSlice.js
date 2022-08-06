import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  basket: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,

  reducers: {
    addToBasket: (state, action) => {
      state.basket = [...state.basket, action.payload];
    },

    addDeleteBasket: (state, action) => {
      const filteredBasket = state.basket.filter(
        (item) => item.id!== action.payload
      );
      state.basket = filteredBasket;
    },

    addCount: (state, action, count) => {
      const changeBasket = state.basket?.map((item) => {
        if (item.id === action.payload) {
          return {
            ...item,
            soni: count.payload,
          };
        }
      });
      state.basket = changeBasket;
    },
  },
});

export const { addToBasket, addCount, addDeleteBasket } = basketSlice.actions;
export default basketSlice.reducer;
