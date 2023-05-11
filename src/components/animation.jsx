import React, {useState} from 'react';

const AnimationRender = (props) => {

    const {boogie, setBoogie} = props;
    
    if(!boogie){
    return (
        <img src='/images/astronaut_default.gif' /> 

    )
    } else {
        return (
            <img src='/images/boogie_astronaut.gif' /> 
    
        )


}
}

export default AnimationRender;