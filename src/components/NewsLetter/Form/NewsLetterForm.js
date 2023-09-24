import './NewsLetterForm.scss';
import Wrapper from '../../../hoc/Wrapper';
import Alert from '../../../components/UI/Alert/Alert';
import { Form, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { showAlert } from '../../../action/publicAction';
import { hideAlert } from '../../../action/publicAction';

// newsletter form component
function NewsLetterForm() {
   
   const dispatch = useDispatch();
   const publicReducer = useSelector((state) => state.public);
   const { alertShow } = publicReducer;

   // newsletter handler
   const NewsLetterHandler = (event) => {
      
      const inputValue = event.target.previousElementSibling.previousElementSibling.value;
      const emailPattern = /^[a-zA-z1-9.-_]+@(gmail.com)$/;
      
      const data = {
         gmail: inputValue
      }            
      
      if(inputValue.match(emailPattern)) {
         dispatch(showAlert(data));
         document.querySelector('.input-error').style.display = 'none';
      } else {
         document.querySelector('.input-error').style.display = 'block';
      }

      event.target.previousElementSibling.previousElementSibling.value = '';
   }

   // close alert handler
   const handleClose =() => {
      dispatch(hideAlert());
   }

  return (
   <Wrapper>
      <Alert show={alertShow} hide={handleClose} />
      <Form>
         <Form.Group className='form-group'>
            <Form.Control type='text' placeholder='ایمیل' />
            <span className='input-error'>
               ایمیل وارد شده اشتباه می باشد
            </span>
            <Button className='btn btn-warning' onClick={(event) => NewsLetterHandler(event)}>ثبت</Button>
         </Form.Group>
      </Form>
   </Wrapper>
  )
}

export default NewsLetterForm;