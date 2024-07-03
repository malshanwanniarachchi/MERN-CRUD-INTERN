import React, { Component } from 'react'
import {BrowserRouter, Route} from "react-router-dom";
import RestaurantList from './component/ReataurantManagement/RestaurantList';
import Login from './component/login/Login';
import Register from './component/register/Register';

export default class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
        
       <Route path="/" exact component={RestaurantList}></Route>
       <Route path="/login" exact component={Login}/>
       <Route path="/signup" exact component={Register}/>
       
       
   </BrowserRouter>

   
      </div>
    )
  }
}



