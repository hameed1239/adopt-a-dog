import React from "react";
import { Modal, Button } from "react-bootstrap";

const ModalPage = ({ show, handleClose, handleSuccessClose }) => {
  console.log(navigator);
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Woohoo</Modal.Title>
      </Modal.Header>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleSuccessClose}>
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalPage;

