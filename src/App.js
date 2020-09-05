import React from 'react';
import './App.css';
import symbols from './assests/sym.js'

function App() {


  const random_symbol = symbols[Math.floor(Math.random() * symbols.length)]

  const button_pressed = (e) => {
    window.location.reload();
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>{random_symbol}</h1>
        <button onClick={button_pressed}>Generate random Nasdaq Symbol</button>
        <br />
        <a href={"https://robinhood.com/stocks/" + random_symbol}>Robinhood</a>
        <a href={"https://finance.yahoo.com/quote/" + random_symbol}>Yahoo</a>
      </header>
      
    </div>
  );
}

export default App;
