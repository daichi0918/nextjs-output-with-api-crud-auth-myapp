'use client';
/**
 * TodoCreate
 *
 * @package templates
 */
import InputForm from '@/components/atoms/InputForm';
import styles from './styles.module.css';
import { BaseLayout } from '@/components/organisms/BaseLayout';
import FieldWrapper from '@/components/organisms/FieldWrapper';
import { TextAreaForm } from '@/components/atoms/TextAreaForm';
import { Button } from '@/components/atoms/Button';

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
