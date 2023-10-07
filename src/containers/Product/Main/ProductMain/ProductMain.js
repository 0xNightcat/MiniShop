import './ProductMain.scss';
import { Col, Row, Image, Button } from 'react-bootstrap';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProduct } from '../../../../action/productAction';
import { fetchProducts } from '../../../../action/cartAction';
import { updateCart } from '../../../../action/cartAction';
import MiniAlert from '../../../../components/UI/Alert/MiniAlert';
import Wrapper from '../../../../hoc/Wrapper';

// product content component
function ProductMain() {
   const dispatch = useDispatch();
   const params = useParams();

   const productReducer = useSelector((state) => state.product);
   const { product } = productReducer;

   useEffect(() => {
      dispatch(getProduct(params.id));
   }, [dispatch, params.id])

   // add to cart handler
   const addToCartHandler = () => {
      let productId = Number(params.id);

      dispatch(updateCart(productId));
      dispatch(fetchProducts());
   }


  return (
   <Wrapper class='product-inner'>
      <MiniAlert />
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
               <Button className='pro-btn px-4 py-2' onClick={addToCartHandler}>اضافه به سبد
                  <i className='fa fa-plus'></i>
               </Button>
               <Button className='pro-btn btn-danger px-3 py-2'>افزودن به علاقه مندی
                  <i className='fa fa-heart'></i>
               </Button>
            </div>
         </Col>
      </Row>
   </Wrapper>
  )
}

export default ProductMain;