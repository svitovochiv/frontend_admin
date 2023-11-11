import { emailPasswordSignIn } from 'supertokens-auth-react/recipe/thirdpartyemailpassword';

export const supertokensLogin = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    return emailPasswordSignIn({
      formFields: [
        {
          id: 'email',
          value: email,
        },
        {
          id: 'password',
          value: password,
        },
      ],
    });
  } catch (e) {
    console.error('login error', e);
    return {
      error: e,
    };
  }
};
