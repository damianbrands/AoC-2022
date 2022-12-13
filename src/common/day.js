import React, {useState} from "react";
import Result from "./result";

const Day = props => {

    const [answerNormal, setAnswerNormal] = useState(0);
    const [answerStar, setAnswerStar] = useState(0);
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

    function day1Star(){
        let elves = puzzleInput.split("  ");
        let elf1 = 0;
        let elf2 = 0;
        let elf3 = 0;

        for(const elf of elves){
            let currentcal = 0;
            for(const meal of elf.split(" ")){
                currentcal += Number(meal);
            }
            if(currentcal > elf1){
                elf3 = elf2;
                elf2 = elf1;
                elf1 = currentcal;
            }
            else if(currentcal > elf2){
                elf3 = elf2;
                elf2 = currentcal;
            }
            else if(currentcal > elf3){
                elf3 = currentcal;
            }
        }
        return (elf1 + elf2 + elf3);
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
                        case 1: setAnswerNormal(day1());
                                setAnswerStar(day1Star());
                                break;
                        case 2:
                                break;
                        default: setAnswerNormal(0);
                    }
                }}>calculate</button>
            </div>
            <Result answer={answerNormal} name={"answer"}></Result>
            <Result answer={answerStar} name={"answerStar"}></Result>
            <div className={"Line"}></div>
        </>
    );
}

export default Day;