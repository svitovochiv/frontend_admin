import { baseApi } from './baseApi';
import { CurrentUserResponse } from '../interfaces';
import { emailPasswordSignIn } from 'supertokens-auth-react/recipe/thirdpartyemailpassword';
import { ApiTags } from './tags';

export const userApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getCurrentUser: build.query<CurrentUserResponse, void>({
      query: () => `user/me`,
      providesTags: [ApiTags.CurrentUser],
    }),
    loginEmailPassword: build.mutation<
      unknown,
      { email: string; password: string }
    >({
      queryFn: async (params: { email: string; password: string }) => {
        const response = await emailPasswordSignIn({
          formFields: [
            {
              id: 'email',
              value: params.email,
            },
            {
              id: 'password',
              value: params.password,
            },
          ],
        });
        if (response.status === 'FIELD_ERROR') {
          return {
            error: {
              status: 400,
              data: {
                formFields: response.formFields,
                status: response.status,
              },
            },
          };
        }
        if (response.status === 'WRONG_CREDENTIALS_ERROR') {
          return {
            error: {
              status: 400,
              error: 'Wrong credentials',
            },
          };
        }

        return { data: response.status };
      },
      invalidatesTags: [ApiTags.CurrentUser],
    }),
  }),
  overrideExisting: false,
});

export const { useGetCurrentUserQuery, useLoginEmailPasswordMutation } =
  userApi;
