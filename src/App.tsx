import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';

import {Result} from "../src/common/result";
import {Day} from "./common/day";

function App() {
  const [answer, setAnswer] = useState(0);

    const handleAnswer = (newAnswer: React.SetStateAction<number>) =>{
      console.log(newAnswer);
      setAnswer(newAnswer);
      console.log(answer);
  }

  return (
    <div className="App">
        <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Result value={answer}></Result>
            <div className={"Line"}></div>
            <Day dayNumber={"1"} handleAnswer={handleAnswer}></Day>
            <Day dayNumber={"2"} handleAnswer={handleAnswer}></Day>
        </header>
    </div>
  );
}

export default App;
