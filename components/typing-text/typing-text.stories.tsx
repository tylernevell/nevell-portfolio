import React from 'react';
import { ComponentMeta } from '@storybook/react';
import { TypingText } from './typing-text';

const Block: React.VoidFunctionComponent = () => <h1>WIP</h1>;
export default {
  title: 'Components/TypingText',
  component: TypingText,
} as ComponentMeta<typeof Block>;

export const Basic = {
  args: {},
  parameters: {},
};
