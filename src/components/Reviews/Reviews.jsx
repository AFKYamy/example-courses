import './Reviews.css';

import Review from '../ui/Review/Review';

import user1 from '../../assets/user1.png';
import user2 from '../../assets/user2.png';
import user3 from '../../assets/user3.png';

const Reviews = () => {
    return (
        <section className="reviews__section container">
            <div className="reviews">
                <div className="reviews__heading">
                    <h1 className="heading-large">WHAT</h1>
                    <p className="par-big-purple">users think.</p>
                </div>
                {/* id, img, fullname, rating, quote */}
                <div className="reviews__users"> 
                    <Review id="user1" img={user1} fullname="LAURA SMITH" rating="4" quote="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, possimus." />
                    <Review id="user2" img={user2} fullname="JOHN SMITH" rating="4" quote="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, possimus." />
                    <Review id="user3" img={user3} fullname="SARA SMITH" rating="5" quote="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem, possimus." />
                </div>
            </div>
        </section>
    )
}

export default Reviews;