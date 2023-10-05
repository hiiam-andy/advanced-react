import { render, screen } from '@testing-library/react';
import { Button } from './Button';

describe('button', () => {
  test('название', () => {
    // eslint-disable-next-line i18next/no-literal-string
    render(<Button>test</Button>);
    expect(screen.getByText('test')).toBeInTheDocument();
  });
});
