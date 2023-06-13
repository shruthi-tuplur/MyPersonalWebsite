import React, {useLayoutEffect, useState, useRef, useEffect} from 'react';
import ReactDom, {render} from 'react-dom'

import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './components/header';
import HomepageMain from './components/homepage-main';
import Footer from './components/footer';




const Main = () => {

    const [boogie, setBoogie] = useState(false);
    const [businessMode, setBusinessMode] = useState(false);
    

    return (
        
        <div>
            <Header boogie = {boogie} setBoogie = {setBoogie} businessMode={businessMode} setBusinessMode={setBusinessMode}/>
            
                
                    
                
                    <HomepageMain boogie = {boogie} setBoogie = {setBoogie} businessMode={businessMode} setBusinessMode={setBusinessMode}/>
                
                
                
           
            

            
            <Footer businessMode={businessMode}/> 
        </div>
        
    )
}

const app = document.getElementById('app');
ReactDom.render(<Main />, app)