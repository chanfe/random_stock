import React from 'react';
import './App.scss';
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
        <span className="stocklink">
          <a href={"https://robinhood.com/stocks/" + random_symbol}>Robinhood</a> | 
          <a href={"https://finance.yahoo.com/quote/" + random_symbol}>Yahoo</a>
        </span>
        <br />
        <button onClick={button_pressed}>Generate random <span>Nasdaq Symbol</span></button>
      </header>
      <div className="Footer">
        Made by <a href="https://github.com/chanfe">chanfe</a>
      </div>
    </div>
  );
}

export default App;
