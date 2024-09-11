import React from 'react';
import { Button, Modal, Row, Col } from 'react-bootstrap';

function CardModal({ show, handleClose, name, img, about, price }) {
  return (
    <Modal
      show={show}
      onHide={handleClose}
      centered
      dialogClassName="md:max-w-4xl md:min-w-4xl" 
    >
      <Modal.Body className="p-0">
        <Row className="w-100 m-0">
          <Col xs={12} md={6} className="p-0 h-80 ">
            <img
              src={img}
              alt={name}
              className="w-100 h-100 object-cover" 
            />
          </Col>
          <Col xs={12} md={6} className="p-0 d-flex flex-column">
            <Modal.Header closeButton className="border-0">
              <Modal.Title>{name}</Modal.Title>
            </Modal.Header>
            <p className="p-3 flex-grow-1">{about}</p>
            <div className="d-flex justify-content-between align-items-center p-3">
              <p className="mb-0 font-weight-bold">Price: ${price}</p>
              <Button variant="success">Add to cart</Button>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default CardModal;
