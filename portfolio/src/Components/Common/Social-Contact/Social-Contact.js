import React from 'react'
import { SocialData } from '../../Data/Social'
import './Social-Contact.css'

function SocialContact() {
    const data = SocialData;
    return <div className="social-contact">
        {data.map((social)=>{
            return(
                <a href={social.link}>
                    <div className="social-icon-div">
                        <img src={social.icon} alt="social media icon" className="social-icon"/>
                    </div>
                </a>
            )
        })}
    </div>
}

export default SocialContact
