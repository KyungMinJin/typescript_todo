import React from 'react';
import TodoList from './components/TodoList';
import TodoInsert from './components/TodoInsert';
import GlobalStyles from './GlobalStyles';

const App = () => {
  return (
    <>
      <TodoInsert />
      <TodoList />
      <GlobalStyles />
    </>
  );
};

export default App;
