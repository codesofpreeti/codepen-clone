import React from 'react'
import { AppBar, Toolbar, styled } from '@mui/material';

const Container = styled(AppBar)`
// background: pink;
height: 9vh;
`

const Header = () => {
  const logo ="https://www.vectorlogo.zone/logos/codepen/codepen-icon.svg"
  return (
    
      <Container position='static'>
        <Toolbar>
          <img src={logo} alt="logo" style={{width: 40}}/>
        </Toolbar>
      </Container>
    
  )
}

export default Header;