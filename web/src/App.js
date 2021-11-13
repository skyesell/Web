import React from 'react';
import './App.css';
import login from './components/pages/login/login';
import todolist from './components/pages/todolist/todolist';
import s from './App.css';

import { Route, Switch } from 'react-router-dom';



const App = () => <div className="App">
  <div className={s.content}>

  <Switch>
    <div>
      <Route path="/" exact component={login}/>
      <Route path="/todo" component={todolist}/>
    </div>
  </Switch>
</div>

</div>;
export default App;
