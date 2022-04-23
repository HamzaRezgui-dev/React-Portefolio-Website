import React from 'react'

import "./portefolioList.scss"
export default function PortefolioList({id, title, active, setSelected}) {
  return (
    <li className={active? "portefolioList active" : "portefolioList"} onClick={()=>setSelected(id)}>
        {title}
    </li>
  )
}
