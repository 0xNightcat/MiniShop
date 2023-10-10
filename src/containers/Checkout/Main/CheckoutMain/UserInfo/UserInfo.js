import './UserInfo.scss';
import { Table } from 'react-bootstrap';

// checkout user info component
function UserInfo() {
  return (
   <Table>
      <thead>
         <tr className='table-dark'>
            <th><h5>اطلاعات ارسال</h5></th>
         </tr>
      </thead>
      <tbody>
         <tr>
            <td><i className='fa fa-user'></i><span>نام و نام خانوادگی:</span> علیرضا کریمی</td>
         </tr>
         <tr>
            <td><i className='fa fa-map-marker'></i><span>آدرس:‌</span> تهران، خیابان هفت تیر،‌کوچه آذر۱،‌پلاک ۲۲</td>
         </tr>
         <tr>
            <td><i className='fa fa-phone'></i><span>تلفن:‌</span> ۰۹۱۹۲۳۴۵۴۳۷</td>
         </tr>
         <tr>
            <td><i className='fa fa-truck'></i><span>نوع ارسال:</span> پست سفارشی</td>
         </tr>
      </tbody>
   </Table>
  )
}

export default UserInfo;   