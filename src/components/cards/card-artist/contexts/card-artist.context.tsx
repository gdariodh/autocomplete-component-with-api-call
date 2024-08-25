import { createContext, useContext } from 'react';
import { ICardArtistProps } from '@/components/cards/card-artist';

export const CardArtistContext = createContext({} as ICardArtistProps);
export const { Provider } = CardArtistContext;
export const useCardArtistContext = () => {
  const context = useContext(CardArtistContext);
  if (!context) {
    throw new Error(
      'useCardArtistContext must be used within a CardArtistContext.Provider'
    );
  }
  return context;
};
