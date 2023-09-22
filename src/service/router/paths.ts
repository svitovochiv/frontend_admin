export enum BasePath {
  main = '/',
  dashboard = '/dashboard',
}

class Paths {
  get main() {
    return BasePath.main;
  }
  get dashboard() {
    return BasePath.dashboard;
  }

  get basePaths() {
    return Object.values(BasePath);
  }
}

export const paths = new Paths();
