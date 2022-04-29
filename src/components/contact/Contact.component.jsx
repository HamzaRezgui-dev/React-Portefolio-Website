import React from 'react'

import emailjs from "emailjs-com"

import './Contact.styles.scss'
export default function Contact() {

  function sendEmail(e){
    e.preventDefault()
    emailjs.sendForm("service_1gxxaqg",
    "template_wwo9suc",
    e.target,
    "jUj7_aVZMH_Rg_iws"
    ).then(res=>
      console.log(res)
      ).catch(err =>
        console.log(err))
      
        e.target.reset()
  }
  return (
    <div className='contact' id='contact'>
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>CONTACT</h2>
        <form onSubmit={sendEmail}>
          <input type="text" name="name" placeholder='Your Name'/>
          <input type="email" name="user_email" placeholder='Your Email'/>
          <textarea name="message" rows="4" placeholder='Message'></textarea>
          <button type='submit' value="Send">Send</button>
        </form>
      </div>
    </div>
  )
}
