import { FunctionComponent } from "react";

type PropsType = {
  children: React.ReactNode;
};

const Container: FunctionComponent<PropsType> = (props) => {
  const { children } = props;
  return (
    <section className="container mx-auto pt-2 bg-primary-default px-4 pb-48">
      <div className="w-full max-w-screen-xl">{children}</div>
    </section>
  );
};

export { Container };
