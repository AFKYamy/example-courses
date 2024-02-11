import './Square.css';

import Image from '../../assets/square.png';

const Square = () => {
    return (
        <img src={Image} alt="square-img" className="square"/>
    )
}

export default Square;