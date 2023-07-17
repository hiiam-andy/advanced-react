import { classNames } from "shared/lib/classNames/ClassNames";
import style from "./Buttom.module.scss";
import { ButtonHTMLAttributes, FC } from "react";

export enum ThemeButton {
  CLEAR = "clear", //просто текст
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props;
  return (
    <button
      className={classNames(style.Button, { [style[theme]]: true }, [
        className,
      ])}
      {...otherProps}
    >
      {children}
    </button>
  );
};
