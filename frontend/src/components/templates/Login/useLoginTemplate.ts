/**
 * useLoginTemplate
 *
 * @package templates
 */

import React, { useCallback, useState } from 'react';
import { EventType } from '@/interfaces/Event';
import { useAuth } from '@/hooks/useAuth';
import { signInApi } from '@/apis/authApi';
import { useRouter, usePathname } from 'next/navigation';
import { NAVIGATION_LIST, NAVIGATION_PATH } from '@/constants/navigation';

export const useLoginTemplate = () => {
  const router = useRouter();
  /* state定義 */
  const [inputEmailValue, setInputEmailValue] = useState<string>('');
  const [inputPasswordValue, setInputPasswordValue] = useState<string>('');
  const { singIn } = useAuth();

  /* action定義 */
  /**
   * emailの値更新処理
   * @param { React.ChangeEvent<HTMLInputElement>} e
   */
  const handleInputEmailChange: EventType['onChangeInput'] = (e) =>
    setInputEmailValue(e.target.value);

  /**
   * passwordの値更新処理
   * @param { React.ChangeEvent<HTMLInputElement>} e
   */
  const handleInputPasswordChange: EventType['onChangeInput'] = (e) =>
    setInputPasswordValue(e.target.value);

  const handleLogin: EventType['onSubmit'] = useCallback(
    async (event) => {
      event.preventDefault();
      const res = await signInApi(inputEmailValue, inputPasswordValue);
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
    [inputEmailValue, inputPasswordValue]
  );
  return {
    inputEmailValue,
    inputPasswordValue,
    handleInputEmailChange,
    handleInputPasswordChange,
  };
};
