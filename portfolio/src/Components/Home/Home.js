import React from 'react'
import './Home.css'

import Header from '../Header/Header.js';
import Body from '../Body/Body.js';
import Footer from '../Footer/Footer.js'

function Home() {
    return (
        <div className="home">
            <div>
                <Header/>
            </div>
            <div>
                <Body/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    )
}

export default Home

