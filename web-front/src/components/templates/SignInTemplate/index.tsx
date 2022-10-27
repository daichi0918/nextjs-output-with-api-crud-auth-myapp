/**
 * SignInTemplate
 *
 * @package components
 */
import { FC, useState, useCallback } from 'react';
import { useRouter } from 'next/router';
import { singInApi } from '@/apis/authApi';
import { NAVIGATION_PATH } from '@/constants/navigation';
import { useAuthContext } from '@/contexts/AuthContext';
import { InputForm } from '@/components/atoms/InputForm';
import { CommonButton } from '@/components/atoms/CommonButton';
import { EventType } from '@/interfaces/Event';
import styles from './styles.module.css';

/**
 * SignInTemplate
 * @returns
 */
export const SignInTemplate: FC = () => {
  const router = useRouter();
  const { singIn } = useAuthContext();
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  /**
   * ログイン処理
   */
  const handleLogin: EventType['onSubmit'] = useCallback(
    async (event) => {
      event.preventDefault();
      const res = await singInApi(email, password);
      if (res?.code === 401) {
        console.log(res.message);
        return;
      }
      if (res?.data?.user) {
        singIn(res.data.user);
        localStorage.setItem('access_token', res.data.accessToken);
        router.push(NAVIGATION_PATH.TOP);
      }
    },
    [email, password, singIn, router]
  );

  return (
    <div className={styles.container}>
      <form onSubmit={handleLogin}>
        <div>
          <InputForm type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div>
          <InputForm
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <CommonButton type="submit" title="login" />
        </div>
      </form>
    </div>
  );
};
