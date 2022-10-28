/**
 * SignUpTemplate
 *
 * @package components
 */
import { FC, useState, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { signUpApi } from '@/apis/authApi';
import { NAVIGATION_PATH, NAVIGATION_LIST } from '@/constants/navigation';
import { useAuthContext } from '@/contexts/AuthContext';
import { InputForm } from '@/components/atoms/InputForm';
import { CommonButton } from '@/components/atoms/CommonButton';
import { EventType } from '@/interfaces/Event';
import styles from './styles.module.css';

/**
 * SignUpTemplate
 * @returns
 */
export const SignUpTemplate: FC = () => {
  const router = useRouter();
  const { singIn } = useAuthContext();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [passwordConfirm, setPasswordConfirm] = useState<string>('');

  /**
   * 会員登録処理
   */
  const handleSignUp: EventType['onSubmit'] = useCallback(
    async (event) => {
      event.preventDefault();
      if (password !== passwordConfirm) return;
      if (name === '' || email === '' || password === '') return;

      const res = await signUpApi(name, email, password);
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
    [name, email, password, passwordConfirm, router, singIn]
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>SignUp</h1>
      <form className={styles.form} onSubmit={handleSignUp}>
        <div className={styles.area}>
          <InputForm type="text" value={name} placeholder="name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className={styles.area}>
          <InputForm type="email" value={email} placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className={styles.area}>
          <InputForm
            type="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className={styles.area}>
          <InputForm
            type="password"
            value={passwordConfirm}
            placeholder="password confirm"
            onChange={(e) => setPasswordConfirm(e.target.value)}
          />
        </div>
        <div className={styles.area}>
          <CommonButton type="submit" title="signup" />
        </div>
        <div className={styles.link}>
          <Link href={NAVIGATION_LIST.SIGNIN}>&lt;&lt; to signin page</Link>
        </div>
      </form>
    </div>
  );
};
