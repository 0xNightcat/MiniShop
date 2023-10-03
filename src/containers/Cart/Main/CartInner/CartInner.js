import './CartInner.scss';
import Wrapper from '../../../../hoc/Wrapper';
import { Container, Row, Col, Image, Table, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// cart content component
function CartInner() {
  return (
    <Wrapper class='cart-in'>
      <Container>
         <Row>
            <Col md={9}>
               <div className='cart-items'>
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
                        <tr>
                           <td><Image src='#' fluid /></td>
                           <td>محصول نمونه</td>
                           <td>۲۵۰۰۰۰ تومان</td>
                           <td>۲</td>
                           <td><i className='fa fa-trash text-danger'></i></td>
                        </tr>
                        <tr>
                           <td><Image src='#' fluid /></td>
                           <td>محصول نمونه</td>
                           <td>۴۵۰۰۰۰ تومان</td>
                           <td>۱</td>
                           <td><i className='fa fa-trash text-danger'></i></td>
                        </tr>
                        <tr>
                           <td><Image src='#' fluid /></td>
                           <td>محصول نمونه</td>
                           <td>۲۲۰۰۰۰ تومان</td>
                           <td>۳</td>
                           <td><i className='fa fa-trash text-danger'></i></td>
                        </tr>
                     </tbody>
                  </Table>
               </div>
            </Col>
            <Col md={3}>
               <div className='cart-info'>
                  <Card className='border'>
                     <Card.Body>
                        <div className='total'>
                           <span>قیمت کل: </span>
                           <span className='t-price'>۲۵۵۰۰۰۰ تومان</span>
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
               </div>
            </Col>
         </Row>
      </Container>
    </Wrapper>
  )
}

export default CartInner;