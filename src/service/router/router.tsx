import { createBrowserRouter } from 'react-router-dom';
import { route } from './route';
import { initSuperTokens } from '../superTokens';
import { Protected } from '../../components';
import {
  DashboardPage,
  LoginPage,
  OrderInformationPage,
  OrdersDashboardPage,
  PriceDashboardPage,
} from '../../pages';
initSuperTokens();

export const router = createBrowserRouter([
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
          {
            path: route.dashboardOrderId,
            element: <OrderInformationPage />,
          },
        ],
      },
    ],
  },
  {
    path: route.login,
    element: <LoginPage />,
  },
]);
