import React, { useEffect, useState } from 'react'
import PortefolioList from '../portefolioList/PortefolioList'

import { featuredPortfolio, webPortfolio, mobilePortfolio, designPortfolio, contentPortfolio } from '../../data'

import './Portefolio.styles.scss'


export default function Portefolio() {
  

  const [selected,setSelected] = useState("featured")
  const [data,setData] = useState([])
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

  useEffect(()=>{
    switch (selected){
      case "featured":
        setData(featuredPortfolio)
        break;

      case "web":
        setData(webPortfolio)
        break;

      case "mobile":
        setData(mobilePortfolio)
        break;

      case "design":
        setData(designPortfolio)
        break;

      case "content":
        setData(contentPortfolio)
        break;
      default:
        break;
    }


  },[selected])

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
          {data.map(d=>(
              <div className="item">
              <img src={d.img} alt="" />
              <h3>{d.title}</h3>
            </div>
          ))}    
        </div>
    </div>
  )
}
