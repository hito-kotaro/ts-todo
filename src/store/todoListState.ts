import { atom } from 'recoil';
import type Todo from '../types/Todo';

export const todoListState = atom<Todo[]>({
  key: 'TODO_LIST_STATE',
  default: [],
});

export default todoListState;
