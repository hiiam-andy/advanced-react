import { StoryFn, Meta } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { Button, ThemeButton } from './Button';
import { Theme } from 'app/providers/themeProvider';

export default {
  title: 'shared/Button',
  component: Button,
  decorators: [ThemeDecorator(Theme.LIGHT)],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    children: 'Some Text',
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {};

export const Clear = Template.bind({});
Clear.args = {
  theme: ThemeButton.CLEAR,
};

export const Outline = Template.bind({});
Outline.args = {
  theme: ThemeButton.OUTLINE,
};

export const OutlineDark = Template.bind({});
OutlineDark.args = {
  theme: ThemeButton.OUTLINE,
};
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)];
