import React from "react";
import SocialContact from "../../Common/Social-Contact/Social-Contact";
import "./About.css";

function About() {
  return (
    <div className="about">
      <div className="about-top">
        <div className="about-info">
          Hello There, I am
          <br /> <span className="info-name">Steen Sia</span>.
          <br /> I love experimenting with the web.
        </div>
        <div className="about-photo">
          <img
            src={require("../../../assets/Coding-bro.png").default}
            alt="guy coding"
            className="picture"
          ></img>
        </div>
      </div>
      <div className="about-bottom">
        <SocialContact />
      </div>
    </div>
  );
}

export default About;
