import React from 'react'
import './Header.css'

const Header = () => {
    return (
        <div className="header-body">
            <section className="heading">
                <div className="heading-icon">
                    <img src="https://jobs.vahan.co/icon_min.jpg" alt="Job Title"/>
                </div>
                    <div className="heading-title">Job Finder</div>
            </section>
        </div>
    )
}

export default Header;