import { AppLink, AppLinkTheme } from 'shared/ui/appLink/AppLink';
import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/сlassNames';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const { t } = useTranslation();
  return (
    <div className={classNames(styles.navbar)}>
      <div className={styles.links}>/</div>
    </div>
  );
};
