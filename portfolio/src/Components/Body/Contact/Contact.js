import React from "react";
import Separator from "../../Common/Separator/Separator";
import "./Contact.css";
import SocialContact from "../../Common/Social-Contact/Social-Contact";

function Contact() {
  return (
    <div className="contact">
      <Separator />
      <label className="section-title"></label>
      <div className="contact-container">
        <div className="contact-left">
          <p>Want to get in touch? Contact me on any of the platform</p>
          <SocialContact />
        </div>
        <div className="download">
          <a
            href={require("../../../assets/Resume.pdf").default}
            className="download"
          >
            <i class="far fa-cloud-download" />
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
