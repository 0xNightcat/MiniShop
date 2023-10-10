import './CartInfo.scss';
import { Table } from 'react-bootstrap';

// checkout cart info component
function CartInfo({ total, count }) {
  return (
   <Table>
      <thead>
         <tr className='table-dark'>
            <th><h5>اطلاعات سبد</h5></th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <td><span>مجموع:‌ </span>{total} تومان</td>
         </tr>
         <tr>
            <td><span>تعداد محصول:‌ </span>{count} عدد</td>
         </tr>
         <tr>
            <td><span>کد رهگیری سفارش: </span>3342544231</td>
         </tr>
         <tr>
            <td><span>وضعیت فرم:‌ </span>تکمیل شده</td>
         </tr>
      </tbody>
   </Table>
  )
}

export default CartInfo;