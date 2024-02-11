import './Btn.css';

const Btn = ({type, text, href}) => {
    return (
        <button className={`${type}`} href={href} >{text}</button>
    )
}

export default Btn;