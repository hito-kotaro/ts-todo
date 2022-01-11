import React, { useState } from 'react';
import { v4 as uuid } from 'uuid';
import toast, { Toaster } from 'react-hot-toast';
import useTodoList from '../../../hooks/useTodoList';
import type Todo from '../../../types/Todo';

const TodoForm = () => {
  const [input, setInput] = useState('');
  const { todoList, updateTodoList } = useTodoList();

  const addTodo = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (!input || /^\s*$/.test(input)) {
      toast.error('Todoが空なので登録できません。');
      return;
    }
    e.preventDefault();
    const newTodo: Todo = {
      userId: 1,
      id: uuid(),
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
      <Toaster position="top-right" reverseOrder={false} />
      <input
        className="border rounded-none w-3/4 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={input}
        onChange={inputForm}
        placeholder="Input Title"
      />
      <button
        type="button"
        className="py-2 px-4 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-opacity-75"
        onClick={addTodo}
      >
        Button
      </button>
    </form>
  );
};

export default TodoForm;
