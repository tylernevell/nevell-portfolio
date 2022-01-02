import Link from "next/link";
import type { FunctionComponent, ReactNode } from "react";
import { useIsActiveLink } from "../../hooks/use-active-link/use-active-link";

type PropsType = {
  href: string;
  children: ReactNode;
  ariaLabel: string;
};

const NavLink: FunctionComponent<PropsType> = (props) => {
  const { ariaLabel, href, children } = props;

  const isActive = useIsActiveLink(href);

  const activeClass = isActive ? "font-bold" : "font-normal";
  const hover = isActive
    ? "cursor-default border"
    : "transition-all duration-200 ease-in-out hover:bg-primary-hover hover:text-on-primary-hover";

  return (
    <li className="py-1 md:my-0 md:py-0 ml-1 sm:ml-2 md:ml-4 list-none">
      <Link href={href}>
        <a
          className={`rounded px-3 py-2 bg-transparent uppercase tracking-wide font-mono ${activeClass} ${hover}`}
          aria-label={ariaLabel}
        >
          {children}
        </a>
      </Link>
    </li>
  );
};

export { NavLink };
