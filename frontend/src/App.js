import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Screens/Homepage';
import Shop from './Screens/Shop';
import Outlet from './Screens/Outlet';
import Cart from './Screens/Cart';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Homepage}/>
        <Route path='/shop' component={Shop} />
        <Route path='/sales' component={Outlet} />
        <Route path='/cart/:id?' component={Cart} />
      </Switch>
    </Router>
  )
};

export default App;
