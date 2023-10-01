import { classNames } from 'shared/lib/classNames/ClassNames';
import { Loader } from 'shared/ui/loader/Loader';
import styles from './PageLoader.module.scss';

interface PageLoaderProps {
  className?: string;
}

export const PageLoader = ({ className }: PageLoaderProps) => {
  return (
    <div className={classNames(styles.page_loader, {}, [className])}>
      <Loader />
    </div>
  );
};
