import React, { useEffect, useState } from 'react'
import ApplyNav from '../../components/applynav/applynav.component'
import { useLocation } from 'react-router-dom'
import { snapData } from '../../data/snapdata/snapData'
import ApplyingWork from '../../components/applyingwork/applyingWork.component'
const Apply = () => {
    const location = useLocation();
    const applyType = location.state?.type;
    const [page,setPage] = useState(undefined)
    const [menu,setMenu] = useState([])
    const [pageCompleted,setPageCompleted] = useState(null)
   
    console.log(applyType)
   
    const getComponent = (page = 'How does applying work?')=>{
      switch(page){
        case 'How does applying work?': return <ApplyingWork type={applyType} setPage={setPage} setPageCompleted={setPageCompleted}/>
        default: return ''
      }
    }
    let component = getComponent(page)

  console.log(page) 

  useEffect(() => {
    if (applyType === 'snap') {
      setMenu(snapData);
    }
  }, [applyType]); 

  useEffect(()=>{
    setMenu((prevMenu)=>{
      const newMenu = prevMenu.map((item, index) => {
        if (item.title === pageCompleted) {
          return { ...item, isDisabled: false, check: true };
        }
        return item;
      });
      return newMenu;

    })
  },[pageCompleted])
  return (
    <div className='ApplyContainer'>
      <ApplyNav type={applyType} setPage={setPage} menu={menu}/>
      {component}
    </div>
  )
}

export default Apply
