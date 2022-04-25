import React, { useEffect, useRef } from 'react'
import { init } from 'ityped'
import './Intro.styles.scss'

export default function Intro() {

  const textRef = useRef();

  
  useEffect(()=>{ 
    init(textRef.current, {
      showCursor: true,
      backDelay:1500,
      backSpeed: 50,
      strings: ["Developer","Designer","Content Creator"]
    });
  },[]);
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
          <h3>Freelance <span ref={textRef}></span></h3>
        </div>
        <a href="#portefolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
