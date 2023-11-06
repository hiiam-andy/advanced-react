import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { componentRender } from 'shared/lib/tests/componentRender';
import { Counter } from './Counter';

const user = userEvent.setup();

describe('Counter.test', () => {
  test('Рендер', () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    expect(screen.getByTestId('value-title')).toHaveTextContent('10');
  });

  test('Сложение', async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    await user.click(screen.getByTestId('increment-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('11');
  });

  test('Вычитание', async () => {
    componentRender(<Counter />, {
      initialState: { counter: { value: 10 } },
    });
    await user.click(screen.getByTestId('decrement-btn'));
    expect(screen.getByTestId('value-title')).toHaveTextContent('9');
  });
});
