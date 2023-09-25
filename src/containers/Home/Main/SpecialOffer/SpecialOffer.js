import './SpecialOffer.scss';
import { Image } from 'react-bootstrap';

// images
import offerImage from '../../../../assets/static/offer.jpg';

// special offer component
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