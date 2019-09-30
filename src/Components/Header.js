import React from 'react'
import { NavLink } from 'react-router-dom'

const activeStyle = {
    color: '#ccc',
}

export default function Header(){
    return(
        <header className="header">
            <NavLink
                className="btn"
                to='./'
                activeStyle={activeStyle}>
                HOME
            </NavLink>
        
            <NavLink 
                to='/admin' 
                className='btn' 
                activeStyle={activeStyle}>
                ADMIN
            </NavLink>
        </header>
    )
}