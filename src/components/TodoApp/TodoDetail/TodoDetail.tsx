import React, { Dispatch, SetStateAction, VFC, useState } from 'react';
import { BsDashSquare } from 'react-icons/bs';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import DetailButton from './DetailButton';
import useTodoControl from '../../../hooks/useTodoControl';
import type Todo from '../../../types/Todo';

type Props = {
  todo: Todo;
  setIsDetail: Dispatch<SetStateAction<boolean>>;
};

const TodoDetail: VFC<Props> = (props) => {
  const { todo, setIsDetail } = props;
  const [comment, setComment] = useState(todo.comment);
  const { editComment, toggleCompleted, deleteTodo } = useTodoControl();

  const toggleDetail = () => {
    setIsDetail(false);
  };

  const inputComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  const submitComment = () => {
    editComment(todo.id, comment);
    setComment('');
  };

  return (
    <div>
      <div id="detailHeader" className="bg-green-500 h-16">
        <div className="flex">
          <div className="mt-5 ml-3 mb-5 text-xl">{todo.title}</div>
          {todo.completed ? (
            <div className="mt-5 ml-3 mb-5">
              <AiOutlineCheckSquare style={{ fontSize: '32px' }} />
            </div>
          ) : (
            <div className="mt-5 ml-3 mb-5">
              <BsDashSquare style={{ fontSize: '32px' }} />
            </div>
          )}
        </div>
      </div>
      <div className="flex">
        <div className="w-3/4">
          <div className="flex">
            <div className="mt-5 ml-3 mb-5 text-xl">コメント</div>
          </div>
          <div className="ml-3">
            <textarea
              className="resize-none border rounded-none w-full h-32 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Input Comment"
              value={comment}
              onChange={inputComment}
            >
              {todo.comment}
            </textarea>
          </div>
        </div>
        <div className=" ml-auto w-1/4">
          <DetailButton clickAction={() => toggleCompleted(todo.id)}>
            完了
          </DetailButton>
          <DetailButton clickAction={submitComment}>保存</DetailButton>
          <DetailButton clickAction={toggleDetail}>戻る</DetailButton>
          <DetailButton isDelete clickAction={() => deleteTodo(todo.id)}>
            削除
          </DetailButton>
        </div>
      </div>
    </div>
  );
};

export default TodoDetail;
