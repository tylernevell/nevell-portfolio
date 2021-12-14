import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { AnimatedBackground } from './animated-background';

const Block: React.VoidFunctionComponent = () => <h1>WIP</h1>;
export default {
  title: 'Components/AnimatedBackground',
  component: AnimatedBackground,
} as ComponentMeta<typeof Block>;

export const Basic = {
  args: {},
  parameters: {},
};
