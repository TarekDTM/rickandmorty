import React from 'react';
import './App.css';
import { Home } from './screens';
import { Header } from './components';


function App() {
  return (
    <>
    <div className="App">
      <Header/>
      <Home/>
    </div>
    </>
  );
}

export default App;
