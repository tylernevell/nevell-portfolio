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
      <div className="border-t border-secondary-active pb-0 mx-auto">
        <Typography
          variant="span"
          size="text-xs"
          className="font-bold uppercase"
          color="text-secondary-active"
        >
          {label}
        </Typography>
      </div>
    </Container>
  );
};
export { LineBreak };
