import { StoryFn, Meta } from '@storybook/react';
// eslint-disable-next-line max-len
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
import { Sidebar } from './Sidebar';

export default {
  title: 'widget/Sidebar',
  component: Sidebar,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Sidebar>;

const Template: StoryFn<typeof Sidebar> = (args) => <Sidebar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
