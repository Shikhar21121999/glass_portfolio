import React,{useContext} from 'react'
import About from './About'
import Home from './Home'
import Project from './Project'
import ContactMe from './ContactMe'
import {MyContext} from './App'

export default function Dashboard() {
    // functional component that renders out content depending on which button is pressed
    const {curr_pane}=useContext(MyContext)
    
    // conditonal statement to decide and assign current viewable component
    var curr_comp;
    if (curr_pane==="Home")curr_comp=<Home/>
    else if(curr_pane==="About")curr_comp=<About/>
    else if(curr_pane==="Project")curr_comp=<Project/>
    else if(curr_pane==="ContactMe")curr_comp=<ContactMe/>


    return (
        <div>
            <div className="class">This is a Dashboard area</div>
            {curr_comp}
        </div>
    )
}
