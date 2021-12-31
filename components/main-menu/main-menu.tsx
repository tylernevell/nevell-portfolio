import Link from "next/link";
import { FunctionComponent } from "react";
import { IconLinks } from "../icon-links/icon-links";
import { NameTitleCard } from "../name-title-card/name-title-card";
import type { LinkItem } from "../nav-bar/nav-bar";
import { Typography } from "../typography/typography";
import { linkItems } from "../nav-bar/link-items";

type PropsType = {
  className: string;
  links?: LinkItem[];
};

const MainMenu: FunctionComponent<PropsType> = (props) => {
  const { className, links = linkItems } = props;

  return (
    <section className={`container flex w-full m-auto grid grid-rows-3`}>
      <header
        className={`relative flex w-full m-auto pb-14 sm:pb-0 row-start-1 justify-center space-x-10 delay-1000 ${className}`}
      >
        <IconLinks />
      </header>
      <h1
        className={`relative flex w-full h-auto mb-14 m-auto px-2 sm:px-0 row-start-2 delay-200 ${className}`}
      >
        <NameTitleCard />
      </h1>
      <h3
        className={`relative flex w-full max-w-xl mx-auto row-start-3 justify-center grid gap-y-6 grid-rows-3 lg:grid-rows-1 lg:justify-evenly delay-1000 ${className}`}
      >
        {links.map((link: LinkItem, idx) => (
          <Link key={link?.slug?.current} href={link?.slug?.current}>
            <a
              aria-label={link?.title}
              className={`row-start-${idx + 1} lg:row-start-1 text-center`}
            >
              <Typography
                variant="span"
                color="text-on-primary-hover"
                fontFamily="font-mono"
                size="text-xl"
                className="underline px-3 py-2 bg-transparent tracking-wide hover:bg-primary-hover hover:text-on-primary-hover"
              >
                {link.menuTitle}
              </Typography>
            </a>
          </Link>
        ))}
      </h3>
    </section>
  );
};

export { MainMenu };
