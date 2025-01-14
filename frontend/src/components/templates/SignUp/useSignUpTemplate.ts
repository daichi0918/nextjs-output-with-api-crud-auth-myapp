/**
 * useSignUpTemplate
 *
 * @package templates
 */

import React, { useCallback, useState } from 'react';
import { EventType } from '@/interfaces/Event';
import { useAuth } from '@/hooks/useAuth';
import { signUpApi } from '@/apis/authApi';
import { useRouter, usePathname } from 'next/navigation';
import { NAVIGATION_LIST, NAVIGATION_PATH } from '@/constants/navigation';
import crypto from 'crypto-js';

/**
 * useSignUpTemplate
 */
export const useSignUpTemplate = () => {
  const router = useRouter();
  /* state定義 */
  const [inputNameValue, setInputNameValue] = useState<string>('');
  const [inputEmailValue, setInputEmailValue] = useState<string>('');
  const [inputPasswordValue, setInputPasswordValue] = useState<string>('');
  const [inputPasswordConfirmValue, setInputPasswordConfirmValue] =
    useState<string>('');
  const { signIn } = useAuth();

  /* action定義 */
  /**
   * nameの値更新処理
   * @param { React.ChangeEvent<HTMLInputElement>} e
   */
  const handleInputNameChange: EventType['onChangeInput'] = (e) =>
    setInputNameValue(e.target.value);
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

  /**
   * 確認用passwordの値更新処理
   * @param { React.ChangeEvent<HTMLInputElement>} e
   */
  const handleInputPasswordConfirmChange: EventType['onChangeInput'] = (e) =>
    setInputPasswordConfirmValue(e.target.value);

  /**
   * サインアップ処理
   */
  const handleSignUp: EventType['onSubmit'] = useCallback(
    async (event) => {
      event.preventDefault();
      console.log('Form Submitted with values:', {
        inputNameValue,
        inputEmailValue,
        inputPasswordValue,
        inputPasswordConfirmValue,
      });
      if (inputPasswordValue !== inputPasswordConfirmValue) {
        alert('パスワードと確認用パスワードが異なっています');
        return;
      }
      const res = await signUpApi(
        inputNameValue,
        inputEmailValue,
        inputPasswordValue
      );
      if (res?.code === 400 || res?.code === 401) {
        alert(res.message);
        return;
      }
      if (res?.data?.user) {
        signIn(res.data.user);
        const ecrypted = crypto.AES.encrypt(res.data.accessToken, 'hogefuga');
        localStorage.setItem('access_token', ecrypted.toString());
        // localStorage.setItem('access_token', res.data.accessToken);
        router.push(NAVIGATION_PATH.TOP);
      }
    },
    [
      inputNameValue,
      inputEmailValue,
      inputPasswordValue,
      inputPasswordConfirmValue,
    ]
  );

  return {
    inputNameValue,
    inputEmailValue,
    inputPasswordValue,
    inputPasswordConfirmValue,
    handleInputNameChange,
    handleInputEmailChange,
    handleInputPasswordChange,
    handleInputPasswordConfirmChange,
    handleSignUp,
  };
};
