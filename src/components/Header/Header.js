import React from 'react';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
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
                    <img className="img-fluid me-3" src="https://www.onlinelogomaker.com/blog/wp-content/uploads/2017/09/travel-logo-design.jpg" alt="" width="45" height="25" />
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
                        {user?.email && <NavLink className="nav"
                            activeStyle={activeStyle}
                            to="/orders">My Orders
                        </NavLink>
                        }
                        <NavLink className="nav"
                            activeStyle={activeStyle}
                            to="/login">Login
                        </NavLink>
                        {/* dropdown  */}
                        {user?.email &&
                            <Dropdown className="dropdown-container" id="">
                                <Dropdown.Toggle variant="dark" id="dropdown-basic">
                                    Admin
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    {user?.email && <NavLink id="RouterNavLink" className="dropdown-nav"
                                        activeStyle={activeStyle}
                                        to="/manageAllOrders">
                                        <Dropdown.Item href="#/action-1">Manage All Orders</Dropdown.Item>
                                    </NavLink>
                                    }

                                    {user?.email && <NavLink id="RouterNavLink" className="dropdown-nav"
                                        activeStyle={activeStyle}
                                        to="/addTourPackage">
                                        <Dropdown.Item href="#/action-1">Add Tour Package</Dropdown.Item>
                                    </NavLink>
                                    }

                                </Dropdown.Menu>

                            </Dropdown>
                        }

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