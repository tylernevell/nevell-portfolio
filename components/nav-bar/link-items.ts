import { LinkItem } from "./nav-bar";

const linkItems: LinkItem[] = [
  {
    title: "about",
    menuTitle: "About Me",
    ariaLabel: "about",
    slug: { current: "/about" },
  },
  {
    title: "work",
    menuTitle: "My Work",
    ariaLabel: "work",
    slug: { current: "/work" },
  },
  {
    title: "articles",
    menuTitle: "Articles I Enjoy",
    ariaLabel: "articles",
    slug: { current: "/articles" },
  },
];

export { linkItems };
