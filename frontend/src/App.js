import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Homepage from './screens/Homepage';
import Shop from './screens/Shop';
import Outlet from './screens/Outlet';
import ProductDetails from './screens/ProductDetails';
import Cart from './screens/Cart';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' exact component={Homepage}/>
        <Route path='/shop/' component={Shop} />
        <Route path='/sales/' component={Outlet} />
        <Route path='/product-details/:id' component={ProductDetails} />
        <Route path='/cart/:id?' component={Cart} />
      </Switch>
    </Router>
  )
};

export default App;
