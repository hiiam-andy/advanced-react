import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoryFn, Meta } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { LoginForm } from './LoginForm';

export default {
  title: 'fatures/LoginForm',
  component: LoginForm,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  argTypes: {},
  args: {
    placeholder: 'Some Placeholder',
    value: 'SomeValue',
  },
} as Meta<typeof LoginForm>;

const Template: StoryFn<typeof LoginForm> = (args) => <LoginForm {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
