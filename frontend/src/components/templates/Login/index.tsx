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
import { Button } from '@/components/Button';
import Link from 'next/link';
import { NAVIGATION_LIST, NAVIGATION_PATH } from '@/constants/navigation';
import NavigationLink from '@/components/atoms/NavigationLink';

/**
 * TodoPage
 * @returns {JSX.Element}
 */
const LoginTemplate = () => {
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

  return (
    <BaseLayout title={'Login'}>
      <section className={styles.area}>
        <InputForm
          placeholder={'email'}
          value={inputEmailValue}
          onChange={handleInputEmailChange}
        />
      </section>
      <section className={styles.area}>
        <InputForm
          placeholder={'password'}
          value={inputPasswordValue}
          onChange={handleInputPasswordChange}
        />
      </section>
      <Button buttonName={'login'} onClick={() => console.log('button')} />
      <NavigationLink href={NAVIGATION_LIST.SIGNUP} linkName={'signup page'} />
    </BaseLayout>
  );
};

export default LoginTemplate;
