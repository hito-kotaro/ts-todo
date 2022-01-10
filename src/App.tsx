import React from 'react';
import type { FC } from 'react';
import TodoList from './components/TodoApp/TodoList/TodoList';

const App: FC = () => {
  const msg: string = 'msg';
  return (
    <div>
      <TodoList />
    </div>
  );
};

export default App;
