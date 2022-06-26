import React from 'react';

import { About, Header } from "./components";
import './App.scss';

const App = () => {
    return (
        <div className="app">
            <Header/>
            <About/>
        </div>
    );
};

export default App;
