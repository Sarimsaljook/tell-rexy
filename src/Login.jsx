import React from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [employeeID, setEmployeeID] = useState(['']);
    const navigate = useNavigate();

  return (
    <div >
        <Navbar bg="dark" data-bs-theme="dark" >
        <Container style={{ alignItems: 'center',justifyContent: 'center' }}>
          <Navbar.Brand  href="#home">
            <img
              src={require('./assets/tellRexyNavbarLogo.png')}
              width="180"
              height="70"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div>

       <img
              src={require('./assets/tellRexyLoginIMG.png')}
              width="1000"
              height="500"
              style={{ marginLeft: 250 }}
            /> 

            <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control onChange={(e) => setEmployeeID(e.target.value)} style={{ width: 300, marginLeft: 599, marginTop: 2 }} type="email" placeholder="Employee ID" />
      </Form.Group>
    </Form> 

    <Button onClick={() => {
       navigate('/feedback', { state: { employeeID: employeeID } })
    }} variant="warning" style={{ width: 300, marginLeft: 599, marginTop: 2, fontSize: 25, fontFamily: 'fantasy' }} >Log in</Button>

    </div>

    </div>
  )
}

export default Login