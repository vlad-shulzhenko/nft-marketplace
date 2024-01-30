'use client';
import { Inter as FontSans } from 'next/font/google';
import './globals.css';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { ThirdwebProvider } from '@thirdweb-dev/react';

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ThirdwebProvider clientId={process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID} activeChain="ethereum">
          {children}
        </ThirdwebProvider>
      </body>
    </html>
  );
}
