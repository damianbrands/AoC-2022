import React from "react";
import {DayInput} from "./dayInput";
import {CalculateButton} from "./calculateButton";

export class Day extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dayNumber: this.props.dayNumber,
            handleAnswer: this.props.handleAnswer,
        }
    }

    render(){
        return(
            <div className={"Day"}>
                <div className={"DayNumber"}>day {this.state.dayNumber}</div>
                <div className={"DayInput"}>
                    <DayInput></DayInput>
                    <CalculateButton handleAnswer={this.props.handleAnswer}></CalculateButton>
                </div>
            </div>
        )
    }
}