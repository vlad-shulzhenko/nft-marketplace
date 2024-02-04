import { FC } from 'react';

import { Button } from '../ui/button';

const HeroSection: FC = (): JSX.Element => {
  return (
    <div className="flex gap-5 flex-wrap items-center overflow-visible py-14">
      <div className="flex-1 min-w-350 max-w-96">
        <h1 className="text-primary text-5xl font-semibold">Serious Shark</h1>
        <p className="text-secondary text-md font-medium whitespace-break-spaces mt-2">
          Portal to acquire, trade, and collect the finest NFTs with ease and security.
        </p>
        <div className="flex gap-4 mt-6">
          <Button disabled className="bg-primary text-white py-2 px-4 rounded-md">
            Get Started
          </Button>
          <Button disabled className="bg-secondary-foreground text-primary py-2 px-4 rounded-md">
            Learn More
          </Button>
        </div>
      </div>
      <div className="bg-[url('/hero.png')] aspect-square flex-1 min-h-350 h-auto bg-cover bg-center"></div>
    </div>
  );
};

export default HeroSection;
