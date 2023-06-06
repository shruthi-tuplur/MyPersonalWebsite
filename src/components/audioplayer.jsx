import React, {useState} from 'react'


const AudioPlayer = ({ onDonePlaying}) => {
    const onEnded = () => {

        onDonePlaying();
    }

    
    

}

export default AudioPlayer;