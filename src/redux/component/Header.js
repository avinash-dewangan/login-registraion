import React from 'react'
import { Button, Form, Nav, NavDropdown, FormControl, Navbar } from 'react-bootstrap';
import { Link, Route } from 'react-router-dom'
import { LogoutUser } from '../actions/userAction'
import { useDispatch, useSelector } from 'react-redux'
import UserProfile from './UserProfile';

function Header(props) {
    const dispatch = useDispatch();
    const userDetials = useSelector(state => state.user.userDetials);
    return (
        <>
            <Navbar bg="light" expand="lg" fixed="top">
                <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">Link</Nav.Link>
                        <NavDropdown title={userDetials.username} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>


                            <Link to="/userprofile" className="dropdown-item" >View Profile</Link>
                            <Link to="/" className="dropdown-item" onClick={() => dispatch(LogoutUser())}>Logout</Link>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-success">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            <Route path="/userprofile" component={UserProfile}></Route>
        </>
    )
}


export default Header
