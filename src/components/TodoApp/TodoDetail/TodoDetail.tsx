import React, { Dispatch, SetStateAction, VFC } from 'react';
import { IoMdReturnLeft } from 'react-icons/io';
import TodoCommentForm from '../TodoCommentForm/TodoCommentForm';
import type Todo from '../../../types/Todo';

type Props = {
  todo: Todo;
  setIsDetail: Dispatch<SetStateAction<boolean>>;
};

const TodoDetail: VFC<Props> = (props) => {
  const { todo, setIsDetail } = props;

  const toggleDetail = () => {
    setIsDetail(false);
  };

  return (
    <div>
      <div>{todo.id}</div>
      <div>{todo.title}</div>
      <div>{todo.completed}</div>
      <TodoCommentForm todo={todo} />
      <IoMdReturnLeft
        className="ml-2 mr-2"
        onClick={toggleDetail}
        style={{ fontSize: '32px' }}
      />
    </div>
  );
};

export default TodoDetail;
