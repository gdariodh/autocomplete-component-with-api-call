import {
  CardItemArtist,
  useCardArtistContext,
} from '@/components/cards/card-artist';
import styles from '@/components/cards/card-artist/styles/card-artist.module.css';
import { Title } from '@/components';

export function CardHeaderArtist() {
  const { artist, type } = useCardArtistContext();

  const isSimple = type === 'simple';

  if (!artist) {
    return (
      <div className={styles.cardHeader}>
        <div className={`${styles.cardImage} ${styles.cardSkeletonImage}`} />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1rem',
            marginTop: '1rem',
            maxWidth: '80%',
          }}
        >
          <div className={styles.cardSkeletonBox} />
          <div className={styles.cardSkeletonBox} />
        </div>
      </div>
    );
  }

  const { image, name, type: artistType } = artist;

  const classNameWrapper = `${styles.cardHeader} ${
    isSimple ? styles.cardSimpleHeader : 'xd'
  }`;

  return (
    <div className={classNameWrapper}>
      {image && (
        <img
          className={`${styles.cardImage} ${
            isSimple ? styles.cardImageSimple : ''
          }`}
          alt={artist.name}
          height={image.height}
          src={image.url}
          title={artist.name}
          width={image.width}
        />
      )}

      {name && <Title size={isSimple ? 'small' : 'large'}>{name}</Title>}

      {artistType && (
        <CardItemArtist label="type" value={artistType} type="paragraph" />
      )}
    </div>
  );
}
