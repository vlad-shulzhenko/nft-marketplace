'use client';
import { FC } from 'react';

import { HeroSection } from '@components';

import NftCollectionContainer from './NftCollection';

const HomeContainer: FC = (): JSX.Element => {
  return (
    <div className="flex flex-col gap-5">
      <HeroSection />
      <NftCollectionContainer contractAddress={process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS as `0x${string}`} />
    </div>
  );
};

export default HomeContainer;
