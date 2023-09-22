import { createBrowserRouter } from 'react-router-dom';
import { path } from './path';
import { getSuperTokensRoutesForReactRouterDom } from 'supertokens-auth-react/ui';
import * as reactRouterDom from 'react-router-dom';
import { ThirdPartyEmailPasswordPreBuiltUI } from 'supertokens-auth-react/recipe/thirdpartyemailpassword/prebuiltui';
import { initSuperTokens } from '../superTokens';
initSuperTokens();

export const router = createBrowserRouter([
  ...getSuperTokensRoutesForReactRouterDom(reactRouterDom, [
    ThirdPartyEmailPasswordPreBuiltUI,
  ]).map((r) => r.props),

  // ...getSuperTokensRoutesForReactRouterDom(reactRouterDom, [
  //   ThirdPartyEmailPasswordPreBuiltUI,
  // ]),
  {
    path: path.main,
    element: <div>Hello world!</div>,
  },
]);
