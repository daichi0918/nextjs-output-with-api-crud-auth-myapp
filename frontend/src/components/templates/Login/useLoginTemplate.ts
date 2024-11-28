/**
 * useLoginTemplate
 *
 * @package templates
 */

import React, { useState } from 'react';
import { EventType } from '@/interfaces/Event';

export const useLoginTemplate = () => {
  /* state定義 */
  const [inputEmailValue, setInputEmailValue] = useState<string>('');
  const [inputPasswordValue, setInputPasswordValue] = useState<string>('');

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

  return {
    inputEmailValue,
    inputPasswordValue,
    handleInputEmailChange,
    handleInputPasswordChange,
  };
};
