import React from 'react'
import './App.css'

export default function ContactMe() {
    // functional component render Get in touch page
    // in this we basically render out connection links for communication
    return (
        <div class="component">
            <h1>Get in Touch</h1>
            <div className="conn-link">
                
                <div className="row icn">
                    <i class="fa fa-whatsapp" id="whatsappicn"></i>
                    <h2 class="icon-text" >9810618237</h2>
                </div>
                <div className="row icn">
                    <i class="fa fa-google-plus" id="googleicn"></i>
                    <h2 class="icon-text" >shikhar21121999@gmail.com</h2>
                </div>
                <div className="row icn">
                    <i class="fa fa-linkedin" id="linkedinicn"></i>
                    <a class="icon-text" href="https://www.linkedin.com/in/shikhar-sharma-15a934170/">Linkedin</a>
                </div>
                <div className="row icn">
                    <i class="fa fa-github" id="githubicn"></i>
                    <a class="icon-text" href="https://github.com/Shikhar21121999">Github</a>
                </div>
                <div className="row icn">
                    <i class="fa fa-youtube-play" id="youtubeicn"></i>
                    <a class="icon-text" href="https://www.youtube.com/channel/UCqjcmehldBOz35xUTEr71dg">Youtube</a>
                </div>
            </div>
        </div>
    )
}
