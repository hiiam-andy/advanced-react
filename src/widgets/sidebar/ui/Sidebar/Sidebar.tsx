import { useState } from 'react';
import { LangSwitcher } from 'shared/ui/langSwitcher/LangSwitcher';
import { Button, ButtonSize, ThemeButton } from 'shared/ui/Button/Button';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/appLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/RouteConfig';
import MainIcon from 'shared/assets/icons/main-20-20.svg';
import AboutIcon from 'shared/assets/icons/about-20-20.svg';
import { classNames } from 'shared/lib/classNames/сlassNames';
import { ThemeSwitcher } from '../../../../shared/ui/themeSwitcher/index';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const { t } = useTranslation();
  const [collapsed, setCollapsed] = useState(true);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <Button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        className={styles.collapseBtn}
        theme={ThemeButton.BACKGROUNG_INVERTED}
        size={ButtonSize.L}
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <div className={styles.items}>
        <div className={styles.item}>
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.main}>
            <MainIcon className={styles.icon} />
            <span className={styles.link}>{t('Главная')}</span>
          </AppLink>
        </div>
        <div className={styles.item}>
          <AppLink theme={AppLinkTheme.SECONDARY} to={RoutePath.about}>
            <AboutIcon className={styles.icon} />
            <span className={styles.link}>{t('О сайте')}</span>
          </AppLink>
        </div>
      </div>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} short={collapsed} />
      </div>
    </div>
  );
};
