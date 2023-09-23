import './HeaderSlide.scss';
import Wrapper from '../../../hoc/Wrapper';
import { Image } from 'react-bootstrap';

// header slide component
function HeaderSlide({ headSlider, className }) {
  return (
    <Wrapper class='header_slide'>
      <Image src={headSlider} className={className} fluid />
    </Wrapper>
  )
}

export default HeaderSlide;