import { ArtistDetail as IArtistDetail } from '@/models';
import UserIcon from '@/assets/icons/user.icon.svg';

interface ArtistDetailProps {
  item: IArtistDetail;
}

export function ArtistDetail({ item }: ArtistDetailProps) {
  if (!item) return null;

  const image = item?.image;

  return (
    <div>
      <h2>{item.name}</h2>
      {image ? (
        <img
          alt={item.name}
          className="suggestion-image"
          height={image.height}
          src={image.url}
          title={item.name}
          width={image.width}
        />
      ) : (
        <img src={UserIcon} alt={item.name} />
      )}

      <p>Followers: {item.followers}</p>
      <p>Genres: {item.genres.join(', ')}</p>
      <p>Popularity {item.popularity}</p>
      <a href={item.spotifyUrl} target="_blank">
        View Spotify
      </a>
    </div>
  );
}
