import type { PropsType as TypographyPropsType } from "../typography/types";

type WorkAboutContentPropsType = {
  title: string;
  img: { imgSrc: string; width: number; height: number };
  content: { heading: TypographyPropsType; subHeading: TypographyPropsType[] };
};

const workAboutContent: WorkAboutContentPropsType = {
  title: "RancUp",
  img: { imgSrc: "Rankings_Week_14_glucgs", width: 800, height: 748 },
  content: {
    heading: { children: "Why?", color: "text-secondary-active" },
    subHeading: [
      {
        children:
          "Just like how the Stock Market can have analysts and experts, " +
          "it’s the market demand that truly dictates where the value is. " +
          "We wanted to implement a similar mentality to Fantasy Football. " +
          "Let everyone’s eyes and gut be the true indicator for where players " +
          "and teams should be ranked.",
        color: "text-secondary-active",
      },
      {
        children:
          "In addition to there being too much importance left on Fantasy Football " +
          "Experts, we feel there’s an incredible lack of accountability. Whenever " +
          "someone predicts how a player will do, there aren’t many options for " +
          "backing those predictions up. So, we figured we’d tackle both issues " +
          "with one solution. Give everyone the chance to set their own Rankings, " +
          "whether it’s who you think will be the best QB in Week 11, the biggest " +
          "disappointment, or the biggest surprise, set it and let’s see who’s right. " +
          "With RancUp, everyone can not only get a better idea of what the consensus " +
          "is for all of these questions, once the week is over we’ll be able to track " +
          "who was actually right, and who unfortunately was wrong.",
        color: "text-secondary-active",
      },
    ],
  },
};
export { workAboutContent };
export type { WorkAboutContentPropsType };
