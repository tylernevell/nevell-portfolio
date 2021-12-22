import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Intro } from './intro';

const Block: React.VoidFunctionComponent = () => <h1>WIP</h1>;
export default {
  title: 'Components/Intro',
  component: Intro,
} as ComponentMeta<typeof Block>;

export const Basic = {
  args: {},
  parameters: {},
};
