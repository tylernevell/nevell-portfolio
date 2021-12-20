import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { Name } from './name';

const Block: React.VoidFunctionComponent = () => <h1>WIP</h1>;
export default {
  title: 'Components/Name',
  component: Name,
} as ComponentMeta<typeof Block>;

export const Basic = {
  args: {},
  parameters: {},
};
