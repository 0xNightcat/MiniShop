import React from 'react';
import { Image } from 'react-bootstrap';

import offerImage from '../../../../assets/images/offer.jpg';

import './SpecialOffer.scss';

function SpecialOffer() {
  return (
    <section className='special_offer'>
      <div className='offer-back'>
         <h3>پیشنهادات ویژه</h3>
         <Image src={offerImage} />
      </div>
    </section>
  )
}

export default SpecialOffer;