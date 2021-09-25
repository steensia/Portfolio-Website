import React from 'react'
import './Web.css'

function Web() {
    return <div className="web">
        <div className="web-option">
            <a href="#projects">
                <i class="far fa-tasks option-icon"></i>Projects
            </a>
        </div>
        <div className="web-option">
            <a href="#skills">
                <i class="far fa-laptop option-icon"></i>Skills
            </a>
        </div>
        <div className="web-option">
            <a href="#work">
                <i class="far fa-briefcase option-icon"></i>Work
            </a>
        </div>
        <div className="web-option">
            <a href="#contact">
                <i class="far fa-user option-icon"></i>Contact
            </a>
        </div>
    </div>
}

export default Web
