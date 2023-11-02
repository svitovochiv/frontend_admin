import React from 'react';
import { emailPasswordSignIn } from 'supertokens-auth-react/recipe/thirdpartyemailpassword';
import z from 'zod';

const signInClicked = async (
  email: string = 'anton.omelyanenko.14@gmail.com',
  password: string = 'Bla123456',
) => {
  try {
    const response = await emailPasswordSignIn({
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

    if (response.status === 'FIELD_ERROR') {
      response.formFields.forEach((formField) => {
        if (formField.id === 'email') {
          // Email validation failed (for example incorrect email syntax).
          window.alert(formField.error);
        }
      });
    } else if (response.status === 'WRONG_CREDENTIALS_ERROR') {
      window.alert('Email password combination is incorrect.');
    } else if (response.status === 'SIGN_IN_NOT_ALLOWED') {
      // this can happen due to automatic account linking. Tell the user that their
      // input credentials is wrong (so that they do through the password reset flow)
    } else {
      // sign in successful. The session tokens are automatically handled by
      // the frontend SDK.
      window.location.href = '/';
    }
  } catch (err: any) {
    if (err.isSuperTokensGeneralError === true) {
      // this may be a custom error message sent from the API by you.
      window.alert(err.message);
    } else {
      window.alert('Oops! Something went wrong.');
    }
  }
};

// use form login form

enum EFormFields {
  email = 'email',
  password = 'password',
}

const errorMessages = {
  [EFormFields.email]: 'введіть коректний email',
  [EFormFields.password]: 'введіть пароль',
};

const validationSchema = z.object({
  [EFormFields.email]: z.string({
    required_error: errorMessages[EFormFields.email],
  }),
  [EFormFields.password]: z.string({
    required_error: errorMessages[EFormFields.password],
  }),
});

export const LoginPage = () => {
  return (
    <div>
      <button onClick={() => signInClicked()}>Увійти</button>
    </div>
  );
};
