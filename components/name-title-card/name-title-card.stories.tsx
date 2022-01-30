import { ComponentStory, ComponentMeta } from '@storybook/react';
import { NameTitleCard } from './name-title-card';

export default {
  title: 'Components/NameTitleCard',
  component: NameTitleCard,
  argTypes: {},
} as ComponentMeta<typeof NameTitleCard>;

const Template: ComponentStory<typeof NameTitleCard> = () => (
  <div className="mt-40">
    <NameTitleCard />
  </div>
);

export const NameTitleCardDisplay = Template.bind({});
NameTitleCardDisplay.args = {};
