import React from 'react'
import './Web.css'

function Web() {
    return <div className="web">
        <div className="web-option">
            <a href="#projects">
                <i class="fi fi-rr-brush option-icon"></i>Projects
            </a>
        </div>
        <div className="web-option">
            <a href="#skills">
                <i class="fi fi-rr-laptop option-icon"></i>Skills
            </a>
        </div>
        <div className="web-option">
            <a href="#work">
                <i class="fi fi-rr-brush option-icon"></i>Work
            </a>
        </div>
        <div className="web-option">
            <a href="#contact">
                <i class="fi fi-rr-laptop option-icon"></i>Contact
            </a>
        </div>
    </div>
}

export default Web
