import React from "react";

export class Result extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value,
        };
    }

    render() {
        console.log(this.state.value);
        return (
            <div className={"Results"}>
                <div className={"ResultText"}>
                    results:
                </div>
                <div className={"Answer"} onClick={() => console.log(this.state.value)}>
                    {this.state.value}
                </div>
            </div>
        );
    }
}