import './MiniAlert.scss';
import { useSelector } from 'react-redux';

// mini alert component
function MiniAlert({ text }) {
   const cartReducer = useSelector((state) => state.cart);
   const { showAlert } = cartReducer;

  return (
   <div className={`mini-alert ${showAlert ? 'show' : 'hide'}`}>
      <p className='text-center text-white'>{text}</p>
   </div>
  )
}

export default MiniAlert;