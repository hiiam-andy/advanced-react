import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { StoryFn, Meta } from '@storybook/react';
import { Theme } from 'app/providers/themeProvider';
import { Input } from './Input';

export default {
  title: 'shared/Input',
  component: Input,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  argTypes: {},
  args: {
    placeholder: 'Some Placeholder',
    value: 'SomeValue',
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
