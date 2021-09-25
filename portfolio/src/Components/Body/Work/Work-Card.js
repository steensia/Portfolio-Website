import React from "react";
import "./Work-Card.css";

function WorkCard({ item }) {
  return (
    <div className="work-card">
      <img src={item.logo} className="work-logo" alt="logo of company" />
      <div className="work-info">
        <label className="work-name">{item.company}</label>
        <div className="work-date">
          <label>{item.startDate}</label> - <label>{item.endDate}</label>
        </div>
      </div>
      <div className="work-desc">
        <p>{item.description}</p>
      </div>
    </div>
  );
}

export default WorkCard;
