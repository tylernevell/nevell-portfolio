import Link from 'next/link';
import type { FunctionComponent } from 'react';
import { Typography } from '../typography/typography';
import type { SongType } from './types';

const RecentItem: FunctionComponent<SongType> = (props) => {
  const { songUrl, artist, title, image } = props;
  return (
    <>
      <img
        src={image.url}
        alt={title}
        className="h-32 w-32 relative flex-shrink-0 border-1 border-white"
      />
      <div className="ml-4 flex flex-col">
        <Typography
          variant="span"
          className="text-ellipsis font-bold w-full"
          color="text-secondary-active"
        >
          {artist}
        </Typography>
        <Typography
          variant="span"
          className="text-ellipsis underline w-full"
          color="text-secondary-active"
        >
          {title}
        </Typography>
      </div>
    </>
  );
};

export { RecentItem };
