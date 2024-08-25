import styles from '@/components/cards/card-artist/styles/card-artist.module.css';
import {
  Provider,
  CardHeaderArtist,
  CardBodyArtist,
  CardArtistValue,
  ICardArtistProps,
} from '@/components/cards/card-artist';

export function CardArtist({
  artist,
  type = CardArtistValue.SIMPLE,
  className,
}: ICardArtistProps) {
  const isExtended = type === CardArtistValue.EXTENDED;
  const isSimple = type === CardArtistValue.SIMPLE;

  const classNameWrapper = `${styles.card} ${
    isSimple ? styles.cardSimple : ''
  } ${className}`;

  return (
    <Provider
      value={{
        artist,
        type,
      }}
    >
      <div className={classNameWrapper}>
        <CardHeaderArtist />
        {isExtended && <CardBodyArtist />}
      </div>
    </Provider>
  );
}
