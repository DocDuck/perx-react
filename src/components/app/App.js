import React from 'react';
import './App.css';
// components
import User from '../user/User'


function App() {
  return (
    <div className="App">
      <header className="App-header">
        Perx is awesome!
        <User/>
      </header>
    </div>
  );
}

export default App;