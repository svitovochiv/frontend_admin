import { baseApi } from './baseApi';
import {
  GetOrderInformationRequest,
  GetOrderInformationResponse,
  GetOrdersRequest,
  IGetOrdersResponse,
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
      providesTags: [ApiTags.Orders],
    }),
    updateOrder: build.mutation<unknown, UpdateOrderReq>({
      query: (data: UpdateOrderReq) => ({
        url: `/order/update`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: [ApiTags.Orders],
    }),
    getOrders: build.query<IGetOrdersResponse, GetOrdersRequest | undefined>({
      query: (params) => ({
        url: `/order/all`,
        method: 'GET',
        params: params,
      }),
      providesTags: [ApiTags.Orders],
    }),
  }),
});

export const {
  useGetOrderInformationQuery,
  useGetOrdersQuery,
  useUpdateOrderMutation,
} = orderApi;
