import { FC } from 'react';
import { MediaRenderer } from '@thirdweb-dev/react';

import { Price } from '@models';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@components/ui/card';
import { Button } from '@components/ui/button';

type NftItemProps = {
  id: string;
  imageUrl: string;
  name: string;
  price: Price;
  onBuy: VoidFunction;
  onDetails: VoidFunction;
};

const NftItem: FC<NftItemProps> = ({ id, imageUrl, name, price, onBuy, onDetails }) => (
  <Card key={id} className="min-w-72 bg-card-foreground text-white border-primary">
    <CardHeader className="px-0 pt-0">
      <MediaRenderer src={imageUrl} width="288px" height="288px" alt={id} className="rounded-t-lg self-center" />
    </CardHeader>
    <CardContent>
      <CardTitle>{name}</CardTitle>
      <CardDescription>
        {price.amount} {price.currency}
      </CardDescription>
    </CardContent>
    <CardFooter className="flex gap-4">
      <Button onClick={onBuy} disabled className="flex-1">
        Buy Now
      </Button>
      <Button onClick={onDetails} disabled className="flex-1 bg-secondary-foreground hover:bg-zinc-800">
        Details
      </Button>
    </CardFooter>
  </Card>
);

export default NftItem;
