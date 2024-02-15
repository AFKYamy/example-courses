import './Star.css';

import starImg from '../../../assets/star.png';

const Star = ({ key }) => {
    return (
        <img src={starImg} alt="star" className="star" key={key}/>
    )
}

export default Star;