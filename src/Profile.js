import React from 'react'
import './App.css'
import profil from './img/avatar.jpg'

export default function Profile() {
    // functional component to render a profile component
    return (
        <div class="profile">
            <img src={profil} alt="profil_pic"/>
            <h2>Shikhar Sharma</h2>
            <h3>Full Stack Developer</h3>
        </div>
    )
}
