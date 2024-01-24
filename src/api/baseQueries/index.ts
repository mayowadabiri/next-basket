import { axiosBaseQuery } from '@/api/interceptor/axiosBaseQuery';
import { createApi } from '@reduxjs/toolkit/dist/query/react';

export const dummyPlaceholderApi = createApi({
  baseQuery: axiosBaseQuery({
    baseUrl: `https://dummyjson.com`,
  }),
  endpoints: () => ({}),
  reducerPath: 'dummyPlaceholderApi',
  tagTypes: [],
});
