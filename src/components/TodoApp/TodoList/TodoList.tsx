import React, { useEffect, memo } from 'react';
import { v4 as uuid } from 'uuid';
import { useRecoilState } from 'recoil';
import { todoListState } from '../../../store/todoListState';
import TodoForm from '../TodoForm/TodoForm';
import TodoCard from '../TodoCard/TodoCard';
import useFetchData from '../../../hooks/useFetchData';
import type Todo from '../../../types/Todo';

const TodoList = memo(() => {
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
          {todoList.map((todo: Todo) => (
            <TodoCard key={uuid()} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
});

export default TodoList;
