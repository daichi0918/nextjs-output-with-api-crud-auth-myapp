'use client';
/**
 * LoginTemplate
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
import { useLoginTemplate } from './useLoginTemplate';

/**
 * LoginTemplate
 * @returns {JSX.Element}
 */
const LoginTemplate = () => {
  const {
    inputEmailValue,
    inputPasswordValue,
    handleInputEmailChange,
    handleInputPasswordChange,
  } = useLoginTemplate();

  return (
    <BaseLayout title={'Login'}>
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
      <Button buttonName={'login'} onClick={() => console.log('button')} />
      <NavigationLink
        href={NAVIGATION_LIST.SIGNUP}
        linkName={'to signup page'}
      />
    </BaseLayout>
  );
};

export default LoginTemplate;
