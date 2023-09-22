import { Form, Button } from 'react-bootstrap';
import axios from 'axios';

// newsletter component
function NewsLetterForm() {

   const NewsLetterHandler = async (event) => {
      const inputValue = event.target.previousElementSibling.value;
      const emailPattern = /^[a-zA-z1-9\.\-\_]+@(gmail.com)$/;
      
      const data = {
         gmail: inputValue
      }            
      
      if(inputValue.match(emailPattern)) {
         await axios.post('http://localhost:7000/newsletter_users', data);
      }

      event.target.previousElementSibling.value = '';
   }

  return (
   <Form>
      <Form.Group>
         <Form.Control type='text' placeholder='ایمیل' />
         <Button className='btn btn-warning' onClick={(event) => NewsLetterHandler(event)}>ثبت</Button>
      </Form.Group>
   </Form>
  )
}

export default NewsLetterForm;