import React from 'react'
import Profile from './Profile'
import LinkPane from './LinkPane'
export default function Sidebar() {
    // functional component to make a side bar
    return (
        <div className="sidebar">
            <Profile/>
            <LinkPane/>
        </div>
    )
}
