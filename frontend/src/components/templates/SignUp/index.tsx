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
import FieldWrapper from '@/components/organisms/FieldWrapper';
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
    handleSignUp,
  } = useSignUpTemplate();

  return (
    <BaseLayout title={'SignUp'}>
      <form onSubmit={handleSignUp}>
        <FieldWrapper>
          <InputForm
            placeholder={'name'}
            value={inputNameValue}
            onChange={handleInputNameChange}
          />
        </FieldWrapper>
        <FieldWrapper>
          <InputForm
            placeholder={'email'}
            value={inputEmailValue}
            onChange={handleInputEmailChange}
          />
        </FieldWrapper>
        <FieldWrapper>
          <InputForm
            placeholder={'password'}
            value={inputPasswordValue}
            onChange={handleInputPasswordChange}
          />
        </FieldWrapper>
        <FieldWrapper>
          <InputForm
            placeholder={'password confirm'}
            value={inputPasswordConfirmValue}
            onChange={handleInputPasswordConfirmChange}
          />
        </FieldWrapper>
        <Button buttonName={'signup'} />
        <NavigationLink
          href={NAVIGATION_LIST.LOGIN}
          linkName={'to signin page'}
        />
      </form>
    </BaseLayout>
  );
};

export default SignUpTemplate;
