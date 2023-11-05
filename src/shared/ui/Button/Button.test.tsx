import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

describe('button', () => {
  test('рендер кнопка', () => {
    // проверка, что кнопка вообще есть в документе
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });

  test('кнопка с темой clear', () => {
    // проверка, что у кнопки есть класс clear
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button theme={ThemeButton.CLEAR}>test</Button>);
    expect(screen.getByText('test')).toHaveClass('clear');
    screen.debug();
  });
});
