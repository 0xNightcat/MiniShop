import './CartTable.scss';
import { Table, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function CartTable({ pros, removePro }) {
  return (
   <Table className='text-center'>
      <thead>
         <tr>
            <th>تصویر</th>
            <th>عنوان</th>
            <th>قیمت</th>
            <th>تعداد</th>
            <th>حذف</th>
         </tr>
      </thead>
      <tbody>
         {
            pros ? pros.map(product => {
               return (
                  <tr>
                     <td>
                        <Link to={`/product/${product.id}`}>
                           <Image src={product.src} fluid />
                        </Link>
                     </td>
                     <td>{product.name}</td>
                     <td>{product.price} تومان</td>
                     <td>{product.count}</td>
                     <td>
                        <Button onClick={() => removePro(product.id)}>
                           <i className='fa fa-trash text-danger'></i>
                        </Button>
                     </td>
                  </tr>
               )
            }) : null
         }
      </tbody>
   </Table>
  )
}

export default CartTable;