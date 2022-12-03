import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import {Result} from "../src/common/result";
import {Day} from "./common/day";

function App() {
  return (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Result value={0}></Result>
            <div className={"Line"}></div>
            <Day dayNumber={"1"}></Day>
            <Day dayNumber={"2"}></Day>
        </header>
    </div>
  );
}

export default App;
