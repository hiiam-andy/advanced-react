import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import styles from './LangSwitcher.module.scss';
import { Button } from '../button';
import { ThemeButton } from '../button/ui/Button';

interface langSwitcherProps {
  className?: string;
}

export const LangSwitcher = ({ className }: langSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      theme={ThemeButton.CLEAR}
      onClick={toggle}
      className={classNames('', {}, [className])}
    >
      {t('Язык')}
    </Button>
  );
};
