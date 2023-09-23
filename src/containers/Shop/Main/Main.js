import './Main.scss';
import Wrapper from '../../../hoc/Wrapper';
import { Container, Breadcrumb } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Products from './Products/Products';

// shop main component
function Main() {
  return (
    <Wrapper class='shop-main'>
      <Container>
         <Breadcrumb dir='ltr'>
            <Breadcrumb.Item href='#' active>فروشگاه</Breadcrumb.Item>
            <Breadcrumb.Item><Link to='/'>خانه</Link></Breadcrumb.Item>
         </Breadcrumb>

         <Products />
      </Container>
    </Wrapper>
  )
}

export default Main;