import Button from '@restart/ui/esm/Button';
import React, { useState } from 'react';
import { Col, Row } from 'react-bootstrap';
import initializeAuthentication from '../../Firebase/firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup, GithubAuthProvider, FacebookAuthProvider, createUserWithEmailAndPassword } from "firebase/auth";




initializeAuthentication();


const Register = () => {

    const [email, SetEmail] = useState('');
    const [password, SetPassword] = useState('');
    const [user, setUser] = useState({});
    const [error, SetError] = useState('');

    const googleProvider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();
    const facebookProvider = new FacebookAuthProvider();

    // set email and password value
    const handlerEmailChange = e => {
        SetEmail(e.target.value)

    }
    const handlerEmailpassword = e => {
        SetPassword(e.target.value)

    }

    const auth = getAuth();

    const SignUpGoogle = () => {

        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                const userInfo = {
                    name: user.displayName,
                    email: user.email,
                    img: user.photoUR,
                }
                setUser(userInfo);
            }).catch((error) => {
                const errorMessage = error.message;
                SetError(errorMessage);
            });
    };
    const SignUpGithub = () => {

        signInWithPopup(auth, githubprovider)
            .then((result) => {
                const user = result.user;
                const userInfo = {
                    name: user.displayName,
                    email: user.email,
                    img: user.photoUR,
                }
                setUser(userInfo);
            }).catch((error) => {
                const errorMessage = error.message;
                SetError(errorMessage);
            });
    };
    const SignUpFacebook = () => {
        signInWithPopup(auth, facebookProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
            })
            .catch((error) => {
                const errorMessage = error.message;
                SetError(errorMessage);
            });
    };
    const createNewUser = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
          .then((result) => {
            const user = result.user;
            console.log(user);
            SetError('')
          })
          .catch((error) => {
            SetError(error.message)
          });
      }
    return (
        <div className="text-center">
            <h1 className="pb-3">Sign Up</h1>
            <div>
                <div className="input-icons">
                    <i className="fa fa-user icon"></i>
                    <input onChange={handlerEmailChange} className="input-field w-100 h-50 mb-2" type="text" placeholder="Email" />
                    <br />
                    <i className="fas fa-lock icon"></i>
                    <input onChange={handlerEmailpassword} className="input-field w-100 h-50" type="password" name="password" placeholder="Password" />
                </div>
                <Button onClick={createNewUser} className="w-100 button-login fb-bg">Sign Up</Button>
                <p className="pt-3">Or Sign Up With</p>
                <Row>
                    <Col sm={12} className="mb-2" onClick={SignUpGoogle}><Button className="button-login me-3 google-bg"> <i class="fab fa-google me-2"></i>Google</Button>
                        <Button onClick={SignUpFacebook} className="button-login fb-bg"><i class="fab fa-facebook-f me-2"></i>Facebook</Button></Col>
                    <Col sm={12}><Button onClick={SignUpGithub} className="button-login me-3 git-bg"><i class="fab fa-github me-2"></i>Github</Button>
                        <Button className="button-login lin-bg"><i class="fab fa-linkedin-in me-2"></i>Linkedin</Button></Col>
                </Row>
                <p className="text-danger">{error}</p>
            </div>
        </div>
    );
};

export default Register;