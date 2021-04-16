import React from "react";
import { useState } from "react";
import EditOutlinedIcon from "@material-ui/icons/EditOutlined";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";
import UpdateProperty from "./UpdateProperty";
import { useContext } from "react";
import { PropertyContext } from "../ManageProperty";

const ManageSingleProperty = ({ property }) => {
  const [show, setShow] = useState(false);
  const [modalVisibility,setModalVisibility] = useState(false);
console.log(modalVisibility)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { _id, name, price, address, country, description } = property;
  const [hidden, makeHidden] = useState(false);
  const handleDelete = () => {
    fetch(`http://localhost:5000/deleteProperty/${_id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        makeHidden(data);
      });
  };
  return (
    <tr>
      {/* <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Update Information of {name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <UpdateSingleProduct product={product} handleClose={handleClose} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal> */}

        {/* react modal */}
        <UpdateProperty setModalVisibility={setModalVisibility}/>
        
      {hidden === false && (
        <>
          <td>*</td>
          <td>{name}</td>
          <td>{price}</td>
          <td>{address}</td>
          <td>{country}</td>
          <td>{description}</td>
          <td className="d-flex justify-content-around">
            <EditOutlinedIcon
              style={{ cursor: "pointer" }}
              onClick={()=>setModalVisibility(true)}
            />
            <DeleteForeverOutlinedIcon
              style={{ cursor: "pointer" }}
              onClick={handleDelete}
            />
          </td>
        </>
      )}
    </tr>
  );
};

export default ManageSingleProperty;
