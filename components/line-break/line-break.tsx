import { FunctionComponent } from "react";
import { Container } from "../container/container";
import { Typography } from "../typography/typography";

type PropsType = {
  label: string;
};

const LineBreak: FunctionComponent<PropsType> = (props) => {
  const { label } = props;
  return (
    <Container>
      <div className="border-t border-gray-200 pb-0 mx-auto">
        <Typography
          variant="span"
          size="text-xs"
          className="font-bold uppercase"
          color="text-on-primary-hover"
        >
          {label}
        </Typography>
      </div>
    </Container>
  );
};
export { LineBreak };
