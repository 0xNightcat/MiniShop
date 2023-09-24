import './ProductMain.scss';
import { Col, Row, Image, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../../../action/productAction';

// product content component
function ProductMain() {
   const dispatch = useDispatch();
   const params = useParams();

   const productReducer = useSelector((state) => state.product);
   const { product } = productReducer;

   useEffect(() => {
      dispatch(getProduct(params.id));
   }, [dispatch, params.id])

  return (
   <Row className='align-items-center'>
      <Col md={6}>
         <div className='product-image'>
            <Image src={product.src} fluid />
         </div>
      </Col>
      <Col md={6}>
         <div className='product-info'>
            <h3 className='title'>{product.name}</h3>
            <div className='stars'>
               <i className='fa fa-star'></i>
               <i className='fa fa-star'></i>
               <i className='fa fa-star'></i>
               <i className='fa fa-star'></i>
               <i className='fa fa-star'></i>
            </div>
            <div className='price-cat'>
               <p className='price'>قیمت: <span>{product.price} تومان</span></p>
               <p className='category'>دسته بندی: <span>{product.cat}</span></p>
            </div>
            <p className='desc'>
            لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد
            </p>
            <Button className='pro-btn px-5 py-2'>اضافه به سبد</Button>
            <Button className='pro-btn btn-danger px-5 py-2'>افزودن به علاقه مندی</Button>
         </div>
      </Col>
   </Row>
  )
}

export default ProductMain;