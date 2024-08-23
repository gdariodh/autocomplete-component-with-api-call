import { ArtistSource, ArtistDetail } from '@/models';

export const artistsSourceAdapter = (artists: any[]): ArtistSource[] => {
  return artists?.map((artist: any) => {
    const image = artist.images?.[0];

    return {
      value: artist?.id,
      label: artist?.name,
      image,
    };
  });
};

export const artistDetailAdapter = (artist: any): ArtistDetail => {
  const image = artist.images?.[0];
  const spotifyUrl = artist?.external_urls?.spotify;
  const name = artist?.name;

  return {
    value: artist?.id,
    label: name,
    name,
    followers: artist?.followers?.total,
    genres: artist?.genres,
    popularity: artist?.popularity,
    spotifyUrl,
    image,
  };
};
