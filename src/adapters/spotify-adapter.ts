import { CardArtist } from '@/models';
import { OptionSourceAutoComplete } from '@/components/autocomplete-input.tsx';
import { removeDuplicates } from '@/utils';

export const artistsSourceAdapter = (
  artists: any[]
): OptionSourceAutoComplete[] => {
  return artists?.map((artist: any) => {
    const image = artist.images?.[0];

    return {
      value: artist?.id,
      label: artist?.name,
      image,
    };
  });
};

export const artistDetailAdapter = (artist: any): CardArtist => {
  const image = artist.images?.[0];
  const spotifyUrl = artist?.external_urls?.spotify;
  const name = artist?.name;

  return {
    value: artist?.id,
    label: name,
    name,
    followers: artist?.followers?.total,
    genres: removeDuplicates(artist?.genres),
    popularity: artist?.popularity,
    spotifyUrl,
    image,
    type: artist?.type,
  };
};

export const tracksSourceAdapter = (
  tracks: any[]
): OptionSourceAutoComplete[] => {
  return tracks?.map((track: any) => {
    const image = track.album?.images?.[0];

    return {
      value: track?.id,
      label: track?.name,
      image,
    };
  });
};

export const trackDetailAdapter = (track: any): CardArtist => {
  const image = track.album?.images?.[0];
  const spotifyUrl = track?.external_urls?.spotify;
  const name = track?.name;

  return {
    value: track?.id,
    label: name,
    name,
    popularity: track?.popularity,
    spotifyUrl,
    image,
    type: track?.type,
  };
};
