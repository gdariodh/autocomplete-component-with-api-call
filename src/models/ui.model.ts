import React from 'react';

export type Size = 'small' | 'medium' | 'large';
export type SizeClassMap = Record<Size, string>;

export type Breakpoint = 'sm' | 'md' | 'lg' | 'xl';
export type BreakpointClassMap = Record<Breakpoint, string>;

export interface BaseIconProps {
  width?: number;
  height?: number;
  viewBox?: string;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  strokeLinecap?: 'butt' | 'round' | 'square';
  strokeLinejoin?: 'arcs' | 'bevel' | 'miter' | 'miter-clip' | 'round';
  className?: string;
  children: React.ReactNode;
}

export interface BaseComponentProps extends React.ComponentProps<'div'> {
  className?: string;
  style?: React.CSSProperties;
  size?: Size;
}
