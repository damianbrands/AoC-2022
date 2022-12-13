import React, {useState} from "react";
import Result from "./result";

const Day = props => {

    const [answer, setAnswer] = useState(0);
    const [puzzleInput, setPuzzleInput] = useState('');

    const handleChange = event => {
        setPuzzleInput(event.target.value);
    };

    function day1(){
        let elves = puzzleInput.split("  ");
        let highestCal = 0;

        for(const elf of elves){
            let currentcal = 0;
            for(const meal of elf.split(" ")){
                currentcal += Number(meal);
            }
            if(highestCal < currentcal){
                highestCal = currentcal;
            }
        }
        return (highestCal);
    }

    function day2(){

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
                        case 1.5: setAnswer(day2());
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