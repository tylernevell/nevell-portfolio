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
      buttons: [
        {
          children: 'Visit Rancup.com',
          href: 'https://www.rancup.com/' as unknown as Url,
        },
      ],
    },
  },
  {
    title: 'Spotify Clone',
    img: { imgSrc: 'spotify-clone', width: 503, height: 740 },
    content: {
      heading: { children: 'What is it?', color: 'text-secondary-active' },
      subHeading: {
        children:
          'A Spotify clone built using Next.js, TypeScript, Next-Auth, Tailwind CSS, Recoil, and the Spotify API. ' +
          'I took this project on as a challenge to my ability to navigate Authorization, API calls, and use TypeScript within ' +
          'those disciplines. This project is still a work in progress, but as of now, you can connect your spotify account, ' +
          'browse your playlists, play songs, and use it from any device. Before using, please activate your current device by ' +
          'making sure you are logged in and then playing and pausing a song. This app is a work in progress.',
        color: 'text-secondary-active',
      },
      buttons: [
        {
          children: 'Try My Spotify Clone',
          href: 'https://spotify-clone-silk-ten.vercel.app/' as unknown as Url,
        },
        {
          children: 'Spotify Clone Github Repo',
          href: 'https://github.com/tylernevell/spotify-clone' as unknown as Url,
        },
      ],
    },
  },
  {
    title: 'UI Kit',
    img: { imgSrc: 'ui-kit-tailwind', width: 612, height: 590 },
    content: {
      heading: { children: 'What is it?', color: 'text-secondary-active' },
      subHeading: {
        children:
          'This is a Storybook of reusable components such as buttons, inputs, typography, div styles, etc. ' +
          'This UI Kit is built with React, CSS, and Typescript. I have built out two versions alongside each other: ' +
          'one with Tailwind CSS and the other with Vanilla CSS. This exercise is done in my freetime to keep my CSS skills sharp ' +
          'and to demonstrate my understanding of a modern and professional UI development to perspective employers. Please give ' +
          'Chromatic a moment to load; Chromatic can be slow for non-enterprise pages. Refresh if Storybook does not load.',
        color: 'text-secondary-active',
      },
      buttons: [
        {
          children: 'UI Kit Tailwind CSS Storybook',
          href: 'https://main--61f953fe224018003f32cdab.chromatic.com' as unknown as Url,
        },
        {
          children: 'UI Kit Tailwind CSS Git Repo',
          href: 'https://github.com/tylernevell/ui-kit-tailwind' as unknown as Url,
        },
      ],
    },
  },
];

export { workHighlightContent };
export type { WorkHighlightContentPropsType };
