import React from 'react';

import {About, Header, Skills} from "./components";
import './App.scss';

const App = () => {
    return (
        <div className="app">
            <Header/>
            <About/>
            <Skills/>
        </div>
    );
};

export default App;
