import { StoryFn, Meta } from '@storybook/react';
// eslint-disable-next-line max-len
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Theme } from 'app/providers/themeProvider';
// eslint-disable-next-line max-len
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';
import { Navbar } from './Navbar';

export default {
  title: 'widget/Navbar',
  component: Navbar,
  decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as Meta<typeof Navbar>;

const Template: StoryFn<typeof Navbar> = (args) => <Navbar {...args} />;

export const Light = Template.bind({});
Light.args = {};

export const Dark = Template.bind({});
Dark.args = {};
Dark.decorators = [ThemeDecorator(Theme.DARK)];
