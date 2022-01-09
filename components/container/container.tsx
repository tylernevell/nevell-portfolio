import { FunctionComponent } from "react";

type PropsType = {
  children: React.ReactNode;
  className?: string;
};

const Container: FunctionComponent<PropsType> = (props) => {
  const { children, className = "" } = props;
  return (
    <section
      className={`container mx-auto pt-2 bg-primary-default lg:px-4 lg:pb-48 pb-24 ${className}`}
    >
      <div className="w-full mx-auto max-w-screen-xl">{children}</div>
    </section>
  );
};

export { Container };
