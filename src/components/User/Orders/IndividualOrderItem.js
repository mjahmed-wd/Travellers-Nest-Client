import React from "react";

const IndividualOrderItem = ({ order }) => {
    const {name,address,country,price}=order.orderedPropertyData
    const {checkIN: checkIn,checkOut}=order.checkInInfo
    const {status,_id}=order
  return (
    <tr>
      <td>{_id}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>{new Date(checkIn).toDateString()} to {new Date(checkOut).toDateString()}</td>
      <td>{new Date(order.orderPlacingTime).toLocaleString()}</td>
      <td>{status}</td>
    </tr>
  );
};

export default IndividualOrderItem;