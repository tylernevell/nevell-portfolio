import { FunctionComponent, useState } from "react";
import Link from "next/link";
import { Typography } from "../typography/typography";
import { NavLink } from "./nav-bar-link";
import { SpinDecor } from "./spin-decor";
import { linkItems } from "./link-items";

/* 
    TODO: 
    1. Hide and show on scroll 
      https://dev.to/pratiksharm/navbar-hide-and-show-on-scroll-using-custom-react-hooks-1k98
*/

type LinkItem = {
  title: string;
  menuTitle: string;
  ariaLabel: string;
  slug: {
    current: string;
  };
};

type PropsType = {
  links: LinkItem[];
};

const NavBar: FunctionComponent<PropsType> = (props) => {
  const { links = linkItems } = props;

  return (
    <nav className="shadow-xl text-on-primary-hover z-30 py-6 w-full fixed bg-tertiary-focus">
      <div className="px-4 lg:px-12 flex">
        <div className="flex flex-1">
          <Link href="/" passHref>
            <a
              aria-label="home"
              className="rounded pl-2 py-2 pr-5 bg-transparent tracking-wide transition-all duration-200 ease-in-out hover:bg-primary-hover hover:text-on-primary-hover"
            >
              <Typography
                className="pl-4 hidden sm:flex font-bold tracking-wide uppercase"
                variant="span"
                fontFamily="font-mono"
              >
                <SpinDecor /> Tyler Nevell
              </Typography>
            </a>
          </Link>
        </div>
        <ul className="flex py-2 transform -translate-x-1">
          {links?.map((link: LinkItem) => (
            <NavLink
              key={link?.slug?.current}
              href={link?.slug?.current}
              ariaLabel={link?.ariaLabel}
            >
              {link.title}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export { NavBar };
export type { LinkItem };
