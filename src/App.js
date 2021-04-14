import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Shared/Home/Home";
import Login from "./components/Shared/Login/Login";
import { createContext } from "react";
import { useState } from "react";
import ProvideAuth from "./components/Shared/ProvideAuth/ProvideAuth";
import PrivateRoute from "./components/Shared/PrivateRoute/PrivateRoute";
export const UserContext = createContext();

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
          <PrivateRoute path="/pass">
            <h2>Protected</h2>
          </PrivateRoute>
        </Switch>
      </Router>
    {/* </UserContext.Provider> */}
    </ProvideAuth>
  );
}

export default App;
