import { Meta, Story } from '@storybook/react';
import { Img } from './img';
import type { ImgPropsType } from './img';

export default {
  title: 'Components/Media/Img',
  component: Img,
  argTypes: {},
} as Meta;

export const ImagePreview: Story<ImgPropsType> = () => <Img />;
