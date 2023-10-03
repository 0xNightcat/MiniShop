import './Main.scss';
import Wrapper from '../../../hoc/Wrapper';
import { Link } from 'react-router-dom';
import { Container, Breadcrumb } from 'react-bootstrap';

// favorites main component
function Main() {
  return (
    <Wrapper class='favorites-main'>
      <Container>
         <Breadcrumb dir='ltr'>
            <Breadcrumb.Item href='#' active>علاقه مندی ها</Breadcrumb.Item>
            <Breadcrumb.Item><Link to='/'>خانه</Link></Breadcrumb.Item>
         </Breadcrumb>

         <h2 className='text-center mt-5'>علاقه مندی ها</h2>
      </Container>
    </Wrapper>
  )
}

export default Main;