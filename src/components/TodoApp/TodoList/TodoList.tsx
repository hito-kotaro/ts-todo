import React, { useEffect } from 'react';
import { v4 as uuid } from 'uuid';
import { useRecoilState } from 'recoil';
import { todoListState } from '../../../store/todoListState';
import TodoForm from '../TodoForm/TodoForm';
import useFetchData from '../../../hooks/useFetchData';
import useTodoList from '../../../hooks/useTodoList';

// TodoFormとTodoCardの表示を担当

const TodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);
  const { isLoading, fetchFromBackEnd } = useFetchData();

  useEffect(() => {
    fetchFromBackEnd();
  }, []);
  return (
    <div>
      <h1>header</h1>
      <TodoForm />
      <div>
        {todoList.map((todoData) => (
          <h1 key={uuid()}>{todoData.title}</h1>
        ))}
      </div>
    </div>
  );
};

export default TodoList;
