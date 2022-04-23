import React from 'react'

import {Person, Mail} from '@material-ui/icons'

import './Topbar.styles.scss'

export default function Topbar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">

            <div className="left">
                <a href="#intro" className='logo'>.Portefolio</a>
                <div className="itemContainer">
                    <Person className='icon'/>
                    <span>+216 96143112</span>
                </div>
                <div className="itemContainer">
                    <Mail className='icon'/>
                    <span>hamzarezgui.education@gmail.com</span>
                </div>
            </div>

            <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className='line1'></span>
                    <span className='line2'></span>
                    <span className='line3'></span>
                </div>
            </div>

        </div>
    </div>
  )
}
