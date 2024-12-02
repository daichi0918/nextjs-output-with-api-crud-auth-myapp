'use client';
/**
 * TodoDetail
 *
 * @package templates
 */
import { useContext, useEffect, useState } from 'react';
import { TodoContext } from '../../../contexts/TodoContext';
// import { TextAreaForm } from '../../atoms/TextAreaForm';
import InputForm from '@/components/atoms/InputForm';
import styles from './styles.module.css';
import { BaseLayout } from '@/components/organisms/BaseLayout';
import { fetchTodoDetailApi } from '@/apis/todoApi';
import { TodoType } from '@/interfaces/Todo';
import { useParams } from 'next/navigation';
import { useTodoDetailTemplate } from './useTodoDetailTemplate';
import FieldWrapper from '@/components/organisms/FieldWrapper';
import { TextAreaForm } from '@/components/atoms/TextAreaForm';

/**
 * @param {id: string } id
 * @return {JSX.Element}
 */
export const TodoDetailTemplate = () => {
  const params = useParams();
  const { targetTodo } = useTodoDetailTemplate(params.id);

  return (
    <>
      <>
        <BaseLayout title={'ToDo Detail'}>
          {!!targetTodo && (
            <>
              <FieldWrapper>
                <InputForm value={targetTodo.title} readOnly={true} />
              </FieldWrapper>
              <FieldWrapper>
                <TextAreaForm
                  className={styles.textarea}
                  value={targetTodo.content}
                  readOnly={true}
                />
              </FieldWrapper>
            </>
          )}
        </BaseLayout>
      </>
    </>
  );
};
