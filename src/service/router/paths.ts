export enum BasePath {
  main = '/',
  dashboard = '/dashboard',
  auth = '/auth',
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

  get basePaths() {
    return Object.values(BasePath);
  }
}

export const paths = new Paths();
