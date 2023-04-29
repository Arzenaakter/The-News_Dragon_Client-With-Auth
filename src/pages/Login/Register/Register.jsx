import React, { useState } from 'react';

import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { authContext } from '../../../Providers/AuthProvider';


const Register = () => {
    const {createUser} = useContext(authContext)
 const [accepted, setAccepted] = useState(false)

 const handleAccepted = e =>{
    setAccepted(e.target.checked);
 }

    const handleCreteUser = (e) =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const name = form.name.value;
        const photo = form.photo.value;
        // console.log(email,password,name,photo);

        createUser(email,password)
        .then(result =>{
            const createdUser = result.user;
            console.log(createdUser);
        })
        .catch(error =>{
            console.log(error);
        })


    }


    return (
        <Container className='w-25 mx-auto mt-4'>
        <h2 className='my-4'>Please Register</h2>
         <Form onSubmit={handleCreteUser}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter Name"  required/>
              
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo URL</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter Photo URL"  required/>
              
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email"  required/>
              
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check 
                    onClick={handleAccepted}
                    type="checkbox" 
                    label={<>Accept <Link to='/terms'>Terms & Conditions</Link></>}
                     name='accept' />

                </Form.Group>
                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button><br />
                <Form.Text >
                 Allready have an account ?  <Link to='/login' className='text-danger fw-semibold'>Login</Link>
                   
                    </Form.Text>
                <Form.Text className="text-success">
                   
                    </Form.Text>
                <Form.Text className="text-danger">
                   
                    </Form.Text>
         </Form>
      
    </Container>
    );
};

export default Register;