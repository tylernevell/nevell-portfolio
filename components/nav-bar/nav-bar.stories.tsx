import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { NavBar } from './nav-bar';

const Block: React.VoidFunctionComponent = () => <h1>WIP</h1>;
export default {
  title: 'Components/NavBar',
  component: NavBar,
} as ComponentMeta<typeof Block>;

export const Basic = {
  args: {},
  parameters: {},
};
