/**
 * useTodoTemplate
 *
 * @package hooks
 */
import { useMemo, useState, useCallback, useContext, useEffect } from 'react';
import { TodoType } from '@/interfaces/Todo';
import { EventType } from '@/interfaces/Event';
import { TodoContext } from '@/contexts/TodoContext';
import { fetchTodoDetailApi } from '@/apis/todoApi';

export const useTodoDetailTemplate = (id: string | string[]) => {
  const [targetTodo, setTargetTodo] = useState<TodoType | undefined>(undefined);

  const fetchTodoDetail = useCallback(async () => {
    if (!!id && typeof id === 'string' && !Number.isNaN(Number(id))) {
      const res = await fetchTodoDetailApi(Number(id));
      setTargetTodo(
        res?.data && typeof res.data === 'object' ? res.data : undefined
      );
    }
  }, []);

  useEffect(() => {
    fetchTodoDetail();
  }, [id]);

  return { targetTodo };
};
