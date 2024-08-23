import React, { useState } from 'react';
import { ArtistDetail as IArtistDetail } from '@/models';
import { getArtistById, getArtistsBySearch } from '@/services/spotify.service';
import '@/pages/home/styles/home.styles.css';
import { AutoCompleteInput } from '@/components';
import { ArtistDetail } from '@/pages/home/components';

export function Home() {
  const [artistDetail, setArtistDetail] = useState<IArtistDetail | null>(null);

  const handleSelection = async (value: any) => {
    const newArtist = await getArtistById(value);
    setArtistDetail(newArtist);
  };

  return (
    <div className="container">
      <AutoCompleteInput
        handleSelection={handleSelection}
        source={getArtistsBySearch}
      />

      {artistDetail && <ArtistDetail item={artistDetail} />}
    </div>
  );
}
