import type { ContentPropsType } from "../content-group/content-group";

type WorkHighlightContentPropsType = {
  title: string;
  img: { imgSrc: string; width: number; height: number };
  content: ContentPropsType;
};

const workHighlightContent: WorkHighlightContentPropsType[] = [
  {
    title: "RancUp",
    img: { imgSrc: "Standings1_v28hnq", width: 800, height: 748 },
    content: {
      heading: { children: "What is it?", color: "text-secondary-active" },
      subHeading: {
        children:
          "When it comes to setting your own Fantasy Football Rankings, " +
          "we take the typing, copying, and pasting out of the equation.  " +
          "With multiple ways to set your rankings, we have made it so " +
          "everyone, expert or amateur, can set their own in just a few minutes. Throughout the season, " +
          "you can track who the most accurate rankers are, " +
          "and aggregate this data together to determine the most dependable sources of rankings.",
        color: "text-secondary-active",
      },
    },
  },
];

export { workHighlightContent };
export type { WorkHighlightContentPropsType };
