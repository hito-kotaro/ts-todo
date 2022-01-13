import React, { useEffect, memo } from 'react';
import { v4 as uuid } from 'uuid';
import { useRecoilState } from 'recoil';
import { todoListState } from '../../../store/todoListState';
import TodoForm from '../TodoForm/TodoForm';
import TodoCard from '../TodoCard/TodoCard';
import Header from '../../Share/Header/Header';
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
      <Header />
      {isLoading ? (
        <div className="flex justify-center">
          <div className="mt-10 animate-spin h-10 w-10 border-4 border-blue-500 rounded-full border-t-transparent" />
        </div>
      ) : (
        <div>
          <div className="mt-5 text-center">
            <TodoForm />
          </div>
          {todoList.map((todo: Todo) => (
            <TodoCard key={uuid()} todo={todo} />
          ))}
        </div>
      )}
    </div>
  );
});

export default TodoList;
