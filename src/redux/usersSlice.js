import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: {},
  loggedIn: false,
};

const usersSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state) => {
      state.loggedIn = true;
    },
    sing: (state) => {
      state.loggedIn = false;
    },
    delete: (state, action) => {
      const filter = state.basket.filter((item) => item.id !== action.payload);
      state.basket = filter;
    },
    getUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const { logIn, getUser } = usersSlice.actions;
export default usersSlice.reducer;
