import { useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { reducers as invoiceReducers } from "./invoice/invoice.slice";

export const createStore = (preloadedState) =>
  configureStore({
    reducer: { ...invoiceReducers },
    preloadedState
  });

const store = createStore({});

export const useAppDispatch = () => useDispatch();

export default store;
