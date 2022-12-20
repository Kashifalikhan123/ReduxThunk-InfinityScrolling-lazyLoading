import React from 'react'
import { useLocation } from "react-router-dom";
import "./DetailPage.css"
export default function DetailPage() {
    const {state}=useLocation()
  

  return (
    <>
    <div className="detail-container">
     
     <div className='right'>
       <img src={state?.data?.media} alt="not image found"/>
     </div>
     <div className='left'>{state?.data?.summary}</div>
    </div>
     <div className='bottom'>{state?.data?.title}</div>
</>
  )
}
