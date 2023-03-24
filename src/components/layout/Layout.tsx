import { PropsWithChildren } from 'react';

import { Header } from './Header';

export const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
    </div>
  );
};
