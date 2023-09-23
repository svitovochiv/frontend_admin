import { CONFIG } from '../config';
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';
import {
  IGetProductsResponse,
  IUploadProductsFileRequest,
} from '../interfaces';
import { ApiTags } from './tags';

const baseQuery = fetchBaseQuery({
  baseUrl: `${CONFIG.API_URL}/api`,
});

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  return baseQuery(args, api, extraOptions);
};

export const productApi = createApi({
  tagTypes: [ApiTags.Product],
  reducerPath: 'productApi',
  baseQuery: baseQueryWithReauth,
  endpoints: (build) => ({
    uploadProducts: build.mutation<unknown, IUploadProductsFileRequest>({
      query: (params: IUploadProductsFileRequest) => {
        const formData = new FormData();
        formData.append('file', params.file);
        return {
          url: `/products/file`,
          method: 'POST',
          body: formData,
          formData: true,
        };
      },
      invalidatesTags: [ApiTags.Product],
    }),
    getProducts: build.query<IGetProductsResponse, void>({
      query: () => `/products`,
      providesTags: [ApiTags.Product],
    }),
  }),
});

export const { useUploadProductsMutation, useGetProductsQuery } = productApi;
