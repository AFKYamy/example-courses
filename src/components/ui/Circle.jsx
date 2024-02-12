import './Circle.css';

import CircleSmall from '../../assets/circle.png';

const Circle = ({ id, type }) => {
    return(
        <img src={CircleSmall} alt="circle" className={type} id={id} draggable="false"/>
    )
}

export default Circle;