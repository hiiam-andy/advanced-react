import "./styles/index.scss";

import { classNames } from "shared/lib/classNames/ClassNames";
import { useTheme } from "./providers/themeProvider";

import { AppRouter } from "./providers/routes";
import { Navbar } from "widgets/navbar";
import { Sidebar } from "widgets/sidebar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <div className="content-page">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
};

export default App;
