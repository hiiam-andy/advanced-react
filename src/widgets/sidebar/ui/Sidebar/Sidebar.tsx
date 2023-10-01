import { classNames } from 'shared/lib/classNames/ClassNames';
import { useState } from 'react';
import { ThemeSwitcher } from 'shared/ui/themeSwitcher';
import { LangSwitcher } from 'shared/ui/langSwitcher/LangSwitcher';
import styles from './Sidebar.module.scss';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(true);
  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      className={classNames(styles.Sidebar, { [styles.collapsed]: collapsed }, [
        className,
      ])}
    >
      <button onClick={onToggle}>toggle</button>
      <div className={styles.switchers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} />
      </div>
    </div>
  );
};
