import React from 'react';
import logo from '../../../assets/logo.png';
import moment from 'moment';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Marquee from "react-fast-marquee";


const Header = () => {





    return (
        <Container className='mt-4 mb-4'>
            <div className="text-center">
                <img src={logo} alt="" />
                <p><small>
                Journalism Without Fear or Favour
                    </small></p>
                    <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-light  p-2 mb-4'>
            <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={50}>
                     I can be a React component, multiple React components, or just some text....multiple React components, or just some text....
                </Marquee>

            </div>



            {/* navbar */}

                  
        </Container>
    );
};

export default Header;