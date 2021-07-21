import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./Components/Pages/login";
import Signup from "./Components/Pages/signup";
import Home from "./Components/Pages/home";
import QuizManage from "./Components/Pages/QuizManagement";
import Scores from "./Components/Pages/Scores";

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
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/QuizManage">
          <QuizManage />
        </Route>
        <Route path="/">
          <Scores />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
