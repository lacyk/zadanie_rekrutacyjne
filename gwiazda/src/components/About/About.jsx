import React from 'react';

import './About.scss'
import logo from "../../images/nirvana-logo.png"

const About = () => {
    return (
            <div>
                <div className="app__flex about__btn image">
                    <div className="log">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div>
                        <a href="https://www.youtube.com/results?search_query=nirvana" target="_blank" rel="noreferrer" >
                            <button type="button" className="p-text">
                                Listen Now
                            </button>
                        </a>
                    </div>
                </div>
            </div>
    );
};

export default About;
