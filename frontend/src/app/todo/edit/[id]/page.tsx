'use client';
/**
 * TodoEdit
 *
 * @package todo
 */
import { TodoUpdateTemplate } from '@/components/templates/TodoUpdate';
import { useParams } from 'next/navigation';

/**
 * TodoPage
 * @returns {JSX.Element}
 */
const TodoEditPage = () => {
  return <TodoUpdateTemplate />;
};

export default TodoEditPage;
