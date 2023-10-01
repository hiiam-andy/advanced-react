import { classNames } from 'shared/lib/classNames/ClassNames';
import { AppLink, AppLinkTheme } from 'shared/ui/appLink/AppLink';
import styles from './Navbar.module.scss';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => (
  <div className={classNames(styles.navbar)}>
    <div className={styles.links}>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to="/"
        className={styles.mainLink}
      >
        Главная
      </AppLink>
      <AppLink
        theme={AppLinkTheme.SECONDARY}
        to="/about"
        className={styles.aboutLink}
      >
        О сайте
      </AppLink>
    </div>
  </div>
);
