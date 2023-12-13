import { baseApi } from './baseApi';
import {
  GetOrderInformationRequest,
  GetOrderInformationResponse,
  UpdateOrderReq,
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
    updateOrder: build.mutation<unknown, UpdateOrderReq>({
      query: (data: UpdateOrderReq) => ({
        url: `/order/update`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: [ApiTags.Product],
    }),
  }),
});

export const { useGetOrderInformationQuery, useUpdateOrderMutation } = orderApi;
