import { useState, useCallback } from 'react';
import { CardArtist as IArtistDetail } from '@/models';
import { getArtistsBySearch, getArtistById } from '@/services/spotify.service';
import { AutoCompleteInput, CardArtist, Paragraph } from '@/components';

export function SearchArtist() {
  const [artistDetail, setArtistDetail] = useState<IArtistDetail | null>(null);

  const handleSelection = useCallback(async (value: string) => {
    const newArtist = await getArtistById(value.toString());
    setArtistDetail(newArtist);
  }, []);

  return (
    <div className="searchWrapper">
      <AutoCompleteInput
        placeholder="Looking for an artist?"
        delay={500}
        source={getArtistsBySearch}
        handleSelection={handleSelection}
        className="searchContainerHome"
      />

      <div
        className={`searchDetail ${artistDetail ? 'searchDetailActive' : ''}`}
      >
        <Paragraph size="small">
          {artistDetail
            ? `You have selected the artist: ${artistDetail.name}`
            : 'Select an artist to see the detail'}
        </Paragraph>
        <CardArtist artist={artistDetail} type="extended" />
      </div>
    </div>
  );
}
