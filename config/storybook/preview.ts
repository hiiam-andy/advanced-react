// eslint-disable-next-line max-len
import { StyleDecorator } from '../../src/shared/config/storybook/StyleDecorator/StyleDecorator';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  decorators: [
    StyleDecorator,
  ]
};
