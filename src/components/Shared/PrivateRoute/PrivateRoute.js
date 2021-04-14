import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { AuthContext } from "../ProvideAuth/ProvideAuth";
// import { AuthContext } from "../ProvideAuth/ProvideAuth";


const PrivateRoute = ({ children, ...rest }) => {
    const {currentUser}=useContext(AuthContext)

// const auth = useAuth()
const user=currentUser
console.log(user)

  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;