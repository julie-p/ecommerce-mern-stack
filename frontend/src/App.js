import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { motion } from "framer-motion";
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
          <Route path='/login/' component={Login} />
          <motion.div 
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{duration: .5}}
          >
            <Route path='/' exact component={Homepage}/>
            <Route path='/shop/' component={Shop} />
            <Route path='/sales/' component={Outlet} />
            <Route path='/product-details/:id' component={ProductDetails} />
            <Route path='/cart/:id?' component={Cart} />
          </motion.div>
        </Switch>
      </Router>
  )
};

export default App;
