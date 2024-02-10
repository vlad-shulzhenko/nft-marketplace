'use client';
import { FC } from 'react';
import { ConnectWallet } from '@thirdweb-dev/react';

import Logo from './Logo';

const Header: FC = (): JSX.Element => (
  <div className="flex justify-between">
    <Logo />
    <ConnectWallet modalSize="compact" switchToActiveChain hideSwitchToPersonalWallet className="bg-primary" />
  </div>
);

export default Header;
