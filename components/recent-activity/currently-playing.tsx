import { FunctionComponent, useMemo, useState } from 'react';
import { Typography } from '../typography/typography';
import { RecentItem } from './recent-item';
import type {
  CurrentlyPlayingPropsType,
  CurrentlyPlayingSongType,
} from './types';
import useSWR from 'swr';
import fetcher from '../../lib/fetcher';
import Link from 'next/link';

const CurrentlyPlaying: FunctionComponent<CurrentlyPlayingPropsType> = (
  props
) => {
  const { title } = props;

  const { data } = useSWR<CurrentlyPlayingSongType>(
    '/api/now-playing',
    fetcher
  );
  console.log(data);
  return (
    <article className="relative col-span-6">
      <Typography
        variant="h3"
        size="text-3xl"
        fontFamily="font-mono"
        className="mb-10 lg:mb-16 "
        color="text-secondary-active"
      >
        {title}
      </Typography>
      <div className="py-5 relative h-24">
        <div className={`flex items-center absolute top-0 left-0 right-0`}>
          {data?.songUrl ? (
            <a
              href={data.songUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center"
            >
              <div className="h-24 w-24 relative flex-shrink-0">
                <div className="inset-0 overflow-hidden h-full rounded-full">
                  <div className="bubble-fit">
                    <img
                      src={data.albumImageUrl}
                      alt={title}
                      className="bubble-fit"
                    />
                  </div>
                </div>
              </div>
              <div className="ml-4">
                <div className="flex flex-col">
                  <Typography
                    variant="span"
                    className="text-ellipsis font-bold w-full"
                    color="text-secondary-active"
                  >
                    {data.artist}
                  </Typography>
                  <Typography
                    variant="span"
                    className="text-ellipsis underline w-full"
                    color="text-secondary-active"
                  >
                    {data.title}
                  </Typography>
                </div>
              </div>
            </a>
          ) : (
            <Typography color="text-secondary-active" className="mt-6 italic">
              Tyler's not playing anything right now...
            </Typography>
          )}
        </div>
      </div>
    </article>
  );
};

export { CurrentlyPlaying };
