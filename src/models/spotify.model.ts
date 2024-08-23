export enum Token {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken',
}

export interface Image {
  alt: string;
  height: number;
  url: string;
  width: number;
}

export interface ArtistSource {
  label: string;
  value: any;
  image?: Image;
}

export interface ArtistDetail extends ArtistSource {
  name: string;
  followers: number;
  genres: string[];
  popularity: number;
  spotifyUrl: string;
}
