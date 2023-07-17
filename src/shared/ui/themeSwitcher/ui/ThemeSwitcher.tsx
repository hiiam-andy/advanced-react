import { classNames } from "shared/lib/classNames/ClassNames";
import style from "./ThemeSwitcher.module.scss";
import { useTheme, Theme } from "app/providers/themeProvider";
import LightTheme from "shared/assets/icons/theme-light.svg";
import DarkTheme from "shared/assets/icons/theme-dark.svg";
import { Button, ThemeButton } from "shared/ui/button/ui/Button";

interface themeSwitcherProps {
  className?: string;
}

export const ThemeSwitcher = ({ className }: themeSwitcherProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      theme={ThemeButton.CLEAR}
      className={classNames(style.ThemeSwitcher, {}, [className])}
      onClick={toggleTheme}
    >
      {theme === Theme.DARK ? <DarkTheme /> : <LightTheme />}
    </Button>
  );
};
