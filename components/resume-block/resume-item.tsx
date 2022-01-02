import { FunctionComponent } from "react";
import { Typography } from "../typography/typography";
import type { ResumeItemPropsType } from "./types";

const ResumeItem: FunctionComponent<ResumeItemPropsType> = (props) => {
  const { place, title, dateRange, description } = props;
  return (
    <li className="flex flex-col my-8">
      <Typography
        color="text-secondary-active"
        variant="span"
        className="font-bold"
      >
        {place}
      </Typography>
      <Typography variant="span" color="text-secondary-active">
        {title}
      </Typography>
      <Typography
        color="text-secondary-focus"
        size="text-sm"
        variant="span"
        className="mb-5 italic"
      >
        {dateRange}
      </Typography>
      <Typography color="text-secondary-active" variant="span">
        {description}
      </Typography>
    </li>
  );
};

ResumeItem.defaultProps = {
  place: "",
  title: "",
  dateRange: "",
  description: "",
};

export { ResumeItem };
