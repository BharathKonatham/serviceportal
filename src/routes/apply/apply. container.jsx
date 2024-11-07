import React, { useEffect, useState } from 'react'
import ApplyNav from '../../components/applynav/applynav.component'
import { useLocation } from 'react-router-dom'
import { snapData } from '../../data/snapdata/snapData'
import { AboutMe,ApplyingWork } from '../../components'
const Apply = () => {
    const location = useLocation();
    const applyType = location.state?.type;
    const [section,setSection] = useState(undefined)
    const [menu,setMenu] = useState([])
    const [sectionCompleted,setSectionCompleted] = useState(null)
   
    const getComponent = (section = 'How does applying work?')=>{
      switch(section){
        case 'How does applying work?': return <ApplyingWork type={applyType} setSection={setSection} setSectionCompleted={setSectionCompleted}/>
        case 'About Me': return <AboutMe type={applyType} setSection={setSection} setSectionCompleted={setSectionCompleted} />
        default: return ''
      }
    }

    let component = getComponent(section)

    console.log(section) 

    useEffect(() => {
      if (applyType === 'snap') {
        setMenu(snapData);
      }
    }, [applyType]); 

  useEffect(()=>{
    setMenu((prevMenu)=>{
      const newMenu = prevMenu.map((item, index) => {
        if (item.title === sectionCompleted) {
          return { ...item, isDisabled: false, check: true };
        }
        if(item.title === section){
          return { ...item, isDisabled: false };
        }
        return item;
      });
      return newMenu;

    })
  },[section, sectionCompleted])
  return (
    <div className='ApplyContainer'>
      <ApplyNav type={applyType} setSection={setSection} menu={menu}/>
      {component}
    </div>
  )
}

export default Apply
