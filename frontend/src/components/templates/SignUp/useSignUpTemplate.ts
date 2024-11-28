/**
 * useSignUpTemplate
 *
 * @package templates
 */

import React, { useState } from 'react';
import { EventType } from '@/interfaces/Event';

/**
 * useSignUpTemplate
 */
export const useSignUpTemplate = () => {
  /* state定義 */
  const [inputNameValue, setInputNameValue] = useState<string>('');
  const [inputEmailValue, setInputEmailValue] = useState<string>('');
  const [inputPasswordValue, setInputPasswordValue] = useState<string>('');
  const [inputPasswordConfirmValue, setInputPasswordConfirmValue] =
    useState<string>('');

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
   * passwordの値更新処理
   * @param { React.ChangeEvent<HTMLInputElement>} e
   */
  const handleInputPasswordConfirmChange: EventType['onChangeInput'] = (e) =>
    setInputPasswordConfirmValue(e.target.value);

  return {
    inputNameValue,
    inputEmailValue,
    inputPasswordValue,
    inputPasswordConfirmValue,
    handleInputNameChange,
    handleInputEmailChange,
    handleInputPasswordChange,
    handleInputPasswordConfirmChange,
  };
};
