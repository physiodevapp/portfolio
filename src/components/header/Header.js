import React from 'react'

function Header({ title, children }) {
  return (
    <>
      <div>{title}</div>
      {children}
    </>
  )
}

Header.defaultProps = {
  title: 'uh...Header?'
}

export default Header