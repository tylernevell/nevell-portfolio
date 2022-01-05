import Link from "next/link";
import { FunctionComponent } from "react";
// import { Img, ImgPropsType } from "../media/img/img";
// import { Typography } from "../typography/typography";

// TODO: Come back and mess with the look of the descriptions more. Not sure if I like it? Maybe add image?

type WorkItemPropsType = {
  title: string;
  description: string;
  href: string;
  // img: ImgPropsType;
};

const WorkItem: FunctionComponent<WorkItemPropsType> = (props) => {
  const {
    title = "",
    description = "",
    href = "",
    // img,
  } = props;

  return (
    <section className="w-full flex flex-col relative mb-12 lg:mb-48 justify-center items-center text-center bg-tertiary-active">
      <div className="flex flex-col items-center justify-center px-4 md:px-10 md:px-16 w-full md:w-10/12 lg:w-8/12 relative ">
        <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-tightest text-on-primary-default font-medium font-display">
          {title}
        </h2>
        <p className="mt-3 mb-10 text-secondary-default xl:w-6/12">
          {description}
        </p>
        <Link href={href} passHref>
          <a className="bg-secondary-default text-on-secondary-default hover:text-on-secondary-hover hover:bg-secondary-hover px-10 py-4 font-normal cursor-pointer uppercase hover:bg-primary-hover tracking-widest">
            Enter
          </a>
        </Link>
      </div>
    </section>
  );
};

export { WorkItem };
export type { WorkItemPropsType };
