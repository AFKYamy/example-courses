import './Explore.css';

import Circle from './ui/Circle';
import Square from './ui/Square';
import Arrow from './ui/Arrow';
import Oval from '../assets/Oval.png';

const Explore = () => {
    return (
        <section className="explore__section container">
            <div className="explore">
                <div className="text__left">
                    <Square  type="square--blink" />
                    <h2>DISCOVER YOUR SKILLS</h2>
                </div>
                <div className="text__middle">
                    <Circle id="middle__circle--left" type="circle1"/>
                    <div className="middle__content">
                        <img src={Oval} alt="oval" className="explore__middle--oval" />
                        <div className="middle__content--text">
                            <h1>ACCEPT</h1>
                            <p>NEW</p>
                            <h1>CHALLENGES</h1>
                        </div>
                    </div>
                    <Circle id="middle__circle--right" type="circle2"/>
                </div>
                <div className="text__right">
                    <Square  type="square--blink" />
                    <h2>DISCOVER YOUR SKILLS</h2>
                </div>
            </div>
            <div className="middle__content--arrow">
                <Arrow id="middle--arrow"/>
            </div>
        </section>
    )
}

export default Explore;