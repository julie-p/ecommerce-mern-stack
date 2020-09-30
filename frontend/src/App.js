import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './Screens/Homepage';
import Login from './Screens/Login';
import Shop from './Screens/Shop';
import Outlet from './Screens/Outlet';
import ProductDetails from './Screens/ProductDetails';
import Cart from './Screens/Cart';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Homepage}/>
        <Route path='/login/' component={Login} />
        <Route path='/shop/' component={Shop} />
        <Route path='/sales/' component={Outlet} />
        <Route path='/product-details/:id' component={ProductDetails} />
        <Route path='/cart/:id?' component={Cart} />
      </Switch>
    </Router>
  )
};

export default App;
