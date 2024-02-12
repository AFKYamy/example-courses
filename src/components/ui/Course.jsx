import './Course.css';

import Btn from './Btn';

const Course = ({ courseName, number, text }) => {
    return (
        <div className="course">
            <div className="course__id">
                <p>{`.0${number}`}</p>
            </div>
            <div className="course__title">
                <h1>{courseName} <span className="course__title--number">{`0${number}`}</span></h1>
            </div>
            <div className="course__info">
                <p>{text}</p>
            </div>
            <div className="course__button">
                <Btn type="btn--small btn--secondary" text="READ MORE" href="#"/>
            </div>
        </div>
    )
}

export default Course;