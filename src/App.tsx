import React from 'react';
import GlobalStyles from './GlobalStyles';
import TodoApp from './containers/TodoApp';

const App = () => {
  return (
    <>
      <TodoApp />
      <GlobalStyles />
    </>
  );
};

export default App;
