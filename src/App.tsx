import React from 'react';
import './App.css';
import RandomNumber from "./components/restriction/RandomNumber";

function App() {

    return (
        <div className="App">
            <RandomNumber value={10} isPositive={true}></RandomNumber>
        </div>
    );
}

export default App;