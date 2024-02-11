import './Btn.css';

const Btn = ({type, text}) => {
    return (
        <button className={`btn ${type}`}>{text}</button>
    )
}

export default Btn;