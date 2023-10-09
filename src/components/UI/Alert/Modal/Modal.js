import './Modal.scss';
import { Button, Modal } from 'react-bootstrap';

// modal component
function ModalAlert({ removePro, show, hide }) {
  return (
   <Modal centered show={show} onHide={hide}>
      <Modal.Header>
         <span>حذف از لیست</span>
         <p className='mb-0' style={{ cursor:'pointer' }} onClick={hide}>X</p>
      </Modal.Header>
      <Modal.Body>
         <p className='text-dark' style={{ fontWeight:'bold' }}>
         آیا از حذف این کالا از لیست علاقمندی‌ها اطمینان دارید؟     
         </p>
         <div className='btns d-flex justify-content-end'>
            <Button className='btn btn-cancel btn-secondary' onClick={hide}>انصراف</Button>
            <Button className='btn btn-remove btn-danger' onClick={removePro}>حذف کالا</Button>
         </div>
      </Modal.Body>
   </Modal>
  )
}

export default ModalAlert;