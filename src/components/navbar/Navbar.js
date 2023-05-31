import React from 'react'
import { StyledNavbar } from './Navbar.styled'

function Navbar() {
  return (
    <>
      <StyledNavbar>
        <h5 className='pe-3'>About Me</h5>
        <h5 className='pe-3'>Projects</h5>
        <h5 className='pe-3'>Skills</h5>
        <h5 className='pe-3'>Education</h5>
        <h5 className='pe-3'>Contact</h5>
      </StyledNavbar>
    </>
  )
}

export default Navbar