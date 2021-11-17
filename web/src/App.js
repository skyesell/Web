import React from 'react';
import './App.css';

import login from './components/pages/login/login';
import todolist from './components/pages/todolist/todolist';
import registration from './components/pages/registration/registration';
import account from './components/pages/account/account';
import { Route, Switch } from 'react-router-dom';




const App = () => <div className="App">

  <Switch>
    <div>
      <Route path="/" exact component={login}/>
      <Route path="/registration" component={registration}/>
      <Route path="/todo" component={todolist}/>
      <Route path="/account" component={account}/>

    </div>
  </Switch>
</div>;

export default App;
