import React from 'react'

const ApplyNav = ({type,menu}) => {

  console.log(type)
  
 

  const menuClickHandler = (item)=>{

  }

  return (
   <div className='applyNavContainer'>
    <div className='navList'>
      <ul>
        {menu.map((item)=>(
          <li key={item.title}>{item.check? <span>D</span>:''}
            <button disabled={item.isDisabled} onClick={()=> menuClickHandler(item)}>{item.title}</button>
          </li>
        ))}
      </ul>
    </div>
    
   </div>
  )
}

export default ApplyNav
