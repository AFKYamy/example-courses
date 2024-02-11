import './Stats.css';

const Stats = () => {
    return (
        <div className="stats">
            <div className="students">
                <div className="students__number">
                    <h1><span className="plus">+</span>150</h1>
                </div>
                <div className="students__text">
                    <p>HAPPY</p>
                    <h2>STUDENTS</h2>
                </div>
            </div>
            <div className="courses">
                <div className="courses__number">
                    <h1><span className="plus">+</span>50</h1>
                </div>
                <div className="courses__text">
                    <p>CERTIFIED</p>
                    <h2>COURSES</h2>
                </div>
            </div>
            <div className="awards">
                <div className="awards__number">
                    <h1><span className="plus">+</span>1000</h1>
                </div>
                <div className="awards__text">
                    <p>AWARDS</p>
                    <h2>RECEIVED</h2>
                </div>
            </div>
        </div>
    )
}

export default Stats;