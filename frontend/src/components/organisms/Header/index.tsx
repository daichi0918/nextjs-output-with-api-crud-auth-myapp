'use client';
/**
 * Header
 *
 * @package organisms
 */
import styles from './styles.module.css';
import Link from 'next/link';
import { NAVIGATION_LIST } from '@/constants/navigation';
import { memo, useCallback, useContext } from 'react';
import { AuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useHeader } from './useHeader';

/**
 * Header
 * @returns {JSX.Element}
 */
export const Header = memo(() => {
  const { handleSignOut } = useHeader();
  return (
    <header className={styles.navbar}>
      <div className={styles.headerTitle}>
        <p>Todo List</p>
      </div>
      <nav className={styles.navLinks}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <Link href={NAVIGATION_LIST.TOP}>Top</Link>
          </li>
          <li className={styles.item}>
            <Link href={NAVIGATION_LIST.CREATE}>Create</Link>
          </li>
          <li className={styles.item}>
            <div onClick={handleSignOut}>Sign Out</div>
          </li>
        </ul>
      </nav>
    </header>
  );
});
