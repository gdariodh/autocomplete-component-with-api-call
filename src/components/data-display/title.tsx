import React from 'react';
import { BaseComponentProps, SizeClassMap } from '@/models';
import styles from '@/styles/data-display.module.css';

type TitleType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

interface TitleProps extends BaseComponentProps {
  type?: TitleType;
}

const sizeClass: SizeClassMap = {
  small: styles.titleSmall,
  medium: styles.titleMedium,
  large: styles.titleLarge,
};

export function Title({
  children,
  className,
  size = 'medium',
  type = 'h2',
}: TitleProps) {
  const hRender = React.createElement(
    type as string,
    { className: `${sizeClass[size]} ${className || ''}` },
    children
  );

  return hRender;
}
