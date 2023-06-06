import React, {useState} from 'react';
import AudioPlayer from './audioplayer';


const AnimationRender = (props) => {

    const {boogie, setBoogie} = props;
    
    // <AudioPlayer onDonePlaying={() => setBoogie(false)} />

    
    if(!boogie){
    return (
        <img src='/images/astronaut_default.gif' /> 

    )
    } else {
        return (
            <div>
                <img src='/images/boogie_astronaut.gif' /> 
                
            </div>
    
        )


}
}

export default AnimationRender;