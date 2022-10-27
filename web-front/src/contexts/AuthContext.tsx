/**
 * TodoContext
 *
 * @package contexts
 */
import { FC, ReactNode, useState, useCallback, useContext, createContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { authenticationApi } from '@/apis/authApi';
import { UserType } from '@/interfaces/User';
import { NAVIGATION_LIST, NAVIGATION_PATH } from '@/constants/navigation';

type Props = {
  children: ReactNode;
};

interface ContextInterface {
  user: UserType | undefined;
  isAuth: boolean;
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
  const router = useRouter();
  const [user, setUser] = useState<UserType | undefined>(undefined);
  const [isAuth, setIsAuth] = useState<boolean>(false);

  const singIn = useCallback(async (user: UserType) => {
    setUser(user);
    setIsAuth(true);
  }, []);

  const signOut = useCallback(async () => {
    setUser(undefined);
    setIsAuth(false);
  }, []);

  /**
   * 未ログインページにいるか判定処理
   */
  const isExitBeforeAuthPage = useCallback(() => {
    return router.pathname === NAVIGATION_PATH.SIGNIN || router.pathname === NAVIGATION_PATH.SIGNUP;
  }, [router.pathname]);

  /**
   * 認証ルーティング
   */
  const authRouting = useCallback(async () => {
    let auth = false;
    const res = await authenticationApi();
    if (res?.data?.user) {
      setUser(res?.data?.user);
      setIsAuth(true);
      auth = true;
    }

    // 未ログインでログイン後のページにいる場合、ログイン画面にリダイレクト
    if (!auth && !isExitBeforeAuthPage()) router.push(NAVIGATION_LIST.SIGNIN);
    // ログイン済で未ログインのページにいる場合、Todo一覧ページにリダイレクト
    if (auth && isExitBeforeAuthPage()) router.push(NAVIGATION_LIST.TOP);
  }, [isExitBeforeAuthPage, router]);

  useEffect(() => {
    authRouting();
  }, [authRouting]);

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

export const useAuthContext = () => useContext(AuthContext);
