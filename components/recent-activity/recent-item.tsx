import Link from 'next/link';
import type { FunctionComponent } from 'react';
import { Typography } from '../typography/typography';
import type { SongType } from './types';

const RecentItem: FunctionComponent<SongType> = (props) => {
  const { songUrl, artist, title, image } = props;
  return (
    <>
      <div className="h-24 w-24 relative flex-shrink-0">
        <div className="inset-0 overflow-hidden h-full rounded-full">
          <div className="bubble-fit">
            <img src={image.url} alt={title} className="bubble-fit" />
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
      </div>
    </>
  );
};

export { RecentItem };
