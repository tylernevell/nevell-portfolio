import { FunctionComponent } from 'react';
import Link from 'next/link';
import { Typography } from '../typography/typography';

type PropsType = {};

const NavBar: FunctionComponent<PropsType> = (props) => {
  return (
    <nav className="shadow-md text-on-primary-hover z-30 py-6 w-full fixed bg-tertiary-focus">
      <div className="px-4 lg:px-12 flex">
        <div className="flex flex-1">
          <Link href="/" passHref>
            <Typography
              className="pl-4 hidden sm:flex font-bold tracking-widest uppercase"
              variant="span"
              fontFamily="font-mono"
            >
              Tyler Nevell
            </Typography>
          </Link>
        </div>
        <ul className="flex transform -translate-x-1">
          {/* map out nac links here */}
        </ul>
      </div>
    </nav>
  );
};

export { NavBar };
