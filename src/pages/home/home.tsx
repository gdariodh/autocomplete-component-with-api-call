import './styles/home.css';
import { SearchArtist, SearchTracks } from '@/pages/home/components';
import { Paragraph, Title } from '@/components';

export function Home() {
  return (
    <section className="homeWrapper">
      <div>
        <Title size="large">Autocomplete Component with API CALLS</Title>
        <Paragraph size="medium">
          The filtering of the data is asynchronous, you can use any API to
          fetch the data and pass it to the component.
        </Paragraph>
        <Paragraph>
          These examples are using the Spotify API Developers.
        </Paragraph>
        <Paragraph size="medium">
          You can see two different variants bellow!
        </Paragraph>
      </div>

      <div className="listOfCardHome">
        <div className="cardHome">
          <div className="cardHomeHeader">
            <Title size="medium">Variant: Custom </Title>

            <div className="cardHomeHeaderItem">
              <Paragraph size="small">
                <span>About:</span>
                (Children prop passed) the children prop will be rendered and
                receives the necessary autocomplete props.
              </Paragraph>
            </div>

            <div className="cardHomeHeaderItem">
              <Paragraph size="small">
                <span>API:</span>"/search?type=track&q=search"
              </Paragraph>
            </div>
          </div>

          <div className="cardHomeBody">
            <SearchTracks />
          </div>
        </div>
        <div className="cardHome">
          <div className="cardHomeHeader">
            <Title size="small">Variant: Dropdown - Default Variant</Title>

            <div className="cardHomeHeaderItem">
              <Paragraph size="small">
                <span>About:</span>(No children prop passed)
              </Paragraph>
            </div>

            <div className="cardHomeHeaderItem">
              <Paragraph size="small">
                <span>API:</span>"/search?type=artist&q=search"
              </Paragraph>
            </div>
          </div>

          <div className="cardHomeBody">
            <SearchArtist />
          </div>
        </div>
      </div>
    </section>
  );
}
