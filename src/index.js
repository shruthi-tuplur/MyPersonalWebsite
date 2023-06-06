import React, {useState} from 'react';
import ReactDom, {render} from 'react-dom'
import { BrowserRouter, Route, Switch} from 'react-router-dom'
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';
import Header from './components/header';
import HomepageMain from './components/homepage-main';
import Footer from './components/footer';


const Main = () => {

    const [boogie, setBoogie] = useState(false);
    

    return (
        <BrowserRouter>
        <div>
            <Header boogie = {boogie} setBoogie = {setBoogie} />
            <Switch>
                <Route exact path='/' render={() => {
                    return (
                        <Redirect to='/home' />
                    )
                }} 
                />
                <Route exact path='/home'>
                    <HomepageMain boogie = {boogie} setBoogie = {setBoogie}/>
                </Route>
                
                
            </Switch>
            

            
            <Footer /> 
        </div>
        </BrowserRouter>
    )
}

const app = document.getElementById('app');
ReactDom.render(<Main />, app)