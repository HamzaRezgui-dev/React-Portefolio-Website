import React from 'react'

import './Intro.styles.scss'

export default function Intro() {
  return (
    <div className='intro' id='intro'>
      <div className="left">
        <div className="imgContainer">
          <img src='assets/gheryel.png' alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, I'm</h2>
          <h1>Hamza Rezgui</h1>
          <h3>Freelance <span></span></h3>
        </div>
        <a href="#portefolio">
          <img src="assets/downarrow.png" alt="" />
        </a>
      </div>
    </div>
  )
}
