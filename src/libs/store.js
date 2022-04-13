import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { fetchApi } from "../services/fectchApi";
import wordReducer from "./reducer/wordReducer";

export const store = configureStore({
    reducer: {
        wordReducer,
        [fetchApi.reducerPath]: fetchApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(fetchApi.middleware),
});

setupListeners(store.dispatch);
