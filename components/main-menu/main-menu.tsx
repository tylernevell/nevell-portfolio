import Link from 'next/link';
import { FunctionComponent } from 'react';
import { IconLinks } from '../icon-links/icon-links';
import { NameTitleCard } from '../name-title-card/name-title-card';
import type { LinkItem } from '../nav-bar/nav-bar';
import { Typography } from '../typography/typography';
import { linkItems } from '../nav-bar/link-items';

type PropsType = {
  className?: string;
  links: LinkItem[];
};

const MainMenu: FunctionComponent<PropsType> = (props) => {
  const { className, links = linkItems } = props;

  return (
    <section
      className={`sm:absolute sm:top-1/2 sm:left-1/2 sm:transform sm:-translate-x-1/2 sm:-translate-y-1/2 mt-32 sm:mt-auto
container flex w-full m-auto grid grid-rows-3`}
    >
      <nav className="relative flex w-full m-auto pb-14 sm:pb-0 row-start-1 justify-center space-x-10">
        <IconLinks />
      </nav>
      <div className="relative flex w-full h-auto mb-14 m-auto px-2 sm:px-0 row-start-2">
        <NameTitleCard />
      </div>
      <nav className="relative flex w-full max-w-xl mx-auto row-start-3">
        <ul className="mx-auto justify-center grid gap-6 grid-rows-3 lg:grid-rows-1 lg:justify-evenly">
          {links.map((link: LinkItem, idx) => (
            <li className={`row-start-${idx + 1} lg:row-start-1 text-center`}>
              <Link key={link?.slug?.current} href={link?.slug?.current}>
                <a aria-label={link?.title}>
                  <Typography
                    variant="h3"
                    color="text-on-primary-hover"
                    fontFamily="font-mono"
                    size="text-xl"
                    textAlign="text-center"
                    className="underline rounded px-3 py-2 bg-transparent transition-all duration-200 ease-in-out hover:bg-primary-hover hover:text-on-primary-hover"
                  >
                    {link.menuTitle}
                  </Typography>
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export { MainMenu };
