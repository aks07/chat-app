import React from 'react'
import './Header.css'

const Header = ({changeTab, currentTab}) => {
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
                <button className="chat" id={currentTab === 0? 'focus': ''} onClick={() => changeTab(0)}>CHAT</button>
                <button className="my-job" id={currentTab === 1? 'focus': ''} onClick={() => changeTab(1)}>MY JOB</button>
                <button className="profile" id={currentTab === 2? 'focus': ''} onClick={() => changeTab(2)}>PROFILE</button>
            </div>
        </div>
    )
}

export default Header;