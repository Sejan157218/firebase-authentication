
import React, { useState } from 'react';
import { Card, Col, Container } from 'react-bootstrap';
import Login from '../Login/Login';
import Register from '../Register/Register';
import "./Home.css"


const Home = () => {
    const [isSignUp, setisSignUp] = useState(false)
    return (
        <div className="banner d-flex align-items-center justify-content-center">
            <Container className="d-flex justify-content-center">
                <Card style={{ width: '20rem', backgroundColor: '#022d4169' }} className="px-4 py-2">
                    <Col className="text-color">
                        <div>
                            {isSignUp ? <Login></Login> :
                                <Register></Register>}
                        </div>
                        <div className="mt-3">
                            {isSignUp ? <div className="text-center"><p>Dont't have account? <span className="issignup-clr" onClick={() => setisSignUp(false)}>Sigup Now</span></p></div>
                                :
                                <div className="text-center"><p>Already have account? <span className="issignup-clr" onClick={() => setisSignUp(true)}>Login Now</span></p></div>}
                        </div>
                    </Col>
                </Card>

            </Container>
        </div>

    );
};

export default Home;