import Router from 'next/router';

export const redirect = (path: string, current?: string | undefined): Promise<boolean | void> => {
  return Router.push(current || path, path, { shallow: true });
};
