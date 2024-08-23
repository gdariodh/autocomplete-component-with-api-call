import { Token } from '@/models';
import { createAccessToken } from '@/services/spotify.service';

export const getToken = (): string | null => {
  return sessionStorage.getItem(Token.ACCESS_TOKEN);
};

export const verifyToken = async () => {
  const accessToken = getToken();
  if (!accessToken) {
    await createAccessToken();
  }
};
