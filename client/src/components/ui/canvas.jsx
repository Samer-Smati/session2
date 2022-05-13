import {Button,Offcanvas} from 'react-bootstrap'
import {useState} from 'react';
import Profile from '../profile/EditProfile'

export default function Canvas() {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <div className='btn btn-outline-dark btn-sm btn-block m-2 p-3' onClick={handleShow}>
          Edit
        </div>
        
        <Offcanvas show={show} onHide={handleClose}>
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Edit Profile</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Profile/>
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
  }
  