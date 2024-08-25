import {
  API_BASE_URL,
  API_TOKEN_URL,
  CLIENT_ID,
  CLIENT_SECRET,
  API_LIMIT,
} from '@/config/constants';
import { Token } from '@/models';
import { getToken } from '@/utils';
import {
  artistDetailAdapter,
  artistsSourceAdapter,
  tracksSourceAdapter,
  trackDetailAdapter,
} from '@/adapters';

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

export const verifyIfTokenIsValid = async (status: number) => {
  if (status === 401) {
    await createAccessToken();
    return true;
  }

  return false;
};

export const getArtistsBySearch = async (search: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/search?type=artist&q=${search}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    if (await verifyIfTokenIsValid(res.status)) {
      await getArtistsBySearch(search);
      return [];
    }

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

    if (await verifyIfTokenIsValid(res.status)) {
      await getArtistById(id);
      return null;
    }

    const data = await res.json();
    const artistFound = artistDetailAdapter(data);
    return artistFound;
  } catch (e) {
    return null;
  }
};

export const getTracksBySearch = async (search: string) => {
  try {
    const res = await fetch(
      `${API_BASE_URL}/search?type=track&q=${search}&limit=${API_LIMIT}`,
      {
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
      }
    );

    if (await verifyIfTokenIsValid(res.status)) {
      await getTracksBySearch(search);
      return [];
    }

    const data = await res.json();

    const newTracks = tracksSourceAdapter(data.tracks.items);
    return newTracks;
  } catch (e) {
    return [];
  }
};

export const getTrackById = async (id: string) => {
  try {
    const res = await fetch(`${API_BASE_URL}/tracks/${id}`, {
      headers: {
        Authorization: `Bearer ${getToken()}`,
      },
    });

    if (await verifyIfTokenIsValid(res.status)) {
      await getTrackById(id);
      return null;
    }

    const data = await res.json();
    const trackFound = trackDetailAdapter(data);
    return trackFound;
  } catch (e) {
    return null;
  }
};
