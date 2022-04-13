import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { fetchApi } from "../services/fectchApi";
import useReducer from "./reducer/useReducer";

export const store = configureStore({
    reducer: {
        [fetchApi.reducerPath]: fetchApi.reducer,
        useReducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(fetchApi.middleware),
});

setupListeners(store.dispatch);
