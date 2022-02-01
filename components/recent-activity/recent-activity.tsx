import { FunctionComponent, useMemo, useState } from 'react';
import { Typography } from '../typography/typography';
import { RecentItem } from './recent-item';
import type { RecentActivityPropsType } from './types';
import { useInterval } from '../../hooks/use-interval/use-interval';
import Link from 'next/link';

const RecentActivity: FunctionComponent<RecentActivityPropsType> = (props) => {
  const { data, title } = props;

  const [listItemIndex, setListItemIndex] = useState(0);

  useInterval(() => {
    const next = listItemIndex + 1;
    setListItemIndex(next % 10);
  }, 5000);

  const listeningList = useMemo(
    () =>
      data?.tracks.map((item, idx) => (
        <a
          href={data?.tracks[idx].songUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center"
        >
          <RecentItem {...item} />
        </a>
      )),
    [data]
  );

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
      <div className="py-5 relative h-32">
        {listeningList?.map((element, idx) => {
          const opacityClass =
            idx === listItemIndex ? 'opacity-100' : 'opacity-0 -z-10';
          return (
            <>
              <div
                className={`transition duration-1000 ease-in-out z-1 flex items-center absolute top-0 left-0 right-0 ${opacityClass}`}
              >
                {element}
              </div>
            </>
          );
        })}
      </div>
    </article>
  );
};

export { RecentActivity };
