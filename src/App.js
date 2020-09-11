import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Shop from './Pages/Shop';
import Outlet from './Pages/Outlet';
import Cart from './Pages/Cart';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Homepage}/>
        <Route path='/shop' component={Shop} />
        <Route path='/sales' component={Outlet} />
        <Route path='/cart' component={Cart} />
      </Switch>
    </Router>
  )
};

export default App;
