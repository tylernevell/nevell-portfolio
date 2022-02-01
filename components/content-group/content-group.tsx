import { FunctionComponent } from 'react';
import { Typography } from '../typography/typography';
import type { PropsType as TypographyPropsType } from '../typography/types';
import type { NotButtonPropsType } from '../not-button/not-button';
import { NotButton } from '../not-button/not-button';

type ContentPropsType = {
  heading: TypographyPropsType;
  subHeading: TypographyPropsType;
  buttons?: NotButtonPropsType[];
};

const ContentGroup: FunctionComponent<ContentPropsType> = (props) => {
  const { heading, subHeading, buttons = [] } = props;

  return (
    <header className="relative flex items-center">
      <div className="lg:pr-6 py-4">
        <Typography
          variant="h2"
          size="text-3xl"
          fontFamily="font-mono"
          className="mb-5 font-semibold"
          {...heading}
        />
        <Typography
          variant="p"
          size="text-lg"
          fontFamily="font-sans"
          {...subHeading}
        />
        <div
          className={`flex mt-10 ${
            buttons.length > 1
              ? 'gap-6 flex flex-wrap justify-center md:justify-start'
              : ''
          }`}
        >
          {buttons.map((items) => (
            <NotButton {...items} />
          ))}
        </div>
      </div>
    </header>
  );
};

export { ContentGroup };
export type { ContentPropsType };
