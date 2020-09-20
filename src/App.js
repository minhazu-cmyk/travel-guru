import React, { createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./component/Header/Header";

import Home from "./component/Home/Home";
import Hotel from "./component/Hotel/Hotel";
import Login from "./component/Login/Login";
import Coxsbazar from "./component/Place.js/Coxsbazar";
import Sreemangal from "./component/Place.js/Sreemangal";
import Sundarban from "./component/Place.js/Sundarban";
import PrivateRoute from "./component/Private/PrivateRoute";



export const UserContext = createContext();
function App() {
const [logInUser, setLogInUser] = useState({})
  return (
   
    <UserContext.Provider value={[logInUser, setLogInUser]}>
      <p> {logInUser.name} </p>
    <Router>
     <Header/>
      <Switch>
      <Route exact path="/home">
          <Home/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/coxsbazar">
           <Coxsbazar/>
          </Route>
          <Route path="/sundarban">
           <Sundarban/>
          </Route>
          <Route path="/sreemangal">
          <Sreemangal/>
          </Route>
          <Route path="/login">
          <Login/>
          </Route>
          <PrivateRoute path="/hotel/:id">
           <Hotel/>
         </PrivateRoute>
          
      </Switch>
    </Router>
    </UserContext.Provider>
    
  );
}

export default App;
