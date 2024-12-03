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
import FieldWrapper from '@/components/organisms/FieldWrapper';
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
    handleLogin,
  } = useLoginTemplate();

  return (
    <BaseLayout title={'Login'}>
      <form onSubmit={handleLogin}>
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
        <Button buttonName={'login'} />
      </form>
      <NavigationLink
        href={NAVIGATION_LIST.SIGNUP}
        linkName={'to signup page'}
      />
    </BaseLayout>
  );
};

export default LoginTemplate;
