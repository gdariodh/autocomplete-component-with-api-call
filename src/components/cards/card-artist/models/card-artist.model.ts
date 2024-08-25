import { CardArtist } from '@/models';

export enum CardArtistValue {
  SIMPLE = 'simple',
  EXTENDED = 'extended',
}

type CardArtistType = `${CardArtistValue}`;

export interface ICardArtistProps {
  artist: CardArtist | null;
  type?: CardArtistType;
  className?: string;
}
