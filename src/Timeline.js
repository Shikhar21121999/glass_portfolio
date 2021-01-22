import React from 'react'
import './App.css'

export default function Timeline() {
    // stateless functional component to render timeline of education
    return (
        <div class="timeline">
            <h2>Education</h2>
            <ol>
                <li>
                    <div className="time-el">
                        <h3>B.Tech in IT</h3>
                        <p>MSIT Janakpuri East Delhi</p>
                        <p>2018-2022</p>
                    </div>
                </li>
                <li>
                    <div className="time-el">
                        <h3>High-school</h3>
                        <p>Vivekanand School Anand Vihar Delhi</p>
                        <p>May 2018</p>
                    </div>
                </li>
            </ol>
        </div>
    )
}
