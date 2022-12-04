import React from "react";

export class CalculateButton extends React.Component{
    constructor(props) {
        super(props);
        this.props = {
            handleAnswer: this.props.handleAnswer
        };
    }

    render() {
        return(
            <button className={"CalculateButton"} onClick={() => this.props.handleAnswer(80)}>calculate</button>
        );
    }
}