import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from '../../lib/classNames/сlassNames';
import styles from './Button.module.scss';

export enum ThemeButton {
  CLEAR = 'clear',
  CLEAR_INVERTED = 'clearInverted',
  OUTLINE = 'outline',
  BACKGROUND = 'background',
  BACKGROUNG_INVERTED = 'backgroundInverted',
}

export enum ButtonSize {
  M = 'size_m',
  L = 'size_l',
  XL = 'size_xl',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
  square?: boolean;
  size?: ButtonSize;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    className,
    children,
    theme,
    square,
    size = ButtonSize.M,
    ...otherProps
  } = props;

  const mods: Record<string, boolean> = {
    [styles[theme]]: true,
    [styles.square]: square,
    [styles[size]]: true,
  };

  return (
    <button
      className={classNames(styles.Button, mods, [className])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
