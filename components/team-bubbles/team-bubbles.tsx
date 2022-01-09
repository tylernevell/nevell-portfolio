import { FunctionComponent } from "react";
import { Container } from "../container/container";
import { Img } from "../media/img/img";
import type { ImgPropsType } from "../media/img/img";
import { Typography } from "../typography/typography";

type PersonPropsType = {
  img: ImgPropsType;
  name: string;
  position: string;
};

type TeammateCardPropsType = {
  row: number;
  column: number;
  card: PersonPropsType;
};

type TeamBubblesPropsType = {
  teammates: PersonPropsType[];
};

const TeammateCard: FunctionComponent<TeammateCardPropsType> = ({
  row,
  column,
  card,
}) => {
  return (
    <div
      className={`relative row-start-${row + 1} lg:col-start-${
        column * 3 + 1
      } col-span-3 scroll-snap-x-child flex-shrink-0 mr-5 lg:w-full lg:grid lg:mx-0 w-64 lg:grid-cols-3 lg:my-5 `}
    >
      <div className="lg:h-52 lg:w-52 h-64 w-64 relative col-span-2">
        <div className="inset-0 overflow-hidden w-full h-full rounded-full">
          <div className="bubble-fit-grayscale">
            <Img {...card.img} />
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:bottom-5 flex flex-col items-center lg:items-start left-1/2 xl:left-40 items-start mt-8 lg:mt-0">
        <Typography
          variant="span"
          color="text-secondary-default"
          className="text-sm lg:text-base lg:text- lg:rounded lg:bg-tertiary-default px-2 py-0 mb-1 whitespace-no-wrap lg:drop-shadow-lg"
        >
          {card.name}
        </Typography>
        <Typography
          variant="span"
          color="text-secondary-default"
          className="text-sm lg:text-base lg:rounded lg:bg-tertiary-default px-2 py-0 whitespace-no-wrap lg:shadow"
        >
          {card.position}
        </Typography>
      </div>
    </div>
  );
};

const TeamBubbles: FunctionComponent<TeamBubblesPropsType> = (props) => {
  const { teammates } = props;
  const rows = arrangeTeamIntoRows(teammates.slice(0));
  return (
    <Container>
      <div className="md:container flex overflow-x-auto scroll-snap-x lg:scroll-snap-none lg:grid lg:gap-4 lg:grid-cols-9 max-w-full md:pl-0 pl-5">
        {rows.map((row, rowIdx) =>
          row.map((teammate, colIdx) => (
            <TeammateCard card={teammate} column={colIdx} row={rowIdx} />
          ))
        )}
      </div>
    </Container>
  );
};

const arrangeTeamIntoRows = (teammates: PersonPropsType[]) => {
  const rows = [];
  for (let i = 1; teammates.length > 0; i += 1) {
    rows.push(teammates.splice(0, i));
  }
  return rows;
};

export { TeamBubbles };
export type { TeammateCardPropsType, PersonPropsType, TeamBubblesPropsType };
