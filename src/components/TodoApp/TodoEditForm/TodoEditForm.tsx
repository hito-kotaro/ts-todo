import React, { Dispatch, SetStateAction, VFC, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useTodoEdit from '../../../hooks/useTodoEdit';
import type Todo from '../../../types/Todo';

type Props = {
  todo: Todo;
  setIsEdit: Dispatch<SetStateAction<boolean>>;
};

const TodoEditForm: VFC<Props> = (props) => {
  const { todo, setIsEdit } = props;
  const { editTitle } = useTodoEdit();
  const [input, setInput] = useState(todo.title);

  const inputValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const submitTodo = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    e.preventDefault();
    if (!input || /^\s*$/.test(input)) {
      toast.error('Todoが空なので登録できません。');
      return;
    }
    editTitle(todo.id, input);
    setIsEdit(false);
  };

  return (
    <form onSubmit={submitTodo}>
      <Toaster position="top-right" reverseOrder={false} />
      <input
        className="border rounded-none w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        onChange={inputValue}
        value={input}
        placeholder="InputTodo"
      />
    </form>
  );
};

export default TodoEditForm;
