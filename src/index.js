import React from 'react';
import ReactDom from 'react-dom'
import Header from './components/header';
import HomepageMain from './components/homepage-main';

const Main = () => {

    return (
        <div>
            <Header />
            <HomepageMain />
        </div>
    )
}

const app = document.getElementById('app');
ReactDom.render(<Main />, app)