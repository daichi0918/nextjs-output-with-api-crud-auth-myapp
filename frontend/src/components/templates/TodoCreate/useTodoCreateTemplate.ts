import { NAVIGATION_PATH } from '@/constants/navigation';
import { TodoContext } from '@/contexts/TodoContext';
import { EventType } from '@/interfaces/Event';
import { useRouter } from 'next/router';
import { useCallback, useContext, useState } from 'react';

/**
 * useTodoCreateTemplate
 *
 * @package hooks
 */
export const useTodoCreateTemplate = () => {
  const router = useRouter();
  const { addTodo } = useContext(TodoContext);
  /* state定義 */
  const [inputTitleValue, setInputTitleValue] = useState<string>('');
  const [inputContentValue, setInputContentValue] = useState<string>('');

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
   * todo追加処理
   */
  const handleCreateTodo: EventType['onSubmit'] = useCallback(
    async (e) => {
      e.preventDefault();
      if (inputTitleValue !== '' && inputContentValue !== '') {
        addTodo(inputTitleValue, inputContentValue);
        router.push(NAVIGATION_PATH.TOP);
      }
    },
    [addTodo, inputTitleValue, inputContentValue, router]
  );

  return {
    inputTitleValue,
    inputContentValue,
    handleInputTitleChange,
    handleInputContentChange,
    handleCreateTodo,
  };
};
