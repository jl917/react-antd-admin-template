import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Loading from '.';

export default {
  title: 'Atoms/Loading',
  component: Loading,
} as ComponentMeta<typeof Loading>;

const Template: ComponentStory<typeof Loading> = () => <Loading />;

export const Primary = Template.bind({});
