import Link from 'next/link';
import type { FunctionComponent } from 'react';
import { Typography } from '../typography/typography';
import type { SongType } from './types';

const RecentItem: FunctionComponent<SongType> = (props) => {
  const { songUrl, artist, title, image } = props;
  return (
    <>
      <div className="h-24 w-24 relative flex-shrink-0">
        <Link href={songUrl} passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="inset-0 overflow-hidden h-full rounded-full"
          >
            <div className="bubble-fit">
              <img src={image.url} alt={title} className="bubble-fit" />
              {/* <Img
                imgSrc={image.url}
                height={image.height}
                width={image.width}
                isOutsideSrc={true}
              /> */}
            </div>
          </a>
        </Link>
      </div>
      <div className="ml-4">
        <Link href={songUrl} passHref>
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col"
          >
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
          </a>
        </Link>
      </div>
    </>
  );
};

export { RecentItem };
