import React from 'react'
import { Routes } from 'react-router-dom'
import { snapData } from '../../data/snapdata/snapData'
import ApplyingWork from '../applyingwork/applying.component'
const ApplyNav = ({type}) => {
  console.log(type)
  let menu = []
  if(type === 'snap'){
    menu = snapData
  }
  const getComponent = (item='How does applying work?')=>{
    switch(item){
      case 'How does applying work?': return <ApplyingWork />
      default: return ''
    }
  }
  let component = getComponent()

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
    {component}
   </div>
  )
}

export default ApplyNav
