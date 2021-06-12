import React from 'react';
import Header from "./Header"
import Banner from "./Banner"
import Home from "./Home"
import Checkout from "./Checkout"

import {BrowserRouter,Route,Switch} from "react-router-dom"

import './App.css';

function App() {
  return (
    <BrowserRouter>
    
    <div className="app">
      <Header/>
      <div className="app__body" >
      <Switch>
      <Route exact path="/" component={Banner}/>
      <Route exact path="/home" component={Home}/>
   <Route exact path="/checkout" component={Checkout}/>
      </Switch>
      </div>
       
    </div>
    </BrowserRouter>
    
  );
}

export default App;
