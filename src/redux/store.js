import { configureStore } from "@reduxjs/toolkit";
import { productApi } from "../services/ProductsApi";
import { userApi } from "../services/UsersApi";
import { purchaseApi } from "../services/PurchaseApi";
import BasketReducer from "./basketSlice";
import UserReducer from "./usersSlice";

export const store = configureStore({
  reducer: {
    basket: BasketReducer,
    user:UserReducer,
    [productApi.reducerPath]: productApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [purchaseApi.reducerPath]: purchaseApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat
    (
      productApi.middleware,
       userApi.middleware,
       purchaseApi.middleware),
});
