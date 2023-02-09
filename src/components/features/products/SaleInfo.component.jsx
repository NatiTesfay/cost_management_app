import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function SaleInfo({info}) {
  const [show, setShow] = useState(false);
  const {discountPercentage,endDate,isOnline,saleName,startDate} = info

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);  

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        more sale data
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{saleName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <span>from {startDate} to {endDate}</span><br/>
            <span>{isOnline? <span>the product is on sale online</span>: ""}</span><br/>
            <span>discount percentage: {discountPercentage}</span><br/>
            <span></span><br/>
            </Modal.Body>
        <Modal.Footer>

          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// render(<SaleInfo/>);