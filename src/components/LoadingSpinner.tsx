import { FC } from 'react';

import { cn } from '@/src/lib/utils';

export interface SvgProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  className?: string;
  fullScreen?: boolean;
}

const Icon: FC<SvgProps> = ({ size, className, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    {...props}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn('animate-spin', className)}
  >
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
);

const LoadingSpinner: FC<SvgProps> = ({ size = 48, className, fullScreen, ...props }) => {
  if (fullScreen) {
    return (
      <div className="flex justify-center items-center w-full h-hull">
        <Icon size={size} className={className} {...props} />
      </div>
    );
  }

  return <Icon size={size} className={className} {...props} />;
};

export default LoadingSpinner;
