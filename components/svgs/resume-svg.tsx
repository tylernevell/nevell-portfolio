import { FunctionComponent } from "react";
import type { SVGPropsType } from "./types";

const ResumeSVG: FunctionComponent<SVGPropsType> = (props) => {
  const {
    width = 28,
    height = 28,
    viewBox = "0 0 384 512",
    fill = "#f7fafc",
  } = props;

  return (
    <svg
      width={width}
      height={height}
      aria-hidden="true"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox={viewBox}
    >
      <path
        fill={fill}
        d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z"
      ></path>
    </svg>
  );
};

export { ResumeSVG };
