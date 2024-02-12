import './Courses.css';

import Square from './ui/Square';
import Course from './ui/Course';
import Arrow from './ui/Arrow';

const Courses = () => {
    return (
        <div className="courses container">
            <div className="courses__heading">
                <div className="courses__heading--text">
                    <p><span className="courses--bold">FIND</span>Your course.</p>
                </div>
                <div className="courses__edition">
                    <div className="courses__edition--square">
                        <Square type="square--blink" />
                    </div>
                    <div className="courses__edition--text">
                        <p>EDITION</p>
                        <p className="courses__edition--year">2024</p>
                    </div>
                </div>
            </div>
            <div className="courses__list">
                    <Course courseName="COURSE" number="1" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, repellendus!"/>
                    <Course courseName="COURSE" number="2" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, repellendus!"/>
                    <Course courseName="COURSE" number="3" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, repellendus!"/>
                    <Course courseName="COURSE" number="4" text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Libero, repellendus!"/>
            </div>
            <div className="courses__more">
                <h1><a href="#">MORE COURSES</a></h1>
            </div>
        </div>
    )
}

export default Courses;