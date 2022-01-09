import { FunctionComponent } from "react";
import { Typography } from "../typography/typography";
import type { PropsType as TypographyPropsType } from "../typography/types";
import { Button } from "../button/button";
import type { ButtonPropsType } from "../button/button";

type ContentPropsType = {
  heading: TypographyPropsType;
  subHeading: TypographyPropsType;
  buttons?: ButtonPropsType;
};

const ContentGroup: FunctionComponent<ContentPropsType> = (props) => {
  const { heading, subHeading, buttons } = props;

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
        {buttons && (
          <div className="flex mt-10">
            <Button {...buttons} />
          </div>
        )}
      </div>
    </header>
  );
};

export { ContentGroup };
export type { ContentPropsType };
