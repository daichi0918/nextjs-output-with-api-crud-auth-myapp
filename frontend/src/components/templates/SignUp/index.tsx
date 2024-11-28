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
import { useSignUpTemplate } from './useSignUpTemplate';

/**
 * SignUpTemplate
 * @returns {JSX.Element}
 */
const SignUpTemplate = () => {
  const {
    inputNameValue,
    inputEmailValue,
    inputPasswordValue,
    inputPasswordConfirmValue,
    handleInputNameChange,
    handleInputEmailChange,
    handleInputPasswordChange,
    handleInputPasswordConfirmChange,
  } = useSignUpTemplate();

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
