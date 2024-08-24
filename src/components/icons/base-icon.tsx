import React from 'react';
import { BaseIconProps } from '@/models/ui.model';

export function BaseIcon({
  width = 24,
  height = 24,
  viewBox = '0 0 24 24',
  fill = 'none',
  stroke = 'currentColor',
  strokeWidth = 3,
  strokeLinecap = 'round',
  strokeLinejoin = 'round',
  className,
  children,
}: BaseIconProps): React.ReactElement {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox={viewBox}
      fill={fill}
      stroke={stroke}
      strokeWidth={strokeWidth}
      strokeLinecap={strokeLinecap}
      strokeLinejoin={strokeLinejoin}
      className={className}
    >
      {children}
    </svg>
  );
}
