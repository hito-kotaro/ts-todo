import React, { VFC, useState } from 'react';
import { AiOutlineCheckSquare } from 'react-icons/ai';
import { BiDetail, BiUserPin } from 'react-icons/bi';
import { RiDeleteBin2Line, RiEditBoxLine } from 'react-icons/ri';
import useTodoEdit from '../../../hooks/useTodoEdit';
import TodoEditForm from '../TodoEditForm/TodoEditForm';
import type Todo from '../../../types/Todo';

type Props = {
  todo: Todo;
};

const TodoCard: VFC<Props> = React.memo((props) => {
  const { todo } = props;
  const { toggleCompleted } = useTodoEdit();
  const [isEdit, setIsEdit] = useState(false);

  const toggleEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div className="z-10 mt-5  shadow-lg border-solid border-4 border-light-blue-500">
      <div>
        <div className="flex ">
          <BiUserPin style={{ fontSize: '32px' }} />
          {todo.userId}さん
          <div className={`${todo.completed ? 'visible' : 'invisible'}`}>
            <AiOutlineCheckSquare
              style={{ fontSize: '24px', color: 'green' }}
            />
          </div>
        </div>
        {isEdit ? (
          <TodoEditForm setIsEdit={setIsEdit} todo={todo} />
        ) : (
          <div className="text-xl ">{todo.title}</div>
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
        <BiDetail className="ml-2 mr-2" style={{ fontSize: '32px' }} />
        <RiDeleteBin2Line className="ml-2 mr-2" style={{ fontSize: '32px' }} />
      </div>
    </div>
  );
});

export default TodoCard;
