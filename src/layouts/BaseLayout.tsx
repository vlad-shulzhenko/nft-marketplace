'use client';
import { FC, ReactNode } from 'react';

import { Footer, Header } from '@components';

type BaseLayoutProps = {
  children: ReactNode;
};

const BaseLayout: FC<BaseLayoutProps> = ({ children }): JSX.Element => (
  <main className="flex min-h-screen min-w-full flex-col items-center justify-between py-6 px-4 bg-secondary-foreground">
    <div className="container max-w-5xl p-0">
      <div className="flex flex-col gap-10">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  </main>
);

export default BaseLayout;
