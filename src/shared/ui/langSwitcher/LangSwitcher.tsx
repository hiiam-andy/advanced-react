import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/сlassNames';
import { Button, ThemeButton } from 'shared/ui/Button/Button';

interface langSwitcherProps {
  className?: string;
  short?: boolean;
}

export const LangSwitcher = ({ className, short }: langSwitcherProps) => {
  const { t, i18n } = useTranslation();

  const toggle = async () => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
  };

  return (
    <Button
      className={classNames('', {}, [className])}
      theme={ThemeButton.CLEAR_INVERTED}
      onClick={toggle}
    >
      {t(short ? 'Короткий язык' : 'Язык')}
    </Button>
  );
};
