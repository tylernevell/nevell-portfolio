import { FunctionComponent } from "react";
import { Typography } from "../typography/typography";

type PropsType = {
  label: string;
};

const LineBreak: FunctionComponent<PropsType> = (props) => {
  const { label } = props;
  return (
    <div className="border-t border-gray-200 pb-0 mx-auto">
      <Typography
        variant="span"
        size="text-xs"
        className="font-bold uppercase"
        color="text-primary-focus"
      >
        {label}
      </Typography>
    </div>
  );
};
export { LineBreak };
