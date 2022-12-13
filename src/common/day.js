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
                    rpsYou = 1;
                    break;
                case 'Y':
                    rpsYou = 2;
                    break;
                case 'Z':
                    rpsYou = 3;
                    break;
            }
            totalScore += rpsYou;
            totalScore += rpsScore(getElfRps(elfMoves[i]), rpsYou);
        }

        return totalScore;
    }

    function getElfRps(elfMove){
        switch (elfMove){
            case 'A':
                return  1;
            case 'B':
                return  2;
            case 'C':
                return  3;
            default:
                return null;
        }
    }

    function rpsScore(rpsElf, rpsYou){
        if(rpsElf === rpsYou){
            return 3;
        }
        if((rpsElf === 1 && rpsYou === 3) || (rpsElf === 2 && rpsYou === 1) || (rpsElf === 3 && rpsYou === 2)){
            return 0;
        }
        return 6;
    }

    function day2Star(){
        const moves = puzzleInput.split(" ");
        const elfMoves = [];
        const yourMoves = [];
        let totalScore = 0;

        for(let i = 0; i < moves.length; i++){
            (i % 2 === 0 ? elfMoves : yourMoves).push(moves[i]);
        }

        for(let i = 0; i < elfMoves.length; i++){
            let rpsYou = 0;
            let rpsElf = getElfRps(elfMoves[i])

            switch(yourMoves[i]){
                case 'X':
                    rpsYou = (rpsElf === 1 ? 3 : (rpsElf === 2 ? 1 : 2));
                    break;
                case 'Y':
                    rpsYou = rpsElf;
                    totalScore += 3;
                    break;
                case 'Z':
                    rpsYou = (rpsElf === 1 ? 2 : (rpsElf === 2 ? 3 : 1));
                    totalScore += 6;
                    break;
            }
            totalScore += rpsYou;
        }
        return totalScore;
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