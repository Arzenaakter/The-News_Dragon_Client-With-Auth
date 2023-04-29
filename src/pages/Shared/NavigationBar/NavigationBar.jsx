import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { useContext } from 'react';
import { authContext } from '../../../Providers/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const NavigationBar = () => {


    const {user,logOut} = useContext(authContext)

    const handleLogout =()=>{
        logOut()
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
        .catch(error =>{
            console.log(error);
        })
    }


    return (
        <Container className='my-4'>

                <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                        <Container>
                                
                                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                                <Navbar.Collapse id="responsive-navbar-nav">
                                <Nav className="mx-auto d-flex gap-2">
                                  
                                     <Link className="text-muted text-decoration-none" to='/category/0'>Home</Link>
                               
                                    <Link className="text-muted text-decoration-none"  to="/about">About</Link>
                                    <Link className="text-muted text-decoration-none"  to="/career">Career</Link>
                                    
                                </Nav>
                                <Nav>
                                  { 
                                  user &&<FaUserCircle style={{fontSize: '2rem'}}></FaUserCircle>
                                  }

                                    
                                    
                                    {user?
                                        <Button variant="secondary" onClick={handleLogout}>LogOut</Button>:
                                        <Link to='/login'><Button variant="secondary">Login</Button></Link>
                                        }
                                 
                                </Nav>
                                </Navbar.Collapse>
                            </Container>
                     </Navbar>
            
        </Container>
    );
};

export default NavigationBar;