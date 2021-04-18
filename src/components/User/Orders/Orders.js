import React, { useContext, useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { AuthContext } from "../../Shared/ProvideAuth/ProvideAuth";
import SharingSidebar from "../../Shared/Sidebar/SharingSidebar/SharingSidebar";
import IndividualOrderItem from "./IndividualOrderItem";

const Orders = () => {
  const { currentUser } = useContext(AuthContext);
  const [orders, setOrders] = useState([]);
  useEffect(() => {
    fetch(`https://travellers-nest.herokuapp.com/orders/${currentUser.email}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setOrders(data);
      });
  }, [currentUser]);
  return (
    <SharingSidebar>
      <h3 className="text-center mb-4 mt-4">
        You have {orders.length} {orders.length > 1 ? "orders" : "order"}{" "}
        running.
      </h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Tracking ID</th>
            <th>Property Name</th>
            <th>Charge</th>
            <th>Living Date</th>
            <th>Order Placing Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <IndividualOrderItem key={order._id} order={order} />
          ))}
        </tbody>
      </Table>
    </SharingSidebar>
  );
};

export default Orders;
