import { Meta, StoryFn } from '@storybook/react';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator/ThemeDecorator';
import { AppLink, AppLinkTheme } from './AppLink';
import { Theme } from 'app/providers/themeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator/RouterDecorator';

export default {
  title: 'shared/AppLink',
  component: AppLink,
  decorators: [ThemeDecorator(Theme.LIGHT), RouterDecorator],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
  args: {
    to: '/',
    children: 'App Link',
  },
} as Meta<typeof AppLink>;

const Template: StoryFn<typeof AppLink> = (args) => <AppLink {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  theme: AppLinkTheme.PRIMARY,
};

export const Secondary = Template.bind({});
Secondary.args = {
  theme: AppLinkTheme.SECONDARY,
};

export const Red = Template.bind({});
Red.args = {
  theme: AppLinkTheme.RED,
};

export const PrimaryDark = Template.bind({});
PrimaryDark.args = {
  theme: AppLinkTheme.PRIMARY,
};
PrimaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const SecondaryDark = Template.bind({});
SecondaryDark.args = {
  theme: AppLinkTheme.SECONDARY,
};
SecondaryDark.decorators = [ThemeDecorator(Theme.DARK)];

export const RedDark = Template.bind({});
RedDark.args = {
  theme: AppLinkTheme.RED,
};
RedDark.decorators = [ThemeDecorator(Theme.DARK)];
