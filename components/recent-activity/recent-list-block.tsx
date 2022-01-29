import { FunctionComponent } from 'react';
import { Container } from '../container/container';
import type { CurrentlyPlayingSongType, TopTracksType } from './types';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import { RecentActivity } from './recent-activity';
import { CurrentlyPlaying } from './currently-playing';

const RecentActivityBlock: FunctionComponent = () => {
  const { data } = useSWR<TopTracksType>('/api/top-tracks', fetcher);
  const currentlyPlayingData = useSWR<CurrentlyPlayingSongType>(
    '/api/now-playing',
    fetcher
  );

  return (
    <Container>
      <section className="container mx-auto relative grid grid-cols-6 xl:grid-cols-12 gap-12">
        <RecentActivity title="My Recent Top Spotify Songs" data={data} />
        <CurrentlyPlaying title="Currently Playing" />
      </section>
    </Container>
  );
};

export { RecentActivityBlock };
