import './Explore.css';

import Circle from './ui/Circle';
import Square from './ui/Square';
import Arrow from './ui/Arrow';

const Explore = () => {
    return (
        <div className="explore container">
            <div className="text__left">
                <Square />
                <h2>DISCOVER YOUR SKILLS</h2>
            </div>
            <div className="text__middle">
                <Circle id="middle__circle--left"/>
                <div className="middle__content">
                    <div className="middle__content--text">
                        <h1>ACCEPT</h1>
                        <p>NEW</p>
                        <h1>CHALLENGES</h1>
                    </div>
                    <div className="middle__content--arrow">
                        <Arrow id="middle--arrow"/>
                    </div>
                </div>
                <Circle id="middle__circle--right"/>
            </div>
            <div className="text__right">
                <Square />
                <h2>DISCOVER YOUR SKILLS</h2>
            </div>
        </div>
    )
}

export default Explore;