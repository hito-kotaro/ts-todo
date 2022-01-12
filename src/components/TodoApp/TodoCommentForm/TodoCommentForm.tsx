import React, { VFC, useState } from 'react';
import { FiSave } from 'react-icons/fi';
import useTodoEdit from '../../../hooks/useTodoEdit';
import type Todo from '../../../types/Todo';

type Props = {
  todo: Todo;
};

const TodoCommentForm: VFC<Props> = (props) => {
  const { todo } = props;
  const [comment, setComment] = useState(todo.comment);
  const { editComment } = useTodoEdit();

  const inputComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const submitComment = () => {
    editComment(todo.id, comment);
    setComment('');
  };

  return (
    <div>
      <textarea
        className="resize-none"
        placeholder="Input Comment"
        value={comment}
        onChange={inputComment}
      >
        {todo.comment}
      </textarea>
      <FiSave
        className="ml-2 mr-2"
        onClick={submitComment}
        style={{ fontSize: '32px' }}
      />
    </div>
  );
};

export default TodoCommentForm;
