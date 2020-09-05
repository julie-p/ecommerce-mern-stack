import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Shop from './Pages/Shop';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Homepage}/>
        <Route path='/shop' component={Shop} />
      </Switch>
    </Router>
  )
};

export default App;
