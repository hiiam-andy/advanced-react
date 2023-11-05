import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

// react portal чтобы закинуть элемент в любое место ДОМ дерева,
// а не в то, куда его физически добавили

interface PortalProps {
  // то, что телепортируем
  children: ReactNode;
  // то, куда телепортируем
  element?: HTMLElement;
}

export const Portal = (props: PortalProps) => {
  const {
    children,
    // по умолчанию будет телепортировать в боди, если не указано иное
    element = document.body,
  } = props;
  return createPortal(children, element);
};
