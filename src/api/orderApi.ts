import { baseApi } from './baseApi';
import { GetOrderInformationRequest } from '../interfaces';
import { ApiTags } from './tags';

export const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getOrderInformation: build.query<unknown, GetOrderInformationRequest>({
      query: (data: GetOrderInformationRequest) => ({
        url: `/order/${data.orderId}`,
        method: 'GET',
      }),
      providesTags: [ApiTags.Product],
    }),
  }),
});

export const { useGetOrderInformationQuery } = orderApi;
