import React from 'react';
import { RecoilRoot } from 'recoil';
import type { FC } from 'react';
import TodoList from './components/TodoApp/TodoList/TodoList';

const App: FC = () => (
  <div className="font-mono">
    <RecoilRoot>
      <TodoList />
    </RecoilRoot>
  </div>
);

export default App;
