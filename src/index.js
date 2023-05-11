import React, {useState} from 'react';
import ReactDom from 'react-dom'
import Header from './components/header';
import HomepageMain from './components/homepage-main';

const Main = () => {

    const [boogie, setBoogie] = useState(false);

    return (
        <div>
            <Header boogie = {boogie} setBoogie = {setBoogie}/>
            <HomepageMain boogie = {boogie} setBoogie = {setBoogie}/>
        </div>
    )
}

const app = document.getElementById('app');
ReactDom.render(<Main />, app)