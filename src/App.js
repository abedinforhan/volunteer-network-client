import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import EventTask from './Components/EventTask/EventTask';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Registration from './Components/Registration/Registration';


export const UserContext=createContext();


function App() {

const [user,setUser]=useState({})

  return (
    <UserContext.Provider value={[user,setUser]}>
      <Router>
        <Switch>
          <Route path='/home'>
           <Home/>
          </Route>
          <PrivateRoute path='/registration'>
            <Registration/>
          </PrivateRoute> 
          <Route path='/login'>
            <Login/>
          </Route>
          <PrivateRoute path='/events'>
            <EventTask/>
          </PrivateRoute> 
          <Route exact path='/'>
            <Home/>
          </Route> 
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
