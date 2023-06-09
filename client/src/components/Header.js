import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navbar, Container, Nav, NavDropdown} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'

const Header = () => {
  const dispatch = useDispatch()

  // const userLogin = useSelector((state) => state.userLogin)
  // const { userInfo } = userLogin

  const userInfo = JSON.parse(localStorage.getItem('userInfo'));

  console.log('userinfoin header:', userInfo);


  const logoutHandler = () => {
    dispatch(logout())
  }

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
                 {!userInfo.isAdmin ? 

                  (<LinkContainer to='/cart'>
                    <Nav.Link><i className='fas fa-shopping-cart'></i></Nav.Link>
                  </LinkContainer>) : (
                  <></>) 
                
                }

                 {userInfo && !userInfo.isAdmin ? 
                 (
                    <NavDropdown title={userInfo.name} id='username'>
                      <LinkContainer to='/profile'>
                        <NavDropdown.Item>Profile</NavDropdown.Item>
                      </LinkContainer>
                      <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                    
                  )
                 : userInfo && userInfo.isAdmin ? 
                (
                  <NavDropdown title={userInfo.name} id='adminmenu'>
                    <LinkContainer to='/admin/userlist'>
                      <NavDropdown.Item>Users</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/productlist'>
                      <NavDropdown.Item>Products</NavDropdown.Item>
                    </LinkContainer>
                    <LinkContainer to='/admin/orderlist'>
                      <NavDropdown.Item>Orders</NavDropdown.Item>
                    </LinkContainer>
                     <NavDropdown.Item onClick={logoutHandler}>
                        Logout
                      </NavDropdown.Item>
                  </NavDropdown>
                )
                : <LinkContainer to='/login'>
                      <Nav.Link>
                        <i className='fas fa-user'></i> Sign In
                      </Nav.Link>
                    </LinkContainer> 
                  }
              

                 
              
                    
                </Nav>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    </header>
  )
}

export default Header