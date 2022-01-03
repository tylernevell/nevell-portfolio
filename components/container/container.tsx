import { FunctionComponent } from "react";

type PropsType = {
  children: React.ReactNode;
};

const Container: FunctionComponent<PropsType> = (props) => {
  const { children } = props;
  return (
    <section className="container mx-auto pt-2 bg-primary-default lg:px-4 lg:pb-48 pb-24">
      <div className="w-full mx-auto max-w-screen-xl">{children}</div>
    </section>
  );
};

export { Container };
