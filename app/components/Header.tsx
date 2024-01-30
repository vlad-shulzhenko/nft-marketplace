'use client';
import { FC } from 'react';
import { ConnectWallet } from '@thirdweb-dev/react';

const Header: FC = (): JSX.Element => {
  return <ConnectWallet />;
};

export default Header;
