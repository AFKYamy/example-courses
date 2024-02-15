import './Fstar.css';

import fstarImg from '../../../assets/fstar.png';

const Fstar = ({ key }) => {
    return (
        <img src={fstarImg} alt="fstar" className="fstar" key={key}/>
    )
}

export default Fstar;