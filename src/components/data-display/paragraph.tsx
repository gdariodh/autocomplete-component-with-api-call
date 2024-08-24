import React from 'react';
import { BaseComponentProps, SizeClassMap } from '@/models';
import styles from '@/styles/data-display.module.css';

const sizeClass: SizeClassMap = {
  small: styles.paragraphSmall,
  medium: styles.paragraphMedium,
  large: styles.paragraphLarge,
};

export function Paragraph({
  children,
  className,
  size = 'medium',
}: BaseComponentProps) {
  return <p className={`${sizeClass[size]} ${className || ''}`}>{children}</p>;
}
