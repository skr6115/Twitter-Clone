import React from "react";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
const Header=(props)=>{
      return (
        <Navbar style={{backgroundColor:'lightblue', height:'50px'}}>
          <Container>
            <Navbar.Brand href="#home">Twitter Clone</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse style={{display:'flex', justifyContent:'flex-end',alignItems:'flex-end'}}  >
              <Navbar.Text>
                Signed in as: <a href="#login">{props.username}</a>
              </Navbar.Text>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      );
   
}

export default Header;