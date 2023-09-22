import { createBrowserRouter } from 'react-router-dom';
import { paths } from './paths';
import { getSuperTokensRoutesForReactRouterDom } from 'supertokens-auth-react/ui';
import * as reactRouterDom from 'react-router-dom';
import { ThirdPartyEmailPasswordPreBuiltUI } from 'supertokens-auth-react/recipe/thirdpartyemailpassword/prebuiltui';
import { initSuperTokens } from '../superTokens';
import { Protected } from '../../components';
import { DashboardPage } from '../../pages/Dashboard/DashboardPage';
initSuperTokens();

export const router = createBrowserRouter([
  ...getSuperTokensRoutesForReactRouterDom(reactRouterDom, [
    ThirdPartyEmailPasswordPreBuiltUI,
  ]).map((r) => r.props),
  {
    path: paths.main,
    element: <Protected />,
    children: [
      {
        path: paths.dashboard,
        element: <DashboardPage />,
      },
    ],
  },
]);
