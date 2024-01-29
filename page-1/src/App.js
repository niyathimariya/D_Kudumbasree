import React from 'react';
import Navbar from './components/Navbar';
import Main from  './components/Main';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar/>
      </header>
      <Main/>
    </div>
  );
}

export default App;
