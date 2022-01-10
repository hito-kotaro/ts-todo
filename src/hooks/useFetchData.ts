import { useState, useCallback } from 'react';
import axios from 'axios';
import useTodoList from './useTodoList';
import Todo from '../types/Todo';

const useFetchData = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const { todoList, updateTodoList } = useTodoList();

  const fetchFromBackEnd = useCallback(async () => {
    if (todoList.length === 0) {
      setIsLoading(true);
      try {
        const result = await axios.get<Todo[]>(
          'https://jsonplaceholder.typicode.com/todos',
        );
        const initTodoList = result.data.map((item: Todo) => {
          const initTodo: Todo = {
            userId: item.userId,
            id: item.id,
            title: item.title,
            completed: item.completed,
          };
          return initTodo;
        });
        updateTodoList(initTodoList);
      } catch (error) {
        // eslint-disable-next-line no-alert
        alert('error');
      } finally {
        setIsLoading(false);
      }
    }
  }, []);
  return { isLoading, fetchFromBackEnd };
};

export default useFetchData;
