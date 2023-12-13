import { baseApi } from './baseApi';
import {
  GetOrderInformationRequest,
  GetOrderInformationResponse,
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
    getOrders: build.query<IGetOrdersResponse, void>({
      query: () => `/order/all`,
      providesTags: [ApiTags.Orders],
    }),
  }),
});

export const {
  useGetOrderInformationQuery,
  useGetOrdersQuery,
  useUpdateOrderMutation,
} = orderApi;
