import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Pages/login";
import Signup from "./Components/Pages/signup";
import Home from "./Components/Pages/home";

function App() {
  // const [data, setData] = React.useState(null);

  return (
    <Router>
      <Switch  >
        <Route exact path="/login">
          <Login />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
