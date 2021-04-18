import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Shared/Home/Home";
import Login from "./components/Shared/Login/Login";
import ProvideAuth from "./components/Shared/ProvideAuth/ProvideAuth";
import PrivateRoute from "./components/Shared/PrivateRoute/PrivateRoute";
import "bootstrap/dist/css/bootstrap.min.css";
import IndividualProduct from "./components/User/ToCheckOut/IndividualProduct/IndividualProduct";
import CheckOut from "./components/User/ToCheckOut/CheckOut/CheckOut";
import Orders from "./components/User/Orders/Orders";
import Review from "./components/User/Review/Review";
import AddProperty from "./components/Admin/Property/AddProperty/AddProperty";
import ManageProperty from "./components/Admin/Property/ManageProperty/ManageProperty";
import ManageOrders from "./components/Admin/Admin-ManageAllOrders/ManageOrders";
import AddAdmin from "./components/Admin/AdminRoleManage/AddAdmin/AddAdmin";
import AdminRoute from "./components/Shared/AdminRoute/AdminRoute";

function App() {
  return (
    <ProvideAuth>
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
          <PrivateRoute path="/checkout">
            <CheckOut />
          </PrivateRoute>

          <PrivateRoute path="/orders">
            <Orders />
          </PrivateRoute>
          <PrivateRoute path="/userReview">
            <Review />
          </PrivateRoute>
          
          {/* Admin */}
          <AdminRoute path="/manageOrders">
            <ManageOrders />
          </AdminRoute>
          <AdminRoute path="/addProperty">
            <AddProperty />
          </AdminRoute>
          <AdminRoute path="/manageProperty">
            <ManageProperty />
          </AdminRoute>
          <AdminRoute path="/addAdmin">
            <AddAdmin />
          </AdminRoute>
        </Switch>
      </Router>
      {/* </UserContext.Provider> */}
    </ProvideAuth>
  );
}

export default App;
