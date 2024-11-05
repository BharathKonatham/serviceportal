import React from 'react'
import ApplyNav from '../../components/applynav/applynav.component'
import { useLocation } from 'react-router-dom'
const Apply = () => {
    const location = useLocation();
    const applyType = location.state?.type;
    console.log(applyType)
   
  return (
    <div className='ApplyContainer'>
      <ApplyNav type={applyType}/>
    </div>
  )
}

export default Apply
