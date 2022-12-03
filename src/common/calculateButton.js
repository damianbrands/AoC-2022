import React from "react";

export class CalculateButton extends React.Component{
    render() {
        return(
            <button className={"CalculateButton"} onClick={() => console.log('Click')}>calculate</button>
        );
    }
}