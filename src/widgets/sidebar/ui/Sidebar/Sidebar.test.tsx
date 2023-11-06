import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Sidebar } from './Sidebar';

describe('sidebar', () => {
  test('С одним параметром', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Тоггл', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
    const toggleBtn = screen.getByTestId('sidebar-toggle');
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
    fireEvent.click(toggleBtn);
    fireEvent.click(toggleBtn);
    expect(screen.getByTestId('sidebar')).toHaveClass('collapsed');
  });
});
