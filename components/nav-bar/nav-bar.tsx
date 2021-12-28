import { FunctionComponent } from 'react';

type PropsType = {};

const NavBar: FunctionComponent<PropsType> = (props) => {
  return (
    <nav className="shadow-md text-primary-default z-30 py-6 w-full fixed"></nav>
  );
};

export { NavBar };
