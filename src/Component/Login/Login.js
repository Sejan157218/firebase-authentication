import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Login.css'

const Login = () => {
    return (
        <div className="text-center">
            <h1 className="pb-3">Login</h1>
            <div>
                <div className="input-icons">
                    <i className="fa fa-user icon"></i>
                    <input className="input-field w-100 h-50 mb-2" type="text" />
                    <br />
                    <i className="fas fa-lock icon"></i>
                    <input className="input-field w-100 h-50" type="password" name="password" placeholder="Password" />
                </div>
                <p>Forget Password ?</p>
                <Button className="w-100 button-login fb-bg">Login</Button>
                <p className="pt-3">Or Login With</p>
                <Row>
                    <Col sm={12} className="mb-2"><Button className="button-login me-3 google-bg"> <i class="fab fa-google me-2"></i>Google</Button>
                        <Button className="button-login fb-bg"><i class="fab fa-facebook-f me-2"></i>Facebook</Button></Col>
                    <Col sm={12}><Button className="button-login me-3 git-bg"><i class="fab fa-github me-2"></i>Github</Button>
                        <Button className="button-login lin-bg"><i class="fab fa-linkedin-in me-2"></i>Linkedin</Button></Col>
                </Row>
            </div>
        </div>
    );
};

export default Login;