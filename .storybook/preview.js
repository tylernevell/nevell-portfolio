import 'tailwindcss/tailwind.css';
import '../styles/globals.css';
import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  status: {
    statuses: {
      released: {
        background: '#2563EB',
        color: '#ffffff',
        description: 'This component is stable and released',
      },
      beta: {
        background: '#6EE7B7',
        color: '#ffffff',
        description: 'This component is unstable and released',
      },
      deprecate: {
        background: '#6B7280',
        color: '#ffffff',
        description: 'This component is deprecated and should be avoided',
      },
      wip: {
        background: '#EF4444',
        color: '#ffffff',
        description: "This component is 'Work-in-Progress'",
      },
    },
  },
};
