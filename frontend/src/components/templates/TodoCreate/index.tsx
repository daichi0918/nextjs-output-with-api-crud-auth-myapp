'use client';
/**
 * TodoCreate
 *
 * @package templates
 */
import { useCallback, useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../../contexts/TodoContext';
import InputForm from '@/components/atoms/InputForm';
import styles from './styles.module.css';
import { BaseLayout } from '@/components/organisms/BaseLayout';
import { TodoType } from '@/interfaces/Todo';
import FieldWrapper from '@/components/organisms/FieldWrapper';
import { TextAreaForm } from '@/components/atoms/TextAreaForm';
import { EventType } from '@/interfaces/Event';
import { Button } from '@/components/atoms/Button';
import { useRouter, usePathname } from 'next/navigation';
import { createTodoApi } from '@/apis/todoApi';
import { NAVIGATION_PATH } from '@/constants/navigation';
import { useTodoCreateTemplate } from './useTodoCreateTemplate';

/**
 * @param {id: string } id
 * @return {JSX.Element}
 */
export const TodoCreateTemplate = () => {
  const {
    inputTitleValue,
    inputContentValue,
    handleInputTitleChange,
    handleInputContentChange,
    handleCreateTodo,
  } = useTodoCreateTemplate();
  return (
    <>
      <BaseLayout title={'ToDo Create'}>
        <form onSubmit={handleCreateTodo}>
          <FieldWrapper>
            <InputForm
              placeholder={'title'}
              value={inputTitleValue}
              onChange={handleInputTitleChange}
            />
          </FieldWrapper>
          <FieldWrapper>
            <TextAreaForm
              placeholder={'content'}
              value={inputContentValue}
              onChange={handleInputContentChange}
            />
          </FieldWrapper>
          <Button buttonName={'Create Todo'} />
        </form>
      </BaseLayout>
    </>
  );
};
