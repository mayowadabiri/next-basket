import { IProduct, IResult } from '@/type';
import { dummyPlaceholderApi } from '..';

export const getProducts = dummyPlaceholderApi.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query<IResult, { limit?: number }>({
      query: (params) => ({
        url: `/products?limit=${params.limit || 10}`,
      }),
    }),
    getProduct: builder.query<IProduct, { id: number }>({
      query: (params) => ({
        url: `/products/${params.id}`,
      }),
    }),
  }),
});

export const { useGetProductQuery, useGetProductsQuery } = getProducts;
