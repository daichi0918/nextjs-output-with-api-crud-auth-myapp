/**
 * useHeader
 *
 * @package organisms
 */

import { NAVIGATION_LIST } from '@/constants/navigation';
import { AuthContext } from '@/contexts/AuthContext';
import { useRouter } from 'next/navigation';
import { useCallback, useContext } from 'react';

/**
 * useHeader
 * @returns
 */
export const useHeader = () => {
  const router = useRouter();
  const { signOut } = useContext(AuthContext);

  const handleSignOut = useCallback(async () => {
    localStorage.removeItem('access_token');
    signOut();
    router.push(NAVIGATION_LIST.LOGIN);
  }, [router]);

  return {
    handleSignOut,
  };
};
