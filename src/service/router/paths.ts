export enum BasePath {
  main = '/',
  dashboard = '/dashboard',
  auth = '/auth',
  dashboardPrice = '/dashboard/price',
}

class Paths {
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

  get basePaths() {
    return Object.values(BasePath);
  }
}

export const paths = new Paths();
