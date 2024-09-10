import { Button, Modal, Row, Col } from 'react-bootstrap';
import './CardModal.scss'

function CardModal({ show, handleClose, name, img, about, price }) {

  return (
    <Modal show={show} onHide={handleClose} centered dialogClassName="full-height-modal">
      <Modal.Header closeButton>
        <Modal.Title>{name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row>
          <Col xs={12} md={6} clas>
            <img src={img} alt={name} className="w-100 h-100 object-cover mb-4" />
          </Col>
          <Col xs={12} md={6}>
            <p>{about}</p>
            <div className='flex justify-between items-center mt-4'>
              <div>
              <p className="text-lg font-semibold">Price: ${price}</p>
              </div>
              <Button variant="success">Add to cart</Button>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default CardModal;
