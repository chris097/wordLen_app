// codes to fetch api from server
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
// import {BASE_URL} from '../helpers/constant';

export const fetchApi = createApi({
    reducerPath: 'fetchApi',
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.dictionaryapi.dev/api/v2/entries/en/"}),
    endpoints: (builder) => ({
        getwordByName: builder.query({
            query: (word) => `/${word}`,
        }),
    }),
});

export const useFetchApi = fetchApi.endpoints.getwordByName.useQuery;