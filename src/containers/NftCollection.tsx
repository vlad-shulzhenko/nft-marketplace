import { FC } from 'react';
import { MarketplaceV3, RequiredParam, useContract, useDirectListings } from '@thirdweb-dev/react';

import { NftCollection, LoadingSpinner } from '@components';

type NftCollectionContainerProps = {
  contractAddress: `0x${string}`;
};

const NftCollectionContainer: FC<NftCollectionContainerProps> = ({ contractAddress }) => {
  const { contract } = useContract(contractAddress);

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
  return <NftCollection title="CopyBAYC Collection" nfts={directListings ?? []} />;
};

export default NftCollectionContainer;
