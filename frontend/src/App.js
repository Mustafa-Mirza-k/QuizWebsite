import React, { useEffect } from "react";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./Components/Pages/login";
import Signup from "./Components/Pages/signup";
import Home from "./Components/Pages/home";
import QuizManage from "./Components/Pages/QuizManagement";
import Scores from "./Components/Pages/Scores";
import Cookies from 'js-cookie';

function App() {
  // const [data, setData] = React.useState(null);
  

  const UserRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        Cookies.get('user') !== undefined ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/login" }} />
        )
      }
    />
  );
  const AdminRoute = ({ component: Component, ...rest }) => (
    <Route
      {...rest}
      render={(props) =>
        Cookies.get('user') !== undefined && JSON.parse(Cookies.get('user')).type !== "user" ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: "/" }} />
        )
      }
    />
  );

  return (
    <Router>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        
        <Route path="/signup">
          <Signup />
        </Route>
        <UserRoute exact path="/" component={Home} exact />
        <AdminRoute path="/QuizManage" component={QuizManage} />
        <AdminRoute path="/Scores" component={Scores} />
      </Switch>
    </Router>
  );
}

export default App;
