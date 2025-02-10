export const isActivePath = (pathname: string, currentPathname: string) =>
  pathname === '/'
    ? currentPathname === '/'
    : currentPathname.startsWith(pathname);
