import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { NameTitleCard } from './name-title-card';

const Block: React.VoidFunctionComponent = () => <h1>WIP</h1>;
export default {
  title: 'Components/NameTitleCard',
  component: NameTitleCard,
} as ComponentMeta<typeof Block>;

export const Basic = {
  args: {},
  parameters: {},
};
