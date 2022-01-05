import { FunctionComponent } from "react";

type PropsType = {
  title: string;
};

const WorkTitle: FunctionComponent<PropsType> = (props) => {
  const { title = "Title" } = props;
  return (
    <>
      <section className="w-full flex flex-col relative mt-32 mb-4 justify-center items-center text-center">
        <div className="flex flex-col items-center justify-center px-4 md:px-10 md:px-16 w-full md:w-10/12 lg:w-8/12 relative ">
          <h2 className="text-3xl md:text-5xl lg:text-6xl tracking-tightest text-on-primary-default font-medium font-display">
            {title}
          </h2>
        </div>
      </section>
    </>
  );
};

export { WorkTitle };
