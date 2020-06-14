import React from 'react';

import './App.css';
import List from './components/List.js'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          target="_blank"
          rel="noopener noreferrer"
        >
          Welcome to my TodoApp!
        </a>
        <p>
        <List />
        </p>
      </header>
    </div>
  );
}

export default App;
