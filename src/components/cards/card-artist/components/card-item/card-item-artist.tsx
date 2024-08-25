import React from 'react';
import { Title, Paragraph } from '@/components';
import styles from '@/components/cards/card-artist/styles/card-artist.module.css';

interface CardBodyItemProps {
  children?: React.ReactNode;
  label?: string;
  value?: string | number;
  type?: 'title' | 'paragraph';
  direction?: 'row' | 'column';
}

export function CardItemArtist({
  children,
  label,
  value,
  type,
  direction = 'row',
}: CardBodyItemProps) {
  const isColumn = direction === 'column';

  if (type === 'title') {
    return (
      <div
        className={`${styles.cardBodyItem} ${
          isColumn ? styles.cardBodyItemColumn : ''
        }`}
      >
        <Title size="small">{label}</Title>
        <Title size="small">{value}</Title>
      </div>
    );
  }

  if (type === 'paragraph') {
    return (
      <div
        className={`${styles.cardBodyItem} ${
          isColumn ? styles.cardBodyItemColumn : ''
        }`}
      >
        <Title size="small">{label}</Title>
        <Paragraph size="medium">{value}</Paragraph>
      </div>
    );
  }

  return (
    <div
      className={`${styles.cardBodyItem} ${
        isColumn ? styles.cardBodyItemColumn : ''
      }`}
    >
      <Title size="small">{label}</Title>
      {children}
    </div>
  );
}
