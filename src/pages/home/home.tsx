import React, { useState } from 'react';
import { ArtistDetail as IArtistDetail } from '@/models';
import { getArtistById, getArtistsBySearch } from '@/services/spotify.service';
import styles from '@/pages/home/styles/home.module.css';
import { AutoCompleteInput } from '@/components';
import { ArtistDetail } from '@/pages/home/components';

export function Home() {
  const [artistDetail, setArtistDetail] = useState<IArtistDetail | null>(null);

  const handleSelection = async (value: string) => {
    const newArtist = await getArtistById(value.toString());
    setArtistDetail(newArtist);
  };

  return (
    <div className={styles.homeWrapper}>
      <AutoCompleteInput
        placeholder="Looking for an artist? Start typing here"
        delay={500}
        source={getArtistsBySearch}
        handleSelection={handleSelection}
      />

      {artistDetail && <ArtistDetail item={artistDetail} />}
    </div>
  );
}
