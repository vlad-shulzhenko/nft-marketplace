'use client';
import {
  ThirdwebProvider,
  metamaskWallet,
  coinbaseWallet,
  walletConnect,
  trustWallet,
  rainbowWallet,
} from '@thirdweb-dev/react';
import { FC, ReactNode } from 'react';
import { Inter as FontSans } from 'next/font/google';

import { ACTIVE_CHAIN } from '@constants';
import { cn } from '@/src/lib/utils';

import './globals.css';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => (
  <html lang="en">
    <head>
      <title>Serious Shark</title>
    </head>
    <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
      <ThirdwebProvider
        clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID}
        activeChain={ACTIVE_CHAIN}
        supportedWallets={[
          metamaskWallet({ recommended: true }),
          trustWallet(),
          coinbaseWallet(),
          rainbowWallet(),
          walletConnect(),
        ]}
        theme="dark"
      >
        {children}
      </ThirdwebProvider>
    </body>
  </html>
);

export default RootLayout;
