import React, {useLayoutEffect, useState, useRef, useEffect} from 'react';
import ReactDom, {render} from 'react-dom'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './components/header';
import HomepageMain from './components/homepage-main';
import Footer from './components/footer';




const Main = () => {

    const [boogie, setBoogie] = useState(false);
    const [businessMode, setBusinessMode] = useState(false);
    

    return (
        <BrowserRouter>
        <div>
            <Header boogie = {boogie} setBoogie = {setBoogie} businessMode={businessMode} setBusinessMode={setBusinessMode}/>
            <Switch>
                <Route exact path='/' render={() => {
                    return (
                        <Redirect to='/home' />
                    )
                }} 
                />
                <Route exact path='/home'>
                    <HomepageMain boogie = {boogie} setBoogie = {setBoogie} businessMode={businessMode} setBusinessMode={setBusinessMode}/>
                </Route>
                
                
            </Switch>
            

            
            <Footer businessMode={businessMode}/> 
        </div>
        </BrowserRouter>
    )
}

const app = document.getElementById('app');
ReactDom.render(<Main />, app)