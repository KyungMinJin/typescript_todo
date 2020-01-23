import React from 'react';
import GlobalStyles from './GlobalStyles';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { TodoPage, YoutubePage } from './pages';

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Route path='/todo' component={TodoPage} />
        <Route path='/youtube' component={YoutubePage} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
