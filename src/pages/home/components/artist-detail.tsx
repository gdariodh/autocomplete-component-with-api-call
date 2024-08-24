import { ArtistDetail as IArtistDetail } from '@/models';
import styles from '@/pages/home/styles/home.module.css';
import { Pill, Title, Paragraph } from '@/components';

interface ArtistDetailProps {
  item: IArtistDetail;
}

export function ArtistDetail({ item }: ArtistDetailProps) {
  if (!item) return null;

  const image = item?.image;

  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        {image && (
          <img
            className={styles.cardImage}
            alt={item.name}
            height={image.height}
            src={image.url}
            title={item.name}
            width={image.width}
          />
        )}
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardBodyList}>
          <Title size="large">{item.name}</Title>
          <DataDisplay
            label="followers"
            value={new Intl.NumberFormat('en-US').format(
              Number(item.followers || 0)
            )}
            type="paragraph"
          />
          <DataDisplay
            label="popularity"
            value={`${item.popularity || 0}%`}
            type="paragraph"
          />

          <DataDisplay label="genres" direction="column">
            <ul className={styles.cardBodyListRow}>
              {item.genres?.map((g) => (
                <li key={g}>
                  <Pill>{g}</Pill>
                </li>
              ))}
            </ul>
          </DataDisplay>

          <DataDisplay label="More Info" direction="column">
            <a href={item.spotifyUrl} target="_blank">
              View Spotify
            </a>
          </DataDisplay>
        </div>
      </div>
    </div>
  );
}

function DataDisplay({
  children,
  label,
  value,
  type,
  direction = 'row',
}: {
  children?: React.ReactNode;
  label?: string;
  value?: string | number;
  type?: 'title' | 'paragraph';
  direction?: 'row' | 'column';
}) {
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
