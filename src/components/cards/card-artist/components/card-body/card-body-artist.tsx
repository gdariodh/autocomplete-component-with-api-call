import styles from '@/components/cards/card-artist/styles/card-artist.module.css';
import { CardItemArtist, Pill, useCardArtistContext } from '@/components';

export function CardBodyArtist() {
  const { artist } = useCardArtistContext();

  if (!artist) {
    return (
      <div className={styles.cardBody}>
        <div className={styles.cardBodyList}>
          <div
            style={{
              marginTop: '1rem',
            }}
          >
            <div className={styles.cardSkeletonButton} />
          </div>
        </div>
      </div>
    );
  }

  const { followers, popularity, genres, spotifyUrl } = artist;

  return (
    <div className={styles.cardBody}>
      <div className={styles.cardBodyList}>
        {followers && (
          <CardItemArtist
            label="followers"
            value={new Intl.NumberFormat('en-US').format(Number(followers))}
            type="paragraph"
          />
        )}

        {popularity && (
          <CardItemArtist
            label="popularity"
            value={`${popularity}%`}
            type="paragraph"
          />
        )}

        {genres && genres?.length > 0 && (
          <CardItemArtist label="genres" direction="column">
            <ul className={styles.cardBodyListRow}>
              {genres?.map((g, index) => (
                <li key={index}>
                  <Pill>{g}</Pill>
                </li>
              ))}
            </ul>
          </CardItemArtist>
        )}

        {spotifyUrl && (
          <CardItemArtist label="More Info" direction="column">
            <a href={artist.spotifyUrl} target="_blank">
              View Spotify
            </a>
          </CardItemArtist>
        )}
      </div>
    </div>
  );
}
