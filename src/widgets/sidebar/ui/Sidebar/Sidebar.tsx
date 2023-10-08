import { classNames } from 'shared/lib/classNames/classNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/themeSwitcher';
import { useTranslation } from 'react-i18next';
import { LangSwitcher } from 'shared/ui/langSwitcher/LangSwitcher';
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
      <button onClick={onToggle}>{t('Меню')}</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />

        <LangSwitcher className={styles.lang} />
      </div>
    </div>
  );
};
