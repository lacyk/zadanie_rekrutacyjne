import React, { useState } from 'react';

import {HiChatAlt,  HiX} from 'react-icons/hi';
import { motion } from 'framer-motion'

import './Header.scss';

import logo from "../../images/nirvana-logo.png"


const Header = () => {
    const [toggle, setToggle] = useState(false);


    return (
        <nav className="app__navbar">
            <div className="app__navbar-logo">
                <img src={logo} alt="logo"/>
            </div>

            <div className="app__navbar-menu">
                <HiChatAlt onClick={() => setToggle(true)}/>

                {
                    toggle && (
                        <motion.div
                            whileInView={{ x: [200, 0]}}
                            transition={{duration: 0.85, ease: 'easeOut'}}
                        >
                            <HiX onClick={() => setToggle(false)}/>

                        </motion.div>
                    )
                }
            </div>
        </nav>
    );
};

export default Header;
