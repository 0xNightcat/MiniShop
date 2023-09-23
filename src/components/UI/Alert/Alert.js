import './Alert.scss';
import { Modal } from 'react-bootstrap';

function Alert({ show, hide }) {
  return (
   <Modal centered show={show} onHide={hide}>
      <Modal.Header>
         تاینی مارکت
         <h6 className='mb-0' style={{ cursor:'pointer' }} onClick={hide}>X</h6>
      </Modal.Header>
      <Modal.Body>
         <p className='text-success' style={{ fontWeight:'bold' }}>
            ایمیل با موفقیت ارسال شد.            
         </p>
      </Modal.Body>
   </Modal>
  )
}

export default Alert;