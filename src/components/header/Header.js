import React from 'react'
import { StyledHeader } from './Header.styled'

function Header({ title, children }) {
  return (
    <>
      <StyledHeader className=''>
        {title}
        {children}
      </StyledHeader>
    </>
  )
}

Header.defaultProps = {
  title: 'uh...Header?'
}

export default Header