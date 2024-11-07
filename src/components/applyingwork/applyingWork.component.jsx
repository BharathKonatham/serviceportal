import React from 'react'


const ApplyingWork = ({type,setSection,setSectionCompleted}) => {
  console.log(type)
  const handlClick = ()=>{
    setSection('About Me')
    setSectionCompleted('How does applying work?')
  }
  return (
    <div>
      {type === 'snap' && 'How does Applying Work for SNAP'}
      <button onClick={handlClick}>Get Started</button>
    </div>
  )
}

export default ApplyingWork
