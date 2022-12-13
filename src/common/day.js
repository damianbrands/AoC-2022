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

    function day2(){
        const moves = puzzleInput.split(" ");
        const elfMoves = [];
        const yourMoves = [];
        let totalScore = 0;

        for(let i = 0; i < moves.length; i++){
            (i % 2 === 0 ? elfMoves : yourMoves).push(moves[i]);
        }

        for(let i = 0; i < elfMoves.length; i++){
            let rpsYou = 0;

            switch(yourMoves[i]){
                case 'X':
                    rpsYou += 1;
                    break;
                case 'Y':
                    rpsYou += 2;
                    break;
                case 'Z':
                    rpsYou += 3;
                    break;
            }
            totalScore += rpsYou;
            totalScore += rpsScore(elfMoves[i], rpsYou);
        }

        return totalScore;
    }

    function rpsScore(elfMove, rpsYou){
        let rpsElf = 0;
        switch (elfMove){
            case 'A':
                rpsElf = 1;
                break;
            case 'B':
                rpsElf = 2;
                break;
            case 'C':
                rpsElf = 3;
                break;
            default:
                return null;
        }
        if(rpsElf === rpsYou){
            return 3;
        }
        if((rpsElf === 1 && rpsYou === 3) || (rpsElf === 2 && rpsYou === 1) || (rpsElf === 3 && rpsYou === 2)){
            return 0;
        }
        return 6;
    }

    function day2Star(){

        return 0;
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
                        case 2: setAnswerNormal(day2());
                                setAnswerStar(day2Star());
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