import React, { useState } from 'react'
import './Header.css'
import Mobile from './Mobile/Mobile'
import Web from './Web/Web'

function Header(){
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="header">
            <div className="logo">Overreacted</div>
            <div className="menu">
                <div className="web-menu"><Web/></div>
                <div className="mobile-menu">
                    <div onClick={() => setIsOpen(!isOpen)}>
                        <i class="far fa-bars menu-icon"></i>
                    </div>
                    {isOpen && <Mobile isOpen={isOpen} setIsOpen={setIsOpen}/>}
                </div>
            </div>
        </div>
    )
}

export default Header