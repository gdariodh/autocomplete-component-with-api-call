import { OptionSourceAutoComplete } from '@/components/autocomplete-input.tsx';

export enum Token {
  ACCESS_TOKEN = 'accessToken',
  REFRESH_TOKEN = 'refreshToken',
}

export interface CardArtist extends OptionSourceAutoComplete {
  name: string;
  followers?: number;
  genres?: string[];
  popularity?: number;
  spotifyUrl?: string;
  type?: string;
}
