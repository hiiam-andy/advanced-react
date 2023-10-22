import { Loader } from 'shared/ui/loader/Loader';
import { classNames } from '../../shared/lib/classNames/classNames';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => (
  <div className={classNames(styles.page_loader, {}, [className])}>
    <Loader />
  </div>
);
