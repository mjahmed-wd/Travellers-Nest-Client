import React from "react";
import { useState } from "react";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
// import UpdateProperty from "./UpdateProperty";
import { useContext } from "react";
// import { PropertyContext } from "../ManageProperty";
import { Button, Modal } from "react-bootstrap";
import UpdateOrderStatus from "./UpdateOrderStatus";

const ManageSingleOrderItem = ({ order }) => {
  const { orderedPropertyData, checkInInfo, transactionID, status } = order;
  const {
    name: productName,
    address: bookedAddress,
    country,
    price,
    description,
  } = orderedPropertyData;
  const { name, email, phoneNumber, checkIN: checkIn, checkOut } = checkInInfo;
  const [show, setShow] = useState(false);
  const [modalVisibility, setModalVisibility] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  //   const { _id, name, price, address, country, description } = order;
  const [hidden, makeHidden] = useState(false);
  //   const handleDelete = () => {
  //     fetch(`https://travellers-nest.herokuapp.com/deleteProperty/${_id}`, {
  //       method: "DELETE",
  //       headers: { "Content-Type": "application/json" },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => {
  //         makeHidden(data);
  //       });
  //   };
  return (
    <tr>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update order status of Booking {productName} by {name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <UpdateOrderStatus order={order} handleClose={handleClose} />
          
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* react modal */}
      {/* <UpdateProperty setModalVisibility={setModalVisibility}/> */}

      {hidden === false && (
        <>
          <td>*</td>
          <td>{productName}</td>
          <td>
            {new Date(checkIn).toDateString()} to{" "}
            {new Date(checkOut).toDateString()}
          </td>
          <td>{name}</td>
          <td>{email}</td>
          <td>{phoneNumber}</td>
          <td>
            {transactionID
              ? 'Payment Completed'
              : "Not Completed"}
          </td>
          <td className="d-flex justify-content-around">
            {status}
            <EditOutlinedIcon
              style={{ cursor: "pointer" }}
              onClick={() => setShow(true)}
            />
          </td>
        </>
      )}
    </tr>
  );
};

export default ManageSingleOrderItem;
