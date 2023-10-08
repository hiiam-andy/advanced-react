import { render, screen } from '@testing-library/react';
import { withTranslation } from 'react-i18next';
import { Sidebar } from './Sidebar';

describe('sidebar', () => {
  test('рендер сайдбара', () => {
    // чтобы тестировать без обязательного перевода
    const SidebarWithTranslation = withTranslation()(Sidebar);
    render(<SidebarWithTranslation />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });
});
