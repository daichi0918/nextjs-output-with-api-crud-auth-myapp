/**
 * BaseLayout
 *
 * @package organisms
 */

import { FC, memo } from 'react';
import styles from './styles.module.css';

interface BaseLayoutProps {
  children: React.ReactNode;
  title: string;
}

/**
 * @returns {JSX.Element}
 */
export const BaseLayout: FC<BaseLayoutProps> = memo(({ children, title }) => {
  return (
    <>
      <h1 className={styles.title}>{title}</h1>
      {children}
    </>
  );
});
