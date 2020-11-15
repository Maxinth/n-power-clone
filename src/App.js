import React from "react";
import "./App.css";
import {
  Switch,
  Route,
  Redirect,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./components/Home/Home";
// import Navbar from "./components/Navbar";
import Programmes from "./components/Home/Programmes";
import SignUp from "./components/Sign/SignUp";
import Login from "./components/Sign/Login";
import ForgotPassword from "./components/Sign/ForgotPassword";

function App() {
  return (
    <Router>
      <div className="App">
        {/* <Navbar /> */}
        <Switch>
          <Route path="/site/programmes" component={Programmes} />
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={Login} />
          <Route path="/forgot-password" component={ForgotPassword} />

          <Route path="/site" exact>
            <Home />
          </Route>
          <Redirect from="/" to="/site" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
