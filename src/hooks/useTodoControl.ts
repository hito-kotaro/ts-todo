import { useCallback } from 'react';
import { useRecoilState } from 'recoil';
import { todoListState } from '../store/todoListState';
import useFetchGlobalTodoList from './useFetchGlobalTodoList';
import type Todo from '../types/Todo';

const useTodoControl = () => {
  const [todoList] = useRecoilState(todoListState);
  const { updateTodoList } = useFetchGlobalTodoList();

  const addTodo = useCallback((todo: Todo) => {
    const newTodoLit = [todo, ...todoList];
    updateTodoList(newTodoLit);
  }, []);

  const toggleCompleted = useCallback(
    (todoId: string) => {
      const newTodoList: Todo[] = todoList.map((todo: Todo) => {
        if (todoId === todo.id) {
          console.log(todo);
          const newTodo: Todo = {
            userId: todo.userId,
            id: todo.id,
            title: todo.title,
            completed: !todo.completed,
            comment: todo.comment,
          };
          return newTodo;
        }
        return todo;
      });
      updateTodoList(newTodoList);
    },
    [todoList],
  );

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
            comment: newComment || undefined,
          };
          return newTodo;
        }
        return todo;
      });
      updateTodoList(newTodoList);
    },
    [],
  );

  const deleteTodo = useCallback((todoId: string) => {
    const newTodoList: Todo[] = todoList.filter((item) => todoId !== item.id);
    updateTodoList(newTodoList);
  }, []);

  return { addTodo, toggleCompleted, editTitle, editComment, deleteTodo };
};

export default useTodoControl;
