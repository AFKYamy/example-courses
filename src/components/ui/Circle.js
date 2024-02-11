import './Circle.css';

import CircleSmall from '../../assets/circle.png';

const Circle = ({ id }) => {
    return(
        <img src={CircleSmall} alt="circle" className="circle__small" id={id}/>
    )
}

export default Circle;