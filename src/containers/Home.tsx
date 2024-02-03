'use client';
import { FC } from 'react';
import { MarketplaceV3, RequiredParam, useContract, useDirectListings } from '@thirdweb-dev/react';

import { NftCollection, LoadingSpinner } from '@components';

const HomeContainer: FC = (): JSX.Element => {
  const { contract } = useContract(process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS);

  const {
    data: directListings,
    isLoading,
    error,
  } = useDirectListings(contract as RequiredParam<MarketplaceV3>, {
    start: 0,
    count: 10,
  });

  if (isLoading) {
    return <LoadingSpinner className="text-primary" fullScreen />;
  }

  if (error) {
    return (
      <div className="flex w-full mx-auto">
        <p className="text-red-800 text-lg">{error as string}</p>
      </div>
    );
  }

  return <NftCollection nfts={directListings ?? []} />;
};

export default HomeContainer;
