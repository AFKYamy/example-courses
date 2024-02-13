import './WhyUs.css';

import Image3 from '../../assets/image3.png';
import BigCircle from '../../assets/circle-big.png';
import Oval from '../../assets/Oval.png';

import Circle from '../ui/Circle';
import Btn from '../ui/Btn';

const WhyUs = () => {
    return (
        <section className="why__container container">
            <div className="why container">
                <Circle type="circle1" id="why__circle1"/>
                <div className="why__gfx">
                    <img src={Oval} alt="oval" className="why__gfx--oval" />
                    <img src={BigCircle} alt="big-circle" className="why--circle" />
                    <img src={Image3} alt="image3" className="why--img" />
                </div>
                <Circle type="circle2" id="why__circle2"/>
                <div className="why__text">
                    <div className="why__text--heading">
                        <h1 className="heading-big">Why</h1>
                        <p className="par-big-purple">us.</p>
                    </div>
                    <div className="why__text--info">
                        <p className="par-medium-bold">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Saepe provident cupiditate placeat aspernatur unde odit sit assumenda ipsa numquam, ab repellendus libero veniam atque debitis voluptatibus est, aliquid ratione iusto!</p>
                    </div>
                    <div className="why__btn">
                        <Btn type="btn--small btn--secondary" text="READ MORE" href="#" />
                    </div>
                    <Circle type="circle1" id="why__circle3"/>
                </div>
            </div>
        </section>
    )
}

export default WhyUs;