import { FC, useState, useCallback } from 'react';
import { singInApi } from '@/apis/authApi';
import { InputForm } from '@/components/atoms/InputForm';
import { CommonButton } from '@/components/atoms/CommonButton';
import { AuthResponseType } from '@/interfaces/User';
import { EventType } from '@/interfaces/Event';
import styles from './styles.module.css';

export const SignInTemplate: FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin: EventType['onSubmit'] = useCallback(
    async (event) => {
      event.preventDefault();
      const res = await singInApi(email, password);
      if (res?.code === 401) {
        console.log(res.message);
      }
      if (res?.data?.user) {
        console.log(res);
      }
    },
    [email, password]
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
