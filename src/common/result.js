import React from "react";

const Result = props => {
    const {name} = props;
    const {answer} = props;

    return (
        <>
            <div className={"Results"}>
                <div className={"ResultText"}>
                    {name}:
                </div>
                <div className={"Answer"} onClick={() => console.log(this.state.value)}>
                    {answer}
                </div>
            </div>
        </>
    );
}

export default Result;