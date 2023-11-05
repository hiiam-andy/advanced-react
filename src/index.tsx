import { render } from 'react-dom';
import { StoreProvider } from 'app/providers/storeProvider';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'app/providers/themeProvider';
import App from './app/App';
import './shared/config/i18n/i18n';
import { ErrorBoundary } from './app/providers/errorBoundary';
import './app/styles/index.scss';

render(
  <StoreProvider>
    <BrowserRouter>
      <ErrorBoundary>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </ErrorBoundary>
    </BrowserRouter>
  </StoreProvider>,
  document.getElementById('root')
);
