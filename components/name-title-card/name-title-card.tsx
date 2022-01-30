import { FunctionComponent } from 'react';
import { NameSVG } from '../svgs/name-svg.tsx/name-svg';
import { Typography } from '../typography/typography';

const NameTitleCard: FunctionComponent = () => {
  return (
    <section className="container relative max-w-screen-xl flex grid mx-auto grid-cols-6 grid-rows-2 lg:grid-cols-12 place-center-self">
      <h1 className="relative row-span-1 h-full col-span-6 sm:col-span-4 sm:col-start-2 lg:col-span-6 lg:col-start-4">
        <NameSVG />
      </h1>
      <div className="relative mt-2 row-start-2 col-span-6 lg:col-span-3 lg:col-start-7">
        <Typography
          variant="h2"
          size="text-lg"
          textAlign="text-center"
          fontFamily="font-sans"
          color="text-on-primary-hover"
          className="font-bold"
        >
          Front-end Engineer
        </Typography>
        <Typography
          variant="h3"
          size="text-xs"
          textAlign="text-center"
          fontFamily="font-sans"
          color="text-on-primary-hover"
          className="font-semibold lg:text-right lg:pr-8 xl:pr-10"
        >
          since 2018
        </Typography>
      </div>
    </section>
  );
};

export { NameTitleCard };
