import './Main.scss';
import Wrapper from '../../../hoc/Wrapper';
import { Link } from 'react-router-dom';
import { Container, Breadcrumb } from 'react-bootstrap';
import Product from './Product/Product';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { deleteFavoriteProduct, getFavoriteProducts, hideModalAction, setProductId, showModalAction } from '../../../action/favoriteAction';
import ModalAlert from '../../../components/UI/Alert/Modal/Modal';

// favorites main component
function Main() {
  const dispatch = useDispatch();

  const favoriteReducer = useSelector((state) => state.favorites);
  const { favoriteProducts, showModal, selectedProId } = favoriteReducer;


  useEffect(() => {
    dispatch(getFavoriteProducts());
  }, [dispatch])

  // set product id and show modal
  const setProId = (id) => {
    dispatch(setProductId(id));
    dispatch(showModalAction());
  }

  // remove product handler
  const removeProHandler = () => { 
    dispatch(deleteFavoriteProduct(selectedProId));
    dispatch(hideModalAction());
    setTimeout(() => {
      dispatch(getFavoriteProducts());
    }, 10);
  }

  // hide modal
  const hideModaHandler = () => {
    dispatch(hideModalAction());
  }


  return (
    <Wrapper class='favorites-main'>
      <ModalAlert 
      removePro={removeProHandler} 
      show={showModal} 
      hide={hideModaHandler} 
      />
      <Container>
         <Breadcrumb dir='ltr'>
            <Breadcrumb.Item href='#' active>علاقه مندی ها</Breadcrumb.Item>
            <Breadcrumb.Item><Link to='/'>خانه</Link></Breadcrumb.Item>
         </Breadcrumb>

        {
          favoriteProducts.length > 0 ? <Product 
          pros={favoriteProducts} 
          setProId={setProId}
          /> : <h5 className='mt-5 text-center'>علاقه مندی‌ها خالی می باشد</h5>
        }

      </Container>
    </Wrapper>
  )
}

export default Main;