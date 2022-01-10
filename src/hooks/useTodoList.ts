import { useRecoilState } from 'recoil';
import { todoListState } from '../store/todoListState';
import type Todo from '../types/Todo';

const useTodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const updateTodoList = (newTodoList: Todo[]) => {
    setTodoList(newTodoList);
  };

  return { todoList, updateTodoList };
};

export default useTodoList;
