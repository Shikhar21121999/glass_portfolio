import React,{useContext} from 'react'
import './App.css'
import {MyContext} from './App'

export default function LinkPane() {
    // functional component to render a LinkPane
    const {setcurr_pane}=useContext(MyContext)

    return (
        <div class="linkpane">
            <button onClick={() => setcurr_pane("Home")}>Home</button>
            <button onClick={() => setcurr_pane("About")}>About</button>
            <button onClick={() => setcurr_pane("Project")}>Project</button>
            <button onClick={() => setcurr_pane("ContactMe")}>Contact Me</button>
        </div>
    )
}
