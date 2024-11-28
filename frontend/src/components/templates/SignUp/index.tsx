'use client';
/**
 * SignUpTemplate
 *
 * @package templates
 */
import React, { useState } from 'react';
import styles from './styles.module.css';
import { BaseLayout } from '@/components/organisms/BaseLayout';
import InputForm from '@/components/atoms/InputForm';
import { EventType } from '@/interfaces/Event';
import { Button } from '@/components/atoms/Button';
import Link from 'next/link';
import { NAVIGATION_LIST, NAVIGATION_PATH } from '@/constants/navigation';
import NavigationLink from '@/components/atoms/NavigationLink';
import InputFieldWrapper from '@/components/organisms/InputFieldWrapper';

/**
 * SignUpTemplate
 * @returns {JSX.Element}
 */
const SignUpTemplate = () => {
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

  return (
    <BaseLayout title={'SignUp'}>
      <InputFieldWrapper>
        <InputForm
          placeholder={'name'}
          value={inputNameValue}
          onChange={handleInputNameChange}
        />
      </InputFieldWrapper>
      <InputFieldWrapper>
        <InputForm
          placeholder={'email'}
          value={inputEmailValue}
          onChange={handleInputEmailChange}
        />
      </InputFieldWrapper>
      <InputFieldWrapper>
        <InputForm
          placeholder={'password'}
          value={inputPasswordValue}
          onChange={handleInputPasswordChange}
        />
      </InputFieldWrapper>
      <InputFieldWrapper>
        <InputForm
          placeholder={'password confirm'}
          value={inputPasswordConfirmValue}
          onChange={handleInputPasswordConfirmChange}
        />
      </InputFieldWrapper>
      <Button buttonName={'signup'} onClick={() => console.log('button')} />
      <NavigationLink
        href={NAVIGATION_LIST.LOGIN}
        linkName={'to signin page'}
      />
    </BaseLayout>
  );
};

export default SignUpTemplate;
