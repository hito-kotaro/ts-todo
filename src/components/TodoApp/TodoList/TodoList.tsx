import React from 'react';
import TodoForm from '../TodoForm/TodoForm';
// TodoFormとTodoCardの表示を担当

const TodoList = () => {
  const msg: string = 'test';
  return (
    <div>
      <h1>header</h1>
      <TodoForm />
      <h1>TodoCard</h1>
    </div>
  );
};

export default TodoList;
