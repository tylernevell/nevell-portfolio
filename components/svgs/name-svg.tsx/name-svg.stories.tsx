import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { NameSVG } from './name-svg';

const Block: React.VoidFunctionComponent = () => <h1>WIP</h1>;
export default {
  title: 'Components/NameSVG',
  component: NameSVG,
} as ComponentMeta<typeof Block>;

export const Basic = {
  args: {},
  parameters: {},
};
