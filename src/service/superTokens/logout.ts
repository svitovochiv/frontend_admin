import { signOut } from 'supertokens-auth-react/recipe/thirdpartyemailpassword';

export const logout = async () => {
  await signOut();
};
