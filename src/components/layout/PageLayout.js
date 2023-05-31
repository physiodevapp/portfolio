import React from 'react';
import Header from '../header/Header';
import './PageLayout.css';
import Navbar from '../navbar/Navbar';
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme, GlobalStyles } from '../themes/Themes';
import { StyledPageLayout } from './PageLayout.styled'

function PageLayout({ children }) {
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <GlobalStyles />
        {/* <div className='page-layout'>
        </div> */}
          <StyledPageLayout className='container d-flex flex-col'>
            <Header title={'Portfolio'} >
              <Navbar />
            </Header>
            {/* <div className=''>
              {children}
            </div> */}
          </StyledPageLayout>
      </ThemeProvider>
    </>
  )
}

export default PageLayout