import React from 'react'
import { StyledHeader } from './Header.styled'

function Header({ title, children }) {
  return (
    <>
      <StyledHeader className=''>
        <h3>{title}</h3>
        {children}
      </StyledHeader>
    </>
  )
}

Header.defaultProps = {
  title: 'uh...Header?'
}

export default Header