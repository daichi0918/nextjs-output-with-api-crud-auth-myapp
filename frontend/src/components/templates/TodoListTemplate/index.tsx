'use client';
/**
 * TodoListTemplate
 *
 * @package components
 */

import InputForm from '@/components/atoms/InputForm';
import { BaseLayout } from '@/components/organisms/BaseLayout';
import InputFieldWrapper from '@/components/organisms/InputFieldWrapper';
import { TodoContext } from '@/contexts/TodoContext';
import { useContext } from 'react';
import { useTodoTemplate } from './useTodoListTemplate';
import { TodoList } from '@/components/organisms/TodoList';

/**
 * TodoListTemplate
 * @returns {JSX.Element}
 */
export const TodoListTemplate = () => {
  // コンテキストから状態とロジックを呼び出してコンポーネントにあてがう
  const { originTodoList, deleteTodo } = useContext(TodoContext);

  const [
    { searchKeyword, showTodoList },
    { handleChangeSearchKeyword, handleDeleteTodo },
  ] = useTodoTemplate({
    originTodoList,
    deleteTodo,
  });
  return (
    <BaseLayout title={'Todo List'}>
      <form onSubmit={() => console.log('aaa')}>
        <InputFieldWrapper>
          <InputForm
            placeholder={'Search Keyword'}
            value={searchKeyword}
            onChange={handleChangeSearchKeyword}
          />
        </InputFieldWrapper>
        <InputFieldWrapper>
          {showTodoList?.length > 0 && (
            <TodoList
              todoList={showTodoList}
              handleDeleteTodo={handleDeleteTodo}
            />
          )}
        </InputFieldWrapper>
      </form>
    </BaseLayout>
  );
};
