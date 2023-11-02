import { baseApi } from './baseApi';
import {
  GetOrderInformationRequest,
  GetOrderInformationResponse,
} from '../interfaces';
import { ApiTags } from './tags';

export const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getOrderInformation: build.query<
      GetOrderInformationResponse,
      GetOrderInformationRequest
    >({
      query: (data: GetOrderInformationRequest) => ({
        url: `/order/${data.orderId}`,
        method: 'GET',
      }),
      providesTags: [ApiTags.Product],
    }),
  }),
});

export const { useGetOrderInformationQuery } = orderApi;
