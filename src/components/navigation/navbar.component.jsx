import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './navbar.styles.scss'
const Navbar = () => {

    return (
        <div className='AppContainer'>
            <div className='navContainer'>
                <div className='navItems'>
                    <Link  className='nav-link' to='/'> MyInfo </Link>
                    <Link  className='nav-link' to='/activities'> Activities </Link>
                    <Link  className='nav-link' to='/communication'> Communication </Link>
                </div>
                <div className='navFooter'>
                    <a href=''>contact us</a>
                </div> 
            </div>
            <Outlet />
        </div>
       
    )
}

export default Navbar
