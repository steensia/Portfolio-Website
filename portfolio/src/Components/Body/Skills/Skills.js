import React from 'react'
import Separator from '../../Common/Separator/Separator'
import { SkillsData } from '../../Data/Skills'
import SkillCard from './Skill-Card';
import './Skills.css'

function Skills() {
    const data = SkillsData;
    return <div className="skills">
        <Separator/>
        <label className="section-title">Skills</label>
        <div className="skills-container">
            {data.map((skills) => {
                return (
                    <div className="skills-section">
                        <label className="skills-section-title">{skills.type}</label>
                        <div className="skills-list">
                            {skills.list.map((skill) => {
                                return <SkillCard skill={skill}/>
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    </div>
}

export default Skills
