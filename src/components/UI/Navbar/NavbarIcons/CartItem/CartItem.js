import { Image, Button } from 'react-bootstrap';

// cart item component
function CartItem({ pros, incProduct, decProduct, delProduct }) {
  return (
      pros ? pros.map(product => {
         return (
            <div className='cart-box-item'>
               <div className='cart-image'>
                  <Image src={product.src} />
                  <p className='cart-title'>{product.name}</p>
               </div>
               <div className='cart-number'>
                  <Button onClick={() => incProduct(product.id)}><span className='inc'>+</span></Button>
                  <span className='count'>{product.count}</span>
                  <Button onClick={() => decProduct(product.id)}><span className='dec'>-</span></Button>
               </div>
               <div className='cart-price'>
                  <p className='price mb-0'>{product.price}</p>
               </div>
               <div className='cart-remove'>
                  <Button className='btn-remove border-0 py-1' onClick={() => delProduct(product.id)}>X</Button>
               </div>
            </div>
         )
      }) : null
  )
}

export default CartItem;