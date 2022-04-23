import React, { useState } from 'react'
import PortefolioList from '../portefolioList/PortefolioList'


import './Portefolio.styles.scss'


export default function Portefolio() {
  

  const [selected,setSelected] = useState("featured")
  const list = [
    {
      id:"featured",
      title: "Featured",
    },
    {
      id:"web",
      title: "Web App",
    },
    {
      id:"mobile",
      title: "Mobile App",
    },
    {
      id:"design",
      title: "Design",
    },
    {
      id:"content",
      title: "Content",
    },
  ]
  return (
    <div className='portefolio' id='portefolio'>
      <h1>Portefolio</h1>
      <ul>
        {
          list.map((item)=>(
            <PortefolioList 
            title={item.title} 
            active={selected === item.id} 
            setSelected={setSelected} 
            id={item.id}/>
          ))
        }
      </ul>
        <div className="container">
          <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJXhSsGK4Wims2gnnF2L7sA4aJNoUK8cIcN8kONSMdvBlnNVS" alt="" />
            <h3>Banking App</h3>
          </div>

          <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJXhSsGK4Wims2gnnF2L7sA4aJNoUK8cIcN8kONSMdvBlnNVS" alt="" />
            <h3>Banking App</h3>
          </div>

          <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJXhSsGK4Wims2gnnF2L7sA4aJNoUK8cIcN8kONSMdvBlnNVS" alt="" />
            <h3>Banking App</h3>
          </div>

          <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJXhSsGK4Wims2gnnF2L7sA4aJNoUK8cIcN8kONSMdvBlnNVS" alt="" />
            <h3>Banking App</h3>
          </div>

          <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJXhSsGK4Wims2gnnF2L7sA4aJNoUK8cIcN8kONSMdvBlnNVS" alt="" />
            <h3>Banking App</h3>
          </div>

          <div className="item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbJXhSsGK4Wims2gnnF2L7sA4aJNoUK8cIcN8kONSMdvBlnNVS" alt="" />
            <h3>Banking App</h3>
          </div>
        </div>
    </div>
  )
}
