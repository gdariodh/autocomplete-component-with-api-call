import { useState, useCallback } from 'react';
import { CardArtist as IArtistDetail } from '@/models';
import { getTracksBySearch, getTrackById } from '@/services/spotify.service';
import {
  AutoCompleteInput,
  CardArtist,
  ListOfSource,
  Paragraph,
} from '@/components';

export function SearchTracks() {
  const [trackDetail, setTrackDetail] = useState<IArtistDetail | null>(null);

  const handleSelection = useCallback(async (value: string) => {
    const newTrack = await getTrackById(value.toString());

    setTrackDetail(newTrack);
  }, []);

  return (
    <div className="searchWrapper">
      <AutoCompleteInput
        placeholder="Looking for an track?"
        delay={500}
        source={getTracksBySearch}
        handleSelection={handleSelection}
        className="searchContainerHome"
      >
        {(props) => <ListOfSource {...props} />}
      </AutoCompleteInput>

      <div
        className={`searchDetail ${trackDetail ? 'searchDetailActive' : ''}`}
      >
        <Paragraph size="small">
          {trackDetail ? 'Track Detail' : 'Select a track to see the detail'}
        </Paragraph>
        <CardArtist artist={trackDetail} type="extended" />
      </div>
    </div>
  );
}
