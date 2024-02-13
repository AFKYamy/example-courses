import './About.css';

import Image2 from '../assets/image2.png';
import BigCircle from '../assets/circle-big.png';
import Circle from './ui/Circle';
import Square from './ui/Square';
import Button from './ui/Btn';

const About = () => {
    return (
        <section className="about__section container">
            <Circle id="about__circle1" type="circle1"/>
            <div className="about container">
                <div className="about__text">
                    <div className="about__text--heading">
                        <h1 className="heading-big">About</h1>
                        <p className="par-big-purple">us.</p>
                    </div>
                    <div className="about__text--info">
                        <p className="par-medium-bold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque quam esse eos soluta adipisci quasi, aperiam laboriosam eum pariatur ut tempore quia.</p>
                    </div>
                    <div className="about__text--points">
                        <div className="about__text--point1 about__text--point">
                            <Square type="square" />
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                        <div className="about__text--point2 about__text--point">
                            <Square type="square" />
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                        <div className="about__text--point3 about__text--point">
                            <Square type="square" />
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                        <div className="about__text--point4 about__text--point">
                            <Square type="square" />
                            <p>Lorem, ipsum dolor.</p>
                        </div>
                    </div>
                    <div className="about__btn">
                        <Button type="btn--small btn--secondary" text="READ MORE" href="#" />
                    </div>
                </div>
                <div className="about__gfx">
                    <img src={BigCircle} alt ="big-circle" className="about--circle" />
                    <img src={Image2} alt="image2" className="about--img" />
                </div>
            </div>
            <Circle id="about__circle2" type="circle1"/>
        </section>
    )
}

export default About;