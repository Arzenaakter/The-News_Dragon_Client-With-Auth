import React from 'react';
import { useContext } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../../Providers/AuthProvider';

const Login = () => {
    const {loginUser}= useContext(authContext)

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/category/0';

    const handleLogin = e =>{
        e.preventDefault()


        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log("loginemail",email,password);

        loginUser(email,password)
        .then(result =>{
            const loggedUser = result.user;
            console.log("then",loggedUser);
            alert('success')
            form.reset()
            navigate(from,{replace:true})
        })
        .catch(error =>{
            console.log(error);
        })

    }

    return (
        <Container className='w-25 mx-auto mt-4'>
            <h2 className='my-4'>Please Login</h2>
             <Form onSubmit={handleLogin}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" name='email' placeholder="Enter email"  required/>
                  
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" name='password' placeholder="Password" required />
                    </Form.Group>
                    
                    <Button variant="primary" type="submit">
                        Login
                    </Button><br />
                    <Form.Text >
                      Don't have an account ?  <Link to='/register' className='text-danger fw-semibold'>Register</Link>
                       
                        </Form.Text>
                    <Form.Text className="text-success">
                       
                        </Form.Text>
                    <Form.Text className="text-danger">
                       
                        </Form.Text>
             </Form>
          
        </Container>
    );
};

export default Login;