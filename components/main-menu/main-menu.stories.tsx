import React from 'react';
import { Meta, Story } from '@storybook/react';
import { MainMenu } from './main-menu';
import { linkItems } from '../nav-bar/link-items';

export default {
  title: 'Components/MainMenu',
  component: MainMenu,
  argTypes: {},
} as Meta;

export const Menu: Story = () => (
  <div className="flex flex-1 h-screen bg-primary-default">
    <MainMenu links={linkItems} />
  </div>
);
