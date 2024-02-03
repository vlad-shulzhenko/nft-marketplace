import { FC } from 'react';
import { DirectListingV3 } from '@thirdweb-dev/react';

import NftItem from './NftItem';

type NftCollectionProps = {
  nfts: Array<DirectListingV3>;
};

const NftCollection: FC<NftCollectionProps> = ({ nfts }) => (
  <div className="flex flex-col gap-6">
    <h1 className="text-4xl text-secondary font-bold">CopyBAYC Collection</h1>
    <div className="flex justify-center flex-wrap gap-8">
      {nfts.map((nft) => (
        <NftItem
          key={nft.id}
          id={nft.id}
          imageUrl={nft.asset.image ?? ''}
          name={(nft.asset.name as string) ?? ''}
          price={{
            amount: nft.currencyValuePerToken.displayValue,
            currency: nft.currencyValuePerToken.symbol,
          }}
          onBuy={() => {}}
          onDetails={() => {}}
        />
      ))}
    </div>
  </div>
);

export default NftCollection;
