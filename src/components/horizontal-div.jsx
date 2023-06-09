import React from "react";

const HorizontalLine = (props) => {
    const {businessMode} = props

    if(businessMode){
        return(
            <div id='horizontal-line-div-bus'>
                <div id='horizontal-line-bus'>
                </div>
            </div>
        )
    } else {
    return(
        <div id='horizontal-line-div'>
            <div id='horizontal-line'>
            </div>
        </div>
    )
}
}
export default HorizontalLine