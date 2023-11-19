import SuperTokens from 'supertokens-auth-react';
import ThirdPartyEmailPassword from 'supertokens-auth-react/recipe/thirdpartyemailpassword';
import Session from 'supertokens-auth-react/recipe/session';
import { CONFIG } from '../../config';

console.log('config:', CONFIG);
export const initSuperTokens = () => {
  SuperTokens.init({
    appInfo: {
      // learn more about this on https://supertokens.com/docs/thirdpartyemailpassword/appinfo
      appName: 'svitovochiv',
      apiDomain: CONFIG.API_URL,
      websiteDomain: CONFIG.WEB_URL,
      apiBasePath: '/api/auth',
      websiteBasePath: '/auth',
    },
    recipeList: [
      ThirdPartyEmailPassword.init({
        signInAndUpFeature: {},
      }),
      Session.init(),
    ],
  });
};
