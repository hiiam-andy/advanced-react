import { classNames } from "shared/lib/classNames/ClassNames";
import style from "./Navbar.module.scss";
import { AppLink, AppLinkTheme } from "shared/ui/appLink/AppLink";
import { ThemeSwitcher } from "shared/ui/themeSwitcher";

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(style.navbar)}>
      <div className={style.links}>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={"/"}
          className={style.mainLink}
        >
          Главная
        </AppLink>
        <AppLink
          theme={AppLinkTheme.SECONDARY}
          to={"/about"}
          className={style.aboutLink}
        >
          О сайте
        </AppLink>
      </div>
    </div>
  );
};
