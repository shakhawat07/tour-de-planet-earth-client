import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth();

    // NavLink activeStyle 
    const activeStyle = {
        fontWeight: "bold",
        color: "tomato",
        background: "black"
    };
    return (
        <Navbar bg="black" variant="dark" expand="lg" >
            <Container fluid>
                <Navbar.Brand className="fs-1 fw-bolder ms-2">
                    <img className="img-fluid me-3" src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/09/travel-logo-design.jpg" alt="" width="55" height="30" />
                    <span className="fs-5">Tour De Planet Earth</span>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="d-flex align-items-end justify-content-end ms-auto">
                        <NavLink className="nav"
                            activeStyle={activeStyle}
                            to="/home">Home
                        </NavLink>
                        <NavLink className="nav"
                            activeStyle={activeStyle}
                            to="/tourPackages">Packages
                        </NavLink>
                        <NavLink className="nav"
                            activeStyle={activeStyle}
                            to="/tourCategories">Categories
                        </NavLink>
                        <NavLink className="nav"
                            activeStyle={activeStyle}
                            to="/about">About
                        </NavLink>
                        <NavLink className="nav"
                            activeStyle={activeStyle}
                            to="/orders">My Orders
                        </NavLink>
                        <NavLink className="nav"
                            activeStyle={activeStyle}
                            to="/login">Login
                        </NavLink>

                        <NavDropdown className="fs-4 bg-black" title="Admin" id="">
                            <NavDropdown.Item >
                                {user?.email && <NavLink className="nav"
                                    activeStyle={activeStyle}
                                    to="/addTourPackage">Add Tour Package
                                </NavLink>
                                }
                            </NavDropdown.Item>
                            <NavDropdown.Item >
                                {user?.email && <NavLink className="nav"
                                    activeStyle={activeStyle}
                                    to="/manageAllOrders">All Orders
                                </NavLink>
                                }
                            </NavDropdown.Item>

                        </NavDropdown>
                        {/* showing userName after login */}
                        <span className="text-white mb-1">{user.displayName}</span>
                        {/* log out button show */}
                        {user?.email && <button className="ms-3 text-white btn btn-black border border-white" onClick={logOut}>log out</button>}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;