import React from 'react';
import Button from 'react-bootstrap/Button';
import { useLocation, useNavigate } from 'react-router-dom';


export const ThankYou = () => {
    const location = useLocation();
    const employeeID = location.state.employeeID;
    const navigate = useNavigate();

  return (
    <div style={{  marginTop: 100 }}>
        <h1 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 50, fontFamily: 'fantasy', fontWeight: 'lighter' }}>
            Thanks for your feedback!
        </h1>

        <h6 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 50, fontWeight: 'lighter' }}>
            Your feedback will be combined with others feedback for an overall summary. For individual issues such as HR, Safety, etc. with pressing and immediate needs, please continue to us existing processes.
        </h6>

<div style={{   display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40
    }}>
        <img
              src={require('./assets/tellRexyLogo.png')}
              width="200"
              height="200"
              className="d-inline-block align-top"
              alt="logo"
            />
            </div>

            <div style={{   display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    }}>

        <Button onClick={() => { navigate('/') }} style={{ width: 150, height: 70, fontSize: 20, marginLeft: 10, fontWeight: 'bold', background: 'white', color: 'black' }}>Log Out</Button>

        <Button onClick={() => { navigate('/feedback', { state: { employeeID: employeeID } }) }} variant="warning" style={{ width: 150, height: 70, fontSize: 20, marginLeft: 10, fontWeight: 'bold' }}>Tell Rexy</Button>
        </div>

    </div>
  )
}
