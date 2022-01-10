import React, { VFC } from 'react';
import { v4 as uuid } from 'uuid';
// import { RiCloseCircleLine } from 'react-icons/ri';
import { BiUserCircle } from 'react-icons/bi';
import { BsCheckCircleFill } from 'react-icons/bs';
import { useRecoilState } from 'recoil';
import { todoListState } from '../../../store/todoListState';
import useTodoList from '../../../hooks/useTodoList';

import type Todo from '../../../types/Todo';

const TodoCard: VFC = () => {
  const [todoListStore] = useRecoilState(todoListState);
  const { updateTodoList } = useTodoList();

  const completedTodo = (id: string) => {
    const newTodoList = todoListStore.map((todo: Todo) => {
      if (todo.id === id) {
        const newTodo: Todo = {
          userId: todo.userId,
          id: todo.id,
          title: todo.title,
          completed: !todo.completed,
        };
        return newTodo;
      }
      return todo;
    });
    updateTodoList(newTodoList);
  };

  return (
    <div>
      {todoListStore.map((todo: Todo) => (
        <div
          role="button"
          tabIndex={0}
          key={uuid()}
          className="z-10 mt-5  shadow-lg border-solid border-4 border-light-blue-500"
          onClick={() => completedTodo(todo.id)}
          onKeyDown={() => completedTodo(todo.id)}
        >
          <div className="flex ">
            <BiUserCircle style={{ fontSize: '24px' }} />
            {todo.userId}さん
            <div className={`${todo.completed ? 'visible' : 'invisible'}`}>
              <BsCheckCircleFill style={{ fontSize: '24px', color: 'green' }} />
            </div>
          </div>
          <div className="text-xl ">{todo.title}</div>
        </div>
      ))}
    </div>
  );
};

export default TodoCard;
