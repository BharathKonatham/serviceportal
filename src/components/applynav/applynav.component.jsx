import React from 'react'
import { Routes } from 'react-router-dom'
import { snapData } from '../../data/snapdata/snapData'

const ApplyNav = ({type,menu}) => {

  console.log(type)
  
 

  const menuClickHandler = (item)=>{

  }

  return (
   <div className='applyNavContainer'>
    <div className='navList'>
      <ul>
        {menu.map((item)=>(
          <li>{item.check? <span>D</span>:''}
            <button disabled={item.isDisabled} onClick={()=> menuClickHandler(item)}>{item.title}</button>
          </li>
        ))}
      </ul>
    </div>
    
   </div>
  )
}

export default ApplyNav
