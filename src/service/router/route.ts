export enum BasePath {
  main = '/',
  dashboard = '/dashboard',
  auth = '/auth',
  dashboardPrice = '/dashboard/price',
  dashboardOrders = '/dashboard/orders',
}

class Route {
  get main() {
    return BasePath.main;
  }
  get dashboard() {
    return BasePath.dashboard;
  }

  get auth() {
    return BasePath.auth;
  }

  get dashboardPrice() {
    return BasePath.dashboardPrice;
  }

  get dashboardOrders() {
    return BasePath.dashboardOrders;
  }

  dashboardOrderInfo(id: string) {
    return `${this.dashboardOrders}/${id}`;
  }

  get basePaths() {
    return Object.values(BasePath);
  }
}

export const route = new Route();
