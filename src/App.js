import React from 'react';
import Header from './Components/Header';
import Home from "./Routes/Home";
import About from './Routes/About'
import SignForms from './Routes/Sign'


function App() {
    return (
        
        <div>
            <Header />
            <Home />
            <About />
            <SignForms />
        </div>
    )
}

export default App;