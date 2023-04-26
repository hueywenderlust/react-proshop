import React from 'react'
import {Navbar, Container, Nav} from 'react-bootstrap';


const Header = () => {
  return (
    <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
        <Container>
            <Navbar.Brand href="#home">ProShop</Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className="justify-content-end">
                <Nav className="ml-auto">
                    <Nav.Link href="#cart"><i className='fas fa-shopping-cart'></i></Nav.Link>
                    <Nav.Link href="#wishlist"><i className='fas fa-heart'></i></Nav.Link>
                    <Nav.Link href="#signin"><i className='fas fa-user'></i></Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
  )
}

export default Header