import "./styles/index.scss";

import { classNames } from "shared/lib/classNames/ClassNames";
import { useTheme } from "./providers/themeProvider";

import { AppRouter } from "./providers/routes";
import { Navbar } from "widgets/navbar";

const App = () => {
  const { theme } = useTheme();

  return (
    <div className={classNames("app", {}, [theme])}>
      <Navbar />
      <AppRouter />
    </div>
  );
};

export default App;
