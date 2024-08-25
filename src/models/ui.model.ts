import React from 'react';

enum SizeValue {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
}
export type Size = `${SizeValue}`;
export type SizeClassMap = Record<Size, string>;

enum BreakpointValue {
  SMALL = 'sm',
  MEDIUM = 'md',
  LARGE = 'lg',
  EXTRA_LARGE = 'xl',
}
export type Breakpoint = `${BreakpointValue}`;
export type BreakpointClassMap = Record<Breakpoint, string>;

export interface BaseIconProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  className?: string;
  children: React.ReactNode;
}

export interface BaseComponentProps extends React.ComponentProps<'div'> {
  size?: Size;
}
