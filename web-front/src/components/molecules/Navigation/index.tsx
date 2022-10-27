/**
 * Navigation
 *
 * @package components
 */
import { FC, useCallback } from 'react';
import { useRouter } from 'next/router';
import { useAuthContext } from '@/contexts/AuthContext';
import { NavigationLink } from '@/components/atoms/NavigationLink';
import { NAVIGATION_PATH, NAVIGATION_LIST } from '@/constants/navigation';
import { EventType } from '@/interfaces/Event';
import styles from './styles.module.css';

/**
 * Navigation
 * @constructor
 */
export const Navigation: FC = () => {
  const router = useRouter();
  const { signOut } = useAuthContext();

  const logOut: EventType['onSubmitButton'] = useCallback(
    (e) => {
      e.preventDefault();
      localStorage.removeItem('access_token');
      signOut();
      router.push(NAVIGATION_LIST.SIGNIN);
    },
    [signOut, router]
  );

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Todo List</h1>
      <nav className={styles.nav}>
        <ul className={styles.ul}>
          <NavigationLink title={'Top'} linkPath={NAVIGATION_PATH.TOP} />
          <NavigationLink title={'Create'} linkPath={NAVIGATION_PATH.CREATE} />
          <li className={styles.li}>
            <button className={styles.button} onClick={logOut}>
              SignOut
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
