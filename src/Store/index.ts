import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import { Persistor, persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import productReducer from "./productsReducer/products.slice";

const persistProductsConfig = {
  key: "products",
  storage,
  whitelist: ["products"],
  blacklist: ["_persist"],
};
const persistedProductListReducer = persistReducer(
  persistProductsConfig,
  productReducer
);

export const store = configureStore({
  reducer: {
    products: persistedProductListReducer,
  },
});
export const persistor: Persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
