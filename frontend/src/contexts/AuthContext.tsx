'use client';
/**
 * AuthContext
 *
 * @package contexts
 */

import { useAuth } from '@/hooks/useAuth';
import { UserType } from '@/interfaces/User';
import { ReactNode, FC, createContext } from 'react';

interface Props {
  children: ReactNode;
}

interface ContextInterface {
  user: UserType | undefined;
  isAuth: boolean;
  // why: なぜ引数を入れてる？
  singIn: (user: UserType) => Promise<void>;
  signOut: () => Promise<void>;
}

const AuthContext = createContext({} as ContextInterface);

/**
 * AuthProvider
 * @param children
 * @returns
 */

export const AuthProvider: FC<Props> = ({ children }) => {
  const { user, isAuth, singIn, signOut } = useAuth();
  return (
    <AuthContext.Provider
      value={{
        user,
        isAuth,
        singIn,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
