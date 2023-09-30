import { classNames } from "shared/lib/classNames/ClassNames";
import styles from "./LangSwitcher.module.scss";
import { useTranslation } from "react-i18next";
import { Button } from "../button";
import { ThemeButton } from "../button/ui/Button";

interface langSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: langSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = () => {
    i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru");
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggle}
      className={classNames(styles.LangSwitcher, {}, [className])}
    >
      {t("Язык")}
    </Button>
  );
};
