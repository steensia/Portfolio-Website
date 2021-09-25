import React from "react";
import "./Work.css";
import Separator from "../../Common/Separator/Separator";
import { WorkData } from "../../Data/Work";
import WorkCard from "./Work-Card";

function Work() {
  const data = WorkData;
  return (
    <div className="work">
      <Separator />
      <label className="section-title">Work</label>
      <div className="work-list">
        {data.map((company) => {
          return <WorkCard item={company} />;
        })}
      </div>
    </div>
  );
}

export default Work;
