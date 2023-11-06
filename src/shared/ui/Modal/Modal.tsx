import { classNames } from 'shared/lib/classNames/сlassNames';
import React, {
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useTheme } from 'app/providers/themeProvider';
import { Portal } from '../Portal/Portal';
import styles from './Modal.module.scss';

interface ModalProps {
  className?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

const ANIMATION_DELAY = 200;

// react eslint dependency hooks для подсветки подписок в массивах зависимостей

// react portal чтобы закинуть элемент в любое место ДОМ дерева,
// а не в то, куда его физически добавили

export const Modal = (props: ModalProps) => {
  const { className, children, isOpen, onClose } = props;

  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef(null);
  const { theme } = useTheme();

  const closeHandler = useCallback(() => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  }, [onClose]);

  const onContentClicker = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  // функции создаются заново на каждый перерендер
  // у каждой функции новая ссылка
  // чтобы сохранить ссылку на функцию, обернуть в юзКоллбэк
  // на каждый рендер будет одна и та же функция, если ничего не изменилось
  const onKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeHandler();
      }
    },
    [closeHandler]
  );

  // все таймеры и подписки в компонентах надо очищать
  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen, onKeyDown]);

  const mods: Record<string, boolean> = {
    [styles.opened]: isOpen,
    [styles.isClosing]: isClosing,
  };

  return (
    <Portal>
      <div className={classNames(styles.Modal, mods, [className, theme])}>
        <div className={styles.overlay} onClick={closeHandler}>
          <div className={styles.content} onClick={onContentClicker}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  );
};
