import React from 'react'
import './myinfo.styles.scss'
import { useNavigate } from 'react-router-dom'
const MyInfo = () => {
    const navigate = useNavigate()
    const applybuttons = ['SNAP','TANF','SNAP and TANF']
    const buttonClick = (applyType)=>{
        if(applyType === 'SNAP and TANF'){
          applyType = 'snap&tanf'
        }
       const type = applyType.toLowerCase()
        navigate('/apply',{state:{type}})   
    }
  return (
    <div className='myInfoContainer'>
        <div className='apply'>
            {applybuttons.map((item)=>(<button onClick={()=>buttonClick(item)} key={item} className={item}>Apply for {item}</button>))}
        </div>
    </div>
  )
}

export default MyInfo
