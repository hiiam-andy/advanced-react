import './styles/index.scss';

import { classNames } from 'shared/lib/classNames/ClassNames';

import { Navbar } from 'widgets/navbar';
import { Sidebar } from 'widgets/sidebar';
import { Suspense } from 'react';
import { AppRouter } from './providers/routes';
import { useTheme } from './providers/themeProvider';

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback="">
        <Navbar />
        <div className="content-page">
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  );
};

export default App;
