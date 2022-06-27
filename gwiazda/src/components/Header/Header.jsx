import React, { useState } from 'react';

import {HiChatAlt,  HiX} from 'react-icons/hi';
import { motion } from 'framer-motion'

import './Header.scss';

import logo from "../../images/nirvana-logo.png"
import chat from "../../images/mail.png"
import cross from "../../images/cross.png"


const Header = () => {

    // const slideout = document.querySelector('HiChatAlt')

    // const handle = slideout.querySelector('.handle')
    //
    // handle.onclick = function() {
    //     slideout.classList.toggle('active');
    // }

    // function myFunction() {
    //     let x = document.querySelector(".app__navbar-btn");
    //     if (x.style.display === "none") {
    //         x.style.display = "block";
    //     } else {
    //         x.style.display = "none";
    //     }
    // }
    //
    // let x = document.querySelector(".app__navbar-btn");
    const myFunction = function() {
        let y = document.querySelector(".pop");
        if (y.style.display === "none") {
            y.style.display = "block";
            // y.style.position = "sticky";
        } else {
            y.style.display = "none";
        }
        console.log("button is clicked");
    }


    return (
        <>
            <nav className="app__navbar">
                <div className="app__navbar-logo">
                    <img src={logo} alt="logo"/>
                </div>
                <div onClick={myFunction} className="app__navbar-btn">
                    <img src={chat} alt=" chat-button"/>
                </div>
            </nav>
            <div className="pop" style={{display : "none"}}>
                {/*<div className="container">*/}
                    <div onClick={myFunction} className="app__navbar-btn" id="flex-right">
                        <img src={cross} alt=" cross-button"/>
                    </div>
                    <div className="container">
                        <div>
                            <p className='container-header'>Contact with us!</p>
                        </div>
                        <div className="app__flex">
                            <input className="p-text" type="text" placeholder="Your Name" name="username" />
                        </div>
                        <div className="app__flex">
                            <input className="p-text" type="email" placeholder="Your Email" name="email"  />
                        </div>
                        <div>
                        <textarea
                            className="p-text"
                            placeholder="Your Message"
                            // value={message}
                            name="message"
                            // onChange={handleChangeInput}
                        />
                        </div>
                        <a href="#" className="p-text">
                            <button type="button" className="p-text" onClick={myFunction}>Click-Click</button>
                        </a>
                    </div>
                </div>
            {/*</div>*/}
        </>

    );
};


export default Header;

