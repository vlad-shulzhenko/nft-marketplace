import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ROUTES } from '@constants';

type LogoProps = {
  width?: number;
  height?: number;
};

const Logo: FC<LogoProps> = ({ width = 64, height = 64 }): JSX.Element => (
  <Link href={ROUTES.HOME}>
    <Image src="/logo.png" width={width} height={height} alt="logo" priority />
  </Link>
);

export default Logo;
