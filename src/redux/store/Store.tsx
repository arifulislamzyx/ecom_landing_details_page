import { combineReducers, configureStore } from "@reduxjs/toolkit";
import ProductReducer from "../slice/ProductSlice";

export const RootState = combineReducers({
  product: ProductReducer,
});

const store = configureStore({
  reducer: RootState,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export default store;
