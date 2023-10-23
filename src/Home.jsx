import React, { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import { database } from './firebase';
import { ref, set } from 'firebase/database';

import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';


const Home = () => {
    const location = useLocation();
    const employeeID = location.state.employeeID;
    const navigate = useNavigate();

    const [feedback, setFeedback] = useState('');

    const {
        transcript,
        listening,
        resetTranscript,
        browserSupportsSpeechRecognition
      } = useSpeechRecognition();
    
      if (!browserSupportsSpeechRecognition) {
       alert('YOUR BROSWER DOSENT SUPPORT SPEECH REOCNGNTION!')
      }

      const handleInputChange = (e) => {
        setFeedback(e.target.value);
      };

      useEffect(() => {
        if (listening && transcript) {
          setFeedback(transcript);
        }
      }, [transcript, listening]);
    

  return (
    <div>
          <Navbar bg="dark" data-bs-theme="dark" >
        <Container style={{ alignItems: 'center',justifyContent: 'center' }}>
          <Navbar.Brand  href="#home">
            <img
              src={require('./assets/tellRexyNavbarLogo.png')}
              width="190"
              height="70"
              className="d-inline-block align-top"
              alt="logo"
            />
          </Navbar.Brand>
        </Container>
      </Navbar>

      <div style={{ backgroundImage: `url(${require('./assets/tellRexyFeedbackPageBackgroundIMG.png')})`, backgroundSize: 'cover' }}>
      <img
              src={require('./assets/tellRexyLogo.png')}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="logo"
              style={{ marginLeft: 100, marginTop: 50 }}
            />

      <img
              src={require('./assets/tellRexyFeedbackPageIMG.png')}
              width="400"
              height="300"
              className="d-inline-block align-top"
              alt="logo"
              style={{ marginLeft: 40, marginTop: 50, borderRadius: 20 }}
            />    
      </div>

      <div style={{ backgroundImage: `url(${require('./assets/tellRexyFeedbackPageBackgroundIMG.png')})`, backgroundSize: 'cover' }}>
      <img
              src={require('./assets/voiceRecordIcon.png')}
              width="50"
              height="50"
              className="d-inline-block align-top"
              alt="logo"
              style={{ marginLeft: 100, marginTop: 170 }}
              onClick={() => listening ? SpeechRecognition.stopListening() : SpeechRecognition.startListening()}
            />

<Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <Form.Control value={feedback} onChange={handleInputChange} style={{ width: 1000, marginLeft: 170, marginTop: -48, height: 50 }} type="email" placeholder="Bird Happy birthday to you" />
      </Form.Group>
    </Form> 

    <Button onClick={() => {
        set(ref(database, 'Employee Feeback/' + employeeID + '/' + Date.now()), {
            feedback: feedback
          }).then(() => navigate('/thankyou', { state: { employeeID: employeeID } }))
          .catch((err) => {
            alert("Oops Something went wrong.");
            console.log(err);
          });
    }} variant="warning" style={{ width: 100, height: 50, fontSize: 17, fontFamily: '', marginLeft: 1190, marginTop: -110, fontWeight: 'bold' }} >Submit</Button>
      </div>

    </div>
  )
}

export default Home