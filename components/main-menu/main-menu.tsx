import { FunctionComponent } from 'react';
import { NameTitleCard } from '../name-title-card/name-title-card';

type PropsType = {
  className: string;
};

const MainMenu: FunctionComponent<PropsType> = (props) => {
  const { className } = props;

  return (
    <section className={`container flex w-full h-auto m-auto ${className}`}>
      <header className="relative flex w-full h-auto m-auto">
        <NameTitleCard />
      </header>
    </section>
  );
};

export { MainMenu };
