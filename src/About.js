import React from 'react'
import Timeline from './Timeline'
import Skills from './Skills'
import './App.css'

export default function About() {
    // functional component to render About page
    return (
        <div class="component about" >
            <h1>About</h1>
            <h2>Shikhar Sharma</h2>
            <h3>Full Stack Developer</h3>
            <p>I am a passionate software developer persuing B.Tech from MSIT in Information Technology. I am currently in 3rd year and actively looking for internship opportunities to get industry exposure.Also open to freelancing projects in web-development</p>
            <p>I am highly skilled at programming in Python, Java Script, C++ and comfortable with JAVA, C.
Proficient in HTML (markup language) and CSS (style sheet Language). Highly skilled in data structure and Algorithm. Experienced in working with frameworks like Django, Django REST Framework, React, Bootstrap. Worked with databases such as Mysql and Mongo DB. Comfortable in working with both Windows and Linux.Other skills include writing industry level code in PEP 8(Python) and ES-6(java script), Fast typing speed of about 65wpm, Proficient Communication skills etc. </p>
            <div className="lower-block">
                <Timeline/>
                <Skills/>
            </div>
        </div>
    )
}
