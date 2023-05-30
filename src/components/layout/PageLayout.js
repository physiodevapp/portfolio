import React from 'react'
import Header from '../header/Header'
import './PageLayout.css';
import Navbar from '../navbar/Navbar'

function PageLayout({children}) {
  return (
    <>
      <div className='page-layout'>
        <Header >
          <Navbar/>
        </Header>
        <div className='container'>
          {children}
        </div>
      </div>
    </>
  )
}

export default PageLayout