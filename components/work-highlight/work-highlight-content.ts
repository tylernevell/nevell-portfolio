import { Url } from 'url';
import type { ContentPropsType } from '../content-group/content-group';

type WorkHighlightContentPropsType = {
  title: string;
  img: { imgSrc: string; width: number; height: number };
  content: ContentPropsType;
};

const workHighlightContent: WorkHighlightContentPropsType[] = [
  {
    title: 'RancUp',
    img: { imgSrc: 'Standings1_v28hnq', width: 800, height: 748 },
    content: {
      heading: { children: 'What is it?', color: 'text-secondary-active' },
      subHeading: {
        children:
          'When it comes to setting your own Fantasy Football Rankings, ' +
          'we take the typing, copying, and pasting out of the equation.  ' +
          'With multiple ways to set your rankings, we have made it so ' +
          'everyone, expert or amateur, can set their own in just a few minutes. Throughout the season, ' +
          'you can track who the most accurate rankers are, ' +
          'and aggregate this data together to determine the most dependable sources of rankings.',
        color: 'text-secondary-active',
      },
      buttons: {
        children: 'Visit Rancup.com',
        href: 'https://www.rancup.com/' as unknown as Url,
      },
    },
  },
  {
    title: 'UI Kit',
    img: { imgSrc: 'ezgif-3-ae0e43d151_twjdis', width: 600, height: 800 },
    content: {
      heading: { children: 'What is it?', color: 'text-secondary-active' },
      subHeading: {
        children:
          'This is a set of reusable components such as buttons, inputs, typography, div styles, etc. ' +
          "This UI Kit is built with React, Vanilla CSS3, and Typescript. It is built alongside RancUp's UI Kit which is " +
          'built with Next.JS, Tailwind CSS, and Typescript. This exercise is done in my freetime to keep my CSS skills sharp ' +
          'and to demonstrate my understanding of a modern and professional UI development to perspective employers. It is always ' +
          'being iterated upon, so make sure to visit this page for future updates.',
        color: 'text-secondary-active',
      },
      buttons: {
        children: 'UI Kit Storybook',
        href: 'https://61e9bb72d96c39003ae803b3-grfxzdxrum.chromatic.com/' as unknown as Url,
      },
    },
  },
];

export { workHighlightContent };
export type { WorkHighlightContentPropsType };
