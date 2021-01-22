import React from 'react'
import './App.css'

export default function Skills() {
    // stateless functional component to render skills
    return (
        <div class="skills">
            <h2>Skills</h2>
            <div className="skill-list">
                <div className="row">
                    <div className="skill">Python</div>
                    <div className="skill">JS</div>
                </div>
                <div className="row">
                    <div className="skill">C++</div>
                    <div className="skill">React</div>
                </div>
                <div className="row">
                    <div className="skill">Django</div>
                    <div className="skill">HTML,CSS</div>
                </div>
            </div>
        </div>
    )
}
