import { classNames } from 'shared/lib/classNames/сlassNames';
import { useTranslation } from 'react-i18next';
import styles from './Text.module.scss';

export enum TextTheme {
  PRIMARY = 'primary',
  ERROR = 'error',
}

interface TextProps {
  className?: string;
  title?: string | unknown;
  text?: string | unknown;
  theme?: TextTheme;
}

export const Text = (props: TextProps) => {
  const { className, text, title, theme = TextTheme.PRIMARY } = props;
  const { t } = useTranslation();

  return (
    <div className={classNames(styles.Text, { [styles[theme]]: true }, [className])}>
      {title && <p className={styles.title}>{title}</p>}
      {text && <p className={styles.text}>{text}</p>}
    </div>
  );
};
