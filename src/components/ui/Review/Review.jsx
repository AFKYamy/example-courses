import './Review.css';

import Fstar from '../Fstar/Fstar';
import Star from '../Star/Star';

import Quote1 from '../../../assets/quote.png';
import Quote2 from '../../../assets/quote2.png';

const Review = ({ id, img, fullname, rating, quote }) => {
    const stars = Array.from({ length: 5 }, (_, index) => {
        const isFilled = index < rating;
        return isFilled ? <Fstar key={index} /> : <Star key={index} />;
    });
    
    return (
        <div className={`review review--${id}`}>
            <img src={img} alt={id} className="review__pfp"/>
            <p className="par-big bold review__fullname">{fullname}</p>
            <div className="review__stars">
                {stars}
            </div>
            <img src={Quote1} alt="quote" className="quote__img quote--img1" />
            <p className="par-medium review__quote">{quote}</p>
            <img src={Quote2} alt="quote" className="quote__img quote--img2" />
        </div>
    )
}

export default Review;