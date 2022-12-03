import React from "react";

export class DayInput extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
        };
    }

    render() {
        return(
            <input className={"TextInput"} placeholder={"puzzle input"}/>
        );
    }
}