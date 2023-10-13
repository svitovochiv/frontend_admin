import { createBrowserRouter } from 'react-router-dom';
import { route } from './route';
import { getSuperTokensRoutesForReactRouterDom } from 'supertokens-auth-react/ui';
import * as reactRouterDom from 'react-router-dom';
import { ThirdPartyEmailPasswordPreBuiltUI } from 'supertokens-auth-react/recipe/thirdpartyemailpassword/prebuiltui';
import { initSuperTokens } from '../superTokens';
import { Protected } from '../../components';
import {
  DashboardPage,
  OrdersDashboardPage,
  PriceDashboardPage,
} from '../../pages';
initSuperTokens();

export const router = createBrowserRouter([
  ...getSuperTokensRoutesForReactRouterDom(reactRouterDom, [
    ThirdPartyEmailPasswordPreBuiltUI,
  ]).map((r) => r.props),
  {
    path: route.main,
    element: <Protected />,
    children: [
      {
        path: route.dashboard,
        element: <DashboardPage />,
        children: [
          {
            path: route.dashboardPrice,
            element: <PriceDashboardPage />,
          },
          {
            path: route.dashboardOrders,
            element: <OrdersDashboardPage />,
          },
        ],
      },
    ],
  },
]);
