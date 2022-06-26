import React from 'react';

import './Skills.scss';

// const concerts = [
//     {
//         date: 'Web Development',
//         location: 'I am a good web developer',
//     },
//     {
//         date: 'Front-end',
//         location: 'I am a good front-end developer',
//     },
//     {
//         date: 'Back-end',
//         location: 'I am a good back-end developer',
//     },
//     {
//         date: 'Back-end',
//         location: 'I am a good back-end developer',
//     },
// ]

const Skills = () => {
    return (
        <>
            <h2 className="header">Future Turne</h2>

                <div className="app__skills-exp">

                    <div className="app__skills-exp-item">

                        <div className="date-item">
                            <p>10.08.2022 - 18:00</p>
                        </div>
                        <div className="city-item">
                            <p>Polonia Warsaw Stadium</p>
                        </div>
                    </div>
                    <div className="app__skills-exp-item">

                        <div className="date-item">
                            <p>22.08.2022 - 18:00</p>
                        </div>
                        <div className="city-item">
                            <p>Polonia Warsaw Stadium</p>
                        </div>
                    </div>
                    <div className="app__skills-exp-item">

                        <div className="date-item">
                            <p>30.08.2022 - 18:00</p>
                        </div>
                        <div className="city-item">
                            <p>Polonia Warsaw Stadium</p>
                        </div>
                    </div>
                    <div className="app__skills-exp-item">

                        <div className="date-item">
                            <p>04.09.2022 - 18:00</p>
                        </div>
                        <div className="city-item">
                            <p>Polonia Warsaw Stadium</p>
                        </div>
                    </div>
                    <div className="app__skills-exp-item">

                        <div className="date-item">
                            <p>16.09.2022 - 18:00</p>
                        </div>
                        <div className="city-item">
                            <p>Polonia Warsaw Stadium</p>
                        </div>
                    </div>
                    <div className="app__skills-exp-item" id="last">

                        <div className="p-text">
                            <p>If you have any questions — feel free to contact via our manager with the button the on top of Navigation bar !</p>
                        </div>
                    </div>

                </div>
        </>

    );
};

export default Skills;
