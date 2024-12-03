'use client';
/**
 * Header
 *
 * @package organisms
 */
import styles from './styles.module.css';
import Link from 'next/link';
import { NAVIGATION_LIST } from '@/constants/navigation';

export const Header = () => {
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
            <div>Sign Out</div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
