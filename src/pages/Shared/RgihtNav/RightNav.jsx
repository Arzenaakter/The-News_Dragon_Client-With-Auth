import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGithub,FaGoogle,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import Qzone from '../Qzone/Qzone';
import bgright from '../../../assets/bg.png'

const RightNav = () => {
    return (
        <div >
            <h4>Login With</h4>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Login with Google</Button>
            <Button className='mb-4' variant="outline-secondary"><FaGithub/> Login With Github</Button>

            <div >
                <h4>Find Us On </h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook/> Facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter/> Twitter</ListGroup.Item>
                    <ListGroup.Item><FaInstagram/> Instragram</ListGroup.Item>
                   
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div>
                <img src={bgright} alt="" />
            </div>
        </div>
    );
};

export default RightNav;