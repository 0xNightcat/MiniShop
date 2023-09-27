import { Image, Button } from 'react-bootstrap';

// cart item component
function CartItem({ pros }) {
  return (
      pros ? pros.map(product => {
         return (
            <div className='cart-box-item'>
               <div className='cart-image'>
                  <Image src={product.src} />
                  <p className='cart-title'>{product.name}</p>
               </div>
               <div className='cart-number'>
                  <a href='#'><span className='inc'>+</span></a>
                  <span className='line'> | </span>
                  <a href='#'><span className='dec'>-</span></a>
               </div>
               <div className='cart-remove'>
                  <Button className='btn-remove border-0 py-1'>X</Button>
               </div>
            </div>
         )
      }) : null
  )
}

export default CartItem;