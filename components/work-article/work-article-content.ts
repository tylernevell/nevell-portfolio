import type { PropsType as TypographyPropsType } from '../typography/types';

type WorkArticleContentPropsType = {
  title: string;
  img: { imgSrc: string; width: number; height: number };
  content: { heading: TypographyPropsType; subHeading: TypographyPropsType[] };
};

const workArticleContent: WorkArticleContentPropsType[] = [
  {
    title: 'Rancup',
    img: {
      imgSrc: 'Screen_Shot_2022-01-04_at_4.55.34_PM_xug3bq',
      width: 1048,
      height: 560,
    },
    content: {
      heading: { children: "What's Next?", color: 'text-secondary-active' },
      subHeading: [
        {
          children:
            'At this moment, our web application is a simple portal built ' +
            'with JavaScript, jQuery, HTML, and CSS for displaying and sharing rankings ' +
            'with users who do not have the mobile app installed. I was brought on ' +
            'to finish out the original web site linked above and rebuild it as an enterprise ' +
            'level application.',
          color: 'text-secondary-active',
        },
        {
          children:
            'We are now currently rebuilding RancUp.com in Next.js and Typescript ' +
            'with the goal of completely replicating all mobile features and introducing ' +
            'additional features such as anonymous consensus rankings, side by side ' +
            'rankings comparisons, and private tournaments. Currently, we are in the middle' +
            'of building our login/registration system, UI Kit, and UI Design. ' +
            'Stay tuned to this page for more updates on our progress. ',
          color: 'text-secondary-active',
        },
      ],
    },
  },
  {
    title: 'UIKit',
    img: {
      imgSrc: 'ui-kit-gif-2',
      width: 800,
      height: 528,
    },
    content: {
      heading: { children: "What's Next?", color: 'text-secondary-active' },
      subHeading: [
        {
          children:
            'Once every component is completed, proper documentation for each component will be ' +
            'created through the addition of stories.mdx files that explain proper usage and specs. ' +
            'This storybook is always being iterated upon, so make sure to visit this page for future updates.',
          color: 'text-secondary-active',
        },
      ],
    },
  },
];

export { workArticleContent };
export type { WorkArticleContentPropsType };
