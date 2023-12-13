import {
  IGetOrdersResponse,
  IGetProductsResponse,
  IUploadProductsFileRequest,
} from '../interfaces';
import { ApiTags } from './tags';
import { baseApi } from './baseApi';

export const productApi = baseApi.injectEndpoints({
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
