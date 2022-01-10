import React, { useEffect } from 'react';

import { useRecoilState } from 'recoil';
import { todoListState } from '../../../store/todoListState';
import TodoForm from '../TodoForm/TodoForm';
import TodoCard from '../TodoCard/TodoCard';

import useFetchData from '../../../hooks/useFetchData';

const TodoList = () => {
  const [todoList] = useRecoilState(todoListState);
  const { isLoading, fetchFromBackEnd } = useFetchData();

  useEffect(() => {
    fetchFromBackEnd();
  }, []);
  return (
    <div>
      <h1>header</h1>
      {isLoading ? (
        <p>通信中</p>
      ) : (
        <div>
          <TodoForm />
          <TodoCard />
        </div>
      )}
    </div>
  );
};

export default TodoList;
