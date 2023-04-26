import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap'

const Header = () => {
  return (
    <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
          <LinkContainer to="/"> 
          <Navbar.Brand href="">ProShop</Navbar.Brand>

          </LinkContainer>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="ml-auto">
                  <LinkContainer to='/cart'>
                    <Nav.Link><i className='fas fa-shopping-cart'></i></Nav.Link>
                  </LinkContainer>

                  <LinkContainer to='/wishlist'>
                    <Nav.Link><i className='fas fa-heart'></i></Nav.Link>
                  </LinkContainer>

                  <LinkContainer to='/signin'>
                    <Nav.Link><i className='fas fa-user'></i></Nav.Link>
                  </LinkContainer>
                    
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
  )
}

export default Header