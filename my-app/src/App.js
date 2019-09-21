import React from 'react';
import logo from './logo.svg';
import './App.css';

function Welcome() {
  return (        <ul>     
  <a href='#'>one</a>
  <a>two</a>
  <a>three</a>
  </ul>);
}

function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <div>
          <Welcome/>
          <ActionLink />
        </div>
        
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
