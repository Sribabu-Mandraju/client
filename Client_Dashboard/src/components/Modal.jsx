import React from "react";
import { Modal, Button, ModalFooter } from "react-bootstrap";

const CustomModal = ({ showModal, closeModal, children }) => {
  return (
    <Modal show={showModal}    onHide={closeModal} centered>
      <Modal.Body>
      <div className="w-100 d-flex align-items-center" style={{flexDirection:"row-reverse",position:"relative"}}>
        <Button variant="secondary" style={{position:"absolute",right:"-17px",top:"-16px"}} className="btn btn-danger" onClick={closeModal}>
              X
        </Button>
      </div>
       
          {children}
          <Button className="btn btn-success" onClick={closeModal}>Approve</Button>
          <Button className="btn btn-danger" onClick={closeModal}>Reject</Button>
      </Modal.Body>
      <Modal.Footer>
          <Button variant="secondary" className="btn btn-danger" onClick={closeModal}>
                Close
          </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
