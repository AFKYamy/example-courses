import './Hero.css';
import HeroImg from '../assets/image1.png';
import BigCircle from '../assets/circle-big.png';

import Square from './ui/Square';
import Btn from './ui/Btn';

const Hero = () => {
    return (
        <div className="hero container" id="hero">
            <div className="quote">
                <div className="quote__title">
                    <h1>UI<span className="dot">.</span></h1>
                </div>
                <div className="quote__content">
                    <div className="quote__heading">
                        <p>BEGINNER<span className="bold">'s</span></p>
                    </div>
                    <div className="quote__text">
                        <div className="quote__text--square">
                            <Square />
                        </div>
                        <p>BECOME A <br/>PRO-DESIGNER</p>
                    </div>
                </div>
            </div>
            <div className="hero__imgs">
                <img src={BigCircle} alt="big-circle" className="hero__circle"/>
                <img src={HeroImg} alt="hero-img" className="hero__guy"/>
            </div>
            <div className="info">
                <div className="info__edition">
                    <div className="info__edition--text">
                        <h1>EDITION</h1>
                        <h1 className="bold">2024</h1>
                    </div>
                </div>
                <div className="info__desc">
                    <div className="info__title">
                        <h1>START GUIDE FOR BEGINNER DESIGNERS</h1>
                    </div>
                    <div className="info__text">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Perspiciatis, error ipsum?</p> 
                    </div>
                    <div className="info__btns">
                        <Btn type="btn btn--primary" text="LET'S START" href="#"/>
                        <Btn type="btn btn--terciary" text="READ MORE" href="#"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;