import React, { useState } from 'react';
import useTodoList from '../../../hooks/useTodoList';
import type Todo from '../../../types/Todo';

const TodoForm = () => {
  const [input, setInput] = useState('');
  const { todoList, updateTodoList } = useTodoList();

  const addTodo = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    const newTodo: Todo = {
      userId: 'test',
      id: 'test',
      title: input,
      completed: false,
    };
    updateTodoList([newTodo, ...todoList]);
    setInput('');
  };

  const inputForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <form onSubmit={addTodo}>
      <input
        className="border rounded-none w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={input}
        onChange={inputForm}
      />
      <button
        type="button"
        className="py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        onClick={addTodo}
      >
        Button
      </button>
    </form>
  );
};

export default TodoForm;
