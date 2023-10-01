import { classNames } from 'shared/lib/classNames/ClassNames';
import { ButtonHTMLAttributes, FC } from 'react';
import styles from './Buttom.module.scss';

export enum ThemeButton {
  CLEAR = 'clear', // просто текст
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      type="button"
      className={classNames(styles.Button, { [styles[theme]]: true }, [
        className,
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
