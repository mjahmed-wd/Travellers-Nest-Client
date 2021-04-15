import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Shared/Home/Home";
import Login from "./components/Shared/Login/Login";
import { createContext } from "react";
import { useState } from "react";
import ProvideAuth from "./components/Shared/ProvideAuth/ProvideAuth";
import PrivateRoute from "./components/Shared/PrivateRoute/PrivateRoute";
import Pass from "./components/Shared/Pass/Pass";
import "bootstrap/dist/css/bootstrap.min.css";
import IndividualProduct from "./components/User/ToCheckOut/IndividualProduct/IndividualProduct";
import CheckOut from "./components/User/ToCheckOut/CheckOut/CheckOut";
import Orders from "./components/User/Orders/Orders";
import Review from "./components/User/Review/Review";

function App() {
  const [user, setUser] = useState({ isSignedIn: false });
  return (
    <ProvideAuth>
      
      {/* <UserContext.Provider value={[user, setUser]}> */}
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/property/:id">
            <IndividualProduct />
          </Route>
          <Route path="/checkout">
            <CheckOut />
          </Route>
          
          <Route path="/orders">
            <Orders />
          </Route>
          <Route path="/userReview">
            <Review />
          </Route>
          <Route path="/property/:id">
            <IndividualProduct />
          </Route>
          <PrivateRoute path="/pass">
            <Pass />
          </PrivateRoute>
          <PrivateRoute path="/admin">
            <Pass />
          </PrivateRoute>
        </Switch>
      </Router>
      {/* </UserContext.Provider> */}
    </ProvideAuth>
  );
}

export default App;
