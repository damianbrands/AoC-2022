import React, {useState} from "react";
import Result from "./result";

const Day = props => {

    const [answer, setAnswer] = useState(0);
    const [puzzleInput, setPuzzleInput] = useState('');

    const handleChange = event => {
        setPuzzleInput(event.target.value);
    };

    function day1(){
        return (Number(puzzleInput) + 1);
    }

    function day2(){
        return (Number(puzzleInput) + 2);
    }

    return (
        <>
            <div className={"DayNumber"}>
                day {props.dayNumber}:
            </div>
            <div className={"DayInput"}>
                <input className={"TextInput"} placeholder={"puzzle input"} value={puzzleInput} onChange={handleChange}></input>
                <button className={"CalculateButton"} onClick={() => {
                    switch(props.dayNumber){
                        case 1: setAnswer(day1());
                                break;
                        case 2: setAnswer(day2());
                                break;
                        default: setAnswer(0);
                    }
                }}>calculate</button>
            </div>
            <Result answer={answer}></Result>
            <div className={"Line"}></div>
        </>
    );
}

export default Day;