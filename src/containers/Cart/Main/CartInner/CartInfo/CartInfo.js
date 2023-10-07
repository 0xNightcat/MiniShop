import './CartInfo.scss';
import { Link } from 'react-router-dom';
import { Button, Card } from 'react-bootstrap';

function CartInfo({ totalPrice }) {
  return (
   <Card className='border'>
      <Card.Body>
         <div className='total'>
            <span>قیمت کل: </span>
            <span className='t-price'>{totalPrice} تومان</span>
         </div>
         <p className='describe'>
            لطفا جهت تصویه و پرداخت از طریق ثبت سفارش
            اقدام کنید و برای دیدن محصولات بیشتر
            از طریق ادامه خرید اقدام فرمایید.
         </p>
         <div className='btns'>
            <Link to='/checkout'>
               <Button className='checkout btn-danger d-block w-100 py-2'>
                  تکمیل سفارش
               </Button>
            </Link>
            <Link to='/shop'>
               <Button className='continue d-block w-100 mt-2 py-2'>
                  فروشگاه
               </Button>
            </Link>
         </div>
      </Card.Body>
   </Card>
  )
}

export default CartInfo;