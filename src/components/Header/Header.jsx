import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="header-body">
            <div className="heading">
                <div className="heading-icon">
                    <img src="https://jobs.vahan.co/icon_min.jpg" alt="Job Title" />
                </div>
                <div className="heading-title-body">
                    <div className="header-title">
                        Job Finder
                       </div>
                </div>
            </div>
            <div className="menu">
                <button className="chat">CHAT</button>
                <button className="my-job">MY JOB</button>
                <button className="profile">PROFILE</button>
            </div>
        </div>
    )
}

export default Header;