import React, { VFC, useState, CSSProperties } from 'react';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { BiDetail, BiCommentDetail } from 'react-icons/bi';
import { RiDeleteBin2Line, RiEditBoxLine } from 'react-icons/ri';
import { FaRegUserCircle } from 'react-icons/fa';
import useTodoEdit from '../../../hooks/useTodoEdit';
import TodoEditForm from '../TodoEditForm/TodoEditForm';
import TodoDetail from '../TodoDetail/TodoDetail';
import type Todo from '../../../types/Todo';

type Props = {
  todo: Todo;
};

const TodoCard: VFC<Props> = React.memo((props) => {
  const { todo } = props;
  const { toggleCompleted, deleteTodo } = useTodoEdit();
  const [isEdit, setIsEdit] = useState(false);
  const [isDetail, setIsDetail] = useState(false);

  const overlay: CSSProperties = {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  const toggleDetail = () => {
    setIsDetail(!isDetail);
  };

  return (
    <div className="z-10 mt-5  shadow-lg border-solid border-4 border-light-blue-500 ">
      <div>
        <div className="flex ">
          <FaRegUserCircle style={{ fontSize: '32px' }} />
          {todo.comment ? <BiCommentDetail style={{ fontSize: '32px' }} /> : ''}
          <p className="text-lg">{todo.userId}さん</p>
          <div className={`${todo.completed ? 'visible' : 'invisible'}`}>
            <AiOutlineCheckSquare
              style={{ fontSize: '24px', color: 'green' }}
            />
          </div>
        </div>
        {isEdit ? (
          <TodoEditForm setIsEdit={setIsEdit} todo={todo} />
        ) : (
          <div className="text-xl">{todo.title}</div>
        )}
        {isDetail ? (
          <div id="overlay" style={overlay}>
            <div className="bg-white h-4/6 w-4/6">
              <TodoDetail setIsDetail={setIsDetail} todo={todo} />
            </div>
          </div>
        ) : (
          ''
          // <div className="text-xl ">{todo.title}</div>
        )}
      </div>

      <div className="flex justify-end">
        <AiOutlineCheckSquare
          onClick={() => toggleCompleted(todo.id)}
          className="ml-2 mr-2"
          style={{ fontSize: '32px' }}
        />

        <RiEditBoxLine
          className="ml-2 mr-2"
          onClick={toggleEdit}
          style={{ fontSize: '32px' }}
        />
        <BiDetail
          className="ml-2 mr-2"
          onClick={toggleDetail}
          style={{ fontSize: '32px' }}
        />
        <RiDeleteBin2Line
          className="ml-2 mr-2"
          onClick={() => deleteTodo(todo.id)}
          style={{ fontSize: '32px' }}
        />
      </div>
    </div>
  );
});

export default TodoCard;
