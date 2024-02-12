import './Square.css';

import SquareImg from '../../assets/square.png';

const Square = ({ type }) => {
    return (
        <img src={SquareImg} alt="square-img" className={`${type}`}/>
    )
}

export default Square;