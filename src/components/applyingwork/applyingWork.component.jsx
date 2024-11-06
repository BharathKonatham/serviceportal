import React from 'react'


const ApplyingWork = ({type,setPage,setPageCompleted}) => {
  console.log(type)
  const handlClick = ()=>{
    setPage('About Me')
    setPageCompleted('How does applying work?')
  }
  return (
    <div>
      {type === 'snap' && 'How does Applying Work for SNAP'}
      <button onClick={handlClick}>Get Started</button>
    </div>
  )
}

export default ApplyingWork
