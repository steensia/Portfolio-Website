import React from 'react'
import './Mobile.css'

function Mobile({isOpen, setIsOpen}) {
    return <div className="mobile">
        <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
            <i class="fi fi-rr-cross-circle"></i>
        </div>
        <div className="mobile-options">
            <div className="mobile-option">
                <a href="#project">
                    <i class="fi fi-rr-brush option-icon"></i>Projects
                </a>
            </div>
            <div className="mobile-option">
                <a href="#skills">
                    <i class="fi fi-rr-laptop option-icon"></i>Skills
                </a>
            </div>
            <div className="mobile-option">
                <a href="#work">
                    <i class="fi fi-rr-briefcase"></i>Work
                </a>
            </div>
        </div>
    </div>
}

export default Mobile
