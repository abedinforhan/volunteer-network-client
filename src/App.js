import React, { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';
import Admin from './Components/Admin/Admin';
import EventTask from './Components/EventTask/EventTask';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Nomatch from './Components/Nomatch/Nomatch';
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
         <Route path='/admin'>
           <Admin/>
          </Route>
          <Route exact path='/'>
            <Home/>
          </Route> 
          <Route path="*">
            <Nomatch/>
          </Route>
        </Switch>
      </Router>
      </UserContext.Provider>
  );
}

export default App;
