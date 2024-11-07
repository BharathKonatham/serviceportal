import React from 'react'
import MyInfo from './myInfo/myinfo.component'
import ContactInfo from './contactinfo/contactinfo.component'
import ExpediatedSnap from './expediatedsnap/expediatedsnap.component'
import Accommodations from './accommodations/accommodations.component'
import MoreAboutMe from './moreaboutme/moreaboutme.component'

const AboutMe = ({type,setSection,setSectionCompleted}) => {
    
    console.log(type)
    const aboutMeComps = [MyInfo, ContactInfo,ExpediatedSnap,Accommodations,MoreAboutMe]
    
    const handlClick = ()=>{
    //   setPage('My Household')
    //   setPageCompleted('About Me')
    }
  return (
    <div>
     {React.createElement(aboutMeComps[0])}
    </div>
  
  )
}

export default AboutMe
