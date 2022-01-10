import React from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../../../store/todoListState';
import TodoForm from '../TodoForm/TodoForm';
import type Todo from '../../../types/Todo';
// TodoFormとTodoCardの表示を担当

const TodoList = () => {
  const [todoList, setTodoList] = useRecoilState(todoListState);

  return (
    <div>
      <h1>header</h1>
      <TodoForm />
      <h1>TodoCard</h1>
    </div>
  );
};

export default TodoList;
