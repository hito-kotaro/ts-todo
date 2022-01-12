import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../store/todoListState';
import useTodoList from './useTodoList';
import type Todo from '../types/Todo';

const useTodoEdit = () => {
  const [todoList] = useRecoilState(todoListState);
  const { updateTodoList } = useTodoList();

  const toggleCompleted = useCallback((todoId: string) => {
    const newTodoList: Todo[] = todoList.map((todo: Todo) => {
      if (todoId === todo.id) {
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
  }, []);

  const editTitle = useCallback((todoId: string, newTitle: string) => {
    const newTodoList: Todo[] = todoList.map((todo: Todo) => {
      if (todoId === todo.id) {
        const newTodo: Todo = {
          userId: todo.userId,
          id: todo.id,
          title: newTitle,
          completed: todo.completed,
          comment: todo.comment,
        };
        return newTodo;
      }
      return todo;
    });
    updateTodoList(newTodoList);
  }, []);

  const editComment = useCallback(
    (todoId: string, newComment: string | undefined) => {
      const newTodoList: Todo[] = todoList.map((todo: Todo) => {
        if (todoId === todo.id) {
          const newTodo: Todo = {
            userId: todo.userId,
            id: todo.id,
            title: todo.title,
            completed: todo.completed,
            comment: newComment,
          };
          return newTodo;
        }
        return todo;
      });
      updateTodoList(newTodoList);
    },
    [],
  );

  return { toggleCompleted, editTitle, editComment };
};

export default useTodoEdit;
