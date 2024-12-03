'use client';
/**
 * TodoUpdate
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
import { useRouter, usePathname, useParams } from 'next/navigation';
import { createTodoApi, fetchTodoDetailApi } from '@/apis/todoApi';
import { NAVIGATION_PATH } from '@/constants/navigation';

/**
 * @param {id: string } id
 * @return {JSX.Element}
 */
export const TodoUpdateTemplate = () => {
  const params = useParams();
  const router = useRouter();
  const { updateTodo } = useContext(TodoContext);
  /* state定義 */
  const [inputTitleValue, setInputTitleValue] = useState<string | undefined>(
    ''
  );
  const [inputContentValue, setInputContentValue] = useState<
    string | undefined
  >('');

  /* action定義 */
  /**
   * titleの値更新処理
   * @param { React.ChangeEvent<HTMLInputElement>} e
   */
  const handleInputTitleChange: EventType['onChangeInput'] = (e) =>
    setInputTitleValue(e.target.value);

  /**
   * contentの値更新処理
   * @param { React.ChangeEvent<HTMLTextAreaElement>} e
   */
  const handleInputContentChange: EventType['onChangeTextArea'] = (e) =>
    setInputContentValue(e.target.value);

  /**
   * todo更新処理
   */
  const handleUpdateTodo: EventType['onSubmit'] = useCallback(
    async (e) => {
      e.preventDefault();
      if (inputTitleValue !== '' && inputContentValue !== '') {
        updateTodo(
          Number(params.id),
          String(inputTitleValue),
          String(inputContentValue)
        );
        router.push(NAVIGATION_PATH.TOP);
      }
    },
    [updateTodo, inputTitleValue, inputContentValue, router]
  );

  const fetchTodoTarget = useCallback(async () => {
    if (
      !!params.id &&
      typeof params.id === 'string' &&
      !Number.isNaN(Number(params.id))
    ) {
      const res = await fetchTodoDetailApi(Number(params.id));
      setInputTitleValue(res?.data?.title);
      setInputContentValue(res?.data?.content);
    }
  }, []);

  useEffect(() => {
    fetchTodoTarget();
  }, [params.id]);
  return (
    <>
      <BaseLayout title={'ToDo Edit'}>
        <form onSubmit={handleUpdateTodo}>
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
          <Button buttonName={'Edit Todo'} />
        </form>
      </BaseLayout>
    </>
  );
};
