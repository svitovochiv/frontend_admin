export enum BasePath {
  main = '/',
  dashboard = '/dashboard',
  login = '/login',
  dashboardPrice = '/dashboard/price',
  dashboardOrders = '/dashboard/orders',
  dashboardOrderId = '/dashboard/orders/:id',
}

class Route {
  get main() {
    return BasePath.main;
  }
  get dashboard() {
    return BasePath.dashboard;
  }

  get login() {
    return BasePath.login;
  }

  get dashboardPrice() {
    return BasePath.dashboardPrice;
  }

  get dashboardOrders() {
    return BasePath.dashboardOrders;
  }

  get dashboardOrderId() {
    return BasePath.dashboardOrderId;
  }

  dashboardOrderInfo(id: string) {
    return `${this.dashboardOrders}/${id}`;
  }

  get basePaths() {
    return Object.values(BasePath);
  }

  openOrder({ orderId }: { orderId: string }) {
    return `${this.dashboardOrders}/${orderId}`;
  }
}

export const route = new Route();
