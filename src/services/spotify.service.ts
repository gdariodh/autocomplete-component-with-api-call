import { artistDetailAdapter, artistsSourceAdapter } from '@/adapters';
import {
  API_BASE_URL,
  API_TOKEN_URL,
  CLIENT_ID,
  CLIENT_SECRET,
} from '@/config/constants';
import { Token } from '@/models';
import { getToken } from '@/utils';

export const createAccessToken = async () => {
  try {
    const res = await fetch(API_TOKEN_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: `Basic ${btoa(`${CLIENT_ID}:${CLIENT_SECRET}`)}`,
      },
      body: 'grant_type=client_credentials',
    });
    const data = await res.json();
    const accessToken = data.access_token;
    sessionStorage.setItem(Token.ACCESS_TOKEN, accessToken);
  } catch (e) {
    return null;
  }
};

export const getArtistsBySearch = async (search: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/search?type=artist&q=${search}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    const data = await res.json();
    const newArtists = artistsSourceAdapter(data.artists.items);
    return newArtists;
  } catch (e) {
    return [];
  }
};

export const getArtistById = async (id: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/artists/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });
    const data = await res.json();
    const artistFound = artistDetailAdapter(data);
    return artistFound;
  } catch (e) {
    return null;
  }
};
