import React from 'react';
import { Image } from 'react-bootstrap';

import './HeaderSlide.scss';

import Wrapper from '../../../hoc/Wrapper';

function HeaderSlide({ headSlider, className }) {
  return (
    <Wrapper class='header_slide'>
      <Image src={headSlider} className={className} fluid />
    </Wrapper>
  )
}

export default HeaderSlide;