import { CONFIG } from '../config';
import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from '@reduxjs/toolkit/query/react';

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

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: baseQueryWithReauth,
  tagTypes: [ApiTags.Product, ApiTags.Orders, ApiTags.CurrentUser],
  endpoints: () => ({}),
});
