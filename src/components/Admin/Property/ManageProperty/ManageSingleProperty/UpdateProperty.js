import React from "react";
import { useContext } from "react";
import Modal from "react-modal";
import { PropertyContext } from "../ManageProperty";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

const UpdateProperty = () => {
const {modalVisibility,setModalVisibility}=useContext(PropertyContext)
    // console.log(useContext(PropertyContext))


  var subtitle;
//   const [modalIsOpen,setIsOpen] = useState(false);
//   function openModal() {
//     setModalVisibility(true);
//   }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//     subtitle.style.color = "#f00";
//   }

//   function closeModal(){
//     setModalVisibility(false);
//   }
  return (
    <div>
      {/* <Modal
          isOpen={modalVisibility}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={_subtitle => (subtitle = _subtitle)}>Hello</h2>
          <button onClick={closeModal}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal> */}
    </div>
  );
};

export default UpdateProperty;
